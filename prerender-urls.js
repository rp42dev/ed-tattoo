const { generateFileList } = require('./src/utils/crawler');
const { join } = require('path');
const fs = require('fs');
const parseMD = require('parse-md').default;

const { SitemapStream, streamToPromise } = require('sitemap')
const { Readable } = require('stream')


const [about, contact, cover, gallery, home] = generateFileList(join(__dirname, 'content')).nodes;

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
	'Full body tattoos Lørenskog': 'I specialize in full body tattoos. Tattooing the whole body is a big project, let me help you with the design and the process.',
	'Full sleeve tattoos Lørenskog': 'Tattoo a full sleeve is a big project, let me help you with the design and the process. Contact me for a free consultation.',
	'Full back tattoos Lørenskog': 'Fancy a full back tattoo? I can help you with the design and the process. Contact me for a free consultation. And let me help you with your next tattoo.',
	'Full leg tattoos Lørenskog': 'I specialize in full leg tattoos. Tattooing the whole leg is a big project, let me help you with the design and the process.',
	'Realism tattoos Lørenskog': 'I specialize in realism tattoos. I love the contrast and dept that realism can give and I love to create new designs and styles.',
	'Gray wash tattoos Lørenskog': 'I specialize in gray wash tattoos. Gray wash is a technique that can give a tattoo a very realistic look. I love to create new designs and styles.',
	'New school tattoos Lørenskog': 'I specialize in new school tattoos. I love the bright colors and I love to create new designs and styles. I can create new school tattoo designs for you.',
	'Old school tattoos Lørenskog': 'I specialize in old school tattoos. I love the old school style and I love to create new designs and styles. I can create a custom tattoo design for you.',
	'Japanese tattoos Lørenskog': 'I specialize in japanese tattoos. Japanese tattoos are very popular and I love to create new designs and styles. I can create a custom tattoo design for you.',
	'Abstract tattoos Lørenskog': 'I specialize in abstract tattoos. I will create a custom abstract tattoo design for you. I can also make a tattoo design based on your ideas.',
	'New Tattoos in Lørenskog': 'I am a tattoo artist in Lørenskog. I will design and tattoo a new tattoo for you. Or we can work together to create a unique tattoo design.',
	'Color realism tattoos Lørenskog': 'Fancy a color realism tattoo? I can help you with the design and the process. Contact me for a free consultation. And let me help you with your next tattoo.',
	'Black and grey realism tattoos Lørenskog': 'I specialize in black and grey realism tattoos. I love contrast and dept that black and gray can give and I love to create new designs and styles.',
	'Lørenskog tattoo artist': 'Ed is a tattoo artist in Lørenskog. He specializes in black and grey tattoos, color tattoos, traditional tattoos, cover ups and custom tattoos.',
	'Lettering tattoos Lørenskog': 'Is it time for a new tattoo? Minimalist Tattoos and lettering tattoos are very popular. I can create a custom tattoo design for you. Contact me.',
};


function getRandomTitle(obj) {
	const keys = Object.keys(obj);
	const key = keys[keys.length * Math.random() << 0];
	return key;
}

module.exports = () => {
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
				description: list_of_descriptions['Black and grey realism tattoos Lørenskog'],
			}
		}];

	// adding gallery list posts page
	pages.push({
		url: '/gallery/',
		seo: {
			title: 'Gallery - Custom tattoos Lørenskog | Ed Tattoo',
			description: list_of_descriptions['Custom tattoos Lørenskog'],
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
		let title = getRandomTitle(list_of_descriptions);
		return {
			url: `/gallery/${item.id}/`,
			seo: {
				cover: item.details.cover,
				title: `Tattoo ${item.details.title} by Ed | ${title}`,
				description: `${list_of_descriptions[title.substring(title.indexOf("|") + 1)]}`,
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
