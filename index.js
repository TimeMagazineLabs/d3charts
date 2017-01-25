;(function() {
	var d3 = Object.assign({}, require("d3-selection"), require("d3-scale"), require("d3-axis"));
	var base = require("elastic-svg");

	require("./styles.less");

	var d3charts = function(selector, opts) {
		d3.select(selector).classed("d3chart", true);

		// add the title as a DOM element rather than messing with <text>
		if (opts.title) {
			d3.select(selector)
				.append("div")
			    .style("text-align", "center")
			    .classed("chart_title", true)
			    .html(opts.title);
		}

		opts = opts || {};

		// SETUP		
		var margin = opts.margin || { top: 0, right: 30, bottom: 50, left: 50 };

		var b = base(selector, opts),
			svg = d3.select(b.svg);

		var axes = {};

		// width and height are the dimensions of the graph NOT including the margins 
		var width =  b.width - margin.left - margin.right,
			height = b.height - margin.top - margin.bottom,
			original_width = width; // the starting width, used for scaling

		// layer for axes and anything else we want behind the dataviz
		var axes_layer = svg.append("g")
			.classed("axes", true)
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		// layer for dataviz: bars, lines, dots, etc.
		var data_layer = svg.append("g")
			.classed("data", true)
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


		// any function that is passed to opts.resize will invoke in the following generic resize function
		opts.onResize = resize_chart;


		// AXES

		// this pseudo-class contains both the scale and the physical axis
		/*
		@dir: "x" or "y" (for now)
		@opts: options for the axis: type, domain (or min and max), orientation, ticklength, id, rules (T/F for chart-wide ticks)
		*/

		var axis = function(dir, axis_opts) {
			if (!typeof dir === "string" || dir.toLowerCase() != "x" && dir.toLowerCase() != "y") {
				console.log("the d3charts axis() function must start with a string, either 'x' or 'y'");
				returnl
			}

			var scale, 	// the typical d3 scale object, eg. d3.scaleTime()
				ax, 	// the d3 object representing the axis
				axis_g; // the physical SVG object representing the axis

			// this is only invoked once, since it only assembles the DOM. See "Philosophy" section of the README
			function build_axis() {
				dir = dir.toLowerCase();
				axis_opts = axis_opts || {};

				// FILL IN OPTIONS

				// range (pixels the axis will span)
				axis_opts.range = axis_opts.range || (dir === "x" ? [0, width] : [height, 0]);

				// output range (domain) of axis
				axis_opts.domain = axis_opts.domain || [0, 1];

				if (typeof axis_opts.min !== "undefined") {
					axis_opts.domain[0] = axis_opts.min;	
				}

				if (typeof axis_opts.max !== "undefined") {
					axis_opts.domain[1] = axis_opts.max;	
				}

				axis_opts.type = axis_opts.type || "linear";
		
				axis_opts.orientation = axis_opts.orientation || (dir === "x"? "bottom" : "left");

				// if "rules" is true, this will be overridden
				axis_opts.tickLength = axis_opts.hasOwnProperty("tickLength")? axis_opts.tickLength : 10;


				// BUILD THE AXIS

				// currently supported times are time, ordinal, log, or linear (default)
				switch(axis_opts.type.toLowerCase()) {
					case "time": scale = d3.scaleTime(); break;
					case "ordinal": scale = d3.scaleBand().padding(0.1); break;
					case "log": scale = d3.scaleLog(); break;
					case "linear": scale = d3.scaleLinear(); break;
					default: scale = d3.scaleLinear(); break;
				}

				// input range
				if (axis_opts.type === "ordinal2") {
					scale.rangeRoundBands(axis_opts.range, .5).domain(axis_opts.domain);
				} else {
					scale.range(axis_opts.range).domain(axis_opts.domain);
				}
					
				
				if (dir == "x") {
					if (axis_opts.orientation == "top") {
						ax = d3.axisTop().scale(scale);
					} else {
						ax = d3.axisBottom().scale(scale);
					}
				} else {
					if (axis_opts.orientation == "right") {
						ax = d3.axisRight().scale(scale);
					} else {
						ax = d3.axisLeft().scale(scale);
					}
				}

				axis_g = axes_layer.append("g").attr("class", dir + " axis");

				if (axis_opts.tickFormat) {
					ax.tickFormat(axis_opts.tickFormat);
				}

				if (axis_opts.id) {
					axis_g.attr("id", axis_opts.id);	
				}

				if (axis_opts.label) {
					if (dir === "x") {
						var label = axis_g.append("text")
							.attr("x", width / 2)
							.attr("y", axis_opts.label_offset ? axis_opts.label_offset : 30)
							.style("text-anchor", "middle")
							.classed("axis_label", true)
							.html(axis_opts.label);
					} else {
						var label = axis_g.append("text")
							.attr("transform", function(d){
								return  axis_opts.label_offset ? "translate("+ axis_opts.label_offset +","+ height/2 +")rotate(-90)" : "translate("+ -30 +","+ height/2 +")rotate(-90)";
							})
							.style("text-anchor", "middle")
							.classed("axis_label", true)
							.html(axis_opts.label);
					}
				} else {
					var label = axis_g.append("text")
						.attr("transform", "translate(0," + (axis_opts.label_offset || height / 2) + ")rotate(-90)")
						.attr("x", 0)
						.attr("y", -30)
						.style("text-anchor", "middle")
						.attr("class", "axis_label")
						.text(axis_opts.label);
				}

				axis_g.call(ax);
			}

			// invoke this function any time you manually change an axis property, like tickFormat
			var update_axis = function(dur) {
				dur ? axis_g.transition().duration(dur).call(ax) : axis_g.call(ax);
			};


			// this is invoked on load and any time the graph is modified or resized. See "Philosophy" section of the README
			var draw_axis = function (w, h, z) {
				axis_opts.range = dir === "x" ? [0, w] : [h, 0];

				if (axis_opts.type === "ordinal2") {
					scale.rangeRoundBands(axis_opts.range, .5).domain(axis_opts.domain);
				} else {
					scale.range(axis_opts.range).domain(axis_opts.domain);
				}

				if (dir == "x" && axis_opts.orientation == "bottom") {
					axis_g.attr("transform", "translate(0," + h + ")");
					/*
					if (axis_opts.hasOwnProperty("intercept") && axes.y) {
						console.log(axes.y.scale(axis_opts.intercept)), h;
						axis_g.attr("transform", "translate(0," + axes.y.scale(axis_opts.intercept) + ")");
					} else if (axis_opts.orientation == "bottom") {
						axis_g.attr("transform", "translate(0," + h + ")");
					}
					*/
				} else if (dir == "y" && axis_opts.orientation == "right") {
					axis_g.attr("transform", "translate(" + w + ",0)");
				}

				if (dir == "x") {
					if (axis_opts.rules) {
						ax.tickSize(-height, 0);
					} else {
						ax.tickSize(-axis_opts.tickLength, 0);
					}
				} else {
					if (axis_opts.rules) {
						ax.tickSize(-width, 0);
					} else {
						ax.tickSize(-axis_opts.tickLength, 0);
					}					
				}

				// optional resize function passed to axis options
				if (axis_opts.resize) {
					axis_opts.resize(scale, axis_g, width, height, z);
				}

				update_axis();
			}
			
			build_axis();

			// this is invoke onload and any time the chart is resized
			draw_axis(width, height, 1);

			// we'll return this object (and store it in the chart object)
			var obj = {
				dir: dir,
				domain: scale.domain,
				scale: scale,
				axis: ax,
				update: update_axis,
				redraw: draw_axis
			};

			axes[dir] = obj;
			return obj;
		}

		function resize_chart() {
			var w = parseInt(svg.style('width'), 10) - margin.right - margin.left,
				h = parseInt(svg.style('height'), 10) - margin.top - margin.bottom,
				z = w / original_width;

			chart.width = width = w;
			chart.height = height = h;

			Object.keys(axes).forEach(function(dir) {
				axes[dir].redraw(w, h, z);
			});

			if (opts.resize) {
				opts.resize(w, h, z);
			}
		}

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

		var chart = {
			axes_layer: axes_layer,
			data_layer: data_layer,
			height: height,
			width: width,
			setResize: function(rf) {
				opts.resize = rf;
				rf();
			},
			resize: resize_chart,
			addAxis: axis,
			changeAspect: changeAspect,
			changeHeight: changeHeight
		};
		return chart;
	}

    module.exports = d3charts;

}());