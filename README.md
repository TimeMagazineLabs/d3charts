D3 Chart Helper
========
v0.1.6

Convenience functions for spinning up d3-powered charts. Not an automatic charting tool, just a way for code-lovers to reduce tedium.

By @wilson428 and @davejohn

# Demo

Assuming you have a `<div>` in the body with the id "bar_chart":

	// Data thanks to http://harrypotter.answers.wikia.com/wiki/Top_200_most_named_harry_potter_characters_s
	var mentions = [ ["Harry", 18956], ["Ron", 6464], ["Hermione", 5486], ["Dumbledore", 2421], ["Hagrid", 2024], ["Snape", 1956], ["Voldemort", 1797], ["Sirius", 1471], ["Draco", 1198] ];

	var chart = d3charts("#bar_chart", {
	    margin: { top: 35, right: 20, bottom: 20, left: 35 },
	    aspect: 0.75,
	    onResize: update_chart,
	    title: "Most-mentioned Characters in <em>Harry Potter</em>"
	});

	var x = chart.addAxis("x", {
		domain: mentions.map(function(d) { return d[0]; }),
		type: "ordinal"
	});

	var y = chart.addAxis("y", {
		domain: [0, 20000],
		rules: true,
		tickFormat: function(d) { return (d / 1000) + "K" }
	});

	var bars = chart.data_layer.selectAll(".bar")
		.data(mentions)
		.enter()
		.append("rect")
	  	.attr("class", "bar");

	function update_chart() {	
		chart.data_layer.selectAll(".bar")
			.attr("x", function(d) {
				return x.scale(d[0]);
			})
			.attr("width", function(d) {
				return x.scale.bandwidth();
			})
			.attr("y", function(d) {
				console.log(d[1], y.scale(d[1]), chart.height)
				return y.scale(d[1]);
			})
			.attr("height", function(d) {
				return chart.height - y.scale(d[1]);
			})
	}
	update_chart();

# Discussion

The `d3charts` function creates a new blank chart without any axes or anything else, inside a responsive SVG courtesy of [elastic-SVG](https://github.com/TimeMagazine/elastic-svg). There are two layers: `g.axes_layer` and `g.data_layer`.

## Options for base chart

|property|description|default|
|--------|-------|-----------|
|margin  |margin around charts|`{top: 20, right: 50, bottom: 30, left: 30}`|
|title   |title of chart|`""`|

`opts` also accepts some arguments for `elastic-SVG`:

|property|description|default|
|--------|-------|-----------|
| width   |width of chart|container width|
| aspect  |height/width|0.618|
| height  |height of chart|width * 0.618|

## Change log
+ *v0.1.6*: Cleaned up imports and massively resized size of distributed builds
+ *v0.1.5*: Fires resize of `elastic-svg` after load
+ *v0.1.2*: Added `setDomain` for resetting the domain after construction
+ *v0.1.2*: Updated dependencies
+ *v0.1.1*: Updated dependencies
+ *v0.1.0*: Switched to webpack for build
+ *v0.0.9*: Updated dependencies
+ *v0.0.8*: Added y-axis label
+ *v0.0.7*: Added demos
+ *v0.0.6*: Compiles with d3.v4.js
+ *v0.0.5*: Fixed dependency