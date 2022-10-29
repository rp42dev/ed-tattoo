const { generateFileList } = require('./src/crawler');
const { join } = require('path');
const fs = require('fs');
const parseMD = require('parse-md').default;

const [blogs] = generateFileList(join(__dirname, 'content')).nodes;

module.exports = () => {

	const pages = [
		{
			url: '/',
			seo: {
				cover: '/assets/profile.jpg',
				title: 'Home',
				description: 'Home page of my website',
			},


			png: '../../assets/images/img2.png',
			webp: '../../assets/images/img2.png.webp',

			images: {
				titles: ['About', 'Me'],
				images: [
					{
						webp: '../../assets/images/img1-900.jpg.webp',
						jpg: '../../assets/images/img1-900.jpg',
					},
					{
						webp: '../../assets/images/img3-900.jpg.webp',
						jpg: '../../assets/images/img3-900.jpg',
					},
				]
			},
			data: blogs
		},
		{
			url: '/about',
			seo: {
				title: 'About',
				description: 'About page of my website',
			},
			data: {
				titles: ['About', 'About', 'Studio', 'Studio'],
				about: 
				[
					{	
						webp: '../../assets/images/img1-900.jpg.webp',
						jpg: '../../assets/images/img1-900.jpg',
					},
					{	
						title: 'About',
						webp: '../../assets/images/img3-900.jpg.webp',
						jpg: '../../assets/images/img3-900.jpg',
					}
				],
				studio: [
					{
						webp: '../../assets/images/img4-900.jpg.webp',
						jpg: '../../assets/images/img4-900.jpg',
					},
					{
						webp: '../../assets/images/img5-900.jpg.webp',
						jpg: '../../assets/images/img5-900.jpg',
					}
				]

			},
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
