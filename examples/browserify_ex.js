var d3 = require("d3");

var d3chart = require("../chart.js");

var collatz = function(N) {
	var points = [[0, N]],
		i = 1;

	while (N !== 1) {
		if (N % 2 === 0) {
			N /= 2;
		} else {
			N = 3 * N + 1;
		}
		points.push([i, N]);
		i += 1;
	}
	return points;
}

var lines = [];

for (var i = 1; i <= 10; i += 1) {
	lines.push(collatz(i));
}

var ch = d3chart("#chart");
var x = ch.addAxis("x", {
	domain: [0, d3.max(lines, function(d) { return d.length; })]
});

var y = ch.addAxis("y", {
	domain: [0, d3.max(lines, function(d) { return d3.max(d, function(dd) { return dd[1]; }); }) ]
});

var line = d3.svg.area()
    .x(function(d) { return x.scale(d[0]); })
    .y(function(d) { return y.scale(d[1]); });

ch.resize_layer.selectAll(".line")
	.data(lines)
	.enter()
	.append("path")
	.classed("line", true)
	.attr("d", line);