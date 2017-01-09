#!/usr/bin/env node

var fs = require("fs");
var browserify = require("browserify");

var b = browserify({ standalone: "d3charts" });
b.add('./index.js');
b.bundle().pipe(fs.createWriteStream("d3charts.js"));