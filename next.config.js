const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
module.exports = withPlugins([
	[withSass({})],
	{
		env: {
			nodeEnv: process.env.NODE_ENV
		}
	}
]);