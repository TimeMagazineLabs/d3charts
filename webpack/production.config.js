const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const base = require('./base.config');

module.exports = merge(base, {
	output: {
		path: __dirname + '/../dist',
		library: "d3charts",
		filename: "d3charts.min.js",
		libraryTarget: "window"
	},
	plugins: [
		new UglifyJsPlugin({
			cache: true,
			parallel: true,
			uglifyOptions: {
				compress: false,
				ecma: 6,
				mangle: true
			},
			sourceMap: true
		})
	]
});