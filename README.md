d3charts
========

Convenience functions for spinning up D3-powered charts

## Usage

	var d3charts = require("d3charts");

	// instantiate a new chart
	var ch(selector, opts);

This creates a new blank chart without any axes or anything else, inside a responsive SVG courtesy of [elastic-SVG](https://github.com/TimeMagazine/elastic-svg). There are two layers: `g.axes` and `g.data`.

### Options for base chart

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
+ *v0.0.5*: Fixed dependency