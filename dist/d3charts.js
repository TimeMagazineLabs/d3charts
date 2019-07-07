var d3charts =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/.registry.npmjs.org/@babel/runtime/7.4.5/node_modules/@babel/runtime/helpers/typeof.js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /Users/wilson/Dropbox/Private/time/apps/development/passing_the_torch/node_modules/.registry.npmjs.org/@babel/runtime/7.4.5/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../../node_modules/.registry.npmjs.org/css-loader/3.0.0_webpack@4.35.0/node_modules/css-loader/dist/cjs.js?!../../node_modules/.registry.npmjs.org/sass-loader/7.1.0_webpack@4.35.0/node_modules/sass-loader/lib/loader.js!../../node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js?!./styles.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/wilson/Dropbox/Private/time/apps/development/passing_the_torch/node_modules/.registry.npmjs.org/css-loader/3.0.0_webpack@4.35.0/node_modules/css-loader/dist/cjs.js??ref--7-1!/Users/wilson/Dropbox/Private/time/apps/development/passing_the_torch/node_modules/.registry.npmjs.org/sass-loader/7.1.0_webpack@4.35.0/node_modules/sass-loader/lib/loader.js!/Users/wilson/Dropbox/Private/time/apps/development/passing_the_torch/node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src??postcss!./styles.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.registry.npmjs.org/css-loader/3.0.0_webpack@4.35.0/node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/.registry.npmjs.org/css-loader/3.0.0_webpack@4.35.0/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".d3chart {\n  background-color: #EEE; }\n  .d3chart .axis path, .d3chart .axis line {\n    fill: none;\n    stroke: white;\n    stroke-width: 1px;\n    shape-rendering: crispEdges; }\n  .d3chart .axis text {\n    font-size: 13px;\n    font-family: Helvetica, Arial, sans-serif; }\n  .d3chart .axis .domain {\n    stroke-width: 2px; }\n  .d3chart .chart_title {\n    padding: 15px 0 5px 0; }\n  .d3chart .axis_label {\n    fill: black; }\n", ""]);


/***/ }),

/***/ "../../node_modules/.registry.npmjs.org/css-loader/3.0.0_webpack@4.35.0/node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /Users/wilson/Dropbox/Private/time/apps/development/passing_the_torch/node_modules/.registry.npmjs.org/css-loader/3.0.0_webpack@4.35.0/node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../../node_modules/.registry.npmjs.org/style-loader/0.23.1/node_modules/style-loader/lib/addStyles.js":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /Users/wilson/Dropbox/Private/time/apps/development/passing_the_torch/node_modules/.registry.npmjs.org/style-loader/0.23.1/node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../../node_modules/.registry.npmjs.org/style-loader/0.23.1/node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../../node_modules/.registry.npmjs.org/style-loader/0.23.1/node_modules/style-loader/lib/urls.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /Users/wilson/Dropbox/Private/time/apps/development/passing_the_torch/node_modules/.registry.npmjs.org/style-loader/0.23.1/node_modules/style-loader/lib/urls.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return d3charts; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/.registry.npmjs.org/@babel/runtime/7.4.5/node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-transition */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-scale */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/index.js");
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-axis */ "./node_modules/.registry.npmjs.org/d3-axis/1.0.12/node_modules/d3-axis/src/index.js");
/* harmony import */ var elastic_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! elastic-svg */ "./node_modules/.registry.npmjs.org/elastic-svg/0.0.9/node_modules/elastic-svg/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.scss */ "./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_6__);







function d3charts(selector, opts) {
  Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"])(selector).classed("d3chart", true); // add the title as a DOM element rather than messing with <text>

  if (opts.title) {
    Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"])(selector).append("div").style("text-align", "center").classed("chart_title", true).html(opts.title);
  }

  opts = opts || {}; // SETUP		

  var margin = opts.margin || {
    top: 0,
    right: 30,
    bottom: 50,
    left: 50
  };
  var b = Object(elastic_svg__WEBPACK_IMPORTED_MODULE_5__["default"])(selector, opts),
      svg = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"])(b.svg);
  var axes = {}; // width and height are the dimensions of the graph NOT including the margins 

  var width = b.width - margin.left - margin.right,
      height = b.height - margin.top - margin.bottom,
      original_width = width; // the starting width, used for scaling
  // layer for axes and anything else we want behind the dataviz

  var axes_layer = svg.append("g").classed("axes", true).attr("transform", "translate(" + margin.left + "," + margin.top + ")"); // layer for dataviz: bars, lines, dots, etc.

  var data_layer = svg.append("g").classed("data", true).attr("transform", "translate(" + margin.left + "," + margin.top + ")"); // any function that is passed to opts.resize will invoke in the following generic resize function

  opts.onResize = resize_chart; // AXES
  // this pseudo-class contains both the scale and the physical axis

  /*
  @dir: "x" or "y" (for now)
  @opts: options for the axis: type, domain (or min and max), orientation, ticklength, id, rules (T/F for chart-wide ticks)
  */

  var axis = function axis(dir, axis_opts) {
    if (!_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(dir) === "string" || dir.toLowerCase() != "x" && dir.toLowerCase() != "y") {
      console.log("the d3charts axis() function must start with a string, either 'x' or 'y'");
      returnl;
    }

    var scale, // the typical d3 scale object, eg. scaleTime()
    ax, // the d3 object representing the axis
    axis_g; // the physical SVG object representing the axis
    // this is only invoked once, since it only assembles the DOM. See "Philosophy" section of the README

    function build_axis() {
      dir = dir.toLowerCase();
      axis_opts = axis_opts || {}; // FILL IN OPTIONS
      // range (pixels the axis will span)

      axis_opts.range = axis_opts.range || (dir === "x" ? [0, width] : [height, 0]); // output range (domain) of axis

      axis_opts.domain = axis_opts.domain || [0, 1];

      if (typeof axis_opts.min !== "undefined") {
        axis_opts.domain[0] = axis_opts.min;
      }

      if (typeof axis_opts.max !== "undefined") {
        axis_opts.domain[1] = axis_opts.max;
      }

      axis_opts.type = axis_opts.type || "linear";
      axis_opts.orientation = axis_opts.orientation || (dir === "x" ? "bottom" : "left"); // if "rules" is true, this will be overridden

      axis_opts.tickLength = axis_opts.hasOwnProperty("tickLength") ? axis_opts.tickLength : 10; // BUILD THE AXIS
      // currently supported times are time, ordinal, log, or linear (default)

      switch (axis_opts.type.toLowerCase()) {
        case "time":
          scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_3__["scaleTime"])();
          break;

        case "ordinal":
          scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_3__["scaleBand"])().padding(0.1);
          break;

        case "log":
          scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_3__["scaleLog"])(axis_opts.log_base || 2);
          break;

        case "linear":
          scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"])();
          break;

        default:
          scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"])();
          break;
      } // input range


      if (axis_opts.type === "ordinal2") {
        scale.rangeRoundBands(axis_opts.range, .5).domain(axis_opts.domain);
      } else {
        scale.range(axis_opts.range).domain(axis_opts.domain);
      }

      if (dir == "x") {
        if (axis_opts.orientation == "top") {
          ax = Object(d3_axis__WEBPACK_IMPORTED_MODULE_4__["axisTop"])().scale(scale);
        } else {
          ax = Object(d3_axis__WEBPACK_IMPORTED_MODULE_4__["axisBottom"])().scale(scale);
        }
      } else {
        if (axis_opts.orientation == "right") {
          ax = Object(d3_axis__WEBPACK_IMPORTED_MODULE_4__["axisRight"])().scale(scale);
        } else {
          ax = Object(d3_axis__WEBPACK_IMPORTED_MODULE_4__["axisLeft"])().scale(scale);
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
          var label = axis_g.append("text").attr("x", width / 2).attr("y", axis_opts.label_offset ? axis_opts.label_offset : 30).style("text-anchor", "middle").classed("axis_label", true).html(axis_opts.label);
        } else {
          var label = axis_g.append("text").attr("transform", function (d) {
            return axis_opts.label_offset ? "translate(" + axis_opts.label_offset + "," + height / 2 + ")rotate(-90)" : "translate(" + -30 + "," + height / 2 + ")rotate(-90)";
          }).style("text-anchor", "middle").classed("axis_label", true).html(axis_opts.label);
        }
      }

      axis_g.call(ax);
    } // invoke this function any time you manually change an axis property, like tickFormat


    var update_axis = function update_axis(dur) {
      dur ? axis_g.transition().duration(dur).call(ax) : axis_g.call(ax); // reposition labels

      if (axis_opts.label) {
        if (dir === "x") {
          axis_g.select(".axis_label").attr("x", width / 2).attr("y", axis_opts.label_offset ? axis_opts.label_offset : 30);
        } else {
          axis_g.select(".axis_label").attr("transform", function (d) {
            return axis_opts.label_offset ? "translate(" + axis_opts.label_offset + "," + height / 2 + ")rotate(-90)" : "translate(" + -30 + "," + height / 2 + ")rotate(-90)";
          });
        }
      }
    }; // this is invoked on load and any time the graph is modified or resized. See "Philosophy" section of the README


    var draw_axis = function draw_axis(w, h, z) {
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
      } // optional resize function passed to axis options


      if (axis_opts.resize) {
        axis_opts.resize(scale, axis_g, width, height, z);
      }

      update_axis();
    };

    build_axis(); // this is invoke onload and any time the chart is resized

    draw_axis(width, height, 1); // we'll return this object (and store it in the chart object)

    var obj = {
      dir: dir,
      domain: scale.domain,
      setDomain: function setDomain(new_domain) {
        axis_opts.domain = new_domain;
        scale.range(axis_opts.range).domain(axis_opts.domain);
      },
      scale: scale,
      axis: ax,
      update: update_axis,
      redraw: draw_axis
    };
    axes[dir] = obj;
    return obj;
  };

  function resize_chart() {
    var w = parseInt(svg.style('width'), 10) - margin.right - margin.left,
        h = parseInt(svg.style('height'), 10) - margin.top - margin.bottom,
        z = w / original_width;
    chart.width = width = w;
    chart.height = height = h;
    Object.keys(axes).forEach(function (dir) {
      axes[dir].redraw(w, h, z);
    });

    if (opts.resize && typeof opts.resize == 'function') {
      opts.resize(w, h, z);
    }
  }

  function changeAspect(aspect) {
    b.changeAspect(aspect);
  }

  function changeHeight(h) {
    b.changeHeight(h + margin.top + margin.bottom);
    chart.height = height = h;
    axes.forEach(function (axis) {
      axis.redraw(width, height);
    });
  }

  var chart = {
    axes_layer: axes_layer,
    data_layer: data_layer,
    height: height,
    width: width,
    setResize: function setResize(rf) {
      opts.resize = rf;
      resize_chart();
    },
    resize: resize_chart,
    addAxis: axis,
    changeAspect: changeAspect,
    changeHeight: changeHeight,
    base: b
  };
  return chart;
}

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/array.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/array.js ***!
  \********************************************************************************************/
/*! exports provided: slice, map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/ascending.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/ascending.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/bin.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/bin.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/array.js");
/* harmony import */ var _bisect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisect.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/bisect.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/constant.js");
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extent.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/extent.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identity.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/identity.js");
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./range.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/range.js");
/* harmony import */ var _ticks_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticks.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/ticks.js");
/* harmony import */ var _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./threshold/sturges.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/threshold/sturges.js");









/* harmony default export */ __webpack_exports__["default"] = (function() {
  var value = _identity_js__WEBPACK_IMPORTED_MODULE_4__["default"],
      domain = _extent_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      threshold = _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_7__["default"];

  function histogram(data) {
    if (!Array.isArray(data)) data = Array.from(data);

    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = Object(_ticks_js__WEBPACK_IMPORTED_MODULE_6__["tickStep"])(x0, x1, tz);
      tz = Object(_range_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Math.ceil(x0 / tz) * tz, x1, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[Object(_bisect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_array_js__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/bisect.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/bisect.js ***!
  \*********************************************************************************************/
/*! exports provided: bisectRight, bisectLeft, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return bisectRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return bisectLeft; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/ascending.js");
/* harmony import */ var _bisector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisector.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/bisector.js");



var ascendingBisect = Object(_bisector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["default"] = (bisectRight);


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/bisector.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/bisector.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(f(d), x);
  };
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/constant.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/constant.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/count.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/count.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return count; });
function count(values, valueof) {
  let count = 0;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null && value >= value) {
        ++count;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && value >= value) {
        ++count;
      }
    }
  }
  return count;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/cross.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/cross.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cross; });
function length(array) {
  return array.length | 0;
}

function empty(length) {
  return !(length > 0);
}

function arrayify(values) {
  return typeof values !== "object" || "length" in values ? values : Array.from(values);
}

function reducer(reduce) {
  return values => reduce(...values);
}

function cross(...values) {
  const reduce = typeof values[values.length - 1] === "function" && reducer(values.pop());
  values = values.map(arrayify);
  const lengths = values.map(length);
  const j = values.length - 1;
  const index = new Array(j + 1).fill(0);
  const product = [];
  if (j < 0 || lengths.some(empty)) return product;
  while (true) {
    product.push(index.map((j, i) => values[i][j]));
    let i = j;
    while (++index[i] === lengths[i]) {
      if (i === 0) return reduce ? product.map(reduce) : product;
      index[i--] = 0;
    }
  }
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/descending.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/descending.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/deviation.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/deviation.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deviation; });
/* harmony import */ var _variance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variance.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/variance.js");


function deviation(values, valueof) {
  const v = Object(_variance_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values, valueof);
  return v ? Math.sqrt(v) : v;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/extent.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/extent.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  let min;
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  }
  return [min, max];
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/group.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/group.js ***!
  \********************************************************************************************/
/*! exports provided: default, groups, rollup, rollups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groups", function() { return groups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rollup", function() { return rollup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rollups", function() { return rollups; });
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/identity.js");


function group(values, ...keys) {
  return nest(values, _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"], _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"], keys);
}

function groups(values, ...keys) {
  return nest(values, Array.from, _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"], keys);
}

function rollup(values, reduce, ...keys) {
  return nest(values, _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"], reduce, keys);
}

function rollups(values, reduce, ...keys) {
  return nest(values, Array.from, reduce, keys);
}

function nest(values, map, reduce, keys) {
  return (function regroup(values, i) {
    if (i >= keys.length) return reduce(values);
    const groups = new Map();
    const keyof = keys[i++];
    let index = -1;
    for (const value of values) {
      const key = keyof(value, ++index, values);
      const group = groups.get(key);
      if (group) group.push(value);
      else groups.set(key, [value]);
    }
    for (const [key, values] of groups) {
      groups.set(key, regroup(values, i));
    }
    return map(groups);
  })(values, 0);
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/identity.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/identity.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/index.js ***!
  \********************************************************************************************/
/*! exports provided: bisect, bisectRight, bisectLeft, ascending, bisector, count, cross, descending, deviation, extent, group, groups, rollup, rollups, bin, histogram, thresholdFreedmanDiaconis, thresholdScott, thresholdSturges, max, maxIndex, mean, median, merge, min, minIndex, pairs, permute, quantile, quickselect, range, least, leastIndex, scan, shuffle, sum, ticks, tickIncrement, tickStep, transpose, variance, zip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bisect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bisect.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/bisect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisect", function() { return _bisect_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return _bisect_js__WEBPACK_IMPORTED_MODULE_0__["bisectRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return _bisect_js__WEBPACK_IMPORTED_MODULE_0__["bisectLeft"]; });

/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/ascending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ascending", function() { return _ascending_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bisector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bisector.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/bisector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisector", function() { return _bisector_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./count.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/count.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "count", function() { return _count_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _cross_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cross.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/cross.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return _cross_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _descending_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./descending.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/descending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "descending", function() { return _descending_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _deviation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deviation.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/deviation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deviation", function() { return _deviation_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./extent.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/extent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extent", function() { return _extent_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./group.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/group.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "group", function() { return _group_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groups", function() { return _group_js__WEBPACK_IMPORTED_MODULE_8__["groups"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rollup", function() { return _group_js__WEBPACK_IMPORTED_MODULE_8__["rollup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rollups", function() { return _group_js__WEBPACK_IMPORTED_MODULE_8__["rollups"]; });

/* harmony import */ var _bin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bin.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/bin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bin", function() { return _bin_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "histogram", function() { return _bin_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _threshold_freedmanDiaconis_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./threshold/freedmanDiaconis.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/threshold/freedmanDiaconis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdFreedmanDiaconis", function() { return _threshold_freedmanDiaconis_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _threshold_scott_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./threshold/scott.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/threshold/scott.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdScott", function() { return _threshold_scott_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./threshold/sturges.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/threshold/sturges.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdSturges", function() { return _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./max.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/max.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _max_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _maxIndex_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./maxIndex.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/maxIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxIndex", function() { return _maxIndex_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _mean_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mean.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/mean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return _mean_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _median_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./median.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/median.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "median", function() { return _median_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./merge.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _merge_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./min.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/min.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _min_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _minIndex_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./minIndex.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/minIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minIndex", function() { return _minIndex_js__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _pairs_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pairs.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/pairs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _pairs_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _permute_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./permute.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/permute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "permute", function() { return _permute_js__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./quantile.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/quantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantile", function() { return _quantile_js__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _quickselect_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./quickselect.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/quickselect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quickselect", function() { return _quickselect_js__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./range.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _range_js__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _least_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./least.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/least.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "least", function() { return _least_js__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _leastIndex_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./leastIndex.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/leastIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leastIndex", function() { return _leastIndex_js__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _scan_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./scan.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/scan.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return _scan_js__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _shuffle_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shuffle.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/shuffle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return _shuffle_js__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _sum_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./sum.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/sum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return _sum_js__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _ticks_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ticks.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/ticks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticks", function() { return _ticks_js__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return _ticks_js__WEBPACK_IMPORTED_MODULE_30__["tickIncrement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return _ticks_js__WEBPACK_IMPORTED_MODULE_30__["tickStep"]; });

/* harmony import */ var _transpose_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./transpose.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/transpose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return _transpose_js__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _variance_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./variance.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/variance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variance", function() { return _variance_js__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _zip_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./zip.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _zip_js__WEBPACK_IMPORTED_MODULE_33__["default"]; });










 // Deprecated; use bin.

















 // Deprecated; use leastIndex.








/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/least.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/least.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return least; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/ascending.js");


function least(values, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  let min;
  let defined = false;
  if (compare.length === 1) {
    let minValue;
    for (const element of values) {
      const value = compare(element);
      if (defined
          ? Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, minValue) < 0
          : Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, value) === 0) {
        min = element;
        minValue = value;
        defined = true;
      }
    }
  } else {
    for (const value of values) {
      if (defined
          ? compare(value, min) < 0
          : compare(value, value) === 0) {
        min = value;
        defined = true;
      }
    }
  }
  return min;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/leastIndex.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/leastIndex.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return leastIndex; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/ascending.js");


function leastIndex(values, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  let min;
  let minIndex = -1;
  let index = -1;
  if (compare.length === 1) {
    for (const element of values) {
      ++index;
      const value = compare(element);
      if (minIndex < 0
          ? Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, value) === 0
          : Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, min) < 0) {
        min = value;
        minIndex = index;
      }
    }
  } else {
    for (const value of values) {
      ++index;
      if (minIndex < 0
          ? compare(value, value) === 0
          : compare(value, min) < 0) {
        min = value;
        minIndex = index;
      }
    }
  }
  return minIndex;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/max.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/max.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return max; });
function max(values, valueof) {
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  }
  return max;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/maxIndex.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/maxIndex.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return maxIndex; });
function maxIndex(values, valueof) {
  let max;
  let maxIndex = -1;
  let index = -1;
  if (valueof === undefined) {
    for (const value of values) {
      ++index;
      if (value != null
          && (max < value || (max === undefined && value >= value))) {
        max = value, maxIndex = index;
      }
    }
  } else {
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (max < value || (max === undefined && value >= value))) {
        max = value, maxIndex = index;
      }
    }
  }
  return maxIndex;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/mean.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/mean.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mean; });
function mean(values, valueof) {
  let count = 0;
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        ++count, sum += value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        ++count, sum += value;
      }
    }
  }
  if (count) return sum / count;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/median.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/median.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quantile.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/quantile.js");
/* harmony import */ var _quickselect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quickselect.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/quickselect.js");



function* numbers(values, valueof) {
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  values = Float64Array.from(numbers(values, valueof));
  if (!values.length) return;
  const n = values.length;
  const i = n >> 1;
  Object(_quickselect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values, i - 1, 0);
  if ((n & 1) === 0) Object(_quickselect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values, i, i);
  return Object(_quantile_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values, 0.5);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/merge.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/merge.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return merge; });
function* flatten(arrays) {
  for (const array of arrays) {
    yield* array;
  }
}

function merge(arrays) {
  return Array.from(flatten(arrays));
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/min.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/min.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return min; });
function min(values, valueof) {
  let min;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  }
  return min;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/minIndex.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/minIndex.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return minIndex; });
function minIndex(values, valueof) {
  let min;
  let minIndex = -1;
  let index = -1;
  if (valueof === undefined) {
    for (const value of values) {
      ++index;
      if (value != null
          && (min > value || (min === undefined && value >= value))) {
        min = value, minIndex = index;
      }
    }
  } else {
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (min > value || (min === undefined && value >= value))) {
        min = value, minIndex = index;
      }
    }
  }
  return minIndex;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/number.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/number.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x === null ? NaN : +x;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/pairs.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/pairs.js ***!
  \********************************************************************************************/
/*! exports provided: default, pair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pair", function() { return pair; });
function pairs(values, pairof = pair) {
  const pairs = [];
  let previous;
  let first = false;
  for (const value of values) {
    if (first) pairs.push(pairof(previous, value));
    previous = value;
    first = true;
  }
  return pairs;
}

function pair(a, b) {
  return [a, b];
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/permute.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/permute.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(source, keys) {
  return Array.from(keys, key => source[key]);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/quantile.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/quantile.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantile; });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/number.js");


function quantile(values, p, valueof = _number_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/quickselect.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/quickselect.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quickselect; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/ascending.js");


// Based on https://github.com/mourner/quickselect
// ISC license, Copyright 2018 Vladimir Agafonkin.
function quickselect(array, k, left = 0, right = array.length - 1, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const m = k - left + 1;
      const z = Math.log(n);
      const s = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
      const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      quickselect(array, k, newLeft, newRight, compare);
    }

    const t = array[k];
    let i = left;
    let j = right;

    swap(array, left, k);
    if (compare(array[right], t) > 0) swap(array, left, right);

    while (i < j) {
      swap(array, i, j), ++i, --j;
      while (compare(array[i], t) < 0) ++i;
      while (compare(array[j], t) > 0) --j;
    }

    if (compare(array[left], t) === 0) swap(array, left, j);
    else ++j, swap(array, j, right);

    if (j <= k) left = j + 1;
    if (k <= j) right = j - 1;
  }
  return array;
}

function swap(array, i, j) {
  const t = array[i];
  array[i] = array[j];
  array[j] = t;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/range.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/range.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/scan.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/scan.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scan; });
/* harmony import */ var _leastIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leastIndex.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/leastIndex.js");


function scan(values, compare) {
  const index = Object(_leastIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values, compare);
  return index < 0 ? undefined : index;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/shuffle.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/shuffle.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shuffle; });
function shuffle(array, i0 = 0, i1 = array.length) {
  var m = i1 - (i0 = +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/sum.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/sum.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sum; });
function sum(values, valueof) {
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value = +value) {
        sum += value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if (value = +valueof(value, ++index, values)) {
        sum += value;
      }
    }
  }
  return sum;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/threshold/freedmanDiaconis.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/threshold/freedmanDiaconis.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/array.js");
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ascending.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/ascending.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../number.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/number.js");
/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quantile.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/quantile.js");





/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  values = _array_js__WEBPACK_IMPORTED_MODULE_0__["map"].call(values, _number_js__WEBPACK_IMPORTED_MODULE_2__["default"]).sort(_ascending_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return Math.ceil((max - min) / (2 * (Object(_quantile_js__WEBPACK_IMPORTED_MODULE_3__["default"])(values, 0.75) - Object(_quantile_js__WEBPACK_IMPORTED_MODULE_3__["default"])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/threshold/scott.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/threshold/scott.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deviation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../deviation.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/deviation.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * Object(_deviation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values) * Math.pow(values.length, -1 / 3)));
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/threshold/sturges.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/threshold/sturges.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/ticks.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/ticks.js ***!
  \********************************************************************************************/
/*! exports provided: default, tickIncrement, tickStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return tickIncrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return tickStep; });
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/transpose.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/transpose.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./min.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/min.js");


/* harmony default export */ __webpack_exports__["default"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = Object(_min_js__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/variance.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/variance.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return variance; });
function variance(values, valueof) {
  let count = 0;
  let delta;
  let mean = 0;
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        delta = value - mean;
        mean += delta / ++count;
        sum += delta * (value - mean);
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        delta = value - mean;
        mean += delta / ++count;
        sum += delta * (value - mean);
      }
    }
  }
  if (count > 1) return sum / (count - 1);
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/zip.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/zip.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transpose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transpose.js */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/transpose.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_transpose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arguments);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-axis/1.0.12/node_modules/d3-axis/src/array.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-axis/1.0.12/node_modules/d3-axis/src/array.js ***!
  \*******************************************************************************************/
/*! exports provided: slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-axis/1.0.12/node_modules/d3-axis/src/axis.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-axis/1.0.12/node_modules/d3-axis/src/axis.js ***!
  \******************************************************************************************/
/*! exports provided: axisTop, axisRight, axisBottom, axisLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axisTop", function() { return axisTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axisRight", function() { return axisRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axisBottom", function() { return axisBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axisLeft", function() { return axisLeft; });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/.registry.npmjs.org/d3-axis/1.0.12/node_modules/d3-axis/src/array.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity */ "./node_modules/.registry.npmjs.org/d3-axis/1.0.12/node_modules/d3-axis/src/identity.js");



var top = 1,
    right = 2,
    bottom = 3,
    left = 4,
    epsilon = 1e-6;

function translateX(x) {
  return "translate(" + (x + 0.5) + ",0)";
}

function translateY(y) {
  return "translate(0," + (y + 0.5) + ")";
}

function number(scale) {
  return function(d) {
    return +scale(d);
  };
}

function center(scale) {
  var offset = Math.max(0, scale.bandwidth() - 1) / 2; // Adjust for 0.5px offset.
  if (scale.round()) offset = Math.round(offset);
  return function(d) {
    return +scale(d) + offset;
  };
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      k = orient === top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
        format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : _identity__WEBPACK_IMPORTED_MODULE_1__["default"]) : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + 0.5,
        range1 = +range[range.length - 1] + 0.5,
        position = (scale.bandwidth ? center : number)(scale.copy()),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");

    path = path.merge(path.enter().insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "currentColor"));

    tick = tick.merge(tickEnter);

    line = line.merge(tickEnter.append("line")
        .attr("stroke", "currentColor")
        .attr(x + "2", k * tickSizeInner));

    text = text.merge(tickEnter.append("text")
        .attr("fill", "currentColor")
        .attr(x, k * spacing)
        .attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);

      tickExit = tickExit.transition(context)
          .attr("opacity", epsilon)
          .attr("transform", function(d) { return isFinite(d = position(d)) ? transform(d) : this.getAttribute("transform"); });

      tickEnter
          .attr("opacity", epsilon)
          .attr("transform", function(d) { var p = this.parentNode.__axis; return transform(p && isFinite(p = p(d)) ? p : position(d)); });
    }

    tickExit.remove();

    path
        .attr("d", orient === left || orient == right
            ? (tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter : "M0.5," + range0 + "V" + range1)
            : (tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + ",0.5H" + range1));

    tick
        .attr("opacity", 1)
        .attr("transform", function(d) { return transform(position(d)); });

    line
        .attr(x + "2", k * tickSizeInner);

    text
        .attr(x, k * spacing)
        .text(format);

    selection.filter(entering)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

    selection
        .each(function() { this.__axis = position; });
  }

  axis.scale = function(_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function() {
    return tickArguments = _array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(arguments), axis;
  };

  axis.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : _array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : _array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function(_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  return axis;
}

function axisTop(scale) {
  return axis(top, scale);
}

function axisRight(scale) {
  return axis(right, scale);
}

function axisBottom(scale) {
  return axis(bottom, scale);
}

function axisLeft(scale) {
  return axis(left, scale);
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-axis/1.0.12/node_modules/d3-axis/src/identity.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-axis/1.0.12/node_modules/d3-axis/src/identity.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-axis/1.0.12/node_modules/d3-axis/src/index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-axis/1.0.12/node_modules/d3-axis/src/index.js ***!
  \*******************************************************************************************/
/*! exports provided: axisTop, axisRight, axisBottom, axisLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axis */ "./node_modules/.registry.npmjs.org/d3-axis/1.0.12/node_modules/d3-axis/src/axis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisTop", function() { return _axis__WEBPACK_IMPORTED_MODULE_0__["axisTop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisRight", function() { return _axis__WEBPACK_IMPORTED_MODULE_0__["axisRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisBottom", function() { return _axis__WEBPACK_IMPORTED_MODULE_0__["axisBottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisLeft", function() { return _axis__WEBPACK_IMPORTED_MODULE_0__["axisLeft"]; });




/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/color.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/color.js ***!
  \********************************************************************************************/
/*! exports provided: Color, darker, brighter, default, rgbConvert, rgb, Rgb, hslConvert, hsl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darker", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brighter", function() { return brighter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbConvert", function() { return rgbConvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rgb", function() { return Rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslConvert", function() { return hslConvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return hsl; });
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define */ "./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/define.js");


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: function() {
    return this.rgb().hex();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Rgb, rgb, Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: function() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Hsl, hsl, Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/cubehelix.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/cubehelix.js ***!
  \************************************************************************************************/
/*! exports provided: default, Cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cubehelix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cubehelix", function() { return Cubehelix; });
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define */ "./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/define.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/color.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/math.js");




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof _color__WEBPACK_IMPORTED_MODULE_1__["Rgb"])) o = Object(_color__WEBPACK_IMPORTED_MODULE_1__["rgbConvert"])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * _math__WEBPACK_IMPORTED_MODULE_2__["rad2deg"] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Cubehelix, cubehelix, Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    k = k == null ? _color__WEBPACK_IMPORTED_MODULE_1__["brighter"] : Math.pow(_color__WEBPACK_IMPORTED_MODULE_1__["brighter"], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? _color__WEBPACK_IMPORTED_MODULE_1__["darker"] : Math.pow(_color__WEBPACK_IMPORTED_MODULE_1__["darker"], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * _math__WEBPACK_IMPORTED_MODULE_2__["deg2rad"],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new _color__WEBPACK_IMPORTED_MODULE_1__["Rgb"](
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/define.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/define.js ***!
  \*********************************************************************************************/
/*! exports provided: default, extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony default export */ __webpack_exports__["default"] = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/index.js ***!
  \********************************************************************************************/
/*! exports provided: color, rgb, hsl, lab, hcl, lch, gray, cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ "./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/color.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return _color__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return _color__WEBPACK_IMPORTED_MODULE_0__["rgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return _color__WEBPACK_IMPORTED_MODULE_0__["hsl"]; });

/* harmony import */ var _lab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lab */ "./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/lab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lab", function() { return _lab__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return _lab__WEBPACK_IMPORTED_MODULE_1__["hcl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lch", function() { return _lab__WEBPACK_IMPORTED_MODULE_1__["lch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return _lab__WEBPACK_IMPORTED_MODULE_1__["gray"]; });

/* harmony import */ var _cubehelix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubehelix */ "./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/cubehelix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cubehelix", function() { return _cubehelix__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/lab.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/lab.js ***!
  \******************************************************************************************/
/*! exports provided: gray, default, Lab, lch, hcl, Hcl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return gray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lab", function() { return Lab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lch", function() { return lch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return hcl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hcl", function() { return Hcl; });
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define */ "./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/define.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/color.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/math.js");




// https://observablehq.com/@mbostock/lab-and-rgb
var K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) return hcl2lab(o);
  if (!(o instanceof _color__WEBPACK_IMPORTED_MODULE_1__["Rgb"])) o = Object(_color__WEBPACK_IMPORTED_MODULE_1__["rgbConvert"])(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
  if (r === g && g === b) x = z = y; else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Lab, lab, Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new _color__WEBPACK_IMPORTED_MODULE_1__["Rgb"](
      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * _math__WEBPACK_IMPORTED_MODULE_2__["rad2deg"];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

function hcl2lab(o) {
  if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
  var h = o.h * _math__WEBPACK_IMPORTED_MODULE_2__["deg2rad"];
  return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Hcl, hcl, Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return hcl2lab(this).rgb();
  }
}));


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/math.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/math.js ***!
  \*******************************************************************************************/
/*! exports provided: deg2rad, rad2deg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deg2rad", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rad2deg", function() { return rad2deg; });
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-dispatch/1.0.5/node_modules/d3-dispatch/src/dispatch.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-dispatch/1.0.5/node_modules/d3-dispatch/src/dispatch.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var noop = {value: function() {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ __webpack_exports__["default"] = (dispatch);


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-dispatch/1.0.5/node_modules/d3-dispatch/src/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-dispatch/1.0.5/node_modules/d3-dispatch/src/index.js ***!
  \**************************************************************************************************/
/*! exports provided: dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatch */ "./node_modules/.registry.npmjs.org/d3-dispatch/1.0.5/node_modules/d3-dispatch/src/dispatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return _dispatch__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/back.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/back.js ***!
  \*****************************************************************************************/
/*! exports provided: backIn, backOut, backInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return backInOut; });
var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/bounce.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/bounce.js ***!
  \*******************************************************************************************/
/*! exports provided: bounceIn, bounceOut, bounceInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return bounceIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOut", function() { return bounceOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInOut", function() { return bounceInOut; });
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/circle.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/circle.js ***!
  \*******************************************************************************************/
/*! exports provided: circleIn, circleOut, circleInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleIn", function() { return circleIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleOut", function() { return circleOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleInOut", function() { return circleInOut; });
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/cubic.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/cubic.js ***!
  \******************************************************************************************/
/*! exports provided: cubicIn, cubicOut, cubicInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicIn", function() { return cubicIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicOut", function() { return cubicOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicInOut", function() { return cubicInOut; });
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/elastic.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/elastic.js ***!
  \********************************************************************************************/
/*! exports provided: elasticIn, elasticOut, elasticInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticIn", function() { return elasticIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticOut", function() { return elasticOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticInOut", function() { return elasticInOut; });
var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/exp.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/exp.js ***!
  \****************************************************************************************/
/*! exports provided: expIn, expOut, expInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expIn", function() { return expIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expOut", function() { return expOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expInOut", function() { return expInOut; });
function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/index.js ***!
  \******************************************************************************************/
/*! exports provided: easeLinear, easeQuad, easeQuadIn, easeQuadOut, easeQuadInOut, easeCubic, easeCubicIn, easeCubicOut, easeCubicInOut, easePoly, easePolyIn, easePolyOut, easePolyInOut, easeSin, easeSinIn, easeSinOut, easeSinInOut, easeExp, easeExpIn, easeExpOut, easeExpInOut, easeCircle, easeCircleIn, easeCircleOut, easeCircleInOut, easeBounce, easeBounceIn, easeBounceOut, easeBounceInOut, easeBack, easeBackIn, easeBackOut, easeBackInOut, easeElastic, easeElasticIn, easeElasticOut, easeElasticInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeLinear", function() { return _linear__WEBPACK_IMPORTED_MODULE_0__["linear"]; });

/* harmony import */ var _quad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quad */ "./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/quad.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuad", function() { return _quad__WEBPACK_IMPORTED_MODULE_1__["quadInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadIn", function() { return _quad__WEBPACK_IMPORTED_MODULE_1__["quadIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadOut", function() { return _quad__WEBPACK_IMPORTED_MODULE_1__["quadOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadInOut", function() { return _quad__WEBPACK_IMPORTED_MODULE_1__["quadInOut"]; });

/* harmony import */ var _cubic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubic */ "./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/cubic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubic", function() { return _cubic__WEBPACK_IMPORTED_MODULE_2__["cubicInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicIn", function() { return _cubic__WEBPACK_IMPORTED_MODULE_2__["cubicIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicOut", function() { return _cubic__WEBPACK_IMPORTED_MODULE_2__["cubicOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicInOut", function() { return _cubic__WEBPACK_IMPORTED_MODULE_2__["cubicInOut"]; });

/* harmony import */ var _poly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poly */ "./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/poly.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePoly", function() { return _poly__WEBPACK_IMPORTED_MODULE_3__["polyInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyIn", function() { return _poly__WEBPACK_IMPORTED_MODULE_3__["polyIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyOut", function() { return _poly__WEBPACK_IMPORTED_MODULE_3__["polyOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyInOut", function() { return _poly__WEBPACK_IMPORTED_MODULE_3__["polyInOut"]; });

/* harmony import */ var _sin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sin */ "./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/sin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSin", function() { return _sin__WEBPACK_IMPORTED_MODULE_4__["sinInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinIn", function() { return _sin__WEBPACK_IMPORTED_MODULE_4__["sinIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinOut", function() { return _sin__WEBPACK_IMPORTED_MODULE_4__["sinOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinInOut", function() { return _sin__WEBPACK_IMPORTED_MODULE_4__["sinInOut"]; });

/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exp */ "./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/exp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExp", function() { return _exp__WEBPACK_IMPORTED_MODULE_5__["expInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpIn", function() { return _exp__WEBPACK_IMPORTED_MODULE_5__["expIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpOut", function() { return _exp__WEBPACK_IMPORTED_MODULE_5__["expOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpInOut", function() { return _exp__WEBPACK_IMPORTED_MODULE_5__["expInOut"]; });

/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./circle */ "./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircle", function() { return _circle__WEBPACK_IMPORTED_MODULE_6__["circleInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleIn", function() { return _circle__WEBPACK_IMPORTED_MODULE_6__["circleIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleOut", function() { return _circle__WEBPACK_IMPORTED_MODULE_6__["circleOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleInOut", function() { return _circle__WEBPACK_IMPORTED_MODULE_6__["circleInOut"]; });

/* harmony import */ var _bounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bounce */ "./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/bounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounce", function() { return _bounce__WEBPACK_IMPORTED_MODULE_7__["bounceOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceIn", function() { return _bounce__WEBPACK_IMPORTED_MODULE_7__["bounceIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceOut", function() { return _bounce__WEBPACK_IMPORTED_MODULE_7__["bounceOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceInOut", function() { return _bounce__WEBPACK_IMPORTED_MODULE_7__["bounceInOut"]; });

/* harmony import */ var _back__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./back */ "./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/back.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBack", function() { return _back__WEBPACK_IMPORTED_MODULE_8__["backInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackIn", function() { return _back__WEBPACK_IMPORTED_MODULE_8__["backIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackOut", function() { return _back__WEBPACK_IMPORTED_MODULE_8__["backOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackInOut", function() { return _back__WEBPACK_IMPORTED_MODULE_8__["backInOut"]; });

/* harmony import */ var _elastic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elastic */ "./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/elastic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElastic", function() { return _elastic__WEBPACK_IMPORTED_MODULE_9__["elasticOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticIn", function() { return _elastic__WEBPACK_IMPORTED_MODULE_9__["elasticIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticOut", function() { return _elastic__WEBPACK_IMPORTED_MODULE_9__["elasticOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticInOut", function() { return _elastic__WEBPACK_IMPORTED_MODULE_9__["elasticInOut"]; });






















/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/linear.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/linear.js ***!
  \*******************************************************************************************/
/*! exports provided: linear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
function linear(t) {
  return +t;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/poly.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/poly.js ***!
  \*****************************************************************************************/
/*! exports provided: polyIn, polyOut, polyInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyIn", function() { return polyIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyOut", function() { return polyOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyInOut", function() { return polyInOut; });
var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/quad.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/quad.js ***!
  \*****************************************************************************************/
/*! exports provided: quadIn, quadOut, quadInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadIn", function() { return quadIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadOut", function() { return quadOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadInOut", function() { return quadInOut; });
function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/sin.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/sin.js ***!
  \****************************************************************************************/
/*! exports provided: sinIn, sinOut, sinInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinIn", function() { return sinIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinOut", function() { return sinOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinInOut", function() { return sinInOut; });
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/defaultLocale.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/defaultLocale.js ***!
  \******************************************************************************************************/
/*! exports provided: format, formatPrefix, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return formatPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultLocale; });
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale */ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/locale.js");


var locale;
var format;
var formatPrefix;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = Object(_locale__WEBPACK_IMPORTED_MODULE_0__["default"])(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/exponent.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/exponent.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatDecimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal */ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatDecimal.js");


/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x = Object(_formatDecimal__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(x)), x ? x[1] : NaN;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatDecimal.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatDecimal.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatGroup.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatGroup.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatNumerals.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatNumerals.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatPrefixAuto.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatPrefixAuto.js ***!
  \*********************************************************************************************************/
/*! exports provided: prefixExponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixExponent", function() { return prefixExponent; });
/* harmony import */ var _formatDecimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal */ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatDecimal.js");


var prefixExponent;

/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  var d = Object(_formatDecimal__WEBPACK_IMPORTED_MODULE_0__["default"])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + Object(_formatDecimal__WEBPACK_IMPORTED_MODULE_0__["default"])(x, Math.max(0, p + i - 1))[0]; // less than 1y!
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatRounded.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatRounded.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatDecimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal */ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatDecimal.js");


/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  var d = Object(_formatDecimal__WEBPACK_IMPORTED_MODULE_0__["default"])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatSpecifier.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatSpecifier.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatSpecifier; });
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  return new FormatSpecifier(specifier);
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  this.fill = match[1] || " ";
  this.align = match[2] || ">";
  this.sign = match[3] || "-";
  this.symbol = match[4] || "";
  this.zero = !!match[5];
  this.width = match[6] && +match[6];
  this.comma = !!match[7];
  this.precision = match[8] && +match[8].slice(1);
  this.trim = !!match[9];
  this.type = match[10] || "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width == null ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatTrim.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatTrim.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
/* harmony default export */ __webpack_exports__["default"] = (function(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (i0 > 0) { if (!+s[i]) break out; i0 = 0; } break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatTypes.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatTypes.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatPrefixAuto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatPrefixAuto */ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatPrefixAuto.js");
/* harmony import */ var _formatRounded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatRounded */ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatRounded.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return Object(_formatRounded__WEBPACK_IMPORTED_MODULE_1__["default"])(x * 100, p); },
  "r": _formatRounded__WEBPACK_IMPORTED_MODULE_1__["default"],
  "s": _formatPrefixAuto__WEBPACK_IMPORTED_MODULE_0__["default"],
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/identity.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/identity.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/index.js ***!
  \**********************************************************************************************/
/*! exports provided: formatDefaultLocale, format, formatPrefix, formatLocale, formatSpecifier, precisionFixed, precisionPrefix, precisionRound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaultLocale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale */ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/defaultLocale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDefaultLocale", function() { return _defaultLocale__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _defaultLocale__WEBPACK_IMPORTED_MODULE_0__["format"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return _defaultLocale__WEBPACK_IMPORTED_MODULE_0__["formatPrefix"]; });

/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale */ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/locale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatLocale", function() { return _locale__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _formatSpecifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatSpecifier */ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatSpecifier.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatSpecifier", function() { return _formatSpecifier__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _precisionFixed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./precisionFixed */ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/precisionFixed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionFixed", function() { return _precisionFixed__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _precisionPrefix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./precisionPrefix */ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/precisionPrefix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionPrefix", function() { return _precisionPrefix__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _precisionRound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./precisionRound */ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/precisionRound.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionRound", function() { return _precisionRound__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/locale.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/locale.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent */ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/exponent.js");
/* harmony import */ var _formatGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatGroup */ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatGroup.js");
/* harmony import */ var _formatNumerals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatNumerals */ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatNumerals.js");
/* harmony import */ var _formatSpecifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatSpecifier */ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatSpecifier.js");
/* harmony import */ var _formatTrim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formatTrim */ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatTrim.js");
/* harmony import */ var _formatTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatTypes */ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatTypes.js");
/* harmony import */ var _formatPrefixAuto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formatPrefixAuto */ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/formatPrefixAuto.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./identity */ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/identity.js");









var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ __webpack_exports__["default"] = (function(locale) {
  var group = locale.grouping && locale.thousands ? Object(_formatGroup__WEBPACK_IMPORTED_MODULE_1__["default"])(locale.grouping, locale.thousands) : _identity__WEBPACK_IMPORTED_MODULE_7__["default"],
      currency = locale.currency,
      decimal = locale.decimal,
      numerals = locale.numerals ? Object(_formatNumerals__WEBPACK_IMPORTED_MODULE_2__["default"])(locale.numerals) : _identity__WEBPACK_IMPORTED_MODULE_7__["default"],
      percent = locale.percent || "%";

  function newFormat(specifier) {
    specifier = Object(_formatSpecifier__WEBPACK_IMPORTED_MODULE_3__["default"])(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!_formatTypes__WEBPACK_IMPORTED_MODULE_5__["default"][type]) precision == null && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = _formatTypes__WEBPACK_IMPORTED_MODULE_5__["default"][type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision == null ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Perform the initial formatting.
        var valueNegative = value < 0;
        value = formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = Object(_formatTrim__WEBPACK_IMPORTED_MODULE_4__["default"])(value);

        // If a negative value rounds to zero during formatting, treat as positive.
        if (valueNegative && +value === 0) valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + _formatPrefixAuto__WEBPACK_IMPORTED_MODULE_6__["prefixExponent"] / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = Object(_formatSpecifier__WEBPACK_IMPORTED_MODULE_3__["default"])(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/precisionFixed.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/precisionFixed.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent */ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["default"] = (function(step) {
  return Math.max(0, -Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(step)));
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/precisionPrefix.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/precisionPrefix.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent */ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["default"] = (function(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(value) / 3))) * 3 - Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(step)));
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/precisionRound.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/precisionRound.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent */ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["default"] = (function(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(max) - Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(step)) + 1;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/array.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/array.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/value.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = Object(_value__WEBPACK_IMPORTED_MODULE_0__["default"])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/basis.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/basis.js ***!
  \********************************************************************************************************/
/*! exports provided: basis, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basis", function() { return basis; });
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/basisClosed.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/basisClosed.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/basis.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return Object(_basis__WEBPACK_IMPORTED_MODULE_0__["basis"])((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/color.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/color.js ***!
  \********************************************************************************************************/
/*! exports provided: hue, gamma, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hue", function() { return hue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gamma", function() { return gamma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return nogamma; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/constant.js");


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/constant.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/constant.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/cubehelix.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/cubehelix.js ***!
  \************************************************************************************************************/
/*! exports provided: default, cubehelixLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubehelixLong", function() { return cubehelixLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/index.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/color.js");



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(end)).h),
          s = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.s, end.s),
          l = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
          opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* harmony default export */ __webpack_exports__["default"] = (cubehelix(_color__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var cubehelixLong = cubehelix(_color__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/date.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/date.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var d = new Date;
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/discrete.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/discrete.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/hcl.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/hcl.js ***!
  \******************************************************************************************************/
/*! exports provided: default, hclLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hclLong", function() { return hclLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/index.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/color.js");



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hcl"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hcl"])(end)).h),
        c = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.c, end.c),
        l = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
        opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hcl(_color__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var hclLong = hcl(_color__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/hsl.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/hsl.js ***!
  \******************************************************************************************************/
/*! exports provided: default, hslLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslLong", function() { return hslLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/index.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/color.js");



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hsl"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hsl"])(end)).h),
        s = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.s, end.s),
        l = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
        opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hsl(_color__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var hslLong = hsl(_color__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/hue.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/hue.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/color.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var i = Object(_color__WEBPACK_IMPORTED_MODULE_0__["hue"])(+a, +b);
  return function(t) {
    var x = i(t);
    return x - 360 * Math.floor(x / 360);
  };
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/index.js ***!
  \********************************************************************************************************/
/*! exports provided: interpolate, interpolateArray, interpolateBasis, interpolateBasisClosed, interpolateDate, interpolateDiscrete, interpolateHue, interpolateNumber, interpolateObject, interpolateRound, interpolateString, interpolateTransformCss, interpolateTransformSvg, interpolateZoom, interpolateRgb, interpolateRgbBasis, interpolateRgbBasisClosed, interpolateHsl, interpolateHslLong, interpolateLab, interpolateHcl, interpolateHclLong, interpolateCubehelix, interpolateCubehelixLong, piecewise, quantize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/value.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return _value__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateArray", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basis */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/basis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateBasis", function() { return _basis__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _basisClosed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basisClosed */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/basisClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateBasisClosed", function() { return _basisClosed__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateDate", function() { return _date__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _discrete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discrete */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/discrete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateDiscrete", function() { return _discrete__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _hue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hue */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/hue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHue", function() { return _hue__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./number */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/number.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateNumber", function() { return _number__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./object */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateObject", function() { return _object__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./round */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/round.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRound", function() { return _round__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./string */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateString", function() { return _string__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _transform_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transform/index */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/transform/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return _transform_index__WEBPACK_IMPORTED_MODULE_11__["interpolateTransformCss"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return _transform_index__WEBPACK_IMPORTED_MODULE_11__["interpolateTransformSvg"]; });

/* harmony import */ var _zoom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./zoom */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/zoom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateZoom", function() { return _zoom__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _rgb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rgb */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/rgb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgb", function() { return _rgb__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasis", function() { return _rgb__WEBPACK_IMPORTED_MODULE_13__["rgbBasis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasisClosed", function() { return _rgb__WEBPACK_IMPORTED_MODULE_13__["rgbBasisClosed"]; });

/* harmony import */ var _hsl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hsl */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/hsl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHsl", function() { return _hsl__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHslLong", function() { return _hsl__WEBPACK_IMPORTED_MODULE_14__["hslLong"]; });

/* harmony import */ var _lab__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lab */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/lab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateLab", function() { return _lab__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _hcl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hcl */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/hcl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHcl", function() { return _hcl__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHclLong", function() { return _hcl__WEBPACK_IMPORTED_MODULE_16__["hclLong"]; });

/* harmony import */ var _cubehelix__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cubehelix */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/cubehelix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelix", function() { return _cubehelix__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixLong", function() { return _cubehelix__WEBPACK_IMPORTED_MODULE_17__["cubehelixLong"]; });

/* harmony import */ var _piecewise__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./piecewise */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/piecewise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "piecewise", function() { return _piecewise__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _quantize__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./quantize */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantize", function() { return _quantize__WEBPACK_IMPORTED_MODULE_19__["default"]; });























/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/lab.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/lab.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lab; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/index.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/color.js");



function lab(start, end) {
  var l = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["lab"])(start)).l, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["lab"])(end)).l),
      a = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.a, end.a),
      b = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.b, end.b),
      opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/number.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/number.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/object.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/object.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/value.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = Object(_value__WEBPACK_IMPORTED_MODULE_0__["default"])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/piecewise.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/piecewise.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return piecewise; });
function piecewise(interpolate, values) {
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/quantize.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/quantize.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/rgb.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/rgb.js ***!
  \******************************************************************************************************/
/*! exports provided: default, rgbBasis, rgbBasisClosed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbBasis", function() { return rgbBasis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbBasisClosed", function() { return rgbBasisClosed; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/index.js");
/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basis */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/basis.js");
/* harmony import */ var _basisClosed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basisClosed */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/basisClosed.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/color.js");





/* harmony default export */ __webpack_exports__["default"] = ((function rgbGamma(y) {
  var color = Object(_color__WEBPACK_IMPORTED_MODULE_3__["gamma"])(y);

  function rgb(start, end) {
    var r = color((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(start)).r, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = Object(_color__WEBPACK_IMPORTED_MODULE_3__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(_basis__WEBPACK_IMPORTED_MODULE_1__["default"]);
var rgbBasisClosed = rgbSpline(_basisClosed__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/round.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/round.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/string.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/string.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/number.js");


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/transform/decompose.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/transform/decompose.js ***!
  \**********************************************************************************************************************/
/*! exports provided: identity, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ __webpack_exports__["default"] = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/transform/index.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/transform/index.js ***!
  \******************************************************************************************************************/
/*! exports provided: interpolateTransformCss, interpolateTransformSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return interpolateTransformCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return interpolateTransformSvg; });
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../number */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/transform/parse.js");



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(_parse__WEBPACK_IMPORTED_MODULE_1__["parseCss"], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(_parse__WEBPACK_IMPORTED_MODULE_1__["parseSvg"], ", ", ")", ")");


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/transform/parse.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/transform/parse.js ***!
  \******************************************************************************************************************/
/*! exports provided: parseCss, parseSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCss", function() { return parseCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSvg", function() { return parseSvg; });
/* harmony import */ var _decompose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decompose */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/transform/decompose.js");


var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return _decompose__WEBPACK_IMPORTED_MODULE_0__["identity"];
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return Object(_decompose__WEBPACK_IMPORTED_MODULE_0__["default"])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return _decompose__WEBPACK_IMPORTED_MODULE_0__["identity"];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose__WEBPACK_IMPORTED_MODULE_0__["identity"];
  value = value.matrix;
  return Object(_decompose__WEBPACK_IMPORTED_MODULE_0__["default"])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/value.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/value.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/index.js");
/* harmony import */ var _rgb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgb */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/rgb.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/array.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/date.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/object.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./string */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/string.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constant */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/constant.js");









/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? Object(_constant__WEBPACK_IMPORTED_MODULE_7__["default"])(b)
      : (t === "number" ? _number__WEBPACK_IMPORTED_MODULE_4__["default"]
      : t === "string" ? ((c = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["color"])(b)) ? (b = c, _rgb__WEBPACK_IMPORTED_MODULE_1__["default"]) : _string__WEBPACK_IMPORTED_MODULE_6__["default"])
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_0__["color"] ? _rgb__WEBPACK_IMPORTED_MODULE_1__["default"]
      : b instanceof Date ? _date__WEBPACK_IMPORTED_MODULE_3__["default"]
      : Array.isArray(b) ? _array__WEBPACK_IMPORTED_MODULE_2__["default"]
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? _object__WEBPACK_IMPORTED_MODULE_5__["default"]
      : _number__WEBPACK_IMPORTED_MODULE_4__["default"])(a, b);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/zoom.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/zoom.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
/* harmony default export */ __webpack_exports__["default"] = (function(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    }
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    }
  }

  i.duration = S * 1000;

  return i;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/band.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/band.js ***!
  \*******************************************************************************************/
/*! exports provided: default, point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return band; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/index.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/init.js");
/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ordinal */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/ordinal.js");




function band() {
  var scale = Object(_ordinal__WEBPACK_IMPORTED_MODULE_2__["default"])().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      r0 = 0,
      r1 = 1,
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = r1 < r0,
        start = reverse ? r1 : r0,
        stop = reverse ? r0 : r1;
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };

  scale.rangeRound = function(_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band(domain(), [r0, r1])
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initRange"].apply(rescale(), arguments);
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/constant.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/constant.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/continuous.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/continuous.js ***!
  \*************************************************************************************************/
/*! exports provided: identity, copy, transformer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformer", function() { return transformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return continuous; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/constant.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/number.js");





var unit = [0, 1];

function identity(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(isNaN(b) ? NaN : 0.5);
}

function clamper(domain) {
  var a = domain[0], b = domain[domain.length - 1], t;
  if (a > b) t = a, a = b, b = t;
  return function(x) { return Math.max(a, Math.min(b, x)); };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function transformer() {
  var domain = unit,
      range = unit,
      interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolate"],
      transform,
      untransform,
      unknown,
      clamp = identity,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"])))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, _number__WEBPACK_IMPORTED_MODULE_3__["default"]), clamp === identity || (clamp = clamper(domain)), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateRound"], rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? clamper(domain) : identity, scale) : clamp !== identity;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous(transform, untransform) {
  return transformer()(transform, untransform);
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/diverging.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/diverging.js ***!
  \************************************************************************************************/
/*! exports provided: default, divergingLog, divergingSymlog, divergingPow, divergingSqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return diverging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divergingLog", function() { return divergingLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divergingSymlog", function() { return divergingSymlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divergingPow", function() { return divergingPow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divergingSqrt", function() { return divergingSqrt; });
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./continuous */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/init.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/log.js");
/* harmony import */ var _sequential__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sequential */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/sequential.js");
/* harmony import */ var _symlog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./symlog */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/symlog.js");
/* harmony import */ var _pow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pow */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/pow.js");








function transformer() {
  var x0 = 0,
      x1 = 0.5,
      x2 = 1,
      t0,
      t1,
      t2,
      k10,
      k21,
      interpolator = _continuous__WEBPACK_IMPORTED_MODULE_0__["identity"],
      transform,
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (x < t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? ([x0, x1, x2] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), t2 = transform(x2 = +x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), scale) : [x0, x1, x2];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1);
    return scale;
  };
}

function diverging() {
  var scale = Object(_linear__WEBPACK_IMPORTED_MODULE_2__["linearish"])(transformer()(_continuous__WEBPACK_IMPORTED_MODULE_0__["identity"]));

  scale.copy = function() {
    return Object(_sequential__WEBPACK_IMPORTED_MODULE_4__["copy"])(scale, diverging());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initInterpolator"].apply(scale, arguments);
}

function divergingLog() {
  var scale = Object(_log__WEBPACK_IMPORTED_MODULE_3__["loggish"])(transformer()).domain([0.1, 1, 10]);

  scale.copy = function() {
    return Object(_sequential__WEBPACK_IMPORTED_MODULE_4__["copy"])(scale, divergingLog()).base(scale.base());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initInterpolator"].apply(scale, arguments);
}

function divergingSymlog() {
  var scale = Object(_symlog__WEBPACK_IMPORTED_MODULE_5__["symlogish"])(transformer());

  scale.copy = function() {
    return Object(_sequential__WEBPACK_IMPORTED_MODULE_4__["copy"])(scale, divergingSymlog()).constant(scale.constant());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initInterpolator"].apply(scale, arguments);
}

function divergingPow() {
  var scale = Object(_pow__WEBPACK_IMPORTED_MODULE_6__["powish"])(transformer());

  scale.copy = function() {
    return Object(_sequential__WEBPACK_IMPORTED_MODULE_4__["copy"])(scale, divergingPow()).exponent(scale.exponent());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initInterpolator"].apply(scale, arguments);
}

function divergingSqrt() {
  return divergingPow.apply(null, arguments).exponent(0.5);
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/identity.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/identity.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return identity; });
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/number.js");



function identity(domain) {
  var unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = Array.from(_, _number__WEBPACK_IMPORTED_MODULE_1__["default"]), scale) : domain.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return identity(domain).unknown(unknown);
  };

  domain = arguments.length ? Array.from(domain, _number__WEBPACK_IMPORTED_MODULE_1__["default"]) : [0, 1];

  return Object(_linear__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/index.js ***!
  \********************************************************************************************/
/*! exports provided: scaleBand, scalePoint, scaleIdentity, scaleLinear, scaleLog, scaleSymlog, scaleOrdinal, scaleImplicit, scalePow, scaleSqrt, scaleQuantile, scaleQuantize, scaleThreshold, scaleTime, scaleUtc, scaleSequential, scaleSequentialLog, scaleSequentialPow, scaleSequentialSqrt, scaleSequentialSymlog, scaleSequentialQuantile, scaleDiverging, scaleDivergingLog, scaleDivergingPow, scaleDivergingSqrt, scaleDivergingSymlog, tickFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _band__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./band */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/band.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return _band__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalePoint", function() { return _band__WEBPACK_IMPORTED_MODULE_0__["point"]; });

/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleIdentity", function() { return _identity__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return _linear__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLog", function() { return _log__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _symlog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./symlog */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/symlog.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSymlog", function() { return _symlog__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ordinal */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/ordinal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleOrdinal", function() { return _ordinal__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleImplicit", function() { return _ordinal__WEBPACK_IMPORTED_MODULE_5__["implicit"]; });

/* harmony import */ var _pow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pow */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/pow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalePow", function() { return _pow__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSqrt", function() { return _pow__WEBPACK_IMPORTED_MODULE_6__["sqrt"]; });

/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quantile */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/quantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleQuantile", function() { return _quantile__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _quantize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quantize */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleQuantize", function() { return _quantize__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _threshold__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./threshold */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/threshold.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleThreshold", function() { return _threshold__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./time */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleTime", function() { return _time__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _utcTime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utcTime */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/utcTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleUtc", function() { return _utcTime__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _sequential__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sequential */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/sequential.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequential", function() { return _sequential__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialLog", function() { return _sequential__WEBPACK_IMPORTED_MODULE_12__["sequentialLog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialPow", function() { return _sequential__WEBPACK_IMPORTED_MODULE_12__["sequentialPow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialSqrt", function() { return _sequential__WEBPACK_IMPORTED_MODULE_12__["sequentialSqrt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialSymlog", function() { return _sequential__WEBPACK_IMPORTED_MODULE_12__["sequentialSymlog"]; });

/* harmony import */ var _sequentialQuantile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sequentialQuantile */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/sequentialQuantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialQuantile", function() { return _sequentialQuantile__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _diverging__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./diverging */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/diverging.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDiverging", function() { return _diverging__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDivergingLog", function() { return _diverging__WEBPACK_IMPORTED_MODULE_14__["divergingLog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDivergingPow", function() { return _diverging__WEBPACK_IMPORTED_MODULE_14__["divergingPow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDivergingSqrt", function() { return _diverging__WEBPACK_IMPORTED_MODULE_14__["divergingSqrt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDivergingSymlog", function() { return _diverging__WEBPACK_IMPORTED_MODULE_14__["divergingSymlog"]; });

/* harmony import */ var _tickFormat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tickFormat */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/tickFormat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickFormat", function() { return _tickFormat__WEBPACK_IMPORTED_MODULE_15__["default"]; });


































/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/init.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/init.js ***!
  \*******************************************************************************************/
/*! exports provided: initRange, initInterpolator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initRange", function() { return initRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initInterpolator", function() { return initInterpolator; });
function initRange(domain, range) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.range(domain); break;
    default: this.range(range).domain(domain); break;
  }
  return this;
}

function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.interpolator(domain); break;
    default: this.interpolator(interpolator).domain(domain); break;
  }
  return this;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/linear.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/linear.js ***!
  \*********************************************************************************************/
/*! exports provided: linearish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearish", function() { return linearish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return linear; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/index.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/init.js");
/* harmony import */ var _tickFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickFormat */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/tickFormat.js");





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["ticks"])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return Object(_tickFormat__WEBPACK_IMPORTED_MODULE_3__["default"])(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_1__["default"])(_continuous__WEBPACK_IMPORTED_MODULE_1__["identity"], _continuous__WEBPACK_IMPORTED_MODULE_1__["identity"]);

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_1__["copy"])(scale, linear());
  };

  _init__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);

  return linearish(scale);
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/log.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/log.js ***!
  \******************************************************************************************/
/*! exports provided: loggish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggish", function() { return loggish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return log; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/index.js");
/* harmony import */ var _nice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nice */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/nice.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./continuous */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/init.js");






function transformLog(x) {
  return Math.log(x);
}

function transformExp(x) {
  return Math.exp(x);
}

function transformLogn(x) {
  return -Math.log(-x);
}

function transformExpn(x) {
  return -Math.exp(-x);
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function loggish(transform) {
  var scale = transform(transformLog, transformExp),
      domain = scale.domain,
      base = 10,
      logs,
      pows;

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["ticks"])(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["format"])(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(Object(_nice__WEBPACK_IMPORTED_MODULE_2__["default"])(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  return scale;
}

function log() {
  var scale = loggish(Object(_continuous__WEBPACK_IMPORTED_MODULE_3__["transformer"])()).domain([1, 10]);

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_3__["copy"])(scale, log()).base(scale.base());
  };

  _init__WEBPACK_IMPORTED_MODULE_4__["initRange"].apply(scale, arguments);

  return scale;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/nice.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/nice.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/number.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/number.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return +x;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/ordinal.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/ordinal.js ***!
  \**********************************************************************************************/
/*! exports provided: implicit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "implicit", function() { return implicit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ordinal; });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/init.js");


const implicit = Symbol("implicit");

function ordinal() {
  var index = new Map(),
      domain = [],
      range = [],
      unknown = implicit;

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = new Map();
    for (const value of _) {
      const key = value + "";
      if (index.has(key)) continue;
      index.set(key, domain.push(value));
    }
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal(domain, range).unknown(unknown);
  };

  _init__WEBPACK_IMPORTED_MODULE_0__["initRange"].apply(scale, arguments);

  return scale;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/pow.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/pow.js ***!
  \******************************************************************************************/
/*! exports provided: powish, default, sqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "powish", function() { return powish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/init.js");




function transformPow(exponent) {
  return function(x) {
    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
  };
}

function transformSqrt(x) {
  return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}

function transformSquare(x) {
  return x < 0 ? -x * x : x * x;
}

function powish(transform) {
  var scale = transform(_continuous__WEBPACK_IMPORTED_MODULE_1__["identity"], _continuous__WEBPACK_IMPORTED_MODULE_1__["identity"]),
      exponent = 1;

  function rescale() {
    return exponent === 1 ? transform(_continuous__WEBPACK_IMPORTED_MODULE_1__["identity"], _continuous__WEBPACK_IMPORTED_MODULE_1__["identity"])
        : exponent === 0.5 ? transform(transformSqrt, transformSquare)
        : transform(transformPow(exponent), transformPow(1 / exponent));
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, rescale()) : exponent;
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}

function pow() {
  var scale = powish(Object(_continuous__WEBPACK_IMPORTED_MODULE_1__["transformer"])());

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_1__["copy"])(scale, pow()).exponent(scale.exponent());
  };

  _init__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);

  return scale;
}

function sqrt() {
  return pow.apply(null, arguments).exponent(0.5);
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/quantile.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/quantile.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantile; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/index.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/init.js");



function quantile() {
  var domain = [],
      range = [],
      thresholds = [],
      unknown;

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["quantile"])(domain, i / n);
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(d3_array__WEBPACK_IMPORTED_MODULE_0__["ascending"]);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initRange"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/quantize.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/quantize.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantize; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/index.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/init.js");




function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1],
      unknown;

  function scale(x) {
    return x <= x ? range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 0, n)] : unknown;
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, x0 = +x0, x1 = +x1, rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = Array.from(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : scale;
  };

  scale.thresholds = function() {
    return domain.slice();
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range)
        .unknown(unknown);
  };

  return _init__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(Object(_linear__WEBPACK_IMPORTED_MODULE_1__["linearish"])(scale), arguments);
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/sequential.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/sequential.js ***!
  \*************************************************************************************************/
/*! exports provided: copy, default, sequentialLog, sequentialSymlog, sequentialPow, sequentialSqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sequential; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequentialLog", function() { return sequentialLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequentialSymlog", function() { return sequentialSymlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequentialPow", function() { return sequentialPow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequentialSqrt", function() { return sequentialSqrt; });
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./continuous */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/init.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/log.js");
/* harmony import */ var _symlog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./symlog */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/symlog.js");
/* harmony import */ var _pow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pow */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/pow.js");







function transformer() {
  var x0 = 0,
      x1 = 1,
      t0,
      t1,
      k10,
      transform,
      interpolator = _continuous__WEBPACK_IMPORTED_MODULE_0__["identity"],
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
    return scale;
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .interpolator(source.interpolator())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function sequential() {
  var scale = Object(_linear__WEBPACK_IMPORTED_MODULE_2__["linearish"])(transformer()(_continuous__WEBPACK_IMPORTED_MODULE_0__["identity"]));

  scale.copy = function() {
    return copy(scale, sequential());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initInterpolator"].apply(scale, arguments);
}

function sequentialLog() {
  var scale = Object(_log__WEBPACK_IMPORTED_MODULE_3__["loggish"])(transformer()).domain([1, 10]);

  scale.copy = function() {
    return copy(scale, sequentialLog()).base(scale.base());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initInterpolator"].apply(scale, arguments);
}

function sequentialSymlog() {
  var scale = Object(_symlog__WEBPACK_IMPORTED_MODULE_4__["symlogish"])(transformer());

  scale.copy = function() {
    return copy(scale, sequentialSymlog()).constant(scale.constant());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initInterpolator"].apply(scale, arguments);
}

function sequentialPow() {
  var scale = Object(_pow__WEBPACK_IMPORTED_MODULE_5__["powish"])(transformer());

  scale.copy = function() {
    return copy(scale, sequentialPow()).exponent(scale.exponent());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initInterpolator"].apply(scale, arguments);
}

function sequentialSqrt() {
  return sequentialPow.apply(null, arguments).exponent(0.5);
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/sequentialQuantile.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/sequentialQuantile.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sequentialQuantile; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/index.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/init.js");




function sequentialQuantile() {
  var domain = [],
      interpolator = _continuous__WEBPACK_IMPORTED_MODULE_1__["identity"];

  function scale(x) {
    if (!isNaN(x = +x)) return interpolator((Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x) - 1) / (domain.length - 1));
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(d3_array__WEBPACK_IMPORTED_MODULE_0__["ascending"]);
    return scale;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return sequentialQuantile(interpolator).domain(domain);
  };

  return _init__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/symlog.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/symlog.js ***!
  \*********************************************************************************************/
/*! exports provided: symlogish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symlogish", function() { return symlogish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symlog; });
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/init.js");




function transformSymlog(c) {
  return function(x) {
    return Math.sign(x) * Math.log1p(Math.abs(x / c));
  };
}

function transformSymexp(c) {
  return function(x) {
    return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
  };
}

function symlogish(transform) {
  var c = 1, scale = transform(transformSymlog(c), transformSymexp(c));

  scale.constant = function(_) {
    return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}

function symlog() {
  var scale = symlogish(Object(_continuous__WEBPACK_IMPORTED_MODULE_1__["transformer"])());

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_1__["copy"])(scale, symlog()).constant(scale.constant());
  };

  return _init__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/threshold.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/threshold.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return threshold; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/index.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/init.js");



function threshold() {
  var domain = [0.5],
      range = [0, 1],
      unknown,
      n = 1;

  function scale(x) {
    return x <= x ? range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 0, n)] : unknown;
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initRange"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/tickFormat.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/tickFormat.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/.registry.npmjs.org/d3-format/1.3.2/node_modules/d3-format/src/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, count, specifier) {
  var step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start, stop, count),
      precision;
  specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatSpecifier"])(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionPrefix"])(step, value))) specifier.precision = precision;
      return Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatPrefix"])(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionRound"])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionFixed"])(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["format"])(specifier);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/time.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/time.js ***!
  \*******************************************************************************************/
/*! exports provided: calendar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendar", function() { return calendar; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/.registry.npmjs.org/d3-array/2.2.0/node_modules/d3-array/src/index.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-time */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/index.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time-format */ "./node_modules/.registry.npmjs.org/d3-time-format/2.1.3/node_modules/d3-time-format/src/index.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./continuous */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/init.js");
/* harmony import */ var _nice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nice */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/nice.js");







var durationSecond = 1000,
    durationMinute = durationSecond * 60,
    durationHour = durationMinute * 60,
    durationDay = durationHour * 24,
    durationWeek = durationDay * 7,
    durationMonth = durationDay * 30,
    durationYear = durationDay * 365;

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_3__["default"])(_continuous__WEBPACK_IMPORTED_MODULE_3__["identity"], _continuous__WEBPACK_IMPORTED_MODULE_3__["identity"]),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisector"])(function(i) { return i[2]; }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start, stop, interval), 1);
        interval = millisecond;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(Array.from(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
        ? domain(Object(_nice__WEBPACK_IMPORTED_MODULE_5__["default"])(d, interval))
        : scale;
  };

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_3__["copy"])(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return _init__WEBPACK_IMPORTED_MODULE_4__["initRange"].apply(calendar(d3_time__WEBPACK_IMPORTED_MODULE_1__["timeYear"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeMonth"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeWeek"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeDay"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeHour"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeMinute"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeSecond"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeMillisecond"], d3_time_format__WEBPACK_IMPORTED_MODULE_2__["timeFormat"]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/utcTime.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/utcTime.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/time.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-time-format */ "./node_modules/.registry.npmjs.org/d3-time-format/2.1.3/node_modules/d3-time-format/src/index.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/index.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init */ "./node_modules/.registry.npmjs.org/d3-scale/3.0.0/node_modules/d3-scale/src/init.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  return _init__WEBPACK_IMPORTED_MODULE_3__["initRange"].apply(Object(_time__WEBPACK_IMPORTED_MODULE_0__["calendar"])(d3_time__WEBPACK_IMPORTED_MODULE_2__["utcYear"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMonth"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcWeek"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcDay"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcHour"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMinute"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcSecond"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMillisecond"], d3_time_format__WEBPACK_IMPORTED_MODULE_1__["utcFormat"]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]), arguments);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/constant.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/constant.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/create.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/create.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creator */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/creator.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/select.js");



/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  return Object(_select__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_creator__WEBPACK_IMPORTED_MODULE_0__["default"])(name).call(document.documentElement));
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/creator.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/creator.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespace */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/namespace.js");
/* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./namespaces */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/namespaces.js");



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === _namespaces__WEBPACK_IMPORTED_MODULE_1__["xhtml"] && document.documentElement.namespaceURI === _namespaces__WEBPACK_IMPORTED_MODULE_1__["xhtml"]
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var fullname = Object(_namespace__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/index.js ***!
  \****************************************************************************************************/
/*! exports provided: create, creator, local, matcher, mouse, namespace, namespaces, clientPoint, select, selectAll, selection, selector, selectorAll, style, touch, touches, window, event, customEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/create.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _create__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creator */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/creator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "creator", function() { return _creator__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/local.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "local", function() { return _local__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matcher */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/matcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return _matcher__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _mouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mouse */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/mouse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return _mouse__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./namespace */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/namespace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return _namespace__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./namespaces */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/namespaces.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespaces", function() { return _namespaces__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./point */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/point.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clientPoint", function() { return _point__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./select */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _select__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _selectAll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selectAll */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selectAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _selectAll__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selection/index */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selection", function() { return _selection_index__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./selector */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return _selector__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _selectorAll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./selectorAll */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selectorAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectorAll", function() { return _selectorAll__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _selection_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./selection/style */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "style", function() { return _selection_style__WEBPACK_IMPORTED_MODULE_13__["styleValue"]; });

/* harmony import */ var _touch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./touch */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/touch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "touch", function() { return _touch__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _touches__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./touches */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/touches.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "touches", function() { return _touches__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./window */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/window.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return _window__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _selection_on__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./selection/on */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/on.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "event", function() { return _selection_on__WEBPACK_IMPORTED_MODULE_17__["event"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customEvent", function() { return _selection_on__WEBPACK_IMPORTED_MODULE_17__["customEvent"]; });





















/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/local.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/local.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return local; });
var nextId = 0;

function local() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/matcher.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/matcher.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return function() {
    return this.matches(selector);
  };
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/mouse.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/mouse.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/sourceEvent.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/point.js");



/* harmony default export */ __webpack_exports__["default"] = (function(node) {
  var event = Object(_sourceEvent__WEBPACK_IMPORTED_MODULE_0__["default"])();
  if (event.changedTouches) event = event.changedTouches[0];
  return Object(_point__WEBPACK_IMPORTED_MODULE_1__["default"])(node, event);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/namespace.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/namespace.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespaces */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/namespaces.js");


/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return _namespaces__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProperty(prefix) ? {space: _namespaces__WEBPACK_IMPORTED_MODULE_0__["default"][prefix], local: name} : name;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/namespaces.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/namespaces.js ***!
  \*********************************************************************************************************/
/*! exports provided: xhtml, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xhtml", function() { return xhtml; });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ __webpack_exports__["default"] = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/point.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/point.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/select.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/select.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return typeof selector === "string"
      ? new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([[document.querySelector(selector)]], [document.documentElement])
      : new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([[selector]], _selection_index__WEBPACK_IMPORTED_MODULE_0__["root"]);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selectAll.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selectAll.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return typeof selector === "string"
      ? new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([document.querySelectorAll(selector)], [document.documentElement])
      : new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([selector == null ? [] : selector], _selection_index__WEBPACK_IMPORTED_MODULE_0__["root"]);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/append.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/append.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/creator.js");


/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var create = typeof name === "function" ? name : Object(_creator__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/attr.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/attr.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../namespace */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/namespace.js");


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var fullname = Object(_namespace__WEBPACK_IMPORTED_MODULE_0__["default"])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/call.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/call.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/classed.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/classed.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/clone.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/clone.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function selection_cloneShallow() {
  return this.parentNode.insertBefore(this.cloneNode(false), this.nextSibling);
}

function selection_cloneDeep() {
  return this.parentNode.insertBefore(this.cloneNode(true), this.nextSibling);
}

/* harmony default export */ __webpack_exports__["default"] = (function(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/data.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/data.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _enter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enter */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/enter.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/constant.js");




var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new _enter__WEBPACK_IMPORTED_MODULE_1__["EnterNode"](parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new _enter__WEBPACK_IMPORTED_MODULE_1__["EnterNode"](parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/datum.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/datum.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/dispatch.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/dispatch.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/window.js");


function dispatchEvent(node, type, params) {
  var window = Object(_window__WEBPACK_IMPORTED_MODULE_0__["default"])(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/each.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/each.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/empty.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/empty.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  return !this.node();
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/enter.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/enter.js ***!
  \**************************************************************************************************************/
/*! exports provided: default, EnterNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterNode", function() { return EnterNode; });
/* harmony import */ var _sparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sparse */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/sparse.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new _index__WEBPACK_IMPORTED_MODULE_1__["Selection"](this._enter || this._groups.map(_sparse__WEBPACK_IMPORTED_MODULE_0__["default"]), this._parents);
});

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/exit.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/exit.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sparse */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/sparse.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new _index__WEBPACK_IMPORTED_MODULE_1__["Selection"](this._exit || this._groups.map(_sparse__WEBPACK_IMPORTED_MODULE_0__["default"]), this._parents);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/filter.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/filter.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _matcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../matcher */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/matcher.js");



/* harmony default export */ __webpack_exports__["default"] = (function(match) {
  if (typeof match !== "function") match = Object(_matcher__WEBPACK_IMPORTED_MODULE_1__["default"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](subgroups, this._parents);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/html.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/html.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/index.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/index.js ***!
  \**************************************************************************************************************/
/*! exports provided: root, Selection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/select.js");
/* harmony import */ var _selectAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectAll */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/selectAll.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/filter.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/data.js");
/* harmony import */ var _enter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enter */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/enter.js");
/* harmony import */ var _exit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exit */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/exit.js");
/* harmony import */ var _join__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./join */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/join.js");
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./merge */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/merge.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/order.js");
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sort */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/sort.js");
/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./call */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/call.js");
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nodes */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/nodes.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/node.js");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./size */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/size.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./empty */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/empty.js");
/* harmony import */ var _each__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./each */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/each.js");
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./attr */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/attr.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./style */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/style.js");
/* harmony import */ var _property__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./property */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/property.js");
/* harmony import */ var _classed__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./classed */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/classed.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./text */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/text.js");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./html */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/html.js");
/* harmony import */ var _raise__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./raise */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/raise.js");
/* harmony import */ var _lower__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lower */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/lower.js");
/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./append */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/append.js");
/* harmony import */ var _insert__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./insert */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/insert.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./remove */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/remove.js");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./clone */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/clone.js");
/* harmony import */ var _datum__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./datum */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/datum.js");
/* harmony import */ var _on__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./on */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/on.js");
/* harmony import */ var _dispatch__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dispatch */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/dispatch.js");
































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: _select__WEBPACK_IMPORTED_MODULE_0__["default"],
  selectAll: _selectAll__WEBPACK_IMPORTED_MODULE_1__["default"],
  filter: _filter__WEBPACK_IMPORTED_MODULE_2__["default"],
  data: _data__WEBPACK_IMPORTED_MODULE_3__["default"],
  enter: _enter__WEBPACK_IMPORTED_MODULE_4__["default"],
  exit: _exit__WEBPACK_IMPORTED_MODULE_5__["default"],
  join: _join__WEBPACK_IMPORTED_MODULE_6__["default"],
  merge: _merge__WEBPACK_IMPORTED_MODULE_7__["default"],
  order: _order__WEBPACK_IMPORTED_MODULE_8__["default"],
  sort: _sort__WEBPACK_IMPORTED_MODULE_9__["default"],
  call: _call__WEBPACK_IMPORTED_MODULE_10__["default"],
  nodes: _nodes__WEBPACK_IMPORTED_MODULE_11__["default"],
  node: _node__WEBPACK_IMPORTED_MODULE_12__["default"],
  size: _size__WEBPACK_IMPORTED_MODULE_13__["default"],
  empty: _empty__WEBPACK_IMPORTED_MODULE_14__["default"],
  each: _each__WEBPACK_IMPORTED_MODULE_15__["default"],
  attr: _attr__WEBPACK_IMPORTED_MODULE_16__["default"],
  style: _style__WEBPACK_IMPORTED_MODULE_17__["default"],
  property: _property__WEBPACK_IMPORTED_MODULE_18__["default"],
  classed: _classed__WEBPACK_IMPORTED_MODULE_19__["default"],
  text: _text__WEBPACK_IMPORTED_MODULE_20__["default"],
  html: _html__WEBPACK_IMPORTED_MODULE_21__["default"],
  raise: _raise__WEBPACK_IMPORTED_MODULE_22__["default"],
  lower: _lower__WEBPACK_IMPORTED_MODULE_23__["default"],
  append: _append__WEBPACK_IMPORTED_MODULE_24__["default"],
  insert: _insert__WEBPACK_IMPORTED_MODULE_25__["default"],
  remove: _remove__WEBPACK_IMPORTED_MODULE_26__["default"],
  clone: _clone__WEBPACK_IMPORTED_MODULE_27__["default"],
  datum: _datum__WEBPACK_IMPORTED_MODULE_28__["default"],
  on: _on__WEBPACK_IMPORTED_MODULE_29__["default"],
  dispatch: _dispatch__WEBPACK_IMPORTED_MODULE_30__["default"]
};

/* harmony default export */ __webpack_exports__["default"] = (selection);


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/insert.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/insert.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/creator.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selector.js");



function constantNull() {
  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, before) {
  var create = typeof name === "function" ? name : Object(_creator__WEBPACK_IMPORTED_MODULE_0__["default"])(name),
      select = before == null ? constantNull : typeof before === "function" ? before : Object(_selector__WEBPACK_IMPORTED_MODULE_1__["default"])(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/join.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/join.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null) update = onupdate(update);
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/lower.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/lower.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.each(lower);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/merge.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/merge.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](merges, this._parents);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/node.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/node.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/nodes.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/nodes.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/on.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/on.js ***!
  \***********************************************************************************************************/
/*! exports provided: event, default, customEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customEvent", function() { return customEvent; });
var filterEvents = {};

var event = null;

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!("onmouseenter" in element)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = event; // Events can be reentrant (e.g., focus).
    event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(typename, value, capture) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
});

function customEvent(event1, listener, that, args) {
  var event0 = event;
  event1.sourceEvent = event;
  event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    event = event0;
  }
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/order.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/order.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/property.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/property.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/raise.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/raise.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.each(raise);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/remove.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/remove.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.each(remove);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/select.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/select.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selector.js");



/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  if (typeof select !== "function") select = Object(_selector__WEBPACK_IMPORTED_MODULE_1__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](subgroups, this._parents);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/selectAll.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/selectAll.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _selectorAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectorAll */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selectorAll.js");



/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  if (typeof select !== "function") select = Object(_selectorAll__WEBPACK_IMPORTED_MODULE_1__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](subgroups, parents);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/size.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/size.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/sort.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/sort.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](sortgroups, this._parents).order();
});

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/sparse.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/sparse.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(update) {
  return new Array(update.length);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/style.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/style.js ***!
  \**************************************************************************************************************/
/*! exports provided: default, styleValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleValue", function() { return styleValue; });
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/window.js");


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
});

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || Object(_window__WEBPACK_IMPORTED_MODULE_0__["default"])(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/text.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/text.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selector.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selector.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function none() {}

/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selectorAll.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selectorAll.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function empty() {
  return [];
}

/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/sourceEvent.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/sourceEvent.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selection_on__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/on */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/selection/on.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  var current = _selection_on__WEBPACK_IMPORTED_MODULE_0__["event"], source;
  while (source = current.sourceEvent) current = source;
  return current;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/touch.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/touch.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/sourceEvent.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/point.js");



/* harmony default export */ __webpack_exports__["default"] = (function(node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = Object(_sourceEvent__WEBPACK_IMPORTED_MODULE_0__["default"])().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return Object(_point__WEBPACK_IMPORTED_MODULE_1__["default"])(node, touch);
    }
  }

  return null;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/touches.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/touches.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/sourceEvent.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/point.js");



/* harmony default export */ __webpack_exports__["default"] = (function(node, touches) {
  if (touches == null) touches = Object(_sourceEvent__WEBPACK_IMPORTED_MODULE_0__["default"])().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = Object(_point__WEBPACK_IMPORTED_MODULE_1__["default"])(node, touches[i]);
  }

  return points;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/window.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/window.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-time-format/2.1.3/node_modules/d3-time-format/src/defaultLocale.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-time-format/2.1.3/node_modules/d3-time-format/src/defaultLocale.js ***!
  \****************************************************************************************************************/
/*! exports provided: timeFormat, timeParse, utcFormat, utcParse, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return timeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeParse", function() { return timeParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFormat", function() { return utcFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcParse", function() { return utcParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultLocale; });
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale */ "./node_modules/.registry.npmjs.org/d3-time-format/2.1.3/node_modules/d3-time-format/src/locale.js");


var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = Object(_locale__WEBPACK_IMPORTED_MODULE_0__["default"])(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-time-format/2.1.3/node_modules/d3-time-format/src/index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-time-format/2.1.3/node_modules/d3-time-format/src/index.js ***!
  \********************************************************************************************************/
/*! exports provided: timeFormatDefaultLocale, timeFormat, timeParse, utcFormat, utcParse, timeFormatLocale, isoFormat, isoParse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaultLocale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale */ "./node_modules/.registry.npmjs.org/d3-time-format/2.1.3/node_modules/d3-time-format/src/defaultLocale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormatDefaultLocale", function() { return _defaultLocale__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return _defaultLocale__WEBPACK_IMPORTED_MODULE_0__["timeFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeParse", function() { return _defaultLocale__WEBPACK_IMPORTED_MODULE_0__["timeParse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcFormat", function() { return _defaultLocale__WEBPACK_IMPORTED_MODULE_0__["utcFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcParse", function() { return _defaultLocale__WEBPACK_IMPORTED_MODULE_0__["utcParse"]; });

/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale */ "./node_modules/.registry.npmjs.org/d3-time-format/2.1.3/node_modules/d3-time-format/src/locale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormatLocale", function() { return _locale__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _isoFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isoFormat */ "./node_modules/.registry.npmjs.org/d3-time-format/2.1.3/node_modules/d3-time-format/src/isoFormat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isoFormat", function() { return _isoFormat__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _isoParse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isoParse */ "./node_modules/.registry.npmjs.org/d3-time-format/2.1.3/node_modules/d3-time-format/src/isoParse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isoParse", function() { return _isoParse__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-time-format/2.1.3/node_modules/d3-time-format/src/isoFormat.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-time-format/2.1.3/node_modules/d3-time-format/src/isoFormat.js ***!
  \************************************************************************************************************/
/*! exports provided: isoSpecifier, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isoSpecifier", function() { return isoSpecifier; });
/* harmony import */ var _defaultLocale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale */ "./node_modules/.registry.npmjs.org/d3-time-format/2.1.3/node_modules/d3-time-format/src/defaultLocale.js");


var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
  return date.toISOString();
}

var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : Object(_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["utcFormat"])(isoSpecifier);

/* harmony default export */ __webpack_exports__["default"] = (formatIso);


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-time-format/2.1.3/node_modules/d3-time-format/src/isoParse.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-time-format/2.1.3/node_modules/d3-time-format/src/isoParse.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isoFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isoFormat */ "./node_modules/.registry.npmjs.org/d3-time-format/2.1.3/node_modules/d3-time-format/src/isoFormat.js");
/* harmony import */ var _defaultLocale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultLocale */ "./node_modules/.registry.npmjs.org/d3-time-format/2.1.3/node_modules/d3-time-format/src/defaultLocale.js");



function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}

var parseIso = +new Date("2000-01-01T00:00:00.000Z")
    ? parseIsoNative
    : Object(_defaultLocale__WEBPACK_IMPORTED_MODULE_1__["utcParse"])(_isoFormat__WEBPACK_IMPORTED_MODULE_0__["isoSpecifier"]);

/* harmony default export */ __webpack_exports__["default"] = (parseIso);


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-time-format/2.1.3/node_modules/d3-time-format/src/locale.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-time-format/2.1.3/node_modules/d3-time-format/src/locale.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLocale; });
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-time */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/index.js");


function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newYear(y) {
  return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, newDate) {
    return function(string) {
      var d = newYear(1900),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newYear(d.y)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? d3_time__WEBPACK_IMPORTED_MODULE_0__["utcMonday"].ceil(week) : Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcMonday"])(week);
          week = d3_time__WEBPACK_IMPORTED_MODULE_0__["utcDay"].offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = newDate(newYear(d.y)), day = week.getDay();
          week = day > 4 || day === 0 ? d3_time__WEBPACK_IMPORTED_MODULE_0__["timeMonday"].ceil(week) : Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeMonday"])(week);
          week = d3_time__WEBPACK_IMPORTED_MODULE_0__["timeDay"].offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return newDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", localDate);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier, utcDate);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = (+n[0]) * 1000, i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + d3_time__WEBPACK_IMPORTED_MODULE_0__["timeDay"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeSunday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d), d), p, 2);
}

function formatWeekNumberISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"])(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"].ceil(d);
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d), d) + (Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeMonday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d), d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + d3_time__WEBPACK_IMPORTED_MODULE_0__["utcDay"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcSunday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d), d), p, 2);
}

function formatUTCWeekNumberISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"])(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"].ceil(d);
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d), d) + (Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcMonday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d), d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/day.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/day.js ***!
  \*****************************************************************************************/
/*! exports provided: default, days */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "days", function() { return days; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/duration.js");



var day = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationDay"];
}, function(date) {
  return date.getDate() - 1;
});

/* harmony default export */ __webpack_exports__["default"] = (day);
var days = day.range;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/duration.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/duration.js ***!
  \**********************************************************************************************/
/*! exports provided: durationSecond, durationMinute, durationHour, durationDay, durationWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationSecond", function() { return durationSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationMinute", function() { return durationMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationHour", function() { return durationHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationDay", function() { return durationDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationWeek", function() { return durationWeek; });
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/hour.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/hour.js ***!
  \******************************************************************************************/
/*! exports provided: default, hours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hours", function() { return hours; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/duration.js");



var hour = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * _duration__WEBPACK_IMPORTED_MODULE_1__["durationSecond"] - date.getMinutes() * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]);
}, function(date, step) {
  date.setTime(+date + step * _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"]);
}, function(start, end) {
  return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"];
}, function(date) {
  return date.getHours();
});

/* harmony default export */ __webpack_exports__["default"] = (hour);
var hours = hour.range;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/index.js ***!
  \*******************************************************************************************/
/*! exports provided: timeInterval, timeMillisecond, timeMilliseconds, utcMillisecond, utcMilliseconds, timeSecond, timeSeconds, utcSecond, utcSeconds, timeMinute, timeMinutes, timeHour, timeHours, timeDay, timeDays, timeWeek, timeWeeks, timeSunday, timeSundays, timeMonday, timeMondays, timeTuesday, timeTuesdays, timeWednesday, timeWednesdays, timeThursday, timeThursdays, timeFriday, timeFridays, timeSaturday, timeSaturdays, timeMonth, timeMonths, timeYear, timeYears, utcMinute, utcMinutes, utcHour, utcHours, utcDay, utcDays, utcWeek, utcWeeks, utcSunday, utcSundays, utcMonday, utcMondays, utcTuesday, utcTuesdays, utcWednesday, utcWednesdays, utcThursday, utcThursdays, utcFriday, utcFridays, utcSaturday, utcSaturdays, utcMonth, utcMonths, utcYear, utcYears */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeInterval", function() { return _interval__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _millisecond__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./millisecond */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/millisecond.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMillisecond", function() { return _millisecond__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMilliseconds", function() { return _millisecond__WEBPACK_IMPORTED_MODULE_1__["milliseconds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMillisecond", function() { return _millisecond__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMilliseconds", function() { return _millisecond__WEBPACK_IMPORTED_MODULE_1__["milliseconds"]; });

/* harmony import */ var _second__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./second */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/second.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSecond", function() { return _second__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSeconds", function() { return _second__WEBPACK_IMPORTED_MODULE_2__["seconds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSecond", function() { return _second__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSeconds", function() { return _second__WEBPACK_IMPORTED_MODULE_2__["seconds"]; });

/* harmony import */ var _minute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./minute */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/minute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMinute", function() { return _minute__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMinutes", function() { return _minute__WEBPACK_IMPORTED_MODULE_3__["minutes"]; });

/* harmony import */ var _hour__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hour */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/hour.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeHour", function() { return _hour__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeHours", function() { return _hour__WEBPACK_IMPORTED_MODULE_4__["hours"]; });

/* harmony import */ var _day__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./day */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/day.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeDay", function() { return _day__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeDays", function() { return _day__WEBPACK_IMPORTED_MODULE_5__["days"]; });

/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./week */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/week.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWeek", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["sunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWeeks", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["sundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSunday", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["sunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSundays", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["sundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMonday", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["monday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMondays", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["mondays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeTuesday", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["tuesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeTuesdays", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["tuesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWednesday", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["wednesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWednesdays", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["wednesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeThursday", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["thursday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeThursdays", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["thursdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFriday", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["friday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFridays", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["fridays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSaturday", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["saturday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSaturdays", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["saturdays"]; });

/* harmony import */ var _month__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./month */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/month.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMonth", function() { return _month__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMonths", function() { return _month__WEBPACK_IMPORTED_MODULE_7__["months"]; });

/* harmony import */ var _year__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./year */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/year.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeYear", function() { return _year__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeYears", function() { return _year__WEBPACK_IMPORTED_MODULE_8__["years"]; });

/* harmony import */ var _utcMinute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utcMinute */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/utcMinute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMinute", function() { return _utcMinute__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMinutes", function() { return _utcMinute__WEBPACK_IMPORTED_MODULE_9__["utcMinutes"]; });

/* harmony import */ var _utcHour__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utcHour */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/utcHour.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcHour", function() { return _utcHour__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcHours", function() { return _utcHour__WEBPACK_IMPORTED_MODULE_10__["utcHours"]; });

/* harmony import */ var _utcDay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utcDay */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/utcDay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcDay", function() { return _utcDay__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcDays", function() { return _utcDay__WEBPACK_IMPORTED_MODULE_11__["utcDays"]; });

/* harmony import */ var _utcWeek__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utcWeek */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/utcWeek.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWeek", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWeeks", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSunday", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSundays", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMonday", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcMonday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMondays", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcMondays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcTuesday", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcTuesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcTuesdays", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcTuesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWednesday", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcWednesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWednesdays", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcWednesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcThursday", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcThursday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcThursdays", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcThursdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcFriday", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcFriday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcFridays", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcFridays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSaturday", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSaturday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSaturdays", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSaturdays"]; });

/* harmony import */ var _utcMonth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utcMonth */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/utcMonth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMonth", function() { return _utcMonth__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMonths", function() { return _utcMonth__WEBPACK_IMPORTED_MODULE_13__["utcMonths"]; });

/* harmony import */ var _utcYear__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utcYear */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/utcYear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcYear", function() { return _utcYear__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcYears", function() { return _utcYear__WEBPACK_IMPORTED_MODULE_14__["utcYears"]; });
































/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/interval.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/interval.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return newInterval; });
var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = new Date(+date)), date;
  }

  interval.floor = interval;

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/millisecond.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/millisecond.js ***!
  \*************************************************************************************************/
/*! exports provided: default, milliseconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "milliseconds", function() { return milliseconds; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/interval.js");


var millisecond = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (millisecond);
var milliseconds = millisecond.range;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/minute.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/minute.js ***!
  \********************************************************************************************/
/*! exports provided: default, minutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minutes", function() { return minutes; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/duration.js");



var minute = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * _duration__WEBPACK_IMPORTED_MODULE_1__["durationSecond"]);
}, function(date, step) {
  date.setTime(+date + step * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]);
}, function(start, end) {
  return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"];
}, function(date) {
  return date.getMinutes();
});

/* harmony default export */ __webpack_exports__["default"] = (minute);
var minutes = minute.range;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/month.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/month.js ***!
  \*******************************************************************************************/
/*! exports provided: default, months */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "months", function() { return months; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/interval.js");


var month = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

/* harmony default export */ __webpack_exports__["default"] = (month);
var months = month.range;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/second.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/second.js ***!
  \********************************************************************************************/
/*! exports provided: default, seconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seconds", function() { return seconds; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/duration.js");



var second = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setTime(date - date.getMilliseconds());
}, function(date, step) {
  date.setTime(+date + step * _duration__WEBPACK_IMPORTED_MODULE_1__["durationSecond"]);
}, function(start, end) {
  return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationSecond"];
}, function(date) {
  return date.getUTCSeconds();
});

/* harmony default export */ __webpack_exports__["default"] = (second);
var seconds = second.range;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/utcDay.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/utcDay.js ***!
  \********************************************************************************************/
/*! exports provided: default, utcDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcDays", function() { return utcDays; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/duration.js");



var utcDay = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationDay"];
}, function(date) {
  return date.getUTCDate() - 1;
});

/* harmony default export */ __webpack_exports__["default"] = (utcDay);
var utcDays = utcDay.range;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/utcHour.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/utcHour.js ***!
  \*********************************************************************************************/
/*! exports provided: default, utcHours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcHours", function() { return utcHours; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/duration.js");



var utcHour = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"]);
}, function(start, end) {
  return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"];
}, function(date) {
  return date.getUTCHours();
});

/* harmony default export */ __webpack_exports__["default"] = (utcHour);
var utcHours = utcHour.range;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/utcMinute.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/utcMinute.js ***!
  \***********************************************************************************************/
/*! exports provided: default, utcMinutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMinutes", function() { return utcMinutes; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/duration.js");



var utcMinute = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]);
}, function(start, end) {
  return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"];
}, function(date) {
  return date.getUTCMinutes();
});

/* harmony default export */ __webpack_exports__["default"] = (utcMinute);
var utcMinutes = utcMinute.range;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/utcMonth.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/utcMonth.js ***!
  \**********************************************************************************************/
/*! exports provided: default, utcMonths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMonths", function() { return utcMonths; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/interval.js");


var utcMonth = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

/* harmony default export */ __webpack_exports__["default"] = (utcMonth);
var utcMonths = utcMonth.range;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/utcWeek.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/utcWeek.js ***!
  \*********************************************************************************************/
/*! exports provided: utcSunday, utcMonday, utcTuesday, utcWednesday, utcThursday, utcFriday, utcSaturday, utcSundays, utcMondays, utcTuesdays, utcWednesdays, utcThursdays, utcFridays, utcSaturdays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSunday", function() { return utcSunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMonday", function() { return utcMonday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcTuesday", function() { return utcTuesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcWednesday", function() { return utcWednesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcThursday", function() { return utcThursday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFriday", function() { return utcFriday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSaturday", function() { return utcSaturday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSundays", function() { return utcSundays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMondays", function() { return utcMondays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcTuesdays", function() { return utcTuesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcWednesdays", function() { return utcWednesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcThursdays", function() { return utcThursdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFridays", function() { return utcFridays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSaturdays", function() { return utcSaturdays; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/duration.js");



function utcWeekday(i) {
  return Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationWeek"];
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/utcYear.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/utcYear.js ***!
  \*********************************************************************************************/
/*! exports provided: default, utcYears */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcYears", function() { return utcYears; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/interval.js");


var utcYear = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (utcYear);
var utcYears = utcYear.range;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/week.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/week.js ***!
  \******************************************************************************************/
/*! exports provided: sunday, monday, tuesday, wednesday, thursday, friday, saturday, sundays, mondays, tuesdays, wednesdays, thursdays, fridays, saturdays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sunday", function() { return sunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monday", function() { return monday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuesday", function() { return tuesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wednesday", function() { return wednesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thursday", function() { return thursday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "friday", function() { return friday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saturday", function() { return saturday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sundays", function() { return sundays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mondays", function() { return mondays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuesdays", function() { return tuesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wednesdays", function() { return wednesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thursdays", function() { return thursdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fridays", function() { return fridays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saturdays", function() { return saturdays; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/duration.js");



function weekday(i) {
  return Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationWeek"];
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/year.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/year.js ***!
  \******************************************************************************************/
/*! exports provided: default, years */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "years", function() { return years; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/.registry.npmjs.org/d3-time/1.0.11/node_modules/d3-time/src/interval.js");


var year = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (year);
var years = year.range;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-timer/1.0.9/node_modules/d3-timer/src/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-timer/1.0.9/node_modules/d3-timer/src/index.js ***!
  \********************************************************************************************/
/*! exports provided: now, timer, timerFlush, timeout, interval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ "./node_modules/.registry.npmjs.org/d3-timer/1.0.9/node_modules/d3-timer/src/timer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return _timer__WEBPACK_IMPORTED_MODULE_0__["now"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return _timer__WEBPACK_IMPORTED_MODULE_0__["timer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timerFlush", function() { return _timer__WEBPACK_IMPORTED_MODULE_0__["timerFlush"]; });

/* harmony import */ var _timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeout */ "./node_modules/.registry.npmjs.org/d3-timer/1.0.9/node_modules/d3-timer/src/timeout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return _timeout__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interval */ "./node_modules/.registry.npmjs.org/d3-timer/1.0.9/node_modules/d3-timer/src/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return _interval__WEBPACK_IMPORTED_MODULE_2__["default"]; });








/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-timer/1.0.9/node_modules/d3-timer/src/interval.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-timer/1.0.9/node_modules/d3-timer/src/interval.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ "./node_modules/.registry.npmjs.org/d3-timer/1.0.9/node_modules/d3-timer/src/timer.js");


/* harmony default export */ __webpack_exports__["default"] = (function(callback, delay, time) {
  var t = new _timer__WEBPACK_IMPORTED_MODULE_0__["Timer"], total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? Object(_timer__WEBPACK_IMPORTED_MODULE_0__["now"])() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-timer/1.0.9/node_modules/d3-timer/src/timeout.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-timer/1.0.9/node_modules/d3-timer/src/timeout.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ "./node_modules/.registry.npmjs.org/d3-timer/1.0.9/node_modules/d3-timer/src/timer.js");


/* harmony default export */ __webpack_exports__["default"] = (function(callback, delay, time) {
  var t = new _timer__WEBPACK_IMPORTED_MODULE_0__["Timer"];
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-timer/1.0.9/node_modules/d3-timer/src/timer.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-timer/1.0.9/node_modules/d3-timer/src/timer.js ***!
  \********************************************************************************************/
/*! exports provided: now, Timer, timer, timerFlush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerFlush", function() { return timerFlush; });
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/active.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/active.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transition_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition/index */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _transition_schedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition/schedule */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/schedule.js");



var root = [null];

/* harmony default export */ __webpack_exports__["default"] = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > _transition_schedule__WEBPACK_IMPORTED_MODULE_1__["SCHEDULED"] && schedule.name === name) {
        return new _transition_index__WEBPACK_IMPORTED_MODULE_0__["Transition"]([[node]], root, name, +i);
      }
    }
  }

  return null;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/index.js ***!
  \******************************************************************************************************/
/*! exports provided: transition, active, interrupt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/selection/index.js");
/* harmony import */ var _transition_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition/index */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _active__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./active */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/active.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "active", function() { return _active__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _interrupt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interrupt */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/interrupt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interrupt", function() { return _interrupt__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/interrupt.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/interrupt.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transition_schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition/schedule */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/schedule.js");


/* harmony default export */ __webpack_exports__["default"] = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > _transition_schedule__WEBPACK_IMPORTED_MODULE_0__["STARTING"] && schedule.state < _transition_schedule__WEBPACK_IMPORTED_MODULE_0__["ENDING"];
    schedule.state = _transition_schedule__WEBPACK_IMPORTED_MODULE_0__["ENDED"];
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/selection/index.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/selection/index.js ***!
  \****************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/index.js");
/* harmony import */ var _interrupt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interrupt */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/selection/interrupt.js");
/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transition */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/selection/transition.js");




d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.interrupt = _interrupt__WEBPACK_IMPORTED_MODULE_1__["default"];
d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.transition = _transition__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/selection/interrupt.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/selection/interrupt.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interrupt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interrupt */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/interrupt.js");


/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  return this.each(function() {
    Object(_interrupt__WEBPACK_IMPORTED_MODULE_0__["default"])(this, name);
  });
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/selection/transition.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/selection/transition.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transition_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transition/index */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _transition_schedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transition/schedule */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/schedule.js");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-ease */ "./node_modules/.registry.npmjs.org/d3-ease/1.0.5/node_modules/d3-ease/src/index.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-timer */ "./node_modules/.registry.npmjs.org/d3-timer/1.0.9/node_modules/d3-timer/src/index.js");





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: d3_ease__WEBPACK_IMPORTED_MODULE_2__["easeCubicInOut"]
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = Object(d3_timer__WEBPACK_IMPORTED_MODULE_3__["now"])(), defaultTiming;
    }
  }
  return timing;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var id,
      timing;

  if (name instanceof _transition_index__WEBPACK_IMPORTED_MODULE_0__["Transition"]) {
    id = name._id, name = name._name;
  } else {
    id = Object(_transition_index__WEBPACK_IMPORTED_MODULE_0__["newId"])(), (timing = defaultTiming).time = Object(d3_timer__WEBPACK_IMPORTED_MODULE_3__["now"])(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        Object(_transition_schedule__WEBPACK_IMPORTED_MODULE_1__["default"])(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new _transition_index__WEBPACK_IMPORTED_MODULE_0__["Transition"](groups, this._parents, name, id);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/attr.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/attr.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/index.js");
/* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tween */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interpolate */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/interpolate.js");





function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var fullname = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["namespace"])(name), i = fullname === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["interpolateTransformSvg"] : _interpolate__WEBPACK_IMPORTED_MODULE_3__["default"];
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, Object(_tween__WEBPACK_IMPORTED_MODULE_2__["tweenValue"])(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/attrTween.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/attrTween.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/index.js");


function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i(t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i(t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["namespace"])(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/delay.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/delay.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/schedule.js");


function delayFunction(id, value) {
  return function() {
    Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["init"])(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["init"])(this, id).delay = value;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["get"])(this.node(), id).delay;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/duration.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/duration.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/schedule.js");


function durationFunction(id, value) {
  return function() {
    Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id).duration = value;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["get"])(this.node(), id).duration;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/ease.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/ease.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/schedule.js");


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id).ease = value;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["get"])(this.node(), id).ease;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/end.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/end.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/schedule.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });
  });
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/filter.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/filter.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function(match) {
  if (typeof match !== "function") match = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["matcher"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_1__["Transition"](subgroups, this._parents, this._name, this._id);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/index.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/index.js ***!
  \*****************************************************************************************************************/
/*! exports provided: Transition, default, newId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return Transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newId", function() { return newId; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/index.js");
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attr */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/attr.js");
/* harmony import */ var _attrTween__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attrTween */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/attrTween.js");
/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delay */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/delay.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duration */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/duration.js");
/* harmony import */ var _ease__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ease */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/ease.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/filter.js");
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./merge */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/merge.js");
/* harmony import */ var _on__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./on */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/on.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./remove */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/remove.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./select */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/select.js");
/* harmony import */ var _selectAll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./selectAll */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/selectAll.js");
/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./selection */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/selection.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/style.js");
/* harmony import */ var _styleTween__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styleTween */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/styleTween.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./text */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/text.js");
/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./transition */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/transition.js");
/* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tween */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _end__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./end */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/end.js");




















var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"])().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: _select__WEBPACK_IMPORTED_MODULE_10__["default"],
  selectAll: _selectAll__WEBPACK_IMPORTED_MODULE_11__["default"],
  filter: _filter__WEBPACK_IMPORTED_MODULE_6__["default"],
  merge: _merge__WEBPACK_IMPORTED_MODULE_7__["default"],
  selection: _selection__WEBPACK_IMPORTED_MODULE_12__["default"],
  transition: _transition__WEBPACK_IMPORTED_MODULE_16__["default"],
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: _on__WEBPACK_IMPORTED_MODULE_8__["default"],
  attr: _attr__WEBPACK_IMPORTED_MODULE_1__["default"],
  attrTween: _attrTween__WEBPACK_IMPORTED_MODULE_2__["default"],
  style: _style__WEBPACK_IMPORTED_MODULE_13__["default"],
  styleTween: _styleTween__WEBPACK_IMPORTED_MODULE_14__["default"],
  text: _text__WEBPACK_IMPORTED_MODULE_15__["default"],
  remove: _remove__WEBPACK_IMPORTED_MODULE_9__["default"],
  tween: _tween__WEBPACK_IMPORTED_MODULE_17__["default"],
  delay: _delay__WEBPACK_IMPORTED_MODULE_3__["default"],
  duration: _duration__WEBPACK_IMPORTED_MODULE_4__["default"],
  ease: _ease__WEBPACK_IMPORTED_MODULE_5__["default"],
  end: _end__WEBPACK_IMPORTED_MODULE_18__["default"]
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/interpolate.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/interpolate.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/.registry.npmjs.org/d3-color/1.2.8/node_modules/d3-color/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var c;
  return (typeof b === "number" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"]
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_0__["color"] ? d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateRgb"]
      : (c = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["color"])(b)) ? (b = c, d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateRgb"])
      : d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateString"])(a, b);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/merge.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/merge.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Transition"](merges, this._parents, this._name, this._id);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/on.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/on.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/schedule.js");


function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? _schedule__WEBPACK_IMPORTED_MODULE_0__["init"] : _schedule__WEBPACK_IMPORTED_MODULE_0__["set"];
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["get"])(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/remove.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/remove.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.on("end.remove", removeFunction(this._id));
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/schedule.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/schedule.js ***!
  \********************************************************************************************************************/
/*! exports provided: CREATED, SCHEDULED, STARTING, STARTED, RUNNING, ENDING, ENDED, default, init, set, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATED", function() { return CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEDULED", function() { return SCHEDULED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STARTING", function() { return STARTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STARTED", function() { return STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RUNNING", function() { return RUNNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENDING", function() { return ENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENDED", function() { return ENDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-dispatch */ "./node_modules/.registry.npmjs.org/d3-dispatch/1.0.5/node_modules/d3-dispatch/src/index.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-timer */ "./node_modules/.registry.npmjs.org/d3-timer/1.0.9/node_modules/d3-timer/src/index.js");



var emptyOn = Object(d3_dispatch__WEBPACK_IMPORTED_MODULE_0__["dispatch"])("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ __webpack_exports__["default"] = (function(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
});

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = Object(d3_timer__WEBPACK_IMPORTED_MODULE_1__["timer"])(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return Object(d3_timer__WEBPACK_IMPORTED_MODULE_1__["timeout"])(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    Object(d3_timer__WEBPACK_IMPORTED_MODULE_1__["timeout"])(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/select.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/select.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/schedule.js");




/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["selector"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        Object(_schedule__WEBPACK_IMPORTED_MODULE_2__["default"])(subgroup[i], name, id, i, subgroup, Object(_schedule__WEBPACK_IMPORTED_MODULE_2__["get"])(node, id));
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_1__["Transition"](subgroups, this._parents, name, id);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/selectAll.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/selectAll.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/schedule.js");




/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectorAll"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = Object(_schedule__WEBPACK_IMPORTED_MODULE_2__["get"])(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            Object(_schedule__WEBPACK_IMPORTED_MODULE_2__["default"])(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_1__["Transition"](subgroups, parents, name, id);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/selection.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/selection.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/index.js");


var Selection = d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.constructor;

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new Selection(this._groups, this._parents);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/style.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/style.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/.registry.npmjs.org/d3-interpolate/1.3.2/node_modules/d3-interpolate/src/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/.registry.npmjs.org/d3-selection/1.4.0/node_modules/d3-selection/src/index.js");
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/schedule.js");
/* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tween */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _interpolate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interpolate */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/interpolate.js");






function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(this, name),
        string1 = (this.style.removeProperty(name), Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = Object(_schedule__WEBPACK_IMPORTED_MODULE_2__["set"])(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value, priority) {
  var i = (name += "") === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["interpolateTransformCss"] : _interpolate__WEBPACK_IMPORTED_MODULE_4__["default"];
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, styleRemove(name))
    : typeof value === "function" ? this
      .styleTween(name, styleFunction(name, i, Object(_tween__WEBPACK_IMPORTED_MODULE_3__["tweenValue"])(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, styleConstant(name, i, value), priority)
      .on("end.style." + name, null);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/styleTween.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/styleTween.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i(t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/text.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/text.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tween */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/tween.js");


function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction(Object(_tween__WEBPACK_IMPORTED_MODULE_0__["tweenValue"])(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/transition.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/transition.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/schedule.js");



/* harmony default export */ __webpack_exports__["default"] = (function() {
  var name = this._name,
      id0 = this._id,
      id1 = Object(_index__WEBPACK_IMPORTED_MODULE_0__["newId"])();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = Object(_schedule__WEBPACK_IMPORTED_MODULE_1__["get"])(node, id0);
        Object(_schedule__WEBPACK_IMPORTED_MODULE_1__["default"])(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Transition"](groups, this._parents, name, id1);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/tween.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/tween.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default, tweenValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tweenValue", function() { return tweenValue; });
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ "./node_modules/.registry.npmjs.org/d3-transition/1.2.0/node_modules/d3-transition/src/transition/schedule.js");


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["get"])(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
});

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["get"])(node, id).value[name];
  };
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/elastic-svg/0.0.9/node_modules/elastic-svg/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/elastic-svg/0.0.9/node_modules/elastic-svg/index.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return elasticSVG; });
// v0.0.8

function elasticSVG(selector, opts) {
	opts = opts || {};

	// containing DOM element, which defaults to body
	var parent = document.querySelectorAll(selector || "body");

	if (!parent || !parent.length) {
		console.log("Couldn't find a parent for elasticSVG making the selector '" + selector + "'");
		return;
	}

	parent = parent[0];

	// you can specify a width if you like, or we'll snap to size of container
	var base = {
		width: typeof opts.width !== "undefined" ? opts.width : parent.clientWidth,
		scale: 1
	};

	// we need to remember the original width for scaling purposes
	base.original_width = base.width;

	// you can either specify the height or the aspect ratio. If neither is specified, refaults to roughly the golden ratio
	// specifying the height keeps the svg at a standard height and only resizes the width
	// specifying the aspect ratio resizes both
    if (typeof opts.height !== "undefined") {
    	base.height = opts.height;
    	base.aspect = base.height / base.width;
    } else {
	    opts.aspect = typeof opts.aspect !== "undefined" ? opts.aspect : 0.618;
		base.height = base.width * opts.aspect;
    }

	// create a new SVG element
    var xmlns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(xmlns, "svg");
	svg.setAttributeNS(null, "width", base.width);
	svg.setAttributeNS(null, "height", base.height);
	parent.appendChild(svg);
	
	// setting resize to "auto" sets the viewport to the original width and height so that the SVG always scales
    if (opts.resize && opts.resize == "auto") {
		svg.setAttributeNS(null, "viewBox", "0 0 " + base.width + " " + base.height);
    }

	// function called when the window resizes		
	function resize() { 
		console.log("resizing base");
		base.width = parent.clientWidth;
		svg.setAttributeNS(null, "width", base.width);

		// only resize the height if aspect was specified instead of height
		if (opts.aspect) {
		    base.height = base.width * opts.aspect;
			svg.setAttributeNS(null, "height", base.height);
		}

	    base.scale = base.width / base.original_width;

		// optional callback
		if (opts.onResize) {
			opts.onResize(base.width, base.height, base.scale, svg);
		}
	}

	window.addEventListener("resize", function() {
		resize();
	});

	resize(); // call this on load since sometimes the initial conditions are wider than container

	// methods
	base.setResize = function(f) {
		opts.onResize = f;
	}

	base.changeAspect = function(aspect) {
		opts.aspect = aspect;
		base.height = base.width * opts.aspect;
		svg.setAttributeNS(null, "height", base.height);
	}

	base.changeHeight = function(height) {
    	base.height = height;
    	if (opts.aspect) {
	    	opts.aspect = base.height / base.width;
	    } else {
	    	opts.height = height;
	    }
		svg.setAttributeNS(null, "height", base.height);
	}

	base.triggerResize = function() {
		resize();
	}

	base.svg = svg;
	return base;
}

/***/ }),

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.registry.npmjs.org/css-loader/3.0.0_webpack@4.35.0/node_modules/css-loader/dist/cjs.js??ref--7-1!../../node_modules/.registry.npmjs.org/sass-loader/7.1.0_webpack@4.35.0/node_modules/sass-loader/lib/loader.js!../../node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src??postcss!./styles.scss */ "../../node_modules/.registry.npmjs.org/css-loader/3.0.0_webpack@4.35.0/node_modules/css-loader/dist/cjs.js?!../../node_modules/.registry.npmjs.org/sass-loader/7.1.0_webpack@4.35.0/node_modules/sass-loader/lib/loader.js!../../node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js?!./styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/.registry.npmjs.org/style-loader/0.23.1/node_modules/style-loader/lib/addStyles.js */ "../../node_modules/.registry.npmjs.org/style-loader/0.23.1/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kM2NoYXJ0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8vVXNlcnMvd2lsc29uL0Ryb3Bib3gvUHJpdmF0ZS90aW1lL2FwcHMvZGV2ZWxvcG1lbnQvcGFzc2luZ190aGVfdG9yY2gvbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvQGJhYmVsL3J1bnRpbWUvNy40LjUvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvL1VzZXJzL3dpbHNvbi9Ecm9wYm94L1ByaXZhdGUvdGltZS9hcHBzL2RldmVsb3BtZW50L3Bhc3NpbmdfdGhlX3RvcmNoL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2Nzcy1sb2FkZXIvMy4wLjBfd2VicGFja0A0LjM1LjAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8vVXNlcnMvd2lsc29uL0Ryb3Bib3gvUHJpdmF0ZS90aW1lL2FwcHMvZGV2ZWxvcG1lbnQvcGFzc2luZ190aGVfdG9yY2gvbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvc3R5bGUtbG9hZGVyLzAuMjMuMS9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvL1VzZXJzL3dpbHNvbi9Ecm9wYm94L1ByaXZhdGUvdGltZS9hcHBzL2RldmVsb3BtZW50L3Bhc3NpbmdfdGhlX3RvcmNoL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3N0eWxlLWxvYWRlci8wLjIzLjEvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL2luZGV4LmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtYXJyYXkvMi4yLjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9hcnJheS5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWFycmF5LzIuMi4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvYXNjZW5kaW5nLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtYXJyYXkvMi4yLjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9iaW4uanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1hcnJheS8yLjIuMC9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2Jpc2VjdC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWFycmF5LzIuMi4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvYmlzZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1hcnJheS8yLjIuMC9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2NvbnN0YW50LmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtYXJyYXkvMi4yLjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9jb3VudC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWFycmF5LzIuMi4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvY3Jvc3MuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1hcnJheS8yLjIuMC9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2Rlc2NlbmRpbmcuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1hcnJheS8yLjIuMC9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2RldmlhdGlvbi5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWFycmF5LzIuMi4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvZXh0ZW50LmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtYXJyYXkvMi4yLjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9ncm91cC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWFycmF5LzIuMi4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1hcnJheS8yLjIuMC9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2luZGV4LmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtYXJyYXkvMi4yLjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9sZWFzdC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWFycmF5LzIuMi4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvbGVhc3RJbmRleC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWFycmF5LzIuMi4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvbWF4LmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtYXJyYXkvMi4yLjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9tYXhJbmRleC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWFycmF5LzIuMi4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvbWVhbi5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWFycmF5LzIuMi4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvbWVkaWFuLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtYXJyYXkvMi4yLjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9tZXJnZS5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWFycmF5LzIuMi4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvbWluLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtYXJyYXkvMi4yLjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9taW5JbmRleC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWFycmF5LzIuMi4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvbnVtYmVyLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtYXJyYXkvMi4yLjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9wYWlycy5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWFycmF5LzIuMi4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvcGVybXV0ZS5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWFycmF5LzIuMi4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvcXVhbnRpbGUuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1hcnJheS8yLjIuMC9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3F1aWNrc2VsZWN0LmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtYXJyYXkvMi4yLjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9yYW5nZS5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWFycmF5LzIuMi4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvc2Nhbi5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWFycmF5LzIuMi4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvc2h1ZmZsZS5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWFycmF5LzIuMi4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvc3VtLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtYXJyYXkvMi4yLjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy90aHJlc2hvbGQvZnJlZWRtYW5EaWFjb25pcy5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWFycmF5LzIuMi4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvdGhyZXNob2xkL3Njb3R0LmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtYXJyYXkvMi4yLjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy90aHJlc2hvbGQvc3R1cmdlcy5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWFycmF5LzIuMi4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvdGlja3MuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1hcnJheS8yLjIuMC9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3RyYW5zcG9zZS5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWFycmF5LzIuMi4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvdmFyaWFuY2UuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1hcnJheS8yLjIuMC9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3ppcC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWF4aXMvMS4wLjEyL25vZGVfbW9kdWxlcy9kMy1heGlzL3NyYy9hcnJheS5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWF4aXMvMS4wLjEyL25vZGVfbW9kdWxlcy9kMy1heGlzL3NyYy9heGlzLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtYXhpcy8xLjAuMTIvbm9kZV9tb2R1bGVzL2QzLWF4aXMvc3JjL2lkZW50aXR5LmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtYXhpcy8xLjAuMTIvbm9kZV9tb2R1bGVzL2QzLWF4aXMvc3JjL2luZGV4LmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtY29sb3IvMS4yLjgvbm9kZV9tb2R1bGVzL2QzLWNvbG9yL3NyYy9jb2xvci5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWNvbG9yLzEuMi44L25vZGVfbW9kdWxlcy9kMy1jb2xvci9zcmMvY3ViZWhlbGl4LmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtY29sb3IvMS4yLjgvbm9kZV9tb2R1bGVzL2QzLWNvbG9yL3NyYy9kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1jb2xvci8xLjIuOC9ub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL2luZGV4LmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtY29sb3IvMS4yLjgvbm9kZV9tb2R1bGVzL2QzLWNvbG9yL3NyYy9sYWIuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1jb2xvci8xLjIuOC9ub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL21hdGguanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1kaXNwYXRjaC8xLjAuNS9ub2RlX21vZHVsZXMvZDMtZGlzcGF0Y2gvc3JjL2Rpc3BhdGNoLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtZGlzcGF0Y2gvMS4wLjUvbm9kZV9tb2R1bGVzL2QzLWRpc3BhdGNoL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWVhc2UvMS4wLjUvbm9kZV9tb2R1bGVzL2QzLWVhc2Uvc3JjL2JhY2suanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1lYXNlLzEuMC41L25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9ib3VuY2UuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1lYXNlLzEuMC41L25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9jaXJjbGUuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1lYXNlLzEuMC41L25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9jdWJpYy5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWVhc2UvMS4wLjUvbm9kZV9tb2R1bGVzL2QzLWVhc2Uvc3JjL2VsYXN0aWMuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1lYXNlLzEuMC41L25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9leHAuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1lYXNlLzEuMC41L25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWVhc2UvMS4wLjUvbm9kZV9tb2R1bGVzL2QzLWVhc2Uvc3JjL2xpbmVhci5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWVhc2UvMS4wLjUvbm9kZV9tb2R1bGVzL2QzLWVhc2Uvc3JjL3BvbHkuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1lYXNlLzEuMC41L25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9xdWFkLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtZWFzZS8xLjAuNS9ub2RlX21vZHVsZXMvZDMtZWFzZS9zcmMvc2luLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtZm9ybWF0LzEuMy4yL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2RlZmF1bHRMb2NhbGUuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1mb3JtYXQvMS4zLjIvbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZXhwb25lbnQuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1mb3JtYXQvMS4zLjIvbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0RGVjaW1hbC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWZvcm1hdC8xLjMuMi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9mb3JtYXRHcm91cC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWZvcm1hdC8xLjMuMi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9mb3JtYXROdW1lcmFscy5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWZvcm1hdC8xLjMuMi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9mb3JtYXRQcmVmaXhBdXRvLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtZm9ybWF0LzEuMy4yL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdFJvdW5kZWQuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1mb3JtYXQvMS4zLjIvbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0U3BlY2lmaWVyLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtZm9ybWF0LzEuMy4yL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdFRyaW0uanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1mb3JtYXQvMS4zLjIvbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0VHlwZXMuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1mb3JtYXQvMS4zLjIvbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1mb3JtYXQvMS4zLjIvbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1mb3JtYXQvMS4zLjIvbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvbG9jYWxlLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtZm9ybWF0LzEuMy4yL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL3ByZWNpc2lvbkZpeGVkLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtZm9ybWF0LzEuMy4yL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL3ByZWNpc2lvblByZWZpeC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWZvcm1hdC8xLjMuMi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9wcmVjaXNpb25Sb3VuZC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWludGVycG9sYXRlLzEuMy4yL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1pbnRlcnBvbGF0ZS8xLjMuMi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2Jhc2lzLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtaW50ZXJwb2xhdGUvMS4zLjIvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9iYXNpc0Nsb3NlZC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWludGVycG9sYXRlLzEuMy4yL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1pbnRlcnBvbGF0ZS8xLjMuMi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2NvbnN0YW50LmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtaW50ZXJwb2xhdGUvMS4zLjIvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9jdWJlaGVsaXguanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1pbnRlcnBvbGF0ZS8xLjMuMi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2RhdGUuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1pbnRlcnBvbGF0ZS8xLjMuMi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2Rpc2NyZXRlLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtaW50ZXJwb2xhdGUvMS4zLjIvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9oY2wuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1pbnRlcnBvbGF0ZS8xLjMuMi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2hzbC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWludGVycG9sYXRlLzEuMy4yL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvaHVlLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtaW50ZXJwb2xhdGUvMS4zLjIvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWludGVycG9sYXRlLzEuMy4yL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvbGFiLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtaW50ZXJwb2xhdGUvMS4zLjIvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1pbnRlcnBvbGF0ZS8xLjMuMi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL29iamVjdC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWludGVycG9sYXRlLzEuMy4yL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvcGllY2V3aXNlLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtaW50ZXJwb2xhdGUvMS4zLjIvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9xdWFudGl6ZS5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWludGVycG9sYXRlLzEuMy4yL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvcmdiLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtaW50ZXJwb2xhdGUvMS4zLjIvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9yb3VuZC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWludGVycG9sYXRlLzEuMy4yL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvc3RyaW5nLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtaW50ZXJwb2xhdGUvMS4zLjIvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy90cmFuc2Zvcm0vZGVjb21wb3NlLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtaW50ZXJwb2xhdGUvMS4zLjIvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy90cmFuc2Zvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1pbnRlcnBvbGF0ZS8xLjMuMi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3RyYW5zZm9ybS9wYXJzZS5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLWludGVycG9sYXRlLzEuMy4yL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvdmFsdWUuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1pbnRlcnBvbGF0ZS8xLjMuMi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3pvb20uanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zY2FsZS8zLjAuMC9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL2JhbmQuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zY2FsZS8zLjAuMC9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL2NvbnN0YW50LmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtc2NhbGUvMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy9jb250aW51b3VzLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtc2NhbGUvMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy9kaXZlcmdpbmcuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zY2FsZS8zLjAuMC9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL2lkZW50aXR5LmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtc2NhbGUvMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNjYWxlLzMuMC4wL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvaW5pdC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNjYWxlLzMuMC4wL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvbGluZWFyLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtc2NhbGUvMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy9sb2cuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zY2FsZS8zLjAuMC9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL25pY2UuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zY2FsZS8zLjAuMC9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL251bWJlci5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNjYWxlLzMuMC4wL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvb3JkaW5hbC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNjYWxlLzMuMC4wL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvcG93LmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtc2NhbGUvMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy9xdWFudGlsZS5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNjYWxlLzMuMC4wL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvcXVhbnRpemUuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zY2FsZS8zLjAuMC9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL3NlcXVlbnRpYWwuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zY2FsZS8zLjAuMC9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL3NlcXVlbnRpYWxRdWFudGlsZS5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNjYWxlLzMuMC4wL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvc3ltbG9nLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtc2NhbGUvMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy90aHJlc2hvbGQuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zY2FsZS8zLjAuMC9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL3RpY2tGb3JtYXQuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zY2FsZS8zLjAuMC9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL3RpbWUuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zY2FsZS8zLjAuMC9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL3V0Y1RpbWUuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zZWxlY3Rpb24vMS40LjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zZWxlY3Rpb24vMS40LjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvY3JlYXRlLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtc2VsZWN0aW9uLzEuNC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL2NyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zZWxlY3Rpb24vMS40LjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zZWxlY3Rpb24vMS40LjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbG9jYWwuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zZWxlY3Rpb24vMS40LjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNlbGVjdGlvbi8xLjQuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9tb3VzZS5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNlbGVjdGlvbi8xLjQuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zZWxlY3Rpb24vMS40LjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbmFtZXNwYWNlcy5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNlbGVjdGlvbi8xLjQuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9wb2ludC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNlbGVjdGlvbi8xLjQuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zZWxlY3Rpb24vMS40LjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0QWxsLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtc2VsZWN0aW9uLzEuNC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9hcHBlbmQuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zZWxlY3Rpb24vMS40LjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2F0dHIuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zZWxlY3Rpb24vMS40LjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2NhbGwuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zZWxlY3Rpb24vMS40LjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2NsYXNzZWQuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zZWxlY3Rpb24vMS40LjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2Nsb25lLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtc2VsZWN0aW9uLzEuNC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9kYXRhLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtc2VsZWN0aW9uLzEuNC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9kYXR1bS5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNlbGVjdGlvbi8xLjQuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZGlzcGF0Y2guanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zZWxlY3Rpb24vMS40LjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2VhY2guanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zZWxlY3Rpb24vMS40LjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2VtcHR5LmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtc2VsZWN0aW9uLzEuNC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9lbnRlci5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNlbGVjdGlvbi8xLjQuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZXhpdC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNlbGVjdGlvbi8xLjQuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZmlsdGVyLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtc2VsZWN0aW9uLzEuNC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9odG1sLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtc2VsZWN0aW9uLzEuNC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNlbGVjdGlvbi8xLjQuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vaW5zZXJ0LmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtc2VsZWN0aW9uLzEuNC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9qb2luLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtc2VsZWN0aW9uLzEuNC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9sb3dlci5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNlbGVjdGlvbi8xLjQuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zZWxlY3Rpb24vMS40LjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL25vZGUuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zZWxlY3Rpb24vMS40LjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL25vZGVzLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtc2VsZWN0aW9uLzEuNC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9vbi5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNlbGVjdGlvbi8xLjQuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vb3JkZXIuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zZWxlY3Rpb24vMS40LjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3Byb3BlcnR5LmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtc2VsZWN0aW9uLzEuNC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9yYWlzZS5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNlbGVjdGlvbi8xLjQuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vcmVtb3ZlLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtc2VsZWN0aW9uLzEuNC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy1zZWxlY3Rpb24vMS40LjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NlbGVjdEFsbC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNlbGVjdGlvbi8xLjQuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2l6ZS5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNlbGVjdGlvbi8xLjQuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc29ydC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNlbGVjdGlvbi8xLjQuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc3BhcnNlLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtc2VsZWN0aW9uLzEuNC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zdHlsZS5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNlbGVjdGlvbi8xLjQuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vdGV4dC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNlbGVjdGlvbi8xLjQuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNlbGVjdGlvbi8xLjQuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3RvckFsbC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNlbGVjdGlvbi8xLjQuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zb3VyY2VFdmVudC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNlbGVjdGlvbi8xLjQuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy90b3VjaC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXNlbGVjdGlvbi8xLjQuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy90b3VjaGVzLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtc2VsZWN0aW9uLzEuNC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXRpbWUtZm9ybWF0LzIuMS4zL25vZGVfbW9kdWxlcy9kMy10aW1lLWZvcm1hdC9zcmMvZGVmYXVsdExvY2FsZS5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXRpbWUtZm9ybWF0LzIuMS4zL25vZGVfbW9kdWxlcy9kMy10aW1lLWZvcm1hdC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy10aW1lLWZvcm1hdC8yLjEuMy9ub2RlX21vZHVsZXMvZDMtdGltZS1mb3JtYXQvc3JjL2lzb0Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXRpbWUtZm9ybWF0LzIuMS4zL25vZGVfbW9kdWxlcy9kMy10aW1lLWZvcm1hdC9zcmMvaXNvUGFyc2UuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy10aW1lLWZvcm1hdC8yLjEuMy9ub2RlX21vZHVsZXMvZDMtdGltZS1mb3JtYXQvc3JjL2xvY2FsZS5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXRpbWUvMS4wLjExL25vZGVfbW9kdWxlcy9kMy10aW1lL3NyYy9kYXkuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy10aW1lLzEuMC4xMS9ub2RlX21vZHVsZXMvZDMtdGltZS9zcmMvZHVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy10aW1lLzEuMC4xMS9ub2RlX21vZHVsZXMvZDMtdGltZS9zcmMvaG91ci5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXRpbWUvMS4wLjExL25vZGVfbW9kdWxlcy9kMy10aW1lL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXRpbWUvMS4wLjExL25vZGVfbW9kdWxlcy9kMy10aW1lL3NyYy9pbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXRpbWUvMS4wLjExL25vZGVfbW9kdWxlcy9kMy10aW1lL3NyYy9taWxsaXNlY29uZC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXRpbWUvMS4wLjExL25vZGVfbW9kdWxlcy9kMy10aW1lL3NyYy9taW51dGUuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy10aW1lLzEuMC4xMS9ub2RlX21vZHVsZXMvZDMtdGltZS9zcmMvbW9udGguanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy10aW1lLzEuMC4xMS9ub2RlX21vZHVsZXMvZDMtdGltZS9zcmMvc2Vjb25kLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtdGltZS8xLjAuMTEvbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL3V0Y0RheS5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXRpbWUvMS4wLjExL25vZGVfbW9kdWxlcy9kMy10aW1lL3NyYy91dGNIb3VyLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtdGltZS8xLjAuMTEvbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL3V0Y01pbnV0ZS5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXRpbWUvMS4wLjExL25vZGVfbW9kdWxlcy9kMy10aW1lL3NyYy91dGNNb250aC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXRpbWUvMS4wLjExL25vZGVfbW9kdWxlcy9kMy10aW1lL3NyYy91dGNXZWVrLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtdGltZS8xLjAuMTEvbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL3V0Y1llYXIuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy10aW1lLzEuMC4xMS9ub2RlX21vZHVsZXMvZDMtdGltZS9zcmMvd2Vlay5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXRpbWUvMS4wLjExL25vZGVfbW9kdWxlcy9kMy10aW1lL3NyYy95ZWFyLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtdGltZXIvMS4wLjkvbm9kZV9tb2R1bGVzL2QzLXRpbWVyL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXRpbWVyLzEuMC45L25vZGVfbW9kdWxlcy9kMy10aW1lci9zcmMvaW50ZXJ2YWwuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy10aW1lci8xLjAuOS9ub2RlX21vZHVsZXMvZDMtdGltZXIvc3JjL3RpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy10aW1lci8xLjAuOS9ub2RlX21vZHVsZXMvZDMtdGltZXIvc3JjL3RpbWVyLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtdHJhbnNpdGlvbi8xLjIuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvYWN0aXZlLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtdHJhbnNpdGlvbi8xLjIuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy10cmFuc2l0aW9uLzEuMi4wL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy9pbnRlcnJ1cHQuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy10cmFuc2l0aW9uLzEuMi4wL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy9zZWxlY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy10cmFuc2l0aW9uLzEuMi4wL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy9zZWxlY3Rpb24vaW50ZXJydXB0LmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtdHJhbnNpdGlvbi8xLjIuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvc2VsZWN0aW9uL3RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy10cmFuc2l0aW9uLzEuMi4wL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2F0dHIuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy10cmFuc2l0aW9uLzEuMi4wL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2F0dHJUd2Vlbi5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXRyYW5zaXRpb24vMS4yLjAvbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZGVsYXkuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy10cmFuc2l0aW9uLzEuMi4wL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2R1cmF0aW9uLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtdHJhbnNpdGlvbi8xLjIuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9lYXNlLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtdHJhbnNpdGlvbi8xLjIuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9lbmQuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy10cmFuc2l0aW9uLzEuMi4wL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXRyYW5zaXRpb24vMS4yLjAvbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy10cmFuc2l0aW9uLzEuMi4wL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2ludGVycG9sYXRlLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtdHJhbnNpdGlvbi8xLjIuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9tZXJnZS5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXRyYW5zaXRpb24vMS4yLjAvbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vb24uanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy10cmFuc2l0aW9uLzEuMi4wL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3JlbW92ZS5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXRyYW5zaXRpb24vMS4yLjAvbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vc2NoZWR1bGUuanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy10cmFuc2l0aW9uLzEuMi4wL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2QzLXRyYW5zaXRpb24vMS4yLjAvbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vc2VsZWN0QWxsLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtdHJhbnNpdGlvbi8xLjIuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZDNjaGFydHMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9kMy10cmFuc2l0aW9uLzEuMi4wL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3N0eWxlLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtdHJhbnNpdGlvbi8xLjIuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zdHlsZVR3ZWVuLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtdHJhbnNpdGlvbi8xLjIuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi90ZXh0LmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtdHJhbnNpdGlvbi8xLjIuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi90cmFuc2l0aW9uLmpzIiwid2VicGFjazovL2QzY2hhcnRzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvZDMtdHJhbnNpdGlvbi8xLjIuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi90d2Vlbi5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2VsYXN0aWMtc3ZnLzAuMC45L25vZGVfbW9kdWxlcy9lbGFzdGljLXN2Zy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kM2NoYXJ0cy8uL3N0eWxlcy5zY3NzP2E3NDkiXSwibmFtZXMiOlsiZDNjaGFydHMiLCJzZWxlY3RvciIsIm9wdHMiLCJzZWxlY3QiLCJjbGFzc2VkIiwidGl0bGUiLCJhcHBlbmQiLCJzdHlsZSIsImh0bWwiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJiIiwiZWxhc3RpY1NWRyIsInN2ZyIsImF4ZXMiLCJ3aWR0aCIsImhlaWdodCIsIm9yaWdpbmFsX3dpZHRoIiwiYXhlc19sYXllciIsImF0dHIiLCJkYXRhX2xheWVyIiwib25SZXNpemUiLCJyZXNpemVfY2hhcnQiLCJheGlzIiwiZGlyIiwiYXhpc19vcHRzIiwidG9Mb3dlckNhc2UiLCJjb25zb2xlIiwibG9nIiwicmV0dXJubCIsInNjYWxlIiwiYXgiLCJheGlzX2ciLCJidWlsZF9heGlzIiwicmFuZ2UiLCJkb21haW4iLCJtaW4iLCJtYXgiLCJ0eXBlIiwib3JpZW50YXRpb24iLCJ0aWNrTGVuZ3RoIiwiaGFzT3duUHJvcGVydHkiLCJzY2FsZVRpbWUiLCJzY2FsZUJhbmQiLCJwYWRkaW5nIiwic2NhbGVMb2ciLCJsb2dfYmFzZSIsInNjYWxlTGluZWFyIiwicmFuZ2VSb3VuZEJhbmRzIiwiYXhpc1RvcCIsImF4aXNCb3R0b20iLCJheGlzUmlnaHQiLCJheGlzTGVmdCIsInRpY2tGb3JtYXQiLCJpZCIsImxhYmVsIiwibGFiZWxfb2Zmc2V0IiwiZCIsImNhbGwiLCJ1cGRhdGVfYXhpcyIsImR1ciIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRyYXdfYXhpcyIsInciLCJoIiwieiIsInJ1bGVzIiwidGlja1NpemUiLCJyZXNpemUiLCJvYmoiLCJzZXREb21haW4iLCJuZXdfZG9tYWluIiwidXBkYXRlIiwicmVkcmF3IiwicGFyc2VJbnQiLCJjaGFydCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiY2hhbmdlQXNwZWN0IiwiYXNwZWN0IiwiY2hhbmdlSGVpZ2h0Iiwic2V0UmVzaXplIiwicmYiLCJhZGRBeGlzIiwiYmFzZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx3QkFBd0IsMkVBQTJFLG9DQUFvQyxtQkFBbUIsR0FBRyxFQUFFLE9BQU8s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Q0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Ozs7Ozs7Ozs7OztBQzVCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUM7O0FBRXRCO0FBQ2Ysc0JBQXNCLG9EQUFRLEVBQUUsb0RBQVE7QUFDeEM7O0FBRU87QUFDUCxrQ0FBa0Msb0RBQVE7QUFDMUM7O0FBRU87QUFDUCxzQkFBc0Isb0RBQVE7QUFDOUI7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQWU7QUFDZjtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1REFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVjO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFBQTtBQUFBO0FBQXlDO0FBQ0E7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLCtEQUFRLENBQUMsdURBQVk7O0FBRVosdUVBQVEsRUFBQzs7Ozs7Ozs7Ozs7OztBQ1p4QjtBQUFBO0FBQUE7QUFXaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDbkdBLGNBQWMsbUJBQU8sQ0FBQywrcUJBQW1XOztBQUV6WCw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsb05BQXdHOztBQUU3SDs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6ImQzY2hhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jc3MtbG9hZGVyLzMuMC4wX3dlYnBhY2tANC4zNS4wL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZDNjaGFydCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFOyB9XFxuICAuZDNjaGFydCAuYXhpcyBwYXRoLCAuZDNjaGFydCAuYXhpcyBsaW5lIHtcXG4gICAgZmlsbDogbm9uZTtcXG4gICAgc3Ryb2tlOiB3aGl0ZTtcXG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XFxuICAgIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlczsgfVxcbiAgLmQzY2hhcnQgLmF4aXMgdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7IH1cXG4gIC5kM2NoYXJ0IC5heGlzIC5kb21haW4ge1xcbiAgICBzdHJva2Utd2lkdGg6IDJweDsgfVxcbiAgLmQzY2hhcnQgLmNoYXJ0X3RpdGxlIHtcXG4gICAgcGFkZGluZzogMTVweCAwIDVweCAwOyB9XFxuICAuZDNjaGFydCAuYXhpc19sYWJlbCB7XFxuICAgIGZpbGw6IGJsYWNrOyB9XFxuXCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiaW1wb3J0IHsgc2VsZWN0IH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcbmltcG9ydCB7IHRyYW5zaXRpb24gfSBmcm9tICdkMy10cmFuc2l0aW9uJztcbmltcG9ydCB7IHNjYWxlTGluZWFyLCBzY2FsZVRpbWUsIHNjYWxlTG9nLCBzY2FsZUJhbmQgfSBmcm9tICdkMy1zY2FsZSc7IFxuaW1wb3J0IHsgYXhpc0xlZnQsIGF4aXNSaWdodCwgYXhpc0JvdHRvbSwgYXhpc1RvcCB9IGZyb20gJ2QzLWF4aXMnOyBcblxuaW1wb3J0IGVsYXN0aWNTVkcgZnJvbSAnZWxhc3RpYy1zdmcnO1xuaW1wb3J0IFwiLi9zdHlsZXMuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkM2NoYXJ0cyhzZWxlY3Rvciwgb3B0cykge1xuXHRzZWxlY3Qoc2VsZWN0b3IpLmNsYXNzZWQoXCJkM2NoYXJ0XCIsIHRydWUpO1xuXG5cdC8vIGFkZCB0aGUgdGl0bGUgYXMgYSBET00gZWxlbWVudCByYXRoZXIgdGhhbiBtZXNzaW5nIHdpdGggPHRleHQ+XG5cdGlmIChvcHRzLnRpdGxlKSB7XG5cdFx0c2VsZWN0KHNlbGVjdG9yKVxuXHRcdFx0LmFwcGVuZChcImRpdlwiKVxuXHRcdCAgICAuc3R5bGUoXCJ0ZXh0LWFsaWduXCIsIFwiY2VudGVyXCIpXG5cdFx0ICAgIC5jbGFzc2VkKFwiY2hhcnRfdGl0bGVcIiwgdHJ1ZSlcblx0XHQgICAgLmh0bWwob3B0cy50aXRsZSk7XG5cdH1cblxuXHRvcHRzID0gb3B0cyB8fCB7fTtcblxuXHQvLyBTRVRVUFx0XHRcblx0dmFyIG1hcmdpbiA9IG9wdHMubWFyZ2luIHx8IHsgdG9wOiAwLCByaWdodDogMzAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwIH07XG5cblx0dmFyIGIgPSBlbGFzdGljU1ZHKHNlbGVjdG9yLCBvcHRzKSxcblx0XHRzdmcgPSBzZWxlY3QoYi5zdmcpO1xuXG5cdHZhciBheGVzID0ge307XG5cblx0Ly8gd2lkdGggYW5kIGhlaWdodCBhcmUgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIGdyYXBoIE5PVCBpbmNsdWRpbmcgdGhlIG1hcmdpbnMgXG5cdHZhciB3aWR0aCA9ICBiLndpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQsXG5cdFx0aGVpZ2h0ID0gYi5oZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbSxcblx0XHRvcmlnaW5hbF93aWR0aCA9IHdpZHRoOyAvLyB0aGUgc3RhcnRpbmcgd2lkdGgsIHVzZWQgZm9yIHNjYWxpbmdcblxuXHQvLyBsYXllciBmb3IgYXhlcyBhbmQgYW55dGhpbmcgZWxzZSB3ZSB3YW50IGJlaGluZCB0aGUgZGF0YXZpelxuXHR2YXIgYXhlc19sYXllciA9IHN2Zy5hcHBlbmQoXCJnXCIpXG5cdFx0LmNsYXNzZWQoXCJheGVzXCIsIHRydWUpXG5cdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxuXHQvLyBsYXllciBmb3IgZGF0YXZpejogYmFycywgbGluZXMsIGRvdHMsIGV0Yy5cblx0dmFyIGRhdGFfbGF5ZXIgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuXHRcdC5jbGFzc2VkKFwiZGF0YVwiLCB0cnVlKVxuXHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIik7XG5cblx0Ly8gYW55IGZ1bmN0aW9uIHRoYXQgaXMgcGFzc2VkIHRvIG9wdHMucmVzaXplIHdpbGwgaW52b2tlIGluIHRoZSBmb2xsb3dpbmcgZ2VuZXJpYyByZXNpemUgZnVuY3Rpb25cblx0b3B0cy5vblJlc2l6ZSA9IHJlc2l6ZV9jaGFydDtcblxuXHQvLyBBWEVTXG5cblx0Ly8gdGhpcyBwc2V1ZG8tY2xhc3MgY29udGFpbnMgYm90aCB0aGUgc2NhbGUgYW5kIHRoZSBwaHlzaWNhbCBheGlzXG5cdC8qXG5cdEBkaXI6IFwieFwiIG9yIFwieVwiIChmb3Igbm93KVxuXHRAb3B0czogb3B0aW9ucyBmb3IgdGhlIGF4aXM6IHR5cGUsIGRvbWFpbiAob3IgbWluIGFuZCBtYXgpLCBvcmllbnRhdGlvbiwgdGlja2xlbmd0aCwgaWQsIHJ1bGVzIChUL0YgZm9yIGNoYXJ0LXdpZGUgdGlja3MpXG5cdCovXG5cblx0dmFyIGF4aXMgPSBmdW5jdGlvbihkaXIsIGF4aXNfb3B0cykge1xuXHRcdGlmICghdHlwZW9mIGRpciA9PT0gXCJzdHJpbmdcIiB8fCBkaXIudG9Mb3dlckNhc2UoKSAhPSBcInhcIiAmJiBkaXIudG9Mb3dlckNhc2UoKSAhPSBcInlcIikge1xuXHRcdFx0Y29uc29sZS5sb2coXCJ0aGUgZDNjaGFydHMgYXhpcygpIGZ1bmN0aW9uIG11c3Qgc3RhcnQgd2l0aCBhIHN0cmluZywgZWl0aGVyICd4JyBvciAneSdcIik7XG5cdFx0XHRyZXR1cm5sXG5cdFx0fVxuXG5cdFx0dmFyIHNjYWxlLCBcdC8vIHRoZSB0eXBpY2FsIGQzIHNjYWxlIG9iamVjdCwgZWcuIHNjYWxlVGltZSgpXG5cdFx0XHRheCwgXHQvLyB0aGUgZDMgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgYXhpc1xuXHRcdFx0YXhpc19nOyAvLyB0aGUgcGh5c2ljYWwgU1ZHIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGF4aXNcblxuXHRcdC8vIHRoaXMgaXMgb25seSBpbnZva2VkIG9uY2UsIHNpbmNlIGl0IG9ubHkgYXNzZW1ibGVzIHRoZSBET00uIFNlZSBcIlBoaWxvc29waHlcIiBzZWN0aW9uIG9mIHRoZSBSRUFETUVcblx0XHRmdW5jdGlvbiBidWlsZF9heGlzKCkge1xuXHRcdFx0ZGlyID0gZGlyLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRheGlzX29wdHMgPSBheGlzX29wdHMgfHwge307XG5cblx0XHRcdC8vIEZJTEwgSU4gT1BUSU9OU1xuXG5cdFx0XHQvLyByYW5nZSAocGl4ZWxzIHRoZSBheGlzIHdpbGwgc3Bhbilcblx0XHRcdGF4aXNfb3B0cy5yYW5nZSA9IGF4aXNfb3B0cy5yYW5nZSB8fCAoZGlyID09PSBcInhcIiA/IFswLCB3aWR0aF0gOiBbaGVpZ2h0LCAwXSk7XG5cblx0XHRcdC8vIG91dHB1dCByYW5nZSAoZG9tYWluKSBvZiBheGlzXG5cdFx0XHRheGlzX29wdHMuZG9tYWluID0gYXhpc19vcHRzLmRvbWFpbiB8fCBbMCwgMV07XG5cblx0XHRcdGlmICh0eXBlb2YgYXhpc19vcHRzLm1pbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRheGlzX29wdHMuZG9tYWluWzBdID0gYXhpc19vcHRzLm1pbjtcdFxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIGF4aXNfb3B0cy5tYXggIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0YXhpc19vcHRzLmRvbWFpblsxXSA9IGF4aXNfb3B0cy5tYXg7XHRcblx0XHRcdH1cblxuXHRcdFx0YXhpc19vcHRzLnR5cGUgPSBheGlzX29wdHMudHlwZSB8fCBcImxpbmVhclwiO1xuXHRcblx0XHRcdGF4aXNfb3B0cy5vcmllbnRhdGlvbiA9IGF4aXNfb3B0cy5vcmllbnRhdGlvbiB8fCAoZGlyID09PSBcInhcIj8gXCJib3R0b21cIiA6IFwibGVmdFwiKTtcblxuXHRcdFx0Ly8gaWYgXCJydWxlc1wiIGlzIHRydWUsIHRoaXMgd2lsbCBiZSBvdmVycmlkZGVuXG5cdFx0XHRheGlzX29wdHMudGlja0xlbmd0aCA9IGF4aXNfb3B0cy5oYXNPd25Qcm9wZXJ0eShcInRpY2tMZW5ndGhcIik/IGF4aXNfb3B0cy50aWNrTGVuZ3RoIDogMTA7XG5cblxuXHRcdFx0Ly8gQlVJTEQgVEhFIEFYSVNcblxuXHRcdFx0Ly8gY3VycmVudGx5IHN1cHBvcnRlZCB0aW1lcyBhcmUgdGltZSwgb3JkaW5hbCwgbG9nLCBvciBsaW5lYXIgKGRlZmF1bHQpXG5cdFx0XHRzd2l0Y2goYXhpc19vcHRzLnR5cGUudG9Mb3dlckNhc2UoKSkge1xuXHRcdFx0XHRjYXNlIFwidGltZVwiOiBzY2FsZSA9IHNjYWxlVGltZSgpOyBicmVhaztcblx0XHRcdFx0Y2FzZSBcIm9yZGluYWxcIjogc2NhbGUgPSBzY2FsZUJhbmQoKS5wYWRkaW5nKDAuMSk7IGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwibG9nXCI6IHNjYWxlID0gc2NhbGVMb2coYXhpc19vcHRzLmxvZ19iYXNlIHx8IDIpOyBicmVhaztcblx0XHRcdFx0Y2FzZSBcImxpbmVhclwiOiBzY2FsZSA9IHNjYWxlTGluZWFyKCk7IGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OiBzY2FsZSA9IHNjYWxlTGluZWFyKCk7IGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBpbnB1dCByYW5nZVxuXHRcdFx0aWYgKGF4aXNfb3B0cy50eXBlID09PSBcIm9yZGluYWwyXCIpIHtcblx0XHRcdFx0c2NhbGUucmFuZ2VSb3VuZEJhbmRzKGF4aXNfb3B0cy5yYW5nZSwgLjUpLmRvbWFpbihheGlzX29wdHMuZG9tYWluKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNjYWxlLnJhbmdlKGF4aXNfb3B0cy5yYW5nZSkuZG9tYWluKGF4aXNfb3B0cy5kb21haW4pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZGlyID09IFwieFwiKSB7XG5cdFx0XHRcdGlmIChheGlzX29wdHMub3JpZW50YXRpb24gPT0gXCJ0b3BcIikge1xuXHRcdFx0XHRcdGF4ID0gYXhpc1RvcCgpLnNjYWxlKHNjYWxlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRheCA9IGF4aXNCb3R0b20oKS5zY2FsZShzY2FsZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChheGlzX29wdHMub3JpZW50YXRpb24gPT0gXCJyaWdodFwiKSB7XG5cdFx0XHRcdFx0YXggPSBheGlzUmlnaHQoKS5zY2FsZShzY2FsZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YXggPSBheGlzTGVmdCgpLnNjYWxlKHNjYWxlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRheGlzX2cgPSBheGVzX2xheWVyLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIGRpciArIFwiIGF4aXNcIik7XG5cblx0XHRcdGlmIChheGlzX29wdHMudGlja0Zvcm1hdCkge1xuXHRcdFx0XHRheC50aWNrRm9ybWF0KGF4aXNfb3B0cy50aWNrRm9ybWF0KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGF4aXNfb3B0cy5pZCkge1xuXHRcdFx0XHRheGlzX2cuYXR0cihcImlkXCIsIGF4aXNfb3B0cy5pZCk7XHRcblx0XHRcdH1cblxuXHRcdFx0aWYgKGF4aXNfb3B0cy5sYWJlbCkge1xuXHRcdFx0XHRpZiAoZGlyID09PSBcInhcIikge1xuXHRcdFx0XHRcdHZhciBsYWJlbCA9IGF4aXNfZy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcInhcIiwgd2lkdGggLyAyKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ5XCIsIGF4aXNfb3B0cy5sYWJlbF9vZmZzZXQgPyBheGlzX29wdHMubGFiZWxfb2Zmc2V0IDogMzApXG5cdFx0XHRcdFx0XHQuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuXHRcdFx0XHRcdFx0LmNsYXNzZWQoXCJheGlzX2xhYmVsXCIsIHRydWUpXG5cdFx0XHRcdFx0XHQuaHRtbChheGlzX29wdHMubGFiZWwpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhciBsYWJlbCA9IGF4aXNfZy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKXtcblx0XHRcdFx0XHRcdFx0cmV0dXJuICBheGlzX29wdHMubGFiZWxfb2Zmc2V0ID8gXCJ0cmFuc2xhdGUoXCIrIGF4aXNfb3B0cy5sYWJlbF9vZmZzZXQgK1wiLFwiKyBoZWlnaHQvMiArXCIpcm90YXRlKC05MClcIiA6IFwidHJhbnNsYXRlKFwiKyAtMzAgK1wiLFwiKyBoZWlnaHQvMiArXCIpcm90YXRlKC05MClcIjtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuXHRcdFx0XHRcdFx0LmNsYXNzZWQoXCJheGlzX2xhYmVsXCIsIHRydWUpXG5cdFx0XHRcdFx0XHQuaHRtbChheGlzX29wdHMubGFiZWwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGF4aXNfZy5jYWxsKGF4KTtcblx0XHR9XG5cblx0XHQvLyBpbnZva2UgdGhpcyBmdW5jdGlvbiBhbnkgdGltZSB5b3UgbWFudWFsbHkgY2hhbmdlIGFuIGF4aXMgcHJvcGVydHksIGxpa2UgdGlja0Zvcm1hdFxuXHRcdHZhciB1cGRhdGVfYXhpcyA9IGZ1bmN0aW9uKGR1cikge1xuXHRcdFx0ZHVyID8gYXhpc19nLnRyYW5zaXRpb24oKS5kdXJhdGlvbihkdXIpLmNhbGwoYXgpIDogYXhpc19nLmNhbGwoYXgpO1xuXG5cdFx0XHQvLyByZXBvc2l0aW9uIGxhYmVsc1xuXHRcdFx0aWYgKGF4aXNfb3B0cy5sYWJlbCkge1xuXHRcdFx0XHRpZiAoZGlyID09PSBcInhcIikge1xuXHRcdFx0XHRcdGF4aXNfZy5zZWxlY3QoXCIuYXhpc19sYWJlbFwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ4XCIsIHdpZHRoIC8gMilcblx0XHRcdFx0XHRcdC5hdHRyKFwieVwiLCBheGlzX29wdHMubGFiZWxfb2Zmc2V0ID8gYXhpc19vcHRzLmxhYmVsX29mZnNldCA6IDMwKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRheGlzX2cuc2VsZWN0KFwiLmF4aXNfbGFiZWxcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpe1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gIGF4aXNfb3B0cy5sYWJlbF9vZmZzZXQgPyBcInRyYW5zbGF0ZShcIisgYXhpc19vcHRzLmxhYmVsX29mZnNldCArXCIsXCIrIGhlaWdodC8yICtcIilyb3RhdGUoLTkwKVwiIDogXCJ0cmFuc2xhdGUoXCIrIC0zMCArXCIsXCIrIGhlaWdodC8yICtcIilyb3RhdGUoLTkwKVwiO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXHRcdH07XG5cblxuXHRcdC8vIHRoaXMgaXMgaW52b2tlZCBvbiBsb2FkIGFuZCBhbnkgdGltZSB0aGUgZ3JhcGggaXMgbW9kaWZpZWQgb3IgcmVzaXplZC4gU2VlIFwiUGhpbG9zb3BoeVwiIHNlY3Rpb24gb2YgdGhlIFJFQURNRVxuXHRcdHZhciBkcmF3X2F4aXMgPSBmdW5jdGlvbiAodywgaCwgeikge1xuXHRcdFx0YXhpc19vcHRzLnJhbmdlID0gZGlyID09PSBcInhcIiA/IFswLCB3XSA6IFtoLCAwXTtcblxuXHRcdFx0aWYgKGF4aXNfb3B0cy50eXBlID09PSBcIm9yZGluYWwyXCIpIHtcblx0XHRcdFx0c2NhbGUucmFuZ2VSb3VuZEJhbmRzKGF4aXNfb3B0cy5yYW5nZSwgLjUpLmRvbWFpbihheGlzX29wdHMuZG9tYWluKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNjYWxlLnJhbmdlKGF4aXNfb3B0cy5yYW5nZSkuZG9tYWluKGF4aXNfb3B0cy5kb21haW4pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZGlyID09IFwieFwiICYmIGF4aXNfb3B0cy5vcmllbnRhdGlvbiA9PSBcImJvdHRvbVwiKSB7XG5cdFx0XHRcdGF4aXNfZy5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoICsgXCIpXCIpO1xuXHRcdFx0XHQvKlxuXHRcdFx0XHRpZiAoYXhpc19vcHRzLmhhc093blByb3BlcnR5KFwiaW50ZXJjZXB0XCIpICYmIGF4ZXMueSkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGF4ZXMueS5zY2FsZShheGlzX29wdHMuaW50ZXJjZXB0KSksIGg7XG5cdFx0XHRcdFx0YXhpc19nLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGF4ZXMueS5zY2FsZShheGlzX29wdHMuaW50ZXJjZXB0KSArIFwiKVwiKTtcblx0XHRcdFx0fSBlbHNlIGlmIChheGlzX29wdHMub3JpZW50YXRpb24gPT0gXCJib3R0b21cIikge1xuXHRcdFx0XHRcdGF4aXNfZy5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoICsgXCIpXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCovXG5cdFx0XHR9IGVsc2UgaWYgKGRpciA9PSBcInlcIiAmJiBheGlzX29wdHMub3JpZW50YXRpb24gPT0gXCJyaWdodFwiKSB7XG5cdFx0XHRcdGF4aXNfZy5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgdyArIFwiLDApXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZGlyID09IFwieFwiKSB7XG5cdFx0XHRcdGlmIChheGlzX29wdHMucnVsZXMpIHtcblx0XHRcdFx0XHRheC50aWNrU2l6ZSgtaGVpZ2h0LCAwKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRheC50aWNrU2l6ZSgtYXhpc19vcHRzLnRpY2tMZW5ndGgsIDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoYXhpc19vcHRzLnJ1bGVzKSB7XG5cdFx0XHRcdFx0YXgudGlja1NpemUoLXdpZHRoLCAwKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRheC50aWNrU2l6ZSgtYXhpc19vcHRzLnRpY2tMZW5ndGgsIDApO1xuXHRcdFx0XHR9XHRcdFx0XHRcdFxuXHRcdFx0fVxuXG5cdFx0XHQvLyBvcHRpb25hbCByZXNpemUgZnVuY3Rpb24gcGFzc2VkIHRvIGF4aXMgb3B0aW9uc1xuXHRcdFx0aWYgKGF4aXNfb3B0cy5yZXNpemUpIHtcblx0XHRcdFx0YXhpc19vcHRzLnJlc2l6ZShzY2FsZSwgYXhpc19nLCB3aWR0aCwgaGVpZ2h0LCB6KTtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlX2F4aXMoKTtcblx0XHR9XG5cdFx0XG5cdFx0YnVpbGRfYXhpcygpO1xuXG5cdFx0Ly8gdGhpcyBpcyBpbnZva2Ugb25sb2FkIGFuZCBhbnkgdGltZSB0aGUgY2hhcnQgaXMgcmVzaXplZFxuXHRcdGRyYXdfYXhpcyh3aWR0aCwgaGVpZ2h0LCAxKTtcblxuXHRcdC8vIHdlJ2xsIHJldHVybiB0aGlzIG9iamVjdCAoYW5kIHN0b3JlIGl0IGluIHRoZSBjaGFydCBvYmplY3QpXG5cdFx0dmFyIG9iaiA9IHtcblx0XHRcdGRpcjogZGlyLFxuXHRcdFx0ZG9tYWluOiBzY2FsZS5kb21haW4sXG5cdFx0XHRzZXREb21haW46IGZ1bmN0aW9uKG5ld19kb21haW4pIHtcblx0XHRcdFx0YXhpc19vcHRzLmRvbWFpbiA9IG5ld19kb21haW47XG5cdFx0XHRcdHNjYWxlLnJhbmdlKGF4aXNfb3B0cy5yYW5nZSkuZG9tYWluKGF4aXNfb3B0cy5kb21haW4pO1xuXHRcdFx0fSxcdFx0XHRcblx0XHRcdHNjYWxlOiBzY2FsZSxcblx0XHRcdGF4aXM6IGF4LFxuXHRcdFx0dXBkYXRlOiB1cGRhdGVfYXhpcyxcblx0XHRcdHJlZHJhdzogZHJhd19heGlzLFxuXHRcdH07XG5cblx0XHRheGVzW2Rpcl0gPSBvYmo7XG5cdFx0cmV0dXJuIG9iajtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlc2l6ZV9jaGFydCgpIHtcblx0XHR2YXIgdyA9IHBhcnNlSW50KHN2Zy5zdHlsZSgnd2lkdGgnKSwgMTApIC0gbWFyZ2luLnJpZ2h0IC0gbWFyZ2luLmxlZnQsXG5cdFx0XHRoID0gcGFyc2VJbnQoc3ZnLnN0eWxlKCdoZWlnaHQnKSwgMTApIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b20sXG5cdFx0XHR6ID0gdyAvIG9yaWdpbmFsX3dpZHRoO1xuXG5cdFx0Y2hhcnQud2lkdGggPSB3aWR0aCA9IHc7XG5cdFx0Y2hhcnQuaGVpZ2h0ID0gaGVpZ2h0ID0gaDtcblxuXHRcdE9iamVjdC5rZXlzKGF4ZXMpLmZvckVhY2goZnVuY3Rpb24oZGlyKSB7XG5cdFx0XHRheGVzW2Rpcl0ucmVkcmF3KHcsIGgsIHopO1xuXHRcdH0pO1xuXG5cdFx0aWYgKG9wdHMucmVzaXplICYmIHR5cGVvZiBvcHRzLnJlc2l6ZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRvcHRzLnJlc2l6ZSh3LCBoLCB6KTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBjaGFuZ2VBc3BlY3QoYXNwZWN0KSB7XG5cdFx0Yi5jaGFuZ2VBc3BlY3QoYXNwZWN0KTtcdFx0XHRcblx0fVxuXG5cdGZ1bmN0aW9uIGNoYW5nZUhlaWdodChoKSB7XG5cdFx0Yi5jaGFuZ2VIZWlnaHQoaCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKTtcblx0XHRjaGFydC5oZWlnaHQgPSBoZWlnaHQgPSBoO1xuXG5cdFx0YXhlcy5mb3JFYWNoKGZ1bmN0aW9uKGF4aXMpIHtcblx0XHRcdGF4aXMucmVkcmF3KHdpZHRoLCBoZWlnaHQpO1xuXHRcdH0pO1x0XG5cdH1cblxuXHR2YXIgY2hhcnQgPSB7XG5cdFx0YXhlc19sYXllcjogYXhlc19sYXllcixcblx0XHRkYXRhX2xheWVyOiBkYXRhX2xheWVyLFxuXHRcdGhlaWdodDogaGVpZ2h0LFxuXHRcdHdpZHRoOiB3aWR0aCxcblx0XHRzZXRSZXNpemU6IGZ1bmN0aW9uKHJmKSB7XG5cdFx0XHRvcHRzLnJlc2l6ZSA9IHJmO1xuXHRcdFx0cmVzaXplX2NoYXJ0KCk7XG5cdFx0fSxcblx0XHRyZXNpemU6IHJlc2l6ZV9jaGFydCxcblx0XHRhZGRBeGlzOiBheGlzLFxuXHRcdGNoYW5nZUFzcGVjdDogY2hhbmdlQXNwZWN0LFxuXHRcdGNoYW5nZUhlaWdodDogY2hhbmdlSGVpZ2h0LFxuXHRcdGJhc2U6IGJcblx0fTtcblxuXHRyZXR1cm4gY2hhcnQ7XG59IiwidmFyIGFycmF5ID0gQXJyYXkucHJvdG90eXBlO1xuXG5leHBvcnQgdmFyIHNsaWNlID0gYXJyYXkuc2xpY2U7XG5leHBvcnQgdmFyIG1hcCA9IGFycmF5Lm1hcDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiBhID49IGIgPyAwIDogTmFOO1xufVxuIiwiaW1wb3J0IHtzbGljZX0gZnJvbSBcIi4vYXJyYXkuanNcIjtcbmltcG9ydCBiaXNlY3QgZnJvbSBcIi4vYmlzZWN0LmpzXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcbmltcG9ydCBleHRlbnQgZnJvbSBcIi4vZXh0ZW50LmpzXCI7XG5pbXBvcnQgaWRlbnRpdHkgZnJvbSBcIi4vaWRlbnRpdHkuanNcIjtcbmltcG9ydCByYW5nZSBmcm9tIFwiLi9yYW5nZS5qc1wiO1xuaW1wb3J0IHt0aWNrU3RlcH0gZnJvbSBcIi4vdGlja3MuanNcIjtcbmltcG9ydCBzdHVyZ2VzIGZyb20gXCIuL3RocmVzaG9sZC9zdHVyZ2VzLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgdmFsdWUgPSBpZGVudGl0eSxcbiAgICAgIGRvbWFpbiA9IGV4dGVudCxcbiAgICAgIHRocmVzaG9sZCA9IHN0dXJnZXM7XG5cbiAgZnVuY3Rpb24gaGlzdG9ncmFtKGRhdGEpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIGRhdGEgPSBBcnJheS5mcm9tKGRhdGEpO1xuXG4gICAgdmFyIGksXG4gICAgICAgIG4gPSBkYXRhLmxlbmd0aCxcbiAgICAgICAgeCxcbiAgICAgICAgdmFsdWVzID0gbmV3IEFycmF5KG4pO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgdmFsdWVzW2ldID0gdmFsdWUoZGF0YVtpXSwgaSwgZGF0YSk7XG4gICAgfVxuXG4gICAgdmFyIHh6ID0gZG9tYWluKHZhbHVlcyksXG4gICAgICAgIHgwID0geHpbMF0sXG4gICAgICAgIHgxID0geHpbMV0sXG4gICAgICAgIHR6ID0gdGhyZXNob2xkKHZhbHVlcywgeDAsIHgxKTtcblxuICAgIC8vIENvbnZlcnQgbnVtYmVyIG9mIHRocmVzaG9sZHMgaW50byB1bmlmb3JtIHRocmVzaG9sZHMuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHR6KSkge1xuICAgICAgdHogPSB0aWNrU3RlcCh4MCwgeDEsIHR6KTtcbiAgICAgIHR6ID0gcmFuZ2UoTWF0aC5jZWlsKHgwIC8gdHopICogdHosIHgxLCB0eik7IC8vIGV4Y2x1c2l2ZVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbnkgdGhyZXNob2xkcyBvdXRzaWRlIHRoZSBkb21haW4uXG4gICAgdmFyIG0gPSB0ei5sZW5ndGg7XG4gICAgd2hpbGUgKHR6WzBdIDw9IHgwKSB0ei5zaGlmdCgpLCAtLW07XG4gICAgd2hpbGUgKHR6W20gLSAxXSA+IHgxKSB0ei5wb3AoKSwgLS1tO1xuXG4gICAgdmFyIGJpbnMgPSBuZXcgQXJyYXkobSArIDEpLFxuICAgICAgICBiaW47XG5cbiAgICAvLyBJbml0aWFsaXplIGJpbnMuXG4gICAgZm9yIChpID0gMDsgaSA8PSBtOyArK2kpIHtcbiAgICAgIGJpbiA9IGJpbnNbaV0gPSBbXTtcbiAgICAgIGJpbi54MCA9IGkgPiAwID8gdHpbaSAtIDFdIDogeDA7XG4gICAgICBiaW4ueDEgPSBpIDwgbSA/IHR6W2ldIDogeDE7XG4gICAgfVxuXG4gICAgLy8gQXNzaWduIGRhdGEgdG8gYmlucyBieSB2YWx1ZSwgaWdub3JpbmcgYW55IG91dHNpZGUgdGhlIGRvbWFpbi5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICB4ID0gdmFsdWVzW2ldO1xuICAgICAgaWYgKHgwIDw9IHggJiYgeCA8PSB4MSkge1xuICAgICAgICBiaW5zW2Jpc2VjdCh0eiwgeCwgMCwgbSldLnB1c2goZGF0YVtpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJpbnM7XG4gIH1cblxuICBoaXN0b2dyYW0udmFsdWUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodmFsdWUgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KF8pLCBoaXN0b2dyYW0pIDogdmFsdWU7XG4gIH07XG5cbiAgaGlzdG9ncmFtLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkb21haW4gPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KFtfWzBdLCBfWzFdXSksIGhpc3RvZ3JhbSkgOiBkb21haW47XG4gIH07XG5cbiAgaGlzdG9ncmFtLnRocmVzaG9sZHMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGhyZXNob2xkID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBBcnJheS5pc0FycmF5KF8pID8gY29uc3RhbnQoc2xpY2UuY2FsbChfKSkgOiBjb25zdGFudChfKSwgaGlzdG9ncmFtKSA6IHRocmVzaG9sZDtcbiAgfTtcblxuICByZXR1cm4gaGlzdG9ncmFtO1xufVxuIiwiaW1wb3J0IGFzY2VuZGluZyBmcm9tIFwiLi9hc2NlbmRpbmcuanNcIjtcbmltcG9ydCBiaXNlY3RvciBmcm9tIFwiLi9iaXNlY3Rvci5qc1wiO1xuXG52YXIgYXNjZW5kaW5nQmlzZWN0ID0gYmlzZWN0b3IoYXNjZW5kaW5nKTtcbmV4cG9ydCB2YXIgYmlzZWN0UmlnaHQgPSBhc2NlbmRpbmdCaXNlY3QucmlnaHQ7XG5leHBvcnQgdmFyIGJpc2VjdExlZnQgPSBhc2NlbmRpbmdCaXNlY3QubGVmdDtcbmV4cG9ydCBkZWZhdWx0IGJpc2VjdFJpZ2h0O1xuIiwiaW1wb3J0IGFzY2VuZGluZyBmcm9tIFwiLi9hc2NlbmRpbmcuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29tcGFyZSkge1xuICBpZiAoY29tcGFyZS5sZW5ndGggPT09IDEpIGNvbXBhcmUgPSBhc2NlbmRpbmdDb21wYXJhdG9yKGNvbXBhcmUpO1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IGZ1bmN0aW9uKGEsIHgsIGxvLCBoaSkge1xuICAgICAgaWYgKGxvID09IG51bGwpIGxvID0gMDtcbiAgICAgIGlmIChoaSA9PSBudWxsKSBoaSA9IGEubGVuZ3RoO1xuICAgICAgd2hpbGUgKGxvIDwgaGkpIHtcbiAgICAgICAgdmFyIG1pZCA9IGxvICsgaGkgPj4+IDE7XG4gICAgICAgIGlmIChjb21wYXJlKGFbbWlkXSwgeCkgPCAwKSBsbyA9IG1pZCArIDE7XG4gICAgICAgIGVsc2UgaGkgPSBtaWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbG87XG4gICAgfSxcbiAgICByaWdodDogZnVuY3Rpb24oYSwgeCwgbG8sIGhpKSB7XG4gICAgICBpZiAobG8gPT0gbnVsbCkgbG8gPSAwO1xuICAgICAgaWYgKGhpID09IG51bGwpIGhpID0gYS5sZW5ndGg7XG4gICAgICB3aGlsZSAobG8gPCBoaSkge1xuICAgICAgICB2YXIgbWlkID0gbG8gKyBoaSA+Pj4gMTtcbiAgICAgICAgaWYgKGNvbXBhcmUoYVttaWRdLCB4KSA+IDApIGhpID0gbWlkO1xuICAgICAgICBlbHNlIGxvID0gbWlkICsgMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsbztcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGFzY2VuZGluZ0NvbXBhcmF0b3IoZikge1xuICByZXR1cm4gZnVuY3Rpb24oZCwgeCkge1xuICAgIHJldHVybiBhc2NlbmRpbmcoZihkKSwgeCk7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvdW50KHZhbHVlcywgdmFsdWVvZikge1xuICBsZXQgY291bnQgPSAwO1xuICBpZiAodmFsdWVvZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlID49IHZhbHVlKSB7XG4gICAgICAgICsrY291bnQ7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlb2YodmFsdWUsICsraW5kZXgsIHZhbHVlcykpICE9IG51bGwgJiYgdmFsdWUgPj0gdmFsdWUpIHtcbiAgICAgICAgKytjb3VudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvdW50O1xufVxuIiwiZnVuY3Rpb24gbGVuZ3RoKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5sZW5ndGggfCAwO1xufVxuXG5mdW5jdGlvbiBlbXB0eShsZW5ndGgpIHtcbiAgcmV0dXJuICEobGVuZ3RoID4gMCk7XG59XG5cbmZ1bmN0aW9uIGFycmF5aWZ5KHZhbHVlcykge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlcyAhPT0gXCJvYmplY3RcIiB8fCBcImxlbmd0aFwiIGluIHZhbHVlcyA/IHZhbHVlcyA6IEFycmF5LmZyb20odmFsdWVzKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlcihyZWR1Y2UpIHtcbiAgcmV0dXJuIHZhbHVlcyA9PiByZWR1Y2UoLi4udmFsdWVzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3Jvc3MoLi4udmFsdWVzKSB7XG4gIGNvbnN0IHJlZHVjZSA9IHR5cGVvZiB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdID09PSBcImZ1bmN0aW9uXCIgJiYgcmVkdWNlcih2YWx1ZXMucG9wKCkpO1xuICB2YWx1ZXMgPSB2YWx1ZXMubWFwKGFycmF5aWZ5KTtcbiAgY29uc3QgbGVuZ3RocyA9IHZhbHVlcy5tYXAobGVuZ3RoKTtcbiAgY29uc3QgaiA9IHZhbHVlcy5sZW5ndGggLSAxO1xuICBjb25zdCBpbmRleCA9IG5ldyBBcnJheShqICsgMSkuZmlsbCgwKTtcbiAgY29uc3QgcHJvZHVjdCA9IFtdO1xuICBpZiAoaiA8IDAgfHwgbGVuZ3Rocy5zb21lKGVtcHR5KSkgcmV0dXJuIHByb2R1Y3Q7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgcHJvZHVjdC5wdXNoKGluZGV4Lm1hcCgoaiwgaSkgPT4gdmFsdWVzW2ldW2pdKSk7XG4gICAgbGV0IGkgPSBqO1xuICAgIHdoaWxlICgrK2luZGV4W2ldID09PSBsZW5ndGhzW2ldKSB7XG4gICAgICBpZiAoaSA9PT0gMCkgcmV0dXJuIHJlZHVjZSA/IHByb2R1Y3QubWFwKHJlZHVjZSkgOiBwcm9kdWN0O1xuICAgICAgaW5kZXhbaS0tXSA9IDA7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBiIDwgYSA/IC0xIDogYiA+IGEgPyAxIDogYiA+PSBhID8gMCA6IE5hTjtcbn1cbiIsImltcG9ydCB2YXJpYW5jZSBmcm9tIFwiLi92YXJpYW5jZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXZpYXRpb24odmFsdWVzLCB2YWx1ZW9mKSB7XG4gIGNvbnN0IHYgPSB2YXJpYW5jZSh2YWx1ZXMsIHZhbHVlb2YpO1xuICByZXR1cm4gdiA/IE1hdGguc3FydCh2KSA6IHY7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZXMsIHZhbHVlb2YpIHtcbiAgbGV0IG1pbjtcbiAgbGV0IG1heDtcbiAgaWYgKHZhbHVlb2YgPT09IHVuZGVmaW5lZCkge1xuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBpZiAobWluID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodmFsdWUgPj0gdmFsdWUpIG1pbiA9IG1heCA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChtaW4gPiB2YWx1ZSkgbWluID0gdmFsdWU7XG4gICAgICAgICAgaWYgKG1heCA8IHZhbHVlKSBtYXggPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICgodmFsdWUgPSB2YWx1ZW9mKHZhbHVlLCArK2luZGV4LCB2YWx1ZXMpKSAhPSBudWxsKSB7XG4gICAgICAgIGlmIChtaW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICh2YWx1ZSA+PSB2YWx1ZSkgbWluID0gbWF4ID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG1pbiA+IHZhbHVlKSBtaW4gPSB2YWx1ZTtcbiAgICAgICAgICBpZiAobWF4IDwgdmFsdWUpIG1heCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBbbWluLCBtYXhdO1xufVxuIiwiaW1wb3J0IGlkZW50aXR5IGZyb20gXCIuL2lkZW50aXR5LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdyb3VwKHZhbHVlcywgLi4ua2V5cykge1xuICByZXR1cm4gbmVzdCh2YWx1ZXMsIGlkZW50aXR5LCBpZGVudGl0eSwga2V5cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncm91cHModmFsdWVzLCAuLi5rZXlzKSB7XG4gIHJldHVybiBuZXN0KHZhbHVlcywgQXJyYXkuZnJvbSwgaWRlbnRpdHksIGtleXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm9sbHVwKHZhbHVlcywgcmVkdWNlLCAuLi5rZXlzKSB7XG4gIHJldHVybiBuZXN0KHZhbHVlcywgaWRlbnRpdHksIHJlZHVjZSwga2V5cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb2xsdXBzKHZhbHVlcywgcmVkdWNlLCAuLi5rZXlzKSB7XG4gIHJldHVybiBuZXN0KHZhbHVlcywgQXJyYXkuZnJvbSwgcmVkdWNlLCBrZXlzKTtcbn1cblxuZnVuY3Rpb24gbmVzdCh2YWx1ZXMsIG1hcCwgcmVkdWNlLCBrZXlzKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gcmVncm91cCh2YWx1ZXMsIGkpIHtcbiAgICBpZiAoaSA+PSBrZXlzLmxlbmd0aCkgcmV0dXJuIHJlZHVjZSh2YWx1ZXMpO1xuICAgIGNvbnN0IGdyb3VwcyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBrZXlvZiA9IGtleXNbaSsrXTtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgY29uc3Qga2V5ID0ga2V5b2YodmFsdWUsICsraW5kZXgsIHZhbHVlcyk7XG4gICAgICBjb25zdCBncm91cCA9IGdyb3Vwcy5nZXQoa2V5KTtcbiAgICAgIGlmIChncm91cCkgZ3JvdXAucHVzaCh2YWx1ZSk7XG4gICAgICBlbHNlIGdyb3Vwcy5zZXQoa2V5LCBbdmFsdWVdKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZXNdIG9mIGdyb3Vwcykge1xuICAgICAgZ3JvdXBzLnNldChrZXksIHJlZ3JvdXAodmFsdWVzLCBpKSk7XG4gICAgfVxuICAgIHJldHVybiBtYXAoZ3JvdXBzKTtcbiAgfSkodmFsdWVzLCAwKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHg7XG59XG4iLCJleHBvcnQge2RlZmF1bHQgYXMgYmlzZWN0LCBiaXNlY3RSaWdodCwgYmlzZWN0TGVmdH0gZnJvbSBcIi4vYmlzZWN0LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgYXNjZW5kaW5nfSBmcm9tIFwiLi9hc2NlbmRpbmcuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBiaXNlY3Rvcn0gZnJvbSBcIi4vYmlzZWN0b3IuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjb3VudH0gZnJvbSBcIi4vY291bnQuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjcm9zc30gZnJvbSBcIi4vY3Jvc3MuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBkZXNjZW5kaW5nfSBmcm9tIFwiLi9kZXNjZW5kaW5nLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZGV2aWF0aW9ufSBmcm9tIFwiLi9kZXZpYXRpb24uanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBleHRlbnR9IGZyb20gXCIuL2V4dGVudC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdyb3VwLCBncm91cHMsIHJvbGx1cCwgcm9sbHVwc30gZnJvbSBcIi4vZ3JvdXAuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBiaW4sIGRlZmF1bHQgYXMgaGlzdG9ncmFtfSBmcm9tIFwiLi9iaW4uanNcIjsgLy8gRGVwcmVjYXRlZDsgdXNlIGJpbi5cbmV4cG9ydCB7ZGVmYXVsdCBhcyB0aHJlc2hvbGRGcmVlZG1hbkRpYWNvbmlzfSBmcm9tIFwiLi90aHJlc2hvbGQvZnJlZWRtYW5EaWFjb25pcy5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHRocmVzaG9sZFNjb3R0fSBmcm9tIFwiLi90aHJlc2hvbGQvc2NvdHQuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB0aHJlc2hvbGRTdHVyZ2VzfSBmcm9tIFwiLi90aHJlc2hvbGQvc3R1cmdlcy5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG1heH0gZnJvbSBcIi4vbWF4LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbWF4SW5kZXh9IGZyb20gXCIuL21heEluZGV4LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbWVhbn0gZnJvbSBcIi4vbWVhbi5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG1lZGlhbn0gZnJvbSBcIi4vbWVkaWFuLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbWVyZ2V9IGZyb20gXCIuL21lcmdlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbWlufSBmcm9tIFwiLi9taW4uanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBtaW5JbmRleH0gZnJvbSBcIi4vbWluSW5kZXguanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBwYWlyc30gZnJvbSBcIi4vcGFpcnMuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBwZXJtdXRlfSBmcm9tIFwiLi9wZXJtdXRlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcXVhbnRpbGV9IGZyb20gXCIuL3F1YW50aWxlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcXVpY2tzZWxlY3R9IGZyb20gXCIuL3F1aWNrc2VsZWN0LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcmFuZ2V9IGZyb20gXCIuL3JhbmdlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbGVhc3R9IGZyb20gXCIuL2xlYXN0LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbGVhc3RJbmRleH0gZnJvbSBcIi4vbGVhc3RJbmRleC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNjYW59IGZyb20gXCIuL3NjYW4uanNcIjsgLy8gRGVwcmVjYXRlZDsgdXNlIGxlYXN0SW5kZXguXG5leHBvcnQge2RlZmF1bHQgYXMgc2h1ZmZsZX0gZnJvbSBcIi4vc2h1ZmZsZS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN1bX0gZnJvbSBcIi4vc3VtLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdGlja3MsIHRpY2tJbmNyZW1lbnQsIHRpY2tTdGVwfSBmcm9tIFwiLi90aWNrcy5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHRyYW5zcG9zZX0gZnJvbSBcIi4vdHJhbnNwb3NlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdmFyaWFuY2V9IGZyb20gXCIuL3ZhcmlhbmNlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgemlwfSBmcm9tIFwiLi96aXAuanNcIjtcbiIsImltcG9ydCBhc2NlbmRpbmcgZnJvbSBcIi4vYXNjZW5kaW5nLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxlYXN0KHZhbHVlcywgY29tcGFyZSA9IGFzY2VuZGluZykge1xuICBsZXQgbWluO1xuICBsZXQgZGVmaW5lZCA9IGZhbHNlO1xuICBpZiAoY29tcGFyZS5sZW5ndGggPT09IDEpIHtcbiAgICBsZXQgbWluVmFsdWU7XG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHZhbHVlcykge1xuICAgICAgY29uc3QgdmFsdWUgPSBjb21wYXJlKGVsZW1lbnQpO1xuICAgICAgaWYgKGRlZmluZWRcbiAgICAgICAgICA/IGFzY2VuZGluZyh2YWx1ZSwgbWluVmFsdWUpIDwgMFxuICAgICAgICAgIDogYXNjZW5kaW5nKHZhbHVlLCB2YWx1ZSkgPT09IDApIHtcbiAgICAgICAgbWluID0gZWxlbWVudDtcbiAgICAgICAgbWluVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgZGVmaW5lZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAoZGVmaW5lZFxuICAgICAgICAgID8gY29tcGFyZSh2YWx1ZSwgbWluKSA8IDBcbiAgICAgICAgICA6IGNvbXBhcmUodmFsdWUsIHZhbHVlKSA9PT0gMCkge1xuICAgICAgICBtaW4gPSB2YWx1ZTtcbiAgICAgICAgZGVmaW5lZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBtaW47XG59XG4iLCJpbXBvcnQgYXNjZW5kaW5nIGZyb20gXCIuL2FzY2VuZGluZy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsZWFzdEluZGV4KHZhbHVlcywgY29tcGFyZSA9IGFzY2VuZGluZykge1xuICBsZXQgbWluO1xuICBsZXQgbWluSW5kZXggPSAtMTtcbiAgbGV0IGluZGV4ID0gLTE7XG4gIGlmIChjb21wYXJlLmxlbmd0aCA9PT0gMSkge1xuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB2YWx1ZXMpIHtcbiAgICAgICsraW5kZXg7XG4gICAgICBjb25zdCB2YWx1ZSA9IGNvbXBhcmUoZWxlbWVudCk7XG4gICAgICBpZiAobWluSW5kZXggPCAwXG4gICAgICAgICAgPyBhc2NlbmRpbmcodmFsdWUsIHZhbHVlKSA9PT0gMFxuICAgICAgICAgIDogYXNjZW5kaW5nKHZhbHVlLCBtaW4pIDwgMCkge1xuICAgICAgICBtaW4gPSB2YWx1ZTtcbiAgICAgICAgbWluSW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgICsraW5kZXg7XG4gICAgICBpZiAobWluSW5kZXggPCAwXG4gICAgICAgICAgPyBjb21wYXJlKHZhbHVlLCB2YWx1ZSkgPT09IDBcbiAgICAgICAgICA6IGNvbXBhcmUodmFsdWUsIG1pbikgPCAwKSB7XG4gICAgICAgIG1pbiA9IHZhbHVlO1xuICAgICAgICBtaW5JbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbWluSW5kZXg7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXgodmFsdWVzLCB2YWx1ZW9mKSB7XG4gIGxldCBtYXg7XG4gIGlmICh2YWx1ZW9mID09PSB1bmRlZmluZWQpIHtcbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgaWYgKHZhbHVlICE9IG51bGxcbiAgICAgICAgICAmJiAobWF4IDwgdmFsdWUgfHwgKG1heCA9PT0gdW5kZWZpbmVkICYmIHZhbHVlID49IHZhbHVlKSkpIHtcbiAgICAgICAgbWF4ID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlb2YodmFsdWUsICsraW5kZXgsIHZhbHVlcykpICE9IG51bGxcbiAgICAgICAgICAmJiAobWF4IDwgdmFsdWUgfHwgKG1heCA9PT0gdW5kZWZpbmVkICYmIHZhbHVlID49IHZhbHVlKSkpIHtcbiAgICAgICAgbWF4ID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXg7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXhJbmRleCh2YWx1ZXMsIHZhbHVlb2YpIHtcbiAgbGV0IG1heDtcbiAgbGV0IG1heEluZGV4ID0gLTE7XG4gIGxldCBpbmRleCA9IC0xO1xuICBpZiAodmFsdWVvZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgICsraW5kZXg7XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbFxuICAgICAgICAgICYmIChtYXggPCB2YWx1ZSB8fCAobWF4ID09PSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gdmFsdWUpKSkge1xuICAgICAgICBtYXggPSB2YWx1ZSwgbWF4SW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAoKHZhbHVlID0gdmFsdWVvZih2YWx1ZSwgKytpbmRleCwgdmFsdWVzKSkgIT0gbnVsbFxuICAgICAgICAgICYmIChtYXggPCB2YWx1ZSB8fCAobWF4ID09PSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gdmFsdWUpKSkge1xuICAgICAgICBtYXggPSB2YWx1ZSwgbWF4SW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1heEluZGV4O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVhbih2YWx1ZXMsIHZhbHVlb2YpIHtcbiAgbGV0IGNvdW50ID0gMDtcbiAgbGV0IHN1bSA9IDA7XG4gIGlmICh2YWx1ZW9mID09PSB1bmRlZmluZWQpIHtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmICh2YWx1ZSA9ICt2YWx1ZSkgPj0gdmFsdWUpIHtcbiAgICAgICAgKytjb3VudCwgc3VtICs9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICgodmFsdWUgPSB2YWx1ZW9mKHZhbHVlLCArK2luZGV4LCB2YWx1ZXMpKSAhPSBudWxsICYmICh2YWx1ZSA9ICt2YWx1ZSkgPj0gdmFsdWUpIHtcbiAgICAgICAgKytjb3VudCwgc3VtICs9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoY291bnQpIHJldHVybiBzdW0gLyBjb3VudDtcbn1cbiIsImltcG9ydCBxdWFudGlsZSBmcm9tIFwiLi9xdWFudGlsZS5qc1wiO1xuaW1wb3J0IHF1aWNrc2VsZWN0IGZyb20gXCIuL3F1aWNrc2VsZWN0LmpzXCI7XG5cbmZ1bmN0aW9uKiBudW1iZXJzKHZhbHVlcywgdmFsdWVvZikge1xuICBpZiAodmFsdWVvZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiAodmFsdWUgPSArdmFsdWUpID49IHZhbHVlKSB7XG4gICAgICAgIHlpZWxkIHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICgodmFsdWUgPSB2YWx1ZW9mKHZhbHVlLCArK2luZGV4LCB2YWx1ZXMpKSAhPSBudWxsICYmICh2YWx1ZSA9ICt2YWx1ZSkgPj0gdmFsdWUpIHtcbiAgICAgICAgeWllbGQgdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcywgdmFsdWVvZikge1xuICB2YWx1ZXMgPSBGbG9hdDY0QXJyYXkuZnJvbShudW1iZXJzKHZhbHVlcywgdmFsdWVvZikpO1xuICBpZiAoIXZhbHVlcy5sZW5ndGgpIHJldHVybjtcbiAgY29uc3QgbiA9IHZhbHVlcy5sZW5ndGg7XG4gIGNvbnN0IGkgPSBuID4+IDE7XG4gIHF1aWNrc2VsZWN0KHZhbHVlcywgaSAtIDEsIDApO1xuICBpZiAoKG4gJiAxKSA9PT0gMCkgcXVpY2tzZWxlY3QodmFsdWVzLCBpLCBpKTtcbiAgcmV0dXJuIHF1YW50aWxlKHZhbHVlcywgMC41KTtcbn1cbiIsImZ1bmN0aW9uKiBmbGF0dGVuKGFycmF5cykge1xuICBmb3IgKGNvbnN0IGFycmF5IG9mIGFycmF5cykge1xuICAgIHlpZWxkKiBhcnJheTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZShhcnJheXMpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oZmxhdHRlbihhcnJheXMpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pbih2YWx1ZXMsIHZhbHVlb2YpIHtcbiAgbGV0IG1pbjtcbiAgaWYgKHZhbHVlb2YgPT09IHVuZGVmaW5lZCkge1xuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbFxuICAgICAgICAgICYmIChtaW4gPiB2YWx1ZSB8fCAobWluID09PSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gdmFsdWUpKSkge1xuICAgICAgICBtaW4gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAoKHZhbHVlID0gdmFsdWVvZih2YWx1ZSwgKytpbmRleCwgdmFsdWVzKSkgIT0gbnVsbFxuICAgICAgICAgICYmIChtaW4gPiB2YWx1ZSB8fCAobWluID09PSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gdmFsdWUpKSkge1xuICAgICAgICBtaW4gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1pbjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pbkluZGV4KHZhbHVlcywgdmFsdWVvZikge1xuICBsZXQgbWluO1xuICBsZXQgbWluSW5kZXggPSAtMTtcbiAgbGV0IGluZGV4ID0gLTE7XG4gIGlmICh2YWx1ZW9mID09PSB1bmRlZmluZWQpIHtcbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgKytpbmRleDtcbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsXG4gICAgICAgICAgJiYgKG1pbiA+IHZhbHVlIHx8IChtaW4gPT09IHVuZGVmaW5lZCAmJiB2YWx1ZSA+PSB2YWx1ZSkpKSB7XG4gICAgICAgIG1pbiA9IHZhbHVlLCBtaW5JbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICgodmFsdWUgPSB2YWx1ZW9mKHZhbHVlLCArK2luZGV4LCB2YWx1ZXMpKSAhPSBudWxsXG4gICAgICAgICAgJiYgKG1pbiA+IHZhbHVlIHx8IChtaW4gPT09IHVuZGVmaW5lZCAmJiB2YWx1ZSA+PSB2YWx1ZSkpKSB7XG4gICAgICAgIG1pbiA9IHZhbHVlLCBtaW5JbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbWluSW5kZXg7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiB4ID09PSBudWxsID8gTmFOIDogK3g7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWlycyh2YWx1ZXMsIHBhaXJvZiA9IHBhaXIpIHtcbiAgY29uc3QgcGFpcnMgPSBbXTtcbiAgbGV0IHByZXZpb3VzO1xuICBsZXQgZmlyc3QgPSBmYWxzZTtcbiAgZm9yIChjb25zdCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICBpZiAoZmlyc3QpIHBhaXJzLnB1c2gocGFpcm9mKHByZXZpb3VzLCB2YWx1ZSkpO1xuICAgIHByZXZpb3VzID0gdmFsdWU7XG4gICAgZmlyc3QgPSB0cnVlO1xuICB9XG4gIHJldHVybiBwYWlycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhaXIoYSwgYikge1xuICByZXR1cm4gW2EsIGJdO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc291cmNlLCBrZXlzKSB7XG4gIHJldHVybiBBcnJheS5mcm9tKGtleXMsIGtleSA9PiBzb3VyY2Vba2V5XSk7XG59XG4iLCJpbXBvcnQgbnVtYmVyIGZyb20gXCIuL251bWJlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBxdWFudGlsZSh2YWx1ZXMsIHAsIHZhbHVlb2YgPSBudW1iZXIpIHtcbiAgaWYgKCEobiA9IHZhbHVlcy5sZW5ndGgpKSByZXR1cm47XG4gIGlmICgocCA9ICtwKSA8PSAwIHx8IG4gPCAyKSByZXR1cm4gK3ZhbHVlb2YodmFsdWVzWzBdLCAwLCB2YWx1ZXMpO1xuICBpZiAocCA+PSAxKSByZXR1cm4gK3ZhbHVlb2YodmFsdWVzW24gLSAxXSwgbiAtIDEsIHZhbHVlcyk7XG4gIHZhciBuLFxuICAgICAgaSA9IChuIC0gMSkgKiBwLFxuICAgICAgaTAgPSBNYXRoLmZsb29yKGkpLFxuICAgICAgdmFsdWUwID0gK3ZhbHVlb2YodmFsdWVzW2kwXSwgaTAsIHZhbHVlcyksXG4gICAgICB2YWx1ZTEgPSArdmFsdWVvZih2YWx1ZXNbaTAgKyAxXSwgaTAgKyAxLCB2YWx1ZXMpO1xuICByZXR1cm4gdmFsdWUwICsgKHZhbHVlMSAtIHZhbHVlMCkgKiAoaSAtIGkwKTtcbn1cbiIsImltcG9ydCBhc2NlbmRpbmcgZnJvbSBcIi4vYXNjZW5kaW5nLmpzXCI7XG5cbi8vIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3VybmVyL3F1aWNrc2VsZWN0XG4vLyBJU0MgbGljZW5zZSwgQ29weXJpZ2h0IDIwMTggVmxhZGltaXIgQWdhZm9ua2luLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcXVpY2tzZWxlY3QoYXJyYXksIGssIGxlZnQgPSAwLCByaWdodCA9IGFycmF5Lmxlbmd0aCAtIDEsIGNvbXBhcmUgPSBhc2NlbmRpbmcpIHtcbiAgd2hpbGUgKHJpZ2h0ID4gbGVmdCkge1xuICAgIGlmIChyaWdodCAtIGxlZnQgPiA2MDApIHtcbiAgICAgIGNvbnN0IG4gPSByaWdodCAtIGxlZnQgKyAxO1xuICAgICAgY29uc3QgbSA9IGsgLSBsZWZ0ICsgMTtcbiAgICAgIGNvbnN0IHogPSBNYXRoLmxvZyhuKTtcbiAgICAgIGNvbnN0IHMgPSAwLjUgKiBNYXRoLmV4cCgyICogeiAvIDMpO1xuICAgICAgY29uc3Qgc2QgPSAwLjUgKiBNYXRoLnNxcnQoeiAqIHMgKiAobiAtIHMpIC8gbikgKiAobSAtIG4gLyAyIDwgMCA/IC0xIDogMSk7XG4gICAgICBjb25zdCBuZXdMZWZ0ID0gTWF0aC5tYXgobGVmdCwgTWF0aC5mbG9vcihrIC0gbSAqIHMgLyBuICsgc2QpKTtcbiAgICAgIGNvbnN0IG5ld1JpZ2h0ID0gTWF0aC5taW4ocmlnaHQsIE1hdGguZmxvb3IoayArIChuIC0gbSkgKiBzIC8gbiArIHNkKSk7XG4gICAgICBxdWlja3NlbGVjdChhcnJheSwgaywgbmV3TGVmdCwgbmV3UmlnaHQsIGNvbXBhcmUpO1xuICAgIH1cblxuICAgIGNvbnN0IHQgPSBhcnJheVtrXTtcbiAgICBsZXQgaSA9IGxlZnQ7XG4gICAgbGV0IGogPSByaWdodDtcblxuICAgIHN3YXAoYXJyYXksIGxlZnQsIGspO1xuICAgIGlmIChjb21wYXJlKGFycmF5W3JpZ2h0XSwgdCkgPiAwKSBzd2FwKGFycmF5LCBsZWZ0LCByaWdodCk7XG5cbiAgICB3aGlsZSAoaSA8IGopIHtcbiAgICAgIHN3YXAoYXJyYXksIGksIGopLCArK2ksIC0tajtcbiAgICAgIHdoaWxlIChjb21wYXJlKGFycmF5W2ldLCB0KSA8IDApICsraTtcbiAgICAgIHdoaWxlIChjb21wYXJlKGFycmF5W2pdLCB0KSA+IDApIC0tajtcbiAgICB9XG5cbiAgICBpZiAoY29tcGFyZShhcnJheVtsZWZ0XSwgdCkgPT09IDApIHN3YXAoYXJyYXksIGxlZnQsIGopO1xuICAgIGVsc2UgKytqLCBzd2FwKGFycmF5LCBqLCByaWdodCk7XG5cbiAgICBpZiAoaiA8PSBrKSBsZWZ0ID0gaiArIDE7XG4gICAgaWYgKGsgPD0gaikgcmlnaHQgPSBqIC0gMTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIHN3YXAoYXJyYXksIGksIGopIHtcbiAgY29uc3QgdCA9IGFycmF5W2ldO1xuICBhcnJheVtpXSA9IGFycmF5W2pdO1xuICBhcnJheVtqXSA9IHQ7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGFydCwgc3RvcCwgc3RlcCkge1xuICBzdGFydCA9ICtzdGFydCwgc3RvcCA9ICtzdG9wLCBzdGVwID0gKG4gPSBhcmd1bWVudHMubGVuZ3RoKSA8IDIgPyAoc3RvcCA9IHN0YXJ0LCBzdGFydCA9IDAsIDEpIDogbiA8IDMgPyAxIDogK3N0ZXA7XG5cbiAgdmFyIGkgPSAtMSxcbiAgICAgIG4gPSBNYXRoLm1heCgwLCBNYXRoLmNlaWwoKHN0b3AgLSBzdGFydCkgLyBzdGVwKSkgfCAwLFxuICAgICAgcmFuZ2UgPSBuZXcgQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICByYW5nZVtpXSA9IHN0YXJ0ICsgaSAqIHN0ZXA7XG4gIH1cblxuICByZXR1cm4gcmFuZ2U7XG59XG4iLCJpbXBvcnQgbGVhc3RJbmRleCBmcm9tIFwiLi9sZWFzdEluZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNjYW4odmFsdWVzLCBjb21wYXJlKSB7XG4gIGNvbnN0IGluZGV4ID0gbGVhc3RJbmRleCh2YWx1ZXMsIGNvbXBhcmUpO1xuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogaW5kZXg7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaHVmZmxlKGFycmF5LCBpMCA9IDAsIGkxID0gYXJyYXkubGVuZ3RoKSB7XG4gIHZhciBtID0gaTEgLSAoaTAgPSAraTApLFxuICAgICAgdCxcbiAgICAgIGk7XG5cbiAgd2hpbGUgKG0pIHtcbiAgICBpID0gTWF0aC5yYW5kb20oKSAqIG0tLSB8IDA7XG4gICAgdCA9IGFycmF5W20gKyBpMF07XG4gICAgYXJyYXlbbSArIGkwXSA9IGFycmF5W2kgKyBpMF07XG4gICAgYXJyYXlbaSArIGkwXSA9IHQ7XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdW0odmFsdWVzLCB2YWx1ZW9mKSB7XG4gIGxldCBzdW0gPSAwO1xuICBpZiAodmFsdWVvZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWUgPSArdmFsdWUpIHtcbiAgICAgICAgc3VtICs9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICh2YWx1ZSA9ICt2YWx1ZW9mKHZhbHVlLCArK2luZGV4LCB2YWx1ZXMpKSB7XG4gICAgICAgIHN1bSArPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn1cbiIsImltcG9ydCB7bWFwfSBmcm9tIFwiLi4vYXJyYXkuanNcIjtcbmltcG9ydCBhc2NlbmRpbmcgZnJvbSBcIi4uL2FzY2VuZGluZy5qc1wiO1xuaW1wb3J0IG51bWJlciBmcm9tIFwiLi4vbnVtYmVyLmpzXCI7XG5pbXBvcnQgcXVhbnRpbGUgZnJvbSBcIi4uL3F1YW50aWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcywgbWluLCBtYXgpIHtcbiAgdmFsdWVzID0gbWFwLmNhbGwodmFsdWVzLCBudW1iZXIpLnNvcnQoYXNjZW5kaW5nKTtcbiAgcmV0dXJuIE1hdGguY2VpbCgobWF4IC0gbWluKSAvICgyICogKHF1YW50aWxlKHZhbHVlcywgMC43NSkgLSBxdWFudGlsZSh2YWx1ZXMsIDAuMjUpKSAqIE1hdGgucG93KHZhbHVlcy5sZW5ndGgsIC0xIC8gMykpKTtcbn1cbiIsImltcG9ydCBkZXZpYXRpb24gZnJvbSBcIi4uL2RldmlhdGlvbi5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZXMsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmNlaWwoKG1heCAtIG1pbikgLyAoMy41ICogZGV2aWF0aW9uKHZhbHVlcykgKiBNYXRoLnBvdyh2YWx1ZXMubGVuZ3RoLCAtMSAvIDMpKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgcmV0dXJuIE1hdGguY2VpbChNYXRoLmxvZyh2YWx1ZXMubGVuZ3RoKSAvIE1hdGguTE4yKSArIDE7XG59XG4iLCJ2YXIgZTEwID0gTWF0aC5zcXJ0KDUwKSxcbiAgICBlNSA9IE1hdGguc3FydCgxMCksXG4gICAgZTIgPSBNYXRoLnNxcnQoMik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXJ0LCBzdG9wLCBjb3VudCkge1xuICB2YXIgcmV2ZXJzZSxcbiAgICAgIGkgPSAtMSxcbiAgICAgIG4sXG4gICAgICB0aWNrcyxcbiAgICAgIHN0ZXA7XG5cbiAgc3RvcCA9ICtzdG9wLCBzdGFydCA9ICtzdGFydCwgY291bnQgPSArY291bnQ7XG4gIGlmIChzdGFydCA9PT0gc3RvcCAmJiBjb3VudCA+IDApIHJldHVybiBbc3RhcnRdO1xuICBpZiAocmV2ZXJzZSA9IHN0b3AgPCBzdGFydCkgbiA9IHN0YXJ0LCBzdGFydCA9IHN0b3AsIHN0b3AgPSBuO1xuICBpZiAoKHN0ZXAgPSB0aWNrSW5jcmVtZW50KHN0YXJ0LCBzdG9wLCBjb3VudCkpID09PSAwIHx8ICFpc0Zpbml0ZShzdGVwKSkgcmV0dXJuIFtdO1xuXG4gIGlmIChzdGVwID4gMCkge1xuICAgIHN0YXJ0ID0gTWF0aC5jZWlsKHN0YXJ0IC8gc3RlcCk7XG4gICAgc3RvcCA9IE1hdGguZmxvb3Ioc3RvcCAvIHN0ZXApO1xuICAgIHRpY2tzID0gbmV3IEFycmF5KG4gPSBNYXRoLmNlaWwoc3RvcCAtIHN0YXJ0ICsgMSkpO1xuICAgIHdoaWxlICgrK2kgPCBuKSB0aWNrc1tpXSA9IChzdGFydCArIGkpICogc3RlcDtcbiAgfSBlbHNlIHtcbiAgICBzdGFydCA9IE1hdGguZmxvb3Ioc3RhcnQgKiBzdGVwKTtcbiAgICBzdG9wID0gTWF0aC5jZWlsKHN0b3AgKiBzdGVwKTtcbiAgICB0aWNrcyA9IG5ldyBBcnJheShuID0gTWF0aC5jZWlsKHN0YXJ0IC0gc3RvcCArIDEpKTtcbiAgICB3aGlsZSAoKytpIDwgbikgdGlja3NbaV0gPSAoc3RhcnQgLSBpKSAvIHN0ZXA7XG4gIH1cblxuICBpZiAocmV2ZXJzZSkgdGlja3MucmV2ZXJzZSgpO1xuXG4gIHJldHVybiB0aWNrcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpY2tJbmNyZW1lbnQoc3RhcnQsIHN0b3AsIGNvdW50KSB7XG4gIHZhciBzdGVwID0gKHN0b3AgLSBzdGFydCkgLyBNYXRoLm1heCgwLCBjb3VudCksXG4gICAgICBwb3dlciA9IE1hdGguZmxvb3IoTWF0aC5sb2coc3RlcCkgLyBNYXRoLkxOMTApLFxuICAgICAgZXJyb3IgPSBzdGVwIC8gTWF0aC5wb3coMTAsIHBvd2VyKTtcbiAgcmV0dXJuIHBvd2VyID49IDBcbiAgICAgID8gKGVycm9yID49IGUxMCA/IDEwIDogZXJyb3IgPj0gZTUgPyA1IDogZXJyb3IgPj0gZTIgPyAyIDogMSkgKiBNYXRoLnBvdygxMCwgcG93ZXIpXG4gICAgICA6IC1NYXRoLnBvdygxMCwgLXBvd2VyKSAvIChlcnJvciA+PSBlMTAgPyAxMCA6IGVycm9yID49IGU1ID8gNSA6IGVycm9yID49IGUyID8gMiA6IDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGlja1N0ZXAoc3RhcnQsIHN0b3AsIGNvdW50KSB7XG4gIHZhciBzdGVwMCA9IE1hdGguYWJzKHN0b3AgLSBzdGFydCkgLyBNYXRoLm1heCgwLCBjb3VudCksXG4gICAgICBzdGVwMSA9IE1hdGgucG93KDEwLCBNYXRoLmZsb29yKE1hdGgubG9nKHN0ZXAwKSAvIE1hdGguTE4xMCkpLFxuICAgICAgZXJyb3IgPSBzdGVwMCAvIHN0ZXAxO1xuICBpZiAoZXJyb3IgPj0gZTEwKSBzdGVwMSAqPSAxMDtcbiAgZWxzZSBpZiAoZXJyb3IgPj0gZTUpIHN0ZXAxICo9IDU7XG4gIGVsc2UgaWYgKGVycm9yID49IGUyKSBzdGVwMSAqPSAyO1xuICByZXR1cm4gc3RvcCA8IHN0YXJ0ID8gLXN0ZXAxIDogc3RlcDE7XG59XG4iLCJpbXBvcnQgbWluIGZyb20gXCIuL21pbi5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXRyaXgpIHtcbiAgaWYgKCEobiA9IG1hdHJpeC5sZW5ndGgpKSByZXR1cm4gW107XG4gIGZvciAodmFyIGkgPSAtMSwgbSA9IG1pbihtYXRyaXgsIGxlbmd0aCksIHRyYW5zcG9zZSA9IG5ldyBBcnJheShtKTsgKytpIDwgbTspIHtcbiAgICBmb3IgKHZhciBqID0gLTEsIG4sIHJvdyA9IHRyYW5zcG9zZVtpXSA9IG5ldyBBcnJheShuKTsgKytqIDwgbjspIHtcbiAgICAgIHJvd1tqXSA9IG1hdHJpeFtqXVtpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRyYW5zcG9zZTtcbn1cblxuZnVuY3Rpb24gbGVuZ3RoKGQpIHtcbiAgcmV0dXJuIGQubGVuZ3RoO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFyaWFuY2UodmFsdWVzLCB2YWx1ZW9mKSB7XG4gIGxldCBjb3VudCA9IDA7XG4gIGxldCBkZWx0YTtcbiAgbGV0IG1lYW4gPSAwO1xuICBsZXQgc3VtID0gMDtcbiAgaWYgKHZhbHVlb2YgPT09IHVuZGVmaW5lZCkge1xuICAgIGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgaWYgKHZhbHVlICE9IG51bGwgJiYgKHZhbHVlID0gK3ZhbHVlKSA+PSB2YWx1ZSkge1xuICAgICAgICBkZWx0YSA9IHZhbHVlIC0gbWVhbjtcbiAgICAgICAgbWVhbiArPSBkZWx0YSAvICsrY291bnQ7XG4gICAgICAgIHN1bSArPSBkZWx0YSAqICh2YWx1ZSAtIG1lYW4pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICgodmFsdWUgPSB2YWx1ZW9mKHZhbHVlLCArK2luZGV4LCB2YWx1ZXMpKSAhPSBudWxsICYmICh2YWx1ZSA9ICt2YWx1ZSkgPj0gdmFsdWUpIHtcbiAgICAgICAgZGVsdGEgPSB2YWx1ZSAtIG1lYW47XG4gICAgICAgIG1lYW4gKz0gZGVsdGEgLyArK2NvdW50O1xuICAgICAgICBzdW0gKz0gZGVsdGEgKiAodmFsdWUgLSBtZWFuKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGNvdW50ID4gMSkgcmV0dXJuIHN1bSAvIChjb3VudCAtIDEpO1xufVxuIiwiaW1wb3J0IHRyYW5zcG9zZSBmcm9tIFwiLi90cmFuc3Bvc2UuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0cmFuc3Bvc2UoYXJndW1lbnRzKTtcbn1cbiIsImV4cG9ydCB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG4iLCJpbXBvcnQge3NsaWNlfSBmcm9tIFwiLi9hcnJheVwiO1xuaW1wb3J0IGlkZW50aXR5IGZyb20gXCIuL2lkZW50aXR5XCI7XG5cbnZhciB0b3AgPSAxLFxuICAgIHJpZ2h0ID0gMixcbiAgICBib3R0b20gPSAzLFxuICAgIGxlZnQgPSA0LFxuICAgIGVwc2lsb24gPSAxZS02O1xuXG5mdW5jdGlvbiB0cmFuc2xhdGVYKHgpIHtcbiAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgKHggKyAwLjUpICsgXCIsMClcIjtcbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlWSh5KSB7XG4gIHJldHVybiBcInRyYW5zbGF0ZSgwLFwiICsgKHkgKyAwLjUpICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIG51bWJlcihzY2FsZSkge1xuICByZXR1cm4gZnVuY3Rpb24oZCkge1xuICAgIHJldHVybiArc2NhbGUoZCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNlbnRlcihzY2FsZSkge1xuICB2YXIgb2Zmc2V0ID0gTWF0aC5tYXgoMCwgc2NhbGUuYmFuZHdpZHRoKCkgLSAxKSAvIDI7IC8vIEFkanVzdCBmb3IgMC41cHggb2Zmc2V0LlxuICBpZiAoc2NhbGUucm91bmQoKSkgb2Zmc2V0ID0gTWF0aC5yb3VuZChvZmZzZXQpO1xuICByZXR1cm4gZnVuY3Rpb24oZCkge1xuICAgIHJldHVybiArc2NhbGUoZCkgKyBvZmZzZXQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVudGVyaW5nKCkge1xuICByZXR1cm4gIXRoaXMuX19heGlzO1xufVxuXG5mdW5jdGlvbiBheGlzKG9yaWVudCwgc2NhbGUpIHtcbiAgdmFyIHRpY2tBcmd1bWVudHMgPSBbXSxcbiAgICAgIHRpY2tWYWx1ZXMgPSBudWxsLFxuICAgICAgdGlja0Zvcm1hdCA9IG51bGwsXG4gICAgICB0aWNrU2l6ZUlubmVyID0gNixcbiAgICAgIHRpY2tTaXplT3V0ZXIgPSA2LFxuICAgICAgdGlja1BhZGRpbmcgPSAzLFxuICAgICAgayA9IG9yaWVudCA9PT0gdG9wIHx8IG9yaWVudCA9PT0gbGVmdCA/IC0xIDogMSxcbiAgICAgIHggPSBvcmllbnQgPT09IGxlZnQgfHwgb3JpZW50ID09PSByaWdodCA/IFwieFwiIDogXCJ5XCIsXG4gICAgICB0cmFuc2Zvcm0gPSBvcmllbnQgPT09IHRvcCB8fCBvcmllbnQgPT09IGJvdHRvbSA/IHRyYW5zbGF0ZVggOiB0cmFuc2xhdGVZO1xuXG4gIGZ1bmN0aW9uIGF4aXMoY29udGV4dCkge1xuICAgIHZhciB2YWx1ZXMgPSB0aWNrVmFsdWVzID09IG51bGwgPyAoc2NhbGUudGlja3MgPyBzY2FsZS50aWNrcy5hcHBseShzY2FsZSwgdGlja0FyZ3VtZW50cykgOiBzY2FsZS5kb21haW4oKSkgOiB0aWNrVmFsdWVzLFxuICAgICAgICBmb3JtYXQgPSB0aWNrRm9ybWF0ID09IG51bGwgPyAoc2NhbGUudGlja0Zvcm1hdCA/IHNjYWxlLnRpY2tGb3JtYXQuYXBwbHkoc2NhbGUsIHRpY2tBcmd1bWVudHMpIDogaWRlbnRpdHkpIDogdGlja0Zvcm1hdCxcbiAgICAgICAgc3BhY2luZyA9IE1hdGgubWF4KHRpY2tTaXplSW5uZXIsIDApICsgdGlja1BhZGRpbmcsXG4gICAgICAgIHJhbmdlID0gc2NhbGUucmFuZ2UoKSxcbiAgICAgICAgcmFuZ2UwID0gK3JhbmdlWzBdICsgMC41LFxuICAgICAgICByYW5nZTEgPSArcmFuZ2VbcmFuZ2UubGVuZ3RoIC0gMV0gKyAwLjUsXG4gICAgICAgIHBvc2l0aW9uID0gKHNjYWxlLmJhbmR3aWR0aCA/IGNlbnRlciA6IG51bWJlcikoc2NhbGUuY29weSgpKSxcbiAgICAgICAgc2VsZWN0aW9uID0gY29udGV4dC5zZWxlY3Rpb24gPyBjb250ZXh0LnNlbGVjdGlvbigpIDogY29udGV4dCxcbiAgICAgICAgcGF0aCA9IHNlbGVjdGlvbi5zZWxlY3RBbGwoXCIuZG9tYWluXCIpLmRhdGEoW251bGxdKSxcbiAgICAgICAgdGljayA9IHNlbGVjdGlvbi5zZWxlY3RBbGwoXCIudGlja1wiKS5kYXRhKHZhbHVlcywgc2NhbGUpLm9yZGVyKCksXG4gICAgICAgIHRpY2tFeGl0ID0gdGljay5leGl0KCksXG4gICAgICAgIHRpY2tFbnRlciA9IHRpY2suZW50ZXIoKS5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcInRpY2tcIiksXG4gICAgICAgIGxpbmUgPSB0aWNrLnNlbGVjdChcImxpbmVcIiksXG4gICAgICAgIHRleHQgPSB0aWNrLnNlbGVjdChcInRleHRcIik7XG5cbiAgICBwYXRoID0gcGF0aC5tZXJnZShwYXRoLmVudGVyKCkuaW5zZXJ0KFwicGF0aFwiLCBcIi50aWNrXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJkb21haW5cIilcbiAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCJjdXJyZW50Q29sb3JcIikpO1xuXG4gICAgdGljayA9IHRpY2subWVyZ2UodGlja0VudGVyKTtcblxuICAgIGxpbmUgPSBsaW5lLm1lcmdlKHRpY2tFbnRlci5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiY3VycmVudENvbG9yXCIpXG4gICAgICAgIC5hdHRyKHggKyBcIjJcIiwgayAqIHRpY2tTaXplSW5uZXIpKTtcblxuICAgIHRleHQgPSB0ZXh0Lm1lcmdlKHRpY2tFbnRlci5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcImN1cnJlbnRDb2xvclwiKVxuICAgICAgICAuYXR0cih4LCBrICogc3BhY2luZylcbiAgICAgICAgLmF0dHIoXCJkeVwiLCBvcmllbnQgPT09IHRvcCA/IFwiMGVtXCIgOiBvcmllbnQgPT09IGJvdHRvbSA/IFwiMC43MWVtXCIgOiBcIjAuMzJlbVwiKSk7XG5cbiAgICBpZiAoY29udGV4dCAhPT0gc2VsZWN0aW9uKSB7XG4gICAgICBwYXRoID0gcGF0aC50cmFuc2l0aW9uKGNvbnRleHQpO1xuICAgICAgdGljayA9IHRpY2sudHJhbnNpdGlvbihjb250ZXh0KTtcbiAgICAgIGxpbmUgPSBsaW5lLnRyYW5zaXRpb24oY29udGV4dCk7XG4gICAgICB0ZXh0ID0gdGV4dC50cmFuc2l0aW9uKGNvbnRleHQpO1xuXG4gICAgICB0aWNrRXhpdCA9IHRpY2tFeGl0LnRyYW5zaXRpb24oY29udGV4dClcbiAgICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgZXBzaWxvbilcbiAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBpc0Zpbml0ZShkID0gcG9zaXRpb24oZCkpID8gdHJhbnNmb3JtKGQpIDogdGhpcy5nZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIik7IH0pO1xuXG4gICAgICB0aWNrRW50ZXJcbiAgICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgZXBzaWxvbilcbiAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7IHZhciBwID0gdGhpcy5wYXJlbnROb2RlLl9fYXhpczsgcmV0dXJuIHRyYW5zZm9ybShwICYmIGlzRmluaXRlKHAgPSBwKGQpKSA/IHAgOiBwb3NpdGlvbihkKSk7IH0pO1xuICAgIH1cblxuICAgIHRpY2tFeGl0LnJlbW92ZSgpO1xuXG4gICAgcGF0aFxuICAgICAgICAuYXR0cihcImRcIiwgb3JpZW50ID09PSBsZWZ0IHx8IG9yaWVudCA9PSByaWdodFxuICAgICAgICAgICAgPyAodGlja1NpemVPdXRlciA/IFwiTVwiICsgayAqIHRpY2tTaXplT3V0ZXIgKyBcIixcIiArIHJhbmdlMCArIFwiSDAuNVZcIiArIHJhbmdlMSArIFwiSFwiICsgayAqIHRpY2tTaXplT3V0ZXIgOiBcIk0wLjUsXCIgKyByYW5nZTAgKyBcIlZcIiArIHJhbmdlMSlcbiAgICAgICAgICAgIDogKHRpY2tTaXplT3V0ZXIgPyBcIk1cIiArIHJhbmdlMCArIFwiLFwiICsgayAqIHRpY2tTaXplT3V0ZXIgKyBcIlYwLjVIXCIgKyByYW5nZTEgKyBcIlZcIiArIGsgKiB0aWNrU2l6ZU91dGVyIDogXCJNXCIgKyByYW5nZTAgKyBcIiwwLjVIXCIgKyByYW5nZTEpKTtcblxuICAgIHRpY2tcbiAgICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIDEpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHRyYW5zZm9ybShwb3NpdGlvbihkKSk7IH0pO1xuXG4gICAgbGluZVxuICAgICAgICAuYXR0cih4ICsgXCIyXCIsIGsgKiB0aWNrU2l6ZUlubmVyKTtcblxuICAgIHRleHRcbiAgICAgICAgLmF0dHIoeCwgayAqIHNwYWNpbmcpXG4gICAgICAgIC50ZXh0KGZvcm1hdCk7XG5cbiAgICBzZWxlY3Rpb24uZmlsdGVyKGVudGVyaW5nKVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIDEwKVxuICAgICAgICAuYXR0cihcImZvbnQtZmFtaWx5XCIsIFwic2Fucy1zZXJpZlwiKVxuICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIG9yaWVudCA9PT0gcmlnaHQgPyBcInN0YXJ0XCIgOiBvcmllbnQgPT09IGxlZnQgPyBcImVuZFwiIDogXCJtaWRkbGVcIik7XG5cbiAgICBzZWxlY3Rpb25cbiAgICAgICAgLmVhY2goZnVuY3Rpb24oKSB7IHRoaXMuX19heGlzID0gcG9zaXRpb247IH0pO1xuICB9XG5cbiAgYXhpcy5zY2FsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzY2FsZSA9IF8sIGF4aXMpIDogc2NhbGU7XG4gIH07XG5cbiAgYXhpcy50aWNrcyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aWNrQXJndW1lbnRzID0gc2xpY2UuY2FsbChhcmd1bWVudHMpLCBheGlzO1xuICB9O1xuXG4gIGF4aXMudGlja0FyZ3VtZW50cyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aWNrQXJndW1lbnRzID0gXyA9PSBudWxsID8gW10gOiBzbGljZS5jYWxsKF8pLCBheGlzKSA6IHRpY2tBcmd1bWVudHMuc2xpY2UoKTtcbiAgfTtcblxuICBheGlzLnRpY2tWYWx1ZXMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGlja1ZhbHVlcyA9IF8gPT0gbnVsbCA/IG51bGwgOiBzbGljZS5jYWxsKF8pLCBheGlzKSA6IHRpY2tWYWx1ZXMgJiYgdGlja1ZhbHVlcy5zbGljZSgpO1xuICB9O1xuXG4gIGF4aXMudGlja0Zvcm1hdCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aWNrRm9ybWF0ID0gXywgYXhpcykgOiB0aWNrRm9ybWF0O1xuICB9O1xuXG4gIGF4aXMudGlja1NpemUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGlja1NpemVJbm5lciA9IHRpY2tTaXplT3V0ZXIgPSArXywgYXhpcykgOiB0aWNrU2l6ZUlubmVyO1xuICB9O1xuXG4gIGF4aXMudGlja1NpemVJbm5lciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aWNrU2l6ZUlubmVyID0gK18sIGF4aXMpIDogdGlja1NpemVJbm5lcjtcbiAgfTtcblxuICBheGlzLnRpY2tTaXplT3V0ZXIgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGlja1NpemVPdXRlciA9ICtfLCBheGlzKSA6IHRpY2tTaXplT3V0ZXI7XG4gIH07XG5cbiAgYXhpcy50aWNrUGFkZGluZyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aWNrUGFkZGluZyA9ICtfLCBheGlzKSA6IHRpY2tQYWRkaW5nO1xuICB9O1xuXG4gIHJldHVybiBheGlzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpc1RvcChzY2FsZSkge1xuICByZXR1cm4gYXhpcyh0b3AsIHNjYWxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aXNSaWdodChzY2FsZSkge1xuICByZXR1cm4gYXhpcyhyaWdodCwgc2NhbGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpc0JvdHRvbShzY2FsZSkge1xuICByZXR1cm4gYXhpcyhib3R0b20sIHNjYWxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aXNMZWZ0KHNjYWxlKSB7XG4gIHJldHVybiBheGlzKGxlZnQsIHNjYWxlKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHg7XG59XG4iLCJleHBvcnQge1xuICBheGlzVG9wLFxuICBheGlzUmlnaHQsXG4gIGF4aXNCb3R0b20sXG4gIGF4aXNMZWZ0XG59IGZyb20gXCIuL2F4aXNcIjtcbiIsImltcG9ydCBkZWZpbmUsIHtleHRlbmR9IGZyb20gXCIuL2RlZmluZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29sb3IoKSB7fVxuXG5leHBvcnQgdmFyIGRhcmtlciA9IDAuNztcbmV4cG9ydCB2YXIgYnJpZ2h0ZXIgPSAxIC8gZGFya2VyO1xuXG52YXIgcmVJID0gXCJcXFxccyooWystXT9cXFxcZCspXFxcXHMqXCIsXG4gICAgcmVOID0gXCJcXFxccyooWystXT9cXFxcZCpcXFxcLj9cXFxcZCsoPzpbZUVdWystXT9cXFxcZCspPylcXFxccypcIixcbiAgICByZVAgPSBcIlxcXFxzKihbKy1dP1xcXFxkKlxcXFwuP1xcXFxkKyg/OltlRV1bKy1dP1xcXFxkKyk/KSVcXFxccypcIixcbiAgICByZUhleDMgPSAvXiMoWzAtOWEtZl17M30pJC8sXG4gICAgcmVIZXg2ID0gL14jKFswLTlhLWZdezZ9KSQvLFxuICAgIHJlUmdiSW50ZWdlciA9IG5ldyBSZWdFeHAoXCJecmdiXFxcXChcIiArIFtyZUksIHJlSSwgcmVJXSArIFwiXFxcXCkkXCIpLFxuICAgIHJlUmdiUGVyY2VudCA9IG5ldyBSZWdFeHAoXCJecmdiXFxcXChcIiArIFtyZVAsIHJlUCwgcmVQXSArIFwiXFxcXCkkXCIpLFxuICAgIHJlUmdiYUludGVnZXIgPSBuZXcgUmVnRXhwKFwiXnJnYmFcXFxcKFwiICsgW3JlSSwgcmVJLCByZUksIHJlTl0gKyBcIlxcXFwpJFwiKSxcbiAgICByZVJnYmFQZXJjZW50ID0gbmV3IFJlZ0V4cChcIl5yZ2JhXFxcXChcIiArIFtyZVAsIHJlUCwgcmVQLCByZU5dICsgXCJcXFxcKSRcIiksXG4gICAgcmVIc2xQZXJjZW50ID0gbmV3IFJlZ0V4cChcIl5oc2xcXFxcKFwiICsgW3JlTiwgcmVQLCByZVBdICsgXCJcXFxcKSRcIiksXG4gICAgcmVIc2xhUGVyY2VudCA9IG5ldyBSZWdFeHAoXCJeaHNsYVxcXFwoXCIgKyBbcmVOLCByZVAsIHJlUCwgcmVOXSArIFwiXFxcXCkkXCIpO1xuXG52YXIgbmFtZWQgPSB7XG4gIGFsaWNlYmx1ZTogMHhmMGY4ZmYsXG4gIGFudGlxdWV3aGl0ZTogMHhmYWViZDcsXG4gIGFxdWE6IDB4MDBmZmZmLFxuICBhcXVhbWFyaW5lOiAweDdmZmZkNCxcbiAgYXp1cmU6IDB4ZjBmZmZmLFxuICBiZWlnZTogMHhmNWY1ZGMsXG4gIGJpc3F1ZTogMHhmZmU0YzQsXG4gIGJsYWNrOiAweDAwMDAwMCxcbiAgYmxhbmNoZWRhbG1vbmQ6IDB4ZmZlYmNkLFxuICBibHVlOiAweDAwMDBmZixcbiAgYmx1ZXZpb2xldDogMHg4YTJiZTIsXG4gIGJyb3duOiAweGE1MmEyYSxcbiAgYnVybHl3b29kOiAweGRlYjg4NyxcbiAgY2FkZXRibHVlOiAweDVmOWVhMCxcbiAgY2hhcnRyZXVzZTogMHg3ZmZmMDAsXG4gIGNob2NvbGF0ZTogMHhkMjY5MWUsXG4gIGNvcmFsOiAweGZmN2Y1MCxcbiAgY29ybmZsb3dlcmJsdWU6IDB4NjQ5NWVkLFxuICBjb3Juc2lsazogMHhmZmY4ZGMsXG4gIGNyaW1zb246IDB4ZGMxNDNjLFxuICBjeWFuOiAweDAwZmZmZixcbiAgZGFya2JsdWU6IDB4MDAwMDhiLFxuICBkYXJrY3lhbjogMHgwMDhiOGIsXG4gIGRhcmtnb2xkZW5yb2Q6IDB4Yjg4NjBiLFxuICBkYXJrZ3JheTogMHhhOWE5YTksXG4gIGRhcmtncmVlbjogMHgwMDY0MDAsXG4gIGRhcmtncmV5OiAweGE5YTlhOSxcbiAgZGFya2toYWtpOiAweGJkYjc2YixcbiAgZGFya21hZ2VudGE6IDB4OGIwMDhiLFxuICBkYXJrb2xpdmVncmVlbjogMHg1NTZiMmYsXG4gIGRhcmtvcmFuZ2U6IDB4ZmY4YzAwLFxuICBkYXJrb3JjaGlkOiAweDk5MzJjYyxcbiAgZGFya3JlZDogMHg4YjAwMDAsXG4gIGRhcmtzYWxtb246IDB4ZTk5NjdhLFxuICBkYXJrc2VhZ3JlZW46IDB4OGZiYzhmLFxuICBkYXJrc2xhdGVibHVlOiAweDQ4M2Q4YixcbiAgZGFya3NsYXRlZ3JheTogMHgyZjRmNGYsXG4gIGRhcmtzbGF0ZWdyZXk6IDB4MmY0ZjRmLFxuICBkYXJrdHVycXVvaXNlOiAweDAwY2VkMSxcbiAgZGFya3Zpb2xldDogMHg5NDAwZDMsXG4gIGRlZXBwaW5rOiAweGZmMTQ5MyxcbiAgZGVlcHNreWJsdWU6IDB4MDBiZmZmLFxuICBkaW1ncmF5OiAweDY5Njk2OSxcbiAgZGltZ3JleTogMHg2OTY5NjksXG4gIGRvZGdlcmJsdWU6IDB4MWU5MGZmLFxuICBmaXJlYnJpY2s6IDB4YjIyMjIyLFxuICBmbG9yYWx3aGl0ZTogMHhmZmZhZjAsXG4gIGZvcmVzdGdyZWVuOiAweDIyOGIyMixcbiAgZnVjaHNpYTogMHhmZjAwZmYsXG4gIGdhaW5zYm9ybzogMHhkY2RjZGMsXG4gIGdob3N0d2hpdGU6IDB4ZjhmOGZmLFxuICBnb2xkOiAweGZmZDcwMCxcbiAgZ29sZGVucm9kOiAweGRhYTUyMCxcbiAgZ3JheTogMHg4MDgwODAsXG4gIGdyZWVuOiAweDAwODAwMCxcbiAgZ3JlZW55ZWxsb3c6IDB4YWRmZjJmLFxuICBncmV5OiAweDgwODA4MCxcbiAgaG9uZXlkZXc6IDB4ZjBmZmYwLFxuICBob3RwaW5rOiAweGZmNjliNCxcbiAgaW5kaWFucmVkOiAweGNkNWM1YyxcbiAgaW5kaWdvOiAweDRiMDA4MixcbiAgaXZvcnk6IDB4ZmZmZmYwLFxuICBraGFraTogMHhmMGU2OGMsXG4gIGxhdmVuZGVyOiAweGU2ZTZmYSxcbiAgbGF2ZW5kZXJibHVzaDogMHhmZmYwZjUsXG4gIGxhd25ncmVlbjogMHg3Y2ZjMDAsXG4gIGxlbW9uY2hpZmZvbjogMHhmZmZhY2QsXG4gIGxpZ2h0Ymx1ZTogMHhhZGQ4ZTYsXG4gIGxpZ2h0Y29yYWw6IDB4ZjA4MDgwLFxuICBsaWdodGN5YW46IDB4ZTBmZmZmLFxuICBsaWdodGdvbGRlbnJvZHllbGxvdzogMHhmYWZhZDIsXG4gIGxpZ2h0Z3JheTogMHhkM2QzZDMsXG4gIGxpZ2h0Z3JlZW46IDB4OTBlZTkwLFxuICBsaWdodGdyZXk6IDB4ZDNkM2QzLFxuICBsaWdodHBpbms6IDB4ZmZiNmMxLFxuICBsaWdodHNhbG1vbjogMHhmZmEwN2EsXG4gIGxpZ2h0c2VhZ3JlZW46IDB4MjBiMmFhLFxuICBsaWdodHNreWJsdWU6IDB4ODdjZWZhLFxuICBsaWdodHNsYXRlZ3JheTogMHg3Nzg4OTksXG4gIGxpZ2h0c2xhdGVncmV5OiAweDc3ODg5OSxcbiAgbGlnaHRzdGVlbGJsdWU6IDB4YjBjNGRlLFxuICBsaWdodHllbGxvdzogMHhmZmZmZTAsXG4gIGxpbWU6IDB4MDBmZjAwLFxuICBsaW1lZ3JlZW46IDB4MzJjZDMyLFxuICBsaW5lbjogMHhmYWYwZTYsXG4gIG1hZ2VudGE6IDB4ZmYwMGZmLFxuICBtYXJvb246IDB4ODAwMDAwLFxuICBtZWRpdW1hcXVhbWFyaW5lOiAweDY2Y2RhYSxcbiAgbWVkaXVtYmx1ZTogMHgwMDAwY2QsXG4gIG1lZGl1bW9yY2hpZDogMHhiYTU1ZDMsXG4gIG1lZGl1bXB1cnBsZTogMHg5MzcwZGIsXG4gIG1lZGl1bXNlYWdyZWVuOiAweDNjYjM3MSxcbiAgbWVkaXVtc2xhdGVibHVlOiAweDdiNjhlZSxcbiAgbWVkaXVtc3ByaW5nZ3JlZW46IDB4MDBmYTlhLFxuICBtZWRpdW10dXJxdW9pc2U6IDB4NDhkMWNjLFxuICBtZWRpdW12aW9sZXRyZWQ6IDB4YzcxNTg1LFxuICBtaWRuaWdodGJsdWU6IDB4MTkxOTcwLFxuICBtaW50Y3JlYW06IDB4ZjVmZmZhLFxuICBtaXN0eXJvc2U6IDB4ZmZlNGUxLFxuICBtb2NjYXNpbjogMHhmZmU0YjUsXG4gIG5hdmFqb3doaXRlOiAweGZmZGVhZCxcbiAgbmF2eTogMHgwMDAwODAsXG4gIG9sZGxhY2U6IDB4ZmRmNWU2LFxuICBvbGl2ZTogMHg4MDgwMDAsXG4gIG9saXZlZHJhYjogMHg2YjhlMjMsXG4gIG9yYW5nZTogMHhmZmE1MDAsXG4gIG9yYW5nZXJlZDogMHhmZjQ1MDAsXG4gIG9yY2hpZDogMHhkYTcwZDYsXG4gIHBhbGVnb2xkZW5yb2Q6IDB4ZWVlOGFhLFxuICBwYWxlZ3JlZW46IDB4OThmYjk4LFxuICBwYWxldHVycXVvaXNlOiAweGFmZWVlZSxcbiAgcGFsZXZpb2xldHJlZDogMHhkYjcwOTMsXG4gIHBhcGF5YXdoaXA6IDB4ZmZlZmQ1LFxuICBwZWFjaHB1ZmY6IDB4ZmZkYWI5LFxuICBwZXJ1OiAweGNkODUzZixcbiAgcGluazogMHhmZmMwY2IsXG4gIHBsdW06IDB4ZGRhMGRkLFxuICBwb3dkZXJibHVlOiAweGIwZTBlNixcbiAgcHVycGxlOiAweDgwMDA4MCxcbiAgcmViZWNjYXB1cnBsZTogMHg2NjMzOTksXG4gIHJlZDogMHhmZjAwMDAsXG4gIHJvc3licm93bjogMHhiYzhmOGYsXG4gIHJveWFsYmx1ZTogMHg0MTY5ZTEsXG4gIHNhZGRsZWJyb3duOiAweDhiNDUxMyxcbiAgc2FsbW9uOiAweGZhODA3MixcbiAgc2FuZHlicm93bjogMHhmNGE0NjAsXG4gIHNlYWdyZWVuOiAweDJlOGI1NyxcbiAgc2Vhc2hlbGw6IDB4ZmZmNWVlLFxuICBzaWVubmE6IDB4YTA1MjJkLFxuICBzaWx2ZXI6IDB4YzBjMGMwLFxuICBza3libHVlOiAweDg3Y2VlYixcbiAgc2xhdGVibHVlOiAweDZhNWFjZCxcbiAgc2xhdGVncmF5OiAweDcwODA5MCxcbiAgc2xhdGVncmV5OiAweDcwODA5MCxcbiAgc25vdzogMHhmZmZhZmEsXG4gIHNwcmluZ2dyZWVuOiAweDAwZmY3ZixcbiAgc3RlZWxibHVlOiAweDQ2ODJiNCxcbiAgdGFuOiAweGQyYjQ4YyxcbiAgdGVhbDogMHgwMDgwODAsXG4gIHRoaXN0bGU6IDB4ZDhiZmQ4LFxuICB0b21hdG86IDB4ZmY2MzQ3LFxuICB0dXJxdW9pc2U6IDB4NDBlMGQwLFxuICB2aW9sZXQ6IDB4ZWU4MmVlLFxuICB3aGVhdDogMHhmNWRlYjMsXG4gIHdoaXRlOiAweGZmZmZmZixcbiAgd2hpdGVzbW9rZTogMHhmNWY1ZjUsXG4gIHllbGxvdzogMHhmZmZmMDAsXG4gIHllbGxvd2dyZWVuOiAweDlhY2QzMlxufTtcblxuZGVmaW5lKENvbG9yLCBjb2xvciwge1xuICBkaXNwbGF5YWJsZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmdiKCkuZGlzcGxheWFibGUoKTtcbiAgfSxcbiAgaGV4OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZ2IoKS5oZXgoKTtcbiAgfSxcbiAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJnYigpICsgXCJcIjtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yKGZvcm1hdCkge1xuICB2YXIgbTtcbiAgZm9ybWF0ID0gKGZvcm1hdCArIFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gKG0gPSByZUhleDMuZXhlYyhmb3JtYXQpKSA/IChtID0gcGFyc2VJbnQobVsxXSwgMTYpLCBuZXcgUmdiKChtID4+IDggJiAweGYpIHwgKG0gPj4gNCAmIDB4MGYwKSwgKG0gPj4gNCAmIDB4ZikgfCAobSAmIDB4ZjApLCAoKG0gJiAweGYpIDw8IDQpIHwgKG0gJiAweGYpLCAxKSkgLy8gI2YwMFxuICAgICAgOiAobSA9IHJlSGV4Ni5leGVjKGZvcm1hdCkpID8gcmdibihwYXJzZUludChtWzFdLCAxNikpIC8vICNmZjAwMDBcbiAgICAgIDogKG0gPSByZVJnYkludGVnZXIuZXhlYyhmb3JtYXQpKSA/IG5ldyBSZ2IobVsxXSwgbVsyXSwgbVszXSwgMSkgLy8gcmdiKDI1NSwgMCwgMClcbiAgICAgIDogKG0gPSByZVJnYlBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IG5ldyBSZ2IobVsxXSAqIDI1NSAvIDEwMCwgbVsyXSAqIDI1NSAvIDEwMCwgbVszXSAqIDI1NSAvIDEwMCwgMSkgLy8gcmdiKDEwMCUsIDAlLCAwJSlcbiAgICAgIDogKG0gPSByZVJnYmFJbnRlZ2VyLmV4ZWMoZm9ybWF0KSkgPyByZ2JhKG1bMV0sIG1bMl0sIG1bM10sIG1bNF0pIC8vIHJnYmEoMjU1LCAwLCAwLCAxKVxuICAgICAgOiAobSA9IHJlUmdiYVBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IHJnYmEobVsxXSAqIDI1NSAvIDEwMCwgbVsyXSAqIDI1NSAvIDEwMCwgbVszXSAqIDI1NSAvIDEwMCwgbVs0XSkgLy8gcmdiKDEwMCUsIDAlLCAwJSwgMSlcbiAgICAgIDogKG0gPSByZUhzbFBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IGhzbGEobVsxXSwgbVsyXSAvIDEwMCwgbVszXSAvIDEwMCwgMSkgLy8gaHNsKDEyMCwgNTAlLCA1MCUpXG4gICAgICA6IChtID0gcmVIc2xhUGVyY2VudC5leGVjKGZvcm1hdCkpID8gaHNsYShtWzFdLCBtWzJdIC8gMTAwLCBtWzNdIC8gMTAwLCBtWzRdKSAvLyBoc2xhKDEyMCwgNTAlLCA1MCUsIDEpXG4gICAgICA6IG5hbWVkLmhhc093blByb3BlcnR5KGZvcm1hdCkgPyByZ2JuKG5hbWVkW2Zvcm1hdF0pXG4gICAgICA6IGZvcm1hdCA9PT0gXCJ0cmFuc3BhcmVudFwiID8gbmV3IFJnYihOYU4sIE5hTiwgTmFOLCAwKVxuICAgICAgOiBudWxsO1xufVxuXG5mdW5jdGlvbiByZ2JuKG4pIHtcbiAgcmV0dXJuIG5ldyBSZ2IobiA+PiAxNiAmIDB4ZmYsIG4gPj4gOCAmIDB4ZmYsIG4gJiAweGZmLCAxKTtcbn1cblxuZnVuY3Rpb24gcmdiYShyLCBnLCBiLCBhKSB7XG4gIGlmIChhIDw9IDApIHIgPSBnID0gYiA9IE5hTjtcbiAgcmV0dXJuIG5ldyBSZ2IociwgZywgYiwgYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JDb252ZXJ0KG8pIHtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIENvbG9yKSkgbyA9IGNvbG9yKG8pO1xuICBpZiAoIW8pIHJldHVybiBuZXcgUmdiO1xuICBvID0gby5yZ2IoKTtcbiAgcmV0dXJuIG5ldyBSZ2Ioby5yLCBvLmcsIG8uYiwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYihyLCBnLCBiLCBvcGFjaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gcmdiQ29udmVydChyKSA6IG5ldyBSZ2IociwgZywgYiwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUmdiKHIsIGcsIGIsIG9wYWNpdHkpIHtcbiAgdGhpcy5yID0gK3I7XG4gIHRoaXMuZyA9ICtnO1xuICB0aGlzLmIgPSArYjtcbiAgdGhpcy5vcGFjaXR5ID0gK29wYWNpdHk7XG59XG5cbmRlZmluZShSZ2IsIHJnYiwgZXh0ZW5kKENvbG9yLCB7XG4gIGJyaWdodGVyOiBmdW5jdGlvbihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGJyaWdodGVyIDogTWF0aC5wb3coYnJpZ2h0ZXIsIGspO1xuICAgIHJldHVybiBuZXcgUmdiKHRoaXMuciAqIGssIHRoaXMuZyAqIGssIHRoaXMuYiAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIGRhcmtlcjogZnVuY3Rpb24oaykge1xuICAgIGsgPSBrID09IG51bGwgPyBkYXJrZXIgOiBNYXRoLnBvdyhkYXJrZXIsIGspO1xuICAgIHJldHVybiBuZXcgUmdiKHRoaXMuciAqIGssIHRoaXMuZyAqIGssIHRoaXMuYiAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIHJnYjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGRpc3BsYXlhYmxlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKC0wLjUgPD0gdGhpcy5yICYmIHRoaXMuciA8IDI1NS41KVxuICAgICAgICAmJiAoLTAuNSA8PSB0aGlzLmcgJiYgdGhpcy5nIDwgMjU1LjUpXG4gICAgICAgICYmICgtMC41IDw9IHRoaXMuYiAmJiB0aGlzLmIgPCAyNTUuNSlcbiAgICAgICAgJiYgKDAgPD0gdGhpcy5vcGFjaXR5ICYmIHRoaXMub3BhY2l0eSA8PSAxKTtcbiAgfSxcbiAgaGV4OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCIjXCIgKyBoZXgodGhpcy5yKSArIGhleCh0aGlzLmcpICsgaGV4KHRoaXMuYik7XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYSA9IHRoaXMub3BhY2l0eTsgYSA9IGlzTmFOKGEpID8gMSA6IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIGEpKTtcbiAgICByZXR1cm4gKGEgPT09IDEgPyBcInJnYihcIiA6IFwicmdiYShcIilcbiAgICAgICAgKyBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodGhpcy5yKSB8fCAwKSkgKyBcIiwgXCJcbiAgICAgICAgKyBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodGhpcy5nKSB8fCAwKSkgKyBcIiwgXCJcbiAgICAgICAgKyBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodGhpcy5iKSB8fCAwKSlcbiAgICAgICAgKyAoYSA9PT0gMSA/IFwiKVwiIDogXCIsIFwiICsgYSArIFwiKVwiKTtcbiAgfVxufSkpO1xuXG5mdW5jdGlvbiBoZXgodmFsdWUpIHtcbiAgdmFsdWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodmFsdWUpIHx8IDApKTtcbiAgcmV0dXJuICh2YWx1ZSA8IDE2ID8gXCIwXCIgOiBcIlwiKSArIHZhbHVlLnRvU3RyaW5nKDE2KTtcbn1cblxuZnVuY3Rpb24gaHNsYShoLCBzLCBsLCBhKSB7XG4gIGlmIChhIDw9IDApIGggPSBzID0gbCA9IE5hTjtcbiAgZWxzZSBpZiAobCA8PSAwIHx8IGwgPj0gMSkgaCA9IHMgPSBOYU47XG4gIGVsc2UgaWYgKHMgPD0gMCkgaCA9IE5hTjtcbiAgcmV0dXJuIG5ldyBIc2woaCwgcywgbCwgYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoc2xDb252ZXJ0KG8pIHtcbiAgaWYgKG8gaW5zdGFuY2VvZiBIc2wpIHJldHVybiBuZXcgSHNsKG8uaCwgby5zLCBvLmwsIG8ub3BhY2l0eSk7XG4gIGlmICghKG8gaW5zdGFuY2VvZiBDb2xvcikpIG8gPSBjb2xvcihvKTtcbiAgaWYgKCFvKSByZXR1cm4gbmV3IEhzbDtcbiAgaWYgKG8gaW5zdGFuY2VvZiBIc2wpIHJldHVybiBvO1xuICBvID0gby5yZ2IoKTtcbiAgdmFyIHIgPSBvLnIgLyAyNTUsXG4gICAgICBnID0gby5nIC8gMjU1LFxuICAgICAgYiA9IG8uYiAvIDI1NSxcbiAgICAgIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpLFxuICAgICAgbWF4ID0gTWF0aC5tYXgociwgZywgYiksXG4gICAgICBoID0gTmFOLFxuICAgICAgcyA9IG1heCAtIG1pbixcbiAgICAgIGwgPSAobWF4ICsgbWluKSAvIDI7XG4gIGlmIChzKSB7XG4gICAgaWYgKHIgPT09IG1heCkgaCA9IChnIC0gYikgLyBzICsgKGcgPCBiKSAqIDY7XG4gICAgZWxzZSBpZiAoZyA9PT0gbWF4KSBoID0gKGIgLSByKSAvIHMgKyAyO1xuICAgIGVsc2UgaCA9IChyIC0gZykgLyBzICsgNDtcbiAgICBzIC89IGwgPCAwLjUgPyBtYXggKyBtaW4gOiAyIC0gbWF4IC0gbWluO1xuICAgIGggKj0gNjA7XG4gIH0gZWxzZSB7XG4gICAgcyA9IGwgPiAwICYmIGwgPCAxID8gMCA6IGg7XG4gIH1cbiAgcmV0dXJuIG5ldyBIc2woaCwgcywgbCwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhzbChoLCBzLCBsLCBvcGFjaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gaHNsQ29udmVydChoKSA6IG5ldyBIc2woaCwgcywgbCwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5mdW5jdGlvbiBIc2woaCwgcywgbCwgb3BhY2l0eSkge1xuICB0aGlzLmggPSAraDtcbiAgdGhpcy5zID0gK3M7XG4gIHRoaXMubCA9ICtsO1xuICB0aGlzLm9wYWNpdHkgPSArb3BhY2l0eTtcbn1cblxuZGVmaW5lKEhzbCwgaHNsLCBleHRlbmQoQ29sb3IsIHtcbiAgYnJpZ2h0ZXI6IGZ1bmN0aW9uKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gYnJpZ2h0ZXIgOiBNYXRoLnBvdyhicmlnaHRlciwgayk7XG4gICAgcmV0dXJuIG5ldyBIc2wodGhpcy5oLCB0aGlzLnMsIHRoaXMubCAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIGRhcmtlcjogZnVuY3Rpb24oaykge1xuICAgIGsgPSBrID09IG51bGwgPyBkYXJrZXIgOiBNYXRoLnBvdyhkYXJrZXIsIGspO1xuICAgIHJldHVybiBuZXcgSHNsKHRoaXMuaCwgdGhpcy5zLCB0aGlzLmwgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2I6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBoID0gdGhpcy5oICUgMzYwICsgKHRoaXMuaCA8IDApICogMzYwLFxuICAgICAgICBzID0gaXNOYU4oaCkgfHwgaXNOYU4odGhpcy5zKSA/IDAgOiB0aGlzLnMsXG4gICAgICAgIGwgPSB0aGlzLmwsXG4gICAgICAgIG0yID0gbCArIChsIDwgMC41ID8gbCA6IDEgLSBsKSAqIHMsXG4gICAgICAgIG0xID0gMiAqIGwgLSBtMjtcbiAgICByZXR1cm4gbmV3IFJnYihcbiAgICAgIGhzbDJyZ2IoaCA+PSAyNDAgPyBoIC0gMjQwIDogaCArIDEyMCwgbTEsIG0yKSxcbiAgICAgIGhzbDJyZ2IoaCwgbTEsIG0yKSxcbiAgICAgIGhzbDJyZ2IoaCA8IDEyMCA/IGggKyAyNDAgOiBoIC0gMTIwLCBtMSwgbTIpLFxuICAgICAgdGhpcy5vcGFjaXR5XG4gICAgKTtcbiAgfSxcbiAgZGlzcGxheWFibGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoMCA8PSB0aGlzLnMgJiYgdGhpcy5zIDw9IDEgfHwgaXNOYU4odGhpcy5zKSlcbiAgICAgICAgJiYgKDAgPD0gdGhpcy5sICYmIHRoaXMubCA8PSAxKVxuICAgICAgICAmJiAoMCA8PSB0aGlzLm9wYWNpdHkgJiYgdGhpcy5vcGFjaXR5IDw9IDEpO1xuICB9XG59KSk7XG5cbi8qIEZyb20gRnZEIDEzLjM3LCBDU1MgQ29sb3IgTW9kdWxlIExldmVsIDMgKi9cbmZ1bmN0aW9uIGhzbDJyZ2IoaCwgbTEsIG0yKSB7XG4gIHJldHVybiAoaCA8IDYwID8gbTEgKyAobTIgLSBtMSkgKiBoIC8gNjBcbiAgICAgIDogaCA8IDE4MCA/IG0yXG4gICAgICA6IGggPCAyNDAgPyBtMSArIChtMiAtIG0xKSAqICgyNDAgLSBoKSAvIDYwXG4gICAgICA6IG0xKSAqIDI1NTtcbn1cbiIsImltcG9ydCBkZWZpbmUsIHtleHRlbmR9IGZyb20gXCIuL2RlZmluZVwiO1xuaW1wb3J0IHtDb2xvciwgcmdiQ29udmVydCwgUmdiLCBkYXJrZXIsIGJyaWdodGVyfSBmcm9tIFwiLi9jb2xvclwiO1xuaW1wb3J0IHtkZWcycmFkLCByYWQyZGVnfSBmcm9tIFwiLi9tYXRoXCI7XG5cbnZhciBBID0gLTAuMTQ4NjEsXG4gICAgQiA9ICsxLjc4Mjc3LFxuICAgIEMgPSAtMC4yOTIyNyxcbiAgICBEID0gLTAuOTA2NDksXG4gICAgRSA9ICsxLjk3Mjk0LFxuICAgIEVEID0gRSAqIEQsXG4gICAgRUIgPSBFICogQixcbiAgICBCQ19EQSA9IEIgKiBDIC0gRCAqIEE7XG5cbmZ1bmN0aW9uIGN1YmVoZWxpeENvbnZlcnQobykge1xuICBpZiAobyBpbnN0YW5jZW9mIEN1YmVoZWxpeCkgcmV0dXJuIG5ldyBDdWJlaGVsaXgoby5oLCBvLnMsIG8ubCwgby5vcGFjaXR5KTtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIFJnYikpIG8gPSByZ2JDb252ZXJ0KG8pO1xuICB2YXIgciA9IG8uciAvIDI1NSxcbiAgICAgIGcgPSBvLmcgLyAyNTUsXG4gICAgICBiID0gby5iIC8gMjU1LFxuICAgICAgbCA9IChCQ19EQSAqIGIgKyBFRCAqIHIgLSBFQiAqIGcpIC8gKEJDX0RBICsgRUQgLSBFQiksXG4gICAgICBibCA9IGIgLSBsLFxuICAgICAgayA9IChFICogKGcgLSBsKSAtIEMgKiBibCkgLyBELFxuICAgICAgcyA9IE1hdGguc3FydChrICogayArIGJsICogYmwpIC8gKEUgKiBsICogKDEgLSBsKSksIC8vIE5hTiBpZiBsPTAgb3IgbD0xXG4gICAgICBoID0gcyA/IE1hdGguYXRhbjIoaywgYmwpICogcmFkMmRlZyAtIDEyMCA6IE5hTjtcbiAgcmV0dXJuIG5ldyBDdWJlaGVsaXgoaCA8IDAgPyBoICsgMzYwIDogaCwgcywgbCwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3ViZWhlbGl4KGgsIHMsIGwsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBjdWJlaGVsaXhDb252ZXJ0KGgpIDogbmV3IEN1YmVoZWxpeChoLCBzLCBsLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDdWJlaGVsaXgoaCwgcywgbCwgb3BhY2l0eSkge1xuICB0aGlzLmggPSAraDtcbiAgdGhpcy5zID0gK3M7XG4gIHRoaXMubCA9ICtsO1xuICB0aGlzLm9wYWNpdHkgPSArb3BhY2l0eTtcbn1cblxuZGVmaW5lKEN1YmVoZWxpeCwgY3ViZWhlbGl4LCBleHRlbmQoQ29sb3IsIHtcbiAgYnJpZ2h0ZXI6IGZ1bmN0aW9uKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gYnJpZ2h0ZXIgOiBNYXRoLnBvdyhicmlnaHRlciwgayk7XG4gICAgcmV0dXJuIG5ldyBDdWJlaGVsaXgodGhpcy5oLCB0aGlzLnMsIHRoaXMubCAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIGRhcmtlcjogZnVuY3Rpb24oaykge1xuICAgIGsgPSBrID09IG51bGwgPyBkYXJrZXIgOiBNYXRoLnBvdyhkYXJrZXIsIGspO1xuICAgIHJldHVybiBuZXcgQ3ViZWhlbGl4KHRoaXMuaCwgdGhpcy5zLCB0aGlzLmwgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2I6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBoID0gaXNOYU4odGhpcy5oKSA/IDAgOiAodGhpcy5oICsgMTIwKSAqIGRlZzJyYWQsXG4gICAgICAgIGwgPSArdGhpcy5sLFxuICAgICAgICBhID0gaXNOYU4odGhpcy5zKSA/IDAgOiB0aGlzLnMgKiBsICogKDEgLSBsKSxcbiAgICAgICAgY29zaCA9IE1hdGguY29zKGgpLFxuICAgICAgICBzaW5oID0gTWF0aC5zaW4oaCk7XG4gICAgcmV0dXJuIG5ldyBSZ2IoXG4gICAgICAyNTUgKiAobCArIGEgKiAoQSAqIGNvc2ggKyBCICogc2luaCkpLFxuICAgICAgMjU1ICogKGwgKyBhICogKEMgKiBjb3NoICsgRCAqIHNpbmgpKSxcbiAgICAgIDI1NSAqIChsICsgYSAqIChFICogY29zaCkpLFxuICAgICAgdGhpcy5vcGFjaXR5XG4gICAgKTtcbiAgfVxufSkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29uc3RydWN0b3IsIGZhY3RvcnksIHByb3RvdHlwZSkge1xuICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBmYWN0b3J5LnByb3RvdHlwZSA9IHByb3RvdHlwZTtcbiAgcHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQocGFyZW50LCBkZWZpbml0aW9uKSB7XG4gIHZhciBwcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHBhcmVudC5wcm90b3R5cGUpO1xuICBmb3IgKHZhciBrZXkgaW4gZGVmaW5pdGlvbikgcHJvdG90eXBlW2tleV0gPSBkZWZpbml0aW9uW2tleV07XG4gIHJldHVybiBwcm90b3R5cGU7XG59XG4iLCJleHBvcnQge2RlZmF1bHQgYXMgY29sb3IsIHJnYiwgaHNsfSBmcm9tIFwiLi9jb2xvclwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGxhYiwgaGNsLCBsY2gsIGdyYXl9IGZyb20gXCIuL2xhYlwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1YmVoZWxpeH0gZnJvbSBcIi4vY3ViZWhlbGl4XCI7XG4iLCJpbXBvcnQgZGVmaW5lLCB7ZXh0ZW5kfSBmcm9tIFwiLi9kZWZpbmVcIjtcbmltcG9ydCB7Q29sb3IsIHJnYkNvbnZlcnQsIFJnYn0gZnJvbSBcIi4vY29sb3JcIjtcbmltcG9ydCB7ZGVnMnJhZCwgcmFkMmRlZ30gZnJvbSBcIi4vbWF0aFwiO1xuXG4vLyBodHRwczovL29ic2VydmFibGVocS5jb20vQG1ib3N0b2NrL2xhYi1hbmQtcmdiXG52YXIgSyA9IDE4LFxuICAgIFhuID0gMC45NjQyMixcbiAgICBZbiA9IDEsXG4gICAgWm4gPSAwLjgyNTIxLFxuICAgIHQwID0gNCAvIDI5LFxuICAgIHQxID0gNiAvIDI5LFxuICAgIHQyID0gMyAqIHQxICogdDEsXG4gICAgdDMgPSB0MSAqIHQxICogdDE7XG5cbmZ1bmN0aW9uIGxhYkNvbnZlcnQobykge1xuICBpZiAobyBpbnN0YW5jZW9mIExhYikgcmV0dXJuIG5ldyBMYWIoby5sLCBvLmEsIG8uYiwgby5vcGFjaXR5KTtcbiAgaWYgKG8gaW5zdGFuY2VvZiBIY2wpIHJldHVybiBoY2wybGFiKG8pO1xuICBpZiAoIShvIGluc3RhbmNlb2YgUmdiKSkgbyA9IHJnYkNvbnZlcnQobyk7XG4gIHZhciByID0gcmdiMmxyZ2Ioby5yKSxcbiAgICAgIGcgPSByZ2IybHJnYihvLmcpLFxuICAgICAgYiA9IHJnYjJscmdiKG8uYiksXG4gICAgICB5ID0geHl6MmxhYigoMC4yMjI1MDQ1ICogciArIDAuNzE2ODc4NiAqIGcgKyAwLjA2MDYxNjkgKiBiKSAvIFluKSwgeCwgejtcbiAgaWYgKHIgPT09IGcgJiYgZyA9PT0gYikgeCA9IHogPSB5OyBlbHNlIHtcbiAgICB4ID0geHl6MmxhYigoMC40MzYwNzQ3ICogciArIDAuMzg1MDY0OSAqIGcgKyAwLjE0MzA4MDQgKiBiKSAvIFhuKTtcbiAgICB6ID0geHl6MmxhYigoMC4wMTM5MzIyICogciArIDAuMDk3MTA0NSAqIGcgKyAwLjcxNDE3MzMgKiBiKSAvIFpuKTtcbiAgfVxuICByZXR1cm4gbmV3IExhYigxMTYgKiB5IC0gMTYsIDUwMCAqICh4IC0geSksIDIwMCAqICh5IC0geiksIG8ub3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncmF5KGwsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIG5ldyBMYWIobCwgMCwgMCwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsYWIobCwgYSwgYiwgb3BhY2l0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IGxhYkNvbnZlcnQobCkgOiBuZXcgTGFiKGwsIGEsIGIsIG9wYWNpdHkgPT0gbnVsbCA/IDEgOiBvcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExhYihsLCBhLCBiLCBvcGFjaXR5KSB7XG4gIHRoaXMubCA9ICtsO1xuICB0aGlzLmEgPSArYTtcbiAgdGhpcy5iID0gK2I7XG4gIHRoaXMub3BhY2l0eSA9ICtvcGFjaXR5O1xufVxuXG5kZWZpbmUoTGFiLCBsYWIsIGV4dGVuZChDb2xvciwge1xuICBicmlnaHRlcjogZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBuZXcgTGFiKHRoaXMubCArIEsgKiAoayA9PSBudWxsID8gMSA6IGspLCB0aGlzLmEsIHRoaXMuYiwgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgZGFya2VyOiBmdW5jdGlvbihrKSB7XG4gICAgcmV0dXJuIG5ldyBMYWIodGhpcy5sIC0gSyAqIChrID09IG51bGwgPyAxIDogayksIHRoaXMuYSwgdGhpcy5iLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2I6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB5ID0gKHRoaXMubCArIDE2KSAvIDExNixcbiAgICAgICAgeCA9IGlzTmFOKHRoaXMuYSkgPyB5IDogeSArIHRoaXMuYSAvIDUwMCxcbiAgICAgICAgeiA9IGlzTmFOKHRoaXMuYikgPyB5IDogeSAtIHRoaXMuYiAvIDIwMDtcbiAgICB4ID0gWG4gKiBsYWIyeHl6KHgpO1xuICAgIHkgPSBZbiAqIGxhYjJ4eXooeSk7XG4gICAgeiA9IFpuICogbGFiMnh5eih6KTtcbiAgICByZXR1cm4gbmV3IFJnYihcbiAgICAgIGxyZ2IycmdiKCAzLjEzMzg1NjEgKiB4IC0gMS42MTY4NjY3ICogeSAtIDAuNDkwNjE0NiAqIHopLFxuICAgICAgbHJnYjJyZ2IoLTAuOTc4NzY4NCAqIHggKyAxLjkxNjE0MTUgKiB5ICsgMC4wMzM0NTQwICogeiksXG4gICAgICBscmdiMnJnYiggMC4wNzE5NDUzICogeCAtIDAuMjI4OTkxNCAqIHkgKyAxLjQwNTI0MjcgKiB6KSxcbiAgICAgIHRoaXMub3BhY2l0eVxuICAgICk7XG4gIH1cbn0pKTtcblxuZnVuY3Rpb24geHl6MmxhYih0KSB7XG4gIHJldHVybiB0ID4gdDMgPyBNYXRoLnBvdyh0LCAxIC8gMykgOiB0IC8gdDIgKyB0MDtcbn1cblxuZnVuY3Rpb24gbGFiMnh5eih0KSB7XG4gIHJldHVybiB0ID4gdDEgPyB0ICogdCAqIHQgOiB0MiAqICh0IC0gdDApO1xufVxuXG5mdW5jdGlvbiBscmdiMnJnYih4KSB7XG4gIHJldHVybiAyNTUgKiAoeCA8PSAwLjAwMzEzMDggPyAxMi45MiAqIHggOiAxLjA1NSAqIE1hdGgucG93KHgsIDEgLyAyLjQpIC0gMC4wNTUpO1xufVxuXG5mdW5jdGlvbiByZ2IybHJnYih4KSB7XG4gIHJldHVybiAoeCAvPSAyNTUpIDw9IDAuMDQwNDUgPyB4IC8gMTIuOTIgOiBNYXRoLnBvdygoeCArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xufVxuXG5mdW5jdGlvbiBoY2xDb252ZXJ0KG8pIHtcbiAgaWYgKG8gaW5zdGFuY2VvZiBIY2wpIHJldHVybiBuZXcgSGNsKG8uaCwgby5jLCBvLmwsIG8ub3BhY2l0eSk7XG4gIGlmICghKG8gaW5zdGFuY2VvZiBMYWIpKSBvID0gbGFiQ29udmVydChvKTtcbiAgaWYgKG8uYSA9PT0gMCAmJiBvLmIgPT09IDApIHJldHVybiBuZXcgSGNsKE5hTiwgMCA8IG8ubCAmJiBvLmwgPCAxMDAgPyAwIDogTmFOLCBvLmwsIG8ub3BhY2l0eSk7XG4gIHZhciBoID0gTWF0aC5hdGFuMihvLmIsIG8uYSkgKiByYWQyZGVnO1xuICByZXR1cm4gbmV3IEhjbChoIDwgMCA/IGggKyAzNjAgOiBoLCBNYXRoLnNxcnQoby5hICogby5hICsgby5iICogby5iKSwgby5sLCBvLm9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGNoKGwsIGMsIGgsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBoY2xDb252ZXJ0KGwpIDogbmV3IEhjbChoLCBjLCBsLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoY2woaCwgYywgbCwgb3BhY2l0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IGhjbENvbnZlcnQoaCkgOiBuZXcgSGNsKGgsIGMsIGwsIG9wYWNpdHkgPT0gbnVsbCA/IDEgOiBvcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhjbChoLCBjLCBsLCBvcGFjaXR5KSB7XG4gIHRoaXMuaCA9ICtoO1xuICB0aGlzLmMgPSArYztcbiAgdGhpcy5sID0gK2w7XG4gIHRoaXMub3BhY2l0eSA9ICtvcGFjaXR5O1xufVxuXG5mdW5jdGlvbiBoY2wybGFiKG8pIHtcbiAgaWYgKGlzTmFOKG8uaCkpIHJldHVybiBuZXcgTGFiKG8ubCwgMCwgMCwgby5vcGFjaXR5KTtcbiAgdmFyIGggPSBvLmggKiBkZWcycmFkO1xuICByZXR1cm4gbmV3IExhYihvLmwsIE1hdGguY29zKGgpICogby5jLCBNYXRoLnNpbihoKSAqIG8uYywgby5vcGFjaXR5KTtcbn1cblxuZGVmaW5lKEhjbCwgaGNsLCBleHRlbmQoQ29sb3IsIHtcbiAgYnJpZ2h0ZXI6IGZ1bmN0aW9uKGspIHtcbiAgICByZXR1cm4gbmV3IEhjbCh0aGlzLmgsIHRoaXMuYywgdGhpcy5sICsgSyAqIChrID09IG51bGwgPyAxIDogayksIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIGRhcmtlcjogZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBuZXcgSGNsKHRoaXMuaCwgdGhpcy5jLCB0aGlzLmwgLSBLICogKGsgPT0gbnVsbCA/IDEgOiBrKSwgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgcmdiOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gaGNsMmxhYih0aGlzKS5yZ2IoKTtcbiAgfVxufSkpO1xuIiwiZXhwb3J0IHZhciBkZWcycmFkID0gTWF0aC5QSSAvIDE4MDtcbmV4cG9ydCB2YXIgcmFkMmRlZyA9IDE4MCAvIE1hdGguUEk7XG4iLCJ2YXIgbm9vcCA9IHt2YWx1ZTogZnVuY3Rpb24oKSB7fX07XG5cbmZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IGFyZ3VtZW50cy5sZW5ndGgsIF8gPSB7fSwgdDsgaSA8IG47ICsraSkge1xuICAgIGlmICghKHQgPSBhcmd1bWVudHNbaV0gKyBcIlwiKSB8fCAodCBpbiBfKSkgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCB0eXBlOiBcIiArIHQpO1xuICAgIF9bdF0gPSBbXTtcbiAgfVxuICByZXR1cm4gbmV3IERpc3BhdGNoKF8pO1xufVxuXG5mdW5jdGlvbiBEaXNwYXRjaChfKSB7XG4gIHRoaXMuXyA9IF87XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lcywgdHlwZXMpIHtcbiAgcmV0dXJuIHR5cGVuYW1lcy50cmltKCkuc3BsaXQoL158XFxzKy8pLm1hcChmdW5jdGlvbih0KSB7XG4gICAgdmFyIG5hbWUgPSBcIlwiLCBpID0gdC5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoaSA+PSAwKSBuYW1lID0gdC5zbGljZShpICsgMSksIHQgPSB0LnNsaWNlKDAsIGkpO1xuICAgIGlmICh0ICYmICF0eXBlcy5oYXNPd25Qcm9wZXJ0eSh0KSkgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiBcIiArIHQpO1xuICAgIHJldHVybiB7dHlwZTogdCwgbmFtZTogbmFtZX07XG4gIH0pO1xufVxuXG5EaXNwYXRjaC5wcm90b3R5cGUgPSBkaXNwYXRjaC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBEaXNwYXRjaCxcbiAgb246IGZ1bmN0aW9uKHR5cGVuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBfID0gdGhpcy5fLFxuICAgICAgICBUID0gcGFyc2VUeXBlbmFtZXModHlwZW5hbWUgKyBcIlwiLCBfKSxcbiAgICAgICAgdCxcbiAgICAgICAgaSA9IC0xLFxuICAgICAgICBuID0gVC5sZW5ndGg7XG5cbiAgICAvLyBJZiBubyBjYWxsYmFjayB3YXMgc3BlY2lmaWVkLCByZXR1cm4gdGhlIGNhbGxiYWNrIG9mIHRoZSBnaXZlbiB0eXBlIGFuZCBuYW1lLlxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgd2hpbGUgKCsraSA8IG4pIGlmICgodCA9ICh0eXBlbmFtZSA9IFRbaV0pLnR5cGUpICYmICh0ID0gZ2V0KF9bdF0sIHR5cGVuYW1lLm5hbWUpKSkgcmV0dXJuIHQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgYSB0eXBlIHdhcyBzcGVjaWZpZWQsIHNldCB0aGUgY2FsbGJhY2sgZm9yIHRoZSBnaXZlbiB0eXBlIGFuZCBuYW1lLlxuICAgIC8vIE90aGVyd2lzZSwgaWYgYSBudWxsIGNhbGxiYWNrIHdhcyBzcGVjaWZpZWQsIHJlbW92ZSBjYWxsYmFja3Mgb2YgdGhlIGdpdmVuIG5hbWUuXG4gICAgaWYgKGNhbGxiYWNrICE9IG51bGwgJiYgdHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgY2FsbGJhY2s6IFwiICsgY2FsbGJhY2spO1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBpZiAodCA9ICh0eXBlbmFtZSA9IFRbaV0pLnR5cGUpIF9bdF0gPSBzZXQoX1t0XSwgdHlwZW5hbWUubmFtZSwgY2FsbGJhY2spO1xuICAgICAgZWxzZSBpZiAoY2FsbGJhY2sgPT0gbnVsbCkgZm9yICh0IGluIF8pIF9bdF0gPSBzZXQoX1t0XSwgdHlwZW5hbWUubmFtZSwgbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGNvcHk6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb3B5ID0ge30sIF8gPSB0aGlzLl87XG4gICAgZm9yICh2YXIgdCBpbiBfKSBjb3B5W3RdID0gX1t0XS5zbGljZSgpO1xuICAgIHJldHVybiBuZXcgRGlzcGF0Y2goY29weSk7XG4gIH0sXG4gIGNhbGw6IGZ1bmN0aW9uKHR5cGUsIHRoYXQpIHtcbiAgICBpZiAoKG4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMikgPiAwKSBmb3IgKHZhciBhcmdzID0gbmV3IEFycmF5KG4pLCBpID0gMCwgbiwgdDsgaSA8IG47ICsraSkgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgaWYgKCF0aGlzLl8uaGFzT3duUHJvcGVydHkodHlwZSkpIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIgKyB0eXBlKTtcbiAgICBmb3IgKHQgPSB0aGlzLl9bdHlwZV0sIGkgPSAwLCBuID0gdC5sZW5ndGg7IGkgPCBuOyArK2kpIHRbaV0udmFsdWUuYXBwbHkodGhhdCwgYXJncyk7XG4gIH0sXG4gIGFwcGx5OiBmdW5jdGlvbih0eXBlLCB0aGF0LCBhcmdzKSB7XG4gICAgaWYgKCF0aGlzLl8uaGFzT3duUHJvcGVydHkodHlwZSkpIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIgKyB0eXBlKTtcbiAgICBmb3IgKHZhciB0ID0gdGhpcy5fW3R5cGVdLCBpID0gMCwgbiA9IHQubGVuZ3RoOyBpIDwgbjsgKytpKSB0W2ldLnZhbHVlLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBnZXQodHlwZSwgbmFtZSkge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IHR5cGUubGVuZ3RoLCBjOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKChjID0gdHlwZVtpXSkubmFtZSA9PT0gbmFtZSkge1xuICAgICAgcmV0dXJuIGMudmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldCh0eXBlLCBuYW1lLCBjYWxsYmFjaykge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IHR5cGUubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKHR5cGVbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgdHlwZVtpXSA9IG5vb3AsIHR5cGUgPSB0eXBlLnNsaWNlKDAsIGkpLmNvbmNhdCh0eXBlLnNsaWNlKGkgKyAxKSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgaWYgKGNhbGxiYWNrICE9IG51bGwpIHR5cGUucHVzaCh7bmFtZTogbmFtZSwgdmFsdWU6IGNhbGxiYWNrfSk7XG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwYXRjaDtcbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBkaXNwYXRjaH0gZnJvbSBcIi4vZGlzcGF0Y2hcIjtcbiIsInZhciBvdmVyc2hvb3QgPSAxLjcwMTU4O1xuXG5leHBvcnQgdmFyIGJhY2tJbiA9IChmdW5jdGlvbiBjdXN0b20ocykge1xuICBzID0gK3M7XG5cbiAgZnVuY3Rpb24gYmFja0luKHQpIHtcbiAgICByZXR1cm4gdCAqIHQgKiAoKHMgKyAxKSAqIHQgLSBzKTtcbiAgfVxuXG4gIGJhY2tJbi5vdmVyc2hvb3QgPSBjdXN0b207XG5cbiAgcmV0dXJuIGJhY2tJbjtcbn0pKG92ZXJzaG9vdCk7XG5cbmV4cG9ydCB2YXIgYmFja091dCA9IChmdW5jdGlvbiBjdXN0b20ocykge1xuICBzID0gK3M7XG5cbiAgZnVuY3Rpb24gYmFja091dCh0KSB7XG4gICAgcmV0dXJuIC0tdCAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDE7XG4gIH1cblxuICBiYWNrT3V0Lm92ZXJzaG9vdCA9IGN1c3RvbTtcblxuICByZXR1cm4gYmFja091dDtcbn0pKG92ZXJzaG9vdCk7XG5cbmV4cG9ydCB2YXIgYmFja0luT3V0ID0gKGZ1bmN0aW9uIGN1c3RvbShzKSB7XG4gIHMgPSArcztcblxuICBmdW5jdGlvbiBiYWNrSW5PdXQodCkge1xuICAgIHJldHVybiAoKHQgKj0gMikgPCAxID8gdCAqIHQgKiAoKHMgKyAxKSAqIHQgLSBzKSA6ICh0IC09IDIpICogdCAqICgocyArIDEpICogdCArIHMpICsgMikgLyAyO1xuICB9XG5cbiAgYmFja0luT3V0Lm92ZXJzaG9vdCA9IGN1c3RvbTtcblxuICByZXR1cm4gYmFja0luT3V0O1xufSkob3ZlcnNob290KTtcbiIsInZhciBiMSA9IDQgLyAxMSxcbiAgICBiMiA9IDYgLyAxMSxcbiAgICBiMyA9IDggLyAxMSxcbiAgICBiNCA9IDMgLyA0LFxuICAgIGI1ID0gOSAvIDExLFxuICAgIGI2ID0gMTAgLyAxMSxcbiAgICBiNyA9IDE1IC8gMTYsXG4gICAgYjggPSAyMSAvIDIyLFxuICAgIGI5ID0gNjMgLyA2NCxcbiAgICBiMCA9IDEgLyBiMSAvIGIxO1xuXG5leHBvcnQgZnVuY3Rpb24gYm91bmNlSW4odCkge1xuICByZXR1cm4gMSAtIGJvdW5jZU91dCgxIC0gdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuY2VPdXQodCkge1xuICByZXR1cm4gKHQgPSArdCkgPCBiMSA/IGIwICogdCAqIHQgOiB0IDwgYjMgPyBiMCAqICh0IC09IGIyKSAqIHQgKyBiNCA6IHQgPCBiNiA/IGIwICogKHQgLT0gYjUpICogdCArIGI3IDogYjAgKiAodCAtPSBiOCkgKiB0ICsgYjk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuY2VJbk91dCh0KSB7XG4gIHJldHVybiAoKHQgKj0gMikgPD0gMSA/IDEgLSBib3VuY2VPdXQoMSAtIHQpIDogYm91bmNlT3V0KHQgLSAxKSArIDEpIC8gMjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjaXJjbGVJbih0KSB7XG4gIHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSB0ICogdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaXJjbGVPdXQodCkge1xuICByZXR1cm4gTWF0aC5zcXJ0KDEgLSAtLXQgKiB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZUluT3V0KHQpIHtcbiAgcmV0dXJuICgodCAqPSAyKSA8PSAxID8gMSAtIE1hdGguc3FydCgxIC0gdCAqIHQpIDogTWF0aC5zcXJ0KDEgLSAodCAtPSAyKSAqIHQpICsgMSkgLyAyO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGN1YmljSW4odCkge1xuICByZXR1cm4gdCAqIHQgKiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3ViaWNPdXQodCkge1xuICByZXR1cm4gLS10ICogdCAqIHQgKyAxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3ViaWNJbk91dCh0KSB7XG4gIHJldHVybiAoKHQgKj0gMikgPD0gMSA/IHQgKiB0ICogdCA6ICh0IC09IDIpICogdCAqIHQgKyAyKSAvIDI7XG59XG4iLCJ2YXIgdGF1ID0gMiAqIE1hdGguUEksXG4gICAgYW1wbGl0dWRlID0gMSxcbiAgICBwZXJpb2QgPSAwLjM7XG5cbmV4cG9ydCB2YXIgZWxhc3RpY0luID0gKGZ1bmN0aW9uIGN1c3RvbShhLCBwKSB7XG4gIHZhciBzID0gTWF0aC5hc2luKDEgLyAoYSA9IE1hdGgubWF4KDEsIGEpKSkgKiAocCAvPSB0YXUpO1xuXG4gIGZ1bmN0aW9uIGVsYXN0aWNJbih0KSB7XG4gICAgcmV0dXJuIGEgKiBNYXRoLnBvdygyLCAxMCAqIC0tdCkgKiBNYXRoLnNpbigocyAtIHQpIC8gcCk7XG4gIH1cblxuICBlbGFzdGljSW4uYW1wbGl0dWRlID0gZnVuY3Rpb24oYSkgeyByZXR1cm4gY3VzdG9tKGEsIHAgKiB0YXUpOyB9O1xuICBlbGFzdGljSW4ucGVyaW9kID0gZnVuY3Rpb24ocCkgeyByZXR1cm4gY3VzdG9tKGEsIHApOyB9O1xuXG4gIHJldHVybiBlbGFzdGljSW47XG59KShhbXBsaXR1ZGUsIHBlcmlvZCk7XG5cbmV4cG9ydCB2YXIgZWxhc3RpY091dCA9IChmdW5jdGlvbiBjdXN0b20oYSwgcCkge1xuICB2YXIgcyA9IE1hdGguYXNpbigxIC8gKGEgPSBNYXRoLm1heCgxLCBhKSkpICogKHAgLz0gdGF1KTtcblxuICBmdW5jdGlvbiBlbGFzdGljT3V0KHQpIHtcbiAgICByZXR1cm4gMSAtIGEgKiBNYXRoLnBvdygyLCAtMTAgKiAodCA9ICt0KSkgKiBNYXRoLnNpbigodCArIHMpIC8gcCk7XG4gIH1cblxuICBlbGFzdGljT3V0LmFtcGxpdHVkZSA9IGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGN1c3RvbShhLCBwICogdGF1KTsgfTtcbiAgZWxhc3RpY091dC5wZXJpb2QgPSBmdW5jdGlvbihwKSB7IHJldHVybiBjdXN0b20oYSwgcCk7IH07XG5cbiAgcmV0dXJuIGVsYXN0aWNPdXQ7XG59KShhbXBsaXR1ZGUsIHBlcmlvZCk7XG5cbmV4cG9ydCB2YXIgZWxhc3RpY0luT3V0ID0gKGZ1bmN0aW9uIGN1c3RvbShhLCBwKSB7XG4gIHZhciBzID0gTWF0aC5hc2luKDEgLyAoYSA9IE1hdGgubWF4KDEsIGEpKSkgKiAocCAvPSB0YXUpO1xuXG4gIGZ1bmN0aW9uIGVsYXN0aWNJbk91dCh0KSB7XG4gICAgcmV0dXJuICgodCA9IHQgKiAyIC0gMSkgPCAwXG4gICAgICAgID8gYSAqIE1hdGgucG93KDIsIDEwICogdCkgKiBNYXRoLnNpbigocyAtIHQpIC8gcClcbiAgICAgICAgOiAyIC0gYSAqIE1hdGgucG93KDIsIC0xMCAqIHQpICogTWF0aC5zaW4oKHMgKyB0KSAvIHApKSAvIDI7XG4gIH1cblxuICBlbGFzdGljSW5PdXQuYW1wbGl0dWRlID0gZnVuY3Rpb24oYSkgeyByZXR1cm4gY3VzdG9tKGEsIHAgKiB0YXUpOyB9O1xuICBlbGFzdGljSW5PdXQucGVyaW9kID0gZnVuY3Rpb24ocCkgeyByZXR1cm4gY3VzdG9tKGEsIHApOyB9O1xuXG4gIHJldHVybiBlbGFzdGljSW5PdXQ7XG59KShhbXBsaXR1ZGUsIHBlcmlvZCk7XG4iLCJleHBvcnQgZnVuY3Rpb24gZXhwSW4odCkge1xuICByZXR1cm4gTWF0aC5wb3coMiwgMTAgKiB0IC0gMTApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwT3V0KHQpIHtcbiAgcmV0dXJuIDEgLSBNYXRoLnBvdygyLCAtMTAgKiB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cEluT3V0KHQpIHtcbiAgcmV0dXJuICgodCAqPSAyKSA8PSAxID8gTWF0aC5wb3coMiwgMTAgKiB0IC0gMTApIDogMiAtIE1hdGgucG93KDIsIDEwIC0gMTAgKiB0KSkgLyAyO1xufVxuIiwiZXhwb3J0IHtcbiAgbGluZWFyIGFzIGVhc2VMaW5lYXJcbn0gZnJvbSBcIi4vbGluZWFyXCI7XG5cbmV4cG9ydCB7XG4gIHF1YWRJbk91dCBhcyBlYXNlUXVhZCxcbiAgcXVhZEluIGFzIGVhc2VRdWFkSW4sXG4gIHF1YWRPdXQgYXMgZWFzZVF1YWRPdXQsXG4gIHF1YWRJbk91dCBhcyBlYXNlUXVhZEluT3V0XG59IGZyb20gXCIuL3F1YWRcIjtcblxuZXhwb3J0IHtcbiAgY3ViaWNJbk91dCBhcyBlYXNlQ3ViaWMsXG4gIGN1YmljSW4gYXMgZWFzZUN1YmljSW4sXG4gIGN1YmljT3V0IGFzIGVhc2VDdWJpY091dCxcbiAgY3ViaWNJbk91dCBhcyBlYXNlQ3ViaWNJbk91dFxufSBmcm9tIFwiLi9jdWJpY1wiO1xuXG5leHBvcnQge1xuICBwb2x5SW5PdXQgYXMgZWFzZVBvbHksXG4gIHBvbHlJbiBhcyBlYXNlUG9seUluLFxuICBwb2x5T3V0IGFzIGVhc2VQb2x5T3V0LFxuICBwb2x5SW5PdXQgYXMgZWFzZVBvbHlJbk91dFxufSBmcm9tIFwiLi9wb2x5XCI7XG5cbmV4cG9ydCB7XG4gIHNpbkluT3V0IGFzIGVhc2VTaW4sXG4gIHNpbkluIGFzIGVhc2VTaW5JbixcbiAgc2luT3V0IGFzIGVhc2VTaW5PdXQsXG4gIHNpbkluT3V0IGFzIGVhc2VTaW5Jbk91dFxufSBmcm9tIFwiLi9zaW5cIjtcblxuZXhwb3J0IHtcbiAgZXhwSW5PdXQgYXMgZWFzZUV4cCxcbiAgZXhwSW4gYXMgZWFzZUV4cEluLFxuICBleHBPdXQgYXMgZWFzZUV4cE91dCxcbiAgZXhwSW5PdXQgYXMgZWFzZUV4cEluT3V0XG59IGZyb20gXCIuL2V4cFwiO1xuXG5leHBvcnQge1xuICBjaXJjbGVJbk91dCBhcyBlYXNlQ2lyY2xlLFxuICBjaXJjbGVJbiBhcyBlYXNlQ2lyY2xlSW4sXG4gIGNpcmNsZU91dCBhcyBlYXNlQ2lyY2xlT3V0LFxuICBjaXJjbGVJbk91dCBhcyBlYXNlQ2lyY2xlSW5PdXRcbn0gZnJvbSBcIi4vY2lyY2xlXCI7XG5cbmV4cG9ydCB7XG4gIGJvdW5jZU91dCBhcyBlYXNlQm91bmNlLFxuICBib3VuY2VJbiBhcyBlYXNlQm91bmNlSW4sXG4gIGJvdW5jZU91dCBhcyBlYXNlQm91bmNlT3V0LFxuICBib3VuY2VJbk91dCBhcyBlYXNlQm91bmNlSW5PdXRcbn0gZnJvbSBcIi4vYm91bmNlXCI7XG5cbmV4cG9ydCB7XG4gIGJhY2tJbk91dCBhcyBlYXNlQmFjayxcbiAgYmFja0luIGFzIGVhc2VCYWNrSW4sXG4gIGJhY2tPdXQgYXMgZWFzZUJhY2tPdXQsXG4gIGJhY2tJbk91dCBhcyBlYXNlQmFja0luT3V0XG59IGZyb20gXCIuL2JhY2tcIjtcblxuZXhwb3J0IHtcbiAgZWxhc3RpY091dCBhcyBlYXNlRWxhc3RpYyxcbiAgZWxhc3RpY0luIGFzIGVhc2VFbGFzdGljSW4sXG4gIGVsYXN0aWNPdXQgYXMgZWFzZUVsYXN0aWNPdXQsXG4gIGVsYXN0aWNJbk91dCBhcyBlYXNlRWxhc3RpY0luT3V0XG59IGZyb20gXCIuL2VsYXN0aWNcIjtcbiIsImV4cG9ydCBmdW5jdGlvbiBsaW5lYXIodCkge1xuICByZXR1cm4gK3Q7XG59XG4iLCJ2YXIgZXhwb25lbnQgPSAzO1xuXG5leHBvcnQgdmFyIHBvbHlJbiA9IChmdW5jdGlvbiBjdXN0b20oZSkge1xuICBlID0gK2U7XG5cbiAgZnVuY3Rpb24gcG9seUluKHQpIHtcbiAgICByZXR1cm4gTWF0aC5wb3codCwgZSk7XG4gIH1cblxuICBwb2x5SW4uZXhwb25lbnQgPSBjdXN0b207XG5cbiAgcmV0dXJuIHBvbHlJbjtcbn0pKGV4cG9uZW50KTtcblxuZXhwb3J0IHZhciBwb2x5T3V0ID0gKGZ1bmN0aW9uIGN1c3RvbShlKSB7XG4gIGUgPSArZTtcblxuICBmdW5jdGlvbiBwb2x5T3V0KHQpIHtcbiAgICByZXR1cm4gMSAtIE1hdGgucG93KDEgLSB0LCBlKTtcbiAgfVxuXG4gIHBvbHlPdXQuZXhwb25lbnQgPSBjdXN0b207XG5cbiAgcmV0dXJuIHBvbHlPdXQ7XG59KShleHBvbmVudCk7XG5cbmV4cG9ydCB2YXIgcG9seUluT3V0ID0gKGZ1bmN0aW9uIGN1c3RvbShlKSB7XG4gIGUgPSArZTtcblxuICBmdW5jdGlvbiBwb2x5SW5PdXQodCkge1xuICAgIHJldHVybiAoKHQgKj0gMikgPD0gMSA/IE1hdGgucG93KHQsIGUpIDogMiAtIE1hdGgucG93KDIgLSB0LCBlKSkgLyAyO1xuICB9XG5cbiAgcG9seUluT3V0LmV4cG9uZW50ID0gY3VzdG9tO1xuXG4gIHJldHVybiBwb2x5SW5PdXQ7XG59KShleHBvbmVudCk7XG4iLCJleHBvcnQgZnVuY3Rpb24gcXVhZEluKHQpIHtcbiAgcmV0dXJuIHQgKiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVhZE91dCh0KSB7XG4gIHJldHVybiB0ICogKDIgLSB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1YWRJbk91dCh0KSB7XG4gIHJldHVybiAoKHQgKj0gMikgPD0gMSA/IHQgKiB0IDogLS10ICogKDIgLSB0KSArIDEpIC8gMjtcbn1cbiIsInZhciBwaSA9IE1hdGguUEksXG4gICAgaGFsZlBpID0gcGkgLyAyO1xuXG5leHBvcnQgZnVuY3Rpb24gc2luSW4odCkge1xuICByZXR1cm4gMSAtIE1hdGguY29zKHQgKiBoYWxmUGkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2luT3V0KHQpIHtcbiAgcmV0dXJuIE1hdGguc2luKHQgKiBoYWxmUGkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2luSW5PdXQodCkge1xuICByZXR1cm4gKDEgLSBNYXRoLmNvcyhwaSAqIHQpKSAvIDI7XG59XG4iLCJpbXBvcnQgZm9ybWF0TG9jYWxlIGZyb20gXCIuL2xvY2FsZVwiO1xuXG52YXIgbG9jYWxlO1xuZXhwb3J0IHZhciBmb3JtYXQ7XG5leHBvcnQgdmFyIGZvcm1hdFByZWZpeDtcblxuZGVmYXVsdExvY2FsZSh7XG4gIGRlY2ltYWw6IFwiLlwiLFxuICB0aG91c2FuZHM6IFwiLFwiLFxuICBncm91cGluZzogWzNdLFxuICBjdXJyZW5jeTogW1wiJFwiLCBcIlwiXVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmF1bHRMb2NhbGUoZGVmaW5pdGlvbikge1xuICBsb2NhbGUgPSBmb3JtYXRMb2NhbGUoZGVmaW5pdGlvbik7XG4gIGZvcm1hdCA9IGxvY2FsZS5mb3JtYXQ7XG4gIGZvcm1hdFByZWZpeCA9IGxvY2FsZS5mb3JtYXRQcmVmaXg7XG4gIHJldHVybiBsb2NhbGU7XG59XG4iLCJpbXBvcnQgZm9ybWF0RGVjaW1hbCBmcm9tIFwiLi9mb3JtYXREZWNpbWFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHggPSBmb3JtYXREZWNpbWFsKE1hdGguYWJzKHgpKSwgeCA/IHhbMV0gOiBOYU47XG59XG4iLCIvLyBDb21wdXRlcyB0aGUgZGVjaW1hbCBjb2VmZmljaWVudCBhbmQgZXhwb25lbnQgb2YgdGhlIHNwZWNpZmllZCBudW1iZXIgeCB3aXRoXG4vLyBzaWduaWZpY2FudCBkaWdpdHMgcCwgd2hlcmUgeCBpcyBwb3NpdGl2ZSBhbmQgcCBpcyBpbiBbMSwgMjFdIG9yIHVuZGVmaW5lZC5cbi8vIEZvciBleGFtcGxlLCBmb3JtYXREZWNpbWFsKDEuMjMpIHJldHVybnMgW1wiMTIzXCIsIDBdLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCwgcCkge1xuICBpZiAoKGkgPSAoeCA9IHAgPyB4LnRvRXhwb25lbnRpYWwocCAtIDEpIDogeC50b0V4cG9uZW50aWFsKCkpLmluZGV4T2YoXCJlXCIpKSA8IDApIHJldHVybiBudWxsOyAvLyBOYU4sIMKxSW5maW5pdHlcbiAgdmFyIGksIGNvZWZmaWNpZW50ID0geC5zbGljZSgwLCBpKTtcblxuICAvLyBUaGUgc3RyaW5nIHJldHVybmVkIGJ5IHRvRXhwb25lbnRpYWwgZWl0aGVyIGhhcyB0aGUgZm9ybSBcXGRcXC5cXGQrZVstK11cXGQrXG4gIC8vIChlLmcuLCAxLjJlKzMpIG9yIHRoZSBmb3JtIFxcZGVbLStdXFxkKyAoZS5nLiwgMWUrMykuXG4gIHJldHVybiBbXG4gICAgY29lZmZpY2llbnQubGVuZ3RoID4gMSA/IGNvZWZmaWNpZW50WzBdICsgY29lZmZpY2llbnQuc2xpY2UoMikgOiBjb2VmZmljaWVudCxcbiAgICAreC5zbGljZShpICsgMSlcbiAgXTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGdyb3VwaW5nLCB0aG91c2FuZHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCB3aWR0aCkge1xuICAgIHZhciBpID0gdmFsdWUubGVuZ3RoLFxuICAgICAgICB0ID0gW10sXG4gICAgICAgIGogPSAwLFxuICAgICAgICBnID0gZ3JvdXBpbmdbMF0sXG4gICAgICAgIGxlbmd0aCA9IDA7XG5cbiAgICB3aGlsZSAoaSA+IDAgJiYgZyA+IDApIHtcbiAgICAgIGlmIChsZW5ndGggKyBnICsgMSA+IHdpZHRoKSBnID0gTWF0aC5tYXgoMSwgd2lkdGggLSBsZW5ndGgpO1xuICAgICAgdC5wdXNoKHZhbHVlLnN1YnN0cmluZyhpIC09IGcsIGkgKyBnKSk7XG4gICAgICBpZiAoKGxlbmd0aCArPSBnICsgMSkgPiB3aWR0aCkgYnJlYWs7XG4gICAgICBnID0gZ3JvdXBpbmdbaiA9IChqICsgMSkgJSBncm91cGluZy5sZW5ndGhdO1xuICAgIH1cblxuICAgIHJldHVybiB0LnJldmVyc2UoKS5qb2luKHRob3VzYW5kcyk7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihudW1lcmFscykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvWzAtOV0vZywgZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIG51bWVyYWxzWytpXTtcbiAgICB9KTtcbiAgfTtcbn1cbiIsImltcG9ydCBmb3JtYXREZWNpbWFsIGZyb20gXCIuL2Zvcm1hdERlY2ltYWxcIjtcblxuZXhwb3J0IHZhciBwcmVmaXhFeHBvbmVudDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCwgcCkge1xuICB2YXIgZCA9IGZvcm1hdERlY2ltYWwoeCwgcCk7XG4gIGlmICghZCkgcmV0dXJuIHggKyBcIlwiO1xuICB2YXIgY29lZmZpY2llbnQgPSBkWzBdLFxuICAgICAgZXhwb25lbnQgPSBkWzFdLFxuICAgICAgaSA9IGV4cG9uZW50IC0gKHByZWZpeEV4cG9uZW50ID0gTWF0aC5tYXgoLTgsIE1hdGgubWluKDgsIE1hdGguZmxvb3IoZXhwb25lbnQgLyAzKSkpICogMykgKyAxLFxuICAgICAgbiA9IGNvZWZmaWNpZW50Lmxlbmd0aDtcbiAgcmV0dXJuIGkgPT09IG4gPyBjb2VmZmljaWVudFxuICAgICAgOiBpID4gbiA/IGNvZWZmaWNpZW50ICsgbmV3IEFycmF5KGkgLSBuICsgMSkuam9pbihcIjBcIilcbiAgICAgIDogaSA+IDAgPyBjb2VmZmljaWVudC5zbGljZSgwLCBpKSArIFwiLlwiICsgY29lZmZpY2llbnQuc2xpY2UoaSlcbiAgICAgIDogXCIwLlwiICsgbmV3IEFycmF5KDEgLSBpKS5qb2luKFwiMFwiKSArIGZvcm1hdERlY2ltYWwoeCwgTWF0aC5tYXgoMCwgcCArIGkgLSAxKSlbMF07IC8vIGxlc3MgdGhhbiAxeSFcbn1cbiIsImltcG9ydCBmb3JtYXREZWNpbWFsIGZyb20gXCIuL2Zvcm1hdERlY2ltYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCwgcCkge1xuICB2YXIgZCA9IGZvcm1hdERlY2ltYWwoeCwgcCk7XG4gIGlmICghZCkgcmV0dXJuIHggKyBcIlwiO1xuICB2YXIgY29lZmZpY2llbnQgPSBkWzBdLFxuICAgICAgZXhwb25lbnQgPSBkWzFdO1xuICByZXR1cm4gZXhwb25lbnQgPCAwID8gXCIwLlwiICsgbmV3IEFycmF5KC1leHBvbmVudCkuam9pbihcIjBcIikgKyBjb2VmZmljaWVudFxuICAgICAgOiBjb2VmZmljaWVudC5sZW5ndGggPiBleHBvbmVudCArIDEgPyBjb2VmZmljaWVudC5zbGljZSgwLCBleHBvbmVudCArIDEpICsgXCIuXCIgKyBjb2VmZmljaWVudC5zbGljZShleHBvbmVudCArIDEpXG4gICAgICA6IGNvZWZmaWNpZW50ICsgbmV3IEFycmF5KGV4cG9uZW50IC0gY29lZmZpY2llbnQubGVuZ3RoICsgMikuam9pbihcIjBcIik7XG59XG4iLCIvLyBbW2ZpbGxdYWxpZ25dW3NpZ25dW3N5bWJvbF1bMF1bd2lkdGhdWyxdWy5wcmVjaXNpb25dW35dW3R5cGVdXG52YXIgcmUgPSAvXig/OiguKT8oWzw+PV5dKSk/KFsrXFwtKCBdKT8oWyQjXSk/KDApPyhcXGQrKT8oLCk/KFxcLlxcZCspPyh+KT8oW2EteiVdKT8kL2k7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIpIHtcbiAgcmV0dXJuIG5ldyBGb3JtYXRTcGVjaWZpZXIoc3BlY2lmaWVyKTtcbn1cblxuZm9ybWF0U3BlY2lmaWVyLnByb3RvdHlwZSA9IEZvcm1hdFNwZWNpZmllci5wcm90b3R5cGU7IC8vIGluc3RhbmNlb2ZcblxuZnVuY3Rpb24gRm9ybWF0U3BlY2lmaWVyKHNwZWNpZmllcikge1xuICBpZiAoIShtYXRjaCA9IHJlLmV4ZWMoc3BlY2lmaWVyKSkpIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgZm9ybWF0OiBcIiArIHNwZWNpZmllcik7XG4gIHZhciBtYXRjaDtcbiAgdGhpcy5maWxsID0gbWF0Y2hbMV0gfHwgXCIgXCI7XG4gIHRoaXMuYWxpZ24gPSBtYXRjaFsyXSB8fCBcIj5cIjtcbiAgdGhpcy5zaWduID0gbWF0Y2hbM10gfHwgXCItXCI7XG4gIHRoaXMuc3ltYm9sID0gbWF0Y2hbNF0gfHwgXCJcIjtcbiAgdGhpcy56ZXJvID0gISFtYXRjaFs1XTtcbiAgdGhpcy53aWR0aCA9IG1hdGNoWzZdICYmICttYXRjaFs2XTtcbiAgdGhpcy5jb21tYSA9ICEhbWF0Y2hbN107XG4gIHRoaXMucHJlY2lzaW9uID0gbWF0Y2hbOF0gJiYgK21hdGNoWzhdLnNsaWNlKDEpO1xuICB0aGlzLnRyaW0gPSAhIW1hdGNoWzldO1xuICB0aGlzLnR5cGUgPSBtYXRjaFsxMF0gfHwgXCJcIjtcbn1cblxuRm9ybWF0U3BlY2lmaWVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5maWxsXG4gICAgICArIHRoaXMuYWxpZ25cbiAgICAgICsgdGhpcy5zaWduXG4gICAgICArIHRoaXMuc3ltYm9sXG4gICAgICArICh0aGlzLnplcm8gPyBcIjBcIiA6IFwiXCIpXG4gICAgICArICh0aGlzLndpZHRoID09IG51bGwgPyBcIlwiIDogTWF0aC5tYXgoMSwgdGhpcy53aWR0aCB8IDApKVxuICAgICAgKyAodGhpcy5jb21tYSA/IFwiLFwiIDogXCJcIilcbiAgICAgICsgKHRoaXMucHJlY2lzaW9uID09IG51bGwgPyBcIlwiIDogXCIuXCIgKyBNYXRoLm1heCgwLCB0aGlzLnByZWNpc2lvbiB8IDApKVxuICAgICAgKyAodGhpcy50cmltID8gXCJ+XCIgOiBcIlwiKVxuICAgICAgKyB0aGlzLnR5cGU7XG59O1xuIiwiLy8gVHJpbXMgaW5zaWduaWZpY2FudCB6ZXJvcywgZS5nLiwgcmVwbGFjZXMgMS4yMDAwayB3aXRoIDEuMmsuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzKSB7XG4gIG91dDogZm9yICh2YXIgbiA9IHMubGVuZ3RoLCBpID0gMSwgaTAgPSAtMSwgaTE7IGkgPCBuOyArK2kpIHtcbiAgICBzd2l0Y2ggKHNbaV0pIHtcbiAgICAgIGNhc2UgXCIuXCI6IGkwID0gaTEgPSBpOyBicmVhaztcbiAgICAgIGNhc2UgXCIwXCI6IGlmIChpMCA9PT0gMCkgaTAgPSBpOyBpMSA9IGk7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogaWYgKGkwID4gMCkgeyBpZiAoIStzW2ldKSBicmVhayBvdXQ7IGkwID0gMDsgfSBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGkwID4gMCA/IHMuc2xpY2UoMCwgaTApICsgcy5zbGljZShpMSArIDEpIDogcztcbn1cbiIsImltcG9ydCBmb3JtYXRQcmVmaXhBdXRvIGZyb20gXCIuL2Zvcm1hdFByZWZpeEF1dG9cIjtcbmltcG9ydCBmb3JtYXRSb3VuZGVkIGZyb20gXCIuL2Zvcm1hdFJvdW5kZWRcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcIiVcIjogZnVuY3Rpb24oeCwgcCkgeyByZXR1cm4gKHggKiAxMDApLnRvRml4ZWQocCk7IH0sXG4gIFwiYlwiOiBmdW5jdGlvbih4KSB7IHJldHVybiBNYXRoLnJvdW5kKHgpLnRvU3RyaW5nKDIpOyB9LFxuICBcImNcIjogZnVuY3Rpb24oeCkgeyByZXR1cm4geCArIFwiXCI7IH0sXG4gIFwiZFwiOiBmdW5jdGlvbih4KSB7IHJldHVybiBNYXRoLnJvdW5kKHgpLnRvU3RyaW5nKDEwKTsgfSxcbiAgXCJlXCI6IGZ1bmN0aW9uKHgsIHApIHsgcmV0dXJuIHgudG9FeHBvbmVudGlhbChwKTsgfSxcbiAgXCJmXCI6IGZ1bmN0aW9uKHgsIHApIHsgcmV0dXJuIHgudG9GaXhlZChwKTsgfSxcbiAgXCJnXCI6IGZ1bmN0aW9uKHgsIHApIHsgcmV0dXJuIHgudG9QcmVjaXNpb24ocCk7IH0sXG4gIFwib1wiOiBmdW5jdGlvbih4KSB7IHJldHVybiBNYXRoLnJvdW5kKHgpLnRvU3RyaW5nKDgpOyB9LFxuICBcInBcIjogZnVuY3Rpb24oeCwgcCkgeyByZXR1cm4gZm9ybWF0Um91bmRlZCh4ICogMTAwLCBwKTsgfSxcbiAgXCJyXCI6IGZvcm1hdFJvdW5kZWQsXG4gIFwic1wiOiBmb3JtYXRQcmVmaXhBdXRvLFxuICBcIlhcIjogZnVuY3Rpb24oeCkgeyByZXR1cm4gTWF0aC5yb3VuZCh4KS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTsgfSxcbiAgXCJ4XCI6IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIE1hdGgucm91bmQoeCkudG9TdHJpbmcoMTYpOyB9XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4geDtcbn1cbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBmb3JtYXREZWZhdWx0TG9jYWxlLCBmb3JtYXQsIGZvcm1hdFByZWZpeH0gZnJvbSBcIi4vZGVmYXVsdExvY2FsZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGZvcm1hdExvY2FsZX0gZnJvbSBcIi4vbG9jYWxlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZm9ybWF0U3BlY2lmaWVyfSBmcm9tIFwiLi9mb3JtYXRTcGVjaWZpZXJcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBwcmVjaXNpb25GaXhlZH0gZnJvbSBcIi4vcHJlY2lzaW9uRml4ZWRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBwcmVjaXNpb25QcmVmaXh9IGZyb20gXCIuL3ByZWNpc2lvblByZWZpeFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHByZWNpc2lvblJvdW5kfSBmcm9tIFwiLi9wcmVjaXNpb25Sb3VuZFwiO1xuIiwiaW1wb3J0IGV4cG9uZW50IGZyb20gXCIuL2V4cG9uZW50XCI7XG5pbXBvcnQgZm9ybWF0R3JvdXAgZnJvbSBcIi4vZm9ybWF0R3JvdXBcIjtcbmltcG9ydCBmb3JtYXROdW1lcmFscyBmcm9tIFwiLi9mb3JtYXROdW1lcmFsc1wiO1xuaW1wb3J0IGZvcm1hdFNwZWNpZmllciBmcm9tIFwiLi9mb3JtYXRTcGVjaWZpZXJcIjtcbmltcG9ydCBmb3JtYXRUcmltIGZyb20gXCIuL2Zvcm1hdFRyaW1cIjtcbmltcG9ydCBmb3JtYXRUeXBlcyBmcm9tIFwiLi9mb3JtYXRUeXBlc1wiO1xuaW1wb3J0IHtwcmVmaXhFeHBvbmVudH0gZnJvbSBcIi4vZm9ybWF0UHJlZml4QXV0b1wiO1xuaW1wb3J0IGlkZW50aXR5IGZyb20gXCIuL2lkZW50aXR5XCI7XG5cbnZhciBwcmVmaXhlcyA9IFtcInlcIixcInpcIixcImFcIixcImZcIixcInBcIixcIm5cIixcIsK1XCIsXCJtXCIsXCJcIixcImtcIixcIk1cIixcIkdcIixcIlRcIixcIlBcIixcIkVcIixcIlpcIixcIllcIl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGxvY2FsZSkge1xuICB2YXIgZ3JvdXAgPSBsb2NhbGUuZ3JvdXBpbmcgJiYgbG9jYWxlLnRob3VzYW5kcyA/IGZvcm1hdEdyb3VwKGxvY2FsZS5ncm91cGluZywgbG9jYWxlLnRob3VzYW5kcykgOiBpZGVudGl0eSxcbiAgICAgIGN1cnJlbmN5ID0gbG9jYWxlLmN1cnJlbmN5LFxuICAgICAgZGVjaW1hbCA9IGxvY2FsZS5kZWNpbWFsLFxuICAgICAgbnVtZXJhbHMgPSBsb2NhbGUubnVtZXJhbHMgPyBmb3JtYXROdW1lcmFscyhsb2NhbGUubnVtZXJhbHMpIDogaWRlbnRpdHksXG4gICAgICBwZXJjZW50ID0gbG9jYWxlLnBlcmNlbnQgfHwgXCIlXCI7XG5cbiAgZnVuY3Rpb24gbmV3Rm9ybWF0KHNwZWNpZmllcikge1xuICAgIHNwZWNpZmllciA9IGZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIpO1xuXG4gICAgdmFyIGZpbGwgPSBzcGVjaWZpZXIuZmlsbCxcbiAgICAgICAgYWxpZ24gPSBzcGVjaWZpZXIuYWxpZ24sXG4gICAgICAgIHNpZ24gPSBzcGVjaWZpZXIuc2lnbixcbiAgICAgICAgc3ltYm9sID0gc3BlY2lmaWVyLnN5bWJvbCxcbiAgICAgICAgemVybyA9IHNwZWNpZmllci56ZXJvLFxuICAgICAgICB3aWR0aCA9IHNwZWNpZmllci53aWR0aCxcbiAgICAgICAgY29tbWEgPSBzcGVjaWZpZXIuY29tbWEsXG4gICAgICAgIHByZWNpc2lvbiA9IHNwZWNpZmllci5wcmVjaXNpb24sXG4gICAgICAgIHRyaW0gPSBzcGVjaWZpZXIudHJpbSxcbiAgICAgICAgdHlwZSA9IHNwZWNpZmllci50eXBlO1xuXG4gICAgLy8gVGhlIFwiblwiIHR5cGUgaXMgYW4gYWxpYXMgZm9yIFwiLGdcIi5cbiAgICBpZiAodHlwZSA9PT0gXCJuXCIpIGNvbW1hID0gdHJ1ZSwgdHlwZSA9IFwiZ1wiO1xuXG4gICAgLy8gVGhlIFwiXCIgdHlwZSwgYW5kIGFueSBpbnZhbGlkIHR5cGUsIGlzIGFuIGFsaWFzIGZvciBcIi4xMn5nXCIuXG4gICAgZWxzZSBpZiAoIWZvcm1hdFR5cGVzW3R5cGVdKSBwcmVjaXNpb24gPT0gbnVsbCAmJiAocHJlY2lzaW9uID0gMTIpLCB0cmltID0gdHJ1ZSwgdHlwZSA9IFwiZ1wiO1xuXG4gICAgLy8gSWYgemVybyBmaWxsIGlzIHNwZWNpZmllZCwgcGFkZGluZyBnb2VzIGFmdGVyIHNpZ24gYW5kIGJlZm9yZSBkaWdpdHMuXG4gICAgaWYgKHplcm8gfHwgKGZpbGwgPT09IFwiMFwiICYmIGFsaWduID09PSBcIj1cIikpIHplcm8gPSB0cnVlLCBmaWxsID0gXCIwXCIsIGFsaWduID0gXCI9XCI7XG5cbiAgICAvLyBDb21wdXRlIHRoZSBwcmVmaXggYW5kIHN1ZmZpeC5cbiAgICAvLyBGb3IgU0ktcHJlZml4LCB0aGUgc3VmZml4IGlzIGxhemlseSBjb21wdXRlZC5cbiAgICB2YXIgcHJlZml4ID0gc3ltYm9sID09PSBcIiRcIiA/IGN1cnJlbmN5WzBdIDogc3ltYm9sID09PSBcIiNcIiAmJiAvW2JveFhdLy50ZXN0KHR5cGUpID8gXCIwXCIgKyB0eXBlLnRvTG93ZXJDYXNlKCkgOiBcIlwiLFxuICAgICAgICBzdWZmaXggPSBzeW1ib2wgPT09IFwiJFwiID8gY3VycmVuY3lbMV0gOiAvWyVwXS8udGVzdCh0eXBlKSA/IHBlcmNlbnQgOiBcIlwiO1xuXG4gICAgLy8gV2hhdCBmb3JtYXQgZnVuY3Rpb24gc2hvdWxkIHdlIHVzZT9cbiAgICAvLyBJcyB0aGlzIGFuIGludGVnZXIgdHlwZT9cbiAgICAvLyBDYW4gdGhpcyB0eXBlIGdlbmVyYXRlIGV4cG9uZW50aWFsIG5vdGF0aW9uP1xuICAgIHZhciBmb3JtYXRUeXBlID0gZm9ybWF0VHlwZXNbdHlwZV0sXG4gICAgICAgIG1heWJlU3VmZml4ID0gL1tkZWZncHJzJV0vLnRlc3QodHlwZSk7XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHQgcHJlY2lzaW9uIGlmIG5vdCBzcGVjaWZpZWQsXG4gICAgLy8gb3IgY2xhbXAgdGhlIHNwZWNpZmllZCBwcmVjaXNpb24gdG8gdGhlIHN1cHBvcnRlZCByYW5nZS5cbiAgICAvLyBGb3Igc2lnbmlmaWNhbnQgcHJlY2lzaW9uLCBpdCBtdXN0IGJlIGluIFsxLCAyMV0uXG4gICAgLy8gRm9yIGZpeGVkIHByZWNpc2lvbiwgaXQgbXVzdCBiZSBpbiBbMCwgMjBdLlxuICAgIHByZWNpc2lvbiA9IHByZWNpc2lvbiA9PSBudWxsID8gNlxuICAgICAgICA6IC9bZ3Byc10vLnRlc3QodHlwZSkgPyBNYXRoLm1heCgxLCBNYXRoLm1pbigyMSwgcHJlY2lzaW9uKSlcbiAgICAgICAgOiBNYXRoLm1heCgwLCBNYXRoLm1pbigyMCwgcHJlY2lzaW9uKSk7XG5cbiAgICBmdW5jdGlvbiBmb3JtYXQodmFsdWUpIHtcbiAgICAgIHZhciB2YWx1ZVByZWZpeCA9IHByZWZpeCxcbiAgICAgICAgICB2YWx1ZVN1ZmZpeCA9IHN1ZmZpeCxcbiAgICAgICAgICBpLCBuLCBjO1xuXG4gICAgICBpZiAodHlwZSA9PT0gXCJjXCIpIHtcbiAgICAgICAgdmFsdWVTdWZmaXggPSBmb3JtYXRUeXBlKHZhbHVlKSArIHZhbHVlU3VmZml4O1xuICAgICAgICB2YWx1ZSA9IFwiXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9ICt2YWx1ZTtcblxuICAgICAgICAvLyBQZXJmb3JtIHRoZSBpbml0aWFsIGZvcm1hdHRpbmcuXG4gICAgICAgIHZhciB2YWx1ZU5lZ2F0aXZlID0gdmFsdWUgPCAwO1xuICAgICAgICB2YWx1ZSA9IGZvcm1hdFR5cGUoTWF0aC5hYnModmFsdWUpLCBwcmVjaXNpb24pO1xuXG4gICAgICAgIC8vIFRyaW0gaW5zaWduaWZpY2FudCB6ZXJvcy5cbiAgICAgICAgaWYgKHRyaW0pIHZhbHVlID0gZm9ybWF0VHJpbSh2YWx1ZSk7XG5cbiAgICAgICAgLy8gSWYgYSBuZWdhdGl2ZSB2YWx1ZSByb3VuZHMgdG8gemVybyBkdXJpbmcgZm9ybWF0dGluZywgdHJlYXQgYXMgcG9zaXRpdmUuXG4gICAgICAgIGlmICh2YWx1ZU5lZ2F0aXZlICYmICt2YWx1ZSA9PT0gMCkgdmFsdWVOZWdhdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENvbXB1dGUgdGhlIHByZWZpeCBhbmQgc3VmZml4LlxuICAgICAgICB2YWx1ZVByZWZpeCA9ICh2YWx1ZU5lZ2F0aXZlID8gKHNpZ24gPT09IFwiKFwiID8gc2lnbiA6IFwiLVwiKSA6IHNpZ24gPT09IFwiLVwiIHx8IHNpZ24gPT09IFwiKFwiID8gXCJcIiA6IHNpZ24pICsgdmFsdWVQcmVmaXg7XG4gICAgICAgIHZhbHVlU3VmZml4ID0gKHR5cGUgPT09IFwic1wiID8gcHJlZml4ZXNbOCArIHByZWZpeEV4cG9uZW50IC8gM10gOiBcIlwiKSArIHZhbHVlU3VmZml4ICsgKHZhbHVlTmVnYXRpdmUgJiYgc2lnbiA9PT0gXCIoXCIgPyBcIilcIiA6IFwiXCIpO1xuXG4gICAgICAgIC8vIEJyZWFrIHRoZSBmb3JtYXR0ZWQgdmFsdWUgaW50byB0aGUgaW50ZWdlciDigJx2YWx1ZeKAnSBwYXJ0IHRoYXQgY2FuIGJlXG4gICAgICAgIC8vIGdyb3VwZWQsIGFuZCBmcmFjdGlvbmFsIG9yIGV4cG9uZW50aWFsIOKAnHN1ZmZpeOKAnSBwYXJ0IHRoYXQgaXMgbm90LlxuICAgICAgICBpZiAobWF5YmVTdWZmaXgpIHtcbiAgICAgICAgICBpID0gLTEsIG4gPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgICAgICAgIGlmIChjID0gdmFsdWUuY2hhckNvZGVBdChpKSwgNDggPiBjIHx8IGMgPiA1Nykge1xuICAgICAgICAgICAgICB2YWx1ZVN1ZmZpeCA9IChjID09PSA0NiA/IGRlY2ltYWwgKyB2YWx1ZS5zbGljZShpICsgMSkgOiB2YWx1ZS5zbGljZShpKSkgKyB2YWx1ZVN1ZmZpeDtcbiAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSBmaWxsIGNoYXJhY3RlciBpcyBub3QgXCIwXCIsIGdyb3VwaW5nIGlzIGFwcGxpZWQgYmVmb3JlIHBhZGRpbmcuXG4gICAgICBpZiAoY29tbWEgJiYgIXplcm8pIHZhbHVlID0gZ3JvdXAodmFsdWUsIEluZmluaXR5KTtcblxuICAgICAgLy8gQ29tcHV0ZSB0aGUgcGFkZGluZy5cbiAgICAgIHZhciBsZW5ndGggPSB2YWx1ZVByZWZpeC5sZW5ndGggKyB2YWx1ZS5sZW5ndGggKyB2YWx1ZVN1ZmZpeC5sZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IGxlbmd0aCA8IHdpZHRoID8gbmV3IEFycmF5KHdpZHRoIC0gbGVuZ3RoICsgMSkuam9pbihmaWxsKSA6IFwiXCI7XG5cbiAgICAgIC8vIElmIHRoZSBmaWxsIGNoYXJhY3RlciBpcyBcIjBcIiwgZ3JvdXBpbmcgaXMgYXBwbGllZCBhZnRlciBwYWRkaW5nLlxuICAgICAgaWYgKGNvbW1hICYmIHplcm8pIHZhbHVlID0gZ3JvdXAocGFkZGluZyArIHZhbHVlLCBwYWRkaW5nLmxlbmd0aCA/IHdpZHRoIC0gdmFsdWVTdWZmaXgubGVuZ3RoIDogSW5maW5pdHkpLCBwYWRkaW5nID0gXCJcIjtcblxuICAgICAgLy8gUmVjb25zdHJ1Y3QgdGhlIGZpbmFsIG91dHB1dCBiYXNlZCBvbiB0aGUgZGVzaXJlZCBhbGlnbm1lbnQuXG4gICAgICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgICAgIGNhc2UgXCI8XCI6IHZhbHVlID0gdmFsdWVQcmVmaXggKyB2YWx1ZSArIHZhbHVlU3VmZml4ICsgcGFkZGluZzsgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI9XCI6IHZhbHVlID0gdmFsdWVQcmVmaXggKyBwYWRkaW5nICsgdmFsdWUgKyB2YWx1ZVN1ZmZpeDsgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJeXCI6IHZhbHVlID0gcGFkZGluZy5zbGljZSgwLCBsZW5ndGggPSBwYWRkaW5nLmxlbmd0aCA+PiAxKSArIHZhbHVlUHJlZml4ICsgdmFsdWUgKyB2YWx1ZVN1ZmZpeCArIHBhZGRpbmcuc2xpY2UobGVuZ3RoKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IHZhbHVlID0gcGFkZGluZyArIHZhbHVlUHJlZml4ICsgdmFsdWUgKyB2YWx1ZVN1ZmZpeDsgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudW1lcmFscyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgZm9ybWF0LnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3BlY2lmaWVyICsgXCJcIjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFByZWZpeChzcGVjaWZpZXIsIHZhbHVlKSB7XG4gICAgdmFyIGYgPSBuZXdGb3JtYXQoKHNwZWNpZmllciA9IGZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIpLCBzcGVjaWZpZXIudHlwZSA9IFwiZlwiLCBzcGVjaWZpZXIpKSxcbiAgICAgICAgZSA9IE1hdGgubWF4KC04LCBNYXRoLm1pbig4LCBNYXRoLmZsb29yKGV4cG9uZW50KHZhbHVlKSAvIDMpKSkgKiAzLFxuICAgICAgICBrID0gTWF0aC5wb3coMTAsIC1lKSxcbiAgICAgICAgcHJlZml4ID0gcHJlZml4ZXNbOCArIGUgLyAzXTtcbiAgICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiBmKGsgKiB2YWx1ZSkgKyBwcmVmaXg7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZm9ybWF0OiBuZXdGb3JtYXQsXG4gICAgZm9ybWF0UHJlZml4OiBmb3JtYXRQcmVmaXhcbiAgfTtcbn1cbiIsImltcG9ydCBleHBvbmVudCBmcm9tIFwiLi9leHBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGVwKSB7XG4gIHJldHVybiBNYXRoLm1heCgwLCAtZXhwb25lbnQoTWF0aC5hYnMoc3RlcCkpKTtcbn1cbiIsImltcG9ydCBleHBvbmVudCBmcm9tIFwiLi9leHBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGVwLCB2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5tYXgoLTgsIE1hdGgubWluKDgsIE1hdGguZmxvb3IoZXhwb25lbnQodmFsdWUpIC8gMykpKSAqIDMgLSBleHBvbmVudChNYXRoLmFicyhzdGVwKSkpO1xufVxuIiwiaW1wb3J0IGV4cG9uZW50IGZyb20gXCIuL2V4cG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0ZXAsIG1heCkge1xuICBzdGVwID0gTWF0aC5hYnMoc3RlcCksIG1heCA9IE1hdGguYWJzKG1heCkgLSBzdGVwO1xuICByZXR1cm4gTWF0aC5tYXgoMCwgZXhwb25lbnQobWF4KSAtIGV4cG9uZW50KHN0ZXApKSArIDE7XG59XG4iLCJpbXBvcnQgdmFsdWUgZnJvbSBcIi4vdmFsdWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgbmIgPSBiID8gYi5sZW5ndGggOiAwLFxuICAgICAgbmEgPSBhID8gTWF0aC5taW4obmIsIGEubGVuZ3RoKSA6IDAsXG4gICAgICB4ID0gbmV3IEFycmF5KG5hKSxcbiAgICAgIGMgPSBuZXcgQXJyYXkobmIpLFxuICAgICAgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgbmE7ICsraSkgeFtpXSA9IHZhbHVlKGFbaV0sIGJbaV0pO1xuICBmb3IgKDsgaSA8IG5iOyArK2kpIGNbaV0gPSBiW2ldO1xuXG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgZm9yIChpID0gMDsgaSA8IG5hOyArK2kpIGNbaV0gPSB4W2ldKHQpO1xuICAgIHJldHVybiBjO1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJhc2lzKHQxLCB2MCwgdjEsIHYyLCB2Mykge1xuICB2YXIgdDIgPSB0MSAqIHQxLCB0MyA9IHQyICogdDE7XG4gIHJldHVybiAoKDEgLSAzICogdDEgKyAzICogdDIgLSB0MykgKiB2MFxuICAgICAgKyAoNCAtIDYgKiB0MiArIDMgKiB0MykgKiB2MVxuICAgICAgKyAoMSArIDMgKiB0MSArIDMgKiB0MiAtIDMgKiB0MykgKiB2MlxuICAgICAgKyB0MyAqIHYzKSAvIDY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcykge1xuICB2YXIgbiA9IHZhbHVlcy5sZW5ndGggLSAxO1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHZhciBpID0gdCA8PSAwID8gKHQgPSAwKSA6IHQgPj0gMSA/ICh0ID0gMSwgbiAtIDEpIDogTWF0aC5mbG9vcih0ICogbiksXG4gICAgICAgIHYxID0gdmFsdWVzW2ldLFxuICAgICAgICB2MiA9IHZhbHVlc1tpICsgMV0sXG4gICAgICAgIHYwID0gaSA+IDAgPyB2YWx1ZXNbaSAtIDFdIDogMiAqIHYxIC0gdjIsXG4gICAgICAgIHYzID0gaSA8IG4gLSAxID8gdmFsdWVzW2kgKyAyXSA6IDIgKiB2MiAtIHYxO1xuICAgIHJldHVybiBiYXNpcygodCAtIGkgLyBuKSAqIG4sIHYwLCB2MSwgdjIsIHYzKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7YmFzaXN9IGZyb20gXCIuL2Jhc2lzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcykge1xuICB2YXIgbiA9IHZhbHVlcy5sZW5ndGg7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdmFyIGkgPSBNYXRoLmZsb29yKCgodCAlPSAxKSA8IDAgPyArK3QgOiB0KSAqIG4pLFxuICAgICAgICB2MCA9IHZhbHVlc1soaSArIG4gLSAxKSAlIG5dLFxuICAgICAgICB2MSA9IHZhbHVlc1tpICUgbl0sXG4gICAgICAgIHYyID0gdmFsdWVzWyhpICsgMSkgJSBuXSxcbiAgICAgICAgdjMgPSB2YWx1ZXNbKGkgKyAyKSAlIG5dO1xuICAgIHJldHVybiBiYXNpcygodCAtIGkgLyBuKSAqIG4sIHYwLCB2MSwgdjIsIHYzKTtcbiAgfTtcbn1cbiIsImltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudFwiO1xuXG5mdW5jdGlvbiBsaW5lYXIoYSwgZCkge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBhICsgdCAqIGQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGV4cG9uZW50aWFsKGEsIGIsIHkpIHtcbiAgcmV0dXJuIGEgPSBNYXRoLnBvdyhhLCB5KSwgYiA9IE1hdGgucG93KGIsIHkpIC0gYSwgeSA9IDEgLyB5LCBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIE1hdGgucG93KGEgKyB0ICogYiwgeSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodWUoYSwgYikge1xuICB2YXIgZCA9IGIgLSBhO1xuICByZXR1cm4gZCA/IGxpbmVhcihhLCBkID4gMTgwIHx8IGQgPCAtMTgwID8gZCAtIDM2MCAqIE1hdGgucm91bmQoZCAvIDM2MCkgOiBkKSA6IGNvbnN0YW50KGlzTmFOKGEpID8gYiA6IGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2FtbWEoeSkge1xuICByZXR1cm4gKHkgPSAreSkgPT09IDEgPyBub2dhbW1hIDogZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBiIC0gYSA/IGV4cG9uZW50aWFsKGEsIGIsIHkpIDogY29uc3RhbnQoaXNOYU4oYSkgPyBiIDogYSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vZ2FtbWEoYSwgYikge1xuICB2YXIgZCA9IGIgLSBhO1xuICByZXR1cm4gZCA/IGxpbmVhcihhLCBkKSA6IGNvbnN0YW50KGlzTmFOKGEpID8gYiA6IGEpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHg7XG4gIH07XG59XG4iLCJpbXBvcnQge2N1YmVoZWxpeCBhcyBjb2xvckN1YmVoZWxpeH0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQgY29sb3IsIHtodWV9IGZyb20gXCIuL2NvbG9yXCI7XG5cbmZ1bmN0aW9uIGN1YmVoZWxpeChodWUpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBjdWJlaGVsaXhHYW1tYSh5KSB7XG4gICAgeSA9ICt5O1xuXG4gICAgZnVuY3Rpb24gY3ViZWhlbGl4KHN0YXJ0LCBlbmQpIHtcbiAgICAgIHZhciBoID0gaHVlKChzdGFydCA9IGNvbG9yQ3ViZWhlbGl4KHN0YXJ0KSkuaCwgKGVuZCA9IGNvbG9yQ3ViZWhlbGl4KGVuZCkpLmgpLFxuICAgICAgICAgIHMgPSBjb2xvcihzdGFydC5zLCBlbmQucyksXG4gICAgICAgICAgbCA9IGNvbG9yKHN0YXJ0LmwsIGVuZC5sKSxcbiAgICAgICAgICBvcGFjaXR5ID0gY29sb3Ioc3RhcnQub3BhY2l0eSwgZW5kLm9wYWNpdHkpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgc3RhcnQuaCA9IGgodCk7XG4gICAgICAgIHN0YXJ0LnMgPSBzKHQpO1xuICAgICAgICBzdGFydC5sID0gbChNYXRoLnBvdyh0LCB5KSk7XG4gICAgICAgIHN0YXJ0Lm9wYWNpdHkgPSBvcGFjaXR5KHQpO1xuICAgICAgICByZXR1cm4gc3RhcnQgKyBcIlwiO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBjdWJlaGVsaXguZ2FtbWEgPSBjdWJlaGVsaXhHYW1tYTtcblxuICAgIHJldHVybiBjdWJlaGVsaXg7XG4gIH0pKDEpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjdWJlaGVsaXgoaHVlKTtcbmV4cG9ydCB2YXIgY3ViZWhlbGl4TG9uZyA9IGN1YmVoZWxpeChjb2xvcik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBkID0gbmV3IERhdGU7XG4gIHJldHVybiBhID0gK2EsIGIgLT0gYSwgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBkLnNldFRpbWUoYSArIGIgKiB0KSwgZDtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHJhbmdlKSB7XG4gIHZhciBuID0gcmFuZ2UubGVuZ3RoO1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHJldHVybiByYW5nZVtNYXRoLm1heCgwLCBNYXRoLm1pbihuIC0gMSwgTWF0aC5mbG9vcih0ICogbikpKV07XG4gIH07XG59XG4iLCJpbXBvcnQge2hjbCBhcyBjb2xvckhjbH0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQgY29sb3IsIHtodWV9IGZyb20gXCIuL2NvbG9yXCI7XG5cbmZ1bmN0aW9uIGhjbChodWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgaCA9IGh1ZSgoc3RhcnQgPSBjb2xvckhjbChzdGFydCkpLmgsIChlbmQgPSBjb2xvckhjbChlbmQpKS5oKSxcbiAgICAgICAgYyA9IGNvbG9yKHN0YXJ0LmMsIGVuZC5jKSxcbiAgICAgICAgbCA9IGNvbG9yKHN0YXJ0LmwsIGVuZC5sKSxcbiAgICAgICAgb3BhY2l0eSA9IGNvbG9yKHN0YXJ0Lm9wYWNpdHksIGVuZC5vcGFjaXR5KTtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgc3RhcnQuaCA9IGgodCk7XG4gICAgICBzdGFydC5jID0gYyh0KTtcbiAgICAgIHN0YXJ0LmwgPSBsKHQpO1xuICAgICAgc3RhcnQub3BhY2l0eSA9IG9wYWNpdHkodCk7XG4gICAgICByZXR1cm4gc3RhcnQgKyBcIlwiO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGNsKGh1ZSk7XG5leHBvcnQgdmFyIGhjbExvbmcgPSBoY2woY29sb3IpO1xuIiwiaW1wb3J0IHtoc2wgYXMgY29sb3JIc2x9IGZyb20gXCJkMy1jb2xvclwiO1xuaW1wb3J0IGNvbG9yLCB7aHVlfSBmcm9tIFwiLi9jb2xvclwiO1xuXG5mdW5jdGlvbiBoc2woaHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gICAgdmFyIGggPSBodWUoKHN0YXJ0ID0gY29sb3JIc2woc3RhcnQpKS5oLCAoZW5kID0gY29sb3JIc2woZW5kKSkuaCksXG4gICAgICAgIHMgPSBjb2xvcihzdGFydC5zLCBlbmQucyksXG4gICAgICAgIGwgPSBjb2xvcihzdGFydC5sLCBlbmQubCksXG4gICAgICAgIG9wYWNpdHkgPSBjb2xvcihzdGFydC5vcGFjaXR5LCBlbmQub3BhY2l0eSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHN0YXJ0LmggPSBoKHQpO1xuICAgICAgc3RhcnQucyA9IHModCk7XG4gICAgICBzdGFydC5sID0gbCh0KTtcbiAgICAgIHN0YXJ0Lm9wYWNpdHkgPSBvcGFjaXR5KHQpO1xuICAgICAgcmV0dXJuIHN0YXJ0ICsgXCJcIjtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhzbChodWUpO1xuZXhwb3J0IHZhciBoc2xMb25nID0gaHNsKGNvbG9yKTtcbiIsImltcG9ydCB7aHVlfSBmcm9tIFwiLi9jb2xvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBpID0gaHVlKCthLCArYik7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdmFyIHggPSBpKHQpO1xuICAgIHJldHVybiB4IC0gMzYwICogTWF0aC5mbG9vcih4IC8gMzYwKTtcbiAgfTtcbn1cbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZX0gZnJvbSBcIi4vdmFsdWVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZUFycmF5fSBmcm9tIFwiLi9hcnJheVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlQmFzaXN9IGZyb20gXCIuL2Jhc2lzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVCYXNpc0Nsb3NlZH0gZnJvbSBcIi4vYmFzaXNDbG9zZWRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZURhdGV9IGZyb20gXCIuL2RhdGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZURpc2NyZXRlfSBmcm9tIFwiLi9kaXNjcmV0ZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlSHVlfSBmcm9tIFwiLi9odWVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZU51bWJlcn0gZnJvbSBcIi4vbnVtYmVyXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVPYmplY3R9IGZyb20gXCIuL29iamVjdFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlUm91bmR9IGZyb20gXCIuL3JvdW5kXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVTdHJpbmd9IGZyb20gXCIuL3N0cmluZ1wiO1xuZXhwb3J0IHtpbnRlcnBvbGF0ZVRyYW5zZm9ybUNzcywgaW50ZXJwb2xhdGVUcmFuc2Zvcm1Tdmd9IGZyb20gXCIuL3RyYW5zZm9ybS9pbmRleFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlWm9vbX0gZnJvbSBcIi4vem9vbVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlUmdiLCByZ2JCYXNpcyBhcyBpbnRlcnBvbGF0ZVJnYkJhc2lzLCByZ2JCYXNpc0Nsb3NlZCBhcyBpbnRlcnBvbGF0ZVJnYkJhc2lzQ2xvc2VkfSBmcm9tIFwiLi9yZ2JcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZUhzbCwgaHNsTG9uZyBhcyBpbnRlcnBvbGF0ZUhzbExvbmd9IGZyb20gXCIuL2hzbFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlTGFifSBmcm9tIFwiLi9sYWJcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZUhjbCwgaGNsTG9uZyBhcyBpbnRlcnBvbGF0ZUhjbExvbmd9IGZyb20gXCIuL2hjbFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlQ3ViZWhlbGl4LCBjdWJlaGVsaXhMb25nIGFzIGludGVycG9sYXRlQ3ViZWhlbGl4TG9uZ30gZnJvbSBcIi4vY3ViZWhlbGl4XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcGllY2V3aXNlfSBmcm9tIFwiLi9waWVjZXdpc2VcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBxdWFudGl6ZX0gZnJvbSBcIi4vcXVhbnRpemVcIjtcbiIsImltcG9ydCB7bGFiIGFzIGNvbG9yTGFifSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCBjb2xvciBmcm9tIFwiLi9jb2xvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsYWIoc3RhcnQsIGVuZCkge1xuICB2YXIgbCA9IGNvbG9yKChzdGFydCA9IGNvbG9yTGFiKHN0YXJ0KSkubCwgKGVuZCA9IGNvbG9yTGFiKGVuZCkpLmwpLFxuICAgICAgYSA9IGNvbG9yKHN0YXJ0LmEsIGVuZC5hKSxcbiAgICAgIGIgPSBjb2xvcihzdGFydC5iLCBlbmQuYiksXG4gICAgICBvcGFjaXR5ID0gY29sb3Ioc3RhcnQub3BhY2l0eSwgZW5kLm9wYWNpdHkpO1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHN0YXJ0LmwgPSBsKHQpO1xuICAgIHN0YXJ0LmEgPSBhKHQpO1xuICAgIHN0YXJ0LmIgPSBiKHQpO1xuICAgIHN0YXJ0Lm9wYWNpdHkgPSBvcGFjaXR5KHQpO1xuICAgIHJldHVybiBzdGFydCArIFwiXCI7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBhID0gK2EsIGIgLT0gYSwgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBhICsgYiAqIHQ7XG4gIH07XG59XG4iLCJpbXBvcnQgdmFsdWUgZnJvbSBcIi4vdmFsdWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgaSA9IHt9LFxuICAgICAgYyA9IHt9LFxuICAgICAgaztcblxuICBpZiAoYSA9PT0gbnVsbCB8fCB0eXBlb2YgYSAhPT0gXCJvYmplY3RcIikgYSA9IHt9O1xuICBpZiAoYiA9PT0gbnVsbCB8fCB0eXBlb2YgYiAhPT0gXCJvYmplY3RcIikgYiA9IHt9O1xuXG4gIGZvciAoayBpbiBiKSB7XG4gICAgaWYgKGsgaW4gYSkge1xuICAgICAgaVtrXSA9IHZhbHVlKGFba10sIGJba10pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjW2tdID0gYltrXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIGZvciAoayBpbiBpKSBjW2tdID0gaVtrXSh0KTtcbiAgICByZXR1cm4gYztcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBpZWNld2lzZShpbnRlcnBvbGF0ZSwgdmFsdWVzKSB7XG4gIHZhciBpID0gMCwgbiA9IHZhbHVlcy5sZW5ndGggLSAxLCB2ID0gdmFsdWVzWzBdLCBJID0gbmV3IEFycmF5KG4gPCAwID8gMCA6IG4pO1xuICB3aGlsZSAoaSA8IG4pIElbaV0gPSBpbnRlcnBvbGF0ZSh2LCB2ID0gdmFsdWVzWysraV0pO1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHZhciBpID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obiAtIDEsIE1hdGguZmxvb3IodCAqPSBuKSkpO1xuICAgIHJldHVybiBJW2ldKHQgLSBpKTtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGludGVycG9sYXRvciwgbikge1xuICB2YXIgc2FtcGxlcyA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpIHNhbXBsZXNbaV0gPSBpbnRlcnBvbGF0b3IoaSAvIChuIC0gMSkpO1xuICByZXR1cm4gc2FtcGxlcztcbn1cbiIsImltcG9ydCB7cmdiIGFzIGNvbG9yUmdifSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCBiYXNpcyBmcm9tIFwiLi9iYXNpc1wiO1xuaW1wb3J0IGJhc2lzQ2xvc2VkIGZyb20gXCIuL2Jhc2lzQ2xvc2VkXCI7XG5pbXBvcnQgbm9nYW1tYSwge2dhbW1hfSBmcm9tIFwiLi9jb2xvclwiO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gcmdiR2FtbWEoeSkge1xuICB2YXIgY29sb3IgPSBnYW1tYSh5KTtcblxuICBmdW5jdGlvbiByZ2Ioc3RhcnQsIGVuZCkge1xuICAgIHZhciByID0gY29sb3IoKHN0YXJ0ID0gY29sb3JSZ2Ioc3RhcnQpKS5yLCAoZW5kID0gY29sb3JSZ2IoZW5kKSkuciksXG4gICAgICAgIGcgPSBjb2xvcihzdGFydC5nLCBlbmQuZyksXG4gICAgICAgIGIgPSBjb2xvcihzdGFydC5iLCBlbmQuYiksXG4gICAgICAgIG9wYWNpdHkgPSBub2dhbW1hKHN0YXJ0Lm9wYWNpdHksIGVuZC5vcGFjaXR5KTtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgc3RhcnQuciA9IHIodCk7XG4gICAgICBzdGFydC5nID0gZyh0KTtcbiAgICAgIHN0YXJ0LmIgPSBiKHQpO1xuICAgICAgc3RhcnQub3BhY2l0eSA9IG9wYWNpdHkodCk7XG4gICAgICByZXR1cm4gc3RhcnQgKyBcIlwiO1xuICAgIH07XG4gIH1cblxuICByZ2IuZ2FtbWEgPSByZ2JHYW1tYTtcblxuICByZXR1cm4gcmdiO1xufSkoMSk7XG5cbmZ1bmN0aW9uIHJnYlNwbGluZShzcGxpbmUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGNvbG9ycykge1xuICAgIHZhciBuID0gY29sb3JzLmxlbmd0aCxcbiAgICAgICAgciA9IG5ldyBBcnJheShuKSxcbiAgICAgICAgZyA9IG5ldyBBcnJheShuKSxcbiAgICAgICAgYiA9IG5ldyBBcnJheShuKSxcbiAgICAgICAgaSwgY29sb3I7XG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgY29sb3IgPSBjb2xvclJnYihjb2xvcnNbaV0pO1xuICAgICAgcltpXSA9IGNvbG9yLnIgfHwgMDtcbiAgICAgIGdbaV0gPSBjb2xvci5nIHx8IDA7XG4gICAgICBiW2ldID0gY29sb3IuYiB8fCAwO1xuICAgIH1cbiAgICByID0gc3BsaW5lKHIpO1xuICAgIGcgPSBzcGxpbmUoZyk7XG4gICAgYiA9IHNwbGluZShiKTtcbiAgICBjb2xvci5vcGFjaXR5ID0gMTtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgY29sb3IuciA9IHIodCk7XG4gICAgICBjb2xvci5nID0gZyh0KTtcbiAgICAgIGNvbG9yLmIgPSBiKHQpO1xuICAgICAgcmV0dXJuIGNvbG9yICsgXCJcIjtcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgdmFyIHJnYkJhc2lzID0gcmdiU3BsaW5lKGJhc2lzKTtcbmV4cG9ydCB2YXIgcmdiQmFzaXNDbG9zZWQgPSByZ2JTcGxpbmUoYmFzaXNDbG9zZWQpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gYSA9ICthLCBiIC09IGEsIGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChhICsgYiAqIHQpO1xuICB9O1xufVxuIiwiaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXJcIjtcblxudmFyIHJlQSA9IC9bLStdPyg/OlxcZCtcXC4/XFxkKnxcXC4/XFxkKykoPzpbZUVdWy0rXT9cXGQrKT8vZyxcbiAgICByZUIgPSBuZXcgUmVnRXhwKHJlQS5zb3VyY2UsIFwiZ1wiKTtcblxuZnVuY3Rpb24gemVybyhiKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYjtcbiAgfTtcbn1cblxuZnVuY3Rpb24gb25lKGIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gYih0KSArIFwiXCI7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIGJpID0gcmVBLmxhc3RJbmRleCA9IHJlQi5sYXN0SW5kZXggPSAwLCAvLyBzY2FuIGluZGV4IGZvciBuZXh0IG51bWJlciBpbiBiXG4gICAgICBhbSwgLy8gY3VycmVudCBtYXRjaCBpbiBhXG4gICAgICBibSwgLy8gY3VycmVudCBtYXRjaCBpbiBiXG4gICAgICBicywgLy8gc3RyaW5nIHByZWNlZGluZyBjdXJyZW50IG51bWJlciBpbiBiLCBpZiBhbnlcbiAgICAgIGkgPSAtMSwgLy8gaW5kZXggaW4gc1xuICAgICAgcyA9IFtdLCAvLyBzdHJpbmcgY29uc3RhbnRzIGFuZCBwbGFjZWhvbGRlcnNcbiAgICAgIHEgPSBbXTsgLy8gbnVtYmVyIGludGVycG9sYXRvcnNcblxuICAvLyBDb2VyY2UgaW5wdXRzIHRvIHN0cmluZ3MuXG4gIGEgPSBhICsgXCJcIiwgYiA9IGIgKyBcIlwiO1xuXG4gIC8vIEludGVycG9sYXRlIHBhaXJzIG9mIG51bWJlcnMgaW4gYSAmIGIuXG4gIHdoaWxlICgoYW0gPSByZUEuZXhlYyhhKSlcbiAgICAgICYmIChibSA9IHJlQi5leGVjKGIpKSkge1xuICAgIGlmICgoYnMgPSBibS5pbmRleCkgPiBiaSkgeyAvLyBhIHN0cmluZyBwcmVjZWRlcyB0aGUgbmV4dCBudW1iZXIgaW4gYlxuICAgICAgYnMgPSBiLnNsaWNlKGJpLCBicyk7XG4gICAgICBpZiAoc1tpXSkgc1tpXSArPSBiczsgLy8gY29hbGVzY2Ugd2l0aCBwcmV2aW91cyBzdHJpbmdcbiAgICAgIGVsc2Ugc1srK2ldID0gYnM7XG4gICAgfVxuICAgIGlmICgoYW0gPSBhbVswXSkgPT09IChibSA9IGJtWzBdKSkgeyAvLyBudW1iZXJzIGluIGEgJiBiIG1hdGNoXG4gICAgICBpZiAoc1tpXSkgc1tpXSArPSBibTsgLy8gY29hbGVzY2Ugd2l0aCBwcmV2aW91cyBzdHJpbmdcbiAgICAgIGVsc2Ugc1srK2ldID0gYm07XG4gICAgfSBlbHNlIHsgLy8gaW50ZXJwb2xhdGUgbm9uLW1hdGNoaW5nIG51bWJlcnNcbiAgICAgIHNbKytpXSA9IG51bGw7XG4gICAgICBxLnB1c2goe2k6IGksIHg6IG51bWJlcihhbSwgYm0pfSk7XG4gICAgfVxuICAgIGJpID0gcmVCLmxhc3RJbmRleDtcbiAgfVxuXG4gIC8vIEFkZCByZW1haW5zIG9mIGIuXG4gIGlmIChiaSA8IGIubGVuZ3RoKSB7XG4gICAgYnMgPSBiLnNsaWNlKGJpKTtcbiAgICBpZiAoc1tpXSkgc1tpXSArPSBiczsgLy8gY29hbGVzY2Ugd2l0aCBwcmV2aW91cyBzdHJpbmdcbiAgICBlbHNlIHNbKytpXSA9IGJzO1xuICB9XG5cbiAgLy8gU3BlY2lhbCBvcHRpbWl6YXRpb24gZm9yIG9ubHkgYSBzaW5nbGUgbWF0Y2guXG4gIC8vIE90aGVyd2lzZSwgaW50ZXJwb2xhdGUgZWFjaCBvZiB0aGUgbnVtYmVycyBhbmQgcmVqb2luIHRoZSBzdHJpbmcuXG4gIHJldHVybiBzLmxlbmd0aCA8IDIgPyAocVswXVxuICAgICAgPyBvbmUocVswXS54KVxuICAgICAgOiB6ZXJvKGIpKVxuICAgICAgOiAoYiA9IHEubGVuZ3RoLCBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIG87IGkgPCBiOyArK2kpIHNbKG8gPSBxW2ldKS5pXSA9IG8ueCh0KTtcbiAgICAgICAgICByZXR1cm4gcy5qb2luKFwiXCIpO1xuICAgICAgICB9KTtcbn1cbiIsInZhciBkZWdyZWVzID0gMTgwIC8gTWF0aC5QSTtcblxuZXhwb3J0IHZhciBpZGVudGl0eSA9IHtcbiAgdHJhbnNsYXRlWDogMCxcbiAgdHJhbnNsYXRlWTogMCxcbiAgcm90YXRlOiAwLFxuICBza2V3WDogMCxcbiAgc2NhbGVYOiAxLFxuICBzY2FsZVk6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFyIHNjYWxlWCwgc2NhbGVZLCBza2V3WDtcbiAgaWYgKHNjYWxlWCA9IE1hdGguc3FydChhICogYSArIGIgKiBiKSkgYSAvPSBzY2FsZVgsIGIgLz0gc2NhbGVYO1xuICBpZiAoc2tld1ggPSBhICogYyArIGIgKiBkKSBjIC09IGEgKiBza2V3WCwgZCAtPSBiICogc2tld1g7XG4gIGlmIChzY2FsZVkgPSBNYXRoLnNxcnQoYyAqIGMgKyBkICogZCkpIGMgLz0gc2NhbGVZLCBkIC89IHNjYWxlWSwgc2tld1ggLz0gc2NhbGVZO1xuICBpZiAoYSAqIGQgPCBiICogYykgYSA9IC1hLCBiID0gLWIsIHNrZXdYID0gLXNrZXdYLCBzY2FsZVggPSAtc2NhbGVYO1xuICByZXR1cm4ge1xuICAgIHRyYW5zbGF0ZVg6IGUsXG4gICAgdHJhbnNsYXRlWTogZixcbiAgICByb3RhdGU6IE1hdGguYXRhbjIoYiwgYSkgKiBkZWdyZWVzLFxuICAgIHNrZXdYOiBNYXRoLmF0YW4oc2tld1gpICogZGVncmVlcyxcbiAgICBzY2FsZVg6IHNjYWxlWCxcbiAgICBzY2FsZVk6IHNjYWxlWVxuICB9O1xufVxuIiwiaW1wb3J0IG51bWJlciBmcm9tIFwiLi4vbnVtYmVyXCI7XG5pbXBvcnQge3BhcnNlQ3NzLCBwYXJzZVN2Z30gZnJvbSBcIi4vcGFyc2VcIjtcblxuZnVuY3Rpb24gaW50ZXJwb2xhdGVUcmFuc2Zvcm0ocGFyc2UsIHB4Q29tbWEsIHB4UGFyZW4sIGRlZ1BhcmVuKSB7XG5cbiAgZnVuY3Rpb24gcG9wKHMpIHtcbiAgICByZXR1cm4gcy5sZW5ndGggPyBzLnBvcCgpICsgXCIgXCIgOiBcIlwiO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNsYXRlKHhhLCB5YSwgeGIsIHliLCBzLCBxKSB7XG4gICAgaWYgKHhhICE9PSB4YiB8fCB5YSAhPT0geWIpIHtcbiAgICAgIHZhciBpID0gcy5wdXNoKFwidHJhbnNsYXRlKFwiLCBudWxsLCBweENvbW1hLCBudWxsLCBweFBhcmVuKTtcbiAgICAgIHEucHVzaCh7aTogaSAtIDQsIHg6IG51bWJlcih4YSwgeGIpfSwge2k6IGkgLSAyLCB4OiBudW1iZXIoeWEsIHliKX0pO1xuICAgIH0gZWxzZSBpZiAoeGIgfHwgeWIpIHtcbiAgICAgIHMucHVzaChcInRyYW5zbGF0ZShcIiArIHhiICsgcHhDb21tYSArIHliICsgcHhQYXJlbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcm90YXRlKGEsIGIsIHMsIHEpIHtcbiAgICBpZiAoYSAhPT0gYikge1xuICAgICAgaWYgKGEgLSBiID4gMTgwKSBiICs9IDM2MDsgZWxzZSBpZiAoYiAtIGEgPiAxODApIGEgKz0gMzYwOyAvLyBzaG9ydGVzdCBwYXRoXG4gICAgICBxLnB1c2goe2k6IHMucHVzaChwb3AocykgKyBcInJvdGF0ZShcIiwgbnVsbCwgZGVnUGFyZW4pIC0gMiwgeDogbnVtYmVyKGEsIGIpfSk7XG4gICAgfSBlbHNlIGlmIChiKSB7XG4gICAgICBzLnB1c2gocG9wKHMpICsgXCJyb3RhdGUoXCIgKyBiICsgZGVnUGFyZW4pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNrZXdYKGEsIGIsIHMsIHEpIHtcbiAgICBpZiAoYSAhPT0gYikge1xuICAgICAgcS5wdXNoKHtpOiBzLnB1c2gocG9wKHMpICsgXCJza2V3WChcIiwgbnVsbCwgZGVnUGFyZW4pIC0gMiwgeDogbnVtYmVyKGEsIGIpfSk7XG4gICAgfSBlbHNlIGlmIChiKSB7XG4gICAgICBzLnB1c2gocG9wKHMpICsgXCJza2V3WChcIiArIGIgKyBkZWdQYXJlbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2NhbGUoeGEsIHlhLCB4YiwgeWIsIHMsIHEpIHtcbiAgICBpZiAoeGEgIT09IHhiIHx8IHlhICE9PSB5Yikge1xuICAgICAgdmFyIGkgPSBzLnB1c2gocG9wKHMpICsgXCJzY2FsZShcIiwgbnVsbCwgXCIsXCIsIG51bGwsIFwiKVwiKTtcbiAgICAgIHEucHVzaCh7aTogaSAtIDQsIHg6IG51bWJlcih4YSwgeGIpfSwge2k6IGkgLSAyLCB4OiBudW1iZXIoeWEsIHliKX0pO1xuICAgIH0gZWxzZSBpZiAoeGIgIT09IDEgfHwgeWIgIT09IDEpIHtcbiAgICAgIHMucHVzaChwb3AocykgKyBcInNjYWxlKFwiICsgeGIgKyBcIixcIiArIHliICsgXCIpXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihhLCBiKSB7XG4gICAgdmFyIHMgPSBbXSwgLy8gc3RyaW5nIGNvbnN0YW50cyBhbmQgcGxhY2Vob2xkZXJzXG4gICAgICAgIHEgPSBbXTsgLy8gbnVtYmVyIGludGVycG9sYXRvcnNcbiAgICBhID0gcGFyc2UoYSksIGIgPSBwYXJzZShiKTtcbiAgICB0cmFuc2xhdGUoYS50cmFuc2xhdGVYLCBhLnRyYW5zbGF0ZVksIGIudHJhbnNsYXRlWCwgYi50cmFuc2xhdGVZLCBzLCBxKTtcbiAgICByb3RhdGUoYS5yb3RhdGUsIGIucm90YXRlLCBzLCBxKTtcbiAgICBza2V3WChhLnNrZXdYLCBiLnNrZXdYLCBzLCBxKTtcbiAgICBzY2FsZShhLnNjYWxlWCwgYS5zY2FsZVksIGIuc2NhbGVYLCBiLnNjYWxlWSwgcywgcSk7XG4gICAgYSA9IGIgPSBudWxsOyAvLyBnY1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgaSA9IC0xLCBuID0gcS5sZW5ndGgsIG87XG4gICAgICB3aGlsZSAoKytpIDwgbikgc1sobyA9IHFbaV0pLmldID0gby54KHQpO1xuICAgICAgcmV0dXJuIHMuam9pbihcIlwiKTtcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgdmFyIGludGVycG9sYXRlVHJhbnNmb3JtQ3NzID0gaW50ZXJwb2xhdGVUcmFuc2Zvcm0ocGFyc2VDc3MsIFwicHgsIFwiLCBcInB4KVwiLCBcImRlZylcIik7XG5leHBvcnQgdmFyIGludGVycG9sYXRlVHJhbnNmb3JtU3ZnID0gaW50ZXJwb2xhdGVUcmFuc2Zvcm0ocGFyc2VTdmcsIFwiLCBcIiwgXCIpXCIsIFwiKVwiKTtcbiIsImltcG9ydCBkZWNvbXBvc2UsIHtpZGVudGl0eX0gZnJvbSBcIi4vZGVjb21wb3NlXCI7XG5cbnZhciBjc3NOb2RlLFxuICAgIGNzc1Jvb3QsXG4gICAgY3NzVmlldyxcbiAgICBzdmdOb2RlO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDc3ModmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBcIm5vbmVcIikgcmV0dXJuIGlkZW50aXR5O1xuICBpZiAoIWNzc05vZGUpIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpLCBjc3NSb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBjc3NWaWV3ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gIGNzc05vZGUuc3R5bGUudHJhbnNmb3JtID0gdmFsdWU7XG4gIHZhbHVlID0gY3NzVmlldy5nZXRDb21wdXRlZFN0eWxlKGNzc1Jvb3QuYXBwZW5kQ2hpbGQoY3NzTm9kZSksIG51bGwpLmdldFByb3BlcnR5VmFsdWUoXCJ0cmFuc2Zvcm1cIik7XG4gIGNzc1Jvb3QucmVtb3ZlQ2hpbGQoY3NzTm9kZSk7XG4gIHZhbHVlID0gdmFsdWUuc2xpY2UoNywgLTEpLnNwbGl0KFwiLFwiKTtcbiAgcmV0dXJuIGRlY29tcG9zZSgrdmFsdWVbMF0sICt2YWx1ZVsxXSwgK3ZhbHVlWzJdLCArdmFsdWVbM10sICt2YWx1ZVs0XSwgK3ZhbHVlWzVdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU3ZnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gaWRlbnRpdHk7XG4gIGlmICghc3ZnTm9kZSkgc3ZnTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiZ1wiKTtcbiAgc3ZnTm9kZS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgdmFsdWUpO1xuICBpZiAoISh2YWx1ZSA9IHN2Z05vZGUudHJhbnNmb3JtLmJhc2VWYWwuY29uc29saWRhdGUoKSkpIHJldHVybiBpZGVudGl0eTtcbiAgdmFsdWUgPSB2YWx1ZS5tYXRyaXg7XG4gIHJldHVybiBkZWNvbXBvc2UodmFsdWUuYSwgdmFsdWUuYiwgdmFsdWUuYywgdmFsdWUuZCwgdmFsdWUuZSwgdmFsdWUuZik7XG59XG4iLCJpbXBvcnQge2NvbG9yfSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCByZ2IgZnJvbSBcIi4vcmdiXCI7XG5pbXBvcnQgYXJyYXkgZnJvbSBcIi4vYXJyYXlcIjtcbmltcG9ydCBkYXRlIGZyb20gXCIuL2RhdGVcIjtcbmltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyXCI7XG5pbXBvcnQgb2JqZWN0IGZyb20gXCIuL29iamVjdFwiO1xuaW1wb3J0IHN0cmluZyBmcm9tIFwiLi9zdHJpbmdcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciB0ID0gdHlwZW9mIGIsIGM7XG4gIHJldHVybiBiID09IG51bGwgfHwgdCA9PT0gXCJib29sZWFuXCIgPyBjb25zdGFudChiKVxuICAgICAgOiAodCA9PT0gXCJudW1iZXJcIiA/IG51bWJlclxuICAgICAgOiB0ID09PSBcInN0cmluZ1wiID8gKChjID0gY29sb3IoYikpID8gKGIgPSBjLCByZ2IpIDogc3RyaW5nKVxuICAgICAgOiBiIGluc3RhbmNlb2YgY29sb3IgPyByZ2JcbiAgICAgIDogYiBpbnN0YW5jZW9mIERhdGUgPyBkYXRlXG4gICAgICA6IEFycmF5LmlzQXJyYXkoYikgPyBhcnJheVxuICAgICAgOiB0eXBlb2YgYi52YWx1ZU9mICE9PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIGIudG9TdHJpbmcgIT09IFwiZnVuY3Rpb25cIiB8fCBpc05hTihiKSA/IG9iamVjdFxuICAgICAgOiBudW1iZXIpKGEsIGIpO1xufVxuIiwidmFyIHJobyA9IE1hdGguU1FSVDIsXG4gICAgcmhvMiA9IDIsXG4gICAgcmhvNCA9IDQsXG4gICAgZXBzaWxvbjIgPSAxZS0xMjtcblxuZnVuY3Rpb24gY29zaCh4KSB7XG4gIHJldHVybiAoKHggPSBNYXRoLmV4cCh4KSkgKyAxIC8geCkgLyAyO1xufVxuXG5mdW5jdGlvbiBzaW5oKHgpIHtcbiAgcmV0dXJuICgoeCA9IE1hdGguZXhwKHgpKSAtIDEgLyB4KSAvIDI7XG59XG5cbmZ1bmN0aW9uIHRhbmgoeCkge1xuICByZXR1cm4gKCh4ID0gTWF0aC5leHAoMiAqIHgpKSAtIDEpIC8gKHggKyAxKTtcbn1cblxuLy8gcDAgPSBbdXgwLCB1eTAsIHcwXVxuLy8gcDEgPSBbdXgxLCB1eTEsIHcxXVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocDAsIHAxKSB7XG4gIHZhciB1eDAgPSBwMFswXSwgdXkwID0gcDBbMV0sIHcwID0gcDBbMl0sXG4gICAgICB1eDEgPSBwMVswXSwgdXkxID0gcDFbMV0sIHcxID0gcDFbMl0sXG4gICAgICBkeCA9IHV4MSAtIHV4MCxcbiAgICAgIGR5ID0gdXkxIC0gdXkwLFxuICAgICAgZDIgPSBkeCAqIGR4ICsgZHkgKiBkeSxcbiAgICAgIGksXG4gICAgICBTO1xuXG4gIC8vIFNwZWNpYWwgY2FzZSBmb3IgdTAg4omFIHUxLlxuICBpZiAoZDIgPCBlcHNpbG9uMikge1xuICAgIFMgPSBNYXRoLmxvZyh3MSAvIHcwKSAvIHJobztcbiAgICBpID0gZnVuY3Rpb24odCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgdXgwICsgdCAqIGR4LFxuICAgICAgICB1eTAgKyB0ICogZHksXG4gICAgICAgIHcwICogTWF0aC5leHAocmhvICogdCAqIFMpXG4gICAgICBdO1xuICAgIH1cbiAgfVxuXG4gIC8vIEdlbmVyYWwgY2FzZS5cbiAgZWxzZSB7XG4gICAgdmFyIGQxID0gTWF0aC5zcXJ0KGQyKSxcbiAgICAgICAgYjAgPSAodzEgKiB3MSAtIHcwICogdzAgKyByaG80ICogZDIpIC8gKDIgKiB3MCAqIHJobzIgKiBkMSksXG4gICAgICAgIGIxID0gKHcxICogdzEgLSB3MCAqIHcwIC0gcmhvNCAqIGQyKSAvICgyICogdzEgKiByaG8yICogZDEpLFxuICAgICAgICByMCA9IE1hdGgubG9nKE1hdGguc3FydChiMCAqIGIwICsgMSkgLSBiMCksXG4gICAgICAgIHIxID0gTWF0aC5sb2coTWF0aC5zcXJ0KGIxICogYjEgKyAxKSAtIGIxKTtcbiAgICBTID0gKHIxIC0gcjApIC8gcmhvO1xuICAgIGkgPSBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgcyA9IHQgKiBTLFxuICAgICAgICAgIGNvc2hyMCA9IGNvc2gocjApLFxuICAgICAgICAgIHUgPSB3MCAvIChyaG8yICogZDEpICogKGNvc2hyMCAqIHRhbmgocmhvICogcyArIHIwKSAtIHNpbmgocjApKTtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHV4MCArIHUgKiBkeCxcbiAgICAgICAgdXkwICsgdSAqIGR5LFxuICAgICAgICB3MCAqIGNvc2hyMCAvIGNvc2gocmhvICogcyArIHIwKVxuICAgICAgXTtcbiAgICB9XG4gIH1cblxuICBpLmR1cmF0aW9uID0gUyAqIDEwMDA7XG5cbiAgcmV0dXJuIGk7XG59XG4iLCJpbXBvcnQge3JhbmdlIGFzIHNlcXVlbmNlfSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCB7aW5pdFJhbmdlfSBmcm9tIFwiLi9pbml0XCI7XG5pbXBvcnQgb3JkaW5hbCBmcm9tIFwiLi9vcmRpbmFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJhbmQoKSB7XG4gIHZhciBzY2FsZSA9IG9yZGluYWwoKS51bmtub3duKHVuZGVmaW5lZCksXG4gICAgICBkb21haW4gPSBzY2FsZS5kb21haW4sXG4gICAgICBvcmRpbmFsUmFuZ2UgPSBzY2FsZS5yYW5nZSxcbiAgICAgIHIwID0gMCxcbiAgICAgIHIxID0gMSxcbiAgICAgIHN0ZXAsXG4gICAgICBiYW5kd2lkdGgsXG4gICAgICByb3VuZCA9IGZhbHNlLFxuICAgICAgcGFkZGluZ0lubmVyID0gMCxcbiAgICAgIHBhZGRpbmdPdXRlciA9IDAsXG4gICAgICBhbGlnbiA9IDAuNTtcblxuICBkZWxldGUgc2NhbGUudW5rbm93bjtcblxuICBmdW5jdGlvbiByZXNjYWxlKCkge1xuICAgIHZhciBuID0gZG9tYWluKCkubGVuZ3RoLFxuICAgICAgICByZXZlcnNlID0gcjEgPCByMCxcbiAgICAgICAgc3RhcnQgPSByZXZlcnNlID8gcjEgOiByMCxcbiAgICAgICAgc3RvcCA9IHJldmVyc2UgPyByMCA6IHIxO1xuICAgIHN0ZXAgPSAoc3RvcCAtIHN0YXJ0KSAvIE1hdGgubWF4KDEsIG4gLSBwYWRkaW5nSW5uZXIgKyBwYWRkaW5nT3V0ZXIgKiAyKTtcbiAgICBpZiAocm91bmQpIHN0ZXAgPSBNYXRoLmZsb29yKHN0ZXApO1xuICAgIHN0YXJ0ICs9IChzdG9wIC0gc3RhcnQgLSBzdGVwICogKG4gLSBwYWRkaW5nSW5uZXIpKSAqIGFsaWduO1xuICAgIGJhbmR3aWR0aCA9IHN0ZXAgKiAoMSAtIHBhZGRpbmdJbm5lcik7XG4gICAgaWYgKHJvdW5kKSBzdGFydCA9IE1hdGgucm91bmQoc3RhcnQpLCBiYW5kd2lkdGggPSBNYXRoLnJvdW5kKGJhbmR3aWR0aCk7XG4gICAgdmFyIHZhbHVlcyA9IHNlcXVlbmNlKG4pLm1hcChmdW5jdGlvbihpKSB7IHJldHVybiBzdGFydCArIHN0ZXAgKiBpOyB9KTtcbiAgICByZXR1cm4gb3JkaW5hbFJhbmdlKHJldmVyc2UgPyB2YWx1ZXMucmV2ZXJzZSgpIDogdmFsdWVzKTtcbiAgfVxuXG4gIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkb21haW4oXyksIHJlc2NhbGUoKSkgOiBkb21haW4oKTtcbiAgfTtcblxuICBzY2FsZS5yYW5nZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChbcjAsIHIxXSA9IF8sIHIwID0gK3IwLCByMSA9ICtyMSwgcmVzY2FsZSgpKSA6IFtyMCwgcjFdO1xuICB9O1xuXG4gIHNjYWxlLnJhbmdlUm91bmQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIFtyMCwgcjFdID0gXywgcjAgPSArcjAsIHIxID0gK3IxLCByb3VuZCA9IHRydWUsIHJlc2NhbGUoKTtcbiAgfTtcblxuICBzY2FsZS5iYW5kd2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYmFuZHdpZHRoO1xuICB9O1xuXG4gIHNjYWxlLnN0ZXAgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gc3RlcDtcbiAgfTtcblxuICBzY2FsZS5yb3VuZCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChyb3VuZCA9ICEhXywgcmVzY2FsZSgpKSA6IHJvdW5kO1xuICB9O1xuXG4gIHNjYWxlLnBhZGRpbmcgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocGFkZGluZ0lubmVyID0gTWF0aC5taW4oMSwgcGFkZGluZ091dGVyID0gK18pLCByZXNjYWxlKCkpIDogcGFkZGluZ0lubmVyO1xuICB9O1xuXG4gIHNjYWxlLnBhZGRpbmdJbm5lciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChwYWRkaW5nSW5uZXIgPSBNYXRoLm1pbigxLCBfKSwgcmVzY2FsZSgpKSA6IHBhZGRpbmdJbm5lcjtcbiAgfTtcblxuICBzY2FsZS5wYWRkaW5nT3V0ZXIgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocGFkZGluZ091dGVyID0gK18sIHJlc2NhbGUoKSkgOiBwYWRkaW5nT3V0ZXI7XG4gIH07XG5cbiAgc2NhbGUuYWxpZ24gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoYWxpZ24gPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBfKSksIHJlc2NhbGUoKSkgOiBhbGlnbjtcbiAgfTtcblxuICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGJhbmQoZG9tYWluKCksIFtyMCwgcjFdKVxuICAgICAgICAucm91bmQocm91bmQpXG4gICAgICAgIC5wYWRkaW5nSW5uZXIocGFkZGluZ0lubmVyKVxuICAgICAgICAucGFkZGluZ091dGVyKHBhZGRpbmdPdXRlcilcbiAgICAgICAgLmFsaWduKGFsaWduKTtcbiAgfTtcblxuICByZXR1cm4gaW5pdFJhbmdlLmFwcGx5KHJlc2NhbGUoKSwgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gcG9pbnRpc2goc2NhbGUpIHtcbiAgdmFyIGNvcHkgPSBzY2FsZS5jb3B5O1xuXG4gIHNjYWxlLnBhZGRpbmcgPSBzY2FsZS5wYWRkaW5nT3V0ZXI7XG4gIGRlbGV0ZSBzY2FsZS5wYWRkaW5nSW5uZXI7XG4gIGRlbGV0ZSBzY2FsZS5wYWRkaW5nT3V0ZXI7XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBwb2ludGlzaChjb3B5KCkpO1xuICB9O1xuXG4gIHJldHVybiBzY2FsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50KCkge1xuICByZXR1cm4gcG9pbnRpc2goYmFuZC5hcHBseShudWxsLCBhcmd1bWVudHMpLnBhZGRpbmdJbm5lcigxKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cbiIsImltcG9ydCB7YmlzZWN0fSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCB7aW50ZXJwb2xhdGUgYXMgaW50ZXJwb2xhdGVWYWx1ZSwgaW50ZXJwb2xhdGVOdW1iZXIsIGludGVycG9sYXRlUm91bmR9IGZyb20gXCJkMy1pbnRlcnBvbGF0ZVwiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50XCI7XG5pbXBvcnQgbnVtYmVyIGZyb20gXCIuL251bWJlclwiO1xuXG52YXIgdW5pdCA9IFswLCAxXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KHgpIHtcbiAgcmV0dXJuIHg7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZShhLCBiKSB7XG4gIHJldHVybiAoYiAtPSAoYSA9ICthKSlcbiAgICAgID8gZnVuY3Rpb24oeCkgeyByZXR1cm4gKHggLSBhKSAvIGI7IH1cbiAgICAgIDogY29uc3RhbnQoaXNOYU4oYikgPyBOYU4gOiAwLjUpO1xufVxuXG5mdW5jdGlvbiBjbGFtcGVyKGRvbWFpbikge1xuICB2YXIgYSA9IGRvbWFpblswXSwgYiA9IGRvbWFpbltkb21haW4ubGVuZ3RoIC0gMV0sIHQ7XG4gIGlmIChhID4gYikgdCA9IGEsIGEgPSBiLCBiID0gdDtcbiAgcmV0dXJuIGZ1bmN0aW9uKHgpIHsgcmV0dXJuIE1hdGgubWF4KGEsIE1hdGgubWluKGIsIHgpKTsgfTtcbn1cblxuLy8gbm9ybWFsaXplKGEsIGIpKHgpIHRha2VzIGEgZG9tYWluIHZhbHVlIHggaW4gW2EsYl0gYW5kIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcGFyYW1ldGVyIHQgaW4gWzAsMV0uXG4vLyBpbnRlcnBvbGF0ZShhLCBiKSh0KSB0YWtlcyBhIHBhcmFtZXRlciB0IGluIFswLDFdIGFuZCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIHJhbmdlIHZhbHVlIHggaW4gW2EsYl0uXG5mdW5jdGlvbiBiaW1hcChkb21haW4sIHJhbmdlLCBpbnRlcnBvbGF0ZSkge1xuICB2YXIgZDAgPSBkb21haW5bMF0sIGQxID0gZG9tYWluWzFdLCByMCA9IHJhbmdlWzBdLCByMSA9IHJhbmdlWzFdO1xuICBpZiAoZDEgPCBkMCkgZDAgPSBub3JtYWxpemUoZDEsIGQwKSwgcjAgPSBpbnRlcnBvbGF0ZShyMSwgcjApO1xuICBlbHNlIGQwID0gbm9ybWFsaXplKGQwLCBkMSksIHIwID0gaW50ZXJwb2xhdGUocjAsIHIxKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKHgpIHsgcmV0dXJuIHIwKGQwKHgpKTsgfTtcbn1cblxuZnVuY3Rpb24gcG9seW1hcChkb21haW4sIHJhbmdlLCBpbnRlcnBvbGF0ZSkge1xuICB2YXIgaiA9IE1hdGgubWluKGRvbWFpbi5sZW5ndGgsIHJhbmdlLmxlbmd0aCkgLSAxLFxuICAgICAgZCA9IG5ldyBBcnJheShqKSxcbiAgICAgIHIgPSBuZXcgQXJyYXkoaiksXG4gICAgICBpID0gLTE7XG5cbiAgLy8gUmV2ZXJzZSBkZXNjZW5kaW5nIGRvbWFpbnMuXG4gIGlmIChkb21haW5bal0gPCBkb21haW5bMF0pIHtcbiAgICBkb21haW4gPSBkb21haW4uc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgcmFuZ2UgPSByYW5nZS5zbGljZSgpLnJldmVyc2UoKTtcbiAgfVxuXG4gIHdoaWxlICgrK2kgPCBqKSB7XG4gICAgZFtpXSA9IG5vcm1hbGl6ZShkb21haW5baV0sIGRvbWFpbltpICsgMV0pO1xuICAgIHJbaV0gPSBpbnRlcnBvbGF0ZShyYW5nZVtpXSwgcmFuZ2VbaSArIDFdKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbih4KSB7XG4gICAgdmFyIGkgPSBiaXNlY3QoZG9tYWluLCB4LCAxLCBqKSAtIDE7XG4gICAgcmV0dXJuIHJbaV0oZFtpXSh4KSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KHNvdXJjZSwgdGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXRcbiAgICAgIC5kb21haW4oc291cmNlLmRvbWFpbigpKVxuICAgICAgLnJhbmdlKHNvdXJjZS5yYW5nZSgpKVxuICAgICAgLmludGVycG9sYXRlKHNvdXJjZS5pbnRlcnBvbGF0ZSgpKVxuICAgICAgLmNsYW1wKHNvdXJjZS5jbGFtcCgpKVxuICAgICAgLnVua25vd24oc291cmNlLnVua25vd24oKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1lcigpIHtcbiAgdmFyIGRvbWFpbiA9IHVuaXQsXG4gICAgICByYW5nZSA9IHVuaXQsXG4gICAgICBpbnRlcnBvbGF0ZSA9IGludGVycG9sYXRlVmFsdWUsXG4gICAgICB0cmFuc2Zvcm0sXG4gICAgICB1bnRyYW5zZm9ybSxcbiAgICAgIHVua25vd24sXG4gICAgICBjbGFtcCA9IGlkZW50aXR5LFxuICAgICAgcGllY2V3aXNlLFxuICAgICAgb3V0cHV0LFxuICAgICAgaW5wdXQ7XG5cbiAgZnVuY3Rpb24gcmVzY2FsZSgpIHtcbiAgICBwaWVjZXdpc2UgPSBNYXRoLm1pbihkb21haW4ubGVuZ3RoLCByYW5nZS5sZW5ndGgpID4gMiA/IHBvbHltYXAgOiBiaW1hcDtcbiAgICBvdXRwdXQgPSBpbnB1dCA9IG51bGw7XG4gICAgcmV0dXJuIHNjYWxlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2NhbGUoeCkge1xuICAgIHJldHVybiBpc05hTih4ID0gK3gpID8gdW5rbm93biA6IChvdXRwdXQgfHwgKG91dHB1dCA9IHBpZWNld2lzZShkb21haW4ubWFwKHRyYW5zZm9ybSksIHJhbmdlLCBpbnRlcnBvbGF0ZSkpKSh0cmFuc2Zvcm0oY2xhbXAoeCkpKTtcbiAgfVxuXG4gIHNjYWxlLmludmVydCA9IGZ1bmN0aW9uKHkpIHtcbiAgICByZXR1cm4gY2xhbXAodW50cmFuc2Zvcm0oKGlucHV0IHx8IChpbnB1dCA9IHBpZWNld2lzZShyYW5nZSwgZG9tYWluLm1hcCh0cmFuc2Zvcm0pLCBpbnRlcnBvbGF0ZU51bWJlcikpKSh5KSkpO1xuICB9O1xuXG4gIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkb21haW4gPSBBcnJheS5mcm9tKF8sIG51bWJlciksIGNsYW1wID09PSBpZGVudGl0eSB8fCAoY2xhbXAgPSBjbGFtcGVyKGRvbWFpbikpLCByZXNjYWxlKCkpIDogZG9tYWluLnNsaWNlKCk7XG4gIH07XG5cbiAgc2NhbGUucmFuZ2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocmFuZ2UgPSBBcnJheS5mcm9tKF8pLCByZXNjYWxlKCkpIDogcmFuZ2Uuc2xpY2UoKTtcbiAgfTtcblxuICBzY2FsZS5yYW5nZVJvdW5kID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiByYW5nZSA9IEFycmF5LmZyb20oXyksIGludGVycG9sYXRlID0gaW50ZXJwb2xhdGVSb3VuZCwgcmVzY2FsZSgpO1xuICB9O1xuXG4gIHNjYWxlLmNsYW1wID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGNsYW1wID0gXyA/IGNsYW1wZXIoZG9tYWluKSA6IGlkZW50aXR5LCBzY2FsZSkgOiBjbGFtcCAhPT0gaWRlbnRpdHk7XG4gIH07XG5cbiAgc2NhbGUuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaW50ZXJwb2xhdGUgPSBfLCByZXNjYWxlKCkpIDogaW50ZXJwb2xhdGU7XG4gIH07XG5cbiAgc2NhbGUudW5rbm93biA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh1bmtub3duID0gXywgc2NhbGUpIDogdW5rbm93bjtcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24odCwgdSkge1xuICAgIHRyYW5zZm9ybSA9IHQsIHVudHJhbnNmb3JtID0gdTtcbiAgICByZXR1cm4gcmVzY2FsZSgpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250aW51b3VzKHRyYW5zZm9ybSwgdW50cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIHRyYW5zZm9ybWVyKCkodHJhbnNmb3JtLCB1bnRyYW5zZm9ybSk7XG59XG4iLCJpbXBvcnQge2lkZW50aXR5fSBmcm9tIFwiLi9jb250aW51b3VzXCI7XG5pbXBvcnQge2luaXRJbnRlcnBvbGF0b3J9IGZyb20gXCIuL2luaXRcIjtcbmltcG9ydCB7bGluZWFyaXNofSBmcm9tIFwiLi9saW5lYXJcIjtcbmltcG9ydCB7bG9nZ2lzaH0gZnJvbSBcIi4vbG9nXCI7XG5pbXBvcnQge2NvcHl9IGZyb20gXCIuL3NlcXVlbnRpYWxcIjtcbmltcG9ydCB7c3ltbG9naXNofSBmcm9tIFwiLi9zeW1sb2dcIjtcbmltcG9ydCB7cG93aXNofSBmcm9tIFwiLi9wb3dcIjtcblxuZnVuY3Rpb24gdHJhbnNmb3JtZXIoKSB7XG4gIHZhciB4MCA9IDAsXG4gICAgICB4MSA9IDAuNSxcbiAgICAgIHgyID0gMSxcbiAgICAgIHQwLFxuICAgICAgdDEsXG4gICAgICB0MixcbiAgICAgIGsxMCxcbiAgICAgIGsyMSxcbiAgICAgIGludGVycG9sYXRvciA9IGlkZW50aXR5LFxuICAgICAgdHJhbnNmb3JtLFxuICAgICAgY2xhbXAgPSBmYWxzZSxcbiAgICAgIHVua25vd247XG5cbiAgZnVuY3Rpb24gc2NhbGUoeCkge1xuICAgIHJldHVybiBpc05hTih4ID0gK3gpID8gdW5rbm93biA6ICh4ID0gMC41ICsgKCh4ID0gK3RyYW5zZm9ybSh4KSkgLSB0MSkgKiAoeCA8IHQxID8gazEwIDogazIxKSwgaW50ZXJwb2xhdG9yKGNsYW1wID8gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgeCkpIDogeCkpO1xuICB9XG5cbiAgc2NhbGUuZG9tYWluID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKFt4MCwgeDEsIHgyXSA9IF8sIHQwID0gdHJhbnNmb3JtKHgwID0gK3gwKSwgdDEgPSB0cmFuc2Zvcm0oeDEgPSAreDEpLCB0MiA9IHRyYW5zZm9ybSh4MiA9ICt4MiksIGsxMCA9IHQwID09PSB0MSA/IDAgOiAwLjUgLyAodDEgLSB0MCksIGsyMSA9IHQxID09PSB0MiA/IDAgOiAwLjUgLyAodDIgLSB0MSksIHNjYWxlKSA6IFt4MCwgeDEsIHgyXTtcbiAgfTtcblxuICBzY2FsZS5jbGFtcCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChjbGFtcCA9ICEhXywgc2NhbGUpIDogY2xhbXA7XG4gIH07XG5cbiAgc2NhbGUuaW50ZXJwb2xhdG9yID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGludGVycG9sYXRvciA9IF8sIHNjYWxlKSA6IGludGVycG9sYXRvcjtcbiAgfTtcblxuICBzY2FsZS51bmtub3duID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHVua25vd24gPSBfLCBzY2FsZSkgOiB1bmtub3duO1xuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdHJhbnNmb3JtID0gdCwgdDAgPSB0KHgwKSwgdDEgPSB0KHgxKSwgdDIgPSB0KHgyKSwgazEwID0gdDAgPT09IHQxID8gMCA6IDAuNSAvICh0MSAtIHQwKSwgazIxID0gdDEgPT09IHQyID8gMCA6IDAuNSAvICh0MiAtIHQxKTtcbiAgICByZXR1cm4gc2NhbGU7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpdmVyZ2luZygpIHtcbiAgdmFyIHNjYWxlID0gbGluZWFyaXNoKHRyYW5zZm9ybWVyKCkoaWRlbnRpdHkpKTtcblxuICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNvcHkoc2NhbGUsIGRpdmVyZ2luZygpKTtcbiAgfTtcblxuICByZXR1cm4gaW5pdEludGVycG9sYXRvci5hcHBseShzY2FsZSwgYXJndW1lbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdmVyZ2luZ0xvZygpIHtcbiAgdmFyIHNjYWxlID0gbG9nZ2lzaCh0cmFuc2Zvcm1lcigpKS5kb21haW4oWzAuMSwgMSwgMTBdKTtcblxuICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNvcHkoc2NhbGUsIGRpdmVyZ2luZ0xvZygpKS5iYXNlKHNjYWxlLmJhc2UoKSk7XG4gIH07XG5cbiAgcmV0dXJuIGluaXRJbnRlcnBvbGF0b3IuYXBwbHkoc2NhbGUsIGFyZ3VtZW50cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXZlcmdpbmdTeW1sb2coKSB7XG4gIHZhciBzY2FsZSA9IHN5bWxvZ2lzaCh0cmFuc2Zvcm1lcigpKTtcblxuICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNvcHkoc2NhbGUsIGRpdmVyZ2luZ1N5bWxvZygpKS5jb25zdGFudChzY2FsZS5jb25zdGFudCgpKTtcbiAgfTtcblxuICByZXR1cm4gaW5pdEludGVycG9sYXRvci5hcHBseShzY2FsZSwgYXJndW1lbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdmVyZ2luZ1BvdygpIHtcbiAgdmFyIHNjYWxlID0gcG93aXNoKHRyYW5zZm9ybWVyKCkpO1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY29weShzY2FsZSwgZGl2ZXJnaW5nUG93KCkpLmV4cG9uZW50KHNjYWxlLmV4cG9uZW50KCkpO1xuICB9O1xuXG4gIHJldHVybiBpbml0SW50ZXJwb2xhdG9yLmFwcGx5KHNjYWxlLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGl2ZXJnaW5nU3FydCgpIHtcbiAgcmV0dXJuIGRpdmVyZ2luZ1Bvdy5hcHBseShudWxsLCBhcmd1bWVudHMpLmV4cG9uZW50KDAuNSk7XG59XG4iLCJpbXBvcnQge2xpbmVhcmlzaH0gZnJvbSBcIi4vbGluZWFyXCI7XG5pbXBvcnQgbnVtYmVyIGZyb20gXCIuL251bWJlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpZGVudGl0eShkb21haW4pIHtcbiAgdmFyIHVua25vd247XG5cbiAgZnVuY3Rpb24gc2NhbGUoeCkge1xuICAgIHJldHVybiBpc05hTih4ID0gK3gpID8gdW5rbm93biA6IHg7XG4gIH1cblxuICBzY2FsZS5pbnZlcnQgPSBzY2FsZTtcblxuICBzY2FsZS5kb21haW4gPSBzY2FsZS5yYW5nZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkb21haW4gPSBBcnJheS5mcm9tKF8sIG51bWJlciksIHNjYWxlKSA6IGRvbWFpbi5zbGljZSgpO1xuICB9O1xuXG4gIHNjYWxlLnVua25vd24gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodW5rbm93biA9IF8sIHNjYWxlKSA6IHVua25vd247XG4gIH07XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBpZGVudGl0eShkb21haW4pLnVua25vd24odW5rbm93bik7XG4gIH07XG5cbiAgZG9tYWluID0gYXJndW1lbnRzLmxlbmd0aCA/IEFycmF5LmZyb20oZG9tYWluLCBudW1iZXIpIDogWzAsIDFdO1xuXG4gIHJldHVybiBsaW5lYXJpc2goc2NhbGUpO1xufVxuIiwiZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZUJhbmQsXG4gIHBvaW50IGFzIHNjYWxlUG9pbnRcbn0gZnJvbSBcIi4vYmFuZFwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHNjYWxlSWRlbnRpdHlcbn0gZnJvbSBcIi4vaWRlbnRpdHlcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZUxpbmVhclxufSBmcm9tIFwiLi9saW5lYXJcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZUxvZ1xufSBmcm9tIFwiLi9sb2dcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZVN5bWxvZ1xufSBmcm9tIFwiLi9zeW1sb2dcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZU9yZGluYWwsXG4gIGltcGxpY2l0IGFzIHNjYWxlSW1wbGljaXRcbn0gZnJvbSBcIi4vb3JkaW5hbFwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHNjYWxlUG93LFxuICBzcXJ0IGFzIHNjYWxlU3FydFxufSBmcm9tIFwiLi9wb3dcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZVF1YW50aWxlXG59IGZyb20gXCIuL3F1YW50aWxlXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgc2NhbGVRdWFudGl6ZVxufSBmcm9tIFwiLi9xdWFudGl6ZVwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHNjYWxlVGhyZXNob2xkXG59IGZyb20gXCIuL3RocmVzaG9sZFwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHNjYWxlVGltZVxufSBmcm9tIFwiLi90aW1lXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgc2NhbGVVdGNcbn0gZnJvbSBcIi4vdXRjVGltZVwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHNjYWxlU2VxdWVudGlhbCxcbiAgc2VxdWVudGlhbExvZyBhcyBzY2FsZVNlcXVlbnRpYWxMb2csXG4gIHNlcXVlbnRpYWxQb3cgYXMgc2NhbGVTZXF1ZW50aWFsUG93LFxuICBzZXF1ZW50aWFsU3FydCBhcyBzY2FsZVNlcXVlbnRpYWxTcXJ0LFxuICBzZXF1ZW50aWFsU3ltbG9nIGFzIHNjYWxlU2VxdWVudGlhbFN5bWxvZ1xufSBmcm9tIFwiLi9zZXF1ZW50aWFsXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgc2NhbGVTZXF1ZW50aWFsUXVhbnRpbGVcbn0gZnJvbSBcIi4vc2VxdWVudGlhbFF1YW50aWxlXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgc2NhbGVEaXZlcmdpbmcsXG4gIGRpdmVyZ2luZ0xvZyBhcyBzY2FsZURpdmVyZ2luZ0xvZyxcbiAgZGl2ZXJnaW5nUG93IGFzIHNjYWxlRGl2ZXJnaW5nUG93LFxuICBkaXZlcmdpbmdTcXJ0IGFzIHNjYWxlRGl2ZXJnaW5nU3FydCxcbiAgZGl2ZXJnaW5nU3ltbG9nIGFzIHNjYWxlRGl2ZXJnaW5nU3ltbG9nXG59IGZyb20gXCIuL2RpdmVyZ2luZ1wiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHRpY2tGb3JtYXRcbn0gZnJvbSBcIi4vdGlja0Zvcm1hdFwiO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGluaXRSYW5nZShkb21haW4sIHJhbmdlKSB7XG4gIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogYnJlYWs7XG4gICAgY2FzZSAxOiB0aGlzLnJhbmdlKGRvbWFpbik7IGJyZWFrO1xuICAgIGRlZmF1bHQ6IHRoaXMucmFuZ2UocmFuZ2UpLmRvbWFpbihkb21haW4pOyBicmVhaztcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRJbnRlcnBvbGF0b3IoZG9tYWluLCBpbnRlcnBvbGF0b3IpIHtcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiBicmVhaztcbiAgICBjYXNlIDE6IHRoaXMuaW50ZXJwb2xhdG9yKGRvbWFpbik7IGJyZWFrO1xuICAgIGRlZmF1bHQ6IHRoaXMuaW50ZXJwb2xhdG9yKGludGVycG9sYXRvcikuZG9tYWluKGRvbWFpbik7IGJyZWFrO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuIiwiaW1wb3J0IHt0aWNrcywgdGlja0luY3JlbWVudH0gZnJvbSBcImQzLWFycmF5XCI7XG5pbXBvcnQgY29udGludW91cywge2NvcHksIGlkZW50aXR5fSBmcm9tIFwiLi9jb250aW51b3VzXCI7XG5pbXBvcnQge2luaXRSYW5nZX0gZnJvbSBcIi4vaW5pdFwiO1xuaW1wb3J0IHRpY2tGb3JtYXQgZnJvbSBcIi4vdGlja0Zvcm1hdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGluZWFyaXNoKHNjYWxlKSB7XG4gIHZhciBkb21haW4gPSBzY2FsZS5kb21haW47XG5cbiAgc2NhbGUudGlja3MgPSBmdW5jdGlvbihjb3VudCkge1xuICAgIHZhciBkID0gZG9tYWluKCk7XG4gICAgcmV0dXJuIHRpY2tzKGRbMF0sIGRbZC5sZW5ndGggLSAxXSwgY291bnQgPT0gbnVsbCA/IDEwIDogY291bnQpO1xuICB9O1xuXG4gIHNjYWxlLnRpY2tGb3JtYXQgPSBmdW5jdGlvbihjb3VudCwgc3BlY2lmaWVyKSB7XG4gICAgdmFyIGQgPSBkb21haW4oKTtcbiAgICByZXR1cm4gdGlja0Zvcm1hdChkWzBdLCBkW2QubGVuZ3RoIC0gMV0sIGNvdW50ID09IG51bGwgPyAxMCA6IGNvdW50LCBzcGVjaWZpZXIpO1xuICB9O1xuXG4gIHNjYWxlLm5pY2UgPSBmdW5jdGlvbihjb3VudCkge1xuICAgIGlmIChjb3VudCA9PSBudWxsKSBjb3VudCA9IDEwO1xuXG4gICAgdmFyIGQgPSBkb21haW4oKSxcbiAgICAgICAgaTAgPSAwLFxuICAgICAgICBpMSA9IGQubGVuZ3RoIC0gMSxcbiAgICAgICAgc3RhcnQgPSBkW2kwXSxcbiAgICAgICAgc3RvcCA9IGRbaTFdLFxuICAgICAgICBzdGVwO1xuXG4gICAgaWYgKHN0b3AgPCBzdGFydCkge1xuICAgICAgc3RlcCA9IHN0YXJ0LCBzdGFydCA9IHN0b3AsIHN0b3AgPSBzdGVwO1xuICAgICAgc3RlcCA9IGkwLCBpMCA9IGkxLCBpMSA9IHN0ZXA7XG4gICAgfVxuXG4gICAgc3RlcCA9IHRpY2tJbmNyZW1lbnQoc3RhcnQsIHN0b3AsIGNvdW50KTtcblxuICAgIGlmIChzdGVwID4gMCkge1xuICAgICAgc3RhcnQgPSBNYXRoLmZsb29yKHN0YXJ0IC8gc3RlcCkgKiBzdGVwO1xuICAgICAgc3RvcCA9IE1hdGguY2VpbChzdG9wIC8gc3RlcCkgKiBzdGVwO1xuICAgICAgc3RlcCA9IHRpY2tJbmNyZW1lbnQoc3RhcnQsIHN0b3AsIGNvdW50KTtcbiAgICB9IGVsc2UgaWYgKHN0ZXAgPCAwKSB7XG4gICAgICBzdGFydCA9IE1hdGguY2VpbChzdGFydCAqIHN0ZXApIC8gc3RlcDtcbiAgICAgIHN0b3AgPSBNYXRoLmZsb29yKHN0b3AgKiBzdGVwKSAvIHN0ZXA7XG4gICAgICBzdGVwID0gdGlja0luY3JlbWVudChzdGFydCwgc3RvcCwgY291bnQpO1xuICAgIH1cblxuICAgIGlmIChzdGVwID4gMCkge1xuICAgICAgZFtpMF0gPSBNYXRoLmZsb29yKHN0YXJ0IC8gc3RlcCkgKiBzdGVwO1xuICAgICAgZFtpMV0gPSBNYXRoLmNlaWwoc3RvcCAvIHN0ZXApICogc3RlcDtcbiAgICAgIGRvbWFpbihkKTtcbiAgICB9IGVsc2UgaWYgKHN0ZXAgPCAwKSB7XG4gICAgICBkW2kwXSA9IE1hdGguY2VpbChzdGFydCAqIHN0ZXApIC8gc3RlcDtcbiAgICAgIGRbaTFdID0gTWF0aC5mbG9vcihzdG9wICogc3RlcCkgLyBzdGVwO1xuICAgICAgZG9tYWluKGQpO1xuICAgIH1cblxuICAgIHJldHVybiBzY2FsZTtcbiAgfTtcblxuICByZXR1cm4gc2NhbGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpbmVhcigpIHtcbiAgdmFyIHNjYWxlID0gY29udGludW91cyhpZGVudGl0eSwgaWRlbnRpdHkpO1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY29weShzY2FsZSwgbGluZWFyKCkpO1xuICB9O1xuXG4gIGluaXRSYW5nZS5hcHBseShzY2FsZSwgYXJndW1lbnRzKTtcblxuICByZXR1cm4gbGluZWFyaXNoKHNjYWxlKTtcbn1cbiIsImltcG9ydCB7dGlja3N9IGZyb20gXCJkMy1hcnJheVwiO1xuaW1wb3J0IHtmb3JtYXR9IGZyb20gXCJkMy1mb3JtYXRcIjtcbmltcG9ydCBuaWNlIGZyb20gXCIuL25pY2VcIjtcbmltcG9ydCB7Y29weSwgdHJhbnNmb3JtZXJ9IGZyb20gXCIuL2NvbnRpbnVvdXNcIjtcbmltcG9ydCB7aW5pdFJhbmdlfSBmcm9tIFwiLi9pbml0XCI7XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUxvZyh4KSB7XG4gIHJldHVybiBNYXRoLmxvZyh4KTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtRXhwKHgpIHtcbiAgcmV0dXJuIE1hdGguZXhwKHgpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Mb2duKHgpIHtcbiAgcmV0dXJuIC1NYXRoLmxvZygteCk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUV4cG4oeCkge1xuICByZXR1cm4gLU1hdGguZXhwKC14KTtcbn1cblxuZnVuY3Rpb24gcG93MTAoeCkge1xuICByZXR1cm4gaXNGaW5pdGUoeCkgPyArKFwiMWVcIiArIHgpIDogeCA8IDAgPyAwIDogeDtcbn1cblxuZnVuY3Rpb24gcG93cChiYXNlKSB7XG4gIHJldHVybiBiYXNlID09PSAxMCA/IHBvdzEwXG4gICAgICA6IGJhc2UgPT09IE1hdGguRSA/IE1hdGguZXhwXG4gICAgICA6IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIE1hdGgucG93KGJhc2UsIHgpOyB9O1xufVxuXG5mdW5jdGlvbiBsb2dwKGJhc2UpIHtcbiAgcmV0dXJuIGJhc2UgPT09IE1hdGguRSA/IE1hdGgubG9nXG4gICAgICA6IGJhc2UgPT09IDEwICYmIE1hdGgubG9nMTBcbiAgICAgIHx8IGJhc2UgPT09IDIgJiYgTWF0aC5sb2cyXG4gICAgICB8fCAoYmFzZSA9IE1hdGgubG9nKGJhc2UpLCBmdW5jdGlvbih4KSB7IHJldHVybiBNYXRoLmxvZyh4KSAvIGJhc2U7IH0pO1xufVxuXG5mdW5jdGlvbiByZWZsZWN0KGYpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4gLWYoLXgpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nZ2lzaCh0cmFuc2Zvcm0pIHtcbiAgdmFyIHNjYWxlID0gdHJhbnNmb3JtKHRyYW5zZm9ybUxvZywgdHJhbnNmb3JtRXhwKSxcbiAgICAgIGRvbWFpbiA9IHNjYWxlLmRvbWFpbixcbiAgICAgIGJhc2UgPSAxMCxcbiAgICAgIGxvZ3MsXG4gICAgICBwb3dzO1xuXG4gIGZ1bmN0aW9uIHJlc2NhbGUoKSB7XG4gICAgbG9ncyA9IGxvZ3AoYmFzZSksIHBvd3MgPSBwb3dwKGJhc2UpO1xuICAgIGlmIChkb21haW4oKVswXSA8IDApIHtcbiAgICAgIGxvZ3MgPSByZWZsZWN0KGxvZ3MpLCBwb3dzID0gcmVmbGVjdChwb3dzKTtcbiAgICAgIHRyYW5zZm9ybSh0cmFuc2Zvcm1Mb2duLCB0cmFuc2Zvcm1FeHBuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmb3JtKHRyYW5zZm9ybUxvZywgdHJhbnNmb3JtRXhwKTtcbiAgICB9XG4gICAgcmV0dXJuIHNjYWxlO1xuICB9XG5cbiAgc2NhbGUuYmFzZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChiYXNlID0gK18sIHJlc2NhbGUoKSkgOiBiYXNlO1xuICB9O1xuXG4gIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkb21haW4oXyksIHJlc2NhbGUoKSkgOiBkb21haW4oKTtcbiAgfTtcblxuICBzY2FsZS50aWNrcyA9IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgdmFyIGQgPSBkb21haW4oKSxcbiAgICAgICAgdSA9IGRbMF0sXG4gICAgICAgIHYgPSBkW2QubGVuZ3RoIC0gMV0sXG4gICAgICAgIHI7XG5cbiAgICBpZiAociA9IHYgPCB1KSBpID0gdSwgdSA9IHYsIHYgPSBpO1xuXG4gICAgdmFyIGkgPSBsb2dzKHUpLFxuICAgICAgICBqID0gbG9ncyh2KSxcbiAgICAgICAgcCxcbiAgICAgICAgayxcbiAgICAgICAgdCxcbiAgICAgICAgbiA9IGNvdW50ID09IG51bGwgPyAxMCA6ICtjb3VudCxcbiAgICAgICAgeiA9IFtdO1xuXG4gICAgaWYgKCEoYmFzZSAlIDEpICYmIGogLSBpIDwgbikge1xuICAgICAgaSA9IE1hdGgucm91bmQoaSkgLSAxLCBqID0gTWF0aC5yb3VuZChqKSArIDE7XG4gICAgICBpZiAodSA+IDApIGZvciAoOyBpIDwgajsgKytpKSB7XG4gICAgICAgIGZvciAoayA9IDEsIHAgPSBwb3dzKGkpOyBrIDwgYmFzZTsgKytrKSB7XG4gICAgICAgICAgdCA9IHAgKiBrO1xuICAgICAgICAgIGlmICh0IDwgdSkgY29udGludWU7XG4gICAgICAgICAgaWYgKHQgPiB2KSBicmVhaztcbiAgICAgICAgICB6LnB1c2godCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBmb3IgKDsgaSA8IGo7ICsraSkge1xuICAgICAgICBmb3IgKGsgPSBiYXNlIC0gMSwgcCA9IHBvd3MoaSk7IGsgPj0gMTsgLS1rKSB7XG4gICAgICAgICAgdCA9IHAgKiBrO1xuICAgICAgICAgIGlmICh0IDwgdSkgY29udGludWU7XG4gICAgICAgICAgaWYgKHQgPiB2KSBicmVhaztcbiAgICAgICAgICB6LnB1c2godCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgeiA9IHRpY2tzKGksIGosIE1hdGgubWluKGogLSBpLCBuKSkubWFwKHBvd3MpO1xuICAgIH1cblxuICAgIHJldHVybiByID8gei5yZXZlcnNlKCkgOiB6O1xuICB9O1xuXG4gIHNjYWxlLnRpY2tGb3JtYXQgPSBmdW5jdGlvbihjb3VudCwgc3BlY2lmaWVyKSB7XG4gICAgaWYgKHNwZWNpZmllciA9PSBudWxsKSBzcGVjaWZpZXIgPSBiYXNlID09PSAxMCA/IFwiLjBlXCIgOiBcIixcIjtcbiAgICBpZiAodHlwZW9mIHNwZWNpZmllciAhPT0gXCJmdW5jdGlvblwiKSBzcGVjaWZpZXIgPSBmb3JtYXQoc3BlY2lmaWVyKTtcbiAgICBpZiAoY291bnQgPT09IEluZmluaXR5KSByZXR1cm4gc3BlY2lmaWVyO1xuICAgIGlmIChjb3VudCA9PSBudWxsKSBjb3VudCA9IDEwO1xuICAgIHZhciBrID0gTWF0aC5tYXgoMSwgYmFzZSAqIGNvdW50IC8gc2NhbGUudGlja3MoKS5sZW5ndGgpOyAvLyBUT0RPIGZhc3QgZXN0aW1hdGU/XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHtcbiAgICAgIHZhciBpID0gZCAvIHBvd3MoTWF0aC5yb3VuZChsb2dzKGQpKSk7XG4gICAgICBpZiAoaSAqIGJhc2UgPCBiYXNlIC0gMC41KSBpICo9IGJhc2U7XG4gICAgICByZXR1cm4gaSA8PSBrID8gc3BlY2lmaWVyKGQpIDogXCJcIjtcbiAgICB9O1xuICB9O1xuXG4gIHNjYWxlLm5pY2UgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZG9tYWluKG5pY2UoZG9tYWluKCksIHtcbiAgICAgIGZsb29yOiBmdW5jdGlvbih4KSB7IHJldHVybiBwb3dzKE1hdGguZmxvb3IobG9ncyh4KSkpOyB9LFxuICAgICAgY2VpbDogZnVuY3Rpb24oeCkgeyByZXR1cm4gcG93cyhNYXRoLmNlaWwobG9ncyh4KSkpOyB9XG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBzY2FsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9nKCkge1xuICB2YXIgc2NhbGUgPSBsb2dnaXNoKHRyYW5zZm9ybWVyKCkpLmRvbWFpbihbMSwgMTBdKTtcblxuICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNvcHkoc2NhbGUsIGxvZygpKS5iYXNlKHNjYWxlLmJhc2UoKSk7XG4gIH07XG5cbiAgaW5pdFJhbmdlLmFwcGx5KHNjYWxlLCBhcmd1bWVudHMpO1xuXG4gIHJldHVybiBzY2FsZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGRvbWFpbiwgaW50ZXJ2YWwpIHtcbiAgZG9tYWluID0gZG9tYWluLnNsaWNlKCk7XG5cbiAgdmFyIGkwID0gMCxcbiAgICAgIGkxID0gZG9tYWluLmxlbmd0aCAtIDEsXG4gICAgICB4MCA9IGRvbWFpbltpMF0sXG4gICAgICB4MSA9IGRvbWFpbltpMV0sXG4gICAgICB0O1xuXG4gIGlmICh4MSA8IHgwKSB7XG4gICAgdCA9IGkwLCBpMCA9IGkxLCBpMSA9IHQ7XG4gICAgdCA9IHgwLCB4MCA9IHgxLCB4MSA9IHQ7XG4gIH1cblxuICBkb21haW5baTBdID0gaW50ZXJ2YWwuZmxvb3IoeDApO1xuICBkb21haW5baTFdID0gaW50ZXJ2YWwuY2VpbCh4MSk7XG4gIHJldHVybiBkb21haW47XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiAreDtcbn1cbiIsImltcG9ydCB7aW5pdFJhbmdlfSBmcm9tIFwiLi9pbml0XCI7XG5cbmV4cG9ydCBjb25zdCBpbXBsaWNpdCA9IFN5bWJvbChcImltcGxpY2l0XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcmRpbmFsKCkge1xuICB2YXIgaW5kZXggPSBuZXcgTWFwKCksXG4gICAgICBkb21haW4gPSBbXSxcbiAgICAgIHJhbmdlID0gW10sXG4gICAgICB1bmtub3duID0gaW1wbGljaXQ7XG5cbiAgZnVuY3Rpb24gc2NhbGUoZCkge1xuICAgIHZhciBrZXkgPSBkICsgXCJcIiwgaSA9IGluZGV4LmdldChrZXkpO1xuICAgIGlmICghaSkge1xuICAgICAgaWYgKHVua25vd24gIT09IGltcGxpY2l0KSByZXR1cm4gdW5rbm93bjtcbiAgICAgIGluZGV4LnNldChrZXksIGkgPSBkb21haW4ucHVzaChkKSk7XG4gICAgfVxuICAgIHJldHVybiByYW5nZVsoaSAtIDEpICUgcmFuZ2UubGVuZ3RoXTtcbiAgfVxuXG4gIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBkb21haW4uc2xpY2UoKTtcbiAgICBkb21haW4gPSBbXSwgaW5kZXggPSBuZXcgTWFwKCk7XG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiBfKSB7XG4gICAgICBjb25zdCBrZXkgPSB2YWx1ZSArIFwiXCI7XG4gICAgICBpZiAoaW5kZXguaGFzKGtleSkpIGNvbnRpbnVlO1xuICAgICAgaW5kZXguc2V0KGtleSwgZG9tYWluLnB1c2godmFsdWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHNjYWxlO1xuICB9O1xuXG4gIHNjYWxlLnJhbmdlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHJhbmdlID0gQXJyYXkuZnJvbShfKSwgc2NhbGUpIDogcmFuZ2Uuc2xpY2UoKTtcbiAgfTtcblxuICBzY2FsZS51bmtub3duID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHVua25vd24gPSBfLCBzY2FsZSkgOiB1bmtub3duO1xuICB9O1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gb3JkaW5hbChkb21haW4sIHJhbmdlKS51bmtub3duKHVua25vd24pO1xuICB9O1xuXG4gIGluaXRSYW5nZS5hcHBseShzY2FsZSwgYXJndW1lbnRzKTtcblxuICByZXR1cm4gc2NhbGU7XG59XG4iLCJpbXBvcnQge2xpbmVhcmlzaH0gZnJvbSBcIi4vbGluZWFyXCI7XG5pbXBvcnQge2NvcHksIGlkZW50aXR5LCB0cmFuc2Zvcm1lcn0gZnJvbSBcIi4vY29udGludW91c1wiO1xuaW1wb3J0IHtpbml0UmFuZ2V9IGZyb20gXCIuL2luaXRcIjtcblxuZnVuY3Rpb24gdHJhbnNmb3JtUG93KGV4cG9uZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIHggPCAwID8gLU1hdGgucG93KC14LCBleHBvbmVudCkgOiBNYXRoLnBvdyh4LCBleHBvbmVudCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVNxcnQoeCkge1xuICByZXR1cm4geCA8IDAgPyAtTWF0aC5zcXJ0KC14KSA6IE1hdGguc3FydCh4KTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtU3F1YXJlKHgpIHtcbiAgcmV0dXJuIHggPCAwID8gLXggKiB4IDogeCAqIHg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3dpc2godHJhbnNmb3JtKSB7XG4gIHZhciBzY2FsZSA9IHRyYW5zZm9ybShpZGVudGl0eSwgaWRlbnRpdHkpLFxuICAgICAgZXhwb25lbnQgPSAxO1xuXG4gIGZ1bmN0aW9uIHJlc2NhbGUoKSB7XG4gICAgcmV0dXJuIGV4cG9uZW50ID09PSAxID8gdHJhbnNmb3JtKGlkZW50aXR5LCBpZGVudGl0eSlcbiAgICAgICAgOiBleHBvbmVudCA9PT0gMC41ID8gdHJhbnNmb3JtKHRyYW5zZm9ybVNxcnQsIHRyYW5zZm9ybVNxdWFyZSlcbiAgICAgICAgOiB0cmFuc2Zvcm0odHJhbnNmb3JtUG93KGV4cG9uZW50KSwgdHJhbnNmb3JtUG93KDEgLyBleHBvbmVudCkpO1xuICB9XG5cbiAgc2NhbGUuZXhwb25lbnQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZXhwb25lbnQgPSArXywgcmVzY2FsZSgpKSA6IGV4cG9uZW50O1xuICB9O1xuXG4gIHJldHVybiBsaW5lYXJpc2goc2NhbGUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3coKSB7XG4gIHZhciBzY2FsZSA9IHBvd2lzaCh0cmFuc2Zvcm1lcigpKTtcblxuICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNvcHkoc2NhbGUsIHBvdygpKS5leHBvbmVudChzY2FsZS5leHBvbmVudCgpKTtcbiAgfTtcblxuICBpbml0UmFuZ2UuYXBwbHkoc2NhbGUsIGFyZ3VtZW50cyk7XG5cbiAgcmV0dXJuIHNjYWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3FydCgpIHtcbiAgcmV0dXJuIHBvdy5hcHBseShudWxsLCBhcmd1bWVudHMpLmV4cG9uZW50KDAuNSk7XG59XG4iLCJpbXBvcnQge2FzY2VuZGluZywgYmlzZWN0LCBxdWFudGlsZSBhcyB0aHJlc2hvbGR9IGZyb20gXCJkMy1hcnJheVwiO1xuaW1wb3J0IHtpbml0UmFuZ2V9IGZyb20gXCIuL2luaXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcXVhbnRpbGUoKSB7XG4gIHZhciBkb21haW4gPSBbXSxcbiAgICAgIHJhbmdlID0gW10sXG4gICAgICB0aHJlc2hvbGRzID0gW10sXG4gICAgICB1bmtub3duO1xuXG4gIGZ1bmN0aW9uIHJlc2NhbGUoKSB7XG4gICAgdmFyIGkgPSAwLCBuID0gTWF0aC5tYXgoMSwgcmFuZ2UubGVuZ3RoKTtcbiAgICB0aHJlc2hvbGRzID0gbmV3IEFycmF5KG4gLSAxKTtcbiAgICB3aGlsZSAoKytpIDwgbikgdGhyZXNob2xkc1tpIC0gMV0gPSB0aHJlc2hvbGQoZG9tYWluLCBpIC8gbik7XG4gICAgcmV0dXJuIHNjYWxlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2NhbGUoeCkge1xuICAgIHJldHVybiBpc05hTih4ID0gK3gpID8gdW5rbm93biA6IHJhbmdlW2Jpc2VjdCh0aHJlc2hvbGRzLCB4KV07XG4gIH1cblxuICBzY2FsZS5pbnZlcnRFeHRlbnQgPSBmdW5jdGlvbih5KSB7XG4gICAgdmFyIGkgPSByYW5nZS5pbmRleE9mKHkpO1xuICAgIHJldHVybiBpIDwgMCA/IFtOYU4sIE5hTl0gOiBbXG4gICAgICBpID4gMCA/IHRocmVzaG9sZHNbaSAtIDFdIDogZG9tYWluWzBdLFxuICAgICAgaSA8IHRocmVzaG9sZHMubGVuZ3RoID8gdGhyZXNob2xkc1tpXSA6IGRvbWFpbltkb21haW4ubGVuZ3RoIC0gMV1cbiAgICBdO1xuICB9O1xuXG4gIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBkb21haW4uc2xpY2UoKTtcbiAgICBkb21haW4gPSBbXTtcbiAgICBmb3IgKGxldCBkIG9mIF8pIGlmIChkICE9IG51bGwgJiYgIWlzTmFOKGQgPSArZCkpIGRvbWFpbi5wdXNoKGQpO1xuICAgIGRvbWFpbi5zb3J0KGFzY2VuZGluZyk7XG4gICAgcmV0dXJuIHJlc2NhbGUoKTtcbiAgfTtcblxuICBzY2FsZS5yYW5nZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChyYW5nZSA9IEFycmF5LmZyb20oXyksIHJlc2NhbGUoKSkgOiByYW5nZS5zbGljZSgpO1xuICB9O1xuXG4gIHNjYWxlLnVua25vd24gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodW5rbm93biA9IF8sIHNjYWxlKSA6IHVua25vd247XG4gIH07XG5cbiAgc2NhbGUucXVhbnRpbGVzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRocmVzaG9sZHMuc2xpY2UoKTtcbiAgfTtcblxuICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHF1YW50aWxlKClcbiAgICAgICAgLmRvbWFpbihkb21haW4pXG4gICAgICAgIC5yYW5nZShyYW5nZSlcbiAgICAgICAgLnVua25vd24odW5rbm93bik7XG4gIH07XG5cbiAgcmV0dXJuIGluaXRSYW5nZS5hcHBseShzY2FsZSwgYXJndW1lbnRzKTtcbn1cbiIsImltcG9ydCB7YmlzZWN0fSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCB7bGluZWFyaXNofSBmcm9tIFwiLi9saW5lYXJcIjtcbmltcG9ydCB7aW5pdFJhbmdlfSBmcm9tIFwiLi9pbml0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHF1YW50aXplKCkge1xuICB2YXIgeDAgPSAwLFxuICAgICAgeDEgPSAxLFxuICAgICAgbiA9IDEsXG4gICAgICBkb21haW4gPSBbMC41XSxcbiAgICAgIHJhbmdlID0gWzAsIDFdLFxuICAgICAgdW5rbm93bjtcblxuICBmdW5jdGlvbiBzY2FsZSh4KSB7XG4gICAgcmV0dXJuIHggPD0geCA/IHJhbmdlW2Jpc2VjdChkb21haW4sIHgsIDAsIG4pXSA6IHVua25vd247XG4gIH1cblxuICBmdW5jdGlvbiByZXNjYWxlKCkge1xuICAgIHZhciBpID0gLTE7XG4gICAgZG9tYWluID0gbmV3IEFycmF5KG4pO1xuICAgIHdoaWxlICgrK2kgPCBuKSBkb21haW5baV0gPSAoKGkgKyAxKSAqIHgxIC0gKGkgLSBuKSAqIHgwKSAvIChuICsgMSk7XG4gICAgcmV0dXJuIHNjYWxlO1xuICB9XG5cbiAgc2NhbGUuZG9tYWluID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKFt4MCwgeDFdID0gXywgeDAgPSAreDAsIHgxID0gK3gxLCByZXNjYWxlKCkpIDogW3gwLCB4MV07XG4gIH07XG5cbiAgc2NhbGUucmFuZ2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAobiA9IChyYW5nZSA9IEFycmF5LmZyb20oXykpLmxlbmd0aCAtIDEsIHJlc2NhbGUoKSkgOiByYW5nZS5zbGljZSgpO1xuICB9O1xuXG4gIHNjYWxlLmludmVydEV4dGVudCA9IGZ1bmN0aW9uKHkpIHtcbiAgICB2YXIgaSA9IHJhbmdlLmluZGV4T2YoeSk7XG4gICAgcmV0dXJuIGkgPCAwID8gW05hTiwgTmFOXVxuICAgICAgICA6IGkgPCAxID8gW3gwLCBkb21haW5bMF1dXG4gICAgICAgIDogaSA+PSBuID8gW2RvbWFpbltuIC0gMV0sIHgxXVxuICAgICAgICA6IFtkb21haW5baSAtIDFdLCBkb21haW5baV1dO1xuICB9O1xuXG4gIHNjYWxlLnVua25vd24gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodW5rbm93biA9IF8sIHNjYWxlKSA6IHNjYWxlO1xuICB9O1xuXG4gIHNjYWxlLnRocmVzaG9sZHMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZG9tYWluLnNsaWNlKCk7XG4gIH07XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBxdWFudGl6ZSgpXG4gICAgICAgIC5kb21haW4oW3gwLCB4MV0pXG4gICAgICAgIC5yYW5nZShyYW5nZSlcbiAgICAgICAgLnVua25vd24odW5rbm93bik7XG4gIH07XG5cbiAgcmV0dXJuIGluaXRSYW5nZS5hcHBseShsaW5lYXJpc2goc2NhbGUpLCBhcmd1bWVudHMpO1xufVxuIiwiaW1wb3J0IHtpZGVudGl0eX0gZnJvbSBcIi4vY29udGludW91c1wiO1xuaW1wb3J0IHtpbml0SW50ZXJwb2xhdG9yfSBmcm9tIFwiLi9pbml0XCI7XG5pbXBvcnQge2xpbmVhcmlzaH0gZnJvbSBcIi4vbGluZWFyXCI7XG5pbXBvcnQge2xvZ2dpc2h9IGZyb20gXCIuL2xvZ1wiO1xuaW1wb3J0IHtzeW1sb2dpc2h9IGZyb20gXCIuL3N5bWxvZ1wiO1xuaW1wb3J0IHtwb3dpc2h9IGZyb20gXCIuL3Bvd1wiO1xuXG5mdW5jdGlvbiB0cmFuc2Zvcm1lcigpIHtcbiAgdmFyIHgwID0gMCxcbiAgICAgIHgxID0gMSxcbiAgICAgIHQwLFxuICAgICAgdDEsXG4gICAgICBrMTAsXG4gICAgICB0cmFuc2Zvcm0sXG4gICAgICBpbnRlcnBvbGF0b3IgPSBpZGVudGl0eSxcbiAgICAgIGNsYW1wID0gZmFsc2UsXG4gICAgICB1bmtub3duO1xuXG4gIGZ1bmN0aW9uIHNjYWxlKHgpIHtcbiAgICByZXR1cm4gaXNOYU4oeCA9ICt4KSA/IHVua25vd24gOiBpbnRlcnBvbGF0b3IoazEwID09PSAwID8gMC41IDogKHggPSAodHJhbnNmb3JtKHgpIC0gdDApICogazEwLCBjbGFtcCA/IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHgpKSA6IHgpKTtcbiAgfVxuXG4gIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChbeDAsIHgxXSA9IF8sIHQwID0gdHJhbnNmb3JtKHgwID0gK3gwKSwgdDEgPSB0cmFuc2Zvcm0oeDEgPSAreDEpLCBrMTAgPSB0MCA9PT0gdDEgPyAwIDogMSAvICh0MSAtIHQwKSwgc2NhbGUpIDogW3gwLCB4MV07XG4gIH07XG5cbiAgc2NhbGUuY2xhbXAgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoY2xhbXAgPSAhIV8sIHNjYWxlKSA6IGNsYW1wO1xuICB9O1xuXG4gIHNjYWxlLmludGVycG9sYXRvciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChpbnRlcnBvbGF0b3IgPSBfLCBzY2FsZSkgOiBpbnRlcnBvbGF0b3I7XG4gIH07XG5cbiAgc2NhbGUudW5rbm93biA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh1bmtub3duID0gXywgc2NhbGUpIDogdW5rbm93bjtcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHRyYW5zZm9ybSA9IHQsIHQwID0gdCh4MCksIHQxID0gdCh4MSksIGsxMCA9IHQwID09PSB0MSA/IDAgOiAxIC8gKHQxIC0gdDApO1xuICAgIHJldHVybiBzY2FsZTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkoc291cmNlLCB0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldFxuICAgICAgLmRvbWFpbihzb3VyY2UuZG9tYWluKCkpXG4gICAgICAuaW50ZXJwb2xhdG9yKHNvdXJjZS5pbnRlcnBvbGF0b3IoKSlcbiAgICAgIC5jbGFtcChzb3VyY2UuY2xhbXAoKSlcbiAgICAgIC51bmtub3duKHNvdXJjZS51bmtub3duKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXF1ZW50aWFsKCkge1xuICB2YXIgc2NhbGUgPSBsaW5lYXJpc2godHJhbnNmb3JtZXIoKShpZGVudGl0eSkpO1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY29weShzY2FsZSwgc2VxdWVudGlhbCgpKTtcbiAgfTtcblxuICByZXR1cm4gaW5pdEludGVycG9sYXRvci5hcHBseShzY2FsZSwgYXJndW1lbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlbnRpYWxMb2coKSB7XG4gIHZhciBzY2FsZSA9IGxvZ2dpc2godHJhbnNmb3JtZXIoKSkuZG9tYWluKFsxLCAxMF0pO1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY29weShzY2FsZSwgc2VxdWVudGlhbExvZygpKS5iYXNlKHNjYWxlLmJhc2UoKSk7XG4gIH07XG5cbiAgcmV0dXJuIGluaXRJbnRlcnBvbGF0b3IuYXBwbHkoc2NhbGUsIGFyZ3VtZW50cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXF1ZW50aWFsU3ltbG9nKCkge1xuICB2YXIgc2NhbGUgPSBzeW1sb2dpc2godHJhbnNmb3JtZXIoKSk7XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBjb3B5KHNjYWxlLCBzZXF1ZW50aWFsU3ltbG9nKCkpLmNvbnN0YW50KHNjYWxlLmNvbnN0YW50KCkpO1xuICB9O1xuXG4gIHJldHVybiBpbml0SW50ZXJwb2xhdG9yLmFwcGx5KHNjYWxlLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VxdWVudGlhbFBvdygpIHtcbiAgdmFyIHNjYWxlID0gcG93aXNoKHRyYW5zZm9ybWVyKCkpO1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY29weShzY2FsZSwgc2VxdWVudGlhbFBvdygpKS5leHBvbmVudChzY2FsZS5leHBvbmVudCgpKTtcbiAgfTtcblxuICByZXR1cm4gaW5pdEludGVycG9sYXRvci5hcHBseShzY2FsZSwgYXJndW1lbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlbnRpYWxTcXJ0KCkge1xuICByZXR1cm4gc2VxdWVudGlhbFBvdy5hcHBseShudWxsLCBhcmd1bWVudHMpLmV4cG9uZW50KDAuNSk7XG59XG4iLCJpbXBvcnQge2FzY2VuZGluZywgYmlzZWN0fSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCB7aWRlbnRpdHl9IGZyb20gXCIuL2NvbnRpbnVvdXNcIjtcbmltcG9ydCB7aW5pdEludGVycG9sYXRvcn0gZnJvbSBcIi4vaW5pdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXF1ZW50aWFsUXVhbnRpbGUoKSB7XG4gIHZhciBkb21haW4gPSBbXSxcbiAgICAgIGludGVycG9sYXRvciA9IGlkZW50aXR5O1xuXG4gIGZ1bmN0aW9uIHNjYWxlKHgpIHtcbiAgICBpZiAoIWlzTmFOKHggPSAreCkpIHJldHVybiBpbnRlcnBvbGF0b3IoKGJpc2VjdChkb21haW4sIHgpIC0gMSkgLyAoZG9tYWluLmxlbmd0aCAtIDEpKTtcbiAgfVxuXG4gIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBkb21haW4uc2xpY2UoKTtcbiAgICBkb21haW4gPSBbXTtcbiAgICBmb3IgKGxldCBkIG9mIF8pIGlmIChkICE9IG51bGwgJiYgIWlzTmFOKGQgPSArZCkpIGRvbWFpbi5wdXNoKGQpO1xuICAgIGRvbWFpbi5zb3J0KGFzY2VuZGluZyk7XG4gICAgcmV0dXJuIHNjYWxlO1xuICB9O1xuXG4gIHNjYWxlLmludGVycG9sYXRvciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChpbnRlcnBvbGF0b3IgPSBfLCBzY2FsZSkgOiBpbnRlcnBvbGF0b3I7XG4gIH07XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzZXF1ZW50aWFsUXVhbnRpbGUoaW50ZXJwb2xhdG9yKS5kb21haW4oZG9tYWluKTtcbiAgfTtcblxuICByZXR1cm4gaW5pdEludGVycG9sYXRvci5hcHBseShzY2FsZSwgYXJndW1lbnRzKTtcbn1cbiIsImltcG9ydCB7bGluZWFyaXNofSBmcm9tIFwiLi9saW5lYXJcIjtcbmltcG9ydCB7Y29weSwgdHJhbnNmb3JtZXJ9IGZyb20gXCIuL2NvbnRpbnVvdXNcIjtcbmltcG9ydCB7aW5pdFJhbmdlfSBmcm9tIFwiLi9pbml0XCI7XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVN5bWxvZyhjKSB7XG4gIHJldHVybiBmdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIE1hdGguc2lnbih4KSAqIE1hdGgubG9nMXAoTWF0aC5hYnMoeCAvIGMpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtU3ltZXhwKGMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4gTWF0aC5zaWduKHgpICogTWF0aC5leHBtMShNYXRoLmFicyh4KSkgKiBjO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ltbG9naXNoKHRyYW5zZm9ybSkge1xuICB2YXIgYyA9IDEsIHNjYWxlID0gdHJhbnNmb3JtKHRyYW5zZm9ybVN5bWxvZyhjKSwgdHJhbnNmb3JtU3ltZXhwKGMpKTtcblxuICBzY2FsZS5jb25zdGFudCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRyYW5zZm9ybSh0cmFuc2Zvcm1TeW1sb2coYyA9ICtfKSwgdHJhbnNmb3JtU3ltZXhwKGMpKSA6IGM7XG4gIH07XG5cbiAgcmV0dXJuIGxpbmVhcmlzaChzY2FsZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN5bWxvZygpIHtcbiAgdmFyIHNjYWxlID0gc3ltbG9naXNoKHRyYW5zZm9ybWVyKCkpO1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY29weShzY2FsZSwgc3ltbG9nKCkpLmNvbnN0YW50KHNjYWxlLmNvbnN0YW50KCkpO1xuICB9O1xuXG4gIHJldHVybiBpbml0UmFuZ2UuYXBwbHkoc2NhbGUsIGFyZ3VtZW50cyk7XG59XG4iLCJpbXBvcnQge2Jpc2VjdH0gZnJvbSBcImQzLWFycmF5XCI7XG5pbXBvcnQge2luaXRSYW5nZX0gZnJvbSBcIi4vaW5pdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aHJlc2hvbGQoKSB7XG4gIHZhciBkb21haW4gPSBbMC41XSxcbiAgICAgIHJhbmdlID0gWzAsIDFdLFxuICAgICAgdW5rbm93bixcbiAgICAgIG4gPSAxO1xuXG4gIGZ1bmN0aW9uIHNjYWxlKHgpIHtcbiAgICByZXR1cm4geCA8PSB4ID8gcmFuZ2VbYmlzZWN0KGRvbWFpbiwgeCwgMCwgbildIDogdW5rbm93bjtcbiAgfVxuXG4gIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkb21haW4gPSBBcnJheS5mcm9tKF8pLCBuID0gTWF0aC5taW4oZG9tYWluLmxlbmd0aCwgcmFuZ2UubGVuZ3RoIC0gMSksIHNjYWxlKSA6IGRvbWFpbi5zbGljZSgpO1xuICB9O1xuXG4gIHNjYWxlLnJhbmdlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHJhbmdlID0gQXJyYXkuZnJvbShfKSwgbiA9IE1hdGgubWluKGRvbWFpbi5sZW5ndGgsIHJhbmdlLmxlbmd0aCAtIDEpLCBzY2FsZSkgOiByYW5nZS5zbGljZSgpO1xuICB9O1xuXG4gIHNjYWxlLmludmVydEV4dGVudCA9IGZ1bmN0aW9uKHkpIHtcbiAgICB2YXIgaSA9IHJhbmdlLmluZGV4T2YoeSk7XG4gICAgcmV0dXJuIFtkb21haW5baSAtIDFdLCBkb21haW5baV1dO1xuICB9O1xuXG4gIHNjYWxlLnVua25vd24gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodW5rbm93biA9IF8sIHNjYWxlKSA6IHVua25vd247XG4gIH07XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aHJlc2hvbGQoKVxuICAgICAgICAuZG9tYWluKGRvbWFpbilcbiAgICAgICAgLnJhbmdlKHJhbmdlKVxuICAgICAgICAudW5rbm93bih1bmtub3duKTtcbiAgfTtcblxuICByZXR1cm4gaW5pdFJhbmdlLmFwcGx5KHNjYWxlLCBhcmd1bWVudHMpO1xufVxuIiwiaW1wb3J0IHt0aWNrU3RlcH0gZnJvbSBcImQzLWFycmF5XCI7XG5pbXBvcnQge2Zvcm1hdCwgZm9ybWF0UHJlZml4LCBmb3JtYXRTcGVjaWZpZXIsIHByZWNpc2lvbkZpeGVkLCBwcmVjaXNpb25QcmVmaXgsIHByZWNpc2lvblJvdW5kfSBmcm9tIFwiZDMtZm9ybWF0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXJ0LCBzdG9wLCBjb3VudCwgc3BlY2lmaWVyKSB7XG4gIHZhciBzdGVwID0gdGlja1N0ZXAoc3RhcnQsIHN0b3AsIGNvdW50KSxcbiAgICAgIHByZWNpc2lvbjtcbiAgc3BlY2lmaWVyID0gZm9ybWF0U3BlY2lmaWVyKHNwZWNpZmllciA9PSBudWxsID8gXCIsZlwiIDogc3BlY2lmaWVyKTtcbiAgc3dpdGNoIChzcGVjaWZpZXIudHlwZSkge1xuICAgIGNhc2UgXCJzXCI6IHtcbiAgICAgIHZhciB2YWx1ZSA9IE1hdGgubWF4KE1hdGguYWJzKHN0YXJ0KSwgTWF0aC5hYnMoc3RvcCkpO1xuICAgICAgaWYgKHNwZWNpZmllci5wcmVjaXNpb24gPT0gbnVsbCAmJiAhaXNOYU4ocHJlY2lzaW9uID0gcHJlY2lzaW9uUHJlZml4KHN0ZXAsIHZhbHVlKSkpIHNwZWNpZmllci5wcmVjaXNpb24gPSBwcmVjaXNpb247XG4gICAgICByZXR1cm4gZm9ybWF0UHJlZml4KHNwZWNpZmllciwgdmFsdWUpO1xuICAgIH1cbiAgICBjYXNlIFwiXCI6XG4gICAgY2FzZSBcImVcIjpcbiAgICBjYXNlIFwiZ1wiOlxuICAgIGNhc2UgXCJwXCI6XG4gICAgY2FzZSBcInJcIjoge1xuICAgICAgaWYgKHNwZWNpZmllci5wcmVjaXNpb24gPT0gbnVsbCAmJiAhaXNOYU4ocHJlY2lzaW9uID0gcHJlY2lzaW9uUm91bmQoc3RlcCwgTWF0aC5tYXgoTWF0aC5hYnMoc3RhcnQpLCBNYXRoLmFicyhzdG9wKSkpKSkgc3BlY2lmaWVyLnByZWNpc2lvbiA9IHByZWNpc2lvbiAtIChzcGVjaWZpZXIudHlwZSA9PT0gXCJlXCIpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgXCJmXCI6XG4gICAgY2FzZSBcIiVcIjoge1xuICAgICAgaWYgKHNwZWNpZmllci5wcmVjaXNpb24gPT0gbnVsbCAmJiAhaXNOYU4ocHJlY2lzaW9uID0gcHJlY2lzaW9uRml4ZWQoc3RlcCkpKSBzcGVjaWZpZXIucHJlY2lzaW9uID0gcHJlY2lzaW9uIC0gKHNwZWNpZmllci50eXBlID09PSBcIiVcIikgKiAyO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBmb3JtYXQoc3BlY2lmaWVyKTtcbn1cbiIsImltcG9ydCB7YmlzZWN0b3IsIHRpY2tTdGVwfSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCB7dGltZVllYXIsIHRpbWVNb250aCwgdGltZVdlZWssIHRpbWVEYXksIHRpbWVIb3VyLCB0aW1lTWludXRlLCB0aW1lU2Vjb25kLCB0aW1lTWlsbGlzZWNvbmR9IGZyb20gXCJkMy10aW1lXCI7XG5pbXBvcnQge3RpbWVGb3JtYXR9IGZyb20gXCJkMy10aW1lLWZvcm1hdFwiO1xuaW1wb3J0IGNvbnRpbnVvdXMsIHtjb3B5LCBpZGVudGl0eX0gZnJvbSBcIi4vY29udGludW91c1wiO1xuaW1wb3J0IHtpbml0UmFuZ2V9IGZyb20gXCIuL2luaXRcIjtcbmltcG9ydCBuaWNlIGZyb20gXCIuL25pY2VcIjtcblxudmFyIGR1cmF0aW9uU2Vjb25kID0gMTAwMCxcbiAgICBkdXJhdGlvbk1pbnV0ZSA9IGR1cmF0aW9uU2Vjb25kICogNjAsXG4gICAgZHVyYXRpb25Ib3VyID0gZHVyYXRpb25NaW51dGUgKiA2MCxcbiAgICBkdXJhdGlvbkRheSA9IGR1cmF0aW9uSG91ciAqIDI0LFxuICAgIGR1cmF0aW9uV2VlayA9IGR1cmF0aW9uRGF5ICogNyxcbiAgICBkdXJhdGlvbk1vbnRoID0gZHVyYXRpb25EYXkgKiAzMCxcbiAgICBkdXJhdGlvblllYXIgPSBkdXJhdGlvbkRheSAqIDM2NTtcblxuZnVuY3Rpb24gZGF0ZSh0KSB7XG4gIHJldHVybiBuZXcgRGF0ZSh0KTtcbn1cblxuZnVuY3Rpb24gbnVtYmVyKHQpIHtcbiAgcmV0dXJuIHQgaW5zdGFuY2VvZiBEYXRlID8gK3QgOiArbmV3IERhdGUoK3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsZW5kYXIoeWVhciwgbW9udGgsIHdlZWssIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kLCBmb3JtYXQpIHtcbiAgdmFyIHNjYWxlID0gY29udGludW91cyhpZGVudGl0eSwgaWRlbnRpdHkpLFxuICAgICAgaW52ZXJ0ID0gc2NhbGUuaW52ZXJ0LFxuICAgICAgZG9tYWluID0gc2NhbGUuZG9tYWluO1xuXG4gIHZhciBmb3JtYXRNaWxsaXNlY29uZCA9IGZvcm1hdChcIi4lTFwiKSxcbiAgICAgIGZvcm1hdFNlY29uZCA9IGZvcm1hdChcIjolU1wiKSxcbiAgICAgIGZvcm1hdE1pbnV0ZSA9IGZvcm1hdChcIiVJOiVNXCIpLFxuICAgICAgZm9ybWF0SG91ciA9IGZvcm1hdChcIiVJICVwXCIpLFxuICAgICAgZm9ybWF0RGF5ID0gZm9ybWF0KFwiJWEgJWRcIiksXG4gICAgICBmb3JtYXRXZWVrID0gZm9ybWF0KFwiJWIgJWRcIiksXG4gICAgICBmb3JtYXRNb250aCA9IGZvcm1hdChcIiVCXCIpLFxuICAgICAgZm9ybWF0WWVhciA9IGZvcm1hdChcIiVZXCIpO1xuXG4gIHZhciB0aWNrSW50ZXJ2YWxzID0gW1xuICAgIFtzZWNvbmQsICAxLCAgICAgIGR1cmF0aW9uU2Vjb25kXSxcbiAgICBbc2Vjb25kLCAgNSwgIDUgKiBkdXJhdGlvblNlY29uZF0sXG4gICAgW3NlY29uZCwgMTUsIDE1ICogZHVyYXRpb25TZWNvbmRdLFxuICAgIFtzZWNvbmQsIDMwLCAzMCAqIGR1cmF0aW9uU2Vjb25kXSxcbiAgICBbbWludXRlLCAgMSwgICAgICBkdXJhdGlvbk1pbnV0ZV0sXG4gICAgW21pbnV0ZSwgIDUsICA1ICogZHVyYXRpb25NaW51dGVdLFxuICAgIFttaW51dGUsIDE1LCAxNSAqIGR1cmF0aW9uTWludXRlXSxcbiAgICBbbWludXRlLCAzMCwgMzAgKiBkdXJhdGlvbk1pbnV0ZV0sXG4gICAgWyAgaG91ciwgIDEsICAgICAgZHVyYXRpb25Ib3VyICBdLFxuICAgIFsgIGhvdXIsICAzLCAgMyAqIGR1cmF0aW9uSG91ciAgXSxcbiAgICBbICBob3VyLCAgNiwgIDYgKiBkdXJhdGlvbkhvdXIgIF0sXG4gICAgWyAgaG91ciwgMTIsIDEyICogZHVyYXRpb25Ib3VyICBdLFxuICAgIFsgICBkYXksICAxLCAgICAgIGR1cmF0aW9uRGF5ICAgXSxcbiAgICBbICAgZGF5LCAgMiwgIDIgKiBkdXJhdGlvbkRheSAgIF0sXG4gICAgWyAgd2VlaywgIDEsICAgICAgZHVyYXRpb25XZWVrICBdLFxuICAgIFsgbW9udGgsICAxLCAgICAgIGR1cmF0aW9uTW9udGggXSxcbiAgICBbIG1vbnRoLCAgMywgIDMgKiBkdXJhdGlvbk1vbnRoIF0sXG4gICAgWyAgeWVhciwgIDEsICAgICAgZHVyYXRpb25ZZWFyICBdXG4gIF07XG5cbiAgZnVuY3Rpb24gdGlja0Zvcm1hdChkYXRlKSB7XG4gICAgcmV0dXJuIChzZWNvbmQoZGF0ZSkgPCBkYXRlID8gZm9ybWF0TWlsbGlzZWNvbmRcbiAgICAgICAgOiBtaW51dGUoZGF0ZSkgPCBkYXRlID8gZm9ybWF0U2Vjb25kXG4gICAgICAgIDogaG91cihkYXRlKSA8IGRhdGUgPyBmb3JtYXRNaW51dGVcbiAgICAgICAgOiBkYXkoZGF0ZSkgPCBkYXRlID8gZm9ybWF0SG91clxuICAgICAgICA6IG1vbnRoKGRhdGUpIDwgZGF0ZSA/ICh3ZWVrKGRhdGUpIDwgZGF0ZSA/IGZvcm1hdERheSA6IGZvcm1hdFdlZWspXG4gICAgICAgIDogeWVhcihkYXRlKSA8IGRhdGUgPyBmb3JtYXRNb250aFxuICAgICAgICA6IGZvcm1hdFllYXIpKGRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGlja0ludGVydmFsKGludGVydmFsLCBzdGFydCwgc3RvcCwgc3RlcCkge1xuICAgIGlmIChpbnRlcnZhbCA9PSBudWxsKSBpbnRlcnZhbCA9IDEwO1xuXG4gICAgLy8gSWYgYSBkZXNpcmVkIHRpY2sgY291bnQgaXMgc3BlY2lmaWVkLCBwaWNrIGEgcmVhc29uYWJsZSB0aWNrIGludGVydmFsXG4gICAgLy8gYmFzZWQgb24gdGhlIGV4dGVudCBvZiB0aGUgZG9tYWluIGFuZCBhIHJvdWdoIGVzdGltYXRlIG9mIHRpY2sgc2l6ZS5cbiAgICAvLyBPdGhlcndpc2UsIGFzc3VtZSBpbnRlcnZhbCBpcyBhbHJlYWR5IGEgdGltZSBpbnRlcnZhbCBhbmQgdXNlIGl0LlxuICAgIGlmICh0eXBlb2YgaW50ZXJ2YWwgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBNYXRoLmFicyhzdG9wIC0gc3RhcnQpIC8gaW50ZXJ2YWwsXG4gICAgICAgICAgaSA9IGJpc2VjdG9yKGZ1bmN0aW9uKGkpIHsgcmV0dXJuIGlbMl07IH0pLnJpZ2h0KHRpY2tJbnRlcnZhbHMsIHRhcmdldCk7XG4gICAgICBpZiAoaSA9PT0gdGlja0ludGVydmFscy5sZW5ndGgpIHtcbiAgICAgICAgc3RlcCA9IHRpY2tTdGVwKHN0YXJ0IC8gZHVyYXRpb25ZZWFyLCBzdG9wIC8gZHVyYXRpb25ZZWFyLCBpbnRlcnZhbCk7XG4gICAgICAgIGludGVydmFsID0geWVhcjtcbiAgICAgIH0gZWxzZSBpZiAoaSkge1xuICAgICAgICBpID0gdGlja0ludGVydmFsc1t0YXJnZXQgLyB0aWNrSW50ZXJ2YWxzW2kgLSAxXVsyXSA8IHRpY2tJbnRlcnZhbHNbaV1bMl0gLyB0YXJnZXQgPyBpIC0gMSA6IGldO1xuICAgICAgICBzdGVwID0gaVsxXTtcbiAgICAgICAgaW50ZXJ2YWwgPSBpWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RlcCA9IE1hdGgubWF4KHRpY2tTdGVwKHN0YXJ0LCBzdG9wLCBpbnRlcnZhbCksIDEpO1xuICAgICAgICBpbnRlcnZhbCA9IG1pbGxpc2Vjb25kO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGVwID09IG51bGwgPyBpbnRlcnZhbCA6IGludGVydmFsLmV2ZXJ5KHN0ZXApO1xuICB9XG5cbiAgc2NhbGUuaW52ZXJ0ID0gZnVuY3Rpb24oeSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShpbnZlcnQoeSkpO1xuICB9O1xuXG4gIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IGRvbWFpbihBcnJheS5mcm9tKF8sIG51bWJlcikpIDogZG9tYWluKCkubWFwKGRhdGUpO1xuICB9O1xuXG4gIHNjYWxlLnRpY2tzID0gZnVuY3Rpb24oaW50ZXJ2YWwsIHN0ZXApIHtcbiAgICB2YXIgZCA9IGRvbWFpbigpLFxuICAgICAgICB0MCA9IGRbMF0sXG4gICAgICAgIHQxID0gZFtkLmxlbmd0aCAtIDFdLFxuICAgICAgICByID0gdDEgPCB0MCxcbiAgICAgICAgdDtcbiAgICBpZiAocikgdCA9IHQwLCB0MCA9IHQxLCB0MSA9IHQ7XG4gICAgdCA9IHRpY2tJbnRlcnZhbChpbnRlcnZhbCwgdDAsIHQxLCBzdGVwKTtcbiAgICB0ID0gdCA/IHQucmFuZ2UodDAsIHQxICsgMSkgOiBbXTsgLy8gaW5jbHVzaXZlIHN0b3BcbiAgICByZXR1cm4gciA/IHQucmV2ZXJzZSgpIDogdDtcbiAgfTtcblxuICBzY2FsZS50aWNrRm9ybWF0ID0gZnVuY3Rpb24oY291bnQsIHNwZWNpZmllcikge1xuICAgIHJldHVybiBzcGVjaWZpZXIgPT0gbnVsbCA/IHRpY2tGb3JtYXQgOiBmb3JtYXQoc3BlY2lmaWVyKTtcbiAgfTtcblxuICBzY2FsZS5uaWNlID0gZnVuY3Rpb24oaW50ZXJ2YWwsIHN0ZXApIHtcbiAgICB2YXIgZCA9IGRvbWFpbigpO1xuICAgIHJldHVybiAoaW50ZXJ2YWwgPSB0aWNrSW50ZXJ2YWwoaW50ZXJ2YWwsIGRbMF0sIGRbZC5sZW5ndGggLSAxXSwgc3RlcCkpXG4gICAgICAgID8gZG9tYWluKG5pY2UoZCwgaW50ZXJ2YWwpKVxuICAgICAgICA6IHNjYWxlO1xuICB9O1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY29weShzY2FsZSwgY2FsZW5kYXIoeWVhciwgbW9udGgsIHdlZWssIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kLCBmb3JtYXQpKTtcbiAgfTtcblxuICByZXR1cm4gc2NhbGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gaW5pdFJhbmdlLmFwcGx5KGNhbGVuZGFyKHRpbWVZZWFyLCB0aW1lTW9udGgsIHRpbWVXZWVrLCB0aW1lRGF5LCB0aW1lSG91ciwgdGltZU1pbnV0ZSwgdGltZVNlY29uZCwgdGltZU1pbGxpc2Vjb25kLCB0aW1lRm9ybWF0KS5kb21haW4oW25ldyBEYXRlKDIwMDAsIDAsIDEpLCBuZXcgRGF0ZSgyMDAwLCAwLCAyKV0pLCBhcmd1bWVudHMpO1xufVxuIiwiaW1wb3J0IHtjYWxlbmRhcn0gZnJvbSBcIi4vdGltZVwiO1xuaW1wb3J0IHt1dGNGb3JtYXR9IGZyb20gXCJkMy10aW1lLWZvcm1hdFwiO1xuaW1wb3J0IHt1dGNZZWFyLCB1dGNNb250aCwgdXRjV2VlaywgdXRjRGF5LCB1dGNIb3VyLCB1dGNNaW51dGUsIHV0Y1NlY29uZCwgdXRjTWlsbGlzZWNvbmR9IGZyb20gXCJkMy10aW1lXCI7XG5pbXBvcnQge2luaXRSYW5nZX0gZnJvbSBcIi4vaW5pdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGluaXRSYW5nZS5hcHBseShjYWxlbmRhcih1dGNZZWFyLCB1dGNNb250aCwgdXRjV2VlaywgdXRjRGF5LCB1dGNIb3VyLCB1dGNNaW51dGUsIHV0Y1NlY29uZCwgdXRjTWlsbGlzZWNvbmQsIHV0Y0Zvcm1hdCkuZG9tYWluKFtEYXRlLlVUQygyMDAwLCAwLCAxKSwgRGF0ZS5VVEMoMjAwMCwgMCwgMildKSwgYXJndW1lbnRzKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB4O1xuICB9O1xufVxuIiwiaW1wb3J0IGNyZWF0b3IgZnJvbSBcIi4vY3JlYXRvclwiO1xuaW1wb3J0IHNlbGVjdCBmcm9tIFwiLi9zZWxlY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gc2VsZWN0KGNyZWF0b3IobmFtZSkuY2FsbChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpKTtcbn1cbiIsImltcG9ydCBuYW1lc3BhY2UgZnJvbSBcIi4vbmFtZXNwYWNlXCI7XG5pbXBvcnQge3hodG1sfSBmcm9tIFwiLi9uYW1lc3BhY2VzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0b3JJbmhlcml0KG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBkb2N1bWVudCA9IHRoaXMub3duZXJEb2N1bWVudCxcbiAgICAgICAgdXJpID0gdGhpcy5uYW1lc3BhY2VVUkk7XG4gICAgcmV0dXJuIHVyaSA9PT0geGh0bWwgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0geGh0bWxcbiAgICAgICAgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpXG4gICAgICAgIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHVyaSwgbmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0b3JGaXhlZChmdWxsbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgZnVsbG5hbWUgPSBuYW1lc3BhY2UobmFtZSk7XG4gIHJldHVybiAoZnVsbG5hbWUubG9jYWxcbiAgICAgID8gY3JlYXRvckZpeGVkXG4gICAgICA6IGNyZWF0b3JJbmhlcml0KShmdWxsbmFtZSk7XG59XG4iLCJleHBvcnQge2RlZmF1bHQgYXMgY3JlYXRlfSBmcm9tIFwiLi9jcmVhdGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjcmVhdG9yfSBmcm9tIFwiLi9jcmVhdG9yXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbG9jYWx9IGZyb20gXCIuL2xvY2FsXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbWF0Y2hlcn0gZnJvbSBcIi4vbWF0Y2hlclwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG1vdXNlfSBmcm9tIFwiLi9tb3VzZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG5hbWVzcGFjZX0gZnJvbSBcIi4vbmFtZXNwYWNlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbmFtZXNwYWNlc30gZnJvbSBcIi4vbmFtZXNwYWNlc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGNsaWVudFBvaW50fSBmcm9tIFwiLi9wb2ludFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNlbGVjdH0gZnJvbSBcIi4vc2VsZWN0XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc2VsZWN0QWxsfSBmcm9tIFwiLi9zZWxlY3RBbGxcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzZWxlY3Rpb259IGZyb20gXCIuL3NlbGVjdGlvbi9pbmRleFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNlbGVjdG9yfSBmcm9tIFwiLi9zZWxlY3RvclwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNlbGVjdG9yQWxsfSBmcm9tIFwiLi9zZWxlY3RvckFsbFwiO1xuZXhwb3J0IHtzdHlsZVZhbHVlIGFzIHN0eWxlfSBmcm9tIFwiLi9zZWxlY3Rpb24vc3R5bGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB0b3VjaH0gZnJvbSBcIi4vdG91Y2hcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB0b3VjaGVzfSBmcm9tIFwiLi90b3VjaGVzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgd2luZG93fSBmcm9tIFwiLi93aW5kb3dcIjtcbmV4cG9ydCB7ZXZlbnQsIGN1c3RvbUV2ZW50fSBmcm9tIFwiLi9zZWxlY3Rpb24vb25cIjtcbiIsInZhciBuZXh0SWQgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2NhbCgpIHtcbiAgcmV0dXJuIG5ldyBMb2NhbDtcbn1cblxuZnVuY3Rpb24gTG9jYWwoKSB7XG4gIHRoaXMuXyA9IFwiQFwiICsgKCsrbmV4dElkKS50b1N0cmluZygzNik7XG59XG5cbkxvY2FsLnByb3RvdHlwZSA9IGxvY2FsLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IExvY2FsLFxuICBnZXQ6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICB2YXIgaWQgPSB0aGlzLl87XG4gICAgd2hpbGUgKCEoaWQgaW4gbm9kZSkpIGlmICghKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpKSByZXR1cm47XG4gICAgcmV0dXJuIG5vZGVbaWRdO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKG5vZGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIG5vZGVbdGhpcy5fXSA9IHZhbHVlO1xuICB9LFxuICByZW1vdmU6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5fIGluIG5vZGUgJiYgZGVsZXRlIG5vZGVbdGhpcy5fXTtcbiAgfSxcbiAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl87XG4gIH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH07XG59XG4iLCJpbXBvcnQgc291cmNlRXZlbnQgZnJvbSBcIi4vc291cmNlRXZlbnRcIjtcbmltcG9ydCBwb2ludCBmcm9tIFwiLi9wb2ludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlKSB7XG4gIHZhciBldmVudCA9IHNvdXJjZUV2ZW50KCk7XG4gIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlcykgZXZlbnQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgcmV0dXJuIHBvaW50KG5vZGUsIGV2ZW50KTtcbn1cbiIsImltcG9ydCBuYW1lc3BhY2VzIGZyb20gXCIuL25hbWVzcGFjZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgcHJlZml4ID0gbmFtZSArPSBcIlwiLCBpID0gcHJlZml4LmluZGV4T2YoXCI6XCIpO1xuICBpZiAoaSA+PSAwICYmIChwcmVmaXggPSBuYW1lLnNsaWNlKDAsIGkpKSAhPT0gXCJ4bWxuc1wiKSBuYW1lID0gbmFtZS5zbGljZShpICsgMSk7XG4gIHJldHVybiBuYW1lc3BhY2VzLmhhc093blByb3BlcnR5KHByZWZpeCkgPyB7c3BhY2U6IG5hbWVzcGFjZXNbcHJlZml4XSwgbG9jYWw6IG5hbWV9IDogbmFtZTtcbn1cbiIsImV4cG9ydCB2YXIgeGh0bWwgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdmc6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgeGh0bWw6IHhodG1sLFxuICB4bGluazogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXG4gIHhtbDogXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIlxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUsIGV2ZW50KSB7XG4gIHZhciBzdmcgPSBub2RlLm93bmVyU1ZHRWxlbWVudCB8fCBub2RlO1xuXG4gIGlmIChzdmcuY3JlYXRlU1ZHUG9pbnQpIHtcbiAgICB2YXIgcG9pbnQgPSBzdmcuY3JlYXRlU1ZHUG9pbnQoKTtcbiAgICBwb2ludC54ID0gZXZlbnQuY2xpZW50WCwgcG9pbnQueSA9IGV2ZW50LmNsaWVudFk7XG4gICAgcG9pbnQgPSBwb2ludC5tYXRyaXhUcmFuc2Zvcm0obm9kZS5nZXRTY3JlZW5DVE0oKS5pbnZlcnNlKCkpO1xuICAgIHJldHVybiBbcG9pbnQueCwgcG9pbnQueV07XG4gIH1cblxuICB2YXIgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiBbZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCAtIG5vZGUuY2xpZW50TGVmdCwgZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wIC0gbm9kZS5jbGllbnRUb3BdO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb24sIHJvb3R9IGZyb20gXCIuL3NlbGVjdGlvbi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiXG4gICAgICA/IG5ldyBTZWxlY3Rpb24oW1tkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKV1dLCBbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XSlcbiAgICAgIDogbmV3IFNlbGVjdGlvbihbW3NlbGVjdG9yXV0sIHJvb3QpO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb24sIHJvb3R9IGZyb20gXCIuL3NlbGVjdGlvbi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiXG4gICAgICA/IG5ldyBTZWxlY3Rpb24oW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXSwgW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudF0pXG4gICAgICA6IG5ldyBTZWxlY3Rpb24oW3NlbGVjdG9yID09IG51bGwgPyBbXSA6IHNlbGVjdG9yXSwgcm9vdCk7XG59XG4iLCJpbXBvcnQgY3JlYXRvciBmcm9tIFwiLi4vY3JlYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBjcmVhdGUgPSB0eXBlb2YgbmFtZSA9PT0gXCJmdW5jdGlvblwiID8gbmFtZSA6IGNyZWF0b3IobmFtZSk7XG4gIHJldHVybiB0aGlzLnNlbGVjdChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBlbmRDaGlsZChjcmVhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IG5hbWVzcGFjZSBmcm9tIFwiLi4vbmFtZXNwYWNlXCI7XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmVOUyhmdWxsbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyQ29uc3RhbnQobmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckNvbnN0YW50TlMoZnVsbG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCwgdmFsdWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyRnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICBlbHNlIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyRnVuY3Rpb25OUyhmdWxsbmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gICAgZWxzZSB0aGlzLnNldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCwgdik7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBmdWxsbmFtZSA9IG5hbWVzcGFjZShuYW1lKTtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMubm9kZSgpO1xuICAgIHJldHVybiBmdWxsbmFtZS5sb2NhbFxuICAgICAgICA/IG5vZGUuZ2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKVxuICAgICAgICA6IG5vZGUuZ2V0QXR0cmlidXRlKGZ1bGxuYW1lKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVhY2goKHZhbHVlID09IG51bGxcbiAgICAgID8gKGZ1bGxuYW1lLmxvY2FsID8gYXR0clJlbW92ZU5TIDogYXR0clJlbW92ZSkgOiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gKGZ1bGxuYW1lLmxvY2FsID8gYXR0ckZ1bmN0aW9uTlMgOiBhdHRyRnVuY3Rpb24pXG4gICAgICA6IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJDb25zdGFudE5TIDogYXR0ckNvbnN0YW50KSkpKGZ1bGxuYW1lLCB2YWx1ZSkpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50c1swXTtcbiAgYXJndW1lbnRzWzBdID0gdGhpcztcbiAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJmdW5jdGlvbiBjbGFzc0FycmF5KHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnRyaW0oKS5zcGxpdCgvXnxcXHMrLyk7XG59XG5cbmZ1bmN0aW9uIGNsYXNzTGlzdChub2RlKSB7XG4gIHJldHVybiBub2RlLmNsYXNzTGlzdCB8fCBuZXcgQ2xhc3NMaXN0KG5vZGUpO1xufVxuXG5mdW5jdGlvbiBDbGFzc0xpc3Qobm9kZSkge1xuICB0aGlzLl9ub2RlID0gbm9kZTtcbiAgdGhpcy5fbmFtZXMgPSBjbGFzc0FycmF5KG5vZGUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgfHwgXCJcIik7XG59XG5cbkNsYXNzTGlzdC5wcm90b3R5cGUgPSB7XG4gIGFkZDogZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBpID0gdGhpcy5fbmFtZXMuaW5kZXhPZihuYW1lKTtcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHRoaXMuX25hbWVzLnB1c2gobmFtZSk7XG4gICAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHRoaXMuX25hbWVzLmpvaW4oXCIgXCIpKTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZTogZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBpID0gdGhpcy5fbmFtZXMuaW5kZXhPZihuYW1lKTtcbiAgICBpZiAoaSA+PSAwKSB7XG4gICAgICB0aGlzLl9uYW1lcy5zcGxpY2UoaSwgMSk7XG4gICAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHRoaXMuX25hbWVzLmpvaW4oXCIgXCIpKTtcbiAgICB9XG4gIH0sXG4gIGNvbnRhaW5zOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSkgPj0gMDtcbiAgfVxufTtcblxuZnVuY3Rpb24gY2xhc3NlZEFkZChub2RlLCBuYW1lcykge1xuICB2YXIgbGlzdCA9IGNsYXNzTGlzdChub2RlKSwgaSA9IC0xLCBuID0gbmFtZXMubGVuZ3RoO1xuICB3aGlsZSAoKytpIDwgbikgbGlzdC5hZGQobmFtZXNbaV0pO1xufVxuXG5mdW5jdGlvbiBjbGFzc2VkUmVtb3ZlKG5vZGUsIG5hbWVzKSB7XG4gIHZhciBsaXN0ID0gY2xhc3NMaXN0KG5vZGUpLCBpID0gLTEsIG4gPSBuYW1lcy5sZW5ndGg7XG4gIHdoaWxlICgrK2kgPCBuKSBsaXN0LnJlbW92ZShuYW1lc1tpXSk7XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRUcnVlKG5hbWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjbGFzc2VkQWRkKHRoaXMsIG5hbWVzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZEZhbHNlKG5hbWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjbGFzc2VkUmVtb3ZlKHRoaXMsIG5hbWVzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZEZ1bmN0aW9uKG5hbWVzLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgKHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgPyBjbGFzc2VkQWRkIDogY2xhc3NlZFJlbW92ZSkodGhpcywgbmFtZXMpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgbmFtZXMgPSBjbGFzc0FycmF5KG5hbWUgKyBcIlwiKTtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgbGlzdCA9IGNsYXNzTGlzdCh0aGlzLm5vZGUoKSksIGkgPSAtMSwgbiA9IG5hbWVzLmxlbmd0aDtcbiAgICB3aGlsZSAoKytpIDwgbikgaWYgKCFsaXN0LmNvbnRhaW5zKG5hbWVzW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuZWFjaCgodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gY2xhc3NlZEZ1bmN0aW9uIDogdmFsdWVcbiAgICAgID8gY2xhc3NlZFRydWVcbiAgICAgIDogY2xhc3NlZEZhbHNlKShuYW1lcywgdmFsdWUpKTtcbn1cbiIsImZ1bmN0aW9uIHNlbGVjdGlvbl9jbG9uZVNoYWxsb3coKSB7XG4gIHJldHVybiB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuY2xvbmVOb2RlKGZhbHNlKSwgdGhpcy5uZXh0U2libGluZyk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdGlvbl9jbG9uZURlZXAoKSB7XG4gIHJldHVybiB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuY2xvbmVOb2RlKHRydWUpLCB0aGlzLm5leHRTaWJsaW5nKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZGVlcCkge1xuICByZXR1cm4gdGhpcy5zZWxlY3QoZGVlcCA/IHNlbGVjdGlvbl9jbG9uZURlZXAgOiBzZWxlY3Rpb25fY2xvbmVTaGFsbG93KTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHtFbnRlck5vZGV9IGZyb20gXCIuL2VudGVyXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4uL2NvbnN0YW50XCI7XG5cbnZhciBrZXlQcmVmaXggPSBcIiRcIjsgLy8gUHJvdGVjdCBhZ2FpbnN0IGtleXMgbGlrZSDigJxfX3Byb3RvX1/igJ0uXG5cbmZ1bmN0aW9uIGJpbmRJbmRleChwYXJlbnQsIGdyb3VwLCBlbnRlciwgdXBkYXRlLCBleGl0LCBkYXRhKSB7XG4gIHZhciBpID0gMCxcbiAgICAgIG5vZGUsXG4gICAgICBncm91cExlbmd0aCA9IGdyb3VwLmxlbmd0aCxcbiAgICAgIGRhdGFMZW5ndGggPSBkYXRhLmxlbmd0aDtcblxuICAvLyBQdXQgYW55IG5vbi1udWxsIG5vZGVzIHRoYXQgZml0IGludG8gdXBkYXRlLlxuICAvLyBQdXQgYW55IG51bGwgbm9kZXMgaW50byBlbnRlci5cbiAgLy8gUHV0IGFueSByZW1haW5pbmcgZGF0YSBpbnRvIGVudGVyLlxuICBmb3IgKDsgaSA8IGRhdGFMZW5ndGg7ICsraSkge1xuICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgIG5vZGUuX19kYXRhX18gPSBkYXRhW2ldO1xuICAgICAgdXBkYXRlW2ldID0gbm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW50ZXJbaV0gPSBuZXcgRW50ZXJOb2RlKHBhcmVudCwgZGF0YVtpXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gUHV0IGFueSBub24tbnVsbCBub2RlcyB0aGF0IGRvbuKAmXQgZml0IGludG8gZXhpdC5cbiAgZm9yICg7IGkgPCBncm91cExlbmd0aDsgKytpKSB7XG4gICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgZXhpdFtpXSA9IG5vZGU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGJpbmRLZXkocGFyZW50LCBncm91cCwgZW50ZXIsIHVwZGF0ZSwgZXhpdCwgZGF0YSwga2V5KSB7XG4gIHZhciBpLFxuICAgICAgbm9kZSxcbiAgICAgIG5vZGVCeUtleVZhbHVlID0ge30sXG4gICAgICBncm91cExlbmd0aCA9IGdyb3VwLmxlbmd0aCxcbiAgICAgIGRhdGFMZW5ndGggPSBkYXRhLmxlbmd0aCxcbiAgICAgIGtleVZhbHVlcyA9IG5ldyBBcnJheShncm91cExlbmd0aCksXG4gICAgICBrZXlWYWx1ZTtcblxuICAvLyBDb21wdXRlIHRoZSBrZXkgZm9yIGVhY2ggbm9kZS5cbiAgLy8gSWYgbXVsdGlwbGUgbm9kZXMgaGF2ZSB0aGUgc2FtZSBrZXksIHRoZSBkdXBsaWNhdGVzIGFyZSBhZGRlZCB0byBleGl0LlxuICBmb3IgKGkgPSAwOyBpIDwgZ3JvdXBMZW5ndGg7ICsraSkge1xuICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgIGtleVZhbHVlc1tpXSA9IGtleVZhbHVlID0ga2V5UHJlZml4ICsga2V5LmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApO1xuICAgICAgaWYgKGtleVZhbHVlIGluIG5vZGVCeUtleVZhbHVlKSB7XG4gICAgICAgIGV4aXRbaV0gPSBub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZUJ5S2V5VmFsdWVba2V5VmFsdWVdID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDb21wdXRlIHRoZSBrZXkgZm9yIGVhY2ggZGF0dW0uXG4gIC8vIElmIHRoZXJlIGEgbm9kZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBrZXksIGpvaW4gYW5kIGFkZCBpdCB0byB1cGRhdGUuXG4gIC8vIElmIHRoZXJlIGlzIG5vdCAob3IgdGhlIGtleSBpcyBhIGR1cGxpY2F0ZSksIGFkZCBpdCB0byBlbnRlci5cbiAgZm9yIChpID0gMDsgaSA8IGRhdGFMZW5ndGg7ICsraSkge1xuICAgIGtleVZhbHVlID0ga2V5UHJlZml4ICsga2V5LmNhbGwocGFyZW50LCBkYXRhW2ldLCBpLCBkYXRhKTtcbiAgICBpZiAobm9kZSA9IG5vZGVCeUtleVZhbHVlW2tleVZhbHVlXSkge1xuICAgICAgdXBkYXRlW2ldID0gbm9kZTtcbiAgICAgIG5vZGUuX19kYXRhX18gPSBkYXRhW2ldO1xuICAgICAgbm9kZUJ5S2V5VmFsdWVba2V5VmFsdWVdID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgZW50ZXJbaV0gPSBuZXcgRW50ZXJOb2RlKHBhcmVudCwgZGF0YVtpXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIGFueSByZW1haW5pbmcgbm9kZXMgdGhhdCB3ZXJlIG5vdCBib3VuZCB0byBkYXRhIHRvIGV4aXQuXG4gIGZvciAoaSA9IDA7IGkgPCBncm91cExlbmd0aDsgKytpKSB7XG4gICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIChub2RlQnlLZXlWYWx1ZVtrZXlWYWx1ZXNbaV1dID09PSBub2RlKSkge1xuICAgICAgZXhpdFtpXSA9IG5vZGU7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIGRhdGEgPSBuZXcgQXJyYXkodGhpcy5zaXplKCkpLCBqID0gLTE7XG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGQpIHsgZGF0YVsrK2pdID0gZDsgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICB2YXIgYmluZCA9IGtleSA/IGJpbmRLZXkgOiBiaW5kSW5kZXgsXG4gICAgICBwYXJlbnRzID0gdGhpcy5fcGFyZW50cyxcbiAgICAgIGdyb3VwcyA9IHRoaXMuX2dyb3VwcztcblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHZhbHVlID0gY29uc3RhbnQodmFsdWUpO1xuXG4gIGZvciAodmFyIG0gPSBncm91cHMubGVuZ3RoLCB1cGRhdGUgPSBuZXcgQXJyYXkobSksIGVudGVyID0gbmV3IEFycmF5KG0pLCBleGl0ID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIHZhciBwYXJlbnQgPSBwYXJlbnRzW2pdLFxuICAgICAgICBncm91cCA9IGdyb3Vwc1tqXSxcbiAgICAgICAgZ3JvdXBMZW5ndGggPSBncm91cC5sZW5ndGgsXG4gICAgICAgIGRhdGEgPSB2YWx1ZS5jYWxsKHBhcmVudCwgcGFyZW50ICYmIHBhcmVudC5fX2RhdGFfXywgaiwgcGFyZW50cyksXG4gICAgICAgIGRhdGFMZW5ndGggPSBkYXRhLmxlbmd0aCxcbiAgICAgICAgZW50ZXJHcm91cCA9IGVudGVyW2pdID0gbmV3IEFycmF5KGRhdGFMZW5ndGgpLFxuICAgICAgICB1cGRhdGVHcm91cCA9IHVwZGF0ZVtqXSA9IG5ldyBBcnJheShkYXRhTGVuZ3RoKSxcbiAgICAgICAgZXhpdEdyb3VwID0gZXhpdFtqXSA9IG5ldyBBcnJheShncm91cExlbmd0aCk7XG5cbiAgICBiaW5kKHBhcmVudCwgZ3JvdXAsIGVudGVyR3JvdXAsIHVwZGF0ZUdyb3VwLCBleGl0R3JvdXAsIGRhdGEsIGtleSk7XG5cbiAgICAvLyBOb3cgY29ubmVjdCB0aGUgZW50ZXIgbm9kZXMgdG8gdGhlaXIgZm9sbG93aW5nIHVwZGF0ZSBub2RlLCBzdWNoIHRoYXRcbiAgICAvLyBhcHBlbmRDaGlsZCBjYW4gaW5zZXJ0IHRoZSBtYXRlcmlhbGl6ZWQgZW50ZXIgbm9kZSBiZWZvcmUgdGhpcyBub2RlLFxuICAgIC8vIHJhdGhlciB0aGFuIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmVudCBub2RlLlxuICAgIGZvciAodmFyIGkwID0gMCwgaTEgPSAwLCBwcmV2aW91cywgbmV4dDsgaTAgPCBkYXRhTGVuZ3RoOyArK2kwKSB7XG4gICAgICBpZiAocHJldmlvdXMgPSBlbnRlckdyb3VwW2kwXSkge1xuICAgICAgICBpZiAoaTAgPj0gaTEpIGkxID0gaTAgKyAxO1xuICAgICAgICB3aGlsZSAoIShuZXh0ID0gdXBkYXRlR3JvdXBbaTFdKSAmJiArK2kxIDwgZGF0YUxlbmd0aCk7XG4gICAgICAgIHByZXZpb3VzLl9uZXh0ID0gbmV4dCB8fCBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSA9IG5ldyBTZWxlY3Rpb24odXBkYXRlLCBwYXJlbnRzKTtcbiAgdXBkYXRlLl9lbnRlciA9IGVudGVyO1xuICB1cGRhdGUuX2V4aXQgPSBleGl0O1xuICByZXR1cm4gdXBkYXRlO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5wcm9wZXJ0eShcIl9fZGF0YV9fXCIsIHZhbHVlKVxuICAgICAgOiB0aGlzLm5vZGUoKS5fX2RhdGFfXztcbn1cbiIsImltcG9ydCBkZWZhdWx0VmlldyBmcm9tIFwiLi4vd2luZG93XCI7XG5cbmZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQobm9kZSwgdHlwZSwgcGFyYW1zKSB7XG4gIHZhciB3aW5kb3cgPSBkZWZhdWx0Vmlldyhub2RlKSxcbiAgICAgIGV2ZW50ID0gd2luZG93LkN1c3RvbUV2ZW50O1xuXG4gIGlmICh0eXBlb2YgZXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGV2ZW50ID0gbmV3IGV2ZW50KHR5cGUsIHBhcmFtcyk7XG4gIH0gZWxzZSB7XG4gICAgZXZlbnQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcbiAgICBpZiAocGFyYW1zKSBldmVudC5pbml0RXZlbnQodHlwZSwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlKSwgZXZlbnQuZGV0YWlsID0gcGFyYW1zLmRldGFpbDtcbiAgICBlbHNlIGV2ZW50LmluaXRFdmVudCh0eXBlLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgbm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hDb25zdGFudCh0eXBlLCBwYXJhbXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkaXNwYXRjaEV2ZW50KHRoaXMsIHR5cGUsIHBhcmFtcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoRnVuY3Rpb24odHlwZSwgcGFyYW1zKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2hFdmVudCh0aGlzLCB0eXBlLCBwYXJhbXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHR5cGUsIHBhcmFtcykge1xuICByZXR1cm4gdGhpcy5lYWNoKCh0eXBlb2YgcGFyYW1zID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gZGlzcGF0Y2hGdW5jdGlvblxuICAgICAgOiBkaXNwYXRjaENvbnN0YW50KSh0eXBlLCBwYXJhbXMpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBqID0gMCwgbSA9IGdyb3Vwcy5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgaSA9IDAsIG4gPSBncm91cC5sZW5ndGgsIG5vZGU7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIGNhbGxiYWNrLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiAhdGhpcy5ub2RlKCk7XG59XG4iLCJpbXBvcnQgc3BhcnNlIGZyb20gXCIuL3NwYXJzZVwiO1xuaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFNlbGVjdGlvbih0aGlzLl9lbnRlciB8fCB0aGlzLl9ncm91cHMubWFwKHNwYXJzZSksIHRoaXMuX3BhcmVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRW50ZXJOb2RlKHBhcmVudCwgZGF0dW0pIHtcbiAgdGhpcy5vd25lckRvY3VtZW50ID0gcGFyZW50Lm93bmVyRG9jdW1lbnQ7XG4gIHRoaXMubmFtZXNwYWNlVVJJID0gcGFyZW50Lm5hbWVzcGFjZVVSSTtcbiAgdGhpcy5fbmV4dCA9IG51bGw7XG4gIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgdGhpcy5fX2RhdGFfXyA9IGRhdHVtO1xufVxuXG5FbnRlck5vZGUucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogRW50ZXJOb2RlLFxuICBhcHBlbmRDaGlsZDogZnVuY3Rpb24oY2hpbGQpIHsgcmV0dXJuIHRoaXMuX3BhcmVudC5pbnNlcnRCZWZvcmUoY2hpbGQsIHRoaXMuX25leHQpOyB9LFxuICBpbnNlcnRCZWZvcmU6IGZ1bmN0aW9uKGNoaWxkLCBuZXh0KSB7IHJldHVybiB0aGlzLl9wYXJlbnQuaW5zZXJ0QmVmb3JlKGNoaWxkLCBuZXh0KTsgfSxcbiAgcXVlcnlTZWxlY3RvcjogZnVuY3Rpb24oc2VsZWN0b3IpIHsgcmV0dXJuIHRoaXMuX3BhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTsgfSxcbiAgcXVlcnlTZWxlY3RvckFsbDogZnVuY3Rpb24oc2VsZWN0b3IpIHsgcmV0dXJuIHRoaXMuX3BhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTsgfVxufTtcbiIsImltcG9ydCBzcGFyc2UgZnJvbSBcIi4vc3BhcnNlXCI7XG5pbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHRoaXMuX2V4aXQgfHwgdGhpcy5fZ3JvdXBzLm1hcChzcGFyc2UpLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IG1hdGNoZXIgZnJvbSBcIi4uL21hdGNoZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBtYXRjaCAhPT0gXCJmdW5jdGlvblwiKSBtYXRjaCA9IG1hdGNoZXIobWF0Y2gpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc3ViZ3JvdXAgPSBzdWJncm91cHNbal0gPSBbXSwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiBtYXRjaC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSkge1xuICAgICAgICBzdWJncm91cC5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHN1Ymdyb3VwcywgdGhpcy5fcGFyZW50cyk7XG59XG4iLCJmdW5jdGlvbiBodG1sUmVtb3ZlKCkge1xuICB0aGlzLmlubmVySFRNTCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGh0bWxDb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaHRtbEZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5pbm5lckhUTUwgPSB2ID09IG51bGwgPyBcIlwiIDogdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKHZhbHVlID09IG51bGxcbiAgICAgICAgICA/IGh0bWxSZW1vdmUgOiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IGh0bWxGdW5jdGlvblxuICAgICAgICAgIDogaHRtbENvbnN0YW50KSh2YWx1ZSkpXG4gICAgICA6IHRoaXMubm9kZSgpLmlubmVySFRNTDtcbn1cbiIsImltcG9ydCBzZWxlY3Rpb25fc2VsZWN0IGZyb20gXCIuL3NlbGVjdFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9zZWxlY3RBbGwgZnJvbSBcIi4vc2VsZWN0QWxsXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2ZpbHRlciBmcm9tIFwiLi9maWx0ZXJcIjtcbmltcG9ydCBzZWxlY3Rpb25fZGF0YSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2VudGVyIGZyb20gXCIuL2VudGVyXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2V4aXQgZnJvbSBcIi4vZXhpdFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9qb2luIGZyb20gXCIuL2pvaW5cIjtcbmltcG9ydCBzZWxlY3Rpb25fbWVyZ2UgZnJvbSBcIi4vbWVyZ2VcIjtcbmltcG9ydCBzZWxlY3Rpb25fb3JkZXIgZnJvbSBcIi4vb3JkZXJcIjtcbmltcG9ydCBzZWxlY3Rpb25fc29ydCBmcm9tIFwiLi9zb3J0XCI7XG5pbXBvcnQgc2VsZWN0aW9uX2NhbGwgZnJvbSBcIi4vY2FsbFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9ub2RlcyBmcm9tIFwiLi9ub2Rlc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9ub2RlIGZyb20gXCIuL25vZGVcIjtcbmltcG9ydCBzZWxlY3Rpb25fc2l6ZSBmcm9tIFwiLi9zaXplXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2VtcHR5IGZyb20gXCIuL2VtcHR5XCI7XG5pbXBvcnQgc2VsZWN0aW9uX2VhY2ggZnJvbSBcIi4vZWFjaFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9hdHRyIGZyb20gXCIuL2F0dHJcIjtcbmltcG9ydCBzZWxlY3Rpb25fc3R5bGUgZnJvbSBcIi4vc3R5bGVcIjtcbmltcG9ydCBzZWxlY3Rpb25fcHJvcGVydHkgZnJvbSBcIi4vcHJvcGVydHlcIjtcbmltcG9ydCBzZWxlY3Rpb25fY2xhc3NlZCBmcm9tIFwiLi9jbGFzc2VkXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3RleHQgZnJvbSBcIi4vdGV4dFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9odG1sIGZyb20gXCIuL2h0bWxcIjtcbmltcG9ydCBzZWxlY3Rpb25fcmFpc2UgZnJvbSBcIi4vcmFpc2VcIjtcbmltcG9ydCBzZWxlY3Rpb25fbG93ZXIgZnJvbSBcIi4vbG93ZXJcIjtcbmltcG9ydCBzZWxlY3Rpb25fYXBwZW5kIGZyb20gXCIuL2FwcGVuZFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9pbnNlcnQgZnJvbSBcIi4vaW5zZXJ0XCI7XG5pbXBvcnQgc2VsZWN0aW9uX3JlbW92ZSBmcm9tIFwiLi9yZW1vdmVcIjtcbmltcG9ydCBzZWxlY3Rpb25fY2xvbmUgZnJvbSBcIi4vY2xvbmVcIjtcbmltcG9ydCBzZWxlY3Rpb25fZGF0dW0gZnJvbSBcIi4vZGF0dW1cIjtcbmltcG9ydCBzZWxlY3Rpb25fb24gZnJvbSBcIi4vb25cIjtcbmltcG9ydCBzZWxlY3Rpb25fZGlzcGF0Y2ggZnJvbSBcIi4vZGlzcGF0Y2hcIjtcblxuZXhwb3J0IHZhciByb290ID0gW251bGxdO1xuXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0aW9uKGdyb3VwcywgcGFyZW50cykge1xuICB0aGlzLl9ncm91cHMgPSBncm91cHM7XG4gIHRoaXMuX3BhcmVudHMgPSBwYXJlbnRzO1xufVxuXG5mdW5jdGlvbiBzZWxlY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKFtbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XV0sIHJvb3QpO1xufVxuXG5TZWxlY3Rpb24ucHJvdG90eXBlID0gc2VsZWN0aW9uLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFNlbGVjdGlvbixcbiAgc2VsZWN0OiBzZWxlY3Rpb25fc2VsZWN0LFxuICBzZWxlY3RBbGw6IHNlbGVjdGlvbl9zZWxlY3RBbGwsXG4gIGZpbHRlcjogc2VsZWN0aW9uX2ZpbHRlcixcbiAgZGF0YTogc2VsZWN0aW9uX2RhdGEsXG4gIGVudGVyOiBzZWxlY3Rpb25fZW50ZXIsXG4gIGV4aXQ6IHNlbGVjdGlvbl9leGl0LFxuICBqb2luOiBzZWxlY3Rpb25fam9pbixcbiAgbWVyZ2U6IHNlbGVjdGlvbl9tZXJnZSxcbiAgb3JkZXI6IHNlbGVjdGlvbl9vcmRlcixcbiAgc29ydDogc2VsZWN0aW9uX3NvcnQsXG4gIGNhbGw6IHNlbGVjdGlvbl9jYWxsLFxuICBub2Rlczogc2VsZWN0aW9uX25vZGVzLFxuICBub2RlOiBzZWxlY3Rpb25fbm9kZSxcbiAgc2l6ZTogc2VsZWN0aW9uX3NpemUsXG4gIGVtcHR5OiBzZWxlY3Rpb25fZW1wdHksXG4gIGVhY2g6IHNlbGVjdGlvbl9lYWNoLFxuICBhdHRyOiBzZWxlY3Rpb25fYXR0cixcbiAgc3R5bGU6IHNlbGVjdGlvbl9zdHlsZSxcbiAgcHJvcGVydHk6IHNlbGVjdGlvbl9wcm9wZXJ0eSxcbiAgY2xhc3NlZDogc2VsZWN0aW9uX2NsYXNzZWQsXG4gIHRleHQ6IHNlbGVjdGlvbl90ZXh0LFxuICBodG1sOiBzZWxlY3Rpb25faHRtbCxcbiAgcmFpc2U6IHNlbGVjdGlvbl9yYWlzZSxcbiAgbG93ZXI6IHNlbGVjdGlvbl9sb3dlcixcbiAgYXBwZW5kOiBzZWxlY3Rpb25fYXBwZW5kLFxuICBpbnNlcnQ6IHNlbGVjdGlvbl9pbnNlcnQsXG4gIHJlbW92ZTogc2VsZWN0aW9uX3JlbW92ZSxcbiAgY2xvbmU6IHNlbGVjdGlvbl9jbG9uZSxcbiAgZGF0dW06IHNlbGVjdGlvbl9kYXR1bSxcbiAgb246IHNlbGVjdGlvbl9vbixcbiAgZGlzcGF0Y2g6IHNlbGVjdGlvbl9kaXNwYXRjaFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0aW9uO1xuIiwiaW1wb3J0IGNyZWF0b3IgZnJvbSBcIi4uL2NyZWF0b3JcIjtcbmltcG9ydCBzZWxlY3RvciBmcm9tIFwiLi4vc2VsZWN0b3JcIjtcblxuZnVuY3Rpb24gY29uc3RhbnROdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgYmVmb3JlKSB7XG4gIHZhciBjcmVhdGUgPSB0eXBlb2YgbmFtZSA9PT0gXCJmdW5jdGlvblwiID8gbmFtZSA6IGNyZWF0b3IobmFtZSksXG4gICAgICBzZWxlY3QgPSBiZWZvcmUgPT0gbnVsbCA/IGNvbnN0YW50TnVsbCA6IHR5cGVvZiBiZWZvcmUgPT09IFwiZnVuY3Rpb25cIiA/IGJlZm9yZSA6IHNlbGVjdG9yKGJlZm9yZSk7XG4gIHJldHVybiB0aGlzLnNlbGVjdChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUoY3JlYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHNlbGVjdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IG51bGwpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9uZW50ZXIsIG9udXBkYXRlLCBvbmV4aXQpIHtcbiAgdmFyIGVudGVyID0gdGhpcy5lbnRlcigpLCB1cGRhdGUgPSB0aGlzLCBleGl0ID0gdGhpcy5leGl0KCk7XG4gIGVudGVyID0gdHlwZW9mIG9uZW50ZXIgPT09IFwiZnVuY3Rpb25cIiA/IG9uZW50ZXIoZW50ZXIpIDogZW50ZXIuYXBwZW5kKG9uZW50ZXIgKyBcIlwiKTtcbiAgaWYgKG9udXBkYXRlICE9IG51bGwpIHVwZGF0ZSA9IG9udXBkYXRlKHVwZGF0ZSk7XG4gIGlmIChvbmV4aXQgPT0gbnVsbCkgZXhpdC5yZW1vdmUoKTsgZWxzZSBvbmV4aXQoZXhpdCk7XG4gIHJldHVybiBlbnRlciAmJiB1cGRhdGUgPyBlbnRlci5tZXJnZSh1cGRhdGUpLm9yZGVyKCkgOiB1cGRhdGU7XG59XG4iLCJmdW5jdGlvbiBsb3dlcigpIHtcbiAgaWYgKHRoaXMucHJldmlvdXNTaWJsaW5nKSB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMsIHRoaXMucGFyZW50Tm9kZS5maXJzdENoaWxkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmVhY2gobG93ZXIpO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdGlvbikge1xuXG4gIGZvciAodmFyIGdyb3VwczAgPSB0aGlzLl9ncm91cHMsIGdyb3VwczEgPSBzZWxlY3Rpb24uX2dyb3VwcywgbTAgPSBncm91cHMwLmxlbmd0aCwgbTEgPSBncm91cHMxLmxlbmd0aCwgbSA9IE1hdGgubWluKG0wLCBtMSksIG1lcmdlcyA9IG5ldyBBcnJheShtMCksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAwID0gZ3JvdXBzMFtqXSwgZ3JvdXAxID0gZ3JvdXBzMVtqXSwgbiA9IGdyb3VwMC5sZW5ndGgsIG1lcmdlID0gbWVyZ2VzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cDBbaV0gfHwgZ3JvdXAxW2ldKSB7XG4gICAgICAgIG1lcmdlW2ldID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKDsgaiA8IG0wOyArK2opIHtcbiAgICBtZXJnZXNbal0gPSBncm91cHMwW2pdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24obWVyZ2VzLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgaiA9IDAsIG0gPSBncm91cHMubGVuZ3RoOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIGkgPSAwLCBuID0gZ3JvdXAubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICB2YXIgbm9kZSA9IGdyb3VwW2ldO1xuICAgICAgaWYgKG5vZGUpIHJldHVybiBub2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBub2RlcyA9IG5ldyBBcnJheSh0aGlzLnNpemUoKSksIGkgPSAtMTtcbiAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkgeyBub2Rlc1srK2ldID0gdGhpczsgfSk7XG4gIHJldHVybiBub2Rlcztcbn1cbiIsInZhciBmaWx0ZXJFdmVudHMgPSB7fTtcblxuZXhwb3J0IHZhciBldmVudCA9IG51bGw7XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGlmICghKFwib25tb3VzZWVudGVyXCIgaW4gZWxlbWVudCkpIHtcbiAgICBmaWx0ZXJFdmVudHMgPSB7bW91c2VlbnRlcjogXCJtb3VzZW92ZXJcIiwgbW91c2VsZWF2ZTogXCJtb3VzZW91dFwifTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJDb250ZXh0TGlzdGVuZXIobGlzdGVuZXIsIGluZGV4LCBncm91cCkge1xuICBsaXN0ZW5lciA9IGNvbnRleHRMaXN0ZW5lcihsaXN0ZW5lciwgaW5kZXgsIGdyb3VwKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIHJlbGF0ZWQgPSBldmVudC5yZWxhdGVkVGFyZ2V0O1xuICAgIGlmICghcmVsYXRlZCB8fCAocmVsYXRlZCAhPT0gdGhpcyAmJiAhKHJlbGF0ZWQuY29tcGFyZURvY3VtZW50UG9zaXRpb24odGhpcykgJiA4KSkpIHtcbiAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gY29udGV4dExpc3RlbmVyKGxpc3RlbmVyLCBpbmRleCwgZ3JvdXApIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50MSkge1xuICAgIHZhciBldmVudDAgPSBldmVudDsgLy8gRXZlbnRzIGNhbiBiZSByZWVudHJhbnQgKGUuZy4sIGZvY3VzKS5cbiAgICBldmVudCA9IGV2ZW50MTtcbiAgICB0cnkge1xuICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCB0aGlzLl9fZGF0YV9fLCBpbmRleCwgZ3JvdXApO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBldmVudCA9IGV2ZW50MDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lcykge1xuICByZXR1cm4gdHlwZW5hbWVzLnRyaW0oKS5zcGxpdCgvXnxcXHMrLykubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgbmFtZSA9IFwiXCIsIGkgPSB0LmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChpID49IDApIG5hbWUgPSB0LnNsaWNlKGkgKyAxKSwgdCA9IHQuc2xpY2UoMCwgaSk7XG4gICAgcmV0dXJuIHt0eXBlOiB0LCBuYW1lOiBuYW1lfTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9uUmVtb3ZlKHR5cGVuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgb24gPSB0aGlzLl9fb247XG4gICAgaWYgKCFvbikgcmV0dXJuO1xuICAgIGZvciAodmFyIGogPSAwLCBpID0gLTEsIG0gPSBvbi5sZW5ndGgsIG87IGogPCBtOyArK2opIHtcbiAgICAgIGlmIChvID0gb25bal0sICghdHlwZW5hbWUudHlwZSB8fCBvLnR5cGUgPT09IHR5cGVuYW1lLnR5cGUpICYmIG8ubmFtZSA9PT0gdHlwZW5hbWUubmFtZSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoby50eXBlLCBvLmxpc3RlbmVyLCBvLmNhcHR1cmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25bKytpXSA9IG87XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgrK2kpIG9uLmxlbmd0aCA9IGk7XG4gICAgZWxzZSBkZWxldGUgdGhpcy5fX29uO1xuICB9O1xufVxuXG5mdW5jdGlvbiBvbkFkZCh0eXBlbmFtZSwgdmFsdWUsIGNhcHR1cmUpIHtcbiAgdmFyIHdyYXAgPSBmaWx0ZXJFdmVudHMuaGFzT3duUHJvcGVydHkodHlwZW5hbWUudHlwZSkgPyBmaWx0ZXJDb250ZXh0TGlzdGVuZXIgOiBjb250ZXh0TGlzdGVuZXI7XG4gIHJldHVybiBmdW5jdGlvbihkLCBpLCBncm91cCkge1xuICAgIHZhciBvbiA9IHRoaXMuX19vbiwgbywgbGlzdGVuZXIgPSB3cmFwKHZhbHVlLCBpLCBncm91cCk7XG4gICAgaWYgKG9uKSBmb3IgKHZhciBqID0gMCwgbSA9IG9uLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgICAgaWYgKChvID0gb25bal0pLnR5cGUgPT09IHR5cGVuYW1lLnR5cGUgJiYgby5uYW1lID09PSB0eXBlbmFtZS5uYW1lKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihvLnR5cGUsIG8ubGlzdGVuZXIsIG8uY2FwdHVyZSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihvLnR5cGUsIG8ubGlzdGVuZXIgPSBsaXN0ZW5lciwgby5jYXB0dXJlID0gY2FwdHVyZSk7XG4gICAgICAgIG8udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIodHlwZW5hbWUudHlwZSwgbGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgIG8gPSB7dHlwZTogdHlwZW5hbWUudHlwZSwgbmFtZTogdHlwZW5hbWUubmFtZSwgdmFsdWU6IHZhbHVlLCBsaXN0ZW5lcjogbGlzdGVuZXIsIGNhcHR1cmU6IGNhcHR1cmV9O1xuICAgIGlmICghb24pIHRoaXMuX19vbiA9IFtvXTtcbiAgICBlbHNlIG9uLnB1c2gobyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHR5cGVuYW1lLCB2YWx1ZSwgY2FwdHVyZSkge1xuICB2YXIgdHlwZW5hbWVzID0gcGFyc2VUeXBlbmFtZXModHlwZW5hbWUgKyBcIlwiKSwgaSwgbiA9IHR5cGVuYW1lcy5sZW5ndGgsIHQ7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdmFyIG9uID0gdGhpcy5ub2RlKCkuX19vbjtcbiAgICBpZiAob24pIGZvciAodmFyIGogPSAwLCBtID0gb24ubGVuZ3RoLCBvOyBqIDwgbTsgKytqKSB7XG4gICAgICBmb3IgKGkgPSAwLCBvID0gb25bal07IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKCh0ID0gdHlwZW5hbWVzW2ldKS50eXBlID09PSBvLnR5cGUgJiYgdC5uYW1lID09PSBvLm5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gby52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBvbiA9IHZhbHVlID8gb25BZGQgOiBvblJlbW92ZTtcbiAgaWYgKGNhcHR1cmUgPT0gbnVsbCkgY2FwdHVyZSA9IGZhbHNlO1xuICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB0aGlzLmVhY2gob24odHlwZW5hbWVzW2ldLCB2YWx1ZSwgY2FwdHVyZSkpO1xuICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbUV2ZW50KGV2ZW50MSwgbGlzdGVuZXIsIHRoYXQsIGFyZ3MpIHtcbiAgdmFyIGV2ZW50MCA9IGV2ZW50O1xuICBldmVudDEuc291cmNlRXZlbnQgPSBldmVudDtcbiAgZXZlbnQgPSBldmVudDE7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICB9IGZpbmFsbHkge1xuICAgIGV2ZW50ID0gZXZlbnQwO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIGogPSAtMSwgbSA9IGdyb3Vwcy5sZW5ndGg7ICsraiA8IG07KSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIGkgPSBncm91cC5sZW5ndGggLSAxLCBuZXh0ID0gZ3JvdXBbaV0sIG5vZGU7IC0taSA+PSAwOykge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBpZiAobmV4dCAmJiBub2RlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG5leHQpIF4gNCkgbmV4dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCBuZXh0KTtcbiAgICAgICAgbmV4dCA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJmdW5jdGlvbiBwcm9wZXJ0eVJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBkZWxldGUgdGhpc1tuYW1lXTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcHJvcGVydHlDb25zdGFudChuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpc1tuYW1lXSA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0eUZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgZGVsZXRlIHRoaXNbbmFtZV07XG4gICAgZWxzZSB0aGlzW25hbWVdID0gdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAxXG4gICAgICA/IHRoaXMuZWFjaCgodmFsdWUgPT0gbnVsbFxuICAgICAgICAgID8gcHJvcGVydHlSZW1vdmUgOiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gcHJvcGVydHlGdW5jdGlvblxuICAgICAgICAgIDogcHJvcGVydHlDb25zdGFudCkobmFtZSwgdmFsdWUpKVxuICAgICAgOiB0aGlzLm5vZGUoKVtuYW1lXTtcbn1cbiIsImZ1bmN0aW9uIHJhaXNlKCkge1xuICBpZiAodGhpcy5uZXh0U2libGluZykgdGhpcy5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChyYWlzZSk7XG59XG4iLCJmdW5jdGlvbiByZW1vdmUoKSB7XG4gIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gIGlmIChwYXJlbnQpIHBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmVhY2gocmVtb3ZlKTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHNlbGVjdG9yIGZyb20gXCIuLi9zZWxlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgaWYgKHR5cGVvZiBzZWxlY3QgIT09IFwiZnVuY3Rpb25cIikgc2VsZWN0ID0gc2VsZWN0b3Ioc2VsZWN0KTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHN1Ymdyb3VwID0gc3ViZ3JvdXBzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBzdWJub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIChzdWJub2RlID0gc2VsZWN0LmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApKSkge1xuICAgICAgICBpZiAoXCJfX2RhdGFfX1wiIGluIG5vZGUpIHN1Ym5vZGUuX19kYXRhX18gPSBub2RlLl9fZGF0YV9fO1xuICAgICAgICBzdWJncm91cFtpXSA9IHN1Ym5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc3ViZ3JvdXBzLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHNlbGVjdG9yQWxsIGZyb20gXCIuLi9zZWxlY3RvckFsbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgaWYgKHR5cGVvZiBzZWxlY3QgIT09IFwiZnVuY3Rpb25cIikgc2VsZWN0ID0gc2VsZWN0b3JBbGwoc2VsZWN0KTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBbXSwgcGFyZW50cyA9IFtdLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBzdWJncm91cHMucHVzaChzZWxlY3QuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpO1xuICAgICAgICBwYXJlbnRzLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc3ViZ3JvdXBzLCBwYXJlbnRzKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgc2l6ZSA9IDA7XG4gIHRoaXMuZWFjaChmdW5jdGlvbigpIHsgKytzaXplOyB9KTtcbiAgcmV0dXJuIHNpemU7XG59XG4iLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29tcGFyZSkge1xuICBpZiAoIWNvbXBhcmUpIGNvbXBhcmUgPSBhc2NlbmRpbmc7XG5cbiAgZnVuY3Rpb24gY29tcGFyZU5vZGUoYSwgYikge1xuICAgIHJldHVybiBhICYmIGIgPyBjb21wYXJlKGEuX19kYXRhX18sIGIuX19kYXRhX18pIDogIWEgLSAhYjtcbiAgfVxuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHNvcnRncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHNvcnRncm91cCA9IHNvcnRncm91cHNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIHNvcnRncm91cFtpXSA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHNvcnRncm91cC5zb3J0KGNvbXBhcmVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHNvcnRncm91cHMsIHRoaXMuX3BhcmVudHMpLm9yZGVyKCk7XG59XG5cbmZ1bmN0aW9uIGFzY2VuZGluZyhhLCBiKSB7XG4gIHJldHVybiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogYSA+PSBiID8gMCA6IE5hTjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHVwZGF0ZSkge1xuICByZXR1cm4gbmV3IEFycmF5KHVwZGF0ZS5sZW5ndGgpO1xufVxuIiwiaW1wb3J0IGRlZmF1bHRWaWV3IGZyb20gXCIuLi93aW5kb3dcIjtcblxuZnVuY3Rpb24gc3R5bGVSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVDb25zdGFudChuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsdWUsIHByaW9yaXR5KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVGdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICAgIGVsc2UgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2LCBwcmlvcml0eSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDFcbiAgICAgID8gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgICA/IHN0eWxlUmVtb3ZlIDogdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgID8gc3R5bGVGdW5jdGlvblxuICAgICAgICAgICAgOiBzdHlsZUNvbnN0YW50KShuYW1lLCB2YWx1ZSwgcHJpb3JpdHkgPT0gbnVsbCA/IFwiXCIgOiBwcmlvcml0eSkpXG4gICAgICA6IHN0eWxlVmFsdWUodGhpcy5ub2RlKCksIG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVWYWx1ZShub2RlLCBuYW1lKSB7XG4gIHJldHVybiBub2RlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSlcbiAgICAgIHx8IGRlZmF1bHRWaWV3KG5vZGUpLmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcbn1cbiIsImZ1bmN0aW9uIHRleHRSZW1vdmUoKSB7XG4gIHRoaXMudGV4dENvbnRlbnQgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiB0ZXh0Q29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGV4dEZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IHYgPT0gbnVsbCA/IFwiXCIgOiB2O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2godmFsdWUgPT0gbnVsbFxuICAgICAgICAgID8gdGV4dFJlbW92ZSA6ICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gdGV4dEZ1bmN0aW9uXG4gICAgICAgICAgOiB0ZXh0Q29uc3RhbnQpKHZhbHVlKSlcbiAgICAgIDogdGhpcy5ub2RlKCkudGV4dENvbnRlbnQ7XG59XG4iLCJmdW5jdGlvbiBub25lKCkge31cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHNlbGVjdG9yID09IG51bGwgPyBub25lIDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH07XG59XG4iLCJmdW5jdGlvbiBlbXB0eSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gc2VsZWN0b3IgPT0gbnVsbCA/IGVtcHR5IDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIH07XG59XG4iLCJpbXBvcnQge2V2ZW50fSBmcm9tIFwiLi9zZWxlY3Rpb24vb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBjdXJyZW50ID0gZXZlbnQsIHNvdXJjZTtcbiAgd2hpbGUgKHNvdXJjZSA9IGN1cnJlbnQuc291cmNlRXZlbnQpIGN1cnJlbnQgPSBzb3VyY2U7XG4gIHJldHVybiBjdXJyZW50O1xufVxuIiwiaW1wb3J0IHNvdXJjZUV2ZW50IGZyb20gXCIuL3NvdXJjZUV2ZW50XCI7XG5pbXBvcnQgcG9pbnQgZnJvbSBcIi4vcG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSwgdG91Y2hlcywgaWRlbnRpZmllcikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMpIGlkZW50aWZpZXIgPSB0b3VjaGVzLCB0b3VjaGVzID0gc291cmNlRXZlbnQoKS5jaGFuZ2VkVG91Y2hlcztcblxuICBmb3IgKHZhciBpID0gMCwgbiA9IHRvdWNoZXMgPyB0b3VjaGVzLmxlbmd0aCA6IDAsIHRvdWNoOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKCh0b3VjaCA9IHRvdWNoZXNbaV0pLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJldHVybiBwb2ludChub2RlLCB0b3VjaCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG4iLCJpbXBvcnQgc291cmNlRXZlbnQgZnJvbSBcIi4vc291cmNlRXZlbnRcIjtcbmltcG9ydCBwb2ludCBmcm9tIFwiLi9wb2ludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlLCB0b3VjaGVzKSB7XG4gIGlmICh0b3VjaGVzID09IG51bGwpIHRvdWNoZXMgPSBzb3VyY2VFdmVudCgpLnRvdWNoZXM7XG5cbiAgZm9yICh2YXIgaSA9IDAsIG4gPSB0b3VjaGVzID8gdG91Y2hlcy5sZW5ndGggOiAwLCBwb2ludHMgPSBuZXcgQXJyYXkobik7IGkgPCBuOyArK2kpIHtcbiAgICBwb2ludHNbaV0gPSBwb2ludChub2RlLCB0b3VjaGVzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBwb2ludHM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlKSB7XG4gIHJldHVybiAobm9kZS5vd25lckRvY3VtZW50ICYmIG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldykgLy8gbm9kZSBpcyBhIE5vZGVcbiAgICAgIHx8IChub2RlLmRvY3VtZW50ICYmIG5vZGUpIC8vIG5vZGUgaXMgYSBXaW5kb3dcbiAgICAgIHx8IG5vZGUuZGVmYXVsdFZpZXc7IC8vIG5vZGUgaXMgYSBEb2N1bWVudFxufVxuIiwiaW1wb3J0IGZvcm1hdExvY2FsZSBmcm9tIFwiLi9sb2NhbGVcIjtcblxudmFyIGxvY2FsZTtcbmV4cG9ydCB2YXIgdGltZUZvcm1hdDtcbmV4cG9ydCB2YXIgdGltZVBhcnNlO1xuZXhwb3J0IHZhciB1dGNGb3JtYXQ7XG5leHBvcnQgdmFyIHV0Y1BhcnNlO1xuXG5kZWZhdWx0TG9jYWxlKHtcbiAgZGF0ZVRpbWU6IFwiJXgsICVYXCIsXG4gIGRhdGU6IFwiJS1tLyUtZC8lWVwiLFxuICB0aW1lOiBcIiUtSTolTTolUyAlcFwiLFxuICBwZXJpb2RzOiBbXCJBTVwiLCBcIlBNXCJdLFxuICBkYXlzOiBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXSxcbiAgc2hvcnREYXlzOiBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl0sXG4gIG1vbnRoczogW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl0sXG4gIHNob3J0TW9udGhzOiBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZhdWx0TG9jYWxlKGRlZmluaXRpb24pIHtcbiAgbG9jYWxlID0gZm9ybWF0TG9jYWxlKGRlZmluaXRpb24pO1xuICB0aW1lRm9ybWF0ID0gbG9jYWxlLmZvcm1hdDtcbiAgdGltZVBhcnNlID0gbG9jYWxlLnBhcnNlO1xuICB1dGNGb3JtYXQgPSBsb2NhbGUudXRjRm9ybWF0O1xuICB1dGNQYXJzZSA9IGxvY2FsZS51dGNQYXJzZTtcbiAgcmV0dXJuIGxvY2FsZTtcbn1cbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyB0aW1lRm9ybWF0RGVmYXVsdExvY2FsZSwgdGltZUZvcm1hdCwgdGltZVBhcnNlLCB1dGNGb3JtYXQsIHV0Y1BhcnNlfSBmcm9tIFwiLi9kZWZhdWx0TG9jYWxlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdGltZUZvcm1hdExvY2FsZX0gZnJvbSBcIi4vbG9jYWxlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaXNvRm9ybWF0fSBmcm9tIFwiLi9pc29Gb3JtYXRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpc29QYXJzZX0gZnJvbSBcIi4vaXNvUGFyc2VcIjtcbiIsImltcG9ydCB7dXRjRm9ybWF0fSBmcm9tIFwiLi9kZWZhdWx0TG9jYWxlXCI7XG5cbmV4cG9ydCB2YXIgaXNvU3BlY2lmaWVyID0gXCIlWS0lbS0lZFQlSDolTTolUy4lTFpcIjtcblxuZnVuY3Rpb24gZm9ybWF0SXNvTmF0aXZlKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKTtcbn1cblxudmFyIGZvcm1hdElzbyA9IERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nXG4gICAgPyBmb3JtYXRJc29OYXRpdmVcbiAgICA6IHV0Y0Zvcm1hdChpc29TcGVjaWZpZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRJc287XG4iLCJpbXBvcnQge2lzb1NwZWNpZmllcn0gZnJvbSBcIi4vaXNvRm9ybWF0XCI7XG5pbXBvcnQge3V0Y1BhcnNlfSBmcm9tIFwiLi9kZWZhdWx0TG9jYWxlXCI7XG5cbmZ1bmN0aW9uIHBhcnNlSXNvTmF0aXZlKHN0cmluZykge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHN0cmluZyk7XG4gIHJldHVybiBpc05hTihkYXRlKSA/IG51bGwgOiBkYXRlO1xufVxuXG52YXIgcGFyc2VJc28gPSArbmV3IERhdGUoXCIyMDAwLTAxLTAxVDAwOjAwOjAwLjAwMFpcIilcbiAgICA/IHBhcnNlSXNvTmF0aXZlXG4gICAgOiB1dGNQYXJzZShpc29TcGVjaWZpZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBwYXJzZUlzbztcbiIsImltcG9ydCB7XG4gIHRpbWVEYXksXG4gIHRpbWVTdW5kYXksXG4gIHRpbWVNb25kYXksXG4gIHRpbWVUaHVyc2RheSxcbiAgdGltZVllYXIsXG4gIHV0Y0RheSxcbiAgdXRjU3VuZGF5LFxuICB1dGNNb25kYXksXG4gIHV0Y1RodXJzZGF5LFxuICB1dGNZZWFyXG59IGZyb20gXCJkMy10aW1lXCI7XG5cbmZ1bmN0aW9uIGxvY2FsRGF0ZShkKSB7XG4gIGlmICgwIDw9IGQueSAmJiBkLnkgPCAxMDApIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKC0xLCBkLm0sIGQuZCwgZC5ILCBkLk0sIGQuUywgZC5MKTtcbiAgICBkYXRlLnNldEZ1bGxZZWFyKGQueSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbiAgcmV0dXJuIG5ldyBEYXRlKGQueSwgZC5tLCBkLmQsIGQuSCwgZC5NLCBkLlMsIGQuTCk7XG59XG5cbmZ1bmN0aW9uIHV0Y0RhdGUoZCkge1xuICBpZiAoMCA8PSBkLnkgJiYgZC55IDwgMTAwKSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQygtMSwgZC5tLCBkLmQsIGQuSCwgZC5NLCBkLlMsIGQuTCkpO1xuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoZC55KTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuICByZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoZC55LCBkLm0sIGQuZCwgZC5ILCBkLk0sIGQuUywgZC5MKSk7XG59XG5cbmZ1bmN0aW9uIG5ld1llYXIoeSkge1xuICByZXR1cm4ge3k6IHksIG06IDAsIGQ6IDEsIEg6IDAsIE06IDAsIFM6IDAsIEw6IDB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRMb2NhbGUobG9jYWxlKSB7XG4gIHZhciBsb2NhbGVfZGF0ZVRpbWUgPSBsb2NhbGUuZGF0ZVRpbWUsXG4gICAgICBsb2NhbGVfZGF0ZSA9IGxvY2FsZS5kYXRlLFxuICAgICAgbG9jYWxlX3RpbWUgPSBsb2NhbGUudGltZSxcbiAgICAgIGxvY2FsZV9wZXJpb2RzID0gbG9jYWxlLnBlcmlvZHMsXG4gICAgICBsb2NhbGVfd2Vla2RheXMgPSBsb2NhbGUuZGF5cyxcbiAgICAgIGxvY2FsZV9zaG9ydFdlZWtkYXlzID0gbG9jYWxlLnNob3J0RGF5cyxcbiAgICAgIGxvY2FsZV9tb250aHMgPSBsb2NhbGUubW9udGhzLFxuICAgICAgbG9jYWxlX3Nob3J0TW9udGhzID0gbG9jYWxlLnNob3J0TW9udGhzO1xuXG4gIHZhciBwZXJpb2RSZSA9IGZvcm1hdFJlKGxvY2FsZV9wZXJpb2RzKSxcbiAgICAgIHBlcmlvZExvb2t1cCA9IGZvcm1hdExvb2t1cChsb2NhbGVfcGVyaW9kcyksXG4gICAgICB3ZWVrZGF5UmUgPSBmb3JtYXRSZShsb2NhbGVfd2Vla2RheXMpLFxuICAgICAgd2Vla2RheUxvb2t1cCA9IGZvcm1hdExvb2t1cChsb2NhbGVfd2Vla2RheXMpLFxuICAgICAgc2hvcnRXZWVrZGF5UmUgPSBmb3JtYXRSZShsb2NhbGVfc2hvcnRXZWVrZGF5cyksXG4gICAgICBzaG9ydFdlZWtkYXlMb29rdXAgPSBmb3JtYXRMb29rdXAobG9jYWxlX3Nob3J0V2Vla2RheXMpLFxuICAgICAgbW9udGhSZSA9IGZvcm1hdFJlKGxvY2FsZV9tb250aHMpLFxuICAgICAgbW9udGhMb29rdXAgPSBmb3JtYXRMb29rdXAobG9jYWxlX21vbnRocyksXG4gICAgICBzaG9ydE1vbnRoUmUgPSBmb3JtYXRSZShsb2NhbGVfc2hvcnRNb250aHMpLFxuICAgICAgc2hvcnRNb250aExvb2t1cCA9IGZvcm1hdExvb2t1cChsb2NhbGVfc2hvcnRNb250aHMpO1xuXG4gIHZhciBmb3JtYXRzID0ge1xuICAgIFwiYVwiOiBmb3JtYXRTaG9ydFdlZWtkYXksXG4gICAgXCJBXCI6IGZvcm1hdFdlZWtkYXksXG4gICAgXCJiXCI6IGZvcm1hdFNob3J0TW9udGgsXG4gICAgXCJCXCI6IGZvcm1hdE1vbnRoLFxuICAgIFwiY1wiOiBudWxsLFxuICAgIFwiZFwiOiBmb3JtYXREYXlPZk1vbnRoLFxuICAgIFwiZVwiOiBmb3JtYXREYXlPZk1vbnRoLFxuICAgIFwiZlwiOiBmb3JtYXRNaWNyb3NlY29uZHMsXG4gICAgXCJIXCI6IGZvcm1hdEhvdXIyNCxcbiAgICBcIklcIjogZm9ybWF0SG91cjEyLFxuICAgIFwialwiOiBmb3JtYXREYXlPZlllYXIsXG4gICAgXCJMXCI6IGZvcm1hdE1pbGxpc2Vjb25kcyxcbiAgICBcIm1cIjogZm9ybWF0TW9udGhOdW1iZXIsXG4gICAgXCJNXCI6IGZvcm1hdE1pbnV0ZXMsXG4gICAgXCJwXCI6IGZvcm1hdFBlcmlvZCxcbiAgICBcIlFcIjogZm9ybWF0VW5peFRpbWVzdGFtcCxcbiAgICBcInNcIjogZm9ybWF0VW5peFRpbWVzdGFtcFNlY29uZHMsXG4gICAgXCJTXCI6IGZvcm1hdFNlY29uZHMsXG4gICAgXCJ1XCI6IGZvcm1hdFdlZWtkYXlOdW1iZXJNb25kYXksXG4gICAgXCJVXCI6IGZvcm1hdFdlZWtOdW1iZXJTdW5kYXksXG4gICAgXCJWXCI6IGZvcm1hdFdlZWtOdW1iZXJJU08sXG4gICAgXCJ3XCI6IGZvcm1hdFdlZWtkYXlOdW1iZXJTdW5kYXksXG4gICAgXCJXXCI6IGZvcm1hdFdlZWtOdW1iZXJNb25kYXksXG4gICAgXCJ4XCI6IG51bGwsXG4gICAgXCJYXCI6IG51bGwsXG4gICAgXCJ5XCI6IGZvcm1hdFllYXIsXG4gICAgXCJZXCI6IGZvcm1hdEZ1bGxZZWFyLFxuICAgIFwiWlwiOiBmb3JtYXRab25lLFxuICAgIFwiJVwiOiBmb3JtYXRMaXRlcmFsUGVyY2VudFxuICB9O1xuXG4gIHZhciB1dGNGb3JtYXRzID0ge1xuICAgIFwiYVwiOiBmb3JtYXRVVENTaG9ydFdlZWtkYXksXG4gICAgXCJBXCI6IGZvcm1hdFVUQ1dlZWtkYXksXG4gICAgXCJiXCI6IGZvcm1hdFVUQ1Nob3J0TW9udGgsXG4gICAgXCJCXCI6IGZvcm1hdFVUQ01vbnRoLFxuICAgIFwiY1wiOiBudWxsLFxuICAgIFwiZFwiOiBmb3JtYXRVVENEYXlPZk1vbnRoLFxuICAgIFwiZVwiOiBmb3JtYXRVVENEYXlPZk1vbnRoLFxuICAgIFwiZlwiOiBmb3JtYXRVVENNaWNyb3NlY29uZHMsXG4gICAgXCJIXCI6IGZvcm1hdFVUQ0hvdXIyNCxcbiAgICBcIklcIjogZm9ybWF0VVRDSG91cjEyLFxuICAgIFwialwiOiBmb3JtYXRVVENEYXlPZlllYXIsXG4gICAgXCJMXCI6IGZvcm1hdFVUQ01pbGxpc2Vjb25kcyxcbiAgICBcIm1cIjogZm9ybWF0VVRDTW9udGhOdW1iZXIsXG4gICAgXCJNXCI6IGZvcm1hdFVUQ01pbnV0ZXMsXG4gICAgXCJwXCI6IGZvcm1hdFVUQ1BlcmlvZCxcbiAgICBcIlFcIjogZm9ybWF0VW5peFRpbWVzdGFtcCxcbiAgICBcInNcIjogZm9ybWF0VW5peFRpbWVzdGFtcFNlY29uZHMsXG4gICAgXCJTXCI6IGZvcm1hdFVUQ1NlY29uZHMsXG4gICAgXCJ1XCI6IGZvcm1hdFVUQ1dlZWtkYXlOdW1iZXJNb25kYXksXG4gICAgXCJVXCI6IGZvcm1hdFVUQ1dlZWtOdW1iZXJTdW5kYXksXG4gICAgXCJWXCI6IGZvcm1hdFVUQ1dlZWtOdW1iZXJJU08sXG4gICAgXCJ3XCI6IGZvcm1hdFVUQ1dlZWtkYXlOdW1iZXJTdW5kYXksXG4gICAgXCJXXCI6IGZvcm1hdFVUQ1dlZWtOdW1iZXJNb25kYXksXG4gICAgXCJ4XCI6IG51bGwsXG4gICAgXCJYXCI6IG51bGwsXG4gICAgXCJ5XCI6IGZvcm1hdFVUQ1llYXIsXG4gICAgXCJZXCI6IGZvcm1hdFVUQ0Z1bGxZZWFyLFxuICAgIFwiWlwiOiBmb3JtYXRVVENab25lLFxuICAgIFwiJVwiOiBmb3JtYXRMaXRlcmFsUGVyY2VudFxuICB9O1xuXG4gIHZhciBwYXJzZXMgPSB7XG4gICAgXCJhXCI6IHBhcnNlU2hvcnRXZWVrZGF5LFxuICAgIFwiQVwiOiBwYXJzZVdlZWtkYXksXG4gICAgXCJiXCI6IHBhcnNlU2hvcnRNb250aCxcbiAgICBcIkJcIjogcGFyc2VNb250aCxcbiAgICBcImNcIjogcGFyc2VMb2NhbGVEYXRlVGltZSxcbiAgICBcImRcIjogcGFyc2VEYXlPZk1vbnRoLFxuICAgIFwiZVwiOiBwYXJzZURheU9mTW9udGgsXG4gICAgXCJmXCI6IHBhcnNlTWljcm9zZWNvbmRzLFxuICAgIFwiSFwiOiBwYXJzZUhvdXIyNCxcbiAgICBcIklcIjogcGFyc2VIb3VyMjQsXG4gICAgXCJqXCI6IHBhcnNlRGF5T2ZZZWFyLFxuICAgIFwiTFwiOiBwYXJzZU1pbGxpc2Vjb25kcyxcbiAgICBcIm1cIjogcGFyc2VNb250aE51bWJlcixcbiAgICBcIk1cIjogcGFyc2VNaW51dGVzLFxuICAgIFwicFwiOiBwYXJzZVBlcmlvZCxcbiAgICBcIlFcIjogcGFyc2VVbml4VGltZXN0YW1wLFxuICAgIFwic1wiOiBwYXJzZVVuaXhUaW1lc3RhbXBTZWNvbmRzLFxuICAgIFwiU1wiOiBwYXJzZVNlY29uZHMsXG4gICAgXCJ1XCI6IHBhcnNlV2Vla2RheU51bWJlck1vbmRheSxcbiAgICBcIlVcIjogcGFyc2VXZWVrTnVtYmVyU3VuZGF5LFxuICAgIFwiVlwiOiBwYXJzZVdlZWtOdW1iZXJJU08sXG4gICAgXCJ3XCI6IHBhcnNlV2Vla2RheU51bWJlclN1bmRheSxcbiAgICBcIldcIjogcGFyc2VXZWVrTnVtYmVyTW9uZGF5LFxuICAgIFwieFwiOiBwYXJzZUxvY2FsZURhdGUsXG4gICAgXCJYXCI6IHBhcnNlTG9jYWxlVGltZSxcbiAgICBcInlcIjogcGFyc2VZZWFyLFxuICAgIFwiWVwiOiBwYXJzZUZ1bGxZZWFyLFxuICAgIFwiWlwiOiBwYXJzZVpvbmUsXG4gICAgXCIlXCI6IHBhcnNlTGl0ZXJhbFBlcmNlbnRcbiAgfTtcblxuICAvLyBUaGVzZSByZWN1cnNpdmUgZGlyZWN0aXZlIGRlZmluaXRpb25zIG11c3QgYmUgZGVmZXJyZWQuXG4gIGZvcm1hdHMueCA9IG5ld0Zvcm1hdChsb2NhbGVfZGF0ZSwgZm9ybWF0cyk7XG4gIGZvcm1hdHMuWCA9IG5ld0Zvcm1hdChsb2NhbGVfdGltZSwgZm9ybWF0cyk7XG4gIGZvcm1hdHMuYyA9IG5ld0Zvcm1hdChsb2NhbGVfZGF0ZVRpbWUsIGZvcm1hdHMpO1xuICB1dGNGb3JtYXRzLnggPSBuZXdGb3JtYXQobG9jYWxlX2RhdGUsIHV0Y0Zvcm1hdHMpO1xuICB1dGNGb3JtYXRzLlggPSBuZXdGb3JtYXQobG9jYWxlX3RpbWUsIHV0Y0Zvcm1hdHMpO1xuICB1dGNGb3JtYXRzLmMgPSBuZXdGb3JtYXQobG9jYWxlX2RhdGVUaW1lLCB1dGNGb3JtYXRzKTtcblxuICBmdW5jdGlvbiBuZXdGb3JtYXQoc3BlY2lmaWVyLCBmb3JtYXRzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGRhdGUpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBbXSxcbiAgICAgICAgICBpID0gLTEsXG4gICAgICAgICAgaiA9IDAsXG4gICAgICAgICAgbiA9IHNwZWNpZmllci5sZW5ndGgsXG4gICAgICAgICAgYyxcbiAgICAgICAgICBwYWQsXG4gICAgICAgICAgZm9ybWF0O1xuXG4gICAgICBpZiAoIShkYXRlIGluc3RhbmNlb2YgRGF0ZSkpIGRhdGUgPSBuZXcgRGF0ZSgrZGF0ZSk7XG5cbiAgICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICAgIGlmIChzcGVjaWZpZXIuY2hhckNvZGVBdChpKSA9PT0gMzcpIHtcbiAgICAgICAgICBzdHJpbmcucHVzaChzcGVjaWZpZXIuc2xpY2UoaiwgaSkpO1xuICAgICAgICAgIGlmICgocGFkID0gcGFkc1tjID0gc3BlY2lmaWVyLmNoYXJBdCgrK2kpXSkgIT0gbnVsbCkgYyA9IHNwZWNpZmllci5jaGFyQXQoKytpKTtcbiAgICAgICAgICBlbHNlIHBhZCA9IGMgPT09IFwiZVwiID8gXCIgXCIgOiBcIjBcIjtcbiAgICAgICAgICBpZiAoZm9ybWF0ID0gZm9ybWF0c1tjXSkgYyA9IGZvcm1hdChkYXRlLCBwYWQpO1xuICAgICAgICAgIHN0cmluZy5wdXNoKGMpO1xuICAgICAgICAgIGogPSBpICsgMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzdHJpbmcucHVzaChzcGVjaWZpZXIuc2xpY2UoaiwgaSkpO1xuICAgICAgcmV0dXJuIHN0cmluZy5qb2luKFwiXCIpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBuZXdQYXJzZShzcGVjaWZpZXIsIG5ld0RhdGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICB2YXIgZCA9IG5ld1llYXIoMTkwMCksXG4gICAgICAgICAgaSA9IHBhcnNlU3BlY2lmaWVyKGQsIHNwZWNpZmllciwgc3RyaW5nICs9IFwiXCIsIDApLFxuICAgICAgICAgIHdlZWssIGRheTtcbiAgICAgIGlmIChpICE9IHN0cmluZy5sZW5ndGgpIHJldHVybiBudWxsO1xuXG4gICAgICAvLyBJZiBhIFVOSVggdGltZXN0YW1wIGlzIHNwZWNpZmllZCwgcmV0dXJuIGl0LlxuICAgICAgaWYgKFwiUVwiIGluIGQpIHJldHVybiBuZXcgRGF0ZShkLlEpO1xuXG4gICAgICAvLyBUaGUgYW0tcG0gZmxhZyBpcyAwIGZvciBBTSwgYW5kIDEgZm9yIFBNLlxuICAgICAgaWYgKFwicFwiIGluIGQpIGQuSCA9IGQuSCAlIDEyICsgZC5wICogMTI7XG5cbiAgICAgIC8vIENvbnZlcnQgZGF5LW9mLXdlZWsgYW5kIHdlZWstb2YteWVhciB0byBkYXktb2YteWVhci5cbiAgICAgIGlmIChcIlZcIiBpbiBkKSB7XG4gICAgICAgIGlmIChkLlYgPCAxIHx8IGQuViA+IDUzKSByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKCEoXCJ3XCIgaW4gZCkpIGQudyA9IDE7XG4gICAgICAgIGlmIChcIlpcIiBpbiBkKSB7XG4gICAgICAgICAgd2VlayA9IHV0Y0RhdGUobmV3WWVhcihkLnkpKSwgZGF5ID0gd2Vlay5nZXRVVENEYXkoKTtcbiAgICAgICAgICB3ZWVrID0gZGF5ID4gNCB8fCBkYXkgPT09IDAgPyB1dGNNb25kYXkuY2VpbCh3ZWVrKSA6IHV0Y01vbmRheSh3ZWVrKTtcbiAgICAgICAgICB3ZWVrID0gdXRjRGF5Lm9mZnNldCh3ZWVrLCAoZC5WIC0gMSkgKiA3KTtcbiAgICAgICAgICBkLnkgPSB3ZWVrLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgICAgICAgZC5tID0gd2Vlay5nZXRVVENNb250aCgpO1xuICAgICAgICAgIGQuZCA9IHdlZWsuZ2V0VVRDRGF0ZSgpICsgKGQudyArIDYpICUgNztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ZWVrID0gbmV3RGF0ZShuZXdZZWFyKGQueSkpLCBkYXkgPSB3ZWVrLmdldERheSgpO1xuICAgICAgICAgIHdlZWsgPSBkYXkgPiA0IHx8IGRheSA9PT0gMCA/IHRpbWVNb25kYXkuY2VpbCh3ZWVrKSA6IHRpbWVNb25kYXkod2Vlayk7XG4gICAgICAgICAgd2VlayA9IHRpbWVEYXkub2Zmc2V0KHdlZWssIChkLlYgLSAxKSAqIDcpO1xuICAgICAgICAgIGQueSA9IHdlZWsuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICBkLm0gPSB3ZWVrLmdldE1vbnRoKCk7XG4gICAgICAgICAgZC5kID0gd2Vlay5nZXREYXRlKCkgKyAoZC53ICsgNikgJSA3O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFwiV1wiIGluIGQgfHwgXCJVXCIgaW4gZCkge1xuICAgICAgICBpZiAoIShcIndcIiBpbiBkKSkgZC53ID0gXCJ1XCIgaW4gZCA/IGQudSAlIDcgOiBcIldcIiBpbiBkID8gMSA6IDA7XG4gICAgICAgIGRheSA9IFwiWlwiIGluIGQgPyB1dGNEYXRlKG5ld1llYXIoZC55KSkuZ2V0VVRDRGF5KCkgOiBuZXdEYXRlKG5ld1llYXIoZC55KSkuZ2V0RGF5KCk7XG4gICAgICAgIGQubSA9IDA7XG4gICAgICAgIGQuZCA9IFwiV1wiIGluIGQgPyAoZC53ICsgNikgJSA3ICsgZC5XICogNyAtIChkYXkgKyA1KSAlIDcgOiBkLncgKyBkLlUgKiA3IC0gKGRheSArIDYpICUgNztcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYSB0aW1lIHpvbmUgaXMgc3BlY2lmaWVkLCBhbGwgZmllbGRzIGFyZSBpbnRlcnByZXRlZCBhcyBVVEMgYW5kIHRoZW5cbiAgICAgIC8vIG9mZnNldCBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCB0aW1lIHpvbmUuXG4gICAgICBpZiAoXCJaXCIgaW4gZCkge1xuICAgICAgICBkLkggKz0gZC5aIC8gMTAwIHwgMDtcbiAgICAgICAgZC5NICs9IGQuWiAlIDEwMDtcbiAgICAgICAgcmV0dXJuIHV0Y0RhdGUoZCk7XG4gICAgICB9XG5cbiAgICAgIC8vIE90aGVyd2lzZSwgYWxsIGZpZWxkcyBhcmUgaW4gbG9jYWwgdGltZS5cbiAgICAgIHJldHVybiBuZXdEYXRlKGQpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZVNwZWNpZmllcihkLCBzcGVjaWZpZXIsIHN0cmluZywgaikge1xuICAgIHZhciBpID0gMCxcbiAgICAgICAgbiA9IHNwZWNpZmllci5sZW5ndGgsXG4gICAgICAgIG0gPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICBjLFxuICAgICAgICBwYXJzZTtcblxuICAgIHdoaWxlIChpIDwgbikge1xuICAgICAgaWYgKGogPj0gbSkgcmV0dXJuIC0xO1xuICAgICAgYyA9IHNwZWNpZmllci5jaGFyQ29kZUF0KGkrKyk7XG4gICAgICBpZiAoYyA9PT0gMzcpIHtcbiAgICAgICAgYyA9IHNwZWNpZmllci5jaGFyQXQoaSsrKTtcbiAgICAgICAgcGFyc2UgPSBwYXJzZXNbYyBpbiBwYWRzID8gc3BlY2lmaWVyLmNoYXJBdChpKyspIDogY107XG4gICAgICAgIGlmICghcGFyc2UgfHwgKChqID0gcGFyc2UoZCwgc3RyaW5nLCBqKSkgPCAwKSkgcmV0dXJuIC0xO1xuICAgICAgfSBlbHNlIGlmIChjICE9IHN0cmluZy5jaGFyQ29kZUF0KGorKykpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBqO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VQZXJpb2QoZCwgc3RyaW5nLCBpKSB7XG4gICAgdmFyIG4gPSBwZXJpb2RSZS5leGVjKHN0cmluZy5zbGljZShpKSk7XG4gICAgcmV0dXJuIG4gPyAoZC5wID0gcGVyaW9kTG9va3VwW25bMF0udG9Mb3dlckNhc2UoKV0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlU2hvcnRXZWVrZGF5KGQsIHN0cmluZywgaSkge1xuICAgIHZhciBuID0gc2hvcnRXZWVrZGF5UmUuZXhlYyhzdHJpbmcuc2xpY2UoaSkpO1xuICAgIHJldHVybiBuID8gKGQudyA9IHNob3J0V2Vla2RheUxvb2t1cFtuWzBdLnRvTG93ZXJDYXNlKCldLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZVdlZWtkYXkoZCwgc3RyaW5nLCBpKSB7XG4gICAgdmFyIG4gPSB3ZWVrZGF5UmUuZXhlYyhzdHJpbmcuc2xpY2UoaSkpO1xuICAgIHJldHVybiBuID8gKGQudyA9IHdlZWtkYXlMb29rdXBbblswXS50b0xvd2VyQ2FzZSgpXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VTaG9ydE1vbnRoKGQsIHN0cmluZywgaSkge1xuICAgIHZhciBuID0gc2hvcnRNb250aFJlLmV4ZWMoc3RyaW5nLnNsaWNlKGkpKTtcbiAgICByZXR1cm4gbiA/IChkLm0gPSBzaG9ydE1vbnRoTG9va3VwW25bMF0udG9Mb3dlckNhc2UoKV0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlTW9udGgoZCwgc3RyaW5nLCBpKSB7XG4gICAgdmFyIG4gPSBtb250aFJlLmV4ZWMoc3RyaW5nLnNsaWNlKGkpKTtcbiAgICByZXR1cm4gbiA/IChkLm0gPSBtb250aExvb2t1cFtuWzBdLnRvTG93ZXJDYXNlKCldLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUxvY2FsZURhdGVUaW1lKGQsIHN0cmluZywgaSkge1xuICAgIHJldHVybiBwYXJzZVNwZWNpZmllcihkLCBsb2NhbGVfZGF0ZVRpbWUsIHN0cmluZywgaSk7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUxvY2FsZURhdGUoZCwgc3RyaW5nLCBpKSB7XG4gICAgcmV0dXJuIHBhcnNlU3BlY2lmaWVyKGQsIGxvY2FsZV9kYXRlLCBzdHJpbmcsIGkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VMb2NhbGVUaW1lKGQsIHN0cmluZywgaSkge1xuICAgIHJldHVybiBwYXJzZVNwZWNpZmllcihkLCBsb2NhbGVfdGltZSwgc3RyaW5nLCBpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFNob3J0V2Vla2RheShkKSB7XG4gICAgcmV0dXJuIGxvY2FsZV9zaG9ydFdlZWtkYXlzW2QuZ2V0RGF5KCldO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0V2Vla2RheShkKSB7XG4gICAgcmV0dXJuIGxvY2FsZV93ZWVrZGF5c1tkLmdldERheSgpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFNob3J0TW9udGgoZCkge1xuICAgIHJldHVybiBsb2NhbGVfc2hvcnRNb250aHNbZC5nZXRNb250aCgpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdE1vbnRoKGQpIHtcbiAgICByZXR1cm4gbG9jYWxlX21vbnRoc1tkLmdldE1vbnRoKCldO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0UGVyaW9kKGQpIHtcbiAgICByZXR1cm4gbG9jYWxlX3BlcmlvZHNbKyhkLmdldEhvdXJzKCkgPj0gMTIpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFVUQ1Nob3J0V2Vla2RheShkKSB7XG4gICAgcmV0dXJuIGxvY2FsZV9zaG9ydFdlZWtkYXlzW2QuZ2V0VVRDRGF5KCldO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0VVRDV2Vla2RheShkKSB7XG4gICAgcmV0dXJuIGxvY2FsZV93ZWVrZGF5c1tkLmdldFVUQ0RheSgpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFVUQ1Nob3J0TW9udGgoZCkge1xuICAgIHJldHVybiBsb2NhbGVfc2hvcnRNb250aHNbZC5nZXRVVENNb250aCgpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFVUQ01vbnRoKGQpIHtcbiAgICByZXR1cm4gbG9jYWxlX21vbnRoc1tkLmdldFVUQ01vbnRoKCldO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0VVRDUGVyaW9kKGQpIHtcbiAgICByZXR1cm4gbG9jYWxlX3BlcmlvZHNbKyhkLmdldFVUQ0hvdXJzKCkgPj0gMTIpXTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZm9ybWF0OiBmdW5jdGlvbihzcGVjaWZpZXIpIHtcbiAgICAgIHZhciBmID0gbmV3Rm9ybWF0KHNwZWNpZmllciArPSBcIlwiLCBmb3JtYXRzKTtcbiAgICAgIGYudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHNwZWNpZmllcjsgfTtcbiAgICAgIHJldHVybiBmO1xuICAgIH0sXG4gICAgcGFyc2U6IGZ1bmN0aW9uKHNwZWNpZmllcikge1xuICAgICAgdmFyIHAgPSBuZXdQYXJzZShzcGVjaWZpZXIgKz0gXCJcIiwgbG9jYWxEYXRlKTtcbiAgICAgIHAudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHNwZWNpZmllcjsgfTtcbiAgICAgIHJldHVybiBwO1xuICAgIH0sXG4gICAgdXRjRm9ybWF0OiBmdW5jdGlvbihzcGVjaWZpZXIpIHtcbiAgICAgIHZhciBmID0gbmV3Rm9ybWF0KHNwZWNpZmllciArPSBcIlwiLCB1dGNGb3JtYXRzKTtcbiAgICAgIGYudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHNwZWNpZmllcjsgfTtcbiAgICAgIHJldHVybiBmO1xuICAgIH0sXG4gICAgdXRjUGFyc2U6IGZ1bmN0aW9uKHNwZWNpZmllcikge1xuICAgICAgdmFyIHAgPSBuZXdQYXJzZShzcGVjaWZpZXIsIHV0Y0RhdGUpO1xuICAgICAgcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gc3BlY2lmaWVyOyB9O1xuICAgICAgcmV0dXJuIHA7XG4gICAgfVxuICB9O1xufVxuXG52YXIgcGFkcyA9IHtcIi1cIjogXCJcIiwgXCJfXCI6IFwiIFwiLCBcIjBcIjogXCIwXCJ9LFxuICAgIG51bWJlclJlID0gL15cXHMqXFxkKy8sIC8vIG5vdGU6IGlnbm9yZXMgbmV4dCBkaXJlY3RpdmVcbiAgICBwZXJjZW50UmUgPSAvXiUvLFxuICAgIHJlcXVvdGVSZSA9IC9bXFxcXF4kKis/fFtcXF0oKS57fV0vZztcblxuZnVuY3Rpb24gcGFkKHZhbHVlLCBmaWxsLCB3aWR0aCkge1xuICB2YXIgc2lnbiA9IHZhbHVlIDwgMCA/IFwiLVwiIDogXCJcIixcbiAgICAgIHN0cmluZyA9IChzaWduID8gLXZhbHVlIDogdmFsdWUpICsgXCJcIixcbiAgICAgIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG4gIHJldHVybiBzaWduICsgKGxlbmd0aCA8IHdpZHRoID8gbmV3IEFycmF5KHdpZHRoIC0gbGVuZ3RoICsgMSkuam9pbihmaWxsKSArIHN0cmluZyA6IHN0cmluZyk7XG59XG5cbmZ1bmN0aW9uIHJlcXVvdGUocykge1xuICByZXR1cm4gcy5yZXBsYWNlKHJlcXVvdGVSZSwgXCJcXFxcJCZcIik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFJlKG5hbWVzKSB7XG4gIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgbmFtZXMubWFwKHJlcXVvdGUpLmpvaW4oXCJ8XCIpICsgXCIpXCIsIFwiaVwiKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0TG9va3VwKG5hbWVzKSB7XG4gIHZhciBtYXAgPSB7fSwgaSA9IC0xLCBuID0gbmFtZXMubGVuZ3RoO1xuICB3aGlsZSAoKytpIDwgbikgbWFwW25hbWVzW2ldLnRvTG93ZXJDYXNlKCldID0gaTtcbiAgcmV0dXJuIG1hcDtcbn1cblxuZnVuY3Rpb24gcGFyc2VXZWVrZGF5TnVtYmVyU3VuZGF5KGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAxKSk7XG4gIHJldHVybiBuID8gKGQudyA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlV2Vla2RheU51bWJlck1vbmRheShkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMSkpO1xuICByZXR1cm4gbiA/IChkLnUgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVdlZWtOdW1iZXJTdW5kYXkoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgcmV0dXJuIG4gPyAoZC5VID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VXZWVrTnVtYmVySVNPKGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAyKSk7XG4gIHJldHVybiBuID8gKGQuViA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlV2Vla051bWJlck1vbmRheShkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMikpO1xuICByZXR1cm4gbiA/IChkLlcgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZUZ1bGxZZWFyKGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyA0KSk7XG4gIHJldHVybiBuID8gKGQueSA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlWWVhcihkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMikpO1xuICByZXR1cm4gbiA/IChkLnkgPSArblswXSArICgrblswXSA+IDY4ID8gMTkwMCA6IDIwMDApLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlWm9uZShkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSAvXihaKXwoWystXVxcZFxcZCkoPzo6PyhcXGRcXGQpKT8vLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyA2KSk7XG4gIHJldHVybiBuID8gKGQuWiA9IG5bMV0gPyAwIDogLShuWzJdICsgKG5bM10gfHwgXCIwMFwiKSksIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VNb250aE51bWJlcihkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMikpO1xuICByZXR1cm4gbiA/IChkLm0gPSBuWzBdIC0gMSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZURheU9mTW9udGgoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgcmV0dXJuIG4gPyAoZC5kID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXlPZlllYXIoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDMpKTtcbiAgcmV0dXJuIG4gPyAoZC5tID0gMCwgZC5kID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VIb3VyMjQoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgcmV0dXJuIG4gPyAoZC5IID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VNaW51dGVzKGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAyKSk7XG4gIHJldHVybiBuID8gKGQuTSA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlU2Vjb25kcyhkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMikpO1xuICByZXR1cm4gbiA/IChkLlMgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZU1pbGxpc2Vjb25kcyhkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMykpO1xuICByZXR1cm4gbiA/IChkLkwgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZU1pY3Jvc2Vjb25kcyhkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgNikpO1xuICByZXR1cm4gbiA/IChkLkwgPSBNYXRoLmZsb29yKG5bMF0gLyAxMDAwKSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZUxpdGVyYWxQZXJjZW50KGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IHBlcmNlbnRSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMSkpO1xuICByZXR1cm4gbiA/IGkgKyBuWzBdLmxlbmd0aCA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVVuaXhUaW1lc3RhbXAoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSkpO1xuICByZXR1cm4gbiA/IChkLlEgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVVuaXhUaW1lc3RhbXBTZWNvbmRzKGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGkpKTtcbiAgcmV0dXJuIG4gPyAoZC5RID0gKCtuWzBdKSAqIDEwMDAsIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF5T2ZNb250aChkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXREYXRlKCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRIb3VyMjQoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0SG91cnMoKSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEhvdXIxMihkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRIb3VycygpICUgMTIgfHwgMTIsIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXlPZlllYXIoZCwgcCkge1xuICByZXR1cm4gcGFkKDEgKyB0aW1lRGF5LmNvdW50KHRpbWVZZWFyKGQpLCBkKSwgcCwgMyk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE1pbGxpc2Vjb25kcyhkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRNaWxsaXNlY29uZHMoKSwgcCwgMyk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE1pY3Jvc2Vjb25kcyhkLCBwKSB7XG4gIHJldHVybiBmb3JtYXRNaWxsaXNlY29uZHMoZCwgcCkgKyBcIjAwMFwiO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRNb250aE51bWJlcihkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRNb250aCgpICsgMSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE1pbnV0ZXMoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0TWludXRlcygpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0U2Vjb25kcyhkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRTZWNvbmRzKCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRXZWVrZGF5TnVtYmVyTW9uZGF5KGQpIHtcbiAgdmFyIGRheSA9IGQuZ2V0RGF5KCk7XG4gIHJldHVybiBkYXkgPT09IDAgPyA3IDogZGF5O1xufVxuXG5mdW5jdGlvbiBmb3JtYXRXZWVrTnVtYmVyU3VuZGF5KGQsIHApIHtcbiAgcmV0dXJuIHBhZCh0aW1lU3VuZGF5LmNvdW50KHRpbWVZZWFyKGQpLCBkKSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFdlZWtOdW1iZXJJU08oZCwgcCkge1xuICB2YXIgZGF5ID0gZC5nZXREYXkoKTtcbiAgZCA9IChkYXkgPj0gNCB8fCBkYXkgPT09IDApID8gdGltZVRodXJzZGF5KGQpIDogdGltZVRodXJzZGF5LmNlaWwoZCk7XG4gIHJldHVybiBwYWQodGltZVRodXJzZGF5LmNvdW50KHRpbWVZZWFyKGQpLCBkKSArICh0aW1lWWVhcihkKS5nZXREYXkoKSA9PT0gNCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRXZWVrZGF5TnVtYmVyU3VuZGF5KGQpIHtcbiAgcmV0dXJuIGQuZ2V0RGF5KCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFdlZWtOdW1iZXJNb25kYXkoZCwgcCkge1xuICByZXR1cm4gcGFkKHRpbWVNb25kYXkuY291bnQodGltZVllYXIoZCksIGQpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0WWVhcihkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRGdWxsWWVhcigpICUgMTAwLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RnVsbFllYXIoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0RnVsbFllYXIoKSAlIDEwMDAwLCBwLCA0KTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0Wm9uZShkKSB7XG4gIHZhciB6ID0gZC5nZXRUaW1lem9uZU9mZnNldCgpO1xuICByZXR1cm4gKHogPiAwID8gXCItXCIgOiAoeiAqPSAtMSwgXCIrXCIpKVxuICAgICAgKyBwYWQoeiAvIDYwIHwgMCwgXCIwXCIsIDIpXG4gICAgICArIHBhZCh6ICUgNjAsIFwiMFwiLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDRGF5T2ZNb250aChkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRVVENEYXRlKCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENIb3VyMjQoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0VVRDSG91cnMoKSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ0hvdXIxMihkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENEYXlPZlllYXIoZCwgcCkge1xuICByZXR1cm4gcGFkKDEgKyB1dGNEYXkuY291bnQodXRjWWVhcihkKSwgZCksIHAsIDMpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENNaWxsaXNlY29uZHMoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0VVRDTWlsbGlzZWNvbmRzKCksIHAsIDMpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENNaWNyb3NlY29uZHMoZCwgcCkge1xuICByZXR1cm4gZm9ybWF0VVRDTWlsbGlzZWNvbmRzKGQsIHApICsgXCIwMDBcIjtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDTW9udGhOdW1iZXIoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0VVRDTW9udGgoKSArIDEsIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENNaW51dGVzKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ01pbnV0ZXMoKSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ1NlY29uZHMoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0VVRDU2Vjb25kcygpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDV2Vla2RheU51bWJlck1vbmRheShkKSB7XG4gIHZhciBkb3cgPSBkLmdldFVUQ0RheSgpO1xuICByZXR1cm4gZG93ID09PSAwID8gNyA6IGRvdztcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDV2Vla051bWJlclN1bmRheShkLCBwKSB7XG4gIHJldHVybiBwYWQodXRjU3VuZGF5LmNvdW50KHV0Y1llYXIoZCksIGQpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDV2Vla051bWJlcklTTyhkLCBwKSB7XG4gIHZhciBkYXkgPSBkLmdldFVUQ0RheSgpO1xuICBkID0gKGRheSA+PSA0IHx8IGRheSA9PT0gMCkgPyB1dGNUaHVyc2RheShkKSA6IHV0Y1RodXJzZGF5LmNlaWwoZCk7XG4gIHJldHVybiBwYWQodXRjVGh1cnNkYXkuY291bnQodXRjWWVhcihkKSwgZCkgKyAodXRjWWVhcihkKS5nZXRVVENEYXkoKSA9PT0gNCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENXZWVrZGF5TnVtYmVyU3VuZGF5KGQpIHtcbiAgcmV0dXJuIGQuZ2V0VVRDRGF5KCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ1dlZWtOdW1iZXJNb25kYXkoZCwgcCkge1xuICByZXR1cm4gcGFkKHV0Y01vbmRheS5jb3VudCh1dGNZZWFyKGQpLCBkKSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ1llYXIoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0VVRDRnVsbFllYXIoKSAlIDEwMCwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ0Z1bGxZZWFyKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ0Z1bGxZZWFyKCkgJSAxMDAwMCwgcCwgNCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ1pvbmUoKSB7XG4gIHJldHVybiBcIiswMDAwXCI7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdExpdGVyYWxQZXJjZW50KCkge1xuICByZXR1cm4gXCIlXCI7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVuaXhUaW1lc3RhbXAoZCkge1xuICByZXR1cm4gK2Q7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVuaXhUaW1lc3RhbXBTZWNvbmRzKGQpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoK2QgLyAxMDAwKTtcbn1cbiIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbFwiO1xuaW1wb3J0IHtkdXJhdGlvbkRheSwgZHVyYXRpb25NaW51dGV9IGZyb20gXCIuL2R1cmF0aW9uXCI7XG5cbnZhciBkYXkgPSBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG59LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIHN0ZXApO1xufSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICByZXR1cm4gKGVuZCAtIHN0YXJ0IC0gKGVuZC5nZXRUaW1lem9uZU9mZnNldCgpIC0gc3RhcnQuZ2V0VGltZXpvbmVPZmZzZXQoKSkgKiBkdXJhdGlvbk1pbnV0ZSkgLyBkdXJhdGlvbkRheTtcbn0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpIC0gMTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBkYXk7XG5leHBvcnQgdmFyIGRheXMgPSBkYXkucmFuZ2U7XG4iLCJleHBvcnQgdmFyIGR1cmF0aW9uU2Vjb25kID0gMWUzO1xuZXhwb3J0IHZhciBkdXJhdGlvbk1pbnV0ZSA9IDZlNDtcbmV4cG9ydCB2YXIgZHVyYXRpb25Ib3VyID0gMzZlNTtcbmV4cG9ydCB2YXIgZHVyYXRpb25EYXkgPSA4NjRlNTtcbmV4cG9ydCB2YXIgZHVyYXRpb25XZWVrID0gNjA0OGU1O1xuIiwiaW1wb3J0IGludGVydmFsIGZyb20gXCIuL2ludGVydmFsXCI7XG5pbXBvcnQge2R1cmF0aW9uSG91ciwgZHVyYXRpb25NaW51dGUsIGR1cmF0aW9uU2Vjb25kfSBmcm9tIFwiLi9kdXJhdGlvblwiO1xuXG52YXIgaG91ciA9IGludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgZGF0ZS5zZXRUaW1lKGRhdGUgLSBkYXRlLmdldE1pbGxpc2Vjb25kcygpIC0gZGF0ZS5nZXRTZWNvbmRzKCkgKiBkdXJhdGlvblNlY29uZCAtIGRhdGUuZ2V0TWludXRlcygpICogZHVyYXRpb25NaW51dGUpO1xufSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICBkYXRlLnNldFRpbWUoK2RhdGUgKyBzdGVwICogZHVyYXRpb25Ib3VyKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIChlbmQgLSBzdGFydCkgLyBkdXJhdGlvbkhvdXI7XG59LCBmdW5jdGlvbihkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldEhvdXJzKCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaG91cjtcbmV4cG9ydCB2YXIgaG91cnMgPSBob3VyLnJhbmdlO1xuIiwiZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB0aW1lSW50ZXJ2YWxcbn0gZnJvbSBcIi4vaW50ZXJ2YWxcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB0aW1lTWlsbGlzZWNvbmQsXG4gIG1pbGxpc2Vjb25kcyBhcyB0aW1lTWlsbGlzZWNvbmRzLFxuICBkZWZhdWx0IGFzIHV0Y01pbGxpc2Vjb25kLFxuICBtaWxsaXNlY29uZHMgYXMgdXRjTWlsbGlzZWNvbmRzXG59IGZyb20gXCIuL21pbGxpc2Vjb25kXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgdGltZVNlY29uZCxcbiAgc2Vjb25kcyBhcyB0aW1lU2Vjb25kcyxcbiAgZGVmYXVsdCBhcyB1dGNTZWNvbmQsXG4gIHNlY29uZHMgYXMgdXRjU2Vjb25kc1xufSBmcm9tIFwiLi9zZWNvbmRcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB0aW1lTWludXRlLFxuICBtaW51dGVzIGFzIHRpbWVNaW51dGVzXG59IGZyb20gXCIuL21pbnV0ZVwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHRpbWVIb3VyLFxuICBob3VycyBhcyB0aW1lSG91cnNcbn0gZnJvbSBcIi4vaG91clwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHRpbWVEYXksXG4gIGRheXMgYXMgdGltZURheXNcbn0gZnJvbSBcIi4vZGF5XCI7XG5cbmV4cG9ydCB7XG4gIHN1bmRheSBhcyB0aW1lV2VlayxcbiAgc3VuZGF5cyBhcyB0aW1lV2Vla3MsXG4gIHN1bmRheSBhcyB0aW1lU3VuZGF5LFxuICBzdW5kYXlzIGFzIHRpbWVTdW5kYXlzLFxuICBtb25kYXkgYXMgdGltZU1vbmRheSxcbiAgbW9uZGF5cyBhcyB0aW1lTW9uZGF5cyxcbiAgdHVlc2RheSBhcyB0aW1lVHVlc2RheSxcbiAgdHVlc2RheXMgYXMgdGltZVR1ZXNkYXlzLFxuICB3ZWRuZXNkYXkgYXMgdGltZVdlZG5lc2RheSxcbiAgd2VkbmVzZGF5cyBhcyB0aW1lV2VkbmVzZGF5cyxcbiAgdGh1cnNkYXkgYXMgdGltZVRodXJzZGF5LFxuICB0aHVyc2RheXMgYXMgdGltZVRodXJzZGF5cyxcbiAgZnJpZGF5IGFzIHRpbWVGcmlkYXksXG4gIGZyaWRheXMgYXMgdGltZUZyaWRheXMsXG4gIHNhdHVyZGF5IGFzIHRpbWVTYXR1cmRheSxcbiAgc2F0dXJkYXlzIGFzIHRpbWVTYXR1cmRheXNcbn0gZnJvbSBcIi4vd2Vla1wiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHRpbWVNb250aCxcbiAgbW9udGhzIGFzIHRpbWVNb250aHNcbn0gZnJvbSBcIi4vbW9udGhcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB0aW1lWWVhcixcbiAgeWVhcnMgYXMgdGltZVllYXJzXG59IGZyb20gXCIuL3llYXJcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB1dGNNaW51dGUsXG4gIHV0Y01pbnV0ZXMgYXMgdXRjTWludXRlc1xufSBmcm9tIFwiLi91dGNNaW51dGVcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB1dGNIb3VyLFxuICB1dGNIb3VycyBhcyB1dGNIb3Vyc1xufSBmcm9tIFwiLi91dGNIb3VyXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgdXRjRGF5LFxuICB1dGNEYXlzIGFzIHV0Y0RheXNcbn0gZnJvbSBcIi4vdXRjRGF5XCI7XG5cbmV4cG9ydCB7XG4gIHV0Y1N1bmRheSBhcyB1dGNXZWVrLFxuICB1dGNTdW5kYXlzIGFzIHV0Y1dlZWtzLFxuICB1dGNTdW5kYXkgYXMgdXRjU3VuZGF5LFxuICB1dGNTdW5kYXlzIGFzIHV0Y1N1bmRheXMsXG4gIHV0Y01vbmRheSBhcyB1dGNNb25kYXksXG4gIHV0Y01vbmRheXMgYXMgdXRjTW9uZGF5cyxcbiAgdXRjVHVlc2RheSBhcyB1dGNUdWVzZGF5LFxuICB1dGNUdWVzZGF5cyBhcyB1dGNUdWVzZGF5cyxcbiAgdXRjV2VkbmVzZGF5IGFzIHV0Y1dlZG5lc2RheSxcbiAgdXRjV2VkbmVzZGF5cyBhcyB1dGNXZWRuZXNkYXlzLFxuICB1dGNUaHVyc2RheSBhcyB1dGNUaHVyc2RheSxcbiAgdXRjVGh1cnNkYXlzIGFzIHV0Y1RodXJzZGF5cyxcbiAgdXRjRnJpZGF5IGFzIHV0Y0ZyaWRheSxcbiAgdXRjRnJpZGF5cyBhcyB1dGNGcmlkYXlzLFxuICB1dGNTYXR1cmRheSBhcyB1dGNTYXR1cmRheSxcbiAgdXRjU2F0dXJkYXlzIGFzIHV0Y1NhdHVyZGF5c1xufSBmcm9tIFwiLi91dGNXZWVrXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgdXRjTW9udGgsXG4gIHV0Y01vbnRocyBhcyB1dGNNb250aHNcbn0gZnJvbSBcIi4vdXRjTW9udGhcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB1dGNZZWFyLFxuICB1dGNZZWFycyBhcyB1dGNZZWFyc1xufSBmcm9tIFwiLi91dGNZZWFyXCI7XG4iLCJ2YXIgdDAgPSBuZXcgRGF0ZSxcbiAgICB0MSA9IG5ldyBEYXRlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdJbnRlcnZhbChmbG9vcmksIG9mZnNldGksIGNvdW50LCBmaWVsZCkge1xuXG4gIGZ1bmN0aW9uIGludGVydmFsKGRhdGUpIHtcbiAgICByZXR1cm4gZmxvb3JpKGRhdGUgPSBuZXcgRGF0ZSgrZGF0ZSkpLCBkYXRlO1xuICB9XG5cbiAgaW50ZXJ2YWwuZmxvb3IgPSBpbnRlcnZhbDtcblxuICBpbnRlcnZhbC5jZWlsID0gZnVuY3Rpb24oZGF0ZSkge1xuICAgIHJldHVybiBmbG9vcmkoZGF0ZSA9IG5ldyBEYXRlKGRhdGUgLSAxKSksIG9mZnNldGkoZGF0ZSwgMSksIGZsb29yaShkYXRlKSwgZGF0ZTtcbiAgfTtcblxuICBpbnRlcnZhbC5yb3VuZCA9IGZ1bmN0aW9uKGRhdGUpIHtcbiAgICB2YXIgZDAgPSBpbnRlcnZhbChkYXRlKSxcbiAgICAgICAgZDEgPSBpbnRlcnZhbC5jZWlsKGRhdGUpO1xuICAgIHJldHVybiBkYXRlIC0gZDAgPCBkMSAtIGRhdGUgPyBkMCA6IGQxO1xuICB9O1xuXG4gIGludGVydmFsLm9mZnNldCA9IGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgICByZXR1cm4gb2Zmc2V0aShkYXRlID0gbmV3IERhdGUoK2RhdGUpLCBzdGVwID09IG51bGwgPyAxIDogTWF0aC5mbG9vcihzdGVwKSksIGRhdGU7XG4gIH07XG5cbiAgaW50ZXJ2YWwucmFuZ2UgPSBmdW5jdGlvbihzdGFydCwgc3RvcCwgc3RlcCkge1xuICAgIHZhciByYW5nZSA9IFtdLCBwcmV2aW91cztcbiAgICBzdGFydCA9IGludGVydmFsLmNlaWwoc3RhcnQpO1xuICAgIHN0ZXAgPSBzdGVwID09IG51bGwgPyAxIDogTWF0aC5mbG9vcihzdGVwKTtcbiAgICBpZiAoIShzdGFydCA8IHN0b3ApIHx8ICEoc3RlcCA+IDApKSByZXR1cm4gcmFuZ2U7IC8vIGFsc28gaGFuZGxlcyBJbnZhbGlkIERhdGVcbiAgICBkbyByYW5nZS5wdXNoKHByZXZpb3VzID0gbmV3IERhdGUoK3N0YXJ0KSksIG9mZnNldGkoc3RhcnQsIHN0ZXApLCBmbG9vcmkoc3RhcnQpO1xuICAgIHdoaWxlIChwcmV2aW91cyA8IHN0YXJ0ICYmIHN0YXJ0IDwgc3RvcCk7XG4gICAgcmV0dXJuIHJhbmdlO1xuICB9O1xuXG4gIGludGVydmFsLmZpbHRlciA9IGZ1bmN0aW9uKHRlc3QpIHtcbiAgICByZXR1cm4gbmV3SW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgICAgaWYgKGRhdGUgPj0gZGF0ZSkgd2hpbGUgKGZsb29yaShkYXRlKSwgIXRlc3QoZGF0ZSkpIGRhdGUuc2V0VGltZShkYXRlIC0gMSk7XG4gICAgfSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICAgICAgaWYgKGRhdGUgPj0gZGF0ZSkge1xuICAgICAgICBpZiAoc3RlcCA8IDApIHdoaWxlICgrK3N0ZXAgPD0gMCkge1xuICAgICAgICAgIHdoaWxlIChvZmZzZXRpKGRhdGUsIC0xKSwgIXRlc3QoZGF0ZSkpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcbiAgICAgICAgfSBlbHNlIHdoaWxlICgtLXN0ZXAgPj0gMCkge1xuICAgICAgICAgIHdoaWxlIChvZmZzZXRpKGRhdGUsICsxKSwgIXRlc3QoZGF0ZSkpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGlmIChjb3VudCkge1xuICAgIGludGVydmFsLmNvdW50ID0gZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgICAgdDAuc2V0VGltZSgrc3RhcnQpLCB0MS5zZXRUaW1lKCtlbmQpO1xuICAgICAgZmxvb3JpKHQwKSwgZmxvb3JpKHQxKTtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGNvdW50KHQwLCB0MSkpO1xuICAgIH07XG5cbiAgICBpbnRlcnZhbC5ldmVyeSA9IGZ1bmN0aW9uKHN0ZXApIHtcbiAgICAgIHN0ZXAgPSBNYXRoLmZsb29yKHN0ZXApO1xuICAgICAgcmV0dXJuICFpc0Zpbml0ZShzdGVwKSB8fCAhKHN0ZXAgPiAwKSA/IG51bGxcbiAgICAgICAgICA6ICEoc3RlcCA+IDEpID8gaW50ZXJ2YWxcbiAgICAgICAgICA6IGludGVydmFsLmZpbHRlcihmaWVsZFxuICAgICAgICAgICAgICA/IGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGZpZWxkKGQpICUgc3RlcCA9PT0gMDsgfVxuICAgICAgICAgICAgICA6IGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGludGVydmFsLmNvdW50KDAsIGQpICUgc3RlcCA9PT0gMDsgfSk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBpbnRlcnZhbDtcbn1cbiIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbFwiO1xuXG52YXIgbWlsbGlzZWNvbmQgPSBpbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgLy8gbm9vcFxufSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICBkYXRlLnNldFRpbWUoK2RhdGUgKyBzdGVwKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIGVuZCAtIHN0YXJ0O1xufSk7XG5cbi8vIEFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBmb3IgdGhpcyBzaW1wbGUgY2FzZS5cbm1pbGxpc2Vjb25kLmV2ZXJ5ID0gZnVuY3Rpb24oaykge1xuICBrID0gTWF0aC5mbG9vcihrKTtcbiAgaWYgKCFpc0Zpbml0ZShrKSB8fCAhKGsgPiAwKSkgcmV0dXJuIG51bGw7XG4gIGlmICghKGsgPiAxKSkgcmV0dXJuIG1pbGxpc2Vjb25kO1xuICByZXR1cm4gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgIGRhdGUuc2V0VGltZShNYXRoLmZsb29yKGRhdGUgLyBrKSAqIGspO1xuICB9LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gICAgZGF0ZS5zZXRUaW1lKCtkYXRlICsgc3RlcCAqIGspO1xuICB9LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIChlbmQgLSBzdGFydCkgLyBrO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1pbGxpc2Vjb25kO1xuZXhwb3J0IHZhciBtaWxsaXNlY29uZHMgPSBtaWxsaXNlY29uZC5yYW5nZTtcbiIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbFwiO1xuaW1wb3J0IHtkdXJhdGlvbk1pbnV0ZSwgZHVyYXRpb25TZWNvbmR9IGZyb20gXCIuL2R1cmF0aW9uXCI7XG5cbnZhciBtaW51dGUgPSBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gIGRhdGUuc2V0VGltZShkYXRlIC0gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAtIGRhdGUuZ2V0U2Vjb25kcygpICogZHVyYXRpb25TZWNvbmQpO1xufSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICBkYXRlLnNldFRpbWUoK2RhdGUgKyBzdGVwICogZHVyYXRpb25NaW51dGUpO1xufSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICByZXR1cm4gKGVuZCAtIHN0YXJ0KSAvIGR1cmF0aW9uTWludXRlO1xufSwgZnVuY3Rpb24oZGF0ZSkge1xuICByZXR1cm4gZGF0ZS5nZXRNaW51dGVzKCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbWludXRlO1xuZXhwb3J0IHZhciBtaW51dGVzID0gbWludXRlLnJhbmdlO1xuIiwiaW1wb3J0IGludGVydmFsIGZyb20gXCIuL2ludGVydmFsXCI7XG5cbnZhciBtb250aCA9IGludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgZGF0ZS5zZXREYXRlKDEpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xufSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICBkYXRlLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSArIHN0ZXApO1xufSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICByZXR1cm4gZW5kLmdldE1vbnRoKCkgLSBzdGFydC5nZXRNb250aCgpICsgKGVuZC5nZXRGdWxsWWVhcigpIC0gc3RhcnQuZ2V0RnVsbFllYXIoKSkgKiAxMjtcbn0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0TW9udGgoKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBtb250aDtcbmV4cG9ydCB2YXIgbW9udGhzID0gbW9udGgucmFuZ2U7XG4iLCJpbXBvcnQgaW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWxcIjtcbmltcG9ydCB7ZHVyYXRpb25TZWNvbmR9IGZyb20gXCIuL2R1cmF0aW9uXCI7XG5cbnZhciBzZWNvbmQgPSBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gIGRhdGUuc2V0VGltZShkYXRlIC0gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSk7XG59LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gIGRhdGUuc2V0VGltZSgrZGF0ZSArIHN0ZXAgKiBkdXJhdGlvblNlY29uZCk7XG59LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gIHJldHVybiAoZW5kIC0gc3RhcnQpIC8gZHVyYXRpb25TZWNvbmQ7XG59LCBmdW5jdGlvbihkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldFVUQ1NlY29uZHMoKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzZWNvbmQ7XG5leHBvcnQgdmFyIHNlY29uZHMgPSBzZWNvbmQucmFuZ2U7XG4iLCJpbXBvcnQgaW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWxcIjtcbmltcG9ydCB7ZHVyYXRpb25EYXl9IGZyb20gXCIuL2R1cmF0aW9uXCI7XG5cbnZhciB1dGNEYXkgPSBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG59LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIHN0ZXApO1xufSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICByZXR1cm4gKGVuZCAtIHN0YXJ0KSAvIGR1cmF0aW9uRGF5O1xufSwgZnVuY3Rpb24oZGF0ZSkge1xuICByZXR1cm4gZGF0ZS5nZXRVVENEYXRlKCkgLSAxO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHV0Y0RheTtcbmV4cG9ydCB2YXIgdXRjRGF5cyA9IHV0Y0RheS5yYW5nZTtcbiIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbFwiO1xuaW1wb3J0IHtkdXJhdGlvbkhvdXJ9IGZyb20gXCIuL2R1cmF0aW9uXCI7XG5cbnZhciB1dGNIb3VyID0gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICBkYXRlLnNldFVUQ01pbnV0ZXMoMCwgMCwgMCk7XG59LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gIGRhdGUuc2V0VGltZSgrZGF0ZSArIHN0ZXAgKiBkdXJhdGlvbkhvdXIpO1xufSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICByZXR1cm4gKGVuZCAtIHN0YXJ0KSAvIGR1cmF0aW9uSG91cjtcbn0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0VVRDSG91cnMoKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB1dGNIb3VyO1xuZXhwb3J0IHZhciB1dGNIb3VycyA9IHV0Y0hvdXIucmFuZ2U7XG4iLCJpbXBvcnQgaW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWxcIjtcbmltcG9ydCB7ZHVyYXRpb25NaW51dGV9IGZyb20gXCIuL2R1cmF0aW9uXCI7XG5cbnZhciB1dGNNaW51dGUgPSBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gIGRhdGUuc2V0VVRDU2Vjb25kcygwLCAwKTtcbn0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgZGF0ZS5zZXRUaW1lKCtkYXRlICsgc3RlcCAqIGR1cmF0aW9uTWludXRlKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIChlbmQgLSBzdGFydCkgLyBkdXJhdGlvbk1pbnV0ZTtcbn0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0VVRDTWludXRlcygpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHV0Y01pbnV0ZTtcbmV4cG9ydCB2YXIgdXRjTWludXRlcyA9IHV0Y01pbnV0ZS5yYW5nZTtcbiIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbFwiO1xuXG52YXIgdXRjTW9udGggPSBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gIGRhdGUuc2V0VVRDRGF0ZSgxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbn0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgZGF0ZS5zZXRVVENNb250aChkYXRlLmdldFVUQ01vbnRoKCkgKyBzdGVwKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIGVuZC5nZXRVVENNb250aCgpIC0gc3RhcnQuZ2V0VVRDTW9udGgoKSArIChlbmQuZ2V0VVRDRnVsbFllYXIoKSAtIHN0YXJ0LmdldFVUQ0Z1bGxZZWFyKCkpICogMTI7XG59LCBmdW5jdGlvbihkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldFVUQ01vbnRoKCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdXRjTW9udGg7XG5leHBvcnQgdmFyIHV0Y01vbnRocyA9IHV0Y01vbnRoLnJhbmdlO1xuIiwiaW1wb3J0IGludGVydmFsIGZyb20gXCIuL2ludGVydmFsXCI7XG5pbXBvcnQge2R1cmF0aW9uV2Vla30gZnJvbSBcIi4vZHVyYXRpb25cIjtcblxuZnVuY3Rpb24gdXRjV2Vla2RheShpKSB7XG4gIHJldHVybiBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gICAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gKGRhdGUuZ2V0VVRDRGF5KCkgKyA3IC0gaSkgJSA3KTtcbiAgICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB9LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gICAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgc3RlcCAqIDcpO1xuICB9LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIChlbmQgLSBzdGFydCkgLyBkdXJhdGlvbldlZWs7XG4gIH0pO1xufVxuXG5leHBvcnQgdmFyIHV0Y1N1bmRheSA9IHV0Y1dlZWtkYXkoMCk7XG5leHBvcnQgdmFyIHV0Y01vbmRheSA9IHV0Y1dlZWtkYXkoMSk7XG5leHBvcnQgdmFyIHV0Y1R1ZXNkYXkgPSB1dGNXZWVrZGF5KDIpO1xuZXhwb3J0IHZhciB1dGNXZWRuZXNkYXkgPSB1dGNXZWVrZGF5KDMpO1xuZXhwb3J0IHZhciB1dGNUaHVyc2RheSA9IHV0Y1dlZWtkYXkoNCk7XG5leHBvcnQgdmFyIHV0Y0ZyaWRheSA9IHV0Y1dlZWtkYXkoNSk7XG5leHBvcnQgdmFyIHV0Y1NhdHVyZGF5ID0gdXRjV2Vla2RheSg2KTtcblxuZXhwb3J0IHZhciB1dGNTdW5kYXlzID0gdXRjU3VuZGF5LnJhbmdlO1xuZXhwb3J0IHZhciB1dGNNb25kYXlzID0gdXRjTW9uZGF5LnJhbmdlO1xuZXhwb3J0IHZhciB1dGNUdWVzZGF5cyA9IHV0Y1R1ZXNkYXkucmFuZ2U7XG5leHBvcnQgdmFyIHV0Y1dlZG5lc2RheXMgPSB1dGNXZWRuZXNkYXkucmFuZ2U7XG5leHBvcnQgdmFyIHV0Y1RodXJzZGF5cyA9IHV0Y1RodXJzZGF5LnJhbmdlO1xuZXhwb3J0IHZhciB1dGNGcmlkYXlzID0gdXRjRnJpZGF5LnJhbmdlO1xuZXhwb3J0IHZhciB1dGNTYXR1cmRheXMgPSB1dGNTYXR1cmRheS5yYW5nZTtcbiIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbFwiO1xuXG52YXIgdXRjWWVhciA9IGludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbn0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgKyBzdGVwKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIGVuZC5nZXRVVENGdWxsWWVhcigpIC0gc3RhcnQuZ2V0VVRDRnVsbFllYXIoKTtcbn0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbn0pO1xuXG4vLyBBbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gZm9yIHRoaXMgc2ltcGxlIGNhc2UuXG51dGNZZWFyLmV2ZXJ5ID0gZnVuY3Rpb24oaykge1xuICByZXR1cm4gIWlzRmluaXRlKGsgPSBNYXRoLmZsb29yKGspKSB8fCAhKGsgPiAwKSA/IG51bGwgOiBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcihNYXRoLmZsb29yKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSAvIGspICogayk7XG4gICAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB9LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgKyBzdGVwICogayk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXRjWWVhcjtcbmV4cG9ydCB2YXIgdXRjWWVhcnMgPSB1dGNZZWFyLnJhbmdlO1xuIiwiaW1wb3J0IGludGVydmFsIGZyb20gXCIuL2ludGVydmFsXCI7XG5pbXBvcnQge2R1cmF0aW9uTWludXRlLCBkdXJhdGlvbldlZWt9IGZyb20gXCIuL2R1cmF0aW9uXCI7XG5cbmZ1bmN0aW9uIHdlZWtkYXkoaSkge1xuICByZXR1cm4gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIChkYXRlLmdldERheSgpICsgNyAtIGkpICUgNyk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgfSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIHN0ZXAgKiA3KTtcbiAgfSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiAoZW5kIC0gc3RhcnQgLSAoZW5kLmdldFRpbWV6b25lT2Zmc2V0KCkgLSBzdGFydC5nZXRUaW1lem9uZU9mZnNldCgpKSAqIGR1cmF0aW9uTWludXRlKSAvIGR1cmF0aW9uV2VlaztcbiAgfSk7XG59XG5cbmV4cG9ydCB2YXIgc3VuZGF5ID0gd2Vla2RheSgwKTtcbmV4cG9ydCB2YXIgbW9uZGF5ID0gd2Vla2RheSgxKTtcbmV4cG9ydCB2YXIgdHVlc2RheSA9IHdlZWtkYXkoMik7XG5leHBvcnQgdmFyIHdlZG5lc2RheSA9IHdlZWtkYXkoMyk7XG5leHBvcnQgdmFyIHRodXJzZGF5ID0gd2Vla2RheSg0KTtcbmV4cG9ydCB2YXIgZnJpZGF5ID0gd2Vla2RheSg1KTtcbmV4cG9ydCB2YXIgc2F0dXJkYXkgPSB3ZWVrZGF5KDYpO1xuXG5leHBvcnQgdmFyIHN1bmRheXMgPSBzdW5kYXkucmFuZ2U7XG5leHBvcnQgdmFyIG1vbmRheXMgPSBtb25kYXkucmFuZ2U7XG5leHBvcnQgdmFyIHR1ZXNkYXlzID0gdHVlc2RheS5yYW5nZTtcbmV4cG9ydCB2YXIgd2VkbmVzZGF5cyA9IHdlZG5lc2RheS5yYW5nZTtcbmV4cG9ydCB2YXIgdGh1cnNkYXlzID0gdGh1cnNkYXkucmFuZ2U7XG5leHBvcnQgdmFyIGZyaWRheXMgPSBmcmlkYXkucmFuZ2U7XG5leHBvcnQgdmFyIHNhdHVyZGF5cyA9IHNhdHVyZGF5LnJhbmdlO1xuIiwiaW1wb3J0IGludGVydmFsIGZyb20gXCIuL2ludGVydmFsXCI7XG5cbnZhciB5ZWFyID0gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICBkYXRlLnNldE1vbnRoKDAsIDEpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xufSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICBkYXRlLnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSArIHN0ZXApO1xufSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICByZXR1cm4gZW5kLmdldEZ1bGxZZWFyKCkgLSBzdGFydC5nZXRGdWxsWWVhcigpO1xufSwgZnVuY3Rpb24oZGF0ZSkge1xuICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpO1xufSk7XG5cbi8vIEFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBmb3IgdGhpcyBzaW1wbGUgY2FzZS5cbnllYXIuZXZlcnkgPSBmdW5jdGlvbihrKSB7XG4gIHJldHVybiAhaXNGaW5pdGUoayA9IE1hdGguZmxvb3IoaykpIHx8ICEoayA+IDApID8gbnVsbCA6IGludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgICBkYXRlLnNldEZ1bGxZZWFyKE1hdGguZmxvb3IoZGF0ZS5nZXRGdWxsWWVhcigpIC8gaykgKiBrKTtcbiAgICBkYXRlLnNldE1vbnRoKDAsIDEpO1xuICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIH0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgICBkYXRlLnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSArIHN0ZXAgKiBrKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB5ZWFyO1xuZXhwb3J0IHZhciB5ZWFycyA9IHllYXIucmFuZ2U7XG4iLCJleHBvcnQge1xuICBub3csXG4gIHRpbWVyLFxuICB0aW1lckZsdXNoXG59IGZyb20gXCIuL3RpbWVyXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgdGltZW91dFxufSBmcm9tIFwiLi90aW1lb3V0XCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgaW50ZXJ2YWxcbn0gZnJvbSBcIi4vaW50ZXJ2YWxcIjtcbiIsImltcG9ydCB7VGltZXIsIG5vd30gZnJvbSBcIi4vdGltZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gIHZhciB0ID0gbmV3IFRpbWVyLCB0b3RhbCA9IGRlbGF5O1xuICBpZiAoZGVsYXkgPT0gbnVsbCkgcmV0dXJuIHQucmVzdGFydChjYWxsYmFjaywgZGVsYXksIHRpbWUpLCB0O1xuICBkZWxheSA9ICtkZWxheSwgdGltZSA9IHRpbWUgPT0gbnVsbCA/IG5vdygpIDogK3RpbWU7XG4gIHQucmVzdGFydChmdW5jdGlvbiB0aWNrKGVsYXBzZWQpIHtcbiAgICBlbGFwc2VkICs9IHRvdGFsO1xuICAgIHQucmVzdGFydCh0aWNrLCB0b3RhbCArPSBkZWxheSwgdGltZSk7XG4gICAgY2FsbGJhY2soZWxhcHNlZCk7XG4gIH0sIGRlbGF5LCB0aW1lKTtcbiAgcmV0dXJuIHQ7XG59XG4iLCJpbXBvcnQge1RpbWVyfSBmcm9tIFwiLi90aW1lclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxsYmFjaywgZGVsYXksIHRpbWUpIHtcbiAgdmFyIHQgPSBuZXcgVGltZXI7XG4gIGRlbGF5ID0gZGVsYXkgPT0gbnVsbCA/IDAgOiArZGVsYXk7XG4gIHQucmVzdGFydChmdW5jdGlvbihlbGFwc2VkKSB7XG4gICAgdC5zdG9wKCk7XG4gICAgY2FsbGJhY2soZWxhcHNlZCArIGRlbGF5KTtcbiAgfSwgZGVsYXksIHRpbWUpO1xuICByZXR1cm4gdDtcbn1cbiIsInZhciBmcmFtZSA9IDAsIC8vIGlzIGFuIGFuaW1hdGlvbiBmcmFtZSBwZW5kaW5nP1xuICAgIHRpbWVvdXQgPSAwLCAvLyBpcyBhIHRpbWVvdXQgcGVuZGluZz9cbiAgICBpbnRlcnZhbCA9IDAsIC8vIGFyZSBhbnkgdGltZXJzIGFjdGl2ZT9cbiAgICBwb2tlRGVsYXkgPSAxMDAwLCAvLyBob3cgZnJlcXVlbnRseSB3ZSBjaGVjayBmb3IgY2xvY2sgc2tld1xuICAgIHRhc2tIZWFkLFxuICAgIHRhc2tUYWlsLFxuICAgIGNsb2NrTGFzdCA9IDAsXG4gICAgY2xvY2tOb3cgPSAwLFxuICAgIGNsb2NrU2tldyA9IDAsXG4gICAgY2xvY2sgPSB0eXBlb2YgcGVyZm9ybWFuY2UgPT09IFwib2JqZWN0XCIgJiYgcGVyZm9ybWFuY2Uubm93ID8gcGVyZm9ybWFuY2UgOiBEYXRlLFxuICAgIHNldEZyYW1lID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdykgOiBmdW5jdGlvbihmKSB7IHNldFRpbWVvdXQoZiwgMTcpOyB9O1xuXG5leHBvcnQgZnVuY3Rpb24gbm93KCkge1xuICByZXR1cm4gY2xvY2tOb3cgfHwgKHNldEZyYW1lKGNsZWFyTm93KSwgY2xvY2tOb3cgPSBjbG9jay5ub3coKSArIGNsb2NrU2tldyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyTm93KCkge1xuICBjbG9ja05vdyA9IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUaW1lcigpIHtcbiAgdGhpcy5fY2FsbCA9XG4gIHRoaXMuX3RpbWUgPVxuICB0aGlzLl9uZXh0ID0gbnVsbDtcbn1cblxuVGltZXIucHJvdG90eXBlID0gdGltZXIucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogVGltZXIsXG4gIHJlc3RhcnQ6IGZ1bmN0aW9uKGNhbGxiYWNrLCBkZWxheSwgdGltZSkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNhbGxiYWNrIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgIHRpbWUgPSAodGltZSA9PSBudWxsID8gbm93KCkgOiArdGltZSkgKyAoZGVsYXkgPT0gbnVsbCA/IDAgOiArZGVsYXkpO1xuICAgIGlmICghdGhpcy5fbmV4dCAmJiB0YXNrVGFpbCAhPT0gdGhpcykge1xuICAgICAgaWYgKHRhc2tUYWlsKSB0YXNrVGFpbC5fbmV4dCA9IHRoaXM7XG4gICAgICBlbHNlIHRhc2tIZWFkID0gdGhpcztcbiAgICAgIHRhc2tUYWlsID0gdGhpcztcbiAgICB9XG4gICAgdGhpcy5fY2FsbCA9IGNhbGxiYWNrO1xuICAgIHRoaXMuX3RpbWUgPSB0aW1lO1xuICAgIHNsZWVwKCk7XG4gIH0sXG4gIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9jYWxsKSB7XG4gICAgICB0aGlzLl9jYWxsID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpbWUgPSBJbmZpbml0eTtcbiAgICAgIHNsZWVwKCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdGltZXIoY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gIHZhciB0ID0gbmV3IFRpbWVyO1xuICB0LnJlc3RhcnQoY2FsbGJhY2ssIGRlbGF5LCB0aW1lKTtcbiAgcmV0dXJuIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lckZsdXNoKCkge1xuICBub3coKTsgLy8gR2V0IHRoZSBjdXJyZW50IHRpbWUsIGlmIG5vdCBhbHJlYWR5IHNldC5cbiAgKytmcmFtZTsgLy8gUHJldGVuZCB3ZeKAmXZlIHNldCBhbiBhbGFybSwgaWYgd2UgaGF2ZW7igJl0IGFscmVhZHkuXG4gIHZhciB0ID0gdGFza0hlYWQsIGU7XG4gIHdoaWxlICh0KSB7XG4gICAgaWYgKChlID0gY2xvY2tOb3cgLSB0Ll90aW1lKSA+PSAwKSB0Ll9jYWxsLmNhbGwobnVsbCwgZSk7XG4gICAgdCA9IHQuX25leHQ7XG4gIH1cbiAgLS1mcmFtZTtcbn1cblxuZnVuY3Rpb24gd2FrZSgpIHtcbiAgY2xvY2tOb3cgPSAoY2xvY2tMYXN0ID0gY2xvY2subm93KCkpICsgY2xvY2tTa2V3O1xuICBmcmFtZSA9IHRpbWVvdXQgPSAwO1xuICB0cnkge1xuICAgIHRpbWVyRmx1c2goKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBmcmFtZSA9IDA7XG4gICAgbmFwKCk7XG4gICAgY2xvY2tOb3cgPSAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBva2UoKSB7XG4gIHZhciBub3cgPSBjbG9jay5ub3coKSwgZGVsYXkgPSBub3cgLSBjbG9ja0xhc3Q7XG4gIGlmIChkZWxheSA+IHBva2VEZWxheSkgY2xvY2tTa2V3IC09IGRlbGF5LCBjbG9ja0xhc3QgPSBub3c7XG59XG5cbmZ1bmN0aW9uIG5hcCgpIHtcbiAgdmFyIHQwLCB0MSA9IHRhc2tIZWFkLCB0MiwgdGltZSA9IEluZmluaXR5O1xuICB3aGlsZSAodDEpIHtcbiAgICBpZiAodDEuX2NhbGwpIHtcbiAgICAgIGlmICh0aW1lID4gdDEuX3RpbWUpIHRpbWUgPSB0MS5fdGltZTtcbiAgICAgIHQwID0gdDEsIHQxID0gdDEuX25leHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQyID0gdDEuX25leHQsIHQxLl9uZXh0ID0gbnVsbDtcbiAgICAgIHQxID0gdDAgPyB0MC5fbmV4dCA9IHQyIDogdGFza0hlYWQgPSB0MjtcbiAgICB9XG4gIH1cbiAgdGFza1RhaWwgPSB0MDtcbiAgc2xlZXAodGltZSk7XG59XG5cbmZ1bmN0aW9uIHNsZWVwKHRpbWUpIHtcbiAgaWYgKGZyYW1lKSByZXR1cm47IC8vIFNvb25lc3QgYWxhcm0gYWxyZWFkeSBzZXQsIG9yIHdpbGwgYmUuXG4gIGlmICh0aW1lb3V0KSB0aW1lb3V0ID0gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICB2YXIgZGVsYXkgPSB0aW1lIC0gY2xvY2tOb3c7IC8vIFN0cmljdGx5IGxlc3MgdGhhbiBpZiB3ZSByZWNvbXB1dGVkIGNsb2NrTm93LlxuICBpZiAoZGVsYXkgPiAyNCkge1xuICAgIGlmICh0aW1lIDwgSW5maW5pdHkpIHRpbWVvdXQgPSBzZXRUaW1lb3V0KHdha2UsIHRpbWUgLSBjbG9jay5ub3coKSAtIGNsb2NrU2tldyk7XG4gICAgaWYgKGludGVydmFsKSBpbnRlcnZhbCA9IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9IGVsc2Uge1xuICAgIGlmICghaW50ZXJ2YWwpIGNsb2NrTGFzdCA9IGNsb2NrLm5vdygpLCBpbnRlcnZhbCA9IHNldEludGVydmFsKHBva2UsIHBva2VEZWxheSk7XG4gICAgZnJhbWUgPSAxLCBzZXRGcmFtZSh3YWtlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tIFwiLi90cmFuc2l0aW9uL2luZGV4XCI7XG5pbXBvcnQge1NDSEVEVUxFRH0gZnJvbSBcIi4vdHJhbnNpdGlvbi9zY2hlZHVsZVwiO1xuXG52YXIgcm9vdCA9IFtudWxsXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSwgbmFtZSkge1xuICB2YXIgc2NoZWR1bGVzID0gbm9kZS5fX3RyYW5zaXRpb24sXG4gICAgICBzY2hlZHVsZSxcbiAgICAgIGk7XG5cbiAgaWYgKHNjaGVkdWxlcykge1xuICAgIG5hbWUgPSBuYW1lID09IG51bGwgPyBudWxsIDogbmFtZSArIFwiXCI7XG4gICAgZm9yIChpIGluIHNjaGVkdWxlcykge1xuICAgICAgaWYgKChzY2hlZHVsZSA9IHNjaGVkdWxlc1tpXSkuc3RhdGUgPiBTQ0hFRFVMRUQgJiYgc2NoZWR1bGUubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IFRyYW5zaXRpb24oW1tub2RlXV0sIHJvb3QsIG5hbWUsICtpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbiIsImltcG9ydCBcIi4vc2VsZWN0aW9uL2luZGV4XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdHJhbnNpdGlvbn0gZnJvbSBcIi4vdHJhbnNpdGlvbi9pbmRleFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGFjdGl2ZX0gZnJvbSBcIi4vYWN0aXZlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJydXB0fSBmcm9tIFwiLi9pbnRlcnJ1cHRcIjtcbiIsImltcG9ydCB7U1RBUlRJTkcsIEVORElORywgRU5ERUR9IGZyb20gXCIuL3RyYW5zaXRpb24vc2NoZWR1bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSwgbmFtZSkge1xuICB2YXIgc2NoZWR1bGVzID0gbm9kZS5fX3RyYW5zaXRpb24sXG4gICAgICBzY2hlZHVsZSxcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGVtcHR5ID0gdHJ1ZSxcbiAgICAgIGk7XG5cbiAgaWYgKCFzY2hlZHVsZXMpIHJldHVybjtcblxuICBuYW1lID0gbmFtZSA9PSBudWxsID8gbnVsbCA6IG5hbWUgKyBcIlwiO1xuXG4gIGZvciAoaSBpbiBzY2hlZHVsZXMpIHtcbiAgICBpZiAoKHNjaGVkdWxlID0gc2NoZWR1bGVzW2ldKS5uYW1lICE9PSBuYW1lKSB7IGVtcHR5ID0gZmFsc2U7IGNvbnRpbnVlOyB9XG4gICAgYWN0aXZlID0gc2NoZWR1bGUuc3RhdGUgPiBTVEFSVElORyAmJiBzY2hlZHVsZS5zdGF0ZSA8IEVORElORztcbiAgICBzY2hlZHVsZS5zdGF0ZSA9IEVOREVEO1xuICAgIHNjaGVkdWxlLnRpbWVyLnN0b3AoKTtcbiAgICBzY2hlZHVsZS5vbi5jYWxsKGFjdGl2ZSA/IFwiaW50ZXJydXB0XCIgOiBcImNhbmNlbFwiLCBub2RlLCBub2RlLl9fZGF0YV9fLCBzY2hlZHVsZS5pbmRleCwgc2NoZWR1bGUuZ3JvdXApO1xuICAgIGRlbGV0ZSBzY2hlZHVsZXNbaV07XG4gIH1cblxuICBpZiAoZW1wdHkpIGRlbGV0ZSBub2RlLl9fdHJhbnNpdGlvbjtcbn1cbiIsImltcG9ydCB7c2VsZWN0aW9ufSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2ludGVycnVwdCBmcm9tIFwiLi9pbnRlcnJ1cHRcIjtcbmltcG9ydCBzZWxlY3Rpb25fdHJhbnNpdGlvbiBmcm9tIFwiLi90cmFuc2l0aW9uXCI7XG5cbnNlbGVjdGlvbi5wcm90b3R5cGUuaW50ZXJydXB0ID0gc2VsZWN0aW9uX2ludGVycnVwdDtcbnNlbGVjdGlvbi5wcm90b3R5cGUudHJhbnNpdGlvbiA9IHNlbGVjdGlvbl90cmFuc2l0aW9uO1xuIiwiaW1wb3J0IGludGVycnVwdCBmcm9tIFwiLi4vaW50ZXJydXB0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICBpbnRlcnJ1cHQodGhpcywgbmFtZSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHtUcmFuc2l0aW9uLCBuZXdJZH0gZnJvbSBcIi4uL3RyYW5zaXRpb24vaW5kZXhcIjtcbmltcG9ydCBzY2hlZHVsZSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9zY2hlZHVsZVwiO1xuaW1wb3J0IHtlYXNlQ3ViaWNJbk91dH0gZnJvbSBcImQzLWVhc2VcIjtcbmltcG9ydCB7bm93fSBmcm9tIFwiZDMtdGltZXJcIjtcblxudmFyIGRlZmF1bHRUaW1pbmcgPSB7XG4gIHRpbWU6IG51bGwsIC8vIFNldCBvbiB1c2UuXG4gIGRlbGF5OiAwLFxuICBkdXJhdGlvbjogMjUwLFxuICBlYXNlOiBlYXNlQ3ViaWNJbk91dFxufTtcblxuZnVuY3Rpb24gaW5oZXJpdChub2RlLCBpZCkge1xuICB2YXIgdGltaW5nO1xuICB3aGlsZSAoISh0aW1pbmcgPSBub2RlLl9fdHJhbnNpdGlvbikgfHwgISh0aW1pbmcgPSB0aW1pbmdbaWRdKSkge1xuICAgIGlmICghKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFRpbWluZy50aW1lID0gbm93KCksIGRlZmF1bHRUaW1pbmc7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aW1pbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIGlkLFxuICAgICAgdGltaW5nO1xuXG4gIGlmIChuYW1lIGluc3RhbmNlb2YgVHJhbnNpdGlvbikge1xuICAgIGlkID0gbmFtZS5faWQsIG5hbWUgPSBuYW1lLl9uYW1lO1xuICB9IGVsc2Uge1xuICAgIGlkID0gbmV3SWQoKSwgKHRpbWluZyA9IGRlZmF1bHRUaW1pbmcpLnRpbWUgPSBub3coKSwgbmFtZSA9IG5hbWUgPT0gbnVsbCA/IG51bGwgOiBuYW1lICsgXCJcIjtcbiAgfVxuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIHNjaGVkdWxlKG5vZGUsIG5hbWUsIGlkLCBpLCBncm91cCwgdGltaW5nIHx8IGluaGVyaXQobm9kZSwgaWQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oZ3JvdXBzLCB0aGlzLl9wYXJlbnRzLCBuYW1lLCBpZCk7XG59XG4iLCJpbXBvcnQge2ludGVycG9sYXRlVHJhbnNmb3JtU3ZnIGFzIGludGVycG9sYXRlVHJhbnNmb3JtfSBmcm9tIFwiZDMtaW50ZXJwb2xhdGVcIjtcbmltcG9ydCB7bmFtZXNwYWNlfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge3R3ZWVuVmFsdWV9IGZyb20gXCIuL3R3ZWVuXCI7XG5pbXBvcnQgaW50ZXJwb2xhdGUgZnJvbSBcIi4vaW50ZXJwb2xhdGVcIjtcblxuZnVuY3Rpb24gYXR0clJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0clJlbW92ZU5TKGZ1bGxuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJDb25zdGFudChuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUxKSB7XG4gIHZhciBzdHJpbmcwMCxcbiAgICAgIHN0cmluZzEgPSB2YWx1ZTEgKyBcIlwiLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZzAgPSB0aGlzLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckNvbnN0YW50TlMoZnVsbG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZTEpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMSA9IHZhbHVlMSArIFwiXCIsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCA9IHRoaXMuZ2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckZ1bmN0aW9uKG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZSkge1xuICB2YXIgc3RyaW5nMDAsXG4gICAgICBzdHJpbmcxMCxcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcwLCB2YWx1ZTEgPSB2YWx1ZSh0aGlzKSwgc3RyaW5nMTtcbiAgICBpZiAodmFsdWUxID09IG51bGwpIHJldHVybiB2b2lkIHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIHN0cmluZzAgPSB0aGlzLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICBzdHJpbmcxID0gdmFsdWUxICsgXCJcIjtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCAmJiBzdHJpbmcxID09PSBzdHJpbmcxMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IChzdHJpbmcxMCA9IHN0cmluZzEsIGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJGdW5jdGlvbk5TKGZ1bGxuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMTAsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCwgdmFsdWUxID0gdmFsdWUodGhpcyksIHN0cmluZzE7XG4gICAgaWYgKHZhbHVlMSA9PSBudWxsKSByZXR1cm4gdm9pZCB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gICAgc3RyaW5nMCA9IHRoaXMuZ2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgICBzdHJpbmcxID0gdmFsdWUxICsgXCJcIjtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCAmJiBzdHJpbmcxID09PSBzdHJpbmcxMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IChzdHJpbmcxMCA9IHN0cmluZzEsIGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBmdWxsbmFtZSA9IG5hbWVzcGFjZShuYW1lKSwgaSA9IGZ1bGxuYW1lID09PSBcInRyYW5zZm9ybVwiID8gaW50ZXJwb2xhdGVUcmFuc2Zvcm0gOiBpbnRlcnBvbGF0ZTtcbiAgcmV0dXJuIHRoaXMuYXR0clR3ZWVuKG5hbWUsIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJGdW5jdGlvbk5TIDogYXR0ckZ1bmN0aW9uKShmdWxsbmFtZSwgaSwgdHdlZW5WYWx1ZSh0aGlzLCBcImF0dHIuXCIgKyBuYW1lLCB2YWx1ZSkpXG4gICAgICA6IHZhbHVlID09IG51bGwgPyAoZnVsbG5hbWUubG9jYWwgPyBhdHRyUmVtb3ZlTlMgOiBhdHRyUmVtb3ZlKShmdWxsbmFtZSlcbiAgICAgIDogKGZ1bGxuYW1lLmxvY2FsID8gYXR0ckNvbnN0YW50TlMgOiBhdHRyQ29uc3RhbnQpKGZ1bGxuYW1lLCBpLCB2YWx1ZSkpO1xufVxuIiwiaW1wb3J0IHtuYW1lc3BhY2V9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcblxuZnVuY3Rpb24gYXR0ckludGVycG9sYXRlKG5hbWUsIGkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCBpKHQpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckludGVycG9sYXRlTlMoZnVsbG5hbWUsIGkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCwgaSh0KSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJUd2Vlbk5TKGZ1bGxuYW1lLCB2YWx1ZSkge1xuICB2YXIgdDAsIGkwO1xuICBmdW5jdGlvbiB0d2VlbigpIHtcbiAgICB2YXIgaSA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKGkgIT09IGkwKSB0MCA9IChpMCA9IGkpICYmIGF0dHJJbnRlcnBvbGF0ZU5TKGZ1bGxuYW1lLCBpKTtcbiAgICByZXR1cm4gdDA7XG4gIH1cbiAgdHdlZW4uX3ZhbHVlID0gdmFsdWU7XG4gIHJldHVybiB0d2Vlbjtcbn1cblxuZnVuY3Rpb24gYXR0clR3ZWVuKG5hbWUsIHZhbHVlKSB7XG4gIHZhciB0MCwgaTA7XG4gIGZ1bmN0aW9uIHR3ZWVuKCkge1xuICAgIHZhciBpID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAoaSAhPT0gaTApIHQwID0gKGkwID0gaSkgJiYgYXR0ckludGVycG9sYXRlKG5hbWUsIGkpO1xuICAgIHJldHVybiB0MDtcbiAgfVxuICB0d2Vlbi5fdmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIHR3ZWVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIga2V5ID0gXCJhdHRyLlwiICsgbmFtZTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSByZXR1cm4gKGtleSA9IHRoaXMudHdlZW4oa2V5KSkgJiYga2V5Ll92YWx1ZTtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiB0aGlzLnR3ZWVuKGtleSwgbnVsbCk7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICB2YXIgZnVsbG5hbWUgPSBuYW1lc3BhY2UobmFtZSk7XG4gIHJldHVybiB0aGlzLnR3ZWVuKGtleSwgKGZ1bGxuYW1lLmxvY2FsID8gYXR0clR3ZWVuTlMgOiBhdHRyVHdlZW4pKGZ1bGxuYW1lLCB2YWx1ZSkpO1xufVxuIiwiaW1wb3J0IHtnZXQsIGluaXR9IGZyb20gXCIuL3NjaGVkdWxlXCI7XG5cbmZ1bmN0aW9uIGRlbGF5RnVuY3Rpb24oaWQsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBpbml0KHRoaXMsIGlkKS5kZWxheSA9ICt2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBkZWxheUNvbnN0YW50KGlkLCB2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPSArdmFsdWUsIGZ1bmN0aW9uKCkge1xuICAgIGluaXQodGhpcywgaWQpLmRlbGF5ID0gdmFsdWU7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHZhciBpZCA9IHRoaXMuX2lkO1xuXG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuZWFjaCgodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IGRlbGF5RnVuY3Rpb25cbiAgICAgICAgICA6IGRlbGF5Q29uc3RhbnQpKGlkLCB2YWx1ZSkpXG4gICAgICA6IGdldCh0aGlzLm5vZGUoKSwgaWQpLmRlbGF5O1xufVxuIiwiaW1wb3J0IHtnZXQsIHNldH0gZnJvbSBcIi4vc2NoZWR1bGVcIjtcblxuZnVuY3Rpb24gZHVyYXRpb25GdW5jdGlvbihpZCwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHNldCh0aGlzLCBpZCkuZHVyYXRpb24gPSArdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZHVyYXRpb25Db25zdGFudChpZCwgdmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID0gK3ZhbHVlLCBmdW5jdGlvbigpIHtcbiAgICBzZXQodGhpcywgaWQpLmR1cmF0aW9uID0gdmFsdWU7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHZhciBpZCA9IHRoaXMuX2lkO1xuXG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuZWFjaCgodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IGR1cmF0aW9uRnVuY3Rpb25cbiAgICAgICAgICA6IGR1cmF0aW9uQ29uc3RhbnQpKGlkLCB2YWx1ZSkpXG4gICAgICA6IGdldCh0aGlzLm5vZGUoKSwgaWQpLmR1cmF0aW9uO1xufVxuIiwiaW1wb3J0IHtnZXQsIHNldH0gZnJvbSBcIi4vc2NoZWR1bGVcIjtcblxuZnVuY3Rpb24gZWFzZUNvbnN0YW50KGlkLCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHNldCh0aGlzLCBpZCkuZWFzZSA9IHZhbHVlO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICB2YXIgaWQgPSB0aGlzLl9pZDtcblxuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2goZWFzZUNvbnN0YW50KGlkLCB2YWx1ZSkpXG4gICAgICA6IGdldCh0aGlzLm5vZGUoKSwgaWQpLmVhc2U7XG59XG4iLCJpbXBvcnQge3NldH0gZnJvbSBcIi4vc2NoZWR1bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBvbjAsIG9uMSwgdGhhdCA9IHRoaXMsIGlkID0gdGhhdC5faWQsIHNpemUgPSB0aGF0LnNpemUoKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBjYW5jZWwgPSB7dmFsdWU6IHJlamVjdH0sXG4gICAgICAgIGVuZCA9IHt2YWx1ZTogZnVuY3Rpb24oKSB7IGlmICgtLXNpemUgPT09IDApIHJlc29sdmUoKTsgfX07XG5cbiAgICB0aGF0LmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2NoZWR1bGUgPSBzZXQodGhpcywgaWQpLFxuICAgICAgICAgIG9uID0gc2NoZWR1bGUub247XG5cbiAgICAgIC8vIElmIHRoaXMgbm9kZSBzaGFyZWQgYSBkaXNwYXRjaCB3aXRoIHRoZSBwcmV2aW91cyBub2RlLFxuICAgICAgLy8ganVzdCBhc3NpZ24gdGhlIHVwZGF0ZWQgc2hhcmVkIGRpc3BhdGNoIGFuZCB3ZeKAmXJlIGRvbmUhXG4gICAgICAvLyBPdGhlcndpc2UsIGNvcHktb24td3JpdGUuXG4gICAgICBpZiAob24gIT09IG9uMCkge1xuICAgICAgICBvbjEgPSAob24wID0gb24pLmNvcHkoKTtcbiAgICAgICAgb24xLl8uY2FuY2VsLnB1c2goY2FuY2VsKTtcbiAgICAgICAgb24xLl8uaW50ZXJydXB0LnB1c2goY2FuY2VsKTtcbiAgICAgICAgb24xLl8uZW5kLnB1c2goZW5kKTtcbiAgICAgIH1cblxuICAgICAgc2NoZWR1bGUub24gPSBvbjE7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHttYXRjaGVyfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge1RyYW5zaXRpb259IGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIGlmICh0eXBlb2YgbWF0Y2ggIT09IFwiZnVuY3Rpb25cIikgbWF0Y2ggPSBtYXRjaGVyKG1hdGNoKTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHN1Ymdyb3VwID0gc3ViZ3JvdXBzW2pdID0gW10sIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgbWF0Y2guY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpIHtcbiAgICAgICAgc3ViZ3JvdXAucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oc3ViZ3JvdXBzLCB0aGlzLl9wYXJlbnRzLCB0aGlzLl9uYW1lLCB0aGlzLl9pZCk7XG59XG4iLCJpbXBvcnQge3NlbGVjdGlvbn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHRyYW5zaXRpb25fYXR0ciBmcm9tIFwiLi9hdHRyXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9hdHRyVHdlZW4gZnJvbSBcIi4vYXR0clR3ZWVuXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9kZWxheSBmcm9tIFwiLi9kZWxheVwiO1xuaW1wb3J0IHRyYW5zaXRpb25fZHVyYXRpb24gZnJvbSBcIi4vZHVyYXRpb25cIjtcbmltcG9ydCB0cmFuc2l0aW9uX2Vhc2UgZnJvbSBcIi4vZWFzZVwiO1xuaW1wb3J0IHRyYW5zaXRpb25fZmlsdGVyIGZyb20gXCIuL2ZpbHRlclwiO1xuaW1wb3J0IHRyYW5zaXRpb25fbWVyZ2UgZnJvbSBcIi4vbWVyZ2VcIjtcbmltcG9ydCB0cmFuc2l0aW9uX29uIGZyb20gXCIuL29uXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9yZW1vdmUgZnJvbSBcIi4vcmVtb3ZlXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9zZWxlY3QgZnJvbSBcIi4vc2VsZWN0XCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9zZWxlY3RBbGwgZnJvbSBcIi4vc2VsZWN0QWxsXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9zZWxlY3Rpb24gZnJvbSBcIi4vc2VsZWN0aW9uXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9zdHlsZSBmcm9tIFwiLi9zdHlsZVwiO1xuaW1wb3J0IHRyYW5zaXRpb25fc3R5bGVUd2VlbiBmcm9tIFwiLi9zdHlsZVR3ZWVuXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl90ZXh0IGZyb20gXCIuL3RleHRcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3RyYW5zaXRpb24gZnJvbSBcIi4vdHJhbnNpdGlvblwiO1xuaW1wb3J0IHRyYW5zaXRpb25fdHdlZW4gZnJvbSBcIi4vdHdlZW5cIjtcbmltcG9ydCB0cmFuc2l0aW9uX2VuZCBmcm9tIFwiLi9lbmRcIjtcblxudmFyIGlkID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zaXRpb24oZ3JvdXBzLCBwYXJlbnRzLCBuYW1lLCBpZCkge1xuICB0aGlzLl9ncm91cHMgPSBncm91cHM7XG4gIHRoaXMuX3BhcmVudHMgPSBwYXJlbnRzO1xuICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgdGhpcy5faWQgPSBpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNpdGlvbihuYW1lKSB7XG4gIHJldHVybiBzZWxlY3Rpb24oKS50cmFuc2l0aW9uKG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3SWQoKSB7XG4gIHJldHVybiArK2lkO1xufVxuXG52YXIgc2VsZWN0aW9uX3Byb3RvdHlwZSA9IHNlbGVjdGlvbi5wcm90b3R5cGU7XG5cblRyYW5zaXRpb24ucHJvdG90eXBlID0gdHJhbnNpdGlvbi5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBUcmFuc2l0aW9uLFxuICBzZWxlY3Q6IHRyYW5zaXRpb25fc2VsZWN0LFxuICBzZWxlY3RBbGw6IHRyYW5zaXRpb25fc2VsZWN0QWxsLFxuICBmaWx0ZXI6IHRyYW5zaXRpb25fZmlsdGVyLFxuICBtZXJnZTogdHJhbnNpdGlvbl9tZXJnZSxcbiAgc2VsZWN0aW9uOiB0cmFuc2l0aW9uX3NlbGVjdGlvbixcbiAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbl90cmFuc2l0aW9uLFxuICBjYWxsOiBzZWxlY3Rpb25fcHJvdG90eXBlLmNhbGwsXG4gIG5vZGVzOiBzZWxlY3Rpb25fcHJvdG90eXBlLm5vZGVzLFxuICBub2RlOiBzZWxlY3Rpb25fcHJvdG90eXBlLm5vZGUsXG4gIHNpemU6IHNlbGVjdGlvbl9wcm90b3R5cGUuc2l6ZSxcbiAgZW1wdHk6IHNlbGVjdGlvbl9wcm90b3R5cGUuZW1wdHksXG4gIGVhY2g6IHNlbGVjdGlvbl9wcm90b3R5cGUuZWFjaCxcbiAgb246IHRyYW5zaXRpb25fb24sXG4gIGF0dHI6IHRyYW5zaXRpb25fYXR0cixcbiAgYXR0clR3ZWVuOiB0cmFuc2l0aW9uX2F0dHJUd2VlbixcbiAgc3R5bGU6IHRyYW5zaXRpb25fc3R5bGUsXG4gIHN0eWxlVHdlZW46IHRyYW5zaXRpb25fc3R5bGVUd2VlbixcbiAgdGV4dDogdHJhbnNpdGlvbl90ZXh0LFxuICByZW1vdmU6IHRyYW5zaXRpb25fcmVtb3ZlLFxuICB0d2VlbjogdHJhbnNpdGlvbl90d2VlbixcbiAgZGVsYXk6IHRyYW5zaXRpb25fZGVsYXksXG4gIGR1cmF0aW9uOiB0cmFuc2l0aW9uX2R1cmF0aW9uLFxuICBlYXNlOiB0cmFuc2l0aW9uX2Vhc2UsXG4gIGVuZDogdHJhbnNpdGlvbl9lbmRcbn07XG4iLCJpbXBvcnQge2NvbG9yfSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCB7aW50ZXJwb2xhdGVOdW1iZXIsIGludGVycG9sYXRlUmdiLCBpbnRlcnBvbGF0ZVN0cmluZ30gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIGM7XG4gIHJldHVybiAodHlwZW9mIGIgPT09IFwibnVtYmVyXCIgPyBpbnRlcnBvbGF0ZU51bWJlclxuICAgICAgOiBiIGluc3RhbmNlb2YgY29sb3IgPyBpbnRlcnBvbGF0ZVJnYlxuICAgICAgOiAoYyA9IGNvbG9yKGIpKSA/IChiID0gYywgaW50ZXJwb2xhdGVSZ2IpXG4gICAgICA6IGludGVycG9sYXRlU3RyaW5nKShhLCBiKTtcbn1cbiIsImltcG9ydCB7VHJhbnNpdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odHJhbnNpdGlvbikge1xuICBpZiAodHJhbnNpdGlvbi5faWQgIT09IHRoaXMuX2lkKSB0aHJvdyBuZXcgRXJyb3I7XG5cbiAgZm9yICh2YXIgZ3JvdXBzMCA9IHRoaXMuX2dyb3VwcywgZ3JvdXBzMSA9IHRyYW5zaXRpb24uX2dyb3VwcywgbTAgPSBncm91cHMwLmxlbmd0aCwgbTEgPSBncm91cHMxLmxlbmd0aCwgbSA9IE1hdGgubWluKG0wLCBtMSksIG1lcmdlcyA9IG5ldyBBcnJheShtMCksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAwID0gZ3JvdXBzMFtqXSwgZ3JvdXAxID0gZ3JvdXBzMVtqXSwgbiA9IGdyb3VwMC5sZW5ndGgsIG1lcmdlID0gbWVyZ2VzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cDBbaV0gfHwgZ3JvdXAxW2ldKSB7XG4gICAgICAgIG1lcmdlW2ldID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKDsgaiA8IG0wOyArK2opIHtcbiAgICBtZXJnZXNbal0gPSBncm91cHMwW2pdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKG1lcmdlcywgdGhpcy5fcGFyZW50cywgdGhpcy5fbmFtZSwgdGhpcy5faWQpO1xufVxuIiwiaW1wb3J0IHtnZXQsIHNldCwgaW5pdH0gZnJvbSBcIi4vc2NoZWR1bGVcIjtcblxuZnVuY3Rpb24gc3RhcnQobmFtZSkge1xuICByZXR1cm4gKG5hbWUgKyBcIlwiKS50cmltKCkuc3BsaXQoL158XFxzKy8pLmV2ZXJ5KGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgaSA9IHQuaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKGkgPj0gMCkgdCA9IHQuc2xpY2UoMCwgaSk7XG4gICAgcmV0dXJuICF0IHx8IHQgPT09IFwic3RhcnRcIjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9uRnVuY3Rpb24oaWQsIG5hbWUsIGxpc3RlbmVyKSB7XG4gIHZhciBvbjAsIG9uMSwgc2l0ID0gc3RhcnQobmFtZSkgPyBpbml0IDogc2V0O1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVkdWxlID0gc2l0KHRoaXMsIGlkKSxcbiAgICAgICAgb24gPSBzY2hlZHVsZS5vbjtcblxuICAgIC8vIElmIHRoaXMgbm9kZSBzaGFyZWQgYSBkaXNwYXRjaCB3aXRoIHRoZSBwcmV2aW91cyBub2RlLFxuICAgIC8vIGp1c3QgYXNzaWduIHRoZSB1cGRhdGVkIHNoYXJlZCBkaXNwYXRjaCBhbmQgd2XigJlyZSBkb25lIVxuICAgIC8vIE90aGVyd2lzZSwgY29weS1vbi13cml0ZS5cbiAgICBpZiAob24gIT09IG9uMCkgKG9uMSA9IChvbjAgPSBvbikuY29weSgpKS5vbihuYW1lLCBsaXN0ZW5lcik7XG5cbiAgICBzY2hlZHVsZS5vbiA9IG9uMTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGlkID0gdGhpcy5faWQ7XG5cbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyXG4gICAgICA/IGdldCh0aGlzLm5vZGUoKSwgaWQpLm9uLm9uKG5hbWUpXG4gICAgICA6IHRoaXMuZWFjaChvbkZ1bmN0aW9uKGlkLCBuYW1lLCBsaXN0ZW5lcikpO1xufVxuIiwiZnVuY3Rpb24gcmVtb3ZlRnVuY3Rpb24oaWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLl9fdHJhbnNpdGlvbikgaWYgKCtpICE9PSBpZCkgcmV0dXJuO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLm9uKFwiZW5kLnJlbW92ZVwiLCByZW1vdmVGdW5jdGlvbih0aGlzLl9pZCkpO1xufVxuIiwiaW1wb3J0IHtkaXNwYXRjaH0gZnJvbSBcImQzLWRpc3BhdGNoXCI7XG5pbXBvcnQge3RpbWVyLCB0aW1lb3V0fSBmcm9tIFwiZDMtdGltZXJcIjtcblxudmFyIGVtcHR5T24gPSBkaXNwYXRjaChcInN0YXJ0XCIsIFwiZW5kXCIsIFwiY2FuY2VsXCIsIFwiaW50ZXJydXB0XCIpO1xudmFyIGVtcHR5VHdlZW4gPSBbXTtcblxuZXhwb3J0IHZhciBDUkVBVEVEID0gMDtcbmV4cG9ydCB2YXIgU0NIRURVTEVEID0gMTtcbmV4cG9ydCB2YXIgU1RBUlRJTkcgPSAyO1xuZXhwb3J0IHZhciBTVEFSVEVEID0gMztcbmV4cG9ydCB2YXIgUlVOTklORyA9IDQ7XG5leHBvcnQgdmFyIEVORElORyA9IDU7XG5leHBvcnQgdmFyIEVOREVEID0gNjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSwgbmFtZSwgaWQsIGluZGV4LCBncm91cCwgdGltaW5nKSB7XG4gIHZhciBzY2hlZHVsZXMgPSBub2RlLl9fdHJhbnNpdGlvbjtcbiAgaWYgKCFzY2hlZHVsZXMpIG5vZGUuX190cmFuc2l0aW9uID0ge307XG4gIGVsc2UgaWYgKGlkIGluIHNjaGVkdWxlcykgcmV0dXJuO1xuICBjcmVhdGUobm9kZSwgaWQsIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGluZGV4OiBpbmRleCwgLy8gRm9yIGNvbnRleHQgZHVyaW5nIGNhbGxiYWNrLlxuICAgIGdyb3VwOiBncm91cCwgLy8gRm9yIGNvbnRleHQgZHVyaW5nIGNhbGxiYWNrLlxuICAgIG9uOiBlbXB0eU9uLFxuICAgIHR3ZWVuOiBlbXB0eVR3ZWVuLFxuICAgIHRpbWU6IHRpbWluZy50aW1lLFxuICAgIGRlbGF5OiB0aW1pbmcuZGVsYXksXG4gICAgZHVyYXRpb246IHRpbWluZy5kdXJhdGlvbixcbiAgICBlYXNlOiB0aW1pbmcuZWFzZSxcbiAgICB0aW1lcjogbnVsbCxcbiAgICBzdGF0ZTogQ1JFQVRFRFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQobm9kZSwgaWQpIHtcbiAgdmFyIHNjaGVkdWxlID0gZ2V0KG5vZGUsIGlkKTtcbiAgaWYgKHNjaGVkdWxlLnN0YXRlID4gQ1JFQVRFRCkgdGhyb3cgbmV3IEVycm9yKFwidG9vIGxhdGU7IGFscmVhZHkgc2NoZWR1bGVkXCIpO1xuICByZXR1cm4gc2NoZWR1bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQobm9kZSwgaWQpIHtcbiAgdmFyIHNjaGVkdWxlID0gZ2V0KG5vZGUsIGlkKTtcbiAgaWYgKHNjaGVkdWxlLnN0YXRlID4gU1RBUlRFRCkgdGhyb3cgbmV3IEVycm9yKFwidG9vIGxhdGU7IGFscmVhZHkgcnVubmluZ1wiKTtcbiAgcmV0dXJuIHNjaGVkdWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0KG5vZGUsIGlkKSB7XG4gIHZhciBzY2hlZHVsZSA9IG5vZGUuX190cmFuc2l0aW9uO1xuICBpZiAoIXNjaGVkdWxlIHx8ICEoc2NoZWR1bGUgPSBzY2hlZHVsZVtpZF0pKSB0aHJvdyBuZXcgRXJyb3IoXCJ0cmFuc2l0aW9uIG5vdCBmb3VuZFwiKTtcbiAgcmV0dXJuIHNjaGVkdWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGUobm9kZSwgaWQsIHNlbGYpIHtcbiAgdmFyIHNjaGVkdWxlcyA9IG5vZGUuX190cmFuc2l0aW9uLFxuICAgICAgdHdlZW47XG5cbiAgLy8gSW5pdGlhbGl6ZSB0aGUgc2VsZiB0aW1lciB3aGVuIHRoZSB0cmFuc2l0aW9uIGlzIGNyZWF0ZWQuXG4gIC8vIE5vdGUgdGhlIGFjdHVhbCBkZWxheSBpcyBub3Qga25vd24gdW50aWwgdGhlIGZpcnN0IGNhbGxiYWNrIVxuICBzY2hlZHVsZXNbaWRdID0gc2VsZjtcbiAgc2VsZi50aW1lciA9IHRpbWVyKHNjaGVkdWxlLCAwLCBzZWxmLnRpbWUpO1xuXG4gIGZ1bmN0aW9uIHNjaGVkdWxlKGVsYXBzZWQpIHtcbiAgICBzZWxmLnN0YXRlID0gU0NIRURVTEVEO1xuICAgIHNlbGYudGltZXIucmVzdGFydChzdGFydCwgc2VsZi5kZWxheSwgc2VsZi50aW1lKTtcblxuICAgIC8vIElmIHRoZSBlbGFwc2VkIGRlbGF5IGlzIGxlc3MgdGhhbiBvdXIgZmlyc3Qgc2xlZXAsIHN0YXJ0IGltbWVkaWF0ZWx5LlxuICAgIGlmIChzZWxmLmRlbGF5IDw9IGVsYXBzZWQpIHN0YXJ0KGVsYXBzZWQgLSBzZWxmLmRlbGF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGVsYXBzZWQpIHtcbiAgICB2YXIgaSwgaiwgbiwgbztcblxuICAgIC8vIElmIHRoZSBzdGF0ZSBpcyBub3QgU0NIRURVTEVELCB0aGVuIHdlIHByZXZpb3VzbHkgZXJyb3JlZCBvbiBzdGFydC5cbiAgICBpZiAoc2VsZi5zdGF0ZSAhPT0gU0NIRURVTEVEKSByZXR1cm4gc3RvcCgpO1xuXG4gICAgZm9yIChpIGluIHNjaGVkdWxlcykge1xuICAgICAgbyA9IHNjaGVkdWxlc1tpXTtcbiAgICAgIGlmIChvLm5hbWUgIT09IHNlbGYubmFtZSkgY29udGludWU7XG5cbiAgICAgIC8vIFdoaWxlIHRoaXMgZWxlbWVudCBhbHJlYWR5IGhhcyBhIHN0YXJ0aW5nIHRyYW5zaXRpb24gZHVyaW5nIHRoaXMgZnJhbWUsXG4gICAgICAvLyBkZWZlciBzdGFydGluZyBhbiBpbnRlcnJ1cHRpbmcgdHJhbnNpdGlvbiB1bnRpbCB0aGF0IHRyYW5zaXRpb24gaGFzIGFcbiAgICAgIC8vIGNoYW5jZSB0byB0aWNrIChhbmQgcG9zc2libHkgZW5kKTsgc2VlIGQzL2QzLXRyYW5zaXRpb24jNTQhXG4gICAgICBpZiAoby5zdGF0ZSA9PT0gU1RBUlRFRCkgcmV0dXJuIHRpbWVvdXQoc3RhcnQpO1xuXG4gICAgICAvLyBJbnRlcnJ1cHQgdGhlIGFjdGl2ZSB0cmFuc2l0aW9uLCBpZiBhbnkuXG4gICAgICBpZiAoby5zdGF0ZSA9PT0gUlVOTklORykge1xuICAgICAgICBvLnN0YXRlID0gRU5ERUQ7XG4gICAgICAgIG8udGltZXIuc3RvcCgpO1xuICAgICAgICBvLm9uLmNhbGwoXCJpbnRlcnJ1cHRcIiwgbm9kZSwgbm9kZS5fX2RhdGFfXywgby5pbmRleCwgby5ncm91cCk7XG4gICAgICAgIGRlbGV0ZSBzY2hlZHVsZXNbaV07XG4gICAgICB9XG5cbiAgICAgIC8vIENhbmNlbCBhbnkgcHJlLWVtcHRlZCB0cmFuc2l0aW9ucy5cbiAgICAgIGVsc2UgaWYgKCtpIDwgaWQpIHtcbiAgICAgICAgby5zdGF0ZSA9IEVOREVEO1xuICAgICAgICBvLnRpbWVyLnN0b3AoKTtcbiAgICAgICAgby5vbi5jYWxsKFwiY2FuY2VsXCIsIG5vZGUsIG5vZGUuX19kYXRhX18sIG8uaW5kZXgsIG8uZ3JvdXApO1xuICAgICAgICBkZWxldGUgc2NoZWR1bGVzW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERlZmVyIHRoZSBmaXJzdCB0aWNrIHRvIGVuZCBvZiB0aGUgY3VycmVudCBmcmFtZTsgc2VlIGQzL2QzIzE1NzYuXG4gICAgLy8gTm90ZSB0aGUgdHJhbnNpdGlvbiBtYXkgYmUgY2FuY2VsZWQgYWZ0ZXIgc3RhcnQgYW5kIGJlZm9yZSB0aGUgZmlyc3QgdGljayFcbiAgICAvLyBOb3RlIHRoaXMgbXVzdCBiZSBzY2hlZHVsZWQgYmVmb3JlIHRoZSBzdGFydCBldmVudDsgc2VlIGQzL2QzLXRyYW5zaXRpb24jMTYhXG4gICAgLy8gQXNzdW1pbmcgdGhpcyBpcyBzdWNjZXNzZnVsLCBzdWJzZXF1ZW50IGNhbGxiYWNrcyBnbyBzdHJhaWdodCB0byB0aWNrLlxuICAgIHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoc2VsZi5zdGF0ZSA9PT0gU1RBUlRFRCkge1xuICAgICAgICBzZWxmLnN0YXRlID0gUlVOTklORztcbiAgICAgICAgc2VsZi50aW1lci5yZXN0YXJ0KHRpY2ssIHNlbGYuZGVsYXksIHNlbGYudGltZSk7XG4gICAgICAgIHRpY2soZWxhcHNlZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBEaXNwYXRjaCB0aGUgc3RhcnQgZXZlbnQuXG4gICAgLy8gTm90ZSB0aGlzIG11c3QgYmUgZG9uZSBiZWZvcmUgdGhlIHR3ZWVuIGFyZSBpbml0aWFsaXplZC5cbiAgICBzZWxmLnN0YXRlID0gU1RBUlRJTkc7XG4gICAgc2VsZi5vbi5jYWxsKFwic3RhcnRcIiwgbm9kZSwgbm9kZS5fX2RhdGFfXywgc2VsZi5pbmRleCwgc2VsZi5ncm91cCk7XG4gICAgaWYgKHNlbGYuc3RhdGUgIT09IFNUQVJUSU5HKSByZXR1cm47IC8vIGludGVycnVwdGVkXG4gICAgc2VsZi5zdGF0ZSA9IFNUQVJURUQ7XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSB0d2VlbiwgZGVsZXRpbmcgbnVsbCB0d2Vlbi5cbiAgICB0d2VlbiA9IG5ldyBBcnJheShuID0gc2VsZi50d2Vlbi5sZW5ndGgpO1xuICAgIGZvciAoaSA9IDAsIGogPSAtMTsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG8gPSBzZWxmLnR3ZWVuW2ldLnZhbHVlLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgc2VsZi5pbmRleCwgc2VsZi5ncm91cCkpIHtcbiAgICAgICAgdHdlZW5bKytqXSA9IG87XG4gICAgICB9XG4gICAgfVxuICAgIHR3ZWVuLmxlbmd0aCA9IGogKyAxO1xuICB9XG5cbiAgZnVuY3Rpb24gdGljayhlbGFwc2VkKSB7XG4gICAgdmFyIHQgPSBlbGFwc2VkIDwgc2VsZi5kdXJhdGlvbiA/IHNlbGYuZWFzZS5jYWxsKG51bGwsIGVsYXBzZWQgLyBzZWxmLmR1cmF0aW9uKSA6IChzZWxmLnRpbWVyLnJlc3RhcnQoc3RvcCksIHNlbGYuc3RhdGUgPSBFTkRJTkcsIDEpLFxuICAgICAgICBpID0gLTEsXG4gICAgICAgIG4gPSB0d2Vlbi5sZW5ndGg7XG5cbiAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgdHdlZW5baV0uY2FsbChub2RlLCB0KTtcbiAgICB9XG5cbiAgICAvLyBEaXNwYXRjaCB0aGUgZW5kIGV2ZW50LlxuICAgIGlmIChzZWxmLnN0YXRlID09PSBFTkRJTkcpIHtcbiAgICAgIHNlbGYub24uY2FsbChcImVuZFwiLCBub2RlLCBub2RlLl9fZGF0YV9fLCBzZWxmLmluZGV4LCBzZWxmLmdyb3VwKTtcbiAgICAgIHN0b3AoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wKCkge1xuICAgIHNlbGYuc3RhdGUgPSBFTkRFRDtcbiAgICBzZWxmLnRpbWVyLnN0b3AoKTtcbiAgICBkZWxldGUgc2NoZWR1bGVzW2lkXTtcbiAgICBmb3IgKHZhciBpIGluIHNjaGVkdWxlcykgcmV0dXJuOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgZGVsZXRlIG5vZGUuX190cmFuc2l0aW9uO1xuICB9XG59XG4iLCJpbXBvcnQge3NlbGVjdG9yfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge1RyYW5zaXRpb259IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgc2NoZWR1bGUsIHtnZXR9IGZyb20gXCIuL3NjaGVkdWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdCkge1xuICB2YXIgbmFtZSA9IHRoaXMuX25hbWUsXG4gICAgICBpZCA9IHRoaXMuX2lkO1xuXG4gIGlmICh0eXBlb2Ygc2VsZWN0ICE9PSBcImZ1bmN0aW9uXCIpIHNlbGVjdCA9IHNlbGVjdG9yKHNlbGVjdCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzdWJncm91cCA9IHN1Ymdyb3Vwc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgc3Vibm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiAoc3Vibm9kZSA9IHNlbGVjdC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSkpIHtcbiAgICAgICAgaWYgKFwiX19kYXRhX19cIiBpbiBub2RlKSBzdWJub2RlLl9fZGF0YV9fID0gbm9kZS5fX2RhdGFfXztcbiAgICAgICAgc3ViZ3JvdXBbaV0gPSBzdWJub2RlO1xuICAgICAgICBzY2hlZHVsZShzdWJncm91cFtpXSwgbmFtZSwgaWQsIGksIHN1Ymdyb3VwLCBnZXQobm9kZSwgaWQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oc3ViZ3JvdXBzLCB0aGlzLl9wYXJlbnRzLCBuYW1lLCBpZCk7XG59XG4iLCJpbXBvcnQge3NlbGVjdG9yQWxsfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge1RyYW5zaXRpb259IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgc2NoZWR1bGUsIHtnZXR9IGZyb20gXCIuL3NjaGVkdWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdCkge1xuICB2YXIgbmFtZSA9IHRoaXMuX25hbWUsXG4gICAgICBpZCA9IHRoaXMuX2lkO1xuXG4gIGlmICh0eXBlb2Ygc2VsZWN0ICE9PSBcImZ1bmN0aW9uXCIpIHNlbGVjdCA9IHNlbGVjdG9yQWxsKHNlbGVjdCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gW10sIHBhcmVudHMgPSBbXSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgZm9yICh2YXIgY2hpbGRyZW4gPSBzZWxlY3QuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCksIGNoaWxkLCBpbmhlcml0ID0gZ2V0KG5vZGUsIGlkKSwgayA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGsgPCBsOyArK2spIHtcbiAgICAgICAgICBpZiAoY2hpbGQgPSBjaGlsZHJlbltrXSkge1xuICAgICAgICAgICAgc2NoZWR1bGUoY2hpbGQsIG5hbWUsIGlkLCBrLCBjaGlsZHJlbiwgaW5oZXJpdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN1Ymdyb3Vwcy5wdXNoKGNoaWxkcmVuKTtcbiAgICAgICAgcGFyZW50cy5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgVHJhbnNpdGlvbihzdWJncm91cHMsIHBhcmVudHMsIG5hbWUsIGlkKTtcbn1cbiIsImltcG9ydCB7c2VsZWN0aW9ufSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5cbnZhciBTZWxlY3Rpb24gPSBzZWxlY3Rpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24odGhpcy5fZ3JvdXBzLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsImltcG9ydCB7aW50ZXJwb2xhdGVUcmFuc2Zvcm1Dc3MgYXMgaW50ZXJwb2xhdGVUcmFuc2Zvcm19IGZyb20gXCJkMy1pbnRlcnBvbGF0ZVwiO1xuaW1wb3J0IHtzdHlsZX0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHtzZXR9IGZyb20gXCIuL3NjaGVkdWxlXCI7XG5pbXBvcnQge3R3ZWVuVmFsdWV9IGZyb20gXCIuL3R3ZWVuXCI7XG5pbXBvcnQgaW50ZXJwb2xhdGUgZnJvbSBcIi4vaW50ZXJwb2xhdGVcIjtcblxuZnVuY3Rpb24gc3R5bGVOdWxsKG5hbWUsIGludGVycG9sYXRlKSB7XG4gIHZhciBzdHJpbmcwMCxcbiAgICAgIHN0cmluZzEwLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZzAgPSBzdHlsZSh0aGlzLCBuYW1lKSxcbiAgICAgICAgc3RyaW5nMSA9ICh0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpLCBzdHlsZSh0aGlzLCBuYW1lKSk7XG4gICAgcmV0dXJuIHN0cmluZzAgPT09IHN0cmluZzEgPyBudWxsXG4gICAgICAgIDogc3RyaW5nMCA9PT0gc3RyaW5nMDAgJiYgc3RyaW5nMSA9PT0gc3RyaW5nMTAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZShzdHJpbmcwMCA9IHN0cmluZzAsIHN0cmluZzEwID0gc3RyaW5nMSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlUmVtb3ZlKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlQ29uc3RhbnQobmFtZSwgaW50ZXJwb2xhdGUsIHZhbHVlMSkge1xuICB2YXIgc3RyaW5nMDAsXG4gICAgICBzdHJpbmcxID0gdmFsdWUxICsgXCJcIixcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcwID0gc3R5bGUodGhpcywgbmFtZSk7XG4gICAgcmV0dXJuIHN0cmluZzAgPT09IHN0cmluZzEgPyBudWxsXG4gICAgICAgIDogc3RyaW5nMCA9PT0gc3RyaW5nMDAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZShzdHJpbmcwMCA9IHN0cmluZzAsIHZhbHVlMSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlRnVuY3Rpb24obmFtZSwgaW50ZXJwb2xhdGUsIHZhbHVlKSB7XG4gIHZhciBzdHJpbmcwMCxcbiAgICAgIHN0cmluZzEwLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZzAgPSBzdHlsZSh0aGlzLCBuYW1lKSxcbiAgICAgICAgdmFsdWUxID0gdmFsdWUodGhpcyksXG4gICAgICAgIHN0cmluZzEgPSB2YWx1ZTEgKyBcIlwiO1xuICAgIGlmICh2YWx1ZTEgPT0gbnVsbCkgc3RyaW5nMSA9IHZhbHVlMSA9ICh0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpLCBzdHlsZSh0aGlzLCBuYW1lKSk7XG4gICAgcmV0dXJuIHN0cmluZzAgPT09IHN0cmluZzEgPyBudWxsXG4gICAgICAgIDogc3RyaW5nMCA9PT0gc3RyaW5nMDAgJiYgc3RyaW5nMSA9PT0gc3RyaW5nMTAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiAoc3RyaW5nMTAgPSBzdHJpbmcxLCBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZShzdHJpbmcwMCA9IHN0cmluZzAsIHZhbHVlMSkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZU1heWJlUmVtb3ZlKGlkLCBuYW1lKSB7XG4gIHZhciBvbjAsIG9uMSwgbGlzdGVuZXIwLCBrZXkgPSBcInN0eWxlLlwiICsgbmFtZSwgZXZlbnQgPSBcImVuZC5cIiArIGtleSwgcmVtb3ZlO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVkdWxlID0gc2V0KHRoaXMsIGlkKSxcbiAgICAgICAgb24gPSBzY2hlZHVsZS5vbixcbiAgICAgICAgbGlzdGVuZXIgPSBzY2hlZHVsZS52YWx1ZVtrZXldID09IG51bGwgPyByZW1vdmUgfHwgKHJlbW92ZSA9IHN0eWxlUmVtb3ZlKG5hbWUpKSA6IHVuZGVmaW5lZDtcblxuICAgIC8vIElmIHRoaXMgbm9kZSBzaGFyZWQgYSBkaXNwYXRjaCB3aXRoIHRoZSBwcmV2aW91cyBub2RlLFxuICAgIC8vIGp1c3QgYXNzaWduIHRoZSB1cGRhdGVkIHNoYXJlZCBkaXNwYXRjaCBhbmQgd2XigJlyZSBkb25lIVxuICAgIC8vIE90aGVyd2lzZSwgY29weS1vbi13cml0ZS5cbiAgICBpZiAob24gIT09IG9uMCB8fCBsaXN0ZW5lcjAgIT09IGxpc3RlbmVyKSAob24xID0gKG9uMCA9IG9uKS5jb3B5KCkpLm9uKGV2ZW50LCBsaXN0ZW5lcjAgPSBsaXN0ZW5lcik7XG5cbiAgICBzY2hlZHVsZS5vbiA9IG9uMTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gIHZhciBpID0gKG5hbWUgKz0gXCJcIikgPT09IFwidHJhbnNmb3JtXCIgPyBpbnRlcnBvbGF0ZVRyYW5zZm9ybSA6IGludGVycG9sYXRlO1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IHRoaXNcbiAgICAgIC5zdHlsZVR3ZWVuKG5hbWUsIHN0eWxlTnVsbChuYW1lLCBpKSlcbiAgICAgIC5vbihcImVuZC5zdHlsZS5cIiArIG5hbWUsIHN0eWxlUmVtb3ZlKG5hbWUpKVxuICAgIDogdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyB0aGlzXG4gICAgICAuc3R5bGVUd2VlbihuYW1lLCBzdHlsZUZ1bmN0aW9uKG5hbWUsIGksIHR3ZWVuVmFsdWUodGhpcywgXCJzdHlsZS5cIiArIG5hbWUsIHZhbHVlKSkpXG4gICAgICAuZWFjaChzdHlsZU1heWJlUmVtb3ZlKHRoaXMuX2lkLCBuYW1lKSlcbiAgICA6IHRoaXNcbiAgICAgIC5zdHlsZVR3ZWVuKG5hbWUsIHN0eWxlQ29uc3RhbnQobmFtZSwgaSwgdmFsdWUpLCBwcmlvcml0eSlcbiAgICAgIC5vbihcImVuZC5zdHlsZS5cIiArIG5hbWUsIG51bGwpO1xufVxuIiwiZnVuY3Rpb24gc3R5bGVJbnRlcnBvbGF0ZShuYW1lLCBpLCBwcmlvcml0eSkge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgaSh0KSwgcHJpb3JpdHkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZVR3ZWVuKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICB2YXIgdCwgaTA7XG4gIGZ1bmN0aW9uIHR3ZWVuKCkge1xuICAgIHZhciBpID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAoaSAhPT0gaTApIHQgPSAoaTAgPSBpKSAmJiBzdHlsZUludGVycG9sYXRlKG5hbWUsIGksIHByaW9yaXR5KTtcbiAgICByZXR1cm4gdDtcbiAgfVxuICB0d2Vlbi5fdmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIHR3ZWVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgdmFyIGtleSA9IFwic3R5bGUuXCIgKyAobmFtZSArPSBcIlwiKTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSByZXR1cm4gKGtleSA9IHRoaXMudHdlZW4oa2V5KSkgJiYga2V5Ll92YWx1ZTtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiB0aGlzLnR3ZWVuKGtleSwgbnVsbCk7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICByZXR1cm4gdGhpcy50d2VlbihrZXksIHN0eWxlVHdlZW4obmFtZSwgdmFsdWUsIHByaW9yaXR5ID09IG51bGwgPyBcIlwiIDogcHJpb3JpdHkpKTtcbn1cbiIsImltcG9ydCB7dHdlZW5WYWx1ZX0gZnJvbSBcIi4vdHdlZW5cIjtcblxuZnVuY3Rpb24gdGV4dENvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRleHRGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlMSA9IHZhbHVlKHRoaXMpO1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZTEgPT0gbnVsbCA/IFwiXCIgOiB2YWx1ZTE7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLnR3ZWVuKFwidGV4dFwiLCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyB0ZXh0RnVuY3Rpb24odHdlZW5WYWx1ZSh0aGlzLCBcInRleHRcIiwgdmFsdWUpKVxuICAgICAgOiB0ZXh0Q29uc3RhbnQodmFsdWUgPT0gbnVsbCA/IFwiXCIgOiB2YWx1ZSArIFwiXCIpKTtcbn1cbiIsImltcG9ydCB7VHJhbnNpdGlvbiwgbmV3SWR9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgc2NoZWR1bGUsIHtnZXR9IGZyb20gXCIuL3NjaGVkdWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgbmFtZSA9IHRoaXMuX25hbWUsXG4gICAgICBpZDAgPSB0aGlzLl9pZCxcbiAgICAgIGlkMSA9IG5ld0lkKCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgdmFyIGluaGVyaXQgPSBnZXQobm9kZSwgaWQwKTtcbiAgICAgICAgc2NoZWR1bGUobm9kZSwgbmFtZSwgaWQxLCBpLCBncm91cCwge1xuICAgICAgICAgIHRpbWU6IGluaGVyaXQudGltZSArIGluaGVyaXQuZGVsYXkgKyBpbmhlcml0LmR1cmF0aW9uLFxuICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgIGR1cmF0aW9uOiBpbmhlcml0LmR1cmF0aW9uLFxuICAgICAgICAgIGVhc2U6IGluaGVyaXQuZWFzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oZ3JvdXBzLCB0aGlzLl9wYXJlbnRzLCBuYW1lLCBpZDEpO1xufVxuIiwiaW1wb3J0IHtnZXQsIHNldH0gZnJvbSBcIi4vc2NoZWR1bGVcIjtcblxuZnVuY3Rpb24gdHdlZW5SZW1vdmUoaWQsIG5hbWUpIHtcbiAgdmFyIHR3ZWVuMCwgdHdlZW4xO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVkdWxlID0gc2V0KHRoaXMsIGlkKSxcbiAgICAgICAgdHdlZW4gPSBzY2hlZHVsZS50d2VlbjtcblxuICAgIC8vIElmIHRoaXMgbm9kZSBzaGFyZWQgdHdlZW4gd2l0aCB0aGUgcHJldmlvdXMgbm9kZSxcbiAgICAvLyBqdXN0IGFzc2lnbiB0aGUgdXBkYXRlZCBzaGFyZWQgdHdlZW4gYW5kIHdl4oCZcmUgZG9uZSFcbiAgICAvLyBPdGhlcndpc2UsIGNvcHktb24td3JpdGUuXG4gICAgaWYgKHR3ZWVuICE9PSB0d2VlbjApIHtcbiAgICAgIHR3ZWVuMSA9IHR3ZWVuMCA9IHR3ZWVuO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIG4gPSB0d2VlbjEubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGlmICh0d2VlbjFbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgIHR3ZWVuMSA9IHR3ZWVuMS5zbGljZSgpO1xuICAgICAgICAgIHR3ZWVuMS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzY2hlZHVsZS50d2VlbiA9IHR3ZWVuMTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdHdlZW5GdW5jdGlvbihpZCwgbmFtZSwgdmFsdWUpIHtcbiAgdmFyIHR3ZWVuMCwgdHdlZW4xO1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlZHVsZSA9IHNldCh0aGlzLCBpZCksXG4gICAgICAgIHR3ZWVuID0gc2NoZWR1bGUudHdlZW47XG5cbiAgICAvLyBJZiB0aGlzIG5vZGUgc2hhcmVkIHR3ZWVuIHdpdGggdGhlIHByZXZpb3VzIG5vZGUsXG4gICAgLy8ganVzdCBhc3NpZ24gdGhlIHVwZGF0ZWQgc2hhcmVkIHR3ZWVuIGFuZCB3ZeKAmXJlIGRvbmUhXG4gICAgLy8gT3RoZXJ3aXNlLCBjb3B5LW9uLXdyaXRlLlxuICAgIGlmICh0d2VlbiAhPT0gdHdlZW4wKSB7XG4gICAgICB0d2VlbjEgPSAodHdlZW4wID0gdHdlZW4pLnNsaWNlKCk7XG4gICAgICBmb3IgKHZhciB0ID0ge25hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZX0sIGkgPSAwLCBuID0gdHdlZW4xLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgICBpZiAodHdlZW4xW2ldLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICB0d2VlbjFbaV0gPSB0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaSA9PT0gbikgdHdlZW4xLnB1c2godCk7XG4gICAgfVxuXG4gICAgc2NoZWR1bGUudHdlZW4gPSB0d2VlbjE7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBpZCA9IHRoaXMuX2lkO1xuXG4gIG5hbWUgKz0gXCJcIjtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgdHdlZW4gPSBnZXQodGhpcy5ub2RlKCksIGlkKS50d2VlbjtcbiAgICBmb3IgKHZhciBpID0gMCwgbiA9IHR3ZWVuLmxlbmd0aCwgdDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKCh0ID0gdHdlZW5baV0pLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHQudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuZWFjaCgodmFsdWUgPT0gbnVsbCA/IHR3ZWVuUmVtb3ZlIDogdHdlZW5GdW5jdGlvbikoaWQsIG5hbWUsIHZhbHVlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0d2VlblZhbHVlKHRyYW5zaXRpb24sIG5hbWUsIHZhbHVlKSB7XG4gIHZhciBpZCA9IHRyYW5zaXRpb24uX2lkO1xuXG4gIHRyYW5zaXRpb24uZWFjaChmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NoZWR1bGUgPSBzZXQodGhpcywgaWQpO1xuICAgIChzY2hlZHVsZS52YWx1ZSB8fCAoc2NoZWR1bGUudmFsdWUgPSB7fSkpW25hbWVdID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICByZXR1cm4gZ2V0KG5vZGUsIGlkKS52YWx1ZVtuYW1lXTtcbiAgfTtcbn1cbiIsIi8vIHYwLjAuOFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbGFzdGljU1ZHKHNlbGVjdG9yLCBvcHRzKSB7XG5cdG9wdHMgPSBvcHRzIHx8IHt9O1xuXG5cdC8vIGNvbnRhaW5pbmcgRE9NIGVsZW1lbnQsIHdoaWNoIGRlZmF1bHRzIHRvIGJvZHlcblx0dmFyIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IgfHwgXCJib2R5XCIpO1xuXG5cdGlmICghcGFyZW50IHx8ICFwYXJlbnQubGVuZ3RoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJDb3VsZG4ndCBmaW5kIGEgcGFyZW50IGZvciBlbGFzdGljU1ZHIG1ha2luZyB0aGUgc2VsZWN0b3IgJ1wiICsgc2VsZWN0b3IgKyBcIidcIik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cGFyZW50ID0gcGFyZW50WzBdO1xuXG5cdC8vIHlvdSBjYW4gc3BlY2lmeSBhIHdpZHRoIGlmIHlvdSBsaWtlLCBvciB3ZSdsbCBzbmFwIHRvIHNpemUgb2YgY29udGFpbmVyXG5cdHZhciBiYXNlID0ge1xuXHRcdHdpZHRoOiB0eXBlb2Ygb3B0cy53aWR0aCAhPT0gXCJ1bmRlZmluZWRcIiA/IG9wdHMud2lkdGggOiBwYXJlbnQuY2xpZW50V2lkdGgsXG5cdFx0c2NhbGU6IDFcblx0fTtcblxuXHQvLyB3ZSBuZWVkIHRvIHJlbWVtYmVyIHRoZSBvcmlnaW5hbCB3aWR0aCBmb3Igc2NhbGluZyBwdXJwb3Nlc1xuXHRiYXNlLm9yaWdpbmFsX3dpZHRoID0gYmFzZS53aWR0aDtcblxuXHQvLyB5b3UgY2FuIGVpdGhlciBzcGVjaWZ5IHRoZSBoZWlnaHQgb3IgdGhlIGFzcGVjdCByYXRpby4gSWYgbmVpdGhlciBpcyBzcGVjaWZpZWQsIHJlZmF1bHRzIHRvIHJvdWdobHkgdGhlIGdvbGRlbiByYXRpb1xuXHQvLyBzcGVjaWZ5aW5nIHRoZSBoZWlnaHQga2VlcHMgdGhlIHN2ZyBhdCBhIHN0YW5kYXJkIGhlaWdodCBhbmQgb25seSByZXNpemVzIHRoZSB3aWR0aFxuXHQvLyBzcGVjaWZ5aW5nIHRoZSBhc3BlY3QgcmF0aW8gcmVzaXplcyBib3RoXG4gICAgaWYgKHR5cGVvZiBvcHRzLmhlaWdodCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIFx0YmFzZS5oZWlnaHQgPSBvcHRzLmhlaWdodDtcbiAgICBcdGJhc2UuYXNwZWN0ID0gYmFzZS5oZWlnaHQgLyBiYXNlLndpZHRoO1xuICAgIH0gZWxzZSB7XG5cdCAgICBvcHRzLmFzcGVjdCA9IHR5cGVvZiBvcHRzLmFzcGVjdCAhPT0gXCJ1bmRlZmluZWRcIiA/IG9wdHMuYXNwZWN0IDogMC42MTg7XG5cdFx0YmFzZS5oZWlnaHQgPSBiYXNlLndpZHRoICogb3B0cy5hc3BlY3Q7XG4gICAgfVxuXG5cdC8vIGNyZWF0ZSBhIG5ldyBTVkcgZWxlbWVudFxuICAgIHZhciB4bWxucyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbiAgICB2YXIgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCBcInN2Z1wiKTtcblx0c3ZnLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwid2lkdGhcIiwgYmFzZS53aWR0aCk7XG5cdHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImhlaWdodFwiLCBiYXNlLmhlaWdodCk7XG5cdHBhcmVudC5hcHBlbmRDaGlsZChzdmcpO1xuXHRcblx0Ly8gc2V0dGluZyByZXNpemUgdG8gXCJhdXRvXCIgc2V0cyB0aGUgdmlld3BvcnQgdG8gdGhlIG9yaWdpbmFsIHdpZHRoIGFuZCBoZWlnaHQgc28gdGhhdCB0aGUgU1ZHIGFsd2F5cyBzY2FsZXNcbiAgICBpZiAob3B0cy5yZXNpemUgJiYgb3B0cy5yZXNpemUgPT0gXCJhdXRvXCIpIHtcblx0XHRzdmcuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJ2aWV3Qm94XCIsIFwiMCAwIFwiICsgYmFzZS53aWR0aCArIFwiIFwiICsgYmFzZS5oZWlnaHQpO1xuICAgIH1cblxuXHQvLyBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgd2luZG93IHJlc2l6ZXNcdFx0XG5cdGZ1bmN0aW9uIHJlc2l6ZSgpIHsgXG5cdFx0Y29uc29sZS5sb2coXCJyZXNpemluZyBiYXNlXCIpO1xuXHRcdGJhc2Uud2lkdGggPSBwYXJlbnQuY2xpZW50V2lkdGg7XG5cdFx0c3ZnLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwid2lkdGhcIiwgYmFzZS53aWR0aCk7XG5cblx0XHQvLyBvbmx5IHJlc2l6ZSB0aGUgaGVpZ2h0IGlmIGFzcGVjdCB3YXMgc3BlY2lmaWVkIGluc3RlYWQgb2YgaGVpZ2h0XG5cdFx0aWYgKG9wdHMuYXNwZWN0KSB7XG5cdFx0ICAgIGJhc2UuaGVpZ2h0ID0gYmFzZS53aWR0aCAqIG9wdHMuYXNwZWN0O1xuXHRcdFx0c3ZnLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiaGVpZ2h0XCIsIGJhc2UuaGVpZ2h0KTtcblx0XHR9XG5cblx0ICAgIGJhc2Uuc2NhbGUgPSBiYXNlLndpZHRoIC8gYmFzZS5vcmlnaW5hbF93aWR0aDtcblxuXHRcdC8vIG9wdGlvbmFsIGNhbGxiYWNrXG5cdFx0aWYgKG9wdHMub25SZXNpemUpIHtcblx0XHRcdG9wdHMub25SZXNpemUoYmFzZS53aWR0aCwgYmFzZS5oZWlnaHQsIGJhc2Uuc2NhbGUsIHN2Zyk7XG5cdFx0fVxuXHR9XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0cmVzaXplKCk7XG5cdH0pO1xuXG5cdHJlc2l6ZSgpOyAvLyBjYWxsIHRoaXMgb24gbG9hZCBzaW5jZSBzb21ldGltZXMgdGhlIGluaXRpYWwgY29uZGl0aW9ucyBhcmUgd2lkZXIgdGhhbiBjb250YWluZXJcblxuXHQvLyBtZXRob2RzXG5cdGJhc2Uuc2V0UmVzaXplID0gZnVuY3Rpb24oZikge1xuXHRcdG9wdHMub25SZXNpemUgPSBmO1xuXHR9XG5cblx0YmFzZS5jaGFuZ2VBc3BlY3QgPSBmdW5jdGlvbihhc3BlY3QpIHtcblx0XHRvcHRzLmFzcGVjdCA9IGFzcGVjdDtcblx0XHRiYXNlLmhlaWdodCA9IGJhc2Uud2lkdGggKiBvcHRzLmFzcGVjdDtcblx0XHRzdmcuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJoZWlnaHRcIiwgYmFzZS5oZWlnaHQpO1xuXHR9XG5cblx0YmFzZS5jaGFuZ2VIZWlnaHQgPSBmdW5jdGlvbihoZWlnaHQpIHtcbiAgICBcdGJhc2UuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIFx0aWYgKG9wdHMuYXNwZWN0KSB7XG5cdCAgICBcdG9wdHMuYXNwZWN0ID0gYmFzZS5oZWlnaHQgLyBiYXNlLndpZHRoO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0b3B0cy5oZWlnaHQgPSBoZWlnaHQ7XG5cdCAgICB9XG5cdFx0c3ZnLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiaGVpZ2h0XCIsIGJhc2UuaGVpZ2h0KTtcblx0fVxuXG5cdGJhc2UudHJpZ2dlclJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJlc2l6ZSgpO1xuXHR9XG5cblx0YmFzZS5zdmcgPSBzdmc7XG5cdHJldHVybiBiYXNlO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jc3MtbG9hZGVyLzMuMC4wX3dlYnBhY2tANC4zNS4wL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTctMSEuLi8uLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9zYXNzLWxvYWRlci83LjEuMF93ZWJwYWNrQDQuMzUuMC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9wb3N0Y3NzLWxvYWRlci8zLjAuMC9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9wb3N0Y3NzIS4vc3R5bGVzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3N0eWxlLWxvYWRlci8wLjIzLjEvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY3NzLWxvYWRlci8zLjAuMF93ZWJwYWNrQDQuMzUuMC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LTEhLi4vLi4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvc2Fzcy1sb2FkZXIvNy4xLjBfd2VicGFja0A0LjM1LjAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcG9zdGNzcy1sb2FkZXIvMy4wLjAvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuL3N0eWxlcy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY3NzLWxvYWRlci8zLjAuMF93ZWJwYWNrQDQuMzUuMC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LTEhLi4vLi4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvc2Fzcy1sb2FkZXIvNy4xLjBfd2VicGFja0A0LjM1LjAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcG9zdGNzcy1sb2FkZXIvMy4wLjAvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==