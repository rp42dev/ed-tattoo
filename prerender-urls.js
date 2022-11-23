const { generateFileList } = require('./src/utils/crawler');
const { join } = require('path');
const fs = require('fs');
const parseMD = require('parse-md').default;

const { SitemapStream, streamToPromise } = require('sitemap')
const { Readable } = require('stream')

const writeSeoTags = require('./src/utils/writeSeoTags');


writeSeoTags(join(__dirname, 'content'));

module.exports = () => {
	const [about, contact, cover, gallery, home] = generateFileList(join(__dirname, 'content')).nodes;

	// Sort by date and Reverse the gallery array to get the latest post first
	gallery.edges.sort((a, b) => b.details.date - a.details.date);

	const pages = [
		{
			url: '/',
			seo: {
				cover: cover.edges[2].details.cover,
				title: home.edges[0].details.seotitle,
				description: home.edges[0].details.seodescription,
			},

			cover: cover.edges[2].details.cover,
			contactCover: cover.edges[1].details.cover,
			aboutSection: home.edges[0].details.homeSections[0],
			home: home,
			galleryData: gallery
		},
		{
			url: '/about',
			seo: {
				cover: cover.edges[0].details.cover,
				title: about.edges[0].details.seotitle,
				description: about.edges[0].details.seodescription,
			},

			cover: cover.edges[0].details.cover,
			about: parseMD(fs.readFileSync(join('content', 'about', 'about-me.md'), 'utf-8')),
			aboutSection: about.edges[0].details.aboutSections[0],
			studioSection: about.edges[0].details.studioSections[0],
			dataAbout: about,
		},
		{
			url: '/contact/',
			seo: {
				cover: cover.edges[1].details.cover,
				title: contact.edges[0].details.seotitle,
				description: contact.edges[0].details.seodescription,
			},
			data: {
				cover: cover.edges[1].details.cover,
			}

		},
		{
			url: '/contact/success',
			path: './build/contact/success/index.html',
			seo: {
				title: 'Black and grey realism tattoos Lørenskog | Ed Tattoo',
				description: 'I specialize in black and grey realism tattoos.I love contrast and dept that black and gray can give and I love to create new designs and styles.',
			}
		}];

	// adding gallery list posts page
	pages.push({
		url: '/gallery/',
		seo: {
			title: 'Gallery - Custom tattoos Lørenskog | Ed Tattoo',
			description: 'I create unique custom tattoos.I can also make a tattoo design based on your ideas.Or We can work together to create a unique tattoo design.',
		},
		galleryData: gallery
	});

	// adding gallery list posts page
	pages.push(...gallery.edges.map(item => {
		let data;
		if (item.format === 'md') {
			try {
				const { content } = parseMD(fs.readFileSync(join('content', 'gallery', item.id), 'utf-8'));
				data = {
					...item,
					content,
					seo: {
						title: `Gallery - ${item.details.seotitle} | Ed Tattoo`,
						description: item.details.seodescription,
					}
				};

				data = content;
			} catch (e) {
				data = {};
			}
		} else {
			data = fs.readFileSync(join('content', 'gallery', item.id), 'utf-8').replace(/---(.*(\r)?\n)*---/, '');
		}
		return {
			url: `/gallery/${item.id}/`,
			seo: {
				cover: item.details.cover,
				title: `Tattoo ${item.details.title} by Ed | ${item.details.seotitle}`,
				description: item.details.seodescription,
			},
			data: {
				details: item.details,
				content: data,
				next: gallery.edges[gallery.edges.indexOf(item) + 1],
				prev: gallery.edges[gallery.edges.indexOf(item) - 1],
			}
		};
	}));

	// An array with your links
	const links = [
		{ url: '/', changefreq: 'monthly', priority: 1 },
		{ url: '/about', changefreq: 'monthly', priority: 0.5 },
		{ url: '/contact', changefreq: 'monthly', priority: 0.3 },
		{
			url: '/gallery',
			changefreq: 'weekly',
			priority: 0.8,
		},

		...gallery.edges.map((item) => {
			return {
				url: `/gallery/${item.id}`,
				changefreq: 'yearly',
				priority: 0.6,
				img: [
					{
						url: item.details.cover,
						title: item.details.title
					}
				]
			}
		})
	]

	// Create a stream to write to
	const stream = new SitemapStream({ hostname: 'https://edtattoo.no' })

	// Return a promise that resolves with your XML string
	streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
		data.toString()
	).then((data) => {
		fs.writeFileSync('src/assets/sitemap.xml', data);
	})

	return pages;
};
