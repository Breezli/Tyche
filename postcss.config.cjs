/* eslint-env node */
module.exports = {
	plugins: [
		require('postcss-nested'),
		require('postcss-each-variables'),
		require('postcss-each')({
			plugins: {
				beforeEach: [require('postcss-for'), require('postcss-color-mix')],
			},
		}),
	],
	publicPath: process.env.NODE_ENV === 'production' ? '/Tyche/' : '/',
}
