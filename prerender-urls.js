const { generateFileList } = require('./src/crawler');
const { join } = require('path');
const fs = require('fs');
const parseMD = require('parse-md').default;

const [about, aboutImages, blogs, home, studio, studioImages ] = generateFileList(join(__dirname, 'content')).nodes;


module.exports = () => {

	const pages = [
		{
			url: '/',
			seo: {
				cover: 'home.jpg',
				title: 'Home',
				description: 'Home page of my website',
			},

			images: aboutImages,
			content: parseMD(fs.readFileSync(join('content', 'home', 'ed-tattoo.md'), 'utf-8')),
			home: home,
			data: blogs
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

	// adding blogs list posts page
	pages.push({
		url: '/blogs/',
		seo: {
			title: 'Gallery',
			description: 'Gallery page of my website',
		},
		data: blogs
	});


	// adding all blog pages
	pages.push(...blogs.edges.map(blog => {
		let data;

		if (blog.format === 'md') {
			const { content } = parseMD(fs.readFileSync(join('content', 'blog', blog.id), 'utf-8'));
			data = content;
		} else {
			data = fs.readFileSync(join('content', 'blog', blog.id), 'utf-8').replace(/---(.*(\r)?\n)*---/, '');
		}
		return {
			url: `/blog/${blog.id}`,
			seo: {
				title: blog.details.title,
				description: data.substring(0, 160),
			},
			data: {
				details: blog.details,
				content: data
			}
		};
	}));

	return pages;
};
