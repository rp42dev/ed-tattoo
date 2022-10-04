const netlifyPlugin = require('preact-cli-plugin-netlify');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const processImages = require('./imageProcessor');


module.exports = (config, env) => {
	netlifyPlugin(config);
	processImages();


	env.production && !env.ssr && config.plugins.push(
		new ImageminPlugin({
			from: './build/assets/**',
			pngquant: {
				quality: '80'
			},
			
			plugins: [
				imageminMozjpeg({
					quality: 80,
					progressive: true
				})
			]
		})
	);
	return config;
};
