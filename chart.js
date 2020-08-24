import { select } from 'd3-selection';
import { transition } from 'd3-transition';
import { scaleLinear, scaleTime, scaleLog, scaleBand } from 'd3-scale'; 
import { axisLeft, axisRight, axisBottom, axisTop } from 'd3-axis'; 

import d3axis from '../d3axis';

import elasticSVG from 'elastic-svg';
import "./chart.scss";

function d3charts(selector, opts) {
	let element = select(selector);
	element.classed("d3chart", true);

	// add the title as a DOM element rather than messing with <text>
	if (opts.title) {
		element
			.append("div")
		    .style("text-align", "center")
		    .classed("chart_title", true)
		    .html(opts.title);
	}

	opts = opts || {};

	if (opts.hasOwnProperty('onResize')) {
		console.log("Don't pass `onResize` to d3charts because it overwrites the elasticSVG resize function. Please use `onChartResize`");
		return;
	}

	// SETUP
	let margin = opts.margin || { top: 0, right: 30, bottom: 50, left: 50 };

	let b = elasticSVG(selector, opts);
	let svg = select(b.svg);

	let axes = {};

	// width and height are the dimensions of the graph NOT including the margins 
	let width =  b.width - margin.left - margin.right;
	let height = b.height - margin.top - margin.bottom;
	let original_width = width; // the starting width, used for scaling

	// layer for axes and anything else we want behind the dataviz
	let axes_layer = svg.append("g").classed("axes", true); //.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// layer for dataviz: bars, lines, dots, etc.
	let data_layer = svg.append("g").classed("data", true).attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// any function that is passed to opts.onResize will invoke in the following generic onResize function
	// opts.genericResize = resize_chart;

	// AXES

	// this pseudo-class contains both the scale and the physical axis
	/*
	@dir: "x" or "y" (for now)
	@opts: options for the axis: type, domain (or min and max), orientation, ticklength, id, rules (T/F for chart-wide ticks)
	*/

	function addAxis(dir, axis_opts) {
		axis_opts.direction = dir;
		axis_opts.margin = opts.margin;
		axes[dir] = d3axis(b.svg, axis_opts);
		return axes[dir];
	}

	function resize_chart() {
		// let bbox = svg.node().getBoundingClientRect();

		let w = svg.node().clientWidth;
		let h = svg.node().clientHeight;

		if (!w || !h) {
			return;
		}

		chart.width = width = w - margin.right - margin.left;
		chart.height = height = h - margin.top - margin.bottom;

		Object.keys(axes).forEach(function(dir) {
			axes[dir].redraw(w, h);
		});

		if (opts.onChartResize && typeof opts.onChartResize == 'function') {
			opts.onChartResize(width, height);
		}
	}

	opts.onResize = resize_chart;

	function changeAspect(aspect) {
		b.changeAspect(aspect);			
	}

	function changeHeight(h) {
		b.changeHeight(h + margin.top + margin.bottom);
		chart.height = height = h;

		axes.forEach(function(axis) {
			axis.redraw(width, height);
		});
	}

	function changeWidth(w) {
		b.changeWidth(w + margin.left + margin.right);
		chart.width = width = w;

		axes.forEach(function(axis) {
			axis.redraw(width, height);
		});
	}

	var chart = {
		options: opts,
		axes_layer: axes_layer,
		data_layer: data_layer,
		height: height,
		width: width,
		setResize: function(f) {
			opts.onChartResize = f;
			resize_chart();
		},
		resize: resize_chart,
		addAxis: addAxis,
		changeAspect: changeAspect,
		// changeWidth: changeWidth,
		changeHeight: changeHeight,
		base: b
	};

	return chart;
}

export default d3charts