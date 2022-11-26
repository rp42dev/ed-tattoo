const netlifyPlugin = require('preact-cli-plugin-netlify');
const processImages = require('./src/utils/imageProcessor');


module.exports = (config) => {
	netlifyPlugin(config);
	processImages();

	return config;
};
