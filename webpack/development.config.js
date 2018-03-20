const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base.config');

module.exports = merge(base, {
	output: {
		path: __dirname + '/../dist',
		library: "d3charts",
		filename: "d3charts.js",
		libraryTarget: "window"
	},
	devtool: 'inline-source-map'
});