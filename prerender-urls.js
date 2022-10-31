const { generateFileList } = require('./src/crawler');
const { join } = require('path');
const fs = require('fs');
const parseMD = require('parse-md').default;

const [about, aboutImages, gallery, home, studio, studioImages ] = generateFileList(join(__dirname, 'content')).nodes;


module.exports = () => {

	const pages = [
		{
			url: '/',
			seo: {
				cover: home.edges[0].details.cover,
				title: 'Home',
				description: 'Home page of my website',
			},

			image: home.edges[0].details.cover,
			images: aboutImages,
			content: parseMD(fs.readFileSync(join('content', 'home', 'ed-tattoo.md'), 'utf-8')),
			home: home,
			data: gallery
		},
		{
			url: '/about',
			seo: {
				title: 'About',
				description: 'About page of my website',
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
				title: 'Contact',
				description: 'Contact page of my website',
			}
		},
		{
			url: '/contact/success',
			path: './build/contact/success/index.html',
			seo: {
				title: 'Contact',
				description: 'Contact page of my website',
			}
		}];

	// adding gallery list posts page
	pages.push({
		url: '/gallery/',
		seo: {
			title: 'Gallery',
			description: 'Gallery page of my website',
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
				title: item.title,
				description: data.substring(0, 160),
			},
			data: {
				details: item.details,
				content: data,
			}
		};
	}));

	return pages;
};
