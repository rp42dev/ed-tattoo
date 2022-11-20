const { generateFileList } = require('./src/crawler');
const { join } = require('path');
const fs = require('fs');
const parseMD = require('parse-md').default;

const { SitemapStream, streamToPromise } = require('sitemap')
const { Readable } = require('stream')


const [about, aboutImages, contact, gallery, home, studio, studioImages] = generateFileList(join(__dirname, 'content')).nodes;


module.exports = () => {
	const pages = [
		{
			url: '/',
			seo: {
				cover: home.edges[0].details.cover,
				title: 'Ed Tattoo Oslo',
				description: 'Tattoo studio in Lørenskog Norway near Oslo. We specialize in custom tattoos and cover-ups. Contact: +47 465 88 983. Address: Hans Egedes vei 12, 1470 Lørenskog, Norway',
			},

			contactCover: contact.edges[0].details.cover,
			image: home.edges[0].details.cover,
			images: aboutImages,
			content: parseMD(fs.readFileSync(join('content', 'home', 'ed-tattoo.md'), 'utf-8')),
			home: home,
			data: gallery
		},
		{
			url: '/about',
			seo: {
				title: 'About Ed Tattoo',
				description: "Tattoo studio in Lørenskog. My style is black and grey realism, I'm always happy to do custom tattoos and cover ups. Contact: +47 465 88 983.",
			},


			aboutImages: aboutImages,
			studioImages: studioImages,


			about: parseMD(fs.readFileSync(join('content', 'about', 'about-me.md'), 'utf-8')),
			studio: parseMD(fs.readFileSync(join('content', 'studio', 'the-studio.md'), 'utf-8')),
			dataAbout: about,
			dataStudio: studio
		},
		{
			url: '/contact/',
			seo: {
				title: 'Contact Ed Tattoo Oslo',
				description: 'Contact: +47 465 88 983. Address: Hans Egedes vei 12, Lorenskog 1470, Oslo, Norway. Email: edgarstattoo@gmail.com. Parking: Free parking in front of the studio.',
			},
			data: {
				cover: contact.edges[0].details.cover,
			}

		},
		{
			url: '/contact/success',
			path: './build/contact/success/index.html',
			seo: {
				title: 'Contact Ed Tattoo Oslo',
				description: 'Ed Tattoo Oslo is a tattoo studio located in Lørenskog near Oslo, Norway. Contact: +47 465 88 983. Address: Hans Egedes vei 12, Lorenskog 1470, Oslo, Norway.',
			}
		}];

	// adding gallery list posts page
	pages.push({
		url: '/gallery/',
		seo: {
			title: 'Gallery Ed Tattoo Oslo',
			description: 'Ed Tattoo Oslo is a tattoo studio located in Lørenskog near Oslo, Norway.Contact: +47 465 88 983. We specialize in custom tattoos and cover ups. Car parking available.',
		},
		data: gallery
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
			url: `/image/${item.id}/`,
			seo: {
				title: `${item.title} - Ed Tattoo Oslo`,
				description: 'Ed Tattoo Oslo is a tattoo studio located in Lørenskog near Oslo, Norway Contact: +47 465 88 983.. We specialize in custom tattoos and cover ups. Car parking available.',
			},
			data: {
				details: item.details,
				content: data,
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
				url: `/image/${item.id}`,
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
