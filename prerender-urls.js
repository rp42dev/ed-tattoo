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
				canonical: 'https://www.edtattoo.no/',
				cover: `https://www.edtattoo.no/${home.edges[0].details.homeSections[0].aboutImages[0].image}`,
				title: home.edges[0].details.seotitle,
				imageAlt: 'Black and grey realism tattoos Lørenskog | Ed Tattoo',
				description: home.edges[0].details.seodescription,
			},

			cover: cover.edges[2].details.cover,
			contactCover: cover.edges[1].details.cover,
			aboutSection: home.edges[0].details.homeSections[0],
			specialSection: home.edges[0].details.homeSections[1],
			home: home,
			galleryData: gallery
		},
		{
			url: '/about/',
			seo: {
				canonical: 'https://www.edtattoo.no/about/',
				cover: `https://www.edtattoo.no/${about.edges[0].details.aboutSections[0].aboutImages[0].image}`,
				title: about.edges[0].details.seotitle,
				imageAlt: 'Tattoo studio Lørenskog | Ed Tattoo',
				description: about.edges[0].details.seodescription,
			},
			title: about.edges[0].details.title,
			cover: cover.edges[0].details.cover,
			about: parseMD(fs.readFileSync(join('content', 'about', 'about-me.md'), 'utf-8')),
			aboutSection: about.edges[0].details.aboutSections[0],
			studioSection: about.edges[0].details.studioSections[0],
			dataAbout: about,
		},
		{
			url: '/contact/',
			seo: {
				canonical: 'https://edtattoo.no/contact/',
				cover: `https://www.edtattoo.no/${cover.edges[1].details.cover}`,
				title: contact.edges[0].details.seotitle,
				imageAlt: 'Tattoo studio Lørenskog | Ed Tattoo',
				description: contact.edges[0].details.seodescription,
			},
			data: {
				cover: cover.edges[1].details.cover,
			}

		},
		{
			url: '/contact/success/',
			path: './build/contact/success/index.html',
			seo: {
				canonical: 'https://edtattoo.no/contact/success/',
				title: 'Black and grey realism tattoos Lørenskog | Ed Tattoo',
				description: 'I specialize in black and grey realism tattoos.I love contrast and dept that black and gray can give and I love to create new designs and styles.',
			},
			data: {
				cover: cover.edges[1].details.cover,
			}
		}];

	// adding gallery list posts page
	pages.push({
		url: '/gallery/',
		seo: {
			canonical: 'https://www.edtattoo.no/gallery/',
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
				data = content;
			} catch (e) {
				data = {};
			}
		} else {
			data = fs.readFileSync(join('content', 'gallery', item.id), 'utf-8').replace(/---(.*(\r)?\n)*---/, '');
		}

		return {
			url: `/gallery/${item.slug}`,
			seo: {
				keywords: item.details.tags.slice(0, 147)+ '...',
				canonical: `https://www.edtattoo.no/gallery/${item.slug}/`,
				cover: `https://www.edtattoo.no/${item.details.cover}`,
				imageAlt: item.details.title + ' | Ed Tattoo',
				title: item.details.seotitle,
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
		{ url: '', lastmod: home.edges[0].details.date },
		{ url: '/about/', lastmod: about.edges[0].details.date },
		{ url: '/contact/', lastmod: contact.edges[0].details.date },
		{
			url: '/gallery/',
			lastmod: new Date().toISOString()
		},

		...gallery.edges.map((item) => {
			return {
				url: `/gallery/${item.slug}/`,
				lastmod: item.details.date,
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
		fs.writeFileSync('src/static/sitemap.xml', data);
	})

	return pages;
};
