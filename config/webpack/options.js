const config = require('config');
const options = {
	rules: {
		js: {
			eslint: config.get('code.validation.eslint.live'),
		},
		ts: false,
		scss: {
			stylelint: config.get('code.validation.stylelint.live'),
		},
		hbs: false,
		woff: true,
		image: true,
	},
	features: {
		banner: true,
		bundleAnalyzer: false,
	},
};

module.exports = options;
