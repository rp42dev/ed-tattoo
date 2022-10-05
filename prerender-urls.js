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
			data: blogs
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
			title: 'Blogs',
			description: 'Blogs page of my website',
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
