const { generateFileList } = require('./src/utils/crawler');
const { join } = require('path');
const fs = require('fs');
const parseMD = require('parse-md').default;

const { SitemapStream, streamToPromise } = require('sitemap')
const { Readable } = require('stream')


const [about, aboutImages, contact, gallery, home, studio, studioImages] = generateFileList(join(__dirname, 'content')).nodes;

const list_of_descriptions = {
	'Black and grey tattoos Lørenskog': 'I specialize in black and grey tattoos. I love contrast and dept that black and gray can give and I love to create new designs and styles.',
	'Tattoo cover ups Lørenskog': 'We cover up old tattoos, and make them look new again. we will make sure that the new tattoo is a perfect match for the old one.',
	'Tattoo designs Lørenskog': 'I can create a custom tattoo design for you. I can also make a tattoo design based on your ideas. We can work together to create a unique tattoo design.',
	'Traditional tattoo Lørenskog': 'I specialize in traditional tattoos. I love the old school style and I love to create new designs and styles. I can create a custom tattoo design for you.',
	'Custom tattoos Lørenskog': 'I create unique custom tattoos. I can also make a tattoo design based on your ideas. Or We can work together to create a unique tattoo design.',
	'Color tattoos Lørenskog': 'I specialize in color tattoos. I love the bright colors and I love to create new designs and styles. I can create a custom tattoo design for you.',
	'Tattoo studio Lørenskog': 'We specialize in custom tattoos. We can create a custom tattoo design for you. We can also make a tattoo design based on your ideas.',
	'Tattoo artist Lørenskog': 'I specialize in black and grey tattoos, color tattoos, traditional tattoos, cover ups and custom tattoos, I can create a custom tattoo design for you.',
	'Tattoo artist Lørenskog near Oslo': 'I am a tattoo artist in Lørenskog near Oslo. I specialize in black and grey tattoos, color tattoos, traditional tattoos, cover ups and custom tattoos.',
	'Tattoo studio Lørenskog near Oslo': 'We specialize in custom tattoos. We can create a custom tattoo design for you. We can also make a tattoo design based on your ideas.',
}
	
const list_of_titles = {
	'Black and grey tattoos Lørenskog': 'Black and grey tattoos Lørenskog',
	'Tattoo cover ups Lørenskog': 'Tattoo cover ups Lørenskog',
	'Tattoo designs Lørenskog': 'Tattoo designs Lørenskog',
	'Traditional tattoo Lørenskog': 'Traditional tattoo Lørenskog',
	'Custom tattoos Lørenskog': 'Custom tattoos Lørenskog',
	'Color tattoos Lørenskog': 'Color tattoos Lørenskog',
	'Tattoo studio Lørenskog': 'Tattoo studio Lørenskog',
	'Tattoo artist Lørenskog': 'Tattoo artist Lørenskog',
	'Tattoo artist Lørenskog near Oslo': 'Tattoo artist Lørenskog near Oslo',
	'Tattoo studio Lørenskog near Oslo': 'Tattoo studio Lørenskog near Oslo',
}


module.exports = () => {
	const pages = [
		{
			url: '/',
			seo: {
				cover: home.edges[0].details.cover,
				title: home.edges[0].details.sep-title,
				description: home.edges[0].details.seo-description,
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
				title: 'About - Ed Tattoo | Tattoo Artist Lørenskog',
				description: "I specialize in Black and grey realism, Color Tattoos, Black and gary tattoo designs and Unique tattoo designs. Contact: +47 465 88 983.",
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
				title: 'Contact - Ed Tattoo | Custom Tattoos In Lorenskog Norway',
				description: 'Contact: +47 465 88 983. Address: Hans Egedes vei 12, Lorenskog 1470, Oslo, Norway.  Parking: Free parking in front of the studio.',
			},
			data: {
				cover: contact.edges[0].details.cover,
			}

		},
		{
			url: '/contact/success',
			path: './build/contact/success/index.html',
			seo: {
				title: 'Ed Tattoo | tattoo studio in Lørenskog',
				description: 'Ed Tattoo is a tattoo studio located in Lørenskog near Oslo, Norway. ',
			}
		}];

	// adding gallery list posts page
	pages.push({
		url: '/gallery/',
		seo: {
			title: 'Gallery Ed Tattoo',
			description: 'Ed Tattoo Lørenskog - Tattoo studio Lørenskog, near Oslo. We specialize in custom tattoos and cover ups. Car parking available. Contact: +47 465 88 983.',
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
			url: `/gallery/${item.id}/`,
			seo: {
				title: `${item.title} - Ed Tattoo Oslo`,
				description: 'Ed Tattoo Oslo is a tattoo studio located in Lørenskog near Oslo, Norway Contact: +47 465 88 983.. We specialize in custom tattoos and cover ups. Car parking available.',
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
