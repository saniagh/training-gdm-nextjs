const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
});

module.exports = withPlugins([
	[withSass(withImages(withBundleAnalyzer({})))],
	{
		env: {
			nodeEnv: process.env.NODE_ENV
		}
	}
]);