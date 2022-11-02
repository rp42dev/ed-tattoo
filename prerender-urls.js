const { generateFileList } = require('./src/crawler');
const { join } = require('path');
const fs = require('fs');
const parseMD = require('parse-md').default;

const [about, aboutImages, contact, gallery, home, studio, studioImages ] = generateFileList(join(__dirname, 'content')).nodes;


module.exports = () => {

	const pages = [
		{
			url: '/',
			seo: {
				cover: home.edges[0].details.cover,
				title: 'Ed Tattoo Oslo',
				description: 'The tattoo studio in Oslo, Norway. We specialize in custom tattoos and cover-ups. Contact: +47 465 8 982. Address: Hans Egedes vei 12, Lorenskog 1470, Oslo.',
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
				title: 'About Ed Tattoo Oslo',
				description: 'Ed Tattoo Oslo is a tattoo studio located in Oslo, Norway. Contact: +47 465 8 982. We specialize in custom tattoos and cover ups. Car parking available.',
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
				description: 'Ed Tattoo Oslo is a tattoo studio located in Oslo, Norway. Contact: +47 465 8 982. Address: Hans Egedes vei 12, Lorenskog 1470, Oslo, Norway.',
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
				description: 'Ed Tattoo Oslo is a tattoo studio located in Oslo, Norway. Contact: +47 465 8 982. Address: Hans Egedes vei 12, Lorenskog 1470, Oslo, Norway.',
			}
		}];

	// adding gallery list posts page
	pages.push({
		url: '/gallery/',
		seo: {
			title: 'Gallery Ed Tattoo Oslo',
			description: 'Ed Tattoo Oslo is a tattoo studio located in Oslo, Norway.Contact: +47 465 8 982. We specialize in custom tattoos and cover ups. Car parking available.',
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
				description: 'Ed Tattoo Oslo is a tattoo studio located in Oslo, Norway Contact: +47 465 8 982.. We specialize in custom tattoos and cover ups. Car parking available.',
			},
			data: {
				details: item.details,
				content: data,
			}
		};
	}));

	return pages;
};
