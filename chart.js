;(function(d3) {
	// allow for use in Node/browserify or not
	if (typeof module !== "undefined") {
		var d3 = require("d3");
	} else {
		d3 = window.d3;
	}

	var chart = function(container, opts) {
		var axes = [];

		// SETUP
		opts = opts || {};
		container = container || "body";
		container = typeof container === "string" ? d3.select(container) : container;

		var margin = opts.margin || {top: 20, right: 50, bottom: 30, left: 30};

		var width = opts.width || parseInt(container.style('width'), 10) - margin.right - margin.left,
			height = opts.height || parseInt(container.style('height'), 10) - margin.top - margin.bottom,
			original_width = width, // for scaling + resizing
			backdrop;

		if (opts.title) {
			container.append("text")
			    .attr("x", width / 2)
			    .attr("y", 25)
			    .style("text-anchor", "middle")
			    .classed("chart_title", true)
			    .text(opts.title);
		}

		// layer for axes, already offset by margins so that 0,0 on x-y axis is the bottom left corner
		var layer = container.append("g")
			.classed("chart", true)
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		var axis = function(dir, opts) {
			dir = dir.toLowerCase() || "x";
			opts = opts || {};

			// output range (domain) of axis
			opts.domain = opts.domain || (opts.data ? d3.extent(opts.data) : [0, 1]);
			if (typeof opts.min !== "undefined") {
				opts.domain[0] = opts.min;	
			}
			if (typeof opts.max !== "undefined") {
				opts.domain[1] = opts.max;	
			}

			var scale;

			// currently supported times are time, ordinal, log, or linear (default)
			switch(opts.type || "linear") {
				case "time": scale = d3.time.scale(); break;
				case "ordinal": scale = d3.scale.ordinal(); break;
				case "log": scale = d3.scale.log(); break;
				default: scale = d3.scale.linear(); break;
			}

			// input range
			if (opts.type === "ordinal") {
				if (opts.range) {
					//scale.rangeRoundBands(opts.range).domain(opts.domain);
					scale.rangePoints(opts.range).domain(opts.domain);
				} else {
					scale.rangePoints(dir === "x" ? [0, width] : [height, 0]).domain(opts.domain);
				}
			} else {
				if (opts.range) {
					scale.range(opts.range).domain(opts.domain);
				} else {					
					scale.range(dir === "x" ? [0, width] : [height, 0]).domain(opts.domain);
				}
			}
				
			// the d3 object representing the axis
			var ax = d3.svg.axis().scale(scale);

			// the physical SVG object representing the axis
			var axis_g = layer.append("g").attr("class", dir + " axis");

			if (opts.tick_format) {
				ax.tickFormat(opts.tick_format);
			}

			if (opts.id) {
				axis_g.attr("id", opts.id);	
			}

			opts.translation = [0, 0];

			if (dir === "x") {
				opts.orientation = opts.orientation || "bottom";

				if (!opts.intersection) {
					opts.intersection = function() {
						return opts.orientation === "bottom" ? height : 0;
					}
				}

				opts.translate = function() {
					axis_g.select(".domain").attr("transform", "translate(0," + opts.intersection() + ")");
				}				

				if (opts.label) {
					var label = axis_g.append("text")
					    .attr("x", width)
					    .attr("y", opts.label_offset ? opts.label_offset : (opts.orientation === "top" ? -25 : 25))
					    .style("text-anchor", "end")
					    .classed("axis_label", true)
					    .text(opts.label);
				}
			} else {
				opts.orientation = opts.orientation || "left";

				if (!opts.intersection) {
					opts.intersection = function() {
						return opts.orientation === "left" ? 0 : width;
					}
				}

				opts.translate = function() {
					axis_g.attr("transform", "translate(" + opts.intersection() + ", 0)");
				}	

				if (opts.label) {
					var label = axis_g.append("text")
					    .attr("transform", "translate(" + (opts.label_offset || 0) + ",0)rotate(-90)")
					    .attr("x", 0)
					    .attr("y", 5)
					    .attr("dy", ".71em")
					    .style("text-anchor", "end")
					    .attr("class", "axis_label")
					    .text(opts.label);
				}
			}

			opts.translate();

			ax.orient(opts.orientation);

			axis_g.call(ax);

			var update = function(dur) {
				dur ? axis_g.transition().duration(dur).call(ax) : axis_g.call(ax);
			};

			var resize_axis = function (w, h, z) {
				if (opts.type === "ordinal") {
					scale
						//.rangeRoundBands(dir === "x" ? [0, width] : [height, 0])
						.rangePoints(dir === "x" ? [0, w] : [h, 0]);
				} else {
					scale.range(dir === "x" ? [0, width] : [height, 0]);
				}

				if (opts.resize) {
					opts.resize(scale, axis_g, width, height, z);
				}

				opts.translate();

				update();			
			}

			// we'll return this object (and store it in the chart object)
			var obj = {
				scale: scale,
				axis: ax,
				update: update,
				resize: resize_axis,
				label: label
			};

			axes.push(obj);
			return obj;
		}

		// anything on this sublayer will scale down with a change in screen size
		// the axes should NOT be scaled if that chart resizes. It's much better to resize them directly to allow for the ticks to recalculate
		// thus, the axes belong to "layer", not "resize_layer"
		var resize_layer = container.append("g").classed("resizable", true).attr("transform", "translate(" + margin.left + "," + margin.top + ")");


		function resize_chart() {
			var w = parseInt(container.style('width'), 10) - margin.right - margin.left,
				h = parseInt(container.style('height'), 10) - margin.top - margin.bottom,
				z = w / original_width;

			width = w;
			height = h;

			//resize_layer.attr("transform", "scale(" + z + ",1)");

			axes.forEach(function(obj) {
				obj.resize(w, h, z);
			});

			if (opts.resize) {
				opts.resize(w, h, z);
			}

			if (backdrop) {
				drawBackdrop(backdrop[0]);
			}
		}

		function drawBackdrop(type) {
			backdrop = [type];
			//container.select(".backdrop").remove();

			if (type == "full" || type == "large") {
				container.selectAll(".backdrop").data(backdrop).enter().insert("rect", ":first-child").attr("class", "backdrop");
			} else {
				layer.selectAll(".backdrop").data(backdrop).enter().insert("rect", ":first-child").attr("class", "backdrop");				
			}

			if (type == "full" || type == "large") {
				container.selectAll(".backdrop")
					.attr("x", 0)
					.attr("y", 0)
					.attr("width", parseInt(container.style('width'), 10))
					.attr("height", parseInt(container.style('height'), 10));
			} else {
				layer.selectAll(".backdrop")
					.attr("x", 0)
					.attr("y", 0)
					.attr("width", width)
					.attr("height", height);				
			}
		}

		addResizeEvent(resize_chart, 250);
		
		return {
			axis_layer: layer,
			resize_layer: resize_layer,
			height: height,
			width: width,
			setResize: function(rf) {
				opts.resize = rf;
			},
			addAxis: axis,
			backdrop: drawBackdrop
		}
	}

	// make this compatible with browserify without requiring it
	if (typeof module !== "undefined") {
		module.exports = chart;
	} else {
		window.d3chart = chart;
	}

	// http://stackoverflow.com/questions/3339825/what-is-the-best-practise-to-not-to-override-other-bound-functions-to-window-onr
	function addResizeEvent(func, dur) {
		var resizeTimer,
	    	oldResize = window.onresize;
	    	
	    window.onresize = function () {
			clearTimeout(resizeTimer);
	        if (typeof oldResize === 'function') {
	            oldResize();
	        }

			resizeTimer = setTimeout(function() {
				func();
			}, dur || 250);
	    };
	}

}());