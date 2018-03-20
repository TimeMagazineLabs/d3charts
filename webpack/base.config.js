const webpack = require('webpack'); //to access built-in plugins
const autoprefixer = require('autoprefixer')

module.exports = {
	entry: [ "babel-polyfill", "./d3charts.js" ],
	output: {
		path: __dirname + '/../dist',
		library: "d3charts",
		libraryTarget: "window"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options: {
					presets: [ [ 'env', { modules: false, loose: true	} ] ]
				}
			},
			{
				test: /\.scss$/,
				loaders: [
					'style-loader', 'css-loader', 'sass-loader',
					{ loader: 'postcss-loader', options: { plugins: () => [ autoprefixer ] }}
				]
			}
		]
	}
};