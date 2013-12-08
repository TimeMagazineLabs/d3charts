;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3 = function() {
  var d3 = {
    version: "3.3.3"
  };
  if (!Date.now) Date.now = function() {
    return +new Date();
  };
  var d3_arraySlice = [].slice, d3_array = function(list) {
    return d3_arraySlice.call(list);
  };
  var d3_document = document, d3_documentElement = d3_document.documentElement, d3_window = window;
  try {
    d3_array(d3_documentElement.childNodes)[0].nodeType;
  } catch (e) {
    d3_array = function(list) {
      var i = list.length, array = new Array(i);
      while (i--) array[i] = list[i];
      return array;
    };
  }
  try {
    d3_document.createElement("div").style.setProperty("opacity", 0, "");
  } catch (error) {
    var d3_element_prototype = d3_window.Element.prototype, d3_element_setAttribute = d3_element_prototype.setAttribute, d3_element_setAttributeNS = d3_element_prototype.setAttributeNS, d3_style_prototype = d3_window.CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
    d3_element_prototype.setAttribute = function(name, value) {
      d3_element_setAttribute.call(this, name, value + "");
    };
    d3_element_prototype.setAttributeNS = function(space, local, value) {
      d3_element_setAttributeNS.call(this, space, local, value + "");
    };
    d3_style_prototype.setProperty = function(name, value, priority) {
      d3_style_setProperty.call(this, name, value + "", priority);
    };
  }
  d3.ascending = function(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  };
  d3.descending = function(a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
  };
  d3.min = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n && !((a = array[i]) != null && a <= a)) a = undefined;
      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
    } else {
      while (++i < n && !((a = f.call(array, array[i], i)) != null && a <= a)) a = undefined;
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
    }
    return a;
  };
  d3.max = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n && !((a = array[i]) != null && a <= a)) a = undefined;
      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
    } else {
      while (++i < n && !((a = f.call(array, array[i], i)) != null && a <= a)) a = undefined;
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
    }
    return a;
  };
  d3.extent = function(array, f) {
    var i = -1, n = array.length, a, b, c;
    if (arguments.length === 1) {
      while (++i < n && !((a = c = array[i]) != null && a <= a)) a = c = undefined;
      while (++i < n) if ((b = array[i]) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    } else {
      while (++i < n && !((a = c = f.call(array, array[i], i)) != null && a <= a)) a = undefined;
      while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    }
    return [ a, c ];
  };
  d3.sum = function(array, f) {
    var s = 0, n = array.length, a, i = -1;
    if (arguments.length === 1) {
      while (++i < n) if (!isNaN(a = +array[i])) s += a;
    } else {
      while (++i < n) if (!isNaN(a = +f.call(array, array[i], i))) s += a;
    }
    return s;
  };
  function d3_number(x) {
    return x != null && !isNaN(x);
  }
  d3.mean = function(array, f) {
    var n = array.length, a, m = 0, i = -1, j = 0;
    if (arguments.length === 1) {
      while (++i < n) if (d3_number(a = array[i])) m += (a - m) / ++j;
    } else {
      while (++i < n) if (d3_number(a = f.call(array, array[i], i))) m += (a - m) / ++j;
    }
    return j ? m : undefined;
  };
  d3.quantile = function(values, p) {
    var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
    return e ? v + e * (values[h] - v) : v;
  };
  d3.median = function(array, f) {
    if (arguments.length > 1) array = array.map(f);
    array = array.filter(d3_number);
    return array.length ? d3.quantile(array.sort(d3.ascending), .5) : undefined;
  };
  d3.bisector = function(f) {
    return {
      left: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (f.call(a, a[mid], mid) < x) lo = mid + 1; else hi = mid;
        }
        return lo;
      },
      right: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (x < f.call(a, a[mid], mid)) hi = mid; else lo = mid + 1;
        }
        return lo;
      }
    };
  };
  var d3_bisector = d3.bisector(function(d) {
    return d;
  });
  d3.bisectLeft = d3_bisector.left;
  d3.bisect = d3.bisectRight = d3_bisector.right;
  d3.shuffle = function(array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.random() * m-- | 0;
      t = array[m], array[m] = array[i], array[i] = t;
    }
    return array;
  };
  d3.permute = function(array, indexes) {
    var i = indexes.length, permutes = new Array(i);
    while (i--) permutes[i] = array[indexes[i]];
    return permutes;
  };
  d3.pairs = function(array) {
    var i = 0, n = array.length - 1, p0, p1 = array[0], pairs = new Array(n < 0 ? 0 : n);
    while (i < n) pairs[i] = [ p0 = p1, p1 = array[++i] ];
    return pairs;
  };
  d3.zip = function() {
    if (!(n = arguments.length)) return [];
    for (var i = -1, m = d3.min(arguments, d3_zipLength), zips = new Array(m); ++i < m; ) {
      for (var j = -1, n, zip = zips[i] = new Array(n); ++j < n; ) {
        zip[j] = arguments[j][i];
      }
    }
    return zips;
  };
  function d3_zipLength(d) {
    return d.length;
  }
  d3.transpose = function(matrix) {
    return d3.zip.apply(d3, matrix);
  };
  d3.keys = function(map) {
    var keys = [];
    for (var key in map) keys.push(key);
    return keys;
  };
  d3.values = function(map) {
    var values = [];
    for (var key in map) values.push(map[key]);
    return values;
  };
  d3.entries = function(map) {
    var entries = [];
    for (var key in map) entries.push({
      key: key,
      value: map[key]
    });
    return entries;
  };
  d3.merge = function(arrays) {
    return Array.prototype.concat.apply([], arrays);
  };
  d3.range = function(start, stop, step) {
    if (arguments.length < 3) {
      step = 1;
      if (arguments.length < 2) {
        stop = start;
        start = 0;
      }
    }
    if ((stop - start) / step === Infinity) throw new Error("infinite range");
    var range = [], k = d3_range_integerScale(Math.abs(step)), i = -1, j;
    start *= k, stop *= k, step *= k;
    if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k); else while ((j = start + step * ++i) < stop) range.push(j / k);
    return range;
  };
  function d3_range_integerScale(x) {
    var k = 1;
    while (x * k % 1) k *= 10;
    return k;
  }
  function d3_class(ctor, properties) {
    try {
      for (var key in properties) {
        Object.defineProperty(ctor.prototype, key, {
          value: properties[key],
          enumerable: false
        });
      }
    } catch (e) {
      ctor.prototype = properties;
    }
  }
  d3.map = function(object) {
    var map = new d3_Map();
    if (object instanceof d3_Map) object.forEach(function(key, value) {
      map.set(key, value);
    }); else for (var key in object) map.set(key, object[key]);
    return map;
  };
  function d3_Map() {}
  d3_class(d3_Map, {
    has: function(key) {
      return d3_map_prefix + key in this;
    },
    get: function(key) {
      return this[d3_map_prefix + key];
    },
    set: function(key, value) {
      return this[d3_map_prefix + key] = value;
    },
    remove: function(key) {
      key = d3_map_prefix + key;
      return key in this && delete this[key];
    },
    keys: function() {
      var keys = [];
      this.forEach(function(key) {
        keys.push(key);
      });
      return keys;
    },
    values: function() {
      var values = [];
      this.forEach(function(key, value) {
        values.push(value);
      });
      return values;
    },
    entries: function() {
      var entries = [];
      this.forEach(function(key, value) {
        entries.push({
          key: key,
          value: value
        });
      });
      return entries;
    },
    forEach: function(f) {
      for (var key in this) {
        if (key.charCodeAt(0) === d3_map_prefixCode) {
          f.call(this, key.substring(1), this[key]);
        }
      }
    }
  });
  var d3_map_prefix = "\0", d3_map_prefixCode = d3_map_prefix.charCodeAt(0);
  d3.nest = function() {
    var nest = {}, keys = [], sortKeys = [], sortValues, rollup;
    function map(mapType, array, depth) {
      if (depth >= keys.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
      var i = -1, n = array.length, key = keys[depth++], keyValue, object, setter, valuesByKey = new d3_Map(), values;
      while (++i < n) {
        if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
          values.push(object);
        } else {
          valuesByKey.set(keyValue, [ object ]);
        }
      }
      if (mapType) {
        object = mapType();
        setter = function(keyValue, values) {
          object.set(keyValue, map(mapType, values, depth));
        };
      } else {
        object = {};
        setter = function(keyValue, values) {
          object[keyValue] = map(mapType, values, depth);
        };
      }
      valuesByKey.forEach(setter);
      return object;
    }
    function entries(map, depth) {
      if (depth >= keys.length) return map;
      var array = [], sortKey = sortKeys[depth++];
      map.forEach(function(key, keyMap) {
        array.push({
          key: key,
          values: entries(keyMap, depth)
        });
      });
      return sortKey ? array.sort(function(a, b) {
        return sortKey(a.key, b.key);
      }) : array;
    }
    nest.map = function(array, mapType) {
      return map(mapType, array, 0);
    };
    nest.entries = function(array) {
      return entries(map(d3.map, array, 0), 0);
    };
    nest.key = function(d) {
      keys.push(d);
      return nest;
    };
    nest.sortKeys = function(order) {
      sortKeys[keys.length - 1] = order;
      return nest;
    };
    nest.sortValues = function(order) {
      sortValues = order;
      return nest;
    };
    nest.rollup = function(f) {
      rollup = f;
      return nest;
    };
    return nest;
  };
  d3.set = function(array) {
    var set = new d3_Set();
    if (array) for (var i = 0, n = array.length; i < n; ++i) set.add(array[i]);
    return set;
  };
  function d3_Set() {}
  d3_class(d3_Set, {
    has: function(value) {
      return d3_map_prefix + value in this;
    },
    add: function(value) {
      this[d3_map_prefix + value] = true;
      return value;
    },
    remove: function(value) {
      value = d3_map_prefix + value;
      return value in this && delete this[value];
    },
    values: function() {
      var values = [];
      this.forEach(function(value) {
        values.push(value);
      });
      return values;
    },
    forEach: function(f) {
      for (var value in this) {
        if (value.charCodeAt(0) === d3_map_prefixCode) {
          f.call(this, value.substring(1));
        }
      }
    }
  });
  d3.behavior = {};
  d3.rebind = function(target, source) {
    var i = 1, n = arguments.length, method;
    while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
    return target;
  };
  function d3_rebind(target, source, method) {
    return function() {
      var value = method.apply(source, arguments);
      return value === source ? target : value;
    };
  }
  function d3_vendorSymbol(object, name) {
    if (name in object) return name;
    name = name.charAt(0).toUpperCase() + name.substring(1);
    for (var i = 0, n = d3_vendorPrefixes.length; i < n; ++i) {
      var prefixName = d3_vendorPrefixes[i] + name;
      if (prefixName in object) return prefixName;
    }
  }
  var d3_vendorPrefixes = [ "webkit", "ms", "moz", "Moz", "o", "O" ];
  function d3_noop() {}
  d3.dispatch = function() {
    var dispatch = new d3_dispatch(), i = -1, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    return dispatch;
  };
  function d3_dispatch() {}
  d3_dispatch.prototype.on = function(type, listener) {
    var i = type.indexOf("."), name = "";
    if (i >= 0) {
      name = type.substring(i + 1);
      type = type.substring(0, i);
    }
    if (type) return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
    if (arguments.length === 2) {
      if (listener == null) for (type in this) {
        if (this.hasOwnProperty(type)) this[type].on(name, null);
      }
      return this;
    }
  };
  function d3_dispatch_event(dispatch) {
    var listeners = [], listenerByName = new d3_Map();
    function event() {
      var z = listeners, i = -1, n = z.length, l;
      while (++i < n) if (l = z[i].on) l.apply(this, arguments);
      return dispatch;
    }
    event.on = function(name, listener) {
      var l = listenerByName.get(name), i;
      if (arguments.length < 2) return l && l.on;
      if (l) {
        l.on = null;
        listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
        listenerByName.remove(name);
      }
      if (listener) listeners.push(listenerByName.set(name, {
        on: listener
      }));
      return dispatch;
    };
    return event;
  }
  d3.event = null;
  function d3_eventPreventDefault() {
    d3.event.preventDefault();
  }
  function d3_eventSource() {
    var e = d3.event, s;
    while (s = e.sourceEvent) e = s;
    return e;
  }
  function d3_eventDispatch(target) {
    var dispatch = new d3_dispatch(), i = 0, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    dispatch.of = function(thiz, argumentz) {
      return function(e1) {
        try {
          var e0 = e1.sourceEvent = d3.event;
          e1.target = target;
          d3.event = e1;
          dispatch[e1.type].apply(thiz, argumentz);
        } finally {
          d3.event = e0;
        }
      };
    };
    return dispatch;
  }
  d3.requote = function(s) {
    return s.replace(d3_requote_re, "\\$&");
  };
  var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
  var d3_subclass = {}.__proto__ ? function(object, prototype) {
    object.__proto__ = prototype;
  } : function(object, prototype) {
    for (var property in prototype) object[property] = prototype[property];
  };
  function d3_selection(groups) {
    d3_subclass(groups, d3_selectionPrototype);
    return groups;
  }
  var d3_select = function(s, n) {
    return n.querySelector(s);
  }, d3_selectAll = function(s, n) {
    return n.querySelectorAll(s);
  }, d3_selectMatcher = d3_documentElement[d3_vendorSymbol(d3_documentElement, "matchesSelector")], d3_selectMatches = function(n, s) {
    return d3_selectMatcher.call(n, s);
  };
  if (typeof Sizzle === "function") {
    d3_select = function(s, n) {
      return Sizzle(s, n)[0] || null;
    };
    d3_selectAll = function(s, n) {
      return Sizzle.uniqueSort(Sizzle(s, n));
    };
    d3_selectMatches = Sizzle.matchesSelector;
  }
  d3.selection = function() {
    return d3_selectionRoot;
  };
  var d3_selectionPrototype = d3.selection.prototype = [];
  d3_selectionPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, group, node;
    selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroup.push(subnode = selector.call(node, node.__data__, i, j));
          if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selector(selector) {
    return typeof selector === "function" ? selector : function() {
      return d3_select(selector, this);
    };
  }
  d3_selectionPrototype.selectAll = function(selector) {
    var subgroups = [], subgroup, node;
    selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
          subgroup.parentNode = node;
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selectorAll(selector) {
    return typeof selector === "function" ? selector : function() {
      return d3_selectAll(selector, this);
    };
  }
  var d3_nsPrefix = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  d3.ns = {
    prefix: d3_nsPrefix,
    qualify: function(name) {
      var i = name.indexOf(":"), prefix = name;
      if (i >= 0) {
        prefix = name.substring(0, i);
        name = name.substring(i + 1);
      }
      return d3_nsPrefix.hasOwnProperty(prefix) ? {
        space: d3_nsPrefix[prefix],
        local: name
      } : name;
    }
  };
  d3_selectionPrototype.attr = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node();
        name = d3.ns.qualify(name);
        return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
      }
      for (value in name) this.each(d3_selection_attr(value, name[value]));
      return this;
    }
    return this.each(d3_selection_attr(name, value));
  };
  function d3_selection_attr(name, value) {
    name = d3.ns.qualify(name);
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    function attrConstant() {
      this.setAttribute(name, value);
    }
    function attrConstantNS() {
      this.setAttributeNS(name.space, name.local, value);
    }
    function attrFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttribute(name); else this.setAttribute(name, x);
    }
    function attrFunctionNS() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttributeNS(name.space, name.local); else this.setAttributeNS(name.space, name.local, x);
    }
    return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
  }
  function d3_collapse(s) {
    return s.trim().replace(/\s+/g, " ");
  }
  d3_selectionPrototype.classed = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node(), n = (name = name.trim().split(/^|\s+/g)).length, i = -1;
        if (value = node.classList) {
          while (++i < n) if (!value.contains(name[i])) return false;
        } else {
          value = node.getAttribute("class");
          while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;
        }
        return true;
      }
      for (value in name) this.each(d3_selection_classed(value, name[value]));
      return this;
    }
    return this.each(d3_selection_classed(name, value));
  };
  function d3_selection_classedRe(name) {
    return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
  }
  function d3_selection_classed(name, value) {
    name = name.trim().split(/\s+/).map(d3_selection_classedName);
    var n = name.length;
    function classedConstant() {
      var i = -1;
      while (++i < n) name[i](this, value);
    }
    function classedFunction() {
      var i = -1, x = value.apply(this, arguments);
      while (++i < n) name[i](this, x);
    }
    return typeof value === "function" ? classedFunction : classedConstant;
  }
  function d3_selection_classedName(name) {
    var re = d3_selection_classedRe(name);
    return function(node, value) {
      if (c = node.classList) return value ? c.add(name) : c.remove(name);
      var c = node.getAttribute("class") || "";
      if (value) {
        re.lastIndex = 0;
        if (!re.test(c)) node.setAttribute("class", d3_collapse(c + " " + name));
      } else {
        node.setAttribute("class", d3_collapse(c.replace(re, " ")));
      }
    };
  }
  d3_selectionPrototype.style = function(name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";
        for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
        return this;
      }
      if (n < 2) return d3_window.getComputedStyle(this.node(), null).getPropertyValue(name);
      priority = "";
    }
    return this.each(d3_selection_style(name, value, priority));
  };
  function d3_selection_style(name, value, priority) {
    function styleNull() {
      this.style.removeProperty(name);
    }
    function styleConstant() {
      this.style.setProperty(name, value, priority);
    }
    function styleFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.style.removeProperty(name); else this.style.setProperty(name, x, priority);
    }
    return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
  }
  d3_selectionPrototype.property = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") return this.node()[name];
      for (value in name) this.each(d3_selection_property(value, name[value]));
      return this;
    }
    return this.each(d3_selection_property(name, value));
  };
  function d3_selection_property(name, value) {
    function propertyNull() {
      delete this[name];
    }
    function propertyConstant() {
      this[name] = value;
    }
    function propertyFunction() {
      var x = value.apply(this, arguments);
      if (x == null) delete this[name]; else this[name] = x;
    }
    return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
  }
  d3_selectionPrototype.text = function(value) {
    return arguments.length ? this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    } : value == null ? function() {
      this.textContent = "";
    } : function() {
      this.textContent = value;
    }) : this.node().textContent;
  };
  d3_selectionPrototype.html = function(value) {
    return arguments.length ? this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    } : value == null ? function() {
      this.innerHTML = "";
    } : function() {
      this.innerHTML = value;
    }) : this.node().innerHTML;
  };
  d3_selectionPrototype.append = function(name) {
    name = d3_selection_creator(name);
    return this.select(function() {
      return this.appendChild(name.apply(this, arguments));
    });
  };
  function d3_selection_creator(name) {
    return typeof name === "function" ? name : (name = d3.ns.qualify(name)).local ? function() {
      return d3_document.createElementNS(name.space, name.local);
    } : function() {
      return d3_document.createElementNS(this.namespaceURI, name);
    };
  }
  d3_selectionPrototype.insert = function(name, before) {
    name = d3_selection_creator(name);
    before = d3_selection_selector(before);
    return this.select(function() {
      return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments));
    });
  };
  d3_selectionPrototype.remove = function() {
    return this.each(function() {
      var parent = this.parentNode;
      if (parent) parent.removeChild(this);
    });
  };
  d3_selectionPrototype.data = function(value, key) {
    var i = -1, n = this.length, group, node;
    if (!arguments.length) {
      value = new Array(n = (group = this[0]).length);
      while (++i < n) {
        if (node = group[i]) {
          value[i] = node.__data__;
        }
      }
      return value;
    }
    function bind(group, groupData) {
      var i, n = group.length, m = groupData.length, n0 = Math.min(n, m), updateNodes = new Array(m), enterNodes = new Array(m), exitNodes = new Array(n), node, nodeData;
      if (key) {
        var nodeByKeyValue = new d3_Map(), dataByKeyValue = new d3_Map(), keyValues = [], keyValue;
        for (i = -1; ++i < n; ) {
          keyValue = key.call(node = group[i], node.__data__, i);
          if (nodeByKeyValue.has(keyValue)) {
            exitNodes[i] = node;
          } else {
            nodeByKeyValue.set(keyValue, node);
          }
          keyValues.push(keyValue);
        }
        for (i = -1; ++i < m; ) {
          keyValue = key.call(groupData, nodeData = groupData[i], i);
          if (node = nodeByKeyValue.get(keyValue)) {
            updateNodes[i] = node;
            node.__data__ = nodeData;
          } else if (!dataByKeyValue.has(keyValue)) {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          }
          dataByKeyValue.set(keyValue, nodeData);
          nodeByKeyValue.remove(keyValue);
        }
        for (i = -1; ++i < n; ) {
          if (nodeByKeyValue.has(keyValues[i])) {
            exitNodes[i] = group[i];
          }
        }
      } else {
        for (i = -1; ++i < n0; ) {
          node = group[i];
          nodeData = groupData[i];
          if (node) {
            node.__data__ = nodeData;
            updateNodes[i] = node;
          } else {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          }
        }
        for (;i < m; ++i) {
          enterNodes[i] = d3_selection_dataNode(groupData[i]);
        }
        for (;i < n; ++i) {
          exitNodes[i] = group[i];
        }
      }
      enterNodes.update = updateNodes;
      enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
      enter.push(enterNodes);
      update.push(updateNodes);
      exit.push(exitNodes);
    }
    var enter = d3_selection_enter([]), update = d3_selection([]), exit = d3_selection([]);
    if (typeof value === "function") {
      while (++i < n) {
        bind(group = this[i], value.call(group, group.parentNode.__data__, i));
      }
    } else {
      while (++i < n) {
        bind(group = this[i], value);
      }
    }
    update.enter = function() {
      return enter;
    };
    update.exit = function() {
      return exit;
    };
    return update;
  };
  function d3_selection_dataNode(data) {
    return {
      __data__: data
    };
  }
  d3_selectionPrototype.datum = function(value) {
    return arguments.length ? this.property("__data__", value) : this.property("__data__");
  };
  d3_selectionPrototype.filter = function(filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i)) {
          subgroup.push(node);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_filter(selector) {
    return function() {
      return d3_selectMatches(this, selector);
    };
  }
  d3_selectionPrototype.order = function() {
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
        if (node = group[i]) {
          if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  };
  d3_selectionPrototype.sort = function(comparator) {
    comparator = d3_selection_sortComparator.apply(this, arguments);
    for (var j = -1, m = this.length; ++j < m; ) this[j].sort(comparator);
    return this.order();
  };
  function d3_selection_sortComparator(comparator) {
    if (!arguments.length) comparator = d3.ascending;
    return function(a, b) {
      return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
    };
  }
  d3_selectionPrototype.each = function(callback) {
    return d3_selection_each(this, function(node, i, j) {
      callback.call(node, node.__data__, i, j);
    });
  };
  function d3_selection_each(groups, callback) {
    for (var j = 0, m = groups.length; j < m; j++) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
        if (node = group[i]) callback(node, i, j);
      }
    }
    return groups;
  }
  d3_selectionPrototype.call = function(callback) {
    var args = d3_array(arguments);
    callback.apply(args[0] = this, args);
    return this;
  };
  d3_selectionPrototype.empty = function() {
    return !this.node();
  };
  d3_selectionPrototype.node = function() {
    for (var j = 0, m = this.length; j < m; j++) {
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        var node = group[i];
        if (node) return node;
      }
    }
    return null;
  };
  d3_selectionPrototype.size = function() {
    var n = 0;
    this.each(function() {
      ++n;
    });
    return n;
  };
  function d3_selection_enter(selection) {
    d3_subclass(selection, d3_selection_enterPrototype);
    return selection;
  }
  var d3_selection_enterPrototype = [];
  d3.selection.enter = d3_selection_enter;
  d3.selection.enter.prototype = d3_selection_enterPrototype;
  d3_selection_enterPrototype.append = d3_selectionPrototype.append;
  d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
  d3_selection_enterPrototype.node = d3_selectionPrototype.node;
  d3_selection_enterPrototype.call = d3_selectionPrototype.call;
  d3_selection_enterPrototype.size = d3_selectionPrototype.size;
  d3_selection_enterPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, upgroup, group, node;
    for (var j = -1, m = this.length; ++j < m; ) {
      upgroup = (group = this[j]).update;
      subgroups.push(subgroup = []);
      subgroup.parentNode = group.parentNode;
      for (var i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
          subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  d3_selection_enterPrototype.insert = function(name, before) {
    if (arguments.length < 2) before = d3_selection_enterInsertBefore(this);
    return d3_selectionPrototype.insert.call(this, name, before);
  };
  function d3_selection_enterInsertBefore(enter) {
    var i0, j0;
    return function(d, i, j) {
      var group = enter[j].update, n = group.length, node;
      if (j != j0) j0 = j, i0 = 0;
      if (i >= i0) i0 = i + 1;
      while (!(node = group[i0]) && ++i0 < n) ;
      return node;
    };
  }
  d3_selectionPrototype.transition = function() {
    var id = d3_transitionInheritId || ++d3_transitionId, subgroups = [], subgroup, node, transition = d3_transitionInherit || {
      time: Date.now(),
      ease: d3_ease_cubicInOut,
      delay: 0,
      duration: 250
    };
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) d3_transitionNode(node, i, id, transition);
        subgroup.push(node);
      }
    }
    return d3_transition(subgroups, id);
  };
  d3_selectionPrototype.interrupt = function() {
    return this.each(d3_selection_interrupt);
  };
  function d3_selection_interrupt() {
    var lock = this.__transition__;
    if (lock) ++lock.active;
  }
  d3.select = function(node) {
    var group = [ typeof node === "string" ? d3_select(node, d3_document) : node ];
    group.parentNode = d3_documentElement;
    return d3_selection([ group ]);
  };
  d3.selectAll = function(nodes) {
    var group = d3_array(typeof nodes === "string" ? d3_selectAll(nodes, d3_document) : nodes);
    group.parentNode = d3_documentElement;
    return d3_selection([ group ]);
  };
  var d3_selectionRoot = d3.select(d3_documentElement);
  d3_selectionPrototype.on = function(type, listener, capture) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof type !== "string") {
        if (n < 2) listener = false;
        for (capture in type) this.each(d3_selection_on(capture, type[capture], listener));
        return this;
      }
      if (n < 2) return (n = this.node()["__on" + type]) && n._;
      capture = false;
    }
    return this.each(d3_selection_on(type, listener, capture));
  };
  function d3_selection_on(type, listener, capture) {
    var name = "__on" + type, i = type.indexOf("."), wrap = d3_selection_onListener;
    if (i > 0) type = type.substring(0, i);
    var filter = d3_selection_onFilters.get(type);
    if (filter) type = filter, wrap = d3_selection_onFilter;
    function onRemove() {
      var l = this[name];
      if (l) {
        this.removeEventListener(type, l, l.$);
        delete this[name];
      }
    }
    function onAdd() {
      var l = wrap(listener, d3_array(arguments));
      onRemove.call(this);
      this.addEventListener(type, this[name] = l, l.$ = capture);
      l._ = listener;
    }
    function removeAll() {
      var re = new RegExp("^__on([^.]+)" + d3.requote(type) + "$"), match;
      for (var name in this) {
        if (match = name.match(re)) {
          var l = this[name];
          this.removeEventListener(match[1], l, l.$);
          delete this[name];
        }
      }
    }
    return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
  }
  var d3_selection_onFilters = d3.map({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  });
  d3_selection_onFilters.forEach(function(k) {
    if ("on" + k in d3_document) d3_selection_onFilters.remove(k);
  });
  function d3_selection_onListener(listener, argumentz) {
    return function(e) {
      var o = d3.event;
      d3.event = e;
      argumentz[0] = this.__data__;
      try {
        listener.apply(this, argumentz);
      } finally {
        d3.event = o;
      }
    };
  }
  function d3_selection_onFilter(listener, argumentz) {
    var l = d3_selection_onListener(listener, argumentz);
    return function(e) {
      var target = this, related = e.relatedTarget;
      if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
        l.call(target, e);
      }
    };
  }
  var d3_event_dragSelect = d3_vendorSymbol(d3_documentElement.style, "userSelect"), d3_event_dragId = 0;
  function d3_event_dragSuppress() {
    var name = ".dragsuppress-" + ++d3_event_dragId, touchmove = "touchmove" + name, selectstart = "selectstart" + name, dragstart = "dragstart" + name, click = "click" + name, w = d3.select(d3_window).on(touchmove, d3_eventPreventDefault).on(selectstart, d3_eventPreventDefault).on(dragstart, d3_eventPreventDefault), style = d3_documentElement.style, select = style[d3_event_dragSelect];
    style[d3_event_dragSelect] = "none";
    return function(suppressClick) {
      w.on(name, null);
      style[d3_event_dragSelect] = select;
      if (suppressClick) {
        function off() {
          w.on(click, null);
        }
        w.on(click, function() {
          d3_eventPreventDefault();
          off();
        }, true);
        setTimeout(off, 0);
      }
    };
  }
  d3.mouse = function(container) {
    return d3_mousePoint(container, d3_eventSource());
  };
  var d3_mouse_bug44083 = /WebKit/.test(d3_window.navigator.userAgent) ? -1 : 0;
  function d3_mousePoint(container, e) {
    if (e.changedTouches) e = e.changedTouches[0];
    var svg = container.ownerSVGElement || container;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      if (d3_mouse_bug44083 < 0 && (d3_window.scrollX || d3_window.scrollY)) {
        svg = d3.select("body").append("svg").style({
          position: "absolute",
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          border: "none"
        }, "important");
        var ctm = svg[0][0].getScreenCTM();
        d3_mouse_bug44083 = !(ctm.f || ctm.e);
        svg.remove();
      }
      if (d3_mouse_bug44083) point.x = e.pageX, point.y = e.pageY; else point.x = e.clientX, 
      point.y = e.clientY;
      point = point.matrixTransform(container.getScreenCTM().inverse());
      return [ point.x, point.y ];
    }
    var rect = container.getBoundingClientRect();
    return [ e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop ];
  }
  d3.touches = function(container, touches) {
    if (arguments.length < 2) touches = d3_eventSource().touches;
    return touches ? d3_array(touches).map(function(touch) {
      var point = d3_mousePoint(container, touch);
      point.identifier = touch.identifier;
      return point;
    }) : [];
  };
  d3.behavior.drag = function() {
    var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"), origin = null, mousedown = dragstart(d3_noop, d3.mouse, "mousemove", "mouseup"), touchstart = dragstart(touchid, touchposition, "touchmove", "touchend");
    function drag() {
      this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart);
    }
    function touchid() {
      return d3.event.changedTouches[0].identifier;
    }
    function touchposition(parent, id) {
      return d3.touches(parent).filter(function(p) {
        return p.identifier === id;
      })[0];
    }
    function dragstart(id, position, move, end) {
      return function() {
        var target = this, parent = target.parentNode, event_ = event.of(target, arguments), eventTarget = d3.event.target, eventId = id(), drag = eventId == null ? "drag" : "drag-" + eventId, origin_ = position(parent, eventId), dragged = 0, offset, w = d3.select(d3_window).on(move + "." + drag, moved).on(end + "." + drag, ended), dragRestore = d3_event_dragSuppress();
        if (origin) {
          offset = origin.apply(target, arguments);
          offset = [ offset.x - origin_[0], offset.y - origin_[1] ];
        } else {
          offset = [ 0, 0 ];
        }
        event_({
          type: "dragstart"
        });
        function moved() {
          if (!parent) return ended();
          var p = position(parent, eventId), dx = p[0] - origin_[0], dy = p[1] - origin_[1];
          dragged |= dx | dy;
          origin_ = p;
          event_({
            type: "drag",
            x: p[0] + offset[0],
            y: p[1] + offset[1],
            dx: dx,
            dy: dy
          });
        }
        function ended() {
          w.on(move + "." + drag, null).on(end + "." + drag, null);
          dragRestore(dragged && d3.event.target === eventTarget);
          event_({
            type: "dragend"
          });
        }
      };
    }
    drag.origin = function(x) {
      if (!arguments.length) return origin;
      origin = x;
      return drag;
    };
    return d3.rebind(drag, event, "on");
  };
  var π = Math.PI, ε = 1e-6, ε2 = ε * ε, d3_radians = π / 180, d3_degrees = 180 / π;
  function d3_sgn(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
  }
  function d3_acos(x) {
    return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
  }
  function d3_asin(x) {
    return x > 1 ? π / 2 : x < -1 ? -π / 2 : Math.asin(x);
  }
  function d3_sinh(x) {
    return (Math.exp(x) - Math.exp(-x)) / 2;
  }
  function d3_cosh(x) {
    return (Math.exp(x) + Math.exp(-x)) / 2;
  }
  function d3_tanh(x) {
    return d3_sinh(x) / d3_cosh(x);
  }
  function d3_haversin(x) {
    return (x = Math.sin(x / 2)) * x;
  }
  var ρ = Math.SQRT2, ρ2 = 2, ρ4 = 4;
  d3.interpolateZoom = function(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2];
    var dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + ρ4 * d2) / (2 * w0 * ρ2 * d1), b1 = (w1 * w1 - w0 * w0 - ρ4 * d2) / (2 * w1 * ρ2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1), dr = r1 - r0, S = (dr || Math.log(w1 / w0)) / ρ;
    function interpolate(t) {
      var s = t * S;
      if (dr) {
        var coshr0 = d3_cosh(r0), u = w0 / (ρ2 * d1) * (coshr0 * d3_tanh(ρ * s + r0) - d3_sinh(r0));
        return [ ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / d3_cosh(ρ * s + r0) ];
      }
      return [ ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(ρ * s) ];
    }
    interpolate.duration = S * 1e3;
    return interpolate;
  };
  d3.behavior.zoom = function() {
    var view = {
      x: 0,
      y: 0,
      k: 1
    }, translate0, center, size = [ 960, 500 ], scaleExtent = d3_behavior_zoomInfinity, mousedown = "mousedown.zoom", mousemove = "mousemove.zoom", mouseup = "mouseup.zoom", mousewheelTimer, touchstart = "touchstart.zoom", touchtime, event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend"), x0, x1, y0, y1;
    function zoom(g) {
      g.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + ".zoom", mousewheeled).on(mousemove, mousewheelreset).on("dblclick.zoom", dblclicked).on(touchstart, touchstarted);
    }
    zoom.event = function(g) {
      g.each(function() {
        var event_ = event.of(this, arguments), view1 = view;
        if (d3_transitionInheritId) {
          d3.select(this).transition().each("start.zoom", function() {
            view = this.__chart__ || {
              x: 0,
              y: 0,
              k: 1
            };
            zoomstarted(event_);
          }).tween("zoom:zoom", function() {
            var dx = size[0], dy = size[1], cx = dx / 2, cy = dy / 2, i = d3.interpolateZoom([ (cx - view.x) / view.k, (cy - view.y) / view.k, dx / view.k ], [ (cx - view1.x) / view1.k, (cy - view1.y) / view1.k, dx / view1.k ]);
            return function(t) {
              var l = i(t), k = dx / l[2];
              this.__chart__ = view = {
                x: cx - l[0] * k,
                y: cy - l[1] * k,
                k: k
              };
              zoomed(event_);
            };
          }).each("end.zoom", function() {
            zoomended(event_);
          });
        } else {
          this.__chart__ = view;
          zoomstarted(event_);
          zoomed(event_);
          zoomended(event_);
        }
      });
    };
    zoom.translate = function(_) {
      if (!arguments.length) return [ view.x, view.y ];
      view = {
        x: +_[0],
        y: +_[1],
        k: view.k
      };
      rescale();
      return zoom;
    };
    zoom.scale = function(_) {
      if (!arguments.length) return view.k;
      view = {
        x: view.x,
        y: view.y,
        k: +_
      };
      rescale();
      return zoom;
    };
    zoom.scaleExtent = function(_) {
      if (!arguments.length) return scaleExtent;
      scaleExtent = _ == null ? d3_behavior_zoomInfinity : [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.center = function(_) {
      if (!arguments.length) return center;
      center = _ && [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.size = function(_) {
      if (!arguments.length) return size;
      size = _ && [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.x = function(z) {
      if (!arguments.length) return x1;
      x1 = z;
      x0 = z.copy();
      view = {
        x: 0,
        y: 0,
        k: 1
      };
      return zoom;
    };
    zoom.y = function(z) {
      if (!arguments.length) return y1;
      y1 = z;
      y0 = z.copy();
      view = {
        x: 0,
        y: 0,
        k: 1
      };
      return zoom;
    };
    function location(p) {
      return [ (p[0] - view.x) / view.k, (p[1] - view.y) / view.k ];
    }
    function point(l) {
      return [ l[0] * view.k + view.x, l[1] * view.k + view.y ];
    }
    function scaleTo(s) {
      view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
    }
    function translateTo(p, l) {
      l = point(l);
      view.x += p[0] - l[0];
      view.y += p[1] - l[1];
    }
    function rescale() {
      if (x1) x1.domain(x0.range().map(function(x) {
        return (x - view.x) / view.k;
      }).map(x0.invert));
      if (y1) y1.domain(y0.range().map(function(y) {
        return (y - view.y) / view.k;
      }).map(y0.invert));
    }
    function zoomstarted(event) {
      event({
        type: "zoomstart"
      });
    }
    function zoomed(event) {
      rescale();
      event({
        type: "zoom",
        scale: view.k,
        translate: [ view.x, view.y ]
      });
    }
    function zoomended(event) {
      event({
        type: "zoomend"
      });
    }
    function mousedowned() {
      var target = this, event_ = event.of(target, arguments), eventTarget = d3.event.target, dragged = 0, w = d3.select(d3_window).on(mousemove, moved).on(mouseup, ended), l = location(d3.mouse(target)), dragRestore = d3_event_dragSuppress();
      d3_selection_interrupt.call(target);
      zoomstarted(event_);
      function moved() {
        dragged = 1;
        translateTo(d3.mouse(target), l);
        zoomed(event_);
      }
      function ended() {
        w.on(mousemove, d3_window === target ? mousewheelreset : null).on(mouseup, null);
        dragRestore(dragged && d3.event.target === eventTarget);
        zoomended(event_);
      }
    }
    function touchstarted() {
      var target = this, event_ = event.of(target, arguments), locations0 = {}, distance0 = 0, scale0, eventId = d3.event.changedTouches[0].identifier, touchmove = "touchmove.zoom-" + eventId, touchend = "touchend.zoom-" + eventId, w = d3.select(d3_window).on(touchmove, moved).on(touchend, ended), t = d3.select(target).on(mousedown, null).on(touchstart, started), dragRestore = d3_event_dragSuppress();
      d3_selection_interrupt.call(target);
      started();
      zoomstarted(event_);
      function relocate() {
        var touches = d3.touches(target);
        scale0 = view.k;
        touches.forEach(function(t) {
          if (t.identifier in locations0) locations0[t.identifier] = location(t);
        });
        return touches;
      }
      function started() {
        var changed = d3.event.changedTouches;
        for (var i = 0, n = changed.length; i < n; ++i) {
          locations0[changed[i].identifier] = null;
        }
        var touches = relocate(), now = Date.now();
        if (touches.length === 1) {
          if (now - touchtime < 500) {
            var p = touches[0], l = locations0[p.identifier];
            scaleTo(view.k * 2);
            translateTo(p, l);
            d3_eventPreventDefault();
            zoomed(event_);
          }
          touchtime = now;
        } else if (touches.length > 1) {
          var p = touches[0], q = touches[1], dx = p[0] - q[0], dy = p[1] - q[1];
          distance0 = dx * dx + dy * dy;
        }
      }
      function moved() {
        var touches = d3.touches(target), p0, l0, p1, l1;
        for (var i = 0, n = touches.length; i < n; ++i, l1 = null) {
          p1 = touches[i];
          if (l1 = locations0[p1.identifier]) {
            if (l0) break;
            p0 = p1, l0 = l1;
          }
        }
        if (l1) {
          var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1, scale1 = distance0 && Math.sqrt(distance1 / distance0);
          p0 = [ (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2 ];
          l0 = [ (l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2 ];
          scaleTo(scale1 * scale0);
        }
        touchtime = null;
        translateTo(p0, l0);
        zoomed(event_);
      }
      function ended() {
        if (d3.event.touches.length) {
          var changed = d3.event.changedTouches;
          for (var i = 0, n = changed.length; i < n; ++i) {
            delete locations0[changed[i].identifier];
          }
          for (var identifier in locations0) {
            return void relocate();
          }
        }
        w.on(touchmove, null).on(touchend, null);
        t.on(mousedown, mousedowned).on(touchstart, touchstarted);
        dragRestore();
        zoomended(event_);
      }
    }
    function mousewheeled() {
      var event_ = event.of(this, arguments);
      if (mousewheelTimer) clearTimeout(mousewheelTimer); else d3_selection_interrupt.call(this), 
      zoomstarted(event_);
      mousewheelTimer = setTimeout(function() {
        mousewheelTimer = null;
        zoomended(event_);
      }, 50);
      d3_eventPreventDefault();
      var point = center || d3.mouse(this);
      if (!translate0) translate0 = location(point);
      scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * view.k);
      translateTo(point, translate0);
      zoomed(event_);
    }
    function mousewheelreset() {
      translate0 = null;
    }
    function dblclicked() {
      var event_ = event.of(this, arguments), p = d3.mouse(this), l = location(p), k = Math.log(view.k) / Math.LN2;
      zoomstarted(event_);
      scaleTo(Math.pow(2, d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1));
      translateTo(p, l);
      zoomed(event_);
      zoomended(event_);
    }
    return d3.rebind(zoom, event, "on");
  };
  var d3_behavior_zoomInfinity = [ 0, Infinity ];
  var d3_behavior_zoomDelta, d3_behavior_zoomWheel = "onwheel" in d3_document ? (d3_behavior_zoomDelta = function() {
    return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
  }, "wheel") : "onmousewheel" in d3_document ? (d3_behavior_zoomDelta = function() {
    return d3.event.wheelDelta;
  }, "mousewheel") : (d3_behavior_zoomDelta = function() {
    return -d3.event.detail;
  }, "MozMousePixelScroll");
  function d3_Color() {}
  d3_Color.prototype.toString = function() {
    return this.rgb() + "";
  };
  d3.hsl = function(h, s, l) {
    return arguments.length === 1 ? h instanceof d3_Hsl ? d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : d3_hsl(+h, +s, +l);
  };
  function d3_hsl(h, s, l) {
    return new d3_Hsl(h, s, l);
  }
  function d3_Hsl(h, s, l) {
    this.h = h;
    this.s = s;
    this.l = l;
  }
  var d3_hslPrototype = d3_Hsl.prototype = new d3_Color();
  d3_hslPrototype.brighter = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return d3_hsl(this.h, this.s, this.l / k);
  };
  d3_hslPrototype.darker = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return d3_hsl(this.h, this.s, k * this.l);
  };
  d3_hslPrototype.rgb = function() {
    return d3_hsl_rgb(this.h, this.s, this.l);
  };
  function d3_hsl_rgb(h, s, l) {
    var m1, m2;
    h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
    s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
    l = l < 0 ? 0 : l > 1 ? 1 : l;
    m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
    m1 = 2 * l - m2;
    function v(h) {
      if (h > 360) h -= 360; else if (h < 0) h += 360;
      if (h < 60) return m1 + (m2 - m1) * h / 60;
      if (h < 180) return m2;
      if (h < 240) return m1 + (m2 - m1) * (240 - h) / 60;
      return m1;
    }
    function vv(h) {
      return Math.round(v(h) * 255);
    }
    return d3_rgb(vv(h + 120), vv(h), vv(h - 120));
  }
  d3.hcl = function(h, c, l) {
    return arguments.length === 1 ? h instanceof d3_Hcl ? d3_hcl(h.h, h.c, h.l) : h instanceof d3_Lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : d3_hcl(+h, +c, +l);
  };
  function d3_hcl(h, c, l) {
    return new d3_Hcl(h, c, l);
  }
  function d3_Hcl(h, c, l) {
    this.h = h;
    this.c = c;
    this.l = l;
  }
  var d3_hclPrototype = d3_Hcl.prototype = new d3_Color();
  d3_hclPrototype.brighter = function(k) {
    return d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.darker = function(k) {
    return d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.rgb = function() {
    return d3_hcl_lab(this.h, this.c, this.l).rgb();
  };
  function d3_hcl_lab(h, c, l) {
    if (isNaN(h)) h = 0;
    if (isNaN(c)) c = 0;
    return d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
  }
  d3.lab = function(l, a, b) {
    return arguments.length === 1 ? l instanceof d3_Lab ? d3_lab(l.l, l.a, l.b) : l instanceof d3_Hcl ? d3_hcl_lab(l.l, l.c, l.h) : d3_rgb_lab((l = d3.rgb(l)).r, l.g, l.b) : d3_lab(+l, +a, +b);
  };
  function d3_lab(l, a, b) {
    return new d3_Lab(l, a, b);
  }
  function d3_Lab(l, a, b) {
    this.l = l;
    this.a = a;
    this.b = b;
  }
  var d3_lab_K = 18;
  var d3_lab_X = .95047, d3_lab_Y = 1, d3_lab_Z = 1.08883;
  var d3_labPrototype = d3_Lab.prototype = new d3_Color();
  d3_labPrototype.brighter = function(k) {
    return d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.darker = function(k) {
    return d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.rgb = function() {
    return d3_lab_rgb(this.l, this.a, this.b);
  };
  function d3_lab_rgb(l, a, b) {
    var y = (l + 16) / 116, x = y + a / 500, z = y - b / 200;
    x = d3_lab_xyz(x) * d3_lab_X;
    y = d3_lab_xyz(y) * d3_lab_Y;
    z = d3_lab_xyz(z) * d3_lab_Z;
    return d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb(-.969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z));
  }
  function d3_lab_hcl(l, a, b) {
    return l > 0 ? d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : d3_hcl(NaN, NaN, l);
  }
  function d3_lab_xyz(x) {
    return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
  }
  function d3_xyz_lab(x) {
    return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
  }
  function d3_xyz_rgb(r) {
    return Math.round(255 * (r <= .00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055));
  }
  d3.rgb = function(r, g, b) {
    return arguments.length === 1 ? r instanceof d3_Rgb ? d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : d3_rgb(~~r, ~~g, ~~b);
  };
  function d3_rgbNumber(value) {
    return d3_rgb(value >> 16, value >> 8 & 255, value & 255);
  }
  function d3_rgbString(value) {
    return d3_rgbNumber(value) + "";
  }
  function d3_rgb(r, g, b) {
    return new d3_Rgb(r, g, b);
  }
  function d3_Rgb(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  var d3_rgbPrototype = d3_Rgb.prototype = new d3_Color();
  d3_rgbPrototype.brighter = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    var r = this.r, g = this.g, b = this.b, i = 30;
    if (!r && !g && !b) return d3_rgb(i, i, i);
    if (r && r < i) r = i;
    if (g && g < i) g = i;
    if (b && b < i) b = i;
    return d3_rgb(Math.min(255, ~~(r / k)), Math.min(255, ~~(g / k)), Math.min(255, ~~(b / k)));
  };
  d3_rgbPrototype.darker = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return d3_rgb(~~(k * this.r), ~~(k * this.g), ~~(k * this.b));
  };
  d3_rgbPrototype.hsl = function() {
    return d3_rgb_hsl(this.r, this.g, this.b);
  };
  d3_rgbPrototype.toString = function() {
    return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
  };
  function d3_rgb_hex(v) {
    return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
  }
  function d3_rgb_parse(format, rgb, hsl) {
    var r = 0, g = 0, b = 0, m1, m2, name;
    m1 = /([a-z]+)\((.*)\)/i.exec(format);
    if (m1) {
      m2 = m1[2].split(",");
      switch (m1[1]) {
       case "hsl":
        {
          return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
        }

       case "rgb":
        {
          return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
        }
      }
    }
    if (name = d3_rgb_names.get(format)) return rgb(name.r, name.g, name.b);
    if (format != null && format.charAt(0) === "#") {
      if (format.length === 4) {
        r = format.charAt(1);
        r += r;
        g = format.charAt(2);
        g += g;
        b = format.charAt(3);
        b += b;
      } else if (format.length === 7) {
        r = format.substring(1, 3);
        g = format.substring(3, 5);
        b = format.substring(5, 7);
      }
      r = parseInt(r, 16);
      g = parseInt(g, 16);
      b = parseInt(b, 16);
    }
    return rgb(r, g, b);
  }
  function d3_rgb_hsl(r, g, b) {
    var min = Math.min(r /= 255, g /= 255, b /= 255), max = Math.max(r, g, b), d = max - min, h, s, l = (max + min) / 2;
    if (d) {
      s = l < .5 ? d / (max + min) : d / (2 - max - min);
      if (r == max) h = (g - b) / d + (g < b ? 6 : 0); else if (g == max) h = (b - r) / d + 2; else h = (r - g) / d + 4;
      h *= 60;
    } else {
      h = NaN;
      s = l > 0 && l < 1 ? 0 : h;
    }
    return d3_hsl(h, s, l);
  }
  function d3_rgb_lab(r, g, b) {
    r = d3_rgb_xyz(r);
    g = d3_rgb_xyz(g);
    b = d3_rgb_xyz(b);
    var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X), y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y), z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
    return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
  }
  function d3_rgb_xyz(r) {
    return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
  }
  function d3_rgb_parseNumber(c) {
    var f = parseFloat(c);
    return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
  }
  var d3_rgb_names = d3.map({
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  });
  d3_rgb_names.forEach(function(key, value) {
    d3_rgb_names.set(key, d3_rgbNumber(value));
  });
  function d3_functor(v) {
    return typeof v === "function" ? v : function() {
      return v;
    };
  }
  d3.functor = d3_functor;
  function d3_identity(d) {
    return d;
  }
  d3.xhr = d3_xhrType(d3_identity);
  function d3_xhrType(response) {
    return function(url, mimeType, callback) {
      if (arguments.length === 2 && typeof mimeType === "function") callback = mimeType, 
      mimeType = null;
      return d3_xhr(url, mimeType, response, callback);
    };
  }
  function d3_xhr(url, mimeType, response, callback) {
    var xhr = {}, dispatch = d3.dispatch("beforesend", "progress", "load", "error"), headers = {}, request = new XMLHttpRequest(), responseType = null;
    if (d3_window.XDomainRequest && !("withCredentials" in request) && /^(http(s)?:)?\/\//.test(url)) request = new XDomainRequest();
    "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
      request.readyState > 3 && respond();
    };
    function respond() {
      var status = request.status, result;
      if (!status && request.responseText || status >= 200 && status < 300 || status === 304) {
        try {
          result = response.call(xhr, request);
        } catch (e) {
          dispatch.error.call(xhr, e);
          return;
        }
        dispatch.load.call(xhr, result);
      } else {
        dispatch.error.call(xhr, request);
      }
    }
    request.onprogress = function(event) {
      var o = d3.event;
      d3.event = event;
      try {
        dispatch.progress.call(xhr, request);
      } finally {
        d3.event = o;
      }
    };
    xhr.header = function(name, value) {
      name = (name + "").toLowerCase();
      if (arguments.length < 2) return headers[name];
      if (value == null) delete headers[name]; else headers[name] = value + "";
      return xhr;
    };
    xhr.mimeType = function(value) {
      if (!arguments.length) return mimeType;
      mimeType = value == null ? null : value + "";
      return xhr;
    };
    xhr.responseType = function(value) {
      if (!arguments.length) return responseType;
      responseType = value;
      return xhr;
    };
    xhr.response = function(value) {
      response = value;
      return xhr;
    };
    [ "get", "post" ].forEach(function(method) {
      xhr[method] = function() {
        return xhr.send.apply(xhr, [ method ].concat(d3_array(arguments)));
      };
    });
    xhr.send = function(method, data, callback) {
      if (arguments.length === 2 && typeof data === "function") callback = data, data = null;
      request.open(method, url, true);
      if (mimeType != null && !("accept" in headers)) headers["accept"] = mimeType + ",*/*";
      if (request.setRequestHeader) for (var name in headers) request.setRequestHeader(name, headers[name]);
      if (mimeType != null && request.overrideMimeType) request.overrideMimeType(mimeType);
      if (responseType != null) request.responseType = responseType;
      if (callback != null) xhr.on("error", callback).on("load", function(request) {
        callback(null, request);
      });
      dispatch.beforesend.call(xhr, request);
      request.send(data == null ? null : data);
      return xhr;
    };
    xhr.abort = function() {
      request.abort();
      return xhr;
    };
    d3.rebind(xhr, dispatch, "on");
    return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
  }
  function d3_xhr_fixCallback(callback) {
    return callback.length === 1 ? function(error, request) {
      callback(error == null ? request : null);
    } : callback;
  }
  d3.dsv = function(delimiter, mimeType) {
    var reFormat = new RegExp('["' + delimiter + "\n]"), delimiterCode = delimiter.charCodeAt(0);
    function dsv(url, row, callback) {
      if (arguments.length < 3) callback = row, row = null;
      var xhr = d3.xhr(url, mimeType, callback);
      xhr.row = function(_) {
        return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;
      };
      return xhr.row(row);
    }
    function response(request) {
      return dsv.parse(request.responseText);
    }
    function typedResponse(f) {
      return function(request) {
        return dsv.parse(request.responseText, f);
      };
    }
    dsv.parse = function(text, f) {
      var o;
      return dsv.parseRows(text, function(row, i) {
        if (o) return o(row, i - 1);
        var a = new Function("d", "return {" + row.map(function(name, i) {
          return JSON.stringify(name) + ": d[" + i + "]";
        }).join(",") + "}");
        o = f ? function(row, i) {
          return f(a(row), i);
        } : a;
      });
    };
    dsv.parseRows = function(text, f) {
      var EOL = {}, EOF = {}, rows = [], N = text.length, I = 0, n = 0, t, eol;
      function token() {
        if (I >= N) return EOF;
        if (eol) return eol = false, EOL;
        var j = I;
        if (text.charCodeAt(j) === 34) {
          var i = j;
          while (i++ < N) {
            if (text.charCodeAt(i) === 34) {
              if (text.charCodeAt(i + 1) !== 34) break;
              ++i;
            }
          }
          I = i + 2;
          var c = text.charCodeAt(i + 1);
          if (c === 13) {
            eol = true;
            if (text.charCodeAt(i + 2) === 10) ++I;
          } else if (c === 10) {
            eol = true;
          }
          return text.substring(j + 1, i).replace(/""/g, '"');
        }
        while (I < N) {
          var c = text.charCodeAt(I++), k = 1;
          if (c === 10) eol = true; else if (c === 13) {
            eol = true;
            if (text.charCodeAt(I) === 10) ++I, ++k;
          } else if (c !== delimiterCode) continue;
          return text.substring(j, I - k);
        }
        return text.substring(j);
      }
      while ((t = token()) !== EOF) {
        var a = [];
        while (t !== EOL && t !== EOF) {
          a.push(t);
          t = token();
        }
        if (f && !(a = f(a, n++))) continue;
        rows.push(a);
      }
      return rows;
    };
    dsv.format = function(rows) {
      if (Array.isArray(rows[0])) return dsv.formatRows(rows);
      var fieldSet = new d3_Set(), fields = [];
      rows.forEach(function(row) {
        for (var field in row) {
          if (!fieldSet.has(field)) {
            fields.push(fieldSet.add(field));
          }
        }
      });
      return [ fields.map(formatValue).join(delimiter) ].concat(rows.map(function(row) {
        return fields.map(function(field) {
          return formatValue(row[field]);
        }).join(delimiter);
      })).join("\n");
    };
    dsv.formatRows = function(rows) {
      return rows.map(formatRow).join("\n");
    };
    function formatRow(row) {
      return row.map(formatValue).join(delimiter);
    }
    function formatValue(text) {
      return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
    }
    return dsv;
  };
  d3.csv = d3.dsv(",", "text/csv");
  d3.tsv = d3.dsv("	", "text/tab-separated-values");
  var d3_timer_queueHead, d3_timer_queueTail, d3_timer_interval, d3_timer_timeout, d3_timer_active, d3_timer_frame = d3_window[d3_vendorSymbol(d3_window, "requestAnimationFrame")] || function(callback) {
    setTimeout(callback, 17);
  };
  d3.timer = function(callback, delay, then) {
    var n = arguments.length;
    if (n < 2) delay = 0;
    if (n < 3) then = Date.now();
    var time = then + delay, timer = {
      callback: callback,
      time: time,
      next: null
    };
    if (d3_timer_queueTail) d3_timer_queueTail.next = timer; else d3_timer_queueHead = timer;
    d3_timer_queueTail = timer;
    if (!d3_timer_interval) {
      d3_timer_timeout = clearTimeout(d3_timer_timeout);
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
  };
  function d3_timer_step() {
    var now = d3_timer_mark(), delay = d3_timer_sweep() - now;
    if (delay > 24) {
      if (isFinite(delay)) {
        clearTimeout(d3_timer_timeout);
        d3_timer_timeout = setTimeout(d3_timer_step, delay);
      }
      d3_timer_interval = 0;
    } else {
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
  }
  d3.timer.flush = function() {
    d3_timer_mark();
    d3_timer_sweep();
  };
  function d3_timer_replace(callback, delay, then) {
    var n = arguments.length;
    if (n < 2) delay = 0;
    if (n < 3) then = Date.now();
    d3_timer_active.callback = callback;
    d3_timer_active.time = then + delay;
  }
  function d3_timer_mark() {
    var now = Date.now();
    d3_timer_active = d3_timer_queueHead;
    while (d3_timer_active) {
      if (now >= d3_timer_active.time) d3_timer_active.flush = d3_timer_active.callback(now - d3_timer_active.time);
      d3_timer_active = d3_timer_active.next;
    }
    return now;
  }
  function d3_timer_sweep() {
    var t0, t1 = d3_timer_queueHead, time = Infinity;
    while (t1) {
      if (t1.flush) {
        t1 = t0 ? t0.next = t1.next : d3_timer_queueHead = t1.next;
      } else {
        if (t1.time < time) time = t1.time;
        t1 = (t0 = t1).next;
      }
    }
    d3_timer_queueTail = t0;
    return time;
  }
  var d3_format_decimalPoint = ".", d3_format_thousandsSeparator = ",", d3_format_grouping = [ 3, 3 ], d3_format_currencySymbol = "$";
  var d3_formatPrefixes = [ "y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y" ].map(d3_formatPrefix);
  d3.formatPrefix = function(value, precision) {
    var i = 0;
    if (value) {
      if (value < 0) value *= -1;
      if (precision) value = d3.round(value, d3_format_precision(value, precision));
      i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
      i = Math.max(-24, Math.min(24, Math.floor((i <= 0 ? i + 1 : i - 1) / 3) * 3));
    }
    return d3_formatPrefixes[8 + i / 3];
  };
  function d3_formatPrefix(d, i) {
    var k = Math.pow(10, Math.abs(8 - i) * 3);
    return {
      scale: i > 8 ? function(d) {
        return d / k;
      } : function(d) {
        return d * k;
      },
      symbol: d
    };
  }
  d3.round = function(x, n) {
    return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
  };
  d3.format = function(specifier) {
    var match = d3_format_re.exec(specifier), fill = match[1] || " ", align = match[2] || ">", sign = match[3] || "", symbol = match[4] || "", zfill = match[5], width = +match[6], comma = match[7], precision = match[8], type = match[9], scale = 1, suffix = "", integer = false;
    if (precision) precision = +precision.substring(1);
    if (zfill || fill === "0" && align === "=") {
      zfill = fill = "0";
      align = "=";
      if (comma) width -= Math.floor((width - 1) / 4);
    }
    switch (type) {
     case "n":
      comma = true;
      type = "g";
      break;

     case "%":
      scale = 100;
      suffix = "%";
      type = "f";
      break;

     case "p":
      scale = 100;
      suffix = "%";
      type = "r";
      break;

     case "b":
     case "o":
     case "x":
     case "X":
      if (symbol === "#") symbol = "0" + type.toLowerCase();

     case "c":
     case "d":
      integer = true;
      precision = 0;
      break;

     case "s":
      scale = -1;
      type = "r";
      break;
    }
    if (symbol === "#") symbol = ""; else if (symbol === "$") symbol = d3_format_currencySymbol;
    if (type == "r" && !precision) type = "g";
    if (precision != null) {
      if (type == "g") precision = Math.max(1, Math.min(21, precision)); else if (type == "e" || type == "f") precision = Math.max(0, Math.min(20, precision));
    }
    type = d3_format_types.get(type) || d3_format_typeDefault;
    var zcomma = zfill && comma;
    return function(value) {
      if (integer && value % 1) return "";
      var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign;
      if (scale < 0) {
        var prefix = d3.formatPrefix(value, precision);
        value = prefix.scale(value);
        suffix = prefix.symbol;
      } else {
        value *= scale;
      }
      value = type(value, precision);
      var i = value.lastIndexOf("."), before = i < 0 ? value : value.substring(0, i), after = i < 0 ? "" : d3_format_decimalPoint + value.substring(i + 1);
      if (!zfill && comma) before = d3_format_group(before);
      var length = symbol.length + before.length + after.length + (zcomma ? 0 : negative.length), padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
      if (zcomma) before = d3_format_group(padding + before);
      negative += symbol;
      value = before + after;
      return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + suffix;
    };
  };
  var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
  var d3_format_types = d3.map({
    b: function(x) {
      return x.toString(2);
    },
    c: function(x) {
      return String.fromCharCode(x);
    },
    o: function(x) {
      return x.toString(8);
    },
    x: function(x) {
      return x.toString(16);
    },
    X: function(x) {
      return x.toString(16).toUpperCase();
    },
    g: function(x, p) {
      return x.toPrecision(p);
    },
    e: function(x, p) {
      return x.toExponential(p);
    },
    f: function(x, p) {
      return x.toFixed(p);
    },
    r: function(x, p) {
      return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
    }
  });
  function d3_format_precision(x, p) {
    return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
  }
  function d3_format_typeDefault(x) {
    return x + "";
  }
  var d3_format_group = d3_identity;
  if (d3_format_grouping) {
    var d3_format_groupingLength = d3_format_grouping.length;
    d3_format_group = function(value) {
      var i = value.length, t = [], j = 0, g = d3_format_grouping[0];
      while (i > 0 && g > 0) {
        t.push(value.substring(i -= g, i + g));
        g = d3_format_grouping[j = (j + 1) % d3_format_groupingLength];
      }
      return t.reverse().join(d3_format_thousandsSeparator);
    };
  }
  d3.geo = {};
  function d3_adder() {}
  d3_adder.prototype = {
    s: 0,
    t: 0,
    add: function(y) {
      d3_adderSum(y, this.t, d3_adderTemp);
      d3_adderSum(d3_adderTemp.s, this.s, this);
      if (this.s) this.t += d3_adderTemp.t; else this.s = d3_adderTemp.t;
    },
    reset: function() {
      this.s = this.t = 0;
    },
    valueOf: function() {
      return this.s;
    }
  };
  var d3_adderTemp = new d3_adder();
  function d3_adderSum(a, b, o) {
    var x = o.s = a + b, bv = x - a, av = x - bv;
    o.t = a - av + (b - bv);
  }
  d3.geo.stream = function(object, listener) {
    if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
      d3_geo_streamObjectType[object.type](object, listener);
    } else {
      d3_geo_streamGeometry(object, listener);
    }
  };
  function d3_geo_streamGeometry(geometry, listener) {
    if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
      d3_geo_streamGeometryType[geometry.type](geometry, listener);
    }
  }
  var d3_geo_streamObjectType = {
    Feature: function(feature, listener) {
      d3_geo_streamGeometry(feature.geometry, listener);
    },
    FeatureCollection: function(object, listener) {
      var features = object.features, i = -1, n = features.length;
      while (++i < n) d3_geo_streamGeometry(features[i].geometry, listener);
    }
  };
  var d3_geo_streamGeometryType = {
    Sphere: function(object, listener) {
      listener.sphere();
    },
    Point: function(object, listener) {
      object = object.coordinates;
      listener.point(object[0], object[1], object[2]);
    },
    MultiPoint: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) object = coordinates[i], listener.point(object[0], object[1], object[2]);
    },
    LineString: function(object, listener) {
      d3_geo_streamLine(object.coordinates, listener, 0);
    },
    MultiLineString: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) d3_geo_streamLine(coordinates[i], listener, 0);
    },
    Polygon: function(object, listener) {
      d3_geo_streamPolygon(object.coordinates, listener);
    },
    MultiPolygon: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) d3_geo_streamPolygon(coordinates[i], listener);
    },
    GeometryCollection: function(object, listener) {
      var geometries = object.geometries, i = -1, n = geometries.length;
      while (++i < n) d3_geo_streamGeometry(geometries[i], listener);
    }
  };
  function d3_geo_streamLine(coordinates, listener, closed) {
    var i = -1, n = coordinates.length - closed, coordinate;
    listener.lineStart();
    while (++i < n) coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1], coordinate[2]);
    listener.lineEnd();
  }
  function d3_geo_streamPolygon(coordinates, listener) {
    var i = -1, n = coordinates.length;
    listener.polygonStart();
    while (++i < n) d3_geo_streamLine(coordinates[i], listener, 1);
    listener.polygonEnd();
  }
  d3.geo.area = function(object) {
    d3_geo_areaSum = 0;
    d3.geo.stream(object, d3_geo_area);
    return d3_geo_areaSum;
  };
  var d3_geo_areaSum, d3_geo_areaRingSum = new d3_adder();
  var d3_geo_area = {
    sphere: function() {
      d3_geo_areaSum += 4 * π;
    },
    point: d3_noop,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: function() {
      d3_geo_areaRingSum.reset();
      d3_geo_area.lineStart = d3_geo_areaRingStart;
    },
    polygonEnd: function() {
      var area = 2 * d3_geo_areaRingSum;
      d3_geo_areaSum += area < 0 ? 4 * π + area : area;
      d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
    }
  };
  function d3_geo_areaRingStart() {
    var λ00, φ00, λ0, cosφ0, sinφ0;
    d3_geo_area.point = function(λ, φ) {
      d3_geo_area.point = nextPoint;
      λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), 
      sinφ0 = Math.sin(φ);
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      φ = φ * d3_radians / 2 + π / 4;
      var dλ = λ - λ0, cosφ = Math.cos(φ), sinφ = Math.sin(φ), k = sinφ0 * sinφ, u = cosφ0 * cosφ + k * Math.cos(dλ), v = k * Math.sin(dλ);
      d3_geo_areaRingSum.add(Math.atan2(v, u));
      λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
    }
    d3_geo_area.lineEnd = function() {
      nextPoint(λ00, φ00);
    };
  }
  function d3_geo_cartesian(spherical) {
    var λ = spherical[0], φ = spherical[1], cosφ = Math.cos(φ);
    return [ cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ) ];
  }
  function d3_geo_cartesianDot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }
  function d3_geo_cartesianCross(a, b) {
    return [ a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0] ];
  }
  function d3_geo_cartesianAdd(a, b) {
    a[0] += b[0];
    a[1] += b[1];
    a[2] += b[2];
  }
  function d3_geo_cartesianScale(vector, k) {
    return [ vector[0] * k, vector[1] * k, vector[2] * k ];
  }
  function d3_geo_cartesianNormalize(d) {
    var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l;
    d[1] /= l;
    d[2] /= l;
  }
  function d3_geo_spherical(cartesian) {
    return [ Math.atan2(cartesian[1], cartesian[0]), d3_asin(cartesian[2]) ];
  }
  function d3_geo_sphericalEqual(a, b) {
    return Math.abs(a[0] - b[0]) < ε && Math.abs(a[1] - b[1]) < ε;
  }
  d3.geo.bounds = function() {
    var λ0, φ0, λ1, φ1, λ_, λ__, φ__, p0, dλSum, ranges, range;
    var bound = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() {
        bound.point = ringPoint;
        bound.lineStart = ringStart;
        bound.lineEnd = ringEnd;
        dλSum = 0;
        d3_geo_area.polygonStart();
      },
      polygonEnd: function() {
        d3_geo_area.polygonEnd();
        bound.point = point;
        bound.lineStart = lineStart;
        bound.lineEnd = lineEnd;
        if (d3_geo_areaRingSum < 0) λ0 = -(λ1 = 180), φ0 = -(φ1 = 90); else if (dλSum > ε) φ1 = 90; else if (dλSum < -ε) φ0 = -90;
        range[0] = λ0, range[1] = λ1;
      }
    };
    function point(λ, φ) {
      ranges.push(range = [ λ0 = λ, λ1 = λ ]);
      if (φ < φ0) φ0 = φ;
      if (φ > φ1) φ1 = φ;
    }
    function linePoint(λ, φ) {
      var p = d3_geo_cartesian([ λ * d3_radians, φ * d3_radians ]);
      if (p0) {
        var normal = d3_geo_cartesianCross(p0, p), equatorial = [ normal[1], -normal[0], 0 ], inflection = d3_geo_cartesianCross(equatorial, normal);
        d3_geo_cartesianNormalize(inflection);
        inflection = d3_geo_spherical(inflection);
        var dλ = λ - λ_, s = dλ > 0 ? 1 : -1, λi = inflection[0] * d3_degrees * s, antimeridian = Math.abs(dλ) > 180;
        if (antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
          var φi = inflection[1] * d3_degrees;
          if (φi > φ1) φ1 = φi;
        } else if (λi = (λi + 360) % 360 - 180, antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
          var φi = -inflection[1] * d3_degrees;
          if (φi < φ0) φ0 = φi;
        } else {
          if (φ < φ0) φ0 = φ;
          if (φ > φ1) φ1 = φ;
        }
        if (antimeridian) {
          if (λ < λ_) {
            if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
          } else {
            if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
          }
        } else {
          if (λ1 >= λ0) {
            if (λ < λ0) λ0 = λ;
            if (λ > λ1) λ1 = λ;
          } else {
            if (λ > λ_) {
              if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
            } else {
              if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
            }
          }
        }
      } else {
        point(λ, φ);
      }
      p0 = p, λ_ = λ;
    }
    function lineStart() {
      bound.point = linePoint;
    }
    function lineEnd() {
      range[0] = λ0, range[1] = λ1;
      bound.point = point;
      p0 = null;
    }
    function ringPoint(λ, φ) {
      if (p0) {
        var dλ = λ - λ_;
        dλSum += Math.abs(dλ) > 180 ? dλ + (dλ > 0 ? 360 : -360) : dλ;
      } else λ__ = λ, φ__ = φ;
      d3_geo_area.point(λ, φ);
      linePoint(λ, φ);
    }
    function ringStart() {
      d3_geo_area.lineStart();
    }
    function ringEnd() {
      ringPoint(λ__, φ__);
      d3_geo_area.lineEnd();
      if (Math.abs(dλSum) > ε) λ0 = -(λ1 = 180);
      range[0] = λ0, range[1] = λ1;
      p0 = null;
    }
    function angle(λ0, λ1) {
      return (λ1 -= λ0) < 0 ? λ1 + 360 : λ1;
    }
    function compareRanges(a, b) {
      return a[0] - b[0];
    }
    function withinRange(x, range) {
      return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
    }
    return function(feature) {
      φ1 = λ1 = -(λ0 = φ0 = Infinity);
      ranges = [];
      d3.geo.stream(feature, bound);
      var n = ranges.length;
      if (n) {
        ranges.sort(compareRanges);
        for (var i = 1, a = ranges[0], b, merged = [ a ]; i < n; ++i) {
          b = ranges[i];
          if (withinRange(b[0], a) || withinRange(b[1], a)) {
            if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
            if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
          } else {
            merged.push(a = b);
          }
        }
        var best = -Infinity, dλ;
        for (var n = merged.length - 1, i = 0, a = merged[n], b; i <= n; a = b, ++i) {
          b = merged[i];
          if ((dλ = angle(a[1], b[0])) > best) best = dλ, λ0 = b[0], λ1 = a[1];
        }
      }
      ranges = range = null;
      return λ0 === Infinity || φ0 === Infinity ? [ [ NaN, NaN ], [ NaN, NaN ] ] : [ [ λ0, φ0 ], [ λ1, φ1 ] ];
    };
  }();
  d3.geo.centroid = function(object) {
    d3_geo_centroidW0 = d3_geo_centroidW1 = d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
    d3.geo.stream(object, d3_geo_centroid);
    var x = d3_geo_centroidX2, y = d3_geo_centroidY2, z = d3_geo_centroidZ2, m = x * x + y * y + z * z;
    if (m < ε2) {
      x = d3_geo_centroidX1, y = d3_geo_centroidY1, z = d3_geo_centroidZ1;
      if (d3_geo_centroidW1 < ε) x = d3_geo_centroidX0, y = d3_geo_centroidY0, z = d3_geo_centroidZ0;
      m = x * x + y * y + z * z;
      if (m < ε2) return [ NaN, NaN ];
    }
    return [ Math.atan2(y, x) * d3_degrees, d3_asin(z / Math.sqrt(m)) * d3_degrees ];
  };
  var d3_geo_centroidW0, d3_geo_centroidW1, d3_geo_centroidX0, d3_geo_centroidY0, d3_geo_centroidZ0, d3_geo_centroidX1, d3_geo_centroidY1, d3_geo_centroidZ1, d3_geo_centroidX2, d3_geo_centroidY2, d3_geo_centroidZ2;
  var d3_geo_centroid = {
    sphere: d3_noop,
    point: d3_geo_centroidPoint,
    lineStart: d3_geo_centroidLineStart,
    lineEnd: d3_geo_centroidLineEnd,
    polygonStart: function() {
      d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
    },
    polygonEnd: function() {
      d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
    }
  };
  function d3_geo_centroidPoint(λ, φ) {
    λ *= d3_radians;
    var cosφ = Math.cos(φ *= d3_radians);
    d3_geo_centroidPointXYZ(cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ));
  }
  function d3_geo_centroidPointXYZ(x, y, z) {
    ++d3_geo_centroidW0;
    d3_geo_centroidX0 += (x - d3_geo_centroidX0) / d3_geo_centroidW0;
    d3_geo_centroidY0 += (y - d3_geo_centroidY0) / d3_geo_centroidW0;
    d3_geo_centroidZ0 += (z - d3_geo_centroidZ0) / d3_geo_centroidW0;
  }
  function d3_geo_centroidLineStart() {
    var x0, y0, z0;
    d3_geo_centroid.point = function(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians);
      x0 = cosφ * Math.cos(λ);
      y0 = cosφ * Math.sin(λ);
      z0 = Math.sin(φ);
      d3_geo_centroid.point = nextPoint;
      d3_geo_centroidPointXYZ(x0, y0, z0);
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
      d3_geo_centroidW1 += w;
      d3_geo_centroidX1 += w * (x0 + (x0 = x));
      d3_geo_centroidY1 += w * (y0 + (y0 = y));
      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
      d3_geo_centroidPointXYZ(x0, y0, z0);
    }
  }
  function d3_geo_centroidLineEnd() {
    d3_geo_centroid.point = d3_geo_centroidPoint;
  }
  function d3_geo_centroidRingStart() {
    var λ00, φ00, x0, y0, z0;
    d3_geo_centroid.point = function(λ, φ) {
      λ00 = λ, φ00 = φ;
      d3_geo_centroid.point = nextPoint;
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians);
      x0 = cosφ * Math.cos(λ);
      y0 = cosφ * Math.sin(λ);
      z0 = Math.sin(φ);
      d3_geo_centroidPointXYZ(x0, y0, z0);
    };
    d3_geo_centroid.lineEnd = function() {
      nextPoint(λ00, φ00);
      d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
      d3_geo_centroid.point = d3_geo_centroidPoint;
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), cx = y0 * z - z0 * y, cy = z0 * x - x0 * z, cz = x0 * y - y0 * x, m = Math.sqrt(cx * cx + cy * cy + cz * cz), u = x0 * x + y0 * y + z0 * z, v = m && -d3_acos(u) / m, w = Math.atan2(m, u);
      d3_geo_centroidX2 += v * cx;
      d3_geo_centroidY2 += v * cy;
      d3_geo_centroidZ2 += v * cz;
      d3_geo_centroidW1 += w;
      d3_geo_centroidX1 += w * (x0 + (x0 = x));
      d3_geo_centroidY1 += w * (y0 + (y0 = y));
      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
      d3_geo_centroidPointXYZ(x0, y0, z0);
    }
  }
  function d3_true() {
    return true;
  }
  function d3_geo_clipPolygon(segments, compare, inside, interpolate, listener) {
    var subject = [], clip = [];
    segments.forEach(function(segment) {
      if ((n = segment.length - 1) <= 0) return;
      var n, p0 = segment[0], p1 = segment[n];
      if (d3_geo_sphericalEqual(p0, p1)) {
        listener.lineStart();
        for (var i = 0; i < n; ++i) listener.point((p0 = segment[i])[0], p0[1]);
        listener.lineEnd();
        return;
      }
      var a = {
        point: p0,
        points: segment,
        other: null,
        visited: false,
        entry: true,
        subject: true
      }, b = {
        point: p0,
        points: [ p0 ],
        other: a,
        visited: false,
        entry: false,
        subject: false
      };
      a.other = b;
      subject.push(a);
      clip.push(b);
      a = {
        point: p1,
        points: [ p1 ],
        other: null,
        visited: false,
        entry: false,
        subject: true
      };
      b = {
        point: p1,
        points: [ p1 ],
        other: a,
        visited: false,
        entry: true,
        subject: false
      };
      a.other = b;
      subject.push(a);
      clip.push(b);
    });
    clip.sort(compare);
    d3_geo_clipPolygonLinkCircular(subject);
    d3_geo_clipPolygonLinkCircular(clip);
    if (!subject.length) return;
    if (inside) for (var i = 1, e = !inside(clip[0].point), n = clip.length; i < n; ++i) {
      clip[i].entry = e = !e;
    }
    var start = subject[0], current, points, point;
    while (1) {
      current = start;
      while (current.visited) if ((current = current.next) === start) return;
      points = current.points;
      listener.lineStart();
      do {
        current.visited = current.other.visited = true;
        if (current.entry) {
          if (current.subject) {
            for (var i = 0; i < points.length; i++) listener.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.point, current.next.point, 1, listener);
          }
          current = current.next;
        } else {
          if (current.subject) {
            points = current.prev.points;
            for (var i = points.length; --i >= 0; ) listener.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.point, current.prev.point, -1, listener);
          }
          current = current.prev;
        }
        current = current.other;
        points = current.points;
      } while (!current.visited);
      listener.lineEnd();
    }
  }
  function d3_geo_clipPolygonLinkCircular(array) {
    if (!(n = array.length)) return;
    var n, i = 0, a = array[0], b;
    while (++i < n) {
      a.next = b = array[i];
      b.prev = a;
      a = b;
    }
    a.next = b = array[0];
    b.prev = a;
  }
  function d3_geo_clip(pointVisible, clipLine, interpolate, polygonContains) {
    return function(listener) {
      var line = clipLine(listener);
      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          clip.point = pointRing;
          clip.lineStart = ringStart;
          clip.lineEnd = ringEnd;
          segments = [];
          polygon = [];
          listener.polygonStart();
        },
        polygonEnd: function() {
          clip.point = point;
          clip.lineStart = lineStart;
          clip.lineEnd = lineEnd;
          segments = d3.merge(segments);
          if (segments.length) {
            d3_geo_clipPolygon(segments, d3_geo_clipSort, null, interpolate, listener);
          } else if (polygonContains(polygon)) {
            listener.lineStart();
            interpolate(null, null, 1, listener);
            listener.lineEnd();
          }
          listener.polygonEnd();
          segments = polygon = null;
        },
        sphere: function() {
          listener.polygonStart();
          listener.lineStart();
          interpolate(null, null, 1, listener);
          listener.lineEnd();
          listener.polygonEnd();
        }
      };
      function point(λ, φ) {
        if (pointVisible(λ, φ)) listener.point(λ, φ);
      }
      function pointLine(λ, φ) {
        line.point(λ, φ);
      }
      function lineStart() {
        clip.point = pointLine;
        line.lineStart();
      }
      function lineEnd() {
        clip.point = point;
        line.lineEnd();
      }
      var segments;
      var buffer = d3_geo_clipBufferListener(), ringListener = clipLine(buffer), polygon, ring;
      function pointRing(λ, φ) {
        ringListener.point(λ, φ);
        ring.push([ λ, φ ]);
      }
      function ringStart() {
        ringListener.lineStart();
        ring = [];
      }
      function ringEnd() {
        pointRing(ring[0][0], ring[0][1]);
        ringListener.lineEnd();
        var clean = ringListener.clean(), ringSegments = buffer.buffer(), segment, n = ringSegments.length;
        ring.pop();
        polygon.push(ring);
        ring = null;
        if (!n) return;
        if (clean & 1) {
          segment = ringSegments[0];
          var n = segment.length - 1, i = -1, point;
          listener.lineStart();
          while (++i < n) listener.point((point = segment[i])[0], point[1]);
          listener.lineEnd();
          return;
        }
        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
        segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
      }
      return clip;
    };
  }
  function d3_geo_clipSegmentLength1(segment) {
    return segment.length > 1;
  }
  function d3_geo_clipBufferListener() {
    var lines = [], line;
    return {
      lineStart: function() {
        lines.push(line = []);
      },
      point: function(λ, φ) {
        line.push([ λ, φ ]);
      },
      lineEnd: d3_noop,
      buffer: function() {
        var buffer = lines;
        lines = [];
        line = null;
        return buffer;
      },
      rejoin: function() {
        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
      }
    };
  }
  function d3_geo_clipSort(a, b) {
    return ((a = a.point)[0] < 0 ? a[1] - π / 2 - ε : π / 2 - a[1]) - ((b = b.point)[0] < 0 ? b[1] - π / 2 - ε : π / 2 - b[1]);
  }
  function d3_geo_pointInPolygon(point, polygon) {
    var meridian = point[0], parallel = point[1], meridianNormal = [ Math.sin(meridian), -Math.cos(meridian), 0 ], polarAngle = 0, polar = false, southPole = false, winding = 0;
    d3_geo_areaRingSum.reset();
    for (var i = 0, n = polygon.length; i < n; ++i) {
      var ring = polygon[i], m = ring.length;
      if (!m) continue;
      var point0 = ring[0], λ0 = point0[0], φ0 = point0[1] / 2 + π / 4, sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), j = 1;
      while (true) {
        if (j === m) j = 0;
        point = ring[j];
        var λ = point[0], φ = point[1] / 2 + π / 4, sinφ = Math.sin(φ), cosφ = Math.cos(φ), dλ = λ - λ0, antimeridian = Math.abs(dλ) > π, k = sinφ0 * sinφ;
        d3_geo_areaRingSum.add(Math.atan2(k * Math.sin(dλ), cosφ0 * cosφ + k * Math.cos(dλ)));
        if (Math.abs(φ) < ε) southPole = true;
        polarAngle += antimeridian ? dλ + (dλ >= 0 ? 2 : -2) * π : dλ;
        if (antimeridian ^ λ0 >= meridian ^ λ >= meridian) {
          var arc = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));
          d3_geo_cartesianNormalize(arc);
          var intersection = d3_geo_cartesianCross(meridianNormal, arc);
          d3_geo_cartesianNormalize(intersection);
          var φarc = (antimeridian ^ dλ >= 0 ? -1 : 1) * d3_asin(intersection[2]);
          if (parallel > φarc) {
            winding += antimeridian ^ dλ >= 0 ? 1 : -1;
          }
        }
        if (!j++) break;
        λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ, point0 = point;
      }
      if (Math.abs(polarAngle) > ε) polar = true;
    }
    return (!southPole && !polar && d3_geo_areaRingSum < 0 || polarAngle < -ε) ^ winding & 1;
  }
  var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, d3_geo_clipAntimeridianPolygonContains);
  function d3_geo_clipAntimeridianLine(listener) {
    var λ0 = NaN, φ0 = NaN, sλ0 = NaN, clean;
    return {
      lineStart: function() {
        listener.lineStart();
        clean = 1;
      },
      point: function(λ1, φ1) {
        var sλ1 = λ1 > 0 ? π : -π, dλ = Math.abs(λ1 - λ0);
        if (Math.abs(dλ - π) < ε) {
          listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? π / 2 : -π / 2);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          listener.point(λ1, φ0);
          clean = 0;
        } else if (sλ0 !== sλ1 && dλ >= π) {
          if (Math.abs(λ0 - sλ0) < ε) λ0 -= sλ0 * ε;
          if (Math.abs(λ1 - sλ1) < ε) λ1 -= sλ1 * ε;
          φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          clean = 0;
        }
        listener.point(λ0 = λ1, φ0 = φ1);
        sλ0 = sλ1;
      },
      lineEnd: function() {
        listener.lineEnd();
        λ0 = φ0 = NaN;
      },
      clean: function() {
        return 2 - clean;
      }
    };
  }
  function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
    var cosφ0, cosφ1, sinλ0_λ1 = Math.sin(λ0 - λ1);
    return Math.abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
  }
  function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
    var φ;
    if (from == null) {
      φ = direction * π / 2;
      listener.point(-π, φ);
      listener.point(0, φ);
      listener.point(π, φ);
      listener.point(π, 0);
      listener.point(π, -φ);
      listener.point(0, -φ);
      listener.point(-π, -φ);
      listener.point(-π, 0);
      listener.point(-π, φ);
    } else if (Math.abs(from[0] - to[0]) > ε) {
      var s = (from[0] < to[0] ? 1 : -1) * π;
      φ = direction * s / 2;
      listener.point(-s, φ);
      listener.point(0, φ);
      listener.point(s, φ);
    } else {
      listener.point(to[0], to[1]);
    }
  }
  var d3_geo_clipAntimeridianPoint = [ -π, 0 ];
  function d3_geo_clipAntimeridianPolygonContains(polygon) {
    return d3_geo_pointInPolygon(d3_geo_clipAntimeridianPoint, polygon);
  }
  function d3_geo_clipCircle(radius) {
    var cr = Math.cos(radius), smallRadius = cr > 0, point = [ radius, 0 ], notHemisphere = Math.abs(cr) > ε, interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);
    return d3_geo_clip(visible, clipLine, interpolate, polygonContains);
    function visible(λ, φ) {
      return Math.cos(λ) * Math.cos(φ) > cr;
    }
    function clipLine(listener) {
      var point0, c0, v0, v00, clean;
      return {
        lineStart: function() {
          v00 = v0 = false;
          clean = 1;
        },
        point: function(λ, φ) {
          var point1 = [ λ, φ ], point2, v = visible(λ, φ), c = smallRadius ? v ? 0 : code(λ, φ) : v ? code(λ + (λ < 0 ? π : -π), φ) : 0;
          if (!point0 && (v00 = v0 = v)) listener.lineStart();
          if (v !== v0) {
            point2 = intersect(point0, point1);
            if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
              point1[0] += ε;
              point1[1] += ε;
              v = visible(point1[0], point1[1]);
            }
          }
          if (v !== v0) {
            clean = 0;
            if (v) {
              listener.lineStart();
              point2 = intersect(point1, point0);
              listener.point(point2[0], point2[1]);
            } else {
              point2 = intersect(point0, point1);
              listener.point(point2[0], point2[1]);
              listener.lineEnd();
            }
            point0 = point2;
          } else if (notHemisphere && point0 && smallRadius ^ v) {
            var t;
            if (!(c & c0) && (t = intersect(point1, point0, true))) {
              clean = 0;
              if (smallRadius) {
                listener.lineStart();
                listener.point(t[0][0], t[0][1]);
                listener.point(t[1][0], t[1][1]);
                listener.lineEnd();
              } else {
                listener.point(t[1][0], t[1][1]);
                listener.lineEnd();
                listener.lineStart();
                listener.point(t[0][0], t[0][1]);
              }
            }
          }
          if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
            listener.point(point1[0], point1[1]);
          }
          point0 = point1, v0 = v, c0 = c;
        },
        lineEnd: function() {
          if (v0) listener.lineEnd();
          point0 = null;
        },
        clean: function() {
          return clean | (v00 && v0) << 1;
        }
      };
    }
    function intersect(a, b, two) {
      var pa = d3_geo_cartesian(a), pb = d3_geo_cartesian(b);
      var n1 = [ 1, 0, 0 ], n2 = d3_geo_cartesianCross(pa, pb), n2n2 = d3_geo_cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
      if (!determinant) return !two && a;
      var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = d3_geo_cartesianCross(n1, n2), A = d3_geo_cartesianScale(n1, c1), B = d3_geo_cartesianScale(n2, c2);
      d3_geo_cartesianAdd(A, B);
      var u = n1xn2, w = d3_geo_cartesianDot(A, u), uu = d3_geo_cartesianDot(u, u), t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);
      if (t2 < 0) return;
      var t = Math.sqrt(t2), q = d3_geo_cartesianScale(u, (-w - t) / uu);
      d3_geo_cartesianAdd(q, A);
      q = d3_geo_spherical(q);
      if (!two) return q;
      var λ0 = a[0], λ1 = b[0], φ0 = a[1], φ1 = b[1], z;
      if (λ1 < λ0) z = λ0, λ0 = λ1, λ1 = z;
      var δλ = λ1 - λ0, polar = Math.abs(δλ - π) < ε, meridian = polar || δλ < ε;
      if (!polar && φ1 < φ0) z = φ0, φ0 = φ1, φ1 = z;
      if (meridian ? polar ? φ0 + φ1 > 0 ^ q[1] < (Math.abs(q[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q[1] && q[1] <= φ1 : δλ > π ^ (λ0 <= q[0] && q[0] <= λ1)) {
        var q1 = d3_geo_cartesianScale(u, (-w + t) / uu);
        d3_geo_cartesianAdd(q1, A);
        return [ q, d3_geo_spherical(q1) ];
      }
    }
    function code(λ, φ) {
      var r = smallRadius ? radius : π - radius, code = 0;
      if (λ < -r) code |= 1; else if (λ > r) code |= 2;
      if (φ < -r) code |= 4; else if (φ > r) code |= 8;
      return code;
    }
    function polygonContains(polygon) {
      return d3_geo_pointInPolygon(point, polygon);
    }
  }
  var d3_geo_clipExtentMAX = 1e9;
  d3.geo.clipExtent = function() {
    var x0, y0, x1, y1, stream, clip, clipExtent = {
      stream: function(output) {
        if (stream) stream.valid = false;
        stream = clip(output);
        stream.valid = true;
        return stream;
      },
      extent: function(_) {
        if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
        clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);
        if (stream) stream.valid = false, stream = null;
        return clipExtent;
      }
    };
    return clipExtent.extent([ [ 0, 0 ], [ 960, 500 ] ]);
  };
  function d3_geo_clipExtent(x0, y0, x1, y1) {
    return function(listener) {
      var listener_ = listener, bufferListener = d3_geo_clipBufferListener(), segments, polygon, ring;
      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          listener = bufferListener;
          segments = [];
          polygon = [];
        },
        polygonEnd: function() {
          listener = listener_;
          if ((segments = d3.merge(segments)).length) {
            listener.polygonStart();
            d3_geo_clipPolygon(segments, compare, inside, interpolate, listener);
            listener.polygonEnd();
          } else if (insidePolygon([ x0, y0 ])) {
            listener.polygonStart(), listener.lineStart();
            interpolate(null, null, 1, listener);
            listener.lineEnd(), listener.polygonEnd();
          }
          segments = polygon = ring = null;
        }
      };
      function inside(point) {
        var a = corner(point, -1), i = insidePolygon([ a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0 ]);
        return i;
      }
      function insidePolygon(p) {
        var wn = 0, n = polygon.length, y = p[1];
        for (var i = 0; i < n; ++i) {
          for (var j = 1, v = polygon[i], m = v.length, a = v[0], b; j < m; ++j) {
            b = v[j];
            if (a[1] <= y) {
              if (b[1] > y && isLeft(a, b, p) > 0) ++wn;
            } else {
              if (b[1] <= y && isLeft(a, b, p) < 0) --wn;
            }
            a = b;
          }
        }
        return wn !== 0;
      }
      function isLeft(a, b, c) {
        return (b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1]);
      }
      function interpolate(from, to, direction, listener) {
        var a = 0, a1 = 0;
        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
          do {
            listener.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
          } while ((a = (a + direction + 4) % 4) !== a1);
        } else {
          listener.point(to[0], to[1]);
        }
      }
      function visible(x, y) {
        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
      }
      function point(x, y) {
        if (visible(x, y)) listener.point(x, y);
      }
      var x__, y__, v__, x_, y_, v_, first;
      function lineStart() {
        clip.point = linePoint;
        if (polygon) polygon.push(ring = []);
        first = true;
        v_ = false;
        x_ = y_ = NaN;
      }
      function lineEnd() {
        if (segments) {
          linePoint(x__, y__);
          if (v__ && v_) bufferListener.rejoin();
          segments.push(bufferListener.buffer());
        }
        clip.point = point;
        if (v_) listener.lineEnd();
      }
      function linePoint(x, y) {
        x = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x));
        y = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y));
        var v = visible(x, y);
        if (polygon) ring.push([ x, y ]);
        if (first) {
          x__ = x, y__ = y, v__ = v;
          first = false;
          if (v) {
            listener.lineStart();
            listener.point(x, y);
          }
        } else {
          if (v && v_) listener.point(x, y); else {
            var a = [ x_, y_ ], b = [ x, y ];
            if (clipLine(a, b)) {
              if (!v_) {
                listener.lineStart();
                listener.point(a[0], a[1]);
              }
              listener.point(b[0], b[1]);
              if (!v) listener.lineEnd();
            } else if (v) {
              listener.lineStart();
              listener.point(x, y);
            }
          }
        }
        x_ = x, y_ = y, v_ = v;
      }
      return clip;
    };
    function corner(p, direction) {
      return Math.abs(p[0] - x0) < ε ? direction > 0 ? 0 : 3 : Math.abs(p[0] - x1) < ε ? direction > 0 ? 2 : 1 : Math.abs(p[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
    }
    function compare(a, b) {
      return comparePoints(a.point, b.point);
    }
    function comparePoints(a, b) {
      var ca = corner(a, 1), cb = corner(b, 1);
      return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
    }
    function clipLine(a, b) {
      var dx = b[0] - a[0], dy = b[1] - a[1], t = [ 0, 1 ];
      if (Math.abs(dx) < ε && Math.abs(dy) < ε) return x0 <= a[0] && a[0] <= x1 && y0 <= a[1] && a[1] <= y1;
      if (d3_geo_clipExtentT(x0 - a[0], dx, t) && d3_geo_clipExtentT(a[0] - x1, -dx, t) && d3_geo_clipExtentT(y0 - a[1], dy, t) && d3_geo_clipExtentT(a[1] - y1, -dy, t)) {
        if (t[1] < 1) {
          b[0] = a[0] + t[1] * dx;
          b[1] = a[1] + t[1] * dy;
        }
        if (t[0] > 0) {
          a[0] += t[0] * dx;
          a[1] += t[0] * dy;
        }
        return true;
      }
      return false;
    }
  }
  function d3_geo_clipExtentT(num, denominator, t) {
    if (Math.abs(denominator) < ε) return num <= 0;
    var u = num / denominator;
    if (denominator > 0) {
      if (u > t[1]) return false;
      if (u > t[0]) t[0] = u;
    } else {
      if (u < t[0]) return false;
      if (u < t[1]) t[1] = u;
    }
    return true;
  }
  function d3_geo_compose(a, b) {
    function compose(x, y) {
      return x = a(x, y), b(x[0], x[1]);
    }
    if (a.invert && b.invert) compose.invert = function(x, y) {
      return x = b.invert(x, y), x && a.invert(x[0], x[1]);
    };
    return compose;
  }
  function d3_geo_conic(projectAt) {
    var φ0 = 0, φ1 = π / 3, m = d3_geo_projectionMutator(projectAt), p = m(φ0, φ1);
    p.parallels = function(_) {
      if (!arguments.length) return [ φ0 / π * 180, φ1 / π * 180 ];
      return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);
    };
    return p;
  }
  function d3_geo_conicEqualArea(φ0, φ1) {
    var sinφ0 = Math.sin(φ0), n = (sinφ0 + Math.sin(φ1)) / 2, C = 1 + sinφ0 * (2 * n - sinφ0), ρ0 = Math.sqrt(C) / n;
    function forward(λ, φ) {
      var ρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
      return [ ρ * Math.sin(λ *= n), ρ0 - ρ * Math.cos(λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = ρ0 - y;
      return [ Math.atan2(x, ρ0_y) / n, d3_asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n)) ];
    };
    return forward;
  }
  (d3.geo.conicEqualArea = function() {
    return d3_geo_conic(d3_geo_conicEqualArea);
  }).raw = d3_geo_conicEqualArea;
  d3.geo.albers = function() {
    return d3.geo.conicEqualArea().rotate([ 96, 0 ]).center([ -.6, 38.7 ]).parallels([ 29.5, 45.5 ]).scale(1070);
  };
  d3.geo.albersUsa = function() {
    var lower48 = d3.geo.albers();
    var alaska = d3.geo.conicEqualArea().rotate([ 154, 0 ]).center([ -2, 58.5 ]).parallels([ 55, 65 ]);
    var hawaii = d3.geo.conicEqualArea().rotate([ 157, 0 ]).center([ -3, 19.9 ]).parallels([ 8, 18 ]);
    var point, pointStream = {
      point: function(x, y) {
        point = [ x, y ];
      }
    }, lower48Point, alaskaPoint, hawaiiPoint;
    function albersUsa(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      point = null;
      (lower48Point(x, y), point) || (alaskaPoint(x, y), point) || hawaiiPoint(x, y);
      return point;
    }
    albersUsa.invert = function(coordinates) {
      var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
      return (y >= .12 && y < .234 && x >= -.425 && x < -.214 ? alaska : y >= .166 && y < .234 && x >= -.214 && x < -.115 ? hawaii : lower48).invert(coordinates);
    };
    albersUsa.stream = function(stream) {
      var lower48Stream = lower48.stream(stream), alaskaStream = alaska.stream(stream), hawaiiStream = hawaii.stream(stream);
      return {
        point: function(x, y) {
          lower48Stream.point(x, y);
          alaskaStream.point(x, y);
          hawaiiStream.point(x, y);
        },
        sphere: function() {
          lower48Stream.sphere();
          alaskaStream.sphere();
          hawaiiStream.sphere();
        },
        lineStart: function() {
          lower48Stream.lineStart();
          alaskaStream.lineStart();
          hawaiiStream.lineStart();
        },
        lineEnd: function() {
          lower48Stream.lineEnd();
          alaskaStream.lineEnd();
          hawaiiStream.lineEnd();
        },
        polygonStart: function() {
          lower48Stream.polygonStart();
          alaskaStream.polygonStart();
          hawaiiStream.polygonStart();
        },
        polygonEnd: function() {
          lower48Stream.polygonEnd();
          alaskaStream.polygonEnd();
          hawaiiStream.polygonEnd();
        }
      };
    };
    albersUsa.precision = function(_) {
      if (!arguments.length) return lower48.precision();
      lower48.precision(_);
      alaska.precision(_);
      hawaii.precision(_);
      return albersUsa;
    };
    albersUsa.scale = function(_) {
      if (!arguments.length) return lower48.scale();
      lower48.scale(_);
      alaska.scale(_ * .35);
      hawaii.scale(_);
      return albersUsa.translate(lower48.translate());
    };
    albersUsa.translate = function(_) {
      if (!arguments.length) return lower48.translate();
      var k = lower48.scale(), x = +_[0], y = +_[1];
      lower48Point = lower48.translate(_).clipExtent([ [ x - .455 * k, y - .238 * k ], [ x + .455 * k, y + .238 * k ] ]).stream(pointStream).point;
      alaskaPoint = alaska.translate([ x - .307 * k, y + .201 * k ]).clipExtent([ [ x - .425 * k + ε, y + .12 * k + ε ], [ x - .214 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
      hawaiiPoint = hawaii.translate([ x - .205 * k, y + .212 * k ]).clipExtent([ [ x - .214 * k + ε, y + .166 * k + ε ], [ x - .115 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
      return albersUsa;
    };
    return albersUsa.scale(1070);
  };
  var d3_geo_pathAreaSum, d3_geo_pathAreaPolygon, d3_geo_pathArea = {
    point: d3_noop,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: function() {
      d3_geo_pathAreaPolygon = 0;
      d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
    },
    polygonEnd: function() {
      d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
      d3_geo_pathAreaSum += Math.abs(d3_geo_pathAreaPolygon / 2);
    }
  };
  function d3_geo_pathAreaRingStart() {
    var x00, y00, x0, y0;
    d3_geo_pathArea.point = function(x, y) {
      d3_geo_pathArea.point = nextPoint;
      x00 = x0 = x, y00 = y0 = y;
    };
    function nextPoint(x, y) {
      d3_geo_pathAreaPolygon += y0 * x - x0 * y;
      x0 = x, y0 = y;
    }
    d3_geo_pathArea.lineEnd = function() {
      nextPoint(x00, y00);
    };
  }
  var d3_geo_pathBoundsX0, d3_geo_pathBoundsY0, d3_geo_pathBoundsX1, d3_geo_pathBoundsY1;
  var d3_geo_pathBounds = {
    point: d3_geo_pathBoundsPoint,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: d3_noop,
    polygonEnd: d3_noop
  };
  function d3_geo_pathBoundsPoint(x, y) {
    if (x < d3_geo_pathBoundsX0) d3_geo_pathBoundsX0 = x;
    if (x > d3_geo_pathBoundsX1) d3_geo_pathBoundsX1 = x;
    if (y < d3_geo_pathBoundsY0) d3_geo_pathBoundsY0 = y;
    if (y > d3_geo_pathBoundsY1) d3_geo_pathBoundsY1 = y;
  }
  function d3_geo_pathBuffer() {
    var pointCircle = d3_geo_pathBufferCircle(4.5), buffer = [];
    var stream = {
      point: point,
      lineStart: function() {
        stream.point = pointLineStart;
      },
      lineEnd: lineEnd,
      polygonStart: function() {
        stream.lineEnd = lineEndPolygon;
      },
      polygonEnd: function() {
        stream.lineEnd = lineEnd;
        stream.point = point;
      },
      pointRadius: function(_) {
        pointCircle = d3_geo_pathBufferCircle(_);
        return stream;
      },
      result: function() {
        if (buffer.length) {
          var result = buffer.join("");
          buffer = [];
          return result;
        }
      }
    };
    function point(x, y) {
      buffer.push("M", x, ",", y, pointCircle);
    }
    function pointLineStart(x, y) {
      buffer.push("M", x, ",", y);
      stream.point = pointLine;
    }
    function pointLine(x, y) {
      buffer.push("L", x, ",", y);
    }
    function lineEnd() {
      stream.point = point;
    }
    function lineEndPolygon() {
      buffer.push("Z");
    }
    return stream;
  }
  function d3_geo_pathBufferCircle(radius) {
    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
  }
  var d3_geo_pathCentroid = {
    point: d3_geo_pathCentroidPoint,
    lineStart: d3_geo_pathCentroidLineStart,
    lineEnd: d3_geo_pathCentroidLineEnd,
    polygonStart: function() {
      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
    },
    polygonEnd: function() {
      d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
      d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
    }
  };
  function d3_geo_pathCentroidPoint(x, y) {
    d3_geo_centroidX0 += x;
    d3_geo_centroidY0 += y;
    ++d3_geo_centroidZ0;
  }
  function d3_geo_pathCentroidLineStart() {
    var x0, y0;
    d3_geo_pathCentroid.point = function(x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    };
    function nextPoint(x, y) {
      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
      d3_geo_centroidX1 += z * (x0 + x) / 2;
      d3_geo_centroidY1 += z * (y0 + y) / 2;
      d3_geo_centroidZ1 += z;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    }
  }
  function d3_geo_pathCentroidLineEnd() {
    d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
  }
  function d3_geo_pathCentroidRingStart() {
    var x00, y00, x0, y0;
    d3_geo_pathCentroid.point = function(x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      d3_geo_pathCentroidPoint(x00 = x0 = x, y00 = y0 = y);
    };
    function nextPoint(x, y) {
      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
      d3_geo_centroidX1 += z * (x0 + x) / 2;
      d3_geo_centroidY1 += z * (y0 + y) / 2;
      d3_geo_centroidZ1 += z;
      z = y0 * x - x0 * y;
      d3_geo_centroidX2 += z * (x0 + x);
      d3_geo_centroidY2 += z * (y0 + y);
      d3_geo_centroidZ2 += z * 3;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    }
    d3_geo_pathCentroid.lineEnd = function() {
      nextPoint(x00, y00);
    };
  }
  function d3_geo_pathContext(context) {
    var pointRadius = 4.5;
    var stream = {
      point: point,
      lineStart: function() {
        stream.point = pointLineStart;
      },
      lineEnd: lineEnd,
      polygonStart: function() {
        stream.lineEnd = lineEndPolygon;
      },
      polygonEnd: function() {
        stream.lineEnd = lineEnd;
        stream.point = point;
      },
      pointRadius: function(_) {
        pointRadius = _;
        return stream;
      },
      result: d3_noop
    };
    function point(x, y) {
      context.moveTo(x, y);
      context.arc(x, y, pointRadius, 0, 2 * π);
    }
    function pointLineStart(x, y) {
      context.moveTo(x, y);
      stream.point = pointLine;
    }
    function pointLine(x, y) {
      context.lineTo(x, y);
    }
    function lineEnd() {
      stream.point = point;
    }
    function lineEndPolygon() {
      context.closePath();
    }
    return stream;
  }
  function d3_geo_resample(project) {
    var δ2 = .5, cosMinDistance = Math.cos(30 * d3_radians), maxDepth = 16;
    function resample(stream) {
      var λ00, φ00, x00, y00, a00, b00, c00, λ0, x0, y0, a0, b0, c0;
      var resample = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          stream.polygonStart();
          resample.lineStart = ringStart;
        },
        polygonEnd: function() {
          stream.polygonEnd();
          resample.lineStart = lineStart;
        }
      };
      function point(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      }
      function lineStart() {
        x0 = NaN;
        resample.point = linePoint;
        stream.lineStart();
      }
      function linePoint(λ, φ) {
        var c = d3_geo_cartesian([ λ, φ ]), p = project(λ, φ);
        resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
        stream.point(x0, y0);
      }
      function lineEnd() {
        resample.point = point;
        stream.lineEnd();
      }
      function ringStart() {
        lineStart();
        resample.point = ringPoint;
        resample.lineEnd = ringEnd;
      }
      function ringPoint(λ, φ) {
        linePoint(λ00 = λ, φ00 = φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
        resample.point = linePoint;
      }
      function ringEnd() {
        resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
        resample.lineEnd = lineEnd;
        lineEnd();
      }
      return resample;
    }
    function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
      var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
      if (d2 > 4 * δ2 && depth--) {
        var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = Math.sqrt(a * a + b * b + c * c), φ2 = Math.asin(c /= m), λ2 = Math.abs(Math.abs(c) - 1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a), p = project(λ2, φ2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
        if (dz * dz / d2 > δ2 || Math.abs((dx * dx2 + dy * dy2) / d2 - .5) > .3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
          resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
          stream.point(x2, y2);
          resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
        }
      }
    }
    resample.precision = function(_) {
      if (!arguments.length) return Math.sqrt(δ2);
      maxDepth = (δ2 = _ * _) > 0 && 16;
      return resample;
    };
    return resample;
  }
  d3.geo.transform = function(methods) {
    return {
      stream: function(stream) {
        var transform = new d3_geo_transform(stream);
        for (var k in methods) transform[k] = methods[k];
        return transform;
      }
    };
  };
  function d3_geo_transform(stream) {
    this.stream = stream;
  }
  d3_geo_transform.prototype = {
    point: function(x, y) {
      this.stream.point(x, y);
    },
    sphere: function() {
      this.stream.sphere();
    },
    lineStart: function() {
      this.stream.lineStart();
    },
    lineEnd: function() {
      this.stream.lineEnd();
    },
    polygonStart: function() {
      this.stream.polygonStart();
    },
    polygonEnd: function() {
      this.stream.polygonEnd();
    }
  };
  d3.geo.path = function() {
    var pointRadius = 4.5, projection, context, projectStream, contextStream, cacheStream;
    function path(object) {
      if (object) {
        if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
        if (!cacheStream || !cacheStream.valid) cacheStream = projectStream(contextStream);
        d3.geo.stream(object, cacheStream);
      }
      return contextStream.result();
    }
    path.area = function(object) {
      d3_geo_pathAreaSum = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathArea));
      return d3_geo_pathAreaSum;
    };
    path.centroid = function(object) {
      d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
      return d3_geo_centroidZ2 ? [ d3_geo_centroidX2 / d3_geo_centroidZ2, d3_geo_centroidY2 / d3_geo_centroidZ2 ] : d3_geo_centroidZ1 ? [ d3_geo_centroidX1 / d3_geo_centroidZ1, d3_geo_centroidY1 / d3_geo_centroidZ1 ] : d3_geo_centroidZ0 ? [ d3_geo_centroidX0 / d3_geo_centroidZ0, d3_geo_centroidY0 / d3_geo_centroidZ0 ] : [ NaN, NaN ];
    };
    path.bounds = function(object) {
      d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
      d3.geo.stream(object, projectStream(d3_geo_pathBounds));
      return [ [ d3_geo_pathBoundsX0, d3_geo_pathBoundsY0 ], [ d3_geo_pathBoundsX1, d3_geo_pathBoundsY1 ] ];
    };
    path.projection = function(_) {
      if (!arguments.length) return projection;
      projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
      return reset();
    };
    path.context = function(_) {
      if (!arguments.length) return context;
      contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
      if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
      return reset();
    };
    path.pointRadius = function(_) {
      if (!arguments.length) return pointRadius;
      pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
      return path;
    };
    function reset() {
      cacheStream = null;
      return path;
    }
    return path.projection(d3.geo.albersUsa()).context(null);
  };
  function d3_geo_pathProjectStream(project) {
    var resample = d3_geo_resample(function(x, y) {
      return project([ x * d3_degrees, y * d3_degrees ]);
    });
    return function(stream) {
      var transform = new d3_geo_transform(stream = resample(stream));
      transform.point = function(x, y) {
        stream.point(x * d3_radians, y * d3_radians);
      };
      return transform;
    };
  }
  d3.geo.projection = d3_geo_projection;
  d3.geo.projectionMutator = d3_geo_projectionMutator;
  function d3_geo_projection(project) {
    return d3_geo_projectionMutator(function() {
      return project;
    })();
  }
  function d3_geo_projectionMutator(projectAt) {
    var project, rotate, projectRotate, projectResample = d3_geo_resample(function(x, y) {
      x = project(x, y);
      return [ x[0] * k + δx, δy - x[1] * k ];
    }), k = 150, x = 480, y = 250, λ = 0, φ = 0, δλ = 0, δφ = 0, δγ = 0, δx, δy, preclip = d3_geo_clipAntimeridian, postclip = d3_identity, clipAngle = null, clipExtent = null, stream;
    function projection(point) {
      point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
      return [ point[0] * k + δx, δy - point[1] * k ];
    }
    function invert(point) {
      point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
      return point && [ point[0] * d3_degrees, point[1] * d3_degrees ];
    }
    projection.stream = function(output) {
      if (stream) stream.valid = false;
      stream = d3_geo_projectionRadiansRotate(rotate, preclip(projectResample(postclip(output))));
      stream.valid = true;
      return stream;
    };
    projection.clipAngle = function(_) {
      if (!arguments.length) return clipAngle;
      preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
      return invalidate();
    };
    projection.clipExtent = function(_) {
      if (!arguments.length) return clipExtent;
      clipExtent = _;
      postclip = _ ? d3_geo_clipExtent(_[0][0], _[0][1], _[1][0], _[1][1]) : d3_identity;
      return invalidate();
    };
    projection.scale = function(_) {
      if (!arguments.length) return k;
      k = +_;
      return reset();
    };
    projection.translate = function(_) {
      if (!arguments.length) return [ x, y ];
      x = +_[0];
      y = +_[1];
      return reset();
    };
    projection.center = function(_) {
      if (!arguments.length) return [ λ * d3_degrees, φ * d3_degrees ];
      λ = _[0] % 360 * d3_radians;
      φ = _[1] % 360 * d3_radians;
      return reset();
    };
    projection.rotate = function(_) {
      if (!arguments.length) return [ δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees ];
      δλ = _[0] % 360 * d3_radians;
      δφ = _[1] % 360 * d3_radians;
      δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
      return reset();
    };
    d3.rebind(projection, projectResample, "precision");
    function reset() {
      projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
      var center = project(λ, φ);
      δx = x - center[0] * k;
      δy = y + center[1] * k;
      return invalidate();
    }
    function invalidate() {
      if (stream) stream.valid = false, stream = null;
      return projection;
    }
    return function() {
      project = projectAt.apply(this, arguments);
      projection.invert = project.invert && invert;
      return reset();
    };
  }
  function d3_geo_projectionRadiansRotate(rotate, stream) {
    var transform = new d3_geo_transform(stream);
    transform.point = function(x, y) {
      y = rotate(x * d3_radians, y * d3_radians), x = y[0];
      stream.point(x > π ? x - 2 * π : x < -π ? x + 2 * π : x, y[1]);
    };
    return transform;
  }
  function d3_geo_equirectangular(λ, φ) {
    return [ λ, φ ];
  }
  (d3.geo.equirectangular = function() {
    return d3_geo_projection(d3_geo_equirectangular);
  }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
  d3.geo.rotation = function(rotate) {
    rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);
    function forward(coordinates) {
      coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
    }
    forward.invert = function(coordinates) {
      coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
    };
    return forward;
  };
  function d3_geo_rotation(δλ, δφ, δγ) {
    return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_equirectangular;
  }
  function d3_geo_forwardRotationλ(δλ) {
    return function(λ, φ) {
      return λ += δλ, [ λ > π ? λ - 2 * π : λ < -π ? λ + 2 * π : λ, φ ];
    };
  }
  function d3_geo_rotationλ(δλ) {
    var rotation = d3_geo_forwardRotationλ(δλ);
    rotation.invert = d3_geo_forwardRotationλ(-δλ);
    return rotation;
  }
  function d3_geo_rotationφγ(δφ, δγ) {
    var cosδφ = Math.cos(δφ), sinδφ = Math.sin(δφ), cosδγ = Math.cos(δγ), sinδγ = Math.sin(δγ);
    function rotation(λ, φ) {
      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδφ + x * sinδφ;
      return [ Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ), d3_asin(k * cosδγ + y * sinδγ) ];
    }
    rotation.invert = function(λ, φ) {
      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδγ - y * sinδγ;
      return [ Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ), d3_asin(k * cosδφ - x * sinδφ) ];
    };
    return rotation;
  }
  d3.geo.circle = function() {
    var origin = [ 0, 0 ], angle, precision = 6, interpolate;
    function circle() {
      var center = typeof origin === "function" ? origin.apply(this, arguments) : origin, rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert, ring = [];
      interpolate(null, null, 1, {
        point: function(x, y) {
          ring.push(x = rotate(x, y));
          x[0] *= d3_degrees, x[1] *= d3_degrees;
        }
      });
      return {
        type: "Polygon",
        coordinates: [ ring ]
      };
    }
    circle.origin = function(x) {
      if (!arguments.length) return origin;
      origin = x;
      return circle;
    };
    circle.angle = function(x) {
      if (!arguments.length) return angle;
      interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
      return circle;
    };
    circle.precision = function(_) {
      if (!arguments.length) return precision;
      interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
      return circle;
    };
    return circle.angle(90);
  };
  function d3_geo_circleInterpolate(radius, precision) {
    var cr = Math.cos(radius), sr = Math.sin(radius);
    return function(from, to, direction, listener) {
      var step = direction * precision;
      if (from != null) {
        from = d3_geo_circleAngle(cr, from);
        to = d3_geo_circleAngle(cr, to);
        if (direction > 0 ? from < to : from > to) from += direction * 2 * π;
      } else {
        from = radius + direction * 2 * π;
        to = radius - .5 * step;
      }
      for (var point, t = from; direction > 0 ? t > to : t < to; t -= step) {
        listener.point((point = d3_geo_spherical([ cr, -sr * Math.cos(t), -sr * Math.sin(t) ]))[0], point[1]);
      }
    };
  }
  function d3_geo_circleAngle(cr, point) {
    var a = d3_geo_cartesian(point);
    a[0] -= cr;
    d3_geo_cartesianNormalize(a);
    var angle = d3_acos(-a[1]);
    return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
  }
  d3.geo.distance = function(a, b) {
    var Δλ = (b[0] - a[0]) * d3_radians, φ0 = a[1] * d3_radians, φ1 = b[1] * d3_radians, sinΔλ = Math.sin(Δλ), cosΔλ = Math.cos(Δλ), sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), sinφ1 = Math.sin(φ1), cosφ1 = Math.cos(φ1), t;
    return Math.atan2(Math.sqrt((t = cosφ1 * sinΔλ) * t + (t = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ);
  };
  d3.geo.graticule = function() {
    var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
    function graticule() {
      return {
        type: "MultiLineString",
        coordinates: lines()
      };
    }
    function lines() {
      return d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
        return Math.abs(x % DX) > ε;
      }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
        return Math.abs(y % DY) > ε;
      }).map(y));
    }
    graticule.lines = function() {
      return lines().map(function(coordinates) {
        return {
          type: "LineString",
          coordinates: coordinates
        };
      });
    };
    graticule.outline = function() {
      return {
        type: "Polygon",
        coordinates: [ X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1)) ]
      };
    };
    graticule.extent = function(_) {
      if (!arguments.length) return graticule.minorExtent();
      return graticule.majorExtent(_).minorExtent(_);
    };
    graticule.majorExtent = function(_) {
      if (!arguments.length) return [ [ X0, Y0 ], [ X1, Y1 ] ];
      X0 = +_[0][0], X1 = +_[1][0];
      Y0 = +_[0][1], Y1 = +_[1][1];
      if (X0 > X1) _ = X0, X0 = X1, X1 = _;
      if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
      return graticule.precision(precision);
    };
    graticule.minorExtent = function(_) {
      if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
      x0 = +_[0][0], x1 = +_[1][0];
      y0 = +_[0][1], y1 = +_[1][1];
      if (x0 > x1) _ = x0, x0 = x1, x1 = _;
      if (y0 > y1) _ = y0, y0 = y1, y1 = _;
      return graticule.precision(precision);
    };
    graticule.step = function(_) {
      if (!arguments.length) return graticule.minorStep();
      return graticule.majorStep(_).minorStep(_);
    };
    graticule.majorStep = function(_) {
      if (!arguments.length) return [ DX, DY ];
      DX = +_[0], DY = +_[1];
      return graticule;
    };
    graticule.minorStep = function(_) {
      if (!arguments.length) return [ dx, dy ];
      dx = +_[0], dy = +_[1];
      return graticule;
    };
    graticule.precision = function(_) {
      if (!arguments.length) return precision;
      precision = +_;
      x = d3_geo_graticuleX(y0, y1, 90);
      y = d3_geo_graticuleY(x0, x1, precision);
      X = d3_geo_graticuleX(Y0, Y1, 90);
      Y = d3_geo_graticuleY(X0, X1, precision);
      return graticule;
    };
    return graticule.majorExtent([ [ -180, -90 + ε ], [ 180, 90 - ε ] ]).minorExtent([ [ -180, -80 - ε ], [ 180, 80 + ε ] ]);
  };
  function d3_geo_graticuleX(y0, y1, dy) {
    var y = d3.range(y0, y1 - ε, dy).concat(y1);
    return function(x) {
      return y.map(function(y) {
        return [ x, y ];
      });
    };
  }
  function d3_geo_graticuleY(x0, x1, dx) {
    var x = d3.range(x0, x1 - ε, dx).concat(x1);
    return function(y) {
      return x.map(function(x) {
        return [ x, y ];
      });
    };
  }
  function d3_source(d) {
    return d.source;
  }
  function d3_target(d) {
    return d.target;
  }
  d3.geo.greatArc = function() {
    var source = d3_source, source_, target = d3_target, target_;
    function greatArc() {
      return {
        type: "LineString",
        coordinates: [ source_ || source.apply(this, arguments), target_ || target.apply(this, arguments) ]
      };
    }
    greatArc.distance = function() {
      return d3.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments));
    };
    greatArc.source = function(_) {
      if (!arguments.length) return source;
      source = _, source_ = typeof _ === "function" ? null : _;
      return greatArc;
    };
    greatArc.target = function(_) {
      if (!arguments.length) return target;
      target = _, target_ = typeof _ === "function" ? null : _;
      return greatArc;
    };
    greatArc.precision = function() {
      return arguments.length ? greatArc : 0;
    };
    return greatArc;
  };
  d3.geo.interpolate = function(source, target) {
    return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
  };
  function d3_geo_interpolate(x0, y0, x1, y1) {
    var cy0 = Math.cos(y0), sy0 = Math.sin(y0), cy1 = Math.cos(y1), sy1 = Math.sin(y1), kx0 = cy0 * Math.cos(x0), ky0 = cy0 * Math.sin(x0), kx1 = cy1 * Math.cos(x1), ky1 = cy1 * Math.sin(x1), d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))), k = 1 / Math.sin(d);
    var interpolate = d ? function(t) {
      var B = Math.sin(t *= d) * k, A = Math.sin(d - t) * k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
      return [ Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees ];
    } : function() {
      return [ x0 * d3_degrees, y0 * d3_degrees ];
    };
    interpolate.distance = d;
    return interpolate;
  }
  d3.geo.length = function(object) {
    d3_geo_lengthSum = 0;
    d3.geo.stream(object, d3_geo_length);
    return d3_geo_lengthSum;
  };
  var d3_geo_lengthSum;
  var d3_geo_length = {
    sphere: d3_noop,
    point: d3_noop,
    lineStart: d3_geo_lengthLineStart,
    lineEnd: d3_noop,
    polygonStart: d3_noop,
    polygonEnd: d3_noop
  };
  function d3_geo_lengthLineStart() {
    var λ0, sinφ0, cosφ0;
    d3_geo_length.point = function(λ, φ) {
      λ0 = λ * d3_radians, sinφ0 = Math.sin(φ *= d3_radians), cosφ0 = Math.cos(φ);
      d3_geo_length.point = nextPoint;
    };
    d3_geo_length.lineEnd = function() {
      d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
    };
    function nextPoint(λ, φ) {
      var sinφ = Math.sin(φ *= d3_radians), cosφ = Math.cos(φ), t = Math.abs((λ *= d3_radians) - λ0), cosΔλ = Math.cos(t);
      d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cosφ * Math.sin(t)) * t + (t = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);
      λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ;
    }
  }
  function d3_geo_azimuthal(scale, angle) {
    function azimuthal(λ, φ) {
      var cosλ = Math.cos(λ), cosφ = Math.cos(φ), k = scale(cosλ * cosφ);
      return [ k * cosφ * Math.sin(λ), k * Math.sin(φ) ];
    }
    azimuthal.invert = function(x, y) {
      var ρ = Math.sqrt(x * x + y * y), c = angle(ρ), sinc = Math.sin(c), cosc = Math.cos(c);
      return [ Math.atan2(x * sinc, ρ * cosc), Math.asin(ρ && y * sinc / ρ) ];
    };
    return azimuthal;
  }
  var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cosλcosφ) {
    return Math.sqrt(2 / (1 + cosλcosφ));
  }, function(ρ) {
    return 2 * Math.asin(ρ / 2);
  });
  (d3.geo.azimuthalEqualArea = function() {
    return d3_geo_projection(d3_geo_azimuthalEqualArea);
  }).raw = d3_geo_azimuthalEqualArea;
  var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cosλcosφ) {
    var c = Math.acos(cosλcosφ);
    return c && c / Math.sin(c);
  }, d3_identity);
  (d3.geo.azimuthalEquidistant = function() {
    return d3_geo_projection(d3_geo_azimuthalEquidistant);
  }).raw = d3_geo_azimuthalEquidistant;
  function d3_geo_conicConformal(φ0, φ1) {
    var cosφ0 = Math.cos(φ0), t = function(φ) {
      return Math.tan(π / 4 + φ / 2);
    }, n = φ0 === φ1 ? Math.sin(φ0) : Math.log(cosφ0 / Math.cos(φ1)) / Math.log(t(φ1) / t(φ0)), F = cosφ0 * Math.pow(t(φ0), n) / n;
    if (!n) return d3_geo_mercator;
    function forward(λ, φ) {
      var ρ = Math.abs(Math.abs(φ) - π / 2) < ε ? 0 : F / Math.pow(t(φ), n);
      return [ ρ * Math.sin(n * λ), F - ρ * Math.cos(n * λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = F - y, ρ = d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y);
      return [ Math.atan2(x, ρ0_y) / n, 2 * Math.atan(Math.pow(F / ρ, 1 / n)) - π / 2 ];
    };
    return forward;
  }
  (d3.geo.conicConformal = function() {
    return d3_geo_conic(d3_geo_conicConformal);
  }).raw = d3_geo_conicConformal;
  function d3_geo_conicEquidistant(φ0, φ1) {
    var cosφ0 = Math.cos(φ0), n = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0), G = cosφ0 / n + φ0;
    if (Math.abs(n) < ε) return d3_geo_equirectangular;
    function forward(λ, φ) {
      var ρ = G - φ;
      return [ ρ * Math.sin(n * λ), G - ρ * Math.cos(n * λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = G - y;
      return [ Math.atan2(x, ρ0_y) / n, G - d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y) ];
    };
    return forward;
  }
  (d3.geo.conicEquidistant = function() {
    return d3_geo_conic(d3_geo_conicEquidistant);
  }).raw = d3_geo_conicEquidistant;
  var d3_geo_gnomonic = d3_geo_azimuthal(function(cosλcosφ) {
    return 1 / cosλcosφ;
  }, Math.atan);
  (d3.geo.gnomonic = function() {
    return d3_geo_projection(d3_geo_gnomonic);
  }).raw = d3_geo_gnomonic;
  function d3_geo_mercator(λ, φ) {
    return [ λ, Math.log(Math.tan(π / 4 + φ / 2)) ];
  }
  d3_geo_mercator.invert = function(x, y) {
    return [ x, 2 * Math.atan(Math.exp(y)) - π / 2 ];
  };
  function d3_geo_mercatorProjection(project) {
    var m = d3_geo_projection(project), scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, clipAuto;
    m.scale = function() {
      var v = scale.apply(m, arguments);
      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
    };
    m.translate = function() {
      var v = translate.apply(m, arguments);
      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
    };
    m.clipExtent = function(_) {
      var v = clipExtent.apply(m, arguments);
      if (v === m) {
        if (clipAuto = _ == null) {
          var k = π * scale(), t = translate();
          clipExtent([ [ t[0] - k, t[1] - k ], [ t[0] + k, t[1] + k ] ]);
        }
      } else if (clipAuto) {
        v = null;
      }
      return v;
    };
    return m.clipExtent(null);
  }
  (d3.geo.mercator = function() {
    return d3_geo_mercatorProjection(d3_geo_mercator);
  }).raw = d3_geo_mercator;
  var d3_geo_orthographic = d3_geo_azimuthal(function() {
    return 1;
  }, Math.asin);
  (d3.geo.orthographic = function() {
    return d3_geo_projection(d3_geo_orthographic);
  }).raw = d3_geo_orthographic;
  var d3_geo_stereographic = d3_geo_azimuthal(function(cosλcosφ) {
    return 1 / (1 + cosλcosφ);
  }, function(ρ) {
    return 2 * Math.atan(ρ);
  });
  (d3.geo.stereographic = function() {
    return d3_geo_projection(d3_geo_stereographic);
  }).raw = d3_geo_stereographic;
  function d3_geo_transverseMercator(λ, φ) {
    var B = Math.cos(φ) * Math.sin(λ);
    return [ Math.log((1 + B) / (1 - B)) / 2, Math.atan2(Math.tan(φ), Math.cos(λ)) ];
  }
  d3_geo_transverseMercator.invert = function(x, y) {
    return [ Math.atan2(d3_sinh(x), Math.cos(y)), d3_asin(Math.sin(y) / d3_cosh(x)) ];
  };
  (d3.geo.transverseMercator = function() {
    return d3_geo_mercatorProjection(d3_geo_transverseMercator);
  }).raw = d3_geo_transverseMercator;
  d3.geom = {};
  d3.svg = {};
  function d3_svg_line(projection) {
    var x = d3_svg_lineX, y = d3_svg_lineY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, tension = .7;
    function line(data) {
      var segments = [], points = [], i = -1, n = data.length, d, fx = d3_functor(x), fy = d3_functor(y);
      function segment() {
        segments.push("M", interpolate(projection(points), tension));
      }
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points.push([ +fx.call(this, d, i), +fy.call(this, d, i) ]);
        } else if (points.length) {
          segment();
          points = [];
        }
      }
      if (points.length) segment();
      return segments.length ? segments.join("") : null;
    }
    line.x = function(_) {
      if (!arguments.length) return x;
      x = _;
      return line;
    };
    line.y = function(_) {
      if (!arguments.length) return y;
      y = _;
      return line;
    };
    line.defined = function(_) {
      if (!arguments.length) return defined;
      defined = _;
      return line;
    };
    line.interpolate = function(_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      return line;
    };
    line.tension = function(_) {
      if (!arguments.length) return tension;
      tension = _;
      return line;
    };
    return line;
  }
  d3.svg.line = function() {
    return d3_svg_line(d3_identity);
  };
  function d3_svg_lineX(d) {
    return d[0];
  }
  function d3_svg_lineY(d) {
    return d[1];
  }
  var d3_svg_lineInterpolators = d3.map({
    linear: d3_svg_lineLinear,
    "linear-closed": d3_svg_lineLinearClosed,
    step: d3_svg_lineStep,
    "step-before": d3_svg_lineStepBefore,
    "step-after": d3_svg_lineStepAfter,
    basis: d3_svg_lineBasis,
    "basis-open": d3_svg_lineBasisOpen,
    "basis-closed": d3_svg_lineBasisClosed,
    bundle: d3_svg_lineBundle,
    cardinal: d3_svg_lineCardinal,
    "cardinal-open": d3_svg_lineCardinalOpen,
    "cardinal-closed": d3_svg_lineCardinalClosed,
    monotone: d3_svg_lineMonotone
  });
  d3_svg_lineInterpolators.forEach(function(key, value) {
    value.key = key;
    value.closed = /-closed$/.test(key);
  });
  function d3_svg_lineLinear(points) {
    return points.join("L");
  }
  function d3_svg_lineLinearClosed(points) {
    return d3_svg_lineLinear(points) + "Z";
  }
  function d3_svg_lineStep(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("H", (p[0] + (p = points[i])[0]) / 2, "V", p[1]);
    if (n > 1) path.push("H", p[0]);
    return path.join("");
  }
  function d3_svg_lineStepBefore(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("V", (p = points[i])[1], "H", p[0]);
    return path.join("");
  }
  function d3_svg_lineStepAfter(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("H", (p = points[i])[0], "V", p[1]);
    return path.join("");
  }
  function d3_svg_lineCardinalOpen(points, tension) {
    return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, points.length - 1), d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineCardinalClosed(points, tension) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), 
    points), d3_svg_lineCardinalTangents([ points[points.length - 2] ].concat(points, [ points[1] ]), tension));
  }
  function d3_svg_lineCardinal(points, tension) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineHermite(points, tangents) {
    if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
      return d3_svg_lineLinear(points);
    }
    var quad = points.length != tangents.length, path = "", p0 = points[0], p = points[1], t0 = tangents[0], t = t0, pi = 1;
    if (quad) {
      path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
      p0 = points[1];
      pi = 2;
    }
    if (tangents.length > 1) {
      t = tangents[1];
      p = points[pi];
      pi++;
      path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
      for (var i = 2; i < tangents.length; i++, pi++) {
        p = points[pi];
        t = tangents[i];
        path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
      }
    }
    if (quad) {
      var lp = points[pi];
      path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
    }
    return path;
  }
  function d3_svg_lineCardinalTangents(points, tension) {
    var tangents = [], a = (1 - tension) / 2, p0, p1 = points[0], p2 = points[1], i = 1, n = points.length;
    while (++i < n) {
      p0 = p1;
      p1 = p2;
      p2 = points[i];
      tangents.push([ a * (p2[0] - p0[0]), a * (p2[1] - p0[1]) ]);
    }
    return tangents;
  }
  function d3_svg_lineBasis(points) {
    if (points.length < 3) return d3_svg_lineLinear(points);
    var i = 1, n = points.length, pi = points[0], x0 = pi[0], y0 = pi[1], px = [ x0, x0, x0, (pi = points[1])[0] ], py = [ y0, y0, y0, pi[1] ], path = [ x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
    points.push(points[n - 1]);
    while (++i <= n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    points.pop();
    path.push("L", pi);
    return path.join("");
  }
  function d3_svg_lineBasisOpen(points) {
    if (points.length < 4) return d3_svg_lineLinear(points);
    var path = [], i = -1, n = points.length, pi, px = [ 0 ], py = [ 0 ];
    while (++i < 3) {
      pi = points[i];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
    --i;
    while (++i < n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBasisClosed(points) {
    var path, i = -1, n = points.length, m = n + 4, pi, px = [], py = [];
    while (++i < 4) {
      pi = points[i % n];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path = [ d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
    --i;
    while (++i < m) {
      pi = points[i % n];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBundle(points, tension) {
    var n = points.length - 1;
    if (n) {
      var x0 = points[0][0], y0 = points[0][1], dx = points[n][0] - x0, dy = points[n][1] - y0, i = -1, p, t;
      while (++i <= n) {
        p = points[i];
        t = i / n;
        p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
        p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
      }
    }
    return d3_svg_lineBasis(points);
  }
  function d3_svg_lineDot4(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }
  var d3_svg_lineBasisBezier1 = [ 0, 2 / 3, 1 / 3, 0 ], d3_svg_lineBasisBezier2 = [ 0, 1 / 3, 2 / 3, 0 ], d3_svg_lineBasisBezier3 = [ 0, 1 / 6, 2 / 3, 1 / 6 ];
  function d3_svg_lineBasisBezier(path, x, y) {
    path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
  }
  function d3_svg_lineSlope(p0, p1) {
    return (p1[1] - p0[1]) / (p1[0] - p0[0]);
  }
  function d3_svg_lineFiniteDifferences(points) {
    var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = d3_svg_lineSlope(p0, p1);
    while (++i < j) {
      m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
    }
    m[i] = d;
    return m;
  }
  function d3_svg_lineMonotoneTangents(points) {
    var tangents = [], d, a, b, s, m = d3_svg_lineFiniteDifferences(points), i = -1, j = points.length - 1;
    while (++i < j) {
      d = d3_svg_lineSlope(points[i], points[i + 1]);
      if (Math.abs(d) < 1e-6) {
        m[i] = m[i + 1] = 0;
      } else {
        a = m[i] / d;
        b = m[i + 1] / d;
        s = a * a + b * b;
        if (s > 9) {
          s = d * 3 / Math.sqrt(s);
          m[i] = s * a;
          m[i + 1] = s * b;
        }
      }
    }
    i = -1;
    while (++i <= j) {
      s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
      tangents.push([ s || 0, m[i] * s || 0 ]);
    }
    return tangents;
  }
  function d3_svg_lineMonotone(points) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
  }
  d3.geom.hull = function(vertices) {
    var x = d3_svg_lineX, y = d3_svg_lineY;
    if (arguments.length) return hull(vertices);
    function hull(data) {
      if (data.length < 3) return [];
      var fx = d3_functor(x), fy = d3_functor(y), n = data.length, vertices, plen = n - 1, points = [], stack = [], d, i, j, h = 0, x1, y1, x2, y2, u, v, a, sp;
      if (fx === d3_svg_lineX && y === d3_svg_lineY) vertices = data; else for (i = 0, 
      vertices = []; i < n; ++i) {
        vertices.push([ +fx.call(this, d = data[i], i), +fy.call(this, d, i) ]);
      }
      for (i = 1; i < n; ++i) {
        if (vertices[i][1] < vertices[h][1] || vertices[i][1] == vertices[h][1] && vertices[i][0] < vertices[h][0]) h = i;
      }
      for (i = 0; i < n; ++i) {
        if (i === h) continue;
        y1 = vertices[i][1] - vertices[h][1];
        x1 = vertices[i][0] - vertices[h][0];
        points.push({
          angle: Math.atan2(y1, x1),
          index: i
        });
      }
      points.sort(function(a, b) {
        return a.angle - b.angle;
      });
      a = points[0].angle;
      v = points[0].index;
      u = 0;
      for (i = 1; i < plen; ++i) {
        j = points[i].index;
        if (a == points[i].angle) {
          x1 = vertices[v][0] - vertices[h][0];
          y1 = vertices[v][1] - vertices[h][1];
          x2 = vertices[j][0] - vertices[h][0];
          y2 = vertices[j][1] - vertices[h][1];
          if (x1 * x1 + y1 * y1 >= x2 * x2 + y2 * y2) {
            points[i].index = -1;
            continue;
          } else {
            points[u].index = -1;
          }
        }
        a = points[i].angle;
        u = i;
        v = j;
      }
      stack.push(h);
      for (i = 0, j = 0; i < 2; ++j) {
        if (points[j].index > -1) {
          stack.push(points[j].index);
          i++;
        }
      }
      sp = stack.length;
      for (;j < plen; ++j) {
        if (points[j].index < 0) continue;
        while (!d3_geom_hullCCW(stack[sp - 2], stack[sp - 1], points[j].index, vertices)) {
          --sp;
        }
        stack[sp++] = points[j].index;
      }
      var poly = [];
      for (i = sp - 1; i >= 0; --i) poly.push(data[stack[i]]);
      return poly;
    }
    hull.x = function(_) {
      return arguments.length ? (x = _, hull) : x;
    };
    hull.y = function(_) {
      return arguments.length ? (y = _, hull) : y;
    };
    return hull;
  };
  function d3_geom_hullCCW(i1, i2, i3, v) {
    var t, a, b, c, d, e, f;
    t = v[i1];
    a = t[0];
    b = t[1];
    t = v[i2];
    c = t[0];
    d = t[1];
    t = v[i3];
    e = t[0];
    f = t[1];
    return (f - b) * (c - a) - (d - b) * (e - a) > 0;
  }
  d3.geom.polygon = function(coordinates) {
    d3_subclass(coordinates, d3_geom_polygonPrototype);
    return coordinates;
  };
  var d3_geom_polygonPrototype = d3.geom.polygon.prototype = [];
  d3_geom_polygonPrototype.area = function() {
    var i = -1, n = this.length, a, b = this[n - 1], area = 0;
    while (++i < n) {
      a = b;
      b = this[i];
      area += a[1] * b[0] - a[0] * b[1];
    }
    return area * .5;
  };
  d3_geom_polygonPrototype.centroid = function(k) {
    var i = -1, n = this.length, x = 0, y = 0, a, b = this[n - 1], c;
    if (!arguments.length) k = -1 / (6 * this.area());
    while (++i < n) {
      a = b;
      b = this[i];
      c = a[0] * b[1] - b[0] * a[1];
      x += (a[0] + b[0]) * c;
      y += (a[1] + b[1]) * c;
    }
    return [ x * k, y * k ];
  };
  d3_geom_polygonPrototype.clip = function(subject) {
    var input, closed = d3_geom_polygonClosed(subject), i = -1, n = this.length - d3_geom_polygonClosed(this), j, m, a = this[n - 1], b, c, d;
    while (++i < n) {
      input = subject.slice();
      subject.length = 0;
      b = this[i];
      c = input[(m = input.length - closed) - 1];
      j = -1;
      while (++j < m) {
        d = input[j];
        if (d3_geom_polygonInside(d, a, b)) {
          if (!d3_geom_polygonInside(c, a, b)) {
            subject.push(d3_geom_polygonIntersect(c, d, a, b));
          }
          subject.push(d);
        } else if (d3_geom_polygonInside(c, a, b)) {
          subject.push(d3_geom_polygonIntersect(c, d, a, b));
        }
        c = d;
      }
      if (closed) subject.push(subject[0]);
      a = b;
    }
    return subject;
  };
  function d3_geom_polygonInside(p, a, b) {
    return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
  }
  function d3_geom_polygonIntersect(c, d, a, b) {
    var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3, y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3, ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
    return [ x1 + ua * x21, y1 + ua * y21 ];
  }
  function d3_geom_polygonClosed(coordinates) {
    var a = coordinates[0], b = coordinates[coordinates.length - 1];
    return !(a[0] - b[0] || a[1] - b[1]);
  }
  d3.geom.delaunay = function(vertices) {
    var edges = vertices.map(function() {
      return [];
    }), triangles = [];
    d3_geom_voronoiTessellate(vertices, function(e) {
      edges[e.region.l.index].push(vertices[e.region.r.index]);
    });
    edges.forEach(function(edge, i) {
      var v = vertices[i], cx = v[0], cy = v[1];
      edge.forEach(function(v) {
        v.angle = Math.atan2(v[0] - cx, v[1] - cy);
      });
      edge.sort(function(a, b) {
        return a.angle - b.angle;
      });
      for (var j = 0, m = edge.length - 1; j < m; j++) {
        triangles.push([ v, edge[j], edge[j + 1] ]);
      }
    });
    return triangles;
  };
  d3.geom.voronoi = function(points) {
    var x = d3_svg_lineX, y = d3_svg_lineY, clipPolygon = null;
    if (arguments.length) return voronoi(points);
    function voronoi(data) {
      var points, polygons = data.map(function() {
        return [];
      }), fx = d3_functor(x), fy = d3_functor(y), d, i, n = data.length, Z = 1e6;
      if (fx === d3_svg_lineX && fy === d3_svg_lineY) points = data; else for (points = new Array(n), 
      i = 0; i < n; ++i) {
        points[i] = [ +fx.call(this, d = data[i], i), +fy.call(this, d, i) ];
      }
      d3_geom_voronoiTessellate(points, function(e) {
        var s1, s2, x1, x2, y1, y2;
        if (e.a === 1 && e.b >= 0) {
          s1 = e.ep.r;
          s2 = e.ep.l;
        } else {
          s1 = e.ep.l;
          s2 = e.ep.r;
        }
        if (e.a === 1) {
          y1 = s1 ? s1.y : -Z;
          x1 = e.c - e.b * y1;
          y2 = s2 ? s2.y : Z;
          x2 = e.c - e.b * y2;
        } else {
          x1 = s1 ? s1.x : -Z;
          y1 = e.c - e.a * x1;
          x2 = s2 ? s2.x : Z;
          y2 = e.c - e.a * x2;
        }
        var v1 = [ x1, y1 ], v2 = [ x2, y2 ];
        polygons[e.region.l.index].push(v1, v2);
        polygons[e.region.r.index].push(v1, v2);
      });
      polygons = polygons.map(function(polygon, i) {
        var cx = points[i][0], cy = points[i][1], angle = polygon.map(function(v) {
          return Math.atan2(v[0] - cx, v[1] - cy);
        }), order = d3.range(polygon.length).sort(function(a, b) {
          return angle[a] - angle[b];
        });
        return order.filter(function(d, i) {
          return !i || angle[d] - angle[order[i - 1]] > ε;
        }).map(function(d) {
          return polygon[d];
        });
      });
      polygons.forEach(function(polygon, i) {
        var n = polygon.length;
        if (!n) return polygon.push([ -Z, -Z ], [ -Z, Z ], [ Z, Z ], [ Z, -Z ]);
        if (n > 2) return;
        var p0 = points[i], p1 = polygon[0], p2 = polygon[1], x0 = p0[0], y0 = p0[1], x1 = p1[0], y1 = p1[1], x2 = p2[0], y2 = p2[1], dx = Math.abs(x2 - x1), dy = y2 - y1;
        if (Math.abs(dy) < ε) {
          var y = y0 < y1 ? -Z : Z;
          polygon.push([ -Z, y ], [ Z, y ]);
        } else if (dx < ε) {
          var x = x0 < x1 ? -Z : Z;
          polygon.push([ x, -Z ], [ x, Z ]);
        } else {
          var y = (x2 - x1) * (y1 - y0) < (x1 - x0) * (y2 - y1) ? Z : -Z, z = Math.abs(dy) - dx;
          if (Math.abs(z) < ε) {
            polygon.push([ dy < 0 ? y : -y, y ]);
          } else {
            if (z > 0) y *= -1;
            polygon.push([ -Z, y ], [ Z, y ]);
          }
        }
      });
      if (clipPolygon) for (i = 0; i < n; ++i) clipPolygon.clip(polygons[i]);
      for (i = 0; i < n; ++i) polygons[i].point = data[i];
      return polygons;
    }
    voronoi.x = function(_) {
      return arguments.length ? (x = _, voronoi) : x;
    };
    voronoi.y = function(_) {
      return arguments.length ? (y = _, voronoi) : y;
    };
    voronoi.clipExtent = function(_) {
      if (!arguments.length) return clipPolygon && [ clipPolygon[0], clipPolygon[2] ];
      if (_ == null) clipPolygon = null; else {
        var x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], y2 = +_[1][1];
        clipPolygon = d3.geom.polygon([ [ x1, y1 ], [ x1, y2 ], [ x2, y2 ], [ x2, y1 ] ]);
      }
      return voronoi;
    };
    voronoi.size = function(_) {
      if (!arguments.length) return clipPolygon && clipPolygon[2];
      return voronoi.clipExtent(_ && [ [ 0, 0 ], _ ]);
    };
    voronoi.links = function(data) {
      var points, graph = data.map(function() {
        return [];
      }), links = [], fx = d3_functor(x), fy = d3_functor(y), d, i, n = data.length;
      if (fx === d3_svg_lineX && fy === d3_svg_lineY) points = data; else for (points = new Array(n), 
      i = 0; i < n; ++i) {
        points[i] = [ +fx.call(this, d = data[i], i), +fy.call(this, d, i) ];
      }
      d3_geom_voronoiTessellate(points, function(e) {
        var l = e.region.l.index, r = e.region.r.index;
        if (graph[l][r]) return;
        graph[l][r] = graph[r][l] = true;
        links.push({
          source: data[l],
          target: data[r]
        });
      });
      return links;
    };
    voronoi.triangles = function(data) {
      if (x === d3_svg_lineX && y === d3_svg_lineY) return d3.geom.delaunay(data);
      var points = new Array(n), fx = d3_functor(x), fy = d3_functor(y), d, i = -1, n = data.length;
      while (++i < n) {
        (points[i] = [ +fx.call(this, d = data[i], i), +fy.call(this, d, i) ]).data = d;
      }
      return d3.geom.delaunay(points).map(function(triangle) {
        return triangle.map(function(point) {
          return point.data;
        });
      });
    };
    return voronoi;
  };
  var d3_geom_voronoiOpposite = {
    l: "r",
    r: "l"
  };
  function d3_geom_voronoiTessellate(points, callback) {
    var Sites = {
      list: points.map(function(v, i) {
        return {
          index: i,
          x: v[0],
          y: v[1]
        };
      }).sort(function(a, b) {
        return a.y < b.y ? -1 : a.y > b.y ? 1 : a.x < b.x ? -1 : a.x > b.x ? 1 : 0;
      }),
      bottomSite: null
    };
    var EdgeList = {
      list: [],
      leftEnd: null,
      rightEnd: null,
      init: function() {
        EdgeList.leftEnd = EdgeList.createHalfEdge(null, "l");
        EdgeList.rightEnd = EdgeList.createHalfEdge(null, "l");
        EdgeList.leftEnd.r = EdgeList.rightEnd;
        EdgeList.rightEnd.l = EdgeList.leftEnd;
        EdgeList.list.unshift(EdgeList.leftEnd, EdgeList.rightEnd);
      },
      createHalfEdge: function(edge, side) {
        return {
          edge: edge,
          side: side,
          vertex: null,
          l: null,
          r: null
        };
      },
      insert: function(lb, he) {
        he.l = lb;
        he.r = lb.r;
        lb.r.l = he;
        lb.r = he;
      },
      leftBound: function(p) {
        var he = EdgeList.leftEnd;
        do {
          he = he.r;
        } while (he != EdgeList.rightEnd && Geom.rightOf(he, p));
        he = he.l;
        return he;
      },
      del: function(he) {
        he.l.r = he.r;
        he.r.l = he.l;
        he.edge = null;
      },
      right: function(he) {
        return he.r;
      },
      left: function(he) {
        return he.l;
      },
      leftRegion: function(he) {
        return he.edge == null ? Sites.bottomSite : he.edge.region[he.side];
      },
      rightRegion: function(he) {
        return he.edge == null ? Sites.bottomSite : he.edge.region[d3_geom_voronoiOpposite[he.side]];
      }
    };
    var Geom = {
      bisect: function(s1, s2) {
        var newEdge = {
          region: {
            l: s1,
            r: s2
          },
          ep: {
            l: null,
            r: null
          }
        };
        var dx = s2.x - s1.x, dy = s2.y - s1.y, adx = dx > 0 ? dx : -dx, ady = dy > 0 ? dy : -dy;
        newEdge.c = s1.x * dx + s1.y * dy + (dx * dx + dy * dy) * .5;
        if (adx > ady) {
          newEdge.a = 1;
          newEdge.b = dy / dx;
          newEdge.c /= dx;
        } else {
          newEdge.b = 1;
          newEdge.a = dx / dy;
          newEdge.c /= dy;
        }
        return newEdge;
      },
      intersect: function(el1, el2) {
        var e1 = el1.edge, e2 = el2.edge;
        if (!e1 || !e2 || e1.region.r == e2.region.r) {
          return null;
        }
        var d = e1.a * e2.b - e1.b * e2.a;
        if (Math.abs(d) < 1e-10) {
          return null;
        }
        var xint = (e1.c * e2.b - e2.c * e1.b) / d, yint = (e2.c * e1.a - e1.c * e2.a) / d, e1r = e1.region.r, e2r = e2.region.r, el, e;
        if (e1r.y < e2r.y || e1r.y == e2r.y && e1r.x < e2r.x) {
          el = el1;
          e = e1;
        } else {
          el = el2;
          e = e2;
        }
        var rightOfSite = xint >= e.region.r.x;
        if (rightOfSite && el.side === "l" || !rightOfSite && el.side === "r") {
          return null;
        }
        return {
          x: xint,
          y: yint
        };
      },
      rightOf: function(he, p) {
        var e = he.edge, topsite = e.region.r, rightOfSite = p.x > topsite.x;
        if (rightOfSite && he.side === "l") {
          return 1;
        }
        if (!rightOfSite && he.side === "r") {
          return 0;
        }
        if (e.a === 1) {
          var dyp = p.y - topsite.y, dxp = p.x - topsite.x, fast = 0, above = 0;
          if (!rightOfSite && e.b < 0 || rightOfSite && e.b >= 0) {
            above = fast = dyp >= e.b * dxp;
          } else {
            above = p.x + p.y * e.b > e.c;
            if (e.b < 0) {
              above = !above;
            }
            if (!above) {
              fast = 1;
            }
          }
          if (!fast) {
            var dxs = topsite.x - e.region.l.x;
            above = e.b * (dxp * dxp - dyp * dyp) < dxs * dyp * (1 + 2 * dxp / dxs + e.b * e.b);
            if (e.b < 0) {
              above = !above;
            }
          }
        } else {
          var yl = e.c - e.a * p.x, t1 = p.y - yl, t2 = p.x - topsite.x, t3 = yl - topsite.y;
          above = t1 * t1 > t2 * t2 + t3 * t3;
        }
        return he.side === "l" ? above : !above;
      },
      endPoint: function(edge, side, site) {
        edge.ep[side] = site;
        if (!edge.ep[d3_geom_voronoiOpposite[side]]) return;
        callback(edge);
      },
      distance: function(s, t) {
        var dx = s.x - t.x, dy = s.y - t.y;
        return Math.sqrt(dx * dx + dy * dy);
      }
    };
    var EventQueue = {
      list: [],
      insert: function(he, site, offset) {
        he.vertex = site;
        he.ystar = site.y + offset;
        for (var i = 0, list = EventQueue.list, l = list.length; i < l; i++) {
          var next = list[i];
          if (he.ystar > next.ystar || he.ystar == next.ystar && site.x > next.vertex.x) {
            continue;
          } else {
            break;
          }
        }
        list.splice(i, 0, he);
      },
      del: function(he) {
        for (var i = 0, ls = EventQueue.list, l = ls.length; i < l && ls[i] != he; ++i) {}
        ls.splice(i, 1);
      },
      empty: function() {
        return EventQueue.list.length === 0;
      },
      nextEvent: function(he) {
        for (var i = 0, ls = EventQueue.list, l = ls.length; i < l; ++i) {
          if (ls[i] == he) return ls[i + 1];
        }
        return null;
      },
      min: function() {
        var elem = EventQueue.list[0];
        return {
          x: elem.vertex.x,
          y: elem.ystar
        };
      },
      extractMin: function() {
        return EventQueue.list.shift();
      }
    };
    EdgeList.init();
    Sites.bottomSite = Sites.list.shift();
    var newSite = Sites.list.shift(), newIntStar;
    var lbnd, rbnd, llbnd, rrbnd, bisector;
    var bot, top, temp, p, v;
    var e, pm;
    while (true) {
      if (!EventQueue.empty()) {
        newIntStar = EventQueue.min();
      }
      if (newSite && (EventQueue.empty() || newSite.y < newIntStar.y || newSite.y == newIntStar.y && newSite.x < newIntStar.x)) {
        lbnd = EdgeList.leftBound(newSite);
        rbnd = EdgeList.right(lbnd);
        bot = EdgeList.rightRegion(lbnd);
        e = Geom.bisect(bot, newSite);
        bisector = EdgeList.createHalfEdge(e, "l");
        EdgeList.insert(lbnd, bisector);
        p = Geom.intersect(lbnd, bisector);
        if (p) {
          EventQueue.del(lbnd);
          EventQueue.insert(lbnd, p, Geom.distance(p, newSite));
        }
        lbnd = bisector;
        bisector = EdgeList.createHalfEdge(e, "r");
        EdgeList.insert(lbnd, bisector);
        p = Geom.intersect(bisector, rbnd);
        if (p) {
          EventQueue.insert(bisector, p, Geom.distance(p, newSite));
        }
        newSite = Sites.list.shift();
      } else if (!EventQueue.empty()) {
        lbnd = EventQueue.extractMin();
        llbnd = EdgeList.left(lbnd);
        rbnd = EdgeList.right(lbnd);
        rrbnd = EdgeList.right(rbnd);
        bot = EdgeList.leftRegion(lbnd);
        top = EdgeList.rightRegion(rbnd);
        v = lbnd.vertex;
        Geom.endPoint(lbnd.edge, lbnd.side, v);
        Geom.endPoint(rbnd.edge, rbnd.side, v);
        EdgeList.del(lbnd);
        EventQueue.del(rbnd);
        EdgeList.del(rbnd);
        pm = "l";
        if (bot.y > top.y) {
          temp = bot;
          bot = top;
          top = temp;
          pm = "r";
        }
        e = Geom.bisect(bot, top);
        bisector = EdgeList.createHalfEdge(e, pm);
        EdgeList.insert(llbnd, bisector);
        Geom.endPoint(e, d3_geom_voronoiOpposite[pm], v);
        p = Geom.intersect(llbnd, bisector);
        if (p) {
          EventQueue.del(llbnd);
          EventQueue.insert(llbnd, p, Geom.distance(p, bot));
        }
        p = Geom.intersect(bisector, rrbnd);
        if (p) {
          EventQueue.insert(bisector, p, Geom.distance(p, bot));
        }
      } else {
        break;
      }
    }
    for (lbnd = EdgeList.right(EdgeList.leftEnd); lbnd != EdgeList.rightEnd; lbnd = EdgeList.right(lbnd)) {
      callback(lbnd.edge);
    }
  }
  d3.geom.quadtree = function(points, x1, y1, x2, y2) {
    var x = d3_svg_lineX, y = d3_svg_lineY, compat;
    if (compat = arguments.length) {
      x = d3_geom_quadtreeCompatX;
      y = d3_geom_quadtreeCompatY;
      if (compat === 3) {
        y2 = y1;
        x2 = x1;
        y1 = x1 = 0;
      }
      return quadtree(points);
    }
    function quadtree(data) {
      var d, fx = d3_functor(x), fy = d3_functor(y), xs, ys, i, n, x1_, y1_, x2_, y2_;
      if (x1 != null) {
        x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
      } else {
        x2_ = y2_ = -(x1_ = y1_ = Infinity);
        xs = [], ys = [];
        n = data.length;
        if (compat) for (i = 0; i < n; ++i) {
          d = data[i];
          if (d.x < x1_) x1_ = d.x;
          if (d.y < y1_) y1_ = d.y;
          if (d.x > x2_) x2_ = d.x;
          if (d.y > y2_) y2_ = d.y;
          xs.push(d.x);
          ys.push(d.y);
        } else for (i = 0; i < n; ++i) {
          var x_ = +fx(d = data[i], i), y_ = +fy(d, i);
          if (x_ < x1_) x1_ = x_;
          if (y_ < y1_) y1_ = y_;
          if (x_ > x2_) x2_ = x_;
          if (y_ > y2_) y2_ = y_;
          xs.push(x_);
          ys.push(y_);
        }
      }
      var dx = x2_ - x1_, dy = y2_ - y1_;
      if (dx > dy) y2_ = y1_ + dx; else x2_ = x1_ + dy;
      function insert(n, d, x, y, x1, y1, x2, y2) {
        if (isNaN(x) || isNaN(y)) return;
        if (n.leaf) {
          var nx = n.x, ny = n.y;
          if (nx != null) {
            if (Math.abs(nx - x) + Math.abs(ny - y) < .01) {
              insertChild(n, d, x, y, x1, y1, x2, y2);
            } else {
              var nPoint = n.point;
              n.x = n.y = n.point = null;
              insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);
              insertChild(n, d, x, y, x1, y1, x2, y2);
            }
          } else {
            n.x = x, n.y = y, n.point = d;
          }
        } else {
          insertChild(n, d, x, y, x1, y1, x2, y2);
        }
      }
      function insertChild(n, d, x, y, x1, y1, x2, y2) {
        var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, right = x >= sx, bottom = y >= sy, i = (bottom << 1) + right;
        n.leaf = false;
        n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
        if (right) x1 = sx; else x2 = sx;
        if (bottom) y1 = sy; else y2 = sy;
        insert(n, d, x, y, x1, y1, x2, y2);
      }
      var root = d3_geom_quadtreeNode();
      root.add = function(d) {
        insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_);
      };
      root.visit = function(f) {
        d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);
      };
      i = -1;
      if (x1 == null) {
        while (++i < n) {
          insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
        }
        --i;
      } else data.forEach(root.add);
      xs = ys = data = d = null;
      return root;
    }
    quadtree.x = function(_) {
      return arguments.length ? (x = _, quadtree) : x;
    };
    quadtree.y = function(_) {
      return arguments.length ? (y = _, quadtree) : y;
    };
    quadtree.extent = function(_) {
      if (!arguments.length) return x1 == null ? null : [ [ x1, y1 ], [ x2, y2 ] ];
      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], 
      y2 = +_[1][1];
      return quadtree;
    };
    quadtree.size = function(_) {
      if (!arguments.length) return x1 == null ? null : [ x2 - x1, y2 - y1 ];
      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = y1 = 0, x2 = +_[0], y2 = +_[1];
      return quadtree;
    };
    return quadtree;
  };
  function d3_geom_quadtreeCompatX(d) {
    return d.x;
  }
  function d3_geom_quadtreeCompatY(d) {
    return d.y;
  }
  function d3_geom_quadtreeNode() {
    return {
      leaf: true,
      nodes: [],
      point: null,
      x: null,
      y: null
    };
  }
  function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
    if (!f(node, x1, y1, x2, y2)) {
      var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, children = node.nodes;
      if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
      if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
      if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
      if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
    }
  }
  d3.interpolateRgb = d3_interpolateRgb;
  function d3_interpolateRgb(a, b) {
    a = d3.rgb(a);
    b = d3.rgb(b);
    var ar = a.r, ag = a.g, ab = a.b, br = b.r - ar, bg = b.g - ag, bb = b.b - ab;
    return function(t) {
      return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
    };
  }
  d3.interpolateObject = d3_interpolateObject;
  function d3_interpolateObject(a, b) {
    var i = {}, c = {}, k;
    for (k in a) {
      if (k in b) {
        i[k] = d3_interpolate(a[k], b[k]);
      } else {
        c[k] = a[k];
      }
    }
    for (k in b) {
      if (!(k in a)) {
        c[k] = b[k];
      }
    }
    return function(t) {
      for (k in i) c[k] = i[k](t);
      return c;
    };
  }
  d3.interpolateNumber = d3_interpolateNumber;
  function d3_interpolateNumber(a, b) {
    b -= a = +a;
    return function(t) {
      return a + b * t;
    };
  }
  d3.interpolateString = d3_interpolateString;
  function d3_interpolateString(a, b) {
    var m, i, j, s0 = 0, s1 = 0, s = [], q = [], n, o;
    a = a + "", b = b + "";
    d3_interpolate_number.lastIndex = 0;
    for (i = 0; m = d3_interpolate_number.exec(b); ++i) {
      if (m.index) s.push(b.substring(s0, s1 = m.index));
      q.push({
        i: s.length,
        x: m[0]
      });
      s.push(null);
      s0 = d3_interpolate_number.lastIndex;
    }
    if (s0 < b.length) s.push(b.substring(s0));
    for (i = 0, n = q.length; (m = d3_interpolate_number.exec(a)) && i < n; ++i) {
      o = q[i];
      if (o.x == m[0]) {
        if (o.i) {
          if (s[o.i + 1] == null) {
            s[o.i - 1] += o.x;
            s.splice(o.i, 1);
            for (j = i + 1; j < n; ++j) q[j].i--;
          } else {
            s[o.i - 1] += o.x + s[o.i + 1];
            s.splice(o.i, 2);
            for (j = i + 1; j < n; ++j) q[j].i -= 2;
          }
        } else {
          if (s[o.i + 1] == null) {
            s[o.i] = o.x;
          } else {
            s[o.i] = o.x + s[o.i + 1];
            s.splice(o.i + 1, 1);
            for (j = i + 1; j < n; ++j) q[j].i--;
          }
        }
        q.splice(i, 1);
        n--;
        i--;
      } else {
        o.x = d3_interpolateNumber(parseFloat(m[0]), parseFloat(o.x));
      }
    }
    while (i < n) {
      o = q.pop();
      if (s[o.i + 1] == null) {
        s[o.i] = o.x;
      } else {
        s[o.i] = o.x + s[o.i + 1];
        s.splice(o.i + 1, 1);
      }
      n--;
    }
    if (s.length === 1) {
      return s[0] == null ? (o = q[0].x, function(t) {
        return o(t) + "";
      }) : function() {
        return b;
      };
    }
    return function(t) {
      for (i = 0; i < n; ++i) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  }
  var d3_interpolate_number = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  d3.interpolate = d3_interpolate;
  function d3_interpolate(a, b) {
    var i = d3.interpolators.length, f;
    while (--i >= 0 && !(f = d3.interpolators[i](a, b))) ;
    return f;
  }
  d3.interpolators = [ function(a, b) {
    var t = typeof b;
    return (t === "string" ? d3_rgb_names.has(b) || /^(#|rgb\(|hsl\()/.test(b) ? d3_interpolateRgb : d3_interpolateString : b instanceof d3_Color ? d3_interpolateRgb : t === "object" ? Array.isArray(b) ? d3_interpolateArray : d3_interpolateObject : d3_interpolateNumber)(a, b);
  } ];
  d3.interpolateArray = d3_interpolateArray;
  function d3_interpolateArray(a, b) {
    var x = [], c = [], na = a.length, nb = b.length, n0 = Math.min(a.length, b.length), i;
    for (i = 0; i < n0; ++i) x.push(d3_interpolate(a[i], b[i]));
    for (;i < na; ++i) c[i] = a[i];
    for (;i < nb; ++i) c[i] = b[i];
    return function(t) {
      for (i = 0; i < n0; ++i) c[i] = x[i](t);
      return c;
    };
  }
  var d3_ease_default = function() {
    return d3_identity;
  };
  var d3_ease = d3.map({
    linear: d3_ease_default,
    poly: d3_ease_poly,
    quad: function() {
      return d3_ease_quad;
    },
    cubic: function() {
      return d3_ease_cubic;
    },
    sin: function() {
      return d3_ease_sin;
    },
    exp: function() {
      return d3_ease_exp;
    },
    circle: function() {
      return d3_ease_circle;
    },
    elastic: d3_ease_elastic,
    back: d3_ease_back,
    bounce: function() {
      return d3_ease_bounce;
    }
  });
  var d3_ease_mode = d3.map({
    "in": d3_identity,
    out: d3_ease_reverse,
    "in-out": d3_ease_reflect,
    "out-in": function(f) {
      return d3_ease_reflect(d3_ease_reverse(f));
    }
  });
  d3.ease = function(name) {
    var i = name.indexOf("-"), t = i >= 0 ? name.substring(0, i) : name, m = i >= 0 ? name.substring(i + 1) : "in";
    t = d3_ease.get(t) || d3_ease_default;
    m = d3_ease_mode.get(m) || d3_identity;
    return d3_ease_clamp(m(t.apply(null, Array.prototype.slice.call(arguments, 1))));
  };
  function d3_ease_clamp(f) {
    return function(t) {
      return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
    };
  }
  function d3_ease_reverse(f) {
    return function(t) {
      return 1 - f(1 - t);
    };
  }
  function d3_ease_reflect(f) {
    return function(t) {
      return .5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t));
    };
  }
  function d3_ease_quad(t) {
    return t * t;
  }
  function d3_ease_cubic(t) {
    return t * t * t;
  }
  function d3_ease_cubicInOut(t) {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    var t2 = t * t, t3 = t2 * t;
    return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
  }
  function d3_ease_poly(e) {
    return function(t) {
      return Math.pow(t, e);
    };
  }
  function d3_ease_sin(t) {
    return 1 - Math.cos(t * π / 2);
  }
  function d3_ease_exp(t) {
    return Math.pow(2, 10 * (t - 1));
  }
  function d3_ease_circle(t) {
    return 1 - Math.sqrt(1 - t * t);
  }
  function d3_ease_elastic(a, p) {
    var s;
    if (arguments.length < 2) p = .45;
    if (arguments.length) s = p / (2 * π) * Math.asin(1 / a); else a = 1, s = p / 4;
    return function(t) {
      return 1 + a * Math.pow(2, 10 * -t) * Math.sin((t - s) * 2 * π / p);
    };
  }
  function d3_ease_back(s) {
    if (!s) s = 1.70158;
    return function(t) {
      return t * t * ((s + 1) * t - s);
    };
  }
  function d3_ease_bounce(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
  }
  d3.interpolateHcl = d3_interpolateHcl;
  function d3_interpolateHcl(a, b) {
    a = d3.hcl(a);
    b = d3.hcl(b);
    var ah = a.h, ac = a.c, al = a.l, bh = b.h - ah, bc = b.c - ac, bl = b.l - al;
    if (isNaN(bc)) bc = 0, ac = isNaN(ac) ? b.c : ac;
    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
    return function(t) {
      return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
    };
  }
  d3.interpolateHsl = d3_interpolateHsl;
  function d3_interpolateHsl(a, b) {
    a = d3.hsl(a);
    b = d3.hsl(b);
    var ah = a.h, as = a.s, al = a.l, bh = b.h - ah, bs = b.s - as, bl = b.l - al;
    if (isNaN(bs)) bs = 0, as = isNaN(as) ? b.s : as;
    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
    return function(t) {
      return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + "";
    };
  }
  d3.interpolateLab = d3_interpolateLab;
  function d3_interpolateLab(a, b) {
    a = d3.lab(a);
    b = d3.lab(b);
    var al = a.l, aa = a.a, ab = a.b, bl = b.l - al, ba = b.a - aa, bb = b.b - ab;
    return function(t) {
      return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
    };
  }
  d3.interpolateRound = d3_interpolateRound;
  function d3_interpolateRound(a, b) {
    b -= a;
    return function(t) {
      return Math.round(a + b * t);
    };
  }
  d3.transform = function(string) {
    var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
    return (d3.transform = function(string) {
      if (string != null) {
        g.setAttribute("transform", string);
        var t = g.transform.baseVal.consolidate();
      }
      return new d3_transform(t ? t.matrix : d3_transformIdentity);
    })(string);
  };
  function d3_transform(m) {
    var r0 = [ m.a, m.b ], r1 = [ m.c, m.d ], kx = d3_transformNormalize(r0), kz = d3_transformDot(r0, r1), ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
    if (r0[0] * r1[1] < r1[0] * r0[1]) {
      r0[0] *= -1;
      r0[1] *= -1;
      kx *= -1;
      kz *= -1;
    }
    this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
    this.translate = [ m.e, m.f ];
    this.scale = [ kx, ky ];
    this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
  }
  d3_transform.prototype.toString = function() {
    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
  };
  function d3_transformDot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
  }
  function d3_transformNormalize(a) {
    var k = Math.sqrt(d3_transformDot(a, a));
    if (k) {
      a[0] /= k;
      a[1] /= k;
    }
    return k;
  }
  function d3_transformCombine(a, b, k) {
    a[0] += k * b[0];
    a[1] += k * b[1];
    return a;
  }
  var d3_transformIdentity = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0
  };
  d3.interpolateTransform = d3_interpolateTransform;
  function d3_interpolateTransform(a, b) {
    var s = [], q = [], n, A = d3.transform(a), B = d3.transform(b), ta = A.translate, tb = B.translate, ra = A.rotate, rb = B.rotate, wa = A.skew, wb = B.skew, ka = A.scale, kb = B.scale;
    if (ta[0] != tb[0] || ta[1] != tb[1]) {
      s.push("translate(", null, ",", null, ")");
      q.push({
        i: 1,
        x: d3_interpolateNumber(ta[0], tb[0])
      }, {
        i: 3,
        x: d3_interpolateNumber(ta[1], tb[1])
      });
    } else if (tb[0] || tb[1]) {
      s.push("translate(" + tb + ")");
    } else {
      s.push("");
    }
    if (ra != rb) {
      if (ra - rb > 180) rb += 360; else if (rb - ra > 180) ra += 360;
      q.push({
        i: s.push(s.pop() + "rotate(", null, ")") - 2,
        x: d3_interpolateNumber(ra, rb)
      });
    } else if (rb) {
      s.push(s.pop() + "rotate(" + rb + ")");
    }
    if (wa != wb) {
      q.push({
        i: s.push(s.pop() + "skewX(", null, ")") - 2,
        x: d3_interpolateNumber(wa, wb)
      });
    } else if (wb) {
      s.push(s.pop() + "skewX(" + wb + ")");
    }
    if (ka[0] != kb[0] || ka[1] != kb[1]) {
      n = s.push(s.pop() + "scale(", null, ",", null, ")");
      q.push({
        i: n - 4,
        x: d3_interpolateNumber(ka[0], kb[0])
      }, {
        i: n - 2,
        x: d3_interpolateNumber(ka[1], kb[1])
      });
    } else if (kb[0] != 1 || kb[1] != 1) {
      s.push(s.pop() + "scale(" + kb + ")");
    }
    n = q.length;
    return function(t) {
      var i = -1, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  }
  function d3_uninterpolateNumber(a, b) {
    b = b - (a = +a) ? 1 / (b - a) : 0;
    return function(x) {
      return (x - a) * b;
    };
  }
  function d3_uninterpolateClamp(a, b) {
    b = b - (a = +a) ? 1 / (b - a) : 0;
    return function(x) {
      return Math.max(0, Math.min(1, (x - a) * b));
    };
  }
  d3.layout = {};
  d3.layout.bundle = function() {
    return function(links) {
      var paths = [], i = -1, n = links.length;
      while (++i < n) paths.push(d3_layout_bundlePath(links[i]));
      return paths;
    };
  };
  function d3_layout_bundlePath(link) {
    var start = link.source, end = link.target, lca = d3_layout_bundleLeastCommonAncestor(start, end), points = [ start ];
    while (start !== lca) {
      start = start.parent;
      points.push(start);
    }
    var k = points.length;
    while (end !== lca) {
      points.splice(k, 0, end);
      end = end.parent;
    }
    return points;
  }
  function d3_layout_bundleAncestors(node) {
    var ancestors = [], parent = node.parent;
    while (parent != null) {
      ancestors.push(node);
      node = parent;
      parent = parent.parent;
    }
    ancestors.push(node);
    return ancestors;
  }
  function d3_layout_bundleLeastCommonAncestor(a, b) {
    if (a === b) return a;
    var aNodes = d3_layout_bundleAncestors(a), bNodes = d3_layout_bundleAncestors(b), aNode = aNodes.pop(), bNode = bNodes.pop(), sharedNode = null;
    while (aNode === bNode) {
      sharedNode = aNode;
      aNode = aNodes.pop();
      bNode = bNodes.pop();
    }
    return sharedNode;
  }
  d3.layout.chord = function() {
    var chord = {}, chords, groups, matrix, n, padding = 0, sortGroups, sortSubgroups, sortChords;
    function relayout() {
      var subgroups = {}, groupSums = [], groupIndex = d3.range(n), subgroupIndex = [], k, x, x0, i, j;
      chords = [];
      groups = [];
      k = 0, i = -1;
      while (++i < n) {
        x = 0, j = -1;
        while (++j < n) {
          x += matrix[i][j];
        }
        groupSums.push(x);
        subgroupIndex.push(d3.range(n));
        k += x;
      }
      if (sortGroups) {
        groupIndex.sort(function(a, b) {
          return sortGroups(groupSums[a], groupSums[b]);
        });
      }
      if (sortSubgroups) {
        subgroupIndex.forEach(function(d, i) {
          d.sort(function(a, b) {
            return sortSubgroups(matrix[i][a], matrix[i][b]);
          });
        });
      }
      k = (2 * π - padding * n) / k;
      x = 0, i = -1;
      while (++i < n) {
        x0 = x, j = -1;
        while (++j < n) {
          var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x, a1 = x += v * k;
          subgroups[di + "-" + dj] = {
            index: di,
            subindex: dj,
            startAngle: a0,
            endAngle: a1,
            value: v
          };
        }
        groups[di] = {
          index: di,
          startAngle: x0,
          endAngle: x,
          value: (x - x0) / k
        };
        x += padding;
      }
      i = -1;
      while (++i < n) {
        j = i - 1;
        while (++j < n) {
          var source = subgroups[i + "-" + j], target = subgroups[j + "-" + i];
          if (source.value || target.value) {
            chords.push(source.value < target.value ? {
              source: target,
              target: source
            } : {
              source: source,
              target: target
            });
          }
        }
      }
      if (sortChords) resort();
    }
    function resort() {
      chords.sort(function(a, b) {
        return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
      });
    }
    chord.matrix = function(x) {
      if (!arguments.length) return matrix;
      n = (matrix = x) && matrix.length;
      chords = groups = null;
      return chord;
    };
    chord.padding = function(x) {
      if (!arguments.length) return padding;
      padding = x;
      chords = groups = null;
      return chord;
    };
    chord.sortGroups = function(x) {
      if (!arguments.length) return sortGroups;
      sortGroups = x;
      chords = groups = null;
      return chord;
    };
    chord.sortSubgroups = function(x) {
      if (!arguments.length) return sortSubgroups;
      sortSubgroups = x;
      chords = null;
      return chord;
    };
    chord.sortChords = function(x) {
      if (!arguments.length) return sortChords;
      sortChords = x;
      if (chords) resort();
      return chord;
    };
    chord.chords = function() {
      if (!chords) relayout();
      return chords;
    };
    chord.groups = function() {
      if (!groups) relayout();
      return groups;
    };
    return chord;
  };
  d3.layout.force = function() {
    var force = {}, event = d3.dispatch("start", "tick", "end"), size = [ 1, 1 ], drag, alpha, friction = .9, linkDistance = d3_layout_forceLinkDistance, linkStrength = d3_layout_forceLinkStrength, charge = -30, gravity = .1, theta = .8, nodes = [], links = [], distances, strengths, charges;
    function repulse(node) {
      return function(quad, x1, _, x2) {
        if (quad.point !== node) {
          var dx = quad.cx - node.x, dy = quad.cy - node.y, dn = 1 / Math.sqrt(dx * dx + dy * dy);
          if ((x2 - x1) * dn < theta) {
            var k = quad.charge * dn * dn;
            node.px -= dx * k;
            node.py -= dy * k;
            return true;
          }
          if (quad.point && isFinite(dn)) {
            var k = quad.pointCharge * dn * dn;
            node.px -= dx * k;
            node.py -= dy * k;
          }
        }
        return !quad.charge;
      };
    }
    force.tick = function() {
      if ((alpha *= .99) < .005) {
        event.end({
          type: "end",
          alpha: alpha = 0
        });
        return true;
      }
      var n = nodes.length, m = links.length, q, i, o, s, t, l, k, x, y;
      for (i = 0; i < m; ++i) {
        o = links[i];
        s = o.source;
        t = o.target;
        x = t.x - s.x;
        y = t.y - s.y;
        if (l = x * x + y * y) {
          l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
          x *= l;
          y *= l;
          t.x -= x * (k = s.weight / (t.weight + s.weight));
          t.y -= y * k;
          s.x += x * (k = 1 - k);
          s.y += y * k;
        }
      }
      if (k = alpha * gravity) {
        x = size[0] / 2;
        y = size[1] / 2;
        i = -1;
        if (k) while (++i < n) {
          o = nodes[i];
          o.x += (x - o.x) * k;
          o.y += (y - o.y) * k;
        }
      }
      if (charge) {
        d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
        i = -1;
        while (++i < n) {
          if (!(o = nodes[i]).fixed) {
            q.visit(repulse(o));
          }
        }
      }
      i = -1;
      while (++i < n) {
        o = nodes[i];
        if (o.fixed) {
          o.x = o.px;
          o.y = o.py;
        } else {
          o.x -= (o.px - (o.px = o.x)) * friction;
          o.y -= (o.py - (o.py = o.y)) * friction;
        }
      }
      event.tick({
        type: "tick",
        alpha: alpha
      });
    };
    force.nodes = function(x) {
      if (!arguments.length) return nodes;
      nodes = x;
      return force;
    };
    force.links = function(x) {
      if (!arguments.length) return links;
      links = x;
      return force;
    };
    force.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return force;
    };
    force.linkDistance = function(x) {
      if (!arguments.length) return linkDistance;
      linkDistance = typeof x === "function" ? x : +x;
      return force;
    };
    force.distance = force.linkDistance;
    force.linkStrength = function(x) {
      if (!arguments.length) return linkStrength;
      linkStrength = typeof x === "function" ? x : +x;
      return force;
    };
    force.friction = function(x) {
      if (!arguments.length) return friction;
      friction = +x;
      return force;
    };
    force.charge = function(x) {
      if (!arguments.length) return charge;
      charge = typeof x === "function" ? x : +x;
      return force;
    };
    force.gravity = function(x) {
      if (!arguments.length) return gravity;
      gravity = +x;
      return force;
    };
    force.theta = function(x) {
      if (!arguments.length) return theta;
      theta = +x;
      return force;
    };
    force.alpha = function(x) {
      if (!arguments.length) return alpha;
      x = +x;
      if (alpha) {
        if (x > 0) alpha = x; else alpha = 0;
      } else if (x > 0) {
        event.start({
          type: "start",
          alpha: alpha = x
        });
        d3.timer(force.tick);
      }
      return force;
    };
    force.start = function() {
      var i, j, n = nodes.length, m = links.length, w = size[0], h = size[1], neighbors, o;
      for (i = 0; i < n; ++i) {
        (o = nodes[i]).index = i;
        o.weight = 0;
      }
      for (i = 0; i < m; ++i) {
        o = links[i];
        if (typeof o.source == "number") o.source = nodes[o.source];
        if (typeof o.target == "number") o.target = nodes[o.target];
        ++o.source.weight;
        ++o.target.weight;
      }
      for (i = 0; i < n; ++i) {
        o = nodes[i];
        if (isNaN(o.x)) o.x = position("x", w);
        if (isNaN(o.y)) o.y = position("y", h);
        if (isNaN(o.px)) o.px = o.x;
        if (isNaN(o.py)) o.py = o.y;
      }
      distances = [];
      if (typeof linkDistance === "function") for (i = 0; i < m; ++i) distances[i] = +linkDistance.call(this, links[i], i); else for (i = 0; i < m; ++i) distances[i] = linkDistance;
      strengths = [];
      if (typeof linkStrength === "function") for (i = 0; i < m; ++i) strengths[i] = +linkStrength.call(this, links[i], i); else for (i = 0; i < m; ++i) strengths[i] = linkStrength;
      charges = [];
      if (typeof charge === "function") for (i = 0; i < n; ++i) charges[i] = +charge.call(this, nodes[i], i); else for (i = 0; i < n; ++i) charges[i] = charge;
      function position(dimension, size) {
        var neighbors = neighbor(i), j = -1, m = neighbors.length, x;
        while (++j < m) if (!isNaN(x = neighbors[j][dimension])) return x;
        return Math.random() * size;
      }
      function neighbor() {
        if (!neighbors) {
          neighbors = [];
          for (j = 0; j < n; ++j) {
            neighbors[j] = [];
          }
          for (j = 0; j < m; ++j) {
            var o = links[j];
            neighbors[o.source.index].push(o.target);
            neighbors[o.target.index].push(o.source);
          }
        }
        return neighbors[i];
      }
      return force.resume();
    };
    force.resume = function() {
      return force.alpha(.1);
    };
    force.stop = function() {
      return force.alpha(0);
    };
    force.drag = function() {
      if (!drag) drag = d3.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
      if (!arguments.length) return drag;
      this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
    };
    function dragmove(d) {
      d.px = d3.event.x, d.py = d3.event.y;
      force.resume();
    }
    return d3.rebind(force, event, "on");
  };
  function d3_layout_forceDragstart(d) {
    d.fixed |= 2;
  }
  function d3_layout_forceDragend(d) {
    d.fixed &= ~6;
  }
  function d3_layout_forceMouseover(d) {
    d.fixed |= 4;
    d.px = d.x, d.py = d.y;
  }
  function d3_layout_forceMouseout(d) {
    d.fixed &= ~4;
  }
  function d3_layout_forceAccumulate(quad, alpha, charges) {
    var cx = 0, cy = 0;
    quad.charge = 0;
    if (!quad.leaf) {
      var nodes = quad.nodes, n = nodes.length, i = -1, c;
      while (++i < n) {
        c = nodes[i];
        if (c == null) continue;
        d3_layout_forceAccumulate(c, alpha, charges);
        quad.charge += c.charge;
        cx += c.charge * c.cx;
        cy += c.charge * c.cy;
      }
    }
    if (quad.point) {
      if (!quad.leaf) {
        quad.point.x += Math.random() - .5;
        quad.point.y += Math.random() - .5;
      }
      var k = alpha * charges[quad.point.index];
      quad.charge += quad.pointCharge = k;
      cx += k * quad.point.x;
      cy += k * quad.point.y;
    }
    quad.cx = cx / quad.charge;
    quad.cy = cy / quad.charge;
  }
  var d3_layout_forceLinkDistance = 20, d3_layout_forceLinkStrength = 1;
  d3.layout.hierarchy = function() {
    var sort = d3_layout_hierarchySort, children = d3_layout_hierarchyChildren, value = d3_layout_hierarchyValue;
    function recurse(node, depth, nodes) {
      var childs = children.call(hierarchy, node, depth);
      node.depth = depth;
      nodes.push(node);
      if (childs && (n = childs.length)) {
        var i = -1, n, c = node.children = [], v = 0, j = depth + 1, d;
        while (++i < n) {
          d = recurse(childs[i], j, nodes);
          d.parent = node;
          c.push(d);
          v += d.value;
        }
        if (sort) c.sort(sort);
        if (value) node.value = v;
      } else if (value) {
        node.value = +value.call(hierarchy, node, depth) || 0;
      }
      return node;
    }
    function revalue(node, depth) {
      var children = node.children, v = 0;
      if (children && (n = children.length)) {
        var i = -1, n, j = depth + 1;
        while (++i < n) v += revalue(children[i], j);
      } else if (value) {
        v = +value.call(hierarchy, node, depth) || 0;
      }
      if (value) node.value = v;
      return v;
    }
    function hierarchy(d) {
      var nodes = [];
      recurse(d, 0, nodes);
      return nodes;
    }
    hierarchy.sort = function(x) {
      if (!arguments.length) return sort;
      sort = x;
      return hierarchy;
    };
    hierarchy.children = function(x) {
      if (!arguments.length) return children;
      children = x;
      return hierarchy;
    };
    hierarchy.value = function(x) {
      if (!arguments.length) return value;
      value = x;
      return hierarchy;
    };
    hierarchy.revalue = function(root) {
      revalue(root, 0);
      return root;
    };
    return hierarchy;
  };
  function d3_layout_hierarchyRebind(object, hierarchy) {
    d3.rebind(object, hierarchy, "sort", "children", "value");
    object.nodes = object;
    object.links = d3_layout_hierarchyLinks;
    return object;
  }
  function d3_layout_hierarchyChildren(d) {
    return d.children;
  }
  function d3_layout_hierarchyValue(d) {
    return d.value;
  }
  function d3_layout_hierarchySort(a, b) {
    return b.value - a.value;
  }
  function d3_layout_hierarchyLinks(nodes) {
    return d3.merge(nodes.map(function(parent) {
      return (parent.children || []).map(function(child) {
        return {
          source: parent,
          target: child
        };
      });
    }));
  }
  d3.layout.partition = function() {
    var hierarchy = d3.layout.hierarchy(), size = [ 1, 1 ];
    function position(node, x, dx, dy) {
      var children = node.children;
      node.x = x;
      node.y = node.depth * dy;
      node.dx = dx;
      node.dy = dy;
      if (children && (n = children.length)) {
        var i = -1, n, c, d;
        dx = node.value ? dx / node.value : 0;
        while (++i < n) {
          position(c = children[i], x, d = c.value * dx, dy);
          x += d;
        }
      }
    }
    function depth(node) {
      var children = node.children, d = 0;
      if (children && (n = children.length)) {
        var i = -1, n;
        while (++i < n) d = Math.max(d, depth(children[i]));
      }
      return 1 + d;
    }
    function partition(d, i) {
      var nodes = hierarchy.call(this, d, i);
      position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
      return nodes;
    }
    partition.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return partition;
    };
    return d3_layout_hierarchyRebind(partition, hierarchy);
  };
  d3.layout.pie = function() {
    var value = Number, sort = d3_layout_pieSortByValue, startAngle = 0, endAngle = 2 * π;
    function pie(data) {
      var values = data.map(function(d, i) {
        return +value.call(pie, d, i);
      });
      var a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle);
      var k = ((typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - a) / d3.sum(values);
      var index = d3.range(data.length);
      if (sort != null) index.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
        return values[j] - values[i];
      } : function(i, j) {
        return sort(data[i], data[j]);
      });
      var arcs = [];
      index.forEach(function(i) {
        var d;
        arcs[i] = {
          data: data[i],
          value: d = values[i],
          startAngle: a,
          endAngle: a += d * k
        };
      });
      return arcs;
    }
    pie.value = function(x) {
      if (!arguments.length) return value;
      value = x;
      return pie;
    };
    pie.sort = function(x) {
      if (!arguments.length) return sort;
      sort = x;
      return pie;
    };
    pie.startAngle = function(x) {
      if (!arguments.length) return startAngle;
      startAngle = x;
      return pie;
    };
    pie.endAngle = function(x) {
      if (!arguments.length) return endAngle;
      endAngle = x;
      return pie;
    };
    return pie;
  };
  var d3_layout_pieSortByValue = {};
  d3.layout.stack = function() {
    var values = d3_identity, order = d3_layout_stackOrderDefault, offset = d3_layout_stackOffsetZero, out = d3_layout_stackOut, x = d3_layout_stackX, y = d3_layout_stackY;
    function stack(data, index) {
      var series = data.map(function(d, i) {
        return values.call(stack, d, i);
      });
      var points = series.map(function(d) {
        return d.map(function(v, i) {
          return [ x.call(stack, v, i), y.call(stack, v, i) ];
        });
      });
      var orders = order.call(stack, points, index);
      series = d3.permute(series, orders);
      points = d3.permute(points, orders);
      var offsets = offset.call(stack, points, index);
      var n = series.length, m = series[0].length, i, j, o;
      for (j = 0; j < m; ++j) {
        out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
        for (i = 1; i < n; ++i) {
          out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
        }
      }
      return data;
    }
    stack.values = function(x) {
      if (!arguments.length) return values;
      values = x;
      return stack;
    };
    stack.order = function(x) {
      if (!arguments.length) return order;
      order = typeof x === "function" ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
      return stack;
    };
    stack.offset = function(x) {
      if (!arguments.length) return offset;
      offset = typeof x === "function" ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
      return stack;
    };
    stack.x = function(z) {
      if (!arguments.length) return x;
      x = z;
      return stack;
    };
    stack.y = function(z) {
      if (!arguments.length) return y;
      y = z;
      return stack;
    };
    stack.out = function(z) {
      if (!arguments.length) return out;
      out = z;
      return stack;
    };
    return stack;
  };
  function d3_layout_stackX(d) {
    return d.x;
  }
  function d3_layout_stackY(d) {
    return d.y;
  }
  function d3_layout_stackOut(d, y0, y) {
    d.y0 = y0;
    d.y = y;
  }
  var d3_layout_stackOrders = d3.map({
    "inside-out": function(data) {
      var n = data.length, i, j, max = data.map(d3_layout_stackMaxIndex), sums = data.map(d3_layout_stackReduceSum), index = d3.range(n).sort(function(a, b) {
        return max[a] - max[b];
      }), top = 0, bottom = 0, tops = [], bottoms = [];
      for (i = 0; i < n; ++i) {
        j = index[i];
        if (top < bottom) {
          top += sums[j];
          tops.push(j);
        } else {
          bottom += sums[j];
          bottoms.push(j);
        }
      }
      return bottoms.reverse().concat(tops);
    },
    reverse: function(data) {
      return d3.range(data.length).reverse();
    },
    "default": d3_layout_stackOrderDefault
  });
  var d3_layout_stackOffsets = d3.map({
    silhouette: function(data) {
      var n = data.length, m = data[0].length, sums = [], max = 0, i, j, o, y0 = [];
      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
        if (o > max) max = o;
        sums.push(o);
      }
      for (j = 0; j < m; ++j) {
        y0[j] = (max - sums[j]) / 2;
      }
      return y0;
    },
    wiggle: function(data) {
      var n = data.length, x = data[0], m = x.length, i, j, k, s1, s2, s3, dx, o, o0, y0 = [];
      y0[0] = o = o0 = 0;
      for (j = 1; j < m; ++j) {
        for (i = 0, s1 = 0; i < n; ++i) s1 += data[i][j][1];
        for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
          for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
            s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
          }
          s2 += s3 * data[i][j][1];
        }
        y0[j] = o -= s1 ? s2 / s1 * dx : 0;
        if (o < o0) o0 = o;
      }
      for (j = 0; j < m; ++j) y0[j] -= o0;
      return y0;
    },
    expand: function(data) {
      var n = data.length, m = data[0].length, k = 1 / n, i, j, o, y0 = [];
      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
        if (o) for (i = 0; i < n; i++) data[i][j][1] /= o; else for (i = 0; i < n; i++) data[i][j][1] = k;
      }
      for (j = 0; j < m; ++j) y0[j] = 0;
      return y0;
    },
    zero: d3_layout_stackOffsetZero
  });
  function d3_layout_stackOrderDefault(data) {
    return d3.range(data.length);
  }
  function d3_layout_stackOffsetZero(data) {
    var j = -1, m = data[0].length, y0 = [];
    while (++j < m) y0[j] = 0;
    return y0;
  }
  function d3_layout_stackMaxIndex(array) {
    var i = 1, j = 0, v = array[0][1], k, n = array.length;
    for (;i < n; ++i) {
      if ((k = array[i][1]) > v) {
        j = i;
        v = k;
      }
    }
    return j;
  }
  function d3_layout_stackReduceSum(d) {
    return d.reduce(d3_layout_stackSum, 0);
  }
  function d3_layout_stackSum(p, d) {
    return p + d[1];
  }
  d3.layout.histogram = function() {
    var frequency = true, valuer = Number, ranger = d3_layout_histogramRange, binner = d3_layout_histogramBinSturges;
    function histogram(data, i) {
      var bins = [], values = data.map(valuer, this), range = ranger.call(this, values, i), thresholds = binner.call(this, range, values, i), bin, i = -1, n = values.length, m = thresholds.length - 1, k = frequency ? 1 : 1 / n, x;
      while (++i < m) {
        bin = bins[i] = [];
        bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
        bin.y = 0;
      }
      if (m > 0) {
        i = -1;
        while (++i < n) {
          x = values[i];
          if (x >= range[0] && x <= range[1]) {
            bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
            bin.y += k;
            bin.push(data[i]);
          }
        }
      }
      return bins;
    }
    histogram.value = function(x) {
      if (!arguments.length) return valuer;
      valuer = x;
      return histogram;
    };
    histogram.range = function(x) {
      if (!arguments.length) return ranger;
      ranger = d3_functor(x);
      return histogram;
    };
    histogram.bins = function(x) {
      if (!arguments.length) return binner;
      binner = typeof x === "number" ? function(range) {
        return d3_layout_histogramBinFixed(range, x);
      } : d3_functor(x);
      return histogram;
    };
    histogram.frequency = function(x) {
      if (!arguments.length) return frequency;
      frequency = !!x;
      return histogram;
    };
    return histogram;
  };
  function d3_layout_histogramBinSturges(range, values) {
    return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
  }
  function d3_layout_histogramBinFixed(range, n) {
    var x = -1, b = +range[0], m = (range[1] - b) / n, f = [];
    while (++x <= n) f[x] = m * x + b;
    return f;
  }
  function d3_layout_histogramRange(values) {
    return [ d3.min(values), d3.max(values) ];
  }
  d3.layout.tree = function() {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = false;
    function tree(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0];
      function firstWalk(node, previousSibling) {
        var children = node.children, layout = node._tree;
        if (children && (n = children.length)) {
          var n, firstChild = children[0], previousChild, ancestor = firstChild, child, i = -1;
          while (++i < n) {
            child = children[i];
            firstWalk(child, previousChild);
            ancestor = apportion(child, previousChild, ancestor);
            previousChild = child;
          }
          d3_layout_treeShift(node);
          var midpoint = .5 * (firstChild._tree.prelim + child._tree.prelim);
          if (previousSibling) {
            layout.prelim = previousSibling._tree.prelim + separation(node, previousSibling);
            layout.mod = layout.prelim - midpoint;
          } else {
            layout.prelim = midpoint;
          }
        } else {
          if (previousSibling) {
            layout.prelim = previousSibling._tree.prelim + separation(node, previousSibling);
          }
        }
      }
      function secondWalk(node, x) {
        node.x = node._tree.prelim + x;
        var children = node.children;
        if (children && (n = children.length)) {
          var i = -1, n;
          x += node._tree.mod;
          while (++i < n) {
            secondWalk(children[i], x);
          }
        }
      }
      function apportion(node, previousSibling, ancestor) {
        if (previousSibling) {
          var vip = node, vop = node, vim = previousSibling, vom = node.parent.children[0], sip = vip._tree.mod, sop = vop._tree.mod, sim = vim._tree.mod, som = vom._tree.mod, shift;
          while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
            vom = d3_layout_treeLeft(vom);
            vop = d3_layout_treeRight(vop);
            vop._tree.ancestor = node;
            shift = vim._tree.prelim + sim - vip._tree.prelim - sip + separation(vim, vip);
            if (shift > 0) {
              d3_layout_treeMove(d3_layout_treeAncestor(vim, node, ancestor), node, shift);
              sip += shift;
              sop += shift;
            }
            sim += vim._tree.mod;
            sip += vip._tree.mod;
            som += vom._tree.mod;
            sop += vop._tree.mod;
          }
          if (vim && !d3_layout_treeRight(vop)) {
            vop._tree.thread = vim;
            vop._tree.mod += sim - sop;
          }
          if (vip && !d3_layout_treeLeft(vom)) {
            vom._tree.thread = vip;
            vom._tree.mod += sip - som;
            ancestor = node;
          }
        }
        return ancestor;
      }
      d3_layout_treeVisitAfter(root, function(node, previousSibling) {
        node._tree = {
          ancestor: node,
          prelim: 0,
          mod: 0,
          change: 0,
          shift: 0,
          number: previousSibling ? previousSibling._tree.number + 1 : 0
        };
      });
      firstWalk(root);
      secondWalk(root, -root._tree.prelim);
      var left = d3_layout_treeSearch(root, d3_layout_treeLeftmost), right = d3_layout_treeSearch(root, d3_layout_treeRightmost), deep = d3_layout_treeSearch(root, d3_layout_treeDeepest), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2, y1 = deep.depth || 1;
      d3_layout_treeVisitAfter(root, nodeSize ? function(node) {
        node.x *= size[0];
        node.y = node.depth * size[1];
        delete node._tree;
      } : function(node) {
        node.x = (node.x - x0) / (x1 - x0) * size[0];
        node.y = node.depth / y1 * size[1];
        delete node._tree;
      });
      return nodes;
    }
    tree.separation = function(x) {
      if (!arguments.length) return separation;
      separation = x;
      return tree;
    };
    tree.size = function(x) {
      if (!arguments.length) return nodeSize ? null : size;
      nodeSize = (size = x) == null;
      return tree;
    };
    tree.nodeSize = function(x) {
      if (!arguments.length) return nodeSize ? size : null;
      nodeSize = (size = x) != null;
      return tree;
    };
    return d3_layout_hierarchyRebind(tree, hierarchy);
  };
  function d3_layout_treeSeparation(a, b) {
    return a.parent == b.parent ? 1 : 2;
  }
  function d3_layout_treeLeft(node) {
    var children = node.children;
    return children && children.length ? children[0] : node._tree.thread;
  }
  function d3_layout_treeRight(node) {
    var children = node.children, n;
    return children && (n = children.length) ? children[n - 1] : node._tree.thread;
  }
  function d3_layout_treeSearch(node, compare) {
    var children = node.children;
    if (children && (n = children.length)) {
      var child, n, i = -1;
      while (++i < n) {
        if (compare(child = d3_layout_treeSearch(children[i], compare), node) > 0) {
          node = child;
        }
      }
    }
    return node;
  }
  function d3_layout_treeRightmost(a, b) {
    return a.x - b.x;
  }
  function d3_layout_treeLeftmost(a, b) {
    return b.x - a.x;
  }
  function d3_layout_treeDeepest(a, b) {
    return a.depth - b.depth;
  }
  function d3_layout_treeVisitAfter(node, callback) {
    function visit(node, previousSibling) {
      var children = node.children;
      if (children && (n = children.length)) {
        var child, previousChild = null, i = -1, n;
        while (++i < n) {
          child = children[i];
          visit(child, previousChild);
          previousChild = child;
        }
      }
      callback(node, previousSibling);
    }
    visit(node, null);
  }
  function d3_layout_treeShift(node) {
    var shift = 0, change = 0, children = node.children, i = children.length, child;
    while (--i >= 0) {
      child = children[i]._tree;
      child.prelim += shift;
      child.mod += shift;
      shift += child.shift + (change += child.change);
    }
  }
  function d3_layout_treeMove(ancestor, node, shift) {
    ancestor = ancestor._tree;
    node = node._tree;
    var change = shift / (node.number - ancestor.number);
    ancestor.change += change;
    node.change -= change;
    node.shift += shift;
    node.prelim += shift;
    node.mod += shift;
  }
  function d3_layout_treeAncestor(vim, node, ancestor) {
    return vim._tree.ancestor.parent == node.parent ? vim._tree.ancestor : ancestor;
  }
  d3.layout.pack = function() {
    var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort), padding = 0, size = [ 1, 1 ], radius;
    function pack(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0], w = size[0], h = size[1], r = radius == null ? Math.sqrt : typeof radius === "function" ? radius : function() {
        return radius;
      };
      root.x = root.y = 0;
      d3_layout_treeVisitAfter(root, function(d) {
        d.r = +r(d.value);
      });
      d3_layout_treeVisitAfter(root, d3_layout_packSiblings);
      if (padding) {
        var dr = padding * (radius ? 1 : Math.max(2 * root.r / w, 2 * root.r / h)) / 2;
        d3_layout_treeVisitAfter(root, function(d) {
          d.r += dr;
        });
        d3_layout_treeVisitAfter(root, d3_layout_packSiblings);
        d3_layout_treeVisitAfter(root, function(d) {
          d.r -= dr;
        });
      }
      d3_layout_packTransform(root, w / 2, h / 2, radius ? 1 : 1 / Math.max(2 * root.r / w, 2 * root.r / h));
      return nodes;
    }
    pack.size = function(_) {
      if (!arguments.length) return size;
      size = _;
      return pack;
    };
    pack.radius = function(_) {
      if (!arguments.length) return radius;
      radius = _ == null || typeof _ === "function" ? _ : +_;
      return pack;
    };
    pack.padding = function(_) {
      if (!arguments.length) return padding;
      padding = +_;
      return pack;
    };
    return d3_layout_hierarchyRebind(pack, hierarchy);
  };
  function d3_layout_packSort(a, b) {
    return a.value - b.value;
  }
  function d3_layout_packInsert(a, b) {
    var c = a._pack_next;
    a._pack_next = b;
    b._pack_prev = a;
    b._pack_next = c;
    c._pack_prev = b;
  }
  function d3_layout_packSplice(a, b) {
    a._pack_next = b;
    b._pack_prev = a;
  }
  function d3_layout_packIntersects(a, b) {
    var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;
    return .999 * dr * dr > dx * dx + dy * dy;
  }
  function d3_layout_packSiblings(node) {
    if (!(nodes = node.children) || !(n = nodes.length)) return;
    var nodes, xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, a, b, c, i, j, k, n;
    function bound(node) {
      xMin = Math.min(node.x - node.r, xMin);
      xMax = Math.max(node.x + node.r, xMax);
      yMin = Math.min(node.y - node.r, yMin);
      yMax = Math.max(node.y + node.r, yMax);
    }
    nodes.forEach(d3_layout_packLink);
    a = nodes[0];
    a.x = -a.r;
    a.y = 0;
    bound(a);
    if (n > 1) {
      b = nodes[1];
      b.x = b.r;
      b.y = 0;
      bound(b);
      if (n > 2) {
        c = nodes[2];
        d3_layout_packPlace(a, b, c);
        bound(c);
        d3_layout_packInsert(a, c);
        a._pack_prev = c;
        d3_layout_packInsert(c, b);
        b = a._pack_next;
        for (i = 3; i < n; i++) {
          d3_layout_packPlace(a, b, c = nodes[i]);
          var isect = 0, s1 = 1, s2 = 1;
          for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
            if (d3_layout_packIntersects(j, c)) {
              isect = 1;
              break;
            }
          }
          if (isect == 1) {
            for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
              if (d3_layout_packIntersects(k, c)) {
                break;
              }
            }
          }
          if (isect) {
            if (s1 < s2 || s1 == s2 && b.r < a.r) d3_layout_packSplice(a, b = j); else d3_layout_packSplice(a = k, b);
            i--;
          } else {
            d3_layout_packInsert(a, c);
            b = c;
            bound(c);
          }
        }
      }
    }
    var cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cr = 0;
    for (i = 0; i < n; i++) {
      c = nodes[i];
      c.x -= cx;
      c.y -= cy;
      cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
    }
    node.r = cr;
    nodes.forEach(d3_layout_packUnlink);
  }
  function d3_layout_packLink(node) {
    node._pack_next = node._pack_prev = node;
  }
  function d3_layout_packUnlink(node) {
    delete node._pack_next;
    delete node._pack_prev;
  }
  function d3_layout_packTransform(node, x, y, k) {
    var children = node.children;
    node.x = x += k * node.x;
    node.y = y += k * node.y;
    node.r *= k;
    if (children) {
      var i = -1, n = children.length;
      while (++i < n) d3_layout_packTransform(children[i], x, y, k);
    }
  }
  function d3_layout_packPlace(a, b, c) {
    var db = a.r + c.r, dx = b.x - a.x, dy = b.y - a.y;
    if (db && (dx || dy)) {
      var da = b.r + c.r, dc = dx * dx + dy * dy;
      da *= da;
      db *= db;
      var x = .5 + (db - da) / (2 * dc), y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
      c.x = a.x + x * dx + y * dy;
      c.y = a.y + x * dy - y * dx;
    } else {
      c.x = a.x + db;
      c.y = a.y;
    }
  }
  d3.layout.cluster = function() {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = false;
    function cluster(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0], previousNode, x = 0;
      d3_layout_treeVisitAfter(root, function(node) {
        var children = node.children;
        if (children && children.length) {
          node.x = d3_layout_clusterX(children);
          node.y = d3_layout_clusterY(children);
        } else {
          node.x = previousNode ? x += separation(node, previousNode) : 0;
          node.y = 0;
          previousNode = node;
        }
      });
      var left = d3_layout_clusterLeft(root), right = d3_layout_clusterRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
      d3_layout_treeVisitAfter(root, nodeSize ? function(node) {
        node.x = (node.x - root.x) * size[0];
        node.y = (root.y - node.y) * size[1];
      } : function(node) {
        node.x = (node.x - x0) / (x1 - x0) * size[0];
        node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
      });
      return nodes;
    }
    cluster.separation = function(x) {
      if (!arguments.length) return separation;
      separation = x;
      return cluster;
    };
    cluster.size = function(x) {
      if (!arguments.length) return nodeSize ? null : size;
      nodeSize = (size = x) == null;
      return cluster;
    };
    cluster.nodeSize = function(x) {
      if (!arguments.length) return nodeSize ? size : null;
      nodeSize = (size = x) != null;
      return cluster;
    };
    return d3_layout_hierarchyRebind(cluster, hierarchy);
  };
  function d3_layout_clusterY(children) {
    return 1 + d3.max(children, function(child) {
      return child.y;
    });
  }
  function d3_layout_clusterX(children) {
    return children.reduce(function(x, child) {
      return x + child.x;
    }, 0) / children.length;
  }
  function d3_layout_clusterLeft(node) {
    var children = node.children;
    return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
  }
  function d3_layout_clusterRight(node) {
    var children = node.children, n;
    return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
  }
  d3.layout.treemap = function() {
    var hierarchy = d3.layout.hierarchy(), round = Math.round, size = [ 1, 1 ], padding = null, pad = d3_layout_treemapPadNull, sticky = false, stickies, mode = "squarify", ratio = .5 * (1 + Math.sqrt(5));
    function scale(children, k) {
      var i = -1, n = children.length, child, area;
      while (++i < n) {
        area = (child = children[i]).value * (k < 0 ? 0 : k);
        child.area = isNaN(area) || area <= 0 ? 0 : area;
      }
    }
    function squarify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), row = [], remaining = children.slice(), child, best = Infinity, score, u = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy), n;
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while ((n = remaining.length) > 0) {
          row.push(child = remaining[n - 1]);
          row.area += child.area;
          if (mode !== "squarify" || (score = worst(row, u)) <= best) {
            remaining.pop();
            best = score;
          } else {
            row.area -= row.pop().area;
            position(row, u, rect, false);
            u = Math.min(rect.dx, rect.dy);
            row.length = row.area = 0;
            best = Infinity;
          }
        }
        if (row.length) {
          position(row, u, rect, true);
          row.length = row.area = 0;
        }
        children.forEach(squarify);
      }
    }
    function stickify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), remaining = children.slice(), child, row = [];
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while (child = remaining.pop()) {
          row.push(child);
          row.area += child.area;
          if (child.z != null) {
            position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
            row.length = row.area = 0;
          }
        }
        children.forEach(stickify);
      }
    }
    function worst(row, u) {
      var s = row.area, r, rmax = 0, rmin = Infinity, i = -1, n = row.length;
      while (++i < n) {
        if (!(r = row[i].area)) continue;
        if (r < rmin) rmin = r;
        if (r > rmax) rmax = r;
      }
      s *= s;
      u *= u;
      return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
    }
    function position(row, u, rect, flush) {
      var i = -1, n = row.length, x = rect.x, y = rect.y, v = u ? round(row.area / u) : 0, o;
      if (u == rect.dx) {
        if (flush || v > rect.dy) v = rect.dy;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dy = v;
          x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
        }
        o.z = true;
        o.dx += rect.x + rect.dx - x;
        rect.y += v;
        rect.dy -= v;
      } else {
        if (flush || v > rect.dx) v = rect.dx;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dx = v;
          y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
        }
        o.z = false;
        o.dy += rect.y + rect.dy - y;
        rect.x += v;
        rect.dx -= v;
      }
    }
    function treemap(d) {
      var nodes = stickies || hierarchy(d), root = nodes[0];
      root.x = 0;
      root.y = 0;
      root.dx = size[0];
      root.dy = size[1];
      if (stickies) hierarchy.revalue(root);
      scale([ root ], root.dx * root.dy / root.value);
      (stickies ? stickify : squarify)(root);
      if (sticky) stickies = nodes;
      return nodes;
    }
    treemap.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return treemap;
    };
    treemap.padding = function(x) {
      if (!arguments.length) return padding;
      function padFunction(node) {
        var p = x.call(treemap, node, node.depth);
        return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [ p, p, p, p ] : p);
      }
      function padConstant(node) {
        return d3_layout_treemapPad(node, x);
      }
      var type;
      pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === "function" ? padFunction : type === "number" ? (x = [ x, x, x, x ], 
      padConstant) : padConstant;
      return treemap;
    };
    treemap.round = function(x) {
      if (!arguments.length) return round != Number;
      round = x ? Math.round : Number;
      return treemap;
    };
    treemap.sticky = function(x) {
      if (!arguments.length) return sticky;
      sticky = x;
      stickies = null;
      return treemap;
    };
    treemap.ratio = function(x) {
      if (!arguments.length) return ratio;
      ratio = x;
      return treemap;
    };
    treemap.mode = function(x) {
      if (!arguments.length) return mode;
      mode = x + "";
      return treemap;
    };
    return d3_layout_hierarchyRebind(treemap, hierarchy);
  };
  function d3_layout_treemapPadNull(node) {
    return {
      x: node.x,
      y: node.y,
      dx: node.dx,
      dy: node.dy
    };
  }
  function d3_layout_treemapPad(node, padding) {
    var x = node.x + padding[3], y = node.y + padding[0], dx = node.dx - padding[1] - padding[3], dy = node.dy - padding[0] - padding[2];
    if (dx < 0) {
      x += dx / 2;
      dx = 0;
    }
    if (dy < 0) {
      y += dy / 2;
      dy = 0;
    }
    return {
      x: x,
      y: y,
      dx: dx,
      dy: dy
    };
  }
  d3.random = {
    normal: function(µ, σ) {
      var n = arguments.length;
      if (n < 2) σ = 1;
      if (n < 1) µ = 0;
      return function() {
        var x, y, r;
        do {
          x = Math.random() * 2 - 1;
          y = Math.random() * 2 - 1;
          r = x * x + y * y;
        } while (!r || r > 1);
        return µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);
      };
    },
    logNormal: function() {
      var random = d3.random.normal.apply(d3, arguments);
      return function() {
        return Math.exp(random());
      };
    },
    irwinHall: function(m) {
      return function() {
        for (var s = 0, j = 0; j < m; j++) s += Math.random();
        return s / m;
      };
    }
  };
  d3.scale = {};
  function d3_scaleExtent(domain) {
    var start = domain[0], stop = domain[domain.length - 1];
    return start < stop ? [ start, stop ] : [ stop, start ];
  }
  function d3_scaleRange(scale) {
    return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
  }
  function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
    var u = uninterpolate(domain[0], domain[1]), i = interpolate(range[0], range[1]);
    return function(x) {
      return i(u(x));
    };
  }
  function d3_scale_nice(domain, nice) {
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], dx;
    if (x1 < x0) {
      dx = i0, i0 = i1, i1 = dx;
      dx = x0, x0 = x1, x1 = dx;
    }
    domain[i0] = nice.floor(x0);
    domain[i1] = nice.ceil(x1);
    return domain;
  }
  function d3_scale_niceStep(step) {
    return step ? {
      floor: function(x) {
        return Math.floor(x / step) * step;
      },
      ceil: function(x) {
        return Math.ceil(x / step) * step;
      }
    } : d3_scale_niceIdentity;
  }
  var d3_scale_niceIdentity = {
    floor: d3_identity,
    ceil: d3_identity
  };
  function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
    var u = [], i = [], j = 0, k = Math.min(domain.length, range.length) - 1;
    if (domain[k] < domain[0]) {
      domain = domain.slice().reverse();
      range = range.slice().reverse();
    }
    while (++j <= k) {
      u.push(uninterpolate(domain[j - 1], domain[j]));
      i.push(interpolate(range[j - 1], range[j]));
    }
    return function(x) {
      var j = d3.bisect(domain, x, 1, k) - 1;
      return i[j](u[j](x));
    };
  }
  d3.scale.linear = function() {
    return d3_scale_linear([ 0, 1 ], [ 0, 1 ], d3_interpolate, false);
  };
  function d3_scale_linear(domain, range, interpolate, clamp) {
    var output, input;
    function rescale() {
      var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear, uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
      output = linear(domain, range, uninterpolate, interpolate);
      input = linear(range, domain, uninterpolate, d3_interpolate);
      return scale;
    }
    function scale(x) {
      return output(x);
    }
    scale.invert = function(y) {
      return input(y);
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(Number);
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.rangeRound = function(x) {
      return scale.range(x).interpolate(d3_interpolateRound);
    };
    scale.clamp = function(x) {
      if (!arguments.length) return clamp;
      clamp = x;
      return rescale();
    };
    scale.interpolate = function(x) {
      if (!arguments.length) return interpolate;
      interpolate = x;
      return rescale();
    };
    scale.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    scale.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    scale.nice = function(m) {
      d3_scale_linearNice(domain, m);
      return rescale();
    };
    scale.copy = function() {
      return d3_scale_linear(domain, range, interpolate, clamp);
    };
    return rescale();
  }
  function d3_scale_linearRebind(scale, linear) {
    return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
  }
  function d3_scale_linearNice(domain, m) {
    return d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
  }
  function d3_scale_linearTickRange(domain, m) {
    if (m == null) m = 10;
    var extent = d3_scaleExtent(domain), span = extent[1] - extent[0], step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)), err = m / span * step;
    if (err <= .15) step *= 10; else if (err <= .35) step *= 5; else if (err <= .75) step *= 2;
    extent[0] = Math.ceil(extent[0] / step) * step;
    extent[1] = Math.floor(extent[1] / step) * step + step * .5;
    extent[2] = step;
    return extent;
  }
  function d3_scale_linearTicks(domain, m) {
    return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
  }
  function d3_scale_linearTickFormat(domain, m, format) {
    var precision = -Math.floor(Math.log(d3_scale_linearTickRange(domain, m)[2]) / Math.LN10 + .01);
    return d3.format(format ? format.replace(d3_format_re, function(a, b, c, d, e, f, g, h, i, j) {
      return [ b, c, d, e, f, g, h, i || "." + (precision - (j === "%") * 2), j ].join("");
    }) : ",." + precision + "f");
  }
  d3.scale.log = function() {
    return d3_scale_log(d3.scale.linear().domain([ 0, 1 ]), 10, true, [ 1, 10 ]);
  };
  function d3_scale_log(linear, base, positive, domain) {
    function log(x) {
      return (positive ? Math.log(x < 0 ? 0 : x) : -Math.log(x > 0 ? 0 : -x)) / Math.log(base);
    }
    function pow(x) {
      return positive ? Math.pow(base, x) : -Math.pow(base, -x);
    }
    function scale(x) {
      return linear(log(x));
    }
    scale.invert = function(x) {
      return pow(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      positive = x[0] >= 0;
      linear.domain((domain = x.map(Number)).map(log));
      return scale;
    };
    scale.base = function(_) {
      if (!arguments.length) return base;
      base = +_;
      linear.domain(domain.map(log));
      return scale;
    };
    scale.nice = function() {
      var niced = d3_scale_nice(domain.map(log), positive ? Math : d3_scale_logNiceNegative);
      linear.domain(niced);
      domain = niced.map(pow);
      return scale;
    };
    scale.ticks = function() {
      var extent = d3_scaleExtent(domain), ticks = [], u = extent[0], v = extent[1], i = Math.floor(log(u)), j = Math.ceil(log(v)), n = base % 1 ? 2 : base;
      if (isFinite(j - i)) {
        if (positive) {
          for (;i < j; i++) for (var k = 1; k < n; k++) ticks.push(pow(i) * k);
          ticks.push(pow(i));
        } else {
          ticks.push(pow(i));
          for (;i++ < j; ) for (var k = n - 1; k > 0; k--) ticks.push(pow(i) * k);
        }
        for (i = 0; ticks[i] < u; i++) {}
        for (j = ticks.length; ticks[j - 1] > v; j--) {}
        ticks = ticks.slice(i, j);
      }
      return ticks;
    };
    scale.tickFormat = function(n, format) {
      if (!arguments.length) return d3_scale_logFormat;
      if (arguments.length < 2) format = d3_scale_logFormat; else if (typeof format !== "function") format = d3.format(format);
      var k = Math.max(.1, n / scale.ticks().length), f = positive ? (e = 1e-12, Math.ceil) : (e = -1e-12, 
      Math.floor), e;
      return function(d) {
        return d / pow(f(log(d) + e)) <= k ? format(d) : "";
      };
    };
    scale.copy = function() {
      return d3_scale_log(linear.copy(), base, positive, domain);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  var d3_scale_logFormat = d3.format(".0e"), d3_scale_logNiceNegative = {
    floor: function(x) {
      return -Math.ceil(-x);
    },
    ceil: function(x) {
      return -Math.floor(-x);
    }
  };
  d3.scale.pow = function() {
    return d3_scale_pow(d3.scale.linear(), 1, [ 0, 1 ]);
  };
  function d3_scale_pow(linear, exponent, domain) {
    var powp = d3_scale_powPow(exponent), powb = d3_scale_powPow(1 / exponent);
    function scale(x) {
      return linear(powp(x));
    }
    scale.invert = function(x) {
      return powb(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      linear.domain((domain = x.map(Number)).map(powp));
      return scale;
    };
    scale.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    scale.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    scale.nice = function(m) {
      return scale.domain(d3_scale_linearNice(domain, m));
    };
    scale.exponent = function(x) {
      if (!arguments.length) return exponent;
      powp = d3_scale_powPow(exponent = x);
      powb = d3_scale_powPow(1 / exponent);
      linear.domain(domain.map(powp));
      return scale;
    };
    scale.copy = function() {
      return d3_scale_pow(linear.copy(), exponent, domain);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  function d3_scale_powPow(e) {
    return function(x) {
      return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
    };
  }
  d3.scale.sqrt = function() {
    return d3.scale.pow().exponent(.5);
  };
  d3.scale.ordinal = function() {
    return d3_scale_ordinal([], {
      t: "range",
      a: [ [] ]
    });
  };
  function d3_scale_ordinal(domain, ranger) {
    var index, range, rangeBand;
    function scale(x) {
      return range[((index.get(x) || index.set(x, domain.push(x))) - 1) % range.length];
    }
    function steps(start, step) {
      return d3.range(domain.length).map(function(i) {
        return start + step * i;
      });
    }
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = [];
      index = new d3_Map();
      var i = -1, n = x.length, xi;
      while (++i < n) if (!index.has(xi = x[i])) index.set(xi, domain.push(xi));
      return scale[ranger.t].apply(scale, ranger.a);
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      rangeBand = 0;
      ranger = {
        t: "range",
        a: arguments
      };
      return scale;
    };
    scale.rangePoints = function(x, padding) {
      if (arguments.length < 2) padding = 0;
      var start = x[0], stop = x[1], step = (stop - start) / (Math.max(1, domain.length - 1) + padding);
      range = steps(domain.length < 2 ? (start + stop) / 2 : start + step * padding / 2, step);
      rangeBand = 0;
      ranger = {
        t: "rangePoints",
        a: arguments
      };
      return scale;
    };
    scale.rangeBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = (stop - start) / (domain.length - padding + 2 * outerPadding);
      range = steps(start + step * outerPadding, step);
      if (reverse) range.reverse();
      rangeBand = step * (1 - padding);
      ranger = {
        t: "rangeBands",
        a: arguments
      };
      return scale;
    };
    scale.rangeRoundBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding)), error = stop - start - (domain.length - padding) * step;
      range = steps(start + Math.round(error / 2), step);
      if (reverse) range.reverse();
      rangeBand = Math.round(step * (1 - padding));
      ranger = {
        t: "rangeRoundBands",
        a: arguments
      };
      return scale;
    };
    scale.rangeBand = function() {
      return rangeBand;
    };
    scale.rangeExtent = function() {
      return d3_scaleExtent(ranger.a[0]);
    };
    scale.copy = function() {
      return d3_scale_ordinal(domain, ranger);
    };
    return scale.domain(domain);
  }
  d3.scale.category10 = function() {
    return d3.scale.ordinal().range(d3_category10);
  };
  d3.scale.category20 = function() {
    return d3.scale.ordinal().range(d3_category20);
  };
  d3.scale.category20b = function() {
    return d3.scale.ordinal().range(d3_category20b);
  };
  d3.scale.category20c = function() {
    return d3.scale.ordinal().range(d3_category20c);
  };
  var d3_category10 = [ 2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175 ].map(d3_rgbString);
  var d3_category20 = [ 2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725 ].map(d3_rgbString);
  var d3_category20b = [ 3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654 ].map(d3_rgbString);
  var d3_category20c = [ 3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081 ].map(d3_rgbString);
  d3.scale.quantile = function() {
    return d3_scale_quantile([], []);
  };
  function d3_scale_quantile(domain, range) {
    var thresholds;
    function rescale() {
      var k = 0, q = range.length;
      thresholds = [];
      while (++k < q) thresholds[k - 1] = d3.quantile(domain, k / q);
      return scale;
    }
    function scale(x) {
      if (!isNaN(x = +x)) return range[d3.bisect(thresholds, x)];
    }
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = x.filter(function(d) {
        return !isNaN(d);
      }).sort(d3.ascending);
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.quantiles = function() {
      return thresholds;
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      return y < 0 ? [ NaN, NaN ] : [ y > 0 ? thresholds[y - 1] : domain[0], y < thresholds.length ? thresholds[y] : domain[domain.length - 1] ];
    };
    scale.copy = function() {
      return d3_scale_quantile(domain, range);
    };
    return rescale();
  }
  d3.scale.quantize = function() {
    return d3_scale_quantize(0, 1, [ 0, 1 ]);
  };
  function d3_scale_quantize(x0, x1, range) {
    var kx, i;
    function scale(x) {
      return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
    }
    function rescale() {
      kx = range.length / (x1 - x0);
      i = range.length - 1;
      return scale;
    }
    scale.domain = function(x) {
      if (!arguments.length) return [ x0, x1 ];
      x0 = +x[0];
      x1 = +x[x.length - 1];
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      y = y < 0 ? NaN : y / kx + x0;
      return [ y, y + 1 / kx ];
    };
    scale.copy = function() {
      return d3_scale_quantize(x0, x1, range);
    };
    return rescale();
  }
  d3.scale.threshold = function() {
    return d3_scale_threshold([ .5 ], [ 0, 1 ]);
  };
  function d3_scale_threshold(domain, range) {
    function scale(x) {
      if (x <= x) return range[d3.bisect(domain, x)];
    }
    scale.domain = function(_) {
      if (!arguments.length) return domain;
      domain = _;
      return scale;
    };
    scale.range = function(_) {
      if (!arguments.length) return range;
      range = _;
      return scale;
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      return [ domain[y - 1], domain[y] ];
    };
    scale.copy = function() {
      return d3_scale_threshold(domain, range);
    };
    return scale;
  }
  d3.scale.identity = function() {
    return d3_scale_identity([ 0, 1 ]);
  };
  function d3_scale_identity(domain) {
    function identity(x) {
      return +x;
    }
    identity.invert = identity;
    identity.domain = identity.range = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(identity);
      return identity;
    };
    identity.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    identity.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    identity.copy = function() {
      return d3_scale_identity(domain);
    };
    return identity;
  }
  d3.svg.arc = function() {
    var innerRadius = d3_svg_arcInnerRadius, outerRadius = d3_svg_arcOuterRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
    function arc() {
      var r0 = innerRadius.apply(this, arguments), r1 = outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) + d3_svg_arcOffset, a1 = endAngle.apply(this, arguments) + d3_svg_arcOffset, da = (a1 < a0 && (da = a0, 
      a0 = a1, a1 = da), a1 - a0), df = da < π ? "0" : "1", c0 = Math.cos(a0), s0 = Math.sin(a0), c1 = Math.cos(a1), s1 = Math.sin(a1);
      return da >= d3_svg_arcMax ? r0 ? "M0," + r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + -r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + r1 + "M0," + r0 + "A" + r0 + "," + r0 + " 0 1,0 0," + -r0 + "A" + r0 + "," + r0 + " 0 1,0 0," + r0 + "Z" : "M0," + r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + -r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + r1 + "Z" : r0 ? "M" + r1 * c0 + "," + r1 * s0 + "A" + r1 + "," + r1 + " 0 " + df + ",1 " + r1 * c1 + "," + r1 * s1 + "L" + r0 * c1 + "," + r0 * s1 + "A" + r0 + "," + r0 + " 0 " + df + ",0 " + r0 * c0 + "," + r0 * s0 + "Z" : "M" + r1 * c0 + "," + r1 * s0 + "A" + r1 + "," + r1 + " 0 " + df + ",1 " + r1 * c1 + "," + r1 * s1 + "L0,0" + "Z";
    }
    arc.innerRadius = function(v) {
      if (!arguments.length) return innerRadius;
      innerRadius = d3_functor(v);
      return arc;
    };
    arc.outerRadius = function(v) {
      if (!arguments.length) return outerRadius;
      outerRadius = d3_functor(v);
      return arc;
    };
    arc.startAngle = function(v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return arc;
    };
    arc.endAngle = function(v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return arc;
    };
    arc.centroid = function() {
      var r = (innerRadius.apply(this, arguments) + outerRadius.apply(this, arguments)) / 2, a = (startAngle.apply(this, arguments) + endAngle.apply(this, arguments)) / 2 + d3_svg_arcOffset;
      return [ Math.cos(a) * r, Math.sin(a) * r ];
    };
    return arc;
  };
  var d3_svg_arcOffset = -π / 2, d3_svg_arcMax = 2 * π - 1e-6;
  function d3_svg_arcInnerRadius(d) {
    return d.innerRadius;
  }
  function d3_svg_arcOuterRadius(d) {
    return d.outerRadius;
  }
  function d3_svg_arcStartAngle(d) {
    return d.startAngle;
  }
  function d3_svg_arcEndAngle(d) {
    return d.endAngle;
  }
  d3.svg.line.radial = function() {
    var line = d3_svg_line(d3_svg_lineRadial);
    line.radius = line.x, delete line.x;
    line.angle = line.y, delete line.y;
    return line;
  };
  function d3_svg_lineRadial(points) {
    var point, i = -1, n = points.length, r, a;
    while (++i < n) {
      point = points[i];
      r = point[0];
      a = point[1] + d3_svg_arcOffset;
      point[0] = r * Math.cos(a);
      point[1] = r * Math.sin(a);
    }
    return points;
  }
  function d3_svg_area(projection) {
    var x0 = d3_svg_lineX, x1 = d3_svg_lineX, y0 = 0, y1 = d3_svg_lineY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, interpolateReverse = interpolate, L = "L", tension = .7;
    function area(data) {
      var segments = [], points0 = [], points1 = [], i = -1, n = data.length, d, fx0 = d3_functor(x0), fy0 = d3_functor(y0), fx1 = x0 === x1 ? function() {
        return x;
      } : d3_functor(x1), fy1 = y0 === y1 ? function() {
        return y;
      } : d3_functor(y1), x, y;
      function segment() {
        segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
      }
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points0.push([ x = +fx0.call(this, d, i), y = +fy0.call(this, d, i) ]);
          points1.push([ +fx1.call(this, d, i), +fy1.call(this, d, i) ]);
        } else if (points0.length) {
          segment();
          points0 = [];
          points1 = [];
        }
      }
      if (points0.length) segment();
      return segments.length ? segments.join("") : null;
    }
    area.x = function(_) {
      if (!arguments.length) return x1;
      x0 = x1 = _;
      return area;
    };
    area.x0 = function(_) {
      if (!arguments.length) return x0;
      x0 = _;
      return area;
    };
    area.x1 = function(_) {
      if (!arguments.length) return x1;
      x1 = _;
      return area;
    };
    area.y = function(_) {
      if (!arguments.length) return y1;
      y0 = y1 = _;
      return area;
    };
    area.y0 = function(_) {
      if (!arguments.length) return y0;
      y0 = _;
      return area;
    };
    area.y1 = function(_) {
      if (!arguments.length) return y1;
      y1 = _;
      return area;
    };
    area.defined = function(_) {
      if (!arguments.length) return defined;
      defined = _;
      return area;
    };
    area.interpolate = function(_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      interpolateReverse = interpolate.reverse || interpolate;
      L = interpolate.closed ? "M" : "L";
      return area;
    };
    area.tension = function(_) {
      if (!arguments.length) return tension;
      tension = _;
      return area;
    };
    return area;
  }
  d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
  d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
  d3.svg.area = function() {
    return d3_svg_area(d3_identity);
  };
  d3.svg.area.radial = function() {
    var area = d3_svg_area(d3_svg_lineRadial);
    area.radius = area.x, delete area.x;
    area.innerRadius = area.x0, delete area.x0;
    area.outerRadius = area.x1, delete area.x1;
    area.angle = area.y, delete area.y;
    area.startAngle = area.y0, delete area.y0;
    area.endAngle = area.y1, delete area.y1;
    return area;
  };
  d3.svg.chord = function() {
    var source = d3_source, target = d3_target, radius = d3_svg_chordRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
    function chord(d, i) {
      var s = subgroup(this, source, d, i), t = subgroup(this, target, d, i);
      return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
    }
    function subgroup(self, f, d, i) {
      var subgroup = f.call(self, d, i), r = radius.call(self, subgroup, i), a0 = startAngle.call(self, subgroup, i) + d3_svg_arcOffset, a1 = endAngle.call(self, subgroup, i) + d3_svg_arcOffset;
      return {
        r: r,
        a0: a0,
        a1: a1,
        p0: [ r * Math.cos(a0), r * Math.sin(a0) ],
        p1: [ r * Math.cos(a1), r * Math.sin(a1) ]
      };
    }
    function equals(a, b) {
      return a.a0 == b.a0 && a.a1 == b.a1;
    }
    function arc(r, p, a) {
      return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p;
    }
    function curve(r0, p0, r1, p1) {
      return "Q 0,0 " + p1;
    }
    chord.radius = function(v) {
      if (!arguments.length) return radius;
      radius = d3_functor(v);
      return chord;
    };
    chord.source = function(v) {
      if (!arguments.length) return source;
      source = d3_functor(v);
      return chord;
    };
    chord.target = function(v) {
      if (!arguments.length) return target;
      target = d3_functor(v);
      return chord;
    };
    chord.startAngle = function(v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return chord;
    };
    chord.endAngle = function(v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return chord;
    };
    return chord;
  };
  function d3_svg_chordRadius(d) {
    return d.radius;
  }
  d3.svg.diagonal = function() {
    var source = d3_source, target = d3_target, projection = d3_svg_diagonalProjection;
    function diagonal(d, i) {
      var p0 = source.call(this, d, i), p3 = target.call(this, d, i), m = (p0.y + p3.y) / 2, p = [ p0, {
        x: p0.x,
        y: m
      }, {
        x: p3.x,
        y: m
      }, p3 ];
      p = p.map(projection);
      return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
    }
    diagonal.source = function(x) {
      if (!arguments.length) return source;
      source = d3_functor(x);
      return diagonal;
    };
    diagonal.target = function(x) {
      if (!arguments.length) return target;
      target = d3_functor(x);
      return diagonal;
    };
    diagonal.projection = function(x) {
      if (!arguments.length) return projection;
      projection = x;
      return diagonal;
    };
    return diagonal;
  };
  function d3_svg_diagonalProjection(d) {
    return [ d.x, d.y ];
  }
  d3.svg.diagonal.radial = function() {
    var diagonal = d3.svg.diagonal(), projection = d3_svg_diagonalProjection, projection_ = diagonal.projection;
    diagonal.projection = function(x) {
      return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
    };
    return diagonal;
  };
  function d3_svg_diagonalRadialProjection(projection) {
    return function() {
      var d = projection.apply(this, arguments), r = d[0], a = d[1] + d3_svg_arcOffset;
      return [ r * Math.cos(a), r * Math.sin(a) ];
    };
  }
  d3.svg.symbol = function() {
    var type = d3_svg_symbolType, size = d3_svg_symbolSize;
    function symbol(d, i) {
      return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
    }
    symbol.type = function(x) {
      if (!arguments.length) return type;
      type = d3_functor(x);
      return symbol;
    };
    symbol.size = function(x) {
      if (!arguments.length) return size;
      size = d3_functor(x);
      return symbol;
    };
    return symbol;
  };
  function d3_svg_symbolSize() {
    return 64;
  }
  function d3_svg_symbolType() {
    return "circle";
  }
  function d3_svg_symbolCircle(size) {
    var r = Math.sqrt(size / π);
    return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
  }
  var d3_svg_symbols = d3.map({
    circle: d3_svg_symbolCircle,
    cross: function(size) {
      var r = Math.sqrt(size / 5) / 2;
      return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
    },
    diamond: function(size) {
      var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)), rx = ry * d3_svg_symbolTan30;
      return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
    },
    square: function(size) {
      var r = Math.sqrt(size) / 2;
      return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
    },
    "triangle-down": function(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
    },
    "triangle-up": function(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
    }
  });
  d3.svg.symbolTypes = d3_svg_symbols.keys();
  var d3_svg_symbolSqrt3 = Math.sqrt(3), d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
  function d3_transition(groups, id) {
    d3_subclass(groups, d3_transitionPrototype);
    groups.id = id;
    return groups;
  }
  var d3_transitionPrototype = [], d3_transitionId = 0, d3_transitionInheritId, d3_transitionInherit;
  d3_transitionPrototype.call = d3_selectionPrototype.call;
  d3_transitionPrototype.empty = d3_selectionPrototype.empty;
  d3_transitionPrototype.node = d3_selectionPrototype.node;
  d3_transitionPrototype.size = d3_selectionPrototype.size;
  d3.transition = function(selection) {
    return arguments.length ? d3_transitionInheritId ? selection.transition() : selection : d3_selectionRoot.transition();
  };
  d3.transition.prototype = d3_transitionPrototype;
  d3_transitionPrototype.select = function(selector) {
    var id = this.id, subgroups = [], subgroup, subnode, node;
    selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i, j))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          d3_transitionNode(subnode, i, id, node.__transition__[id]);
          subgroup.push(subnode);
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_transition(subgroups, id);
  };
  d3_transitionPrototype.selectAll = function(selector) {
    var id = this.id, subgroups = [], subgroup, subnodes, node, subnode, transition;
    selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          transition = node.__transition__[id];
          subnodes = selector.call(node, node.__data__, i, j);
          subgroups.push(subgroup = []);
          for (var k = -1, o = subnodes.length; ++k < o; ) {
            if (subnode = subnodes[k]) d3_transitionNode(subnode, k, id, transition);
            subgroup.push(subnode);
          }
        }
      }
    }
    return d3_transition(subgroups, id);
  };
  d3_transitionPrototype.filter = function(filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i)) {
          subgroup.push(node);
        }
      }
    }
    return d3_transition(subgroups, this.id);
  };
  d3_transitionPrototype.tween = function(name, tween) {
    var id = this.id;
    if (arguments.length < 2) return this.node().__transition__[id].tween.get(name);
    return d3_selection_each(this, tween == null ? function(node) {
      node.__transition__[id].tween.remove(name);
    } : function(node) {
      node.__transition__[id].tween.set(name, tween);
    });
  };
  function d3_transition_tween(groups, name, value, tween) {
    var id = groups.id;
    return d3_selection_each(groups, typeof value === "function" ? function(node, i, j) {
      node.__transition__[id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
    } : (value = tween(value), function(node) {
      node.__transition__[id].tween.set(name, value);
    }));
  }
  d3_transitionPrototype.attr = function(nameNS, value) {
    if (arguments.length < 2) {
      for (value in nameNS) this.attr(value, nameNS[value]);
      return this;
    }
    var interpolate = nameNS == "transform" ? d3_interpolateTransform : d3_interpolate, name = d3.ns.qualify(nameNS);
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    function attrTween(b) {
      return b == null ? attrNull : (b += "", function() {
        var a = this.getAttribute(name), i;
        return a !== b && (i = interpolate(a, b), function(t) {
          this.setAttribute(name, i(t));
        });
      });
    }
    function attrTweenNS(b) {
      return b == null ? attrNullNS : (b += "", function() {
        var a = this.getAttributeNS(name.space, name.local), i;
        return a !== b && (i = interpolate(a, b), function(t) {
          this.setAttributeNS(name.space, name.local, i(t));
        });
      });
    }
    return d3_transition_tween(this, "attr." + nameNS, value, name.local ? attrTweenNS : attrTween);
  };
  d3_transitionPrototype.attrTween = function(nameNS, tween) {
    var name = d3.ns.qualify(nameNS);
    function attrTween(d, i) {
      var f = tween.call(this, d, i, this.getAttribute(name));
      return f && function(t) {
        this.setAttribute(name, f(t));
      };
    }
    function attrTweenNS(d, i) {
      var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
      return f && function(t) {
        this.setAttributeNS(name.space, name.local, f(t));
      };
    }
    return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
  };
  d3_transitionPrototype.style = function(name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";
        for (priority in name) this.style(priority, name[priority], value);
        return this;
      }
      priority = "";
    }
    function styleNull() {
      this.style.removeProperty(name);
    }
    function styleString(b) {
      return b == null ? styleNull : (b += "", function() {
        var a = d3_window.getComputedStyle(this, null).getPropertyValue(name), i;
        return a !== b && (i = d3_interpolate(a, b), function(t) {
          this.style.setProperty(name, i(t), priority);
        });
      });
    }
    return d3_transition_tween(this, "style." + name, value, styleString);
  };
  d3_transitionPrototype.styleTween = function(name, tween, priority) {
    if (arguments.length < 3) priority = "";
    function styleTween(d, i) {
      var f = tween.call(this, d, i, d3_window.getComputedStyle(this, null).getPropertyValue(name));
      return f && function(t) {
        this.style.setProperty(name, f(t), priority);
      };
    }
    return this.tween("style." + name, styleTween);
  };
  d3_transitionPrototype.text = function(value) {
    return d3_transition_tween(this, "text", value, d3_transition_text);
  };
  function d3_transition_text(b) {
    if (b == null) b = "";
    return function() {
      this.textContent = b;
    };
  }
  d3_transitionPrototype.remove = function() {
    return this.each("end.transition", function() {
      var p;
      if (this.__transition__.count < 2 && (p = this.parentNode)) p.removeChild(this);
    });
  };
  d3_transitionPrototype.ease = function(value) {
    var id = this.id;
    if (arguments.length < 1) return this.node().__transition__[id].ease;
    if (typeof value !== "function") value = d3.ease.apply(d3, arguments);
    return d3_selection_each(this, function(node) {
      node.__transition__[id].ease = value;
    });
  };
  d3_transitionPrototype.delay = function(value) {
    var id = this.id;
    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
      node.__transition__[id].delay = +value.call(node, node.__data__, i, j);
    } : (value = +value, function(node) {
      node.__transition__[id].delay = value;
    }));
  };
  d3_transitionPrototype.duration = function(value) {
    var id = this.id;
    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
      node.__transition__[id].duration = Math.max(1, value.call(node, node.__data__, i, j));
    } : (value = Math.max(1, value), function(node) {
      node.__transition__[id].duration = value;
    }));
  };
  d3_transitionPrototype.each = function(type, listener) {
    var id = this.id;
    if (arguments.length < 2) {
      var inherit = d3_transitionInherit, inheritId = d3_transitionInheritId;
      d3_transitionInheritId = id;
      d3_selection_each(this, function(node, i, j) {
        d3_transitionInherit = node.__transition__[id];
        type.call(node, node.__data__, i, j);
      });
      d3_transitionInherit = inherit;
      d3_transitionInheritId = inheritId;
    } else {
      d3_selection_each(this, function(node) {
        var transition = node.__transition__[id];
        (transition.event || (transition.event = d3.dispatch("start", "end"))).on(type, listener);
      });
    }
    return this;
  };
  d3_transitionPrototype.transition = function() {
    var id0 = this.id, id1 = ++d3_transitionId, subgroups = [], subgroup, group, node, transition;
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if (node = group[i]) {
          transition = Object.create(node.__transition__[id0]);
          transition.delay += transition.duration;
          d3_transitionNode(node, i, id1, transition);
        }
        subgroup.push(node);
      }
    }
    return d3_transition(subgroups, id1);
  };
  function d3_transitionNode(node, i, id, inherit) {
    var lock = node.__transition__ || (node.__transition__ = {
      active: 0,
      count: 0
    }), transition = lock[id];
    if (!transition) {
      var time = inherit.time;
      transition = lock[id] = {
        tween: new d3_Map(),
        time: time,
        ease: inherit.ease,
        delay: inherit.delay,
        duration: inherit.duration
      };
      ++lock.count;
      d3.timer(function(elapsed) {
        var d = node.__data__, ease = transition.ease, delay = transition.delay, duration = transition.duration, tweened = [];
        if (delay <= elapsed) return start(elapsed);
        d3_timer_replace(start, delay, time);
        function start(elapsed) {
          if (lock.active > id) return stop();
          lock.active = id;
          transition.event && transition.event.start.call(node, d, i);
          transition.tween.forEach(function(key, value) {
            if (value = value.call(node, d, i)) {
              tweened.push(value);
            }
          });
          if (tick(elapsed)) return 1;
          d3_timer_replace(tick, 0, time);
        }
        function tick(elapsed) {
          if (lock.active !== id) return stop();
          var t = (elapsed - delay) / duration, e = ease(t), n = tweened.length;
          while (n > 0) {
            tweened[--n].call(node, e);
          }
          if (t >= 1) {
            transition.event && transition.event.end.call(node, d, i);
            return stop();
          }
        }
        function stop() {
          if (--lock.count) delete lock[id]; else delete node.__transition__;
          return 1;
        }
      }, 0, time);
    }
  }
  d3.svg.axis = function() {
    var scale = d3.scale.linear(), orient = d3_svg_axisDefaultOrient, innerTickSize = 6, outerTickSize = 6, tickPadding = 3, tickArguments_ = [ 10 ], tickValues = null, tickFormat_;
    function axis(g) {
      g.each(function() {
        var g = d3.select(this);
        var ticks = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments_) : scale.domain() : tickValues, tickFormat = tickFormat_ == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments_) : d3_identity : tickFormat_, tick = g.selectAll(".tick").data(ticks, d3_identity), tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", 1e-6), tickExit = d3.transition(tick.exit()).style("opacity", 1e-6).remove(), tickUpdate = d3.transition(tick).style("opacity", 1), tickTransform;
        var range = d3_scaleRange(scale), path = g.selectAll(".domain").data([ 0 ]), pathUpdate = (path.enter().append("path").attr("class", "domain"), 
        d3.transition(path));
        var scale1 = scale.copy(), scale0 = this.__chart__ || scale1;
        this.__chart__ = scale1;
        tickEnter.append("line");
        tickEnter.append("text");
        var lineEnter = tickEnter.select("line"), lineUpdate = tickUpdate.select("line"), text = tick.select("text").text(tickFormat), textEnter = tickEnter.select("text"), textUpdate = tickUpdate.select("text");
        switch (orient) {
         case "bottom":
          {
            tickTransform = d3_svg_axisX;
            lineEnter.attr("y2", innerTickSize);
            textEnter.attr("y", Math.max(innerTickSize, 0) + tickPadding);
            lineUpdate.attr("x2", 0).attr("y2", innerTickSize);
            textUpdate.attr("x", 0).attr("y", Math.max(innerTickSize, 0) + tickPadding);
            text.attr("dy", ".71em").style("text-anchor", "middle");
            pathUpdate.attr("d", "M" + range[0] + "," + outerTickSize + "V0H" + range[1] + "V" + outerTickSize);
            break;
          }

         case "top":
          {
            tickTransform = d3_svg_axisX;
            lineEnter.attr("y2", -innerTickSize);
            textEnter.attr("y", -(Math.max(innerTickSize, 0) + tickPadding));
            lineUpdate.attr("x2", 0).attr("y2", -innerTickSize);
            textUpdate.attr("x", 0).attr("y", -(Math.max(innerTickSize, 0) + tickPadding));
            text.attr("dy", "0em").style("text-anchor", "middle");
            pathUpdate.attr("d", "M" + range[0] + "," + -outerTickSize + "V0H" + range[1] + "V" + -outerTickSize);
            break;
          }

         case "left":
          {
            tickTransform = d3_svg_axisY;
            lineEnter.attr("x2", -innerTickSize);
            textEnter.attr("x", -(Math.max(innerTickSize, 0) + tickPadding));
            lineUpdate.attr("x2", -innerTickSize).attr("y2", 0);
            textUpdate.attr("x", -(Math.max(innerTickSize, 0) + tickPadding)).attr("y", 0);
            text.attr("dy", ".32em").style("text-anchor", "end");
            pathUpdate.attr("d", "M" + -outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + -outerTickSize);
            break;
          }

         case "right":
          {
            tickTransform = d3_svg_axisY;
            lineEnter.attr("x2", innerTickSize);
            textEnter.attr("x", Math.max(innerTickSize, 0) + tickPadding);
            lineUpdate.attr("x2", innerTickSize).attr("y2", 0);
            textUpdate.attr("x", Math.max(innerTickSize, 0) + tickPadding).attr("y", 0);
            text.attr("dy", ".32em").style("text-anchor", "start");
            pathUpdate.attr("d", "M" + outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + outerTickSize);
            break;
          }
        }
        if (scale.rangeBand) {
          var dx = scale1.rangeBand() / 2, x = function(d) {
            return scale1(d) + dx;
          };
          tickEnter.call(tickTransform, x);
          tickUpdate.call(tickTransform, x);
        } else {
          tickEnter.call(tickTransform, scale0);
          tickUpdate.call(tickTransform, scale1);
          tickExit.call(tickTransform, scale1);
        }
      });
    }
    axis.scale = function(x) {
      if (!arguments.length) return scale;
      scale = x;
      return axis;
    };
    axis.orient = function(x) {
      if (!arguments.length) return orient;
      orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient;
      return axis;
    };
    axis.ticks = function() {
      if (!arguments.length) return tickArguments_;
      tickArguments_ = arguments;
      return axis;
    };
    axis.tickValues = function(x) {
      if (!arguments.length) return tickValues;
      tickValues = x;
      return axis;
    };
    axis.tickFormat = function(x) {
      if (!arguments.length) return tickFormat_;
      tickFormat_ = x;
      return axis;
    };
    axis.tickSize = function(x) {
      var n = arguments.length;
      if (!n) return innerTickSize;
      innerTickSize = +x;
      outerTickSize = +arguments[n - 1];
      return axis;
    };
    axis.innerTickSize = function(x) {
      if (!arguments.length) return innerTickSize;
      innerTickSize = +x;
      return axis;
    };
    axis.outerTickSize = function(x) {
      if (!arguments.length) return outerTickSize;
      outerTickSize = +x;
      return axis;
    };
    axis.tickPadding = function(x) {
      if (!arguments.length) return tickPadding;
      tickPadding = +x;
      return axis;
    };
    axis.tickSubdivide = function() {
      return arguments.length && axis;
    };
    return axis;
  };
  var d3_svg_axisDefaultOrient = "bottom", d3_svg_axisOrients = {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  };
  function d3_svg_axisX(selection, x) {
    selection.attr("transform", function(d) {
      return "translate(" + x(d) + ",0)";
    });
  }
  function d3_svg_axisY(selection, y) {
    selection.attr("transform", function(d) {
      return "translate(0," + y(d) + ")";
    });
  }
  d3.svg.brush = function() {
    var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"), x = null, y = null, xExtent = [ 0, 0 ], yExtent = [ 0, 0 ], xExtentDomain, yExtentDomain, xClamp = true, yClamp = true, resizes = d3_svg_brushResizes[0];
    function brush(g) {
      g.each(function() {
        var g = d3.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
        var background = g.selectAll(".background").data([ 0 ]);
        background.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
        g.selectAll(".extent").data([ 0 ]).enter().append("rect").attr("class", "extent").style("cursor", "move");
        var resize = g.selectAll(".resize").data(resizes, d3_identity);
        resize.exit().remove();
        resize.enter().append("g").attr("class", function(d) {
          return "resize " + d;
        }).style("cursor", function(d) {
          return d3_svg_brushCursor[d];
        }).append("rect").attr("x", function(d) {
          return /[ew]$/.test(d) ? -3 : null;
        }).attr("y", function(d) {
          return /^[ns]/.test(d) ? -3 : null;
        }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
        resize.style("display", brush.empty() ? "none" : null);
        var gUpdate = d3.transition(g), backgroundUpdate = d3.transition(background), range;
        if (x) {
          range = d3_scaleRange(x);
          backgroundUpdate.attr("x", range[0]).attr("width", range[1] - range[0]);
          redrawX(gUpdate);
        }
        if (y) {
          range = d3_scaleRange(y);
          backgroundUpdate.attr("y", range[0]).attr("height", range[1] - range[0]);
          redrawY(gUpdate);
        }
        redraw(gUpdate);
      });
    }
    brush.event = function(g) {
      g.each(function() {
        var event_ = event.of(this, arguments), extent1 = {
          x: xExtent,
          y: yExtent,
          i: xExtentDomain,
          j: yExtentDomain
        }, extent0 = this.__chart__ || extent1;
        this.__chart__ = extent1;
        if (d3_transitionInheritId) {
          d3.select(this).transition().each("start.brush", function() {
            xExtentDomain = extent0.i;
            yExtentDomain = extent0.j;
            xExtent = extent0.x;
            yExtent = extent0.y;
            event_({
              type: "brushstart"
            });
          }).tween("brush:brush", function() {
            var xi = d3_interpolateArray(xExtent, extent1.x), yi = d3_interpolateArray(yExtent, extent1.y);
            xExtentDomain = yExtentDomain = null;
            return function(t) {
              xExtent = extent1.x = xi(t);
              yExtent = extent1.y = yi(t);
              event_({
                type: "brush",
                mode: "resize"
              });
            };
          }).each("end.brush", function() {
            xExtentDomain = extent1.i;
            yExtentDomain = extent1.j;
            event_({
              type: "brush",
              mode: "resize"
            });
            event_({
              type: "brushend"
            });
          });
        } else {
          event_({
            type: "brushstart"
          });
          event_({
            type: "brush",
            mode: "resize"
          });
          event_({
            type: "brushend"
          });
        }
      });
    };
    function redraw(g) {
      g.selectAll(".resize").attr("transform", function(d) {
        return "translate(" + xExtent[+/e$/.test(d)] + "," + yExtent[+/^s/.test(d)] + ")";
      });
    }
    function redrawX(g) {
      g.select(".extent").attr("x", xExtent[0]);
      g.selectAll(".extent,.n>rect,.s>rect").attr("width", xExtent[1] - xExtent[0]);
    }
    function redrawY(g) {
      g.select(".extent").attr("y", yExtent[0]);
      g.selectAll(".extent,.e>rect,.w>rect").attr("height", yExtent[1] - yExtent[0]);
    }
    function brushstart() {
      var target = this, eventTarget = d3.select(d3.event.target), event_ = event.of(target, arguments), g = d3.select(target), resizing = eventTarget.datum(), resizingX = !/^(n|s)$/.test(resizing) && x, resizingY = !/^(e|w)$/.test(resizing) && y, dragging = eventTarget.classed("extent"), dragRestore = d3_event_dragSuppress(), center, origin = d3.mouse(target), offset;
      var w = d3.select(d3_window).on("keydown.brush", keydown).on("keyup.brush", keyup);
      if (d3.event.changedTouches) {
        w.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
      } else {
        w.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
      }
      g.interrupt().selectAll("*").interrupt();
      if (dragging) {
        origin[0] = xExtent[0] - origin[0];
        origin[1] = yExtent[0] - origin[1];
      } else if (resizing) {
        var ex = +/w$/.test(resizing), ey = +/^n/.test(resizing);
        offset = [ xExtent[1 - ex] - origin[0], yExtent[1 - ey] - origin[1] ];
        origin[0] = xExtent[ex];
        origin[1] = yExtent[ey];
      } else if (d3.event.altKey) center = origin.slice();
      g.style("pointer-events", "none").selectAll(".resize").style("display", null);
      d3.select("body").style("cursor", eventTarget.style("cursor"));
      event_({
        type: "brushstart"
      });
      brushmove();
      function keydown() {
        if (d3.event.keyCode == 32) {
          if (!dragging) {
            center = null;
            origin[0] -= xExtent[1];
            origin[1] -= yExtent[1];
            dragging = 2;
          }
          d3_eventPreventDefault();
        }
      }
      function keyup() {
        if (d3.event.keyCode == 32 && dragging == 2) {
          origin[0] += xExtent[1];
          origin[1] += yExtent[1];
          dragging = 0;
          d3_eventPreventDefault();
        }
      }
      function brushmove() {
        var point = d3.mouse(target), moved = false;
        if (offset) {
          point[0] += offset[0];
          point[1] += offset[1];
        }
        if (!dragging) {
          if (d3.event.altKey) {
            if (!center) center = [ (xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2 ];
            origin[0] = xExtent[+(point[0] < center[0])];
            origin[1] = yExtent[+(point[1] < center[1])];
          } else center = null;
        }
        if (resizingX && move1(point, x, 0)) {
          redrawX(g);
          moved = true;
        }
        if (resizingY && move1(point, y, 1)) {
          redrawY(g);
          moved = true;
        }
        if (moved) {
          redraw(g);
          event_({
            type: "brush",
            mode: dragging ? "move" : "resize"
          });
        }
      }
      function move1(point, scale, i) {
        var range = d3_scaleRange(scale), r0 = range[0], r1 = range[1], position = origin[i], extent = i ? yExtent : xExtent, size = extent[1] - extent[0], min, max;
        if (dragging) {
          r0 -= position;
          r1 -= size + position;
        }
        min = (i ? yClamp : xClamp) ? Math.max(r0, Math.min(r1, point[i])) : point[i];
        if (dragging) {
          max = (min += position) + size;
        } else {
          if (center) position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
          if (position < min) {
            max = min;
            min = position;
          } else {
            max = position;
          }
        }
        if (extent[0] != min || extent[1] != max) {
          if (i) yExtentDomain = null; else xExtentDomain = null;
          extent[0] = min;
          extent[1] = max;
          return true;
        }
      }
      function brushend() {
        brushmove();
        g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
        d3.select("body").style("cursor", null);
        w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
        dragRestore();
        event_({
          type: "brushend"
        });
      }
    }
    brush.x = function(z) {
      if (!arguments.length) return x;
      x = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.y = function(z) {
      if (!arguments.length) return y;
      y = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.clamp = function(z) {
      if (!arguments.length) return x && y ? [ xClamp, yClamp ] : x ? xClamp : y ? yClamp : null;
      if (x && y) xClamp = !!z[0], yClamp = !!z[1]; else if (x) xClamp = !!z; else if (y) yClamp = !!z;
      return brush;
    };
    brush.extent = function(z) {
      var x0, x1, y0, y1, t;
      if (!arguments.length) {
        if (x) {
          if (xExtentDomain) {
            x0 = xExtentDomain[0], x1 = xExtentDomain[1];
          } else {
            x0 = xExtent[0], x1 = xExtent[1];
            if (x.invert) x0 = x.invert(x0), x1 = x.invert(x1);
            if (x1 < x0) t = x0, x0 = x1, x1 = t;
          }
        }
        if (y) {
          if (yExtentDomain) {
            y0 = yExtentDomain[0], y1 = yExtentDomain[1];
          } else {
            y0 = yExtent[0], y1 = yExtent[1];
            if (y.invert) y0 = y.invert(y0), y1 = y.invert(y1);
            if (y1 < y0) t = y0, y0 = y1, y1 = t;
          }
        }
        return x && y ? [ [ x0, y0 ], [ x1, y1 ] ] : x ? [ x0, x1 ] : y && [ y0, y1 ];
      }
      if (x) {
        x0 = z[0], x1 = z[1];
        if (y) x0 = x0[0], x1 = x1[0];
        xExtentDomain = [ x0, x1 ];
        if (x.invert) x0 = x(x0), x1 = x(x1);
        if (x1 < x0) t = x0, x0 = x1, x1 = t;
        if (x0 != xExtent[0] || x1 != xExtent[1]) xExtent = [ x0, x1 ];
      }
      if (y) {
        y0 = z[0], y1 = z[1];
        if (x) y0 = y0[1], y1 = y1[1];
        yExtentDomain = [ y0, y1 ];
        if (y.invert) y0 = y(y0), y1 = y(y1);
        if (y1 < y0) t = y0, y0 = y1, y1 = t;
        if (y0 != yExtent[0] || y1 != yExtent[1]) yExtent = [ y0, y1 ];
      }
      return brush;
    };
    brush.clear = function() {
      if (!brush.empty()) {
        xExtent = [ 0, 0 ], yExtent = [ 0, 0 ];
        xExtentDomain = yExtentDomain = null;
      }
      return brush;
    };
    brush.empty = function() {
      return !!x && xExtent[0] == xExtent[1] || !!y && yExtent[0] == yExtent[1];
    };
    return d3.rebind(brush, event, "on");
  };
  var d3_svg_brushCursor = {
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
  };
  var d3_svg_brushResizes = [ [ "n", "e", "s", "w", "nw", "ne", "se", "sw" ], [ "e", "w" ], [ "n", "s" ], [] ];
  var d3_time = d3.time = {}, d3_date = Date, d3_time_daySymbols = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
  function d3_date_utc() {
    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
  }
  d3_date_utc.prototype = {
    getDate: function() {
      return this._.getUTCDate();
    },
    getDay: function() {
      return this._.getUTCDay();
    },
    getFullYear: function() {
      return this._.getUTCFullYear();
    },
    getHours: function() {
      return this._.getUTCHours();
    },
    getMilliseconds: function() {
      return this._.getUTCMilliseconds();
    },
    getMinutes: function() {
      return this._.getUTCMinutes();
    },
    getMonth: function() {
      return this._.getUTCMonth();
    },
    getSeconds: function() {
      return this._.getUTCSeconds();
    },
    getTime: function() {
      return this._.getTime();
    },
    getTimezoneOffset: function() {
      return 0;
    },
    valueOf: function() {
      return this._.valueOf();
    },
    setDate: function() {
      d3_time_prototype.setUTCDate.apply(this._, arguments);
    },
    setDay: function() {
      d3_time_prototype.setUTCDay.apply(this._, arguments);
    },
    setFullYear: function() {
      d3_time_prototype.setUTCFullYear.apply(this._, arguments);
    },
    setHours: function() {
      d3_time_prototype.setUTCHours.apply(this._, arguments);
    },
    setMilliseconds: function() {
      d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
    },
    setMinutes: function() {
      d3_time_prototype.setUTCMinutes.apply(this._, arguments);
    },
    setMonth: function() {
      d3_time_prototype.setUTCMonth.apply(this._, arguments);
    },
    setSeconds: function() {
      d3_time_prototype.setUTCSeconds.apply(this._, arguments);
    },
    setTime: function() {
      d3_time_prototype.setTime.apply(this._, arguments);
    }
  };
  var d3_time_prototype = Date.prototype;
  var d3_time_formatDateTime = "%a %b %e %X %Y", d3_time_formatDate = "%m/%d/%Y", d3_time_formatTime = "%H:%M:%S";
  var d3_time_days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ], d3_time_dayAbbreviations = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ], d3_time_months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ], d3_time_monthAbbreviations = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  function d3_time_interval(local, step, number) {
    function round(date) {
      var d0 = local(date), d1 = offset(d0, 1);
      return date - d0 < d1 - date ? d0 : d1;
    }
    function ceil(date) {
      step(date = local(new d3_date(date - 1)), 1);
      return date;
    }
    function offset(date, k) {
      step(date = new d3_date(+date), k);
      return date;
    }
    function range(t0, t1, dt) {
      var time = ceil(t0), times = [];
      if (dt > 1) {
        while (time < t1) {
          if (!(number(time) % dt)) times.push(new Date(+time));
          step(time, 1);
        }
      } else {
        while (time < t1) times.push(new Date(+time)), step(time, 1);
      }
      return times;
    }
    function range_utc(t0, t1, dt) {
      try {
        d3_date = d3_date_utc;
        var utc = new d3_date_utc();
        utc._ = t0;
        return range(utc, t1, dt);
      } finally {
        d3_date = Date;
      }
    }
    local.floor = local;
    local.round = round;
    local.ceil = ceil;
    local.offset = offset;
    local.range = range;
    var utc = local.utc = d3_time_interval_utc(local);
    utc.floor = utc;
    utc.round = d3_time_interval_utc(round);
    utc.ceil = d3_time_interval_utc(ceil);
    utc.offset = d3_time_interval_utc(offset);
    utc.range = range_utc;
    return local;
  }
  function d3_time_interval_utc(method) {
    return function(date, k) {
      try {
        d3_date = d3_date_utc;
        var utc = new d3_date_utc();
        utc._ = date;
        return method(utc, k)._;
      } finally {
        d3_date = Date;
      }
    };
  }
  d3_time.year = d3_time_interval(function(date) {
    date = d3_time.day(date);
    date.setMonth(0, 1);
    return date;
  }, function(date, offset) {
    date.setFullYear(date.getFullYear() + offset);
  }, function(date) {
    return date.getFullYear();
  });
  d3_time.years = d3_time.year.range;
  d3_time.years.utc = d3_time.year.utc.range;
  d3_time.day = d3_time_interval(function(date) {
    var day = new d3_date(2e3, 0);
    day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    return day;
  }, function(date, offset) {
    date.setDate(date.getDate() + offset);
  }, function(date) {
    return date.getDate() - 1;
  });
  d3_time.days = d3_time.day.range;
  d3_time.days.utc = d3_time.day.utc.range;
  d3_time.dayOfYear = function(date) {
    var year = d3_time.year(date);
    return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
  };
  d3_time_daySymbols.forEach(function(day, i) {
    day = day.toLowerCase();
    i = 7 - i;
    var interval = d3_time[day] = d3_time_interval(function(date) {
      (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
      return date;
    }, function(date, offset) {
      date.setDate(date.getDate() + Math.floor(offset) * 7);
    }, function(date) {
      var day = d3_time.year(date).getDay();
      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
    });
    d3_time[day + "s"] = interval.range;
    d3_time[day + "s"].utc = interval.utc.range;
    d3_time[day + "OfYear"] = function(date) {
      var day = d3_time.year(date).getDay();
      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7);
    };
  });
  d3_time.week = d3_time.sunday;
  d3_time.weeks = d3_time.sunday.range;
  d3_time.weeks.utc = d3_time.sunday.utc.range;
  d3_time.weekOfYear = d3_time.sundayOfYear;
  d3_time.format = d3_time_format;
  function d3_time_format(template) {
    var n = template.length;
    function format(date) {
      var string = [], i = -1, j = 0, c, p, f;
      while (++i < n) {
        if (template.charCodeAt(i) === 37) {
          string.push(template.substring(j, i));
          if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null) c = template.charAt(++i);
          if (f = d3_time_formats[c]) c = f(date, p == null ? c === "e" ? " " : "0" : p);
          string.push(c);
          j = i + 1;
        }
      }
      string.push(template.substring(j, i));
      return string.join("");
    }
    format.parse = function(string) {
      var d = {
        y: 1900,
        m: 0,
        d: 1,
        H: 0,
        M: 0,
        S: 0,
        L: 0,
        Z: null
      }, i = d3_time_parse(d, template, string, 0);
      if (i != string.length) return null;
      if ("p" in d) d.H = d.H % 12 + d.p * 12;
      var localZ = d.Z != null && d3_date !== d3_date_utc, date = new (localZ ? d3_date_utc : d3_date)();
      if ("j" in d) date.setFullYear(d.y, 0, d.j); else if ("w" in d && ("W" in d || "U" in d)) {
        date.setFullYear(d.y, 0, 1);
        date.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + d.W * 7 - (date.getDay() + 5) % 7 : d.w + d.U * 7 - (date.getDay() + 6) % 7);
      } else date.setFullYear(d.y, d.m, d.d);
      date.setHours(d.H + Math.floor(d.Z / 100), d.M + d.Z % 100, d.S, d.L);
      return localZ ? date._ : date;
    };
    format.toString = function() {
      return template;
    };
    return format;
  }
  function d3_time_parse(date, template, string, j) {
    var c, p, t, i = 0, n = template.length, m = string.length;
    while (i < n) {
      if (j >= m) return -1;
      c = template.charCodeAt(i++);
      if (c === 37) {
        t = template.charAt(i++);
        p = d3_time_parsers[t in d3_time_formatPads ? template.charAt(i++) : t];
        if (!p || (j = p(date, string, j)) < 0) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }
    return j;
  }
  function d3_time_formatRe(names) {
    return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i");
  }
  function d3_time_formatLookup(names) {
    var map = new d3_Map(), i = -1, n = names.length;
    while (++i < n) map.set(names[i].toLowerCase(), i);
    return map;
  }
  function d3_time_formatPad(value, fill, width) {
    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
  }
  var d3_time_dayRe = d3_time_formatRe(d3_time_days), d3_time_dayLookup = d3_time_formatLookup(d3_time_days), d3_time_dayAbbrevRe = d3_time_formatRe(d3_time_dayAbbreviations), d3_time_dayAbbrevLookup = d3_time_formatLookup(d3_time_dayAbbreviations), d3_time_monthRe = d3_time_formatRe(d3_time_months), d3_time_monthLookup = d3_time_formatLookup(d3_time_months), d3_time_monthAbbrevRe = d3_time_formatRe(d3_time_monthAbbreviations), d3_time_monthAbbrevLookup = d3_time_formatLookup(d3_time_monthAbbreviations), d3_time_percentRe = /^%/;
  var d3_time_formatPads = {
    "-": "",
    _: " ",
    "0": "0"
  };
  var d3_time_formats = {
    a: function(d) {
      return d3_time_dayAbbreviations[d.getDay()];
    },
    A: function(d) {
      return d3_time_days[d.getDay()];
    },
    b: function(d) {
      return d3_time_monthAbbreviations[d.getMonth()];
    },
    B: function(d) {
      return d3_time_months[d.getMonth()];
    },
    c: d3_time_format(d3_time_formatDateTime),
    d: function(d, p) {
      return d3_time_formatPad(d.getDate(), p, 2);
    },
    e: function(d, p) {
      return d3_time_formatPad(d.getDate(), p, 2);
    },
    H: function(d, p) {
      return d3_time_formatPad(d.getHours(), p, 2);
    },
    I: function(d, p) {
      return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
    },
    j: function(d, p) {
      return d3_time_formatPad(1 + d3_time.dayOfYear(d), p, 3);
    },
    L: function(d, p) {
      return d3_time_formatPad(d.getMilliseconds(), p, 3);
    },
    m: function(d, p) {
      return d3_time_formatPad(d.getMonth() + 1, p, 2);
    },
    M: function(d, p) {
      return d3_time_formatPad(d.getMinutes(), p, 2);
    },
    p: function(d) {
      return d.getHours() >= 12 ? "PM" : "AM";
    },
    S: function(d, p) {
      return d3_time_formatPad(d.getSeconds(), p, 2);
    },
    U: function(d, p) {
      return d3_time_formatPad(d3_time.sundayOfYear(d), p, 2);
    },
    w: function(d) {
      return d.getDay();
    },
    W: function(d, p) {
      return d3_time_formatPad(d3_time.mondayOfYear(d), p, 2);
    },
    x: d3_time_format(d3_time_formatDate),
    X: d3_time_format(d3_time_formatTime),
    y: function(d, p) {
      return d3_time_formatPad(d.getFullYear() % 100, p, 2);
    },
    Y: function(d, p) {
      return d3_time_formatPad(d.getFullYear() % 1e4, p, 4);
    },
    Z: d3_time_zone,
    "%": function() {
      return "%";
    }
  };
  var d3_time_parsers = {
    a: d3_time_parseWeekdayAbbrev,
    A: d3_time_parseWeekday,
    b: d3_time_parseMonthAbbrev,
    B: d3_time_parseMonth,
    c: d3_time_parseLocaleFull,
    d: d3_time_parseDay,
    e: d3_time_parseDay,
    H: d3_time_parseHour24,
    I: d3_time_parseHour24,
    j: d3_time_parseDayOfYear,
    L: d3_time_parseMilliseconds,
    m: d3_time_parseMonthNumber,
    M: d3_time_parseMinutes,
    p: d3_time_parseAmPm,
    S: d3_time_parseSeconds,
    U: d3_time_parseWeekNumberSunday,
    w: d3_time_parseWeekdayNumber,
    W: d3_time_parseWeekNumberMonday,
    x: d3_time_parseLocaleDate,
    X: d3_time_parseLocaleTime,
    y: d3_time_parseYear,
    Y: d3_time_parseFullYear,
    Z: d3_time_parseZone,
    "%": d3_time_parseLiteralPercent
  };
  function d3_time_parseWeekdayAbbrev(date, string, i) {
    d3_time_dayAbbrevRe.lastIndex = 0;
    var n = d3_time_dayAbbrevRe.exec(string.substring(i));
    return n ? (date.w = d3_time_dayAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function d3_time_parseWeekday(date, string, i) {
    d3_time_dayRe.lastIndex = 0;
    var n = d3_time_dayRe.exec(string.substring(i));
    return n ? (date.w = d3_time_dayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function d3_time_parseWeekdayNumber(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 1));
    return n ? (date.w = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseWeekNumberSunday(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i));
    return n ? (date.U = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseWeekNumberMonday(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i));
    return n ? (date.W = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseMonthAbbrev(date, string, i) {
    d3_time_monthAbbrevRe.lastIndex = 0;
    var n = d3_time_monthAbbrevRe.exec(string.substring(i));
    return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function d3_time_parseMonth(date, string, i) {
    d3_time_monthRe.lastIndex = 0;
    var n = d3_time_monthRe.exec(string.substring(i));
    return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function d3_time_parseLocaleFull(date, string, i) {
    return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
  }
  function d3_time_parseLocaleDate(date, string, i) {
    return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
  }
  function d3_time_parseLocaleTime(date, string, i) {
    return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
  }
  function d3_time_parseFullYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 4));
    return n ? (date.y = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
    return n ? (date.y = d3_time_expandYear(+n[0]), i + n[0].length) : -1;
  }
  function d3_time_parseZone(date, string, i) {
    return /^[+-]\d{4}$/.test(string = string.substring(i, i + 5)) ? (date.Z = +string, 
    i + 5) : -1;
  }
  function d3_time_expandYear(d) {
    return d + (d > 68 ? 1900 : 2e3);
  }
  function d3_time_parseMonthNumber(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
    return n ? (date.m = n[0] - 1, i + n[0].length) : -1;
  }
  function d3_time_parseDay(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
    return n ? (date.d = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseDayOfYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 3));
    return n ? (date.j = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseHour24(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
    return n ? (date.H = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseMinutes(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
    return n ? (date.M = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseSeconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
    return n ? (date.S = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseMilliseconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 3));
    return n ? (date.L = +n[0], i + n[0].length) : -1;
  }
  var d3_time_numberRe = /^\s*\d+/;
  function d3_time_parseAmPm(date, string, i) {
    var n = d3_time_amPmLookup.get(string.substring(i, i += 2).toLowerCase());
    return n == null ? -1 : (date.p = n, i);
  }
  var d3_time_amPmLookup = d3.map({
    am: 0,
    pm: 1
  });
  function d3_time_zone(d) {
    var z = d.getTimezoneOffset(), zs = z > 0 ? "-" : "+", zh = ~~(Math.abs(z) / 60), zm = Math.abs(z) % 60;
    return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2);
  }
  function d3_time_parseLiteralPercent(date, string, i) {
    d3_time_percentRe.lastIndex = 0;
    var n = d3_time_percentRe.exec(string.substring(i, i + 1));
    return n ? i + n[0].length : -1;
  }
  d3_time_format.utc = d3_time_formatUtc;
  function d3_time_formatUtc(template) {
    var local = d3_time_format(template);
    function format(date) {
      try {
        d3_date = d3_date_utc;
        var utc = new d3_date();
        utc._ = date;
        return local(utc);
      } finally {
        d3_date = Date;
      }
    }
    format.parse = function(string) {
      try {
        d3_date = d3_date_utc;
        var date = local.parse(string);
        return date && date._;
      } finally {
        d3_date = Date;
      }
    };
    format.toString = local.toString;
    return format;
  }
  var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
  d3_time_format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
  function d3_time_formatIsoNative(date) {
    return date.toISOString();
  }
  d3_time_formatIsoNative.parse = function(string) {
    var date = new Date(string);
    return isNaN(date) ? null : date;
  };
  d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
  d3_time.second = d3_time_interval(function(date) {
    return new d3_date(Math.floor(date / 1e3) * 1e3);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 1e3);
  }, function(date) {
    return date.getSeconds();
  });
  d3_time.seconds = d3_time.second.range;
  d3_time.seconds.utc = d3_time.second.utc.range;
  d3_time.minute = d3_time_interval(function(date) {
    return new d3_date(Math.floor(date / 6e4) * 6e4);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 6e4);
  }, function(date) {
    return date.getMinutes();
  });
  d3_time.minutes = d3_time.minute.range;
  d3_time.minutes.utc = d3_time.minute.utc.range;
  d3_time.hour = d3_time_interval(function(date) {
    var timezone = date.getTimezoneOffset() / 60;
    return new d3_date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 36e5);
  }, function(date) {
    return date.getHours();
  });
  d3_time.hours = d3_time.hour.range;
  d3_time.hours.utc = d3_time.hour.utc.range;
  d3_time.month = d3_time_interval(function(date) {
    date = d3_time.day(date);
    date.setDate(1);
    return date;
  }, function(date, offset) {
    date.setMonth(date.getMonth() + offset);
  }, function(date) {
    return date.getMonth();
  });
  d3_time.months = d3_time.month.range;
  d3_time.months.utc = d3_time.month.utc.range;
  function d3_time_scale(linear, methods, format) {
    function scale(x) {
      return linear(x);
    }
    scale.invert = function(x) {
      return d3_time_scaleDate(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return linear.domain().map(d3_time_scaleDate);
      linear.domain(x);
      return scale;
    };
    function tickMethod(extent, count) {
      var span = extent[1] - extent[0], target = span / count, i = d3.bisect(d3_time_scaleSteps, target);
      return i == d3_time_scaleSteps.length ? [ methods.year, d3_scale_linearTickRange(extent.map(function(d) {
        return d / 31536e6;
      }), count)[2] ] : !i ? [ d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2] ] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i];
    }
    scale.nice = function(interval, skip) {
      var domain = scale.domain(), extent = d3_scaleExtent(domain), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" && tickMethod(extent, interval);
      if (method) interval = method[0], skip = method[1];
      function skipped(date) {
        return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;
      }
      return scale.domain(d3_scale_nice(domain, skip > 1 ? {
        floor: function(date) {
          while (skipped(date = interval.floor(date))) date = d3_time_scaleDate(date - 1);
          return date;
        },
        ceil: function(date) {
          while (skipped(date = interval.ceil(date))) date = d3_time_scaleDate(+date + 1);
          return date;
        }
      } : interval));
    };
    scale.ticks = function(interval, skip) {
      var extent = d3_scaleExtent(scale.domain()), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" ? tickMethod(extent, interval) : !interval.range && [ {
        range: interval
      }, skip ];
      if (method) interval = method[0], skip = method[1];
      return interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), skip);
    };
    scale.tickFormat = function() {
      return format;
    };
    scale.copy = function() {
      return d3_time_scale(linear.copy(), methods, format);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  function d3_time_scaleDate(t) {
    return new Date(t);
  }
  function d3_time_scaleFormat(formats) {
    return function(date) {
      var i = formats.length - 1, f = formats[i];
      while (!f[1](date)) f = formats[--i];
      return f[0](date);
    };
  }
  var d3_time_scaleSteps = [ 1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6 ];
  var d3_time_scaleLocalMethods = [ [ d3_time.second, 1 ], [ d3_time.second, 5 ], [ d3_time.second, 15 ], [ d3_time.second, 30 ], [ d3_time.minute, 1 ], [ d3_time.minute, 5 ], [ d3_time.minute, 15 ], [ d3_time.minute, 30 ], [ d3_time.hour, 1 ], [ d3_time.hour, 3 ], [ d3_time.hour, 6 ], [ d3_time.hour, 12 ], [ d3_time.day, 1 ], [ d3_time.day, 2 ], [ d3_time.week, 1 ], [ d3_time.month, 1 ], [ d3_time.month, 3 ], [ d3_time.year, 1 ] ];
  var d3_time_scaleLocalFormats = [ [ d3_time_format("%Y"), d3_true ], [ d3_time_format("%B"), function(d) {
    return d.getMonth();
  } ], [ d3_time_format("%b %d"), function(d) {
    return d.getDate() != 1;
  } ], [ d3_time_format("%a %d"), function(d) {
    return d.getDay() && d.getDate() != 1;
  } ], [ d3_time_format("%I %p"), function(d) {
    return d.getHours();
  } ], [ d3_time_format("%I:%M"), function(d) {
    return d.getMinutes();
  } ], [ d3_time_format(":%S"), function(d) {
    return d.getSeconds();
  } ], [ d3_time_format(".%L"), function(d) {
    return d.getMilliseconds();
  } ] ];
  var d3_time_scaleLocalFormat = d3_time_scaleFormat(d3_time_scaleLocalFormats);
  d3_time_scaleLocalMethods.year = d3_time.year;
  d3_time.scale = function() {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
  };
  var d3_time_scaleMilliseconds = {
    range: function(start, stop, step) {
      return d3.range(+start, +stop, step).map(d3_time_scaleDate);
    }
  };
  var d3_time_scaleUTCMethods = d3_time_scaleLocalMethods.map(function(m) {
    return [ m[0].utc, m[1] ];
  });
  var d3_time_scaleUTCFormats = [ [ d3_time_formatUtc("%Y"), d3_true ], [ d3_time_formatUtc("%B"), function(d) {
    return d.getUTCMonth();
  } ], [ d3_time_formatUtc("%b %d"), function(d) {
    return d.getUTCDate() != 1;
  } ], [ d3_time_formatUtc("%a %d"), function(d) {
    return d.getUTCDay() && d.getUTCDate() != 1;
  } ], [ d3_time_formatUtc("%I %p"), function(d) {
    return d.getUTCHours();
  } ], [ d3_time_formatUtc("%I:%M"), function(d) {
    return d.getUTCMinutes();
  } ], [ d3_time_formatUtc(":%S"), function(d) {
    return d.getUTCSeconds();
  } ], [ d3_time_formatUtc(".%L"), function(d) {
    return d.getUTCMilliseconds();
  } ] ];
  var d3_time_scaleUTCFormat = d3_time_scaleFormat(d3_time_scaleUTCFormats);
  d3_time_scaleUTCMethods.year = d3_time.year.utc;
  d3_time.scale.utc = function() {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleUTCMethods, d3_time_scaleUTCFormat);
  };
  d3.text = d3_xhrType(function(request) {
    return request.responseText;
  });
  d3.json = function(url, callback) {
    return d3_xhr(url, "application/json", d3_json, callback);
  };
  function d3_json(request) {
    return JSON.parse(request.responseText);
  }
  d3.html = function(url, callback) {
    return d3_xhr(url, "text/html", d3_html, callback);
  };
  function d3_html(request) {
    var range = d3_document.createRange();
    range.selectNode(d3_document.body);
    return range.createContextualFragment(request.responseText);
  }
  d3.xml = d3_xhrType(function(request) {
    return request.responseXML;
  });
  return d3;
}();
},{}],2:[function(require,module,exports){
require("./d3");
module.exports = d3;
(function () { delete this.d3; })(); // unset global

},{"./d3":1}],3:[function(require,module,exports){
;(function(d3) {
	if (typeof module !== "undefined") {
		var d3 = require("d3");
	} else {
		d3 = window.d3;
	}

	console.log(d3);
	var chart = function(container, opts) {
		var axes = [];

		// SETUP
		opts = opts || {};
		container = container || "body";
		container = typeof container === "string" ? d3.select(container) : container;

		var margin = opts.margin || {top: 20, right: 50, bottom: 30, left: 30};

		var width = parseInt(container.style('width'), 10) - margin.right - margin.left,
			height = parseInt(container.style('height'), 10) - margin.top - margin.bottom,
			original_width = width; // for scaling + resizing

		if (container.namespaceURI !== "http://www.w3.org/2000/svg") {
			console.log("Not an SVG element. We'll make one for you.");
			var container = container.append("svg")
			    .attr("width", parseInt(container.style('width'), 10))
			    .attr("height", parseInt(container.style('height'), 10));
    	}

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
					scale.rangeRoundBands(opts.range).domain(opts.domain);
				} else {
					scale.rangeRoundBands(dir === "x" ? [0, width] : [height, 0]).domain(opts.domain);
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

			if (dir === "x") {
				opts.orientation = opts.orientation || "bottom";
				if (opts.orientation === "bottom") {
					axis_g.attr("transform", "translate(0," + height + ")")
				} else {
					axis_g.attr("transform", "translate(0,0)")
				}
				ax.orient(opts.orientation);

				if (opts.label) {
					axis_g.append("text")
					    .attr("x", width)
					    .attr("y", opts.orientation === "top" ? -25 : 25)
					    .style("text-anchor", "end")
					    .classed("axis_label", true)
					    .text(opts.label);
				}
			} else {
				opts.orientation = opts.orientation || "left";
				if (opts.orientation === "left") {
					axis_g.attr("transform", "translate(0,0)")
				} else {
					axis_g.attr("transform", "translate(0," + width + ")")
				}
				ax.orient(opts.orientation);

				if (opts.label) {
					axis_g.append("text")
					    .attr("transform", "rotate(-90)")
					    .attr("x", opts.label_offset || 0)
					    .attr("y", 5)
					    .attr("dy", ".71em")
					    .style("text-anchor", "end")
					    .attr("class", "axis_label")
					    .text(opts.label);
				}
			}
			axis_g.call(ax);

			var update = function(dur) {
				dur ? axis_g.transition(dur).call(ax) : axis_g.call(ax);
			};

			var resize_axis = function (z) {
				if (opts.type === "ordinal") {
					scale.rangeRoundBands(dir === "x" ? [0, width] : [height, 0]);
				} else {
					scale.range(dir === "x" ? [0, width] : [height, 0]);
				}
				if (opts.resize) {
					opts.resize(scale, axis, width, height, z);
				}
				if (opts.orientation == "bottom") {
					ax.attr("transform", "translate(0," + height + ")");
				} else if (opts.orientation == "right") {
					ax.attr("transform", "translate(" + width + ",0)");
				}
				update();			
			}

			// we'll return this object (and store it in the chart object)
			var obj = {
				scale: scale,
				axis: ax,
				update: update,
				resize: resize_axis
			};

			axes.push(obj);
			return obj;
		}

		// anything on this sublayer will scale down with a change in screen size
		// the axes should NOT be scaled if that chart resizes. It's much better to resize them directly to allow for the ticks to recalculate
		// thus, the axes belong to "layer", not "resize_layer"
		var resize_layer = layer.append("g").classed("resizable", true);

		function resize_chart() {
			var w = parseInt(container.style('width'), 10) - margin.right - margin.left,
				h = parseInt(container.style('height'), 10) - margin.top - margin.bottom,
				z = w / original_width;

			width = w;
			height = h;

			resize_layer.attr("transform", "scale(" + z + ",1)");

			axes.forEach(function(obj) {
				obj.resize(z);
			});

			if (opts.resize) {
				opts.resize(w, h, z);
			}

		}
		
		return {
			axis_layer: layer,
			resize_layer: resize_layer,
			height: height,
			width: width,
			setResize: function(rf) {
				opts.resize = rf;
			},
			addAxis: axis
		}
	}

	// make this compatible with browserify without requiring it
	if (typeof module !== "undefined") {
		module.exports = chart;
	} else {
		window.d3chart = chart;
	}

	// http://stackoverflow.com/questions/3339825/what-is-the-best-practise-to-not-to-override-other-bound-functions-to-window-onr
	function addResizeEvent(func) {
		var resizeTimer,
	    	oldResize = window.onresize;
	    window.onresize = function () {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function() {
				func();
		        if (typeof oldResize === 'function') {
		            oldResize();
		        }
			}, 100);
	    };
	}

}());
},{"d3":2}],4:[function(require,module,exports){
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
},{"../chart.js":3,"d3":2}]},{},[4])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvY3dpbHNvbjExMzAvRHJvcGJveC9Qcml2YXRlL25vZGVfbW9kdWxlcy9kMy9kMy5qcyIsIi9Vc2Vycy9jd2lsc29uMTEzMC9Ecm9wYm94L1ByaXZhdGUvbm9kZV9tb2R1bGVzL2QzL2luZGV4LWJyb3dzZXJpZnkuanMiLCIvVXNlcnMvY3dpbHNvbjExMzAvRHJvcGJveC9Qcml2YXRlL3RpbWUvbm9kZV9tb2R1bGVzL2NoYXJ0L2NoYXJ0LmpzIiwiL1VzZXJzL2N3aWxzb24xMTMwL0Ryb3Bib3gvUHJpdmF0ZS90aW1lL25vZGVfbW9kdWxlcy9jaGFydC9leGFtcGxlcy9icm93c2VyaWZ5X2V4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3B4UkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiZDMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGQzID0ge1xuICAgIHZlcnNpb246IFwiMy4zLjNcIlxuICB9O1xuICBpZiAoIURhdGUubm93KSBEYXRlLm5vdyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiArbmV3IERhdGUoKTtcbiAgfTtcbiAgdmFyIGQzX2FycmF5U2xpY2UgPSBbXS5zbGljZSwgZDNfYXJyYXkgPSBmdW5jdGlvbihsaXN0KSB7XG4gICAgcmV0dXJuIGQzX2FycmF5U2xpY2UuY2FsbChsaXN0KTtcbiAgfTtcbiAgdmFyIGQzX2RvY3VtZW50ID0gZG9jdW1lbnQsIGQzX2RvY3VtZW50RWxlbWVudCA9IGQzX2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZDNfd2luZG93ID0gd2luZG93O1xuICB0cnkge1xuICAgIGQzX2FycmF5KGQzX2RvY3VtZW50RWxlbWVudC5jaGlsZE5vZGVzKVswXS5ub2RlVHlwZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGQzX2FycmF5ID0gZnVuY3Rpb24obGlzdCkge1xuICAgICAgdmFyIGkgPSBsaXN0Lmxlbmd0aCwgYXJyYXkgPSBuZXcgQXJyYXkoaSk7XG4gICAgICB3aGlsZSAoaS0tKSBhcnJheVtpXSA9IGxpc3RbaV07XG4gICAgICByZXR1cm4gYXJyYXk7XG4gICAgfTtcbiAgfVxuICB0cnkge1xuICAgIGQzX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGUuc2V0UHJvcGVydHkoXCJvcGFjaXR5XCIsIDAsIFwiXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHZhciBkM19lbGVtZW50X3Byb3RvdHlwZSA9IGQzX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZSwgZDNfZWxlbWVudF9zZXRBdHRyaWJ1dGUgPSBkM19lbGVtZW50X3Byb3RvdHlwZS5zZXRBdHRyaWJ1dGUsIGQzX2VsZW1lbnRfc2V0QXR0cmlidXRlTlMgPSBkM19lbGVtZW50X3Byb3RvdHlwZS5zZXRBdHRyaWJ1dGVOUywgZDNfc3R5bGVfcHJvdG90eXBlID0gZDNfd2luZG93LkNTU1N0eWxlRGVjbGFyYXRpb24ucHJvdG90eXBlLCBkM19zdHlsZV9zZXRQcm9wZXJ0eSA9IGQzX3N0eWxlX3Byb3RvdHlwZS5zZXRQcm9wZXJ0eTtcbiAgICBkM19lbGVtZW50X3Byb3RvdHlwZS5zZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgZDNfZWxlbWVudF9zZXRBdHRyaWJ1dGUuY2FsbCh0aGlzLCBuYW1lLCB2YWx1ZSArIFwiXCIpO1xuICAgIH07XG4gICAgZDNfZWxlbWVudF9wcm90b3R5cGUuc2V0QXR0cmlidXRlTlMgPSBmdW5jdGlvbihzcGFjZSwgbG9jYWwsIHZhbHVlKSB7XG4gICAgICBkM19lbGVtZW50X3NldEF0dHJpYnV0ZU5TLmNhbGwodGhpcywgc3BhY2UsIGxvY2FsLCB2YWx1ZSArIFwiXCIpO1xuICAgIH07XG4gICAgZDNfc3R5bGVfcHJvdG90eXBlLnNldFByb3BlcnR5ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gICAgICBkM19zdHlsZV9zZXRQcm9wZXJ0eS5jYWxsKHRoaXMsIG5hbWUsIHZhbHVlICsgXCJcIiwgcHJpb3JpdHkpO1xuICAgIH07XG4gIH1cbiAgZDMuYXNjZW5kaW5nID0gZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogYSA+PSBiID8gMCA6IE5hTjtcbiAgfTtcbiAgZDMuZGVzY2VuZGluZyA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gYiA8IGEgPyAtMSA6IGIgPiBhID8gMSA6IGIgPj0gYSA/IDAgOiBOYU47XG4gIH07XG4gIGQzLm1pbiA9IGZ1bmN0aW9uKGFycmF5LCBmKSB7XG4gICAgdmFyIGkgPSAtMSwgbiA9IGFycmF5Lmxlbmd0aCwgYSwgYjtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgd2hpbGUgKCsraSA8IG4gJiYgISgoYSA9IGFycmF5W2ldKSAhPSBudWxsICYmIGEgPD0gYSkpIGEgPSB1bmRlZmluZWQ7XG4gICAgICB3aGlsZSAoKytpIDwgbikgaWYgKChiID0gYXJyYXlbaV0pICE9IG51bGwgJiYgYSA+IGIpIGEgPSBiO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoKytpIDwgbiAmJiAhKChhID0gZi5jYWxsKGFycmF5LCBhcnJheVtpXSwgaSkpICE9IG51bGwgJiYgYSA8PSBhKSkgYSA9IHVuZGVmaW5lZDtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSBpZiAoKGIgPSBmLmNhbGwoYXJyYXksIGFycmF5W2ldLCBpKSkgIT0gbnVsbCAmJiBhID4gYikgYSA9IGI7XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9O1xuICBkMy5tYXggPSBmdW5jdGlvbihhcnJheSwgZikge1xuICAgIHZhciBpID0gLTEsIG4gPSBhcnJheS5sZW5ndGgsIGEsIGI7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHdoaWxlICgrK2kgPCBuICYmICEoKGEgPSBhcnJheVtpXSkgIT0gbnVsbCAmJiBhIDw9IGEpKSBhID0gdW5kZWZpbmVkO1xuICAgICAgd2hpbGUgKCsraSA8IG4pIGlmICgoYiA9IGFycmF5W2ldKSAhPSBudWxsICYmIGIgPiBhKSBhID0gYjtcbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKCsraSA8IG4gJiYgISgoYSA9IGYuY2FsbChhcnJheSwgYXJyYXlbaV0sIGkpKSAhPSBudWxsICYmIGEgPD0gYSkpIGEgPSB1bmRlZmluZWQ7XG4gICAgICB3aGlsZSAoKytpIDwgbikgaWYgKChiID0gZi5jYWxsKGFycmF5LCBhcnJheVtpXSwgaSkpICE9IG51bGwgJiYgYiA+IGEpIGEgPSBiO1xuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfTtcbiAgZDMuZXh0ZW50ID0gZnVuY3Rpb24oYXJyYXksIGYpIHtcbiAgICB2YXIgaSA9IC0xLCBuID0gYXJyYXkubGVuZ3RoLCBhLCBiLCBjO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICB3aGlsZSAoKytpIDwgbiAmJiAhKChhID0gYyA9IGFycmF5W2ldKSAhPSBudWxsICYmIGEgPD0gYSkpIGEgPSBjID0gdW5kZWZpbmVkO1xuICAgICAgd2hpbGUgKCsraSA8IG4pIGlmICgoYiA9IGFycmF5W2ldKSAhPSBudWxsKSB7XG4gICAgICAgIGlmIChhID4gYikgYSA9IGI7XG4gICAgICAgIGlmIChjIDwgYikgYyA9IGI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlICgrK2kgPCBuICYmICEoKGEgPSBjID0gZi5jYWxsKGFycmF5LCBhcnJheVtpXSwgaSkpICE9IG51bGwgJiYgYSA8PSBhKSkgYSA9IHVuZGVmaW5lZDtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSBpZiAoKGIgPSBmLmNhbGwoYXJyYXksIGFycmF5W2ldLCBpKSkgIT0gbnVsbCkge1xuICAgICAgICBpZiAoYSA+IGIpIGEgPSBiO1xuICAgICAgICBpZiAoYyA8IGIpIGMgPSBiO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gWyBhLCBjIF07XG4gIH07XG4gIGQzLnN1bSA9IGZ1bmN0aW9uKGFycmF5LCBmKSB7XG4gICAgdmFyIHMgPSAwLCBuID0gYXJyYXkubGVuZ3RoLCBhLCBpID0gLTE7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSBpZiAoIWlzTmFOKGEgPSArYXJyYXlbaV0pKSBzICs9IGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSBpZiAoIWlzTmFOKGEgPSArZi5jYWxsKGFycmF5LCBhcnJheVtpXSwgaSkpKSBzICs9IGE7XG4gICAgfVxuICAgIHJldHVybiBzO1xuICB9O1xuICBmdW5jdGlvbiBkM19udW1iZXIoeCkge1xuICAgIHJldHVybiB4ICE9IG51bGwgJiYgIWlzTmFOKHgpO1xuICB9XG4gIGQzLm1lYW4gPSBmdW5jdGlvbihhcnJheSwgZikge1xuICAgIHZhciBuID0gYXJyYXkubGVuZ3RoLCBhLCBtID0gMCwgaSA9IC0xLCBqID0gMDtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgd2hpbGUgKCsraSA8IG4pIGlmIChkM19udW1iZXIoYSA9IGFycmF5W2ldKSkgbSArPSAoYSAtIG0pIC8gKytqO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoKytpIDwgbikgaWYgKGQzX251bWJlcihhID0gZi5jYWxsKGFycmF5LCBhcnJheVtpXSwgaSkpKSBtICs9IChhIC0gbSkgLyArK2o7XG4gICAgfVxuICAgIHJldHVybiBqID8gbSA6IHVuZGVmaW5lZDtcbiAgfTtcbiAgZDMucXVhbnRpbGUgPSBmdW5jdGlvbih2YWx1ZXMsIHApIHtcbiAgICB2YXIgSCA9ICh2YWx1ZXMubGVuZ3RoIC0gMSkgKiBwICsgMSwgaCA9IE1hdGguZmxvb3IoSCksIHYgPSArdmFsdWVzW2ggLSAxXSwgZSA9IEggLSBoO1xuICAgIHJldHVybiBlID8gdiArIGUgKiAodmFsdWVzW2hdIC0gdikgOiB2O1xuICB9O1xuICBkMy5tZWRpYW4gPSBmdW5jdGlvbihhcnJheSwgZikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkgYXJyYXkgPSBhcnJheS5tYXAoZik7XG4gICAgYXJyYXkgPSBhcnJheS5maWx0ZXIoZDNfbnVtYmVyKTtcbiAgICByZXR1cm4gYXJyYXkubGVuZ3RoID8gZDMucXVhbnRpbGUoYXJyYXkuc29ydChkMy5hc2NlbmRpbmcpLCAuNSkgOiB1bmRlZmluZWQ7XG4gIH07XG4gIGQzLmJpc2VjdG9yID0gZnVuY3Rpb24oZikge1xuICAgIHJldHVybiB7XG4gICAgICBsZWZ0OiBmdW5jdGlvbihhLCB4LCBsbywgaGkpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAzKSBsbyA9IDA7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgNCkgaGkgPSBhLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGxvIDwgaGkpIHtcbiAgICAgICAgICB2YXIgbWlkID0gbG8gKyBoaSA+Pj4gMTtcbiAgICAgICAgICBpZiAoZi5jYWxsKGEsIGFbbWlkXSwgbWlkKSA8IHgpIGxvID0gbWlkICsgMTsgZWxzZSBoaSA9IG1pZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG87XG4gICAgICB9LFxuICAgICAgcmlnaHQ6IGZ1bmN0aW9uKGEsIHgsIGxvLCBoaSkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMpIGxvID0gMDtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCA0KSBoaSA9IGEubGVuZ3RoO1xuICAgICAgICB3aGlsZSAobG8gPCBoaSkge1xuICAgICAgICAgIHZhciBtaWQgPSBsbyArIGhpID4+PiAxO1xuICAgICAgICAgIGlmICh4IDwgZi5jYWxsKGEsIGFbbWlkXSwgbWlkKSkgaGkgPSBtaWQ7IGVsc2UgbG8gPSBtaWQgKyAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsbztcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuICB2YXIgZDNfYmlzZWN0b3IgPSBkMy5iaXNlY3RvcihmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuIGQ7XG4gIH0pO1xuICBkMy5iaXNlY3RMZWZ0ID0gZDNfYmlzZWN0b3IubGVmdDtcbiAgZDMuYmlzZWN0ID0gZDMuYmlzZWN0UmlnaHQgPSBkM19iaXNlY3Rvci5yaWdodDtcbiAgZDMuc2h1ZmZsZSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgdmFyIG0gPSBhcnJheS5sZW5ndGgsIHQsIGk7XG4gICAgd2hpbGUgKG0pIHtcbiAgICAgIGkgPSBNYXRoLnJhbmRvbSgpICogbS0tIHwgMDtcbiAgICAgIHQgPSBhcnJheVttXSwgYXJyYXlbbV0gPSBhcnJheVtpXSwgYXJyYXlbaV0gPSB0O1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG4gIH07XG4gIGQzLnBlcm11dGUgPSBmdW5jdGlvbihhcnJheSwgaW5kZXhlcykge1xuICAgIHZhciBpID0gaW5kZXhlcy5sZW5ndGgsIHBlcm11dGVzID0gbmV3IEFycmF5KGkpO1xuICAgIHdoaWxlIChpLS0pIHBlcm11dGVzW2ldID0gYXJyYXlbaW5kZXhlc1tpXV07XG4gICAgcmV0dXJuIHBlcm11dGVzO1xuICB9O1xuICBkMy5wYWlycyA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgdmFyIGkgPSAwLCBuID0gYXJyYXkubGVuZ3RoIC0gMSwgcDAsIHAxID0gYXJyYXlbMF0sIHBhaXJzID0gbmV3IEFycmF5KG4gPCAwID8gMCA6IG4pO1xuICAgIHdoaWxlIChpIDwgbikgcGFpcnNbaV0gPSBbIHAwID0gcDEsIHAxID0gYXJyYXlbKytpXSBdO1xuICAgIHJldHVybiBwYWlycztcbiAgfTtcbiAgZDMuemlwID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCEobiA9IGFyZ3VtZW50cy5sZW5ndGgpKSByZXR1cm4gW107XG4gICAgZm9yICh2YXIgaSA9IC0xLCBtID0gZDMubWluKGFyZ3VtZW50cywgZDNfemlwTGVuZ3RoKSwgemlwcyA9IG5ldyBBcnJheShtKTsgKytpIDwgbTsgKSB7XG4gICAgICBmb3IgKHZhciBqID0gLTEsIG4sIHppcCA9IHppcHNbaV0gPSBuZXcgQXJyYXkobik7ICsraiA8IG47ICkge1xuICAgICAgICB6aXBbal0gPSBhcmd1bWVudHNbal1baV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB6aXBzO1xuICB9O1xuICBmdW5jdGlvbiBkM196aXBMZW5ndGgoZCkge1xuICAgIHJldHVybiBkLmxlbmd0aDtcbiAgfVxuICBkMy50cmFuc3Bvc2UgPSBmdW5jdGlvbihtYXRyaXgpIHtcbiAgICByZXR1cm4gZDMuemlwLmFwcGx5KGQzLCBtYXRyaXgpO1xuICB9O1xuICBkMy5rZXlzID0gZnVuY3Rpb24obWFwKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gbWFwKSBrZXlzLnB1c2goa2V5KTtcbiAgICByZXR1cm4ga2V5cztcbiAgfTtcbiAgZDMudmFsdWVzID0gZnVuY3Rpb24obWFwKSB7XG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBtYXApIHZhbHVlcy5wdXNoKG1hcFtrZXldKTtcbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xuICBkMy5lbnRyaWVzID0gZnVuY3Rpb24obWFwKSB7XG4gICAgdmFyIGVudHJpZXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gbWFwKSBlbnRyaWVzLnB1c2goe1xuICAgICAga2V5OiBrZXksXG4gICAgICB2YWx1ZTogbWFwW2tleV1cbiAgICB9KTtcbiAgICByZXR1cm4gZW50cmllcztcbiAgfTtcbiAgZDMubWVyZ2UgPSBmdW5jdGlvbihhcnJheXMpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJyYXlzKTtcbiAgfTtcbiAgZDMucmFuZ2UgPSBmdW5jdGlvbihzdGFydCwgc3RvcCwgc3RlcCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykge1xuICAgICAgc3RlcCA9IDE7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgc3RvcCA9IHN0YXJ0O1xuICAgICAgICBzdGFydCA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgoc3RvcCAtIHN0YXJ0KSAvIHN0ZXAgPT09IEluZmluaXR5KSB0aHJvdyBuZXcgRXJyb3IoXCJpbmZpbml0ZSByYW5nZVwiKTtcbiAgICB2YXIgcmFuZ2UgPSBbXSwgayA9IGQzX3JhbmdlX2ludGVnZXJTY2FsZShNYXRoLmFicyhzdGVwKSksIGkgPSAtMSwgajtcbiAgICBzdGFydCAqPSBrLCBzdG9wICo9IGssIHN0ZXAgKj0gaztcbiAgICBpZiAoc3RlcCA8IDApIHdoaWxlICgoaiA9IHN0YXJ0ICsgc3RlcCAqICsraSkgPiBzdG9wKSByYW5nZS5wdXNoKGogLyBrKTsgZWxzZSB3aGlsZSAoKGogPSBzdGFydCArIHN0ZXAgKiArK2kpIDwgc3RvcCkgcmFuZ2UucHVzaChqIC8gayk7XG4gICAgcmV0dXJuIHJhbmdlO1xuICB9O1xuICBmdW5jdGlvbiBkM19yYW5nZV9pbnRlZ2VyU2NhbGUoeCkge1xuICAgIHZhciBrID0gMTtcbiAgICB3aGlsZSAoeCAqIGsgJSAxKSBrICo9IDEwO1xuICAgIHJldHVybiBrO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2NsYXNzKGN0b3IsIHByb3BlcnRpZXMpIHtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BlcnRpZXMpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGN0b3IucHJvdG90eXBlLCBrZXksIHtcbiAgICAgICAgICB2YWx1ZTogcHJvcGVydGllc1trZXldLFxuICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGN0b3IucHJvdG90eXBlID0gcHJvcGVydGllcztcbiAgICB9XG4gIH1cbiAgZDMubWFwID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIG1hcCA9IG5ldyBkM19NYXAoKTtcbiAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgZDNfTWFwKSBvYmplY3QuZm9yRWFjaChmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICBtYXAuc2V0KGtleSwgdmFsdWUpO1xuICAgIH0pOyBlbHNlIGZvciAodmFyIGtleSBpbiBvYmplY3QpIG1hcC5zZXQoa2V5LCBvYmplY3Rba2V5XSk7XG4gICAgcmV0dXJuIG1hcDtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfTWFwKCkge31cbiAgZDNfY2xhc3MoZDNfTWFwLCB7XG4gICAgaGFzOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBkM19tYXBfcHJlZml4ICsga2V5IGluIHRoaXM7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXNbZDNfbWFwX3ByZWZpeCArIGtleV07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzW2QzX21hcF9wcmVmaXggKyBrZXldID0gdmFsdWU7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uKGtleSkge1xuICAgICAga2V5ID0gZDNfbWFwX3ByZWZpeCArIGtleTtcbiAgICAgIHJldHVybiBrZXkgaW4gdGhpcyAmJiBkZWxldGUgdGhpc1trZXldO1xuICAgIH0sXG4gICAga2V5czogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIga2V5cyA9IFtdO1xuICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGtleXM7XG4gICAgfSxcbiAgICB2YWx1ZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH0sXG4gICAgZW50cmllczogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZW50cmllcyA9IFtdO1xuICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBlbnRyaWVzO1xuICAgIH0sXG4gICAgZm9yRWFjaDogZnVuY3Rpb24oZikge1xuICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMpIHtcbiAgICAgICAgaWYgKGtleS5jaGFyQ29kZUF0KDApID09PSBkM19tYXBfcHJlZml4Q29kZSkge1xuICAgICAgICAgIGYuY2FsbCh0aGlzLCBrZXkuc3Vic3RyaW5nKDEpLCB0aGlzW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgdmFyIGQzX21hcF9wcmVmaXggPSBcIlxcMFwiLCBkM19tYXBfcHJlZml4Q29kZSA9IGQzX21hcF9wcmVmaXguY2hhckNvZGVBdCgwKTtcbiAgZDMubmVzdCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBuZXN0ID0ge30sIGtleXMgPSBbXSwgc29ydEtleXMgPSBbXSwgc29ydFZhbHVlcywgcm9sbHVwO1xuICAgIGZ1bmN0aW9uIG1hcChtYXBUeXBlLCBhcnJheSwgZGVwdGgpIHtcbiAgICAgIGlmIChkZXB0aCA+PSBrZXlzLmxlbmd0aCkgcmV0dXJuIHJvbGx1cCA/IHJvbGx1cC5jYWxsKG5lc3QsIGFycmF5KSA6IHNvcnRWYWx1ZXMgPyBhcnJheS5zb3J0KHNvcnRWYWx1ZXMpIDogYXJyYXk7XG4gICAgICB2YXIgaSA9IC0xLCBuID0gYXJyYXkubGVuZ3RoLCBrZXkgPSBrZXlzW2RlcHRoKytdLCBrZXlWYWx1ZSwgb2JqZWN0LCBzZXR0ZXIsIHZhbHVlc0J5S2V5ID0gbmV3IGQzX01hcCgpLCB2YWx1ZXM7XG4gICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICBpZiAodmFsdWVzID0gdmFsdWVzQnlLZXkuZ2V0KGtleVZhbHVlID0ga2V5KG9iamVjdCA9IGFycmF5W2ldKSkpIHtcbiAgICAgICAgICB2YWx1ZXMucHVzaChvYmplY3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlc0J5S2V5LnNldChrZXlWYWx1ZSwgWyBvYmplY3QgXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtYXBUeXBlKSB7XG4gICAgICAgIG9iamVjdCA9IG1hcFR5cGUoKTtcbiAgICAgICAgc2V0dGVyID0gZnVuY3Rpb24oa2V5VmFsdWUsIHZhbHVlcykge1xuICAgICAgICAgIG9iamVjdC5zZXQoa2V5VmFsdWUsIG1hcChtYXBUeXBlLCB2YWx1ZXMsIGRlcHRoKSk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmplY3QgPSB7fTtcbiAgICAgICAgc2V0dGVyID0gZnVuY3Rpb24oa2V5VmFsdWUsIHZhbHVlcykge1xuICAgICAgICAgIG9iamVjdFtrZXlWYWx1ZV0gPSBtYXAobWFwVHlwZSwgdmFsdWVzLCBkZXB0aCk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB2YWx1ZXNCeUtleS5mb3JFYWNoKHNldHRlcik7XG4gICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBlbnRyaWVzKG1hcCwgZGVwdGgpIHtcbiAgICAgIGlmIChkZXB0aCA+PSBrZXlzLmxlbmd0aCkgcmV0dXJuIG1hcDtcbiAgICAgIHZhciBhcnJheSA9IFtdLCBzb3J0S2V5ID0gc29ydEtleXNbZGVwdGgrK107XG4gICAgICBtYXAuZm9yRWFjaChmdW5jdGlvbihrZXksIGtleU1hcCkge1xuICAgICAgICBhcnJheS5wdXNoKHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICB2YWx1ZXM6IGVudHJpZXMoa2V5TWFwLCBkZXB0aClcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzb3J0S2V5ID8gYXJyYXkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIHJldHVybiBzb3J0S2V5KGEua2V5LCBiLmtleSk7XG4gICAgICB9KSA6IGFycmF5O1xuICAgIH1cbiAgICBuZXN0Lm1hcCA9IGZ1bmN0aW9uKGFycmF5LCBtYXBUeXBlKSB7XG4gICAgICByZXR1cm4gbWFwKG1hcFR5cGUsIGFycmF5LCAwKTtcbiAgICB9O1xuICAgIG5lc3QuZW50cmllcyA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgICByZXR1cm4gZW50cmllcyhtYXAoZDMubWFwLCBhcnJheSwgMCksIDApO1xuICAgIH07XG4gICAgbmVzdC5rZXkgPSBmdW5jdGlvbihkKSB7XG4gICAgICBrZXlzLnB1c2goZCk7XG4gICAgICByZXR1cm4gbmVzdDtcbiAgICB9O1xuICAgIG5lc3Quc29ydEtleXMgPSBmdW5jdGlvbihvcmRlcikge1xuICAgICAgc29ydEtleXNba2V5cy5sZW5ndGggLSAxXSA9IG9yZGVyO1xuICAgICAgcmV0dXJuIG5lc3Q7XG4gICAgfTtcbiAgICBuZXN0LnNvcnRWYWx1ZXMgPSBmdW5jdGlvbihvcmRlcikge1xuICAgICAgc29ydFZhbHVlcyA9IG9yZGVyO1xuICAgICAgcmV0dXJuIG5lc3Q7XG4gICAgfTtcbiAgICBuZXN0LnJvbGx1cCA9IGZ1bmN0aW9uKGYpIHtcbiAgICAgIHJvbGx1cCA9IGY7XG4gICAgICByZXR1cm4gbmVzdDtcbiAgICB9O1xuICAgIHJldHVybiBuZXN0O1xuICB9O1xuICBkMy5zZXQgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHZhciBzZXQgPSBuZXcgZDNfU2V0KCk7XG4gICAgaWYgKGFycmF5KSBmb3IgKHZhciBpID0gMCwgbiA9IGFycmF5Lmxlbmd0aDsgaSA8IG47ICsraSkgc2V0LmFkZChhcnJheVtpXSk7XG4gICAgcmV0dXJuIHNldDtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfU2V0KCkge31cbiAgZDNfY2xhc3MoZDNfU2V0LCB7XG4gICAgaGFzOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIGQzX21hcF9wcmVmaXggKyB2YWx1ZSBpbiB0aGlzO1xuICAgIH0sXG4gICAgYWRkOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdGhpc1tkM19tYXBfcHJlZml4ICsgdmFsdWVdID0gdHJ1ZTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhbHVlID0gZDNfbWFwX3ByZWZpeCArIHZhbHVlO1xuICAgICAgcmV0dXJuIHZhbHVlIGluIHRoaXMgJiYgZGVsZXRlIHRoaXNbdmFsdWVdO1xuICAgIH0sXG4gICAgdmFsdWVzOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfSxcbiAgICBmb3JFYWNoOiBmdW5jdGlvbihmKSB7XG4gICAgICBmb3IgKHZhciB2YWx1ZSBpbiB0aGlzKSB7XG4gICAgICAgIGlmICh2YWx1ZS5jaGFyQ29kZUF0KDApID09PSBkM19tYXBfcHJlZml4Q29kZSkge1xuICAgICAgICAgIGYuY2FsbCh0aGlzLCB2YWx1ZS5zdWJzdHJpbmcoMSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgZDMuYmVoYXZpb3IgPSB7fTtcbiAgZDMucmViaW5kID0gZnVuY3Rpb24odGFyZ2V0LCBzb3VyY2UpIHtcbiAgICB2YXIgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoLCBtZXRob2Q7XG4gICAgd2hpbGUgKCsraSA8IG4pIHRhcmdldFttZXRob2QgPSBhcmd1bWVudHNbaV1dID0gZDNfcmViaW5kKHRhcmdldCwgc291cmNlLCBzb3VyY2VbbWV0aG9kXSk7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfcmViaW5kKHRhcmdldCwgc291cmNlLCBtZXRob2QpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdmFsdWUgPSBtZXRob2QuYXBwbHkoc291cmNlLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIHZhbHVlID09PSBzb3VyY2UgPyB0YXJnZXQgOiB2YWx1ZTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGQzX3ZlbmRvclN5bWJvbChvYmplY3QsIG5hbWUpIHtcbiAgICBpZiAobmFtZSBpbiBvYmplY3QpIHJldHVybiBuYW1lO1xuICAgIG5hbWUgPSBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHJpbmcoMSk7XG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBkM192ZW5kb3JQcmVmaXhlcy5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgIHZhciBwcmVmaXhOYW1lID0gZDNfdmVuZG9yUHJlZml4ZXNbaV0gKyBuYW1lO1xuICAgICAgaWYgKHByZWZpeE5hbWUgaW4gb2JqZWN0KSByZXR1cm4gcHJlZml4TmFtZTtcbiAgICB9XG4gIH1cbiAgdmFyIGQzX3ZlbmRvclByZWZpeGVzID0gWyBcIndlYmtpdFwiLCBcIm1zXCIsIFwibW96XCIsIFwiTW96XCIsIFwib1wiLCBcIk9cIiBdO1xuICBmdW5jdGlvbiBkM19ub29wKCkge31cbiAgZDMuZGlzcGF0Y2ggPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGlzcGF0Y2ggPSBuZXcgZDNfZGlzcGF0Y2goKSwgaSA9IC0xLCBuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB3aGlsZSAoKytpIDwgbikgZGlzcGF0Y2hbYXJndW1lbnRzW2ldXSA9IGQzX2Rpc3BhdGNoX2V2ZW50KGRpc3BhdGNoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2g7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX2Rpc3BhdGNoKCkge31cbiAgZDNfZGlzcGF0Y2gucHJvdG90eXBlLm9uID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgICB2YXIgaSA9IHR5cGUuaW5kZXhPZihcIi5cIiksIG5hbWUgPSBcIlwiO1xuICAgIGlmIChpID49IDApIHtcbiAgICAgIG5hbWUgPSB0eXBlLnN1YnN0cmluZyhpICsgMSk7XG4gICAgICB0eXBlID0gdHlwZS5zdWJzdHJpbmcoMCwgaSk7XG4gICAgfVxuICAgIGlmICh0eXBlKSByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyB0aGlzW3R5cGVdLm9uKG5hbWUpIDogdGhpc1t0eXBlXS5vbihuYW1lLCBsaXN0ZW5lcik7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgIGlmIChsaXN0ZW5lciA9PSBudWxsKSBmb3IgKHR5cGUgaW4gdGhpcykge1xuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSkgdGhpc1t0eXBlXS5vbihuYW1lLCBudWxsKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gZDNfZGlzcGF0Y2hfZXZlbnQoZGlzcGF0Y2gpIHtcbiAgICB2YXIgbGlzdGVuZXJzID0gW10sIGxpc3RlbmVyQnlOYW1lID0gbmV3IGQzX01hcCgpO1xuICAgIGZ1bmN0aW9uIGV2ZW50KCkge1xuICAgICAgdmFyIHogPSBsaXN0ZW5lcnMsIGkgPSAtMSwgbiA9IHoubGVuZ3RoLCBsO1xuICAgICAgd2hpbGUgKCsraSA8IG4pIGlmIChsID0geltpXS5vbikgbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIGRpc3BhdGNoO1xuICAgIH1cbiAgICBldmVudC5vbiA9IGZ1bmN0aW9uKG5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbCA9IGxpc3RlbmVyQnlOYW1lLmdldChuYW1lKSwgaTtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikgcmV0dXJuIGwgJiYgbC5vbjtcbiAgICAgIGlmIChsKSB7XG4gICAgICAgIGwub24gPSBudWxsO1xuICAgICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuc2xpY2UoMCwgaSA9IGxpc3RlbmVycy5pbmRleE9mKGwpKS5jb25jYXQobGlzdGVuZXJzLnNsaWNlKGkgKyAxKSk7XG4gICAgICAgIGxpc3RlbmVyQnlOYW1lLnJlbW92ZShuYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChsaXN0ZW5lcikgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXJCeU5hbWUuc2V0KG5hbWUsIHtcbiAgICAgICAgb246IGxpc3RlbmVyXG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gZGlzcGF0Y2g7XG4gICAgfTtcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cbiAgZDMuZXZlbnQgPSBudWxsO1xuICBmdW5jdGlvbiBkM19ldmVudFByZXZlbnREZWZhdWx0KCkge1xuICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfZXZlbnRTb3VyY2UoKSB7XG4gICAgdmFyIGUgPSBkMy5ldmVudCwgcztcbiAgICB3aGlsZSAocyA9IGUuc291cmNlRXZlbnQpIGUgPSBzO1xuICAgIHJldHVybiBlO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2V2ZW50RGlzcGF0Y2godGFyZ2V0KSB7XG4gICAgdmFyIGRpc3BhdGNoID0gbmV3IGQzX2Rpc3BhdGNoKCksIGkgPSAwLCBuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB3aGlsZSAoKytpIDwgbikgZGlzcGF0Y2hbYXJndW1lbnRzW2ldXSA9IGQzX2Rpc3BhdGNoX2V2ZW50KGRpc3BhdGNoKTtcbiAgICBkaXNwYXRjaC5vZiA9IGZ1bmN0aW9uKHRoaXosIGFyZ3VtZW50eikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUxKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGUwID0gZTEuc291cmNlRXZlbnQgPSBkMy5ldmVudDtcbiAgICAgICAgICBlMS50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgZDMuZXZlbnQgPSBlMTtcbiAgICAgICAgICBkaXNwYXRjaFtlMS50eXBlXS5hcHBseSh0aGl6LCBhcmd1bWVudHopO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGQzLmV2ZW50ID0gZTA7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gZGlzcGF0Y2g7XG4gIH1cbiAgZDMucmVxdW90ZSA9IGZ1bmN0aW9uKHMpIHtcbiAgICByZXR1cm4gcy5yZXBsYWNlKGQzX3JlcXVvdGVfcmUsIFwiXFxcXCQmXCIpO1xuICB9O1xuICB2YXIgZDNfcmVxdW90ZV9yZSA9IC9bXFxcXFxcXlxcJFxcKlxcK1xcP1xcfFxcW1xcXVxcKFxcKVxcLlxce1xcfV0vZztcbiAgdmFyIGQzX3N1YmNsYXNzID0ge30uX19wcm90b19fID8gZnVuY3Rpb24ob2JqZWN0LCBwcm90b3R5cGUpIHtcbiAgICBvYmplY3QuX19wcm90b19fID0gcHJvdG90eXBlO1xuICB9IDogZnVuY3Rpb24ob2JqZWN0LCBwcm90b3R5cGUpIHtcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBwcm90b3R5cGUpIG9iamVjdFtwcm9wZXJ0eV0gPSBwcm90b3R5cGVbcHJvcGVydHldO1xuICB9O1xuICBmdW5jdGlvbiBkM19zZWxlY3Rpb24oZ3JvdXBzKSB7XG4gICAgZDNfc3ViY2xhc3MoZ3JvdXBzLCBkM19zZWxlY3Rpb25Qcm90b3R5cGUpO1xuICAgIHJldHVybiBncm91cHM7XG4gIH1cbiAgdmFyIGQzX3NlbGVjdCA9IGZ1bmN0aW9uKHMsIG4pIHtcbiAgICByZXR1cm4gbi5xdWVyeVNlbGVjdG9yKHMpO1xuICB9LCBkM19zZWxlY3RBbGwgPSBmdW5jdGlvbihzLCBuKSB7XG4gICAgcmV0dXJuIG4ucXVlcnlTZWxlY3RvckFsbChzKTtcbiAgfSwgZDNfc2VsZWN0TWF0Y2hlciA9IGQzX2RvY3VtZW50RWxlbWVudFtkM192ZW5kb3JTeW1ib2woZDNfZG9jdW1lbnRFbGVtZW50LCBcIm1hdGNoZXNTZWxlY3RvclwiKV0sIGQzX3NlbGVjdE1hdGNoZXMgPSBmdW5jdGlvbihuLCBzKSB7XG4gICAgcmV0dXJuIGQzX3NlbGVjdE1hdGNoZXIuY2FsbChuLCBzKTtcbiAgfTtcbiAgaWYgKHR5cGVvZiBTaXp6bGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGQzX3NlbGVjdCA9IGZ1bmN0aW9uKHMsIG4pIHtcbiAgICAgIHJldHVybiBTaXp6bGUocywgbilbMF0gfHwgbnVsbDtcbiAgICB9O1xuICAgIGQzX3NlbGVjdEFsbCA9IGZ1bmN0aW9uKHMsIG4pIHtcbiAgICAgIHJldHVybiBTaXp6bGUudW5pcXVlU29ydChTaXp6bGUocywgbikpO1xuICAgIH07XG4gICAgZDNfc2VsZWN0TWF0Y2hlcyA9IFNpenpsZS5tYXRjaGVzU2VsZWN0b3I7XG4gIH1cbiAgZDMuc2VsZWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzX3NlbGVjdGlvblJvb3Q7XG4gIH07XG4gIHZhciBkM19zZWxlY3Rpb25Qcm90b3R5cGUgPSBkMy5zZWxlY3Rpb24ucHJvdG90eXBlID0gW107XG4gIGQzX3NlbGVjdGlvblByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgIHZhciBzdWJncm91cHMgPSBbXSwgc3ViZ3JvdXAsIHN1Ym5vZGUsIGdyb3VwLCBub2RlO1xuICAgIHNlbGVjdG9yID0gZDNfc2VsZWN0aW9uX3NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBmb3IgKHZhciBqID0gLTEsIG0gPSB0aGlzLmxlbmd0aDsgKytqIDwgbTsgKSB7XG4gICAgICBzdWJncm91cHMucHVzaChzdWJncm91cCA9IFtdKTtcbiAgICAgIHN1Ymdyb3VwLnBhcmVudE5vZGUgPSAoZ3JvdXAgPSB0aGlzW2pdKS5wYXJlbnROb2RlO1xuICAgICAgZm9yICh2YXIgaSA9IC0xLCBuID0gZ3JvdXAubGVuZ3RoOyArK2kgPCBuOyApIHtcbiAgICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICAgIHN1Ymdyb3VwLnB1c2goc3Vibm9kZSA9IHNlbGVjdG9yLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgaikpO1xuICAgICAgICAgIGlmIChzdWJub2RlICYmIFwiX19kYXRhX19cIiBpbiBub2RlKSBzdWJub2RlLl9fZGF0YV9fID0gbm9kZS5fX2RhdGFfXztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdWJncm91cC5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkM19zZWxlY3Rpb24oc3ViZ3JvdXBzKTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfc2VsZWN0aW9uX3NlbGVjdG9yKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJmdW5jdGlvblwiID8gc2VsZWN0b3IgOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBkM19zZWxlY3Qoc2VsZWN0b3IsIHRoaXMpO1xuICAgIH07XG4gIH1cbiAgZDNfc2VsZWN0aW9uUHJvdG90eXBlLnNlbGVjdEFsbCA9IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgdmFyIHN1Ymdyb3VwcyA9IFtdLCBzdWJncm91cCwgbm9kZTtcbiAgICBzZWxlY3RvciA9IGQzX3NlbGVjdGlvbl9zZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgZm9yICh2YXIgaiA9IC0xLCBtID0gdGhpcy5sZW5ndGg7ICsraiA8IG07ICkge1xuICAgICAgZm9yICh2YXIgZ3JvdXAgPSB0aGlzW2pdLCBpID0gLTEsIG4gPSBncm91cC5sZW5ndGg7ICsraSA8IG47ICkge1xuICAgICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgICAgc3ViZ3JvdXBzLnB1c2goc3ViZ3JvdXAgPSBkM19hcnJheShzZWxlY3Rvci5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGopKSk7XG4gICAgICAgICAgc3ViZ3JvdXAucGFyZW50Tm9kZSA9IG5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGQzX3NlbGVjdGlvbihzdWJncm91cHMpO1xuICB9O1xuICBmdW5jdGlvbiBkM19zZWxlY3Rpb25fc2VsZWN0b3JBbGwoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNlbGVjdG9yID09PSBcImZ1bmN0aW9uXCIgPyBzZWxlY3RvciA6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGQzX3NlbGVjdEFsbChzZWxlY3RvciwgdGhpcyk7XG4gICAgfTtcbiAgfVxuICB2YXIgZDNfbnNQcmVmaXggPSB7XG4gICAgc3ZnOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgeGh0bWw6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLFxuICAgIHhsaW5rOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcbiAgICB4bWw6IFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIlxuICB9O1xuICBkMy5ucyA9IHtcbiAgICBwcmVmaXg6IGQzX25zUHJlZml4LFxuICAgIHF1YWxpZnk6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHZhciBpID0gbmFtZS5pbmRleE9mKFwiOlwiKSwgcHJlZml4ID0gbmFtZTtcbiAgICAgIGlmIChpID49IDApIHtcbiAgICAgICAgcHJlZml4ID0gbmFtZS5zdWJzdHJpbmcoMCwgaSk7XG4gICAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cmluZyhpICsgMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZDNfbnNQcmVmaXguaGFzT3duUHJvcGVydHkocHJlZml4KSA/IHtcbiAgICAgICAgc3BhY2U6IGQzX25zUHJlZml4W3ByZWZpeF0sXG4gICAgICAgIGxvY2FsOiBuYW1lXG4gICAgICB9IDogbmFtZTtcbiAgICB9XG4gIH07XG4gIGQzX3NlbGVjdGlvblByb3RvdHlwZS5hdHRyID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMubm9kZSgpO1xuICAgICAgICBuYW1lID0gZDMubnMucXVhbGlmeShuYW1lKTtcbiAgICAgICAgcmV0dXJuIG5hbWUubG9jYWwgPyBub2RlLmdldEF0dHJpYnV0ZU5TKG5hbWUuc3BhY2UsIG5hbWUubG9jYWwpIDogbm9kZS5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhbHVlIGluIG5hbWUpIHRoaXMuZWFjaChkM19zZWxlY3Rpb25fYXR0cih2YWx1ZSwgbmFtZVt2YWx1ZV0pKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5lYWNoKGQzX3NlbGVjdGlvbl9hdHRyKG5hbWUsIHZhbHVlKSk7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX3NlbGVjdGlvbl9hdHRyKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IGQzLm5zLnF1YWxpZnkobmFtZSk7XG4gICAgZnVuY3Rpb24gYXR0ck51bGwoKSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXR0ck51bGxOUygpIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlTlMobmFtZS5zcGFjZSwgbmFtZS5sb2NhbCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0dHJDb25zdGFudCgpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXR0ckNvbnN0YW50TlMoKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZU5TKG5hbWUuc3BhY2UsIG5hbWUubG9jYWwsIHZhbHVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXR0ckZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHggPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgaWYgKHggPT0gbnVsbCkgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IGVsc2UgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgeCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0dHJGdW5jdGlvbk5TKCkge1xuICAgICAgdmFyIHggPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgaWYgKHggPT0gbnVsbCkgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhuYW1lLnNwYWNlLCBuYW1lLmxvY2FsKTsgZWxzZSB0aGlzLnNldEF0dHJpYnV0ZU5TKG5hbWUuc3BhY2UsIG5hbWUubG9jYWwsIHgpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IG5hbWUubG9jYWwgPyBhdHRyTnVsbE5TIDogYXR0ck51bGwgOiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IG5hbWUubG9jYWwgPyBhdHRyRnVuY3Rpb25OUyA6IGF0dHJGdW5jdGlvbiA6IG5hbWUubG9jYWwgPyBhdHRyQ29uc3RhbnROUyA6IGF0dHJDb25zdGFudDtcbiAgfVxuICBmdW5jdGlvbiBkM19jb2xsYXBzZShzKSB7XG4gICAgcmV0dXJuIHMudHJpbSgpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpO1xuICB9XG4gIGQzX3NlbGVjdGlvblByb3RvdHlwZS5jbGFzc2VkID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMubm9kZSgpLCBuID0gKG5hbWUgPSBuYW1lLnRyaW0oKS5zcGxpdCgvXnxcXHMrL2cpKS5sZW5ndGgsIGkgPSAtMTtcbiAgICAgICAgaWYgKHZhbHVlID0gbm9kZS5jbGFzc0xpc3QpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgbikgaWYgKCF2YWx1ZS5jb250YWlucyhuYW1lW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKTtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgbikgaWYgKCFkM19zZWxlY3Rpb25fY2xhc3NlZFJlKG5hbWVbaV0pLnRlc3QodmFsdWUpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBmb3IgKHZhbHVlIGluIG5hbWUpIHRoaXMuZWFjaChkM19zZWxlY3Rpb25fY2xhc3NlZCh2YWx1ZSwgbmFtZVt2YWx1ZV0pKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5lYWNoKGQzX3NlbGVjdGlvbl9jbGFzc2VkKG5hbWUsIHZhbHVlKSk7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX3NlbGVjdGlvbl9jbGFzc2VkUmUobmFtZSkge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XnxcXFxccyspXCIgKyBkMy5yZXF1b3RlKG5hbWUpICsgXCIoPzpcXFxccyt8JClcIiwgXCJnXCIpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3NlbGVjdGlvbl9jbGFzc2VkKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IG5hbWUudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKGQzX3NlbGVjdGlvbl9jbGFzc2VkTmFtZSk7XG4gICAgdmFyIG4gPSBuYW1lLmxlbmd0aDtcbiAgICBmdW5jdGlvbiBjbGFzc2VkQ29uc3RhbnQoKSB7XG4gICAgICB2YXIgaSA9IC0xO1xuICAgICAgd2hpbGUgKCsraSA8IG4pIG5hbWVbaV0odGhpcywgdmFsdWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbGFzc2VkRnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaSA9IC0xLCB4ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSBuYW1lW2ldKHRoaXMsIHgpO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBjbGFzc2VkRnVuY3Rpb24gOiBjbGFzc2VkQ29uc3RhbnQ7XG4gIH1cbiAgZnVuY3Rpb24gZDNfc2VsZWN0aW9uX2NsYXNzZWROYW1lKG5hbWUpIHtcbiAgICB2YXIgcmUgPSBkM19zZWxlY3Rpb25fY2xhc3NlZFJlKG5hbWUpO1xuICAgIHJldHVybiBmdW5jdGlvbihub2RlLCB2YWx1ZSkge1xuICAgICAgaWYgKGMgPSBub2RlLmNsYXNzTGlzdCkgcmV0dXJuIHZhbHVlID8gYy5hZGQobmFtZSkgOiBjLnJlbW92ZShuYW1lKTtcbiAgICAgIHZhciBjID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiO1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHJlLmxhc3RJbmRleCA9IDA7XG4gICAgICAgIGlmICghcmUudGVzdChjKSkgbm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBkM19jb2xsYXBzZShjICsgXCIgXCIgKyBuYW1lKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGQzX2NvbGxhcHNlKGMucmVwbGFjZShyZSwgXCIgXCIpKSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBkM19zZWxlY3Rpb25Qcm90b3R5cGUuc3R5bGUgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgICB2YXIgbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgaWYgKG4gPCAzKSB7XG4gICAgICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaWYgKG4gPCAyKSB2YWx1ZSA9IFwiXCI7XG4gICAgICAgIGZvciAocHJpb3JpdHkgaW4gbmFtZSkgdGhpcy5lYWNoKGQzX3NlbGVjdGlvbl9zdHlsZShwcmlvcml0eSwgbmFtZVtwcmlvcml0eV0sIHZhbHVlKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgaWYgKG4gPCAyKSByZXR1cm4gZDNfd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5ub2RlKCksIG51bGwpLmdldFByb3BlcnR5VmFsdWUobmFtZSk7XG4gICAgICBwcmlvcml0eSA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmVhY2goZDNfc2VsZWN0aW9uX3N0eWxlKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkpO1xuICB9O1xuICBmdW5jdGlvbiBkM19zZWxlY3Rpb25fc3R5bGUobmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gICAgZnVuY3Rpb24gc3R5bGVOdWxsKCkge1xuICAgICAgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3R5bGVDb25zdGFudCgpIHtcbiAgICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsdWUsIHByaW9yaXR5KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3R5bGVGdW5jdGlvbigpIHtcbiAgICAgIHZhciB4ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIGlmICh4ID09IG51bGwpIHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSk7IGVsc2UgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB4LCBwcmlvcml0eSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZSA9PSBudWxsID8gc3R5bGVOdWxsIDogdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBzdHlsZUZ1bmN0aW9uIDogc3R5bGVDb25zdGFudDtcbiAgfVxuICBkM19zZWxlY3Rpb25Qcm90b3R5cGUucHJvcGVydHkgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiKSByZXR1cm4gdGhpcy5ub2RlKClbbmFtZV07XG4gICAgICBmb3IgKHZhbHVlIGluIG5hbWUpIHRoaXMuZWFjaChkM19zZWxlY3Rpb25fcHJvcGVydHkodmFsdWUsIG5hbWVbdmFsdWVdKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZWFjaChkM19zZWxlY3Rpb25fcHJvcGVydHkobmFtZSwgdmFsdWUpKTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfc2VsZWN0aW9uX3Byb3BlcnR5KG5hbWUsIHZhbHVlKSB7XG4gICAgZnVuY3Rpb24gcHJvcGVydHlOdWxsKCkge1xuICAgICAgZGVsZXRlIHRoaXNbbmFtZV07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHByb3BlcnR5Q29uc3RhbnQoKSB7XG4gICAgICB0aGlzW25hbWVdID0gdmFsdWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHByb3BlcnR5RnVuY3Rpb24oKSB7XG4gICAgICB2YXIgeCA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBpZiAoeCA9PSBudWxsKSBkZWxldGUgdGhpc1tuYW1lXTsgZWxzZSB0aGlzW25hbWVdID0geDtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyBwcm9wZXJ0eU51bGwgOiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IHByb3BlcnR5RnVuY3Rpb24gOiBwcm9wZXJ0eUNvbnN0YW50O1xuICB9XG4gIGQzX3NlbGVjdGlvblByb3RvdHlwZS50ZXh0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMuZWFjaCh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgdGhpcy50ZXh0Q29udGVudCA9IHYgPT0gbnVsbCA/IFwiXCIgOiB2O1xuICAgIH0gOiB2YWx1ZSA9PSBudWxsID8gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9IDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgfSkgOiB0aGlzLm5vZGUoKS50ZXh0Q29udGVudDtcbiAgfTtcbiAgZDNfc2VsZWN0aW9uUHJvdG90eXBlLmh0bWwgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy5lYWNoKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB0aGlzLmlubmVySFRNTCA9IHYgPT0gbnVsbCA/IFwiXCIgOiB2O1xuICAgIH0gOiB2YWx1ZSA9PSBudWxsID8gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfSA6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICB9KSA6IHRoaXMubm9kZSgpLmlubmVySFRNTDtcbiAgfTtcbiAgZDNfc2VsZWN0aW9uUHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBuYW1lID0gZDNfc2VsZWN0aW9uX2NyZWF0b3IobmFtZSk7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0KGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuYXBwZW5kQ2hpbGQobmFtZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9KTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfc2VsZWN0aW9uX2NyZWF0b3IobmFtZSkge1xuICAgIHJldHVybiB0eXBlb2YgbmFtZSA9PT0gXCJmdW5jdGlvblwiID8gbmFtZSA6IChuYW1lID0gZDMubnMucXVhbGlmeShuYW1lKSkubG9jYWwgPyBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBkM19kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZS5zcGFjZSwgbmFtZS5sb2NhbCk7XG4gICAgfSA6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGQzX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh0aGlzLm5hbWVzcGFjZVVSSSwgbmFtZSk7XG4gICAgfTtcbiAgfVxuICBkM19zZWxlY3Rpb25Qcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24obmFtZSwgYmVmb3JlKSB7XG4gICAgbmFtZSA9IGQzX3NlbGVjdGlvbl9jcmVhdG9yKG5hbWUpO1xuICAgIGJlZm9yZSA9IGQzX3NlbGVjdGlvbl9zZWxlY3RvcihiZWZvcmUpO1xuICAgIHJldHVybiB0aGlzLnNlbGVjdChmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShuYW1lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIGJlZm9yZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9KTtcbiAgfTtcbiAgZDNfc2VsZWN0aW9uUHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICAgICAgaWYgKHBhcmVudCkgcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgIH0pO1xuICB9O1xuICBkM19zZWxlY3Rpb25Qcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICB2YXIgaSA9IC0xLCBuID0gdGhpcy5sZW5ndGgsIGdyb3VwLCBub2RlO1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdmFsdWUgPSBuZXcgQXJyYXkobiA9IChncm91cCA9IHRoaXNbMF0pLmxlbmd0aCk7XG4gICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgICAgdmFsdWVbaV0gPSBub2RlLl9fZGF0YV9fO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJpbmQoZ3JvdXAsIGdyb3VwRGF0YSkge1xuICAgICAgdmFyIGksIG4gPSBncm91cC5sZW5ndGgsIG0gPSBncm91cERhdGEubGVuZ3RoLCBuMCA9IE1hdGgubWluKG4sIG0pLCB1cGRhdGVOb2RlcyA9IG5ldyBBcnJheShtKSwgZW50ZXJOb2RlcyA9IG5ldyBBcnJheShtKSwgZXhpdE5vZGVzID0gbmV3IEFycmF5KG4pLCBub2RlLCBub2RlRGF0YTtcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgdmFyIG5vZGVCeUtleVZhbHVlID0gbmV3IGQzX01hcCgpLCBkYXRhQnlLZXlWYWx1ZSA9IG5ldyBkM19NYXAoKSwga2V5VmFsdWVzID0gW10sIGtleVZhbHVlO1xuICAgICAgICBmb3IgKGkgPSAtMTsgKytpIDwgbjsgKSB7XG4gICAgICAgICAga2V5VmFsdWUgPSBrZXkuY2FsbChub2RlID0gZ3JvdXBbaV0sIG5vZGUuX19kYXRhX18sIGkpO1xuICAgICAgICAgIGlmIChub2RlQnlLZXlWYWx1ZS5oYXMoa2V5VmFsdWUpKSB7XG4gICAgICAgICAgICBleGl0Tm9kZXNbaV0gPSBub2RlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlQnlLZXlWYWx1ZS5zZXQoa2V5VmFsdWUsIG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBrZXlWYWx1ZXMucHVzaChrZXlWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gLTE7ICsraSA8IG07ICkge1xuICAgICAgICAgIGtleVZhbHVlID0ga2V5LmNhbGwoZ3JvdXBEYXRhLCBub2RlRGF0YSA9IGdyb3VwRGF0YVtpXSwgaSk7XG4gICAgICAgICAgaWYgKG5vZGUgPSBub2RlQnlLZXlWYWx1ZS5nZXQoa2V5VmFsdWUpKSB7XG4gICAgICAgICAgICB1cGRhdGVOb2Rlc1tpXSA9IG5vZGU7XG4gICAgICAgICAgICBub2RlLl9fZGF0YV9fID0gbm9kZURhdGE7XG4gICAgICAgICAgfSBlbHNlIGlmICghZGF0YUJ5S2V5VmFsdWUuaGFzKGtleVZhbHVlKSkge1xuICAgICAgICAgICAgZW50ZXJOb2Rlc1tpXSA9IGQzX3NlbGVjdGlvbl9kYXRhTm9kZShub2RlRGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGFCeUtleVZhbHVlLnNldChrZXlWYWx1ZSwgbm9kZURhdGEpO1xuICAgICAgICAgIG5vZGVCeUtleVZhbHVlLnJlbW92ZShrZXlWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gLTE7ICsraSA8IG47ICkge1xuICAgICAgICAgIGlmIChub2RlQnlLZXlWYWx1ZS5oYXMoa2V5VmFsdWVzW2ldKSkge1xuICAgICAgICAgICAgZXhpdE5vZGVzW2ldID0gZ3JvdXBbaV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGkgPSAtMTsgKytpIDwgbjA7ICkge1xuICAgICAgICAgIG5vZGUgPSBncm91cFtpXTtcbiAgICAgICAgICBub2RlRGF0YSA9IGdyb3VwRGF0YVtpXTtcbiAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgbm9kZS5fX2RhdGFfXyA9IG5vZGVEYXRhO1xuICAgICAgICAgICAgdXBkYXRlTm9kZXNbaV0gPSBub2RlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbnRlck5vZGVzW2ldID0gZDNfc2VsZWN0aW9uX2RhdGFOb2RlKG5vZGVEYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7aSA8IG07ICsraSkge1xuICAgICAgICAgIGVudGVyTm9kZXNbaV0gPSBkM19zZWxlY3Rpb25fZGF0YU5vZGUoZ3JvdXBEYXRhW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDtpIDwgbjsgKytpKSB7XG4gICAgICAgICAgZXhpdE5vZGVzW2ldID0gZ3JvdXBbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVudGVyTm9kZXMudXBkYXRlID0gdXBkYXRlTm9kZXM7XG4gICAgICBlbnRlck5vZGVzLnBhcmVudE5vZGUgPSB1cGRhdGVOb2Rlcy5wYXJlbnROb2RlID0gZXhpdE5vZGVzLnBhcmVudE5vZGUgPSBncm91cC5wYXJlbnROb2RlO1xuICAgICAgZW50ZXIucHVzaChlbnRlck5vZGVzKTtcbiAgICAgIHVwZGF0ZS5wdXNoKHVwZGF0ZU5vZGVzKTtcbiAgICAgIGV4aXQucHVzaChleGl0Tm9kZXMpO1xuICAgIH1cbiAgICB2YXIgZW50ZXIgPSBkM19zZWxlY3Rpb25fZW50ZXIoW10pLCB1cGRhdGUgPSBkM19zZWxlY3Rpb24oW10pLCBleGl0ID0gZDNfc2VsZWN0aW9uKFtdKTtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICAgIGJpbmQoZ3JvdXAgPSB0aGlzW2ldLCB2YWx1ZS5jYWxsKGdyb3VwLCBncm91cC5wYXJlbnROb2RlLl9fZGF0YV9fLCBpKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICAgIGJpbmQoZ3JvdXAgPSB0aGlzW2ldLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZS5lbnRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGVudGVyO1xuICAgIH07XG4gICAgdXBkYXRlLmV4aXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleGl0O1xuICAgIH07XG4gICAgcmV0dXJuIHVwZGF0ZTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfc2VsZWN0aW9uX2RhdGFOb2RlKGRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgX19kYXRhX186IGRhdGFcbiAgICB9O1xuICB9XG4gIGQzX3NlbGVjdGlvblByb3RvdHlwZS5kYXR1bSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnByb3BlcnR5KFwiX19kYXRhX19cIiwgdmFsdWUpIDogdGhpcy5wcm9wZXJ0eShcIl9fZGF0YV9fXCIpO1xuICB9O1xuICBkM19zZWxlY3Rpb25Qcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24oZmlsdGVyKSB7XG4gICAgdmFyIHN1Ymdyb3VwcyA9IFtdLCBzdWJncm91cCwgZ3JvdXAsIG5vZGU7XG4gICAgaWYgKHR5cGVvZiBmaWx0ZXIgIT09IFwiZnVuY3Rpb25cIikgZmlsdGVyID0gZDNfc2VsZWN0aW9uX2ZpbHRlcihmaWx0ZXIpO1xuICAgIGZvciAodmFyIGogPSAwLCBtID0gdGhpcy5sZW5ndGg7IGogPCBtOyBqKyspIHtcbiAgICAgIHN1Ymdyb3Vwcy5wdXNoKHN1Ymdyb3VwID0gW10pO1xuICAgICAgc3ViZ3JvdXAucGFyZW50Tm9kZSA9IChncm91cCA9IHRoaXNbal0pLnBhcmVudE5vZGU7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbiA9IGdyb3VwLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgZmlsdGVyLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSkpIHtcbiAgICAgICAgICBzdWJncm91cC5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkM19zZWxlY3Rpb24oc3ViZ3JvdXBzKTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfc2VsZWN0aW9uX2ZpbHRlcihzZWxlY3Rvcikge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBkM19zZWxlY3RNYXRjaGVzKHRoaXMsIHNlbGVjdG9yKTtcbiAgICB9O1xuICB9XG4gIGQzX3NlbGVjdGlvblByb3RvdHlwZS5vcmRlciA9IGZ1bmN0aW9uKCkge1xuICAgIGZvciAodmFyIGogPSAtMSwgbSA9IHRoaXMubGVuZ3RoOyArK2ogPCBtOyApIHtcbiAgICAgIGZvciAodmFyIGdyb3VwID0gdGhpc1tqXSwgaSA9IGdyb3VwLmxlbmd0aCAtIDEsIG5leHQgPSBncm91cFtpXSwgbm9kZTsgLS1pID49IDA7ICkge1xuICAgICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgICAgaWYgKG5leHQgJiYgbmV4dCAhPT0gbm9kZS5uZXh0U2libGluZykgbmV4dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCBuZXh0KTtcbiAgICAgICAgICBuZXh0ID0gbm9kZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZDNfc2VsZWN0aW9uUHJvdG90eXBlLnNvcnQgPSBmdW5jdGlvbihjb21wYXJhdG9yKSB7XG4gICAgY29tcGFyYXRvciA9IGQzX3NlbGVjdGlvbl9zb3J0Q29tcGFyYXRvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGZvciAodmFyIGogPSAtMSwgbSA9IHRoaXMubGVuZ3RoOyArK2ogPCBtOyApIHRoaXNbal0uc29ydChjb21wYXJhdG9yKTtcbiAgICByZXR1cm4gdGhpcy5vcmRlcigpO1xuICB9O1xuICBmdW5jdGlvbiBkM19zZWxlY3Rpb25fc29ydENvbXBhcmF0b3IoY29tcGFyYXRvcikge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgY29tcGFyYXRvciA9IGQzLmFzY2VuZGluZztcbiAgICByZXR1cm4gZnVuY3Rpb24oYSwgYikge1xuICAgICAgcmV0dXJuIGEgJiYgYiA/IGNvbXBhcmF0b3IoYS5fX2RhdGFfXywgYi5fX2RhdGFfXykgOiAhYSAtICFiO1xuICAgIH07XG4gIH1cbiAgZDNfc2VsZWN0aW9uUHJvdG90eXBlLmVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIHJldHVybiBkM19zZWxlY3Rpb25fZWFjaCh0aGlzLCBmdW5jdGlvbihub2RlLCBpLCBqKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGopO1xuICAgIH0pO1xuICB9O1xuICBmdW5jdGlvbiBkM19zZWxlY3Rpb25fZWFjaChncm91cHMsIGNhbGxiYWNrKSB7XG4gICAgZm9yICh2YXIgaiA9IDAsIG0gPSBncm91cHMubGVuZ3RoOyBqIDwgbTsgaisrKSB7XG4gICAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgaSA9IDAsIG4gPSBncm91cC5sZW5ndGgsIG5vZGU7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkgY2FsbGJhY2sobm9kZSwgaSwgaik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBncm91cHM7XG4gIH1cbiAgZDNfc2VsZWN0aW9uUHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIHZhciBhcmdzID0gZDNfYXJyYXkoYXJndW1lbnRzKTtcbiAgICBjYWxsYmFjay5hcHBseShhcmdzWzBdID0gdGhpcywgYXJncyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGQzX3NlbGVjdGlvblByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhdGhpcy5ub2RlKCk7XG4gIH07XG4gIGQzX3NlbGVjdGlvblByb3RvdHlwZS5ub2RlID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaiA9IDAsIG0gPSB0aGlzLmxlbmd0aDsgaiA8IG07IGorKykge1xuICAgICAgZm9yICh2YXIgZ3JvdXAgPSB0aGlzW2pdLCBpID0gMCwgbiA9IGdyb3VwLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICB2YXIgbm9kZSA9IGdyb3VwW2ldO1xuICAgICAgICBpZiAobm9kZSkgcmV0dXJuIG5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuICBkM19zZWxlY3Rpb25Qcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBuID0gMDtcbiAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICArK247XG4gICAgfSk7XG4gICAgcmV0dXJuIG47XG4gIH07XG4gIGZ1bmN0aW9uIGQzX3NlbGVjdGlvbl9lbnRlcihzZWxlY3Rpb24pIHtcbiAgICBkM19zdWJjbGFzcyhzZWxlY3Rpb24sIGQzX3NlbGVjdGlvbl9lbnRlclByb3RvdHlwZSk7XG4gICAgcmV0dXJuIHNlbGVjdGlvbjtcbiAgfVxuICB2YXIgZDNfc2VsZWN0aW9uX2VudGVyUHJvdG90eXBlID0gW107XG4gIGQzLnNlbGVjdGlvbi5lbnRlciA9IGQzX3NlbGVjdGlvbl9lbnRlcjtcbiAgZDMuc2VsZWN0aW9uLmVudGVyLnByb3RvdHlwZSA9IGQzX3NlbGVjdGlvbl9lbnRlclByb3RvdHlwZTtcbiAgZDNfc2VsZWN0aW9uX2VudGVyUHJvdG90eXBlLmFwcGVuZCA9IGQzX3NlbGVjdGlvblByb3RvdHlwZS5hcHBlbmQ7XG4gIGQzX3NlbGVjdGlvbl9lbnRlclByb3RvdHlwZS5lbXB0eSA9IGQzX3NlbGVjdGlvblByb3RvdHlwZS5lbXB0eTtcbiAgZDNfc2VsZWN0aW9uX2VudGVyUHJvdG90eXBlLm5vZGUgPSBkM19zZWxlY3Rpb25Qcm90b3R5cGUubm9kZTtcbiAgZDNfc2VsZWN0aW9uX2VudGVyUHJvdG90eXBlLmNhbGwgPSBkM19zZWxlY3Rpb25Qcm90b3R5cGUuY2FsbDtcbiAgZDNfc2VsZWN0aW9uX2VudGVyUHJvdG90eXBlLnNpemUgPSBkM19zZWxlY3Rpb25Qcm90b3R5cGUuc2l6ZTtcbiAgZDNfc2VsZWN0aW9uX2VudGVyUHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgdmFyIHN1Ymdyb3VwcyA9IFtdLCBzdWJncm91cCwgc3Vibm9kZSwgdXBncm91cCwgZ3JvdXAsIG5vZGU7XG4gICAgZm9yICh2YXIgaiA9IC0xLCBtID0gdGhpcy5sZW5ndGg7ICsraiA8IG07ICkge1xuICAgICAgdXBncm91cCA9IChncm91cCA9IHRoaXNbal0pLnVwZGF0ZTtcbiAgICAgIHN1Ymdyb3Vwcy5wdXNoKHN1Ymdyb3VwID0gW10pO1xuICAgICAgc3ViZ3JvdXAucGFyZW50Tm9kZSA9IGdyb3VwLnBhcmVudE5vZGU7XG4gICAgICBmb3IgKHZhciBpID0gLTEsIG4gPSBncm91cC5sZW5ndGg7ICsraSA8IG47ICkge1xuICAgICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgICAgc3ViZ3JvdXAucHVzaCh1cGdyb3VwW2ldID0gc3Vibm9kZSA9IHNlbGVjdG9yLmNhbGwoZ3JvdXAucGFyZW50Tm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgaikpO1xuICAgICAgICAgIHN1Ym5vZGUuX19kYXRhX18gPSBub2RlLl9fZGF0YV9fO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN1Ymdyb3VwLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGQzX3NlbGVjdGlvbihzdWJncm91cHMpO1xuICB9O1xuICBkM19zZWxlY3Rpb25fZW50ZXJQcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24obmFtZSwgYmVmb3JlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSBiZWZvcmUgPSBkM19zZWxlY3Rpb25fZW50ZXJJbnNlcnRCZWZvcmUodGhpcyk7XG4gICAgcmV0dXJuIGQzX3NlbGVjdGlvblByb3RvdHlwZS5pbnNlcnQuY2FsbCh0aGlzLCBuYW1lLCBiZWZvcmUpO1xuICB9O1xuICBmdW5jdGlvbiBkM19zZWxlY3Rpb25fZW50ZXJJbnNlcnRCZWZvcmUoZW50ZXIpIHtcbiAgICB2YXIgaTAsIGowO1xuICAgIHJldHVybiBmdW5jdGlvbihkLCBpLCBqKSB7XG4gICAgICB2YXIgZ3JvdXAgPSBlbnRlcltqXS51cGRhdGUsIG4gPSBncm91cC5sZW5ndGgsIG5vZGU7XG4gICAgICBpZiAoaiAhPSBqMCkgajAgPSBqLCBpMCA9IDA7XG4gICAgICBpZiAoaSA+PSBpMCkgaTAgPSBpICsgMTtcbiAgICAgIHdoaWxlICghKG5vZGUgPSBncm91cFtpMF0pICYmICsraTAgPCBuKSA7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuICB9XG4gIGQzX3NlbGVjdGlvblByb3RvdHlwZS50cmFuc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGlkID0gZDNfdHJhbnNpdGlvbkluaGVyaXRJZCB8fCArK2QzX3RyYW5zaXRpb25JZCwgc3ViZ3JvdXBzID0gW10sIHN1Ymdyb3VwLCBub2RlLCB0cmFuc2l0aW9uID0gZDNfdHJhbnNpdGlvbkluaGVyaXQgfHwge1xuICAgICAgdGltZTogRGF0ZS5ub3coKSxcbiAgICAgIGVhc2U6IGQzX2Vhc2VfY3ViaWNJbk91dCxcbiAgICAgIGRlbGF5OiAwLFxuICAgICAgZHVyYXRpb246IDI1MFxuICAgIH07XG4gICAgZm9yICh2YXIgaiA9IC0xLCBtID0gdGhpcy5sZW5ndGg7ICsraiA8IG07ICkge1xuICAgICAgc3ViZ3JvdXBzLnB1c2goc3ViZ3JvdXAgPSBbXSk7XG4gICAgICBmb3IgKHZhciBncm91cCA9IHRoaXNbal0sIGkgPSAtMSwgbiA9IGdyb3VwLmxlbmd0aDsgKytpIDwgbjsgKSB7XG4gICAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIGQzX3RyYW5zaXRpb25Ob2RlKG5vZGUsIGksIGlkLCB0cmFuc2l0aW9uKTtcbiAgICAgICAgc3ViZ3JvdXAucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGQzX3RyYW5zaXRpb24oc3ViZ3JvdXBzLCBpZCk7XG4gIH07XG4gIGQzX3NlbGVjdGlvblByb3RvdHlwZS5pbnRlcnJ1cHQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGQzX3NlbGVjdGlvbl9pbnRlcnJ1cHQpO1xuICB9O1xuICBmdW5jdGlvbiBkM19zZWxlY3Rpb25faW50ZXJydXB0KCkge1xuICAgIHZhciBsb2NrID0gdGhpcy5fX3RyYW5zaXRpb25fXztcbiAgICBpZiAobG9jaykgKytsb2NrLmFjdGl2ZTtcbiAgfVxuICBkMy5zZWxlY3QgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgdmFyIGdyb3VwID0gWyB0eXBlb2Ygbm9kZSA9PT0gXCJzdHJpbmdcIiA/IGQzX3NlbGVjdChub2RlLCBkM19kb2N1bWVudCkgOiBub2RlIF07XG4gICAgZ3JvdXAucGFyZW50Tm9kZSA9IGQzX2RvY3VtZW50RWxlbWVudDtcbiAgICByZXR1cm4gZDNfc2VsZWN0aW9uKFsgZ3JvdXAgXSk7XG4gIH07XG4gIGQzLnNlbGVjdEFsbCA9IGZ1bmN0aW9uKG5vZGVzKSB7XG4gICAgdmFyIGdyb3VwID0gZDNfYXJyYXkodHlwZW9mIG5vZGVzID09PSBcInN0cmluZ1wiID8gZDNfc2VsZWN0QWxsKG5vZGVzLCBkM19kb2N1bWVudCkgOiBub2Rlcyk7XG4gICAgZ3JvdXAucGFyZW50Tm9kZSA9IGQzX2RvY3VtZW50RWxlbWVudDtcbiAgICByZXR1cm4gZDNfc2VsZWN0aW9uKFsgZ3JvdXAgXSk7XG4gIH07XG4gIHZhciBkM19zZWxlY3Rpb25Sb290ID0gZDMuc2VsZWN0KGQzX2RvY3VtZW50RWxlbWVudCk7XG4gIGQzX3NlbGVjdGlvblByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyLCBjYXB0dXJlKSB7XG4gICAgdmFyIG4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGlmIChuIDwgMykge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlmIChuIDwgMikgbGlzdGVuZXIgPSBmYWxzZTtcbiAgICAgICAgZm9yIChjYXB0dXJlIGluIHR5cGUpIHRoaXMuZWFjaChkM19zZWxlY3Rpb25fb24oY2FwdHVyZSwgdHlwZVtjYXB0dXJlXSwgbGlzdGVuZXIpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBpZiAobiA8IDIpIHJldHVybiAobiA9IHRoaXMubm9kZSgpW1wiX19vblwiICsgdHlwZV0pICYmIG4uXztcbiAgICAgIGNhcHR1cmUgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZWFjaChkM19zZWxlY3Rpb25fb24odHlwZSwgbGlzdGVuZXIsIGNhcHR1cmUpKTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfc2VsZWN0aW9uX29uKHR5cGUsIGxpc3RlbmVyLCBjYXB0dXJlKSB7XG4gICAgdmFyIG5hbWUgPSBcIl9fb25cIiArIHR5cGUsIGkgPSB0eXBlLmluZGV4T2YoXCIuXCIpLCB3cmFwID0gZDNfc2VsZWN0aW9uX29uTGlzdGVuZXI7XG4gICAgaWYgKGkgPiAwKSB0eXBlID0gdHlwZS5zdWJzdHJpbmcoMCwgaSk7XG4gICAgdmFyIGZpbHRlciA9IGQzX3NlbGVjdGlvbl9vbkZpbHRlcnMuZ2V0KHR5cGUpO1xuICAgIGlmIChmaWx0ZXIpIHR5cGUgPSBmaWx0ZXIsIHdyYXAgPSBkM19zZWxlY3Rpb25fb25GaWx0ZXI7XG4gICAgZnVuY3Rpb24gb25SZW1vdmUoKSB7XG4gICAgICB2YXIgbCA9IHRoaXNbbmFtZV07XG4gICAgICBpZiAobCkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbCwgbC4kKTtcbiAgICAgICAgZGVsZXRlIHRoaXNbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQWRkKCkge1xuICAgICAgdmFyIGwgPSB3cmFwKGxpc3RlbmVyLCBkM19hcnJheShhcmd1bWVudHMpKTtcbiAgICAgIG9uUmVtb3ZlLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgdGhpc1tuYW1lXSA9IGwsIGwuJCA9IGNhcHR1cmUpO1xuICAgICAgbC5fID0gbGlzdGVuZXI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbCgpIHtcbiAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoXCJeX19vbihbXi5dKylcIiArIGQzLnJlcXVvdGUodHlwZSkgKyBcIiRcIiksIG1hdGNoO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgIGlmIChtYXRjaCA9IG5hbWUubWF0Y2gocmUpKSB7XG4gICAgICAgICAgdmFyIGwgPSB0aGlzW25hbWVdO1xuICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihtYXRjaFsxXSwgbCwgbC4kKTtcbiAgICAgICAgICBkZWxldGUgdGhpc1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaSA/IGxpc3RlbmVyID8gb25BZGQgOiBvblJlbW92ZSA6IGxpc3RlbmVyID8gZDNfbm9vcCA6IHJlbW92ZUFsbDtcbiAgfVxuICB2YXIgZDNfc2VsZWN0aW9uX29uRmlsdGVycyA9IGQzLm1hcCh7XG4gICAgbW91c2VlbnRlcjogXCJtb3VzZW92ZXJcIixcbiAgICBtb3VzZWxlYXZlOiBcIm1vdXNlb3V0XCJcbiAgfSk7XG4gIGQzX3NlbGVjdGlvbl9vbkZpbHRlcnMuZm9yRWFjaChmdW5jdGlvbihrKSB7XG4gICAgaWYgKFwib25cIiArIGsgaW4gZDNfZG9jdW1lbnQpIGQzX3NlbGVjdGlvbl9vbkZpbHRlcnMucmVtb3ZlKGspO1xuICB9KTtcbiAgZnVuY3Rpb24gZDNfc2VsZWN0aW9uX29uTGlzdGVuZXIobGlzdGVuZXIsIGFyZ3VtZW50eikge1xuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgbyA9IGQzLmV2ZW50O1xuICAgICAgZDMuZXZlbnQgPSBlO1xuICAgICAgYXJndW1lbnR6WzBdID0gdGhpcy5fX2RhdGFfXztcbiAgICAgIHRyeSB7XG4gICAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50eik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBkMy5ldmVudCA9IG87XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBkM19zZWxlY3Rpb25fb25GaWx0ZXIobGlzdGVuZXIsIGFyZ3VtZW50eikge1xuICAgIHZhciBsID0gZDNfc2VsZWN0aW9uX29uTGlzdGVuZXIobGlzdGVuZXIsIGFyZ3VtZW50eik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciB0YXJnZXQgPSB0aGlzLCByZWxhdGVkID0gZS5yZWxhdGVkVGFyZ2V0O1xuICAgICAgaWYgKCFyZWxhdGVkIHx8IHJlbGF0ZWQgIT09IHRhcmdldCAmJiAhKHJlbGF0ZWQuY29tcGFyZURvY3VtZW50UG9zaXRpb24odGFyZ2V0KSAmIDgpKSB7XG4gICAgICAgIGwuY2FsbCh0YXJnZXQsIGUpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgdmFyIGQzX2V2ZW50X2RyYWdTZWxlY3QgPSBkM192ZW5kb3JTeW1ib2woZDNfZG9jdW1lbnRFbGVtZW50LnN0eWxlLCBcInVzZXJTZWxlY3RcIiksIGQzX2V2ZW50X2RyYWdJZCA9IDA7XG4gIGZ1bmN0aW9uIGQzX2V2ZW50X2RyYWdTdXBwcmVzcygpIHtcbiAgICB2YXIgbmFtZSA9IFwiLmRyYWdzdXBwcmVzcy1cIiArICsrZDNfZXZlbnRfZHJhZ0lkLCB0b3VjaG1vdmUgPSBcInRvdWNobW92ZVwiICsgbmFtZSwgc2VsZWN0c3RhcnQgPSBcInNlbGVjdHN0YXJ0XCIgKyBuYW1lLCBkcmFnc3RhcnQgPSBcImRyYWdzdGFydFwiICsgbmFtZSwgY2xpY2sgPSBcImNsaWNrXCIgKyBuYW1lLCB3ID0gZDMuc2VsZWN0KGQzX3dpbmRvdykub24odG91Y2htb3ZlLCBkM19ldmVudFByZXZlbnREZWZhdWx0KS5vbihzZWxlY3RzdGFydCwgZDNfZXZlbnRQcmV2ZW50RGVmYXVsdCkub24oZHJhZ3N0YXJ0LCBkM19ldmVudFByZXZlbnREZWZhdWx0KSwgc3R5bGUgPSBkM19kb2N1bWVudEVsZW1lbnQuc3R5bGUsIHNlbGVjdCA9IHN0eWxlW2QzX2V2ZW50X2RyYWdTZWxlY3RdO1xuICAgIHN0eWxlW2QzX2V2ZW50X2RyYWdTZWxlY3RdID0gXCJub25lXCI7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN1cHByZXNzQ2xpY2spIHtcbiAgICAgIHcub24obmFtZSwgbnVsbCk7XG4gICAgICBzdHlsZVtkM19ldmVudF9kcmFnU2VsZWN0XSA9IHNlbGVjdDtcbiAgICAgIGlmIChzdXBwcmVzc0NsaWNrKSB7XG4gICAgICAgIGZ1bmN0aW9uIG9mZigpIHtcbiAgICAgICAgICB3Lm9uKGNsaWNrLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICB3Lm9uKGNsaWNrLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkM19ldmVudFByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgb2ZmKCk7XG4gICAgICAgIH0sIHRydWUpO1xuICAgICAgICBzZXRUaW1lb3V0KG9mZiwgMCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBkMy5tb3VzZSA9IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xuICAgIHJldHVybiBkM19tb3VzZVBvaW50KGNvbnRhaW5lciwgZDNfZXZlbnRTb3VyY2UoKSk7XG4gIH07XG4gIHZhciBkM19tb3VzZV9idWc0NDA4MyA9IC9XZWJLaXQvLnRlc3QoZDNfd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpID8gLTEgOiAwO1xuICBmdW5jdGlvbiBkM19tb3VzZVBvaW50KGNvbnRhaW5lciwgZSkge1xuICAgIGlmIChlLmNoYW5nZWRUb3VjaGVzKSBlID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICB2YXIgc3ZnID0gY29udGFpbmVyLm93bmVyU1ZHRWxlbWVudCB8fCBjb250YWluZXI7XG4gICAgaWYgKHN2Zy5jcmVhdGVTVkdQb2ludCkge1xuICAgICAgdmFyIHBvaW50ID0gc3ZnLmNyZWF0ZVNWR1BvaW50KCk7XG4gICAgICBpZiAoZDNfbW91c2VfYnVnNDQwODMgPCAwICYmIChkM193aW5kb3cuc2Nyb2xsWCB8fCBkM193aW5kb3cuc2Nyb2xsWSkpIHtcbiAgICAgICAgc3ZnID0gZDMuc2VsZWN0KFwiYm9keVwiKS5hcHBlbmQoXCJzdmdcIikuc3R5bGUoe1xuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIlxuICAgICAgICB9LCBcImltcG9ydGFudFwiKTtcbiAgICAgICAgdmFyIGN0bSA9IHN2Z1swXVswXS5nZXRTY3JlZW5DVE0oKTtcbiAgICAgICAgZDNfbW91c2VfYnVnNDQwODMgPSAhKGN0bS5mIHx8IGN0bS5lKTtcbiAgICAgICAgc3ZnLnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgaWYgKGQzX21vdXNlX2J1ZzQ0MDgzKSBwb2ludC54ID0gZS5wYWdlWCwgcG9pbnQueSA9IGUucGFnZVk7IGVsc2UgcG9pbnQueCA9IGUuY2xpZW50WCwgXG4gICAgICBwb2ludC55ID0gZS5jbGllbnRZO1xuICAgICAgcG9pbnQgPSBwb2ludC5tYXRyaXhUcmFuc2Zvcm0oY29udGFpbmVyLmdldFNjcmVlbkNUTSgpLmludmVyc2UoKSk7XG4gICAgICByZXR1cm4gWyBwb2ludC54LCBwb2ludC55IF07XG4gICAgfVxuICAgIHZhciByZWN0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiBbIGUuY2xpZW50WCAtIHJlY3QubGVmdCAtIGNvbnRhaW5lci5jbGllbnRMZWZ0LCBlLmNsaWVudFkgLSByZWN0LnRvcCAtIGNvbnRhaW5lci5jbGllbnRUb3AgXTtcbiAgfVxuICBkMy50b3VjaGVzID0gZnVuY3Rpb24oY29udGFpbmVyLCB0b3VjaGVzKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB0b3VjaGVzID0gZDNfZXZlbnRTb3VyY2UoKS50b3VjaGVzO1xuICAgIHJldHVybiB0b3VjaGVzID8gZDNfYXJyYXkodG91Y2hlcykubWFwKGZ1bmN0aW9uKHRvdWNoKSB7XG4gICAgICB2YXIgcG9pbnQgPSBkM19tb3VzZVBvaW50KGNvbnRhaW5lciwgdG91Y2gpO1xuICAgICAgcG9pbnQuaWRlbnRpZmllciA9IHRvdWNoLmlkZW50aWZpZXI7XG4gICAgICByZXR1cm4gcG9pbnQ7XG4gICAgfSkgOiBbXTtcbiAgfTtcbiAgZDMuYmVoYXZpb3IuZHJhZyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBldmVudCA9IGQzX2V2ZW50RGlzcGF0Y2goZHJhZywgXCJkcmFnXCIsIFwiZHJhZ3N0YXJ0XCIsIFwiZHJhZ2VuZFwiKSwgb3JpZ2luID0gbnVsbCwgbW91c2Vkb3duID0gZHJhZ3N0YXJ0KGQzX25vb3AsIGQzLm1vdXNlLCBcIm1vdXNlbW92ZVwiLCBcIm1vdXNldXBcIiksIHRvdWNoc3RhcnQgPSBkcmFnc3RhcnQodG91Y2hpZCwgdG91Y2hwb3NpdGlvbiwgXCJ0b3VjaG1vdmVcIiwgXCJ0b3VjaGVuZFwiKTtcbiAgICBmdW5jdGlvbiBkcmFnKCkge1xuICAgICAgdGhpcy5vbihcIm1vdXNlZG93bi5kcmFnXCIsIG1vdXNlZG93bikub24oXCJ0b3VjaHN0YXJ0LmRyYWdcIiwgdG91Y2hzdGFydCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvdWNoaWQoKSB7XG4gICAgICByZXR1cm4gZDMuZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gdG91Y2hwb3NpdGlvbihwYXJlbnQsIGlkKSB7XG4gICAgICByZXR1cm4gZDMudG91Y2hlcyhwYXJlbnQpLmZpbHRlcihmdW5jdGlvbihwKSB7XG4gICAgICAgIHJldHVybiBwLmlkZW50aWZpZXIgPT09IGlkO1xuICAgICAgfSlbMF07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRyYWdzdGFydChpZCwgcG9zaXRpb24sIG1vdmUsIGVuZCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcywgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGUsIGV2ZW50XyA9IGV2ZW50Lm9mKHRhcmdldCwgYXJndW1lbnRzKSwgZXZlbnRUYXJnZXQgPSBkMy5ldmVudC50YXJnZXQsIGV2ZW50SWQgPSBpZCgpLCBkcmFnID0gZXZlbnRJZCA9PSBudWxsID8gXCJkcmFnXCIgOiBcImRyYWctXCIgKyBldmVudElkLCBvcmlnaW5fID0gcG9zaXRpb24ocGFyZW50LCBldmVudElkKSwgZHJhZ2dlZCA9IDAsIG9mZnNldCwgdyA9IGQzLnNlbGVjdChkM193aW5kb3cpLm9uKG1vdmUgKyBcIi5cIiArIGRyYWcsIG1vdmVkKS5vbihlbmQgKyBcIi5cIiArIGRyYWcsIGVuZGVkKSwgZHJhZ1Jlc3RvcmUgPSBkM19ldmVudF9kcmFnU3VwcHJlc3MoKTtcbiAgICAgICAgaWYgKG9yaWdpbikge1xuICAgICAgICAgIG9mZnNldCA9IG9yaWdpbi5hcHBseSh0YXJnZXQsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgb2Zmc2V0ID0gWyBvZmZzZXQueCAtIG9yaWdpbl9bMF0sIG9mZnNldC55IC0gb3JpZ2luX1sxXSBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9mZnNldCA9IFsgMCwgMCBdO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50Xyh7XG4gICAgICAgICAgdHlwZTogXCJkcmFnc3RhcnRcIlxuICAgICAgICB9KTtcbiAgICAgICAgZnVuY3Rpb24gbW92ZWQoKSB7XG4gICAgICAgICAgaWYgKCFwYXJlbnQpIHJldHVybiBlbmRlZCgpO1xuICAgICAgICAgIHZhciBwID0gcG9zaXRpb24ocGFyZW50LCBldmVudElkKSwgZHggPSBwWzBdIC0gb3JpZ2luX1swXSwgZHkgPSBwWzFdIC0gb3JpZ2luX1sxXTtcbiAgICAgICAgICBkcmFnZ2VkIHw9IGR4IHwgZHk7XG4gICAgICAgICAgb3JpZ2luXyA9IHA7XG4gICAgICAgICAgZXZlbnRfKHtcbiAgICAgICAgICAgIHR5cGU6IFwiZHJhZ1wiLFxuICAgICAgICAgICAgeDogcFswXSArIG9mZnNldFswXSxcbiAgICAgICAgICAgIHk6IHBbMV0gKyBvZmZzZXRbMV0sXG4gICAgICAgICAgICBkeDogZHgsXG4gICAgICAgICAgICBkeTogZHlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBlbmRlZCgpIHtcbiAgICAgICAgICB3Lm9uKG1vdmUgKyBcIi5cIiArIGRyYWcsIG51bGwpLm9uKGVuZCArIFwiLlwiICsgZHJhZywgbnVsbCk7XG4gICAgICAgICAgZHJhZ1Jlc3RvcmUoZHJhZ2dlZCAmJiBkMy5ldmVudC50YXJnZXQgPT09IGV2ZW50VGFyZ2V0KTtcbiAgICAgICAgICBldmVudF8oe1xuICAgICAgICAgICAgdHlwZTogXCJkcmFnZW5kXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgZHJhZy5vcmlnaW4gPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBvcmlnaW47XG4gICAgICBvcmlnaW4gPSB4O1xuICAgICAgcmV0dXJuIGRyYWc7XG4gICAgfTtcbiAgICByZXR1cm4gZDMucmViaW5kKGRyYWcsIGV2ZW50LCBcIm9uXCIpO1xuICB9O1xuICB2YXIgz4AgPSBNYXRoLlBJLCDOtSA9IDFlLTYsIM61MiA9IM61ICogzrUsIGQzX3JhZGlhbnMgPSDPgCAvIDE4MCwgZDNfZGVncmVlcyA9IDE4MCAvIM+AO1xuICBmdW5jdGlvbiBkM19zZ24oeCkge1xuICAgIHJldHVybiB4ID4gMCA/IDEgOiB4IDwgMCA/IC0xIDogMDtcbiAgfVxuICBmdW5jdGlvbiBkM19hY29zKHgpIHtcbiAgICByZXR1cm4geCA+IDEgPyAwIDogeCA8IC0xID8gz4AgOiBNYXRoLmFjb3MoeCk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfYXNpbih4KSB7XG4gICAgcmV0dXJuIHggPiAxID8gz4AgLyAyIDogeCA8IC0xID8gLc+AIC8gMiA6IE1hdGguYXNpbih4KTtcbiAgfVxuICBmdW5jdGlvbiBkM19zaW5oKHgpIHtcbiAgICByZXR1cm4gKE1hdGguZXhwKHgpIC0gTWF0aC5leHAoLXgpKSAvIDI7XG4gIH1cbiAgZnVuY3Rpb24gZDNfY29zaCh4KSB7XG4gICAgcmV0dXJuIChNYXRoLmV4cCh4KSArIE1hdGguZXhwKC14KSkgLyAyO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3RhbmgoeCkge1xuICAgIHJldHVybiBkM19zaW5oKHgpIC8gZDNfY29zaCh4KTtcbiAgfVxuICBmdW5jdGlvbiBkM19oYXZlcnNpbih4KSB7XG4gICAgcmV0dXJuICh4ID0gTWF0aC5zaW4oeCAvIDIpKSAqIHg7XG4gIH1cbiAgdmFyIM+BID0gTWF0aC5TUVJUMiwgz4EyID0gMiwgz4E0ID0gNDtcbiAgZDMuaW50ZXJwb2xhdGVab29tID0gZnVuY3Rpb24ocDAsIHAxKSB7XG4gICAgdmFyIHV4MCA9IHAwWzBdLCB1eTAgPSBwMFsxXSwgdzAgPSBwMFsyXSwgdXgxID0gcDFbMF0sIHV5MSA9IHAxWzFdLCB3MSA9IHAxWzJdO1xuICAgIHZhciBkeCA9IHV4MSAtIHV4MCwgZHkgPSB1eTEgLSB1eTAsIGQyID0gZHggKiBkeCArIGR5ICogZHksIGQxID0gTWF0aC5zcXJ0KGQyKSwgYjAgPSAodzEgKiB3MSAtIHcwICogdzAgKyDPgTQgKiBkMikgLyAoMiAqIHcwICogz4EyICogZDEpLCBiMSA9ICh3MSAqIHcxIC0gdzAgKiB3MCAtIM+BNCAqIGQyKSAvICgyICogdzEgKiDPgTIgKiBkMSksIHIwID0gTWF0aC5sb2coTWF0aC5zcXJ0KGIwICogYjAgKyAxKSAtIGIwKSwgcjEgPSBNYXRoLmxvZyhNYXRoLnNxcnQoYjEgKiBiMSArIDEpIC0gYjEpLCBkciA9IHIxIC0gcjAsIFMgPSAoZHIgfHwgTWF0aC5sb2codzEgLyB3MCkpIC8gz4E7XG4gICAgZnVuY3Rpb24gaW50ZXJwb2xhdGUodCkge1xuICAgICAgdmFyIHMgPSB0ICogUztcbiAgICAgIGlmIChkcikge1xuICAgICAgICB2YXIgY29zaHIwID0gZDNfY29zaChyMCksIHUgPSB3MCAvICjPgTIgKiBkMSkgKiAoY29zaHIwICogZDNfdGFuaCjPgSAqIHMgKyByMCkgLSBkM19zaW5oKHIwKSk7XG4gICAgICAgIHJldHVybiBbIHV4MCArIHUgKiBkeCwgdXkwICsgdSAqIGR5LCB3MCAqIGNvc2hyMCAvIGQzX2Nvc2goz4EgKiBzICsgcjApIF07XG4gICAgICB9XG4gICAgICByZXR1cm4gWyB1eDAgKyB0ICogZHgsIHV5MCArIHQgKiBkeSwgdzAgKiBNYXRoLmV4cCjPgSAqIHMpIF07XG4gICAgfVxuICAgIGludGVycG9sYXRlLmR1cmF0aW9uID0gUyAqIDFlMztcbiAgICByZXR1cm4gaW50ZXJwb2xhdGU7XG4gIH07XG4gIGQzLmJlaGF2aW9yLnpvb20gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmlldyA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgazogMVxuICAgIH0sIHRyYW5zbGF0ZTAsIGNlbnRlciwgc2l6ZSA9IFsgOTYwLCA1MDAgXSwgc2NhbGVFeHRlbnQgPSBkM19iZWhhdmlvcl96b29tSW5maW5pdHksIG1vdXNlZG93biA9IFwibW91c2Vkb3duLnpvb21cIiwgbW91c2Vtb3ZlID0gXCJtb3VzZW1vdmUuem9vbVwiLCBtb3VzZXVwID0gXCJtb3VzZXVwLnpvb21cIiwgbW91c2V3aGVlbFRpbWVyLCB0b3VjaHN0YXJ0ID0gXCJ0b3VjaHN0YXJ0Lnpvb21cIiwgdG91Y2h0aW1lLCBldmVudCA9IGQzX2V2ZW50RGlzcGF0Y2goem9vbSwgXCJ6b29tc3RhcnRcIiwgXCJ6b29tXCIsIFwiem9vbWVuZFwiKSwgeDAsIHgxLCB5MCwgeTE7XG4gICAgZnVuY3Rpb24gem9vbShnKSB7XG4gICAgICBnLm9uKG1vdXNlZG93biwgbW91c2Vkb3duZWQpLm9uKGQzX2JlaGF2aW9yX3pvb21XaGVlbCArIFwiLnpvb21cIiwgbW91c2V3aGVlbGVkKS5vbihtb3VzZW1vdmUsIG1vdXNld2hlZWxyZXNldCkub24oXCJkYmxjbGljay56b29tXCIsIGRibGNsaWNrZWQpLm9uKHRvdWNoc3RhcnQsIHRvdWNoc3RhcnRlZCk7XG4gICAgfVxuICAgIHpvb20uZXZlbnQgPSBmdW5jdGlvbihnKSB7XG4gICAgICBnLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBldmVudF8gPSBldmVudC5vZih0aGlzLCBhcmd1bWVudHMpLCB2aWV3MSA9IHZpZXc7XG4gICAgICAgIGlmIChkM190cmFuc2l0aW9uSW5oZXJpdElkKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKS5lYWNoKFwic3RhcnQuem9vbVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZpZXcgPSB0aGlzLl9fY2hhcnRfXyB8fCB7XG4gICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgIGs6IDFcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB6b29tc3RhcnRlZChldmVudF8pO1xuICAgICAgICAgIH0pLnR3ZWVuKFwiem9vbTp6b29tXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGR4ID0gc2l6ZVswXSwgZHkgPSBzaXplWzFdLCBjeCA9IGR4IC8gMiwgY3kgPSBkeSAvIDIsIGkgPSBkMy5pbnRlcnBvbGF0ZVpvb20oWyAoY3ggLSB2aWV3LngpIC8gdmlldy5rLCAoY3kgLSB2aWV3LnkpIC8gdmlldy5rLCBkeCAvIHZpZXcuayBdLCBbIChjeCAtIHZpZXcxLngpIC8gdmlldzEuaywgKGN5IC0gdmlldzEueSkgLyB2aWV3MS5rLCBkeCAvIHZpZXcxLmsgXSk7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICB2YXIgbCA9IGkodCksIGsgPSBkeCAvIGxbMl07XG4gICAgICAgICAgICAgIHRoaXMuX19jaGFydF9fID0gdmlldyA9IHtcbiAgICAgICAgICAgICAgICB4OiBjeCAtIGxbMF0gKiBrLFxuICAgICAgICAgICAgICAgIHk6IGN5IC0gbFsxXSAqIGssXG4gICAgICAgICAgICAgICAgazoga1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB6b29tZWQoZXZlbnRfKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSkuZWFjaChcImVuZC56b29tXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgem9vbWVuZGVkKGV2ZW50Xyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fX2NoYXJ0X18gPSB2aWV3O1xuICAgICAgICAgIHpvb21zdGFydGVkKGV2ZW50Xyk7XG4gICAgICAgICAgem9vbWVkKGV2ZW50Xyk7XG4gICAgICAgICAgem9vbWVuZGVkKGV2ZW50Xyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgem9vbS50cmFuc2xhdGUgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBbIHZpZXcueCwgdmlldy55IF07XG4gICAgICB2aWV3ID0ge1xuICAgICAgICB4OiArX1swXSxcbiAgICAgICAgeTogK19bMV0sXG4gICAgICAgIGs6IHZpZXcua1xuICAgICAgfTtcbiAgICAgIHJlc2NhbGUoKTtcbiAgICAgIHJldHVybiB6b29tO1xuICAgIH07XG4gICAgem9vbS5zY2FsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHZpZXcuaztcbiAgICAgIHZpZXcgPSB7XG4gICAgICAgIHg6IHZpZXcueCxcbiAgICAgICAgeTogdmlldy55LFxuICAgICAgICBrOiArX1xuICAgICAgfTtcbiAgICAgIHJlc2NhbGUoKTtcbiAgICAgIHJldHVybiB6b29tO1xuICAgIH07XG4gICAgem9vbS5zY2FsZUV4dGVudCA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHNjYWxlRXh0ZW50O1xuICAgICAgc2NhbGVFeHRlbnQgPSBfID09IG51bGwgPyBkM19iZWhhdmlvcl96b29tSW5maW5pdHkgOiBbICtfWzBdLCArX1sxXSBdO1xuICAgICAgcmV0dXJuIHpvb207XG4gICAgfTtcbiAgICB6b29tLmNlbnRlciA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGNlbnRlcjtcbiAgICAgIGNlbnRlciA9IF8gJiYgWyArX1swXSwgK19bMV0gXTtcbiAgICAgIHJldHVybiB6b29tO1xuICAgIH07XG4gICAgem9vbS5zaXplID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gc2l6ZTtcbiAgICAgIHNpemUgPSBfICYmIFsgK19bMF0sICtfWzFdIF07XG4gICAgICByZXR1cm4gem9vbTtcbiAgICB9O1xuICAgIHpvb20ueCA9IGZ1bmN0aW9uKHopIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHgxO1xuICAgICAgeDEgPSB6O1xuICAgICAgeDAgPSB6LmNvcHkoKTtcbiAgICAgIHZpZXcgPSB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIGs6IDFcbiAgICAgIH07XG4gICAgICByZXR1cm4gem9vbTtcbiAgICB9O1xuICAgIHpvb20ueSA9IGZ1bmN0aW9uKHopIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHkxO1xuICAgICAgeTEgPSB6O1xuICAgICAgeTAgPSB6LmNvcHkoKTtcbiAgICAgIHZpZXcgPSB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIGs6IDFcbiAgICAgIH07XG4gICAgICByZXR1cm4gem9vbTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGxvY2F0aW9uKHApIHtcbiAgICAgIHJldHVybiBbIChwWzBdIC0gdmlldy54KSAvIHZpZXcuaywgKHBbMV0gLSB2aWV3LnkpIC8gdmlldy5rIF07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBvaW50KGwpIHtcbiAgICAgIHJldHVybiBbIGxbMF0gKiB2aWV3LmsgKyB2aWV3LngsIGxbMV0gKiB2aWV3LmsgKyB2aWV3LnkgXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NhbGVUbyhzKSB7XG4gICAgICB2aWV3LmsgPSBNYXRoLm1heChzY2FsZUV4dGVudFswXSwgTWF0aC5taW4oc2NhbGVFeHRlbnRbMV0sIHMpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlVG8ocCwgbCkge1xuICAgICAgbCA9IHBvaW50KGwpO1xuICAgICAgdmlldy54ICs9IHBbMF0gLSBsWzBdO1xuICAgICAgdmlldy55ICs9IHBbMV0gLSBsWzFdO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXNjYWxlKCkge1xuICAgICAgaWYgKHgxKSB4MS5kb21haW4oeDAucmFuZ2UoKS5tYXAoZnVuY3Rpb24oeCkge1xuICAgICAgICByZXR1cm4gKHggLSB2aWV3LngpIC8gdmlldy5rO1xuICAgICAgfSkubWFwKHgwLmludmVydCkpO1xuICAgICAgaWYgKHkxKSB5MS5kb21haW4oeTAucmFuZ2UoKS5tYXAoZnVuY3Rpb24oeSkge1xuICAgICAgICByZXR1cm4gKHkgLSB2aWV3LnkpIC8gdmlldy5rO1xuICAgICAgfSkubWFwKHkwLmludmVydCkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB6b29tc3RhcnRlZChldmVudCkge1xuICAgICAgZXZlbnQoe1xuICAgICAgICB0eXBlOiBcInpvb21zdGFydFwiXG4gICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gem9vbWVkKGV2ZW50KSB7XG4gICAgICByZXNjYWxlKCk7XG4gICAgICBldmVudCh7XG4gICAgICAgIHR5cGU6IFwiem9vbVwiLFxuICAgICAgICBzY2FsZTogdmlldy5rLFxuICAgICAgICB0cmFuc2xhdGU6IFsgdmlldy54LCB2aWV3LnkgXVxuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHpvb21lbmRlZChldmVudCkge1xuICAgICAgZXZlbnQoe1xuICAgICAgICB0eXBlOiBcInpvb21lbmRcIlxuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1vdXNlZG93bmVkKCkge1xuICAgICAgdmFyIHRhcmdldCA9IHRoaXMsIGV2ZW50XyA9IGV2ZW50Lm9mKHRhcmdldCwgYXJndW1lbnRzKSwgZXZlbnRUYXJnZXQgPSBkMy5ldmVudC50YXJnZXQsIGRyYWdnZWQgPSAwLCB3ID0gZDMuc2VsZWN0KGQzX3dpbmRvdykub24obW91c2Vtb3ZlLCBtb3ZlZCkub24obW91c2V1cCwgZW5kZWQpLCBsID0gbG9jYXRpb24oZDMubW91c2UodGFyZ2V0KSksIGRyYWdSZXN0b3JlID0gZDNfZXZlbnRfZHJhZ1N1cHByZXNzKCk7XG4gICAgICBkM19zZWxlY3Rpb25faW50ZXJydXB0LmNhbGwodGFyZ2V0KTtcbiAgICAgIHpvb21zdGFydGVkKGV2ZW50Xyk7XG4gICAgICBmdW5jdGlvbiBtb3ZlZCgpIHtcbiAgICAgICAgZHJhZ2dlZCA9IDE7XG4gICAgICAgIHRyYW5zbGF0ZVRvKGQzLm1vdXNlKHRhcmdldCksIGwpO1xuICAgICAgICB6b29tZWQoZXZlbnRfKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGVuZGVkKCkge1xuICAgICAgICB3Lm9uKG1vdXNlbW92ZSwgZDNfd2luZG93ID09PSB0YXJnZXQgPyBtb3VzZXdoZWVscmVzZXQgOiBudWxsKS5vbihtb3VzZXVwLCBudWxsKTtcbiAgICAgICAgZHJhZ1Jlc3RvcmUoZHJhZ2dlZCAmJiBkMy5ldmVudC50YXJnZXQgPT09IGV2ZW50VGFyZ2V0KTtcbiAgICAgICAgem9vbWVuZGVkKGV2ZW50Xyk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvdWNoc3RhcnRlZCgpIHtcbiAgICAgIHZhciB0YXJnZXQgPSB0aGlzLCBldmVudF8gPSBldmVudC5vZih0YXJnZXQsIGFyZ3VtZW50cyksIGxvY2F0aW9uczAgPSB7fSwgZGlzdGFuY2UwID0gMCwgc2NhbGUwLCBldmVudElkID0gZDMuZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllciwgdG91Y2htb3ZlID0gXCJ0b3VjaG1vdmUuem9vbS1cIiArIGV2ZW50SWQsIHRvdWNoZW5kID0gXCJ0b3VjaGVuZC56b29tLVwiICsgZXZlbnRJZCwgdyA9IGQzLnNlbGVjdChkM193aW5kb3cpLm9uKHRvdWNobW92ZSwgbW92ZWQpLm9uKHRvdWNoZW5kLCBlbmRlZCksIHQgPSBkMy5zZWxlY3QodGFyZ2V0KS5vbihtb3VzZWRvd24sIG51bGwpLm9uKHRvdWNoc3RhcnQsIHN0YXJ0ZWQpLCBkcmFnUmVzdG9yZSA9IGQzX2V2ZW50X2RyYWdTdXBwcmVzcygpO1xuICAgICAgZDNfc2VsZWN0aW9uX2ludGVycnVwdC5jYWxsKHRhcmdldCk7XG4gICAgICBzdGFydGVkKCk7XG4gICAgICB6b29tc3RhcnRlZChldmVudF8pO1xuICAgICAgZnVuY3Rpb24gcmVsb2NhdGUoKSB7XG4gICAgICAgIHZhciB0b3VjaGVzID0gZDMudG91Y2hlcyh0YXJnZXQpO1xuICAgICAgICBzY2FsZTAgPSB2aWV3Lms7XG4gICAgICAgIHRvdWNoZXMuZm9yRWFjaChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgaWYgKHQuaWRlbnRpZmllciBpbiBsb2NhdGlvbnMwKSBsb2NhdGlvbnMwW3QuaWRlbnRpZmllcl0gPSBsb2NhdGlvbih0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0b3VjaGVzO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gc3RhcnRlZCgpIHtcbiAgICAgICAgdmFyIGNoYW5nZWQgPSBkMy5ldmVudC5jaGFuZ2VkVG91Y2hlcztcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIG4gPSBjaGFuZ2VkLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgICAgIGxvY2F0aW9uczBbY2hhbmdlZFtpXS5pZGVudGlmaWVyXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRvdWNoZXMgPSByZWxvY2F0ZSgpLCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICBpZiAodG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBpZiAobm93IC0gdG91Y2h0aW1lIDwgNTAwKSB7XG4gICAgICAgICAgICB2YXIgcCA9IHRvdWNoZXNbMF0sIGwgPSBsb2NhdGlvbnMwW3AuaWRlbnRpZmllcl07XG4gICAgICAgICAgICBzY2FsZVRvKHZpZXcuayAqIDIpO1xuICAgICAgICAgICAgdHJhbnNsYXRlVG8ocCwgbCk7XG4gICAgICAgICAgICBkM19ldmVudFByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB6b29tZWQoZXZlbnRfKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG91Y2h0aW1lID0gbm93O1xuICAgICAgICB9IGVsc2UgaWYgKHRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHZhciBwID0gdG91Y2hlc1swXSwgcSA9IHRvdWNoZXNbMV0sIGR4ID0gcFswXSAtIHFbMF0sIGR5ID0gcFsxXSAtIHFbMV07XG4gICAgICAgICAgZGlzdGFuY2UwID0gZHggKiBkeCArIGR5ICogZHk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIG1vdmVkKCkge1xuICAgICAgICB2YXIgdG91Y2hlcyA9IGQzLnRvdWNoZXModGFyZ2V0KSwgcDAsIGwwLCBwMSwgbDE7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBuID0gdG91Y2hlcy5sZW5ndGg7IGkgPCBuOyArK2ksIGwxID0gbnVsbCkge1xuICAgICAgICAgIHAxID0gdG91Y2hlc1tpXTtcbiAgICAgICAgICBpZiAobDEgPSBsb2NhdGlvbnMwW3AxLmlkZW50aWZpZXJdKSB7XG4gICAgICAgICAgICBpZiAobDApIGJyZWFrO1xuICAgICAgICAgICAgcDAgPSBwMSwgbDAgPSBsMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGwxKSB7XG4gICAgICAgICAgdmFyIGRpc3RhbmNlMSA9IChkaXN0YW5jZTEgPSBwMVswXSAtIHAwWzBdKSAqIGRpc3RhbmNlMSArIChkaXN0YW5jZTEgPSBwMVsxXSAtIHAwWzFdKSAqIGRpc3RhbmNlMSwgc2NhbGUxID0gZGlzdGFuY2UwICYmIE1hdGguc3FydChkaXN0YW5jZTEgLyBkaXN0YW5jZTApO1xuICAgICAgICAgIHAwID0gWyAocDBbMF0gKyBwMVswXSkgLyAyLCAocDBbMV0gKyBwMVsxXSkgLyAyIF07XG4gICAgICAgICAgbDAgPSBbIChsMFswXSArIGwxWzBdKSAvIDIsIChsMFsxXSArIGwxWzFdKSAvIDIgXTtcbiAgICAgICAgICBzY2FsZVRvKHNjYWxlMSAqIHNjYWxlMCk7XG4gICAgICAgIH1cbiAgICAgICAgdG91Y2h0aW1lID0gbnVsbDtcbiAgICAgICAgdHJhbnNsYXRlVG8ocDAsIGwwKTtcbiAgICAgICAgem9vbWVkKGV2ZW50Xyk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBlbmRlZCgpIHtcbiAgICAgICAgaWYgKGQzLmV2ZW50LnRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGNoYW5nZWQgPSBkMy5ldmVudC5jaGFuZ2VkVG91Y2hlcztcbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbiA9IGNoYW5nZWQubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgICBkZWxldGUgbG9jYXRpb25zMFtjaGFuZ2VkW2ldLmlkZW50aWZpZXJdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKHZhciBpZGVudGlmaWVyIGluIGxvY2F0aW9uczApIHtcbiAgICAgICAgICAgIHJldHVybiB2b2lkIHJlbG9jYXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHcub24odG91Y2htb3ZlLCBudWxsKS5vbih0b3VjaGVuZCwgbnVsbCk7XG4gICAgICAgIHQub24obW91c2Vkb3duLCBtb3VzZWRvd25lZCkub24odG91Y2hzdGFydCwgdG91Y2hzdGFydGVkKTtcbiAgICAgICAgZHJhZ1Jlc3RvcmUoKTtcbiAgICAgICAgem9vbWVuZGVkKGV2ZW50Xyk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1vdXNld2hlZWxlZCgpIHtcbiAgICAgIHZhciBldmVudF8gPSBldmVudC5vZih0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgaWYgKG1vdXNld2hlZWxUaW1lcikgY2xlYXJUaW1lb3V0KG1vdXNld2hlZWxUaW1lcik7IGVsc2UgZDNfc2VsZWN0aW9uX2ludGVycnVwdC5jYWxsKHRoaXMpLCBcbiAgICAgIHpvb21zdGFydGVkKGV2ZW50Xyk7XG4gICAgICBtb3VzZXdoZWVsVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBtb3VzZXdoZWVsVGltZXIgPSBudWxsO1xuICAgICAgICB6b29tZW5kZWQoZXZlbnRfKTtcbiAgICAgIH0sIDUwKTtcbiAgICAgIGQzX2V2ZW50UHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBwb2ludCA9IGNlbnRlciB8fCBkMy5tb3VzZSh0aGlzKTtcbiAgICAgIGlmICghdHJhbnNsYXRlMCkgdHJhbnNsYXRlMCA9IGxvY2F0aW9uKHBvaW50KTtcbiAgICAgIHNjYWxlVG8oTWF0aC5wb3coMiwgZDNfYmVoYXZpb3Jfem9vbURlbHRhKCkgKiAuMDAyKSAqIHZpZXcuayk7XG4gICAgICB0cmFuc2xhdGVUbyhwb2ludCwgdHJhbnNsYXRlMCk7XG4gICAgICB6b29tZWQoZXZlbnRfKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbW91c2V3aGVlbHJlc2V0KCkge1xuICAgICAgdHJhbnNsYXRlMCA9IG51bGw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRibGNsaWNrZWQoKSB7XG4gICAgICB2YXIgZXZlbnRfID0gZXZlbnQub2YodGhpcywgYXJndW1lbnRzKSwgcCA9IGQzLm1vdXNlKHRoaXMpLCBsID0gbG9jYXRpb24ocCksIGsgPSBNYXRoLmxvZyh2aWV3LmspIC8gTWF0aC5MTjI7XG4gICAgICB6b29tc3RhcnRlZChldmVudF8pO1xuICAgICAgc2NhbGVUbyhNYXRoLnBvdygyLCBkMy5ldmVudC5zaGlmdEtleSA/IE1hdGguY2VpbChrKSAtIDEgOiBNYXRoLmZsb29yKGspICsgMSkpO1xuICAgICAgdHJhbnNsYXRlVG8ocCwgbCk7XG4gICAgICB6b29tZWQoZXZlbnRfKTtcbiAgICAgIHpvb21lbmRlZChldmVudF8pO1xuICAgIH1cbiAgICByZXR1cm4gZDMucmViaW5kKHpvb20sIGV2ZW50LCBcIm9uXCIpO1xuICB9O1xuICB2YXIgZDNfYmVoYXZpb3Jfem9vbUluZmluaXR5ID0gWyAwLCBJbmZpbml0eSBdO1xuICB2YXIgZDNfYmVoYXZpb3Jfem9vbURlbHRhLCBkM19iZWhhdmlvcl96b29tV2hlZWwgPSBcIm9ud2hlZWxcIiBpbiBkM19kb2N1bWVudCA/IChkM19iZWhhdmlvcl96b29tRGVsdGEgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gLWQzLmV2ZW50LmRlbHRhWSAqIChkMy5ldmVudC5kZWx0YU1vZGUgPyAxMjAgOiAxKTtcbiAgfSwgXCJ3aGVlbFwiKSA6IFwib25tb3VzZXdoZWVsXCIgaW4gZDNfZG9jdW1lbnQgPyAoZDNfYmVoYXZpb3Jfem9vbURlbHRhID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzLmV2ZW50LndoZWVsRGVsdGE7XG4gIH0sIFwibW91c2V3aGVlbFwiKSA6IChkM19iZWhhdmlvcl96b29tRGVsdGEgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gLWQzLmV2ZW50LmRldGFpbDtcbiAgfSwgXCJNb3pNb3VzZVBpeGVsU2Nyb2xsXCIpO1xuICBmdW5jdGlvbiBkM19Db2xvcigpIHt9XG4gIGQzX0NvbG9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJnYigpICsgXCJcIjtcbiAgfTtcbiAgZDMuaHNsID0gZnVuY3Rpb24oaCwgcywgbCkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gaCBpbnN0YW5jZW9mIGQzX0hzbCA/IGQzX2hzbChoLmgsIGgucywgaC5sKSA6IGQzX3JnYl9wYXJzZShcIlwiICsgaCwgZDNfcmdiX2hzbCwgZDNfaHNsKSA6IGQzX2hzbCgraCwgK3MsICtsKTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfaHNsKGgsIHMsIGwpIHtcbiAgICByZXR1cm4gbmV3IGQzX0hzbChoLCBzLCBsKTtcbiAgfVxuICBmdW5jdGlvbiBkM19Ic2woaCwgcywgbCkge1xuICAgIHRoaXMuaCA9IGg7XG4gICAgdGhpcy5zID0gcztcbiAgICB0aGlzLmwgPSBsO1xuICB9XG4gIHZhciBkM19oc2xQcm90b3R5cGUgPSBkM19Ic2wucHJvdG90eXBlID0gbmV3IGQzX0NvbG9yKCk7XG4gIGQzX2hzbFByb3RvdHlwZS5icmlnaHRlciA9IGZ1bmN0aW9uKGspIHtcbiAgICBrID0gTWF0aC5wb3coLjcsIGFyZ3VtZW50cy5sZW5ndGggPyBrIDogMSk7XG4gICAgcmV0dXJuIGQzX2hzbCh0aGlzLmgsIHRoaXMucywgdGhpcy5sIC8gayk7XG4gIH07XG4gIGQzX2hzbFByb3RvdHlwZS5kYXJrZXIgPSBmdW5jdGlvbihrKSB7XG4gICAgayA9IE1hdGgucG93KC43LCBhcmd1bWVudHMubGVuZ3RoID8gayA6IDEpO1xuICAgIHJldHVybiBkM19oc2wodGhpcy5oLCB0aGlzLnMsIGsgKiB0aGlzLmwpO1xuICB9O1xuICBkM19oc2xQcm90b3R5cGUucmdiID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzX2hzbF9yZ2IodGhpcy5oLCB0aGlzLnMsIHRoaXMubCk7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX2hzbF9yZ2IoaCwgcywgbCkge1xuICAgIHZhciBtMSwgbTI7XG4gICAgaCA9IGlzTmFOKGgpID8gMCA6IChoICU9IDM2MCkgPCAwID8gaCArIDM2MCA6IGg7XG4gICAgcyA9IGlzTmFOKHMpID8gMCA6IHMgPCAwID8gMCA6IHMgPiAxID8gMSA6IHM7XG4gICAgbCA9IGwgPCAwID8gMCA6IGwgPiAxID8gMSA6IGw7XG4gICAgbTIgPSBsIDw9IC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICAgIG0xID0gMiAqIGwgLSBtMjtcbiAgICBmdW5jdGlvbiB2KGgpIHtcbiAgICAgIGlmIChoID4gMzYwKSBoIC09IDM2MDsgZWxzZSBpZiAoaCA8IDApIGggKz0gMzYwO1xuICAgICAgaWYgKGggPCA2MCkgcmV0dXJuIG0xICsgKG0yIC0gbTEpICogaCAvIDYwO1xuICAgICAgaWYgKGggPCAxODApIHJldHVybiBtMjtcbiAgICAgIGlmIChoIDwgMjQwKSByZXR1cm4gbTEgKyAobTIgLSBtMSkgKiAoMjQwIC0gaCkgLyA2MDtcbiAgICAgIHJldHVybiBtMTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdnYoaCkge1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQodihoKSAqIDI1NSk7XG4gICAgfVxuICAgIHJldHVybiBkM19yZ2IodnYoaCArIDEyMCksIHZ2KGgpLCB2dihoIC0gMTIwKSk7XG4gIH1cbiAgZDMuaGNsID0gZnVuY3Rpb24oaCwgYywgbCkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gaCBpbnN0YW5jZW9mIGQzX0hjbCA/IGQzX2hjbChoLmgsIGguYywgaC5sKSA6IGggaW5zdGFuY2VvZiBkM19MYWIgPyBkM19sYWJfaGNsKGgubCwgaC5hLCBoLmIpIDogZDNfbGFiX2hjbCgoaCA9IGQzX3JnYl9sYWIoKGggPSBkMy5yZ2IoaCkpLnIsIGguZywgaC5iKSkubCwgaC5hLCBoLmIpIDogZDNfaGNsKCtoLCArYywgK2wpO1xuICB9O1xuICBmdW5jdGlvbiBkM19oY2woaCwgYywgbCkge1xuICAgIHJldHVybiBuZXcgZDNfSGNsKGgsIGMsIGwpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX0hjbChoLCBjLCBsKSB7XG4gICAgdGhpcy5oID0gaDtcbiAgICB0aGlzLmMgPSBjO1xuICAgIHRoaXMubCA9IGw7XG4gIH1cbiAgdmFyIGQzX2hjbFByb3RvdHlwZSA9IGQzX0hjbC5wcm90b3R5cGUgPSBuZXcgZDNfQ29sb3IoKTtcbiAgZDNfaGNsUHJvdG90eXBlLmJyaWdodGVyID0gZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBkM19oY2wodGhpcy5oLCB0aGlzLmMsIE1hdGgubWluKDEwMCwgdGhpcy5sICsgZDNfbGFiX0sgKiAoYXJndW1lbnRzLmxlbmd0aCA/IGsgOiAxKSkpO1xuICB9O1xuICBkM19oY2xQcm90b3R5cGUuZGFya2VyID0gZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBkM19oY2wodGhpcy5oLCB0aGlzLmMsIE1hdGgubWF4KDAsIHRoaXMubCAtIGQzX2xhYl9LICogKGFyZ3VtZW50cy5sZW5ndGggPyBrIDogMSkpKTtcbiAgfTtcbiAgZDNfaGNsUHJvdG90eXBlLnJnYiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkM19oY2xfbGFiKHRoaXMuaCwgdGhpcy5jLCB0aGlzLmwpLnJnYigpO1xuICB9O1xuICBmdW5jdGlvbiBkM19oY2xfbGFiKGgsIGMsIGwpIHtcbiAgICBpZiAoaXNOYU4oaCkpIGggPSAwO1xuICAgIGlmIChpc05hTihjKSkgYyA9IDA7XG4gICAgcmV0dXJuIGQzX2xhYihsLCBNYXRoLmNvcyhoICo9IGQzX3JhZGlhbnMpICogYywgTWF0aC5zaW4oaCkgKiBjKTtcbiAgfVxuICBkMy5sYWIgPSBmdW5jdGlvbihsLCBhLCBiKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBsIGluc3RhbmNlb2YgZDNfTGFiID8gZDNfbGFiKGwubCwgbC5hLCBsLmIpIDogbCBpbnN0YW5jZW9mIGQzX0hjbCA/IGQzX2hjbF9sYWIobC5sLCBsLmMsIGwuaCkgOiBkM19yZ2JfbGFiKChsID0gZDMucmdiKGwpKS5yLCBsLmcsIGwuYikgOiBkM19sYWIoK2wsICthLCArYik7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX2xhYihsLCBhLCBiKSB7XG4gICAgcmV0dXJuIG5ldyBkM19MYWIobCwgYSwgYik7XG4gIH1cbiAgZnVuY3Rpb24gZDNfTGFiKGwsIGEsIGIpIHtcbiAgICB0aGlzLmwgPSBsO1xuICAgIHRoaXMuYSA9IGE7XG4gICAgdGhpcy5iID0gYjtcbiAgfVxuICB2YXIgZDNfbGFiX0sgPSAxODtcbiAgdmFyIGQzX2xhYl9YID0gLjk1MDQ3LCBkM19sYWJfWSA9IDEsIGQzX2xhYl9aID0gMS4wODg4MztcbiAgdmFyIGQzX2xhYlByb3RvdHlwZSA9IGQzX0xhYi5wcm90b3R5cGUgPSBuZXcgZDNfQ29sb3IoKTtcbiAgZDNfbGFiUHJvdG90eXBlLmJyaWdodGVyID0gZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBkM19sYWIoTWF0aC5taW4oMTAwLCB0aGlzLmwgKyBkM19sYWJfSyAqIChhcmd1bWVudHMubGVuZ3RoID8gayA6IDEpKSwgdGhpcy5hLCB0aGlzLmIpO1xuICB9O1xuICBkM19sYWJQcm90b3R5cGUuZGFya2VyID0gZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBkM19sYWIoTWF0aC5tYXgoMCwgdGhpcy5sIC0gZDNfbGFiX0sgKiAoYXJndW1lbnRzLmxlbmd0aCA/IGsgOiAxKSksIHRoaXMuYSwgdGhpcy5iKTtcbiAgfTtcbiAgZDNfbGFiUHJvdG90eXBlLnJnYiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkM19sYWJfcmdiKHRoaXMubCwgdGhpcy5hLCB0aGlzLmIpO1xuICB9O1xuICBmdW5jdGlvbiBkM19sYWJfcmdiKGwsIGEsIGIpIHtcbiAgICB2YXIgeSA9IChsICsgMTYpIC8gMTE2LCB4ID0geSArIGEgLyA1MDAsIHogPSB5IC0gYiAvIDIwMDtcbiAgICB4ID0gZDNfbGFiX3h5eih4KSAqIGQzX2xhYl9YO1xuICAgIHkgPSBkM19sYWJfeHl6KHkpICogZDNfbGFiX1k7XG4gICAgeiA9IGQzX2xhYl94eXooeikgKiBkM19sYWJfWjtcbiAgICByZXR1cm4gZDNfcmdiKGQzX3h5el9yZ2IoMy4yNDA0NTQyICogeCAtIDEuNTM3MTM4NSAqIHkgLSAuNDk4NTMxNCAqIHopLCBkM194eXpfcmdiKC0uOTY5MjY2ICogeCArIDEuODc2MDEwOCAqIHkgKyAuMDQxNTU2ICogeiksIGQzX3h5el9yZ2IoLjA1NTY0MzQgKiB4IC0gLjIwNDAyNTkgKiB5ICsgMS4wNTcyMjUyICogeikpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2xhYl9oY2wobCwgYSwgYikge1xuICAgIHJldHVybiBsID4gMCA/IGQzX2hjbChNYXRoLmF0YW4yKGIsIGEpICogZDNfZGVncmVlcywgTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpLCBsKSA6IGQzX2hjbChOYU4sIE5hTiwgbCk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGFiX3h5eih4KSB7XG4gICAgcmV0dXJuIHggPiAuMjA2ODkzMDM0ID8geCAqIHggKiB4IDogKHggLSA0IC8gMjkpIC8gNy43ODcwMzc7XG4gIH1cbiAgZnVuY3Rpb24gZDNfeHl6X2xhYih4KSB7XG4gICAgcmV0dXJuIHggPiAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMSAvIDMpIDogNy43ODcwMzcgKiB4ICsgNCAvIDI5O1xuICB9XG4gIGZ1bmN0aW9uIGQzX3h5el9yZ2Iocikge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKDI1NSAqIChyIDw9IC4wMDMwNCA/IDEyLjkyICogciA6IDEuMDU1ICogTWF0aC5wb3cociwgMSAvIDIuNCkgLSAuMDU1KSk7XG4gIH1cbiAgZDMucmdiID0gZnVuY3Rpb24ociwgZywgYikge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gciBpbnN0YW5jZW9mIGQzX1JnYiA/IGQzX3JnYihyLnIsIHIuZywgci5iKSA6IGQzX3JnYl9wYXJzZShcIlwiICsgciwgZDNfcmdiLCBkM19oc2xfcmdiKSA6IGQzX3JnYih+fnIsIH5+Zywgfn5iKTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfcmdiTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIGQzX3JnYih2YWx1ZSA+PiAxNiwgdmFsdWUgPj4gOCAmIDI1NSwgdmFsdWUgJiAyNTUpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3JnYlN0cmluZyh2YWx1ZSkge1xuICAgIHJldHVybiBkM19yZ2JOdW1iZXIodmFsdWUpICsgXCJcIjtcbiAgfVxuICBmdW5jdGlvbiBkM19yZ2IociwgZywgYikge1xuICAgIHJldHVybiBuZXcgZDNfUmdiKHIsIGcsIGIpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX1JnYihyLCBnLCBiKSB7XG4gICAgdGhpcy5yID0gcjtcbiAgICB0aGlzLmcgPSBnO1xuICAgIHRoaXMuYiA9IGI7XG4gIH1cbiAgdmFyIGQzX3JnYlByb3RvdHlwZSA9IGQzX1JnYi5wcm90b3R5cGUgPSBuZXcgZDNfQ29sb3IoKTtcbiAgZDNfcmdiUHJvdG90eXBlLmJyaWdodGVyID0gZnVuY3Rpb24oaykge1xuICAgIGsgPSBNYXRoLnBvdyguNywgYXJndW1lbnRzLmxlbmd0aCA/IGsgOiAxKTtcbiAgICB2YXIgciA9IHRoaXMuciwgZyA9IHRoaXMuZywgYiA9IHRoaXMuYiwgaSA9IDMwO1xuICAgIGlmICghciAmJiAhZyAmJiAhYikgcmV0dXJuIGQzX3JnYihpLCBpLCBpKTtcbiAgICBpZiAociAmJiByIDwgaSkgciA9IGk7XG4gICAgaWYgKGcgJiYgZyA8IGkpIGcgPSBpO1xuICAgIGlmIChiICYmIGIgPCBpKSBiID0gaTtcbiAgICByZXR1cm4gZDNfcmdiKE1hdGgubWluKDI1NSwgfn4ociAvIGspKSwgTWF0aC5taW4oMjU1LCB+fihnIC8gaykpLCBNYXRoLm1pbigyNTUsIH5+KGIgLyBrKSkpO1xuICB9O1xuICBkM19yZ2JQcm90b3R5cGUuZGFya2VyID0gZnVuY3Rpb24oaykge1xuICAgIGsgPSBNYXRoLnBvdyguNywgYXJndW1lbnRzLmxlbmd0aCA/IGsgOiAxKTtcbiAgICByZXR1cm4gZDNfcmdiKH5+KGsgKiB0aGlzLnIpLCB+fihrICogdGhpcy5nKSwgfn4oayAqIHRoaXMuYikpO1xuICB9O1xuICBkM19yZ2JQcm90b3R5cGUuaHNsID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzX3JnYl9oc2wodGhpcy5yLCB0aGlzLmcsIHRoaXMuYik7XG4gIH07XG4gIGQzX3JnYlByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIiNcIiArIGQzX3JnYl9oZXgodGhpcy5yKSArIGQzX3JnYl9oZXgodGhpcy5nKSArIGQzX3JnYl9oZXgodGhpcy5iKTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfcmdiX2hleCh2KSB7XG4gICAgcmV0dXJuIHYgPCAxNiA/IFwiMFwiICsgTWF0aC5tYXgoMCwgdikudG9TdHJpbmcoMTYpIDogTWF0aC5taW4oMjU1LCB2KS50b1N0cmluZygxNik7XG4gIH1cbiAgZnVuY3Rpb24gZDNfcmdiX3BhcnNlKGZvcm1hdCwgcmdiLCBoc2wpIHtcbiAgICB2YXIgciA9IDAsIGcgPSAwLCBiID0gMCwgbTEsIG0yLCBuYW1lO1xuICAgIG0xID0gLyhbYS16XSspXFwoKC4qKVxcKS9pLmV4ZWMoZm9ybWF0KTtcbiAgICBpZiAobTEpIHtcbiAgICAgIG0yID0gbTFbMl0uc3BsaXQoXCIsXCIpO1xuICAgICAgc3dpdGNoIChtMVsxXSkge1xuICAgICAgIGNhc2UgXCJoc2xcIjpcbiAgICAgICAge1xuICAgICAgICAgIHJldHVybiBoc2wocGFyc2VGbG9hdChtMlswXSksIHBhcnNlRmxvYXQobTJbMV0pIC8gMTAwLCBwYXJzZUZsb2F0KG0yWzJdKSAvIDEwMCk7XG4gICAgICAgIH1cblxuICAgICAgIGNhc2UgXCJyZ2JcIjpcbiAgICAgICAge1xuICAgICAgICAgIHJldHVybiByZ2IoZDNfcmdiX3BhcnNlTnVtYmVyKG0yWzBdKSwgZDNfcmdiX3BhcnNlTnVtYmVyKG0yWzFdKSwgZDNfcmdiX3BhcnNlTnVtYmVyKG0yWzJdKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5hbWUgPSBkM19yZ2JfbmFtZXMuZ2V0KGZvcm1hdCkpIHJldHVybiByZ2IobmFtZS5yLCBuYW1lLmcsIG5hbWUuYik7XG4gICAgaWYgKGZvcm1hdCAhPSBudWxsICYmIGZvcm1hdC5jaGFyQXQoMCkgPT09IFwiI1wiKSB7XG4gICAgICBpZiAoZm9ybWF0Lmxlbmd0aCA9PT0gNCkge1xuICAgICAgICByID0gZm9ybWF0LmNoYXJBdCgxKTtcbiAgICAgICAgciArPSByO1xuICAgICAgICBnID0gZm9ybWF0LmNoYXJBdCgyKTtcbiAgICAgICAgZyArPSBnO1xuICAgICAgICBiID0gZm9ybWF0LmNoYXJBdCgzKTtcbiAgICAgICAgYiArPSBiO1xuICAgICAgfSBlbHNlIGlmIChmb3JtYXQubGVuZ3RoID09PSA3KSB7XG4gICAgICAgIHIgPSBmb3JtYXQuc3Vic3RyaW5nKDEsIDMpO1xuICAgICAgICBnID0gZm9ybWF0LnN1YnN0cmluZygzLCA1KTtcbiAgICAgICAgYiA9IGZvcm1hdC5zdWJzdHJpbmcoNSwgNyk7XG4gICAgICB9XG4gICAgICByID0gcGFyc2VJbnQociwgMTYpO1xuICAgICAgZyA9IHBhcnNlSW50KGcsIDE2KTtcbiAgICAgIGIgPSBwYXJzZUludChiLCAxNik7XG4gICAgfVxuICAgIHJldHVybiByZ2IociwgZywgYik7XG4gIH1cbiAgZnVuY3Rpb24gZDNfcmdiX2hzbChyLCBnLCBiKSB7XG4gICAgdmFyIG1pbiA9IE1hdGgubWluKHIgLz0gMjU1LCBnIC89IDI1NSwgYiAvPSAyNTUpLCBtYXggPSBNYXRoLm1heChyLCBnLCBiKSwgZCA9IG1heCAtIG1pbiwgaCwgcywgbCA9IChtYXggKyBtaW4pIC8gMjtcbiAgICBpZiAoZCkge1xuICAgICAgcyA9IGwgPCAuNSA/IGQgLyAobWF4ICsgbWluKSA6IGQgLyAoMiAtIG1heCAtIG1pbik7XG4gICAgICBpZiAociA9PSBtYXgpIGggPSAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKTsgZWxzZSBpZiAoZyA9PSBtYXgpIGggPSAoYiAtIHIpIC8gZCArIDI7IGVsc2UgaCA9IChyIC0gZykgLyBkICsgNDtcbiAgICAgIGggKj0gNjA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGggPSBOYU47XG4gICAgICBzID0gbCA+IDAgJiYgbCA8IDEgPyAwIDogaDtcbiAgICB9XG4gICAgcmV0dXJuIGQzX2hzbChoLCBzLCBsKTtcbiAgfVxuICBmdW5jdGlvbiBkM19yZ2JfbGFiKHIsIGcsIGIpIHtcbiAgICByID0gZDNfcmdiX3h5eihyKTtcbiAgICBnID0gZDNfcmdiX3h5eihnKTtcbiAgICBiID0gZDNfcmdiX3h5eihiKTtcbiAgICB2YXIgeCA9IGQzX3h5el9sYWIoKC40MTI0NTY0ICogciArIC4zNTc1NzYxICogZyArIC4xODA0Mzc1ICogYikgLyBkM19sYWJfWCksIHkgPSBkM194eXpfbGFiKCguMjEyNjcyOSAqIHIgKyAuNzE1MTUyMiAqIGcgKyAuMDcyMTc1ICogYikgLyBkM19sYWJfWSksIHogPSBkM194eXpfbGFiKCguMDE5MzMzOSAqIHIgKyAuMTE5MTkyICogZyArIC45NTAzMDQxICogYikgLyBkM19sYWJfWik7XG4gICAgcmV0dXJuIGQzX2xhYigxMTYgKiB5IC0gMTYsIDUwMCAqICh4IC0geSksIDIwMCAqICh5IC0geikpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3JnYl94eXoocikge1xuICAgIHJldHVybiAociAvPSAyNTUpIDw9IC4wNDA0NSA/IHIgLyAxMi45MiA6IE1hdGgucG93KChyICsgLjA1NSkgLyAxLjA1NSwgMi40KTtcbiAgfVxuICBmdW5jdGlvbiBkM19yZ2JfcGFyc2VOdW1iZXIoYykge1xuICAgIHZhciBmID0gcGFyc2VGbG9hdChjKTtcbiAgICByZXR1cm4gYy5jaGFyQXQoYy5sZW5ndGggLSAxKSA9PT0gXCIlXCIgPyBNYXRoLnJvdW5kKGYgKiAyLjU1KSA6IGY7XG4gIH1cbiAgdmFyIGQzX3JnYl9uYW1lcyA9IGQzLm1hcCh7XG4gICAgYWxpY2VibHVlOiAxNTc5MjM4MyxcbiAgICBhbnRpcXVld2hpdGU6IDE2NDQ0Mzc1LFxuICAgIGFxdWE6IDY1NTM1LFxuICAgIGFxdWFtYXJpbmU6IDgzODg1NjQsXG4gICAgYXp1cmU6IDE1Nzk0MTc1LFxuICAgIGJlaWdlOiAxNjExOTI2MCxcbiAgICBiaXNxdWU6IDE2NzcwMjQ0LFxuICAgIGJsYWNrOiAwLFxuICAgIGJsYW5jaGVkYWxtb25kOiAxNjc3MjA0NSxcbiAgICBibHVlOiAyNTUsXG4gICAgYmx1ZXZpb2xldDogOTA1NTIwMixcbiAgICBicm93bjogMTA4MjQyMzQsXG4gICAgYnVybHl3b29kOiAxNDU5NjIzMSxcbiAgICBjYWRldGJsdWU6IDYyNjY1MjgsXG4gICAgY2hhcnRyZXVzZTogODM4ODM1MixcbiAgICBjaG9jb2xhdGU6IDEzNzg5NDcwLFxuICAgIGNvcmFsOiAxNjc0NDI3MixcbiAgICBjb3JuZmxvd2VyYmx1ZTogNjU5MTk4MSxcbiAgICBjb3Juc2lsazogMTY3NzUzODgsXG4gICAgY3JpbXNvbjogMTQ0MjMxMDAsXG4gICAgY3lhbjogNjU1MzUsXG4gICAgZGFya2JsdWU6IDEzOSxcbiAgICBkYXJrY3lhbjogMzU3MjMsXG4gICAgZGFya2dvbGRlbnJvZDogMTIwOTI5MzksXG4gICAgZGFya2dyYXk6IDExMTE5MDE3LFxuICAgIGRhcmtncmVlbjogMjU2MDAsXG4gICAgZGFya2dyZXk6IDExMTE5MDE3LFxuICAgIGRhcmtraGFraTogMTI0MzMyNTksXG4gICAgZGFya21hZ2VudGE6IDkxMDk2NDMsXG4gICAgZGFya29saXZlZ3JlZW46IDU1OTc5OTksXG4gICAgZGFya29yYW5nZTogMTY3NDc1MjAsXG4gICAgZGFya29yY2hpZDogMTAwNDAwMTIsXG4gICAgZGFya3JlZDogOTEwOTUwNCxcbiAgICBkYXJrc2FsbW9uOiAxNTMwODQxMCxcbiAgICBkYXJrc2VhZ3JlZW46IDk0MTk5MTksXG4gICAgZGFya3NsYXRlYmx1ZTogNDczNDM0NyxcbiAgICBkYXJrc2xhdGVncmF5OiAzMTAwNDk1LFxuICAgIGRhcmtzbGF0ZWdyZXk6IDMxMDA0OTUsXG4gICAgZGFya3R1cnF1b2lzZTogNTI5NDUsXG4gICAgZGFya3Zpb2xldDogOTY5OTUzOSxcbiAgICBkZWVwcGluazogMTY3MTY5NDcsXG4gICAgZGVlcHNreWJsdWU6IDQ5MTUxLFxuICAgIGRpbWdyYXk6IDY5MDgyNjUsXG4gICAgZGltZ3JleTogNjkwODI2NSxcbiAgICBkb2RnZXJibHVlOiAyMDAzMTk5LFxuICAgIGZpcmVicmljazogMTE2NzQxNDYsXG4gICAgZmxvcmFsd2hpdGU6IDE2Nzc1OTIwLFxuICAgIGZvcmVzdGdyZWVuOiAyMjYzODQyLFxuICAgIGZ1Y2hzaWE6IDE2NzExOTM1LFxuICAgIGdhaW5zYm9ybzogMTQ0NzQ0NjAsXG4gICAgZ2hvc3R3aGl0ZTogMTYzMTY2NzEsXG4gICAgZ29sZDogMTY3NjY3MjAsXG4gICAgZ29sZGVucm9kOiAxNDMyOTEyMCxcbiAgICBncmF5OiA4NDIxNTA0LFxuICAgIGdyZWVuOiAzMjc2OCxcbiAgICBncmVlbnllbGxvdzogMTE0MDMwNTUsXG4gICAgZ3JleTogODQyMTUwNCxcbiAgICBob25leWRldzogMTU3OTQxNjAsXG4gICAgaG90cGluazogMTY3Mzg3NDAsXG4gICAgaW5kaWFucmVkOiAxMzQ1ODUyNCxcbiAgICBpbmRpZ286IDQ5MTUzMzAsXG4gICAgaXZvcnk6IDE2Nzc3MjAwLFxuICAgIGtoYWtpOiAxNTc4NzY2MCxcbiAgICBsYXZlbmRlcjogMTUxMzI0MTAsXG4gICAgbGF2ZW5kZXJibHVzaDogMTY3NzMzNjUsXG4gICAgbGF3bmdyZWVuOiA4MTkwOTc2LFxuICAgIGxlbW9uY2hpZmZvbjogMTY3NzU4ODUsXG4gICAgbGlnaHRibHVlOiAxMTM5MzI1NCxcbiAgICBsaWdodGNvcmFsOiAxNTc2MTUzNixcbiAgICBsaWdodGN5YW46IDE0NzQ1NTk5LFxuICAgIGxpZ2h0Z29sZGVucm9keWVsbG93OiAxNjQ0ODIxMCxcbiAgICBsaWdodGdyYXk6IDEzODgyMzIzLFxuICAgIGxpZ2h0Z3JlZW46IDk0OTgyNTYsXG4gICAgbGlnaHRncmV5OiAxMzg4MjMyMyxcbiAgICBsaWdodHBpbms6IDE2NzU4NDY1LFxuICAgIGxpZ2h0c2FsbW9uOiAxNjc1Mjc2MixcbiAgICBsaWdodHNlYWdyZWVuOiAyMTQyODkwLFxuICAgIGxpZ2h0c2t5Ymx1ZTogODkwMDM0NixcbiAgICBsaWdodHNsYXRlZ3JheTogNzgzMzc1MyxcbiAgICBsaWdodHNsYXRlZ3JleTogNzgzMzc1MyxcbiAgICBsaWdodHN0ZWVsYmx1ZTogMTE1ODQ3MzQsXG4gICAgbGlnaHR5ZWxsb3c6IDE2Nzc3MTg0LFxuICAgIGxpbWU6IDY1MjgwLFxuICAgIGxpbWVncmVlbjogMzMyOTMzMCxcbiAgICBsaW5lbjogMTY0NDU2NzAsXG4gICAgbWFnZW50YTogMTY3MTE5MzUsXG4gICAgbWFyb29uOiA4Mzg4NjA4LFxuICAgIG1lZGl1bWFxdWFtYXJpbmU6IDY3MzczMjIsXG4gICAgbWVkaXVtYmx1ZTogMjA1LFxuICAgIG1lZGl1bW9yY2hpZDogMTIyMTE2NjcsXG4gICAgbWVkaXVtcHVycGxlOiA5NjYyNjgzLFxuICAgIG1lZGl1bXNlYWdyZWVuOiAzOTc4MDk3LFxuICAgIG1lZGl1bXNsYXRlYmx1ZTogODA4Nzc5MCxcbiAgICBtZWRpdW1zcHJpbmdncmVlbjogNjQxNTQsXG4gICAgbWVkaXVtdHVycXVvaXNlOiA0NzcyMzAwLFxuICAgIG1lZGl1bXZpb2xldHJlZDogMTMwNDcxNzMsXG4gICAgbWlkbmlnaHRibHVlOiAxNjQ0OTEyLFxuICAgIG1pbnRjcmVhbTogMTYxMjE4NTAsXG4gICAgbWlzdHlyb3NlOiAxNjc3MDI3MyxcbiAgICBtb2NjYXNpbjogMTY3NzAyMjksXG4gICAgbmF2YWpvd2hpdGU6IDE2NzY4Njg1LFxuICAgIG5hdnk6IDEyOCxcbiAgICBvbGRsYWNlOiAxNjY0MzU1OCxcbiAgICBvbGl2ZTogODQyMTM3NixcbiAgICBvbGl2ZWRyYWI6IDcwNDg3MzksXG4gICAgb3JhbmdlOiAxNjc1MzkyMCxcbiAgICBvcmFuZ2VyZWQ6IDE2NzI5MzQ0LFxuICAgIG9yY2hpZDogMTQzMTU3MzQsXG4gICAgcGFsZWdvbGRlbnJvZDogMTU2NTcxMzAsXG4gICAgcGFsZWdyZWVuOiAxMDAyNTg4MCxcbiAgICBwYWxldHVycXVvaXNlOiAxMTUyOTk2NixcbiAgICBwYWxldmlvbGV0cmVkOiAxNDM4MTIwMyxcbiAgICBwYXBheWF3aGlwOiAxNjc3MzA3NyxcbiAgICBwZWFjaHB1ZmY6IDE2NzY3NjczLFxuICAgIHBlcnU6IDEzNDY4OTkxLFxuICAgIHBpbms6IDE2NzYxMDM1LFxuICAgIHBsdW06IDE0NTI0NjM3LFxuICAgIHBvd2RlcmJsdWU6IDExNTkxOTEwLFxuICAgIHB1cnBsZTogODM4ODczNixcbiAgICByZWQ6IDE2NzExNjgwLFxuICAgIHJvc3licm93bjogMTIzNTc1MTksXG4gICAgcm95YWxibHVlOiA0Mjg2OTQ1LFxuICAgIHNhZGRsZWJyb3duOiA5MTI3MTg3LFxuICAgIHNhbG1vbjogMTY0MTY4ODIsXG4gICAgc2FuZHlicm93bjogMTYwMzI4NjQsXG4gICAgc2VhZ3JlZW46IDMwNTAzMjcsXG4gICAgc2Vhc2hlbGw6IDE2Nzc0NjM4LFxuICAgIHNpZW5uYTogMTA1MDY3OTcsXG4gICAgc2lsdmVyOiAxMjYzMjI1NixcbiAgICBza3libHVlOiA4OTAwMzMxLFxuICAgIHNsYXRlYmx1ZTogNjk3MDA2MSxcbiAgICBzbGF0ZWdyYXk6IDczNzI5NDQsXG4gICAgc2xhdGVncmV5OiA3MzcyOTQ0LFxuICAgIHNub3c6IDE2Nzc1OTMwLFxuICAgIHNwcmluZ2dyZWVuOiA2NTQwNyxcbiAgICBzdGVlbGJsdWU6IDQ2MjA5ODAsXG4gICAgdGFuOiAxMzgwODc4MCxcbiAgICB0ZWFsOiAzMjg5NixcbiAgICB0aGlzdGxlOiAxNDIwNDg4OCxcbiAgICB0b21hdG86IDE2NzM3MDk1LFxuICAgIHR1cnF1b2lzZTogNDI1MTg1NixcbiAgICB2aW9sZXQ6IDE1NjMxMDg2LFxuICAgIHdoZWF0OiAxNjExMzMzMSxcbiAgICB3aGl0ZTogMTY3NzcyMTUsXG4gICAgd2hpdGVzbW9rZTogMTYxMTkyODUsXG4gICAgeWVsbG93OiAxNjc3Njk2MCxcbiAgICB5ZWxsb3dncmVlbjogMTAxNDUwNzRcbiAgfSk7XG4gIGQzX3JnYl9uYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICBkM19yZ2JfbmFtZXMuc2V0KGtleSwgZDNfcmdiTnVtYmVyKHZhbHVlKSk7XG4gIH0pO1xuICBmdW5jdGlvbiBkM19mdW5jdG9yKHYpIHtcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09IFwiZnVuY3Rpb25cIiA/IHYgOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB2O1xuICAgIH07XG4gIH1cbiAgZDMuZnVuY3RvciA9IGQzX2Z1bmN0b3I7XG4gIGZ1bmN0aW9uIGQzX2lkZW50aXR5KGQpIHtcbiAgICByZXR1cm4gZDtcbiAgfVxuICBkMy54aHIgPSBkM194aHJUeXBlKGQzX2lkZW50aXR5KTtcbiAgZnVuY3Rpb24gZDNfeGhyVHlwZShyZXNwb25zZSkge1xuICAgIHJldHVybiBmdW5jdGlvbih1cmwsIG1pbWVUeXBlLCBjYWxsYmFjaykge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgdHlwZW9mIG1pbWVUeXBlID09PSBcImZ1bmN0aW9uXCIpIGNhbGxiYWNrID0gbWltZVR5cGUsIFxuICAgICAgbWltZVR5cGUgPSBudWxsO1xuICAgICAgcmV0dXJuIGQzX3hocih1cmwsIG1pbWVUeXBlLCByZXNwb25zZSwgY2FsbGJhY2spO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZDNfeGhyKHVybCwgbWltZVR5cGUsIHJlc3BvbnNlLCBjYWxsYmFjaykge1xuICAgIHZhciB4aHIgPSB7fSwgZGlzcGF0Y2ggPSBkMy5kaXNwYXRjaChcImJlZm9yZXNlbmRcIiwgXCJwcm9ncmVzc1wiLCBcImxvYWRcIiwgXCJlcnJvclwiKSwgaGVhZGVycyA9IHt9LCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCksIHJlc3BvbnNlVHlwZSA9IG51bGw7XG4gICAgaWYgKGQzX3dpbmRvdy5YRG9tYWluUmVxdWVzdCAmJiAhKFwid2l0aENyZWRlbnRpYWxzXCIgaW4gcmVxdWVzdCkgJiYgL14oaHR0cChzKT86KT9cXC9cXC8vLnRlc3QodXJsKSkgcmVxdWVzdCA9IG5ldyBYRG9tYWluUmVxdWVzdCgpO1xuICAgIFwib25sb2FkXCIgaW4gcmVxdWVzdCA/IHJlcXVlc3Qub25sb2FkID0gcmVxdWVzdC5vbmVycm9yID0gcmVzcG9uZCA6IHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXF1ZXN0LnJlYWR5U3RhdGUgPiAzICYmIHJlc3BvbmQoKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIHJlc3BvbmQoKSB7XG4gICAgICB2YXIgc3RhdHVzID0gcmVxdWVzdC5zdGF0dXMsIHJlc3VsdDtcbiAgICAgIGlmICghc3RhdHVzICYmIHJlcXVlc3QucmVzcG9uc2VUZXh0IHx8IHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwIHx8IHN0YXR1cyA9PT0gMzA0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzcG9uc2UuY2FsbCh4aHIsIHJlcXVlc3QpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgZGlzcGF0Y2guZXJyb3IuY2FsbCh4aHIsIGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkaXNwYXRjaC5sb2FkLmNhbGwoeGhyLCByZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGF0Y2guZXJyb3IuY2FsbCh4aHIsIHJlcXVlc3QpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgdmFyIG8gPSBkMy5ldmVudDtcbiAgICAgIGQzLmV2ZW50ID0gZXZlbnQ7XG4gICAgICB0cnkge1xuICAgICAgICBkaXNwYXRjaC5wcm9ncmVzcy5jYWxsKHhociwgcmVxdWVzdCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBkMy5ldmVudCA9IG87XG4gICAgICB9XG4gICAgfTtcbiAgICB4aHIuaGVhZGVyID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgIG5hbWUgPSAobmFtZSArIFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHJldHVybiBoZWFkZXJzW25hbWVdO1xuICAgICAgaWYgKHZhbHVlID09IG51bGwpIGRlbGV0ZSBoZWFkZXJzW25hbWVdOyBlbHNlIGhlYWRlcnNbbmFtZV0gPSB2YWx1ZSArIFwiXCI7XG4gICAgICByZXR1cm4geGhyO1xuICAgIH07XG4gICAgeGhyLm1pbWVUeXBlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIG1pbWVUeXBlO1xuICAgICAgbWltZVR5cGUgPSB2YWx1ZSA9PSBudWxsID8gbnVsbCA6IHZhbHVlICsgXCJcIjtcbiAgICAgIHJldHVybiB4aHI7XG4gICAgfTtcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHJlc3BvbnNlVHlwZTtcbiAgICAgIHJlc3BvbnNlVHlwZSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIHhocjtcbiAgICB9O1xuICAgIHhoci5yZXNwb25zZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXNwb25zZSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIHhocjtcbiAgICB9O1xuICAgIFsgXCJnZXRcIiwgXCJwb3N0XCIgXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgeGhyW21ldGhvZF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHhoci5zZW5kLmFwcGx5KHhociwgWyBtZXRob2QgXS5jb25jYXQoZDNfYXJyYXkoYXJndW1lbnRzKSkpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgICB4aHIuc2VuZCA9IGZ1bmN0aW9uKG1ldGhvZCwgZGF0YSwgY2FsbGJhY2spIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBkYXRhID09PSBcImZ1bmN0aW9uXCIpIGNhbGxiYWNrID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gICAgICByZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuICAgICAgaWYgKG1pbWVUeXBlICE9IG51bGwgJiYgIShcImFjY2VwdFwiIGluIGhlYWRlcnMpKSBoZWFkZXJzW1wiYWNjZXB0XCJdID0gbWltZVR5cGUgKyBcIiwqLypcIjtcbiAgICAgIGlmIChyZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIpIGZvciAodmFyIG5hbWUgaW4gaGVhZGVycykgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIGhlYWRlcnNbbmFtZV0pO1xuICAgICAgaWYgKG1pbWVUeXBlICE9IG51bGwgJiYgcmVxdWVzdC5vdmVycmlkZU1pbWVUeXBlKSByZXF1ZXN0Lm92ZXJyaWRlTWltZVR5cGUobWltZVR5cGUpO1xuICAgICAgaWYgKHJlc3BvbnNlVHlwZSAhPSBudWxsKSByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZTtcbiAgICAgIGlmIChjYWxsYmFjayAhPSBudWxsKSB4aHIub24oXCJlcnJvclwiLCBjYWxsYmFjaykub24oXCJsb2FkXCIsIGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVxdWVzdCk7XG4gICAgICB9KTtcbiAgICAgIGRpc3BhdGNoLmJlZm9yZXNlbmQuY2FsbCh4aHIsIHJlcXVlc3QpO1xuICAgICAgcmVxdWVzdC5zZW5kKGRhdGEgPT0gbnVsbCA/IG51bGwgOiBkYXRhKTtcbiAgICAgIHJldHVybiB4aHI7XG4gICAgfTtcbiAgICB4aHIuYWJvcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgIHJldHVybiB4aHI7XG4gICAgfTtcbiAgICBkMy5yZWJpbmQoeGhyLCBkaXNwYXRjaCwgXCJvblwiKTtcbiAgICByZXR1cm4gY2FsbGJhY2sgPT0gbnVsbCA/IHhociA6IHhoci5nZXQoZDNfeGhyX2ZpeENhbGxiYWNrKGNhbGxiYWNrKSk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfeGhyX2ZpeENhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmxlbmd0aCA9PT0gMSA/IGZ1bmN0aW9uKGVycm9yLCByZXF1ZXN0KSB7XG4gICAgICBjYWxsYmFjayhlcnJvciA9PSBudWxsID8gcmVxdWVzdCA6IG51bGwpO1xuICAgIH0gOiBjYWxsYmFjaztcbiAgfVxuICBkMy5kc3YgPSBmdW5jdGlvbihkZWxpbWl0ZXIsIG1pbWVUeXBlKSB7XG4gICAgdmFyIHJlRm9ybWF0ID0gbmV3IFJlZ0V4cCgnW1wiJyArIGRlbGltaXRlciArIFwiXFxuXVwiKSwgZGVsaW1pdGVyQ29kZSA9IGRlbGltaXRlci5jaGFyQ29kZUF0KDApO1xuICAgIGZ1bmN0aW9uIGRzdih1cmwsIHJvdywgY2FsbGJhY2spIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykgY2FsbGJhY2sgPSByb3csIHJvdyA9IG51bGw7XG4gICAgICB2YXIgeGhyID0gZDMueGhyKHVybCwgbWltZVR5cGUsIGNhbGxiYWNrKTtcbiAgICAgIHhoci5yb3cgPSBmdW5jdGlvbihfKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8geGhyLnJlc3BvbnNlKChyb3cgPSBfKSA9PSBudWxsID8gcmVzcG9uc2UgOiB0eXBlZFJlc3BvbnNlKF8pKSA6IHJvdztcbiAgICAgIH07XG4gICAgICByZXR1cm4geGhyLnJvdyhyb3cpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXNwb25zZShyZXF1ZXN0KSB7XG4gICAgICByZXR1cm4gZHN2LnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHlwZWRSZXNwb25zZShmKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gZHN2LnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0LCBmKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGRzdi5wYXJzZSA9IGZ1bmN0aW9uKHRleHQsIGYpIHtcbiAgICAgIHZhciBvO1xuICAgICAgcmV0dXJuIGRzdi5wYXJzZVJvd3ModGV4dCwgZnVuY3Rpb24ocm93LCBpKSB7XG4gICAgICAgIGlmIChvKSByZXR1cm4gbyhyb3csIGkgLSAxKTtcbiAgICAgICAgdmFyIGEgPSBuZXcgRnVuY3Rpb24oXCJkXCIsIFwicmV0dXJuIHtcIiArIHJvdy5tYXAoZnVuY3Rpb24obmFtZSwgaSkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShuYW1lKSArIFwiOiBkW1wiICsgaSArIFwiXVwiO1xuICAgICAgICB9KS5qb2luKFwiLFwiKSArIFwifVwiKTtcbiAgICAgICAgbyA9IGYgPyBmdW5jdGlvbihyb3csIGkpIHtcbiAgICAgICAgICByZXR1cm4gZihhKHJvdyksIGkpO1xuICAgICAgICB9IDogYTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZHN2LnBhcnNlUm93cyA9IGZ1bmN0aW9uKHRleHQsIGYpIHtcbiAgICAgIHZhciBFT0wgPSB7fSwgRU9GID0ge30sIHJvd3MgPSBbXSwgTiA9IHRleHQubGVuZ3RoLCBJID0gMCwgbiA9IDAsIHQsIGVvbDtcbiAgICAgIGZ1bmN0aW9uIHRva2VuKCkge1xuICAgICAgICBpZiAoSSA+PSBOKSByZXR1cm4gRU9GO1xuICAgICAgICBpZiAoZW9sKSByZXR1cm4gZW9sID0gZmFsc2UsIEVPTDtcbiAgICAgICAgdmFyIGogPSBJO1xuICAgICAgICBpZiAodGV4dC5jaGFyQ29kZUF0KGopID09PSAzNCkge1xuICAgICAgICAgIHZhciBpID0gajtcbiAgICAgICAgICB3aGlsZSAoaSsrIDwgTikge1xuICAgICAgICAgICAgaWYgKHRleHQuY2hhckNvZGVBdChpKSA9PT0gMzQpIHtcbiAgICAgICAgICAgICAgaWYgKHRleHQuY2hhckNvZGVBdChpICsgMSkgIT09IDM0KSBicmVhaztcbiAgICAgICAgICAgICAgKytpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBJID0gaSArIDI7XG4gICAgICAgICAgdmFyIGMgPSB0ZXh0LmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgICAgIGlmIChjID09PSAxMykge1xuICAgICAgICAgICAgZW9sID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0ZXh0LmNoYXJDb2RlQXQoaSArIDIpID09PSAxMCkgKytJO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYyA9PT0gMTApIHtcbiAgICAgICAgICAgIGVvbCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0ZXh0LnN1YnN0cmluZyhqICsgMSwgaSkucmVwbGFjZSgvXCJcIi9nLCAnXCInKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoSSA8IE4pIHtcbiAgICAgICAgICB2YXIgYyA9IHRleHQuY2hhckNvZGVBdChJKyspLCBrID0gMTtcbiAgICAgICAgICBpZiAoYyA9PT0gMTApIGVvbCA9IHRydWU7IGVsc2UgaWYgKGMgPT09IDEzKSB7XG4gICAgICAgICAgICBlb2wgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRleHQuY2hhckNvZGVBdChJKSA9PT0gMTApICsrSSwgKytrO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYyAhPT0gZGVsaW1pdGVyQ29kZSkgY29udGludWU7XG4gICAgICAgICAgcmV0dXJuIHRleHQuc3Vic3RyaW5nKGosIEkgLSBrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGV4dC5zdWJzdHJpbmcoaik7XG4gICAgICB9XG4gICAgICB3aGlsZSAoKHQgPSB0b2tlbigpKSAhPT0gRU9GKSB7XG4gICAgICAgIHZhciBhID0gW107XG4gICAgICAgIHdoaWxlICh0ICE9PSBFT0wgJiYgdCAhPT0gRU9GKSB7XG4gICAgICAgICAgYS5wdXNoKHQpO1xuICAgICAgICAgIHQgPSB0b2tlbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmICYmICEoYSA9IGYoYSwgbisrKSkpIGNvbnRpbnVlO1xuICAgICAgICByb3dzLnB1c2goYSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcm93cztcbiAgICB9O1xuICAgIGRzdi5mb3JtYXQgPSBmdW5jdGlvbihyb3dzKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyb3dzWzBdKSkgcmV0dXJuIGRzdi5mb3JtYXRSb3dzKHJvd3MpO1xuICAgICAgdmFyIGZpZWxkU2V0ID0gbmV3IGQzX1NldCgpLCBmaWVsZHMgPSBbXTtcbiAgICAgIHJvd3MuZm9yRWFjaChmdW5jdGlvbihyb3cpIHtcbiAgICAgICAgZm9yICh2YXIgZmllbGQgaW4gcm93KSB7XG4gICAgICAgICAgaWYgKCFmaWVsZFNldC5oYXMoZmllbGQpKSB7XG4gICAgICAgICAgICBmaWVsZHMucHVzaChmaWVsZFNldC5hZGQoZmllbGQpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFsgZmllbGRzLm1hcChmb3JtYXRWYWx1ZSkuam9pbihkZWxpbWl0ZXIpIF0uY29uY2F0KHJvd3MubWFwKGZ1bmN0aW9uKHJvdykge1xuICAgICAgICByZXR1cm4gZmllbGRzLm1hcChmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICAgIHJldHVybiBmb3JtYXRWYWx1ZShyb3dbZmllbGRdKTtcbiAgICAgICAgfSkuam9pbihkZWxpbWl0ZXIpO1xuICAgICAgfSkpLmpvaW4oXCJcXG5cIik7XG4gICAgfTtcbiAgICBkc3YuZm9ybWF0Um93cyA9IGZ1bmN0aW9uKHJvd3MpIHtcbiAgICAgIHJldHVybiByb3dzLm1hcChmb3JtYXRSb3cpLmpvaW4oXCJcXG5cIik7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBmb3JtYXRSb3cocm93KSB7XG4gICAgICByZXR1cm4gcm93Lm1hcChmb3JtYXRWYWx1ZSkuam9pbihkZWxpbWl0ZXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmb3JtYXRWYWx1ZSh0ZXh0KSB7XG4gICAgICByZXR1cm4gcmVGb3JtYXQudGVzdCh0ZXh0KSA/ICdcIicgKyB0ZXh0LnJlcGxhY2UoL1xcXCIvZywgJ1wiXCInKSArICdcIicgOiB0ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gZHN2O1xuICB9O1xuICBkMy5jc3YgPSBkMy5kc3YoXCIsXCIsIFwidGV4dC9jc3ZcIik7XG4gIGQzLnRzdiA9IGQzLmRzdihcIlx0XCIsIFwidGV4dC90YWItc2VwYXJhdGVkLXZhbHVlc1wiKTtcbiAgdmFyIGQzX3RpbWVyX3F1ZXVlSGVhZCwgZDNfdGltZXJfcXVldWVUYWlsLCBkM190aW1lcl9pbnRlcnZhbCwgZDNfdGltZXJfdGltZW91dCwgZDNfdGltZXJfYWN0aXZlLCBkM190aW1lcl9mcmFtZSA9IGQzX3dpbmRvd1tkM192ZW5kb3JTeW1ib2woZDNfd2luZG93LCBcInJlcXVlc3RBbmltYXRpb25GcmFtZVwiKV0gfHwgZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBzZXRUaW1lb3V0KGNhbGxiYWNrLCAxNyk7XG4gIH07XG4gIGQzLnRpbWVyID0gZnVuY3Rpb24oY2FsbGJhY2ssIGRlbGF5LCB0aGVuKSB7XG4gICAgdmFyIG4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGlmIChuIDwgMikgZGVsYXkgPSAwO1xuICAgIGlmIChuIDwgMykgdGhlbiA9IERhdGUubm93KCk7XG4gICAgdmFyIHRpbWUgPSB0aGVuICsgZGVsYXksIHRpbWVyID0ge1xuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgdGltZTogdGltZSxcbiAgICAgIG5leHQ6IG51bGxcbiAgICB9O1xuICAgIGlmIChkM190aW1lcl9xdWV1ZVRhaWwpIGQzX3RpbWVyX3F1ZXVlVGFpbC5uZXh0ID0gdGltZXI7IGVsc2UgZDNfdGltZXJfcXVldWVIZWFkID0gdGltZXI7XG4gICAgZDNfdGltZXJfcXVldWVUYWlsID0gdGltZXI7XG4gICAgaWYgKCFkM190aW1lcl9pbnRlcnZhbCkge1xuICAgICAgZDNfdGltZXJfdGltZW91dCA9IGNsZWFyVGltZW91dChkM190aW1lcl90aW1lb3V0KTtcbiAgICAgIGQzX3RpbWVyX2ludGVydmFsID0gMTtcbiAgICAgIGQzX3RpbWVyX2ZyYW1lKGQzX3RpbWVyX3N0ZXApO1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gZDNfdGltZXJfc3RlcCgpIHtcbiAgICB2YXIgbm93ID0gZDNfdGltZXJfbWFyaygpLCBkZWxheSA9IGQzX3RpbWVyX3N3ZWVwKCkgLSBub3c7XG4gICAgaWYgKGRlbGF5ID4gMjQpIHtcbiAgICAgIGlmIChpc0Zpbml0ZShkZWxheSkpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGQzX3RpbWVyX3RpbWVvdXQpO1xuICAgICAgICBkM190aW1lcl90aW1lb3V0ID0gc2V0VGltZW91dChkM190aW1lcl9zdGVwLCBkZWxheSk7XG4gICAgICB9XG4gICAgICBkM190aW1lcl9pbnRlcnZhbCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGQzX3RpbWVyX2ludGVydmFsID0gMTtcbiAgICAgIGQzX3RpbWVyX2ZyYW1lKGQzX3RpbWVyX3N0ZXApO1xuICAgIH1cbiAgfVxuICBkMy50aW1lci5mbHVzaCA9IGZ1bmN0aW9uKCkge1xuICAgIGQzX3RpbWVyX21hcmsoKTtcbiAgICBkM190aW1lcl9zd2VlcCgpO1xuICB9O1xuICBmdW5jdGlvbiBkM190aW1lcl9yZXBsYWNlKGNhbGxiYWNrLCBkZWxheSwgdGhlbikge1xuICAgIHZhciBuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAobiA8IDIpIGRlbGF5ID0gMDtcbiAgICBpZiAobiA8IDMpIHRoZW4gPSBEYXRlLm5vdygpO1xuICAgIGQzX3RpbWVyX2FjdGl2ZS5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIGQzX3RpbWVyX2FjdGl2ZS50aW1lID0gdGhlbiArIGRlbGF5O1xuICB9XG4gIGZ1bmN0aW9uIGQzX3RpbWVyX21hcmsoKSB7XG4gICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgZDNfdGltZXJfYWN0aXZlID0gZDNfdGltZXJfcXVldWVIZWFkO1xuICAgIHdoaWxlIChkM190aW1lcl9hY3RpdmUpIHtcbiAgICAgIGlmIChub3cgPj0gZDNfdGltZXJfYWN0aXZlLnRpbWUpIGQzX3RpbWVyX2FjdGl2ZS5mbHVzaCA9IGQzX3RpbWVyX2FjdGl2ZS5jYWxsYmFjayhub3cgLSBkM190aW1lcl9hY3RpdmUudGltZSk7XG4gICAgICBkM190aW1lcl9hY3RpdmUgPSBkM190aW1lcl9hY3RpdmUubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIG5vdztcbiAgfVxuICBmdW5jdGlvbiBkM190aW1lcl9zd2VlcCgpIHtcbiAgICB2YXIgdDAsIHQxID0gZDNfdGltZXJfcXVldWVIZWFkLCB0aW1lID0gSW5maW5pdHk7XG4gICAgd2hpbGUgKHQxKSB7XG4gICAgICBpZiAodDEuZmx1c2gpIHtcbiAgICAgICAgdDEgPSB0MCA/IHQwLm5leHQgPSB0MS5uZXh0IDogZDNfdGltZXJfcXVldWVIZWFkID0gdDEubmV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0MS50aW1lIDwgdGltZSkgdGltZSA9IHQxLnRpbWU7XG4gICAgICAgIHQxID0gKHQwID0gdDEpLm5leHQ7XG4gICAgICB9XG4gICAgfVxuICAgIGQzX3RpbWVyX3F1ZXVlVGFpbCA9IHQwO1xuICAgIHJldHVybiB0aW1lO1xuICB9XG4gIHZhciBkM19mb3JtYXRfZGVjaW1hbFBvaW50ID0gXCIuXCIsIGQzX2Zvcm1hdF90aG91c2FuZHNTZXBhcmF0b3IgPSBcIixcIiwgZDNfZm9ybWF0X2dyb3VwaW5nID0gWyAzLCAzIF0sIGQzX2Zvcm1hdF9jdXJyZW5jeVN5bWJvbCA9IFwiJFwiO1xuICB2YXIgZDNfZm9ybWF0UHJlZml4ZXMgPSBbIFwieVwiLCBcInpcIiwgXCJhXCIsIFwiZlwiLCBcInBcIiwgXCJuXCIsIFwiwrVcIiwgXCJtXCIsIFwiXCIsIFwia1wiLCBcIk1cIiwgXCJHXCIsIFwiVFwiLCBcIlBcIiwgXCJFXCIsIFwiWlwiLCBcIllcIiBdLm1hcChkM19mb3JtYXRQcmVmaXgpO1xuICBkMy5mb3JtYXRQcmVmaXggPSBmdW5jdGlvbih2YWx1ZSwgcHJlY2lzaW9uKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgKj0gLTE7XG4gICAgICBpZiAocHJlY2lzaW9uKSB2YWx1ZSA9IGQzLnJvdW5kKHZhbHVlLCBkM19mb3JtYXRfcHJlY2lzaW9uKHZhbHVlLCBwcmVjaXNpb24pKTtcbiAgICAgIGkgPSAxICsgTWF0aC5mbG9vcigxZS0xMiArIE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4xMCk7XG4gICAgICBpID0gTWF0aC5tYXgoLTI0LCBNYXRoLm1pbigyNCwgTWF0aC5mbG9vcigoaSA8PSAwID8gaSArIDEgOiBpIC0gMSkgLyAzKSAqIDMpKTtcbiAgICB9XG4gICAgcmV0dXJuIGQzX2Zvcm1hdFByZWZpeGVzWzggKyBpIC8gM107XG4gIH07XG4gIGZ1bmN0aW9uIGQzX2Zvcm1hdFByZWZpeChkLCBpKSB7XG4gICAgdmFyIGsgPSBNYXRoLnBvdygxMCwgTWF0aC5hYnMoOCAtIGkpICogMyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNjYWxlOiBpID4gOCA/IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQgLyBrO1xuICAgICAgfSA6IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQgKiBrO1xuICAgICAgfSxcbiAgICAgIHN5bWJvbDogZFxuICAgIH07XG4gIH1cbiAgZDMucm91bmQgPSBmdW5jdGlvbih4LCBuKSB7XG4gICAgcmV0dXJuIG4gPyBNYXRoLnJvdW5kKHggKiAobiA9IE1hdGgucG93KDEwLCBuKSkpIC8gbiA6IE1hdGgucm91bmQoeCk7XG4gIH07XG4gIGQzLmZvcm1hdCA9IGZ1bmN0aW9uKHNwZWNpZmllcikge1xuICAgIHZhciBtYXRjaCA9IGQzX2Zvcm1hdF9yZS5leGVjKHNwZWNpZmllciksIGZpbGwgPSBtYXRjaFsxXSB8fCBcIiBcIiwgYWxpZ24gPSBtYXRjaFsyXSB8fCBcIj5cIiwgc2lnbiA9IG1hdGNoWzNdIHx8IFwiXCIsIHN5bWJvbCA9IG1hdGNoWzRdIHx8IFwiXCIsIHpmaWxsID0gbWF0Y2hbNV0sIHdpZHRoID0gK21hdGNoWzZdLCBjb21tYSA9IG1hdGNoWzddLCBwcmVjaXNpb24gPSBtYXRjaFs4XSwgdHlwZSA9IG1hdGNoWzldLCBzY2FsZSA9IDEsIHN1ZmZpeCA9IFwiXCIsIGludGVnZXIgPSBmYWxzZTtcbiAgICBpZiAocHJlY2lzaW9uKSBwcmVjaXNpb24gPSArcHJlY2lzaW9uLnN1YnN0cmluZygxKTtcbiAgICBpZiAoemZpbGwgfHwgZmlsbCA9PT0gXCIwXCIgJiYgYWxpZ24gPT09IFwiPVwiKSB7XG4gICAgICB6ZmlsbCA9IGZpbGwgPSBcIjBcIjtcbiAgICAgIGFsaWduID0gXCI9XCI7XG4gICAgICBpZiAoY29tbWEpIHdpZHRoIC09IE1hdGguZmxvb3IoKHdpZHRoIC0gMSkgLyA0KTtcbiAgICB9XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgIGNhc2UgXCJuXCI6XG4gICAgICBjb21tYSA9IHRydWU7XG4gICAgICB0eXBlID0gXCJnXCI7XG4gICAgICBicmVhaztcblxuICAgICBjYXNlIFwiJVwiOlxuICAgICAgc2NhbGUgPSAxMDA7XG4gICAgICBzdWZmaXggPSBcIiVcIjtcbiAgICAgIHR5cGUgPSBcImZcIjtcbiAgICAgIGJyZWFrO1xuXG4gICAgIGNhc2UgXCJwXCI6XG4gICAgICBzY2FsZSA9IDEwMDtcbiAgICAgIHN1ZmZpeCA9IFwiJVwiO1xuICAgICAgdHlwZSA9IFwiclwiO1xuICAgICAgYnJlYWs7XG5cbiAgICAgY2FzZSBcImJcIjpcbiAgICAgY2FzZSBcIm9cIjpcbiAgICAgY2FzZSBcInhcIjpcbiAgICAgY2FzZSBcIlhcIjpcbiAgICAgIGlmIChzeW1ib2wgPT09IFwiI1wiKSBzeW1ib2wgPSBcIjBcIiArIHR5cGUudG9Mb3dlckNhc2UoKTtcblxuICAgICBjYXNlIFwiY1wiOlxuICAgICBjYXNlIFwiZFwiOlxuICAgICAgaW50ZWdlciA9IHRydWU7XG4gICAgICBwcmVjaXNpb24gPSAwO1xuICAgICAgYnJlYWs7XG5cbiAgICAgY2FzZSBcInNcIjpcbiAgICAgIHNjYWxlID0gLTE7XG4gICAgICB0eXBlID0gXCJyXCI7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHN5bWJvbCA9PT0gXCIjXCIpIHN5bWJvbCA9IFwiXCI7IGVsc2UgaWYgKHN5bWJvbCA9PT0gXCIkXCIpIHN5bWJvbCA9IGQzX2Zvcm1hdF9jdXJyZW5jeVN5bWJvbDtcbiAgICBpZiAodHlwZSA9PSBcInJcIiAmJiAhcHJlY2lzaW9uKSB0eXBlID0gXCJnXCI7XG4gICAgaWYgKHByZWNpc2lvbiAhPSBudWxsKSB7XG4gICAgICBpZiAodHlwZSA9PSBcImdcIikgcHJlY2lzaW9uID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oMjEsIHByZWNpc2lvbikpOyBlbHNlIGlmICh0eXBlID09IFwiZVwiIHx8IHR5cGUgPT0gXCJmXCIpIHByZWNpc2lvbiA9IE1hdGgubWF4KDAsIE1hdGgubWluKDIwLCBwcmVjaXNpb24pKTtcbiAgICB9XG4gICAgdHlwZSA9IGQzX2Zvcm1hdF90eXBlcy5nZXQodHlwZSkgfHwgZDNfZm9ybWF0X3R5cGVEZWZhdWx0O1xuICAgIHZhciB6Y29tbWEgPSB6ZmlsbCAmJiBjb21tYTtcbiAgICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmIChpbnRlZ2VyICYmIHZhbHVlICUgMSkgcmV0dXJuIFwiXCI7XG4gICAgICB2YXIgbmVnYXRpdmUgPSB2YWx1ZSA8IDAgfHwgdmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCA/ICh2YWx1ZSA9IC12YWx1ZSwgXCItXCIpIDogc2lnbjtcbiAgICAgIGlmIChzY2FsZSA8IDApIHtcbiAgICAgICAgdmFyIHByZWZpeCA9IGQzLmZvcm1hdFByZWZpeCh2YWx1ZSwgcHJlY2lzaW9uKTtcbiAgICAgICAgdmFsdWUgPSBwcmVmaXguc2NhbGUodmFsdWUpO1xuICAgICAgICBzdWZmaXggPSBwcmVmaXguc3ltYm9sO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgKj0gc2NhbGU7XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IHR5cGUodmFsdWUsIHByZWNpc2lvbik7XG4gICAgICB2YXIgaSA9IHZhbHVlLmxhc3RJbmRleE9mKFwiLlwiKSwgYmVmb3JlID0gaSA8IDAgPyB2YWx1ZSA6IHZhbHVlLnN1YnN0cmluZygwLCBpKSwgYWZ0ZXIgPSBpIDwgMCA/IFwiXCIgOiBkM19mb3JtYXRfZGVjaW1hbFBvaW50ICsgdmFsdWUuc3Vic3RyaW5nKGkgKyAxKTtcbiAgICAgIGlmICghemZpbGwgJiYgY29tbWEpIGJlZm9yZSA9IGQzX2Zvcm1hdF9ncm91cChiZWZvcmUpO1xuICAgICAgdmFyIGxlbmd0aCA9IHN5bWJvbC5sZW5ndGggKyBiZWZvcmUubGVuZ3RoICsgYWZ0ZXIubGVuZ3RoICsgKHpjb21tYSA/IDAgOiBuZWdhdGl2ZS5sZW5ndGgpLCBwYWRkaW5nID0gbGVuZ3RoIDwgd2lkdGggPyBuZXcgQXJyYXkobGVuZ3RoID0gd2lkdGggLSBsZW5ndGggKyAxKS5qb2luKGZpbGwpIDogXCJcIjtcbiAgICAgIGlmICh6Y29tbWEpIGJlZm9yZSA9IGQzX2Zvcm1hdF9ncm91cChwYWRkaW5nICsgYmVmb3JlKTtcbiAgICAgIG5lZ2F0aXZlICs9IHN5bWJvbDtcbiAgICAgIHZhbHVlID0gYmVmb3JlICsgYWZ0ZXI7XG4gICAgICByZXR1cm4gKGFsaWduID09PSBcIjxcIiA/IG5lZ2F0aXZlICsgdmFsdWUgKyBwYWRkaW5nIDogYWxpZ24gPT09IFwiPlwiID8gcGFkZGluZyArIG5lZ2F0aXZlICsgdmFsdWUgOiBhbGlnbiA9PT0gXCJeXCIgPyBwYWRkaW5nLnN1YnN0cmluZygwLCBsZW5ndGggPj49IDEpICsgbmVnYXRpdmUgKyB2YWx1ZSArIHBhZGRpbmcuc3Vic3RyaW5nKGxlbmd0aCkgOiBuZWdhdGl2ZSArICh6Y29tbWEgPyB2YWx1ZSA6IHBhZGRpbmcgKyB2YWx1ZSkpICsgc3VmZml4O1xuICAgIH07XG4gIH07XG4gIHZhciBkM19mb3JtYXRfcmUgPSAvKD86KFtee10pPyhbPD49Xl0pKT8oWytcXC0gXSk/KFskI10pPygwKT8oXFxkKyk/KCwpPyhcXC4tP1xcZCspPyhbYS16JV0pPy9pO1xuICB2YXIgZDNfZm9ybWF0X3R5cGVzID0gZDMubWFwKHtcbiAgICBiOiBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4geC50b1N0cmluZygyKTtcbiAgICB9LFxuICAgIGM6IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHgpO1xuICAgIH0sXG4gICAgbzogZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIHgudG9TdHJpbmcoOCk7XG4gICAgfSxcbiAgICB4OiBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4geC50b1N0cmluZygxNik7XG4gICAgfSxcbiAgICBYOiBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4geC50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcbiAgICB9LFxuICAgIGc6IGZ1bmN0aW9uKHgsIHApIHtcbiAgICAgIHJldHVybiB4LnRvUHJlY2lzaW9uKHApO1xuICAgIH0sXG4gICAgZTogZnVuY3Rpb24oeCwgcCkge1xuICAgICAgcmV0dXJuIHgudG9FeHBvbmVudGlhbChwKTtcbiAgICB9LFxuICAgIGY6IGZ1bmN0aW9uKHgsIHApIHtcbiAgICAgIHJldHVybiB4LnRvRml4ZWQocCk7XG4gICAgfSxcbiAgICByOiBmdW5jdGlvbih4LCBwKSB7XG4gICAgICByZXR1cm4gKHggPSBkMy5yb3VuZCh4LCBkM19mb3JtYXRfcHJlY2lzaW9uKHgsIHApKSkudG9GaXhlZChNYXRoLm1heCgwLCBNYXRoLm1pbigyMCwgZDNfZm9ybWF0X3ByZWNpc2lvbih4ICogKDEgKyAxZS0xNSksIHApKSkpO1xuICAgIH1cbiAgfSk7XG4gIGZ1bmN0aW9uIGQzX2Zvcm1hdF9wcmVjaXNpb24oeCwgcCkge1xuICAgIHJldHVybiBwIC0gKHggPyBNYXRoLmNlaWwoTWF0aC5sb2coeCkgLyBNYXRoLkxOMTApIDogMSk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfZm9ybWF0X3R5cGVEZWZhdWx0KHgpIHtcbiAgICByZXR1cm4geCArIFwiXCI7XG4gIH1cbiAgdmFyIGQzX2Zvcm1hdF9ncm91cCA9IGQzX2lkZW50aXR5O1xuICBpZiAoZDNfZm9ybWF0X2dyb3VwaW5nKSB7XG4gICAgdmFyIGQzX2Zvcm1hdF9ncm91cGluZ0xlbmd0aCA9IGQzX2Zvcm1hdF9ncm91cGluZy5sZW5ndGg7XG4gICAgZDNfZm9ybWF0X2dyb3VwID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBpID0gdmFsdWUubGVuZ3RoLCB0ID0gW10sIGogPSAwLCBnID0gZDNfZm9ybWF0X2dyb3VwaW5nWzBdO1xuICAgICAgd2hpbGUgKGkgPiAwICYmIGcgPiAwKSB7XG4gICAgICAgIHQucHVzaCh2YWx1ZS5zdWJzdHJpbmcoaSAtPSBnLCBpICsgZykpO1xuICAgICAgICBnID0gZDNfZm9ybWF0X2dyb3VwaW5nW2ogPSAoaiArIDEpICUgZDNfZm9ybWF0X2dyb3VwaW5nTGVuZ3RoXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0LnJldmVyc2UoKS5qb2luKGQzX2Zvcm1hdF90aG91c2FuZHNTZXBhcmF0b3IpO1xuICAgIH07XG4gIH1cbiAgZDMuZ2VvID0ge307XG4gIGZ1bmN0aW9uIGQzX2FkZGVyKCkge31cbiAgZDNfYWRkZXIucHJvdG90eXBlID0ge1xuICAgIHM6IDAsXG4gICAgdDogMCxcbiAgICBhZGQ6IGZ1bmN0aW9uKHkpIHtcbiAgICAgIGQzX2FkZGVyU3VtKHksIHRoaXMudCwgZDNfYWRkZXJUZW1wKTtcbiAgICAgIGQzX2FkZGVyU3VtKGQzX2FkZGVyVGVtcC5zLCB0aGlzLnMsIHRoaXMpO1xuICAgICAgaWYgKHRoaXMucykgdGhpcy50ICs9IGQzX2FkZGVyVGVtcC50OyBlbHNlIHRoaXMucyA9IGQzX2FkZGVyVGVtcC50O1xuICAgIH0sXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5zID0gdGhpcy50ID0gMDtcbiAgICB9LFxuICAgIHZhbHVlT2Y6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMucztcbiAgICB9XG4gIH07XG4gIHZhciBkM19hZGRlclRlbXAgPSBuZXcgZDNfYWRkZXIoKTtcbiAgZnVuY3Rpb24gZDNfYWRkZXJTdW0oYSwgYiwgbykge1xuICAgIHZhciB4ID0gby5zID0gYSArIGIsIGJ2ID0geCAtIGEsIGF2ID0geCAtIGJ2O1xuICAgIG8udCA9IGEgLSBhdiArIChiIC0gYnYpO1xuICB9XG4gIGQzLmdlby5zdHJlYW0gPSBmdW5jdGlvbihvYmplY3QsIGxpc3RlbmVyKSB7XG4gICAgaWYgKG9iamVjdCAmJiBkM19nZW9fc3RyZWFtT2JqZWN0VHlwZS5oYXNPd25Qcm9wZXJ0eShvYmplY3QudHlwZSkpIHtcbiAgICAgIGQzX2dlb19zdHJlYW1PYmplY3RUeXBlW29iamVjdC50eXBlXShvYmplY3QsIGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZDNfZ2VvX3N0cmVhbUdlb21ldHJ5KG9iamVjdCwgbGlzdGVuZXIpO1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gZDNfZ2VvX3N0cmVhbUdlb21ldHJ5KGdlb21ldHJ5LCBsaXN0ZW5lcikge1xuICAgIGlmIChnZW9tZXRyeSAmJiBkM19nZW9fc3RyZWFtR2VvbWV0cnlUeXBlLmhhc093blByb3BlcnR5KGdlb21ldHJ5LnR5cGUpKSB7XG4gICAgICBkM19nZW9fc3RyZWFtR2VvbWV0cnlUeXBlW2dlb21ldHJ5LnR5cGVdKGdlb21ldHJ5LCBsaXN0ZW5lcik7XG4gICAgfVxuICB9XG4gIHZhciBkM19nZW9fc3RyZWFtT2JqZWN0VHlwZSA9IHtcbiAgICBGZWF0dXJlOiBmdW5jdGlvbihmZWF0dXJlLCBsaXN0ZW5lcikge1xuICAgICAgZDNfZ2VvX3N0cmVhbUdlb21ldHJ5KGZlYXR1cmUuZ2VvbWV0cnksIGxpc3RlbmVyKTtcbiAgICB9LFxuICAgIEZlYXR1cmVDb2xsZWN0aW9uOiBmdW5jdGlvbihvYmplY3QsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgZmVhdHVyZXMgPSBvYmplY3QuZmVhdHVyZXMsIGkgPSAtMSwgbiA9IGZlYXR1cmVzLmxlbmd0aDtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSBkM19nZW9fc3RyZWFtR2VvbWV0cnkoZmVhdHVyZXNbaV0uZ2VvbWV0cnksIGxpc3RlbmVyKTtcbiAgICB9XG4gIH07XG4gIHZhciBkM19nZW9fc3RyZWFtR2VvbWV0cnlUeXBlID0ge1xuICAgIFNwaGVyZTogZnVuY3Rpb24ob2JqZWN0LCBsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIuc3BoZXJlKCk7XG4gICAgfSxcbiAgICBQb2ludDogZnVuY3Rpb24ob2JqZWN0LCBsaXN0ZW5lcikge1xuICAgICAgb2JqZWN0ID0gb2JqZWN0LmNvb3JkaW5hdGVzO1xuICAgICAgbGlzdGVuZXIucG9pbnQob2JqZWN0WzBdLCBvYmplY3RbMV0sIG9iamVjdFsyXSk7XG4gICAgfSxcbiAgICBNdWx0aVBvaW50OiBmdW5jdGlvbihvYmplY3QsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgY29vcmRpbmF0ZXMgPSBvYmplY3QuY29vcmRpbmF0ZXMsIGkgPSAtMSwgbiA9IGNvb3JkaW5hdGVzLmxlbmd0aDtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSBvYmplY3QgPSBjb29yZGluYXRlc1tpXSwgbGlzdGVuZXIucG9pbnQob2JqZWN0WzBdLCBvYmplY3RbMV0sIG9iamVjdFsyXSk7XG4gICAgfSxcbiAgICBMaW5lU3RyaW5nOiBmdW5jdGlvbihvYmplY3QsIGxpc3RlbmVyKSB7XG4gICAgICBkM19nZW9fc3RyZWFtTGluZShvYmplY3QuY29vcmRpbmF0ZXMsIGxpc3RlbmVyLCAwKTtcbiAgICB9LFxuICAgIE11bHRpTGluZVN0cmluZzogZnVuY3Rpb24ob2JqZWN0LCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGNvb3JkaW5hdGVzID0gb2JqZWN0LmNvb3JkaW5hdGVzLCBpID0gLTEsIG4gPSBjb29yZGluYXRlcy5sZW5ndGg7XG4gICAgICB3aGlsZSAoKytpIDwgbikgZDNfZ2VvX3N0cmVhbUxpbmUoY29vcmRpbmF0ZXNbaV0sIGxpc3RlbmVyLCAwKTtcbiAgICB9LFxuICAgIFBvbHlnb246IGZ1bmN0aW9uKG9iamVjdCwgbGlzdGVuZXIpIHtcbiAgICAgIGQzX2dlb19zdHJlYW1Qb2x5Z29uKG9iamVjdC5jb29yZGluYXRlcywgbGlzdGVuZXIpO1xuICAgIH0sXG4gICAgTXVsdGlQb2x5Z29uOiBmdW5jdGlvbihvYmplY3QsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgY29vcmRpbmF0ZXMgPSBvYmplY3QuY29vcmRpbmF0ZXMsIGkgPSAtMSwgbiA9IGNvb3JkaW5hdGVzLmxlbmd0aDtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSBkM19nZW9fc3RyZWFtUG9seWdvbihjb29yZGluYXRlc1tpXSwgbGlzdGVuZXIpO1xuICAgIH0sXG4gICAgR2VvbWV0cnlDb2xsZWN0aW9uOiBmdW5jdGlvbihvYmplY3QsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgZ2VvbWV0cmllcyA9IG9iamVjdC5nZW9tZXRyaWVzLCBpID0gLTEsIG4gPSBnZW9tZXRyaWVzLmxlbmd0aDtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSBkM19nZW9fc3RyZWFtR2VvbWV0cnkoZ2VvbWV0cmllc1tpXSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gZDNfZ2VvX3N0cmVhbUxpbmUoY29vcmRpbmF0ZXMsIGxpc3RlbmVyLCBjbG9zZWQpIHtcbiAgICB2YXIgaSA9IC0xLCBuID0gY29vcmRpbmF0ZXMubGVuZ3RoIC0gY2xvc2VkLCBjb29yZGluYXRlO1xuICAgIGxpc3RlbmVyLmxpbmVTdGFydCgpO1xuICAgIHdoaWxlICgrK2kgPCBuKSBjb29yZGluYXRlID0gY29vcmRpbmF0ZXNbaV0sIGxpc3RlbmVyLnBvaW50KGNvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV0sIGNvb3JkaW5hdGVbMl0pO1xuICAgIGxpc3RlbmVyLmxpbmVFbmQoKTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fc3RyZWFtUG9seWdvbihjb29yZGluYXRlcywgbGlzdGVuZXIpIHtcbiAgICB2YXIgaSA9IC0xLCBuID0gY29vcmRpbmF0ZXMubGVuZ3RoO1xuICAgIGxpc3RlbmVyLnBvbHlnb25TdGFydCgpO1xuICAgIHdoaWxlICgrK2kgPCBuKSBkM19nZW9fc3RyZWFtTGluZShjb29yZGluYXRlc1tpXSwgbGlzdGVuZXIsIDEpO1xuICAgIGxpc3RlbmVyLnBvbHlnb25FbmQoKTtcbiAgfVxuICBkMy5nZW8uYXJlYSA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGQzX2dlb19hcmVhU3VtID0gMDtcbiAgICBkMy5nZW8uc3RyZWFtKG9iamVjdCwgZDNfZ2VvX2FyZWEpO1xuICAgIHJldHVybiBkM19nZW9fYXJlYVN1bTtcbiAgfTtcbiAgdmFyIGQzX2dlb19hcmVhU3VtLCBkM19nZW9fYXJlYVJpbmdTdW0gPSBuZXcgZDNfYWRkZXIoKTtcbiAgdmFyIGQzX2dlb19hcmVhID0ge1xuICAgIHNwaGVyZTogZnVuY3Rpb24oKSB7XG4gICAgICBkM19nZW9fYXJlYVN1bSArPSA0ICogz4A7XG4gICAgfSxcbiAgICBwb2ludDogZDNfbm9vcCxcbiAgICBsaW5lU3RhcnQ6IGQzX25vb3AsXG4gICAgbGluZUVuZDogZDNfbm9vcCxcbiAgICBwb2x5Z29uU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgZDNfZ2VvX2FyZWFSaW5nU3VtLnJlc2V0KCk7XG4gICAgICBkM19nZW9fYXJlYS5saW5lU3RhcnQgPSBkM19nZW9fYXJlYVJpbmdTdGFydDtcbiAgICB9LFxuICAgIHBvbHlnb25FbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFyZWEgPSAyICogZDNfZ2VvX2FyZWFSaW5nU3VtO1xuICAgICAgZDNfZ2VvX2FyZWFTdW0gKz0gYXJlYSA8IDAgPyA0ICogz4AgKyBhcmVhIDogYXJlYTtcbiAgICAgIGQzX2dlb19hcmVhLmxpbmVTdGFydCA9IGQzX2dlb19hcmVhLmxpbmVFbmQgPSBkM19nZW9fYXJlYS5wb2ludCA9IGQzX25vb3A7XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiBkM19nZW9fYXJlYVJpbmdTdGFydCgpIHtcbiAgICB2YXIgzrswMCwgz4YwMCwgzrswLCBjb3PPhjAsIHNpbs+GMDtcbiAgICBkM19nZW9fYXJlYS5wb2ludCA9IGZ1bmN0aW9uKM67LCDPhikge1xuICAgICAgZDNfZ2VvX2FyZWEucG9pbnQgPSBuZXh0UG9pbnQ7XG4gICAgICDOuzAgPSAozrswMCA9IM67KSAqIGQzX3JhZGlhbnMsIGNvc8+GMCA9IE1hdGguY29zKM+GID0gKM+GMDAgPSDPhikgKiBkM19yYWRpYW5zIC8gMiArIM+AIC8gNCksIFxuICAgICAgc2luz4YwID0gTWF0aC5zaW4oz4YpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gbmV4dFBvaW50KM67LCDPhikge1xuICAgICAgzrsgKj0gZDNfcmFkaWFucztcbiAgICAgIM+GID0gz4YgKiBkM19yYWRpYW5zIC8gMiArIM+AIC8gNDtcbiAgICAgIHZhciBkzrsgPSDOuyAtIM67MCwgY29zz4YgPSBNYXRoLmNvcyjPhiksIHNpbs+GID0gTWF0aC5zaW4oz4YpLCBrID0gc2luz4YwICogc2luz4YsIHUgPSBjb3PPhjAgKiBjb3PPhiArIGsgKiBNYXRoLmNvcyhkzrspLCB2ID0gayAqIE1hdGguc2luKGTOuyk7XG4gICAgICBkM19nZW9fYXJlYVJpbmdTdW0uYWRkKE1hdGguYXRhbjIodiwgdSkpO1xuICAgICAgzrswID0gzrssIGNvc8+GMCA9IGNvc8+GLCBzaW7PhjAgPSBzaW7PhjtcbiAgICB9XG4gICAgZDNfZ2VvX2FyZWEubGluZUVuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgbmV4dFBvaW50KM67MDAsIM+GMDApO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX2NhcnRlc2lhbihzcGhlcmljYWwpIHtcbiAgICB2YXIgzrsgPSBzcGhlcmljYWxbMF0sIM+GID0gc3BoZXJpY2FsWzFdLCBjb3PPhiA9IE1hdGguY29zKM+GKTtcbiAgICByZXR1cm4gWyBjb3PPhiAqIE1hdGguY29zKM67KSwgY29zz4YgKiBNYXRoLnNpbijOuyksIE1hdGguc2luKM+GKSBdO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19jYXJ0ZXNpYW5Eb3QoYSwgYikge1xuICAgIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdICsgYVsyXSAqIGJbMl07XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX2NhcnRlc2lhbkNyb3NzKGEsIGIpIHtcbiAgICByZXR1cm4gWyBhWzFdICogYlsyXSAtIGFbMl0gKiBiWzFdLCBhWzJdICogYlswXSAtIGFbMF0gKiBiWzJdLCBhWzBdICogYlsxXSAtIGFbMV0gKiBiWzBdIF07XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX2NhcnRlc2lhbkFkZChhLCBiKSB7XG4gICAgYVswXSArPSBiWzBdO1xuICAgIGFbMV0gKz0gYlsxXTtcbiAgICBhWzJdICs9IGJbMl07XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX2NhcnRlc2lhblNjYWxlKHZlY3Rvciwgaykge1xuICAgIHJldHVybiBbIHZlY3RvclswXSAqIGssIHZlY3RvclsxXSAqIGssIHZlY3RvclsyXSAqIGsgXTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fY2FydGVzaWFuTm9ybWFsaXplKGQpIHtcbiAgICB2YXIgbCA9IE1hdGguc3FydChkWzBdICogZFswXSArIGRbMV0gKiBkWzFdICsgZFsyXSAqIGRbMl0pO1xuICAgIGRbMF0gLz0gbDtcbiAgICBkWzFdIC89IGw7XG4gICAgZFsyXSAvPSBsO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19zcGhlcmljYWwoY2FydGVzaWFuKSB7XG4gICAgcmV0dXJuIFsgTWF0aC5hdGFuMihjYXJ0ZXNpYW5bMV0sIGNhcnRlc2lhblswXSksIGQzX2FzaW4oY2FydGVzaWFuWzJdKSBdO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19zcGhlcmljYWxFcXVhbChhLCBiKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKGFbMF0gLSBiWzBdKSA8IM61ICYmIE1hdGguYWJzKGFbMV0gLSBiWzFdKSA8IM61O1xuICB9XG4gIGQzLmdlby5ib3VuZHMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgzrswLCDPhjAsIM67MSwgz4YxLCDOu18sIM67X18sIM+GX18sIHAwLCBkzrtTdW0sIHJhbmdlcywgcmFuZ2U7XG4gICAgdmFyIGJvdW5kID0ge1xuICAgICAgcG9pbnQ6IHBvaW50LFxuICAgICAgbGluZVN0YXJ0OiBsaW5lU3RhcnQsXG4gICAgICBsaW5lRW5kOiBsaW5lRW5kLFxuICAgICAgcG9seWdvblN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgYm91bmQucG9pbnQgPSByaW5nUG9pbnQ7XG4gICAgICAgIGJvdW5kLmxpbmVTdGFydCA9IHJpbmdTdGFydDtcbiAgICAgICAgYm91bmQubGluZUVuZCA9IHJpbmdFbmQ7XG4gICAgICAgIGTOu1N1bSA9IDA7XG4gICAgICAgIGQzX2dlb19hcmVhLnBvbHlnb25TdGFydCgpO1xuICAgICAgfSxcbiAgICAgIHBvbHlnb25FbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBkM19nZW9fYXJlYS5wb2x5Z29uRW5kKCk7XG4gICAgICAgIGJvdW5kLnBvaW50ID0gcG9pbnQ7XG4gICAgICAgIGJvdW5kLmxpbmVTdGFydCA9IGxpbmVTdGFydDtcbiAgICAgICAgYm91bmQubGluZUVuZCA9IGxpbmVFbmQ7XG4gICAgICAgIGlmIChkM19nZW9fYXJlYVJpbmdTdW0gPCAwKSDOuzAgPSAtKM67MSA9IDE4MCksIM+GMCA9IC0oz4YxID0gOTApOyBlbHNlIGlmIChkzrtTdW0gPiDOtSkgz4YxID0gOTA7IGVsc2UgaWYgKGTOu1N1bSA8IC3OtSkgz4YwID0gLTkwO1xuICAgICAgICByYW5nZVswXSA9IM67MCwgcmFuZ2VbMV0gPSDOuzE7XG4gICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBwb2ludCjOuywgz4YpIHtcbiAgICAgIHJhbmdlcy5wdXNoKHJhbmdlID0gWyDOuzAgPSDOuywgzrsxID0gzrsgXSk7XG4gICAgICBpZiAoz4YgPCDPhjApIM+GMCA9IM+GO1xuICAgICAgaWYgKM+GID4gz4YxKSDPhjEgPSDPhjtcbiAgICB9XG4gICAgZnVuY3Rpb24gbGluZVBvaW50KM67LCDPhikge1xuICAgICAgdmFyIHAgPSBkM19nZW9fY2FydGVzaWFuKFsgzrsgKiBkM19yYWRpYW5zLCDPhiAqIGQzX3JhZGlhbnMgXSk7XG4gICAgICBpZiAocDApIHtcbiAgICAgICAgdmFyIG5vcm1hbCA9IGQzX2dlb19jYXJ0ZXNpYW5Dcm9zcyhwMCwgcCksIGVxdWF0b3JpYWwgPSBbIG5vcm1hbFsxXSwgLW5vcm1hbFswXSwgMCBdLCBpbmZsZWN0aW9uID0gZDNfZ2VvX2NhcnRlc2lhbkNyb3NzKGVxdWF0b3JpYWwsIG5vcm1hbCk7XG4gICAgICAgIGQzX2dlb19jYXJ0ZXNpYW5Ob3JtYWxpemUoaW5mbGVjdGlvbik7XG4gICAgICAgIGluZmxlY3Rpb24gPSBkM19nZW9fc3BoZXJpY2FsKGluZmxlY3Rpb24pO1xuICAgICAgICB2YXIgZM67ID0gzrsgLSDOu18sIHMgPSBkzrsgPiAwID8gMSA6IC0xLCDOu2kgPSBpbmZsZWN0aW9uWzBdICogZDNfZGVncmVlcyAqIHMsIGFudGltZXJpZGlhbiA9IE1hdGguYWJzKGTOuykgPiAxODA7XG4gICAgICAgIGlmIChhbnRpbWVyaWRpYW4gXiAocyAqIM67XyA8IM67aSAmJiDOu2kgPCBzICogzrspKSB7XG4gICAgICAgICAgdmFyIM+GaSA9IGluZmxlY3Rpb25bMV0gKiBkM19kZWdyZWVzO1xuICAgICAgICAgIGlmICjPhmkgPiDPhjEpIM+GMSA9IM+GaTtcbiAgICAgICAgfSBlbHNlIGlmICjOu2kgPSAozrtpICsgMzYwKSAlIDM2MCAtIDE4MCwgYW50aW1lcmlkaWFuIF4gKHMgKiDOu18gPCDOu2kgJiYgzrtpIDwgcyAqIM67KSkge1xuICAgICAgICAgIHZhciDPhmkgPSAtaW5mbGVjdGlvblsxXSAqIGQzX2RlZ3JlZXM7XG4gICAgICAgICAgaWYgKM+GaSA8IM+GMCkgz4YwID0gz4ZpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICjPhiA8IM+GMCkgz4YwID0gz4Y7XG4gICAgICAgICAgaWYgKM+GID4gz4YxKSDPhjEgPSDPhjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYW50aW1lcmlkaWFuKSB7XG4gICAgICAgICAgaWYgKM67IDwgzrtfKSB7XG4gICAgICAgICAgICBpZiAoYW5nbGUozrswLCDOuykgPiBhbmdsZSjOuzAsIM67MSkpIM67MSA9IM67O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYW5nbGUozrssIM67MSkgPiBhbmdsZSjOuzAsIM67MSkpIM67MCA9IM67O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAozrsxID49IM67MCkge1xuICAgICAgICAgICAgaWYgKM67IDwgzrswKSDOuzAgPSDOuztcbiAgICAgICAgICAgIGlmICjOuyA+IM67MSkgzrsxID0gzrs7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICjOuyA+IM67Xykge1xuICAgICAgICAgICAgICBpZiAoYW5nbGUozrswLCDOuykgPiBhbmdsZSjOuzAsIM67MSkpIM67MSA9IM67O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKGFuZ2xlKM67LCDOuzEpID4gYW5nbGUozrswLCDOuzEpKSDOuzAgPSDOuztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvaW50KM67LCDPhik7XG4gICAgICB9XG4gICAgICBwMCA9IHAsIM67XyA9IM67O1xuICAgIH1cbiAgICBmdW5jdGlvbiBsaW5lU3RhcnQoKSB7XG4gICAgICBib3VuZC5wb2ludCA9IGxpbmVQb2ludDtcbiAgICB9XG4gICAgZnVuY3Rpb24gbGluZUVuZCgpIHtcbiAgICAgIHJhbmdlWzBdID0gzrswLCByYW5nZVsxXSA9IM67MTtcbiAgICAgIGJvdW5kLnBvaW50ID0gcG9pbnQ7XG4gICAgICBwMCA9IG51bGw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJpbmdQb2ludCjOuywgz4YpIHtcbiAgICAgIGlmIChwMCkge1xuICAgICAgICB2YXIgZM67ID0gzrsgLSDOu187XG4gICAgICAgIGTOu1N1bSArPSBNYXRoLmFicyhkzrspID4gMTgwID8gZM67ICsgKGTOuyA+IDAgPyAzNjAgOiAtMzYwKSA6IGTOuztcbiAgICAgIH0gZWxzZSDOu19fID0gzrssIM+GX18gPSDPhjtcbiAgICAgIGQzX2dlb19hcmVhLnBvaW50KM67LCDPhik7XG4gICAgICBsaW5lUG9pbnQozrssIM+GKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmluZ1N0YXJ0KCkge1xuICAgICAgZDNfZ2VvX2FyZWEubGluZVN0YXJ0KCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJpbmdFbmQoKSB7XG4gICAgICByaW5nUG9pbnQozrtfXywgz4ZfXyk7XG4gICAgICBkM19nZW9fYXJlYS5saW5lRW5kKCk7XG4gICAgICBpZiAoTWF0aC5hYnMoZM67U3VtKSA+IM61KSDOuzAgPSAtKM67MSA9IDE4MCk7XG4gICAgICByYW5nZVswXSA9IM67MCwgcmFuZ2VbMV0gPSDOuzE7XG4gICAgICBwMCA9IG51bGw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFuZ2xlKM67MCwgzrsxKSB7XG4gICAgICByZXR1cm4gKM67MSAtPSDOuzApIDwgMCA/IM67MSArIDM2MCA6IM67MTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29tcGFyZVJhbmdlcyhhLCBiKSB7XG4gICAgICByZXR1cm4gYVswXSAtIGJbMF07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdpdGhpblJhbmdlKHgsIHJhbmdlKSB7XG4gICAgICByZXR1cm4gcmFuZ2VbMF0gPD0gcmFuZ2VbMV0gPyByYW5nZVswXSA8PSB4ICYmIHggPD0gcmFuZ2VbMV0gOiB4IDwgcmFuZ2VbMF0gfHwgcmFuZ2VbMV0gPCB4O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgz4YxID0gzrsxID0gLSjOuzAgPSDPhjAgPSBJbmZpbml0eSk7XG4gICAgICByYW5nZXMgPSBbXTtcbiAgICAgIGQzLmdlby5zdHJlYW0oZmVhdHVyZSwgYm91bmQpO1xuICAgICAgdmFyIG4gPSByYW5nZXMubGVuZ3RoO1xuICAgICAgaWYgKG4pIHtcbiAgICAgICAgcmFuZ2VzLnNvcnQoY29tcGFyZVJhbmdlcyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAxLCBhID0gcmFuZ2VzWzBdLCBiLCBtZXJnZWQgPSBbIGEgXTsgaSA8IG47ICsraSkge1xuICAgICAgICAgIGIgPSByYW5nZXNbaV07XG4gICAgICAgICAgaWYgKHdpdGhpblJhbmdlKGJbMF0sIGEpIHx8IHdpdGhpblJhbmdlKGJbMV0sIGEpKSB7XG4gICAgICAgICAgICBpZiAoYW5nbGUoYVswXSwgYlsxXSkgPiBhbmdsZShhWzBdLCBhWzFdKSkgYVsxXSA9IGJbMV07XG4gICAgICAgICAgICBpZiAoYW5nbGUoYlswXSwgYVsxXSkgPiBhbmdsZShhWzBdLCBhWzFdKSkgYVswXSA9IGJbMF07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lcmdlZC5wdXNoKGEgPSBiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJlc3QgPSAtSW5maW5pdHksIGTOuztcbiAgICAgICAgZm9yICh2YXIgbiA9IG1lcmdlZC5sZW5ndGggLSAxLCBpID0gMCwgYSA9IG1lcmdlZFtuXSwgYjsgaSA8PSBuOyBhID0gYiwgKytpKSB7XG4gICAgICAgICAgYiA9IG1lcmdlZFtpXTtcbiAgICAgICAgICBpZiAoKGTOuyA9IGFuZ2xlKGFbMV0sIGJbMF0pKSA+IGJlc3QpIGJlc3QgPSBkzrssIM67MCA9IGJbMF0sIM67MSA9IGFbMV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJhbmdlcyA9IHJhbmdlID0gbnVsbDtcbiAgICAgIHJldHVybiDOuzAgPT09IEluZmluaXR5IHx8IM+GMCA9PT0gSW5maW5pdHkgPyBbIFsgTmFOLCBOYU4gXSwgWyBOYU4sIE5hTiBdIF0gOiBbIFsgzrswLCDPhjAgXSwgWyDOuzEsIM+GMSBdIF07XG4gICAgfTtcbiAgfSgpO1xuICBkMy5nZW8uY2VudHJvaWQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBkM19nZW9fY2VudHJvaWRXMCA9IGQzX2dlb19jZW50cm9pZFcxID0gZDNfZ2VvX2NlbnRyb2lkWDAgPSBkM19nZW9fY2VudHJvaWRZMCA9IGQzX2dlb19jZW50cm9pZFowID0gZDNfZ2VvX2NlbnRyb2lkWDEgPSBkM19nZW9fY2VudHJvaWRZMSA9IGQzX2dlb19jZW50cm9pZFoxID0gZDNfZ2VvX2NlbnRyb2lkWDIgPSBkM19nZW9fY2VudHJvaWRZMiA9IGQzX2dlb19jZW50cm9pZFoyID0gMDtcbiAgICBkMy5nZW8uc3RyZWFtKG9iamVjdCwgZDNfZ2VvX2NlbnRyb2lkKTtcbiAgICB2YXIgeCA9IGQzX2dlb19jZW50cm9pZFgyLCB5ID0gZDNfZ2VvX2NlbnRyb2lkWTIsIHogPSBkM19nZW9fY2VudHJvaWRaMiwgbSA9IHggKiB4ICsgeSAqIHkgKyB6ICogejtcbiAgICBpZiAobSA8IM61Mikge1xuICAgICAgeCA9IGQzX2dlb19jZW50cm9pZFgxLCB5ID0gZDNfZ2VvX2NlbnRyb2lkWTEsIHogPSBkM19nZW9fY2VudHJvaWRaMTtcbiAgICAgIGlmIChkM19nZW9fY2VudHJvaWRXMSA8IM61KSB4ID0gZDNfZ2VvX2NlbnRyb2lkWDAsIHkgPSBkM19nZW9fY2VudHJvaWRZMCwgeiA9IGQzX2dlb19jZW50cm9pZFowO1xuICAgICAgbSA9IHggKiB4ICsgeSAqIHkgKyB6ICogejtcbiAgICAgIGlmIChtIDwgzrUyKSByZXR1cm4gWyBOYU4sIE5hTiBdO1xuICAgIH1cbiAgICByZXR1cm4gWyBNYXRoLmF0YW4yKHksIHgpICogZDNfZGVncmVlcywgZDNfYXNpbih6IC8gTWF0aC5zcXJ0KG0pKSAqIGQzX2RlZ3JlZXMgXTtcbiAgfTtcbiAgdmFyIGQzX2dlb19jZW50cm9pZFcwLCBkM19nZW9fY2VudHJvaWRXMSwgZDNfZ2VvX2NlbnRyb2lkWDAsIGQzX2dlb19jZW50cm9pZFkwLCBkM19nZW9fY2VudHJvaWRaMCwgZDNfZ2VvX2NlbnRyb2lkWDEsIGQzX2dlb19jZW50cm9pZFkxLCBkM19nZW9fY2VudHJvaWRaMSwgZDNfZ2VvX2NlbnRyb2lkWDIsIGQzX2dlb19jZW50cm9pZFkyLCBkM19nZW9fY2VudHJvaWRaMjtcbiAgdmFyIGQzX2dlb19jZW50cm9pZCA9IHtcbiAgICBzcGhlcmU6IGQzX25vb3AsXG4gICAgcG9pbnQ6IGQzX2dlb19jZW50cm9pZFBvaW50LFxuICAgIGxpbmVTdGFydDogZDNfZ2VvX2NlbnRyb2lkTGluZVN0YXJ0LFxuICAgIGxpbmVFbmQ6IGQzX2dlb19jZW50cm9pZExpbmVFbmQsXG4gICAgcG9seWdvblN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgIGQzX2dlb19jZW50cm9pZC5saW5lU3RhcnQgPSBkM19nZW9fY2VudHJvaWRSaW5nU3RhcnQ7XG4gICAgfSxcbiAgICBwb2x5Z29uRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgIGQzX2dlb19jZW50cm9pZC5saW5lU3RhcnQgPSBkM19nZW9fY2VudHJvaWRMaW5lU3RhcnQ7XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiBkM19nZW9fY2VudHJvaWRQb2ludCjOuywgz4YpIHtcbiAgICDOuyAqPSBkM19yYWRpYW5zO1xuICAgIHZhciBjb3PPhiA9IE1hdGguY29zKM+GICo9IGQzX3JhZGlhbnMpO1xuICAgIGQzX2dlb19jZW50cm9pZFBvaW50WFlaKGNvc8+GICogTWF0aC5jb3MozrspLCBjb3PPhiAqIE1hdGguc2luKM67KSwgTWF0aC5zaW4oz4YpKTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fY2VudHJvaWRQb2ludFhZWih4LCB5LCB6KSB7XG4gICAgKytkM19nZW9fY2VudHJvaWRXMDtcbiAgICBkM19nZW9fY2VudHJvaWRYMCArPSAoeCAtIGQzX2dlb19jZW50cm9pZFgwKSAvIGQzX2dlb19jZW50cm9pZFcwO1xuICAgIGQzX2dlb19jZW50cm9pZFkwICs9ICh5IC0gZDNfZ2VvX2NlbnRyb2lkWTApIC8gZDNfZ2VvX2NlbnRyb2lkVzA7XG4gICAgZDNfZ2VvX2NlbnRyb2lkWjAgKz0gKHogLSBkM19nZW9fY2VudHJvaWRaMCkgLyBkM19nZW9fY2VudHJvaWRXMDtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fY2VudHJvaWRMaW5lU3RhcnQoKSB7XG4gICAgdmFyIHgwLCB5MCwgejA7XG4gICAgZDNfZ2VvX2NlbnRyb2lkLnBvaW50ID0gZnVuY3Rpb24ozrssIM+GKSB7XG4gICAgICDOuyAqPSBkM19yYWRpYW5zO1xuICAgICAgdmFyIGNvc8+GID0gTWF0aC5jb3Moz4YgKj0gZDNfcmFkaWFucyk7XG4gICAgICB4MCA9IGNvc8+GICogTWF0aC5jb3MozrspO1xuICAgICAgeTAgPSBjb3PPhiAqIE1hdGguc2luKM67KTtcbiAgICAgIHowID0gTWF0aC5zaW4oz4YpO1xuICAgICAgZDNfZ2VvX2NlbnRyb2lkLnBvaW50ID0gbmV4dFBvaW50O1xuICAgICAgZDNfZ2VvX2NlbnRyb2lkUG9pbnRYWVooeDAsIHkwLCB6MCk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBuZXh0UG9pbnQozrssIM+GKSB7XG4gICAgICDOuyAqPSBkM19yYWRpYW5zO1xuICAgICAgdmFyIGNvc8+GID0gTWF0aC5jb3Moz4YgKj0gZDNfcmFkaWFucyksIHggPSBjb3PPhiAqIE1hdGguY29zKM67KSwgeSA9IGNvc8+GICogTWF0aC5zaW4ozrspLCB6ID0gTWF0aC5zaW4oz4YpLCB3ID0gTWF0aC5hdGFuMihNYXRoLnNxcnQoKHcgPSB5MCAqIHogLSB6MCAqIHkpICogdyArICh3ID0gejAgKiB4IC0geDAgKiB6KSAqIHcgKyAodyA9IHgwICogeSAtIHkwICogeCkgKiB3KSwgeDAgKiB4ICsgeTAgKiB5ICsgejAgKiB6KTtcbiAgICAgIGQzX2dlb19jZW50cm9pZFcxICs9IHc7XG4gICAgICBkM19nZW9fY2VudHJvaWRYMSArPSB3ICogKHgwICsgKHgwID0geCkpO1xuICAgICAgZDNfZ2VvX2NlbnRyb2lkWTEgKz0gdyAqICh5MCArICh5MCA9IHkpKTtcbiAgICAgIGQzX2dlb19jZW50cm9pZFoxICs9IHcgKiAoejAgKyAoejAgPSB6KSk7XG4gICAgICBkM19nZW9fY2VudHJvaWRQb2ludFhZWih4MCwgeTAsIHowKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX2NlbnRyb2lkTGluZUVuZCgpIHtcbiAgICBkM19nZW9fY2VudHJvaWQucG9pbnQgPSBkM19nZW9fY2VudHJvaWRQb2ludDtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fY2VudHJvaWRSaW5nU3RhcnQoKSB7XG4gICAgdmFyIM67MDAsIM+GMDAsIHgwLCB5MCwgejA7XG4gICAgZDNfZ2VvX2NlbnRyb2lkLnBvaW50ID0gZnVuY3Rpb24ozrssIM+GKSB7XG4gICAgICDOuzAwID0gzrssIM+GMDAgPSDPhjtcbiAgICAgIGQzX2dlb19jZW50cm9pZC5wb2ludCA9IG5leHRQb2ludDtcbiAgICAgIM67ICo9IGQzX3JhZGlhbnM7XG4gICAgICB2YXIgY29zz4YgPSBNYXRoLmNvcyjPhiAqPSBkM19yYWRpYW5zKTtcbiAgICAgIHgwID0gY29zz4YgKiBNYXRoLmNvcyjOuyk7XG4gICAgICB5MCA9IGNvc8+GICogTWF0aC5zaW4ozrspO1xuICAgICAgejAgPSBNYXRoLnNpbijPhik7XG4gICAgICBkM19nZW9fY2VudHJvaWRQb2ludFhZWih4MCwgeTAsIHowKTtcbiAgICB9O1xuICAgIGQzX2dlb19jZW50cm9pZC5saW5lRW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICBuZXh0UG9pbnQozrswMCwgz4YwMCk7XG4gICAgICBkM19nZW9fY2VudHJvaWQubGluZUVuZCA9IGQzX2dlb19jZW50cm9pZExpbmVFbmQ7XG4gICAgICBkM19nZW9fY2VudHJvaWQucG9pbnQgPSBkM19nZW9fY2VudHJvaWRQb2ludDtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIG5leHRQb2ludCjOuywgz4YpIHtcbiAgICAgIM67ICo9IGQzX3JhZGlhbnM7XG4gICAgICB2YXIgY29zz4YgPSBNYXRoLmNvcyjPhiAqPSBkM19yYWRpYW5zKSwgeCA9IGNvc8+GICogTWF0aC5jb3MozrspLCB5ID0gY29zz4YgKiBNYXRoLnNpbijOuyksIHogPSBNYXRoLnNpbijPhiksIGN4ID0geTAgKiB6IC0gejAgKiB5LCBjeSA9IHowICogeCAtIHgwICogeiwgY3ogPSB4MCAqIHkgLSB5MCAqIHgsIG0gPSBNYXRoLnNxcnQoY3ggKiBjeCArIGN5ICogY3kgKyBjeiAqIGN6KSwgdSA9IHgwICogeCArIHkwICogeSArIHowICogeiwgdiA9IG0gJiYgLWQzX2Fjb3ModSkgLyBtLCB3ID0gTWF0aC5hdGFuMihtLCB1KTtcbiAgICAgIGQzX2dlb19jZW50cm9pZFgyICs9IHYgKiBjeDtcbiAgICAgIGQzX2dlb19jZW50cm9pZFkyICs9IHYgKiBjeTtcbiAgICAgIGQzX2dlb19jZW50cm9pZFoyICs9IHYgKiBjejtcbiAgICAgIGQzX2dlb19jZW50cm9pZFcxICs9IHc7XG4gICAgICBkM19nZW9fY2VudHJvaWRYMSArPSB3ICogKHgwICsgKHgwID0geCkpO1xuICAgICAgZDNfZ2VvX2NlbnRyb2lkWTEgKz0gdyAqICh5MCArICh5MCA9IHkpKTtcbiAgICAgIGQzX2dlb19jZW50cm9pZFoxICs9IHcgKiAoejAgKyAoejAgPSB6KSk7XG4gICAgICBkM19nZW9fY2VudHJvaWRQb2ludFhZWih4MCwgeTAsIHowKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZDNfdHJ1ZSgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fY2xpcFBvbHlnb24oc2VnbWVudHMsIGNvbXBhcmUsIGluc2lkZSwgaW50ZXJwb2xhdGUsIGxpc3RlbmVyKSB7XG4gICAgdmFyIHN1YmplY3QgPSBbXSwgY2xpcCA9IFtdO1xuICAgIHNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24oc2VnbWVudCkge1xuICAgICAgaWYgKChuID0gc2VnbWVudC5sZW5ndGggLSAxKSA8PSAwKSByZXR1cm47XG4gICAgICB2YXIgbiwgcDAgPSBzZWdtZW50WzBdLCBwMSA9IHNlZ21lbnRbbl07XG4gICAgICBpZiAoZDNfZ2VvX3NwaGVyaWNhbEVxdWFsKHAwLCBwMSkpIHtcbiAgICAgICAgbGlzdGVuZXIubGluZVN0YXJ0KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKSBsaXN0ZW5lci5wb2ludCgocDAgPSBzZWdtZW50W2ldKVswXSwgcDBbMV0pO1xuICAgICAgICBsaXN0ZW5lci5saW5lRW5kKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBhID0ge1xuICAgICAgICBwb2ludDogcDAsXG4gICAgICAgIHBvaW50czogc2VnbWVudCxcbiAgICAgICAgb3RoZXI6IG51bGwsXG4gICAgICAgIHZpc2l0ZWQ6IGZhbHNlLFxuICAgICAgICBlbnRyeTogdHJ1ZSxcbiAgICAgICAgc3ViamVjdDogdHJ1ZVxuICAgICAgfSwgYiA9IHtcbiAgICAgICAgcG9pbnQ6IHAwLFxuICAgICAgICBwb2ludHM6IFsgcDAgXSxcbiAgICAgICAgb3RoZXI6IGEsXG4gICAgICAgIHZpc2l0ZWQ6IGZhbHNlLFxuICAgICAgICBlbnRyeTogZmFsc2UsXG4gICAgICAgIHN1YmplY3Q6IGZhbHNlXG4gICAgICB9O1xuICAgICAgYS5vdGhlciA9IGI7XG4gICAgICBzdWJqZWN0LnB1c2goYSk7XG4gICAgICBjbGlwLnB1c2goYik7XG4gICAgICBhID0ge1xuICAgICAgICBwb2ludDogcDEsXG4gICAgICAgIHBvaW50czogWyBwMSBdLFxuICAgICAgICBvdGhlcjogbnVsbCxcbiAgICAgICAgdmlzaXRlZDogZmFsc2UsXG4gICAgICAgIGVudHJ5OiBmYWxzZSxcbiAgICAgICAgc3ViamVjdDogdHJ1ZVxuICAgICAgfTtcbiAgICAgIGIgPSB7XG4gICAgICAgIHBvaW50OiBwMSxcbiAgICAgICAgcG9pbnRzOiBbIHAxIF0sXG4gICAgICAgIG90aGVyOiBhLFxuICAgICAgICB2aXNpdGVkOiBmYWxzZSxcbiAgICAgICAgZW50cnk6IHRydWUsXG4gICAgICAgIHN1YmplY3Q6IGZhbHNlXG4gICAgICB9O1xuICAgICAgYS5vdGhlciA9IGI7XG4gICAgICBzdWJqZWN0LnB1c2goYSk7XG4gICAgICBjbGlwLnB1c2goYik7XG4gICAgfSk7XG4gICAgY2xpcC5zb3J0KGNvbXBhcmUpO1xuICAgIGQzX2dlb19jbGlwUG9seWdvbkxpbmtDaXJjdWxhcihzdWJqZWN0KTtcbiAgICBkM19nZW9fY2xpcFBvbHlnb25MaW5rQ2lyY3VsYXIoY2xpcCk7XG4gICAgaWYgKCFzdWJqZWN0Lmxlbmd0aCkgcmV0dXJuO1xuICAgIGlmIChpbnNpZGUpIGZvciAodmFyIGkgPSAxLCBlID0gIWluc2lkZShjbGlwWzBdLnBvaW50KSwgbiA9IGNsaXAubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICBjbGlwW2ldLmVudHJ5ID0gZSA9ICFlO1xuICAgIH1cbiAgICB2YXIgc3RhcnQgPSBzdWJqZWN0WzBdLCBjdXJyZW50LCBwb2ludHMsIHBvaW50O1xuICAgIHdoaWxlICgxKSB7XG4gICAgICBjdXJyZW50ID0gc3RhcnQ7XG4gICAgICB3aGlsZSAoY3VycmVudC52aXNpdGVkKSBpZiAoKGN1cnJlbnQgPSBjdXJyZW50Lm5leHQpID09PSBzdGFydCkgcmV0dXJuO1xuICAgICAgcG9pbnRzID0gY3VycmVudC5wb2ludHM7XG4gICAgICBsaXN0ZW5lci5saW5lU3RhcnQoKTtcbiAgICAgIGRvIHtcbiAgICAgICAgY3VycmVudC52aXNpdGVkID0gY3VycmVudC5vdGhlci52aXNpdGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKGN1cnJlbnQuZW50cnkpIHtcbiAgICAgICAgICBpZiAoY3VycmVudC5zdWJqZWN0KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykgbGlzdGVuZXIucG9pbnQoKHBvaW50ID0gcG9pbnRzW2ldKVswXSwgcG9pbnRbMV0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnRlcnBvbGF0ZShjdXJyZW50LnBvaW50LCBjdXJyZW50Lm5leHQucG9pbnQsIDEsIGxpc3RlbmVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoY3VycmVudC5zdWJqZWN0KSB7XG4gICAgICAgICAgICBwb2ludHMgPSBjdXJyZW50LnByZXYucG9pbnRzO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHBvaW50cy5sZW5ndGg7IC0taSA+PSAwOyApIGxpc3RlbmVyLnBvaW50KChwb2ludCA9IHBvaW50c1tpXSlbMF0sIHBvaW50WzFdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW50ZXJwb2xhdGUoY3VycmVudC5wb2ludCwgY3VycmVudC5wcmV2LnBvaW50LCAtMSwgbGlzdGVuZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wcmV2O1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm90aGVyO1xuICAgICAgICBwb2ludHMgPSBjdXJyZW50LnBvaW50cztcbiAgICAgIH0gd2hpbGUgKCFjdXJyZW50LnZpc2l0ZWQpO1xuICAgICAgbGlzdGVuZXIubGluZUVuZCgpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fY2xpcFBvbHlnb25MaW5rQ2lyY3VsYXIoYXJyYXkpIHtcbiAgICBpZiAoIShuID0gYXJyYXkubGVuZ3RoKSkgcmV0dXJuO1xuICAgIHZhciBuLCBpID0gMCwgYSA9IGFycmF5WzBdLCBiO1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBhLm5leHQgPSBiID0gYXJyYXlbaV07XG4gICAgICBiLnByZXYgPSBhO1xuICAgICAgYSA9IGI7XG4gICAgfVxuICAgIGEubmV4dCA9IGIgPSBhcnJheVswXTtcbiAgICBiLnByZXYgPSBhO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19jbGlwKHBvaW50VmlzaWJsZSwgY2xpcExpbmUsIGludGVycG9sYXRlLCBwb2x5Z29uQ29udGFpbnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaW5lID0gY2xpcExpbmUobGlzdGVuZXIpO1xuICAgICAgdmFyIGNsaXAgPSB7XG4gICAgICAgIHBvaW50OiBwb2ludCxcbiAgICAgICAgbGluZVN0YXJ0OiBsaW5lU3RhcnQsXG4gICAgICAgIGxpbmVFbmQ6IGxpbmVFbmQsXG4gICAgICAgIHBvbHlnb25TdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY2xpcC5wb2ludCA9IHBvaW50UmluZztcbiAgICAgICAgICBjbGlwLmxpbmVTdGFydCA9IHJpbmdTdGFydDtcbiAgICAgICAgICBjbGlwLmxpbmVFbmQgPSByaW5nRW5kO1xuICAgICAgICAgIHNlZ21lbnRzID0gW107XG4gICAgICAgICAgcG9seWdvbiA9IFtdO1xuICAgICAgICAgIGxpc3RlbmVyLnBvbHlnb25TdGFydCgpO1xuICAgICAgICB9LFxuICAgICAgICBwb2x5Z29uRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjbGlwLnBvaW50ID0gcG9pbnQ7XG4gICAgICAgICAgY2xpcC5saW5lU3RhcnQgPSBsaW5lU3RhcnQ7XG4gICAgICAgICAgY2xpcC5saW5lRW5kID0gbGluZUVuZDtcbiAgICAgICAgICBzZWdtZW50cyA9IGQzLm1lcmdlKHNlZ21lbnRzKTtcbiAgICAgICAgICBpZiAoc2VnbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBkM19nZW9fY2xpcFBvbHlnb24oc2VnbWVudHMsIGQzX2dlb19jbGlwU29ydCwgbnVsbCwgaW50ZXJwb2xhdGUsIGxpc3RlbmVyKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHBvbHlnb25Db250YWlucyhwb2x5Z29uKSkge1xuICAgICAgICAgICAgbGlzdGVuZXIubGluZVN0YXJ0KCk7XG4gICAgICAgICAgICBpbnRlcnBvbGF0ZShudWxsLCBudWxsLCAxLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICBsaXN0ZW5lci5saW5lRW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpc3RlbmVyLnBvbHlnb25FbmQoKTtcbiAgICAgICAgICBzZWdtZW50cyA9IHBvbHlnb24gPSBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBzcGhlcmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGxpc3RlbmVyLnBvbHlnb25TdGFydCgpO1xuICAgICAgICAgIGxpc3RlbmVyLmxpbmVTdGFydCgpO1xuICAgICAgICAgIGludGVycG9sYXRlKG51bGwsIG51bGwsIDEsIGxpc3RlbmVyKTtcbiAgICAgICAgICBsaXN0ZW5lci5saW5lRW5kKCk7XG4gICAgICAgICAgbGlzdGVuZXIucG9seWdvbkVuZCgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZnVuY3Rpb24gcG9pbnQozrssIM+GKSB7XG4gICAgICAgIGlmIChwb2ludFZpc2libGUozrssIM+GKSkgbGlzdGVuZXIucG9pbnQozrssIM+GKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIHBvaW50TGluZSjOuywgz4YpIHtcbiAgICAgICAgbGluZS5wb2ludCjOuywgz4YpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gbGluZVN0YXJ0KCkge1xuICAgICAgICBjbGlwLnBvaW50ID0gcG9pbnRMaW5lO1xuICAgICAgICBsaW5lLmxpbmVTdGFydCgpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gbGluZUVuZCgpIHtcbiAgICAgICAgY2xpcC5wb2ludCA9IHBvaW50O1xuICAgICAgICBsaW5lLmxpbmVFbmQoKTtcbiAgICAgIH1cbiAgICAgIHZhciBzZWdtZW50cztcbiAgICAgIHZhciBidWZmZXIgPSBkM19nZW9fY2xpcEJ1ZmZlckxpc3RlbmVyKCksIHJpbmdMaXN0ZW5lciA9IGNsaXBMaW5lKGJ1ZmZlciksIHBvbHlnb24sIHJpbmc7XG4gICAgICBmdW5jdGlvbiBwb2ludFJpbmcozrssIM+GKSB7XG4gICAgICAgIHJpbmdMaXN0ZW5lci5wb2ludCjOuywgz4YpO1xuICAgICAgICByaW5nLnB1c2goWyDOuywgz4YgXSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiByaW5nU3RhcnQoKSB7XG4gICAgICAgIHJpbmdMaXN0ZW5lci5saW5lU3RhcnQoKTtcbiAgICAgICAgcmluZyA9IFtdO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gcmluZ0VuZCgpIHtcbiAgICAgICAgcG9pbnRSaW5nKHJpbmdbMF1bMF0sIHJpbmdbMF1bMV0pO1xuICAgICAgICByaW5nTGlzdGVuZXIubGluZUVuZCgpO1xuICAgICAgICB2YXIgY2xlYW4gPSByaW5nTGlzdGVuZXIuY2xlYW4oKSwgcmluZ1NlZ21lbnRzID0gYnVmZmVyLmJ1ZmZlcigpLCBzZWdtZW50LCBuID0gcmluZ1NlZ21lbnRzLmxlbmd0aDtcbiAgICAgICAgcmluZy5wb3AoKTtcbiAgICAgICAgcG9seWdvbi5wdXNoKHJpbmcpO1xuICAgICAgICByaW5nID0gbnVsbDtcbiAgICAgICAgaWYgKCFuKSByZXR1cm47XG4gICAgICAgIGlmIChjbGVhbiAmIDEpIHtcbiAgICAgICAgICBzZWdtZW50ID0gcmluZ1NlZ21lbnRzWzBdO1xuICAgICAgICAgIHZhciBuID0gc2VnbWVudC5sZW5ndGggLSAxLCBpID0gLTEsIHBvaW50O1xuICAgICAgICAgIGxpc3RlbmVyLmxpbmVTdGFydCgpO1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBuKSBsaXN0ZW5lci5wb2ludCgocG9pbnQgPSBzZWdtZW50W2ldKVswXSwgcG9pbnRbMV0pO1xuICAgICAgICAgIGxpc3RlbmVyLmxpbmVFbmQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG4gPiAxICYmIGNsZWFuICYgMikgcmluZ1NlZ21lbnRzLnB1c2gocmluZ1NlZ21lbnRzLnBvcCgpLmNvbmNhdChyaW5nU2VnbWVudHMuc2hpZnQoKSkpO1xuICAgICAgICBzZWdtZW50cy5wdXNoKHJpbmdTZWdtZW50cy5maWx0ZXIoZDNfZ2VvX2NsaXBTZWdtZW50TGVuZ3RoMSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNsaXA7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fY2xpcFNlZ21lbnRMZW5ndGgxKHNlZ21lbnQpIHtcbiAgICByZXR1cm4gc2VnbWVudC5sZW5ndGggPiAxO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19jbGlwQnVmZmVyTGlzdGVuZXIoKSB7XG4gICAgdmFyIGxpbmVzID0gW10sIGxpbmU7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxpbmVzLnB1c2gobGluZSA9IFtdKTtcbiAgICAgIH0sXG4gICAgICBwb2ludDogZnVuY3Rpb24ozrssIM+GKSB7XG4gICAgICAgIGxpbmUucHVzaChbIM67LCDPhiBdKTtcbiAgICAgIH0sXG4gICAgICBsaW5lRW5kOiBkM19ub29wLFxuICAgICAgYnVmZmVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGJ1ZmZlciA9IGxpbmVzO1xuICAgICAgICBsaW5lcyA9IFtdO1xuICAgICAgICBsaW5lID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICAgIH0sXG4gICAgICByZWpvaW46IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAobGluZXMubGVuZ3RoID4gMSkgbGluZXMucHVzaChsaW5lcy5wb3AoKS5jb25jYXQobGluZXMuc2hpZnQoKSkpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX2NsaXBTb3J0KGEsIGIpIHtcbiAgICByZXR1cm4gKChhID0gYS5wb2ludClbMF0gPCAwID8gYVsxXSAtIM+AIC8gMiAtIM61IDogz4AgLyAyIC0gYVsxXSkgLSAoKGIgPSBiLnBvaW50KVswXSA8IDAgPyBiWzFdIC0gz4AgLyAyIC0gzrUgOiDPgCAvIDIgLSBiWzFdKTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fcG9pbnRJblBvbHlnb24ocG9pbnQsIHBvbHlnb24pIHtcbiAgICB2YXIgbWVyaWRpYW4gPSBwb2ludFswXSwgcGFyYWxsZWwgPSBwb2ludFsxXSwgbWVyaWRpYW5Ob3JtYWwgPSBbIE1hdGguc2luKG1lcmlkaWFuKSwgLU1hdGguY29zKG1lcmlkaWFuKSwgMCBdLCBwb2xhckFuZ2xlID0gMCwgcG9sYXIgPSBmYWxzZSwgc291dGhQb2xlID0gZmFsc2UsIHdpbmRpbmcgPSAwO1xuICAgIGQzX2dlb19hcmVhUmluZ1N1bS5yZXNldCgpO1xuICAgIGZvciAodmFyIGkgPSAwLCBuID0gcG9seWdvbi5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgIHZhciByaW5nID0gcG9seWdvbltpXSwgbSA9IHJpbmcubGVuZ3RoO1xuICAgICAgaWYgKCFtKSBjb250aW51ZTtcbiAgICAgIHZhciBwb2ludDAgPSByaW5nWzBdLCDOuzAgPSBwb2ludDBbMF0sIM+GMCA9IHBvaW50MFsxXSAvIDIgKyDPgCAvIDQsIHNpbs+GMCA9IE1hdGguc2luKM+GMCksIGNvc8+GMCA9IE1hdGguY29zKM+GMCksIGogPSAxO1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgaWYgKGogPT09IG0pIGogPSAwO1xuICAgICAgICBwb2ludCA9IHJpbmdbal07XG4gICAgICAgIHZhciDOuyA9IHBvaW50WzBdLCDPhiA9IHBvaW50WzFdIC8gMiArIM+AIC8gNCwgc2luz4YgPSBNYXRoLnNpbijPhiksIGNvc8+GID0gTWF0aC5jb3Moz4YpLCBkzrsgPSDOuyAtIM67MCwgYW50aW1lcmlkaWFuID0gTWF0aC5hYnMoZM67KSA+IM+ALCBrID0gc2luz4YwICogc2luz4Y7XG4gICAgICAgIGQzX2dlb19hcmVhUmluZ1N1bS5hZGQoTWF0aC5hdGFuMihrICogTWF0aC5zaW4oZM67KSwgY29zz4YwICogY29zz4YgKyBrICogTWF0aC5jb3MoZM67KSkpO1xuICAgICAgICBpZiAoTWF0aC5hYnMoz4YpIDwgzrUpIHNvdXRoUG9sZSA9IHRydWU7XG4gICAgICAgIHBvbGFyQW5nbGUgKz0gYW50aW1lcmlkaWFuID8gZM67ICsgKGTOuyA+PSAwID8gMiA6IC0yKSAqIM+AIDogZM67O1xuICAgICAgICBpZiAoYW50aW1lcmlkaWFuIF4gzrswID49IG1lcmlkaWFuIF4gzrsgPj0gbWVyaWRpYW4pIHtcbiAgICAgICAgICB2YXIgYXJjID0gZDNfZ2VvX2NhcnRlc2lhbkNyb3NzKGQzX2dlb19jYXJ0ZXNpYW4ocG9pbnQwKSwgZDNfZ2VvX2NhcnRlc2lhbihwb2ludCkpO1xuICAgICAgICAgIGQzX2dlb19jYXJ0ZXNpYW5Ob3JtYWxpemUoYXJjKTtcbiAgICAgICAgICB2YXIgaW50ZXJzZWN0aW9uID0gZDNfZ2VvX2NhcnRlc2lhbkNyb3NzKG1lcmlkaWFuTm9ybWFsLCBhcmMpO1xuICAgICAgICAgIGQzX2dlb19jYXJ0ZXNpYW5Ob3JtYWxpemUoaW50ZXJzZWN0aW9uKTtcbiAgICAgICAgICB2YXIgz4ZhcmMgPSAoYW50aW1lcmlkaWFuIF4gZM67ID49IDAgPyAtMSA6IDEpICogZDNfYXNpbihpbnRlcnNlY3Rpb25bMl0pO1xuICAgICAgICAgIGlmIChwYXJhbGxlbCA+IM+GYXJjKSB7XG4gICAgICAgICAgICB3aW5kaW5nICs9IGFudGltZXJpZGlhbiBeIGTOuyA+PSAwID8gMSA6IC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWorKykgYnJlYWs7XG4gICAgICAgIM67MCA9IM67LCBzaW7PhjAgPSBzaW7PhiwgY29zz4YwID0gY29zz4YsIHBvaW50MCA9IHBvaW50O1xuICAgICAgfVxuICAgICAgaWYgKE1hdGguYWJzKHBvbGFyQW5nbGUpID4gzrUpIHBvbGFyID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuICghc291dGhQb2xlICYmICFwb2xhciAmJiBkM19nZW9fYXJlYVJpbmdTdW0gPCAwIHx8IHBvbGFyQW5nbGUgPCAtzrUpIF4gd2luZGluZyAmIDE7XG4gIH1cbiAgdmFyIGQzX2dlb19jbGlwQW50aW1lcmlkaWFuID0gZDNfZ2VvX2NsaXAoZDNfdHJ1ZSwgZDNfZ2VvX2NsaXBBbnRpbWVyaWRpYW5MaW5lLCBkM19nZW9fY2xpcEFudGltZXJpZGlhbkludGVycG9sYXRlLCBkM19nZW9fY2xpcEFudGltZXJpZGlhblBvbHlnb25Db250YWlucyk7XG4gIGZ1bmN0aW9uIGQzX2dlb19jbGlwQW50aW1lcmlkaWFuTGluZShsaXN0ZW5lcikge1xuICAgIHZhciDOuzAgPSBOYU4sIM+GMCA9IE5hTiwgc867MCA9IE5hTiwgY2xlYW47XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxpc3RlbmVyLmxpbmVTdGFydCgpO1xuICAgICAgICBjbGVhbiA9IDE7XG4gICAgICB9LFxuICAgICAgcG9pbnQ6IGZ1bmN0aW9uKM67MSwgz4YxKSB7XG4gICAgICAgIHZhciBzzrsxID0gzrsxID4gMCA/IM+AIDogLc+ALCBkzrsgPSBNYXRoLmFicyjOuzEgLSDOuzApO1xuICAgICAgICBpZiAoTWF0aC5hYnMoZM67IC0gz4ApIDwgzrUpIHtcbiAgICAgICAgICBsaXN0ZW5lci5wb2ludCjOuzAsIM+GMCA9ICjPhjAgKyDPhjEpIC8gMiA+IDAgPyDPgCAvIDIgOiAtz4AgLyAyKTtcbiAgICAgICAgICBsaXN0ZW5lci5wb2ludChzzrswLCDPhjApO1xuICAgICAgICAgIGxpc3RlbmVyLmxpbmVFbmQoKTtcbiAgICAgICAgICBsaXN0ZW5lci5saW5lU3RhcnQoKTtcbiAgICAgICAgICBsaXN0ZW5lci5wb2ludChzzrsxLCDPhjApO1xuICAgICAgICAgIGxpc3RlbmVyLnBvaW50KM67MSwgz4YwKTtcbiAgICAgICAgICBjbGVhbiA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoc867MCAhPT0gc867MSAmJiBkzrsgPj0gz4ApIHtcbiAgICAgICAgICBpZiAoTWF0aC5hYnMozrswIC0gc867MCkgPCDOtSkgzrswIC09IHPOuzAgKiDOtTtcbiAgICAgICAgICBpZiAoTWF0aC5hYnMozrsxIC0gc867MSkgPCDOtSkgzrsxIC09IHPOuzEgKiDOtTtcbiAgICAgICAgICDPhjAgPSBkM19nZW9fY2xpcEFudGltZXJpZGlhbkludGVyc2VjdCjOuzAsIM+GMCwgzrsxLCDPhjEpO1xuICAgICAgICAgIGxpc3RlbmVyLnBvaW50KHPOuzAsIM+GMCk7XG4gICAgICAgICAgbGlzdGVuZXIubGluZUVuZCgpO1xuICAgICAgICAgIGxpc3RlbmVyLmxpbmVTdGFydCgpO1xuICAgICAgICAgIGxpc3RlbmVyLnBvaW50KHPOuzEsIM+GMCk7XG4gICAgICAgICAgY2xlYW4gPSAwO1xuICAgICAgICB9XG4gICAgICAgIGxpc3RlbmVyLnBvaW50KM67MCA9IM67MSwgz4YwID0gz4YxKTtcbiAgICAgICAgc867MCA9IHPOuzE7XG4gICAgICB9LFxuICAgICAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxpc3RlbmVyLmxpbmVFbmQoKTtcbiAgICAgICAgzrswID0gz4YwID0gTmFOO1xuICAgICAgfSxcbiAgICAgIGNsZWFuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIDIgLSBjbGVhbjtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19jbGlwQW50aW1lcmlkaWFuSW50ZXJzZWN0KM67MCwgz4YwLCDOuzEsIM+GMSkge1xuICAgIHZhciBjb3PPhjAsIGNvc8+GMSwgc2luzrswX867MSA9IE1hdGguc2luKM67MCAtIM67MSk7XG4gICAgcmV0dXJuIE1hdGguYWJzKHNpbs67MF/OuzEpID4gzrUgPyBNYXRoLmF0YW4oKE1hdGguc2luKM+GMCkgKiAoY29zz4YxID0gTWF0aC5jb3Moz4YxKSkgKiBNYXRoLnNpbijOuzEpIC0gTWF0aC5zaW4oz4YxKSAqIChjb3PPhjAgPSBNYXRoLmNvcyjPhjApKSAqIE1hdGguc2luKM67MCkpIC8gKGNvc8+GMCAqIGNvc8+GMSAqIHNpbs67MF/OuzEpKSA6ICjPhjAgKyDPhjEpIC8gMjtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fY2xpcEFudGltZXJpZGlhbkludGVycG9sYXRlKGZyb20sIHRvLCBkaXJlY3Rpb24sIGxpc3RlbmVyKSB7XG4gICAgdmFyIM+GO1xuICAgIGlmIChmcm9tID09IG51bGwpIHtcbiAgICAgIM+GID0gZGlyZWN0aW9uICogz4AgLyAyO1xuICAgICAgbGlzdGVuZXIucG9pbnQoLc+ALCDPhik7XG4gICAgICBsaXN0ZW5lci5wb2ludCgwLCDPhik7XG4gICAgICBsaXN0ZW5lci5wb2ludCjPgCwgz4YpO1xuICAgICAgbGlzdGVuZXIucG9pbnQoz4AsIDApO1xuICAgICAgbGlzdGVuZXIucG9pbnQoz4AsIC3Phik7XG4gICAgICBsaXN0ZW5lci5wb2ludCgwLCAtz4YpO1xuICAgICAgbGlzdGVuZXIucG9pbnQoLc+ALCAtz4YpO1xuICAgICAgbGlzdGVuZXIucG9pbnQoLc+ALCAwKTtcbiAgICAgIGxpc3RlbmVyLnBvaW50KC3PgCwgz4YpO1xuICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZnJvbVswXSAtIHRvWzBdKSA+IM61KSB7XG4gICAgICB2YXIgcyA9IChmcm9tWzBdIDwgdG9bMF0gPyAxIDogLTEpICogz4A7XG4gICAgICDPhiA9IGRpcmVjdGlvbiAqIHMgLyAyO1xuICAgICAgbGlzdGVuZXIucG9pbnQoLXMsIM+GKTtcbiAgICAgIGxpc3RlbmVyLnBvaW50KDAsIM+GKTtcbiAgICAgIGxpc3RlbmVyLnBvaW50KHMsIM+GKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdGVuZXIucG9pbnQodG9bMF0sIHRvWzFdKTtcbiAgICB9XG4gIH1cbiAgdmFyIGQzX2dlb19jbGlwQW50aW1lcmlkaWFuUG9pbnQgPSBbIC3PgCwgMCBdO1xuICBmdW5jdGlvbiBkM19nZW9fY2xpcEFudGltZXJpZGlhblBvbHlnb25Db250YWlucyhwb2x5Z29uKSB7XG4gICAgcmV0dXJuIGQzX2dlb19wb2ludEluUG9seWdvbihkM19nZW9fY2xpcEFudGltZXJpZGlhblBvaW50LCBwb2x5Z29uKTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fY2xpcENpcmNsZShyYWRpdXMpIHtcbiAgICB2YXIgY3IgPSBNYXRoLmNvcyhyYWRpdXMpLCBzbWFsbFJhZGl1cyA9IGNyID4gMCwgcG9pbnQgPSBbIHJhZGl1cywgMCBdLCBub3RIZW1pc3BoZXJlID0gTWF0aC5hYnMoY3IpID4gzrUsIGludGVycG9sYXRlID0gZDNfZ2VvX2NpcmNsZUludGVycG9sYXRlKHJhZGl1cywgNiAqIGQzX3JhZGlhbnMpO1xuICAgIHJldHVybiBkM19nZW9fY2xpcCh2aXNpYmxlLCBjbGlwTGluZSwgaW50ZXJwb2xhdGUsIHBvbHlnb25Db250YWlucyk7XG4gICAgZnVuY3Rpb24gdmlzaWJsZSjOuywgz4YpIHtcbiAgICAgIHJldHVybiBNYXRoLmNvcyjOuykgKiBNYXRoLmNvcyjPhikgPiBjcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xpcExpbmUobGlzdGVuZXIpIHtcbiAgICAgIHZhciBwb2ludDAsIGMwLCB2MCwgdjAwLCBjbGVhbjtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdjAwID0gdjAgPSBmYWxzZTtcbiAgICAgICAgICBjbGVhbiA9IDE7XG4gICAgICAgIH0sXG4gICAgICAgIHBvaW50OiBmdW5jdGlvbijOuywgz4YpIHtcbiAgICAgICAgICB2YXIgcG9pbnQxID0gWyDOuywgz4YgXSwgcG9pbnQyLCB2ID0gdmlzaWJsZSjOuywgz4YpLCBjID0gc21hbGxSYWRpdXMgPyB2ID8gMCA6IGNvZGUozrssIM+GKSA6IHYgPyBjb2RlKM67ICsgKM67IDwgMCA/IM+AIDogLc+AKSwgz4YpIDogMDtcbiAgICAgICAgICBpZiAoIXBvaW50MCAmJiAodjAwID0gdjAgPSB2KSkgbGlzdGVuZXIubGluZVN0YXJ0KCk7XG4gICAgICAgICAgaWYgKHYgIT09IHYwKSB7XG4gICAgICAgICAgICBwb2ludDIgPSBpbnRlcnNlY3QocG9pbnQwLCBwb2ludDEpO1xuICAgICAgICAgICAgaWYgKGQzX2dlb19zcGhlcmljYWxFcXVhbChwb2ludDAsIHBvaW50MikgfHwgZDNfZ2VvX3NwaGVyaWNhbEVxdWFsKHBvaW50MSwgcG9pbnQyKSkge1xuICAgICAgICAgICAgICBwb2ludDFbMF0gKz0gzrU7XG4gICAgICAgICAgICAgIHBvaW50MVsxXSArPSDOtTtcbiAgICAgICAgICAgICAgdiA9IHZpc2libGUocG9pbnQxWzBdLCBwb2ludDFbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodiAhPT0gdjApIHtcbiAgICAgICAgICAgIGNsZWFuID0gMDtcbiAgICAgICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpbmVTdGFydCgpO1xuICAgICAgICAgICAgICBwb2ludDIgPSBpbnRlcnNlY3QocG9pbnQxLCBwb2ludDApO1xuICAgICAgICAgICAgICBsaXN0ZW5lci5wb2ludChwb2ludDJbMF0sIHBvaW50MlsxXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwb2ludDIgPSBpbnRlcnNlY3QocG9pbnQwLCBwb2ludDEpO1xuICAgICAgICAgICAgICBsaXN0ZW5lci5wb2ludChwb2ludDJbMF0sIHBvaW50MlsxXSk7XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpbmVFbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvaW50MCA9IHBvaW50MjtcbiAgICAgICAgICB9IGVsc2UgaWYgKG5vdEhlbWlzcGhlcmUgJiYgcG9pbnQwICYmIHNtYWxsUmFkaXVzIF4gdikge1xuICAgICAgICAgICAgdmFyIHQ7XG4gICAgICAgICAgICBpZiAoIShjICYgYzApICYmICh0ID0gaW50ZXJzZWN0KHBvaW50MSwgcG9pbnQwLCB0cnVlKSkpIHtcbiAgICAgICAgICAgICAgY2xlYW4gPSAwO1xuICAgICAgICAgICAgICBpZiAoc21hbGxSYWRpdXMpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5saW5lU3RhcnQoKTtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5wb2ludCh0WzBdWzBdLCB0WzBdWzFdKTtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5wb2ludCh0WzFdWzBdLCB0WzFdWzFdKTtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5saW5lRW5kKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIucG9pbnQodFsxXVswXSwgdFsxXVsxXSk7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIubGluZUVuZCgpO1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpbmVTdGFydCgpO1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyLnBvaW50KHRbMF1bMF0sIHRbMF1bMV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2ICYmICghcG9pbnQwIHx8ICFkM19nZW9fc3BoZXJpY2FsRXF1YWwocG9pbnQwLCBwb2ludDEpKSkge1xuICAgICAgICAgICAgbGlzdGVuZXIucG9pbnQocG9pbnQxWzBdLCBwb2ludDFbMV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwb2ludDAgPSBwb2ludDEsIHYwID0gdiwgYzAgPSBjO1xuICAgICAgICB9LFxuICAgICAgICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAodjApIGxpc3RlbmVyLmxpbmVFbmQoKTtcbiAgICAgICAgICBwb2ludDAgPSBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGNsZWFuIHwgKHYwMCAmJiB2MCkgPDwgMTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW50ZXJzZWN0KGEsIGIsIHR3bykge1xuICAgICAgdmFyIHBhID0gZDNfZ2VvX2NhcnRlc2lhbihhKSwgcGIgPSBkM19nZW9fY2FydGVzaWFuKGIpO1xuICAgICAgdmFyIG4xID0gWyAxLCAwLCAwIF0sIG4yID0gZDNfZ2VvX2NhcnRlc2lhbkNyb3NzKHBhLCBwYiksIG4ybjIgPSBkM19nZW9fY2FydGVzaWFuRG90KG4yLCBuMiksIG4xbjIgPSBuMlswXSwgZGV0ZXJtaW5hbnQgPSBuMm4yIC0gbjFuMiAqIG4xbjI7XG4gICAgICBpZiAoIWRldGVybWluYW50KSByZXR1cm4gIXR3byAmJiBhO1xuICAgICAgdmFyIGMxID0gY3IgKiBuMm4yIC8gZGV0ZXJtaW5hbnQsIGMyID0gLWNyICogbjFuMiAvIGRldGVybWluYW50LCBuMXhuMiA9IGQzX2dlb19jYXJ0ZXNpYW5Dcm9zcyhuMSwgbjIpLCBBID0gZDNfZ2VvX2NhcnRlc2lhblNjYWxlKG4xLCBjMSksIEIgPSBkM19nZW9fY2FydGVzaWFuU2NhbGUobjIsIGMyKTtcbiAgICAgIGQzX2dlb19jYXJ0ZXNpYW5BZGQoQSwgQik7XG4gICAgICB2YXIgdSA9IG4xeG4yLCB3ID0gZDNfZ2VvX2NhcnRlc2lhbkRvdChBLCB1KSwgdXUgPSBkM19nZW9fY2FydGVzaWFuRG90KHUsIHUpLCB0MiA9IHcgKiB3IC0gdXUgKiAoZDNfZ2VvX2NhcnRlc2lhbkRvdChBLCBBKSAtIDEpO1xuICAgICAgaWYgKHQyIDwgMCkgcmV0dXJuO1xuICAgICAgdmFyIHQgPSBNYXRoLnNxcnQodDIpLCBxID0gZDNfZ2VvX2NhcnRlc2lhblNjYWxlKHUsICgtdyAtIHQpIC8gdXUpO1xuICAgICAgZDNfZ2VvX2NhcnRlc2lhbkFkZChxLCBBKTtcbiAgICAgIHEgPSBkM19nZW9fc3BoZXJpY2FsKHEpO1xuICAgICAgaWYgKCF0d28pIHJldHVybiBxO1xuICAgICAgdmFyIM67MCA9IGFbMF0sIM67MSA9IGJbMF0sIM+GMCA9IGFbMV0sIM+GMSA9IGJbMV0sIHo7XG4gICAgICBpZiAozrsxIDwgzrswKSB6ID0gzrswLCDOuzAgPSDOuzEsIM67MSA9IHo7XG4gICAgICB2YXIgzrTOuyA9IM67MSAtIM67MCwgcG9sYXIgPSBNYXRoLmFicyjOtM67IC0gz4ApIDwgzrUsIG1lcmlkaWFuID0gcG9sYXIgfHwgzrTOuyA8IM61O1xuICAgICAgaWYgKCFwb2xhciAmJiDPhjEgPCDPhjApIHogPSDPhjAsIM+GMCA9IM+GMSwgz4YxID0gejtcbiAgICAgIGlmIChtZXJpZGlhbiA/IHBvbGFyID8gz4YwICsgz4YxID4gMCBeIHFbMV0gPCAoTWF0aC5hYnMocVswXSAtIM67MCkgPCDOtSA/IM+GMCA6IM+GMSkgOiDPhjAgPD0gcVsxXSAmJiBxWzFdIDw9IM+GMSA6IM60zrsgPiDPgCBeICjOuzAgPD0gcVswXSAmJiBxWzBdIDw9IM67MSkpIHtcbiAgICAgICAgdmFyIHExID0gZDNfZ2VvX2NhcnRlc2lhblNjYWxlKHUsICgtdyArIHQpIC8gdXUpO1xuICAgICAgICBkM19nZW9fY2FydGVzaWFuQWRkKHExLCBBKTtcbiAgICAgICAgcmV0dXJuIFsgcSwgZDNfZ2VvX3NwaGVyaWNhbChxMSkgXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY29kZSjOuywgz4YpIHtcbiAgICAgIHZhciByID0gc21hbGxSYWRpdXMgPyByYWRpdXMgOiDPgCAtIHJhZGl1cywgY29kZSA9IDA7XG4gICAgICBpZiAozrsgPCAtcikgY29kZSB8PSAxOyBlbHNlIGlmICjOuyA+IHIpIGNvZGUgfD0gMjtcbiAgICAgIGlmICjPhiA8IC1yKSBjb2RlIHw9IDQ7IGVsc2UgaWYgKM+GID4gcikgY29kZSB8PSA4O1xuICAgICAgcmV0dXJuIGNvZGU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBvbHlnb25Db250YWlucyhwb2x5Z29uKSB7XG4gICAgICByZXR1cm4gZDNfZ2VvX3BvaW50SW5Qb2x5Z29uKHBvaW50LCBwb2x5Z29uKTtcbiAgICB9XG4gIH1cbiAgdmFyIGQzX2dlb19jbGlwRXh0ZW50TUFYID0gMWU5O1xuICBkMy5nZW8uY2xpcEV4dGVudCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB4MCwgeTAsIHgxLCB5MSwgc3RyZWFtLCBjbGlwLCBjbGlwRXh0ZW50ID0ge1xuICAgICAgc3RyZWFtOiBmdW5jdGlvbihvdXRwdXQpIHtcbiAgICAgICAgaWYgKHN0cmVhbSkgc3RyZWFtLnZhbGlkID0gZmFsc2U7XG4gICAgICAgIHN0cmVhbSA9IGNsaXAob3V0cHV0KTtcbiAgICAgICAgc3RyZWFtLnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHN0cmVhbTtcbiAgICAgIH0sXG4gICAgICBleHRlbnQ6IGZ1bmN0aW9uKF8pIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gWyBbIHgwLCB5MCBdLCBbIHgxLCB5MSBdIF07XG4gICAgICAgIGNsaXAgPSBkM19nZW9fY2xpcEV4dGVudCh4MCA9ICtfWzBdWzBdLCB5MCA9ICtfWzBdWzFdLCB4MSA9ICtfWzFdWzBdLCB5MSA9ICtfWzFdWzFdKTtcbiAgICAgICAgaWYgKHN0cmVhbSkgc3RyZWFtLnZhbGlkID0gZmFsc2UsIHN0cmVhbSA9IG51bGw7XG4gICAgICAgIHJldHVybiBjbGlwRXh0ZW50O1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGNsaXBFeHRlbnQuZXh0ZW50KFsgWyAwLCAwIF0sIFsgOTYwLCA1MDAgXSBdKTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfZ2VvX2NsaXBFeHRlbnQoeDAsIHkwLCB4MSwgeTEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0ZW5lcl8gPSBsaXN0ZW5lciwgYnVmZmVyTGlzdGVuZXIgPSBkM19nZW9fY2xpcEJ1ZmZlckxpc3RlbmVyKCksIHNlZ21lbnRzLCBwb2x5Z29uLCByaW5nO1xuICAgICAgdmFyIGNsaXAgPSB7XG4gICAgICAgIHBvaW50OiBwb2ludCxcbiAgICAgICAgbGluZVN0YXJ0OiBsaW5lU3RhcnQsXG4gICAgICAgIGxpbmVFbmQ6IGxpbmVFbmQsXG4gICAgICAgIHBvbHlnb25TdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbGlzdGVuZXIgPSBidWZmZXJMaXN0ZW5lcjtcbiAgICAgICAgICBzZWdtZW50cyA9IFtdO1xuICAgICAgICAgIHBvbHlnb24gPSBbXTtcbiAgICAgICAgfSxcbiAgICAgICAgcG9seWdvbkVuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lcl87XG4gICAgICAgICAgaWYgKChzZWdtZW50cyA9IGQzLm1lcmdlKHNlZ21lbnRzKSkubGVuZ3RoKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5wb2x5Z29uU3RhcnQoKTtcbiAgICAgICAgICAgIGQzX2dlb19jbGlwUG9seWdvbihzZWdtZW50cywgY29tcGFyZSwgaW5zaWRlLCBpbnRlcnBvbGF0ZSwgbGlzdGVuZXIpO1xuICAgICAgICAgICAgbGlzdGVuZXIucG9seWdvbkVuZCgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaW5zaWRlUG9seWdvbihbIHgwLCB5MCBdKSkge1xuICAgICAgICAgICAgbGlzdGVuZXIucG9seWdvblN0YXJ0KCksIGxpc3RlbmVyLmxpbmVTdGFydCgpO1xuICAgICAgICAgICAgaW50ZXJwb2xhdGUobnVsbCwgbnVsbCwgMSwgbGlzdGVuZXIpO1xuICAgICAgICAgICAgbGlzdGVuZXIubGluZUVuZCgpLCBsaXN0ZW5lci5wb2x5Z29uRW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlZ21lbnRzID0gcG9seWdvbiA9IHJpbmcgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZnVuY3Rpb24gaW5zaWRlKHBvaW50KSB7XG4gICAgICAgIHZhciBhID0gY29ybmVyKHBvaW50LCAtMSksIGkgPSBpbnNpZGVQb2x5Z29uKFsgYSA9PT0gMCB8fCBhID09PSAzID8geDAgOiB4MSwgYSA+IDEgPyB5MSA6IHkwIF0pO1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGluc2lkZVBvbHlnb24ocCkge1xuICAgICAgICB2YXIgd24gPSAwLCBuID0gcG9seWdvbi5sZW5ndGgsIHkgPSBwWzFdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgICAgIGZvciAodmFyIGogPSAxLCB2ID0gcG9seWdvbltpXSwgbSA9IHYubGVuZ3RoLCBhID0gdlswXSwgYjsgaiA8IG07ICsraikge1xuICAgICAgICAgICAgYiA9IHZbal07XG4gICAgICAgICAgICBpZiAoYVsxXSA8PSB5KSB7XG4gICAgICAgICAgICAgIGlmIChiWzFdID4geSAmJiBpc0xlZnQoYSwgYiwgcCkgPiAwKSArK3duO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKGJbMV0gPD0geSAmJiBpc0xlZnQoYSwgYiwgcCkgPCAwKSAtLXduO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYSA9IGI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3biAhPT0gMDtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGlzTGVmdChhLCBiLCBjKSB7XG4gICAgICAgIHJldHVybiAoYlswXSAtIGFbMF0pICogKGNbMV0gLSBhWzFdKSAtIChjWzBdIC0gYVswXSkgKiAoYlsxXSAtIGFbMV0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gaW50ZXJwb2xhdGUoZnJvbSwgdG8sIGRpcmVjdGlvbiwgbGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIGEgPSAwLCBhMSA9IDA7XG4gICAgICAgIGlmIChmcm9tID09IG51bGwgfHwgKGEgPSBjb3JuZXIoZnJvbSwgZGlyZWN0aW9uKSkgIT09IChhMSA9IGNvcm5lcih0bywgZGlyZWN0aW9uKSkgfHwgY29tcGFyZVBvaW50cyhmcm9tLCB0bykgPCAwIF4gZGlyZWN0aW9uID4gMCkge1xuICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLnBvaW50KGEgPT09IDAgfHwgYSA9PT0gMyA/IHgwIDogeDEsIGEgPiAxID8geTEgOiB5MCk7XG4gICAgICAgICAgfSB3aGlsZSAoKGEgPSAoYSArIGRpcmVjdGlvbiArIDQpICUgNCkgIT09IGExKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaXN0ZW5lci5wb2ludCh0b1swXSwgdG9bMV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiB2aXNpYmxlKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIHgwIDw9IHggJiYgeCA8PSB4MSAmJiB5MCA8PSB5ICYmIHkgPD0geTE7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBwb2ludCh4LCB5KSB7XG4gICAgICAgIGlmICh2aXNpYmxlKHgsIHkpKSBsaXN0ZW5lci5wb2ludCh4LCB5KTtcbiAgICAgIH1cbiAgICAgIHZhciB4X18sIHlfXywgdl9fLCB4XywgeV8sIHZfLCBmaXJzdDtcbiAgICAgIGZ1bmN0aW9uIGxpbmVTdGFydCgpIHtcbiAgICAgICAgY2xpcC5wb2ludCA9IGxpbmVQb2ludDtcbiAgICAgICAgaWYgKHBvbHlnb24pIHBvbHlnb24ucHVzaChyaW5nID0gW10pO1xuICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgIHZfID0gZmFsc2U7XG4gICAgICAgIHhfID0geV8gPSBOYU47XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBsaW5lRW5kKCkge1xuICAgICAgICBpZiAoc2VnbWVudHMpIHtcbiAgICAgICAgICBsaW5lUG9pbnQoeF9fLCB5X18pO1xuICAgICAgICAgIGlmICh2X18gJiYgdl8pIGJ1ZmZlckxpc3RlbmVyLnJlam9pbigpO1xuICAgICAgICAgIHNlZ21lbnRzLnB1c2goYnVmZmVyTGlzdGVuZXIuYnVmZmVyKCkpO1xuICAgICAgICB9XG4gICAgICAgIGNsaXAucG9pbnQgPSBwb2ludDtcbiAgICAgICAgaWYgKHZfKSBsaXN0ZW5lci5saW5lRW5kKCk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBsaW5lUG9pbnQoeCwgeSkge1xuICAgICAgICB4ID0gTWF0aC5tYXgoLWQzX2dlb19jbGlwRXh0ZW50TUFYLCBNYXRoLm1pbihkM19nZW9fY2xpcEV4dGVudE1BWCwgeCkpO1xuICAgICAgICB5ID0gTWF0aC5tYXgoLWQzX2dlb19jbGlwRXh0ZW50TUFYLCBNYXRoLm1pbihkM19nZW9fY2xpcEV4dGVudE1BWCwgeSkpO1xuICAgICAgICB2YXIgdiA9IHZpc2libGUoeCwgeSk7XG4gICAgICAgIGlmIChwb2x5Z29uKSByaW5nLnB1c2goWyB4LCB5IF0pO1xuICAgICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgICB4X18gPSB4LCB5X18gPSB5LCB2X18gPSB2O1xuICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmxpbmVTdGFydCgpO1xuICAgICAgICAgICAgbGlzdGVuZXIucG9pbnQoeCwgeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh2ICYmIHZfKSBsaXN0ZW5lci5wb2ludCh4LCB5KTsgZWxzZSB7XG4gICAgICAgICAgICB2YXIgYSA9IFsgeF8sIHlfIF0sIGIgPSBbIHgsIHkgXTtcbiAgICAgICAgICAgIGlmIChjbGlwTGluZShhLCBiKSkge1xuICAgICAgICAgICAgICBpZiAoIXZfKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIubGluZVN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIucG9pbnQoYVswXSwgYVsxXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGlzdGVuZXIucG9pbnQoYlswXSwgYlsxXSk7XG4gICAgICAgICAgICAgIGlmICghdikgbGlzdGVuZXIubGluZUVuZCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2KSB7XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpbmVTdGFydCgpO1xuICAgICAgICAgICAgICBsaXN0ZW5lci5wb2ludCh4LCB5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeF8gPSB4LCB5XyA9IHksIHZfID0gdjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbGlwO1xuICAgIH07XG4gICAgZnVuY3Rpb24gY29ybmVyKHAsIGRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuIE1hdGguYWJzKHBbMF0gLSB4MCkgPCDOtSA/IGRpcmVjdGlvbiA+IDAgPyAwIDogMyA6IE1hdGguYWJzKHBbMF0gLSB4MSkgPCDOtSA/IGRpcmVjdGlvbiA+IDAgPyAyIDogMSA6IE1hdGguYWJzKHBbMV0gLSB5MCkgPCDOtSA/IGRpcmVjdGlvbiA+IDAgPyAxIDogMCA6IGRpcmVjdGlvbiA+IDAgPyAzIDogMjtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29tcGFyZShhLCBiKSB7XG4gICAgICByZXR1cm4gY29tcGFyZVBvaW50cyhhLnBvaW50LCBiLnBvaW50KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29tcGFyZVBvaW50cyhhLCBiKSB7XG4gICAgICB2YXIgY2EgPSBjb3JuZXIoYSwgMSksIGNiID0gY29ybmVyKGIsIDEpO1xuICAgICAgcmV0dXJuIGNhICE9PSBjYiA/IGNhIC0gY2IgOiBjYSA9PT0gMCA/IGJbMV0gLSBhWzFdIDogY2EgPT09IDEgPyBhWzBdIC0gYlswXSA6IGNhID09PSAyID8gYVsxXSAtIGJbMV0gOiBiWzBdIC0gYVswXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xpcExpbmUoYSwgYikge1xuICAgICAgdmFyIGR4ID0gYlswXSAtIGFbMF0sIGR5ID0gYlsxXSAtIGFbMV0sIHQgPSBbIDAsIDEgXTtcbiAgICAgIGlmIChNYXRoLmFicyhkeCkgPCDOtSAmJiBNYXRoLmFicyhkeSkgPCDOtSkgcmV0dXJuIHgwIDw9IGFbMF0gJiYgYVswXSA8PSB4MSAmJiB5MCA8PSBhWzFdICYmIGFbMV0gPD0geTE7XG4gICAgICBpZiAoZDNfZ2VvX2NsaXBFeHRlbnRUKHgwIC0gYVswXSwgZHgsIHQpICYmIGQzX2dlb19jbGlwRXh0ZW50VChhWzBdIC0geDEsIC1keCwgdCkgJiYgZDNfZ2VvX2NsaXBFeHRlbnRUKHkwIC0gYVsxXSwgZHksIHQpICYmIGQzX2dlb19jbGlwRXh0ZW50VChhWzFdIC0geTEsIC1keSwgdCkpIHtcbiAgICAgICAgaWYgKHRbMV0gPCAxKSB7XG4gICAgICAgICAgYlswXSA9IGFbMF0gKyB0WzFdICogZHg7XG4gICAgICAgICAgYlsxXSA9IGFbMV0gKyB0WzFdICogZHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRbMF0gPiAwKSB7XG4gICAgICAgICAgYVswXSArPSB0WzBdICogZHg7XG4gICAgICAgICAgYVsxXSArPSB0WzBdICogZHk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19jbGlwRXh0ZW50VChudW0sIGRlbm9taW5hdG9yLCB0KSB7XG4gICAgaWYgKE1hdGguYWJzKGRlbm9taW5hdG9yKSA8IM61KSByZXR1cm4gbnVtIDw9IDA7XG4gICAgdmFyIHUgPSBudW0gLyBkZW5vbWluYXRvcjtcbiAgICBpZiAoZGVub21pbmF0b3IgPiAwKSB7XG4gICAgICBpZiAodSA+IHRbMV0pIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICh1ID4gdFswXSkgdFswXSA9IHU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh1IDwgdFswXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKHUgPCB0WzFdKSB0WzFdID0gdTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX2NvbXBvc2UoYSwgYikge1xuICAgIGZ1bmN0aW9uIGNvbXBvc2UoeCwgeSkge1xuICAgICAgcmV0dXJuIHggPSBhKHgsIHkpLCBiKHhbMF0sIHhbMV0pO1xuICAgIH1cbiAgICBpZiAoYS5pbnZlcnQgJiYgYi5pbnZlcnQpIGNvbXBvc2UuaW52ZXJ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICAgICAgcmV0dXJuIHggPSBiLmludmVydCh4LCB5KSwgeCAmJiBhLmludmVydCh4WzBdLCB4WzFdKTtcbiAgICB9O1xuICAgIHJldHVybiBjb21wb3NlO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19jb25pYyhwcm9qZWN0QXQpIHtcbiAgICB2YXIgz4YwID0gMCwgz4YxID0gz4AgLyAzLCBtID0gZDNfZ2VvX3Byb2plY3Rpb25NdXRhdG9yKHByb2plY3RBdCksIHAgPSBtKM+GMCwgz4YxKTtcbiAgICBwLnBhcmFsbGVscyA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIFsgz4YwIC8gz4AgKiAxODAsIM+GMSAvIM+AICogMTgwIF07XG4gICAgICByZXR1cm4gbSjPhjAgPSBfWzBdICogz4AgLyAxODAsIM+GMSA9IF9bMV0gKiDPgCAvIDE4MCk7XG4gICAgfTtcbiAgICByZXR1cm4gcDtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fY29uaWNFcXVhbEFyZWEoz4YwLCDPhjEpIHtcbiAgICB2YXIgc2luz4YwID0gTWF0aC5zaW4oz4YwKSwgbiA9IChzaW7PhjAgKyBNYXRoLnNpbijPhjEpKSAvIDIsIEMgPSAxICsgc2luz4YwICogKDIgKiBuIC0gc2luz4YwKSwgz4EwID0gTWF0aC5zcXJ0KEMpIC8gbjtcbiAgICBmdW5jdGlvbiBmb3J3YXJkKM67LCDPhikge1xuICAgICAgdmFyIM+BID0gTWF0aC5zcXJ0KEMgLSAyICogbiAqIE1hdGguc2luKM+GKSkgLyBuO1xuICAgICAgcmV0dXJuIFsgz4EgKiBNYXRoLnNpbijOuyAqPSBuKSwgz4EwIC0gz4EgKiBNYXRoLmNvcyjOuykgXTtcbiAgICB9XG4gICAgZm9yd2FyZC5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgICB2YXIgz4EwX3kgPSDPgTAgLSB5O1xuICAgICAgcmV0dXJuIFsgTWF0aC5hdGFuMih4LCDPgTBfeSkgLyBuLCBkM19hc2luKChDIC0gKHggKiB4ICsgz4EwX3kgKiDPgTBfeSkgKiBuICogbikgLyAoMiAqIG4pKSBdO1xuICAgIH07XG4gICAgcmV0dXJuIGZvcndhcmQ7XG4gIH1cbiAgKGQzLmdlby5jb25pY0VxdWFsQXJlYSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkM19nZW9fY29uaWMoZDNfZ2VvX2NvbmljRXF1YWxBcmVhKTtcbiAgfSkucmF3ID0gZDNfZ2VvX2NvbmljRXF1YWxBcmVhO1xuICBkMy5nZW8uYWxiZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzLmdlby5jb25pY0VxdWFsQXJlYSgpLnJvdGF0ZShbIDk2LCAwIF0pLmNlbnRlcihbIC0uNiwgMzguNyBdKS5wYXJhbGxlbHMoWyAyOS41LCA0NS41IF0pLnNjYWxlKDEwNzApO1xuICB9O1xuICBkMy5nZW8uYWxiZXJzVXNhID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxvd2VyNDggPSBkMy5nZW8uYWxiZXJzKCk7XG4gICAgdmFyIGFsYXNrYSA9IGQzLmdlby5jb25pY0VxdWFsQXJlYSgpLnJvdGF0ZShbIDE1NCwgMCBdKS5jZW50ZXIoWyAtMiwgNTguNSBdKS5wYXJhbGxlbHMoWyA1NSwgNjUgXSk7XG4gICAgdmFyIGhhd2FpaSA9IGQzLmdlby5jb25pY0VxdWFsQXJlYSgpLnJvdGF0ZShbIDE1NywgMCBdKS5jZW50ZXIoWyAtMywgMTkuOSBdKS5wYXJhbGxlbHMoWyA4LCAxOCBdKTtcbiAgICB2YXIgcG9pbnQsIHBvaW50U3RyZWFtID0ge1xuICAgICAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgcG9pbnQgPSBbIHgsIHkgXTtcbiAgICAgIH1cbiAgICB9LCBsb3dlcjQ4UG9pbnQsIGFsYXNrYVBvaW50LCBoYXdhaWlQb2ludDtcbiAgICBmdW5jdGlvbiBhbGJlcnNVc2EoY29vcmRpbmF0ZXMpIHtcbiAgICAgIHZhciB4ID0gY29vcmRpbmF0ZXNbMF0sIHkgPSBjb29yZGluYXRlc1sxXTtcbiAgICAgIHBvaW50ID0gbnVsbDtcbiAgICAgIChsb3dlcjQ4UG9pbnQoeCwgeSksIHBvaW50KSB8fCAoYWxhc2thUG9pbnQoeCwgeSksIHBvaW50KSB8fCBoYXdhaWlQb2ludCh4LCB5KTtcbiAgICAgIHJldHVybiBwb2ludDtcbiAgICB9XG4gICAgYWxiZXJzVXNhLmludmVydCA9IGZ1bmN0aW9uKGNvb3JkaW5hdGVzKSB7XG4gICAgICB2YXIgayA9IGxvd2VyNDguc2NhbGUoKSwgdCA9IGxvd2VyNDgudHJhbnNsYXRlKCksIHggPSAoY29vcmRpbmF0ZXNbMF0gLSB0WzBdKSAvIGssIHkgPSAoY29vcmRpbmF0ZXNbMV0gLSB0WzFdKSAvIGs7XG4gICAgICByZXR1cm4gKHkgPj0gLjEyICYmIHkgPCAuMjM0ICYmIHggPj0gLS40MjUgJiYgeCA8IC0uMjE0ID8gYWxhc2thIDogeSA+PSAuMTY2ICYmIHkgPCAuMjM0ICYmIHggPj0gLS4yMTQgJiYgeCA8IC0uMTE1ID8gaGF3YWlpIDogbG93ZXI0OCkuaW52ZXJ0KGNvb3JkaW5hdGVzKTtcbiAgICB9O1xuICAgIGFsYmVyc1VzYS5zdHJlYW0gPSBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgIHZhciBsb3dlcjQ4U3RyZWFtID0gbG93ZXI0OC5zdHJlYW0oc3RyZWFtKSwgYWxhc2thU3RyZWFtID0gYWxhc2thLnN0cmVhbShzdHJlYW0pLCBoYXdhaWlTdHJlYW0gPSBoYXdhaWkuc3RyZWFtKHN0cmVhbSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgICAgICAgIGxvd2VyNDhTdHJlYW0ucG9pbnQoeCwgeSk7XG4gICAgICAgICAgYWxhc2thU3RyZWFtLnBvaW50KHgsIHkpO1xuICAgICAgICAgIGhhd2FpaVN0cmVhbS5wb2ludCh4LCB5KTtcbiAgICAgICAgfSxcbiAgICAgICAgc3BoZXJlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsb3dlcjQ4U3RyZWFtLnNwaGVyZSgpO1xuICAgICAgICAgIGFsYXNrYVN0cmVhbS5zcGhlcmUoKTtcbiAgICAgICAgICBoYXdhaWlTdHJlYW0uc3BoZXJlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbG93ZXI0OFN0cmVhbS5saW5lU3RhcnQoKTtcbiAgICAgICAgICBhbGFza2FTdHJlYW0ubGluZVN0YXJ0KCk7XG4gICAgICAgICAgaGF3YWlpU3RyZWFtLmxpbmVTdGFydCgpO1xuICAgICAgICB9LFxuICAgICAgICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsb3dlcjQ4U3RyZWFtLmxpbmVFbmQoKTtcbiAgICAgICAgICBhbGFza2FTdHJlYW0ubGluZUVuZCgpO1xuICAgICAgICAgIGhhd2FpaVN0cmVhbS5saW5lRW5kKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHBvbHlnb25TdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbG93ZXI0OFN0cmVhbS5wb2x5Z29uU3RhcnQoKTtcbiAgICAgICAgICBhbGFza2FTdHJlYW0ucG9seWdvblN0YXJ0KCk7XG4gICAgICAgICAgaGF3YWlpU3RyZWFtLnBvbHlnb25TdGFydCgpO1xuICAgICAgICB9LFxuICAgICAgICBwb2x5Z29uRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsb3dlcjQ4U3RyZWFtLnBvbHlnb25FbmQoKTtcbiAgICAgICAgICBhbGFza2FTdHJlYW0ucG9seWdvbkVuZCgpO1xuICAgICAgICAgIGhhd2FpaVN0cmVhbS5wb2x5Z29uRW5kKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgICBhbGJlcnNVc2EucHJlY2lzaW9uID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gbG93ZXI0OC5wcmVjaXNpb24oKTtcbiAgICAgIGxvd2VyNDgucHJlY2lzaW9uKF8pO1xuICAgICAgYWxhc2thLnByZWNpc2lvbihfKTtcbiAgICAgIGhhd2FpaS5wcmVjaXNpb24oXyk7XG4gICAgICByZXR1cm4gYWxiZXJzVXNhO1xuICAgIH07XG4gICAgYWxiZXJzVXNhLnNjYWxlID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gbG93ZXI0OC5zY2FsZSgpO1xuICAgICAgbG93ZXI0OC5zY2FsZShfKTtcbiAgICAgIGFsYXNrYS5zY2FsZShfICogLjM1KTtcbiAgICAgIGhhd2FpaS5zY2FsZShfKTtcbiAgICAgIHJldHVybiBhbGJlcnNVc2EudHJhbnNsYXRlKGxvd2VyNDgudHJhbnNsYXRlKCkpO1xuICAgIH07XG4gICAgYWxiZXJzVXNhLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGxvd2VyNDgudHJhbnNsYXRlKCk7XG4gICAgICB2YXIgayA9IGxvd2VyNDguc2NhbGUoKSwgeCA9ICtfWzBdLCB5ID0gK19bMV07XG4gICAgICBsb3dlcjQ4UG9pbnQgPSBsb3dlcjQ4LnRyYW5zbGF0ZShfKS5jbGlwRXh0ZW50KFsgWyB4IC0gLjQ1NSAqIGssIHkgLSAuMjM4ICogayBdLCBbIHggKyAuNDU1ICogaywgeSArIC4yMzggKiBrIF0gXSkuc3RyZWFtKHBvaW50U3RyZWFtKS5wb2ludDtcbiAgICAgIGFsYXNrYVBvaW50ID0gYWxhc2thLnRyYW5zbGF0ZShbIHggLSAuMzA3ICogaywgeSArIC4yMDEgKiBrIF0pLmNsaXBFeHRlbnQoWyBbIHggLSAuNDI1ICogayArIM61LCB5ICsgLjEyICogayArIM61IF0sIFsgeCAtIC4yMTQgKiBrIC0gzrUsIHkgKyAuMjM0ICogayAtIM61IF0gXSkuc3RyZWFtKHBvaW50U3RyZWFtKS5wb2ludDtcbiAgICAgIGhhd2FpaVBvaW50ID0gaGF3YWlpLnRyYW5zbGF0ZShbIHggLSAuMjA1ICogaywgeSArIC4yMTIgKiBrIF0pLmNsaXBFeHRlbnQoWyBbIHggLSAuMjE0ICogayArIM61LCB5ICsgLjE2NiAqIGsgKyDOtSBdLCBbIHggLSAuMTE1ICogayAtIM61LCB5ICsgLjIzNCAqIGsgLSDOtSBdIF0pLnN0cmVhbShwb2ludFN0cmVhbSkucG9pbnQ7XG4gICAgICByZXR1cm4gYWxiZXJzVXNhO1xuICAgIH07XG4gICAgcmV0dXJuIGFsYmVyc1VzYS5zY2FsZSgxMDcwKTtcbiAgfTtcbiAgdmFyIGQzX2dlb19wYXRoQXJlYVN1bSwgZDNfZ2VvX3BhdGhBcmVhUG9seWdvbiwgZDNfZ2VvX3BhdGhBcmVhID0ge1xuICAgIHBvaW50OiBkM19ub29wLFxuICAgIGxpbmVTdGFydDogZDNfbm9vcCxcbiAgICBsaW5lRW5kOiBkM19ub29wLFxuICAgIHBvbHlnb25TdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICBkM19nZW9fcGF0aEFyZWFQb2x5Z29uID0gMDtcbiAgICAgIGQzX2dlb19wYXRoQXJlYS5saW5lU3RhcnQgPSBkM19nZW9fcGF0aEFyZWFSaW5nU3RhcnQ7XG4gICAgfSxcbiAgICBwb2x5Z29uRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgIGQzX2dlb19wYXRoQXJlYS5saW5lU3RhcnQgPSBkM19nZW9fcGF0aEFyZWEubGluZUVuZCA9IGQzX2dlb19wYXRoQXJlYS5wb2ludCA9IGQzX25vb3A7XG4gICAgICBkM19nZW9fcGF0aEFyZWFTdW0gKz0gTWF0aC5hYnMoZDNfZ2VvX3BhdGhBcmVhUG9seWdvbiAvIDIpO1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gZDNfZ2VvX3BhdGhBcmVhUmluZ1N0YXJ0KCkge1xuICAgIHZhciB4MDAsIHkwMCwgeDAsIHkwO1xuICAgIGQzX2dlb19wYXRoQXJlYS5wb2ludCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgIGQzX2dlb19wYXRoQXJlYS5wb2ludCA9IG5leHRQb2ludDtcbiAgICAgIHgwMCA9IHgwID0geCwgeTAwID0geTAgPSB5O1xuICAgIH07XG4gICAgZnVuY3Rpb24gbmV4dFBvaW50KHgsIHkpIHtcbiAgICAgIGQzX2dlb19wYXRoQXJlYVBvbHlnb24gKz0geTAgKiB4IC0geDAgKiB5O1xuICAgICAgeDAgPSB4LCB5MCA9IHk7XG4gICAgfVxuICAgIGQzX2dlb19wYXRoQXJlYS5saW5lRW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICBuZXh0UG9pbnQoeDAwLCB5MDApO1xuICAgIH07XG4gIH1cbiAgdmFyIGQzX2dlb19wYXRoQm91bmRzWDAsIGQzX2dlb19wYXRoQm91bmRzWTAsIGQzX2dlb19wYXRoQm91bmRzWDEsIGQzX2dlb19wYXRoQm91bmRzWTE7XG4gIHZhciBkM19nZW9fcGF0aEJvdW5kcyA9IHtcbiAgICBwb2ludDogZDNfZ2VvX3BhdGhCb3VuZHNQb2ludCxcbiAgICBsaW5lU3RhcnQ6IGQzX25vb3AsXG4gICAgbGluZUVuZDogZDNfbm9vcCxcbiAgICBwb2x5Z29uU3RhcnQ6IGQzX25vb3AsXG4gICAgcG9seWdvbkVuZDogZDNfbm9vcFxuICB9O1xuICBmdW5jdGlvbiBkM19nZW9fcGF0aEJvdW5kc1BvaW50KHgsIHkpIHtcbiAgICBpZiAoeCA8IGQzX2dlb19wYXRoQm91bmRzWDApIGQzX2dlb19wYXRoQm91bmRzWDAgPSB4O1xuICAgIGlmICh4ID4gZDNfZ2VvX3BhdGhCb3VuZHNYMSkgZDNfZ2VvX3BhdGhCb3VuZHNYMSA9IHg7XG4gICAgaWYgKHkgPCBkM19nZW9fcGF0aEJvdW5kc1kwKSBkM19nZW9fcGF0aEJvdW5kc1kwID0geTtcbiAgICBpZiAoeSA+IGQzX2dlb19wYXRoQm91bmRzWTEpIGQzX2dlb19wYXRoQm91bmRzWTEgPSB5O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19wYXRoQnVmZmVyKCkge1xuICAgIHZhciBwb2ludENpcmNsZSA9IGQzX2dlb19wYXRoQnVmZmVyQ2lyY2xlKDQuNSksIGJ1ZmZlciA9IFtdO1xuICAgIHZhciBzdHJlYW0gPSB7XG4gICAgICBwb2ludDogcG9pbnQsXG4gICAgICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBzdHJlYW0ucG9pbnQgPSBwb2ludExpbmVTdGFydDtcbiAgICAgIH0sXG4gICAgICBsaW5lRW5kOiBsaW5lRW5kLFxuICAgICAgcG9seWdvblN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgc3RyZWFtLmxpbmVFbmQgPSBsaW5lRW5kUG9seWdvbjtcbiAgICAgIH0sXG4gICAgICBwb2x5Z29uRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgc3RyZWFtLmxpbmVFbmQgPSBsaW5lRW5kO1xuICAgICAgICBzdHJlYW0ucG9pbnQgPSBwb2ludDtcbiAgICAgIH0sXG4gICAgICBwb2ludFJhZGl1czogZnVuY3Rpb24oXykge1xuICAgICAgICBwb2ludENpcmNsZSA9IGQzX2dlb19wYXRoQnVmZmVyQ2lyY2xlKF8pO1xuICAgICAgICByZXR1cm4gc3RyZWFtO1xuICAgICAgfSxcbiAgICAgIHJlc3VsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChidWZmZXIubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGJ1ZmZlci5qb2luKFwiXCIpO1xuICAgICAgICAgIGJ1ZmZlciA9IFtdO1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIHBvaW50KHgsIHkpIHtcbiAgICAgIGJ1ZmZlci5wdXNoKFwiTVwiLCB4LCBcIixcIiwgeSwgcG9pbnRDaXJjbGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwb2ludExpbmVTdGFydCh4LCB5KSB7XG4gICAgICBidWZmZXIucHVzaChcIk1cIiwgeCwgXCIsXCIsIHkpO1xuICAgICAgc3RyZWFtLnBvaW50ID0gcG9pbnRMaW5lO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwb2ludExpbmUoeCwgeSkge1xuICAgICAgYnVmZmVyLnB1c2goXCJMXCIsIHgsIFwiLFwiLCB5KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbGluZUVuZCgpIHtcbiAgICAgIHN0cmVhbS5wb2ludCA9IHBvaW50O1xuICAgIH1cbiAgICBmdW5jdGlvbiBsaW5lRW5kUG9seWdvbigpIHtcbiAgICAgIGJ1ZmZlci5wdXNoKFwiWlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmVhbTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fcGF0aEJ1ZmZlckNpcmNsZShyYWRpdXMpIHtcbiAgICByZXR1cm4gXCJtMCxcIiArIHJhZGl1cyArIFwiYVwiICsgcmFkaXVzICsgXCIsXCIgKyByYWRpdXMgKyBcIiAwIDEsMSAwLFwiICsgLTIgKiByYWRpdXMgKyBcImFcIiArIHJhZGl1cyArIFwiLFwiICsgcmFkaXVzICsgXCIgMCAxLDEgMCxcIiArIDIgKiByYWRpdXMgKyBcInpcIjtcbiAgfVxuICB2YXIgZDNfZ2VvX3BhdGhDZW50cm9pZCA9IHtcbiAgICBwb2ludDogZDNfZ2VvX3BhdGhDZW50cm9pZFBvaW50LFxuICAgIGxpbmVTdGFydDogZDNfZ2VvX3BhdGhDZW50cm9pZExpbmVTdGFydCxcbiAgICBsaW5lRW5kOiBkM19nZW9fcGF0aENlbnRyb2lkTGluZUVuZCxcbiAgICBwb2x5Z29uU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgZDNfZ2VvX3BhdGhDZW50cm9pZC5saW5lU3RhcnQgPSBkM19nZW9fcGF0aENlbnRyb2lkUmluZ1N0YXJ0O1xuICAgIH0sXG4gICAgcG9seWdvbkVuZDogZnVuY3Rpb24oKSB7XG4gICAgICBkM19nZW9fcGF0aENlbnRyb2lkLnBvaW50ID0gZDNfZ2VvX3BhdGhDZW50cm9pZFBvaW50O1xuICAgICAgZDNfZ2VvX3BhdGhDZW50cm9pZC5saW5lU3RhcnQgPSBkM19nZW9fcGF0aENlbnRyb2lkTGluZVN0YXJ0O1xuICAgICAgZDNfZ2VvX3BhdGhDZW50cm9pZC5saW5lRW5kID0gZDNfZ2VvX3BhdGhDZW50cm9pZExpbmVFbmQ7XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiBkM19nZW9fcGF0aENlbnRyb2lkUG9pbnQoeCwgeSkge1xuICAgIGQzX2dlb19jZW50cm9pZFgwICs9IHg7XG4gICAgZDNfZ2VvX2NlbnRyb2lkWTAgKz0geTtcbiAgICArK2QzX2dlb19jZW50cm9pZFowO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19wYXRoQ2VudHJvaWRMaW5lU3RhcnQoKSB7XG4gICAgdmFyIHgwLCB5MDtcbiAgICBkM19nZW9fcGF0aENlbnRyb2lkLnBvaW50ID0gZnVuY3Rpb24oeCwgeSkge1xuICAgICAgZDNfZ2VvX3BhdGhDZW50cm9pZC5wb2ludCA9IG5leHRQb2ludDtcbiAgICAgIGQzX2dlb19wYXRoQ2VudHJvaWRQb2ludCh4MCA9IHgsIHkwID0geSk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBuZXh0UG9pbnQoeCwgeSkge1xuICAgICAgdmFyIGR4ID0geCAtIHgwLCBkeSA9IHkgLSB5MCwgeiA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICBkM19nZW9fY2VudHJvaWRYMSArPSB6ICogKHgwICsgeCkgLyAyO1xuICAgICAgZDNfZ2VvX2NlbnRyb2lkWTEgKz0geiAqICh5MCArIHkpIC8gMjtcbiAgICAgIGQzX2dlb19jZW50cm9pZFoxICs9IHo7XG4gICAgICBkM19nZW9fcGF0aENlbnRyb2lkUG9pbnQoeDAgPSB4LCB5MCA9IHkpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fcGF0aENlbnRyb2lkTGluZUVuZCgpIHtcbiAgICBkM19nZW9fcGF0aENlbnRyb2lkLnBvaW50ID0gZDNfZ2VvX3BhdGhDZW50cm9pZFBvaW50O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19wYXRoQ2VudHJvaWRSaW5nU3RhcnQoKSB7XG4gICAgdmFyIHgwMCwgeTAwLCB4MCwgeTA7XG4gICAgZDNfZ2VvX3BhdGhDZW50cm9pZC5wb2ludCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgIGQzX2dlb19wYXRoQ2VudHJvaWQucG9pbnQgPSBuZXh0UG9pbnQ7XG4gICAgICBkM19nZW9fcGF0aENlbnRyb2lkUG9pbnQoeDAwID0geDAgPSB4LCB5MDAgPSB5MCA9IHkpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gbmV4dFBvaW50KHgsIHkpIHtcbiAgICAgIHZhciBkeCA9IHggLSB4MCwgZHkgPSB5IC0geTAsIHogPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgZDNfZ2VvX2NlbnRyb2lkWDEgKz0geiAqICh4MCArIHgpIC8gMjtcbiAgICAgIGQzX2dlb19jZW50cm9pZFkxICs9IHogKiAoeTAgKyB5KSAvIDI7XG4gICAgICBkM19nZW9fY2VudHJvaWRaMSArPSB6O1xuICAgICAgeiA9IHkwICogeCAtIHgwICogeTtcbiAgICAgIGQzX2dlb19jZW50cm9pZFgyICs9IHogKiAoeDAgKyB4KTtcbiAgICAgIGQzX2dlb19jZW50cm9pZFkyICs9IHogKiAoeTAgKyB5KTtcbiAgICAgIGQzX2dlb19jZW50cm9pZFoyICs9IHogKiAzO1xuICAgICAgZDNfZ2VvX3BhdGhDZW50cm9pZFBvaW50KHgwID0geCwgeTAgPSB5KTtcbiAgICB9XG4gICAgZDNfZ2VvX3BhdGhDZW50cm9pZC5saW5lRW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICBuZXh0UG9pbnQoeDAwLCB5MDApO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX3BhdGhDb250ZXh0KGNvbnRleHQpIHtcbiAgICB2YXIgcG9pbnRSYWRpdXMgPSA0LjU7XG4gICAgdmFyIHN0cmVhbSA9IHtcbiAgICAgIHBvaW50OiBwb2ludCxcbiAgICAgIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHN0cmVhbS5wb2ludCA9IHBvaW50TGluZVN0YXJ0O1xuICAgICAgfSxcbiAgICAgIGxpbmVFbmQ6IGxpbmVFbmQsXG4gICAgICBwb2x5Z29uU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBzdHJlYW0ubGluZUVuZCA9IGxpbmVFbmRQb2x5Z29uO1xuICAgICAgfSxcbiAgICAgIHBvbHlnb25FbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBzdHJlYW0ubGluZUVuZCA9IGxpbmVFbmQ7XG4gICAgICAgIHN0cmVhbS5wb2ludCA9IHBvaW50O1xuICAgICAgfSxcbiAgICAgIHBvaW50UmFkaXVzOiBmdW5jdGlvbihfKSB7XG4gICAgICAgIHBvaW50UmFkaXVzID0gXztcbiAgICAgICAgcmV0dXJuIHN0cmVhbTtcbiAgICAgIH0sXG4gICAgICByZXN1bHQ6IGQzX25vb3BcbiAgICB9O1xuICAgIGZ1bmN0aW9uIHBvaW50KHgsIHkpIHtcbiAgICAgIGNvbnRleHQubW92ZVRvKHgsIHkpO1xuICAgICAgY29udGV4dC5hcmMoeCwgeSwgcG9pbnRSYWRpdXMsIDAsIDIgKiDPgCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBvaW50TGluZVN0YXJ0KHgsIHkpIHtcbiAgICAgIGNvbnRleHQubW92ZVRvKHgsIHkpO1xuICAgICAgc3RyZWFtLnBvaW50ID0gcG9pbnRMaW5lO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwb2ludExpbmUoeCwgeSkge1xuICAgICAgY29udGV4dC5saW5lVG8oeCwgeSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxpbmVFbmQoKSB7XG4gICAgICBzdHJlYW0ucG9pbnQgPSBwb2ludDtcbiAgICB9XG4gICAgZnVuY3Rpb24gbGluZUVuZFBvbHlnb24oKSB7XG4gICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyZWFtO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19yZXNhbXBsZShwcm9qZWN0KSB7XG4gICAgdmFyIM60MiA9IC41LCBjb3NNaW5EaXN0YW5jZSA9IE1hdGguY29zKDMwICogZDNfcmFkaWFucyksIG1heERlcHRoID0gMTY7XG4gICAgZnVuY3Rpb24gcmVzYW1wbGUoc3RyZWFtKSB7XG4gICAgICB2YXIgzrswMCwgz4YwMCwgeDAwLCB5MDAsIGEwMCwgYjAwLCBjMDAsIM67MCwgeDAsIHkwLCBhMCwgYjAsIGMwO1xuICAgICAgdmFyIHJlc2FtcGxlID0ge1xuICAgICAgICBwb2ludDogcG9pbnQsXG4gICAgICAgIGxpbmVTdGFydDogbGluZVN0YXJ0LFxuICAgICAgICBsaW5lRW5kOiBsaW5lRW5kLFxuICAgICAgICBwb2x5Z29uU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHN0cmVhbS5wb2x5Z29uU3RhcnQoKTtcbiAgICAgICAgICByZXNhbXBsZS5saW5lU3RhcnQgPSByaW5nU3RhcnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHBvbHlnb25FbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHN0cmVhbS5wb2x5Z29uRW5kKCk7XG4gICAgICAgICAgcmVzYW1wbGUubGluZVN0YXJ0ID0gbGluZVN0YXJ0O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZnVuY3Rpb24gcG9pbnQoeCwgeSkge1xuICAgICAgICB4ID0gcHJvamVjdCh4LCB5KTtcbiAgICAgICAgc3RyZWFtLnBvaW50KHhbMF0sIHhbMV0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gbGluZVN0YXJ0KCkge1xuICAgICAgICB4MCA9IE5hTjtcbiAgICAgICAgcmVzYW1wbGUucG9pbnQgPSBsaW5lUG9pbnQ7XG4gICAgICAgIHN0cmVhbS5saW5lU3RhcnQoKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGxpbmVQb2ludCjOuywgz4YpIHtcbiAgICAgICAgdmFyIGMgPSBkM19nZW9fY2FydGVzaWFuKFsgzrssIM+GIF0pLCBwID0gcHJvamVjdCjOuywgz4YpO1xuICAgICAgICByZXNhbXBsZUxpbmVUbyh4MCwgeTAsIM67MCwgYTAsIGIwLCBjMCwgeDAgPSBwWzBdLCB5MCA9IHBbMV0sIM67MCA9IM67LCBhMCA9IGNbMF0sIGIwID0gY1sxXSwgYzAgPSBjWzJdLCBtYXhEZXB0aCwgc3RyZWFtKTtcbiAgICAgICAgc3RyZWFtLnBvaW50KHgwLCB5MCk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBsaW5lRW5kKCkge1xuICAgICAgICByZXNhbXBsZS5wb2ludCA9IHBvaW50O1xuICAgICAgICBzdHJlYW0ubGluZUVuZCgpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gcmluZ1N0YXJ0KCkge1xuICAgICAgICBsaW5lU3RhcnQoKTtcbiAgICAgICAgcmVzYW1wbGUucG9pbnQgPSByaW5nUG9pbnQ7XG4gICAgICAgIHJlc2FtcGxlLmxpbmVFbmQgPSByaW5nRW5kO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gcmluZ1BvaW50KM67LCDPhikge1xuICAgICAgICBsaW5lUG9pbnQozrswMCA9IM67LCDPhjAwID0gz4YpLCB4MDAgPSB4MCwgeTAwID0geTAsIGEwMCA9IGEwLCBiMDAgPSBiMCwgYzAwID0gYzA7XG4gICAgICAgIHJlc2FtcGxlLnBvaW50ID0gbGluZVBvaW50O1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gcmluZ0VuZCgpIHtcbiAgICAgICAgcmVzYW1wbGVMaW5lVG8oeDAsIHkwLCDOuzAsIGEwLCBiMCwgYzAsIHgwMCwgeTAwLCDOuzAwLCBhMDAsIGIwMCwgYzAwLCBtYXhEZXB0aCwgc3RyZWFtKTtcbiAgICAgICAgcmVzYW1wbGUubGluZUVuZCA9IGxpbmVFbmQ7XG4gICAgICAgIGxpbmVFbmQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXNhbXBsZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzYW1wbGVMaW5lVG8oeDAsIHkwLCDOuzAsIGEwLCBiMCwgYzAsIHgxLCB5MSwgzrsxLCBhMSwgYjEsIGMxLCBkZXB0aCwgc3RyZWFtKSB7XG4gICAgICB2YXIgZHggPSB4MSAtIHgwLCBkeSA9IHkxIC0geTAsIGQyID0gZHggKiBkeCArIGR5ICogZHk7XG4gICAgICBpZiAoZDIgPiA0ICogzrQyICYmIGRlcHRoLS0pIHtcbiAgICAgICAgdmFyIGEgPSBhMCArIGExLCBiID0gYjAgKyBiMSwgYyA9IGMwICsgYzEsIG0gPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYiArIGMgKiBjKSwgz4YyID0gTWF0aC5hc2luKGMgLz0gbSksIM67MiA9IE1hdGguYWJzKE1hdGguYWJzKGMpIC0gMSkgPCDOtSA/ICjOuzAgKyDOuzEpIC8gMiA6IE1hdGguYXRhbjIoYiwgYSksIHAgPSBwcm9qZWN0KM67Miwgz4YyKSwgeDIgPSBwWzBdLCB5MiA9IHBbMV0sIGR4MiA9IHgyIC0geDAsIGR5MiA9IHkyIC0geTAsIGR6ID0gZHkgKiBkeDIgLSBkeCAqIGR5MjtcbiAgICAgICAgaWYgKGR6ICogZHogLyBkMiA+IM60MiB8fCBNYXRoLmFicygoZHggKiBkeDIgKyBkeSAqIGR5MikgLyBkMiAtIC41KSA+IC4zIHx8IGEwICogYTEgKyBiMCAqIGIxICsgYzAgKiBjMSA8IGNvc01pbkRpc3RhbmNlKSB7XG4gICAgICAgICAgcmVzYW1wbGVMaW5lVG8oeDAsIHkwLCDOuzAsIGEwLCBiMCwgYzAsIHgyLCB5MiwgzrsyLCBhIC89IG0sIGIgLz0gbSwgYywgZGVwdGgsIHN0cmVhbSk7XG4gICAgICAgICAgc3RyZWFtLnBvaW50KHgyLCB5Mik7XG4gICAgICAgICAgcmVzYW1wbGVMaW5lVG8oeDIsIHkyLCDOuzIsIGEsIGIsIGMsIHgxLCB5MSwgzrsxLCBhMSwgYjEsIGMxLCBkZXB0aCwgc3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNhbXBsZS5wcmVjaXNpb24gPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBNYXRoLnNxcnQozrQyKTtcbiAgICAgIG1heERlcHRoID0gKM60MiA9IF8gKiBfKSA+IDAgJiYgMTY7XG4gICAgICByZXR1cm4gcmVzYW1wbGU7XG4gICAgfTtcbiAgICByZXR1cm4gcmVzYW1wbGU7XG4gIH1cbiAgZDMuZ2VvLnRyYW5zZm9ybSA9IGZ1bmN0aW9uKG1ldGhvZHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RyZWFtOiBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgICAgdmFyIHRyYW5zZm9ybSA9IG5ldyBkM19nZW9fdHJhbnNmb3JtKHN0cmVhbSk7XG4gICAgICAgIGZvciAodmFyIGsgaW4gbWV0aG9kcykgdHJhbnNmb3JtW2tdID0gbWV0aG9kc1trXTtcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuICBmdW5jdGlvbiBkM19nZW9fdHJhbnNmb3JtKHN0cmVhbSkge1xuICAgIHRoaXMuc3RyZWFtID0gc3RyZWFtO1xuICB9XG4gIGQzX2dlb190cmFuc2Zvcm0ucHJvdG90eXBlID0ge1xuICAgIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgICB0aGlzLnN0cmVhbS5wb2ludCh4LCB5KTtcbiAgICB9LFxuICAgIHNwaGVyZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnN0cmVhbS5zcGhlcmUoKTtcbiAgICB9LFxuICAgIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnN0cmVhbS5saW5lU3RhcnQoKTtcbiAgICB9LFxuICAgIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5zdHJlYW0ubGluZUVuZCgpO1xuICAgIH0sXG4gICAgcG9seWdvblN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuc3RyZWFtLnBvbHlnb25TdGFydCgpO1xuICAgIH0sXG4gICAgcG9seWdvbkVuZDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnN0cmVhbS5wb2x5Z29uRW5kKCk7XG4gICAgfVxuICB9O1xuICBkMy5nZW8ucGF0aCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwb2ludFJhZGl1cyA9IDQuNSwgcHJvamVjdGlvbiwgY29udGV4dCwgcHJvamVjdFN0cmVhbSwgY29udGV4dFN0cmVhbSwgY2FjaGVTdHJlYW07XG4gICAgZnVuY3Rpb24gcGF0aChvYmplY3QpIHtcbiAgICAgIGlmIChvYmplY3QpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwb2ludFJhZGl1cyA9PT0gXCJmdW5jdGlvblwiKSBjb250ZXh0U3RyZWFtLnBvaW50UmFkaXVzKCtwb2ludFJhZGl1cy5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgICAgaWYgKCFjYWNoZVN0cmVhbSB8fCAhY2FjaGVTdHJlYW0udmFsaWQpIGNhY2hlU3RyZWFtID0gcHJvamVjdFN0cmVhbShjb250ZXh0U3RyZWFtKTtcbiAgICAgICAgZDMuZ2VvLnN0cmVhbShvYmplY3QsIGNhY2hlU3RyZWFtKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZXh0U3RyZWFtLnJlc3VsdCgpO1xuICAgIH1cbiAgICBwYXRoLmFyZWEgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgIGQzX2dlb19wYXRoQXJlYVN1bSA9IDA7XG4gICAgICBkMy5nZW8uc3RyZWFtKG9iamVjdCwgcHJvamVjdFN0cmVhbShkM19nZW9fcGF0aEFyZWEpKTtcbiAgICAgIHJldHVybiBkM19nZW9fcGF0aEFyZWFTdW07XG4gICAgfTtcbiAgICBwYXRoLmNlbnRyb2lkID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICBkM19nZW9fY2VudHJvaWRYMCA9IGQzX2dlb19jZW50cm9pZFkwID0gZDNfZ2VvX2NlbnRyb2lkWjAgPSBkM19nZW9fY2VudHJvaWRYMSA9IGQzX2dlb19jZW50cm9pZFkxID0gZDNfZ2VvX2NlbnRyb2lkWjEgPSBkM19nZW9fY2VudHJvaWRYMiA9IGQzX2dlb19jZW50cm9pZFkyID0gZDNfZ2VvX2NlbnRyb2lkWjIgPSAwO1xuICAgICAgZDMuZ2VvLnN0cmVhbShvYmplY3QsIHByb2plY3RTdHJlYW0oZDNfZ2VvX3BhdGhDZW50cm9pZCkpO1xuICAgICAgcmV0dXJuIGQzX2dlb19jZW50cm9pZFoyID8gWyBkM19nZW9fY2VudHJvaWRYMiAvIGQzX2dlb19jZW50cm9pZFoyLCBkM19nZW9fY2VudHJvaWRZMiAvIGQzX2dlb19jZW50cm9pZFoyIF0gOiBkM19nZW9fY2VudHJvaWRaMSA/IFsgZDNfZ2VvX2NlbnRyb2lkWDEgLyBkM19nZW9fY2VudHJvaWRaMSwgZDNfZ2VvX2NlbnRyb2lkWTEgLyBkM19nZW9fY2VudHJvaWRaMSBdIDogZDNfZ2VvX2NlbnRyb2lkWjAgPyBbIGQzX2dlb19jZW50cm9pZFgwIC8gZDNfZ2VvX2NlbnRyb2lkWjAsIGQzX2dlb19jZW50cm9pZFkwIC8gZDNfZ2VvX2NlbnRyb2lkWjAgXSA6IFsgTmFOLCBOYU4gXTtcbiAgICB9O1xuICAgIHBhdGguYm91bmRzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICBkM19nZW9fcGF0aEJvdW5kc1gxID0gZDNfZ2VvX3BhdGhCb3VuZHNZMSA9IC0oZDNfZ2VvX3BhdGhCb3VuZHNYMCA9IGQzX2dlb19wYXRoQm91bmRzWTAgPSBJbmZpbml0eSk7XG4gICAgICBkMy5nZW8uc3RyZWFtKG9iamVjdCwgcHJvamVjdFN0cmVhbShkM19nZW9fcGF0aEJvdW5kcykpO1xuICAgICAgcmV0dXJuIFsgWyBkM19nZW9fcGF0aEJvdW5kc1gwLCBkM19nZW9fcGF0aEJvdW5kc1kwIF0sIFsgZDNfZ2VvX3BhdGhCb3VuZHNYMSwgZDNfZ2VvX3BhdGhCb3VuZHNZMSBdIF07XG4gICAgfTtcbiAgICBwYXRoLnByb2plY3Rpb24gPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwcm9qZWN0aW9uO1xuICAgICAgcHJvamVjdFN0cmVhbSA9IChwcm9qZWN0aW9uID0gXykgPyBfLnN0cmVhbSB8fCBkM19nZW9fcGF0aFByb2plY3RTdHJlYW0oXykgOiBkM19pZGVudGl0eTtcbiAgICAgIHJldHVybiByZXNldCgpO1xuICAgIH07XG4gICAgcGF0aC5jb250ZXh0ID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gY29udGV4dDtcbiAgICAgIGNvbnRleHRTdHJlYW0gPSAoY29udGV4dCA9IF8pID09IG51bGwgPyBuZXcgZDNfZ2VvX3BhdGhCdWZmZXIoKSA6IG5ldyBkM19nZW9fcGF0aENvbnRleHQoXyk7XG4gICAgICBpZiAodHlwZW9mIHBvaW50UmFkaXVzICE9PSBcImZ1bmN0aW9uXCIpIGNvbnRleHRTdHJlYW0ucG9pbnRSYWRpdXMocG9pbnRSYWRpdXMpO1xuICAgICAgcmV0dXJuIHJlc2V0KCk7XG4gICAgfTtcbiAgICBwYXRoLnBvaW50UmFkaXVzID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gcG9pbnRSYWRpdXM7XG4gICAgICBwb2ludFJhZGl1cyA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogKGNvbnRleHRTdHJlYW0ucG9pbnRSYWRpdXMoK18pLCArXyk7XG4gICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgY2FjaGVTdHJlYW0gPSBudWxsO1xuICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoLnByb2plY3Rpb24oZDMuZ2VvLmFsYmVyc1VzYSgpKS5jb250ZXh0KG51bGwpO1xuICB9O1xuICBmdW5jdGlvbiBkM19nZW9fcGF0aFByb2plY3RTdHJlYW0ocHJvamVjdCkge1xuICAgIHZhciByZXNhbXBsZSA9IGQzX2dlb19yZXNhbXBsZShmdW5jdGlvbih4LCB5KSB7XG4gICAgICByZXR1cm4gcHJvamVjdChbIHggKiBkM19kZWdyZWVzLCB5ICogZDNfZGVncmVlcyBdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICB2YXIgdHJhbnNmb3JtID0gbmV3IGQzX2dlb190cmFuc2Zvcm0oc3RyZWFtID0gcmVzYW1wbGUoc3RyZWFtKSk7XG4gICAgICB0cmFuc2Zvcm0ucG9pbnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgIHN0cmVhbS5wb2ludCh4ICogZDNfcmFkaWFucywgeSAqIGQzX3JhZGlhbnMpO1xuICAgICAgfTtcbiAgICAgIHJldHVybiB0cmFuc2Zvcm07XG4gICAgfTtcbiAgfVxuICBkMy5nZW8ucHJvamVjdGlvbiA9IGQzX2dlb19wcm9qZWN0aW9uO1xuICBkMy5nZW8ucHJvamVjdGlvbk11dGF0b3IgPSBkM19nZW9fcHJvamVjdGlvbk11dGF0b3I7XG4gIGZ1bmN0aW9uIGQzX2dlb19wcm9qZWN0aW9uKHByb2plY3QpIHtcbiAgICByZXR1cm4gZDNfZ2VvX3Byb2plY3Rpb25NdXRhdG9yKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfSkoKTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fcHJvamVjdGlvbk11dGF0b3IocHJvamVjdEF0KSB7XG4gICAgdmFyIHByb2plY3QsIHJvdGF0ZSwgcHJvamVjdFJvdGF0ZSwgcHJvamVjdFJlc2FtcGxlID0gZDNfZ2VvX3Jlc2FtcGxlKGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgIHggPSBwcm9qZWN0KHgsIHkpO1xuICAgICAgcmV0dXJuIFsgeFswXSAqIGsgKyDOtHgsIM60eSAtIHhbMV0gKiBrIF07XG4gICAgfSksIGsgPSAxNTAsIHggPSA0ODAsIHkgPSAyNTAsIM67ID0gMCwgz4YgPSAwLCDOtM67ID0gMCwgzrTPhiA9IDAsIM60zrMgPSAwLCDOtHgsIM60eSwgcHJlY2xpcCA9IGQzX2dlb19jbGlwQW50aW1lcmlkaWFuLCBwb3N0Y2xpcCA9IGQzX2lkZW50aXR5LCBjbGlwQW5nbGUgPSBudWxsLCBjbGlwRXh0ZW50ID0gbnVsbCwgc3RyZWFtO1xuICAgIGZ1bmN0aW9uIHByb2plY3Rpb24ocG9pbnQpIHtcbiAgICAgIHBvaW50ID0gcHJvamVjdFJvdGF0ZShwb2ludFswXSAqIGQzX3JhZGlhbnMsIHBvaW50WzFdICogZDNfcmFkaWFucyk7XG4gICAgICByZXR1cm4gWyBwb2ludFswXSAqIGsgKyDOtHgsIM60eSAtIHBvaW50WzFdICogayBdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbnZlcnQocG9pbnQpIHtcbiAgICAgIHBvaW50ID0gcHJvamVjdFJvdGF0ZS5pbnZlcnQoKHBvaW50WzBdIC0gzrR4KSAvIGssICjOtHkgLSBwb2ludFsxXSkgLyBrKTtcbiAgICAgIHJldHVybiBwb2ludCAmJiBbIHBvaW50WzBdICogZDNfZGVncmVlcywgcG9pbnRbMV0gKiBkM19kZWdyZWVzIF07XG4gICAgfVxuICAgIHByb2plY3Rpb24uc3RyZWFtID0gZnVuY3Rpb24ob3V0cHV0KSB7XG4gICAgICBpZiAoc3RyZWFtKSBzdHJlYW0udmFsaWQgPSBmYWxzZTtcbiAgICAgIHN0cmVhbSA9IGQzX2dlb19wcm9qZWN0aW9uUmFkaWFuc1JvdGF0ZShyb3RhdGUsIHByZWNsaXAocHJvamVjdFJlc2FtcGxlKHBvc3RjbGlwKG91dHB1dCkpKSk7XG4gICAgICBzdHJlYW0udmFsaWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHN0cmVhbTtcbiAgICB9O1xuICAgIHByb2plY3Rpb24uY2xpcEFuZ2xlID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gY2xpcEFuZ2xlO1xuICAgICAgcHJlY2xpcCA9IF8gPT0gbnVsbCA/IChjbGlwQW5nbGUgPSBfLCBkM19nZW9fY2xpcEFudGltZXJpZGlhbikgOiBkM19nZW9fY2xpcENpcmNsZSgoY2xpcEFuZ2xlID0gK18pICogZDNfcmFkaWFucyk7XG4gICAgICByZXR1cm4gaW52YWxpZGF0ZSgpO1xuICAgIH07XG4gICAgcHJvamVjdGlvbi5jbGlwRXh0ZW50ID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gY2xpcEV4dGVudDtcbiAgICAgIGNsaXBFeHRlbnQgPSBfO1xuICAgICAgcG9zdGNsaXAgPSBfID8gZDNfZ2VvX2NsaXBFeHRlbnQoX1swXVswXSwgX1swXVsxXSwgX1sxXVswXSwgX1sxXVsxXSkgOiBkM19pZGVudGl0eTtcbiAgICAgIHJldHVybiBpbnZhbGlkYXRlKCk7XG4gICAgfTtcbiAgICBwcm9qZWN0aW9uLnNjYWxlID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gaztcbiAgICAgIGsgPSArXztcbiAgICAgIHJldHVybiByZXNldCgpO1xuICAgIH07XG4gICAgcHJvamVjdGlvbi50cmFuc2xhdGUgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBbIHgsIHkgXTtcbiAgICAgIHggPSArX1swXTtcbiAgICAgIHkgPSArX1sxXTtcbiAgICAgIHJldHVybiByZXNldCgpO1xuICAgIH07XG4gICAgcHJvamVjdGlvbi5jZW50ZXIgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBbIM67ICogZDNfZGVncmVlcywgz4YgKiBkM19kZWdyZWVzIF07XG4gICAgICDOuyA9IF9bMF0gJSAzNjAgKiBkM19yYWRpYW5zO1xuICAgICAgz4YgPSBfWzFdICUgMzYwICogZDNfcmFkaWFucztcbiAgICAgIHJldHVybiByZXNldCgpO1xuICAgIH07XG4gICAgcHJvamVjdGlvbi5yb3RhdGUgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBbIM60zrsgKiBkM19kZWdyZWVzLCDOtM+GICogZDNfZGVncmVlcywgzrTOsyAqIGQzX2RlZ3JlZXMgXTtcbiAgICAgIM60zrsgPSBfWzBdICUgMzYwICogZDNfcmFkaWFucztcbiAgICAgIM60z4YgPSBfWzFdICUgMzYwICogZDNfcmFkaWFucztcbiAgICAgIM60zrMgPSBfLmxlbmd0aCA+IDIgPyBfWzJdICUgMzYwICogZDNfcmFkaWFucyA6IDA7XG4gICAgICByZXR1cm4gcmVzZXQoKTtcbiAgICB9O1xuICAgIGQzLnJlYmluZChwcm9qZWN0aW9uLCBwcm9qZWN0UmVzYW1wbGUsIFwicHJlY2lzaW9uXCIpO1xuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgcHJvamVjdFJvdGF0ZSA9IGQzX2dlb19jb21wb3NlKHJvdGF0ZSA9IGQzX2dlb19yb3RhdGlvbijOtM67LCDOtM+GLCDOtM6zKSwgcHJvamVjdCk7XG4gICAgICB2YXIgY2VudGVyID0gcHJvamVjdCjOuywgz4YpO1xuICAgICAgzrR4ID0geCAtIGNlbnRlclswXSAqIGs7XG4gICAgICDOtHkgPSB5ICsgY2VudGVyWzFdICogaztcbiAgICAgIHJldHVybiBpbnZhbGlkYXRlKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGludmFsaWRhdGUoKSB7XG4gICAgICBpZiAoc3RyZWFtKSBzdHJlYW0udmFsaWQgPSBmYWxzZSwgc3RyZWFtID0gbnVsbDtcbiAgICAgIHJldHVybiBwcm9qZWN0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBwcm9qZWN0ID0gcHJvamVjdEF0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBwcm9qZWN0aW9uLmludmVydCA9IHByb2plY3QuaW52ZXJ0ICYmIGludmVydDtcbiAgICAgIHJldHVybiByZXNldCgpO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX3Byb2plY3Rpb25SYWRpYW5zUm90YXRlKHJvdGF0ZSwgc3RyZWFtKSB7XG4gICAgdmFyIHRyYW5zZm9ybSA9IG5ldyBkM19nZW9fdHJhbnNmb3JtKHN0cmVhbSk7XG4gICAgdHJhbnNmb3JtLnBvaW50ID0gZnVuY3Rpb24oeCwgeSkge1xuICAgICAgeSA9IHJvdGF0ZSh4ICogZDNfcmFkaWFucywgeSAqIGQzX3JhZGlhbnMpLCB4ID0geVswXTtcbiAgICAgIHN0cmVhbS5wb2ludCh4ID4gz4AgPyB4IC0gMiAqIM+AIDogeCA8IC3PgCA/IHggKyAyICogz4AgOiB4LCB5WzFdKTtcbiAgICB9O1xuICAgIHJldHVybiB0cmFuc2Zvcm07XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX2VxdWlyZWN0YW5ndWxhcijOuywgz4YpIHtcbiAgICByZXR1cm4gWyDOuywgz4YgXTtcbiAgfVxuICAoZDMuZ2VvLmVxdWlyZWN0YW5ndWxhciA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkM19nZW9fcHJvamVjdGlvbihkM19nZW9fZXF1aXJlY3Rhbmd1bGFyKTtcbiAgfSkucmF3ID0gZDNfZ2VvX2VxdWlyZWN0YW5ndWxhci5pbnZlcnQgPSBkM19nZW9fZXF1aXJlY3Rhbmd1bGFyO1xuICBkMy5nZW8ucm90YXRpb24gPSBmdW5jdGlvbihyb3RhdGUpIHtcbiAgICByb3RhdGUgPSBkM19nZW9fcm90YXRpb24ocm90YXRlWzBdICUgMzYwICogZDNfcmFkaWFucywgcm90YXRlWzFdICogZDNfcmFkaWFucywgcm90YXRlLmxlbmd0aCA+IDIgPyByb3RhdGVbMl0gKiBkM19yYWRpYW5zIDogMCk7XG4gICAgZnVuY3Rpb24gZm9yd2FyZChjb29yZGluYXRlcykge1xuICAgICAgY29vcmRpbmF0ZXMgPSByb3RhdGUoY29vcmRpbmF0ZXNbMF0gKiBkM19yYWRpYW5zLCBjb29yZGluYXRlc1sxXSAqIGQzX3JhZGlhbnMpO1xuICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzWzBdICo9IGQzX2RlZ3JlZXMsIGNvb3JkaW5hdGVzWzFdICo9IGQzX2RlZ3JlZXMsIGNvb3JkaW5hdGVzO1xuICAgIH1cbiAgICBmb3J3YXJkLmludmVydCA9IGZ1bmN0aW9uKGNvb3JkaW5hdGVzKSB7XG4gICAgICBjb29yZGluYXRlcyA9IHJvdGF0ZS5pbnZlcnQoY29vcmRpbmF0ZXNbMF0gKiBkM19yYWRpYW5zLCBjb29yZGluYXRlc1sxXSAqIGQzX3JhZGlhbnMpO1xuICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzWzBdICo9IGQzX2RlZ3JlZXMsIGNvb3JkaW5hdGVzWzFdICo9IGQzX2RlZ3JlZXMsIGNvb3JkaW5hdGVzO1xuICAgIH07XG4gICAgcmV0dXJuIGZvcndhcmQ7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX2dlb19yb3RhdGlvbijOtM67LCDOtM+GLCDOtM6zKSB7XG4gICAgcmV0dXJuIM60zrsgPyDOtM+GIHx8IM60zrMgPyBkM19nZW9fY29tcG9zZShkM19nZW9fcm90YXRpb27OuyjOtM67KSwgZDNfZ2VvX3JvdGF0aW9uz4bOsyjOtM+GLCDOtM6zKSkgOiBkM19nZW9fcm90YXRpb27OuyjOtM67KSA6IM60z4YgfHwgzrTOsyA/IGQzX2dlb19yb3RhdGlvbs+GzrMozrTPhiwgzrTOsykgOiBkM19nZW9fZXF1aXJlY3Rhbmd1bGFyO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19mb3J3YXJkUm90YXRpb27OuyjOtM67KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKM67LCDPhikge1xuICAgICAgcmV0dXJuIM67ICs9IM60zrssIFsgzrsgPiDPgCA/IM67IC0gMiAqIM+AIDogzrsgPCAtz4AgPyDOuyArIDIgKiDPgCA6IM67LCDPhiBdO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX3JvdGF0aW9uzrsozrTOuykge1xuICAgIHZhciByb3RhdGlvbiA9IGQzX2dlb19mb3J3YXJkUm90YXRpb27OuyjOtM67KTtcbiAgICByb3RhdGlvbi5pbnZlcnQgPSBkM19nZW9fZm9yd2FyZFJvdGF0aW9uzrsoLc60zrspO1xuICAgIHJldHVybiByb3RhdGlvbjtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fcm90YXRpb27Phs6zKM60z4YsIM60zrMpIHtcbiAgICB2YXIgY29zzrTPhiA9IE1hdGguY29zKM60z4YpLCBzaW7OtM+GID0gTWF0aC5zaW4ozrTPhiksIGNvc860zrMgPSBNYXRoLmNvcyjOtM6zKSwgc2luzrTOsyA9IE1hdGguc2luKM60zrMpO1xuICAgIGZ1bmN0aW9uIHJvdGF0aW9uKM67LCDPhikge1xuICAgICAgdmFyIGNvc8+GID0gTWF0aC5jb3Moz4YpLCB4ID0gTWF0aC5jb3MozrspICogY29zz4YsIHkgPSBNYXRoLnNpbijOuykgKiBjb3PPhiwgeiA9IE1hdGguc2luKM+GKSwgayA9IHogKiBjb3POtM+GICsgeCAqIHNpbs60z4Y7XG4gICAgICByZXR1cm4gWyBNYXRoLmF0YW4yKHkgKiBjb3POtM6zIC0gayAqIHNpbs60zrMsIHggKiBjb3POtM+GIC0geiAqIHNpbs60z4YpLCBkM19hc2luKGsgKiBjb3POtM6zICsgeSAqIHNpbs60zrMpIF07XG4gICAgfVxuICAgIHJvdGF0aW9uLmludmVydCA9IGZ1bmN0aW9uKM67LCDPhikge1xuICAgICAgdmFyIGNvc8+GID0gTWF0aC5jb3Moz4YpLCB4ID0gTWF0aC5jb3MozrspICogY29zz4YsIHkgPSBNYXRoLnNpbijOuykgKiBjb3PPhiwgeiA9IE1hdGguc2luKM+GKSwgayA9IHogKiBjb3POtM6zIC0geSAqIHNpbs60zrM7XG4gICAgICByZXR1cm4gWyBNYXRoLmF0YW4yKHkgKiBjb3POtM6zICsgeiAqIHNpbs60zrMsIHggKiBjb3POtM+GICsgayAqIHNpbs60z4YpLCBkM19hc2luKGsgKiBjb3POtM+GIC0geCAqIHNpbs60z4YpIF07XG4gICAgfTtcbiAgICByZXR1cm4gcm90YXRpb247XG4gIH1cbiAgZDMuZ2VvLmNpcmNsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvcmlnaW4gPSBbIDAsIDAgXSwgYW5nbGUsIHByZWNpc2lvbiA9IDYsIGludGVycG9sYXRlO1xuICAgIGZ1bmN0aW9uIGNpcmNsZSgpIHtcbiAgICAgIHZhciBjZW50ZXIgPSB0eXBlb2Ygb3JpZ2luID09PSBcImZ1bmN0aW9uXCIgPyBvcmlnaW4uYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IG9yaWdpbiwgcm90YXRlID0gZDNfZ2VvX3JvdGF0aW9uKC1jZW50ZXJbMF0gKiBkM19yYWRpYW5zLCAtY2VudGVyWzFdICogZDNfcmFkaWFucywgMCkuaW52ZXJ0LCByaW5nID0gW107XG4gICAgICBpbnRlcnBvbGF0ZShudWxsLCBudWxsLCAxLCB7XG4gICAgICAgIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgICAgcmluZy5wdXNoKHggPSByb3RhdGUoeCwgeSkpO1xuICAgICAgICAgIHhbMF0gKj0gZDNfZGVncmVlcywgeFsxXSAqPSBkM19kZWdyZWVzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwiUG9seWdvblwiLFxuICAgICAgICBjb29yZGluYXRlczogWyByaW5nIF1cbiAgICAgIH07XG4gICAgfVxuICAgIGNpcmNsZS5vcmlnaW4gPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBvcmlnaW47XG4gICAgICBvcmlnaW4gPSB4O1xuICAgICAgcmV0dXJuIGNpcmNsZTtcbiAgICB9O1xuICAgIGNpcmNsZS5hbmdsZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGFuZ2xlO1xuICAgICAgaW50ZXJwb2xhdGUgPSBkM19nZW9fY2lyY2xlSW50ZXJwb2xhdGUoKGFuZ2xlID0gK3gpICogZDNfcmFkaWFucywgcHJlY2lzaW9uICogZDNfcmFkaWFucyk7XG4gICAgICByZXR1cm4gY2lyY2xlO1xuICAgIH07XG4gICAgY2lyY2xlLnByZWNpc2lvbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHByZWNpc2lvbjtcbiAgICAgIGludGVycG9sYXRlID0gZDNfZ2VvX2NpcmNsZUludGVycG9sYXRlKGFuZ2xlICogZDNfcmFkaWFucywgKHByZWNpc2lvbiA9ICtfKSAqIGQzX3JhZGlhbnMpO1xuICAgICAgcmV0dXJuIGNpcmNsZTtcbiAgICB9O1xuICAgIHJldHVybiBjaXJjbGUuYW5nbGUoOTApO1xuICB9O1xuICBmdW5jdGlvbiBkM19nZW9fY2lyY2xlSW50ZXJwb2xhdGUocmFkaXVzLCBwcmVjaXNpb24pIHtcbiAgICB2YXIgY3IgPSBNYXRoLmNvcyhyYWRpdXMpLCBzciA9IE1hdGguc2luKHJhZGl1cyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGZyb20sIHRvLCBkaXJlY3Rpb24sIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgc3RlcCA9IGRpcmVjdGlvbiAqIHByZWNpc2lvbjtcbiAgICAgIGlmIChmcm9tICE9IG51bGwpIHtcbiAgICAgICAgZnJvbSA9IGQzX2dlb19jaXJjbGVBbmdsZShjciwgZnJvbSk7XG4gICAgICAgIHRvID0gZDNfZ2VvX2NpcmNsZUFuZ2xlKGNyLCB0byk7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPiAwID8gZnJvbSA8IHRvIDogZnJvbSA+IHRvKSBmcm9tICs9IGRpcmVjdGlvbiAqIDIgKiDPgDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZyb20gPSByYWRpdXMgKyBkaXJlY3Rpb24gKiAyICogz4A7XG4gICAgICAgIHRvID0gcmFkaXVzIC0gLjUgKiBzdGVwO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgcG9pbnQsIHQgPSBmcm9tOyBkaXJlY3Rpb24gPiAwID8gdCA+IHRvIDogdCA8IHRvOyB0IC09IHN0ZXApIHtcbiAgICAgICAgbGlzdGVuZXIucG9pbnQoKHBvaW50ID0gZDNfZ2VvX3NwaGVyaWNhbChbIGNyLCAtc3IgKiBNYXRoLmNvcyh0KSwgLXNyICogTWF0aC5zaW4odCkgXSkpWzBdLCBwb2ludFsxXSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fY2lyY2xlQW5nbGUoY3IsIHBvaW50KSB7XG4gICAgdmFyIGEgPSBkM19nZW9fY2FydGVzaWFuKHBvaW50KTtcbiAgICBhWzBdIC09IGNyO1xuICAgIGQzX2dlb19jYXJ0ZXNpYW5Ob3JtYWxpemUoYSk7XG4gICAgdmFyIGFuZ2xlID0gZDNfYWNvcygtYVsxXSk7XG4gICAgcmV0dXJuICgoLWFbMl0gPCAwID8gLWFuZ2xlIDogYW5nbGUpICsgMiAqIE1hdGguUEkgLSDOtSkgJSAoMiAqIE1hdGguUEkpO1xuICB9XG4gIGQzLmdlby5kaXN0YW5jZSA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICB2YXIgzpTOuyA9IChiWzBdIC0gYVswXSkgKiBkM19yYWRpYW5zLCDPhjAgPSBhWzFdICogZDNfcmFkaWFucywgz4YxID0gYlsxXSAqIGQzX3JhZGlhbnMsIHNpbs6UzrsgPSBNYXRoLnNpbijOlM67KSwgY29zzpTOuyA9IE1hdGguY29zKM6UzrspLCBzaW7PhjAgPSBNYXRoLnNpbijPhjApLCBjb3PPhjAgPSBNYXRoLmNvcyjPhjApLCBzaW7PhjEgPSBNYXRoLnNpbijPhjEpLCBjb3PPhjEgPSBNYXRoLmNvcyjPhjEpLCB0O1xuICAgIHJldHVybiBNYXRoLmF0YW4yKE1hdGguc3FydCgodCA9IGNvc8+GMSAqIHNpbs6UzrspICogdCArICh0ID0gY29zz4YwICogc2luz4YxIC0gc2luz4YwICogY29zz4YxICogY29zzpTOuykgKiB0KSwgc2luz4YwICogc2luz4YxICsgY29zz4YwICogY29zz4YxICogY29zzpTOuyk7XG4gIH07XG4gIGQzLmdlby5ncmF0aWN1bGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgeDEsIHgwLCBYMSwgWDAsIHkxLCB5MCwgWTEsIFkwLCBkeCA9IDEwLCBkeSA9IGR4LCBEWCA9IDkwLCBEWSA9IDM2MCwgeCwgeSwgWCwgWSwgcHJlY2lzaW9uID0gMi41O1xuICAgIGZ1bmN0aW9uIGdyYXRpY3VsZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwiTXVsdGlMaW5lU3RyaW5nXCIsXG4gICAgICAgIGNvb3JkaW5hdGVzOiBsaW5lcygpXG4gICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBsaW5lcygpIHtcbiAgICAgIHJldHVybiBkMy5yYW5nZShNYXRoLmNlaWwoWDAgLyBEWCkgKiBEWCwgWDEsIERYKS5tYXAoWCkuY29uY2F0KGQzLnJhbmdlKE1hdGguY2VpbChZMCAvIERZKSAqIERZLCBZMSwgRFkpLm1hcChZKSkuY29uY2F0KGQzLnJhbmdlKE1hdGguY2VpbCh4MCAvIGR4KSAqIGR4LCB4MSwgZHgpLmZpbHRlcihmdW5jdGlvbih4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyh4ICUgRFgpID4gzrU7XG4gICAgICB9KS5tYXAoeCkpLmNvbmNhdChkMy5yYW5nZShNYXRoLmNlaWwoeTAgLyBkeSkgKiBkeSwgeTEsIGR5KS5maWx0ZXIoZnVuY3Rpb24oeSkge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMoeSAlIERZKSA+IM61O1xuICAgICAgfSkubWFwKHkpKTtcbiAgICB9XG4gICAgZ3JhdGljdWxlLmxpbmVzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbGluZXMoKS5tYXAoZnVuY3Rpb24oY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiBcIkxpbmVTdHJpbmdcIixcbiAgICAgICAgICBjb29yZGluYXRlczogY29vcmRpbmF0ZXNcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZ3JhdGljdWxlLm91dGxpbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwiUG9seWdvblwiLFxuICAgICAgICBjb29yZGluYXRlczogWyBYKFgwKS5jb25jYXQoWShZMSkuc2xpY2UoMSksIFgoWDEpLnJldmVyc2UoKS5zbGljZSgxKSwgWShZMCkucmV2ZXJzZSgpLnNsaWNlKDEpKSBdXG4gICAgICB9O1xuICAgIH07XG4gICAgZ3JhdGljdWxlLmV4dGVudCA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGdyYXRpY3VsZS5taW5vckV4dGVudCgpO1xuICAgICAgcmV0dXJuIGdyYXRpY3VsZS5tYWpvckV4dGVudChfKS5taW5vckV4dGVudChfKTtcbiAgICB9O1xuICAgIGdyYXRpY3VsZS5tYWpvckV4dGVudCA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIFsgWyBYMCwgWTAgXSwgWyBYMSwgWTEgXSBdO1xuICAgICAgWDAgPSArX1swXVswXSwgWDEgPSArX1sxXVswXTtcbiAgICAgIFkwID0gK19bMF1bMV0sIFkxID0gK19bMV1bMV07XG4gICAgICBpZiAoWDAgPiBYMSkgXyA9IFgwLCBYMCA9IFgxLCBYMSA9IF87XG4gICAgICBpZiAoWTAgPiBZMSkgXyA9IFkwLCBZMCA9IFkxLCBZMSA9IF87XG4gICAgICByZXR1cm4gZ3JhdGljdWxlLnByZWNpc2lvbihwcmVjaXNpb24pO1xuICAgIH07XG4gICAgZ3JhdGljdWxlLm1pbm9yRXh0ZW50ID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gWyBbIHgwLCB5MCBdLCBbIHgxLCB5MSBdIF07XG4gICAgICB4MCA9ICtfWzBdWzBdLCB4MSA9ICtfWzFdWzBdO1xuICAgICAgeTAgPSArX1swXVsxXSwgeTEgPSArX1sxXVsxXTtcbiAgICAgIGlmICh4MCA+IHgxKSBfID0geDAsIHgwID0geDEsIHgxID0gXztcbiAgICAgIGlmICh5MCA+IHkxKSBfID0geTAsIHkwID0geTEsIHkxID0gXztcbiAgICAgIHJldHVybiBncmF0aWN1bGUucHJlY2lzaW9uKHByZWNpc2lvbik7XG4gICAgfTtcbiAgICBncmF0aWN1bGUuc3RlcCA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGdyYXRpY3VsZS5taW5vclN0ZXAoKTtcbiAgICAgIHJldHVybiBncmF0aWN1bGUubWFqb3JTdGVwKF8pLm1pbm9yU3RlcChfKTtcbiAgICB9O1xuICAgIGdyYXRpY3VsZS5tYWpvclN0ZXAgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBbIERYLCBEWSBdO1xuICAgICAgRFggPSArX1swXSwgRFkgPSArX1sxXTtcbiAgICAgIHJldHVybiBncmF0aWN1bGU7XG4gICAgfTtcbiAgICBncmF0aWN1bGUubWlub3JTdGVwID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gWyBkeCwgZHkgXTtcbiAgICAgIGR4ID0gK19bMF0sIGR5ID0gK19bMV07XG4gICAgICByZXR1cm4gZ3JhdGljdWxlO1xuICAgIH07XG4gICAgZ3JhdGljdWxlLnByZWNpc2lvbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHByZWNpc2lvbjtcbiAgICAgIHByZWNpc2lvbiA9ICtfO1xuICAgICAgeCA9IGQzX2dlb19ncmF0aWN1bGVYKHkwLCB5MSwgOTApO1xuICAgICAgeSA9IGQzX2dlb19ncmF0aWN1bGVZKHgwLCB4MSwgcHJlY2lzaW9uKTtcbiAgICAgIFggPSBkM19nZW9fZ3JhdGljdWxlWChZMCwgWTEsIDkwKTtcbiAgICAgIFkgPSBkM19nZW9fZ3JhdGljdWxlWShYMCwgWDEsIHByZWNpc2lvbik7XG4gICAgICByZXR1cm4gZ3JhdGljdWxlO1xuICAgIH07XG4gICAgcmV0dXJuIGdyYXRpY3VsZS5tYWpvckV4dGVudChbIFsgLTE4MCwgLTkwICsgzrUgXSwgWyAxODAsIDkwIC0gzrUgXSBdKS5taW5vckV4dGVudChbIFsgLTE4MCwgLTgwIC0gzrUgXSwgWyAxODAsIDgwICsgzrUgXSBdKTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfZ2VvX2dyYXRpY3VsZVgoeTAsIHkxLCBkeSkge1xuICAgIHZhciB5ID0gZDMucmFuZ2UoeTAsIHkxIC0gzrUsIGR5KS5jb25jYXQoeTEpO1xuICAgIHJldHVybiBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4geS5tYXAoZnVuY3Rpb24oeSkge1xuICAgICAgICByZXR1cm4gWyB4LCB5IF07XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19ncmF0aWN1bGVZKHgwLCB4MSwgZHgpIHtcbiAgICB2YXIgeCA9IGQzLnJhbmdlKHgwLCB4MSAtIM61LCBkeCkuY29uY2F0KHgxKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oeSkge1xuICAgICAgcmV0dXJuIHgubWFwKGZ1bmN0aW9uKHgpIHtcbiAgICAgICAgcmV0dXJuIFsgeCwgeSBdO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBkM19zb3VyY2UoZCkge1xuICAgIHJldHVybiBkLnNvdXJjZTtcbiAgfVxuICBmdW5jdGlvbiBkM190YXJnZXQoZCkge1xuICAgIHJldHVybiBkLnRhcmdldDtcbiAgfVxuICBkMy5nZW8uZ3JlYXRBcmMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc291cmNlID0gZDNfc291cmNlLCBzb3VyY2VfLCB0YXJnZXQgPSBkM190YXJnZXQsIHRhcmdldF87XG4gICAgZnVuY3Rpb24gZ3JlYXRBcmMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcIkxpbmVTdHJpbmdcIixcbiAgICAgICAgY29vcmRpbmF0ZXM6IFsgc291cmNlXyB8fCBzb3VyY2UuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgdGFyZ2V0XyB8fCB0YXJnZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKSBdXG4gICAgICB9O1xuICAgIH1cbiAgICBncmVhdEFyYy5kaXN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGQzLmdlby5kaXN0YW5jZShzb3VyY2VfIHx8IHNvdXJjZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCB0YXJnZXRfIHx8IHRhcmdldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICAgIGdyZWF0QXJjLnNvdXJjZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHNvdXJjZTtcbiAgICAgIHNvdXJjZSA9IF8sIHNvdXJjZV8gPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gbnVsbCA6IF87XG4gICAgICByZXR1cm4gZ3JlYXRBcmM7XG4gICAgfTtcbiAgICBncmVhdEFyYy50YXJnZXQgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0YXJnZXQ7XG4gICAgICB0YXJnZXQgPSBfLCB0YXJnZXRfID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IG51bGwgOiBfO1xuICAgICAgcmV0dXJuIGdyZWF0QXJjO1xuICAgIH07XG4gICAgZ3JlYXRBcmMucHJlY2lzaW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IGdyZWF0QXJjIDogMDtcbiAgICB9O1xuICAgIHJldHVybiBncmVhdEFyYztcbiAgfTtcbiAgZDMuZ2VvLmludGVycG9sYXRlID0gZnVuY3Rpb24oc291cmNlLCB0YXJnZXQpIHtcbiAgICByZXR1cm4gZDNfZ2VvX2ludGVycG9sYXRlKHNvdXJjZVswXSAqIGQzX3JhZGlhbnMsIHNvdXJjZVsxXSAqIGQzX3JhZGlhbnMsIHRhcmdldFswXSAqIGQzX3JhZGlhbnMsIHRhcmdldFsxXSAqIGQzX3JhZGlhbnMpO1xuICB9O1xuICBmdW5jdGlvbiBkM19nZW9faW50ZXJwb2xhdGUoeDAsIHkwLCB4MSwgeTEpIHtcbiAgICB2YXIgY3kwID0gTWF0aC5jb3MoeTApLCBzeTAgPSBNYXRoLnNpbih5MCksIGN5MSA9IE1hdGguY29zKHkxKSwgc3kxID0gTWF0aC5zaW4oeTEpLCBreDAgPSBjeTAgKiBNYXRoLmNvcyh4MCksIGt5MCA9IGN5MCAqIE1hdGguc2luKHgwKSwga3gxID0gY3kxICogTWF0aC5jb3MoeDEpLCBreTEgPSBjeTEgKiBNYXRoLnNpbih4MSksIGQgPSAyICogTWF0aC5hc2luKE1hdGguc3FydChkM19oYXZlcnNpbih5MSAtIHkwKSArIGN5MCAqIGN5MSAqIGQzX2hhdmVyc2luKHgxIC0geDApKSksIGsgPSAxIC8gTWF0aC5zaW4oZCk7XG4gICAgdmFyIGludGVycG9sYXRlID0gZCA/IGZ1bmN0aW9uKHQpIHtcbiAgICAgIHZhciBCID0gTWF0aC5zaW4odCAqPSBkKSAqIGssIEEgPSBNYXRoLnNpbihkIC0gdCkgKiBrLCB4ID0gQSAqIGt4MCArIEIgKiBreDEsIHkgPSBBICoga3kwICsgQiAqIGt5MSwgeiA9IEEgKiBzeTAgKyBCICogc3kxO1xuICAgICAgcmV0dXJuIFsgTWF0aC5hdGFuMih5LCB4KSAqIGQzX2RlZ3JlZXMsIE1hdGguYXRhbjIoeiwgTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpKSAqIGQzX2RlZ3JlZXMgXTtcbiAgICB9IDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gWyB4MCAqIGQzX2RlZ3JlZXMsIHkwICogZDNfZGVncmVlcyBdO1xuICAgIH07XG4gICAgaW50ZXJwb2xhdGUuZGlzdGFuY2UgPSBkO1xuICAgIHJldHVybiBpbnRlcnBvbGF0ZTtcbiAgfVxuICBkMy5nZW8ubGVuZ3RoID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgZDNfZ2VvX2xlbmd0aFN1bSA9IDA7XG4gICAgZDMuZ2VvLnN0cmVhbShvYmplY3QsIGQzX2dlb19sZW5ndGgpO1xuICAgIHJldHVybiBkM19nZW9fbGVuZ3RoU3VtO1xuICB9O1xuICB2YXIgZDNfZ2VvX2xlbmd0aFN1bTtcbiAgdmFyIGQzX2dlb19sZW5ndGggPSB7XG4gICAgc3BoZXJlOiBkM19ub29wLFxuICAgIHBvaW50OiBkM19ub29wLFxuICAgIGxpbmVTdGFydDogZDNfZ2VvX2xlbmd0aExpbmVTdGFydCxcbiAgICBsaW5lRW5kOiBkM19ub29wLFxuICAgIHBvbHlnb25TdGFydDogZDNfbm9vcCxcbiAgICBwb2x5Z29uRW5kOiBkM19ub29wXG4gIH07XG4gIGZ1bmN0aW9uIGQzX2dlb19sZW5ndGhMaW5lU3RhcnQoKSB7XG4gICAgdmFyIM67MCwgc2luz4YwLCBjb3PPhjA7XG4gICAgZDNfZ2VvX2xlbmd0aC5wb2ludCA9IGZ1bmN0aW9uKM67LCDPhikge1xuICAgICAgzrswID0gzrsgKiBkM19yYWRpYW5zLCBzaW7PhjAgPSBNYXRoLnNpbijPhiAqPSBkM19yYWRpYW5zKSwgY29zz4YwID0gTWF0aC5jb3Moz4YpO1xuICAgICAgZDNfZ2VvX2xlbmd0aC5wb2ludCA9IG5leHRQb2ludDtcbiAgICB9O1xuICAgIGQzX2dlb19sZW5ndGgubGluZUVuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgZDNfZ2VvX2xlbmd0aC5wb2ludCA9IGQzX2dlb19sZW5ndGgubGluZUVuZCA9IGQzX25vb3A7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBuZXh0UG9pbnQozrssIM+GKSB7XG4gICAgICB2YXIgc2luz4YgPSBNYXRoLnNpbijPhiAqPSBkM19yYWRpYW5zKSwgY29zz4YgPSBNYXRoLmNvcyjPhiksIHQgPSBNYXRoLmFicygozrsgKj0gZDNfcmFkaWFucykgLSDOuzApLCBjb3POlM67ID0gTWF0aC5jb3ModCk7XG4gICAgICBkM19nZW9fbGVuZ3RoU3VtICs9IE1hdGguYXRhbjIoTWF0aC5zcXJ0KCh0ID0gY29zz4YgKiBNYXRoLnNpbih0KSkgKiB0ICsgKHQgPSBjb3PPhjAgKiBzaW7PhiAtIHNpbs+GMCAqIGNvc8+GICogY29zzpTOuykgKiB0KSwgc2luz4YwICogc2luz4YgKyBjb3PPhjAgKiBjb3PPhiAqIGNvc86UzrspO1xuICAgICAgzrswID0gzrssIHNpbs+GMCA9IHNpbs+GLCBjb3PPhjAgPSBjb3PPhjtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX2F6aW11dGhhbChzY2FsZSwgYW5nbGUpIHtcbiAgICBmdW5jdGlvbiBhemltdXRoYWwozrssIM+GKSB7XG4gICAgICB2YXIgY29zzrsgPSBNYXRoLmNvcyjOuyksIGNvc8+GID0gTWF0aC5jb3Moz4YpLCBrID0gc2NhbGUoY29zzrsgKiBjb3PPhik7XG4gICAgICByZXR1cm4gWyBrICogY29zz4YgKiBNYXRoLnNpbijOuyksIGsgKiBNYXRoLnNpbijPhikgXTtcbiAgICB9XG4gICAgYXppbXV0aGFsLmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgIHZhciDPgSA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KSwgYyA9IGFuZ2xlKM+BKSwgc2luYyA9IE1hdGguc2luKGMpLCBjb3NjID0gTWF0aC5jb3MoYyk7XG4gICAgICByZXR1cm4gWyBNYXRoLmF0YW4yKHggKiBzaW5jLCDPgSAqIGNvc2MpLCBNYXRoLmFzaW4oz4EgJiYgeSAqIHNpbmMgLyDPgSkgXTtcbiAgICB9O1xuICAgIHJldHVybiBhemltdXRoYWw7XG4gIH1cbiAgdmFyIGQzX2dlb19hemltdXRoYWxFcXVhbEFyZWEgPSBkM19nZW9fYXppbXV0aGFsKGZ1bmN0aW9uKGNvc867Y29zz4YpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KDIgLyAoMSArIGNvc867Y29zz4YpKTtcbiAgfSwgZnVuY3Rpb24oz4EpIHtcbiAgICByZXR1cm4gMiAqIE1hdGguYXNpbijPgSAvIDIpO1xuICB9KTtcbiAgKGQzLmdlby5hemltdXRoYWxFcXVhbEFyZWEgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZDNfZ2VvX3Byb2plY3Rpb24oZDNfZ2VvX2F6aW11dGhhbEVxdWFsQXJlYSk7XG4gIH0pLnJhdyA9IGQzX2dlb19hemltdXRoYWxFcXVhbEFyZWE7XG4gIHZhciBkM19nZW9fYXppbXV0aGFsRXF1aWRpc3RhbnQgPSBkM19nZW9fYXppbXV0aGFsKGZ1bmN0aW9uKGNvc867Y29zz4YpIHtcbiAgICB2YXIgYyA9IE1hdGguYWNvcyhjb3POu2Nvc8+GKTtcbiAgICByZXR1cm4gYyAmJiBjIC8gTWF0aC5zaW4oYyk7XG4gIH0sIGQzX2lkZW50aXR5KTtcbiAgKGQzLmdlby5hemltdXRoYWxFcXVpZGlzdGFudCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkM19nZW9fcHJvamVjdGlvbihkM19nZW9fYXppbXV0aGFsRXF1aWRpc3RhbnQpO1xuICB9KS5yYXcgPSBkM19nZW9fYXppbXV0aGFsRXF1aWRpc3RhbnQ7XG4gIGZ1bmN0aW9uIGQzX2dlb19jb25pY0NvbmZvcm1hbCjPhjAsIM+GMSkge1xuICAgIHZhciBjb3PPhjAgPSBNYXRoLmNvcyjPhjApLCB0ID0gZnVuY3Rpb24oz4YpIHtcbiAgICAgIHJldHVybiBNYXRoLnRhbijPgCAvIDQgKyDPhiAvIDIpO1xuICAgIH0sIG4gPSDPhjAgPT09IM+GMSA/IE1hdGguc2luKM+GMCkgOiBNYXRoLmxvZyhjb3PPhjAgLyBNYXRoLmNvcyjPhjEpKSAvIE1hdGgubG9nKHQoz4YxKSAvIHQoz4YwKSksIEYgPSBjb3PPhjAgKiBNYXRoLnBvdyh0KM+GMCksIG4pIC8gbjtcbiAgICBpZiAoIW4pIHJldHVybiBkM19nZW9fbWVyY2F0b3I7XG4gICAgZnVuY3Rpb24gZm9yd2FyZCjOuywgz4YpIHtcbiAgICAgIHZhciDPgSA9IE1hdGguYWJzKE1hdGguYWJzKM+GKSAtIM+AIC8gMikgPCDOtSA/IDAgOiBGIC8gTWF0aC5wb3codCjPhiksIG4pO1xuICAgICAgcmV0dXJuIFsgz4EgKiBNYXRoLnNpbihuICogzrspLCBGIC0gz4EgKiBNYXRoLmNvcyhuICogzrspIF07XG4gICAgfVxuICAgIGZvcndhcmQuaW52ZXJ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICAgICAgdmFyIM+BMF95ID0gRiAtIHksIM+BID0gZDNfc2duKG4pICogTWF0aC5zcXJ0KHggKiB4ICsgz4EwX3kgKiDPgTBfeSk7XG4gICAgICByZXR1cm4gWyBNYXRoLmF0YW4yKHgsIM+BMF95KSAvIG4sIDIgKiBNYXRoLmF0YW4oTWF0aC5wb3coRiAvIM+BLCAxIC8gbikpIC0gz4AgLyAyIF07XG4gICAgfTtcbiAgICByZXR1cm4gZm9yd2FyZDtcbiAgfVxuICAoZDMuZ2VvLmNvbmljQ29uZm9ybWFsID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzX2dlb19jb25pYyhkM19nZW9fY29uaWNDb25mb3JtYWwpO1xuICB9KS5yYXcgPSBkM19nZW9fY29uaWNDb25mb3JtYWw7XG4gIGZ1bmN0aW9uIGQzX2dlb19jb25pY0VxdWlkaXN0YW50KM+GMCwgz4YxKSB7XG4gICAgdmFyIGNvc8+GMCA9IE1hdGguY29zKM+GMCksIG4gPSDPhjAgPT09IM+GMSA/IE1hdGguc2luKM+GMCkgOiAoY29zz4YwIC0gTWF0aC5jb3Moz4YxKSkgLyAoz4YxIC0gz4YwKSwgRyA9IGNvc8+GMCAvIG4gKyDPhjA7XG4gICAgaWYgKE1hdGguYWJzKG4pIDwgzrUpIHJldHVybiBkM19nZW9fZXF1aXJlY3Rhbmd1bGFyO1xuICAgIGZ1bmN0aW9uIGZvcndhcmQozrssIM+GKSB7XG4gICAgICB2YXIgz4EgPSBHIC0gz4Y7XG4gICAgICByZXR1cm4gWyDPgSAqIE1hdGguc2luKG4gKiDOuyksIEcgLSDPgSAqIE1hdGguY29zKG4gKiDOuykgXTtcbiAgICB9XG4gICAgZm9yd2FyZC5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgICB2YXIgz4EwX3kgPSBHIC0geTtcbiAgICAgIHJldHVybiBbIE1hdGguYXRhbjIoeCwgz4EwX3kpIC8gbiwgRyAtIGQzX3NnbihuKSAqIE1hdGguc3FydCh4ICogeCArIM+BMF95ICogz4EwX3kpIF07XG4gICAgfTtcbiAgICByZXR1cm4gZm9yd2FyZDtcbiAgfVxuICAoZDMuZ2VvLmNvbmljRXF1aWRpc3RhbnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZDNfZ2VvX2NvbmljKGQzX2dlb19jb25pY0VxdWlkaXN0YW50KTtcbiAgfSkucmF3ID0gZDNfZ2VvX2NvbmljRXF1aWRpc3RhbnQ7XG4gIHZhciBkM19nZW9fZ25vbW9uaWMgPSBkM19nZW9fYXppbXV0aGFsKGZ1bmN0aW9uKGNvc867Y29zz4YpIHtcbiAgICByZXR1cm4gMSAvIGNvc867Y29zz4Y7XG4gIH0sIE1hdGguYXRhbik7XG4gIChkMy5nZW8uZ25vbW9uaWMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZDNfZ2VvX3Byb2plY3Rpb24oZDNfZ2VvX2dub21vbmljKTtcbiAgfSkucmF3ID0gZDNfZ2VvX2dub21vbmljO1xuICBmdW5jdGlvbiBkM19nZW9fbWVyY2F0b3IozrssIM+GKSB7XG4gICAgcmV0dXJuIFsgzrssIE1hdGgubG9nKE1hdGgudGFuKM+AIC8gNCArIM+GIC8gMikpIF07XG4gIH1cbiAgZDNfZ2VvX21lcmNhdG9yLmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICByZXR1cm4gWyB4LCAyICogTWF0aC5hdGFuKE1hdGguZXhwKHkpKSAtIM+AIC8gMiBdO1xuICB9O1xuICBmdW5jdGlvbiBkM19nZW9fbWVyY2F0b3JQcm9qZWN0aW9uKHByb2plY3QpIHtcbiAgICB2YXIgbSA9IGQzX2dlb19wcm9qZWN0aW9uKHByb2plY3QpLCBzY2FsZSA9IG0uc2NhbGUsIHRyYW5zbGF0ZSA9IG0udHJhbnNsYXRlLCBjbGlwRXh0ZW50ID0gbS5jbGlwRXh0ZW50LCBjbGlwQXV0bztcbiAgICBtLnNjYWxlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdiA9IHNjYWxlLmFwcGx5KG0sIGFyZ3VtZW50cyk7XG4gICAgICByZXR1cm4gdiA9PT0gbSA/IGNsaXBBdXRvID8gbS5jbGlwRXh0ZW50KG51bGwpIDogbSA6IHY7XG4gICAgfTtcbiAgICBtLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHYgPSB0cmFuc2xhdGUuYXBwbHkobSwgYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiB2ID09PSBtID8gY2xpcEF1dG8gPyBtLmNsaXBFeHRlbnQobnVsbCkgOiBtIDogdjtcbiAgICB9O1xuICAgIG0uY2xpcEV4dGVudCA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHZhciB2ID0gY2xpcEV4dGVudC5hcHBseShtLCBhcmd1bWVudHMpO1xuICAgICAgaWYgKHYgPT09IG0pIHtcbiAgICAgICAgaWYgKGNsaXBBdXRvID0gXyA9PSBudWxsKSB7XG4gICAgICAgICAgdmFyIGsgPSDPgCAqIHNjYWxlKCksIHQgPSB0cmFuc2xhdGUoKTtcbiAgICAgICAgICBjbGlwRXh0ZW50KFsgWyB0WzBdIC0gaywgdFsxXSAtIGsgXSwgWyB0WzBdICsgaywgdFsxXSArIGsgXSBdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjbGlwQXV0bykge1xuICAgICAgICB2ID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2O1xuICAgIH07XG4gICAgcmV0dXJuIG0uY2xpcEV4dGVudChudWxsKTtcbiAgfVxuICAoZDMuZ2VvLm1lcmNhdG9yID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzX2dlb19tZXJjYXRvclByb2plY3Rpb24oZDNfZ2VvX21lcmNhdG9yKTtcbiAgfSkucmF3ID0gZDNfZ2VvX21lcmNhdG9yO1xuICB2YXIgZDNfZ2VvX29ydGhvZ3JhcGhpYyA9IGQzX2dlb19hemltdXRoYWwoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0sIE1hdGguYXNpbik7XG4gIChkMy5nZW8ub3J0aG9ncmFwaGljID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzX2dlb19wcm9qZWN0aW9uKGQzX2dlb19vcnRob2dyYXBoaWMpO1xuICB9KS5yYXcgPSBkM19nZW9fb3J0aG9ncmFwaGljO1xuICB2YXIgZDNfZ2VvX3N0ZXJlb2dyYXBoaWMgPSBkM19nZW9fYXppbXV0aGFsKGZ1bmN0aW9uKGNvc867Y29zz4YpIHtcbiAgICByZXR1cm4gMSAvICgxICsgY29zzrtjb3PPhik7XG4gIH0sIGZ1bmN0aW9uKM+BKSB7XG4gICAgcmV0dXJuIDIgKiBNYXRoLmF0YW4oz4EpO1xuICB9KTtcbiAgKGQzLmdlby5zdGVyZW9ncmFwaGljID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzX2dlb19wcm9qZWN0aW9uKGQzX2dlb19zdGVyZW9ncmFwaGljKTtcbiAgfSkucmF3ID0gZDNfZ2VvX3N0ZXJlb2dyYXBoaWM7XG4gIGZ1bmN0aW9uIGQzX2dlb190cmFuc3ZlcnNlTWVyY2F0b3IozrssIM+GKSB7XG4gICAgdmFyIEIgPSBNYXRoLmNvcyjPhikgKiBNYXRoLnNpbijOuyk7XG4gICAgcmV0dXJuIFsgTWF0aC5sb2coKDEgKyBCKSAvICgxIC0gQikpIC8gMiwgTWF0aC5hdGFuMihNYXRoLnRhbijPhiksIE1hdGguY29zKM67KSkgXTtcbiAgfVxuICBkM19nZW9fdHJhbnN2ZXJzZU1lcmNhdG9yLmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICByZXR1cm4gWyBNYXRoLmF0YW4yKGQzX3NpbmgoeCksIE1hdGguY29zKHkpKSwgZDNfYXNpbihNYXRoLnNpbih5KSAvIGQzX2Nvc2goeCkpIF07XG4gIH07XG4gIChkMy5nZW8udHJhbnN2ZXJzZU1lcmNhdG9yID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzX2dlb19tZXJjYXRvclByb2plY3Rpb24oZDNfZ2VvX3RyYW5zdmVyc2VNZXJjYXRvcik7XG4gIH0pLnJhdyA9IGQzX2dlb190cmFuc3ZlcnNlTWVyY2F0b3I7XG4gIGQzLmdlb20gPSB7fTtcbiAgZDMuc3ZnID0ge307XG4gIGZ1bmN0aW9uIGQzX3N2Z19saW5lKHByb2plY3Rpb24pIHtcbiAgICB2YXIgeCA9IGQzX3N2Z19saW5lWCwgeSA9IGQzX3N2Z19saW5lWSwgZGVmaW5lZCA9IGQzX3RydWUsIGludGVycG9sYXRlID0gZDNfc3ZnX2xpbmVMaW5lYXIsIGludGVycG9sYXRlS2V5ID0gaW50ZXJwb2xhdGUua2V5LCB0ZW5zaW9uID0gLjc7XG4gICAgZnVuY3Rpb24gbGluZShkYXRhKSB7XG4gICAgICB2YXIgc2VnbWVudHMgPSBbXSwgcG9pbnRzID0gW10sIGkgPSAtMSwgbiA9IGRhdGEubGVuZ3RoLCBkLCBmeCA9IGQzX2Z1bmN0b3IoeCksIGZ5ID0gZDNfZnVuY3Rvcih5KTtcbiAgICAgIGZ1bmN0aW9uIHNlZ21lbnQoKSB7XG4gICAgICAgIHNlZ21lbnRzLnB1c2goXCJNXCIsIGludGVycG9sYXRlKHByb2plY3Rpb24ocG9pbnRzKSwgdGVuc2lvbikpO1xuICAgICAgfVxuICAgICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgICAgaWYgKGRlZmluZWQuY2FsbCh0aGlzLCBkID0gZGF0YVtpXSwgaSkpIHtcbiAgICAgICAgICBwb2ludHMucHVzaChbICtmeC5jYWxsKHRoaXMsIGQsIGkpLCArZnkuY2FsbCh0aGlzLCBkLCBpKSBdKTtcbiAgICAgICAgfSBlbHNlIGlmIChwb2ludHMubGVuZ3RoKSB7XG4gICAgICAgICAgc2VnbWVudCgpO1xuICAgICAgICAgIHBvaW50cyA9IFtdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocG9pbnRzLmxlbmd0aCkgc2VnbWVudCgpO1xuICAgICAgcmV0dXJuIHNlZ21lbnRzLmxlbmd0aCA/IHNlZ21lbnRzLmpvaW4oXCJcIikgOiBudWxsO1xuICAgIH1cbiAgICBsaW5lLnggPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB4O1xuICAgICAgeCA9IF87XG4gICAgICByZXR1cm4gbGluZTtcbiAgICB9O1xuICAgIGxpbmUueSA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHk7XG4gICAgICB5ID0gXztcbiAgICAgIHJldHVybiBsaW5lO1xuICAgIH07XG4gICAgbGluZS5kZWZpbmVkID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gZGVmaW5lZDtcbiAgICAgIGRlZmluZWQgPSBfO1xuICAgICAgcmV0dXJuIGxpbmU7XG4gICAgfTtcbiAgICBsaW5lLmludGVycG9sYXRlID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gaW50ZXJwb2xhdGVLZXk7XG4gICAgICBpZiAodHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIikgaW50ZXJwb2xhdGVLZXkgPSBpbnRlcnBvbGF0ZSA9IF87IGVsc2UgaW50ZXJwb2xhdGVLZXkgPSAoaW50ZXJwb2xhdGUgPSBkM19zdmdfbGluZUludGVycG9sYXRvcnMuZ2V0KF8pIHx8IGQzX3N2Z19saW5lTGluZWFyKS5rZXk7XG4gICAgICByZXR1cm4gbGluZTtcbiAgICB9O1xuICAgIGxpbmUudGVuc2lvbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRlbnNpb247XG4gICAgICB0ZW5zaW9uID0gXztcbiAgICAgIHJldHVybiBsaW5lO1xuICAgIH07XG4gICAgcmV0dXJuIGxpbmU7XG4gIH1cbiAgZDMuc3ZnLmxpbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZDNfc3ZnX2xpbmUoZDNfaWRlbnRpdHkpO1xuICB9O1xuICBmdW5jdGlvbiBkM19zdmdfbGluZVgoZCkge1xuICAgIHJldHVybiBkWzBdO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3N2Z19saW5lWShkKSB7XG4gICAgcmV0dXJuIGRbMV07XG4gIH1cbiAgdmFyIGQzX3N2Z19saW5lSW50ZXJwb2xhdG9ycyA9IGQzLm1hcCh7XG4gICAgbGluZWFyOiBkM19zdmdfbGluZUxpbmVhcixcbiAgICBcImxpbmVhci1jbG9zZWRcIjogZDNfc3ZnX2xpbmVMaW5lYXJDbG9zZWQsXG4gICAgc3RlcDogZDNfc3ZnX2xpbmVTdGVwLFxuICAgIFwic3RlcC1iZWZvcmVcIjogZDNfc3ZnX2xpbmVTdGVwQmVmb3JlLFxuICAgIFwic3RlcC1hZnRlclwiOiBkM19zdmdfbGluZVN0ZXBBZnRlcixcbiAgICBiYXNpczogZDNfc3ZnX2xpbmVCYXNpcyxcbiAgICBcImJhc2lzLW9wZW5cIjogZDNfc3ZnX2xpbmVCYXNpc09wZW4sXG4gICAgXCJiYXNpcy1jbG9zZWRcIjogZDNfc3ZnX2xpbmVCYXNpc0Nsb3NlZCxcbiAgICBidW5kbGU6IGQzX3N2Z19saW5lQnVuZGxlLFxuICAgIGNhcmRpbmFsOiBkM19zdmdfbGluZUNhcmRpbmFsLFxuICAgIFwiY2FyZGluYWwtb3BlblwiOiBkM19zdmdfbGluZUNhcmRpbmFsT3BlbixcbiAgICBcImNhcmRpbmFsLWNsb3NlZFwiOiBkM19zdmdfbGluZUNhcmRpbmFsQ2xvc2VkLFxuICAgIG1vbm90b25lOiBkM19zdmdfbGluZU1vbm90b25lXG4gIH0pO1xuICBkM19zdmdfbGluZUludGVycG9sYXRvcnMuZm9yRWFjaChmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgdmFsdWUua2V5ID0ga2V5O1xuICAgIHZhbHVlLmNsb3NlZCA9IC8tY2xvc2VkJC8udGVzdChrZXkpO1xuICB9KTtcbiAgZnVuY3Rpb24gZDNfc3ZnX2xpbmVMaW5lYXIocG9pbnRzKSB7XG4gICAgcmV0dXJuIHBvaW50cy5qb2luKFwiTFwiKTtcbiAgfVxuICBmdW5jdGlvbiBkM19zdmdfbGluZUxpbmVhckNsb3NlZChwb2ludHMpIHtcbiAgICByZXR1cm4gZDNfc3ZnX2xpbmVMaW5lYXIocG9pbnRzKSArIFwiWlwiO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3N2Z19saW5lU3RlcChwb2ludHMpIHtcbiAgICB2YXIgaSA9IDAsIG4gPSBwb2ludHMubGVuZ3RoLCBwID0gcG9pbnRzWzBdLCBwYXRoID0gWyBwWzBdLCBcIixcIiwgcFsxXSBdO1xuICAgIHdoaWxlICgrK2kgPCBuKSBwYXRoLnB1c2goXCJIXCIsIChwWzBdICsgKHAgPSBwb2ludHNbaV0pWzBdKSAvIDIsIFwiVlwiLCBwWzFdKTtcbiAgICBpZiAobiA+IDEpIHBhdGgucHVzaChcIkhcIiwgcFswXSk7XG4gICAgcmV0dXJuIHBhdGguam9pbihcIlwiKTtcbiAgfVxuICBmdW5jdGlvbiBkM19zdmdfbGluZVN0ZXBCZWZvcmUocG9pbnRzKSB7XG4gICAgdmFyIGkgPSAwLCBuID0gcG9pbnRzLmxlbmd0aCwgcCA9IHBvaW50c1swXSwgcGF0aCA9IFsgcFswXSwgXCIsXCIsIHBbMV0gXTtcbiAgICB3aGlsZSAoKytpIDwgbikgcGF0aC5wdXNoKFwiVlwiLCAocCA9IHBvaW50c1tpXSlbMV0sIFwiSFwiLCBwWzBdKTtcbiAgICByZXR1cm4gcGF0aC5qb2luKFwiXCIpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3N2Z19saW5lU3RlcEFmdGVyKHBvaW50cykge1xuICAgIHZhciBpID0gMCwgbiA9IHBvaW50cy5sZW5ndGgsIHAgPSBwb2ludHNbMF0sIHBhdGggPSBbIHBbMF0sIFwiLFwiLCBwWzFdIF07XG4gICAgd2hpbGUgKCsraSA8IG4pIHBhdGgucHVzaChcIkhcIiwgKHAgPSBwb2ludHNbaV0pWzBdLCBcIlZcIiwgcFsxXSk7XG4gICAgcmV0dXJuIHBhdGguam9pbihcIlwiKTtcbiAgfVxuICBmdW5jdGlvbiBkM19zdmdfbGluZUNhcmRpbmFsT3Blbihwb2ludHMsIHRlbnNpb24pIHtcbiAgICByZXR1cm4gcG9pbnRzLmxlbmd0aCA8IDQgPyBkM19zdmdfbGluZUxpbmVhcihwb2ludHMpIDogcG9pbnRzWzFdICsgZDNfc3ZnX2xpbmVIZXJtaXRlKHBvaW50cy5zbGljZSgxLCBwb2ludHMubGVuZ3RoIC0gMSksIGQzX3N2Z19saW5lQ2FyZGluYWxUYW5nZW50cyhwb2ludHMsIHRlbnNpb24pKTtcbiAgfVxuICBmdW5jdGlvbiBkM19zdmdfbGluZUNhcmRpbmFsQ2xvc2VkKHBvaW50cywgdGVuc2lvbikge1xuICAgIHJldHVybiBwb2ludHMubGVuZ3RoIDwgMyA/IGQzX3N2Z19saW5lTGluZWFyKHBvaW50cykgOiBwb2ludHNbMF0gKyBkM19zdmdfbGluZUhlcm1pdGUoKHBvaW50cy5wdXNoKHBvaW50c1swXSksIFxuICAgIHBvaW50cyksIGQzX3N2Z19saW5lQ2FyZGluYWxUYW5nZW50cyhbIHBvaW50c1twb2ludHMubGVuZ3RoIC0gMl0gXS5jb25jYXQocG9pbnRzLCBbIHBvaW50c1sxXSBdKSwgdGVuc2lvbikpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3N2Z19saW5lQ2FyZGluYWwocG9pbnRzLCB0ZW5zaW9uKSB7XG4gICAgcmV0dXJuIHBvaW50cy5sZW5ndGggPCAzID8gZDNfc3ZnX2xpbmVMaW5lYXIocG9pbnRzKSA6IHBvaW50c1swXSArIGQzX3N2Z19saW5lSGVybWl0ZShwb2ludHMsIGQzX3N2Z19saW5lQ2FyZGluYWxUYW5nZW50cyhwb2ludHMsIHRlbnNpb24pKTtcbiAgfVxuICBmdW5jdGlvbiBkM19zdmdfbGluZUhlcm1pdGUocG9pbnRzLCB0YW5nZW50cykge1xuICAgIGlmICh0YW5nZW50cy5sZW5ndGggPCAxIHx8IHBvaW50cy5sZW5ndGggIT0gdGFuZ2VudHMubGVuZ3RoICYmIHBvaW50cy5sZW5ndGggIT0gdGFuZ2VudHMubGVuZ3RoICsgMikge1xuICAgICAgcmV0dXJuIGQzX3N2Z19saW5lTGluZWFyKHBvaW50cyk7XG4gICAgfVxuICAgIHZhciBxdWFkID0gcG9pbnRzLmxlbmd0aCAhPSB0YW5nZW50cy5sZW5ndGgsIHBhdGggPSBcIlwiLCBwMCA9IHBvaW50c1swXSwgcCA9IHBvaW50c1sxXSwgdDAgPSB0YW5nZW50c1swXSwgdCA9IHQwLCBwaSA9IDE7XG4gICAgaWYgKHF1YWQpIHtcbiAgICAgIHBhdGggKz0gXCJRXCIgKyAocFswXSAtIHQwWzBdICogMiAvIDMpICsgXCIsXCIgKyAocFsxXSAtIHQwWzFdICogMiAvIDMpICsgXCIsXCIgKyBwWzBdICsgXCIsXCIgKyBwWzFdO1xuICAgICAgcDAgPSBwb2ludHNbMV07XG4gICAgICBwaSA9IDI7XG4gICAgfVxuICAgIGlmICh0YW5nZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICB0ID0gdGFuZ2VudHNbMV07XG4gICAgICBwID0gcG9pbnRzW3BpXTtcbiAgICAgIHBpKys7XG4gICAgICBwYXRoICs9IFwiQ1wiICsgKHAwWzBdICsgdDBbMF0pICsgXCIsXCIgKyAocDBbMV0gKyB0MFsxXSkgKyBcIixcIiArIChwWzBdIC0gdFswXSkgKyBcIixcIiArIChwWzFdIC0gdFsxXSkgKyBcIixcIiArIHBbMF0gKyBcIixcIiArIHBbMV07XG4gICAgICBmb3IgKHZhciBpID0gMjsgaSA8IHRhbmdlbnRzLmxlbmd0aDsgaSsrLCBwaSsrKSB7XG4gICAgICAgIHAgPSBwb2ludHNbcGldO1xuICAgICAgICB0ID0gdGFuZ2VudHNbaV07XG4gICAgICAgIHBhdGggKz0gXCJTXCIgKyAocFswXSAtIHRbMF0pICsgXCIsXCIgKyAocFsxXSAtIHRbMV0pICsgXCIsXCIgKyBwWzBdICsgXCIsXCIgKyBwWzFdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocXVhZCkge1xuICAgICAgdmFyIGxwID0gcG9pbnRzW3BpXTtcbiAgICAgIHBhdGggKz0gXCJRXCIgKyAocFswXSArIHRbMF0gKiAyIC8gMykgKyBcIixcIiArIChwWzFdICsgdFsxXSAqIDIgLyAzKSArIFwiLFwiICsgbHBbMF0gKyBcIixcIiArIGxwWzFdO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuICBmdW5jdGlvbiBkM19zdmdfbGluZUNhcmRpbmFsVGFuZ2VudHMocG9pbnRzLCB0ZW5zaW9uKSB7XG4gICAgdmFyIHRhbmdlbnRzID0gW10sIGEgPSAoMSAtIHRlbnNpb24pIC8gMiwgcDAsIHAxID0gcG9pbnRzWzBdLCBwMiA9IHBvaW50c1sxXSwgaSA9IDEsIG4gPSBwb2ludHMubGVuZ3RoO1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBwMCA9IHAxO1xuICAgICAgcDEgPSBwMjtcbiAgICAgIHAyID0gcG9pbnRzW2ldO1xuICAgICAgdGFuZ2VudHMucHVzaChbIGEgKiAocDJbMF0gLSBwMFswXSksIGEgKiAocDJbMV0gLSBwMFsxXSkgXSk7XG4gICAgfVxuICAgIHJldHVybiB0YW5nZW50cztcbiAgfVxuICBmdW5jdGlvbiBkM19zdmdfbGluZUJhc2lzKHBvaW50cykge1xuICAgIGlmIChwb2ludHMubGVuZ3RoIDwgMykgcmV0dXJuIGQzX3N2Z19saW5lTGluZWFyKHBvaW50cyk7XG4gICAgdmFyIGkgPSAxLCBuID0gcG9pbnRzLmxlbmd0aCwgcGkgPSBwb2ludHNbMF0sIHgwID0gcGlbMF0sIHkwID0gcGlbMV0sIHB4ID0gWyB4MCwgeDAsIHgwLCAocGkgPSBwb2ludHNbMV0pWzBdIF0sIHB5ID0gWyB5MCwgeTAsIHkwLCBwaVsxXSBdLCBwYXRoID0gWyB4MCwgXCIsXCIsIHkwLCBcIkxcIiwgZDNfc3ZnX2xpbmVEb3Q0KGQzX3N2Z19saW5lQmFzaXNCZXppZXIzLCBweCksIFwiLFwiLCBkM19zdmdfbGluZURvdDQoZDNfc3ZnX2xpbmVCYXNpc0JlemllcjMsIHB5KSBdO1xuICAgIHBvaW50cy5wdXNoKHBvaW50c1tuIC0gMV0pO1xuICAgIHdoaWxlICgrK2kgPD0gbikge1xuICAgICAgcGkgPSBwb2ludHNbaV07XG4gICAgICBweC5zaGlmdCgpO1xuICAgICAgcHgucHVzaChwaVswXSk7XG4gICAgICBweS5zaGlmdCgpO1xuICAgICAgcHkucHVzaChwaVsxXSk7XG4gICAgICBkM19zdmdfbGluZUJhc2lzQmV6aWVyKHBhdGgsIHB4LCBweSk7XG4gICAgfVxuICAgIHBvaW50cy5wb3AoKTtcbiAgICBwYXRoLnB1c2goXCJMXCIsIHBpKTtcbiAgICByZXR1cm4gcGF0aC5qb2luKFwiXCIpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3N2Z19saW5lQmFzaXNPcGVuKHBvaW50cykge1xuICAgIGlmIChwb2ludHMubGVuZ3RoIDwgNCkgcmV0dXJuIGQzX3N2Z19saW5lTGluZWFyKHBvaW50cyk7XG4gICAgdmFyIHBhdGggPSBbXSwgaSA9IC0xLCBuID0gcG9pbnRzLmxlbmd0aCwgcGksIHB4ID0gWyAwIF0sIHB5ID0gWyAwIF07XG4gICAgd2hpbGUgKCsraSA8IDMpIHtcbiAgICAgIHBpID0gcG9pbnRzW2ldO1xuICAgICAgcHgucHVzaChwaVswXSk7XG4gICAgICBweS5wdXNoKHBpWzFdKTtcbiAgICB9XG4gICAgcGF0aC5wdXNoKGQzX3N2Z19saW5lRG90NChkM19zdmdfbGluZUJhc2lzQmV6aWVyMywgcHgpICsgXCIsXCIgKyBkM19zdmdfbGluZURvdDQoZDNfc3ZnX2xpbmVCYXNpc0JlemllcjMsIHB5KSk7XG4gICAgLS1pO1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBwaSA9IHBvaW50c1tpXTtcbiAgICAgIHB4LnNoaWZ0KCk7XG4gICAgICBweC5wdXNoKHBpWzBdKTtcbiAgICAgIHB5LnNoaWZ0KCk7XG4gICAgICBweS5wdXNoKHBpWzFdKTtcbiAgICAgIGQzX3N2Z19saW5lQmFzaXNCZXppZXIocGF0aCwgcHgsIHB5KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGguam9pbihcIlwiKTtcbiAgfVxuICBmdW5jdGlvbiBkM19zdmdfbGluZUJhc2lzQ2xvc2VkKHBvaW50cykge1xuICAgIHZhciBwYXRoLCBpID0gLTEsIG4gPSBwb2ludHMubGVuZ3RoLCBtID0gbiArIDQsIHBpLCBweCA9IFtdLCBweSA9IFtdO1xuICAgIHdoaWxlICgrK2kgPCA0KSB7XG4gICAgICBwaSA9IHBvaW50c1tpICUgbl07XG4gICAgICBweC5wdXNoKHBpWzBdKTtcbiAgICAgIHB5LnB1c2gocGlbMV0pO1xuICAgIH1cbiAgICBwYXRoID0gWyBkM19zdmdfbGluZURvdDQoZDNfc3ZnX2xpbmVCYXNpc0JlemllcjMsIHB4KSwgXCIsXCIsIGQzX3N2Z19saW5lRG90NChkM19zdmdfbGluZUJhc2lzQmV6aWVyMywgcHkpIF07XG4gICAgLS1pO1xuICAgIHdoaWxlICgrK2kgPCBtKSB7XG4gICAgICBwaSA9IHBvaW50c1tpICUgbl07XG4gICAgICBweC5zaGlmdCgpO1xuICAgICAgcHgucHVzaChwaVswXSk7XG4gICAgICBweS5zaGlmdCgpO1xuICAgICAgcHkucHVzaChwaVsxXSk7XG4gICAgICBkM19zdmdfbGluZUJhc2lzQmV6aWVyKHBhdGgsIHB4LCBweSk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoLmpvaW4oXCJcIik7XG4gIH1cbiAgZnVuY3Rpb24gZDNfc3ZnX2xpbmVCdW5kbGUocG9pbnRzLCB0ZW5zaW9uKSB7XG4gICAgdmFyIG4gPSBwb2ludHMubGVuZ3RoIC0gMTtcbiAgICBpZiAobikge1xuICAgICAgdmFyIHgwID0gcG9pbnRzWzBdWzBdLCB5MCA9IHBvaW50c1swXVsxXSwgZHggPSBwb2ludHNbbl1bMF0gLSB4MCwgZHkgPSBwb2ludHNbbl1bMV0gLSB5MCwgaSA9IC0xLCBwLCB0O1xuICAgICAgd2hpbGUgKCsraSA8PSBuKSB7XG4gICAgICAgIHAgPSBwb2ludHNbaV07XG4gICAgICAgIHQgPSBpIC8gbjtcbiAgICAgICAgcFswXSA9IHRlbnNpb24gKiBwWzBdICsgKDEgLSB0ZW5zaW9uKSAqICh4MCArIHQgKiBkeCk7XG4gICAgICAgIHBbMV0gPSB0ZW5zaW9uICogcFsxXSArICgxIC0gdGVuc2lvbikgKiAoeTAgKyB0ICogZHkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZDNfc3ZnX2xpbmVCYXNpcyhwb2ludHMpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3N2Z19saW5lRG90NChhLCBiKSB7XG4gICAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXSArIGFbM10gKiBiWzNdO1xuICB9XG4gIHZhciBkM19zdmdfbGluZUJhc2lzQmV6aWVyMSA9IFsgMCwgMiAvIDMsIDEgLyAzLCAwIF0sIGQzX3N2Z19saW5lQmFzaXNCZXppZXIyID0gWyAwLCAxIC8gMywgMiAvIDMsIDAgXSwgZDNfc3ZnX2xpbmVCYXNpc0JlemllcjMgPSBbIDAsIDEgLyA2LCAyIC8gMywgMSAvIDYgXTtcbiAgZnVuY3Rpb24gZDNfc3ZnX2xpbmVCYXNpc0JlemllcihwYXRoLCB4LCB5KSB7XG4gICAgcGF0aC5wdXNoKFwiQ1wiLCBkM19zdmdfbGluZURvdDQoZDNfc3ZnX2xpbmVCYXNpc0JlemllcjEsIHgpLCBcIixcIiwgZDNfc3ZnX2xpbmVEb3Q0KGQzX3N2Z19saW5lQmFzaXNCZXppZXIxLCB5KSwgXCIsXCIsIGQzX3N2Z19saW5lRG90NChkM19zdmdfbGluZUJhc2lzQmV6aWVyMiwgeCksIFwiLFwiLCBkM19zdmdfbGluZURvdDQoZDNfc3ZnX2xpbmVCYXNpc0JlemllcjIsIHkpLCBcIixcIiwgZDNfc3ZnX2xpbmVEb3Q0KGQzX3N2Z19saW5lQmFzaXNCZXppZXIzLCB4KSwgXCIsXCIsIGQzX3N2Z19saW5lRG90NChkM19zdmdfbGluZUJhc2lzQmV6aWVyMywgeSkpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3N2Z19saW5lU2xvcGUocDAsIHAxKSB7XG4gICAgcmV0dXJuIChwMVsxXSAtIHAwWzFdKSAvIChwMVswXSAtIHAwWzBdKTtcbiAgfVxuICBmdW5jdGlvbiBkM19zdmdfbGluZUZpbml0ZURpZmZlcmVuY2VzKHBvaW50cykge1xuICAgIHZhciBpID0gMCwgaiA9IHBvaW50cy5sZW5ndGggLSAxLCBtID0gW10sIHAwID0gcG9pbnRzWzBdLCBwMSA9IHBvaW50c1sxXSwgZCA9IG1bMF0gPSBkM19zdmdfbGluZVNsb3BlKHAwLCBwMSk7XG4gICAgd2hpbGUgKCsraSA8IGopIHtcbiAgICAgIG1baV0gPSAoZCArIChkID0gZDNfc3ZnX2xpbmVTbG9wZShwMCA9IHAxLCBwMSA9IHBvaW50c1tpICsgMV0pKSkgLyAyO1xuICAgIH1cbiAgICBtW2ldID0gZDtcbiAgICByZXR1cm4gbTtcbiAgfVxuICBmdW5jdGlvbiBkM19zdmdfbGluZU1vbm90b25lVGFuZ2VudHMocG9pbnRzKSB7XG4gICAgdmFyIHRhbmdlbnRzID0gW10sIGQsIGEsIGIsIHMsIG0gPSBkM19zdmdfbGluZUZpbml0ZURpZmZlcmVuY2VzKHBvaW50cyksIGkgPSAtMSwgaiA9IHBvaW50cy5sZW5ndGggLSAxO1xuICAgIHdoaWxlICgrK2kgPCBqKSB7XG4gICAgICBkID0gZDNfc3ZnX2xpbmVTbG9wZShwb2ludHNbaV0sIHBvaW50c1tpICsgMV0pO1xuICAgICAgaWYgKE1hdGguYWJzKGQpIDwgMWUtNikge1xuICAgICAgICBtW2ldID0gbVtpICsgMV0gPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYSA9IG1baV0gLyBkO1xuICAgICAgICBiID0gbVtpICsgMV0gLyBkO1xuICAgICAgICBzID0gYSAqIGEgKyBiICogYjtcbiAgICAgICAgaWYgKHMgPiA5KSB7XG4gICAgICAgICAgcyA9IGQgKiAzIC8gTWF0aC5zcXJ0KHMpO1xuICAgICAgICAgIG1baV0gPSBzICogYTtcbiAgICAgICAgICBtW2kgKyAxXSA9IHMgKiBiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGkgPSAtMTtcbiAgICB3aGlsZSAoKytpIDw9IGopIHtcbiAgICAgIHMgPSAocG9pbnRzW01hdGgubWluKGosIGkgKyAxKV1bMF0gLSBwb2ludHNbTWF0aC5tYXgoMCwgaSAtIDEpXVswXSkgLyAoNiAqICgxICsgbVtpXSAqIG1baV0pKTtcbiAgICAgIHRhbmdlbnRzLnB1c2goWyBzIHx8IDAsIG1baV0gKiBzIHx8IDAgXSk7XG4gICAgfVxuICAgIHJldHVybiB0YW5nZW50cztcbiAgfVxuICBmdW5jdGlvbiBkM19zdmdfbGluZU1vbm90b25lKHBvaW50cykge1xuICAgIHJldHVybiBwb2ludHMubGVuZ3RoIDwgMyA/IGQzX3N2Z19saW5lTGluZWFyKHBvaW50cykgOiBwb2ludHNbMF0gKyBkM19zdmdfbGluZUhlcm1pdGUocG9pbnRzLCBkM19zdmdfbGluZU1vbm90b25lVGFuZ2VudHMocG9pbnRzKSk7XG4gIH1cbiAgZDMuZ2VvbS5odWxsID0gZnVuY3Rpb24odmVydGljZXMpIHtcbiAgICB2YXIgeCA9IGQzX3N2Z19saW5lWCwgeSA9IGQzX3N2Z19saW5lWTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGh1bGwodmVydGljZXMpO1xuICAgIGZ1bmN0aW9uIGh1bGwoZGF0YSkge1xuICAgICAgaWYgKGRhdGEubGVuZ3RoIDwgMykgcmV0dXJuIFtdO1xuICAgICAgdmFyIGZ4ID0gZDNfZnVuY3Rvcih4KSwgZnkgPSBkM19mdW5jdG9yKHkpLCBuID0gZGF0YS5sZW5ndGgsIHZlcnRpY2VzLCBwbGVuID0gbiAtIDEsIHBvaW50cyA9IFtdLCBzdGFjayA9IFtdLCBkLCBpLCBqLCBoID0gMCwgeDEsIHkxLCB4MiwgeTIsIHUsIHYsIGEsIHNwO1xuICAgICAgaWYgKGZ4ID09PSBkM19zdmdfbGluZVggJiYgeSA9PT0gZDNfc3ZnX2xpbmVZKSB2ZXJ0aWNlcyA9IGRhdGE7IGVsc2UgZm9yIChpID0gMCwgXG4gICAgICB2ZXJ0aWNlcyA9IFtdOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIHZlcnRpY2VzLnB1c2goWyArZnguY2FsbCh0aGlzLCBkID0gZGF0YVtpXSwgaSksICtmeS5jYWxsKHRoaXMsIGQsIGkpIF0pO1xuICAgICAgfVxuICAgICAgZm9yIChpID0gMTsgaSA8IG47ICsraSkge1xuICAgICAgICBpZiAodmVydGljZXNbaV1bMV0gPCB2ZXJ0aWNlc1toXVsxXSB8fCB2ZXJ0aWNlc1tpXVsxXSA9PSB2ZXJ0aWNlc1toXVsxXSAmJiB2ZXJ0aWNlc1tpXVswXSA8IHZlcnRpY2VzW2hdWzBdKSBoID0gaTtcbiAgICAgIH1cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKGkgPT09IGgpIGNvbnRpbnVlO1xuICAgICAgICB5MSA9IHZlcnRpY2VzW2ldWzFdIC0gdmVydGljZXNbaF1bMV07XG4gICAgICAgIHgxID0gdmVydGljZXNbaV1bMF0gLSB2ZXJ0aWNlc1toXVswXTtcbiAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgIGFuZ2xlOiBNYXRoLmF0YW4yKHkxLCB4MSksXG4gICAgICAgICAgaW5kZXg6IGlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBwb2ludHMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLmFuZ2xlIC0gYi5hbmdsZTtcbiAgICAgIH0pO1xuICAgICAgYSA9IHBvaW50c1swXS5hbmdsZTtcbiAgICAgIHYgPSBwb2ludHNbMF0uaW5kZXg7XG4gICAgICB1ID0gMDtcbiAgICAgIGZvciAoaSA9IDE7IGkgPCBwbGVuOyArK2kpIHtcbiAgICAgICAgaiA9IHBvaW50c1tpXS5pbmRleDtcbiAgICAgICAgaWYgKGEgPT0gcG9pbnRzW2ldLmFuZ2xlKSB7XG4gICAgICAgICAgeDEgPSB2ZXJ0aWNlc1t2XVswXSAtIHZlcnRpY2VzW2hdWzBdO1xuICAgICAgICAgIHkxID0gdmVydGljZXNbdl1bMV0gLSB2ZXJ0aWNlc1toXVsxXTtcbiAgICAgICAgICB4MiA9IHZlcnRpY2VzW2pdWzBdIC0gdmVydGljZXNbaF1bMF07XG4gICAgICAgICAgeTIgPSB2ZXJ0aWNlc1tqXVsxXSAtIHZlcnRpY2VzW2hdWzFdO1xuICAgICAgICAgIGlmICh4MSAqIHgxICsgeTEgKiB5MSA+PSB4MiAqIHgyICsgeTIgKiB5Mikge1xuICAgICAgICAgICAgcG9pbnRzW2ldLmluZGV4ID0gLTE7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9pbnRzW3VdLmluZGV4ID0gLTE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGEgPSBwb2ludHNbaV0uYW5nbGU7XG4gICAgICAgIHUgPSBpO1xuICAgICAgICB2ID0gajtcbiAgICAgIH1cbiAgICAgIHN0YWNrLnB1c2goaCk7XG4gICAgICBmb3IgKGkgPSAwLCBqID0gMDsgaSA8IDI7ICsraikge1xuICAgICAgICBpZiAocG9pbnRzW2pdLmluZGV4ID4gLTEpIHtcbiAgICAgICAgICBzdGFjay5wdXNoKHBvaW50c1tqXS5pbmRleCk7XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzcCA9IHN0YWNrLmxlbmd0aDtcbiAgICAgIGZvciAoO2ogPCBwbGVuOyArK2opIHtcbiAgICAgICAgaWYgKHBvaW50c1tqXS5pbmRleCA8IDApIGNvbnRpbnVlO1xuICAgICAgICB3aGlsZSAoIWQzX2dlb21faHVsbENDVyhzdGFja1tzcCAtIDJdLCBzdGFja1tzcCAtIDFdLCBwb2ludHNbal0uaW5kZXgsIHZlcnRpY2VzKSkge1xuICAgICAgICAgIC0tc3A7XG4gICAgICAgIH1cbiAgICAgICAgc3RhY2tbc3ArK10gPSBwb2ludHNbal0uaW5kZXg7XG4gICAgICB9XG4gICAgICB2YXIgcG9seSA9IFtdO1xuICAgICAgZm9yIChpID0gc3AgLSAxOyBpID49IDA7IC0taSkgcG9seS5wdXNoKGRhdGFbc3RhY2tbaV1dKTtcbiAgICAgIHJldHVybiBwb2x5O1xuICAgIH1cbiAgICBodWxsLnggPSBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4ID0gXywgaHVsbCkgOiB4O1xuICAgIH07XG4gICAgaHVsbC55ID0gZnVuY3Rpb24oXykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeSA9IF8sIGh1bGwpIDogeTtcbiAgICB9O1xuICAgIHJldHVybiBodWxsO1xuICB9O1xuICBmdW5jdGlvbiBkM19nZW9tX2h1bGxDQ1coaTEsIGkyLCBpMywgdikge1xuICAgIHZhciB0LCBhLCBiLCBjLCBkLCBlLCBmO1xuICAgIHQgPSB2W2kxXTtcbiAgICBhID0gdFswXTtcbiAgICBiID0gdFsxXTtcbiAgICB0ID0gdltpMl07XG4gICAgYyA9IHRbMF07XG4gICAgZCA9IHRbMV07XG4gICAgdCA9IHZbaTNdO1xuICAgIGUgPSB0WzBdO1xuICAgIGYgPSB0WzFdO1xuICAgIHJldHVybiAoZiAtIGIpICogKGMgLSBhKSAtIChkIC0gYikgKiAoZSAtIGEpID4gMDtcbiAgfVxuICBkMy5nZW9tLnBvbHlnb24gPSBmdW5jdGlvbihjb29yZGluYXRlcykge1xuICAgIGQzX3N1YmNsYXNzKGNvb3JkaW5hdGVzLCBkM19nZW9tX3BvbHlnb25Qcm90b3R5cGUpO1xuICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgfTtcbiAgdmFyIGQzX2dlb21fcG9seWdvblByb3RvdHlwZSA9IGQzLmdlb20ucG9seWdvbi5wcm90b3R5cGUgPSBbXTtcbiAgZDNfZ2VvbV9wb2x5Z29uUHJvdG90eXBlLmFyZWEgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaSA9IC0xLCBuID0gdGhpcy5sZW5ndGgsIGEsIGIgPSB0aGlzW24gLSAxXSwgYXJlYSA9IDA7XG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIGEgPSBiO1xuICAgICAgYiA9IHRoaXNbaV07XG4gICAgICBhcmVhICs9IGFbMV0gKiBiWzBdIC0gYVswXSAqIGJbMV07XG4gICAgfVxuICAgIHJldHVybiBhcmVhICogLjU7XG4gIH07XG4gIGQzX2dlb21fcG9seWdvblByb3RvdHlwZS5jZW50cm9pZCA9IGZ1bmN0aW9uKGspIHtcbiAgICB2YXIgaSA9IC0xLCBuID0gdGhpcy5sZW5ndGgsIHggPSAwLCB5ID0gMCwgYSwgYiA9IHRoaXNbbiAtIDFdLCBjO1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgayA9IC0xIC8gKDYgKiB0aGlzLmFyZWEoKSk7XG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIGEgPSBiO1xuICAgICAgYiA9IHRoaXNbaV07XG4gICAgICBjID0gYVswXSAqIGJbMV0gLSBiWzBdICogYVsxXTtcbiAgICAgIHggKz0gKGFbMF0gKyBiWzBdKSAqIGM7XG4gICAgICB5ICs9IChhWzFdICsgYlsxXSkgKiBjO1xuICAgIH1cbiAgICByZXR1cm4gWyB4ICogaywgeSAqIGsgXTtcbiAgfTtcbiAgZDNfZ2VvbV9wb2x5Z29uUHJvdG90eXBlLmNsaXAgPSBmdW5jdGlvbihzdWJqZWN0KSB7XG4gICAgdmFyIGlucHV0LCBjbG9zZWQgPSBkM19nZW9tX3BvbHlnb25DbG9zZWQoc3ViamVjdCksIGkgPSAtMSwgbiA9IHRoaXMubGVuZ3RoIC0gZDNfZ2VvbV9wb2x5Z29uQ2xvc2VkKHRoaXMpLCBqLCBtLCBhID0gdGhpc1tuIC0gMV0sIGIsIGMsIGQ7XG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIGlucHV0ID0gc3ViamVjdC5zbGljZSgpO1xuICAgICAgc3ViamVjdC5sZW5ndGggPSAwO1xuICAgICAgYiA9IHRoaXNbaV07XG4gICAgICBjID0gaW5wdXRbKG0gPSBpbnB1dC5sZW5ndGggLSBjbG9zZWQpIC0gMV07XG4gICAgICBqID0gLTE7XG4gICAgICB3aGlsZSAoKytqIDwgbSkge1xuICAgICAgICBkID0gaW5wdXRbal07XG4gICAgICAgIGlmIChkM19nZW9tX3BvbHlnb25JbnNpZGUoZCwgYSwgYikpIHtcbiAgICAgICAgICBpZiAoIWQzX2dlb21fcG9seWdvbkluc2lkZShjLCBhLCBiKSkge1xuICAgICAgICAgICAgc3ViamVjdC5wdXNoKGQzX2dlb21fcG9seWdvbkludGVyc2VjdChjLCBkLCBhLCBiKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN1YmplY3QucHVzaChkKTtcbiAgICAgICAgfSBlbHNlIGlmIChkM19nZW9tX3BvbHlnb25JbnNpZGUoYywgYSwgYikpIHtcbiAgICAgICAgICBzdWJqZWN0LnB1c2goZDNfZ2VvbV9wb2x5Z29uSW50ZXJzZWN0KGMsIGQsIGEsIGIpKTtcbiAgICAgICAgfVxuICAgICAgICBjID0gZDtcbiAgICAgIH1cbiAgICAgIGlmIChjbG9zZWQpIHN1YmplY3QucHVzaChzdWJqZWN0WzBdKTtcbiAgICAgIGEgPSBiO1xuICAgIH1cbiAgICByZXR1cm4gc3ViamVjdDtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfZ2VvbV9wb2x5Z29uSW5zaWRlKHAsIGEsIGIpIHtcbiAgICByZXR1cm4gKGJbMF0gLSBhWzBdKSAqIChwWzFdIC0gYVsxXSkgPCAoYlsxXSAtIGFbMV0pICogKHBbMF0gLSBhWzBdKTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9tX3BvbHlnb25JbnRlcnNlY3QoYywgZCwgYSwgYikge1xuICAgIHZhciB4MSA9IGNbMF0sIHgzID0gYVswXSwgeDIxID0gZFswXSAtIHgxLCB4NDMgPSBiWzBdIC0geDMsIHkxID0gY1sxXSwgeTMgPSBhWzFdLCB5MjEgPSBkWzFdIC0geTEsIHk0MyA9IGJbMV0gLSB5MywgdWEgPSAoeDQzICogKHkxIC0geTMpIC0geTQzICogKHgxIC0geDMpKSAvICh5NDMgKiB4MjEgLSB4NDMgKiB5MjEpO1xuICAgIHJldHVybiBbIHgxICsgdWEgKiB4MjEsIHkxICsgdWEgKiB5MjEgXTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9tX3BvbHlnb25DbG9zZWQoY29vcmRpbmF0ZXMpIHtcbiAgICB2YXIgYSA9IGNvb3JkaW5hdGVzWzBdLCBiID0gY29vcmRpbmF0ZXNbY29vcmRpbmF0ZXMubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuICEoYVswXSAtIGJbMF0gfHwgYVsxXSAtIGJbMV0pO1xuICB9XG4gIGQzLmdlb20uZGVsYXVuYXkgPSBmdW5jdGlvbih2ZXJ0aWNlcykge1xuICAgIHZhciBlZGdlcyA9IHZlcnRpY2VzLm1hcChmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9KSwgdHJpYW5nbGVzID0gW107XG4gICAgZDNfZ2VvbV92b3Jvbm9pVGVzc2VsbGF0ZSh2ZXJ0aWNlcywgZnVuY3Rpb24oZSkge1xuICAgICAgZWRnZXNbZS5yZWdpb24ubC5pbmRleF0ucHVzaCh2ZXJ0aWNlc1tlLnJlZ2lvbi5yLmluZGV4XSk7XG4gICAgfSk7XG4gICAgZWRnZXMuZm9yRWFjaChmdW5jdGlvbihlZGdlLCBpKSB7XG4gICAgICB2YXIgdiA9IHZlcnRpY2VzW2ldLCBjeCA9IHZbMF0sIGN5ID0gdlsxXTtcbiAgICAgIGVkZ2UuZm9yRWFjaChmdW5jdGlvbih2KSB7XG4gICAgICAgIHYuYW5nbGUgPSBNYXRoLmF0YW4yKHZbMF0gLSBjeCwgdlsxXSAtIGN5KTtcbiAgICAgIH0pO1xuICAgICAgZWRnZS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEuYW5nbGUgLSBiLmFuZ2xlO1xuICAgICAgfSk7XG4gICAgICBmb3IgKHZhciBqID0gMCwgbSA9IGVkZ2UubGVuZ3RoIC0gMTsgaiA8IG07IGorKykge1xuICAgICAgICB0cmlhbmdsZXMucHVzaChbIHYsIGVkZ2Vbal0sIGVkZ2VbaiArIDFdIF0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0cmlhbmdsZXM7XG4gIH07XG4gIGQzLmdlb20udm9yb25vaSA9IGZ1bmN0aW9uKHBvaW50cykge1xuICAgIHZhciB4ID0gZDNfc3ZnX2xpbmVYLCB5ID0gZDNfc3ZnX2xpbmVZLCBjbGlwUG9seWdvbiA9IG51bGw7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB2b3Jvbm9pKHBvaW50cyk7XG4gICAgZnVuY3Rpb24gdm9yb25vaShkYXRhKSB7XG4gICAgICB2YXIgcG9pbnRzLCBwb2x5Z29ucyA9IGRhdGEubWFwKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9KSwgZnggPSBkM19mdW5jdG9yKHgpLCBmeSA9IGQzX2Z1bmN0b3IoeSksIGQsIGksIG4gPSBkYXRhLmxlbmd0aCwgWiA9IDFlNjtcbiAgICAgIGlmIChmeCA9PT0gZDNfc3ZnX2xpbmVYICYmIGZ5ID09PSBkM19zdmdfbGluZVkpIHBvaW50cyA9IGRhdGE7IGVsc2UgZm9yIChwb2ludHMgPSBuZXcgQXJyYXkobiksIFxuICAgICAgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgcG9pbnRzW2ldID0gWyArZnguY2FsbCh0aGlzLCBkID0gZGF0YVtpXSwgaSksICtmeS5jYWxsKHRoaXMsIGQsIGkpIF07XG4gICAgICB9XG4gICAgICBkM19nZW9tX3Zvcm9ub2lUZXNzZWxsYXRlKHBvaW50cywgZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgczEsIHMyLCB4MSwgeDIsIHkxLCB5MjtcbiAgICAgICAgaWYgKGUuYSA9PT0gMSAmJiBlLmIgPj0gMCkge1xuICAgICAgICAgIHMxID0gZS5lcC5yO1xuICAgICAgICAgIHMyID0gZS5lcC5sO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHMxID0gZS5lcC5sO1xuICAgICAgICAgIHMyID0gZS5lcC5yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLmEgPT09IDEpIHtcbiAgICAgICAgICB5MSA9IHMxID8gczEueSA6IC1aO1xuICAgICAgICAgIHgxID0gZS5jIC0gZS5iICogeTE7XG4gICAgICAgICAgeTIgPSBzMiA/IHMyLnkgOiBaO1xuICAgICAgICAgIHgyID0gZS5jIC0gZS5iICogeTI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeDEgPSBzMSA/IHMxLnggOiAtWjtcbiAgICAgICAgICB5MSA9IGUuYyAtIGUuYSAqIHgxO1xuICAgICAgICAgIHgyID0gczIgPyBzMi54IDogWjtcbiAgICAgICAgICB5MiA9IGUuYyAtIGUuYSAqIHgyO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2MSA9IFsgeDEsIHkxIF0sIHYyID0gWyB4MiwgeTIgXTtcbiAgICAgICAgcG9seWdvbnNbZS5yZWdpb24ubC5pbmRleF0ucHVzaCh2MSwgdjIpO1xuICAgICAgICBwb2x5Z29uc1tlLnJlZ2lvbi5yLmluZGV4XS5wdXNoKHYxLCB2Mik7XG4gICAgICB9KTtcbiAgICAgIHBvbHlnb25zID0gcG9seWdvbnMubWFwKGZ1bmN0aW9uKHBvbHlnb24sIGkpIHtcbiAgICAgICAgdmFyIGN4ID0gcG9pbnRzW2ldWzBdLCBjeSA9IHBvaW50c1tpXVsxXSwgYW5nbGUgPSBwb2x5Z29uLm1hcChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodlswXSAtIGN4LCB2WzFdIC0gY3kpO1xuICAgICAgICB9KSwgb3JkZXIgPSBkMy5yYW5nZShwb2x5Z29uLmxlbmd0aCkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIGFuZ2xlW2FdIC0gYW5nbGVbYl07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3JkZXIuZmlsdGVyKGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gIWkgfHwgYW5nbGVbZF0gLSBhbmdsZVtvcmRlcltpIC0gMV1dID4gzrU7XG4gICAgICAgIH0pLm1hcChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIHBvbHlnb25bZF07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBwb2x5Z29ucy5mb3JFYWNoKGZ1bmN0aW9uKHBvbHlnb24sIGkpIHtcbiAgICAgICAgdmFyIG4gPSBwb2x5Z29uLmxlbmd0aDtcbiAgICAgICAgaWYgKCFuKSByZXR1cm4gcG9seWdvbi5wdXNoKFsgLVosIC1aIF0sIFsgLVosIFogXSwgWyBaLCBaIF0sIFsgWiwgLVogXSk7XG4gICAgICAgIGlmIChuID4gMikgcmV0dXJuO1xuICAgICAgICB2YXIgcDAgPSBwb2ludHNbaV0sIHAxID0gcG9seWdvblswXSwgcDIgPSBwb2x5Z29uWzFdLCB4MCA9IHAwWzBdLCB5MCA9IHAwWzFdLCB4MSA9IHAxWzBdLCB5MSA9IHAxWzFdLCB4MiA9IHAyWzBdLCB5MiA9IHAyWzFdLCBkeCA9IE1hdGguYWJzKHgyIC0geDEpLCBkeSA9IHkyIC0geTE7XG4gICAgICAgIGlmIChNYXRoLmFicyhkeSkgPCDOtSkge1xuICAgICAgICAgIHZhciB5ID0geTAgPCB5MSA/IC1aIDogWjtcbiAgICAgICAgICBwb2x5Z29uLnB1c2goWyAtWiwgeSBdLCBbIFosIHkgXSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZHggPCDOtSkge1xuICAgICAgICAgIHZhciB4ID0geDAgPCB4MSA/IC1aIDogWjtcbiAgICAgICAgICBwb2x5Z29uLnB1c2goWyB4LCAtWiBdLCBbIHgsIFogXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHkgPSAoeDIgLSB4MSkgKiAoeTEgLSB5MCkgPCAoeDEgLSB4MCkgKiAoeTIgLSB5MSkgPyBaIDogLVosIHogPSBNYXRoLmFicyhkeSkgLSBkeDtcbiAgICAgICAgICBpZiAoTWF0aC5hYnMoeikgPCDOtSkge1xuICAgICAgICAgICAgcG9seWdvbi5wdXNoKFsgZHkgPCAwID8geSA6IC15LCB5IF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoeiA+IDApIHkgKj0gLTE7XG4gICAgICAgICAgICBwb2x5Z29uLnB1c2goWyAtWiwgeSBdLCBbIFosIHkgXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChjbGlwUG9seWdvbikgZm9yIChpID0gMDsgaSA8IG47ICsraSkgY2xpcFBvbHlnb24uY2xpcChwb2x5Z29uc1tpXSk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSBwb2x5Z29uc1tpXS5wb2ludCA9IGRhdGFbaV07XG4gICAgICByZXR1cm4gcG9seWdvbnM7XG4gICAgfVxuICAgIHZvcm9ub2kueCA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHggPSBfLCB2b3Jvbm9pKSA6IHg7XG4gICAgfTtcbiAgICB2b3Jvbm9pLnkgPSBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh5ID0gXywgdm9yb25vaSkgOiB5O1xuICAgIH07XG4gICAgdm9yb25vaS5jbGlwRXh0ZW50ID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gY2xpcFBvbHlnb24gJiYgWyBjbGlwUG9seWdvblswXSwgY2xpcFBvbHlnb25bMl0gXTtcbiAgICAgIGlmIChfID09IG51bGwpIGNsaXBQb2x5Z29uID0gbnVsbDsgZWxzZSB7XG4gICAgICAgIHZhciB4MSA9ICtfWzBdWzBdLCB5MSA9ICtfWzBdWzFdLCB4MiA9ICtfWzFdWzBdLCB5MiA9ICtfWzFdWzFdO1xuICAgICAgICBjbGlwUG9seWdvbiA9IGQzLmdlb20ucG9seWdvbihbIFsgeDEsIHkxIF0sIFsgeDEsIHkyIF0sIFsgeDIsIHkyIF0sIFsgeDIsIHkxIF0gXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdm9yb25vaTtcbiAgICB9O1xuICAgIHZvcm9ub2kuc2l6ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGNsaXBQb2x5Z29uICYmIGNsaXBQb2x5Z29uWzJdO1xuICAgICAgcmV0dXJuIHZvcm9ub2kuY2xpcEV4dGVudChfICYmIFsgWyAwLCAwIF0sIF8gXSk7XG4gICAgfTtcbiAgICB2b3Jvbm9pLmxpbmtzID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgdmFyIHBvaW50cywgZ3JhcGggPSBkYXRhLm1hcChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfSksIGxpbmtzID0gW10sIGZ4ID0gZDNfZnVuY3Rvcih4KSwgZnkgPSBkM19mdW5jdG9yKHkpLCBkLCBpLCBuID0gZGF0YS5sZW5ndGg7XG4gICAgICBpZiAoZnggPT09IGQzX3N2Z19saW5lWCAmJiBmeSA9PT0gZDNfc3ZnX2xpbmVZKSBwb2ludHMgPSBkYXRhOyBlbHNlIGZvciAocG9pbnRzID0gbmV3IEFycmF5KG4pLCBcbiAgICAgIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIHBvaW50c1tpXSA9IFsgK2Z4LmNhbGwodGhpcywgZCA9IGRhdGFbaV0sIGkpLCArZnkuY2FsbCh0aGlzLCBkLCBpKSBdO1xuICAgICAgfVxuICAgICAgZDNfZ2VvbV92b3Jvbm9pVGVzc2VsbGF0ZShwb2ludHMsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGwgPSBlLnJlZ2lvbi5sLmluZGV4LCByID0gZS5yZWdpb24uci5pbmRleDtcbiAgICAgICAgaWYgKGdyYXBoW2xdW3JdKSByZXR1cm47XG4gICAgICAgIGdyYXBoW2xdW3JdID0gZ3JhcGhbcl1bbF0gPSB0cnVlO1xuICAgICAgICBsaW5rcy5wdXNoKHtcbiAgICAgICAgICBzb3VyY2U6IGRhdGFbbF0sXG4gICAgICAgICAgdGFyZ2V0OiBkYXRhW3JdXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbGlua3M7XG4gICAgfTtcbiAgICB2b3Jvbm9pLnRyaWFuZ2xlcyA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIGlmICh4ID09PSBkM19zdmdfbGluZVggJiYgeSA9PT0gZDNfc3ZnX2xpbmVZKSByZXR1cm4gZDMuZ2VvbS5kZWxhdW5heShkYXRhKTtcbiAgICAgIHZhciBwb2ludHMgPSBuZXcgQXJyYXkobiksIGZ4ID0gZDNfZnVuY3Rvcih4KSwgZnkgPSBkM19mdW5jdG9yKHkpLCBkLCBpID0gLTEsIG4gPSBkYXRhLmxlbmd0aDtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICAgIChwb2ludHNbaV0gPSBbICtmeC5jYWxsKHRoaXMsIGQgPSBkYXRhW2ldLCBpKSwgK2Z5LmNhbGwodGhpcywgZCwgaSkgXSkuZGF0YSA9IGQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gZDMuZ2VvbS5kZWxhdW5heShwb2ludHMpLm1hcChmdW5jdGlvbih0cmlhbmdsZSkge1xuICAgICAgICByZXR1cm4gdHJpYW5nbGUubWFwKGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgICAgICAgcmV0dXJuIHBvaW50LmRhdGE7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gdm9yb25vaTtcbiAgfTtcbiAgdmFyIGQzX2dlb21fdm9yb25vaU9wcG9zaXRlID0ge1xuICAgIGw6IFwiclwiLFxuICAgIHI6IFwibFwiXG4gIH07XG4gIGZ1bmN0aW9uIGQzX2dlb21fdm9yb25vaVRlc3NlbGxhdGUocG9pbnRzLCBjYWxsYmFjaykge1xuICAgIHZhciBTaXRlcyA9IHtcbiAgICAgIGxpc3Q6IHBvaW50cy5tYXAoZnVuY3Rpb24odiwgaSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgIHg6IHZbMF0sXG4gICAgICAgICAgeTogdlsxXVxuICAgICAgICB9O1xuICAgICAgfSkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLnkgPCBiLnkgPyAtMSA6IGEueSA+IGIueSA/IDEgOiBhLnggPCBiLnggPyAtMSA6IGEueCA+IGIueCA/IDEgOiAwO1xuICAgICAgfSksXG4gICAgICBib3R0b21TaXRlOiBudWxsXG4gICAgfTtcbiAgICB2YXIgRWRnZUxpc3QgPSB7XG4gICAgICBsaXN0OiBbXSxcbiAgICAgIGxlZnRFbmQ6IG51bGwsXG4gICAgICByaWdodEVuZDogbnVsbCxcbiAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBFZGdlTGlzdC5sZWZ0RW5kID0gRWRnZUxpc3QuY3JlYXRlSGFsZkVkZ2UobnVsbCwgXCJsXCIpO1xuICAgICAgICBFZGdlTGlzdC5yaWdodEVuZCA9IEVkZ2VMaXN0LmNyZWF0ZUhhbGZFZGdlKG51bGwsIFwibFwiKTtcbiAgICAgICAgRWRnZUxpc3QubGVmdEVuZC5yID0gRWRnZUxpc3QucmlnaHRFbmQ7XG4gICAgICAgIEVkZ2VMaXN0LnJpZ2h0RW5kLmwgPSBFZGdlTGlzdC5sZWZ0RW5kO1xuICAgICAgICBFZGdlTGlzdC5saXN0LnVuc2hpZnQoRWRnZUxpc3QubGVmdEVuZCwgRWRnZUxpc3QucmlnaHRFbmQpO1xuICAgICAgfSxcbiAgICAgIGNyZWF0ZUhhbGZFZGdlOiBmdW5jdGlvbihlZGdlLCBzaWRlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZWRnZTogZWRnZSxcbiAgICAgICAgICBzaWRlOiBzaWRlLFxuICAgICAgICAgIHZlcnRleDogbnVsbCxcbiAgICAgICAgICBsOiBudWxsLFxuICAgICAgICAgIHI6IG51bGxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBpbnNlcnQ6IGZ1bmN0aW9uKGxiLCBoZSkge1xuICAgICAgICBoZS5sID0gbGI7XG4gICAgICAgIGhlLnIgPSBsYi5yO1xuICAgICAgICBsYi5yLmwgPSBoZTtcbiAgICAgICAgbGIuciA9IGhlO1xuICAgICAgfSxcbiAgICAgIGxlZnRCb3VuZDogZnVuY3Rpb24ocCkge1xuICAgICAgICB2YXIgaGUgPSBFZGdlTGlzdC5sZWZ0RW5kO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgaGUgPSBoZS5yO1xuICAgICAgICB9IHdoaWxlIChoZSAhPSBFZGdlTGlzdC5yaWdodEVuZCAmJiBHZW9tLnJpZ2h0T2YoaGUsIHApKTtcbiAgICAgICAgaGUgPSBoZS5sO1xuICAgICAgICByZXR1cm4gaGU7XG4gICAgICB9LFxuICAgICAgZGVsOiBmdW5jdGlvbihoZSkge1xuICAgICAgICBoZS5sLnIgPSBoZS5yO1xuICAgICAgICBoZS5yLmwgPSBoZS5sO1xuICAgICAgICBoZS5lZGdlID0gbnVsbDtcbiAgICAgIH0sXG4gICAgICByaWdodDogZnVuY3Rpb24oaGUpIHtcbiAgICAgICAgcmV0dXJuIGhlLnI7XG4gICAgICB9LFxuICAgICAgbGVmdDogZnVuY3Rpb24oaGUpIHtcbiAgICAgICAgcmV0dXJuIGhlLmw7XG4gICAgICB9LFxuICAgICAgbGVmdFJlZ2lvbjogZnVuY3Rpb24oaGUpIHtcbiAgICAgICAgcmV0dXJuIGhlLmVkZ2UgPT0gbnVsbCA/IFNpdGVzLmJvdHRvbVNpdGUgOiBoZS5lZGdlLnJlZ2lvbltoZS5zaWRlXTtcbiAgICAgIH0sXG4gICAgICByaWdodFJlZ2lvbjogZnVuY3Rpb24oaGUpIHtcbiAgICAgICAgcmV0dXJuIGhlLmVkZ2UgPT0gbnVsbCA/IFNpdGVzLmJvdHRvbVNpdGUgOiBoZS5lZGdlLnJlZ2lvbltkM19nZW9tX3Zvcm9ub2lPcHBvc2l0ZVtoZS5zaWRlXV07XG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgR2VvbSA9IHtcbiAgICAgIGJpc2VjdDogZnVuY3Rpb24oczEsIHMyKSB7XG4gICAgICAgIHZhciBuZXdFZGdlID0ge1xuICAgICAgICAgIHJlZ2lvbjoge1xuICAgICAgICAgICAgbDogczEsXG4gICAgICAgICAgICByOiBzMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXA6IHtcbiAgICAgICAgICAgIGw6IG51bGwsXG4gICAgICAgICAgICByOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgZHggPSBzMi54IC0gczEueCwgZHkgPSBzMi55IC0gczEueSwgYWR4ID0gZHggPiAwID8gZHggOiAtZHgsIGFkeSA9IGR5ID4gMCA/IGR5IDogLWR5O1xuICAgICAgICBuZXdFZGdlLmMgPSBzMS54ICogZHggKyBzMS55ICogZHkgKyAoZHggKiBkeCArIGR5ICogZHkpICogLjU7XG4gICAgICAgIGlmIChhZHggPiBhZHkpIHtcbiAgICAgICAgICBuZXdFZGdlLmEgPSAxO1xuICAgICAgICAgIG5ld0VkZ2UuYiA9IGR5IC8gZHg7XG4gICAgICAgICAgbmV3RWRnZS5jIC89IGR4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0VkZ2UuYiA9IDE7XG4gICAgICAgICAgbmV3RWRnZS5hID0gZHggLyBkeTtcbiAgICAgICAgICBuZXdFZGdlLmMgLz0gZHk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0VkZ2U7XG4gICAgICB9LFxuICAgICAgaW50ZXJzZWN0OiBmdW5jdGlvbihlbDEsIGVsMikge1xuICAgICAgICB2YXIgZTEgPSBlbDEuZWRnZSwgZTIgPSBlbDIuZWRnZTtcbiAgICAgICAgaWYgKCFlMSB8fCAhZTIgfHwgZTEucmVnaW9uLnIgPT0gZTIucmVnaW9uLnIpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZCA9IGUxLmEgKiBlMi5iIC0gZTEuYiAqIGUyLmE7XG4gICAgICAgIGlmIChNYXRoLmFicyhkKSA8IDFlLTEwKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHhpbnQgPSAoZTEuYyAqIGUyLmIgLSBlMi5jICogZTEuYikgLyBkLCB5aW50ID0gKGUyLmMgKiBlMS5hIC0gZTEuYyAqIGUyLmEpIC8gZCwgZTFyID0gZTEucmVnaW9uLnIsIGUyciA9IGUyLnJlZ2lvbi5yLCBlbCwgZTtcbiAgICAgICAgaWYgKGUxci55IDwgZTJyLnkgfHwgZTFyLnkgPT0gZTJyLnkgJiYgZTFyLnggPCBlMnIueCkge1xuICAgICAgICAgIGVsID0gZWwxO1xuICAgICAgICAgIGUgPSBlMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbCA9IGVsMjtcbiAgICAgICAgICBlID0gZTI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJpZ2h0T2ZTaXRlID0geGludCA+PSBlLnJlZ2lvbi5yLng7XG4gICAgICAgIGlmIChyaWdodE9mU2l0ZSAmJiBlbC5zaWRlID09PSBcImxcIiB8fCAhcmlnaHRPZlNpdGUgJiYgZWwuc2lkZSA9PT0gXCJyXCIpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IHhpbnQsXG4gICAgICAgICAgeTogeWludFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHJpZ2h0T2Y6IGZ1bmN0aW9uKGhlLCBwKSB7XG4gICAgICAgIHZhciBlID0gaGUuZWRnZSwgdG9wc2l0ZSA9IGUucmVnaW9uLnIsIHJpZ2h0T2ZTaXRlID0gcC54ID4gdG9wc2l0ZS54O1xuICAgICAgICBpZiAocmlnaHRPZlNpdGUgJiYgaGUuc2lkZSA9PT0gXCJsXCIpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJpZ2h0T2ZTaXRlICYmIGhlLnNpZGUgPT09IFwiclwiKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUuYSA9PT0gMSkge1xuICAgICAgICAgIHZhciBkeXAgPSBwLnkgLSB0b3BzaXRlLnksIGR4cCA9IHAueCAtIHRvcHNpdGUueCwgZmFzdCA9IDAsIGFib3ZlID0gMDtcbiAgICAgICAgICBpZiAoIXJpZ2h0T2ZTaXRlICYmIGUuYiA8IDAgfHwgcmlnaHRPZlNpdGUgJiYgZS5iID49IDApIHtcbiAgICAgICAgICAgIGFib3ZlID0gZmFzdCA9IGR5cCA+PSBlLmIgKiBkeHA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFib3ZlID0gcC54ICsgcC55ICogZS5iID4gZS5jO1xuICAgICAgICAgICAgaWYgKGUuYiA8IDApIHtcbiAgICAgICAgICAgICAgYWJvdmUgPSAhYWJvdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWFib3ZlKSB7XG4gICAgICAgICAgICAgIGZhc3QgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWZhc3QpIHtcbiAgICAgICAgICAgIHZhciBkeHMgPSB0b3BzaXRlLnggLSBlLnJlZ2lvbi5sLng7XG4gICAgICAgICAgICBhYm92ZSA9IGUuYiAqIChkeHAgKiBkeHAgLSBkeXAgKiBkeXApIDwgZHhzICogZHlwICogKDEgKyAyICogZHhwIC8gZHhzICsgZS5iICogZS5iKTtcbiAgICAgICAgICAgIGlmIChlLmIgPCAwKSB7XG4gICAgICAgICAgICAgIGFib3ZlID0gIWFib3ZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgeWwgPSBlLmMgLSBlLmEgKiBwLngsIHQxID0gcC55IC0geWwsIHQyID0gcC54IC0gdG9wc2l0ZS54LCB0MyA9IHlsIC0gdG9wc2l0ZS55O1xuICAgICAgICAgIGFib3ZlID0gdDEgKiB0MSA+IHQyICogdDIgKyB0MyAqIHQzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoZS5zaWRlID09PSBcImxcIiA/IGFib3ZlIDogIWFib3ZlO1xuICAgICAgfSxcbiAgICAgIGVuZFBvaW50OiBmdW5jdGlvbihlZGdlLCBzaWRlLCBzaXRlKSB7XG4gICAgICAgIGVkZ2UuZXBbc2lkZV0gPSBzaXRlO1xuICAgICAgICBpZiAoIWVkZ2UuZXBbZDNfZ2VvbV92b3Jvbm9pT3Bwb3NpdGVbc2lkZV1dKSByZXR1cm47XG4gICAgICAgIGNhbGxiYWNrKGVkZ2UpO1xuICAgICAgfSxcbiAgICAgIGRpc3RhbmNlOiBmdW5jdGlvbihzLCB0KSB7XG4gICAgICAgIHZhciBkeCA9IHMueCAtIHQueCwgZHkgPSBzLnkgLSB0Lnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIEV2ZW50UXVldWUgPSB7XG4gICAgICBsaXN0OiBbXSxcbiAgICAgIGluc2VydDogZnVuY3Rpb24oaGUsIHNpdGUsIG9mZnNldCkge1xuICAgICAgICBoZS52ZXJ0ZXggPSBzaXRlO1xuICAgICAgICBoZS55c3RhciA9IHNpdGUueSArIG9mZnNldDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBFdmVudFF1ZXVlLmxpc3QsIGwgPSBsaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIHZhciBuZXh0ID0gbGlzdFtpXTtcbiAgICAgICAgICBpZiAoaGUueXN0YXIgPiBuZXh0LnlzdGFyIHx8IGhlLnlzdGFyID09IG5leHQueXN0YXIgJiYgc2l0ZS54ID4gbmV4dC52ZXJ0ZXgueCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsaXN0LnNwbGljZShpLCAwLCBoZSk7XG4gICAgICB9LFxuICAgICAgZGVsOiBmdW5jdGlvbihoZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbHMgPSBFdmVudFF1ZXVlLmxpc3QsIGwgPSBscy5sZW5ndGg7IGkgPCBsICYmIGxzW2ldICE9IGhlOyArK2kpIHt9XG4gICAgICAgIGxzLnNwbGljZShpLCAxKTtcbiAgICAgIH0sXG4gICAgICBlbXB0eTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBFdmVudFF1ZXVlLmxpc3QubGVuZ3RoID09PSAwO1xuICAgICAgfSxcbiAgICAgIG5leHRFdmVudDogZnVuY3Rpb24oaGUpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxzID0gRXZlbnRRdWV1ZS5saXN0LCBsID0gbHMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgICAgaWYgKGxzW2ldID09IGhlKSByZXR1cm4gbHNbaSArIDFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSxcbiAgICAgIG1pbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbGVtID0gRXZlbnRRdWV1ZS5saXN0WzBdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IGVsZW0udmVydGV4LngsXG4gICAgICAgICAgeTogZWxlbS55c3RhclxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGV4dHJhY3RNaW46IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gRXZlbnRRdWV1ZS5saXN0LnNoaWZ0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBFZGdlTGlzdC5pbml0KCk7XG4gICAgU2l0ZXMuYm90dG9tU2l0ZSA9IFNpdGVzLmxpc3Quc2hpZnQoKTtcbiAgICB2YXIgbmV3U2l0ZSA9IFNpdGVzLmxpc3Quc2hpZnQoKSwgbmV3SW50U3RhcjtcbiAgICB2YXIgbGJuZCwgcmJuZCwgbGxibmQsIHJyYm5kLCBiaXNlY3RvcjtcbiAgICB2YXIgYm90LCB0b3AsIHRlbXAsIHAsIHY7XG4gICAgdmFyIGUsIHBtO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAoIUV2ZW50UXVldWUuZW1wdHkoKSkge1xuICAgICAgICBuZXdJbnRTdGFyID0gRXZlbnRRdWV1ZS5taW4oKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdTaXRlICYmIChFdmVudFF1ZXVlLmVtcHR5KCkgfHwgbmV3U2l0ZS55IDwgbmV3SW50U3Rhci55IHx8IG5ld1NpdGUueSA9PSBuZXdJbnRTdGFyLnkgJiYgbmV3U2l0ZS54IDwgbmV3SW50U3Rhci54KSkge1xuICAgICAgICBsYm5kID0gRWRnZUxpc3QubGVmdEJvdW5kKG5ld1NpdGUpO1xuICAgICAgICByYm5kID0gRWRnZUxpc3QucmlnaHQobGJuZCk7XG4gICAgICAgIGJvdCA9IEVkZ2VMaXN0LnJpZ2h0UmVnaW9uKGxibmQpO1xuICAgICAgICBlID0gR2VvbS5iaXNlY3QoYm90LCBuZXdTaXRlKTtcbiAgICAgICAgYmlzZWN0b3IgPSBFZGdlTGlzdC5jcmVhdGVIYWxmRWRnZShlLCBcImxcIik7XG4gICAgICAgIEVkZ2VMaXN0Lmluc2VydChsYm5kLCBiaXNlY3Rvcik7XG4gICAgICAgIHAgPSBHZW9tLmludGVyc2VjdChsYm5kLCBiaXNlY3Rvcik7XG4gICAgICAgIGlmIChwKSB7XG4gICAgICAgICAgRXZlbnRRdWV1ZS5kZWwobGJuZCk7XG4gICAgICAgICAgRXZlbnRRdWV1ZS5pbnNlcnQobGJuZCwgcCwgR2VvbS5kaXN0YW5jZShwLCBuZXdTaXRlKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGJuZCA9IGJpc2VjdG9yO1xuICAgICAgICBiaXNlY3RvciA9IEVkZ2VMaXN0LmNyZWF0ZUhhbGZFZGdlKGUsIFwiclwiKTtcbiAgICAgICAgRWRnZUxpc3QuaW5zZXJ0KGxibmQsIGJpc2VjdG9yKTtcbiAgICAgICAgcCA9IEdlb20uaW50ZXJzZWN0KGJpc2VjdG9yLCByYm5kKTtcbiAgICAgICAgaWYgKHApIHtcbiAgICAgICAgICBFdmVudFF1ZXVlLmluc2VydChiaXNlY3RvciwgcCwgR2VvbS5kaXN0YW5jZShwLCBuZXdTaXRlKSk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3U2l0ZSA9IFNpdGVzLmxpc3Quc2hpZnQoKTtcbiAgICAgIH0gZWxzZSBpZiAoIUV2ZW50UXVldWUuZW1wdHkoKSkge1xuICAgICAgICBsYm5kID0gRXZlbnRRdWV1ZS5leHRyYWN0TWluKCk7XG4gICAgICAgIGxsYm5kID0gRWRnZUxpc3QubGVmdChsYm5kKTtcbiAgICAgICAgcmJuZCA9IEVkZ2VMaXN0LnJpZ2h0KGxibmQpO1xuICAgICAgICBycmJuZCA9IEVkZ2VMaXN0LnJpZ2h0KHJibmQpO1xuICAgICAgICBib3QgPSBFZGdlTGlzdC5sZWZ0UmVnaW9uKGxibmQpO1xuICAgICAgICB0b3AgPSBFZGdlTGlzdC5yaWdodFJlZ2lvbihyYm5kKTtcbiAgICAgICAgdiA9IGxibmQudmVydGV4O1xuICAgICAgICBHZW9tLmVuZFBvaW50KGxibmQuZWRnZSwgbGJuZC5zaWRlLCB2KTtcbiAgICAgICAgR2VvbS5lbmRQb2ludChyYm5kLmVkZ2UsIHJibmQuc2lkZSwgdik7XG4gICAgICAgIEVkZ2VMaXN0LmRlbChsYm5kKTtcbiAgICAgICAgRXZlbnRRdWV1ZS5kZWwocmJuZCk7XG4gICAgICAgIEVkZ2VMaXN0LmRlbChyYm5kKTtcbiAgICAgICAgcG0gPSBcImxcIjtcbiAgICAgICAgaWYgKGJvdC55ID4gdG9wLnkpIHtcbiAgICAgICAgICB0ZW1wID0gYm90O1xuICAgICAgICAgIGJvdCA9IHRvcDtcbiAgICAgICAgICB0b3AgPSB0ZW1wO1xuICAgICAgICAgIHBtID0gXCJyXCI7XG4gICAgICAgIH1cbiAgICAgICAgZSA9IEdlb20uYmlzZWN0KGJvdCwgdG9wKTtcbiAgICAgICAgYmlzZWN0b3IgPSBFZGdlTGlzdC5jcmVhdGVIYWxmRWRnZShlLCBwbSk7XG4gICAgICAgIEVkZ2VMaXN0Lmluc2VydChsbGJuZCwgYmlzZWN0b3IpO1xuICAgICAgICBHZW9tLmVuZFBvaW50KGUsIGQzX2dlb21fdm9yb25vaU9wcG9zaXRlW3BtXSwgdik7XG4gICAgICAgIHAgPSBHZW9tLmludGVyc2VjdChsbGJuZCwgYmlzZWN0b3IpO1xuICAgICAgICBpZiAocCkge1xuICAgICAgICAgIEV2ZW50UXVldWUuZGVsKGxsYm5kKTtcbiAgICAgICAgICBFdmVudFF1ZXVlLmluc2VydChsbGJuZCwgcCwgR2VvbS5kaXN0YW5jZShwLCBib3QpKTtcbiAgICAgICAgfVxuICAgICAgICBwID0gR2VvbS5pbnRlcnNlY3QoYmlzZWN0b3IsIHJyYm5kKTtcbiAgICAgICAgaWYgKHApIHtcbiAgICAgICAgICBFdmVudFF1ZXVlLmluc2VydChiaXNlY3RvciwgcCwgR2VvbS5kaXN0YW5jZShwLCBib3QpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGJuZCA9IEVkZ2VMaXN0LnJpZ2h0KEVkZ2VMaXN0LmxlZnRFbmQpOyBsYm5kICE9IEVkZ2VMaXN0LnJpZ2h0RW5kOyBsYm5kID0gRWRnZUxpc3QucmlnaHQobGJuZCkpIHtcbiAgICAgIGNhbGxiYWNrKGxibmQuZWRnZSk7XG4gICAgfVxuICB9XG4gIGQzLmdlb20ucXVhZHRyZWUgPSBmdW5jdGlvbihwb2ludHMsIHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgdmFyIHggPSBkM19zdmdfbGluZVgsIHkgPSBkM19zdmdfbGluZVksIGNvbXBhdDtcbiAgICBpZiAoY29tcGF0ID0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgeCA9IGQzX2dlb21fcXVhZHRyZWVDb21wYXRYO1xuICAgICAgeSA9IGQzX2dlb21fcXVhZHRyZWVDb21wYXRZO1xuICAgICAgaWYgKGNvbXBhdCA9PT0gMykge1xuICAgICAgICB5MiA9IHkxO1xuICAgICAgICB4MiA9IHgxO1xuICAgICAgICB5MSA9IHgxID0gMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBxdWFkdHJlZShwb2ludHMpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBxdWFkdHJlZShkYXRhKSB7XG4gICAgICB2YXIgZCwgZnggPSBkM19mdW5jdG9yKHgpLCBmeSA9IGQzX2Z1bmN0b3IoeSksIHhzLCB5cywgaSwgbiwgeDFfLCB5MV8sIHgyXywgeTJfO1xuICAgICAgaWYgKHgxICE9IG51bGwpIHtcbiAgICAgICAgeDFfID0geDEsIHkxXyA9IHkxLCB4Ml8gPSB4MiwgeTJfID0geTI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4Ml8gPSB5Ml8gPSAtKHgxXyA9IHkxXyA9IEluZmluaXR5KTtcbiAgICAgICAgeHMgPSBbXSwgeXMgPSBbXTtcbiAgICAgICAgbiA9IGRhdGEubGVuZ3RoO1xuICAgICAgICBpZiAoY29tcGF0KSBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgZCA9IGRhdGFbaV07XG4gICAgICAgICAgaWYgKGQueCA8IHgxXykgeDFfID0gZC54O1xuICAgICAgICAgIGlmIChkLnkgPCB5MV8pIHkxXyA9IGQueTtcbiAgICAgICAgICBpZiAoZC54ID4geDJfKSB4Ml8gPSBkLng7XG4gICAgICAgICAgaWYgKGQueSA+IHkyXykgeTJfID0gZC55O1xuICAgICAgICAgIHhzLnB1c2goZC54KTtcbiAgICAgICAgICB5cy5wdXNoKGQueSk7XG4gICAgICAgIH0gZWxzZSBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgdmFyIHhfID0gK2Z4KGQgPSBkYXRhW2ldLCBpKSwgeV8gPSArZnkoZCwgaSk7XG4gICAgICAgICAgaWYgKHhfIDwgeDFfKSB4MV8gPSB4XztcbiAgICAgICAgICBpZiAoeV8gPCB5MV8pIHkxXyA9IHlfO1xuICAgICAgICAgIGlmICh4XyA+IHgyXykgeDJfID0geF87XG4gICAgICAgICAgaWYgKHlfID4geTJfKSB5Ml8gPSB5XztcbiAgICAgICAgICB4cy5wdXNoKHhfKTtcbiAgICAgICAgICB5cy5wdXNoKHlfKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGR4ID0geDJfIC0geDFfLCBkeSA9IHkyXyAtIHkxXztcbiAgICAgIGlmIChkeCA+IGR5KSB5Ml8gPSB5MV8gKyBkeDsgZWxzZSB4Ml8gPSB4MV8gKyBkeTtcbiAgICAgIGZ1bmN0aW9uIGluc2VydChuLCBkLCB4LCB5LCB4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICBpZiAoaXNOYU4oeCkgfHwgaXNOYU4oeSkpIHJldHVybjtcbiAgICAgICAgaWYgKG4ubGVhZikge1xuICAgICAgICAgIHZhciBueCA9IG4ueCwgbnkgPSBuLnk7XG4gICAgICAgICAgaWYgKG54ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhueCAtIHgpICsgTWF0aC5hYnMobnkgLSB5KSA8IC4wMSkge1xuICAgICAgICAgICAgICBpbnNlcnRDaGlsZChuLCBkLCB4LCB5LCB4MSwgeTEsIHgyLCB5Mik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgblBvaW50ID0gbi5wb2ludDtcbiAgICAgICAgICAgICAgbi54ID0gbi55ID0gbi5wb2ludCA9IG51bGw7XG4gICAgICAgICAgICAgIGluc2VydENoaWxkKG4sIG5Qb2ludCwgbngsIG55LCB4MSwgeTEsIHgyLCB5Mik7XG4gICAgICAgICAgICAgIGluc2VydENoaWxkKG4sIGQsIHgsIHksIHgxLCB5MSwgeDIsIHkyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbi54ID0geCwgbi55ID0geSwgbi5wb2ludCA9IGQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGluc2VydENoaWxkKG4sIGQsIHgsIHksIHgxLCB5MSwgeDIsIHkyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gaW5zZXJ0Q2hpbGQobiwgZCwgeCwgeSwgeDEsIHkxLCB4MiwgeTIpIHtcbiAgICAgICAgdmFyIHN4ID0gKHgxICsgeDIpICogLjUsIHN5ID0gKHkxICsgeTIpICogLjUsIHJpZ2h0ID0geCA+PSBzeCwgYm90dG9tID0geSA+PSBzeSwgaSA9IChib3R0b20gPDwgMSkgKyByaWdodDtcbiAgICAgICAgbi5sZWFmID0gZmFsc2U7XG4gICAgICAgIG4gPSBuLm5vZGVzW2ldIHx8IChuLm5vZGVzW2ldID0gZDNfZ2VvbV9xdWFkdHJlZU5vZGUoKSk7XG4gICAgICAgIGlmIChyaWdodCkgeDEgPSBzeDsgZWxzZSB4MiA9IHN4O1xuICAgICAgICBpZiAoYm90dG9tKSB5MSA9IHN5OyBlbHNlIHkyID0gc3k7XG4gICAgICAgIGluc2VydChuLCBkLCB4LCB5LCB4MSwgeTEsIHgyLCB5Mik7XG4gICAgICB9XG4gICAgICB2YXIgcm9vdCA9IGQzX2dlb21fcXVhZHRyZWVOb2RlKCk7XG4gICAgICByb290LmFkZCA9IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgaW5zZXJ0KHJvb3QsIGQsICtmeChkLCArK2kpLCArZnkoZCwgaSksIHgxXywgeTFfLCB4Ml8sIHkyXyk7XG4gICAgICB9O1xuICAgICAgcm9vdC52aXNpdCA9IGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgZDNfZ2VvbV9xdWFkdHJlZVZpc2l0KGYsIHJvb3QsIHgxXywgeTFfLCB4Ml8sIHkyXyk7XG4gICAgICB9O1xuICAgICAgaSA9IC0xO1xuICAgICAgaWYgKHgxID09IG51bGwpIHtcbiAgICAgICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgICAgICBpbnNlcnQocm9vdCwgZGF0YVtpXSwgeHNbaV0sIHlzW2ldLCB4MV8sIHkxXywgeDJfLCB5Ml8pO1xuICAgICAgICB9XG4gICAgICAgIC0taTtcbiAgICAgIH0gZWxzZSBkYXRhLmZvckVhY2gocm9vdC5hZGQpO1xuICAgICAgeHMgPSB5cyA9IGRhdGEgPSBkID0gbnVsbDtcbiAgICAgIHJldHVybiByb290O1xuICAgIH1cbiAgICBxdWFkdHJlZS54ID0gZnVuY3Rpb24oXykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeCA9IF8sIHF1YWR0cmVlKSA6IHg7XG4gICAgfTtcbiAgICBxdWFkdHJlZS55ID0gZnVuY3Rpb24oXykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeSA9IF8sIHF1YWR0cmVlKSA6IHk7XG4gICAgfTtcbiAgICBxdWFkdHJlZS5leHRlbnQgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB4MSA9PSBudWxsID8gbnVsbCA6IFsgWyB4MSwgeTEgXSwgWyB4MiwgeTIgXSBdO1xuICAgICAgaWYgKF8gPT0gbnVsbCkgeDEgPSB5MSA9IHgyID0geTIgPSBudWxsOyBlbHNlIHgxID0gK19bMF1bMF0sIHkxID0gK19bMF1bMV0sIHgyID0gK19bMV1bMF0sIFxuICAgICAgeTIgPSArX1sxXVsxXTtcbiAgICAgIHJldHVybiBxdWFkdHJlZTtcbiAgICB9O1xuICAgIHF1YWR0cmVlLnNpemUgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB4MSA9PSBudWxsID8gbnVsbCA6IFsgeDIgLSB4MSwgeTIgLSB5MSBdO1xuICAgICAgaWYgKF8gPT0gbnVsbCkgeDEgPSB5MSA9IHgyID0geTIgPSBudWxsOyBlbHNlIHgxID0geTEgPSAwLCB4MiA9ICtfWzBdLCB5MiA9ICtfWzFdO1xuICAgICAgcmV0dXJuIHF1YWR0cmVlO1xuICAgIH07XG4gICAgcmV0dXJuIHF1YWR0cmVlO1xuICB9O1xuICBmdW5jdGlvbiBkM19nZW9tX3F1YWR0cmVlQ29tcGF0WChkKSB7XG4gICAgcmV0dXJuIGQueDtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9tX3F1YWR0cmVlQ29tcGF0WShkKSB7XG4gICAgcmV0dXJuIGQueTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9tX3F1YWR0cmVlTm9kZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGVhZjogdHJ1ZSxcbiAgICAgIG5vZGVzOiBbXSxcbiAgICAgIHBvaW50OiBudWxsLFxuICAgICAgeDogbnVsbCxcbiAgICAgIHk6IG51bGxcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb21fcXVhZHRyZWVWaXNpdChmLCBub2RlLCB4MSwgeTEsIHgyLCB5Mikge1xuICAgIGlmICghZihub2RlLCB4MSwgeTEsIHgyLCB5MikpIHtcbiAgICAgIHZhciBzeCA9ICh4MSArIHgyKSAqIC41LCBzeSA9ICh5MSArIHkyKSAqIC41LCBjaGlsZHJlbiA9IG5vZGUubm9kZXM7XG4gICAgICBpZiAoY2hpbGRyZW5bMF0pIGQzX2dlb21fcXVhZHRyZWVWaXNpdChmLCBjaGlsZHJlblswXSwgeDEsIHkxLCBzeCwgc3kpO1xuICAgICAgaWYgKGNoaWxkcmVuWzFdKSBkM19nZW9tX3F1YWR0cmVlVmlzaXQoZiwgY2hpbGRyZW5bMV0sIHN4LCB5MSwgeDIsIHN5KTtcbiAgICAgIGlmIChjaGlsZHJlblsyXSkgZDNfZ2VvbV9xdWFkdHJlZVZpc2l0KGYsIGNoaWxkcmVuWzJdLCB4MSwgc3ksIHN4LCB5Mik7XG4gICAgICBpZiAoY2hpbGRyZW5bM10pIGQzX2dlb21fcXVhZHRyZWVWaXNpdChmLCBjaGlsZHJlblszXSwgc3gsIHN5LCB4MiwgeTIpO1xuICAgIH1cbiAgfVxuICBkMy5pbnRlcnBvbGF0ZVJnYiA9IGQzX2ludGVycG9sYXRlUmdiO1xuICBmdW5jdGlvbiBkM19pbnRlcnBvbGF0ZVJnYihhLCBiKSB7XG4gICAgYSA9IGQzLnJnYihhKTtcbiAgICBiID0gZDMucmdiKGIpO1xuICAgIHZhciBhciA9IGEuciwgYWcgPSBhLmcsIGFiID0gYS5iLCBiciA9IGIuciAtIGFyLCBiZyA9IGIuZyAtIGFnLCBiYiA9IGIuYiAtIGFiO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gXCIjXCIgKyBkM19yZ2JfaGV4KE1hdGgucm91bmQoYXIgKyBiciAqIHQpKSArIGQzX3JnYl9oZXgoTWF0aC5yb3VuZChhZyArIGJnICogdCkpICsgZDNfcmdiX2hleChNYXRoLnJvdW5kKGFiICsgYmIgKiB0KSk7XG4gICAgfTtcbiAgfVxuICBkMy5pbnRlcnBvbGF0ZU9iamVjdCA9IGQzX2ludGVycG9sYXRlT2JqZWN0O1xuICBmdW5jdGlvbiBkM19pbnRlcnBvbGF0ZU9iamVjdChhLCBiKSB7XG4gICAgdmFyIGkgPSB7fSwgYyA9IHt9LCBrO1xuICAgIGZvciAoayBpbiBhKSB7XG4gICAgICBpZiAoayBpbiBiKSB7XG4gICAgICAgIGlba10gPSBkM19pbnRlcnBvbGF0ZShhW2tdLCBiW2tdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNba10gPSBhW2tdO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGsgaW4gYikge1xuICAgICAgaWYgKCEoayBpbiBhKSkge1xuICAgICAgICBjW2tdID0gYltrXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIGZvciAoayBpbiBpKSBjW2tdID0gaVtrXSh0KTtcbiAgICAgIHJldHVybiBjO1xuICAgIH07XG4gIH1cbiAgZDMuaW50ZXJwb2xhdGVOdW1iZXIgPSBkM19pbnRlcnBvbGF0ZU51bWJlcjtcbiAgZnVuY3Rpb24gZDNfaW50ZXJwb2xhdGVOdW1iZXIoYSwgYikge1xuICAgIGIgLT0gYSA9ICthO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gYSArIGIgKiB0O1xuICAgIH07XG4gIH1cbiAgZDMuaW50ZXJwb2xhdGVTdHJpbmcgPSBkM19pbnRlcnBvbGF0ZVN0cmluZztcbiAgZnVuY3Rpb24gZDNfaW50ZXJwb2xhdGVTdHJpbmcoYSwgYikge1xuICAgIHZhciBtLCBpLCBqLCBzMCA9IDAsIHMxID0gMCwgcyA9IFtdLCBxID0gW10sIG4sIG87XG4gICAgYSA9IGEgKyBcIlwiLCBiID0gYiArIFwiXCI7XG4gICAgZDNfaW50ZXJwb2xhdGVfbnVtYmVyLmxhc3RJbmRleCA9IDA7XG4gICAgZm9yIChpID0gMDsgbSA9IGQzX2ludGVycG9sYXRlX251bWJlci5leGVjKGIpOyArK2kpIHtcbiAgICAgIGlmIChtLmluZGV4KSBzLnB1c2goYi5zdWJzdHJpbmcoczAsIHMxID0gbS5pbmRleCkpO1xuICAgICAgcS5wdXNoKHtcbiAgICAgICAgaTogcy5sZW5ndGgsXG4gICAgICAgIHg6IG1bMF1cbiAgICAgIH0pO1xuICAgICAgcy5wdXNoKG51bGwpO1xuICAgICAgczAgPSBkM19pbnRlcnBvbGF0ZV9udW1iZXIubGFzdEluZGV4O1xuICAgIH1cbiAgICBpZiAoczAgPCBiLmxlbmd0aCkgcy5wdXNoKGIuc3Vic3RyaW5nKHMwKSk7XG4gICAgZm9yIChpID0gMCwgbiA9IHEubGVuZ3RoOyAobSA9IGQzX2ludGVycG9sYXRlX251bWJlci5leGVjKGEpKSAmJiBpIDwgbjsgKytpKSB7XG4gICAgICBvID0gcVtpXTtcbiAgICAgIGlmIChvLnggPT0gbVswXSkge1xuICAgICAgICBpZiAoby5pKSB7XG4gICAgICAgICAgaWYgKHNbby5pICsgMV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgc1tvLmkgLSAxXSArPSBvLng7XG4gICAgICAgICAgICBzLnNwbGljZShvLmksIDEpO1xuICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBuOyArK2opIHFbal0uaS0tO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzW28uaSAtIDFdICs9IG8ueCArIHNbby5pICsgMV07XG4gICAgICAgICAgICBzLnNwbGljZShvLmksIDIpO1xuICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBuOyArK2opIHFbal0uaSAtPSAyO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc1tvLmkgKyAxXSA9PSBudWxsKSB7XG4gICAgICAgICAgICBzW28uaV0gPSBvLng7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNbby5pXSA9IG8ueCArIHNbby5pICsgMV07XG4gICAgICAgICAgICBzLnNwbGljZShvLmkgKyAxLCAxKTtcbiAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgbjsgKytqKSBxW2pdLmktLTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIG4tLTtcbiAgICAgICAgaS0tO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgby54ID0gZDNfaW50ZXJwb2xhdGVOdW1iZXIocGFyc2VGbG9hdChtWzBdKSwgcGFyc2VGbG9hdChvLngpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgd2hpbGUgKGkgPCBuKSB7XG4gICAgICBvID0gcS5wb3AoKTtcbiAgICAgIGlmIChzW28uaSArIDFdID09IG51bGwpIHtcbiAgICAgICAgc1tvLmldID0gby54O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc1tvLmldID0gby54ICsgc1tvLmkgKyAxXTtcbiAgICAgICAgcy5zcGxpY2Uoby5pICsgMSwgMSk7XG4gICAgICB9XG4gICAgICBuLS07XG4gICAgfVxuICAgIGlmIChzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHNbMF0gPT0gbnVsbCA/IChvID0gcVswXS54LCBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiBvKHQpICsgXCJcIjtcbiAgICAgIH0pIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBiO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHNbKG8gPSBxW2ldKS5pXSA9IG8ueCh0KTtcbiAgICAgIHJldHVybiBzLmpvaW4oXCJcIik7XG4gICAgfTtcbiAgfVxuICB2YXIgZDNfaW50ZXJwb2xhdGVfbnVtYmVyID0gL1stK10/KD86XFxkK1xcLj9cXGQqfFxcLj9cXGQrKSg/OltlRV1bLStdP1xcZCspPy9nO1xuICBkMy5pbnRlcnBvbGF0ZSA9IGQzX2ludGVycG9sYXRlO1xuICBmdW5jdGlvbiBkM19pbnRlcnBvbGF0ZShhLCBiKSB7XG4gICAgdmFyIGkgPSBkMy5pbnRlcnBvbGF0b3JzLmxlbmd0aCwgZjtcbiAgICB3aGlsZSAoLS1pID49IDAgJiYgIShmID0gZDMuaW50ZXJwb2xhdG9yc1tpXShhLCBiKSkpIDtcbiAgICByZXR1cm4gZjtcbiAgfVxuICBkMy5pbnRlcnBvbGF0b3JzID0gWyBmdW5jdGlvbihhLCBiKSB7XG4gICAgdmFyIHQgPSB0eXBlb2YgYjtcbiAgICByZXR1cm4gKHQgPT09IFwic3RyaW5nXCIgPyBkM19yZ2JfbmFtZXMuaGFzKGIpIHx8IC9eKCN8cmdiXFwofGhzbFxcKCkvLnRlc3QoYikgPyBkM19pbnRlcnBvbGF0ZVJnYiA6IGQzX2ludGVycG9sYXRlU3RyaW5nIDogYiBpbnN0YW5jZW9mIGQzX0NvbG9yID8gZDNfaW50ZXJwb2xhdGVSZ2IgOiB0ID09PSBcIm9iamVjdFwiID8gQXJyYXkuaXNBcnJheShiKSA/IGQzX2ludGVycG9sYXRlQXJyYXkgOiBkM19pbnRlcnBvbGF0ZU9iamVjdCA6IGQzX2ludGVycG9sYXRlTnVtYmVyKShhLCBiKTtcbiAgfSBdO1xuICBkMy5pbnRlcnBvbGF0ZUFycmF5ID0gZDNfaW50ZXJwb2xhdGVBcnJheTtcbiAgZnVuY3Rpb24gZDNfaW50ZXJwb2xhdGVBcnJheShhLCBiKSB7XG4gICAgdmFyIHggPSBbXSwgYyA9IFtdLCBuYSA9IGEubGVuZ3RoLCBuYiA9IGIubGVuZ3RoLCBuMCA9IE1hdGgubWluKGEubGVuZ3RoLCBiLmxlbmd0aCksIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IG4wOyArK2kpIHgucHVzaChkM19pbnRlcnBvbGF0ZShhW2ldLCBiW2ldKSk7XG4gICAgZm9yICg7aSA8IG5hOyArK2kpIGNbaV0gPSBhW2ldO1xuICAgIGZvciAoO2kgPCBuYjsgKytpKSBjW2ldID0gYltpXTtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IG4wOyArK2kpIGNbaV0gPSB4W2ldKHQpO1xuICAgICAgcmV0dXJuIGM7XG4gICAgfTtcbiAgfVxuICB2YXIgZDNfZWFzZV9kZWZhdWx0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzX2lkZW50aXR5O1xuICB9O1xuICB2YXIgZDNfZWFzZSA9IGQzLm1hcCh7XG4gICAgbGluZWFyOiBkM19lYXNlX2RlZmF1bHQsXG4gICAgcG9seTogZDNfZWFzZV9wb2x5LFxuICAgIHF1YWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGQzX2Vhc2VfcXVhZDtcbiAgICB9LFxuICAgIGN1YmljOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBkM19lYXNlX2N1YmljO1xuICAgIH0sXG4gICAgc2luOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBkM19lYXNlX3NpbjtcbiAgICB9LFxuICAgIGV4cDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZDNfZWFzZV9leHA7XG4gICAgfSxcbiAgICBjaXJjbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGQzX2Vhc2VfY2lyY2xlO1xuICAgIH0sXG4gICAgZWxhc3RpYzogZDNfZWFzZV9lbGFzdGljLFxuICAgIGJhY2s6IGQzX2Vhc2VfYmFjayxcbiAgICBib3VuY2U6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGQzX2Vhc2VfYm91bmNlO1xuICAgIH1cbiAgfSk7XG4gIHZhciBkM19lYXNlX21vZGUgPSBkMy5tYXAoe1xuICAgIFwiaW5cIjogZDNfaWRlbnRpdHksXG4gICAgb3V0OiBkM19lYXNlX3JldmVyc2UsXG4gICAgXCJpbi1vdXRcIjogZDNfZWFzZV9yZWZsZWN0LFxuICAgIFwib3V0LWluXCI6IGZ1bmN0aW9uKGYpIHtcbiAgICAgIHJldHVybiBkM19lYXNlX3JlZmxlY3QoZDNfZWFzZV9yZXZlcnNlKGYpKTtcbiAgICB9XG4gIH0pO1xuICBkMy5lYXNlID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBpID0gbmFtZS5pbmRleE9mKFwiLVwiKSwgdCA9IGkgPj0gMCA/IG5hbWUuc3Vic3RyaW5nKDAsIGkpIDogbmFtZSwgbSA9IGkgPj0gMCA/IG5hbWUuc3Vic3RyaW5nKGkgKyAxKSA6IFwiaW5cIjtcbiAgICB0ID0gZDNfZWFzZS5nZXQodCkgfHwgZDNfZWFzZV9kZWZhdWx0O1xuICAgIG0gPSBkM19lYXNlX21vZGUuZ2V0KG0pIHx8IGQzX2lkZW50aXR5O1xuICAgIHJldHVybiBkM19lYXNlX2NsYW1wKG0odC5hcHBseShudWxsLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKSkpO1xuICB9O1xuICBmdW5jdGlvbiBkM19lYXNlX2NsYW1wKGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgcmV0dXJuIHQgPD0gMCA/IDAgOiB0ID49IDEgPyAxIDogZih0KTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2Vhc2VfcmV2ZXJzZShmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiAxIC0gZigxIC0gdCk7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBkM19lYXNlX3JlZmxlY3QoZikge1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gLjUgKiAodCA8IC41ID8gZigyICogdCkgOiAyIC0gZigyIC0gMiAqIHQpKTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2Vhc2VfcXVhZCh0KSB7XG4gICAgcmV0dXJuIHQgKiB0O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2Vhc2VfY3ViaWModCkge1xuICAgIHJldHVybiB0ICogdCAqIHQ7XG4gIH1cbiAgZnVuY3Rpb24gZDNfZWFzZV9jdWJpY0luT3V0KHQpIHtcbiAgICBpZiAodCA8PSAwKSByZXR1cm4gMDtcbiAgICBpZiAodCA+PSAxKSByZXR1cm4gMTtcbiAgICB2YXIgdDIgPSB0ICogdCwgdDMgPSB0MiAqIHQ7XG4gICAgcmV0dXJuIDQgKiAodCA8IC41ID8gdDMgOiAzICogKHQgLSB0MikgKyB0MyAtIC43NSk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfZWFzZV9wb2x5KGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgcmV0dXJuIE1hdGgucG93KHQsIGUpO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZDNfZWFzZV9zaW4odCkge1xuICAgIHJldHVybiAxIC0gTWF0aC5jb3ModCAqIM+AIC8gMik7XG4gIH1cbiAgZnVuY3Rpb24gZDNfZWFzZV9leHAodCkge1xuICAgIHJldHVybiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2Vhc2VfY2lyY2xlKHQpIHtcbiAgICByZXR1cm4gMSAtIE1hdGguc3FydCgxIC0gdCAqIHQpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2Vhc2VfZWxhc3RpYyhhLCBwKSB7XG4gICAgdmFyIHM7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSBwID0gLjQ1O1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSBzID0gcCAvICgyICogz4ApICogTWF0aC5hc2luKDEgLyBhKTsgZWxzZSBhID0gMSwgcyA9IHAgLyA0O1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gMSArIGEgKiBNYXRoLnBvdygyLCAxMCAqIC10KSAqIE1hdGguc2luKCh0IC0gcykgKiAyICogz4AgLyBwKTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2Vhc2VfYmFjayhzKSB7XG4gICAgaWYgKCFzKSBzID0gMS43MDE1ODtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgcmV0dXJuIHQgKiB0ICogKChzICsgMSkgKiB0IC0gcyk7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBkM19lYXNlX2JvdW5jZSh0KSB7XG4gICAgcmV0dXJuIHQgPCAxIC8gMi43NSA/IDcuNTYyNSAqIHQgKiB0IDogdCA8IDIgLyAyLjc1ID8gNy41NjI1ICogKHQgLT0gMS41IC8gMi43NSkgKiB0ICsgLjc1IDogdCA8IDIuNSAvIDIuNzUgPyA3LjU2MjUgKiAodCAtPSAyLjI1IC8gMi43NSkgKiB0ICsgLjkzNzUgOiA3LjU2MjUgKiAodCAtPSAyLjYyNSAvIDIuNzUpICogdCArIC45ODQzNzU7XG4gIH1cbiAgZDMuaW50ZXJwb2xhdGVIY2wgPSBkM19pbnRlcnBvbGF0ZUhjbDtcbiAgZnVuY3Rpb24gZDNfaW50ZXJwb2xhdGVIY2woYSwgYikge1xuICAgIGEgPSBkMy5oY2woYSk7XG4gICAgYiA9IGQzLmhjbChiKTtcbiAgICB2YXIgYWggPSBhLmgsIGFjID0gYS5jLCBhbCA9IGEubCwgYmggPSBiLmggLSBhaCwgYmMgPSBiLmMgLSBhYywgYmwgPSBiLmwgLSBhbDtcbiAgICBpZiAoaXNOYU4oYmMpKSBiYyA9IDAsIGFjID0gaXNOYU4oYWMpID8gYi5jIDogYWM7XG4gICAgaWYgKGlzTmFOKGJoKSkgYmggPSAwLCBhaCA9IGlzTmFOKGFoKSA/IGIuaCA6IGFoOyBlbHNlIGlmIChiaCA+IDE4MCkgYmggLT0gMzYwOyBlbHNlIGlmIChiaCA8IC0xODApIGJoICs9IDM2MDtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgcmV0dXJuIGQzX2hjbF9sYWIoYWggKyBiaCAqIHQsIGFjICsgYmMgKiB0LCBhbCArIGJsICogdCkgKyBcIlwiO1xuICAgIH07XG4gIH1cbiAgZDMuaW50ZXJwb2xhdGVIc2wgPSBkM19pbnRlcnBvbGF0ZUhzbDtcbiAgZnVuY3Rpb24gZDNfaW50ZXJwb2xhdGVIc2woYSwgYikge1xuICAgIGEgPSBkMy5oc2woYSk7XG4gICAgYiA9IGQzLmhzbChiKTtcbiAgICB2YXIgYWggPSBhLmgsIGFzID0gYS5zLCBhbCA9IGEubCwgYmggPSBiLmggLSBhaCwgYnMgPSBiLnMgLSBhcywgYmwgPSBiLmwgLSBhbDtcbiAgICBpZiAoaXNOYU4oYnMpKSBicyA9IDAsIGFzID0gaXNOYU4oYXMpID8gYi5zIDogYXM7XG4gICAgaWYgKGlzTmFOKGJoKSkgYmggPSAwLCBhaCA9IGlzTmFOKGFoKSA/IGIuaCA6IGFoOyBlbHNlIGlmIChiaCA+IDE4MCkgYmggLT0gMzYwOyBlbHNlIGlmIChiaCA8IC0xODApIGJoICs9IDM2MDtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgcmV0dXJuIGQzX2hzbF9yZ2IoYWggKyBiaCAqIHQsIGFzICsgYnMgKiB0LCBhbCArIGJsICogdCkgKyBcIlwiO1xuICAgIH07XG4gIH1cbiAgZDMuaW50ZXJwb2xhdGVMYWIgPSBkM19pbnRlcnBvbGF0ZUxhYjtcbiAgZnVuY3Rpb24gZDNfaW50ZXJwb2xhdGVMYWIoYSwgYikge1xuICAgIGEgPSBkMy5sYWIoYSk7XG4gICAgYiA9IGQzLmxhYihiKTtcbiAgICB2YXIgYWwgPSBhLmwsIGFhID0gYS5hLCBhYiA9IGEuYiwgYmwgPSBiLmwgLSBhbCwgYmEgPSBiLmEgLSBhYSwgYmIgPSBiLmIgLSBhYjtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgcmV0dXJuIGQzX2xhYl9yZ2IoYWwgKyBibCAqIHQsIGFhICsgYmEgKiB0LCBhYiArIGJiICogdCkgKyBcIlwiO1xuICAgIH07XG4gIH1cbiAgZDMuaW50ZXJwb2xhdGVSb3VuZCA9IGQzX2ludGVycG9sYXRlUm91bmQ7XG4gIGZ1bmN0aW9uIGQzX2ludGVycG9sYXRlUm91bmQoYSwgYikge1xuICAgIGIgLT0gYTtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQoYSArIGIgKiB0KTtcbiAgICB9O1xuICB9XG4gIGQzLnRyYW5zZm9ybSA9IGZ1bmN0aW9uKHN0cmluZykge1xuICAgIHZhciBnID0gZDNfZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKGQzLm5zLnByZWZpeC5zdmcsIFwiZ1wiKTtcbiAgICByZXR1cm4gKGQzLnRyYW5zZm9ybSA9IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgaWYgKHN0cmluZyAhPSBudWxsKSB7XG4gICAgICAgIGcuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIHN0cmluZyk7XG4gICAgICAgIHZhciB0ID0gZy50cmFuc2Zvcm0uYmFzZVZhbC5jb25zb2xpZGF0ZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBkM190cmFuc2Zvcm0odCA/IHQubWF0cml4IDogZDNfdHJhbnNmb3JtSWRlbnRpdHkpO1xuICAgIH0pKHN0cmluZyk7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX3RyYW5zZm9ybShtKSB7XG4gICAgdmFyIHIwID0gWyBtLmEsIG0uYiBdLCByMSA9IFsgbS5jLCBtLmQgXSwga3ggPSBkM190cmFuc2Zvcm1Ob3JtYWxpemUocjApLCBreiA9IGQzX3RyYW5zZm9ybURvdChyMCwgcjEpLCBreSA9IGQzX3RyYW5zZm9ybU5vcm1hbGl6ZShkM190cmFuc2Zvcm1Db21iaW5lKHIxLCByMCwgLWt6KSkgfHwgMDtcbiAgICBpZiAocjBbMF0gKiByMVsxXSA8IHIxWzBdICogcjBbMV0pIHtcbiAgICAgIHIwWzBdICo9IC0xO1xuICAgICAgcjBbMV0gKj0gLTE7XG4gICAgICBreCAqPSAtMTtcbiAgICAgIGt6ICo9IC0xO1xuICAgIH1cbiAgICB0aGlzLnJvdGF0ZSA9IChreCA/IE1hdGguYXRhbjIocjBbMV0sIHIwWzBdKSA6IE1hdGguYXRhbjIoLXIxWzBdLCByMVsxXSkpICogZDNfZGVncmVlcztcbiAgICB0aGlzLnRyYW5zbGF0ZSA9IFsgbS5lLCBtLmYgXTtcbiAgICB0aGlzLnNjYWxlID0gWyBreCwga3kgXTtcbiAgICB0aGlzLnNrZXcgPSBreSA/IE1hdGguYXRhbjIoa3osIGt5KSAqIGQzX2RlZ3JlZXMgOiAwO1xuICB9XG4gIGQzX3RyYW5zZm9ybS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLnRyYW5zbGF0ZSArIFwiKXJvdGF0ZShcIiArIHRoaXMucm90YXRlICsgXCIpc2tld1goXCIgKyB0aGlzLnNrZXcgKyBcIilzY2FsZShcIiArIHRoaXMuc2NhbGUgKyBcIilcIjtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfdHJhbnNmb3JtRG90KGEsIGIpIHtcbiAgICByZXR1cm4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXTtcbiAgfVxuICBmdW5jdGlvbiBkM190cmFuc2Zvcm1Ob3JtYWxpemUoYSkge1xuICAgIHZhciBrID0gTWF0aC5zcXJ0KGQzX3RyYW5zZm9ybURvdChhLCBhKSk7XG4gICAgaWYgKGspIHtcbiAgICAgIGFbMF0gLz0gaztcbiAgICAgIGFbMV0gLz0gaztcbiAgICB9XG4gICAgcmV0dXJuIGs7XG4gIH1cbiAgZnVuY3Rpb24gZDNfdHJhbnNmb3JtQ29tYmluZShhLCBiLCBrKSB7XG4gICAgYVswXSArPSBrICogYlswXTtcbiAgICBhWzFdICs9IGsgKiBiWzFdO1xuICAgIHJldHVybiBhO1xuICB9XG4gIHZhciBkM190cmFuc2Zvcm1JZGVudGl0eSA9IHtcbiAgICBhOiAxLFxuICAgIGI6IDAsXG4gICAgYzogMCxcbiAgICBkOiAxLFxuICAgIGU6IDAsXG4gICAgZjogMFxuICB9O1xuICBkMy5pbnRlcnBvbGF0ZVRyYW5zZm9ybSA9IGQzX2ludGVycG9sYXRlVHJhbnNmb3JtO1xuICBmdW5jdGlvbiBkM19pbnRlcnBvbGF0ZVRyYW5zZm9ybShhLCBiKSB7XG4gICAgdmFyIHMgPSBbXSwgcSA9IFtdLCBuLCBBID0gZDMudHJhbnNmb3JtKGEpLCBCID0gZDMudHJhbnNmb3JtKGIpLCB0YSA9IEEudHJhbnNsYXRlLCB0YiA9IEIudHJhbnNsYXRlLCByYSA9IEEucm90YXRlLCByYiA9IEIucm90YXRlLCB3YSA9IEEuc2tldywgd2IgPSBCLnNrZXcsIGthID0gQS5zY2FsZSwga2IgPSBCLnNjYWxlO1xuICAgIGlmICh0YVswXSAhPSB0YlswXSB8fCB0YVsxXSAhPSB0YlsxXSkge1xuICAgICAgcy5wdXNoKFwidHJhbnNsYXRlKFwiLCBudWxsLCBcIixcIiwgbnVsbCwgXCIpXCIpO1xuICAgICAgcS5wdXNoKHtcbiAgICAgICAgaTogMSxcbiAgICAgICAgeDogZDNfaW50ZXJwb2xhdGVOdW1iZXIodGFbMF0sIHRiWzBdKVxuICAgICAgfSwge1xuICAgICAgICBpOiAzLFxuICAgICAgICB4OiBkM19pbnRlcnBvbGF0ZU51bWJlcih0YVsxXSwgdGJbMV0pXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRiWzBdIHx8IHRiWzFdKSB7XG4gICAgICBzLnB1c2goXCJ0cmFuc2xhdGUoXCIgKyB0YiArIFwiKVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcy5wdXNoKFwiXCIpO1xuICAgIH1cbiAgICBpZiAocmEgIT0gcmIpIHtcbiAgICAgIGlmIChyYSAtIHJiID4gMTgwKSByYiArPSAzNjA7IGVsc2UgaWYgKHJiIC0gcmEgPiAxODApIHJhICs9IDM2MDtcbiAgICAgIHEucHVzaCh7XG4gICAgICAgIGk6IHMucHVzaChzLnBvcCgpICsgXCJyb3RhdGUoXCIsIG51bGwsIFwiKVwiKSAtIDIsXG4gICAgICAgIHg6IGQzX2ludGVycG9sYXRlTnVtYmVyKHJhLCByYilcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocmIpIHtcbiAgICAgIHMucHVzaChzLnBvcCgpICsgXCJyb3RhdGUoXCIgKyByYiArIFwiKVwiKTtcbiAgICB9XG4gICAgaWYgKHdhICE9IHdiKSB7XG4gICAgICBxLnB1c2goe1xuICAgICAgICBpOiBzLnB1c2gocy5wb3AoKSArIFwic2tld1goXCIsIG51bGwsIFwiKVwiKSAtIDIsXG4gICAgICAgIHg6IGQzX2ludGVycG9sYXRlTnVtYmVyKHdhLCB3YilcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAod2IpIHtcbiAgICAgIHMucHVzaChzLnBvcCgpICsgXCJza2V3WChcIiArIHdiICsgXCIpXCIpO1xuICAgIH1cbiAgICBpZiAoa2FbMF0gIT0ga2JbMF0gfHwga2FbMV0gIT0ga2JbMV0pIHtcbiAgICAgIG4gPSBzLnB1c2gocy5wb3AoKSArIFwic2NhbGUoXCIsIG51bGwsIFwiLFwiLCBudWxsLCBcIilcIik7XG4gICAgICBxLnB1c2goe1xuICAgICAgICBpOiBuIC0gNCxcbiAgICAgICAgeDogZDNfaW50ZXJwb2xhdGVOdW1iZXIoa2FbMF0sIGtiWzBdKVxuICAgICAgfSwge1xuICAgICAgICBpOiBuIC0gMixcbiAgICAgICAgeDogZDNfaW50ZXJwb2xhdGVOdW1iZXIoa2FbMV0sIGtiWzFdKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChrYlswXSAhPSAxIHx8IGtiWzFdICE9IDEpIHtcbiAgICAgIHMucHVzaChzLnBvcCgpICsgXCJzY2FsZShcIiArIGtiICsgXCIpXCIpO1xuICAgIH1cbiAgICBuID0gcS5sZW5ndGg7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHZhciBpID0gLTEsIG87XG4gICAgICB3aGlsZSAoKytpIDwgbikgc1sobyA9IHFbaV0pLmldID0gby54KHQpO1xuICAgICAgcmV0dXJuIHMuam9pbihcIlwiKTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGQzX3VuaW50ZXJwb2xhdGVOdW1iZXIoYSwgYikge1xuICAgIGIgPSBiIC0gKGEgPSArYSkgPyAxIC8gKGIgLSBhKSA6IDA7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiAoeCAtIGEpICogYjtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGQzX3VuaW50ZXJwb2xhdGVDbGFtcChhLCBiKSB7XG4gICAgYiA9IGIgLSAoYSA9ICthKSA/IDEgLyAoYiAtIGEpIDogMDtcbiAgICByZXR1cm4gZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDEsICh4IC0gYSkgKiBiKSk7XG4gICAgfTtcbiAgfVxuICBkMy5sYXlvdXQgPSB7fTtcbiAgZDMubGF5b3V0LmJ1bmRsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jdGlvbihsaW5rcykge1xuICAgICAgdmFyIHBhdGhzID0gW10sIGkgPSAtMSwgbiA9IGxpbmtzLmxlbmd0aDtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSBwYXRocy5wdXNoKGQzX2xheW91dF9idW5kbGVQYXRoKGxpbmtzW2ldKSk7XG4gICAgICByZXR1cm4gcGF0aHM7XG4gICAgfTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfbGF5b3V0X2J1bmRsZVBhdGgobGluaykge1xuICAgIHZhciBzdGFydCA9IGxpbmsuc291cmNlLCBlbmQgPSBsaW5rLnRhcmdldCwgbGNhID0gZDNfbGF5b3V0X2J1bmRsZUxlYXN0Q29tbW9uQW5jZXN0b3Ioc3RhcnQsIGVuZCksIHBvaW50cyA9IFsgc3RhcnQgXTtcbiAgICB3aGlsZSAoc3RhcnQgIT09IGxjYSkge1xuICAgICAgc3RhcnQgPSBzdGFydC5wYXJlbnQ7XG4gICAgICBwb2ludHMucHVzaChzdGFydCk7XG4gICAgfVxuICAgIHZhciBrID0gcG9pbnRzLmxlbmd0aDtcbiAgICB3aGlsZSAoZW5kICE9PSBsY2EpIHtcbiAgICAgIHBvaW50cy5zcGxpY2UoaywgMCwgZW5kKTtcbiAgICAgIGVuZCA9IGVuZC5wYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiBwb2ludHM7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X2J1bmRsZUFuY2VzdG9ycyhub2RlKSB7XG4gICAgdmFyIGFuY2VzdG9ycyA9IFtdLCBwYXJlbnQgPSBub2RlLnBhcmVudDtcbiAgICB3aGlsZSAocGFyZW50ICE9IG51bGwpIHtcbiAgICAgIGFuY2VzdG9ycy5wdXNoKG5vZGUpO1xuICAgICAgbm9kZSA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgfVxuICAgIGFuY2VzdG9ycy5wdXNoKG5vZGUpO1xuICAgIHJldHVybiBhbmNlc3RvcnM7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X2J1bmRsZUxlYXN0Q29tbW9uQW5jZXN0b3IoYSwgYikge1xuICAgIGlmIChhID09PSBiKSByZXR1cm4gYTtcbiAgICB2YXIgYU5vZGVzID0gZDNfbGF5b3V0X2J1bmRsZUFuY2VzdG9ycyhhKSwgYk5vZGVzID0gZDNfbGF5b3V0X2J1bmRsZUFuY2VzdG9ycyhiKSwgYU5vZGUgPSBhTm9kZXMucG9wKCksIGJOb2RlID0gYk5vZGVzLnBvcCgpLCBzaGFyZWROb2RlID0gbnVsbDtcbiAgICB3aGlsZSAoYU5vZGUgPT09IGJOb2RlKSB7XG4gICAgICBzaGFyZWROb2RlID0gYU5vZGU7XG4gICAgICBhTm9kZSA9IGFOb2Rlcy5wb3AoKTtcbiAgICAgIGJOb2RlID0gYk5vZGVzLnBvcCgpO1xuICAgIH1cbiAgICByZXR1cm4gc2hhcmVkTm9kZTtcbiAgfVxuICBkMy5sYXlvdXQuY2hvcmQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2hvcmQgPSB7fSwgY2hvcmRzLCBncm91cHMsIG1hdHJpeCwgbiwgcGFkZGluZyA9IDAsIHNvcnRHcm91cHMsIHNvcnRTdWJncm91cHMsIHNvcnRDaG9yZHM7XG4gICAgZnVuY3Rpb24gcmVsYXlvdXQoKSB7XG4gICAgICB2YXIgc3ViZ3JvdXBzID0ge30sIGdyb3VwU3VtcyA9IFtdLCBncm91cEluZGV4ID0gZDMucmFuZ2UobiksIHN1Ymdyb3VwSW5kZXggPSBbXSwgaywgeCwgeDAsIGksIGo7XG4gICAgICBjaG9yZHMgPSBbXTtcbiAgICAgIGdyb3VwcyA9IFtdO1xuICAgICAgayA9IDAsIGkgPSAtMTtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICAgIHggPSAwLCBqID0gLTE7XG4gICAgICAgIHdoaWxlICgrK2ogPCBuKSB7XG4gICAgICAgICAgeCArPSBtYXRyaXhbaV1bal07XG4gICAgICAgIH1cbiAgICAgICAgZ3JvdXBTdW1zLnB1c2goeCk7XG4gICAgICAgIHN1Ymdyb3VwSW5kZXgucHVzaChkMy5yYW5nZShuKSk7XG4gICAgICAgIGsgKz0geDtcbiAgICAgIH1cbiAgICAgIGlmIChzb3J0R3JvdXBzKSB7XG4gICAgICAgIGdyb3VwSW5kZXguc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIHNvcnRHcm91cHMoZ3JvdXBTdW1zW2FdLCBncm91cFN1bXNbYl0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChzb3J0U3ViZ3JvdXBzKSB7XG4gICAgICAgIHN1Ymdyb3VwSW5kZXguZm9yRWFjaChmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgZC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBzb3J0U3ViZ3JvdXBzKG1hdHJpeFtpXVthXSwgbWF0cml4W2ldW2JdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBrID0gKDIgKiDPgCAtIHBhZGRpbmcgKiBuKSAvIGs7XG4gICAgICB4ID0gMCwgaSA9IC0xO1xuICAgICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgICAgeDAgPSB4LCBqID0gLTE7XG4gICAgICAgIHdoaWxlICgrK2ogPCBuKSB7XG4gICAgICAgICAgdmFyIGRpID0gZ3JvdXBJbmRleFtpXSwgZGogPSBzdWJncm91cEluZGV4W2RpXVtqXSwgdiA9IG1hdHJpeFtkaV1bZGpdLCBhMCA9IHgsIGExID0geCArPSB2ICogaztcbiAgICAgICAgICBzdWJncm91cHNbZGkgKyBcIi1cIiArIGRqXSA9IHtcbiAgICAgICAgICAgIGluZGV4OiBkaSxcbiAgICAgICAgICAgIHN1YmluZGV4OiBkaixcbiAgICAgICAgICAgIHN0YXJ0QW5nbGU6IGEwLFxuICAgICAgICAgICAgZW5kQW5nbGU6IGExLFxuICAgICAgICAgICAgdmFsdWU6IHZcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGdyb3Vwc1tkaV0gPSB7XG4gICAgICAgICAgaW5kZXg6IGRpLFxuICAgICAgICAgIHN0YXJ0QW5nbGU6IHgwLFxuICAgICAgICAgIGVuZEFuZ2xlOiB4LFxuICAgICAgICAgIHZhbHVlOiAoeCAtIHgwKSAvIGtcbiAgICAgICAgfTtcbiAgICAgICAgeCArPSBwYWRkaW5nO1xuICAgICAgfVxuICAgICAgaSA9IC0xO1xuICAgICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgICAgaiA9IGkgLSAxO1xuICAgICAgICB3aGlsZSAoKytqIDwgbikge1xuICAgICAgICAgIHZhciBzb3VyY2UgPSBzdWJncm91cHNbaSArIFwiLVwiICsgal0sIHRhcmdldCA9IHN1Ymdyb3Vwc1tqICsgXCItXCIgKyBpXTtcbiAgICAgICAgICBpZiAoc291cmNlLnZhbHVlIHx8IHRhcmdldC52YWx1ZSkge1xuICAgICAgICAgICAgY2hvcmRzLnB1c2goc291cmNlLnZhbHVlIDwgdGFyZ2V0LnZhbHVlID8ge1xuICAgICAgICAgICAgICBzb3VyY2U6IHRhcmdldCxcbiAgICAgICAgICAgICAgdGFyZ2V0OiBzb3VyY2VcbiAgICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc29ydENob3JkcykgcmVzb3J0KCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc29ydCgpIHtcbiAgICAgIGNob3Jkcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIHNvcnRDaG9yZHMoKGEuc291cmNlLnZhbHVlICsgYS50YXJnZXQudmFsdWUpIC8gMiwgKGIuc291cmNlLnZhbHVlICsgYi50YXJnZXQudmFsdWUpIC8gMik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY2hvcmQubWF0cml4ID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gbWF0cml4O1xuICAgICAgbiA9IChtYXRyaXggPSB4KSAmJiBtYXRyaXgubGVuZ3RoO1xuICAgICAgY2hvcmRzID0gZ3JvdXBzID0gbnVsbDtcbiAgICAgIHJldHVybiBjaG9yZDtcbiAgICB9O1xuICAgIGNob3JkLnBhZGRpbmcgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwYWRkaW5nO1xuICAgICAgcGFkZGluZyA9IHg7XG4gICAgICBjaG9yZHMgPSBncm91cHMgPSBudWxsO1xuICAgICAgcmV0dXJuIGNob3JkO1xuICAgIH07XG4gICAgY2hvcmQuc29ydEdyb3VwcyA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHNvcnRHcm91cHM7XG4gICAgICBzb3J0R3JvdXBzID0geDtcbiAgICAgIGNob3JkcyA9IGdyb3VwcyA9IG51bGw7XG4gICAgICByZXR1cm4gY2hvcmQ7XG4gICAgfTtcbiAgICBjaG9yZC5zb3J0U3ViZ3JvdXBzID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gc29ydFN1Ymdyb3VwcztcbiAgICAgIHNvcnRTdWJncm91cHMgPSB4O1xuICAgICAgY2hvcmRzID0gbnVsbDtcbiAgICAgIHJldHVybiBjaG9yZDtcbiAgICB9O1xuICAgIGNob3JkLnNvcnRDaG9yZHMgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBzb3J0Q2hvcmRzO1xuICAgICAgc29ydENob3JkcyA9IHg7XG4gICAgICBpZiAoY2hvcmRzKSByZXNvcnQoKTtcbiAgICAgIHJldHVybiBjaG9yZDtcbiAgICB9O1xuICAgIGNob3JkLmNob3JkcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFjaG9yZHMpIHJlbGF5b3V0KCk7XG4gICAgICByZXR1cm4gY2hvcmRzO1xuICAgIH07XG4gICAgY2hvcmQuZ3JvdXBzID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWdyb3VwcykgcmVsYXlvdXQoKTtcbiAgICAgIHJldHVybiBncm91cHM7XG4gICAgfTtcbiAgICByZXR1cm4gY2hvcmQ7XG4gIH07XG4gIGQzLmxheW91dC5mb3JjZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBmb3JjZSA9IHt9LCBldmVudCA9IGQzLmRpc3BhdGNoKFwic3RhcnRcIiwgXCJ0aWNrXCIsIFwiZW5kXCIpLCBzaXplID0gWyAxLCAxIF0sIGRyYWcsIGFscGhhLCBmcmljdGlvbiA9IC45LCBsaW5rRGlzdGFuY2UgPSBkM19sYXlvdXRfZm9yY2VMaW5rRGlzdGFuY2UsIGxpbmtTdHJlbmd0aCA9IGQzX2xheW91dF9mb3JjZUxpbmtTdHJlbmd0aCwgY2hhcmdlID0gLTMwLCBncmF2aXR5ID0gLjEsIHRoZXRhID0gLjgsIG5vZGVzID0gW10sIGxpbmtzID0gW10sIGRpc3RhbmNlcywgc3RyZW5ndGhzLCBjaGFyZ2VzO1xuICAgIGZ1bmN0aW9uIHJlcHVsc2Uobm9kZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHF1YWQsIHgxLCBfLCB4Mikge1xuICAgICAgICBpZiAocXVhZC5wb2ludCAhPT0gbm9kZSkge1xuICAgICAgICAgIHZhciBkeCA9IHF1YWQuY3ggLSBub2RlLngsIGR5ID0gcXVhZC5jeSAtIG5vZGUueSwgZG4gPSAxIC8gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgICBpZiAoKHgyIC0geDEpICogZG4gPCB0aGV0YSkge1xuICAgICAgICAgICAgdmFyIGsgPSBxdWFkLmNoYXJnZSAqIGRuICogZG47XG4gICAgICAgICAgICBub2RlLnB4IC09IGR4ICogaztcbiAgICAgICAgICAgIG5vZGUucHkgLT0gZHkgKiBrO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChxdWFkLnBvaW50ICYmIGlzRmluaXRlKGRuKSkge1xuICAgICAgICAgICAgdmFyIGsgPSBxdWFkLnBvaW50Q2hhcmdlICogZG4gKiBkbjtcbiAgICAgICAgICAgIG5vZGUucHggLT0gZHggKiBrO1xuICAgICAgICAgICAgbm9kZS5weSAtPSBkeSAqIGs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhcXVhZC5jaGFyZ2U7XG4gICAgICB9O1xuICAgIH1cbiAgICBmb3JjZS50aWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoKGFscGhhICo9IC45OSkgPCAuMDA1KSB7XG4gICAgICAgIGV2ZW50LmVuZCh7XG4gICAgICAgICAgdHlwZTogXCJlbmRcIixcbiAgICAgICAgICBhbHBoYTogYWxwaGEgPSAwXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHZhciBuID0gbm9kZXMubGVuZ3RoLCBtID0gbGlua3MubGVuZ3RoLCBxLCBpLCBvLCBzLCB0LCBsLCBrLCB4LCB5O1xuICAgICAgZm9yIChpID0gMDsgaSA8IG07ICsraSkge1xuICAgICAgICBvID0gbGlua3NbaV07XG4gICAgICAgIHMgPSBvLnNvdXJjZTtcbiAgICAgICAgdCA9IG8udGFyZ2V0O1xuICAgICAgICB4ID0gdC54IC0gcy54O1xuICAgICAgICB5ID0gdC55IC0gcy55O1xuICAgICAgICBpZiAobCA9IHggKiB4ICsgeSAqIHkpIHtcbiAgICAgICAgICBsID0gYWxwaGEgKiBzdHJlbmd0aHNbaV0gKiAoKGwgPSBNYXRoLnNxcnQobCkpIC0gZGlzdGFuY2VzW2ldKSAvIGw7XG4gICAgICAgICAgeCAqPSBsO1xuICAgICAgICAgIHkgKj0gbDtcbiAgICAgICAgICB0LnggLT0geCAqIChrID0gcy53ZWlnaHQgLyAodC53ZWlnaHQgKyBzLndlaWdodCkpO1xuICAgICAgICAgIHQueSAtPSB5ICogaztcbiAgICAgICAgICBzLnggKz0geCAqIChrID0gMSAtIGspO1xuICAgICAgICAgIHMueSArPSB5ICogaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGsgPSBhbHBoYSAqIGdyYXZpdHkpIHtcbiAgICAgICAgeCA9IHNpemVbMF0gLyAyO1xuICAgICAgICB5ID0gc2l6ZVsxXSAvIDI7XG4gICAgICAgIGkgPSAtMTtcbiAgICAgICAgaWYgKGspIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICAgICAgbyA9IG5vZGVzW2ldO1xuICAgICAgICAgIG8ueCArPSAoeCAtIG8ueCkgKiBrO1xuICAgICAgICAgIG8ueSArPSAoeSAtIG8ueSkgKiBrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY2hhcmdlKSB7XG4gICAgICAgIGQzX2xheW91dF9mb3JjZUFjY3VtdWxhdGUocSA9IGQzLmdlb20ucXVhZHRyZWUobm9kZXMpLCBhbHBoYSwgY2hhcmdlcyk7XG4gICAgICAgIGkgPSAtMTtcbiAgICAgICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgICAgICBpZiAoIShvID0gbm9kZXNbaV0pLmZpeGVkKSB7XG4gICAgICAgICAgICBxLnZpc2l0KHJlcHVsc2UobykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaSA9IC0xO1xuICAgICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgICAgbyA9IG5vZGVzW2ldO1xuICAgICAgICBpZiAoby5maXhlZCkge1xuICAgICAgICAgIG8ueCA9IG8ucHg7XG4gICAgICAgICAgby55ID0gby5weTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvLnggLT0gKG8ucHggLSAoby5weCA9IG8ueCkpICogZnJpY3Rpb247XG4gICAgICAgICAgby55IC09IChvLnB5IC0gKG8ucHkgPSBvLnkpKSAqIGZyaWN0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBldmVudC50aWNrKHtcbiAgICAgICAgdHlwZTogXCJ0aWNrXCIsXG4gICAgICAgIGFscGhhOiBhbHBoYVxuICAgICAgfSk7XG4gICAgfTtcbiAgICBmb3JjZS5ub2RlcyA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIG5vZGVzO1xuICAgICAgbm9kZXMgPSB4O1xuICAgICAgcmV0dXJuIGZvcmNlO1xuICAgIH07XG4gICAgZm9yY2UubGlua3MgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBsaW5rcztcbiAgICAgIGxpbmtzID0geDtcbiAgICAgIHJldHVybiBmb3JjZTtcbiAgICB9O1xuICAgIGZvcmNlLnNpemUgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBzaXplO1xuICAgICAgc2l6ZSA9IHg7XG4gICAgICByZXR1cm4gZm9yY2U7XG4gICAgfTtcbiAgICBmb3JjZS5saW5rRGlzdGFuY2UgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBsaW5rRGlzdGFuY2U7XG4gICAgICBsaW5rRGlzdGFuY2UgPSB0eXBlb2YgeCA9PT0gXCJmdW5jdGlvblwiID8geCA6ICt4O1xuICAgICAgcmV0dXJuIGZvcmNlO1xuICAgIH07XG4gICAgZm9yY2UuZGlzdGFuY2UgPSBmb3JjZS5saW5rRGlzdGFuY2U7XG4gICAgZm9yY2UubGlua1N0cmVuZ3RoID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gbGlua1N0cmVuZ3RoO1xuICAgICAgbGlua1N0cmVuZ3RoID0gdHlwZW9mIHggPT09IFwiZnVuY3Rpb25cIiA/IHggOiAreDtcbiAgICAgIHJldHVybiBmb3JjZTtcbiAgICB9O1xuICAgIGZvcmNlLmZyaWN0aW9uID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gZnJpY3Rpb247XG4gICAgICBmcmljdGlvbiA9ICt4O1xuICAgICAgcmV0dXJuIGZvcmNlO1xuICAgIH07XG4gICAgZm9yY2UuY2hhcmdlID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gY2hhcmdlO1xuICAgICAgY2hhcmdlID0gdHlwZW9mIHggPT09IFwiZnVuY3Rpb25cIiA/IHggOiAreDtcbiAgICAgIHJldHVybiBmb3JjZTtcbiAgICB9O1xuICAgIGZvcmNlLmdyYXZpdHkgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBncmF2aXR5O1xuICAgICAgZ3Jhdml0eSA9ICt4O1xuICAgICAgcmV0dXJuIGZvcmNlO1xuICAgIH07XG4gICAgZm9yY2UudGhldGEgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGV0YTtcbiAgICAgIHRoZXRhID0gK3g7XG4gICAgICByZXR1cm4gZm9yY2U7XG4gICAgfTtcbiAgICBmb3JjZS5hbHBoYSA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGFscGhhO1xuICAgICAgeCA9ICt4O1xuICAgICAgaWYgKGFscGhhKSB7XG4gICAgICAgIGlmICh4ID4gMCkgYWxwaGEgPSB4OyBlbHNlIGFscGhhID0gMDtcbiAgICAgIH0gZWxzZSBpZiAoeCA+IDApIHtcbiAgICAgICAgZXZlbnQuc3RhcnQoe1xuICAgICAgICAgIHR5cGU6IFwic3RhcnRcIixcbiAgICAgICAgICBhbHBoYTogYWxwaGEgPSB4XG4gICAgICAgIH0pO1xuICAgICAgICBkMy50aW1lcihmb3JjZS50aWNrKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmb3JjZTtcbiAgICB9O1xuICAgIGZvcmNlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaSwgaiwgbiA9IG5vZGVzLmxlbmd0aCwgbSA9IGxpbmtzLmxlbmd0aCwgdyA9IHNpemVbMF0sIGggPSBzaXplWzFdLCBuZWlnaGJvcnMsIG87XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIChvID0gbm9kZXNbaV0pLmluZGV4ID0gaTtcbiAgICAgICAgby53ZWlnaHQgPSAwO1xuICAgICAgfVxuICAgICAgZm9yIChpID0gMDsgaSA8IG07ICsraSkge1xuICAgICAgICBvID0gbGlua3NbaV07XG4gICAgICAgIGlmICh0eXBlb2Ygby5zb3VyY2UgPT0gXCJudW1iZXJcIikgby5zb3VyY2UgPSBub2Rlc1tvLnNvdXJjZV07XG4gICAgICAgIGlmICh0eXBlb2Ygby50YXJnZXQgPT0gXCJudW1iZXJcIikgby50YXJnZXQgPSBub2Rlc1tvLnRhcmdldF07XG4gICAgICAgICsrby5zb3VyY2Uud2VpZ2h0O1xuICAgICAgICArK28udGFyZ2V0LndlaWdodDtcbiAgICAgIH1cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgbyA9IG5vZGVzW2ldO1xuICAgICAgICBpZiAoaXNOYU4oby54KSkgby54ID0gcG9zaXRpb24oXCJ4XCIsIHcpO1xuICAgICAgICBpZiAoaXNOYU4oby55KSkgby55ID0gcG9zaXRpb24oXCJ5XCIsIGgpO1xuICAgICAgICBpZiAoaXNOYU4oby5weCkpIG8ucHggPSBvLng7XG4gICAgICAgIGlmIChpc05hTihvLnB5KSkgby5weSA9IG8ueTtcbiAgICAgIH1cbiAgICAgIGRpc3RhbmNlcyA9IFtdO1xuICAgICAgaWYgKHR5cGVvZiBsaW5rRGlzdGFuY2UgPT09IFwiZnVuY3Rpb25cIikgZm9yIChpID0gMDsgaSA8IG07ICsraSkgZGlzdGFuY2VzW2ldID0gK2xpbmtEaXN0YW5jZS5jYWxsKHRoaXMsIGxpbmtzW2ldLCBpKTsgZWxzZSBmb3IgKGkgPSAwOyBpIDwgbTsgKytpKSBkaXN0YW5jZXNbaV0gPSBsaW5rRGlzdGFuY2U7XG4gICAgICBzdHJlbmd0aHMgPSBbXTtcbiAgICAgIGlmICh0eXBlb2YgbGlua1N0cmVuZ3RoID09PSBcImZ1bmN0aW9uXCIpIGZvciAoaSA9IDA7IGkgPCBtOyArK2kpIHN0cmVuZ3Roc1tpXSA9ICtsaW5rU3RyZW5ndGguY2FsbCh0aGlzLCBsaW5rc1tpXSwgaSk7IGVsc2UgZm9yIChpID0gMDsgaSA8IG07ICsraSkgc3RyZW5ndGhzW2ldID0gbGlua1N0cmVuZ3RoO1xuICAgICAgY2hhcmdlcyA9IFtdO1xuICAgICAgaWYgKHR5cGVvZiBjaGFyZ2UgPT09IFwiZnVuY3Rpb25cIikgZm9yIChpID0gMDsgaSA8IG47ICsraSkgY2hhcmdlc1tpXSA9ICtjaGFyZ2UuY2FsbCh0aGlzLCBub2Rlc1tpXSwgaSk7IGVsc2UgZm9yIChpID0gMDsgaSA8IG47ICsraSkgY2hhcmdlc1tpXSA9IGNoYXJnZTtcbiAgICAgIGZ1bmN0aW9uIHBvc2l0aW9uKGRpbWVuc2lvbiwgc2l6ZSkge1xuICAgICAgICB2YXIgbmVpZ2hib3JzID0gbmVpZ2hib3IoaSksIGogPSAtMSwgbSA9IG5laWdoYm9ycy5sZW5ndGgsIHg7XG4gICAgICAgIHdoaWxlICgrK2ogPCBtKSBpZiAoIWlzTmFOKHggPSBuZWlnaGJvcnNbal1bZGltZW5zaW9uXSkpIHJldHVybiB4O1xuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIHNpemU7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBuZWlnaGJvcigpIHtcbiAgICAgICAgaWYgKCFuZWlnaGJvcnMpIHtcbiAgICAgICAgICBuZWlnaGJvcnMgPSBbXTtcbiAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbjsgKytqKSB7XG4gICAgICAgICAgICBuZWlnaGJvcnNbal0gPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChqID0gMDsgaiA8IG07ICsraikge1xuICAgICAgICAgICAgdmFyIG8gPSBsaW5rc1tqXTtcbiAgICAgICAgICAgIG5laWdoYm9yc1tvLnNvdXJjZS5pbmRleF0ucHVzaChvLnRhcmdldCk7XG4gICAgICAgICAgICBuZWlnaGJvcnNbby50YXJnZXQuaW5kZXhdLnB1c2goby5zb3VyY2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmVpZ2hib3JzW2ldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcmNlLnJlc3VtZSgpO1xuICAgIH07XG4gICAgZm9yY2UucmVzdW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZm9yY2UuYWxwaGEoLjEpO1xuICAgIH07XG4gICAgZm9yY2Uuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZvcmNlLmFscGhhKDApO1xuICAgIH07XG4gICAgZm9yY2UuZHJhZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFkcmFnKSBkcmFnID0gZDMuYmVoYXZpb3IuZHJhZygpLm9yaWdpbihkM19pZGVudGl0eSkub24oXCJkcmFnc3RhcnQuZm9yY2VcIiwgZDNfbGF5b3V0X2ZvcmNlRHJhZ3N0YXJ0KS5vbihcImRyYWcuZm9yY2VcIiwgZHJhZ21vdmUpLm9uKFwiZHJhZ2VuZC5mb3JjZVwiLCBkM19sYXlvdXRfZm9yY2VEcmFnZW5kKTtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGRyYWc7XG4gICAgICB0aGlzLm9uKFwibW91c2VvdmVyLmZvcmNlXCIsIGQzX2xheW91dF9mb3JjZU1vdXNlb3Zlcikub24oXCJtb3VzZW91dC5mb3JjZVwiLCBkM19sYXlvdXRfZm9yY2VNb3VzZW91dCkuY2FsbChkcmFnKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGRyYWdtb3ZlKGQpIHtcbiAgICAgIGQucHggPSBkMy5ldmVudC54LCBkLnB5ID0gZDMuZXZlbnQueTtcbiAgICAgIGZvcmNlLnJlc3VtZSgpO1xuICAgIH1cbiAgICByZXR1cm4gZDMucmViaW5kKGZvcmNlLCBldmVudCwgXCJvblwiKTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfbGF5b3V0X2ZvcmNlRHJhZ3N0YXJ0KGQpIHtcbiAgICBkLmZpeGVkIHw9IDI7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X2ZvcmNlRHJhZ2VuZChkKSB7XG4gICAgZC5maXhlZCAmPSB+NjtcbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfZm9yY2VNb3VzZW92ZXIoZCkge1xuICAgIGQuZml4ZWQgfD0gNDtcbiAgICBkLnB4ID0gZC54LCBkLnB5ID0gZC55O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2xheW91dF9mb3JjZU1vdXNlb3V0KGQpIHtcbiAgICBkLmZpeGVkICY9IH40O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2xheW91dF9mb3JjZUFjY3VtdWxhdGUocXVhZCwgYWxwaGEsIGNoYXJnZXMpIHtcbiAgICB2YXIgY3ggPSAwLCBjeSA9IDA7XG4gICAgcXVhZC5jaGFyZ2UgPSAwO1xuICAgIGlmICghcXVhZC5sZWFmKSB7XG4gICAgICB2YXIgbm9kZXMgPSBxdWFkLm5vZGVzLCBuID0gbm9kZXMubGVuZ3RoLCBpID0gLTEsIGM7XG4gICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICBjID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChjID09IG51bGwpIGNvbnRpbnVlO1xuICAgICAgICBkM19sYXlvdXRfZm9yY2VBY2N1bXVsYXRlKGMsIGFscGhhLCBjaGFyZ2VzKTtcbiAgICAgICAgcXVhZC5jaGFyZ2UgKz0gYy5jaGFyZ2U7XG4gICAgICAgIGN4ICs9IGMuY2hhcmdlICogYy5jeDtcbiAgICAgICAgY3kgKz0gYy5jaGFyZ2UgKiBjLmN5O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocXVhZC5wb2ludCkge1xuICAgICAgaWYgKCFxdWFkLmxlYWYpIHtcbiAgICAgICAgcXVhZC5wb2ludC54ICs9IE1hdGgucmFuZG9tKCkgLSAuNTtcbiAgICAgICAgcXVhZC5wb2ludC55ICs9IE1hdGgucmFuZG9tKCkgLSAuNTtcbiAgICAgIH1cbiAgICAgIHZhciBrID0gYWxwaGEgKiBjaGFyZ2VzW3F1YWQucG9pbnQuaW5kZXhdO1xuICAgICAgcXVhZC5jaGFyZ2UgKz0gcXVhZC5wb2ludENoYXJnZSA9IGs7XG4gICAgICBjeCArPSBrICogcXVhZC5wb2ludC54O1xuICAgICAgY3kgKz0gayAqIHF1YWQucG9pbnQueTtcbiAgICB9XG4gICAgcXVhZC5jeCA9IGN4IC8gcXVhZC5jaGFyZ2U7XG4gICAgcXVhZC5jeSA9IGN5IC8gcXVhZC5jaGFyZ2U7XG4gIH1cbiAgdmFyIGQzX2xheW91dF9mb3JjZUxpbmtEaXN0YW5jZSA9IDIwLCBkM19sYXlvdXRfZm9yY2VMaW5rU3RyZW5ndGggPSAxO1xuICBkMy5sYXlvdXQuaGllcmFyY2h5ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNvcnQgPSBkM19sYXlvdXRfaGllcmFyY2h5U29ydCwgY2hpbGRyZW4gPSBkM19sYXlvdXRfaGllcmFyY2h5Q2hpbGRyZW4sIHZhbHVlID0gZDNfbGF5b3V0X2hpZXJhcmNoeVZhbHVlO1xuICAgIGZ1bmN0aW9uIHJlY3Vyc2Uobm9kZSwgZGVwdGgsIG5vZGVzKSB7XG4gICAgICB2YXIgY2hpbGRzID0gY2hpbGRyZW4uY2FsbChoaWVyYXJjaHksIG5vZGUsIGRlcHRoKTtcbiAgICAgIG5vZGUuZGVwdGggPSBkZXB0aDtcbiAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gICAgICBpZiAoY2hpbGRzICYmIChuID0gY2hpbGRzLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbiwgYyA9IG5vZGUuY2hpbGRyZW4gPSBbXSwgdiA9IDAsIGogPSBkZXB0aCArIDEsIGQ7XG4gICAgICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICAgICAgZCA9IHJlY3Vyc2UoY2hpbGRzW2ldLCBqLCBub2Rlcyk7XG4gICAgICAgICAgZC5wYXJlbnQgPSBub2RlO1xuICAgICAgICAgIGMucHVzaChkKTtcbiAgICAgICAgICB2ICs9IGQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNvcnQpIGMuc29ydChzb3J0KTtcbiAgICAgICAgaWYgKHZhbHVlKSBub2RlLnZhbHVlID0gdjtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUpIHtcbiAgICAgICAgbm9kZS52YWx1ZSA9ICt2YWx1ZS5jYWxsKGhpZXJhcmNoeSwgbm9kZSwgZGVwdGgpIHx8IDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmV2YWx1ZShub2RlLCBkZXB0aCkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbiwgdiA9IDA7XG4gICAgICBpZiAoY2hpbGRyZW4gJiYgKG4gPSBjaGlsZHJlbi5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG4sIGogPSBkZXB0aCArIDE7XG4gICAgICAgIHdoaWxlICgrK2kgPCBuKSB2ICs9IHJldmFsdWUoY2hpbGRyZW5baV0sIGopO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgICB2ID0gK3ZhbHVlLmNhbGwoaGllcmFyY2h5LCBub2RlLCBkZXB0aCkgfHwgMDtcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZSkgbm9kZS52YWx1ZSA9IHY7XG4gICAgICByZXR1cm4gdjtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGllcmFyY2h5KGQpIHtcbiAgICAgIHZhciBub2RlcyA9IFtdO1xuICAgICAgcmVjdXJzZShkLCAwLCBub2Rlcyk7XG4gICAgICByZXR1cm4gbm9kZXM7XG4gICAgfVxuICAgIGhpZXJhcmNoeS5zb3J0ID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gc29ydDtcbiAgICAgIHNvcnQgPSB4O1xuICAgICAgcmV0dXJuIGhpZXJhcmNoeTtcbiAgICB9O1xuICAgIGhpZXJhcmNoeS5jaGlsZHJlbiA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgY2hpbGRyZW4gPSB4O1xuICAgICAgcmV0dXJuIGhpZXJhcmNoeTtcbiAgICB9O1xuICAgIGhpZXJhcmNoeS52YWx1ZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHZhbHVlO1xuICAgICAgdmFsdWUgPSB4O1xuICAgICAgcmV0dXJuIGhpZXJhcmNoeTtcbiAgICB9O1xuICAgIGhpZXJhcmNoeS5yZXZhbHVlID0gZnVuY3Rpb24ocm9vdCkge1xuICAgICAgcmV2YWx1ZShyb290LCAwKTtcbiAgICAgIHJldHVybiByb290O1xuICAgIH07XG4gICAgcmV0dXJuIGhpZXJhcmNoeTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfbGF5b3V0X2hpZXJhcmNoeVJlYmluZChvYmplY3QsIGhpZXJhcmNoeSkge1xuICAgIGQzLnJlYmluZChvYmplY3QsIGhpZXJhcmNoeSwgXCJzb3J0XCIsIFwiY2hpbGRyZW5cIiwgXCJ2YWx1ZVwiKTtcbiAgICBvYmplY3Qubm9kZXMgPSBvYmplY3Q7XG4gICAgb2JqZWN0LmxpbmtzID0gZDNfbGF5b3V0X2hpZXJhcmNoeUxpbmtzO1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X2hpZXJhcmNoeUNoaWxkcmVuKGQpIHtcbiAgICByZXR1cm4gZC5jaGlsZHJlbjtcbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfaGllcmFyY2h5VmFsdWUoZCkge1xuICAgIHJldHVybiBkLnZhbHVlO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2xheW91dF9oaWVyYXJjaHlTb3J0KGEsIGIpIHtcbiAgICByZXR1cm4gYi52YWx1ZSAtIGEudmFsdWU7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X2hpZXJhcmNoeUxpbmtzKG5vZGVzKSB7XG4gICAgcmV0dXJuIGQzLm1lcmdlKG5vZGVzLm1hcChmdW5jdGlvbihwYXJlbnQpIHtcbiAgICAgIHJldHVybiAocGFyZW50LmNoaWxkcmVuIHx8IFtdKS5tYXAoZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzb3VyY2U6IHBhcmVudCxcbiAgICAgICAgICB0YXJnZXQ6IGNoaWxkXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9KSk7XG4gIH1cbiAgZDMubGF5b3V0LnBhcnRpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBoaWVyYXJjaHkgPSBkMy5sYXlvdXQuaGllcmFyY2h5KCksIHNpemUgPSBbIDEsIDEgXTtcbiAgICBmdW5jdGlvbiBwb3NpdGlvbihub2RlLCB4LCBkeCwgZHkpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XG4gICAgICBub2RlLnggPSB4O1xuICAgICAgbm9kZS55ID0gbm9kZS5kZXB0aCAqIGR5O1xuICAgICAgbm9kZS5keCA9IGR4O1xuICAgICAgbm9kZS5keSA9IGR5O1xuICAgICAgaWYgKGNoaWxkcmVuICYmIChuID0gY2hpbGRyZW4ubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuLCBjLCBkO1xuICAgICAgICBkeCA9IG5vZGUudmFsdWUgPyBkeCAvIG5vZGUudmFsdWUgOiAwO1xuICAgICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICAgIHBvc2l0aW9uKGMgPSBjaGlsZHJlbltpXSwgeCwgZCA9IGMudmFsdWUgKiBkeCwgZHkpO1xuICAgICAgICAgIHggKz0gZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBkZXB0aChub2RlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuLCBkID0gMDtcbiAgICAgIGlmIChjaGlsZHJlbiAmJiAobiA9IGNoaWxkcmVuLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbjtcbiAgICAgICAgd2hpbGUgKCsraSA8IG4pIGQgPSBNYXRoLm1heChkLCBkZXB0aChjaGlsZHJlbltpXSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDEgKyBkO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwYXJ0aXRpb24oZCwgaSkge1xuICAgICAgdmFyIG5vZGVzID0gaGllcmFyY2h5LmNhbGwodGhpcywgZCwgaSk7XG4gICAgICBwb3NpdGlvbihub2Rlc1swXSwgMCwgc2l6ZVswXSwgc2l6ZVsxXSAvIGRlcHRoKG5vZGVzWzBdKSk7XG4gICAgICByZXR1cm4gbm9kZXM7XG4gICAgfVxuICAgIHBhcnRpdGlvbi5zaXplID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gc2l6ZTtcbiAgICAgIHNpemUgPSB4O1xuICAgICAgcmV0dXJuIHBhcnRpdGlvbjtcbiAgICB9O1xuICAgIHJldHVybiBkM19sYXlvdXRfaGllcmFyY2h5UmViaW5kKHBhcnRpdGlvbiwgaGllcmFyY2h5KTtcbiAgfTtcbiAgZDMubGF5b3V0LnBpZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZSA9IE51bWJlciwgc29ydCA9IGQzX2xheW91dF9waWVTb3J0QnlWYWx1ZSwgc3RhcnRBbmdsZSA9IDAsIGVuZEFuZ2xlID0gMiAqIM+AO1xuICAgIGZ1bmN0aW9uIHBpZShkYXRhKSB7XG4gICAgICB2YXIgdmFsdWVzID0gZGF0YS5tYXAoZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICByZXR1cm4gK3ZhbHVlLmNhbGwocGllLCBkLCBpKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGEgPSArKHR5cGVvZiBzdGFydEFuZ2xlID09PSBcImZ1bmN0aW9uXCIgPyBzdGFydEFuZ2xlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiBzdGFydEFuZ2xlKTtcbiAgICAgIHZhciBrID0gKCh0eXBlb2YgZW5kQW5nbGUgPT09IFwiZnVuY3Rpb25cIiA/IGVuZEFuZ2xlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiBlbmRBbmdsZSkgLSBhKSAvIGQzLnN1bSh2YWx1ZXMpO1xuICAgICAgdmFyIGluZGV4ID0gZDMucmFuZ2UoZGF0YS5sZW5ndGgpO1xuICAgICAgaWYgKHNvcnQgIT0gbnVsbCkgaW5kZXguc29ydChzb3J0ID09PSBkM19sYXlvdXRfcGllU29ydEJ5VmFsdWUgPyBmdW5jdGlvbihpLCBqKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXNbal0gLSB2YWx1ZXNbaV07XG4gICAgICB9IDogZnVuY3Rpb24oaSwgaikge1xuICAgICAgICByZXR1cm4gc29ydChkYXRhW2ldLCBkYXRhW2pdKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGFyY3MgPSBbXTtcbiAgICAgIGluZGV4LmZvckVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICB2YXIgZDtcbiAgICAgICAgYXJjc1tpXSA9IHtcbiAgICAgICAgICBkYXRhOiBkYXRhW2ldLFxuICAgICAgICAgIHZhbHVlOiBkID0gdmFsdWVzW2ldLFxuICAgICAgICAgIHN0YXJ0QW5nbGU6IGEsXG4gICAgICAgICAgZW5kQW5nbGU6IGEgKz0gZCAqIGtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFyY3M7XG4gICAgfVxuICAgIHBpZS52YWx1ZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHZhbHVlO1xuICAgICAgdmFsdWUgPSB4O1xuICAgICAgcmV0dXJuIHBpZTtcbiAgICB9O1xuICAgIHBpZS5zb3J0ID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gc29ydDtcbiAgICAgIHNvcnQgPSB4O1xuICAgICAgcmV0dXJuIHBpZTtcbiAgICB9O1xuICAgIHBpZS5zdGFydEFuZ2xlID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gc3RhcnRBbmdsZTtcbiAgICAgIHN0YXJ0QW5nbGUgPSB4O1xuICAgICAgcmV0dXJuIHBpZTtcbiAgICB9O1xuICAgIHBpZS5lbmRBbmdsZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGVuZEFuZ2xlO1xuICAgICAgZW5kQW5nbGUgPSB4O1xuICAgICAgcmV0dXJuIHBpZTtcbiAgICB9O1xuICAgIHJldHVybiBwaWU7XG4gIH07XG4gIHZhciBkM19sYXlvdXRfcGllU29ydEJ5VmFsdWUgPSB7fTtcbiAgZDMubGF5b3V0LnN0YWNrID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlcyA9IGQzX2lkZW50aXR5LCBvcmRlciA9IGQzX2xheW91dF9zdGFja09yZGVyRGVmYXVsdCwgb2Zmc2V0ID0gZDNfbGF5b3V0X3N0YWNrT2Zmc2V0WmVybywgb3V0ID0gZDNfbGF5b3V0X3N0YWNrT3V0LCB4ID0gZDNfbGF5b3V0X3N0YWNrWCwgeSA9IGQzX2xheW91dF9zdGFja1k7XG4gICAgZnVuY3Rpb24gc3RhY2soZGF0YSwgaW5kZXgpIHtcbiAgICAgIHZhciBzZXJpZXMgPSBkYXRhLm1hcChmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXMuY2FsbChzdGFjaywgZCwgaSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBwb2ludHMgPSBzZXJpZXMubWFwKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQubWFwKGZ1bmN0aW9uKHYsIGkpIHtcbiAgICAgICAgICByZXR1cm4gWyB4LmNhbGwoc3RhY2ssIHYsIGkpLCB5LmNhbGwoc3RhY2ssIHYsIGkpIF07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB2YXIgb3JkZXJzID0gb3JkZXIuY2FsbChzdGFjaywgcG9pbnRzLCBpbmRleCk7XG4gICAgICBzZXJpZXMgPSBkMy5wZXJtdXRlKHNlcmllcywgb3JkZXJzKTtcbiAgICAgIHBvaW50cyA9IGQzLnBlcm11dGUocG9pbnRzLCBvcmRlcnMpO1xuICAgICAgdmFyIG9mZnNldHMgPSBvZmZzZXQuY2FsbChzdGFjaywgcG9pbnRzLCBpbmRleCk7XG4gICAgICB2YXIgbiA9IHNlcmllcy5sZW5ndGgsIG0gPSBzZXJpZXNbMF0ubGVuZ3RoLCBpLCBqLCBvO1xuICAgICAgZm9yIChqID0gMDsgaiA8IG07ICsraikge1xuICAgICAgICBvdXQuY2FsbChzdGFjaywgc2VyaWVzWzBdW2pdLCBvID0gb2Zmc2V0c1tqXSwgcG9pbnRzWzBdW2pdWzFdKTtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IG47ICsraSkge1xuICAgICAgICAgIG91dC5jYWxsKHN0YWNrLCBzZXJpZXNbaV1bal0sIG8gKz0gcG9pbnRzW2kgLSAxXVtqXVsxXSwgcG9pbnRzW2ldW2pdWzFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIHN0YWNrLnZhbHVlcyA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHZhbHVlcztcbiAgICAgIHZhbHVlcyA9IHg7XG4gICAgICByZXR1cm4gc3RhY2s7XG4gICAgfTtcbiAgICBzdGFjay5vcmRlciA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIG9yZGVyO1xuICAgICAgb3JkZXIgPSB0eXBlb2YgeCA9PT0gXCJmdW5jdGlvblwiID8geCA6IGQzX2xheW91dF9zdGFja09yZGVycy5nZXQoeCkgfHwgZDNfbGF5b3V0X3N0YWNrT3JkZXJEZWZhdWx0O1xuICAgICAgcmV0dXJuIHN0YWNrO1xuICAgIH07XG4gICAgc3RhY2sub2Zmc2V0ID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gb2Zmc2V0O1xuICAgICAgb2Zmc2V0ID0gdHlwZW9mIHggPT09IFwiZnVuY3Rpb25cIiA/IHggOiBkM19sYXlvdXRfc3RhY2tPZmZzZXRzLmdldCh4KSB8fCBkM19sYXlvdXRfc3RhY2tPZmZzZXRaZXJvO1xuICAgICAgcmV0dXJuIHN0YWNrO1xuICAgIH07XG4gICAgc3RhY2sueCA9IGZ1bmN0aW9uKHopIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHg7XG4gICAgICB4ID0gejtcbiAgICAgIHJldHVybiBzdGFjaztcbiAgICB9O1xuICAgIHN0YWNrLnkgPSBmdW5jdGlvbih6KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB5O1xuICAgICAgeSA9IHo7XG4gICAgICByZXR1cm4gc3RhY2s7XG4gICAgfTtcbiAgICBzdGFjay5vdXQgPSBmdW5jdGlvbih6KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBvdXQ7XG4gICAgICBvdXQgPSB6O1xuICAgICAgcmV0dXJuIHN0YWNrO1xuICAgIH07XG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xuICBmdW5jdGlvbiBkM19sYXlvdXRfc3RhY2tYKGQpIHtcbiAgICByZXR1cm4gZC54O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2xheW91dF9zdGFja1koZCkge1xuICAgIHJldHVybiBkLnk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X3N0YWNrT3V0KGQsIHkwLCB5KSB7XG4gICAgZC55MCA9IHkwO1xuICAgIGQueSA9IHk7XG4gIH1cbiAgdmFyIGQzX2xheW91dF9zdGFja09yZGVycyA9IGQzLm1hcCh7XG4gICAgXCJpbnNpZGUtb3V0XCI6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHZhciBuID0gZGF0YS5sZW5ndGgsIGksIGosIG1heCA9IGRhdGEubWFwKGQzX2xheW91dF9zdGFja01heEluZGV4KSwgc3VtcyA9IGRhdGEubWFwKGQzX2xheW91dF9zdGFja1JlZHVjZVN1bSksIGluZGV4ID0gZDMucmFuZ2Uobikuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIHJldHVybiBtYXhbYV0gLSBtYXhbYl07XG4gICAgICB9KSwgdG9wID0gMCwgYm90dG9tID0gMCwgdG9wcyA9IFtdLCBib3R0b21zID0gW107XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGogPSBpbmRleFtpXTtcbiAgICAgICAgaWYgKHRvcCA8IGJvdHRvbSkge1xuICAgICAgICAgIHRvcCArPSBzdW1zW2pdO1xuICAgICAgICAgIHRvcHMucHVzaChqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBib3R0b20gKz0gc3Vtc1tqXTtcbiAgICAgICAgICBib3R0b21zLnB1c2goaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBib3R0b21zLnJldmVyc2UoKS5jb25jYXQodG9wcyk7XG4gICAgfSxcbiAgICByZXZlcnNlOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICByZXR1cm4gZDMucmFuZ2UoZGF0YS5sZW5ndGgpLnJldmVyc2UoKTtcbiAgICB9LFxuICAgIFwiZGVmYXVsdFwiOiBkM19sYXlvdXRfc3RhY2tPcmRlckRlZmF1bHRcbiAgfSk7XG4gIHZhciBkM19sYXlvdXRfc3RhY2tPZmZzZXRzID0gZDMubWFwKHtcbiAgICBzaWxob3VldHRlOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICB2YXIgbiA9IGRhdGEubGVuZ3RoLCBtID0gZGF0YVswXS5sZW5ndGgsIHN1bXMgPSBbXSwgbWF4ID0gMCwgaSwgaiwgbywgeTAgPSBbXTtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICAgICAgZm9yIChpID0gMCwgbyA9IDA7IGkgPCBuOyBpKyspIG8gKz0gZGF0YVtpXVtqXVsxXTtcbiAgICAgICAgaWYgKG8gPiBtYXgpIG1heCA9IG87XG4gICAgICAgIHN1bXMucHVzaChvKTtcbiAgICAgIH1cbiAgICAgIGZvciAoaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICAgICAgeTBbal0gPSAobWF4IC0gc3Vtc1tqXSkgLyAyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHkwO1xuICAgIH0sXG4gICAgd2lnZ2xlOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICB2YXIgbiA9IGRhdGEubGVuZ3RoLCB4ID0gZGF0YVswXSwgbSA9IHgubGVuZ3RoLCBpLCBqLCBrLCBzMSwgczIsIHMzLCBkeCwgbywgbzAsIHkwID0gW107XG4gICAgICB5MFswXSA9IG8gPSBvMCA9IDA7XG4gICAgICBmb3IgKGogPSAxOyBqIDwgbTsgKytqKSB7XG4gICAgICAgIGZvciAoaSA9IDAsIHMxID0gMDsgaSA8IG47ICsraSkgczEgKz0gZGF0YVtpXVtqXVsxXTtcbiAgICAgICAgZm9yIChpID0gMCwgczIgPSAwLCBkeCA9IHhbal1bMF0gLSB4W2ogLSAxXVswXTsgaSA8IG47ICsraSkge1xuICAgICAgICAgIGZvciAoayA9IDAsIHMzID0gKGRhdGFbaV1bal1bMV0gLSBkYXRhW2ldW2ogLSAxXVsxXSkgLyAoMiAqIGR4KTsgayA8IGk7ICsraykge1xuICAgICAgICAgICAgczMgKz0gKGRhdGFba11bal1bMV0gLSBkYXRhW2tdW2ogLSAxXVsxXSkgLyBkeDtcbiAgICAgICAgICB9XG4gICAgICAgICAgczIgKz0gczMgKiBkYXRhW2ldW2pdWzFdO1xuICAgICAgICB9XG4gICAgICAgIHkwW2pdID0gbyAtPSBzMSA/IHMyIC8gczEgKiBkeCA6IDA7XG4gICAgICAgIGlmIChvIDwgbzApIG8wID0gbztcbiAgICAgIH1cbiAgICAgIGZvciAoaiA9IDA7IGogPCBtOyArK2opIHkwW2pdIC09IG8wO1xuICAgICAgcmV0dXJuIHkwO1xuICAgIH0sXG4gICAgZXhwYW5kOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICB2YXIgbiA9IGRhdGEubGVuZ3RoLCBtID0gZGF0YVswXS5sZW5ndGgsIGsgPSAxIC8gbiwgaSwgaiwgbywgeTAgPSBbXTtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICAgICAgZm9yIChpID0gMCwgbyA9IDA7IGkgPCBuOyBpKyspIG8gKz0gZGF0YVtpXVtqXVsxXTtcbiAgICAgICAgaWYgKG8pIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIGRhdGFbaV1bal1bMV0gLz0gbzsgZWxzZSBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSBkYXRhW2ldW2pdWzFdID0gaztcbiAgICAgIH1cbiAgICAgIGZvciAoaiA9IDA7IGogPCBtOyArK2opIHkwW2pdID0gMDtcbiAgICAgIHJldHVybiB5MDtcbiAgICB9LFxuICAgIHplcm86IGQzX2xheW91dF9zdGFja09mZnNldFplcm9cbiAgfSk7XG4gIGZ1bmN0aW9uIGQzX2xheW91dF9zdGFja09yZGVyRGVmYXVsdChkYXRhKSB7XG4gICAgcmV0dXJuIGQzLnJhbmdlKGRhdGEubGVuZ3RoKTtcbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfc3RhY2tPZmZzZXRaZXJvKGRhdGEpIHtcbiAgICB2YXIgaiA9IC0xLCBtID0gZGF0YVswXS5sZW5ndGgsIHkwID0gW107XG4gICAgd2hpbGUgKCsraiA8IG0pIHkwW2pdID0gMDtcbiAgICByZXR1cm4geTA7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X3N0YWNrTWF4SW5kZXgoYXJyYXkpIHtcbiAgICB2YXIgaSA9IDEsIGogPSAwLCB2ID0gYXJyYXlbMF1bMV0sIGssIG4gPSBhcnJheS5sZW5ndGg7XG4gICAgZm9yICg7aSA8IG47ICsraSkge1xuICAgICAgaWYgKChrID0gYXJyYXlbaV1bMV0pID4gdikge1xuICAgICAgICBqID0gaTtcbiAgICAgICAgdiA9IGs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBqO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2xheW91dF9zdGFja1JlZHVjZVN1bShkKSB7XG4gICAgcmV0dXJuIGQucmVkdWNlKGQzX2xheW91dF9zdGFja1N1bSwgMCk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X3N0YWNrU3VtKHAsIGQpIHtcbiAgICByZXR1cm4gcCArIGRbMV07XG4gIH1cbiAgZDMubGF5b3V0Lmhpc3RvZ3JhbSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBmcmVxdWVuY3kgPSB0cnVlLCB2YWx1ZXIgPSBOdW1iZXIsIHJhbmdlciA9IGQzX2xheW91dF9oaXN0b2dyYW1SYW5nZSwgYmlubmVyID0gZDNfbGF5b3V0X2hpc3RvZ3JhbUJpblN0dXJnZXM7XG4gICAgZnVuY3Rpb24gaGlzdG9ncmFtKGRhdGEsIGkpIHtcbiAgICAgIHZhciBiaW5zID0gW10sIHZhbHVlcyA9IGRhdGEubWFwKHZhbHVlciwgdGhpcyksIHJhbmdlID0gcmFuZ2VyLmNhbGwodGhpcywgdmFsdWVzLCBpKSwgdGhyZXNob2xkcyA9IGJpbm5lci5jYWxsKHRoaXMsIHJhbmdlLCB2YWx1ZXMsIGkpLCBiaW4sIGkgPSAtMSwgbiA9IHZhbHVlcy5sZW5ndGgsIG0gPSB0aHJlc2hvbGRzLmxlbmd0aCAtIDEsIGsgPSBmcmVxdWVuY3kgPyAxIDogMSAvIG4sIHg7XG4gICAgICB3aGlsZSAoKytpIDwgbSkge1xuICAgICAgICBiaW4gPSBiaW5zW2ldID0gW107XG4gICAgICAgIGJpbi5keCA9IHRocmVzaG9sZHNbaSArIDFdIC0gKGJpbi54ID0gdGhyZXNob2xkc1tpXSk7XG4gICAgICAgIGJpbi55ID0gMDtcbiAgICAgIH1cbiAgICAgIGlmIChtID4gMCkge1xuICAgICAgICBpID0gLTE7XG4gICAgICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICAgICAgeCA9IHZhbHVlc1tpXTtcbiAgICAgICAgICBpZiAoeCA+PSByYW5nZVswXSAmJiB4IDw9IHJhbmdlWzFdKSB7XG4gICAgICAgICAgICBiaW4gPSBiaW5zW2QzLmJpc2VjdCh0aHJlc2hvbGRzLCB4LCAxLCBtKSAtIDFdO1xuICAgICAgICAgICAgYmluLnkgKz0gaztcbiAgICAgICAgICAgIGJpbi5wdXNoKGRhdGFbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJpbnM7XG4gICAgfVxuICAgIGhpc3RvZ3JhbS52YWx1ZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHZhbHVlcjtcbiAgICAgIHZhbHVlciA9IHg7XG4gICAgICByZXR1cm4gaGlzdG9ncmFtO1xuICAgIH07XG4gICAgaGlzdG9ncmFtLnJhbmdlID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gcmFuZ2VyO1xuICAgICAgcmFuZ2VyID0gZDNfZnVuY3Rvcih4KTtcbiAgICAgIHJldHVybiBoaXN0b2dyYW07XG4gICAgfTtcbiAgICBoaXN0b2dyYW0uYmlucyA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGJpbm5lcjtcbiAgICAgIGJpbm5lciA9IHR5cGVvZiB4ID09PSBcIm51bWJlclwiID8gZnVuY3Rpb24ocmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIGQzX2xheW91dF9oaXN0b2dyYW1CaW5GaXhlZChyYW5nZSwgeCk7XG4gICAgICB9IDogZDNfZnVuY3Rvcih4KTtcbiAgICAgIHJldHVybiBoaXN0b2dyYW07XG4gICAgfTtcbiAgICBoaXN0b2dyYW0uZnJlcXVlbmN5ID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gZnJlcXVlbmN5O1xuICAgICAgZnJlcXVlbmN5ID0gISF4O1xuICAgICAgcmV0dXJuIGhpc3RvZ3JhbTtcbiAgICB9O1xuICAgIHJldHVybiBoaXN0b2dyYW07XG4gIH07XG4gIGZ1bmN0aW9uIGQzX2xheW91dF9oaXN0b2dyYW1CaW5TdHVyZ2VzKHJhbmdlLCB2YWx1ZXMpIHtcbiAgICByZXR1cm4gZDNfbGF5b3V0X2hpc3RvZ3JhbUJpbkZpeGVkKHJhbmdlLCBNYXRoLmNlaWwoTWF0aC5sb2codmFsdWVzLmxlbmd0aCkgLyBNYXRoLkxOMiArIDEpKTtcbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfaGlzdG9ncmFtQmluRml4ZWQocmFuZ2UsIG4pIHtcbiAgICB2YXIgeCA9IC0xLCBiID0gK3JhbmdlWzBdLCBtID0gKHJhbmdlWzFdIC0gYikgLyBuLCBmID0gW107XG4gICAgd2hpbGUgKCsreCA8PSBuKSBmW3hdID0gbSAqIHggKyBiO1xuICAgIHJldHVybiBmO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2xheW91dF9oaXN0b2dyYW1SYW5nZSh2YWx1ZXMpIHtcbiAgICByZXR1cm4gWyBkMy5taW4odmFsdWVzKSwgZDMubWF4KHZhbHVlcykgXTtcbiAgfVxuICBkMy5sYXlvdXQudHJlZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBoaWVyYXJjaHkgPSBkMy5sYXlvdXQuaGllcmFyY2h5KCkuc29ydChudWxsKS52YWx1ZShudWxsKSwgc2VwYXJhdGlvbiA9IGQzX2xheW91dF90cmVlU2VwYXJhdGlvbiwgc2l6ZSA9IFsgMSwgMSBdLCBub2RlU2l6ZSA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIHRyZWUoZCwgaSkge1xuICAgICAgdmFyIG5vZGVzID0gaGllcmFyY2h5LmNhbGwodGhpcywgZCwgaSksIHJvb3QgPSBub2Rlc1swXTtcbiAgICAgIGZ1bmN0aW9uIGZpcnN0V2Fsayhub2RlLCBwcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbiwgbGF5b3V0ID0gbm9kZS5fdHJlZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuICYmIChuID0gY2hpbGRyZW4ubGVuZ3RoKSkge1xuICAgICAgICAgIHZhciBuLCBmaXJzdENoaWxkID0gY2hpbGRyZW5bMF0sIHByZXZpb3VzQ2hpbGQsIGFuY2VzdG9yID0gZmlyc3RDaGlsZCwgY2hpbGQsIGkgPSAtMTtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGZpcnN0V2FsayhjaGlsZCwgcHJldmlvdXNDaGlsZCk7XG4gICAgICAgICAgICBhbmNlc3RvciA9IGFwcG9ydGlvbihjaGlsZCwgcHJldmlvdXNDaGlsZCwgYW5jZXN0b3IpO1xuICAgICAgICAgICAgcHJldmlvdXNDaGlsZCA9IGNoaWxkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkM19sYXlvdXRfdHJlZVNoaWZ0KG5vZGUpO1xuICAgICAgICAgIHZhciBtaWRwb2ludCA9IC41ICogKGZpcnN0Q2hpbGQuX3RyZWUucHJlbGltICsgY2hpbGQuX3RyZWUucHJlbGltKTtcbiAgICAgICAgICBpZiAocHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgICAgICBsYXlvdXQucHJlbGltID0gcHJldmlvdXNTaWJsaW5nLl90cmVlLnByZWxpbSArIHNlcGFyYXRpb24obm9kZSwgcHJldmlvdXNTaWJsaW5nKTtcbiAgICAgICAgICAgIGxheW91dC5tb2QgPSBsYXlvdXQucHJlbGltIC0gbWlkcG9pbnQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxheW91dC5wcmVsaW0gPSBtaWRwb2ludDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHByZXZpb3VzU2libGluZykge1xuICAgICAgICAgICAgbGF5b3V0LnByZWxpbSA9IHByZXZpb3VzU2libGluZy5fdHJlZS5wcmVsaW0gKyBzZXBhcmF0aW9uKG5vZGUsIHByZXZpb3VzU2libGluZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBzZWNvbmRXYWxrKG5vZGUsIHgpIHtcbiAgICAgICAgbm9kZS54ID0gbm9kZS5fdHJlZS5wcmVsaW0gKyB4O1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xuICAgICAgICBpZiAoY2hpbGRyZW4gJiYgKG4gPSBjaGlsZHJlbi5sZW5ndGgpKSB7XG4gICAgICAgICAgdmFyIGkgPSAtMSwgbjtcbiAgICAgICAgICB4ICs9IG5vZGUuX3RyZWUubW9kO1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICAgICAgICBzZWNvbmRXYWxrKGNoaWxkcmVuW2ldLCB4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGFwcG9ydGlvbihub2RlLCBwcmV2aW91c1NpYmxpbmcsIGFuY2VzdG9yKSB7XG4gICAgICAgIGlmIChwcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgICB2YXIgdmlwID0gbm9kZSwgdm9wID0gbm9kZSwgdmltID0gcHJldmlvdXNTaWJsaW5nLCB2b20gPSBub2RlLnBhcmVudC5jaGlsZHJlblswXSwgc2lwID0gdmlwLl90cmVlLm1vZCwgc29wID0gdm9wLl90cmVlLm1vZCwgc2ltID0gdmltLl90cmVlLm1vZCwgc29tID0gdm9tLl90cmVlLm1vZCwgc2hpZnQ7XG4gICAgICAgICAgd2hpbGUgKHZpbSA9IGQzX2xheW91dF90cmVlUmlnaHQodmltKSwgdmlwID0gZDNfbGF5b3V0X3RyZWVMZWZ0KHZpcCksIHZpbSAmJiB2aXApIHtcbiAgICAgICAgICAgIHZvbSA9IGQzX2xheW91dF90cmVlTGVmdCh2b20pO1xuICAgICAgICAgICAgdm9wID0gZDNfbGF5b3V0X3RyZWVSaWdodCh2b3ApO1xuICAgICAgICAgICAgdm9wLl90cmVlLmFuY2VzdG9yID0gbm9kZTtcbiAgICAgICAgICAgIHNoaWZ0ID0gdmltLl90cmVlLnByZWxpbSArIHNpbSAtIHZpcC5fdHJlZS5wcmVsaW0gLSBzaXAgKyBzZXBhcmF0aW9uKHZpbSwgdmlwKTtcbiAgICAgICAgICAgIGlmIChzaGlmdCA+IDApIHtcbiAgICAgICAgICAgICAgZDNfbGF5b3V0X3RyZWVNb3ZlKGQzX2xheW91dF90cmVlQW5jZXN0b3IodmltLCBub2RlLCBhbmNlc3RvciksIG5vZGUsIHNoaWZ0KTtcbiAgICAgICAgICAgICAgc2lwICs9IHNoaWZ0O1xuICAgICAgICAgICAgICBzb3AgKz0gc2hpZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaW0gKz0gdmltLl90cmVlLm1vZDtcbiAgICAgICAgICAgIHNpcCArPSB2aXAuX3RyZWUubW9kO1xuICAgICAgICAgICAgc29tICs9IHZvbS5fdHJlZS5tb2Q7XG4gICAgICAgICAgICBzb3AgKz0gdm9wLl90cmVlLm1vZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHZpbSAmJiAhZDNfbGF5b3V0X3RyZWVSaWdodCh2b3ApKSB7XG4gICAgICAgICAgICB2b3AuX3RyZWUudGhyZWFkID0gdmltO1xuICAgICAgICAgICAgdm9wLl90cmVlLm1vZCArPSBzaW0gLSBzb3A7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2aXAgJiYgIWQzX2xheW91dF90cmVlTGVmdCh2b20pKSB7XG4gICAgICAgICAgICB2b20uX3RyZWUudGhyZWFkID0gdmlwO1xuICAgICAgICAgICAgdm9tLl90cmVlLm1vZCArPSBzaXAgLSBzb207XG4gICAgICAgICAgICBhbmNlc3RvciA9IG5vZGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbmNlc3RvcjtcbiAgICAgIH1cbiAgICAgIGQzX2xheW91dF90cmVlVmlzaXRBZnRlcihyb290LCBmdW5jdGlvbihub2RlLCBwcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgbm9kZS5fdHJlZSA9IHtcbiAgICAgICAgICBhbmNlc3Rvcjogbm9kZSxcbiAgICAgICAgICBwcmVsaW06IDAsXG4gICAgICAgICAgbW9kOiAwLFxuICAgICAgICAgIGNoYW5nZTogMCxcbiAgICAgICAgICBzaGlmdDogMCxcbiAgICAgICAgICBudW1iZXI6IHByZXZpb3VzU2libGluZyA/IHByZXZpb3VzU2libGluZy5fdHJlZS5udW1iZXIgKyAxIDogMFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBmaXJzdFdhbGsocm9vdCk7XG4gICAgICBzZWNvbmRXYWxrKHJvb3QsIC1yb290Ll90cmVlLnByZWxpbSk7XG4gICAgICB2YXIgbGVmdCA9IGQzX2xheW91dF90cmVlU2VhcmNoKHJvb3QsIGQzX2xheW91dF90cmVlTGVmdG1vc3QpLCByaWdodCA9IGQzX2xheW91dF90cmVlU2VhcmNoKHJvb3QsIGQzX2xheW91dF90cmVlUmlnaHRtb3N0KSwgZGVlcCA9IGQzX2xheW91dF90cmVlU2VhcmNoKHJvb3QsIGQzX2xheW91dF90cmVlRGVlcGVzdCksIHgwID0gbGVmdC54IC0gc2VwYXJhdGlvbihsZWZ0LCByaWdodCkgLyAyLCB4MSA9IHJpZ2h0LnggKyBzZXBhcmF0aW9uKHJpZ2h0LCBsZWZ0KSAvIDIsIHkxID0gZGVlcC5kZXB0aCB8fCAxO1xuICAgICAgZDNfbGF5b3V0X3RyZWVWaXNpdEFmdGVyKHJvb3QsIG5vZGVTaXplID8gZnVuY3Rpb24obm9kZSkge1xuICAgICAgICBub2RlLnggKj0gc2l6ZVswXTtcbiAgICAgICAgbm9kZS55ID0gbm9kZS5kZXB0aCAqIHNpemVbMV07XG4gICAgICAgIGRlbGV0ZSBub2RlLl90cmVlO1xuICAgICAgfSA6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgbm9kZS54ID0gKG5vZGUueCAtIHgwKSAvICh4MSAtIHgwKSAqIHNpemVbMF07XG4gICAgICAgIG5vZGUueSA9IG5vZGUuZGVwdGggLyB5MSAqIHNpemVbMV07XG4gICAgICAgIGRlbGV0ZSBub2RlLl90cmVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbm9kZXM7XG4gICAgfVxuICAgIHRyZWUuc2VwYXJhdGlvbiA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHNlcGFyYXRpb247XG4gICAgICBzZXBhcmF0aW9uID0geDtcbiAgICAgIHJldHVybiB0cmVlO1xuICAgIH07XG4gICAgdHJlZS5zaXplID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gbm9kZVNpemUgPyBudWxsIDogc2l6ZTtcbiAgICAgIG5vZGVTaXplID0gKHNpemUgPSB4KSA9PSBudWxsO1xuICAgICAgcmV0dXJuIHRyZWU7XG4gICAgfTtcbiAgICB0cmVlLm5vZGVTaXplID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gbm9kZVNpemUgPyBzaXplIDogbnVsbDtcbiAgICAgIG5vZGVTaXplID0gKHNpemUgPSB4KSAhPSBudWxsO1xuICAgICAgcmV0dXJuIHRyZWU7XG4gICAgfTtcbiAgICByZXR1cm4gZDNfbGF5b3V0X2hpZXJhcmNoeVJlYmluZCh0cmVlLCBoaWVyYXJjaHkpO1xuICB9O1xuICBmdW5jdGlvbiBkM19sYXlvdXRfdHJlZVNlcGFyYXRpb24oYSwgYikge1xuICAgIHJldHVybiBhLnBhcmVudCA9PSBiLnBhcmVudCA/IDEgOiAyO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2xheW91dF90cmVlTGVmdChub2RlKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbjtcbiAgICByZXR1cm4gY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoID8gY2hpbGRyZW5bMF0gOiBub2RlLl90cmVlLnRocmVhZDtcbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfdHJlZVJpZ2h0KG5vZGUpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuLCBuO1xuICAgIHJldHVybiBjaGlsZHJlbiAmJiAobiA9IGNoaWxkcmVuLmxlbmd0aCkgPyBjaGlsZHJlbltuIC0gMV0gOiBub2RlLl90cmVlLnRocmVhZDtcbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfdHJlZVNlYXJjaChub2RlLCBjb21wYXJlKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbjtcbiAgICBpZiAoY2hpbGRyZW4gJiYgKG4gPSBjaGlsZHJlbi5sZW5ndGgpKSB7XG4gICAgICB2YXIgY2hpbGQsIG4sIGkgPSAtMTtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICAgIGlmIChjb21wYXJlKGNoaWxkID0gZDNfbGF5b3V0X3RyZWVTZWFyY2goY2hpbGRyZW5baV0sIGNvbXBhcmUpLCBub2RlKSA+IDApIHtcbiAgICAgICAgICBub2RlID0gY2hpbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X3RyZWVSaWdodG1vc3QoYSwgYikge1xuICAgIHJldHVybiBhLnggLSBiLng7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X3RyZWVMZWZ0bW9zdChhLCBiKSB7XG4gICAgcmV0dXJuIGIueCAtIGEueDtcbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfdHJlZURlZXBlc3QoYSwgYikge1xuICAgIHJldHVybiBhLmRlcHRoIC0gYi5kZXB0aDtcbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfdHJlZVZpc2l0QWZ0ZXIobm9kZSwgY2FsbGJhY2spIHtcbiAgICBmdW5jdGlvbiB2aXNpdChub2RlLCBwcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XG4gICAgICBpZiAoY2hpbGRyZW4gJiYgKG4gPSBjaGlsZHJlbi5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBjaGlsZCwgcHJldmlvdXNDaGlsZCA9IG51bGwsIGkgPSAtMSwgbjtcbiAgICAgICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgIHZpc2l0KGNoaWxkLCBwcmV2aW91c0NoaWxkKTtcbiAgICAgICAgICBwcmV2aW91c0NoaWxkID0gY2hpbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhbGxiYWNrKG5vZGUsIHByZXZpb3VzU2libGluZyk7XG4gICAgfVxuICAgIHZpc2l0KG5vZGUsIG51bGwpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2xheW91dF90cmVlU2hpZnQobm9kZSkge1xuICAgIHZhciBzaGlmdCA9IDAsIGNoYW5nZSA9IDAsIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbiwgaSA9IGNoaWxkcmVuLmxlbmd0aCwgY2hpbGQ7XG4gICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldLl90cmVlO1xuICAgICAgY2hpbGQucHJlbGltICs9IHNoaWZ0O1xuICAgICAgY2hpbGQubW9kICs9IHNoaWZ0O1xuICAgICAgc2hpZnQgKz0gY2hpbGQuc2hpZnQgKyAoY2hhbmdlICs9IGNoaWxkLmNoYW5nZSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGQzX2xheW91dF90cmVlTW92ZShhbmNlc3Rvciwgbm9kZSwgc2hpZnQpIHtcbiAgICBhbmNlc3RvciA9IGFuY2VzdG9yLl90cmVlO1xuICAgIG5vZGUgPSBub2RlLl90cmVlO1xuICAgIHZhciBjaGFuZ2UgPSBzaGlmdCAvIChub2RlLm51bWJlciAtIGFuY2VzdG9yLm51bWJlcik7XG4gICAgYW5jZXN0b3IuY2hhbmdlICs9IGNoYW5nZTtcbiAgICBub2RlLmNoYW5nZSAtPSBjaGFuZ2U7XG4gICAgbm9kZS5zaGlmdCArPSBzaGlmdDtcbiAgICBub2RlLnByZWxpbSArPSBzaGlmdDtcbiAgICBub2RlLm1vZCArPSBzaGlmdDtcbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfdHJlZUFuY2VzdG9yKHZpbSwgbm9kZSwgYW5jZXN0b3IpIHtcbiAgICByZXR1cm4gdmltLl90cmVlLmFuY2VzdG9yLnBhcmVudCA9PSBub2RlLnBhcmVudCA/IHZpbS5fdHJlZS5hbmNlc3RvciA6IGFuY2VzdG9yO1xuICB9XG4gIGQzLmxheW91dC5wYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGhpZXJhcmNoeSA9IGQzLmxheW91dC5oaWVyYXJjaHkoKS5zb3J0KGQzX2xheW91dF9wYWNrU29ydCksIHBhZGRpbmcgPSAwLCBzaXplID0gWyAxLCAxIF0sIHJhZGl1cztcbiAgICBmdW5jdGlvbiBwYWNrKGQsIGkpIHtcbiAgICAgIHZhciBub2RlcyA9IGhpZXJhcmNoeS5jYWxsKHRoaXMsIGQsIGkpLCByb290ID0gbm9kZXNbMF0sIHcgPSBzaXplWzBdLCBoID0gc2l6ZVsxXSwgciA9IHJhZGl1cyA9PSBudWxsID8gTWF0aC5zcXJ0IDogdHlwZW9mIHJhZGl1cyA9PT0gXCJmdW5jdGlvblwiID8gcmFkaXVzIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByYWRpdXM7XG4gICAgICB9O1xuICAgICAgcm9vdC54ID0gcm9vdC55ID0gMDtcbiAgICAgIGQzX2xheW91dF90cmVlVmlzaXRBZnRlcihyb290LCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGQuciA9ICtyKGQudmFsdWUpO1xuICAgICAgfSk7XG4gICAgICBkM19sYXlvdXRfdHJlZVZpc2l0QWZ0ZXIocm9vdCwgZDNfbGF5b3V0X3BhY2tTaWJsaW5ncyk7XG4gICAgICBpZiAocGFkZGluZykge1xuICAgICAgICB2YXIgZHIgPSBwYWRkaW5nICogKHJhZGl1cyA/IDEgOiBNYXRoLm1heCgyICogcm9vdC5yIC8gdywgMiAqIHJvb3QuciAvIGgpKSAvIDI7XG4gICAgICAgIGQzX2xheW91dF90cmVlVmlzaXRBZnRlcihyb290LCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgZC5yICs9IGRyO1xuICAgICAgICB9KTtcbiAgICAgICAgZDNfbGF5b3V0X3RyZWVWaXNpdEFmdGVyKHJvb3QsIGQzX2xheW91dF9wYWNrU2libGluZ3MpO1xuICAgICAgICBkM19sYXlvdXRfdHJlZVZpc2l0QWZ0ZXIocm9vdCwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQuciAtPSBkcjtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBkM19sYXlvdXRfcGFja1RyYW5zZm9ybShyb290LCB3IC8gMiwgaCAvIDIsIHJhZGl1cyA/IDEgOiAxIC8gTWF0aC5tYXgoMiAqIHJvb3QuciAvIHcsIDIgKiByb290LnIgLyBoKSk7XG4gICAgICByZXR1cm4gbm9kZXM7XG4gICAgfVxuICAgIHBhY2suc2l6ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHNpemU7XG4gICAgICBzaXplID0gXztcbiAgICAgIHJldHVybiBwYWNrO1xuICAgIH07XG4gICAgcGFjay5yYWRpdXMgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiByYWRpdXM7XG4gICAgICByYWRpdXMgPSBfID09IG51bGwgfHwgdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiArXztcbiAgICAgIHJldHVybiBwYWNrO1xuICAgIH07XG4gICAgcGFjay5wYWRkaW5nID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gcGFkZGluZztcbiAgICAgIHBhZGRpbmcgPSArXztcbiAgICAgIHJldHVybiBwYWNrO1xuICAgIH07XG4gICAgcmV0dXJuIGQzX2xheW91dF9oaWVyYXJjaHlSZWJpbmQocGFjaywgaGllcmFyY2h5KTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfbGF5b3V0X3BhY2tTb3J0KGEsIGIpIHtcbiAgICByZXR1cm4gYS52YWx1ZSAtIGIudmFsdWU7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X3BhY2tJbnNlcnQoYSwgYikge1xuICAgIHZhciBjID0gYS5fcGFja19uZXh0O1xuICAgIGEuX3BhY2tfbmV4dCA9IGI7XG4gICAgYi5fcGFja19wcmV2ID0gYTtcbiAgICBiLl9wYWNrX25leHQgPSBjO1xuICAgIGMuX3BhY2tfcHJldiA9IGI7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X3BhY2tTcGxpY2UoYSwgYikge1xuICAgIGEuX3BhY2tfbmV4dCA9IGI7XG4gICAgYi5fcGFja19wcmV2ID0gYTtcbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfcGFja0ludGVyc2VjdHMoYSwgYikge1xuICAgIHZhciBkeCA9IGIueCAtIGEueCwgZHkgPSBiLnkgLSBhLnksIGRyID0gYS5yICsgYi5yO1xuICAgIHJldHVybiAuOTk5ICogZHIgKiBkciA+IGR4ICogZHggKyBkeSAqIGR5O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2xheW91dF9wYWNrU2libGluZ3Mobm9kZSkge1xuICAgIGlmICghKG5vZGVzID0gbm9kZS5jaGlsZHJlbikgfHwgIShuID0gbm9kZXMubGVuZ3RoKSkgcmV0dXJuO1xuICAgIHZhciBub2RlcywgeE1pbiA9IEluZmluaXR5LCB4TWF4ID0gLUluZmluaXR5LCB5TWluID0gSW5maW5pdHksIHlNYXggPSAtSW5maW5pdHksIGEsIGIsIGMsIGksIGosIGssIG47XG4gICAgZnVuY3Rpb24gYm91bmQobm9kZSkge1xuICAgICAgeE1pbiA9IE1hdGgubWluKG5vZGUueCAtIG5vZGUuciwgeE1pbik7XG4gICAgICB4TWF4ID0gTWF0aC5tYXgobm9kZS54ICsgbm9kZS5yLCB4TWF4KTtcbiAgICAgIHlNaW4gPSBNYXRoLm1pbihub2RlLnkgLSBub2RlLnIsIHlNaW4pO1xuICAgICAgeU1heCA9IE1hdGgubWF4KG5vZGUueSArIG5vZGUuciwgeU1heCk7XG4gICAgfVxuICAgIG5vZGVzLmZvckVhY2goZDNfbGF5b3V0X3BhY2tMaW5rKTtcbiAgICBhID0gbm9kZXNbMF07XG4gICAgYS54ID0gLWEucjtcbiAgICBhLnkgPSAwO1xuICAgIGJvdW5kKGEpO1xuICAgIGlmIChuID4gMSkge1xuICAgICAgYiA9IG5vZGVzWzFdO1xuICAgICAgYi54ID0gYi5yO1xuICAgICAgYi55ID0gMDtcbiAgICAgIGJvdW5kKGIpO1xuICAgICAgaWYgKG4gPiAyKSB7XG4gICAgICAgIGMgPSBub2Rlc1syXTtcbiAgICAgICAgZDNfbGF5b3V0X3BhY2tQbGFjZShhLCBiLCBjKTtcbiAgICAgICAgYm91bmQoYyk7XG4gICAgICAgIGQzX2xheW91dF9wYWNrSW5zZXJ0KGEsIGMpO1xuICAgICAgICBhLl9wYWNrX3ByZXYgPSBjO1xuICAgICAgICBkM19sYXlvdXRfcGFja0luc2VydChjLCBiKTtcbiAgICAgICAgYiA9IGEuX3BhY2tfbmV4dDtcbiAgICAgICAgZm9yIChpID0gMzsgaSA8IG47IGkrKykge1xuICAgICAgICAgIGQzX2xheW91dF9wYWNrUGxhY2UoYSwgYiwgYyA9IG5vZGVzW2ldKTtcbiAgICAgICAgICB2YXIgaXNlY3QgPSAwLCBzMSA9IDEsIHMyID0gMTtcbiAgICAgICAgICBmb3IgKGogPSBiLl9wYWNrX25leHQ7IGogIT09IGI7IGogPSBqLl9wYWNrX25leHQsIHMxKyspIHtcbiAgICAgICAgICAgIGlmIChkM19sYXlvdXRfcGFja0ludGVyc2VjdHMoaiwgYykpIHtcbiAgICAgICAgICAgICAgaXNlY3QgPSAxO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzZWN0ID09IDEpIHtcbiAgICAgICAgICAgIGZvciAoayA9IGEuX3BhY2tfcHJldjsgayAhPT0gai5fcGFja19wcmV2OyBrID0gay5fcGFja19wcmV2LCBzMisrKSB7XG4gICAgICAgICAgICAgIGlmIChkM19sYXlvdXRfcGFja0ludGVyc2VjdHMoaywgYykpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNlY3QpIHtcbiAgICAgICAgICAgIGlmIChzMSA8IHMyIHx8IHMxID09IHMyICYmIGIuciA8IGEucikgZDNfbGF5b3V0X3BhY2tTcGxpY2UoYSwgYiA9IGopOyBlbHNlIGQzX2xheW91dF9wYWNrU3BsaWNlKGEgPSBrLCBiKTtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZDNfbGF5b3V0X3BhY2tJbnNlcnQoYSwgYyk7XG4gICAgICAgICAgICBiID0gYztcbiAgICAgICAgICAgIGJvdW5kKGMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB2YXIgY3ggPSAoeE1pbiArIHhNYXgpIC8gMiwgY3kgPSAoeU1pbiArIHlNYXgpIC8gMiwgY3IgPSAwO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIGMgPSBub2Rlc1tpXTtcbiAgICAgIGMueCAtPSBjeDtcbiAgICAgIGMueSAtPSBjeTtcbiAgICAgIGNyID0gTWF0aC5tYXgoY3IsIGMuciArIE1hdGguc3FydChjLnggKiBjLnggKyBjLnkgKiBjLnkpKTtcbiAgICB9XG4gICAgbm9kZS5yID0gY3I7XG4gICAgbm9kZXMuZm9yRWFjaChkM19sYXlvdXRfcGFja1VubGluayk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X3BhY2tMaW5rKG5vZGUpIHtcbiAgICBub2RlLl9wYWNrX25leHQgPSBub2RlLl9wYWNrX3ByZXYgPSBub2RlO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2xheW91dF9wYWNrVW5saW5rKG5vZGUpIHtcbiAgICBkZWxldGUgbm9kZS5fcGFja19uZXh0O1xuICAgIGRlbGV0ZSBub2RlLl9wYWNrX3ByZXY7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X3BhY2tUcmFuc2Zvcm0obm9kZSwgeCwgeSwgaykge1xuICAgIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XG4gICAgbm9kZS54ID0geCArPSBrICogbm9kZS54O1xuICAgIG5vZGUueSA9IHkgKz0gayAqIG5vZGUueTtcbiAgICBub2RlLnIgKj0gaztcbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgIHZhciBpID0gLTEsIG4gPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICB3aGlsZSAoKytpIDwgbikgZDNfbGF5b3V0X3BhY2tUcmFuc2Zvcm0oY2hpbGRyZW5baV0sIHgsIHksIGspO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfcGFja1BsYWNlKGEsIGIsIGMpIHtcbiAgICB2YXIgZGIgPSBhLnIgKyBjLnIsIGR4ID0gYi54IC0gYS54LCBkeSA9IGIueSAtIGEueTtcbiAgICBpZiAoZGIgJiYgKGR4IHx8IGR5KSkge1xuICAgICAgdmFyIGRhID0gYi5yICsgYy5yLCBkYyA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgICAgZGEgKj0gZGE7XG4gICAgICBkYiAqPSBkYjtcbiAgICAgIHZhciB4ID0gLjUgKyAoZGIgLSBkYSkgLyAoMiAqIGRjKSwgeSA9IE1hdGguc3FydChNYXRoLm1heCgwLCAyICogZGEgKiAoZGIgKyBkYykgLSAoZGIgLT0gZGMpICogZGIgLSBkYSAqIGRhKSkgLyAoMiAqIGRjKTtcbiAgICAgIGMueCA9IGEueCArIHggKiBkeCArIHkgKiBkeTtcbiAgICAgIGMueSA9IGEueSArIHggKiBkeSAtIHkgKiBkeDtcbiAgICB9IGVsc2Uge1xuICAgICAgYy54ID0gYS54ICsgZGI7XG4gICAgICBjLnkgPSBhLnk7XG4gICAgfVxuICB9XG4gIGQzLmxheW91dC5jbHVzdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGhpZXJhcmNoeSA9IGQzLmxheW91dC5oaWVyYXJjaHkoKS5zb3J0KG51bGwpLnZhbHVlKG51bGwpLCBzZXBhcmF0aW9uID0gZDNfbGF5b3V0X3RyZWVTZXBhcmF0aW9uLCBzaXplID0gWyAxLCAxIF0sIG5vZGVTaXplID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gY2x1c3RlcihkLCBpKSB7XG4gICAgICB2YXIgbm9kZXMgPSBoaWVyYXJjaHkuY2FsbCh0aGlzLCBkLCBpKSwgcm9vdCA9IG5vZGVzWzBdLCBwcmV2aW91c05vZGUsIHggPSAwO1xuICAgICAgZDNfbGF5b3V0X3RyZWVWaXNpdEFmdGVyKHJvb3QsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbjtcbiAgICAgICAgaWYgKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIG5vZGUueCA9IGQzX2xheW91dF9jbHVzdGVyWChjaGlsZHJlbik7XG4gICAgICAgICAgbm9kZS55ID0gZDNfbGF5b3V0X2NsdXN0ZXJZKGNoaWxkcmVuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlLnggPSBwcmV2aW91c05vZGUgPyB4ICs9IHNlcGFyYXRpb24obm9kZSwgcHJldmlvdXNOb2RlKSA6IDA7XG4gICAgICAgICAgbm9kZS55ID0gMDtcbiAgICAgICAgICBwcmV2aW91c05vZGUgPSBub2RlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHZhciBsZWZ0ID0gZDNfbGF5b3V0X2NsdXN0ZXJMZWZ0KHJvb3QpLCByaWdodCA9IGQzX2xheW91dF9jbHVzdGVyUmlnaHQocm9vdCksIHgwID0gbGVmdC54IC0gc2VwYXJhdGlvbihsZWZ0LCByaWdodCkgLyAyLCB4MSA9IHJpZ2h0LnggKyBzZXBhcmF0aW9uKHJpZ2h0LCBsZWZ0KSAvIDI7XG4gICAgICBkM19sYXlvdXRfdHJlZVZpc2l0QWZ0ZXIocm9vdCwgbm9kZVNpemUgPyBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIG5vZGUueCA9IChub2RlLnggLSByb290LngpICogc2l6ZVswXTtcbiAgICAgICAgbm9kZS55ID0gKHJvb3QueSAtIG5vZGUueSkgKiBzaXplWzFdO1xuICAgICAgfSA6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgbm9kZS54ID0gKG5vZGUueCAtIHgwKSAvICh4MSAtIHgwKSAqIHNpemVbMF07XG4gICAgICAgIG5vZGUueSA9ICgxIC0gKHJvb3QueSA/IG5vZGUueSAvIHJvb3QueSA6IDEpKSAqIHNpemVbMV07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBub2RlcztcbiAgICB9XG4gICAgY2x1c3Rlci5zZXBhcmF0aW9uID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gc2VwYXJhdGlvbjtcbiAgICAgIHNlcGFyYXRpb24gPSB4O1xuICAgICAgcmV0dXJuIGNsdXN0ZXI7XG4gICAgfTtcbiAgICBjbHVzdGVyLnNpemUgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBub2RlU2l6ZSA/IG51bGwgOiBzaXplO1xuICAgICAgbm9kZVNpemUgPSAoc2l6ZSA9IHgpID09IG51bGw7XG4gICAgICByZXR1cm4gY2x1c3RlcjtcbiAgICB9O1xuICAgIGNsdXN0ZXIubm9kZVNpemUgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBub2RlU2l6ZSA/IHNpemUgOiBudWxsO1xuICAgICAgbm9kZVNpemUgPSAoc2l6ZSA9IHgpICE9IG51bGw7XG4gICAgICByZXR1cm4gY2x1c3RlcjtcbiAgICB9O1xuICAgIHJldHVybiBkM19sYXlvdXRfaGllcmFyY2h5UmViaW5kKGNsdXN0ZXIsIGhpZXJhcmNoeSk7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX2xheW91dF9jbHVzdGVyWShjaGlsZHJlbikge1xuICAgIHJldHVybiAxICsgZDMubWF4KGNoaWxkcmVuLCBmdW5jdGlvbihjaGlsZCkge1xuICAgICAgcmV0dXJuIGNoaWxkLnk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X2NsdXN0ZXJYKGNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuLnJlZHVjZShmdW5jdGlvbih4LCBjaGlsZCkge1xuICAgICAgcmV0dXJuIHggKyBjaGlsZC54O1xuICAgIH0sIDApIC8gY2hpbGRyZW4ubGVuZ3RoO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2xheW91dF9jbHVzdGVyTGVmdChub2RlKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbjtcbiAgICByZXR1cm4gY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoID8gZDNfbGF5b3V0X2NsdXN0ZXJMZWZ0KGNoaWxkcmVuWzBdKSA6IG5vZGU7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X2NsdXN0ZXJSaWdodChub2RlKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbiwgbjtcbiAgICByZXR1cm4gY2hpbGRyZW4gJiYgKG4gPSBjaGlsZHJlbi5sZW5ndGgpID8gZDNfbGF5b3V0X2NsdXN0ZXJSaWdodChjaGlsZHJlbltuIC0gMV0pIDogbm9kZTtcbiAgfVxuICBkMy5sYXlvdXQudHJlZW1hcCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBoaWVyYXJjaHkgPSBkMy5sYXlvdXQuaGllcmFyY2h5KCksIHJvdW5kID0gTWF0aC5yb3VuZCwgc2l6ZSA9IFsgMSwgMSBdLCBwYWRkaW5nID0gbnVsbCwgcGFkID0gZDNfbGF5b3V0X3RyZWVtYXBQYWROdWxsLCBzdGlja3kgPSBmYWxzZSwgc3RpY2tpZXMsIG1vZGUgPSBcInNxdWFyaWZ5XCIsIHJhdGlvID0gLjUgKiAoMSArIE1hdGguc3FydCg1KSk7XG4gICAgZnVuY3Rpb24gc2NhbGUoY2hpbGRyZW4sIGspIHtcbiAgICAgIHZhciBpID0gLTEsIG4gPSBjaGlsZHJlbi5sZW5ndGgsIGNoaWxkLCBhcmVhO1xuICAgICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgICAgYXJlYSA9IChjaGlsZCA9IGNoaWxkcmVuW2ldKS52YWx1ZSAqIChrIDwgMCA/IDAgOiBrKTtcbiAgICAgICAgY2hpbGQuYXJlYSA9IGlzTmFOKGFyZWEpIHx8IGFyZWEgPD0gMCA/IDAgOiBhcmVhO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzcXVhcmlmeShub2RlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xuICAgICAgaWYgKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICB2YXIgcmVjdCA9IHBhZChub2RlKSwgcm93ID0gW10sIHJlbWFpbmluZyA9IGNoaWxkcmVuLnNsaWNlKCksIGNoaWxkLCBiZXN0ID0gSW5maW5pdHksIHNjb3JlLCB1ID0gbW9kZSA9PT0gXCJzbGljZVwiID8gcmVjdC5keCA6IG1vZGUgPT09IFwiZGljZVwiID8gcmVjdC5keSA6IG1vZGUgPT09IFwic2xpY2UtZGljZVwiID8gbm9kZS5kZXB0aCAmIDEgPyByZWN0LmR5IDogcmVjdC5keCA6IE1hdGgubWluKHJlY3QuZHgsIHJlY3QuZHkpLCBuO1xuICAgICAgICBzY2FsZShyZW1haW5pbmcsIHJlY3QuZHggKiByZWN0LmR5IC8gbm9kZS52YWx1ZSk7XG4gICAgICAgIHJvdy5hcmVhID0gMDtcbiAgICAgICAgd2hpbGUgKChuID0gcmVtYWluaW5nLmxlbmd0aCkgPiAwKSB7XG4gICAgICAgICAgcm93LnB1c2goY2hpbGQgPSByZW1haW5pbmdbbiAtIDFdKTtcbiAgICAgICAgICByb3cuYXJlYSArPSBjaGlsZC5hcmVhO1xuICAgICAgICAgIGlmIChtb2RlICE9PSBcInNxdWFyaWZ5XCIgfHwgKHNjb3JlID0gd29yc3Qocm93LCB1KSkgPD0gYmVzdCkge1xuICAgICAgICAgICAgcmVtYWluaW5nLnBvcCgpO1xuICAgICAgICAgICAgYmVzdCA9IHNjb3JlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb3cuYXJlYSAtPSByb3cucG9wKCkuYXJlYTtcbiAgICAgICAgICAgIHBvc2l0aW9uKHJvdywgdSwgcmVjdCwgZmFsc2UpO1xuICAgICAgICAgICAgdSA9IE1hdGgubWluKHJlY3QuZHgsIHJlY3QuZHkpO1xuICAgICAgICAgICAgcm93Lmxlbmd0aCA9IHJvdy5hcmVhID0gMDtcbiAgICAgICAgICAgIGJlc3QgPSBJbmZpbml0eTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdy5sZW5ndGgpIHtcbiAgICAgICAgICBwb3NpdGlvbihyb3csIHUsIHJlY3QsIHRydWUpO1xuICAgICAgICAgIHJvdy5sZW5ndGggPSByb3cuYXJlYSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChzcXVhcmlmeSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN0aWNraWZ5KG5vZGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XG4gICAgICBpZiAoY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIHZhciByZWN0ID0gcGFkKG5vZGUpLCByZW1haW5pbmcgPSBjaGlsZHJlbi5zbGljZSgpLCBjaGlsZCwgcm93ID0gW107XG4gICAgICAgIHNjYWxlKHJlbWFpbmluZywgcmVjdC5keCAqIHJlY3QuZHkgLyBub2RlLnZhbHVlKTtcbiAgICAgICAgcm93LmFyZWEgPSAwO1xuICAgICAgICB3aGlsZSAoY2hpbGQgPSByZW1haW5pbmcucG9wKCkpIHtcbiAgICAgICAgICByb3cucHVzaChjaGlsZCk7XG4gICAgICAgICAgcm93LmFyZWEgKz0gY2hpbGQuYXJlYTtcbiAgICAgICAgICBpZiAoY2hpbGQueiAhPSBudWxsKSB7XG4gICAgICAgICAgICBwb3NpdGlvbihyb3csIGNoaWxkLnogPyByZWN0LmR4IDogcmVjdC5keSwgcmVjdCwgIXJlbWFpbmluZy5sZW5ndGgpO1xuICAgICAgICAgICAgcm93Lmxlbmd0aCA9IHJvdy5hcmVhID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChzdGlja2lmeSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdvcnN0KHJvdywgdSkge1xuICAgICAgdmFyIHMgPSByb3cuYXJlYSwgciwgcm1heCA9IDAsIHJtaW4gPSBJbmZpbml0eSwgaSA9IC0xLCBuID0gcm93Lmxlbmd0aDtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICAgIGlmICghKHIgPSByb3dbaV0uYXJlYSkpIGNvbnRpbnVlO1xuICAgICAgICBpZiAociA8IHJtaW4pIHJtaW4gPSByO1xuICAgICAgICBpZiAociA+IHJtYXgpIHJtYXggPSByO1xuICAgICAgfVxuICAgICAgcyAqPSBzO1xuICAgICAgdSAqPSB1O1xuICAgICAgcmV0dXJuIHMgPyBNYXRoLm1heCh1ICogcm1heCAqIHJhdGlvIC8gcywgcyAvICh1ICogcm1pbiAqIHJhdGlvKSkgOiBJbmZpbml0eTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcG9zaXRpb24ocm93LCB1LCByZWN0LCBmbHVzaCkge1xuICAgICAgdmFyIGkgPSAtMSwgbiA9IHJvdy5sZW5ndGgsIHggPSByZWN0LngsIHkgPSByZWN0LnksIHYgPSB1ID8gcm91bmQocm93LmFyZWEgLyB1KSA6IDAsIG87XG4gICAgICBpZiAodSA9PSByZWN0LmR4KSB7XG4gICAgICAgIGlmIChmbHVzaCB8fCB2ID4gcmVjdC5keSkgdiA9IHJlY3QuZHk7XG4gICAgICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICAgICAgbyA9IHJvd1tpXTtcbiAgICAgICAgICBvLnggPSB4O1xuICAgICAgICAgIG8ueSA9IHk7XG4gICAgICAgICAgby5keSA9IHY7XG4gICAgICAgICAgeCArPSBvLmR4ID0gTWF0aC5taW4ocmVjdC54ICsgcmVjdC5keCAtIHgsIHYgPyByb3VuZChvLmFyZWEgLyB2KSA6IDApO1xuICAgICAgICB9XG4gICAgICAgIG8ueiA9IHRydWU7XG4gICAgICAgIG8uZHggKz0gcmVjdC54ICsgcmVjdC5keCAtIHg7XG4gICAgICAgIHJlY3QueSArPSB2O1xuICAgICAgICByZWN0LmR5IC09IHY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZmx1c2ggfHwgdiA+IHJlY3QuZHgpIHYgPSByZWN0LmR4O1xuICAgICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICAgIG8gPSByb3dbaV07XG4gICAgICAgICAgby54ID0geDtcbiAgICAgICAgICBvLnkgPSB5O1xuICAgICAgICAgIG8uZHggPSB2O1xuICAgICAgICAgIHkgKz0gby5keSA9IE1hdGgubWluKHJlY3QueSArIHJlY3QuZHkgLSB5LCB2ID8gcm91bmQoby5hcmVhIC8gdikgOiAwKTtcbiAgICAgICAgfVxuICAgICAgICBvLnogPSBmYWxzZTtcbiAgICAgICAgby5keSArPSByZWN0LnkgKyByZWN0LmR5IC0geTtcbiAgICAgICAgcmVjdC54ICs9IHY7XG4gICAgICAgIHJlY3QuZHggLT0gdjtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdHJlZW1hcChkKSB7XG4gICAgICB2YXIgbm9kZXMgPSBzdGlja2llcyB8fCBoaWVyYXJjaHkoZCksIHJvb3QgPSBub2Rlc1swXTtcbiAgICAgIHJvb3QueCA9IDA7XG4gICAgICByb290LnkgPSAwO1xuICAgICAgcm9vdC5keCA9IHNpemVbMF07XG4gICAgICByb290LmR5ID0gc2l6ZVsxXTtcbiAgICAgIGlmIChzdGlja2llcykgaGllcmFyY2h5LnJldmFsdWUocm9vdCk7XG4gICAgICBzY2FsZShbIHJvb3QgXSwgcm9vdC5keCAqIHJvb3QuZHkgLyByb290LnZhbHVlKTtcbiAgICAgIChzdGlja2llcyA/IHN0aWNraWZ5IDogc3F1YXJpZnkpKHJvb3QpO1xuICAgICAgaWYgKHN0aWNreSkgc3RpY2tpZXMgPSBub2RlcztcbiAgICAgIHJldHVybiBub2RlcztcbiAgICB9XG4gICAgdHJlZW1hcC5zaXplID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gc2l6ZTtcbiAgICAgIHNpemUgPSB4O1xuICAgICAgcmV0dXJuIHRyZWVtYXA7XG4gICAgfTtcbiAgICB0cmVlbWFwLnBhZGRpbmcgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwYWRkaW5nO1xuICAgICAgZnVuY3Rpb24gcGFkRnVuY3Rpb24obm9kZSkge1xuICAgICAgICB2YXIgcCA9IHguY2FsbCh0cmVlbWFwLCBub2RlLCBub2RlLmRlcHRoKTtcbiAgICAgICAgcmV0dXJuIHAgPT0gbnVsbCA/IGQzX2xheW91dF90cmVlbWFwUGFkTnVsbChub2RlKSA6IGQzX2xheW91dF90cmVlbWFwUGFkKG5vZGUsIHR5cGVvZiBwID09PSBcIm51bWJlclwiID8gWyBwLCBwLCBwLCBwIF0gOiBwKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIHBhZENvbnN0YW50KG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGQzX2xheW91dF90cmVlbWFwUGFkKG5vZGUsIHgpO1xuICAgICAgfVxuICAgICAgdmFyIHR5cGU7XG4gICAgICBwYWQgPSAocGFkZGluZyA9IHgpID09IG51bGwgPyBkM19sYXlvdXRfdHJlZW1hcFBhZE51bGwgOiAodHlwZSA9IHR5cGVvZiB4KSA9PT0gXCJmdW5jdGlvblwiID8gcGFkRnVuY3Rpb24gOiB0eXBlID09PSBcIm51bWJlclwiID8gKHggPSBbIHgsIHgsIHgsIHggXSwgXG4gICAgICBwYWRDb25zdGFudCkgOiBwYWRDb25zdGFudDtcbiAgICAgIHJldHVybiB0cmVlbWFwO1xuICAgIH07XG4gICAgdHJlZW1hcC5yb3VuZCA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHJvdW5kICE9IE51bWJlcjtcbiAgICAgIHJvdW5kID0geCA/IE1hdGgucm91bmQgOiBOdW1iZXI7XG4gICAgICByZXR1cm4gdHJlZW1hcDtcbiAgICB9O1xuICAgIHRyZWVtYXAuc3RpY2t5ID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gc3RpY2t5O1xuICAgICAgc3RpY2t5ID0geDtcbiAgICAgIHN0aWNraWVzID0gbnVsbDtcbiAgICAgIHJldHVybiB0cmVlbWFwO1xuICAgIH07XG4gICAgdHJlZW1hcC5yYXRpbyA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHJhdGlvO1xuICAgICAgcmF0aW8gPSB4O1xuICAgICAgcmV0dXJuIHRyZWVtYXA7XG4gICAgfTtcbiAgICB0cmVlbWFwLm1vZGUgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBtb2RlO1xuICAgICAgbW9kZSA9IHggKyBcIlwiO1xuICAgICAgcmV0dXJuIHRyZWVtYXA7XG4gICAgfTtcbiAgICByZXR1cm4gZDNfbGF5b3V0X2hpZXJhcmNoeVJlYmluZCh0cmVlbWFwLCBoaWVyYXJjaHkpO1xuICB9O1xuICBmdW5jdGlvbiBkM19sYXlvdXRfdHJlZW1hcFBhZE51bGwobm9kZSkge1xuICAgIHJldHVybiB7XG4gICAgICB4OiBub2RlLngsXG4gICAgICB5OiBub2RlLnksXG4gICAgICBkeDogbm9kZS5keCxcbiAgICAgIGR5OiBub2RlLmR5XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfdHJlZW1hcFBhZChub2RlLCBwYWRkaW5nKSB7XG4gICAgdmFyIHggPSBub2RlLnggKyBwYWRkaW5nWzNdLCB5ID0gbm9kZS55ICsgcGFkZGluZ1swXSwgZHggPSBub2RlLmR4IC0gcGFkZGluZ1sxXSAtIHBhZGRpbmdbM10sIGR5ID0gbm9kZS5keSAtIHBhZGRpbmdbMF0gLSBwYWRkaW5nWzJdO1xuICAgIGlmIChkeCA8IDApIHtcbiAgICAgIHggKz0gZHggLyAyO1xuICAgICAgZHggPSAwO1xuICAgIH1cbiAgICBpZiAoZHkgPCAwKSB7XG4gICAgICB5ICs9IGR5IC8gMjtcbiAgICAgIGR5ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5LFxuICAgICAgZHg6IGR4LFxuICAgICAgZHk6IGR5XG4gICAgfTtcbiAgfVxuICBkMy5yYW5kb20gPSB7XG4gICAgbm9ybWFsOiBmdW5jdGlvbijCtSwgz4MpIHtcbiAgICAgIHZhciBuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIGlmIChuIDwgMikgz4MgPSAxO1xuICAgICAgaWYgKG4gPCAxKSDCtSA9IDA7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB4LCB5LCByO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgeCA9IE1hdGgucmFuZG9tKCkgKiAyIC0gMTtcbiAgICAgICAgICB5ID0gTWF0aC5yYW5kb20oKSAqIDIgLSAxO1xuICAgICAgICAgIHIgPSB4ICogeCArIHkgKiB5O1xuICAgICAgICB9IHdoaWxlICghciB8fCByID4gMSk7XG4gICAgICAgIHJldHVybiDCtSArIM+DICogeCAqIE1hdGguc3FydCgtMiAqIE1hdGgubG9nKHIpIC8gcik7XG4gICAgICB9O1xuICAgIH0sXG4gICAgbG9nTm9ybWFsOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByYW5kb20gPSBkMy5yYW5kb20ubm9ybWFsLmFwcGx5KGQzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5leHAocmFuZG9tKCkpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIGlyd2luSGFsbDogZnVuY3Rpb24obSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKHZhciBzID0gMCwgaiA9IDA7IGogPCBtOyBqKyspIHMgKz0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgcmV0dXJuIHMgLyBtO1xuICAgICAgfTtcbiAgICB9XG4gIH07XG4gIGQzLnNjYWxlID0ge307XG4gIGZ1bmN0aW9uIGQzX3NjYWxlRXh0ZW50KGRvbWFpbikge1xuICAgIHZhciBzdGFydCA9IGRvbWFpblswXSwgc3RvcCA9IGRvbWFpbltkb21haW4ubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIHN0YXJ0IDwgc3RvcCA/IFsgc3RhcnQsIHN0b3AgXSA6IFsgc3RvcCwgc3RhcnQgXTtcbiAgfVxuICBmdW5jdGlvbiBkM19zY2FsZVJhbmdlKHNjYWxlKSB7XG4gICAgcmV0dXJuIHNjYWxlLnJhbmdlRXh0ZW50ID8gc2NhbGUucmFuZ2VFeHRlbnQoKSA6IGQzX3NjYWxlRXh0ZW50KHNjYWxlLnJhbmdlKCkpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3NjYWxlX2JpbGluZWFyKGRvbWFpbiwgcmFuZ2UsIHVuaW50ZXJwb2xhdGUsIGludGVycG9sYXRlKSB7XG4gICAgdmFyIHUgPSB1bmludGVycG9sYXRlKGRvbWFpblswXSwgZG9tYWluWzFdKSwgaSA9IGludGVycG9sYXRlKHJhbmdlWzBdLCByYW5nZVsxXSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiBpKHUoeCkpO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZDNfc2NhbGVfbmljZShkb21haW4sIG5pY2UpIHtcbiAgICB2YXIgaTAgPSAwLCBpMSA9IGRvbWFpbi5sZW5ndGggLSAxLCB4MCA9IGRvbWFpbltpMF0sIHgxID0gZG9tYWluW2kxXSwgZHg7XG4gICAgaWYgKHgxIDwgeDApIHtcbiAgICAgIGR4ID0gaTAsIGkwID0gaTEsIGkxID0gZHg7XG4gICAgICBkeCA9IHgwLCB4MCA9IHgxLCB4MSA9IGR4O1xuICAgIH1cbiAgICBkb21haW5baTBdID0gbmljZS5mbG9vcih4MCk7XG4gICAgZG9tYWluW2kxXSA9IG5pY2UuY2VpbCh4MSk7XG4gICAgcmV0dXJuIGRvbWFpbjtcbiAgfVxuICBmdW5jdGlvbiBkM19zY2FsZV9uaWNlU3RlcChzdGVwKSB7XG4gICAgcmV0dXJuIHN0ZXAgPyB7XG4gICAgICBmbG9vcjogZnVuY3Rpb24oeCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih4IC8gc3RlcCkgKiBzdGVwO1xuICAgICAgfSxcbiAgICAgIGNlaWw6IGZ1bmN0aW9uKHgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh4IC8gc3RlcCkgKiBzdGVwO1xuICAgICAgfVxuICAgIH0gOiBkM19zY2FsZV9uaWNlSWRlbnRpdHk7XG4gIH1cbiAgdmFyIGQzX3NjYWxlX25pY2VJZGVudGl0eSA9IHtcbiAgICBmbG9vcjogZDNfaWRlbnRpdHksXG4gICAgY2VpbDogZDNfaWRlbnRpdHlcbiAgfTtcbiAgZnVuY3Rpb24gZDNfc2NhbGVfcG9seWxpbmVhcihkb21haW4sIHJhbmdlLCB1bmludGVycG9sYXRlLCBpbnRlcnBvbGF0ZSkge1xuICAgIHZhciB1ID0gW10sIGkgPSBbXSwgaiA9IDAsIGsgPSBNYXRoLm1pbihkb21haW4ubGVuZ3RoLCByYW5nZS5sZW5ndGgpIC0gMTtcbiAgICBpZiAoZG9tYWluW2tdIDwgZG9tYWluWzBdKSB7XG4gICAgICBkb21haW4gPSBkb21haW4uc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgICByYW5nZSA9IHJhbmdlLnNsaWNlKCkucmV2ZXJzZSgpO1xuICAgIH1cbiAgICB3aGlsZSAoKytqIDw9IGspIHtcbiAgICAgIHUucHVzaCh1bmludGVycG9sYXRlKGRvbWFpbltqIC0gMV0sIGRvbWFpbltqXSkpO1xuICAgICAgaS5wdXNoKGludGVycG9sYXRlKHJhbmdlW2ogLSAxXSwgcmFuZ2Vbal0pKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHgpIHtcbiAgICAgIHZhciBqID0gZDMuYmlzZWN0KGRvbWFpbiwgeCwgMSwgaykgLSAxO1xuICAgICAgcmV0dXJuIGlbal0odVtqXSh4KSk7XG4gICAgfTtcbiAgfVxuICBkMy5zY2FsZS5saW5lYXIgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZDNfc2NhbGVfbGluZWFyKFsgMCwgMSBdLCBbIDAsIDEgXSwgZDNfaW50ZXJwb2xhdGUsIGZhbHNlKTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfc2NhbGVfbGluZWFyKGRvbWFpbiwgcmFuZ2UsIGludGVycG9sYXRlLCBjbGFtcCkge1xuICAgIHZhciBvdXRwdXQsIGlucHV0O1xuICAgIGZ1bmN0aW9uIHJlc2NhbGUoKSB7XG4gICAgICB2YXIgbGluZWFyID0gTWF0aC5taW4oZG9tYWluLmxlbmd0aCwgcmFuZ2UubGVuZ3RoKSA+IDIgPyBkM19zY2FsZV9wb2x5bGluZWFyIDogZDNfc2NhbGVfYmlsaW5lYXIsIHVuaW50ZXJwb2xhdGUgPSBjbGFtcCA/IGQzX3VuaW50ZXJwb2xhdGVDbGFtcCA6IGQzX3VuaW50ZXJwb2xhdGVOdW1iZXI7XG4gICAgICBvdXRwdXQgPSBsaW5lYXIoZG9tYWluLCByYW5nZSwgdW5pbnRlcnBvbGF0ZSwgaW50ZXJwb2xhdGUpO1xuICAgICAgaW5wdXQgPSBsaW5lYXIocmFuZ2UsIGRvbWFpbiwgdW5pbnRlcnBvbGF0ZSwgZDNfaW50ZXJwb2xhdGUpO1xuICAgICAgcmV0dXJuIHNjYWxlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY2FsZSh4KSB7XG4gICAgICByZXR1cm4gb3V0cHV0KHgpO1xuICAgIH1cbiAgICBzY2FsZS5pbnZlcnQgPSBmdW5jdGlvbih5KSB7XG4gICAgICByZXR1cm4gaW5wdXQoeSk7XG4gICAgfTtcbiAgICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBkb21haW47XG4gICAgICBkb21haW4gPSB4Lm1hcChOdW1iZXIpO1xuICAgICAgcmV0dXJuIHJlc2NhbGUoKTtcbiAgICB9O1xuICAgIHNjYWxlLnJhbmdlID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gcmFuZ2U7XG4gICAgICByYW5nZSA9IHg7XG4gICAgICByZXR1cm4gcmVzY2FsZSgpO1xuICAgIH07XG4gICAgc2NhbGUucmFuZ2VSb3VuZCA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiBzY2FsZS5yYW5nZSh4KS5pbnRlcnBvbGF0ZShkM19pbnRlcnBvbGF0ZVJvdW5kKTtcbiAgICB9O1xuICAgIHNjYWxlLmNsYW1wID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gY2xhbXA7XG4gICAgICBjbGFtcCA9IHg7XG4gICAgICByZXR1cm4gcmVzY2FsZSgpO1xuICAgIH07XG4gICAgc2NhbGUuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBpbnRlcnBvbGF0ZTtcbiAgICAgIGludGVycG9sYXRlID0geDtcbiAgICAgIHJldHVybiByZXNjYWxlKCk7XG4gICAgfTtcbiAgICBzY2FsZS50aWNrcyA9IGZ1bmN0aW9uKG0pIHtcbiAgICAgIHJldHVybiBkM19zY2FsZV9saW5lYXJUaWNrcyhkb21haW4sIG0pO1xuICAgIH07XG4gICAgc2NhbGUudGlja0Zvcm1hdCA9IGZ1bmN0aW9uKG0sIGZvcm1hdCkge1xuICAgICAgcmV0dXJuIGQzX3NjYWxlX2xpbmVhclRpY2tGb3JtYXQoZG9tYWluLCBtLCBmb3JtYXQpO1xuICAgIH07XG4gICAgc2NhbGUubmljZSA9IGZ1bmN0aW9uKG0pIHtcbiAgICAgIGQzX3NjYWxlX2xpbmVhck5pY2UoZG9tYWluLCBtKTtcbiAgICAgIHJldHVybiByZXNjYWxlKCk7XG4gICAgfTtcbiAgICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZDNfc2NhbGVfbGluZWFyKGRvbWFpbiwgcmFuZ2UsIGludGVycG9sYXRlLCBjbGFtcCk7XG4gICAgfTtcbiAgICByZXR1cm4gcmVzY2FsZSgpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3NjYWxlX2xpbmVhclJlYmluZChzY2FsZSwgbGluZWFyKSB7XG4gICAgcmV0dXJuIGQzLnJlYmluZChzY2FsZSwgbGluZWFyLCBcInJhbmdlXCIsIFwicmFuZ2VSb3VuZFwiLCBcImludGVycG9sYXRlXCIsIFwiY2xhbXBcIik7XG4gIH1cbiAgZnVuY3Rpb24gZDNfc2NhbGVfbGluZWFyTmljZShkb21haW4sIG0pIHtcbiAgICByZXR1cm4gZDNfc2NhbGVfbmljZShkb21haW4sIGQzX3NjYWxlX25pY2VTdGVwKGQzX3NjYWxlX2xpbmVhclRpY2tSYW5nZShkb21haW4sIG0pWzJdKSk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfc2NhbGVfbGluZWFyVGlja1JhbmdlKGRvbWFpbiwgbSkge1xuICAgIGlmIChtID09IG51bGwpIG0gPSAxMDtcbiAgICB2YXIgZXh0ZW50ID0gZDNfc2NhbGVFeHRlbnQoZG9tYWluKSwgc3BhbiA9IGV4dGVudFsxXSAtIGV4dGVudFswXSwgc3RlcCA9IE1hdGgucG93KDEwLCBNYXRoLmZsb29yKE1hdGgubG9nKHNwYW4gLyBtKSAvIE1hdGguTE4xMCkpLCBlcnIgPSBtIC8gc3BhbiAqIHN0ZXA7XG4gICAgaWYgKGVyciA8PSAuMTUpIHN0ZXAgKj0gMTA7IGVsc2UgaWYgKGVyciA8PSAuMzUpIHN0ZXAgKj0gNTsgZWxzZSBpZiAoZXJyIDw9IC43NSkgc3RlcCAqPSAyO1xuICAgIGV4dGVudFswXSA9IE1hdGguY2VpbChleHRlbnRbMF0gLyBzdGVwKSAqIHN0ZXA7XG4gICAgZXh0ZW50WzFdID0gTWF0aC5mbG9vcihleHRlbnRbMV0gLyBzdGVwKSAqIHN0ZXAgKyBzdGVwICogLjU7XG4gICAgZXh0ZW50WzJdID0gc3RlcDtcbiAgICByZXR1cm4gZXh0ZW50O1xuICB9XG4gIGZ1bmN0aW9uIGQzX3NjYWxlX2xpbmVhclRpY2tzKGRvbWFpbiwgbSkge1xuICAgIHJldHVybiBkMy5yYW5nZS5hcHBseShkMywgZDNfc2NhbGVfbGluZWFyVGlja1JhbmdlKGRvbWFpbiwgbSkpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3NjYWxlX2xpbmVhclRpY2tGb3JtYXQoZG9tYWluLCBtLCBmb3JtYXQpIHtcbiAgICB2YXIgcHJlY2lzaW9uID0gLU1hdGguZmxvb3IoTWF0aC5sb2coZDNfc2NhbGVfbGluZWFyVGlja1JhbmdlKGRvbWFpbiwgbSlbMl0pIC8gTWF0aC5MTjEwICsgLjAxKTtcbiAgICByZXR1cm4gZDMuZm9ybWF0KGZvcm1hdCA/IGZvcm1hdC5yZXBsYWNlKGQzX2Zvcm1hdF9yZSwgZnVuY3Rpb24oYSwgYiwgYywgZCwgZSwgZiwgZywgaCwgaSwgaikge1xuICAgICAgcmV0dXJuIFsgYiwgYywgZCwgZSwgZiwgZywgaCwgaSB8fCBcIi5cIiArIChwcmVjaXNpb24gLSAoaiA9PT0gXCIlXCIpICogMiksIGogXS5qb2luKFwiXCIpO1xuICAgIH0pIDogXCIsLlwiICsgcHJlY2lzaW9uICsgXCJmXCIpO1xuICB9XG4gIGQzLnNjYWxlLmxvZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkM19zY2FsZV9sb2coZDMuc2NhbGUubGluZWFyKCkuZG9tYWluKFsgMCwgMSBdKSwgMTAsIHRydWUsIFsgMSwgMTAgXSk7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX3NjYWxlX2xvZyhsaW5lYXIsIGJhc2UsIHBvc2l0aXZlLCBkb21haW4pIHtcbiAgICBmdW5jdGlvbiBsb2coeCkge1xuICAgICAgcmV0dXJuIChwb3NpdGl2ZSA/IE1hdGgubG9nKHggPCAwID8gMCA6IHgpIDogLU1hdGgubG9nKHggPiAwID8gMCA6IC14KSkgLyBNYXRoLmxvZyhiYXNlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcG93KHgpIHtcbiAgICAgIHJldHVybiBwb3NpdGl2ZSA/IE1hdGgucG93KGJhc2UsIHgpIDogLU1hdGgucG93KGJhc2UsIC14KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NhbGUoeCkge1xuICAgICAgcmV0dXJuIGxpbmVhcihsb2coeCkpO1xuICAgIH1cbiAgICBzY2FsZS5pbnZlcnQgPSBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gcG93KGxpbmVhci5pbnZlcnQoeCkpO1xuICAgIH07XG4gICAgc2NhbGUuZG9tYWluID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gZG9tYWluO1xuICAgICAgcG9zaXRpdmUgPSB4WzBdID49IDA7XG4gICAgICBsaW5lYXIuZG9tYWluKChkb21haW4gPSB4Lm1hcChOdW1iZXIpKS5tYXAobG9nKSk7XG4gICAgICByZXR1cm4gc2NhbGU7XG4gICAgfTtcbiAgICBzY2FsZS5iYXNlID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gYmFzZTtcbiAgICAgIGJhc2UgPSArXztcbiAgICAgIGxpbmVhci5kb21haW4oZG9tYWluLm1hcChsb2cpKTtcbiAgICAgIHJldHVybiBzY2FsZTtcbiAgICB9O1xuICAgIHNjYWxlLm5pY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBuaWNlZCA9IGQzX3NjYWxlX25pY2UoZG9tYWluLm1hcChsb2cpLCBwb3NpdGl2ZSA/IE1hdGggOiBkM19zY2FsZV9sb2dOaWNlTmVnYXRpdmUpO1xuICAgICAgbGluZWFyLmRvbWFpbihuaWNlZCk7XG4gICAgICBkb21haW4gPSBuaWNlZC5tYXAocG93KTtcbiAgICAgIHJldHVybiBzY2FsZTtcbiAgICB9O1xuICAgIHNjYWxlLnRpY2tzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZXh0ZW50ID0gZDNfc2NhbGVFeHRlbnQoZG9tYWluKSwgdGlja3MgPSBbXSwgdSA9IGV4dGVudFswXSwgdiA9IGV4dGVudFsxXSwgaSA9IE1hdGguZmxvb3IobG9nKHUpKSwgaiA9IE1hdGguY2VpbChsb2codikpLCBuID0gYmFzZSAlIDEgPyAyIDogYmFzZTtcbiAgICAgIGlmIChpc0Zpbml0ZShqIC0gaSkpIHtcbiAgICAgICAgaWYgKHBvc2l0aXZlKSB7XG4gICAgICAgICAgZm9yICg7aSA8IGo7IGkrKykgZm9yICh2YXIgayA9IDE7IGsgPCBuOyBrKyspIHRpY2tzLnB1c2gocG93KGkpICogayk7XG4gICAgICAgICAgdGlja3MucHVzaChwb3coaSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpY2tzLnB1c2gocG93KGkpKTtcbiAgICAgICAgICBmb3IgKDtpKysgPCBqOyApIGZvciAodmFyIGsgPSBuIC0gMTsgayA+IDA7IGstLSkgdGlja3MucHVzaChwb3coaSkgKiBrKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyB0aWNrc1tpXSA8IHU7IGkrKykge31cbiAgICAgICAgZm9yIChqID0gdGlja3MubGVuZ3RoOyB0aWNrc1tqIC0gMV0gPiB2OyBqLS0pIHt9XG4gICAgICAgIHRpY2tzID0gdGlja3Muc2xpY2UoaSwgaik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGlja3M7XG4gICAgfTtcbiAgICBzY2FsZS50aWNrRm9ybWF0ID0gZnVuY3Rpb24obiwgZm9ybWF0KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBkM19zY2FsZV9sb2dGb3JtYXQ7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIGZvcm1hdCA9IGQzX3NjYWxlX2xvZ0Zvcm1hdDsgZWxzZSBpZiAodHlwZW9mIGZvcm1hdCAhPT0gXCJmdW5jdGlvblwiKSBmb3JtYXQgPSBkMy5mb3JtYXQoZm9ybWF0KTtcbiAgICAgIHZhciBrID0gTWF0aC5tYXgoLjEsIG4gLyBzY2FsZS50aWNrcygpLmxlbmd0aCksIGYgPSBwb3NpdGl2ZSA/IChlID0gMWUtMTIsIE1hdGguY2VpbCkgOiAoZSA9IC0xZS0xMiwgXG4gICAgICBNYXRoLmZsb29yKSwgZTtcbiAgICAgIHJldHVybiBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkIC8gcG93KGYobG9nKGQpICsgZSkpIDw9IGsgPyBmb3JtYXQoZCkgOiBcIlwiO1xuICAgICAgfTtcbiAgICB9O1xuICAgIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBkM19zY2FsZV9sb2cobGluZWFyLmNvcHkoKSwgYmFzZSwgcG9zaXRpdmUsIGRvbWFpbik7XG4gICAgfTtcbiAgICByZXR1cm4gZDNfc2NhbGVfbGluZWFyUmViaW5kKHNjYWxlLCBsaW5lYXIpO1xuICB9XG4gIHZhciBkM19zY2FsZV9sb2dGb3JtYXQgPSBkMy5mb3JtYXQoXCIuMGVcIiksIGQzX3NjYWxlX2xvZ05pY2VOZWdhdGl2ZSA9IHtcbiAgICBmbG9vcjogZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIC1NYXRoLmNlaWwoLXgpO1xuICAgIH0sXG4gICAgY2VpbDogZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIC1NYXRoLmZsb29yKC14KTtcbiAgICB9XG4gIH07XG4gIGQzLnNjYWxlLnBvdyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkM19zY2FsZV9wb3coZDMuc2NhbGUubGluZWFyKCksIDEsIFsgMCwgMSBdKTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfc2NhbGVfcG93KGxpbmVhciwgZXhwb25lbnQsIGRvbWFpbikge1xuICAgIHZhciBwb3dwID0gZDNfc2NhbGVfcG93UG93KGV4cG9uZW50KSwgcG93YiA9IGQzX3NjYWxlX3Bvd1BvdygxIC8gZXhwb25lbnQpO1xuICAgIGZ1bmN0aW9uIHNjYWxlKHgpIHtcbiAgICAgIHJldHVybiBsaW5lYXIocG93cCh4KSk7XG4gICAgfVxuICAgIHNjYWxlLmludmVydCA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiBwb3diKGxpbmVhci5pbnZlcnQoeCkpO1xuICAgIH07XG4gICAgc2NhbGUuZG9tYWluID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gZG9tYWluO1xuICAgICAgbGluZWFyLmRvbWFpbigoZG9tYWluID0geC5tYXAoTnVtYmVyKSkubWFwKHBvd3ApKTtcbiAgICAgIHJldHVybiBzY2FsZTtcbiAgICB9O1xuICAgIHNjYWxlLnRpY2tzID0gZnVuY3Rpb24obSkge1xuICAgICAgcmV0dXJuIGQzX3NjYWxlX2xpbmVhclRpY2tzKGRvbWFpbiwgbSk7XG4gICAgfTtcbiAgICBzY2FsZS50aWNrRm9ybWF0ID0gZnVuY3Rpb24obSwgZm9ybWF0KSB7XG4gICAgICByZXR1cm4gZDNfc2NhbGVfbGluZWFyVGlja0Zvcm1hdChkb21haW4sIG0sIGZvcm1hdCk7XG4gICAgfTtcbiAgICBzY2FsZS5uaWNlID0gZnVuY3Rpb24obSkge1xuICAgICAgcmV0dXJuIHNjYWxlLmRvbWFpbihkM19zY2FsZV9saW5lYXJOaWNlKGRvbWFpbiwgbSkpO1xuICAgIH07XG4gICAgc2NhbGUuZXhwb25lbnQgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBleHBvbmVudDtcbiAgICAgIHBvd3AgPSBkM19zY2FsZV9wb3dQb3coZXhwb25lbnQgPSB4KTtcbiAgICAgIHBvd2IgPSBkM19zY2FsZV9wb3dQb3coMSAvIGV4cG9uZW50KTtcbiAgICAgIGxpbmVhci5kb21haW4oZG9tYWluLm1hcChwb3dwKSk7XG4gICAgICByZXR1cm4gc2NhbGU7XG4gICAgfTtcbiAgICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZDNfc2NhbGVfcG93KGxpbmVhci5jb3B5KCksIGV4cG9uZW50LCBkb21haW4pO1xuICAgIH07XG4gICAgcmV0dXJuIGQzX3NjYWxlX2xpbmVhclJlYmluZChzY2FsZSwgbGluZWFyKTtcbiAgfVxuICBmdW5jdGlvbiBkM19zY2FsZV9wb3dQb3coZSkge1xuICAgIHJldHVybiBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4geCA8IDAgPyAtTWF0aC5wb3coLXgsIGUpIDogTWF0aC5wb3coeCwgZSk7XG4gICAgfTtcbiAgfVxuICBkMy5zY2FsZS5zcXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlLnBvdygpLmV4cG9uZW50KC41KTtcbiAgfTtcbiAgZDMuc2NhbGUub3JkaW5hbCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkM19zY2FsZV9vcmRpbmFsKFtdLCB7XG4gICAgICB0OiBcInJhbmdlXCIsXG4gICAgICBhOiBbIFtdIF1cbiAgICB9KTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfc2NhbGVfb3JkaW5hbChkb21haW4sIHJhbmdlcikge1xuICAgIHZhciBpbmRleCwgcmFuZ2UsIHJhbmdlQmFuZDtcbiAgICBmdW5jdGlvbiBzY2FsZSh4KSB7XG4gICAgICByZXR1cm4gcmFuZ2VbKChpbmRleC5nZXQoeCkgfHwgaW5kZXguc2V0KHgsIGRvbWFpbi5wdXNoKHgpKSkgLSAxKSAlIHJhbmdlLmxlbmd0aF07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN0ZXBzKHN0YXJ0LCBzdGVwKSB7XG4gICAgICByZXR1cm4gZDMucmFuZ2UoZG9tYWluLmxlbmd0aCkubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgcmV0dXJuIHN0YXJ0ICsgc3RlcCAqIGk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgc2NhbGUuZG9tYWluID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gZG9tYWluO1xuICAgICAgZG9tYWluID0gW107XG4gICAgICBpbmRleCA9IG5ldyBkM19NYXAoKTtcbiAgICAgIHZhciBpID0gLTEsIG4gPSB4Lmxlbmd0aCwgeGk7XG4gICAgICB3aGlsZSAoKytpIDwgbikgaWYgKCFpbmRleC5oYXMoeGkgPSB4W2ldKSkgaW5kZXguc2V0KHhpLCBkb21haW4ucHVzaCh4aSkpO1xuICAgICAgcmV0dXJuIHNjYWxlW3Jhbmdlci50XS5hcHBseShzY2FsZSwgcmFuZ2VyLmEpO1xuICAgIH07XG4gICAgc2NhbGUucmFuZ2UgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiByYW5nZTtcbiAgICAgIHJhbmdlID0geDtcbiAgICAgIHJhbmdlQmFuZCA9IDA7XG4gICAgICByYW5nZXIgPSB7XG4gICAgICAgIHQ6IFwicmFuZ2VcIixcbiAgICAgICAgYTogYXJndW1lbnRzXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHNjYWxlO1xuICAgIH07XG4gICAgc2NhbGUucmFuZ2VQb2ludHMgPSBmdW5jdGlvbih4LCBwYWRkaW5nKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHBhZGRpbmcgPSAwO1xuICAgICAgdmFyIHN0YXJ0ID0geFswXSwgc3RvcCA9IHhbMV0sIHN0ZXAgPSAoc3RvcCAtIHN0YXJ0KSAvIChNYXRoLm1heCgxLCBkb21haW4ubGVuZ3RoIC0gMSkgKyBwYWRkaW5nKTtcbiAgICAgIHJhbmdlID0gc3RlcHMoZG9tYWluLmxlbmd0aCA8IDIgPyAoc3RhcnQgKyBzdG9wKSAvIDIgOiBzdGFydCArIHN0ZXAgKiBwYWRkaW5nIC8gMiwgc3RlcCk7XG4gICAgICByYW5nZUJhbmQgPSAwO1xuICAgICAgcmFuZ2VyID0ge1xuICAgICAgICB0OiBcInJhbmdlUG9pbnRzXCIsXG4gICAgICAgIGE6IGFyZ3VtZW50c1xuICAgICAgfTtcbiAgICAgIHJldHVybiBzY2FsZTtcbiAgICB9O1xuICAgIHNjYWxlLnJhbmdlQmFuZHMgPSBmdW5jdGlvbih4LCBwYWRkaW5nLCBvdXRlclBhZGRpbmcpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikgcGFkZGluZyA9IDA7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMpIG91dGVyUGFkZGluZyA9IHBhZGRpbmc7XG4gICAgICB2YXIgcmV2ZXJzZSA9IHhbMV0gPCB4WzBdLCBzdGFydCA9IHhbcmV2ZXJzZSAtIDBdLCBzdG9wID0geFsxIC0gcmV2ZXJzZV0sIHN0ZXAgPSAoc3RvcCAtIHN0YXJ0KSAvIChkb21haW4ubGVuZ3RoIC0gcGFkZGluZyArIDIgKiBvdXRlclBhZGRpbmcpO1xuICAgICAgcmFuZ2UgPSBzdGVwcyhzdGFydCArIHN0ZXAgKiBvdXRlclBhZGRpbmcsIHN0ZXApO1xuICAgICAgaWYgKHJldmVyc2UpIHJhbmdlLnJldmVyc2UoKTtcbiAgICAgIHJhbmdlQmFuZCA9IHN0ZXAgKiAoMSAtIHBhZGRpbmcpO1xuICAgICAgcmFuZ2VyID0ge1xuICAgICAgICB0OiBcInJhbmdlQmFuZHNcIixcbiAgICAgICAgYTogYXJndW1lbnRzXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHNjYWxlO1xuICAgIH07XG4gICAgc2NhbGUucmFuZ2VSb3VuZEJhbmRzID0gZnVuY3Rpb24oeCwgcGFkZGluZywgb3V0ZXJQYWRkaW5nKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHBhZGRpbmcgPSAwO1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAzKSBvdXRlclBhZGRpbmcgPSBwYWRkaW5nO1xuICAgICAgdmFyIHJldmVyc2UgPSB4WzFdIDwgeFswXSwgc3RhcnQgPSB4W3JldmVyc2UgLSAwXSwgc3RvcCA9IHhbMSAtIHJldmVyc2VdLCBzdGVwID0gTWF0aC5mbG9vcigoc3RvcCAtIHN0YXJ0KSAvIChkb21haW4ubGVuZ3RoIC0gcGFkZGluZyArIDIgKiBvdXRlclBhZGRpbmcpKSwgZXJyb3IgPSBzdG9wIC0gc3RhcnQgLSAoZG9tYWluLmxlbmd0aCAtIHBhZGRpbmcpICogc3RlcDtcbiAgICAgIHJhbmdlID0gc3RlcHMoc3RhcnQgKyBNYXRoLnJvdW5kKGVycm9yIC8gMiksIHN0ZXApO1xuICAgICAgaWYgKHJldmVyc2UpIHJhbmdlLnJldmVyc2UoKTtcbiAgICAgIHJhbmdlQmFuZCA9IE1hdGgucm91bmQoc3RlcCAqICgxIC0gcGFkZGluZykpO1xuICAgICAgcmFuZ2VyID0ge1xuICAgICAgICB0OiBcInJhbmdlUm91bmRCYW5kc1wiLFxuICAgICAgICBhOiBhcmd1bWVudHNcbiAgICAgIH07XG4gICAgICByZXR1cm4gc2NhbGU7XG4gICAgfTtcbiAgICBzY2FsZS5yYW5nZUJhbmQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiByYW5nZUJhbmQ7XG4gICAgfTtcbiAgICBzY2FsZS5yYW5nZUV4dGVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGQzX3NjYWxlRXh0ZW50KHJhbmdlci5hWzBdKTtcbiAgICB9O1xuICAgIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBkM19zY2FsZV9vcmRpbmFsKGRvbWFpbiwgcmFuZ2VyKTtcbiAgICB9O1xuICAgIHJldHVybiBzY2FsZS5kb21haW4oZG9tYWluKTtcbiAgfVxuICBkMy5zY2FsZS5jYXRlZ29yeTEwID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlLm9yZGluYWwoKS5yYW5nZShkM19jYXRlZ29yeTEwKTtcbiAgfTtcbiAgZDMuc2NhbGUuY2F0ZWdvcnkyMCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkMy5zY2FsZS5vcmRpbmFsKCkucmFuZ2UoZDNfY2F0ZWdvcnkyMCk7XG4gIH07XG4gIGQzLnNjYWxlLmNhdGVnb3J5MjBiID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlLm9yZGluYWwoKS5yYW5nZShkM19jYXRlZ29yeTIwYik7XG4gIH07XG4gIGQzLnNjYWxlLmNhdGVnb3J5MjBjID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlLm9yZGluYWwoKS5yYW5nZShkM19jYXRlZ29yeTIwYyk7XG4gIH07XG4gIHZhciBkM19jYXRlZ29yeTEwID0gWyAyMDYyMjYwLCAxNjc0NDIwNiwgMjkyNDU4OCwgMTQwMzQ3MjgsIDk3MjU4ODUsIDkxOTcxMzEsIDE0OTA3MzMwLCA4MzU1NzExLCAxMjM2OTE4NiwgMTU1NjE3NSBdLm1hcChkM19yZ2JTdHJpbmcpO1xuICB2YXIgZDNfY2F0ZWdvcnkyMCA9IFsgMjA2MjI2MCwgMTE0NTQ0NDAsIDE2NzQ0MjA2LCAxNjc1OTY3MiwgMjkyNDU4OCwgMTAwMTg2OTgsIDE0MDM0NzI4LCAxNjc1MDc0MiwgOTcyNTg4NSwgMTI5NTU4NjEsIDkxOTcxMzEsIDEyODg1MTQwLCAxNDkwNzMzMCwgMTYyMzQxOTQsIDgzNTU3MTEsIDEzMDkyODA3LCAxMjM2OTE4NiwgMTQ0MDg1ODksIDE1NTYxNzUsIDEwNDEwNzI1IF0ubWFwKGQzX3JnYlN0cmluZyk7XG4gIHZhciBkM19jYXRlZ29yeTIwYiA9IFsgMzc1MDc3NywgNTM5NTYxOSwgNzA0MDcxOSwgMTAyNjQyODYsIDY1MTkwOTcsIDkyMTY1OTQsIDExOTE1MTE1LCAxMzU1NjYzNiwgOTIwMjk5MywgMTI0MjY4MDksIDE1MTg2NTE0LCAxNTE5MDkzMiwgODY2NjE2OSwgMTEzNTY0OTAsIDE0MDQ5NjQzLCAxNTE3NzM3MiwgODA3NzY4MywgMTA4MzQzMjQsIDEzNTI4NTA5LCAxNDU4OTY1NCBdLm1hcChkM19yZ2JTdHJpbmcpO1xuICB2YXIgZDNfY2F0ZWdvcnkyMGMgPSBbIDMyNDQ3MzMsIDcwNTcxMTAsIDEwNDA2NjI1LCAxMzAzMjQzMSwgMTUwOTUwNTMsIDE2NjE2NzY0LCAxNjYyNTI1OSwgMTY2MzQwMTgsIDMyNTMwNzYsIDc2NTI0NzAsIDEwNjA3MDAzLCAxMzEwMTUwNCwgNzY5NTI4MSwgMTAzOTQzMTIsIDEyMzY5MzcyLCAxNDM0Mjg5MSwgNjUxMzUwNywgOTg2ODk1MCwgMTI0MzQ4NzcsIDE0Mjc3MDgxIF0ubWFwKGQzX3JnYlN0cmluZyk7XG4gIGQzLnNjYWxlLnF1YW50aWxlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzX3NjYWxlX3F1YW50aWxlKFtdLCBbXSk7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX3NjYWxlX3F1YW50aWxlKGRvbWFpbiwgcmFuZ2UpIHtcbiAgICB2YXIgdGhyZXNob2xkcztcbiAgICBmdW5jdGlvbiByZXNjYWxlKCkge1xuICAgICAgdmFyIGsgPSAwLCBxID0gcmFuZ2UubGVuZ3RoO1xuICAgICAgdGhyZXNob2xkcyA9IFtdO1xuICAgICAgd2hpbGUgKCsrayA8IHEpIHRocmVzaG9sZHNbayAtIDFdID0gZDMucXVhbnRpbGUoZG9tYWluLCBrIC8gcSk7XG4gICAgICByZXR1cm4gc2NhbGU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjYWxlKHgpIHtcbiAgICAgIGlmICghaXNOYU4oeCA9ICt4KSkgcmV0dXJuIHJhbmdlW2QzLmJpc2VjdCh0aHJlc2hvbGRzLCB4KV07XG4gICAgfVxuICAgIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGRvbWFpbjtcbiAgICAgIGRvbWFpbiA9IHguZmlsdGVyKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuICFpc05hTihkKTtcbiAgICAgIH0pLnNvcnQoZDMuYXNjZW5kaW5nKTtcbiAgICAgIHJldHVybiByZXNjYWxlKCk7XG4gICAgfTtcbiAgICBzY2FsZS5yYW5nZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHJhbmdlO1xuICAgICAgcmFuZ2UgPSB4O1xuICAgICAgcmV0dXJuIHJlc2NhbGUoKTtcbiAgICB9O1xuICAgIHNjYWxlLnF1YW50aWxlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRocmVzaG9sZHM7XG4gICAgfTtcbiAgICBzY2FsZS5pbnZlcnRFeHRlbnQgPSBmdW5jdGlvbih5KSB7XG4gICAgICB5ID0gcmFuZ2UuaW5kZXhPZih5KTtcbiAgICAgIHJldHVybiB5IDwgMCA/IFsgTmFOLCBOYU4gXSA6IFsgeSA+IDAgPyB0aHJlc2hvbGRzW3kgLSAxXSA6IGRvbWFpblswXSwgeSA8IHRocmVzaG9sZHMubGVuZ3RoID8gdGhyZXNob2xkc1t5XSA6IGRvbWFpbltkb21haW4ubGVuZ3RoIC0gMV0gXTtcbiAgICB9O1xuICAgIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBkM19zY2FsZV9xdWFudGlsZShkb21haW4sIHJhbmdlKTtcbiAgICB9O1xuICAgIHJldHVybiByZXNjYWxlKCk7XG4gIH1cbiAgZDMuc2NhbGUucXVhbnRpemUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZDNfc2NhbGVfcXVhbnRpemUoMCwgMSwgWyAwLCAxIF0pO1xuICB9O1xuICBmdW5jdGlvbiBkM19zY2FsZV9xdWFudGl6ZSh4MCwgeDEsIHJhbmdlKSB7XG4gICAgdmFyIGt4LCBpO1xuICAgIGZ1bmN0aW9uIHNjYWxlKHgpIHtcbiAgICAgIHJldHVybiByYW5nZVtNYXRoLm1heCgwLCBNYXRoLm1pbihpLCBNYXRoLmZsb29yKGt4ICogKHggLSB4MCkpKSldO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXNjYWxlKCkge1xuICAgICAga3ggPSByYW5nZS5sZW5ndGggLyAoeDEgLSB4MCk7XG4gICAgICBpID0gcmFuZ2UubGVuZ3RoIC0gMTtcbiAgICAgIHJldHVybiBzY2FsZTtcbiAgICB9XG4gICAgc2NhbGUuZG9tYWluID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gWyB4MCwgeDEgXTtcbiAgICAgIHgwID0gK3hbMF07XG4gICAgICB4MSA9ICt4W3gubGVuZ3RoIC0gMV07XG4gICAgICByZXR1cm4gcmVzY2FsZSgpO1xuICAgIH07XG4gICAgc2NhbGUucmFuZ2UgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiByYW5nZTtcbiAgICAgIHJhbmdlID0geDtcbiAgICAgIHJldHVybiByZXNjYWxlKCk7XG4gICAgfTtcbiAgICBzY2FsZS5pbnZlcnRFeHRlbnQgPSBmdW5jdGlvbih5KSB7XG4gICAgICB5ID0gcmFuZ2UuaW5kZXhPZih5KTtcbiAgICAgIHkgPSB5IDwgMCA/IE5hTiA6IHkgLyBreCArIHgwO1xuICAgICAgcmV0dXJuIFsgeSwgeSArIDEgLyBreCBdO1xuICAgIH07XG4gICAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGQzX3NjYWxlX3F1YW50aXplKHgwLCB4MSwgcmFuZ2UpO1xuICAgIH07XG4gICAgcmV0dXJuIHJlc2NhbGUoKTtcbiAgfVxuICBkMy5zY2FsZS50aHJlc2hvbGQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZDNfc2NhbGVfdGhyZXNob2xkKFsgLjUgXSwgWyAwLCAxIF0pO1xuICB9O1xuICBmdW5jdGlvbiBkM19zY2FsZV90aHJlc2hvbGQoZG9tYWluLCByYW5nZSkge1xuICAgIGZ1bmN0aW9uIHNjYWxlKHgpIHtcbiAgICAgIGlmICh4IDw9IHgpIHJldHVybiByYW5nZVtkMy5iaXNlY3QoZG9tYWluLCB4KV07XG4gICAgfVxuICAgIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGRvbWFpbjtcbiAgICAgIGRvbWFpbiA9IF87XG4gICAgICByZXR1cm4gc2NhbGU7XG4gICAgfTtcbiAgICBzY2FsZS5yYW5nZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHJhbmdlO1xuICAgICAgcmFuZ2UgPSBfO1xuICAgICAgcmV0dXJuIHNjYWxlO1xuICAgIH07XG4gICAgc2NhbGUuaW52ZXJ0RXh0ZW50ID0gZnVuY3Rpb24oeSkge1xuICAgICAgeSA9IHJhbmdlLmluZGV4T2YoeSk7XG4gICAgICByZXR1cm4gWyBkb21haW5beSAtIDFdLCBkb21haW5beV0gXTtcbiAgICB9O1xuICAgIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBkM19zY2FsZV90aHJlc2hvbGQoZG9tYWluLCByYW5nZSk7XG4gICAgfTtcbiAgICByZXR1cm4gc2NhbGU7XG4gIH1cbiAgZDMuc2NhbGUuaWRlbnRpdHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZDNfc2NhbGVfaWRlbnRpdHkoWyAwLCAxIF0pO1xuICB9O1xuICBmdW5jdGlvbiBkM19zY2FsZV9pZGVudGl0eShkb21haW4pIHtcbiAgICBmdW5jdGlvbiBpZGVudGl0eSh4KSB7XG4gICAgICByZXR1cm4gK3g7XG4gICAgfVxuICAgIGlkZW50aXR5LmludmVydCA9IGlkZW50aXR5O1xuICAgIGlkZW50aXR5LmRvbWFpbiA9IGlkZW50aXR5LnJhbmdlID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gZG9tYWluO1xuICAgICAgZG9tYWluID0geC5tYXAoaWRlbnRpdHkpO1xuICAgICAgcmV0dXJuIGlkZW50aXR5O1xuICAgIH07XG4gICAgaWRlbnRpdHkudGlja3MgPSBmdW5jdGlvbihtKSB7XG4gICAgICByZXR1cm4gZDNfc2NhbGVfbGluZWFyVGlja3MoZG9tYWluLCBtKTtcbiAgICB9O1xuICAgIGlkZW50aXR5LnRpY2tGb3JtYXQgPSBmdW5jdGlvbihtLCBmb3JtYXQpIHtcbiAgICAgIHJldHVybiBkM19zY2FsZV9saW5lYXJUaWNrRm9ybWF0KGRvbWFpbiwgbSwgZm9ybWF0KTtcbiAgICB9O1xuICAgIGlkZW50aXR5LmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBkM19zY2FsZV9pZGVudGl0eShkb21haW4pO1xuICAgIH07XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG4gIGQzLnN2Zy5hcmMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaW5uZXJSYWRpdXMgPSBkM19zdmdfYXJjSW5uZXJSYWRpdXMsIG91dGVyUmFkaXVzID0gZDNfc3ZnX2FyY091dGVyUmFkaXVzLCBzdGFydEFuZ2xlID0gZDNfc3ZnX2FyY1N0YXJ0QW5nbGUsIGVuZEFuZ2xlID0gZDNfc3ZnX2FyY0VuZEFuZ2xlO1xuICAgIGZ1bmN0aW9uIGFyYygpIHtcbiAgICAgIHZhciByMCA9IGlubmVyUmFkaXVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHIxID0gb3V0ZXJSYWRpdXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgYTAgPSBzdGFydEFuZ2xlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgKyBkM19zdmdfYXJjT2Zmc2V0LCBhMSA9IGVuZEFuZ2xlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgKyBkM19zdmdfYXJjT2Zmc2V0LCBkYSA9IChhMSA8IGEwICYmIChkYSA9IGEwLCBcbiAgICAgIGEwID0gYTEsIGExID0gZGEpLCBhMSAtIGEwKSwgZGYgPSBkYSA8IM+AID8gXCIwXCIgOiBcIjFcIiwgYzAgPSBNYXRoLmNvcyhhMCksIHMwID0gTWF0aC5zaW4oYTApLCBjMSA9IE1hdGguY29zKGExKSwgczEgPSBNYXRoLnNpbihhMSk7XG4gICAgICByZXR1cm4gZGEgPj0gZDNfc3ZnX2FyY01heCA/IHIwID8gXCJNMCxcIiArIHIxICsgXCJBXCIgKyByMSArIFwiLFwiICsgcjEgKyBcIiAwIDEsMSAwLFwiICsgLXIxICsgXCJBXCIgKyByMSArIFwiLFwiICsgcjEgKyBcIiAwIDEsMSAwLFwiICsgcjEgKyBcIk0wLFwiICsgcjAgKyBcIkFcIiArIHIwICsgXCIsXCIgKyByMCArIFwiIDAgMSwwIDAsXCIgKyAtcjAgKyBcIkFcIiArIHIwICsgXCIsXCIgKyByMCArIFwiIDAgMSwwIDAsXCIgKyByMCArIFwiWlwiIDogXCJNMCxcIiArIHIxICsgXCJBXCIgKyByMSArIFwiLFwiICsgcjEgKyBcIiAwIDEsMSAwLFwiICsgLXIxICsgXCJBXCIgKyByMSArIFwiLFwiICsgcjEgKyBcIiAwIDEsMSAwLFwiICsgcjEgKyBcIlpcIiA6IHIwID8gXCJNXCIgKyByMSAqIGMwICsgXCIsXCIgKyByMSAqIHMwICsgXCJBXCIgKyByMSArIFwiLFwiICsgcjEgKyBcIiAwIFwiICsgZGYgKyBcIiwxIFwiICsgcjEgKiBjMSArIFwiLFwiICsgcjEgKiBzMSArIFwiTFwiICsgcjAgKiBjMSArIFwiLFwiICsgcjAgKiBzMSArIFwiQVwiICsgcjAgKyBcIixcIiArIHIwICsgXCIgMCBcIiArIGRmICsgXCIsMCBcIiArIHIwICogYzAgKyBcIixcIiArIHIwICogczAgKyBcIlpcIiA6IFwiTVwiICsgcjEgKiBjMCArIFwiLFwiICsgcjEgKiBzMCArIFwiQVwiICsgcjEgKyBcIixcIiArIHIxICsgXCIgMCBcIiArIGRmICsgXCIsMSBcIiArIHIxICogYzEgKyBcIixcIiArIHIxICogczEgKyBcIkwwLDBcIiArIFwiWlwiO1xuICAgIH1cbiAgICBhcmMuaW5uZXJSYWRpdXMgPSBmdW5jdGlvbih2KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBpbm5lclJhZGl1cztcbiAgICAgIGlubmVyUmFkaXVzID0gZDNfZnVuY3Rvcih2KTtcbiAgICAgIHJldHVybiBhcmM7XG4gICAgfTtcbiAgICBhcmMub3V0ZXJSYWRpdXMgPSBmdW5jdGlvbih2KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBvdXRlclJhZGl1cztcbiAgICAgIG91dGVyUmFkaXVzID0gZDNfZnVuY3Rvcih2KTtcbiAgICAgIHJldHVybiBhcmM7XG4gICAgfTtcbiAgICBhcmMuc3RhcnRBbmdsZSA9IGZ1bmN0aW9uKHYpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHN0YXJ0QW5nbGU7XG4gICAgICBzdGFydEFuZ2xlID0gZDNfZnVuY3Rvcih2KTtcbiAgICAgIHJldHVybiBhcmM7XG4gICAgfTtcbiAgICBhcmMuZW5kQW5nbGUgPSBmdW5jdGlvbih2KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBlbmRBbmdsZTtcbiAgICAgIGVuZEFuZ2xlID0gZDNfZnVuY3Rvcih2KTtcbiAgICAgIHJldHVybiBhcmM7XG4gICAgfTtcbiAgICBhcmMuY2VudHJvaWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByID0gKGlubmVyUmFkaXVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgKyBvdXRlclJhZGl1cy5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSAvIDIsIGEgPSAoc3RhcnRBbmdsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpICsgZW5kQW5nbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgLyAyICsgZDNfc3ZnX2FyY09mZnNldDtcbiAgICAgIHJldHVybiBbIE1hdGguY29zKGEpICogciwgTWF0aC5zaW4oYSkgKiByIF07XG4gICAgfTtcbiAgICByZXR1cm4gYXJjO1xuICB9O1xuICB2YXIgZDNfc3ZnX2FyY09mZnNldCA9IC3PgCAvIDIsIGQzX3N2Z19hcmNNYXggPSAyICogz4AgLSAxZS02O1xuICBmdW5jdGlvbiBkM19zdmdfYXJjSW5uZXJSYWRpdXMoZCkge1xuICAgIHJldHVybiBkLmlubmVyUmFkaXVzO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3N2Z19hcmNPdXRlclJhZGl1cyhkKSB7XG4gICAgcmV0dXJuIGQub3V0ZXJSYWRpdXM7XG4gIH1cbiAgZnVuY3Rpb24gZDNfc3ZnX2FyY1N0YXJ0QW5nbGUoZCkge1xuICAgIHJldHVybiBkLnN0YXJ0QW5nbGU7XG4gIH1cbiAgZnVuY3Rpb24gZDNfc3ZnX2FyY0VuZEFuZ2xlKGQpIHtcbiAgICByZXR1cm4gZC5lbmRBbmdsZTtcbiAgfVxuICBkMy5zdmcubGluZS5yYWRpYWwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGluZSA9IGQzX3N2Z19saW5lKGQzX3N2Z19saW5lUmFkaWFsKTtcbiAgICBsaW5lLnJhZGl1cyA9IGxpbmUueCwgZGVsZXRlIGxpbmUueDtcbiAgICBsaW5lLmFuZ2xlID0gbGluZS55LCBkZWxldGUgbGluZS55O1xuICAgIHJldHVybiBsaW5lO1xuICB9O1xuICBmdW5jdGlvbiBkM19zdmdfbGluZVJhZGlhbChwb2ludHMpIHtcbiAgICB2YXIgcG9pbnQsIGkgPSAtMSwgbiA9IHBvaW50cy5sZW5ndGgsIHIsIGE7XG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIHBvaW50ID0gcG9pbnRzW2ldO1xuICAgICAgciA9IHBvaW50WzBdO1xuICAgICAgYSA9IHBvaW50WzFdICsgZDNfc3ZnX2FyY09mZnNldDtcbiAgICAgIHBvaW50WzBdID0gciAqIE1hdGguY29zKGEpO1xuICAgICAgcG9pbnRbMV0gPSByICogTWF0aC5zaW4oYSk7XG4gICAgfVxuICAgIHJldHVybiBwb2ludHM7XG4gIH1cbiAgZnVuY3Rpb24gZDNfc3ZnX2FyZWEocHJvamVjdGlvbikge1xuICAgIHZhciB4MCA9IGQzX3N2Z19saW5lWCwgeDEgPSBkM19zdmdfbGluZVgsIHkwID0gMCwgeTEgPSBkM19zdmdfbGluZVksIGRlZmluZWQgPSBkM190cnVlLCBpbnRlcnBvbGF0ZSA9IGQzX3N2Z19saW5lTGluZWFyLCBpbnRlcnBvbGF0ZUtleSA9IGludGVycG9sYXRlLmtleSwgaW50ZXJwb2xhdGVSZXZlcnNlID0gaW50ZXJwb2xhdGUsIEwgPSBcIkxcIiwgdGVuc2lvbiA9IC43O1xuICAgIGZ1bmN0aW9uIGFyZWEoZGF0YSkge1xuICAgICAgdmFyIHNlZ21lbnRzID0gW10sIHBvaW50czAgPSBbXSwgcG9pbnRzMSA9IFtdLCBpID0gLTEsIG4gPSBkYXRhLmxlbmd0aCwgZCwgZngwID0gZDNfZnVuY3Rvcih4MCksIGZ5MCA9IGQzX2Z1bmN0b3IoeTApLCBmeDEgPSB4MCA9PT0geDEgPyBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgICB9IDogZDNfZnVuY3Rvcih4MSksIGZ5MSA9IHkwID09PSB5MSA/IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4geTtcbiAgICAgIH0gOiBkM19mdW5jdG9yKHkxKSwgeCwgeTtcbiAgICAgIGZ1bmN0aW9uIHNlZ21lbnQoKSB7XG4gICAgICAgIHNlZ21lbnRzLnB1c2goXCJNXCIsIGludGVycG9sYXRlKHByb2plY3Rpb24ocG9pbnRzMSksIHRlbnNpb24pLCBMLCBpbnRlcnBvbGF0ZVJldmVyc2UocHJvamVjdGlvbihwb2ludHMwLnJldmVyc2UoKSksIHRlbnNpb24pLCBcIlpcIik7XG4gICAgICB9XG4gICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICBpZiAoZGVmaW5lZC5jYWxsKHRoaXMsIGQgPSBkYXRhW2ldLCBpKSkge1xuICAgICAgICAgIHBvaW50czAucHVzaChbIHggPSArZngwLmNhbGwodGhpcywgZCwgaSksIHkgPSArZnkwLmNhbGwodGhpcywgZCwgaSkgXSk7XG4gICAgICAgICAgcG9pbnRzMS5wdXNoKFsgK2Z4MS5jYWxsKHRoaXMsIGQsIGkpLCArZnkxLmNhbGwodGhpcywgZCwgaSkgXSk7XG4gICAgICAgIH0gZWxzZSBpZiAocG9pbnRzMC5sZW5ndGgpIHtcbiAgICAgICAgICBzZWdtZW50KCk7XG4gICAgICAgICAgcG9pbnRzMCA9IFtdO1xuICAgICAgICAgIHBvaW50czEgPSBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHBvaW50czAubGVuZ3RoKSBzZWdtZW50KCk7XG4gICAgICByZXR1cm4gc2VnbWVudHMubGVuZ3RoID8gc2VnbWVudHMuam9pbihcIlwiKSA6IG51bGw7XG4gICAgfVxuICAgIGFyZWEueCA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHgxO1xuICAgICAgeDAgPSB4MSA9IF87XG4gICAgICByZXR1cm4gYXJlYTtcbiAgICB9O1xuICAgIGFyZWEueDAgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB4MDtcbiAgICAgIHgwID0gXztcbiAgICAgIHJldHVybiBhcmVhO1xuICAgIH07XG4gICAgYXJlYS54MSA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHgxO1xuICAgICAgeDEgPSBfO1xuICAgICAgcmV0dXJuIGFyZWE7XG4gICAgfTtcbiAgICBhcmVhLnkgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB5MTtcbiAgICAgIHkwID0geTEgPSBfO1xuICAgICAgcmV0dXJuIGFyZWE7XG4gICAgfTtcbiAgICBhcmVhLnkwID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4geTA7XG4gICAgICB5MCA9IF87XG4gICAgICByZXR1cm4gYXJlYTtcbiAgICB9O1xuICAgIGFyZWEueTEgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB5MTtcbiAgICAgIHkxID0gXztcbiAgICAgIHJldHVybiBhcmVhO1xuICAgIH07XG4gICAgYXJlYS5kZWZpbmVkID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gZGVmaW5lZDtcbiAgICAgIGRlZmluZWQgPSBfO1xuICAgICAgcmV0dXJuIGFyZWE7XG4gICAgfTtcbiAgICBhcmVhLmludGVycG9sYXRlID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gaW50ZXJwb2xhdGVLZXk7XG4gICAgICBpZiAodHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIikgaW50ZXJwb2xhdGVLZXkgPSBpbnRlcnBvbGF0ZSA9IF87IGVsc2UgaW50ZXJwb2xhdGVLZXkgPSAoaW50ZXJwb2xhdGUgPSBkM19zdmdfbGluZUludGVycG9sYXRvcnMuZ2V0KF8pIHx8IGQzX3N2Z19saW5lTGluZWFyKS5rZXk7XG4gICAgICBpbnRlcnBvbGF0ZVJldmVyc2UgPSBpbnRlcnBvbGF0ZS5yZXZlcnNlIHx8IGludGVycG9sYXRlO1xuICAgICAgTCA9IGludGVycG9sYXRlLmNsb3NlZCA/IFwiTVwiIDogXCJMXCI7XG4gICAgICByZXR1cm4gYXJlYTtcbiAgICB9O1xuICAgIGFyZWEudGVuc2lvbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRlbnNpb247XG4gICAgICB0ZW5zaW9uID0gXztcbiAgICAgIHJldHVybiBhcmVhO1xuICAgIH07XG4gICAgcmV0dXJuIGFyZWE7XG4gIH1cbiAgZDNfc3ZnX2xpbmVTdGVwQmVmb3JlLnJldmVyc2UgPSBkM19zdmdfbGluZVN0ZXBBZnRlcjtcbiAgZDNfc3ZnX2xpbmVTdGVwQWZ0ZXIucmV2ZXJzZSA9IGQzX3N2Z19saW5lU3RlcEJlZm9yZTtcbiAgZDMuc3ZnLmFyZWEgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZDNfc3ZnX2FyZWEoZDNfaWRlbnRpdHkpO1xuICB9O1xuICBkMy5zdmcuYXJlYS5yYWRpYWwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJlYSA9IGQzX3N2Z19hcmVhKGQzX3N2Z19saW5lUmFkaWFsKTtcbiAgICBhcmVhLnJhZGl1cyA9IGFyZWEueCwgZGVsZXRlIGFyZWEueDtcbiAgICBhcmVhLmlubmVyUmFkaXVzID0gYXJlYS54MCwgZGVsZXRlIGFyZWEueDA7XG4gICAgYXJlYS5vdXRlclJhZGl1cyA9IGFyZWEueDEsIGRlbGV0ZSBhcmVhLngxO1xuICAgIGFyZWEuYW5nbGUgPSBhcmVhLnksIGRlbGV0ZSBhcmVhLnk7XG4gICAgYXJlYS5zdGFydEFuZ2xlID0gYXJlYS55MCwgZGVsZXRlIGFyZWEueTA7XG4gICAgYXJlYS5lbmRBbmdsZSA9IGFyZWEueTEsIGRlbGV0ZSBhcmVhLnkxO1xuICAgIHJldHVybiBhcmVhO1xuICB9O1xuICBkMy5zdmcuY2hvcmQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc291cmNlID0gZDNfc291cmNlLCB0YXJnZXQgPSBkM190YXJnZXQsIHJhZGl1cyA9IGQzX3N2Z19jaG9yZFJhZGl1cywgc3RhcnRBbmdsZSA9IGQzX3N2Z19hcmNTdGFydEFuZ2xlLCBlbmRBbmdsZSA9IGQzX3N2Z19hcmNFbmRBbmdsZTtcbiAgICBmdW5jdGlvbiBjaG9yZChkLCBpKSB7XG4gICAgICB2YXIgcyA9IHN1Ymdyb3VwKHRoaXMsIHNvdXJjZSwgZCwgaSksIHQgPSBzdWJncm91cCh0aGlzLCB0YXJnZXQsIGQsIGkpO1xuICAgICAgcmV0dXJuIFwiTVwiICsgcy5wMCArIGFyYyhzLnIsIHMucDEsIHMuYTEgLSBzLmEwKSArIChlcXVhbHMocywgdCkgPyBjdXJ2ZShzLnIsIHMucDEsIHMuciwgcy5wMCkgOiBjdXJ2ZShzLnIsIHMucDEsIHQuciwgdC5wMCkgKyBhcmModC5yLCB0LnAxLCB0LmExIC0gdC5hMCkgKyBjdXJ2ZSh0LnIsIHQucDEsIHMuciwgcy5wMCkpICsgXCJaXCI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN1Ymdyb3VwKHNlbGYsIGYsIGQsIGkpIHtcbiAgICAgIHZhciBzdWJncm91cCA9IGYuY2FsbChzZWxmLCBkLCBpKSwgciA9IHJhZGl1cy5jYWxsKHNlbGYsIHN1Ymdyb3VwLCBpKSwgYTAgPSBzdGFydEFuZ2xlLmNhbGwoc2VsZiwgc3ViZ3JvdXAsIGkpICsgZDNfc3ZnX2FyY09mZnNldCwgYTEgPSBlbmRBbmdsZS5jYWxsKHNlbGYsIHN1Ymdyb3VwLCBpKSArIGQzX3N2Z19hcmNPZmZzZXQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByOiByLFxuICAgICAgICBhMDogYTAsXG4gICAgICAgIGExOiBhMSxcbiAgICAgICAgcDA6IFsgciAqIE1hdGguY29zKGEwKSwgciAqIE1hdGguc2luKGEwKSBdLFxuICAgICAgICBwMTogWyByICogTWF0aC5jb3MoYTEpLCByICogTWF0aC5zaW4oYTEpIF1cbiAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gICAgICByZXR1cm4gYS5hMCA9PSBiLmEwICYmIGEuYTEgPT0gYi5hMTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXJjKHIsIHAsIGEpIHtcbiAgICAgIHJldHVybiBcIkFcIiArIHIgKyBcIixcIiArIHIgKyBcIiAwIFwiICsgKyhhID4gz4ApICsgXCIsMSBcIiArIHA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGN1cnZlKHIwLCBwMCwgcjEsIHAxKSB7XG4gICAgICByZXR1cm4gXCJRIDAsMCBcIiArIHAxO1xuICAgIH1cbiAgICBjaG9yZC5yYWRpdXMgPSBmdW5jdGlvbih2KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiByYWRpdXM7XG4gICAgICByYWRpdXMgPSBkM19mdW5jdG9yKHYpO1xuICAgICAgcmV0dXJuIGNob3JkO1xuICAgIH07XG4gICAgY2hvcmQuc291cmNlID0gZnVuY3Rpb24odikge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gc291cmNlO1xuICAgICAgc291cmNlID0gZDNfZnVuY3Rvcih2KTtcbiAgICAgIHJldHVybiBjaG9yZDtcbiAgICB9O1xuICAgIGNob3JkLnRhcmdldCA9IGZ1bmN0aW9uKHYpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRhcmdldDtcbiAgICAgIHRhcmdldCA9IGQzX2Z1bmN0b3Iodik7XG4gICAgICByZXR1cm4gY2hvcmQ7XG4gICAgfTtcbiAgICBjaG9yZC5zdGFydEFuZ2xlID0gZnVuY3Rpb24odikge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gc3RhcnRBbmdsZTtcbiAgICAgIHN0YXJ0QW5nbGUgPSBkM19mdW5jdG9yKHYpO1xuICAgICAgcmV0dXJuIGNob3JkO1xuICAgIH07XG4gICAgY2hvcmQuZW5kQW5nbGUgPSBmdW5jdGlvbih2KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBlbmRBbmdsZTtcbiAgICAgIGVuZEFuZ2xlID0gZDNfZnVuY3Rvcih2KTtcbiAgICAgIHJldHVybiBjaG9yZDtcbiAgICB9O1xuICAgIHJldHVybiBjaG9yZDtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfc3ZnX2Nob3JkUmFkaXVzKGQpIHtcbiAgICByZXR1cm4gZC5yYWRpdXM7XG4gIH1cbiAgZDMuc3ZnLmRpYWdvbmFsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNvdXJjZSA9IGQzX3NvdXJjZSwgdGFyZ2V0ID0gZDNfdGFyZ2V0LCBwcm9qZWN0aW9uID0gZDNfc3ZnX2RpYWdvbmFsUHJvamVjdGlvbjtcbiAgICBmdW5jdGlvbiBkaWFnb25hbChkLCBpKSB7XG4gICAgICB2YXIgcDAgPSBzb3VyY2UuY2FsbCh0aGlzLCBkLCBpKSwgcDMgPSB0YXJnZXQuY2FsbCh0aGlzLCBkLCBpKSwgbSA9IChwMC55ICsgcDMueSkgLyAyLCBwID0gWyBwMCwge1xuICAgICAgICB4OiBwMC54LFxuICAgICAgICB5OiBtXG4gICAgICB9LCB7XG4gICAgICAgIHg6IHAzLngsXG4gICAgICAgIHk6IG1cbiAgICAgIH0sIHAzIF07XG4gICAgICBwID0gcC5tYXAocHJvamVjdGlvbik7XG4gICAgICByZXR1cm4gXCJNXCIgKyBwWzBdICsgXCJDXCIgKyBwWzFdICsgXCIgXCIgKyBwWzJdICsgXCIgXCIgKyBwWzNdO1xuICAgIH1cbiAgICBkaWFnb25hbC5zb3VyY2UgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBzb3VyY2U7XG4gICAgICBzb3VyY2UgPSBkM19mdW5jdG9yKHgpO1xuICAgICAgcmV0dXJuIGRpYWdvbmFsO1xuICAgIH07XG4gICAgZGlhZ29uYWwudGFyZ2V0ID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0O1xuICAgICAgdGFyZ2V0ID0gZDNfZnVuY3Rvcih4KTtcbiAgICAgIHJldHVybiBkaWFnb25hbDtcbiAgICB9O1xuICAgIGRpYWdvbmFsLnByb2plY3Rpb24gPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwcm9qZWN0aW9uO1xuICAgICAgcHJvamVjdGlvbiA9IHg7XG4gICAgICByZXR1cm4gZGlhZ29uYWw7XG4gICAgfTtcbiAgICByZXR1cm4gZGlhZ29uYWw7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX3N2Z19kaWFnb25hbFByb2plY3Rpb24oZCkge1xuICAgIHJldHVybiBbIGQueCwgZC55IF07XG4gIH1cbiAgZDMuc3ZnLmRpYWdvbmFsLnJhZGlhbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkaWFnb25hbCA9IGQzLnN2Zy5kaWFnb25hbCgpLCBwcm9qZWN0aW9uID0gZDNfc3ZnX2RpYWdvbmFsUHJvamVjdGlvbiwgcHJvamVjdGlvbl8gPSBkaWFnb25hbC5wcm9qZWN0aW9uO1xuICAgIGRpYWdvbmFsLnByb2plY3Rpb24gPSBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHByb2plY3Rpb25fKGQzX3N2Z19kaWFnb25hbFJhZGlhbFByb2plY3Rpb24ocHJvamVjdGlvbiA9IHgpKSA6IHByb2plY3Rpb247XG4gICAgfTtcbiAgICByZXR1cm4gZGlhZ29uYWw7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX3N2Z19kaWFnb25hbFJhZGlhbFByb2plY3Rpb24ocHJvamVjdGlvbikge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBkID0gcHJvamVjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCByID0gZFswXSwgYSA9IGRbMV0gKyBkM19zdmdfYXJjT2Zmc2V0O1xuICAgICAgcmV0dXJuIFsgciAqIE1hdGguY29zKGEpLCByICogTWF0aC5zaW4oYSkgXTtcbiAgICB9O1xuICB9XG4gIGQzLnN2Zy5zeW1ib2wgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdHlwZSA9IGQzX3N2Z19zeW1ib2xUeXBlLCBzaXplID0gZDNfc3ZnX3N5bWJvbFNpemU7XG4gICAgZnVuY3Rpb24gc3ltYm9sKGQsIGkpIHtcbiAgICAgIHJldHVybiAoZDNfc3ZnX3N5bWJvbHMuZ2V0KHR5cGUuY2FsbCh0aGlzLCBkLCBpKSkgfHwgZDNfc3ZnX3N5bWJvbENpcmNsZSkoc2l6ZS5jYWxsKHRoaXMsIGQsIGkpKTtcbiAgICB9XG4gICAgc3ltYm9sLnR5cGUgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0eXBlO1xuICAgICAgdHlwZSA9IGQzX2Z1bmN0b3IoeCk7XG4gICAgICByZXR1cm4gc3ltYm9sO1xuICAgIH07XG4gICAgc3ltYm9sLnNpemUgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBzaXplO1xuICAgICAgc2l6ZSA9IGQzX2Z1bmN0b3IoeCk7XG4gICAgICByZXR1cm4gc3ltYm9sO1xuICAgIH07XG4gICAgcmV0dXJuIHN5bWJvbDtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfc3ZnX3N5bWJvbFNpemUoKSB7XG4gICAgcmV0dXJuIDY0O1xuICB9XG4gIGZ1bmN0aW9uIGQzX3N2Z19zeW1ib2xUeXBlKCkge1xuICAgIHJldHVybiBcImNpcmNsZVwiO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3N2Z19zeW1ib2xDaXJjbGUoc2l6ZSkge1xuICAgIHZhciByID0gTWF0aC5zcXJ0KHNpemUgLyDPgCk7XG4gICAgcmV0dXJuIFwiTTAsXCIgKyByICsgXCJBXCIgKyByICsgXCIsXCIgKyByICsgXCIgMCAxLDEgMCxcIiArIC1yICsgXCJBXCIgKyByICsgXCIsXCIgKyByICsgXCIgMCAxLDEgMCxcIiArIHIgKyBcIlpcIjtcbiAgfVxuICB2YXIgZDNfc3ZnX3N5bWJvbHMgPSBkMy5tYXAoe1xuICAgIGNpcmNsZTogZDNfc3ZnX3N5bWJvbENpcmNsZSxcbiAgICBjcm9zczogZnVuY3Rpb24oc2l6ZSkge1xuICAgICAgdmFyIHIgPSBNYXRoLnNxcnQoc2l6ZSAvIDUpIC8gMjtcbiAgICAgIHJldHVybiBcIk1cIiArIC0zICogciArIFwiLFwiICsgLXIgKyBcIkhcIiArIC1yICsgXCJWXCIgKyAtMyAqIHIgKyBcIkhcIiArIHIgKyBcIlZcIiArIC1yICsgXCJIXCIgKyAzICogciArIFwiVlwiICsgciArIFwiSFwiICsgciArIFwiVlwiICsgMyAqIHIgKyBcIkhcIiArIC1yICsgXCJWXCIgKyByICsgXCJIXCIgKyAtMyAqIHIgKyBcIlpcIjtcbiAgICB9LFxuICAgIGRpYW1vbmQ6IGZ1bmN0aW9uKHNpemUpIHtcbiAgICAgIHZhciByeSA9IE1hdGguc3FydChzaXplIC8gKDIgKiBkM19zdmdfc3ltYm9sVGFuMzApKSwgcnggPSByeSAqIGQzX3N2Z19zeW1ib2xUYW4zMDtcbiAgICAgIHJldHVybiBcIk0wLFwiICsgLXJ5ICsgXCJMXCIgKyByeCArIFwiLDBcIiArIFwiIDAsXCIgKyByeSArIFwiIFwiICsgLXJ4ICsgXCIsMFwiICsgXCJaXCI7XG4gICAgfSxcbiAgICBzcXVhcmU6IGZ1bmN0aW9uKHNpemUpIHtcbiAgICAgIHZhciByID0gTWF0aC5zcXJ0KHNpemUpIC8gMjtcbiAgICAgIHJldHVybiBcIk1cIiArIC1yICsgXCIsXCIgKyAtciArIFwiTFwiICsgciArIFwiLFwiICsgLXIgKyBcIiBcIiArIHIgKyBcIixcIiArIHIgKyBcIiBcIiArIC1yICsgXCIsXCIgKyByICsgXCJaXCI7XG4gICAgfSxcbiAgICBcInRyaWFuZ2xlLWRvd25cIjogZnVuY3Rpb24oc2l6ZSkge1xuICAgICAgdmFyIHJ4ID0gTWF0aC5zcXJ0KHNpemUgLyBkM19zdmdfc3ltYm9sU3FydDMpLCByeSA9IHJ4ICogZDNfc3ZnX3N5bWJvbFNxcnQzIC8gMjtcbiAgICAgIHJldHVybiBcIk0wLFwiICsgcnkgKyBcIkxcIiArIHJ4ICsgXCIsXCIgKyAtcnkgKyBcIiBcIiArIC1yeCArIFwiLFwiICsgLXJ5ICsgXCJaXCI7XG4gICAgfSxcbiAgICBcInRyaWFuZ2xlLXVwXCI6IGZ1bmN0aW9uKHNpemUpIHtcbiAgICAgIHZhciByeCA9IE1hdGguc3FydChzaXplIC8gZDNfc3ZnX3N5bWJvbFNxcnQzKSwgcnkgPSByeCAqIGQzX3N2Z19zeW1ib2xTcXJ0MyAvIDI7XG4gICAgICByZXR1cm4gXCJNMCxcIiArIC1yeSArIFwiTFwiICsgcnggKyBcIixcIiArIHJ5ICsgXCIgXCIgKyAtcnggKyBcIixcIiArIHJ5ICsgXCJaXCI7XG4gICAgfVxuICB9KTtcbiAgZDMuc3ZnLnN5bWJvbFR5cGVzID0gZDNfc3ZnX3N5bWJvbHMua2V5cygpO1xuICB2YXIgZDNfc3ZnX3N5bWJvbFNxcnQzID0gTWF0aC5zcXJ0KDMpLCBkM19zdmdfc3ltYm9sVGFuMzAgPSBNYXRoLnRhbigzMCAqIGQzX3JhZGlhbnMpO1xuICBmdW5jdGlvbiBkM190cmFuc2l0aW9uKGdyb3VwcywgaWQpIHtcbiAgICBkM19zdWJjbGFzcyhncm91cHMsIGQzX3RyYW5zaXRpb25Qcm90b3R5cGUpO1xuICAgIGdyb3Vwcy5pZCA9IGlkO1xuICAgIHJldHVybiBncm91cHM7XG4gIH1cbiAgdmFyIGQzX3RyYW5zaXRpb25Qcm90b3R5cGUgPSBbXSwgZDNfdHJhbnNpdGlvbklkID0gMCwgZDNfdHJhbnNpdGlvbkluaGVyaXRJZCwgZDNfdHJhbnNpdGlvbkluaGVyaXQ7XG4gIGQzX3RyYW5zaXRpb25Qcm90b3R5cGUuY2FsbCA9IGQzX3NlbGVjdGlvblByb3RvdHlwZS5jYWxsO1xuICBkM190cmFuc2l0aW9uUHJvdG90eXBlLmVtcHR5ID0gZDNfc2VsZWN0aW9uUHJvdG90eXBlLmVtcHR5O1xuICBkM190cmFuc2l0aW9uUHJvdG90eXBlLm5vZGUgPSBkM19zZWxlY3Rpb25Qcm90b3R5cGUubm9kZTtcbiAgZDNfdHJhbnNpdGlvblByb3RvdHlwZS5zaXplID0gZDNfc2VsZWN0aW9uUHJvdG90eXBlLnNpemU7XG4gIGQzLnRyYW5zaXRpb24gPSBmdW5jdGlvbihzZWxlY3Rpb24pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IGQzX3RyYW5zaXRpb25Jbmhlcml0SWQgPyBzZWxlY3Rpb24udHJhbnNpdGlvbigpIDogc2VsZWN0aW9uIDogZDNfc2VsZWN0aW9uUm9vdC50cmFuc2l0aW9uKCk7XG4gIH07XG4gIGQzLnRyYW5zaXRpb24ucHJvdG90eXBlID0gZDNfdHJhbnNpdGlvblByb3RvdHlwZTtcbiAgZDNfdHJhbnNpdGlvblByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgIHZhciBpZCA9IHRoaXMuaWQsIHN1Ymdyb3VwcyA9IFtdLCBzdWJncm91cCwgc3Vibm9kZSwgbm9kZTtcbiAgICBzZWxlY3RvciA9IGQzX3NlbGVjdGlvbl9zZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgZm9yICh2YXIgaiA9IC0xLCBtID0gdGhpcy5sZW5ndGg7ICsraiA8IG07ICkge1xuICAgICAgc3ViZ3JvdXBzLnB1c2goc3ViZ3JvdXAgPSBbXSk7XG4gICAgICBmb3IgKHZhciBncm91cCA9IHRoaXNbal0sIGkgPSAtMSwgbiA9IGdyb3VwLmxlbmd0aDsgKytpIDwgbjsgKSB7XG4gICAgICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiAoc3Vibm9kZSA9IHNlbGVjdG9yLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgaikpKSB7XG4gICAgICAgICAgaWYgKFwiX19kYXRhX19cIiBpbiBub2RlKSBzdWJub2RlLl9fZGF0YV9fID0gbm9kZS5fX2RhdGFfXztcbiAgICAgICAgICBkM190cmFuc2l0aW9uTm9kZShzdWJub2RlLCBpLCBpZCwgbm9kZS5fX3RyYW5zaXRpb25fX1tpZF0pO1xuICAgICAgICAgIHN1Ymdyb3VwLnB1c2goc3Vibm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3ViZ3JvdXAucHVzaChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZDNfdHJhbnNpdGlvbihzdWJncm91cHMsIGlkKTtcbiAgfTtcbiAgZDNfdHJhbnNpdGlvblByb3RvdHlwZS5zZWxlY3RBbGwgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgIHZhciBpZCA9IHRoaXMuaWQsIHN1Ymdyb3VwcyA9IFtdLCBzdWJncm91cCwgc3Vibm9kZXMsIG5vZGUsIHN1Ym5vZGUsIHRyYW5zaXRpb247XG4gICAgc2VsZWN0b3IgPSBkM19zZWxlY3Rpb25fc2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIGZvciAodmFyIGogPSAtMSwgbSA9IHRoaXMubGVuZ3RoOyArK2ogPCBtOyApIHtcbiAgICAgIGZvciAodmFyIGdyb3VwID0gdGhpc1tqXSwgaSA9IC0xLCBuID0gZ3JvdXAubGVuZ3RoOyArK2kgPCBuOyApIHtcbiAgICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICAgIHRyYW5zaXRpb24gPSBub2RlLl9fdHJhbnNpdGlvbl9fW2lkXTtcbiAgICAgICAgICBzdWJub2RlcyA9IHNlbGVjdG9yLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgaik7XG4gICAgICAgICAgc3ViZ3JvdXBzLnB1c2goc3ViZ3JvdXAgPSBbXSk7XG4gICAgICAgICAgZm9yICh2YXIgayA9IC0xLCBvID0gc3Vibm9kZXMubGVuZ3RoOyArK2sgPCBvOyApIHtcbiAgICAgICAgICAgIGlmIChzdWJub2RlID0gc3Vibm9kZXNba10pIGQzX3RyYW5zaXRpb25Ob2RlKHN1Ym5vZGUsIGssIGlkLCB0cmFuc2l0aW9uKTtcbiAgICAgICAgICAgIHN1Ymdyb3VwLnB1c2goc3Vibm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkM190cmFuc2l0aW9uKHN1Ymdyb3VwcywgaWQpO1xuICB9O1xuICBkM190cmFuc2l0aW9uUHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uKGZpbHRlcikge1xuICAgIHZhciBzdWJncm91cHMgPSBbXSwgc3ViZ3JvdXAsIGdyb3VwLCBub2RlO1xuICAgIGlmICh0eXBlb2YgZmlsdGVyICE9PSBcImZ1bmN0aW9uXCIpIGZpbHRlciA9IGQzX3NlbGVjdGlvbl9maWx0ZXIoZmlsdGVyKTtcbiAgICBmb3IgKHZhciBqID0gMCwgbSA9IHRoaXMubGVuZ3RoOyBqIDwgbTsgaisrKSB7XG4gICAgICBzdWJncm91cHMucHVzaChzdWJncm91cCA9IFtdKTtcbiAgICAgIGZvciAodmFyIGdyb3VwID0gdGhpc1tqXSwgaSA9IDAsIG4gPSBncm91cC5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIGZpbHRlci5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGkpKSB7XG4gICAgICAgICAgc3ViZ3JvdXAucHVzaChub2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZDNfdHJhbnNpdGlvbihzdWJncm91cHMsIHRoaXMuaWQpO1xuICB9O1xuICBkM190cmFuc2l0aW9uUHJvdG90eXBlLnR3ZWVuID0gZnVuY3Rpb24obmFtZSwgdHdlZW4pIHtcbiAgICB2YXIgaWQgPSB0aGlzLmlkO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikgcmV0dXJuIHRoaXMubm9kZSgpLl9fdHJhbnNpdGlvbl9fW2lkXS50d2Vlbi5nZXQobmFtZSk7XG4gICAgcmV0dXJuIGQzX3NlbGVjdGlvbl9lYWNoKHRoaXMsIHR3ZWVuID09IG51bGwgPyBmdW5jdGlvbihub2RlKSB7XG4gICAgICBub2RlLl9fdHJhbnNpdGlvbl9fW2lkXS50d2Vlbi5yZW1vdmUobmFtZSk7XG4gICAgfSA6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIG5vZGUuX190cmFuc2l0aW9uX19baWRdLnR3ZWVuLnNldChuYW1lLCB0d2Vlbik7XG4gICAgfSk7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX3RyYW5zaXRpb25fdHdlZW4oZ3JvdXBzLCBuYW1lLCB2YWx1ZSwgdHdlZW4pIHtcbiAgICB2YXIgaWQgPSBncm91cHMuaWQ7XG4gICAgcmV0dXJuIGQzX3NlbGVjdGlvbl9lYWNoKGdyb3VwcywgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBmdW5jdGlvbihub2RlLCBpLCBqKSB7XG4gICAgICBub2RlLl9fdHJhbnNpdGlvbl9fW2lkXS50d2Vlbi5zZXQobmFtZSwgdHdlZW4odmFsdWUuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBqKSkpO1xuICAgIH0gOiAodmFsdWUgPSB0d2Vlbih2YWx1ZSksIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIG5vZGUuX190cmFuc2l0aW9uX19baWRdLnR3ZWVuLnNldChuYW1lLCB2YWx1ZSk7XG4gICAgfSkpO1xuICB9XG4gIGQzX3RyYW5zaXRpb25Qcm90b3R5cGUuYXR0ciA9IGZ1bmN0aW9uKG5hbWVOUywgdmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgIGZvciAodmFsdWUgaW4gbmFtZU5TKSB0aGlzLmF0dHIodmFsdWUsIG5hbWVOU1t2YWx1ZV0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHZhciBpbnRlcnBvbGF0ZSA9IG5hbWVOUyA9PSBcInRyYW5zZm9ybVwiID8gZDNfaW50ZXJwb2xhdGVUcmFuc2Zvcm0gOiBkM19pbnRlcnBvbGF0ZSwgbmFtZSA9IGQzLm5zLnF1YWxpZnkobmFtZU5TKTtcbiAgICBmdW5jdGlvbiBhdHRyTnVsbCgpIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhdHRyTnVsbE5TKCkge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhuYW1lLnNwYWNlLCBuYW1lLmxvY2FsKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXR0clR3ZWVuKGIpIHtcbiAgICAgIHJldHVybiBiID09IG51bGwgPyBhdHRyTnVsbCA6IChiICs9IFwiXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYSA9IHRoaXMuZ2V0QXR0cmlidXRlKG5hbWUpLCBpO1xuICAgICAgICByZXR1cm4gYSAhPT0gYiAmJiAoaSA9IGludGVycG9sYXRlKGEsIGIpLCBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgaSh0KSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0dHJUd2Vlbk5TKGIpIHtcbiAgICAgIHJldHVybiBiID09IG51bGwgPyBhdHRyTnVsbE5TIDogKGIgKz0gXCJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhID0gdGhpcy5nZXRBdHRyaWJ1dGVOUyhuYW1lLnNwYWNlLCBuYW1lLmxvY2FsKSwgaTtcbiAgICAgICAgcmV0dXJuIGEgIT09IGIgJiYgKGkgPSBpbnRlcnBvbGF0ZShhLCBiKSwgZnVuY3Rpb24odCkge1xuICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlTlMobmFtZS5zcGFjZSwgbmFtZS5sb2NhbCwgaSh0KSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkM190cmFuc2l0aW9uX3R3ZWVuKHRoaXMsIFwiYXR0ci5cIiArIG5hbWVOUywgdmFsdWUsIG5hbWUubG9jYWwgPyBhdHRyVHdlZW5OUyA6IGF0dHJUd2Vlbik7XG4gIH07XG4gIGQzX3RyYW5zaXRpb25Qcm90b3R5cGUuYXR0clR3ZWVuID0gZnVuY3Rpb24obmFtZU5TLCB0d2Vlbikge1xuICAgIHZhciBuYW1lID0gZDMubnMucXVhbGlmeShuYW1lTlMpO1xuICAgIGZ1bmN0aW9uIGF0dHJUd2VlbihkLCBpKSB7XG4gICAgICB2YXIgZiA9IHR3ZWVuLmNhbGwodGhpcywgZCwgaSwgdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSkpO1xuICAgICAgcmV0dXJuIGYgJiYgZnVuY3Rpb24odCkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCBmKHQpKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0dHJUd2Vlbk5TKGQsIGkpIHtcbiAgICAgIHZhciBmID0gdHdlZW4uY2FsbCh0aGlzLCBkLCBpLCB0aGlzLmdldEF0dHJpYnV0ZU5TKG5hbWUuc3BhY2UsIG5hbWUubG9jYWwpKTtcbiAgICAgIHJldHVybiBmICYmIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVOUyhuYW1lLnNwYWNlLCBuYW1lLmxvY2FsLCBmKHQpKTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnR3ZWVuKFwiYXR0ci5cIiArIG5hbWVOUywgbmFtZS5sb2NhbCA/IGF0dHJUd2Vlbk5TIDogYXR0clR3ZWVuKTtcbiAgfTtcbiAgZDNfdHJhbnNpdGlvblByb3RvdHlwZS5zdHlsZSA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICAgIHZhciBuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAobiA8IDMpIHtcbiAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpZiAobiA8IDIpIHZhbHVlID0gXCJcIjtcbiAgICAgICAgZm9yIChwcmlvcml0eSBpbiBuYW1lKSB0aGlzLnN0eWxlKHByaW9yaXR5LCBuYW1lW3ByaW9yaXR5XSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHByaW9yaXR5ID0gXCJcIjtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3R5bGVOdWxsKCkge1xuICAgICAgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3R5bGVTdHJpbmcoYikge1xuICAgICAgcmV0dXJuIGIgPT0gbnVsbCA/IHN0eWxlTnVsbCA6IChiICs9IFwiXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYSA9IGQzX3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMsIG51bGwpLmdldFByb3BlcnR5VmFsdWUobmFtZSksIGk7XG4gICAgICAgIHJldHVybiBhICE9PSBiICYmIChpID0gZDNfaW50ZXJwb2xhdGUoYSwgYiksIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIGkodCksIHByaW9yaXR5KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGQzX3RyYW5zaXRpb25fdHdlZW4odGhpcywgXCJzdHlsZS5cIiArIG5hbWUsIHZhbHVlLCBzdHlsZVN0cmluZyk7XG4gIH07XG4gIGQzX3RyYW5zaXRpb25Qcm90b3R5cGUuc3R5bGVUd2VlbiA9IGZ1bmN0aW9uKG5hbWUsIHR3ZWVuLCBwcmlvcml0eSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykgcHJpb3JpdHkgPSBcIlwiO1xuICAgIGZ1bmN0aW9uIHN0eWxlVHdlZW4oZCwgaSkge1xuICAgICAgdmFyIGYgPSB0d2Vlbi5jYWxsKHRoaXMsIGQsIGksIGQzX3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMsIG51bGwpLmdldFByb3BlcnR5VmFsdWUobmFtZSkpO1xuICAgICAgcmV0dXJuIGYgJiYgZnVuY3Rpb24odCkge1xuICAgICAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIGYodCksIHByaW9yaXR5KTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnR3ZWVuKFwic3R5bGUuXCIgKyBuYW1lLCBzdHlsZVR3ZWVuKTtcbiAgfTtcbiAgZDNfdHJhbnNpdGlvblByb3RvdHlwZS50ZXh0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZDNfdHJhbnNpdGlvbl90d2Vlbih0aGlzLCBcInRleHRcIiwgdmFsdWUsIGQzX3RyYW5zaXRpb25fdGV4dCk7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX3RyYW5zaXRpb25fdGV4dChiKSB7XG4gICAgaWYgKGIgPT0gbnVsbCkgYiA9IFwiXCI7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy50ZXh0Q29udGVudCA9IGI7XG4gICAgfTtcbiAgfVxuICBkM190cmFuc2l0aW9uUHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmVhY2goXCJlbmQudHJhbnNpdGlvblwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwO1xuICAgICAgaWYgKHRoaXMuX190cmFuc2l0aW9uX18uY291bnQgPCAyICYmIChwID0gdGhpcy5wYXJlbnROb2RlKSkgcC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICB9KTtcbiAgfTtcbiAgZDNfdHJhbnNpdGlvblByb3RvdHlwZS5lYXNlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgaWQgPSB0aGlzLmlkO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMSkgcmV0dXJuIHRoaXMubm9kZSgpLl9fdHJhbnNpdGlvbl9fW2lkXS5lYXNlO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdmFsdWUgPSBkMy5lYXNlLmFwcGx5KGQzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBkM19zZWxlY3Rpb25fZWFjaCh0aGlzLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICBub2RlLl9fdHJhbnNpdGlvbl9fW2lkXS5lYXNlID0gdmFsdWU7XG4gICAgfSk7XG4gIH07XG4gIGQzX3RyYW5zaXRpb25Qcm90b3R5cGUuZGVsYXkgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciBpZCA9IHRoaXMuaWQ7XG4gICAgcmV0dXJuIGQzX3NlbGVjdGlvbl9lYWNoKHRoaXMsIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gZnVuY3Rpb24obm9kZSwgaSwgaikge1xuICAgICAgbm9kZS5fX3RyYW5zaXRpb25fX1tpZF0uZGVsYXkgPSArdmFsdWUuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBqKTtcbiAgICB9IDogKHZhbHVlID0gK3ZhbHVlLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICBub2RlLl9fdHJhbnNpdGlvbl9fW2lkXS5kZWxheSA9IHZhbHVlO1xuICAgIH0pKTtcbiAgfTtcbiAgZDNfdHJhbnNpdGlvblByb3RvdHlwZS5kdXJhdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIGlkID0gdGhpcy5pZDtcbiAgICByZXR1cm4gZDNfc2VsZWN0aW9uX2VhY2godGhpcywgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBmdW5jdGlvbihub2RlLCBpLCBqKSB7XG4gICAgICBub2RlLl9fdHJhbnNpdGlvbl9fW2lkXS5kdXJhdGlvbiA9IE1hdGgubWF4KDEsIHZhbHVlLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgaikpO1xuICAgIH0gOiAodmFsdWUgPSBNYXRoLm1heCgxLCB2YWx1ZSksIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIG5vZGUuX190cmFuc2l0aW9uX19baWRdLmR1cmF0aW9uID0gdmFsdWU7XG4gICAgfSkpO1xuICB9O1xuICBkM190cmFuc2l0aW9uUHJvdG90eXBlLmVhY2ggPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICAgIHZhciBpZCA9IHRoaXMuaWQ7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICB2YXIgaW5oZXJpdCA9IGQzX3RyYW5zaXRpb25Jbmhlcml0LCBpbmhlcml0SWQgPSBkM190cmFuc2l0aW9uSW5oZXJpdElkO1xuICAgICAgZDNfdHJhbnNpdGlvbkluaGVyaXRJZCA9IGlkO1xuICAgICAgZDNfc2VsZWN0aW9uX2VhY2godGhpcywgZnVuY3Rpb24obm9kZSwgaSwgaikge1xuICAgICAgICBkM190cmFuc2l0aW9uSW5oZXJpdCA9IG5vZGUuX190cmFuc2l0aW9uX19baWRdO1xuICAgICAgICB0eXBlLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgaik7XG4gICAgICB9KTtcbiAgICAgIGQzX3RyYW5zaXRpb25Jbmhlcml0ID0gaW5oZXJpdDtcbiAgICAgIGQzX3RyYW5zaXRpb25Jbmhlcml0SWQgPSBpbmhlcml0SWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGQzX3NlbGVjdGlvbl9lYWNoKHRoaXMsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgdmFyIHRyYW5zaXRpb24gPSBub2RlLl9fdHJhbnNpdGlvbl9fW2lkXTtcbiAgICAgICAgKHRyYW5zaXRpb24uZXZlbnQgfHwgKHRyYW5zaXRpb24uZXZlbnQgPSBkMy5kaXNwYXRjaChcInN0YXJ0XCIsIFwiZW5kXCIpKSkub24odHlwZSwgbGlzdGVuZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBkM190cmFuc2l0aW9uUHJvdG90eXBlLnRyYW5zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaWQwID0gdGhpcy5pZCwgaWQxID0gKytkM190cmFuc2l0aW9uSWQsIHN1Ymdyb3VwcyA9IFtdLCBzdWJncm91cCwgZ3JvdXAsIG5vZGUsIHRyYW5zaXRpb247XG4gICAgZm9yICh2YXIgaiA9IDAsIG0gPSB0aGlzLmxlbmd0aDsgaiA8IG07IGorKykge1xuICAgICAgc3ViZ3JvdXBzLnB1c2goc3ViZ3JvdXAgPSBbXSk7XG4gICAgICBmb3IgKHZhciBncm91cCA9IHRoaXNbal0sIGkgPSAwLCBuID0gZ3JvdXAubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgICB0cmFuc2l0aW9uID0gT2JqZWN0LmNyZWF0ZShub2RlLl9fdHJhbnNpdGlvbl9fW2lkMF0pO1xuICAgICAgICAgIHRyYW5zaXRpb24uZGVsYXkgKz0gdHJhbnNpdGlvbi5kdXJhdGlvbjtcbiAgICAgICAgICBkM190cmFuc2l0aW9uTm9kZShub2RlLCBpLCBpZDEsIHRyYW5zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHN1Ymdyb3VwLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkM190cmFuc2l0aW9uKHN1Ymdyb3VwcywgaWQxKTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfdHJhbnNpdGlvbk5vZGUobm9kZSwgaSwgaWQsIGluaGVyaXQpIHtcbiAgICB2YXIgbG9jayA9IG5vZGUuX190cmFuc2l0aW9uX18gfHwgKG5vZGUuX190cmFuc2l0aW9uX18gPSB7XG4gICAgICBhY3RpdmU6IDAsXG4gICAgICBjb3VudDogMFxuICAgIH0pLCB0cmFuc2l0aW9uID0gbG9ja1tpZF07XG4gICAgaWYgKCF0cmFuc2l0aW9uKSB7XG4gICAgICB2YXIgdGltZSA9IGluaGVyaXQudGltZTtcbiAgICAgIHRyYW5zaXRpb24gPSBsb2NrW2lkXSA9IHtcbiAgICAgICAgdHdlZW46IG5ldyBkM19NYXAoKSxcbiAgICAgICAgdGltZTogdGltZSxcbiAgICAgICAgZWFzZTogaW5oZXJpdC5lYXNlLFxuICAgICAgICBkZWxheTogaW5oZXJpdC5kZWxheSxcbiAgICAgICAgZHVyYXRpb246IGluaGVyaXQuZHVyYXRpb25cbiAgICAgIH07XG4gICAgICArK2xvY2suY291bnQ7XG4gICAgICBkMy50aW1lcihmdW5jdGlvbihlbGFwc2VkKSB7XG4gICAgICAgIHZhciBkID0gbm9kZS5fX2RhdGFfXywgZWFzZSA9IHRyYW5zaXRpb24uZWFzZSwgZGVsYXkgPSB0cmFuc2l0aW9uLmRlbGF5LCBkdXJhdGlvbiA9IHRyYW5zaXRpb24uZHVyYXRpb24sIHR3ZWVuZWQgPSBbXTtcbiAgICAgICAgaWYgKGRlbGF5IDw9IGVsYXBzZWQpIHJldHVybiBzdGFydChlbGFwc2VkKTtcbiAgICAgICAgZDNfdGltZXJfcmVwbGFjZShzdGFydCwgZGVsYXksIHRpbWUpO1xuICAgICAgICBmdW5jdGlvbiBzdGFydChlbGFwc2VkKSB7XG4gICAgICAgICAgaWYgKGxvY2suYWN0aXZlID4gaWQpIHJldHVybiBzdG9wKCk7XG4gICAgICAgICAgbG9jay5hY3RpdmUgPSBpZDtcbiAgICAgICAgICB0cmFuc2l0aW9uLmV2ZW50ICYmIHRyYW5zaXRpb24uZXZlbnQuc3RhcnQuY2FsbChub2RlLCBkLCBpKTtcbiAgICAgICAgICB0cmFuc2l0aW9uLnR3ZWVuLmZvckVhY2goZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID0gdmFsdWUuY2FsbChub2RlLCBkLCBpKSkge1xuICAgICAgICAgICAgICB0d2VlbmVkLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICh0aWNrKGVsYXBzZWQpKSByZXR1cm4gMTtcbiAgICAgICAgICBkM190aW1lcl9yZXBsYWNlKHRpY2ssIDAsIHRpbWUpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHRpY2soZWxhcHNlZCkge1xuICAgICAgICAgIGlmIChsb2NrLmFjdGl2ZSAhPT0gaWQpIHJldHVybiBzdG9wKCk7XG4gICAgICAgICAgdmFyIHQgPSAoZWxhcHNlZCAtIGRlbGF5KSAvIGR1cmF0aW9uLCBlID0gZWFzZSh0KSwgbiA9IHR3ZWVuZWQubGVuZ3RoO1xuICAgICAgICAgIHdoaWxlIChuID4gMCkge1xuICAgICAgICAgICAgdHdlZW5lZFstLW5dLmNhbGwobm9kZSwgZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0ID49IDEpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb24uZXZlbnQgJiYgdHJhbnNpdGlvbi5ldmVudC5lbmQuY2FsbChub2RlLCBkLCBpKTtcbiAgICAgICAgICAgIHJldHVybiBzdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgICAgaWYgKC0tbG9jay5jb3VudCkgZGVsZXRlIGxvY2tbaWRdOyBlbHNlIGRlbGV0ZSBub2RlLl9fdHJhbnNpdGlvbl9fO1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICB9LCAwLCB0aW1lKTtcbiAgICB9XG4gIH1cbiAgZDMuc3ZnLmF4aXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NhbGUgPSBkMy5zY2FsZS5saW5lYXIoKSwgb3JpZW50ID0gZDNfc3ZnX2F4aXNEZWZhdWx0T3JpZW50LCBpbm5lclRpY2tTaXplID0gNiwgb3V0ZXJUaWNrU2l6ZSA9IDYsIHRpY2tQYWRkaW5nID0gMywgdGlja0FyZ3VtZW50c18gPSBbIDEwIF0sIHRpY2tWYWx1ZXMgPSBudWxsLCB0aWNrRm9ybWF0XztcbiAgICBmdW5jdGlvbiBheGlzKGcpIHtcbiAgICAgIGcuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGcgPSBkMy5zZWxlY3QodGhpcyk7XG4gICAgICAgIHZhciB0aWNrcyA9IHRpY2tWYWx1ZXMgPT0gbnVsbCA/IHNjYWxlLnRpY2tzID8gc2NhbGUudGlja3MuYXBwbHkoc2NhbGUsIHRpY2tBcmd1bWVudHNfKSA6IHNjYWxlLmRvbWFpbigpIDogdGlja1ZhbHVlcywgdGlja0Zvcm1hdCA9IHRpY2tGb3JtYXRfID09IG51bGwgPyBzY2FsZS50aWNrRm9ybWF0ID8gc2NhbGUudGlja0Zvcm1hdC5hcHBseShzY2FsZSwgdGlja0FyZ3VtZW50c18pIDogZDNfaWRlbnRpdHkgOiB0aWNrRm9ybWF0XywgdGljayA9IGcuc2VsZWN0QWxsKFwiLnRpY2tcIikuZGF0YSh0aWNrcywgZDNfaWRlbnRpdHkpLCB0aWNrRW50ZXIgPSB0aWNrLmVudGVyKCkuaW5zZXJ0KFwiZ1wiLCBcIi5kb21haW5cIikuYXR0cihcImNsYXNzXCIsIFwidGlja1wiKS5zdHlsZShcIm9wYWNpdHlcIiwgMWUtNiksIHRpY2tFeGl0ID0gZDMudHJhbnNpdGlvbih0aWNrLmV4aXQoKSkuc3R5bGUoXCJvcGFjaXR5XCIsIDFlLTYpLnJlbW92ZSgpLCB0aWNrVXBkYXRlID0gZDMudHJhbnNpdGlvbih0aWNrKS5zdHlsZShcIm9wYWNpdHlcIiwgMSksIHRpY2tUcmFuc2Zvcm07XG4gICAgICAgIHZhciByYW5nZSA9IGQzX3NjYWxlUmFuZ2Uoc2NhbGUpLCBwYXRoID0gZy5zZWxlY3RBbGwoXCIuZG9tYWluXCIpLmRhdGEoWyAwIF0pLCBwYXRoVXBkYXRlID0gKHBhdGguZW50ZXIoKS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJjbGFzc1wiLCBcImRvbWFpblwiKSwgXG4gICAgICAgIGQzLnRyYW5zaXRpb24ocGF0aCkpO1xuICAgICAgICB2YXIgc2NhbGUxID0gc2NhbGUuY29weSgpLCBzY2FsZTAgPSB0aGlzLl9fY2hhcnRfXyB8fCBzY2FsZTE7XG4gICAgICAgIHRoaXMuX19jaGFydF9fID0gc2NhbGUxO1xuICAgICAgICB0aWNrRW50ZXIuYXBwZW5kKFwibGluZVwiKTtcbiAgICAgICAgdGlja0VudGVyLmFwcGVuZChcInRleHRcIik7XG4gICAgICAgIHZhciBsaW5lRW50ZXIgPSB0aWNrRW50ZXIuc2VsZWN0KFwibGluZVwiKSwgbGluZVVwZGF0ZSA9IHRpY2tVcGRhdGUuc2VsZWN0KFwibGluZVwiKSwgdGV4dCA9IHRpY2suc2VsZWN0KFwidGV4dFwiKS50ZXh0KHRpY2tGb3JtYXQpLCB0ZXh0RW50ZXIgPSB0aWNrRW50ZXIuc2VsZWN0KFwidGV4dFwiKSwgdGV4dFVwZGF0ZSA9IHRpY2tVcGRhdGUuc2VsZWN0KFwidGV4dFwiKTtcbiAgICAgICAgc3dpdGNoIChvcmllbnQpIHtcbiAgICAgICAgIGNhc2UgXCJib3R0b21cIjpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aWNrVHJhbnNmb3JtID0gZDNfc3ZnX2F4aXNYO1xuICAgICAgICAgICAgbGluZUVudGVyLmF0dHIoXCJ5MlwiLCBpbm5lclRpY2tTaXplKTtcbiAgICAgICAgICAgIHRleHRFbnRlci5hdHRyKFwieVwiLCBNYXRoLm1heChpbm5lclRpY2tTaXplLCAwKSArIHRpY2tQYWRkaW5nKTtcbiAgICAgICAgICAgIGxpbmVVcGRhdGUuYXR0cihcIngyXCIsIDApLmF0dHIoXCJ5MlwiLCBpbm5lclRpY2tTaXplKTtcbiAgICAgICAgICAgIHRleHRVcGRhdGUuYXR0cihcInhcIiwgMCkuYXR0cihcInlcIiwgTWF0aC5tYXgoaW5uZXJUaWNrU2l6ZSwgMCkgKyB0aWNrUGFkZGluZyk7XG4gICAgICAgICAgICB0ZXh0LmF0dHIoXCJkeVwiLCBcIi43MWVtXCIpLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIik7XG4gICAgICAgICAgICBwYXRoVXBkYXRlLmF0dHIoXCJkXCIsIFwiTVwiICsgcmFuZ2VbMF0gKyBcIixcIiArIG91dGVyVGlja1NpemUgKyBcIlYwSFwiICsgcmFuZ2VbMV0gKyBcIlZcIiArIG91dGVyVGlja1NpemUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICBjYXNlIFwidG9wXCI6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdGlja1RyYW5zZm9ybSA9IGQzX3N2Z19heGlzWDtcbiAgICAgICAgICAgIGxpbmVFbnRlci5hdHRyKFwieTJcIiwgLWlubmVyVGlja1NpemUpO1xuICAgICAgICAgICAgdGV4dEVudGVyLmF0dHIoXCJ5XCIsIC0oTWF0aC5tYXgoaW5uZXJUaWNrU2l6ZSwgMCkgKyB0aWNrUGFkZGluZykpO1xuICAgICAgICAgICAgbGluZVVwZGF0ZS5hdHRyKFwieDJcIiwgMCkuYXR0cihcInkyXCIsIC1pbm5lclRpY2tTaXplKTtcbiAgICAgICAgICAgIHRleHRVcGRhdGUuYXR0cihcInhcIiwgMCkuYXR0cihcInlcIiwgLShNYXRoLm1heChpbm5lclRpY2tTaXplLCAwKSArIHRpY2tQYWRkaW5nKSk7XG4gICAgICAgICAgICB0ZXh0LmF0dHIoXCJkeVwiLCBcIjBlbVwiKS5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpO1xuICAgICAgICAgICAgcGF0aFVwZGF0ZS5hdHRyKFwiZFwiLCBcIk1cIiArIHJhbmdlWzBdICsgXCIsXCIgKyAtb3V0ZXJUaWNrU2l6ZSArIFwiVjBIXCIgKyByYW5nZVsxXSArIFwiVlwiICsgLW91dGVyVGlja1NpemUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpY2tUcmFuc2Zvcm0gPSBkM19zdmdfYXhpc1k7XG4gICAgICAgICAgICBsaW5lRW50ZXIuYXR0cihcIngyXCIsIC1pbm5lclRpY2tTaXplKTtcbiAgICAgICAgICAgIHRleHRFbnRlci5hdHRyKFwieFwiLCAtKE1hdGgubWF4KGlubmVyVGlja1NpemUsIDApICsgdGlja1BhZGRpbmcpKTtcbiAgICAgICAgICAgIGxpbmVVcGRhdGUuYXR0cihcIngyXCIsIC1pbm5lclRpY2tTaXplKS5hdHRyKFwieTJcIiwgMCk7XG4gICAgICAgICAgICB0ZXh0VXBkYXRlLmF0dHIoXCJ4XCIsIC0oTWF0aC5tYXgoaW5uZXJUaWNrU2l6ZSwgMCkgKyB0aWNrUGFkZGluZykpLmF0dHIoXCJ5XCIsIDApO1xuICAgICAgICAgICAgdGV4dC5hdHRyKFwiZHlcIiwgXCIuMzJlbVwiKS5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpO1xuICAgICAgICAgICAgcGF0aFVwZGF0ZS5hdHRyKFwiZFwiLCBcIk1cIiArIC1vdXRlclRpY2tTaXplICsgXCIsXCIgKyByYW5nZVswXSArIFwiSDBWXCIgKyByYW5nZVsxXSArIFwiSFwiICsgLW91dGVyVGlja1NpemUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aWNrVHJhbnNmb3JtID0gZDNfc3ZnX2F4aXNZO1xuICAgICAgICAgICAgbGluZUVudGVyLmF0dHIoXCJ4MlwiLCBpbm5lclRpY2tTaXplKTtcbiAgICAgICAgICAgIHRleHRFbnRlci5hdHRyKFwieFwiLCBNYXRoLm1heChpbm5lclRpY2tTaXplLCAwKSArIHRpY2tQYWRkaW5nKTtcbiAgICAgICAgICAgIGxpbmVVcGRhdGUuYXR0cihcIngyXCIsIGlubmVyVGlja1NpemUpLmF0dHIoXCJ5MlwiLCAwKTtcbiAgICAgICAgICAgIHRleHRVcGRhdGUuYXR0cihcInhcIiwgTWF0aC5tYXgoaW5uZXJUaWNrU2l6ZSwgMCkgKyB0aWNrUGFkZGluZykuYXR0cihcInlcIiwgMCk7XG4gICAgICAgICAgICB0ZXh0LmF0dHIoXCJkeVwiLCBcIi4zMmVtXCIpLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJzdGFydFwiKTtcbiAgICAgICAgICAgIHBhdGhVcGRhdGUuYXR0cihcImRcIiwgXCJNXCIgKyBvdXRlclRpY2tTaXplICsgXCIsXCIgKyByYW5nZVswXSArIFwiSDBWXCIgKyByYW5nZVsxXSArIFwiSFwiICsgb3V0ZXJUaWNrU2l6ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNjYWxlLnJhbmdlQmFuZCkge1xuICAgICAgICAgIHZhciBkeCA9IHNjYWxlMS5yYW5nZUJhbmQoKSAvIDIsIHggPSBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NhbGUxKGQpICsgZHg7XG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aWNrRW50ZXIuY2FsbCh0aWNrVHJhbnNmb3JtLCB4KTtcbiAgICAgICAgICB0aWNrVXBkYXRlLmNhbGwodGlja1RyYW5zZm9ybSwgeCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGlja0VudGVyLmNhbGwodGlja1RyYW5zZm9ybSwgc2NhbGUwKTtcbiAgICAgICAgICB0aWNrVXBkYXRlLmNhbGwodGlja1RyYW5zZm9ybSwgc2NhbGUxKTtcbiAgICAgICAgICB0aWNrRXhpdC5jYWxsKHRpY2tUcmFuc2Zvcm0sIHNjYWxlMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBheGlzLnNjYWxlID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gc2NhbGU7XG4gICAgICBzY2FsZSA9IHg7XG4gICAgICByZXR1cm4gYXhpcztcbiAgICB9O1xuICAgIGF4aXMub3JpZW50ID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gb3JpZW50O1xuICAgICAgb3JpZW50ID0geCBpbiBkM19zdmdfYXhpc09yaWVudHMgPyB4ICsgXCJcIiA6IGQzX3N2Z19heGlzRGVmYXVsdE9yaWVudDtcbiAgICAgIHJldHVybiBheGlzO1xuICAgIH07XG4gICAgYXhpcy50aWNrcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGlja0FyZ3VtZW50c187XG4gICAgICB0aWNrQXJndW1lbnRzXyA9IGFyZ3VtZW50cztcbiAgICAgIHJldHVybiBheGlzO1xuICAgIH07XG4gICAgYXhpcy50aWNrVmFsdWVzID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGlja1ZhbHVlcztcbiAgICAgIHRpY2tWYWx1ZXMgPSB4O1xuICAgICAgcmV0dXJuIGF4aXM7XG4gICAgfTtcbiAgICBheGlzLnRpY2tGb3JtYXQgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aWNrRm9ybWF0XztcbiAgICAgIHRpY2tGb3JtYXRfID0geDtcbiAgICAgIHJldHVybiBheGlzO1xuICAgIH07XG4gICAgYXhpcy50aWNrU2l6ZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHZhciBuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIGlmICghbikgcmV0dXJuIGlubmVyVGlja1NpemU7XG4gICAgICBpbm5lclRpY2tTaXplID0gK3g7XG4gICAgICBvdXRlclRpY2tTaXplID0gK2FyZ3VtZW50c1tuIC0gMV07XG4gICAgICByZXR1cm4gYXhpcztcbiAgICB9O1xuICAgIGF4aXMuaW5uZXJUaWNrU2l6ZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGlubmVyVGlja1NpemU7XG4gICAgICBpbm5lclRpY2tTaXplID0gK3g7XG4gICAgICByZXR1cm4gYXhpcztcbiAgICB9O1xuICAgIGF4aXMub3V0ZXJUaWNrU2l6ZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIG91dGVyVGlja1NpemU7XG4gICAgICBvdXRlclRpY2tTaXplID0gK3g7XG4gICAgICByZXR1cm4gYXhpcztcbiAgICB9O1xuICAgIGF4aXMudGlja1BhZGRpbmcgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aWNrUGFkZGluZztcbiAgICAgIHRpY2tQYWRkaW5nID0gK3g7XG4gICAgICByZXR1cm4gYXhpcztcbiAgICB9O1xuICAgIGF4aXMudGlja1N1YmRpdmlkZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggJiYgYXhpcztcbiAgICB9O1xuICAgIHJldHVybiBheGlzO1xuICB9O1xuICB2YXIgZDNfc3ZnX2F4aXNEZWZhdWx0T3JpZW50ID0gXCJib3R0b21cIiwgZDNfc3ZnX2F4aXNPcmllbnRzID0ge1xuICAgIHRvcDogMSxcbiAgICByaWdodDogMSxcbiAgICBib3R0b206IDEsXG4gICAgbGVmdDogMVxuICB9O1xuICBmdW5jdGlvbiBkM19zdmdfYXhpc1goc2VsZWN0aW9uLCB4KSB7XG4gICAgc2VsZWN0aW9uLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgeChkKSArIFwiLDApXCI7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfc3ZnX2F4aXNZKHNlbGVjdGlvbiwgeSkge1xuICAgIHNlbGVjdGlvbi5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgIHJldHVybiBcInRyYW5zbGF0ZSgwLFwiICsgeShkKSArIFwiKVwiO1xuICAgIH0pO1xuICB9XG4gIGQzLnN2Zy5icnVzaCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBldmVudCA9IGQzX2V2ZW50RGlzcGF0Y2goYnJ1c2gsIFwiYnJ1c2hzdGFydFwiLCBcImJydXNoXCIsIFwiYnJ1c2hlbmRcIiksIHggPSBudWxsLCB5ID0gbnVsbCwgeEV4dGVudCA9IFsgMCwgMCBdLCB5RXh0ZW50ID0gWyAwLCAwIF0sIHhFeHRlbnREb21haW4sIHlFeHRlbnREb21haW4sIHhDbGFtcCA9IHRydWUsIHlDbGFtcCA9IHRydWUsIHJlc2l6ZXMgPSBkM19zdmdfYnJ1c2hSZXNpemVzWzBdO1xuICAgIGZ1bmN0aW9uIGJydXNoKGcpIHtcbiAgICAgIGcuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGcgPSBkMy5zZWxlY3QodGhpcykuc3R5bGUoXCJwb2ludGVyLWV2ZW50c1wiLCBcImFsbFwiKS5zdHlsZShcIi13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvclwiLCBcInJnYmEoMCwwLDAsMClcIikub24oXCJtb3VzZWRvd24uYnJ1c2hcIiwgYnJ1c2hzdGFydCkub24oXCJ0b3VjaHN0YXJ0LmJydXNoXCIsIGJydXNoc3RhcnQpO1xuICAgICAgICB2YXIgYmFja2dyb3VuZCA9IGcuc2VsZWN0QWxsKFwiLmJhY2tncm91bmRcIikuZGF0YShbIDAgXSk7XG4gICAgICAgIGJhY2tncm91bmQuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpLmF0dHIoXCJjbGFzc1wiLCBcImJhY2tncm91bmRcIikuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpLnN0eWxlKFwiY3Vyc29yXCIsIFwiY3Jvc3NoYWlyXCIpO1xuICAgICAgICBnLnNlbGVjdEFsbChcIi5leHRlbnRcIikuZGF0YShbIDAgXSkuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpLmF0dHIoXCJjbGFzc1wiLCBcImV4dGVudFwiKS5zdHlsZShcImN1cnNvclwiLCBcIm1vdmVcIik7XG4gICAgICAgIHZhciByZXNpemUgPSBnLnNlbGVjdEFsbChcIi5yZXNpemVcIikuZGF0YShyZXNpemVzLCBkM19pZGVudGl0eSk7XG4gICAgICAgIHJlc2l6ZS5leGl0KCkucmVtb3ZlKCk7XG4gICAgICAgIHJlc2l6ZS5lbnRlcigpLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gXCJyZXNpemUgXCIgKyBkO1xuICAgICAgICB9KS5zdHlsZShcImN1cnNvclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIGQzX3N2Z19icnVzaEN1cnNvcltkXTtcbiAgICAgICAgfSkuYXBwZW5kKFwicmVjdFwiKS5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIC9bZXddJC8udGVzdChkKSA/IC0zIDogbnVsbDtcbiAgICAgICAgfSkuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHJldHVybiAvXltuc10vLnRlc3QoZCkgPyAtMyA6IG51bGw7XG4gICAgICAgIH0pLmF0dHIoXCJ3aWR0aFwiLCA2KS5hdHRyKFwiaGVpZ2h0XCIsIDYpLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKTtcbiAgICAgICAgcmVzaXplLnN0eWxlKFwiZGlzcGxheVwiLCBicnVzaC5lbXB0eSgpID8gXCJub25lXCIgOiBudWxsKTtcbiAgICAgICAgdmFyIGdVcGRhdGUgPSBkMy50cmFuc2l0aW9uKGcpLCBiYWNrZ3JvdW5kVXBkYXRlID0gZDMudHJhbnNpdGlvbihiYWNrZ3JvdW5kKSwgcmFuZ2U7XG4gICAgICAgIGlmICh4KSB7XG4gICAgICAgICAgcmFuZ2UgPSBkM19zY2FsZVJhbmdlKHgpO1xuICAgICAgICAgIGJhY2tncm91bmRVcGRhdGUuYXR0cihcInhcIiwgcmFuZ2VbMF0pLmF0dHIoXCJ3aWR0aFwiLCByYW5nZVsxXSAtIHJhbmdlWzBdKTtcbiAgICAgICAgICByZWRyYXdYKGdVcGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh5KSB7XG4gICAgICAgICAgcmFuZ2UgPSBkM19zY2FsZVJhbmdlKHkpO1xuICAgICAgICAgIGJhY2tncm91bmRVcGRhdGUuYXR0cihcInlcIiwgcmFuZ2VbMF0pLmF0dHIoXCJoZWlnaHRcIiwgcmFuZ2VbMV0gLSByYW5nZVswXSk7XG4gICAgICAgICAgcmVkcmF3WShnVXBkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZWRyYXcoZ1VwZGF0ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgYnJ1c2guZXZlbnQgPSBmdW5jdGlvbihnKSB7XG4gICAgICBnLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBldmVudF8gPSBldmVudC5vZih0aGlzLCBhcmd1bWVudHMpLCBleHRlbnQxID0ge1xuICAgICAgICAgIHg6IHhFeHRlbnQsXG4gICAgICAgICAgeTogeUV4dGVudCxcbiAgICAgICAgICBpOiB4RXh0ZW50RG9tYWluLFxuICAgICAgICAgIGo6IHlFeHRlbnREb21haW5cbiAgICAgICAgfSwgZXh0ZW50MCA9IHRoaXMuX19jaGFydF9fIHx8IGV4dGVudDE7XG4gICAgICAgIHRoaXMuX19jaGFydF9fID0gZXh0ZW50MTtcbiAgICAgICAgaWYgKGQzX3RyYW5zaXRpb25Jbmhlcml0SWQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpLmVhY2goXCJzdGFydC5icnVzaFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHhFeHRlbnREb21haW4gPSBleHRlbnQwLmk7XG4gICAgICAgICAgICB5RXh0ZW50RG9tYWluID0gZXh0ZW50MC5qO1xuICAgICAgICAgICAgeEV4dGVudCA9IGV4dGVudDAueDtcbiAgICAgICAgICAgIHlFeHRlbnQgPSBleHRlbnQwLnk7XG4gICAgICAgICAgICBldmVudF8oe1xuICAgICAgICAgICAgICB0eXBlOiBcImJydXNoc3RhcnRcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSkudHdlZW4oXCJicnVzaDpicnVzaFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB4aSA9IGQzX2ludGVycG9sYXRlQXJyYXkoeEV4dGVudCwgZXh0ZW50MS54KSwgeWkgPSBkM19pbnRlcnBvbGF0ZUFycmF5KHlFeHRlbnQsIGV4dGVudDEueSk7XG4gICAgICAgICAgICB4RXh0ZW50RG9tYWluID0geUV4dGVudERvbWFpbiA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICB4RXh0ZW50ID0gZXh0ZW50MS54ID0geGkodCk7XG4gICAgICAgICAgICAgIHlFeHRlbnQgPSBleHRlbnQxLnkgPSB5aSh0KTtcbiAgICAgICAgICAgICAgZXZlbnRfKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImJydXNoXCIsXG4gICAgICAgICAgICAgICAgbW9kZTogXCJyZXNpemVcIlxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSkuZWFjaChcImVuZC5icnVzaFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHhFeHRlbnREb21haW4gPSBleHRlbnQxLmk7XG4gICAgICAgICAgICB5RXh0ZW50RG9tYWluID0gZXh0ZW50MS5qO1xuICAgICAgICAgICAgZXZlbnRfKHtcbiAgICAgICAgICAgICAgdHlwZTogXCJicnVzaFwiLFxuICAgICAgICAgICAgICBtb2RlOiBcInJlc2l6ZVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGV2ZW50Xyh7XG4gICAgICAgICAgICAgIHR5cGU6IFwiYnJ1c2hlbmRcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXZlbnRfKHtcbiAgICAgICAgICAgIHR5cGU6IFwiYnJ1c2hzdGFydFwiXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZXZlbnRfKHtcbiAgICAgICAgICAgIHR5cGU6IFwiYnJ1c2hcIixcbiAgICAgICAgICAgIG1vZGU6IFwicmVzaXplXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBldmVudF8oe1xuICAgICAgICAgICAgdHlwZTogXCJicnVzaGVuZFwiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgZnVuY3Rpb24gcmVkcmF3KGcpIHtcbiAgICAgIGcuc2VsZWN0QWxsKFwiLnJlc2l6ZVwiKS5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgeEV4dGVudFsrL2UkLy50ZXN0KGQpXSArIFwiLFwiICsgeUV4dGVudFsrL15zLy50ZXN0KGQpXSArIFwiKVwiO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlZHJhd1goZykge1xuICAgICAgZy5zZWxlY3QoXCIuZXh0ZW50XCIpLmF0dHIoXCJ4XCIsIHhFeHRlbnRbMF0pO1xuICAgICAgZy5zZWxlY3RBbGwoXCIuZXh0ZW50LC5uPnJlY3QsLnM+cmVjdFwiKS5hdHRyKFwid2lkdGhcIiwgeEV4dGVudFsxXSAtIHhFeHRlbnRbMF0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZWRyYXdZKGcpIHtcbiAgICAgIGcuc2VsZWN0KFwiLmV4dGVudFwiKS5hdHRyKFwieVwiLCB5RXh0ZW50WzBdKTtcbiAgICAgIGcuc2VsZWN0QWxsKFwiLmV4dGVudCwuZT5yZWN0LC53PnJlY3RcIikuYXR0cihcImhlaWdodFwiLCB5RXh0ZW50WzFdIC0geUV4dGVudFswXSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJydXNoc3RhcnQoKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gdGhpcywgZXZlbnRUYXJnZXQgPSBkMy5zZWxlY3QoZDMuZXZlbnQudGFyZ2V0KSwgZXZlbnRfID0gZXZlbnQub2YodGFyZ2V0LCBhcmd1bWVudHMpLCBnID0gZDMuc2VsZWN0KHRhcmdldCksIHJlc2l6aW5nID0gZXZlbnRUYXJnZXQuZGF0dW0oKSwgcmVzaXppbmdYID0gIS9eKG58cykkLy50ZXN0KHJlc2l6aW5nKSAmJiB4LCByZXNpemluZ1kgPSAhL14oZXx3KSQvLnRlc3QocmVzaXppbmcpICYmIHksIGRyYWdnaW5nID0gZXZlbnRUYXJnZXQuY2xhc3NlZChcImV4dGVudFwiKSwgZHJhZ1Jlc3RvcmUgPSBkM19ldmVudF9kcmFnU3VwcHJlc3MoKSwgY2VudGVyLCBvcmlnaW4gPSBkMy5tb3VzZSh0YXJnZXQpLCBvZmZzZXQ7XG4gICAgICB2YXIgdyA9IGQzLnNlbGVjdChkM193aW5kb3cpLm9uKFwia2V5ZG93bi5icnVzaFwiLCBrZXlkb3duKS5vbihcImtleXVwLmJydXNoXCIsIGtleXVwKTtcbiAgICAgIGlmIChkMy5ldmVudC5jaGFuZ2VkVG91Y2hlcykge1xuICAgICAgICB3Lm9uKFwidG91Y2htb3ZlLmJydXNoXCIsIGJydXNobW92ZSkub24oXCJ0b3VjaGVuZC5icnVzaFwiLCBicnVzaGVuZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3Lm9uKFwibW91c2Vtb3ZlLmJydXNoXCIsIGJydXNobW92ZSkub24oXCJtb3VzZXVwLmJydXNoXCIsIGJydXNoZW5kKTtcbiAgICAgIH1cbiAgICAgIGcuaW50ZXJydXB0KCkuc2VsZWN0QWxsKFwiKlwiKS5pbnRlcnJ1cHQoKTtcbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICBvcmlnaW5bMF0gPSB4RXh0ZW50WzBdIC0gb3JpZ2luWzBdO1xuICAgICAgICBvcmlnaW5bMV0gPSB5RXh0ZW50WzBdIC0gb3JpZ2luWzFdO1xuICAgICAgfSBlbHNlIGlmIChyZXNpemluZykge1xuICAgICAgICB2YXIgZXggPSArL3ckLy50ZXN0KHJlc2l6aW5nKSwgZXkgPSArL15uLy50ZXN0KHJlc2l6aW5nKTtcbiAgICAgICAgb2Zmc2V0ID0gWyB4RXh0ZW50WzEgLSBleF0gLSBvcmlnaW5bMF0sIHlFeHRlbnRbMSAtIGV5XSAtIG9yaWdpblsxXSBdO1xuICAgICAgICBvcmlnaW5bMF0gPSB4RXh0ZW50W2V4XTtcbiAgICAgICAgb3JpZ2luWzFdID0geUV4dGVudFtleV07XG4gICAgICB9IGVsc2UgaWYgKGQzLmV2ZW50LmFsdEtleSkgY2VudGVyID0gb3JpZ2luLnNsaWNlKCk7XG4gICAgICBnLnN0eWxlKFwicG9pbnRlci1ldmVudHNcIiwgXCJub25lXCIpLnNlbGVjdEFsbChcIi5yZXNpemVcIikuc3R5bGUoXCJkaXNwbGF5XCIsIG51bGwpO1xuICAgICAgZDMuc2VsZWN0KFwiYm9keVwiKS5zdHlsZShcImN1cnNvclwiLCBldmVudFRhcmdldC5zdHlsZShcImN1cnNvclwiKSk7XG4gICAgICBldmVudF8oe1xuICAgICAgICB0eXBlOiBcImJydXNoc3RhcnRcIlxuICAgICAgfSk7XG4gICAgICBicnVzaG1vdmUoKTtcbiAgICAgIGZ1bmN0aW9uIGtleWRvd24oKSB7XG4gICAgICAgIGlmIChkMy5ldmVudC5rZXlDb2RlID09IDMyKSB7XG4gICAgICAgICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgICAgICAgY2VudGVyID0gbnVsbDtcbiAgICAgICAgICAgIG9yaWdpblswXSAtPSB4RXh0ZW50WzFdO1xuICAgICAgICAgICAgb3JpZ2luWzFdIC09IHlFeHRlbnRbMV07XG4gICAgICAgICAgICBkcmFnZ2luZyA9IDI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGQzX2V2ZW50UHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24ga2V5dXAoKSB7XG4gICAgICAgIGlmIChkMy5ldmVudC5rZXlDb2RlID09IDMyICYmIGRyYWdnaW5nID09IDIpIHtcbiAgICAgICAgICBvcmlnaW5bMF0gKz0geEV4dGVudFsxXTtcbiAgICAgICAgICBvcmlnaW5bMV0gKz0geUV4dGVudFsxXTtcbiAgICAgICAgICBkcmFnZ2luZyA9IDA7XG4gICAgICAgICAgZDNfZXZlbnRQcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBicnVzaG1vdmUoKSB7XG4gICAgICAgIHZhciBwb2ludCA9IGQzLm1vdXNlKHRhcmdldCksIG1vdmVkID0gZmFsc2U7XG4gICAgICAgIGlmIChvZmZzZXQpIHtcbiAgICAgICAgICBwb2ludFswXSArPSBvZmZzZXRbMF07XG4gICAgICAgICAgcG9pbnRbMV0gKz0gb2Zmc2V0WzFdO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgICAgICBpZiAoZDMuZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgICBpZiAoIWNlbnRlcikgY2VudGVyID0gWyAoeEV4dGVudFswXSArIHhFeHRlbnRbMV0pIC8gMiwgKHlFeHRlbnRbMF0gKyB5RXh0ZW50WzFdKSAvIDIgXTtcbiAgICAgICAgICAgIG9yaWdpblswXSA9IHhFeHRlbnRbKyhwb2ludFswXSA8IGNlbnRlclswXSldO1xuICAgICAgICAgICAgb3JpZ2luWzFdID0geUV4dGVudFsrKHBvaW50WzFdIDwgY2VudGVyWzFdKV07XG4gICAgICAgICAgfSBlbHNlIGNlbnRlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc2l6aW5nWCAmJiBtb3ZlMShwb2ludCwgeCwgMCkpIHtcbiAgICAgICAgICByZWRyYXdYKGcpO1xuICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzaXppbmdZICYmIG1vdmUxKHBvaW50LCB5LCAxKSkge1xuICAgICAgICAgIHJlZHJhd1koZyk7XG4gICAgICAgICAgbW92ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb3ZlZCkge1xuICAgICAgICAgIHJlZHJhdyhnKTtcbiAgICAgICAgICBldmVudF8oe1xuICAgICAgICAgICAgdHlwZTogXCJicnVzaFwiLFxuICAgICAgICAgICAgbW9kZTogZHJhZ2dpbmcgPyBcIm1vdmVcIiA6IFwicmVzaXplXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gbW92ZTEocG9pbnQsIHNjYWxlLCBpKSB7XG4gICAgICAgIHZhciByYW5nZSA9IGQzX3NjYWxlUmFuZ2Uoc2NhbGUpLCByMCA9IHJhbmdlWzBdLCByMSA9IHJhbmdlWzFdLCBwb3NpdGlvbiA9IG9yaWdpbltpXSwgZXh0ZW50ID0gaSA/IHlFeHRlbnQgOiB4RXh0ZW50LCBzaXplID0gZXh0ZW50WzFdIC0gZXh0ZW50WzBdLCBtaW4sIG1heDtcbiAgICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgICAgcjAgLT0gcG9zaXRpb247XG4gICAgICAgICAgcjEgLT0gc2l6ZSArIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIG1pbiA9IChpID8geUNsYW1wIDogeENsYW1wKSA/IE1hdGgubWF4KHIwLCBNYXRoLm1pbihyMSwgcG9pbnRbaV0pKSA6IHBvaW50W2ldO1xuICAgICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgICBtYXggPSAobWluICs9IHBvc2l0aW9uKSArIHNpemU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGNlbnRlcikgcG9zaXRpb24gPSBNYXRoLm1heChyMCwgTWF0aC5taW4ocjEsIDIgKiBjZW50ZXJbaV0gLSBtaW4pKTtcbiAgICAgICAgICBpZiAocG9zaXRpb24gPCBtaW4pIHtcbiAgICAgICAgICAgIG1heCA9IG1pbjtcbiAgICAgICAgICAgIG1pbiA9IHBvc2l0aW9uO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXggPSBwb3NpdGlvbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV4dGVudFswXSAhPSBtaW4gfHwgZXh0ZW50WzFdICE9IG1heCkge1xuICAgICAgICAgIGlmIChpKSB5RXh0ZW50RG9tYWluID0gbnVsbDsgZWxzZSB4RXh0ZW50RG9tYWluID0gbnVsbDtcbiAgICAgICAgICBleHRlbnRbMF0gPSBtaW47XG4gICAgICAgICAgZXh0ZW50WzFdID0gbWF4O1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBicnVzaGVuZCgpIHtcbiAgICAgICAgYnJ1c2htb3ZlKCk7XG4gICAgICAgIGcuc3R5bGUoXCJwb2ludGVyLWV2ZW50c1wiLCBcImFsbFwiKS5zZWxlY3RBbGwoXCIucmVzaXplXCIpLnN0eWxlKFwiZGlzcGxheVwiLCBicnVzaC5lbXB0eSgpID8gXCJub25lXCIgOiBudWxsKTtcbiAgICAgICAgZDMuc2VsZWN0KFwiYm9keVwiKS5zdHlsZShcImN1cnNvclwiLCBudWxsKTtcbiAgICAgICAgdy5vbihcIm1vdXNlbW92ZS5icnVzaFwiLCBudWxsKS5vbihcIm1vdXNldXAuYnJ1c2hcIiwgbnVsbCkub24oXCJ0b3VjaG1vdmUuYnJ1c2hcIiwgbnVsbCkub24oXCJ0b3VjaGVuZC5icnVzaFwiLCBudWxsKS5vbihcImtleWRvd24uYnJ1c2hcIiwgbnVsbCkub24oXCJrZXl1cC5icnVzaFwiLCBudWxsKTtcbiAgICAgICAgZHJhZ1Jlc3RvcmUoKTtcbiAgICAgICAgZXZlbnRfKHtcbiAgICAgICAgICB0eXBlOiBcImJydXNoZW5kXCJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGJydXNoLnggPSBmdW5jdGlvbih6KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB4O1xuICAgICAgeCA9IHo7XG4gICAgICByZXNpemVzID0gZDNfc3ZnX2JydXNoUmVzaXplc1sheCA8PCAxIHwgIXldO1xuICAgICAgcmV0dXJuIGJydXNoO1xuICAgIH07XG4gICAgYnJ1c2gueSA9IGZ1bmN0aW9uKHopIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHk7XG4gICAgICB5ID0gejtcbiAgICAgIHJlc2l6ZXMgPSBkM19zdmdfYnJ1c2hSZXNpemVzWyF4IDw8IDEgfCAheV07XG4gICAgICByZXR1cm4gYnJ1c2g7XG4gICAgfTtcbiAgICBicnVzaC5jbGFtcCA9IGZ1bmN0aW9uKHopIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHggJiYgeSA/IFsgeENsYW1wLCB5Q2xhbXAgXSA6IHggPyB4Q2xhbXAgOiB5ID8geUNsYW1wIDogbnVsbDtcbiAgICAgIGlmICh4ICYmIHkpIHhDbGFtcCA9ICEhelswXSwgeUNsYW1wID0gISF6WzFdOyBlbHNlIGlmICh4KSB4Q2xhbXAgPSAhIXo7IGVsc2UgaWYgKHkpIHlDbGFtcCA9ICEhejtcbiAgICAgIHJldHVybiBicnVzaDtcbiAgICB9O1xuICAgIGJydXNoLmV4dGVudCA9IGZ1bmN0aW9uKHopIHtcbiAgICAgIHZhciB4MCwgeDEsIHkwLCB5MSwgdDtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBpZiAoeCkge1xuICAgICAgICAgIGlmICh4RXh0ZW50RG9tYWluKSB7XG4gICAgICAgICAgICB4MCA9IHhFeHRlbnREb21haW5bMF0sIHgxID0geEV4dGVudERvbWFpblsxXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeDAgPSB4RXh0ZW50WzBdLCB4MSA9IHhFeHRlbnRbMV07XG4gICAgICAgICAgICBpZiAoeC5pbnZlcnQpIHgwID0geC5pbnZlcnQoeDApLCB4MSA9IHguaW52ZXJ0KHgxKTtcbiAgICAgICAgICAgIGlmICh4MSA8IHgwKSB0ID0geDAsIHgwID0geDEsIHgxID0gdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkpIHtcbiAgICAgICAgICBpZiAoeUV4dGVudERvbWFpbikge1xuICAgICAgICAgICAgeTAgPSB5RXh0ZW50RG9tYWluWzBdLCB5MSA9IHlFeHRlbnREb21haW5bMV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHkwID0geUV4dGVudFswXSwgeTEgPSB5RXh0ZW50WzFdO1xuICAgICAgICAgICAgaWYgKHkuaW52ZXJ0KSB5MCA9IHkuaW52ZXJ0KHkwKSwgeTEgPSB5LmludmVydCh5MSk7XG4gICAgICAgICAgICBpZiAoeTEgPCB5MCkgdCA9IHkwLCB5MCA9IHkxLCB5MSA9IHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4ICYmIHkgPyBbIFsgeDAsIHkwIF0sIFsgeDEsIHkxIF0gXSA6IHggPyBbIHgwLCB4MSBdIDogeSAmJiBbIHkwLCB5MSBdO1xuICAgICAgfVxuICAgICAgaWYgKHgpIHtcbiAgICAgICAgeDAgPSB6WzBdLCB4MSA9IHpbMV07XG4gICAgICAgIGlmICh5KSB4MCA9IHgwWzBdLCB4MSA9IHgxWzBdO1xuICAgICAgICB4RXh0ZW50RG9tYWluID0gWyB4MCwgeDEgXTtcbiAgICAgICAgaWYgKHguaW52ZXJ0KSB4MCA9IHgoeDApLCB4MSA9IHgoeDEpO1xuICAgICAgICBpZiAoeDEgPCB4MCkgdCA9IHgwLCB4MCA9IHgxLCB4MSA9IHQ7XG4gICAgICAgIGlmICh4MCAhPSB4RXh0ZW50WzBdIHx8IHgxICE9IHhFeHRlbnRbMV0pIHhFeHRlbnQgPSBbIHgwLCB4MSBdO1xuICAgICAgfVxuICAgICAgaWYgKHkpIHtcbiAgICAgICAgeTAgPSB6WzBdLCB5MSA9IHpbMV07XG4gICAgICAgIGlmICh4KSB5MCA9IHkwWzFdLCB5MSA9IHkxWzFdO1xuICAgICAgICB5RXh0ZW50RG9tYWluID0gWyB5MCwgeTEgXTtcbiAgICAgICAgaWYgKHkuaW52ZXJ0KSB5MCA9IHkoeTApLCB5MSA9IHkoeTEpO1xuICAgICAgICBpZiAoeTEgPCB5MCkgdCA9IHkwLCB5MCA9IHkxLCB5MSA9IHQ7XG4gICAgICAgIGlmICh5MCAhPSB5RXh0ZW50WzBdIHx8IHkxICE9IHlFeHRlbnRbMV0pIHlFeHRlbnQgPSBbIHkwLCB5MSBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJydXNoO1xuICAgIH07XG4gICAgYnJ1c2guY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghYnJ1c2guZW1wdHkoKSkge1xuICAgICAgICB4RXh0ZW50ID0gWyAwLCAwIF0sIHlFeHRlbnQgPSBbIDAsIDAgXTtcbiAgICAgICAgeEV4dGVudERvbWFpbiA9IHlFeHRlbnREb21haW4gPSBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJydXNoO1xuICAgIH07XG4gICAgYnJ1c2guZW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAhIXggJiYgeEV4dGVudFswXSA9PSB4RXh0ZW50WzFdIHx8ICEheSAmJiB5RXh0ZW50WzBdID09IHlFeHRlbnRbMV07XG4gICAgfTtcbiAgICByZXR1cm4gZDMucmViaW5kKGJydXNoLCBldmVudCwgXCJvblwiKTtcbiAgfTtcbiAgdmFyIGQzX3N2Z19icnVzaEN1cnNvciA9IHtcbiAgICBuOiBcIm5zLXJlc2l6ZVwiLFxuICAgIGU6IFwiZXctcmVzaXplXCIsXG4gICAgczogXCJucy1yZXNpemVcIixcbiAgICB3OiBcImV3LXJlc2l6ZVwiLFxuICAgIG53OiBcIm53c2UtcmVzaXplXCIsXG4gICAgbmU6IFwibmVzdy1yZXNpemVcIixcbiAgICBzZTogXCJud3NlLXJlc2l6ZVwiLFxuICAgIHN3OiBcIm5lc3ctcmVzaXplXCJcbiAgfTtcbiAgdmFyIGQzX3N2Z19icnVzaFJlc2l6ZXMgPSBbIFsgXCJuXCIsIFwiZVwiLCBcInNcIiwgXCJ3XCIsIFwibndcIiwgXCJuZVwiLCBcInNlXCIsIFwic3dcIiBdLCBbIFwiZVwiLCBcIndcIiBdLCBbIFwiblwiLCBcInNcIiBdLCBbXSBdO1xuICB2YXIgZDNfdGltZSA9IGQzLnRpbWUgPSB7fSwgZDNfZGF0ZSA9IERhdGUsIGQzX3RpbWVfZGF5U3ltYm9scyA9IFsgXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiIF07XG4gIGZ1bmN0aW9uIGQzX2RhdGVfdXRjKCkge1xuICAgIHRoaXMuXyA9IG5ldyBEYXRlKGFyZ3VtZW50cy5sZW5ndGggPiAxID8gRGF0ZS5VVEMuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IGFyZ3VtZW50c1swXSk7XG4gIH1cbiAgZDNfZGF0ZV91dGMucHJvdG90eXBlID0ge1xuICAgIGdldERhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuXy5nZXRVVENEYXRlKCk7XG4gICAgfSxcbiAgICBnZXREYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuXy5nZXRVVENEYXkoKTtcbiAgICB9LFxuICAgIGdldEZ1bGxZZWFyOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl8uZ2V0VVRDRnVsbFllYXIoKTtcbiAgICB9LFxuICAgIGdldEhvdXJzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl8uZ2V0VVRDSG91cnMoKTtcbiAgICB9LFxuICAgIGdldE1pbGxpc2Vjb25kczogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIH0sXG4gICAgZ2V0TWludXRlczogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fLmdldFVUQ01pbnV0ZXMoKTtcbiAgICB9LFxuICAgIGdldE1vbnRoOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl8uZ2V0VVRDTW9udGgoKTtcbiAgICB9LFxuICAgIGdldFNlY29uZHM6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuXy5nZXRVVENTZWNvbmRzKCk7XG4gICAgfSxcbiAgICBnZXRUaW1lOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl8uZ2V0VGltZSgpO1xuICAgIH0sXG4gICAgZ2V0VGltZXpvbmVPZmZzZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSxcbiAgICB2YWx1ZU9mOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl8udmFsdWVPZigpO1xuICAgIH0sXG4gICAgc2V0RGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICBkM190aW1lX3Byb3RvdHlwZS5zZXRVVENEYXRlLmFwcGx5KHRoaXMuXywgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHNldERheTogZnVuY3Rpb24oKSB7XG4gICAgICBkM190aW1lX3Byb3RvdHlwZS5zZXRVVENEYXkuYXBwbHkodGhpcy5fLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgc2V0RnVsbFllYXI6IGZ1bmN0aW9uKCkge1xuICAgICAgZDNfdGltZV9wcm90b3R5cGUuc2V0VVRDRnVsbFllYXIuYXBwbHkodGhpcy5fLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgc2V0SG91cnM6IGZ1bmN0aW9uKCkge1xuICAgICAgZDNfdGltZV9wcm90b3R5cGUuc2V0VVRDSG91cnMuYXBwbHkodGhpcy5fLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgc2V0TWlsbGlzZWNvbmRzOiBmdW5jdGlvbigpIHtcbiAgICAgIGQzX3RpbWVfcHJvdG90eXBlLnNldFVUQ01pbGxpc2Vjb25kcy5hcHBseSh0aGlzLl8sIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBzZXRNaW51dGVzOiBmdW5jdGlvbigpIHtcbiAgICAgIGQzX3RpbWVfcHJvdG90eXBlLnNldFVUQ01pbnV0ZXMuYXBwbHkodGhpcy5fLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgc2V0TW9udGg6IGZ1bmN0aW9uKCkge1xuICAgICAgZDNfdGltZV9wcm90b3R5cGUuc2V0VVRDTW9udGguYXBwbHkodGhpcy5fLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgc2V0U2Vjb25kczogZnVuY3Rpb24oKSB7XG4gICAgICBkM190aW1lX3Byb3RvdHlwZS5zZXRVVENTZWNvbmRzLmFwcGx5KHRoaXMuXywgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHNldFRpbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgZDNfdGltZV9wcm90b3R5cGUuc2V0VGltZS5hcHBseSh0aGlzLl8sIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xuICB2YXIgZDNfdGltZV9wcm90b3R5cGUgPSBEYXRlLnByb3RvdHlwZTtcbiAgdmFyIGQzX3RpbWVfZm9ybWF0RGF0ZVRpbWUgPSBcIiVhICViICVlICVYICVZXCIsIGQzX3RpbWVfZm9ybWF0RGF0ZSA9IFwiJW0vJWQvJVlcIiwgZDNfdGltZV9mb3JtYXRUaW1lID0gXCIlSDolTTolU1wiO1xuICB2YXIgZDNfdGltZV9kYXlzID0gWyBcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCIgXSwgZDNfdGltZV9kYXlBYmJyZXZpYXRpb25zID0gWyBcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiIF0sIGQzX3RpbWVfbW9udGhzID0gWyBcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCIgXSwgZDNfdGltZV9tb250aEFiYnJldmlhdGlvbnMgPSBbIFwiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCIgXTtcbiAgZnVuY3Rpb24gZDNfdGltZV9pbnRlcnZhbChsb2NhbCwgc3RlcCwgbnVtYmVyKSB7XG4gICAgZnVuY3Rpb24gcm91bmQoZGF0ZSkge1xuICAgICAgdmFyIGQwID0gbG9jYWwoZGF0ZSksIGQxID0gb2Zmc2V0KGQwLCAxKTtcbiAgICAgIHJldHVybiBkYXRlIC0gZDAgPCBkMSAtIGRhdGUgPyBkMCA6IGQxO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjZWlsKGRhdGUpIHtcbiAgICAgIHN0ZXAoZGF0ZSA9IGxvY2FsKG5ldyBkM19kYXRlKGRhdGUgLSAxKSksIDEpO1xuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9mZnNldChkYXRlLCBrKSB7XG4gICAgICBzdGVwKGRhdGUgPSBuZXcgZDNfZGF0ZSgrZGF0ZSksIGspO1xuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJhbmdlKHQwLCB0MSwgZHQpIHtcbiAgICAgIHZhciB0aW1lID0gY2VpbCh0MCksIHRpbWVzID0gW107XG4gICAgICBpZiAoZHQgPiAxKSB7XG4gICAgICAgIHdoaWxlICh0aW1lIDwgdDEpIHtcbiAgICAgICAgICBpZiAoIShudW1iZXIodGltZSkgJSBkdCkpIHRpbWVzLnB1c2gobmV3IERhdGUoK3RpbWUpKTtcbiAgICAgICAgICBzdGVwKHRpbWUsIDEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZSAodGltZSA8IHQxKSB0aW1lcy5wdXNoKG5ldyBEYXRlKCt0aW1lKSksIHN0ZXAodGltZSwgMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGltZXM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJhbmdlX3V0Yyh0MCwgdDEsIGR0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBkM19kYXRlID0gZDNfZGF0ZV91dGM7XG4gICAgICAgIHZhciB1dGMgPSBuZXcgZDNfZGF0ZV91dGMoKTtcbiAgICAgICAgdXRjLl8gPSB0MDtcbiAgICAgICAgcmV0dXJuIHJhbmdlKHV0YywgdDEsIGR0KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGQzX2RhdGUgPSBEYXRlO1xuICAgICAgfVxuICAgIH1cbiAgICBsb2NhbC5mbG9vciA9IGxvY2FsO1xuICAgIGxvY2FsLnJvdW5kID0gcm91bmQ7XG4gICAgbG9jYWwuY2VpbCA9IGNlaWw7XG4gICAgbG9jYWwub2Zmc2V0ID0gb2Zmc2V0O1xuICAgIGxvY2FsLnJhbmdlID0gcmFuZ2U7XG4gICAgdmFyIHV0YyA9IGxvY2FsLnV0YyA9IGQzX3RpbWVfaW50ZXJ2YWxfdXRjKGxvY2FsKTtcbiAgICB1dGMuZmxvb3IgPSB1dGM7XG4gICAgdXRjLnJvdW5kID0gZDNfdGltZV9pbnRlcnZhbF91dGMocm91bmQpO1xuICAgIHV0Yy5jZWlsID0gZDNfdGltZV9pbnRlcnZhbF91dGMoY2VpbCk7XG4gICAgdXRjLm9mZnNldCA9IGQzX3RpbWVfaW50ZXJ2YWxfdXRjKG9mZnNldCk7XG4gICAgdXRjLnJhbmdlID0gcmFuZ2VfdXRjO1xuICAgIHJldHVybiBsb2NhbDtcbiAgfVxuICBmdW5jdGlvbiBkM190aW1lX2ludGVydmFsX3V0YyhtZXRob2QpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZGF0ZSwgaykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZDNfZGF0ZSA9IGQzX2RhdGVfdXRjO1xuICAgICAgICB2YXIgdXRjID0gbmV3IGQzX2RhdGVfdXRjKCk7XG4gICAgICAgIHV0Yy5fID0gZGF0ZTtcbiAgICAgICAgcmV0dXJuIG1ldGhvZCh1dGMsIGspLl87XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBkM19kYXRlID0gRGF0ZTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGQzX3RpbWUueWVhciA9IGQzX3RpbWVfaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgIGRhdGUgPSBkM190aW1lLmRheShkYXRlKTtcbiAgICBkYXRlLnNldE1vbnRoKDAsIDEpO1xuICAgIHJldHVybiBkYXRlO1xuICB9LCBmdW5jdGlvbihkYXRlLCBvZmZzZXQpIHtcbiAgICBkYXRlLnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSArIG9mZnNldCk7XG4gIH0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICB9KTtcbiAgZDNfdGltZS55ZWFycyA9IGQzX3RpbWUueWVhci5yYW5nZTtcbiAgZDNfdGltZS55ZWFycy51dGMgPSBkM190aW1lLnllYXIudXRjLnJhbmdlO1xuICBkM190aW1lLmRheSA9IGQzX3RpbWVfaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgIHZhciBkYXkgPSBuZXcgZDNfZGF0ZSgyZTMsIDApO1xuICAgIGRheS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpO1xuICAgIHJldHVybiBkYXk7XG4gIH0sIGZ1bmN0aW9uKGRhdGUsIG9mZnNldCkge1xuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIG9mZnNldCk7XG4gIH0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXREYXRlKCkgLSAxO1xuICB9KTtcbiAgZDNfdGltZS5kYXlzID0gZDNfdGltZS5kYXkucmFuZ2U7XG4gIGQzX3RpbWUuZGF5cy51dGMgPSBkM190aW1lLmRheS51dGMucmFuZ2U7XG4gIGQzX3RpbWUuZGF5T2ZZZWFyID0gZnVuY3Rpb24oZGF0ZSkge1xuICAgIHZhciB5ZWFyID0gZDNfdGltZS55ZWFyKGRhdGUpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKChkYXRlIC0geWVhciAtIChkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgLSB5ZWFyLmdldFRpbWV6b25lT2Zmc2V0KCkpICogNmU0KSAvIDg2NGU1KTtcbiAgfTtcbiAgZDNfdGltZV9kYXlTeW1ib2xzLmZvckVhY2goZnVuY3Rpb24oZGF5LCBpKSB7XG4gICAgZGF5ID0gZGF5LnRvTG93ZXJDYXNlKCk7XG4gICAgaSA9IDcgLSBpO1xuICAgIHZhciBpbnRlcnZhbCA9IGQzX3RpbWVbZGF5XSA9IGQzX3RpbWVfaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgICAgKGRhdGUgPSBkM190aW1lLmRheShkYXRlKSkuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIChkYXRlLmdldERheSgpICsgaSkgJSA3KTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH0sIGZ1bmN0aW9uKGRhdGUsIG9mZnNldCkge1xuICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgTWF0aC5mbG9vcihvZmZzZXQpICogNyk7XG4gICAgfSwgZnVuY3Rpb24oZGF0ZSkge1xuICAgICAgdmFyIGRheSA9IGQzX3RpbWUueWVhcihkYXRlKS5nZXREYXkoKTtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKChkM190aW1lLmRheU9mWWVhcihkYXRlKSArIChkYXkgKyBpKSAlIDcpIC8gNykgLSAoZGF5ICE9PSBpKTtcbiAgICB9KTtcbiAgICBkM190aW1lW2RheSArIFwic1wiXSA9IGludGVydmFsLnJhbmdlO1xuICAgIGQzX3RpbWVbZGF5ICsgXCJzXCJdLnV0YyA9IGludGVydmFsLnV0Yy5yYW5nZTtcbiAgICBkM190aW1lW2RheSArIFwiT2ZZZWFyXCJdID0gZnVuY3Rpb24oZGF0ZSkge1xuICAgICAgdmFyIGRheSA9IGQzX3RpbWUueWVhcihkYXRlKS5nZXREYXkoKTtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKChkM190aW1lLmRheU9mWWVhcihkYXRlKSArIChkYXkgKyBpKSAlIDcpIC8gNyk7XG4gICAgfTtcbiAgfSk7XG4gIGQzX3RpbWUud2VlayA9IGQzX3RpbWUuc3VuZGF5O1xuICBkM190aW1lLndlZWtzID0gZDNfdGltZS5zdW5kYXkucmFuZ2U7XG4gIGQzX3RpbWUud2Vla3MudXRjID0gZDNfdGltZS5zdW5kYXkudXRjLnJhbmdlO1xuICBkM190aW1lLndlZWtPZlllYXIgPSBkM190aW1lLnN1bmRheU9mWWVhcjtcbiAgZDNfdGltZS5mb3JtYXQgPSBkM190aW1lX2Zvcm1hdDtcbiAgZnVuY3Rpb24gZDNfdGltZV9mb3JtYXQodGVtcGxhdGUpIHtcbiAgICB2YXIgbiA9IHRlbXBsYXRlLmxlbmd0aDtcbiAgICBmdW5jdGlvbiBmb3JtYXQoZGF0ZSkge1xuICAgICAgdmFyIHN0cmluZyA9IFtdLCBpID0gLTEsIGogPSAwLCBjLCBwLCBmO1xuICAgICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgICAgaWYgKHRlbXBsYXRlLmNoYXJDb2RlQXQoaSkgPT09IDM3KSB7XG4gICAgICAgICAgc3RyaW5nLnB1c2godGVtcGxhdGUuc3Vic3RyaW5nKGosIGkpKTtcbiAgICAgICAgICBpZiAoKHAgPSBkM190aW1lX2Zvcm1hdFBhZHNbYyA9IHRlbXBsYXRlLmNoYXJBdCgrK2kpXSkgIT0gbnVsbCkgYyA9IHRlbXBsYXRlLmNoYXJBdCgrK2kpO1xuICAgICAgICAgIGlmIChmID0gZDNfdGltZV9mb3JtYXRzW2NdKSBjID0gZihkYXRlLCBwID09IG51bGwgPyBjID09PSBcImVcIiA/IFwiIFwiIDogXCIwXCIgOiBwKTtcbiAgICAgICAgICBzdHJpbmcucHVzaChjKTtcbiAgICAgICAgICBqID0gaSArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHN0cmluZy5wdXNoKHRlbXBsYXRlLnN1YnN0cmluZyhqLCBpKSk7XG4gICAgICByZXR1cm4gc3RyaW5nLmpvaW4oXCJcIik7XG4gICAgfVxuICAgIGZvcm1hdC5wYXJzZSA9IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgdmFyIGQgPSB7XG4gICAgICAgIHk6IDE5MDAsXG4gICAgICAgIG06IDAsXG4gICAgICAgIGQ6IDEsXG4gICAgICAgIEg6IDAsXG4gICAgICAgIE06IDAsXG4gICAgICAgIFM6IDAsXG4gICAgICAgIEw6IDAsXG4gICAgICAgIFo6IG51bGxcbiAgICAgIH0sIGkgPSBkM190aW1lX3BhcnNlKGQsIHRlbXBsYXRlLCBzdHJpbmcsIDApO1xuICAgICAgaWYgKGkgIT0gc3RyaW5nLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gICAgICBpZiAoXCJwXCIgaW4gZCkgZC5IID0gZC5IICUgMTIgKyBkLnAgKiAxMjtcbiAgICAgIHZhciBsb2NhbFogPSBkLlogIT0gbnVsbCAmJiBkM19kYXRlICE9PSBkM19kYXRlX3V0YywgZGF0ZSA9IG5ldyAobG9jYWxaID8gZDNfZGF0ZV91dGMgOiBkM19kYXRlKSgpO1xuICAgICAgaWYgKFwialwiIGluIGQpIGRhdGUuc2V0RnVsbFllYXIoZC55LCAwLCBkLmopOyBlbHNlIGlmIChcIndcIiBpbiBkICYmIChcIldcIiBpbiBkIHx8IFwiVVwiIGluIGQpKSB7XG4gICAgICAgIGRhdGUuc2V0RnVsbFllYXIoZC55LCAwLCAxKTtcbiAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcihkLnksIDAsIFwiV1wiIGluIGQgPyAoZC53ICsgNikgJSA3ICsgZC5XICogNyAtIChkYXRlLmdldERheSgpICsgNSkgJSA3IDogZC53ICsgZC5VICogNyAtIChkYXRlLmdldERheSgpICsgNikgJSA3KTtcbiAgICAgIH0gZWxzZSBkYXRlLnNldEZ1bGxZZWFyKGQueSwgZC5tLCBkLmQpO1xuICAgICAgZGF0ZS5zZXRIb3VycyhkLkggKyBNYXRoLmZsb29yKGQuWiAvIDEwMCksIGQuTSArIGQuWiAlIDEwMCwgZC5TLCBkLkwpO1xuICAgICAgcmV0dXJuIGxvY2FsWiA/IGRhdGUuXyA6IGRhdGU7XG4gICAgfTtcbiAgICBmb3JtYXQudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9O1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH1cbiAgZnVuY3Rpb24gZDNfdGltZV9wYXJzZShkYXRlLCB0ZW1wbGF0ZSwgc3RyaW5nLCBqKSB7XG4gICAgdmFyIGMsIHAsIHQsIGkgPSAwLCBuID0gdGVtcGxhdGUubGVuZ3RoLCBtID0gc3RyaW5nLmxlbmd0aDtcbiAgICB3aGlsZSAoaSA8IG4pIHtcbiAgICAgIGlmIChqID49IG0pIHJldHVybiAtMTtcbiAgICAgIGMgPSB0ZW1wbGF0ZS5jaGFyQ29kZUF0KGkrKyk7XG4gICAgICBpZiAoYyA9PT0gMzcpIHtcbiAgICAgICAgdCA9IHRlbXBsYXRlLmNoYXJBdChpKyspO1xuICAgICAgICBwID0gZDNfdGltZV9wYXJzZXJzW3QgaW4gZDNfdGltZV9mb3JtYXRQYWRzID8gdGVtcGxhdGUuY2hhckF0KGkrKykgOiB0XTtcbiAgICAgICAgaWYgKCFwIHx8IChqID0gcChkYXRlLCBzdHJpbmcsIGopKSA8IDApIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSBpZiAoYyAhPSBzdHJpbmcuY2hhckNvZGVBdChqKyspKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGo7XG4gIH1cbiAgZnVuY3Rpb24gZDNfdGltZV9mb3JtYXRSZShuYW1lcykge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgbmFtZXMubWFwKGQzLnJlcXVvdGUpLmpvaW4oXCJ8XCIpICsgXCIpXCIsIFwiaVwiKTtcbiAgfVxuICBmdW5jdGlvbiBkM190aW1lX2Zvcm1hdExvb2t1cChuYW1lcykge1xuICAgIHZhciBtYXAgPSBuZXcgZDNfTWFwKCksIGkgPSAtMSwgbiA9IG5hbWVzLmxlbmd0aDtcbiAgICB3aGlsZSAoKytpIDwgbikgbWFwLnNldChuYW1lc1tpXS50b0xvd2VyQ2FzZSgpLCBpKTtcbiAgICByZXR1cm4gbWFwO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3RpbWVfZm9ybWF0UGFkKHZhbHVlLCBmaWxsLCB3aWR0aCkge1xuICAgIHZhciBzaWduID0gdmFsdWUgPCAwID8gXCItXCIgOiBcIlwiLCBzdHJpbmcgPSAoc2lnbiA/IC12YWx1ZSA6IHZhbHVlKSArIFwiXCIsIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG4gICAgcmV0dXJuIHNpZ24gKyAobGVuZ3RoIDwgd2lkdGggPyBuZXcgQXJyYXkod2lkdGggLSBsZW5ndGggKyAxKS5qb2luKGZpbGwpICsgc3RyaW5nIDogc3RyaW5nKTtcbiAgfVxuICB2YXIgZDNfdGltZV9kYXlSZSA9IGQzX3RpbWVfZm9ybWF0UmUoZDNfdGltZV9kYXlzKSwgZDNfdGltZV9kYXlMb29rdXAgPSBkM190aW1lX2Zvcm1hdExvb2t1cChkM190aW1lX2RheXMpLCBkM190aW1lX2RheUFiYnJldlJlID0gZDNfdGltZV9mb3JtYXRSZShkM190aW1lX2RheUFiYnJldmlhdGlvbnMpLCBkM190aW1lX2RheUFiYnJldkxvb2t1cCA9IGQzX3RpbWVfZm9ybWF0TG9va3VwKGQzX3RpbWVfZGF5QWJicmV2aWF0aW9ucyksIGQzX3RpbWVfbW9udGhSZSA9IGQzX3RpbWVfZm9ybWF0UmUoZDNfdGltZV9tb250aHMpLCBkM190aW1lX21vbnRoTG9va3VwID0gZDNfdGltZV9mb3JtYXRMb29rdXAoZDNfdGltZV9tb250aHMpLCBkM190aW1lX21vbnRoQWJicmV2UmUgPSBkM190aW1lX2Zvcm1hdFJlKGQzX3RpbWVfbW9udGhBYmJyZXZpYXRpb25zKSwgZDNfdGltZV9tb250aEFiYnJldkxvb2t1cCA9IGQzX3RpbWVfZm9ybWF0TG9va3VwKGQzX3RpbWVfbW9udGhBYmJyZXZpYXRpb25zKSwgZDNfdGltZV9wZXJjZW50UmUgPSAvXiUvO1xuICB2YXIgZDNfdGltZV9mb3JtYXRQYWRzID0ge1xuICAgIFwiLVwiOiBcIlwiLFxuICAgIF86IFwiIFwiLFxuICAgIFwiMFwiOiBcIjBcIlxuICB9O1xuICB2YXIgZDNfdGltZV9mb3JtYXRzID0ge1xuICAgIGE6IGZ1bmN0aW9uKGQpIHtcbiAgICAgIHJldHVybiBkM190aW1lX2RheUFiYnJldmlhdGlvbnNbZC5nZXREYXkoKV07XG4gICAgfSxcbiAgICBBOiBmdW5jdGlvbihkKSB7XG4gICAgICByZXR1cm4gZDNfdGltZV9kYXlzW2QuZ2V0RGF5KCldO1xuICAgIH0sXG4gICAgYjogZnVuY3Rpb24oZCkge1xuICAgICAgcmV0dXJuIGQzX3RpbWVfbW9udGhBYmJyZXZpYXRpb25zW2QuZ2V0TW9udGgoKV07XG4gICAgfSxcbiAgICBCOiBmdW5jdGlvbihkKSB7XG4gICAgICByZXR1cm4gZDNfdGltZV9tb250aHNbZC5nZXRNb250aCgpXTtcbiAgICB9LFxuICAgIGM6IGQzX3RpbWVfZm9ybWF0KGQzX3RpbWVfZm9ybWF0RGF0ZVRpbWUpLFxuICAgIGQ6IGZ1bmN0aW9uKGQsIHApIHtcbiAgICAgIHJldHVybiBkM190aW1lX2Zvcm1hdFBhZChkLmdldERhdGUoKSwgcCwgMik7XG4gICAgfSxcbiAgICBlOiBmdW5jdGlvbihkLCBwKSB7XG4gICAgICByZXR1cm4gZDNfdGltZV9mb3JtYXRQYWQoZC5nZXREYXRlKCksIHAsIDIpO1xuICAgIH0sXG4gICAgSDogZnVuY3Rpb24oZCwgcCkge1xuICAgICAgcmV0dXJuIGQzX3RpbWVfZm9ybWF0UGFkKGQuZ2V0SG91cnMoKSwgcCwgMik7XG4gICAgfSxcbiAgICBJOiBmdW5jdGlvbihkLCBwKSB7XG4gICAgICByZXR1cm4gZDNfdGltZV9mb3JtYXRQYWQoZC5nZXRIb3VycygpICUgMTIgfHwgMTIsIHAsIDIpO1xuICAgIH0sXG4gICAgajogZnVuY3Rpb24oZCwgcCkge1xuICAgICAgcmV0dXJuIGQzX3RpbWVfZm9ybWF0UGFkKDEgKyBkM190aW1lLmRheU9mWWVhcihkKSwgcCwgMyk7XG4gICAgfSxcbiAgICBMOiBmdW5jdGlvbihkLCBwKSB7XG4gICAgICByZXR1cm4gZDNfdGltZV9mb3JtYXRQYWQoZC5nZXRNaWxsaXNlY29uZHMoKSwgcCwgMyk7XG4gICAgfSxcbiAgICBtOiBmdW5jdGlvbihkLCBwKSB7XG4gICAgICByZXR1cm4gZDNfdGltZV9mb3JtYXRQYWQoZC5nZXRNb250aCgpICsgMSwgcCwgMik7XG4gICAgfSxcbiAgICBNOiBmdW5jdGlvbihkLCBwKSB7XG4gICAgICByZXR1cm4gZDNfdGltZV9mb3JtYXRQYWQoZC5nZXRNaW51dGVzKCksIHAsIDIpO1xuICAgIH0sXG4gICAgcDogZnVuY3Rpb24oZCkge1xuICAgICAgcmV0dXJuIGQuZ2V0SG91cnMoKSA+PSAxMiA/IFwiUE1cIiA6IFwiQU1cIjtcbiAgICB9LFxuICAgIFM6IGZ1bmN0aW9uKGQsIHApIHtcbiAgICAgIHJldHVybiBkM190aW1lX2Zvcm1hdFBhZChkLmdldFNlY29uZHMoKSwgcCwgMik7XG4gICAgfSxcbiAgICBVOiBmdW5jdGlvbihkLCBwKSB7XG4gICAgICByZXR1cm4gZDNfdGltZV9mb3JtYXRQYWQoZDNfdGltZS5zdW5kYXlPZlllYXIoZCksIHAsIDIpO1xuICAgIH0sXG4gICAgdzogZnVuY3Rpb24oZCkge1xuICAgICAgcmV0dXJuIGQuZ2V0RGF5KCk7XG4gICAgfSxcbiAgICBXOiBmdW5jdGlvbihkLCBwKSB7XG4gICAgICByZXR1cm4gZDNfdGltZV9mb3JtYXRQYWQoZDNfdGltZS5tb25kYXlPZlllYXIoZCksIHAsIDIpO1xuICAgIH0sXG4gICAgeDogZDNfdGltZV9mb3JtYXQoZDNfdGltZV9mb3JtYXREYXRlKSxcbiAgICBYOiBkM190aW1lX2Zvcm1hdChkM190aW1lX2Zvcm1hdFRpbWUpLFxuICAgIHk6IGZ1bmN0aW9uKGQsIHApIHtcbiAgICAgIHJldHVybiBkM190aW1lX2Zvcm1hdFBhZChkLmdldEZ1bGxZZWFyKCkgJSAxMDAsIHAsIDIpO1xuICAgIH0sXG4gICAgWTogZnVuY3Rpb24oZCwgcCkge1xuICAgICAgcmV0dXJuIGQzX3RpbWVfZm9ybWF0UGFkKGQuZ2V0RnVsbFllYXIoKSAlIDFlNCwgcCwgNCk7XG4gICAgfSxcbiAgICBaOiBkM190aW1lX3pvbmUsXG4gICAgXCIlXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFwiJVwiO1xuICAgIH1cbiAgfTtcbiAgdmFyIGQzX3RpbWVfcGFyc2VycyA9IHtcbiAgICBhOiBkM190aW1lX3BhcnNlV2Vla2RheUFiYnJldixcbiAgICBBOiBkM190aW1lX3BhcnNlV2Vla2RheSxcbiAgICBiOiBkM190aW1lX3BhcnNlTW9udGhBYmJyZXYsXG4gICAgQjogZDNfdGltZV9wYXJzZU1vbnRoLFxuICAgIGM6IGQzX3RpbWVfcGFyc2VMb2NhbGVGdWxsLFxuICAgIGQ6IGQzX3RpbWVfcGFyc2VEYXksXG4gICAgZTogZDNfdGltZV9wYXJzZURheSxcbiAgICBIOiBkM190aW1lX3BhcnNlSG91cjI0LFxuICAgIEk6IGQzX3RpbWVfcGFyc2VIb3VyMjQsXG4gICAgajogZDNfdGltZV9wYXJzZURheU9mWWVhcixcbiAgICBMOiBkM190aW1lX3BhcnNlTWlsbGlzZWNvbmRzLFxuICAgIG06IGQzX3RpbWVfcGFyc2VNb250aE51bWJlcixcbiAgICBNOiBkM190aW1lX3BhcnNlTWludXRlcyxcbiAgICBwOiBkM190aW1lX3BhcnNlQW1QbSxcbiAgICBTOiBkM190aW1lX3BhcnNlU2Vjb25kcyxcbiAgICBVOiBkM190aW1lX3BhcnNlV2Vla051bWJlclN1bmRheSxcbiAgICB3OiBkM190aW1lX3BhcnNlV2Vla2RheU51bWJlcixcbiAgICBXOiBkM190aW1lX3BhcnNlV2Vla051bWJlck1vbmRheSxcbiAgICB4OiBkM190aW1lX3BhcnNlTG9jYWxlRGF0ZSxcbiAgICBYOiBkM190aW1lX3BhcnNlTG9jYWxlVGltZSxcbiAgICB5OiBkM190aW1lX3BhcnNlWWVhcixcbiAgICBZOiBkM190aW1lX3BhcnNlRnVsbFllYXIsXG4gICAgWjogZDNfdGltZV9wYXJzZVpvbmUsXG4gICAgXCIlXCI6IGQzX3RpbWVfcGFyc2VMaXRlcmFsUGVyY2VudFxuICB9O1xuICBmdW5jdGlvbiBkM190aW1lX3BhcnNlV2Vla2RheUFiYnJldihkYXRlLCBzdHJpbmcsIGkpIHtcbiAgICBkM190aW1lX2RheUFiYnJldlJlLmxhc3RJbmRleCA9IDA7XG4gICAgdmFyIG4gPSBkM190aW1lX2RheUFiYnJldlJlLmV4ZWMoc3RyaW5nLnN1YnN0cmluZyhpKSk7XG4gICAgcmV0dXJuIG4gPyAoZGF0ZS53ID0gZDNfdGltZV9kYXlBYmJyZXZMb29rdXAuZ2V0KG5bMF0udG9Mb3dlckNhc2UoKSksIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbiAgfVxuICBmdW5jdGlvbiBkM190aW1lX3BhcnNlV2Vla2RheShkYXRlLCBzdHJpbmcsIGkpIHtcbiAgICBkM190aW1lX2RheVJlLmxhc3RJbmRleCA9IDA7XG4gICAgdmFyIG4gPSBkM190aW1lX2RheVJlLmV4ZWMoc3RyaW5nLnN1YnN0cmluZyhpKSk7XG4gICAgcmV0dXJuIG4gPyAoZGF0ZS53ID0gZDNfdGltZV9kYXlMb29rdXAuZ2V0KG5bMF0udG9Mb3dlckNhc2UoKSksIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbiAgfVxuICBmdW5jdGlvbiBkM190aW1lX3BhcnNlV2Vla2RheU51bWJlcihkYXRlLCBzdHJpbmcsIGkpIHtcbiAgICBkM190aW1lX251bWJlclJlLmxhc3RJbmRleCA9IDA7XG4gICAgdmFyIG4gPSBkM190aW1lX251bWJlclJlLmV4ZWMoc3RyaW5nLnN1YnN0cmluZyhpLCBpICsgMSkpO1xuICAgIHJldHVybiBuID8gKGRhdGUudyA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gIH1cbiAgZnVuY3Rpb24gZDNfdGltZV9wYXJzZVdlZWtOdW1iZXJTdW5kYXkoZGF0ZSwgc3RyaW5nLCBpKSB7XG4gICAgZDNfdGltZV9udW1iZXJSZS5sYXN0SW5kZXggPSAwO1xuICAgIHZhciBuID0gZDNfdGltZV9udW1iZXJSZS5leGVjKHN0cmluZy5zdWJzdHJpbmcoaSkpO1xuICAgIHJldHVybiBuID8gKGRhdGUuVSA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gIH1cbiAgZnVuY3Rpb24gZDNfdGltZV9wYXJzZVdlZWtOdW1iZXJNb25kYXkoZGF0ZSwgc3RyaW5nLCBpKSB7XG4gICAgZDNfdGltZV9udW1iZXJSZS5sYXN0SW5kZXggPSAwO1xuICAgIHZhciBuID0gZDNfdGltZV9udW1iZXJSZS5leGVjKHN0cmluZy5zdWJzdHJpbmcoaSkpO1xuICAgIHJldHVybiBuID8gKGRhdGUuVyA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gIH1cbiAgZnVuY3Rpb24gZDNfdGltZV9wYXJzZU1vbnRoQWJicmV2KGRhdGUsIHN0cmluZywgaSkge1xuICAgIGQzX3RpbWVfbW9udGhBYmJyZXZSZS5sYXN0SW5kZXggPSAwO1xuICAgIHZhciBuID0gZDNfdGltZV9tb250aEFiYnJldlJlLmV4ZWMoc3RyaW5nLnN1YnN0cmluZyhpKSk7XG4gICAgcmV0dXJuIG4gPyAoZGF0ZS5tID0gZDNfdGltZV9tb250aEFiYnJldkxvb2t1cC5nZXQoblswXS50b0xvd2VyQ2FzZSgpKSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3RpbWVfcGFyc2VNb250aChkYXRlLCBzdHJpbmcsIGkpIHtcbiAgICBkM190aW1lX21vbnRoUmUubGFzdEluZGV4ID0gMDtcbiAgICB2YXIgbiA9IGQzX3RpbWVfbW9udGhSZS5leGVjKHN0cmluZy5zdWJzdHJpbmcoaSkpO1xuICAgIHJldHVybiBuID8gKGRhdGUubSA9IGQzX3RpbWVfbW9udGhMb29rdXAuZ2V0KG5bMF0udG9Mb3dlckNhc2UoKSksIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbiAgfVxuICBmdW5jdGlvbiBkM190aW1lX3BhcnNlTG9jYWxlRnVsbChkYXRlLCBzdHJpbmcsIGkpIHtcbiAgICByZXR1cm4gZDNfdGltZV9wYXJzZShkYXRlLCBkM190aW1lX2Zvcm1hdHMuYy50b1N0cmluZygpLCBzdHJpbmcsIGkpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3RpbWVfcGFyc2VMb2NhbGVEYXRlKGRhdGUsIHN0cmluZywgaSkge1xuICAgIHJldHVybiBkM190aW1lX3BhcnNlKGRhdGUsIGQzX3RpbWVfZm9ybWF0cy54LnRvU3RyaW5nKCksIHN0cmluZywgaSk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfdGltZV9wYXJzZUxvY2FsZVRpbWUoZGF0ZSwgc3RyaW5nLCBpKSB7XG4gICAgcmV0dXJuIGQzX3RpbWVfcGFyc2UoZGF0ZSwgZDNfdGltZV9mb3JtYXRzLlgudG9TdHJpbmcoKSwgc3RyaW5nLCBpKTtcbiAgfVxuICBmdW5jdGlvbiBkM190aW1lX3BhcnNlRnVsbFllYXIoZGF0ZSwgc3RyaW5nLCBpKSB7XG4gICAgZDNfdGltZV9udW1iZXJSZS5sYXN0SW5kZXggPSAwO1xuICAgIHZhciBuID0gZDNfdGltZV9udW1iZXJSZS5leGVjKHN0cmluZy5zdWJzdHJpbmcoaSwgaSArIDQpKTtcbiAgICByZXR1cm4gbiA/IChkYXRlLnkgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3RpbWVfcGFyc2VZZWFyKGRhdGUsIHN0cmluZywgaSkge1xuICAgIGQzX3RpbWVfbnVtYmVyUmUubGFzdEluZGV4ID0gMDtcbiAgICB2YXIgbiA9IGQzX3RpbWVfbnVtYmVyUmUuZXhlYyhzdHJpbmcuc3Vic3RyaW5nKGksIGkgKyAyKSk7XG4gICAgcmV0dXJuIG4gPyAoZGF0ZS55ID0gZDNfdGltZV9leHBhbmRZZWFyKCtuWzBdKSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3RpbWVfcGFyc2Vab25lKGRhdGUsIHN0cmluZywgaSkge1xuICAgIHJldHVybiAvXlsrLV1cXGR7NH0kLy50ZXN0KHN0cmluZyA9IHN0cmluZy5zdWJzdHJpbmcoaSwgaSArIDUpKSA/IChkYXRlLlogPSArc3RyaW5nLCBcbiAgICBpICsgNSkgOiAtMTtcbiAgfVxuICBmdW5jdGlvbiBkM190aW1lX2V4cGFuZFllYXIoZCkge1xuICAgIHJldHVybiBkICsgKGQgPiA2OCA/IDE5MDAgOiAyZTMpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3RpbWVfcGFyc2VNb250aE51bWJlcihkYXRlLCBzdHJpbmcsIGkpIHtcbiAgICBkM190aW1lX251bWJlclJlLmxhc3RJbmRleCA9IDA7XG4gICAgdmFyIG4gPSBkM190aW1lX251bWJlclJlLmV4ZWMoc3RyaW5nLnN1YnN0cmluZyhpLCBpICsgMikpO1xuICAgIHJldHVybiBuID8gKGRhdGUubSA9IG5bMF0gLSAxLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gIH1cbiAgZnVuY3Rpb24gZDNfdGltZV9wYXJzZURheShkYXRlLCBzdHJpbmcsIGkpIHtcbiAgICBkM190aW1lX251bWJlclJlLmxhc3RJbmRleCA9IDA7XG4gICAgdmFyIG4gPSBkM190aW1lX251bWJlclJlLmV4ZWMoc3RyaW5nLnN1YnN0cmluZyhpLCBpICsgMikpO1xuICAgIHJldHVybiBuID8gKGRhdGUuZCA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gIH1cbiAgZnVuY3Rpb24gZDNfdGltZV9wYXJzZURheU9mWWVhcihkYXRlLCBzdHJpbmcsIGkpIHtcbiAgICBkM190aW1lX251bWJlclJlLmxhc3RJbmRleCA9IDA7XG4gICAgdmFyIG4gPSBkM190aW1lX251bWJlclJlLmV4ZWMoc3RyaW5nLnN1YnN0cmluZyhpLCBpICsgMykpO1xuICAgIHJldHVybiBuID8gKGRhdGUuaiA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gIH1cbiAgZnVuY3Rpb24gZDNfdGltZV9wYXJzZUhvdXIyNChkYXRlLCBzdHJpbmcsIGkpIHtcbiAgICBkM190aW1lX251bWJlclJlLmxhc3RJbmRleCA9IDA7XG4gICAgdmFyIG4gPSBkM190aW1lX251bWJlclJlLmV4ZWMoc3RyaW5nLnN1YnN0cmluZyhpLCBpICsgMikpO1xuICAgIHJldHVybiBuID8gKGRhdGUuSCA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gIH1cbiAgZnVuY3Rpb24gZDNfdGltZV9wYXJzZU1pbnV0ZXMoZGF0ZSwgc3RyaW5nLCBpKSB7XG4gICAgZDNfdGltZV9udW1iZXJSZS5sYXN0SW5kZXggPSAwO1xuICAgIHZhciBuID0gZDNfdGltZV9udW1iZXJSZS5leGVjKHN0cmluZy5zdWJzdHJpbmcoaSwgaSArIDIpKTtcbiAgICByZXR1cm4gbiA/IChkYXRlLk0gPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3RpbWVfcGFyc2VTZWNvbmRzKGRhdGUsIHN0cmluZywgaSkge1xuICAgIGQzX3RpbWVfbnVtYmVyUmUubGFzdEluZGV4ID0gMDtcbiAgICB2YXIgbiA9IGQzX3RpbWVfbnVtYmVyUmUuZXhlYyhzdHJpbmcuc3Vic3RyaW5nKGksIGkgKyAyKSk7XG4gICAgcmV0dXJuIG4gPyAoZGF0ZS5TID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbiAgfVxuICBmdW5jdGlvbiBkM190aW1lX3BhcnNlTWlsbGlzZWNvbmRzKGRhdGUsIHN0cmluZywgaSkge1xuICAgIGQzX3RpbWVfbnVtYmVyUmUubGFzdEluZGV4ID0gMDtcbiAgICB2YXIgbiA9IGQzX3RpbWVfbnVtYmVyUmUuZXhlYyhzdHJpbmcuc3Vic3RyaW5nKGksIGkgKyAzKSk7XG4gICAgcmV0dXJuIG4gPyAoZGF0ZS5MID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbiAgfVxuICB2YXIgZDNfdGltZV9udW1iZXJSZSA9IC9eXFxzKlxcZCsvO1xuICBmdW5jdGlvbiBkM190aW1lX3BhcnNlQW1QbShkYXRlLCBzdHJpbmcsIGkpIHtcbiAgICB2YXIgbiA9IGQzX3RpbWVfYW1QbUxvb2t1cC5nZXQoc3RyaW5nLnN1YnN0cmluZyhpLCBpICs9IDIpLnRvTG93ZXJDYXNlKCkpO1xuICAgIHJldHVybiBuID09IG51bGwgPyAtMSA6IChkYXRlLnAgPSBuLCBpKTtcbiAgfVxuICB2YXIgZDNfdGltZV9hbVBtTG9va3VwID0gZDMubWFwKHtcbiAgICBhbTogMCxcbiAgICBwbTogMVxuICB9KTtcbiAgZnVuY3Rpb24gZDNfdGltZV96b25lKGQpIHtcbiAgICB2YXIgeiA9IGQuZ2V0VGltZXpvbmVPZmZzZXQoKSwgenMgPSB6ID4gMCA/IFwiLVwiIDogXCIrXCIsIHpoID0gfn4oTWF0aC5hYnMoeikgLyA2MCksIHptID0gTWF0aC5hYnMoeikgJSA2MDtcbiAgICByZXR1cm4genMgKyBkM190aW1lX2Zvcm1hdFBhZCh6aCwgXCIwXCIsIDIpICsgZDNfdGltZV9mb3JtYXRQYWQoem0sIFwiMFwiLCAyKTtcbiAgfVxuICBmdW5jdGlvbiBkM190aW1lX3BhcnNlTGl0ZXJhbFBlcmNlbnQoZGF0ZSwgc3RyaW5nLCBpKSB7XG4gICAgZDNfdGltZV9wZXJjZW50UmUubGFzdEluZGV4ID0gMDtcbiAgICB2YXIgbiA9IGQzX3RpbWVfcGVyY2VudFJlLmV4ZWMoc3RyaW5nLnN1YnN0cmluZyhpLCBpICsgMSkpO1xuICAgIHJldHVybiBuID8gaSArIG5bMF0ubGVuZ3RoIDogLTE7XG4gIH1cbiAgZDNfdGltZV9mb3JtYXQudXRjID0gZDNfdGltZV9mb3JtYXRVdGM7XG4gIGZ1bmN0aW9uIGQzX3RpbWVfZm9ybWF0VXRjKHRlbXBsYXRlKSB7XG4gICAgdmFyIGxvY2FsID0gZDNfdGltZV9mb3JtYXQodGVtcGxhdGUpO1xuICAgIGZ1bmN0aW9uIGZvcm1hdChkYXRlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkM19kYXRlID0gZDNfZGF0ZV91dGM7XG4gICAgICAgIHZhciB1dGMgPSBuZXcgZDNfZGF0ZSgpO1xuICAgICAgICB1dGMuXyA9IGRhdGU7XG4gICAgICAgIHJldHVybiBsb2NhbCh1dGMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgZDNfZGF0ZSA9IERhdGU7XG4gICAgICB9XG4gICAgfVxuICAgIGZvcm1hdC5wYXJzZSA9IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZDNfZGF0ZSA9IGQzX2RhdGVfdXRjO1xuICAgICAgICB2YXIgZGF0ZSA9IGxvY2FsLnBhcnNlKHN0cmluZyk7XG4gICAgICAgIHJldHVybiBkYXRlICYmIGRhdGUuXztcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGQzX2RhdGUgPSBEYXRlO1xuICAgICAgfVxuICAgIH07XG4gICAgZm9ybWF0LnRvU3RyaW5nID0gbG9jYWwudG9TdHJpbmc7XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfVxuICB2YXIgZDNfdGltZV9mb3JtYXRJc28gPSBkM190aW1lX2Zvcm1hdFV0YyhcIiVZLSVtLSVkVCVIOiVNOiVTLiVMWlwiKTtcbiAgZDNfdGltZV9mb3JtYXQuaXNvID0gRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcgJiYgK25ldyBEYXRlKFwiMjAwMC0wMS0wMVQwMDowMDowMC4wMDBaXCIpID8gZDNfdGltZV9mb3JtYXRJc29OYXRpdmUgOiBkM190aW1lX2Zvcm1hdElzbztcbiAgZnVuY3Rpb24gZDNfdGltZV9mb3JtYXRJc29OYXRpdmUoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKCk7XG4gIH1cbiAgZDNfdGltZV9mb3JtYXRJc29OYXRpdmUucGFyc2UgPSBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHN0cmluZyk7XG4gICAgcmV0dXJuIGlzTmFOKGRhdGUpID8gbnVsbCA6IGRhdGU7XG4gIH07XG4gIGQzX3RpbWVfZm9ybWF0SXNvTmF0aXZlLnRvU3RyaW5nID0gZDNfdGltZV9mb3JtYXRJc28udG9TdHJpbmc7XG4gIGQzX3RpbWUuc2Vjb25kID0gZDNfdGltZV9pbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBkM19kYXRlKE1hdGguZmxvb3IoZGF0ZSAvIDFlMykgKiAxZTMpO1xuICB9LCBmdW5jdGlvbihkYXRlLCBvZmZzZXQpIHtcbiAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyBNYXRoLmZsb29yKG9mZnNldCkgKiAxZTMpO1xuICB9LCBmdW5jdGlvbihkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0U2Vjb25kcygpO1xuICB9KTtcbiAgZDNfdGltZS5zZWNvbmRzID0gZDNfdGltZS5zZWNvbmQucmFuZ2U7XG4gIGQzX3RpbWUuc2Vjb25kcy51dGMgPSBkM190aW1lLnNlY29uZC51dGMucmFuZ2U7XG4gIGQzX3RpbWUubWludXRlID0gZDNfdGltZV9pbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBkM19kYXRlKE1hdGguZmxvb3IoZGF0ZSAvIDZlNCkgKiA2ZTQpO1xuICB9LCBmdW5jdGlvbihkYXRlLCBvZmZzZXQpIHtcbiAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyBNYXRoLmZsb29yKG9mZnNldCkgKiA2ZTQpO1xuICB9LCBmdW5jdGlvbihkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0TWludXRlcygpO1xuICB9KTtcbiAgZDNfdGltZS5taW51dGVzID0gZDNfdGltZS5taW51dGUucmFuZ2U7XG4gIGQzX3RpbWUubWludXRlcy51dGMgPSBkM190aW1lLm1pbnV0ZS51dGMucmFuZ2U7XG4gIGQzX3RpbWUuaG91ciA9IGQzX3RpbWVfaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgIHZhciB0aW1lem9uZSA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDYwO1xuICAgIHJldHVybiBuZXcgZDNfZGF0ZSgoTWF0aC5mbG9vcihkYXRlIC8gMzZlNSAtIHRpbWV6b25lKSArIHRpbWV6b25lKSAqIDM2ZTUpO1xuICB9LCBmdW5jdGlvbihkYXRlLCBvZmZzZXQpIHtcbiAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyBNYXRoLmZsb29yKG9mZnNldCkgKiAzNmU1KTtcbiAgfSwgZnVuY3Rpb24oZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldEhvdXJzKCk7XG4gIH0pO1xuICBkM190aW1lLmhvdXJzID0gZDNfdGltZS5ob3VyLnJhbmdlO1xuICBkM190aW1lLmhvdXJzLnV0YyA9IGQzX3RpbWUuaG91ci51dGMucmFuZ2U7XG4gIGQzX3RpbWUubW9udGggPSBkM190aW1lX2ludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgICBkYXRlID0gZDNfdGltZS5kYXkoZGF0ZSk7XG4gICAgZGF0ZS5zZXREYXRlKDEpO1xuICAgIHJldHVybiBkYXRlO1xuICB9LCBmdW5jdGlvbihkYXRlLCBvZmZzZXQpIHtcbiAgICBkYXRlLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSArIG9mZnNldCk7XG4gIH0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRNb250aCgpO1xuICB9KTtcbiAgZDNfdGltZS5tb250aHMgPSBkM190aW1lLm1vbnRoLnJhbmdlO1xuICBkM190aW1lLm1vbnRocy51dGMgPSBkM190aW1lLm1vbnRoLnV0Yy5yYW5nZTtcbiAgZnVuY3Rpb24gZDNfdGltZV9zY2FsZShsaW5lYXIsIG1ldGhvZHMsIGZvcm1hdCkge1xuICAgIGZ1bmN0aW9uIHNjYWxlKHgpIHtcbiAgICAgIHJldHVybiBsaW5lYXIoeCk7XG4gICAgfVxuICAgIHNjYWxlLmludmVydCA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiBkM190aW1lX3NjYWxlRGF0ZShsaW5lYXIuaW52ZXJ0KHgpKTtcbiAgICB9O1xuICAgIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGxpbmVhci5kb21haW4oKS5tYXAoZDNfdGltZV9zY2FsZURhdGUpO1xuICAgICAgbGluZWFyLmRvbWFpbih4KTtcbiAgICAgIHJldHVybiBzY2FsZTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIHRpY2tNZXRob2QoZXh0ZW50LCBjb3VudCkge1xuICAgICAgdmFyIHNwYW4gPSBleHRlbnRbMV0gLSBleHRlbnRbMF0sIHRhcmdldCA9IHNwYW4gLyBjb3VudCwgaSA9IGQzLmJpc2VjdChkM190aW1lX3NjYWxlU3RlcHMsIHRhcmdldCk7XG4gICAgICByZXR1cm4gaSA9PSBkM190aW1lX3NjYWxlU3RlcHMubGVuZ3RoID8gWyBtZXRob2RzLnllYXIsIGQzX3NjYWxlX2xpbmVhclRpY2tSYW5nZShleHRlbnQubWFwKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQgLyAzMTUzNmU2O1xuICAgICAgfSksIGNvdW50KVsyXSBdIDogIWkgPyBbIGQzX3RpbWVfc2NhbGVNaWxsaXNlY29uZHMsIGQzX3NjYWxlX2xpbmVhclRpY2tSYW5nZShleHRlbnQsIGNvdW50KVsyXSBdIDogbWV0aG9kc1t0YXJnZXQgLyBkM190aW1lX3NjYWxlU3RlcHNbaSAtIDFdIDwgZDNfdGltZV9zY2FsZVN0ZXBzW2ldIC8gdGFyZ2V0ID8gaSAtIDEgOiBpXTtcbiAgICB9XG4gICAgc2NhbGUubmljZSA9IGZ1bmN0aW9uKGludGVydmFsLCBza2lwKSB7XG4gICAgICB2YXIgZG9tYWluID0gc2NhbGUuZG9tYWluKCksIGV4dGVudCA9IGQzX3NjYWxlRXh0ZW50KGRvbWFpbiksIG1ldGhvZCA9IGludGVydmFsID09IG51bGwgPyB0aWNrTWV0aG9kKGV4dGVudCwgMTApIDogdHlwZW9mIGludGVydmFsID09PSBcIm51bWJlclwiICYmIHRpY2tNZXRob2QoZXh0ZW50LCBpbnRlcnZhbCk7XG4gICAgICBpZiAobWV0aG9kKSBpbnRlcnZhbCA9IG1ldGhvZFswXSwgc2tpcCA9IG1ldGhvZFsxXTtcbiAgICAgIGZ1bmN0aW9uIHNraXBwZWQoZGF0ZSkge1xuICAgICAgICByZXR1cm4gIWlzTmFOKGRhdGUpICYmICFpbnRlcnZhbC5yYW5nZShkYXRlLCBkM190aW1lX3NjYWxlRGF0ZSgrZGF0ZSArIDEpLCBza2lwKS5sZW5ndGg7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2NhbGUuZG9tYWluKGQzX3NjYWxlX25pY2UoZG9tYWluLCBza2lwID4gMSA/IHtcbiAgICAgICAgZmxvb3I6IGZ1bmN0aW9uKGRhdGUpIHtcbiAgICAgICAgICB3aGlsZSAoc2tpcHBlZChkYXRlID0gaW50ZXJ2YWwuZmxvb3IoZGF0ZSkpKSBkYXRlID0gZDNfdGltZV9zY2FsZURhdGUoZGF0ZSAtIDEpO1xuICAgICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgICB9LFxuICAgICAgICBjZWlsOiBmdW5jdGlvbihkYXRlKSB7XG4gICAgICAgICAgd2hpbGUgKHNraXBwZWQoZGF0ZSA9IGludGVydmFsLmNlaWwoZGF0ZSkpKSBkYXRlID0gZDNfdGltZV9zY2FsZURhdGUoK2RhdGUgKyAxKTtcbiAgICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICAgICAgfVxuICAgICAgfSA6IGludGVydmFsKSk7XG4gICAgfTtcbiAgICBzY2FsZS50aWNrcyA9IGZ1bmN0aW9uKGludGVydmFsLCBza2lwKSB7XG4gICAgICB2YXIgZXh0ZW50ID0gZDNfc2NhbGVFeHRlbnQoc2NhbGUuZG9tYWluKCkpLCBtZXRob2QgPSBpbnRlcnZhbCA9PSBudWxsID8gdGlja01ldGhvZChleHRlbnQsIDEwKSA6IHR5cGVvZiBpbnRlcnZhbCA9PT0gXCJudW1iZXJcIiA/IHRpY2tNZXRob2QoZXh0ZW50LCBpbnRlcnZhbCkgOiAhaW50ZXJ2YWwucmFuZ2UgJiYgWyB7XG4gICAgICAgIHJhbmdlOiBpbnRlcnZhbFxuICAgICAgfSwgc2tpcCBdO1xuICAgICAgaWYgKG1ldGhvZCkgaW50ZXJ2YWwgPSBtZXRob2RbMF0sIHNraXAgPSBtZXRob2RbMV07XG4gICAgICByZXR1cm4gaW50ZXJ2YWwucmFuZ2UoZXh0ZW50WzBdLCBkM190aW1lX3NjYWxlRGF0ZSgrZXh0ZW50WzFdICsgMSksIHNraXApO1xuICAgIH07XG4gICAgc2NhbGUudGlja0Zvcm1hdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICB9O1xuICAgIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBkM190aW1lX3NjYWxlKGxpbmVhci5jb3B5KCksIG1ldGhvZHMsIGZvcm1hdCk7XG4gICAgfTtcbiAgICByZXR1cm4gZDNfc2NhbGVfbGluZWFyUmViaW5kKHNjYWxlLCBsaW5lYXIpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3RpbWVfc2NhbGVEYXRlKHQpIHtcbiAgICByZXR1cm4gbmV3IERhdGUodCk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfdGltZV9zY2FsZUZvcm1hdChmb3JtYXRzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGRhdGUpIHtcbiAgICAgIHZhciBpID0gZm9ybWF0cy5sZW5ndGggLSAxLCBmID0gZm9ybWF0c1tpXTtcbiAgICAgIHdoaWxlICghZlsxXShkYXRlKSkgZiA9IGZvcm1hdHNbLS1pXTtcbiAgICAgIHJldHVybiBmWzBdKGRhdGUpO1xuICAgIH07XG4gIH1cbiAgdmFyIGQzX3RpbWVfc2NhbGVTdGVwcyA9IFsgMWUzLCA1ZTMsIDE1ZTMsIDNlNCwgNmU0LCAzZTUsIDllNSwgMThlNSwgMzZlNSwgMTA4ZTUsIDIxNmU1LCA0MzJlNSwgODY0ZTUsIDE3MjhlNSwgNjA0OGU1LCAyNTkyZTYsIDc3NzZlNiwgMzE1MzZlNiBdO1xuICB2YXIgZDNfdGltZV9zY2FsZUxvY2FsTWV0aG9kcyA9IFsgWyBkM190aW1lLnNlY29uZCwgMSBdLCBbIGQzX3RpbWUuc2Vjb25kLCA1IF0sIFsgZDNfdGltZS5zZWNvbmQsIDE1IF0sIFsgZDNfdGltZS5zZWNvbmQsIDMwIF0sIFsgZDNfdGltZS5taW51dGUsIDEgXSwgWyBkM190aW1lLm1pbnV0ZSwgNSBdLCBbIGQzX3RpbWUubWludXRlLCAxNSBdLCBbIGQzX3RpbWUubWludXRlLCAzMCBdLCBbIGQzX3RpbWUuaG91ciwgMSBdLCBbIGQzX3RpbWUuaG91ciwgMyBdLCBbIGQzX3RpbWUuaG91ciwgNiBdLCBbIGQzX3RpbWUuaG91ciwgMTIgXSwgWyBkM190aW1lLmRheSwgMSBdLCBbIGQzX3RpbWUuZGF5LCAyIF0sIFsgZDNfdGltZS53ZWVrLCAxIF0sIFsgZDNfdGltZS5tb250aCwgMSBdLCBbIGQzX3RpbWUubW9udGgsIDMgXSwgWyBkM190aW1lLnllYXIsIDEgXSBdO1xuICB2YXIgZDNfdGltZV9zY2FsZUxvY2FsRm9ybWF0cyA9IFsgWyBkM190aW1lX2Zvcm1hdChcIiVZXCIpLCBkM190cnVlIF0sIFsgZDNfdGltZV9mb3JtYXQoXCIlQlwiKSwgZnVuY3Rpb24oZCkge1xuICAgIHJldHVybiBkLmdldE1vbnRoKCk7XG4gIH0gXSwgWyBkM190aW1lX2Zvcm1hdChcIiViICVkXCIpLCBmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuIGQuZ2V0RGF0ZSgpICE9IDE7XG4gIH0gXSwgWyBkM190aW1lX2Zvcm1hdChcIiVhICVkXCIpLCBmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuIGQuZ2V0RGF5KCkgJiYgZC5nZXREYXRlKCkgIT0gMTtcbiAgfSBdLCBbIGQzX3RpbWVfZm9ybWF0KFwiJUkgJXBcIiksIGZ1bmN0aW9uKGQpIHtcbiAgICByZXR1cm4gZC5nZXRIb3VycygpO1xuICB9IF0sIFsgZDNfdGltZV9mb3JtYXQoXCIlSTolTVwiKSwgZnVuY3Rpb24oZCkge1xuICAgIHJldHVybiBkLmdldE1pbnV0ZXMoKTtcbiAgfSBdLCBbIGQzX3RpbWVfZm9ybWF0KFwiOiVTXCIpLCBmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuIGQuZ2V0U2Vjb25kcygpO1xuICB9IF0sIFsgZDNfdGltZV9mb3JtYXQoXCIuJUxcIiksIGZ1bmN0aW9uKGQpIHtcbiAgICByZXR1cm4gZC5nZXRNaWxsaXNlY29uZHMoKTtcbiAgfSBdIF07XG4gIHZhciBkM190aW1lX3NjYWxlTG9jYWxGb3JtYXQgPSBkM190aW1lX3NjYWxlRm9ybWF0KGQzX3RpbWVfc2NhbGVMb2NhbEZvcm1hdHMpO1xuICBkM190aW1lX3NjYWxlTG9jYWxNZXRob2RzLnllYXIgPSBkM190aW1lLnllYXI7XG4gIGQzX3RpbWUuc2NhbGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZDNfdGltZV9zY2FsZShkMy5zY2FsZS5saW5lYXIoKSwgZDNfdGltZV9zY2FsZUxvY2FsTWV0aG9kcywgZDNfdGltZV9zY2FsZUxvY2FsRm9ybWF0KTtcbiAgfTtcbiAgdmFyIGQzX3RpbWVfc2NhbGVNaWxsaXNlY29uZHMgPSB7XG4gICAgcmFuZ2U6IGZ1bmN0aW9uKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gICAgICByZXR1cm4gZDMucmFuZ2UoK3N0YXJ0LCArc3RvcCwgc3RlcCkubWFwKGQzX3RpbWVfc2NhbGVEYXRlKTtcbiAgICB9XG4gIH07XG4gIHZhciBkM190aW1lX3NjYWxlVVRDTWV0aG9kcyA9IGQzX3RpbWVfc2NhbGVMb2NhbE1ldGhvZHMubWFwKGZ1bmN0aW9uKG0pIHtcbiAgICByZXR1cm4gWyBtWzBdLnV0YywgbVsxXSBdO1xuICB9KTtcbiAgdmFyIGQzX3RpbWVfc2NhbGVVVENGb3JtYXRzID0gWyBbIGQzX3RpbWVfZm9ybWF0VXRjKFwiJVlcIiksIGQzX3RydWUgXSwgWyBkM190aW1lX2Zvcm1hdFV0YyhcIiVCXCIpLCBmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuIGQuZ2V0VVRDTW9udGgoKTtcbiAgfSBdLCBbIGQzX3RpbWVfZm9ybWF0VXRjKFwiJWIgJWRcIiksIGZ1bmN0aW9uKGQpIHtcbiAgICByZXR1cm4gZC5nZXRVVENEYXRlKCkgIT0gMTtcbiAgfSBdLCBbIGQzX3RpbWVfZm9ybWF0VXRjKFwiJWEgJWRcIiksIGZ1bmN0aW9uKGQpIHtcbiAgICByZXR1cm4gZC5nZXRVVENEYXkoKSAmJiBkLmdldFVUQ0RhdGUoKSAhPSAxO1xuICB9IF0sIFsgZDNfdGltZV9mb3JtYXRVdGMoXCIlSSAlcFwiKSwgZnVuY3Rpb24oZCkge1xuICAgIHJldHVybiBkLmdldFVUQ0hvdXJzKCk7XG4gIH0gXSwgWyBkM190aW1lX2Zvcm1hdFV0YyhcIiVJOiVNXCIpLCBmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuIGQuZ2V0VVRDTWludXRlcygpO1xuICB9IF0sIFsgZDNfdGltZV9mb3JtYXRVdGMoXCI6JVNcIiksIGZ1bmN0aW9uKGQpIHtcbiAgICByZXR1cm4gZC5nZXRVVENTZWNvbmRzKCk7XG4gIH0gXSwgWyBkM190aW1lX2Zvcm1hdFV0YyhcIi4lTFwiKSwgZnVuY3Rpb24oZCkge1xuICAgIHJldHVybiBkLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICB9IF0gXTtcbiAgdmFyIGQzX3RpbWVfc2NhbGVVVENGb3JtYXQgPSBkM190aW1lX3NjYWxlRm9ybWF0KGQzX3RpbWVfc2NhbGVVVENGb3JtYXRzKTtcbiAgZDNfdGltZV9zY2FsZVVUQ01ldGhvZHMueWVhciA9IGQzX3RpbWUueWVhci51dGM7XG4gIGQzX3RpbWUuc2NhbGUudXRjID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzX3RpbWVfc2NhbGUoZDMuc2NhbGUubGluZWFyKCksIGQzX3RpbWVfc2NhbGVVVENNZXRob2RzLCBkM190aW1lX3NjYWxlVVRDRm9ybWF0KTtcbiAgfTtcbiAgZDMudGV4dCA9IGQzX3hoclR5cGUoZnVuY3Rpb24ocmVxdWVzdCkge1xuICAgIHJldHVybiByZXF1ZXN0LnJlc3BvbnNlVGV4dDtcbiAgfSk7XG4gIGQzLmpzb24gPSBmdW5jdGlvbih1cmwsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGQzX3hocih1cmwsIFwiYXBwbGljYXRpb24vanNvblwiLCBkM19qc29uLCBjYWxsYmFjayk7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX2pzb24ocmVxdWVzdCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiAgfVxuICBkMy5odG1sID0gZnVuY3Rpb24odXJsLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBkM194aHIodXJsLCBcInRleHQvaHRtbFwiLCBkM19odG1sLCBjYWxsYmFjayk7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX2h0bWwocmVxdWVzdCkge1xuICAgIHZhciByYW5nZSA9IGQzX2RvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZShkM19kb2N1bWVudC5ib2R5KTtcbiAgICByZXR1cm4gcmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiAgfVxuICBkMy54bWwgPSBkM194aHJUeXBlKGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiAgICByZXR1cm4gcmVxdWVzdC5yZXNwb25zZVhNTDtcbiAgfSk7XG4gIHJldHVybiBkMztcbn0oKTsiLCJyZXF1aXJlKFwiLi9kM1wiKTtcbm1vZHVsZS5leHBvcnRzID0gZDM7XG4oZnVuY3Rpb24gKCkgeyBkZWxldGUgdGhpcy5kMzsgfSkoKTsgLy8gdW5zZXQgZ2xvYmFsXG4iLCI7KGZ1bmN0aW9uKGQzKSB7XG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0dmFyIGQzID0gcmVxdWlyZShcImQzXCIpO1xuXHR9IGVsc2Uge1xuXHRcdGQzID0gd2luZG93LmQzO1xuXHR9XG5cblx0Y29uc29sZS5sb2coZDMpO1xuXHR2YXIgY2hhcnQgPSBmdW5jdGlvbihjb250YWluZXIsIG9wdHMpIHtcblx0XHR2YXIgYXhlcyA9IFtdO1xuXG5cdFx0Ly8gU0VUVVBcblx0XHRvcHRzID0gb3B0cyB8fCB7fTtcblx0XHRjb250YWluZXIgPSBjb250YWluZXIgfHwgXCJib2R5XCI7XG5cdFx0Y29udGFpbmVyID0gdHlwZW9mIGNvbnRhaW5lciA9PT0gXCJzdHJpbmdcIiA/IGQzLnNlbGVjdChjb250YWluZXIpIDogY29udGFpbmVyO1xuXG5cdFx0dmFyIG1hcmdpbiA9IG9wdHMubWFyZ2luIHx8IHt0b3A6IDIwLCByaWdodDogNTAsIGJvdHRvbTogMzAsIGxlZnQ6IDMwfTtcblxuXHRcdHZhciB3aWR0aCA9IHBhcnNlSW50KGNvbnRhaW5lci5zdHlsZSgnd2lkdGgnKSwgMTApIC0gbWFyZ2luLnJpZ2h0IC0gbWFyZ2luLmxlZnQsXG5cdFx0XHRoZWlnaHQgPSBwYXJzZUludChjb250YWluZXIuc3R5bGUoJ2hlaWdodCcpLCAxMCkgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbSxcblx0XHRcdG9yaWdpbmFsX3dpZHRoID0gd2lkdGg7IC8vIGZvciBzY2FsaW5nICsgcmVzaXppbmdcblxuXHRcdGlmIChjb250YWluZXIubmFtZXNwYWNlVVJJICE9PSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiTm90IGFuIFNWRyBlbGVtZW50LiBXZSdsbCBtYWtlIG9uZSBmb3IgeW91LlwiKTtcblx0XHRcdHZhciBjb250YWluZXIgPSBjb250YWluZXIuYXBwZW5kKFwic3ZnXCIpXG5cdFx0XHQgICAgLmF0dHIoXCJ3aWR0aFwiLCBwYXJzZUludChjb250YWluZXIuc3R5bGUoJ3dpZHRoJyksIDEwKSlcblx0XHRcdCAgICAuYXR0cihcImhlaWdodFwiLCBwYXJzZUludChjb250YWluZXIuc3R5bGUoJ2hlaWdodCcpLCAxMCkpO1xuICAgIFx0fVxuXG5cdFx0aWYgKG9wdHMudGl0bGUpIHtcblx0XHRcdGNvbnRhaW5lci5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHQgICAgLmF0dHIoXCJ4XCIsIHdpZHRoIC8gMilcblx0XHRcdCAgICAuYXR0cihcInlcIiwgMjUpXG5cdFx0XHQgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcblx0XHRcdCAgICAuY2xhc3NlZChcImNoYXJ0X3RpdGxlXCIsIHRydWUpXG5cdFx0XHQgICAgLnRleHQob3B0cy50aXRsZSk7XG5cdFx0fVxuXG5cdFx0Ly8gbGF5ZXIgZm9yIGF4ZXMsIGFscmVhZHkgb2Zmc2V0IGJ5IG1hcmdpbnMgc28gdGhhdCAwLDAgb24geC15IGF4aXMgaXMgdGhlIGJvdHRvbSBsZWZ0IGNvcm5lclxuXHRcdHZhciBsYXllciA9IGNvbnRhaW5lci5hcHBlbmQoXCJnXCIpXG5cdFx0XHQuY2xhc3NlZChcImNoYXJ0XCIsIHRydWUpXG5cdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsXCIgKyBtYXJnaW4udG9wICsgXCIpXCIpO1xuXG5cdFx0dmFyIGF4aXMgPSBmdW5jdGlvbihkaXIsIG9wdHMpIHtcblx0XHRcdGRpciA9IGRpci50b0xvd2VyQ2FzZSgpIHx8IFwieFwiO1xuXHRcdFx0b3B0cyA9IG9wdHMgfHwge307XG5cblx0XHRcdC8vIG91dHB1dCByYW5nZSAoZG9tYWluKSBvZiBheGlzXG5cdFx0XHRvcHRzLmRvbWFpbiA9IG9wdHMuZG9tYWluIHx8IChvcHRzLmRhdGEgPyBkMy5leHRlbnQob3B0cy5kYXRhKSA6IFswLCAxXSk7XG5cdFx0XHRpZiAodHlwZW9mIG9wdHMubWluICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdG9wdHMuZG9tYWluWzBdID0gb3B0cy5taW47XHRcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2Ygb3B0cy5tYXggIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0b3B0cy5kb21haW5bMV0gPSBvcHRzLm1heDtcdFxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgc2NhbGU7XG5cblx0XHRcdC8vIGN1cnJlbnRseSBzdXBwb3J0ZWQgdGltZXMgYXJlIHRpbWUsIG9yZGluYWwsIGxvZywgb3IgbGluZWFyIChkZWZhdWx0KVxuXHRcdFx0c3dpdGNoKG9wdHMudHlwZSB8fCBcImxpbmVhclwiKSB7XG5cdFx0XHRcdGNhc2UgXCJ0aW1lXCI6IHNjYWxlID0gZDMudGltZS5zY2FsZSgpOyBicmVhaztcblx0XHRcdFx0Y2FzZSBcIm9yZGluYWxcIjogc2NhbGUgPSBkMy5zY2FsZS5vcmRpbmFsKCk7IGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwibG9nXCI6IHNjYWxlID0gZDMuc2NhbGUubG9nKCk7IGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OiBzY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpOyBicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Ly8gaW5wdXQgcmFuZ2Vcblx0XHRcdGlmIChvcHRzLnR5cGUgPT09IFwib3JkaW5hbFwiKSB7XG5cdFx0XHRcdGlmIChvcHRzLnJhbmdlKSB7XG5cdFx0XHRcdFx0c2NhbGUucmFuZ2VSb3VuZEJhbmRzKG9wdHMucmFuZ2UpLmRvbWFpbihvcHRzLmRvbWFpbik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2NhbGUucmFuZ2VSb3VuZEJhbmRzKGRpciA9PT0gXCJ4XCIgPyBbMCwgd2lkdGhdIDogW2hlaWdodCwgMF0pLmRvbWFpbihvcHRzLmRvbWFpbik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChvcHRzLnJhbmdlKSB7XG5cdFx0XHRcdFx0c2NhbGUucmFuZ2Uob3B0cy5yYW5nZSkuZG9tYWluKG9wdHMuZG9tYWluKTtcblx0XHRcdFx0fSBlbHNlIHtcdFx0XHRcdFx0XG5cdFx0XHRcdFx0c2NhbGUucmFuZ2UoZGlyID09PSBcInhcIiA/IFswLCB3aWR0aF0gOiBbaGVpZ2h0LCAwXSkuZG9tYWluKG9wdHMuZG9tYWluKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdC8vIHRoZSBkMyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBheGlzXG5cdFx0XHR2YXIgYXggPSBkMy5zdmcuYXhpcygpLnNjYWxlKHNjYWxlKTtcblxuXHRcdFx0Ly8gdGhlIHBoeXNpY2FsIFNWRyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBheGlzXG5cdFx0XHR2YXIgYXhpc19nID0gbGF5ZXIuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgZGlyICsgXCIgYXhpc1wiKTtcblxuXHRcdFx0aWYgKG9wdHMudGlja19mb3JtYXQpIHtcblx0XHRcdFx0YXgudGlja0Zvcm1hdChvcHRzLnRpY2tfZm9ybWF0KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9wdHMuaWQpIHtcblx0XHRcdFx0YXhpc19nLmF0dHIoXCJpZFwiLCBvcHRzLmlkKTtcdFxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZGlyID09PSBcInhcIikge1xuXHRcdFx0XHRvcHRzLm9yaWVudGF0aW9uID0gb3B0cy5vcmllbnRhdGlvbiB8fCBcImJvdHRvbVwiO1xuXHRcdFx0XHRpZiAob3B0cy5vcmllbnRhdGlvbiA9PT0gXCJib3R0b21cIikge1xuXHRcdFx0XHRcdGF4aXNfZy5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRheGlzX2cuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLDApXCIpXG5cdFx0XHRcdH1cblx0XHRcdFx0YXgub3JpZW50KG9wdHMub3JpZW50YXRpb24pO1xuXG5cdFx0XHRcdGlmIChvcHRzLmxhYmVsKSB7XG5cdFx0XHRcdFx0YXhpc19nLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0XHQgICAgLmF0dHIoXCJ4XCIsIHdpZHRoKVxuXHRcdFx0XHRcdCAgICAuYXR0cihcInlcIiwgb3B0cy5vcmllbnRhdGlvbiA9PT0gXCJ0b3BcIiA/IC0yNSA6IDI1KVxuXHRcdFx0XHRcdCAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuXHRcdFx0XHRcdCAgICAuY2xhc3NlZChcImF4aXNfbGFiZWxcIiwgdHJ1ZSlcblx0XHRcdFx0XHQgICAgLnRleHQob3B0cy5sYWJlbCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9wdHMub3JpZW50YXRpb24gPSBvcHRzLm9yaWVudGF0aW9uIHx8IFwibGVmdFwiO1xuXHRcdFx0XHRpZiAob3B0cy5vcmllbnRhdGlvbiA9PT0gXCJsZWZ0XCIpIHtcblx0XHRcdFx0XHRheGlzX2cuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLDApXCIpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YXhpc19nLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIHdpZHRoICsgXCIpXCIpXG5cdFx0XHRcdH1cblx0XHRcdFx0YXgub3JpZW50KG9wdHMub3JpZW50YXRpb24pO1xuXG5cdFx0XHRcdGlmIChvcHRzLmxhYmVsKSB7XG5cdFx0XHRcdFx0YXhpc19nLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0XHQgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuXHRcdFx0XHRcdCAgICAuYXR0cihcInhcIiwgb3B0cy5sYWJlbF9vZmZzZXQgfHwgMClcblx0XHRcdFx0XHQgICAgLmF0dHIoXCJ5XCIsIDUpXG5cdFx0XHRcdFx0ICAgIC5hdHRyKFwiZHlcIiwgXCIuNzFlbVwiKVxuXHRcdFx0XHRcdCAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuXHRcdFx0XHRcdCAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpc19sYWJlbFwiKVxuXHRcdFx0XHRcdCAgICAudGV4dChvcHRzLmxhYmVsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0YXhpc19nLmNhbGwoYXgpO1xuXG5cdFx0XHR2YXIgdXBkYXRlID0gZnVuY3Rpb24oZHVyKSB7XG5cdFx0XHRcdGR1ciA/IGF4aXNfZy50cmFuc2l0aW9uKGR1cikuY2FsbChheCkgOiBheGlzX2cuY2FsbChheCk7XG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgcmVzaXplX2F4aXMgPSBmdW5jdGlvbiAoeikge1xuXHRcdFx0XHRpZiAob3B0cy50eXBlID09PSBcIm9yZGluYWxcIikge1xuXHRcdFx0XHRcdHNjYWxlLnJhbmdlUm91bmRCYW5kcyhkaXIgPT09IFwieFwiID8gWzAsIHdpZHRoXSA6IFtoZWlnaHQsIDBdKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzY2FsZS5yYW5nZShkaXIgPT09IFwieFwiID8gWzAsIHdpZHRoXSA6IFtoZWlnaHQsIDBdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob3B0cy5yZXNpemUpIHtcblx0XHRcdFx0XHRvcHRzLnJlc2l6ZShzY2FsZSwgYXhpcywgd2lkdGgsIGhlaWdodCwgeik7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG9wdHMub3JpZW50YXRpb24gPT0gXCJib3R0b21cIikge1xuXHRcdFx0XHRcdGF4LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKTtcblx0XHRcdFx0fSBlbHNlIGlmIChvcHRzLm9yaWVudGF0aW9uID09IFwicmlnaHRcIikge1xuXHRcdFx0XHRcdGF4LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB3aWR0aCArIFwiLDApXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHVwZGF0ZSgpO1x0XHRcdFxuXHRcdFx0fVxuXG5cdFx0XHQvLyB3ZSdsbCByZXR1cm4gdGhpcyBvYmplY3QgKGFuZCBzdG9yZSBpdCBpbiB0aGUgY2hhcnQgb2JqZWN0KVxuXHRcdFx0dmFyIG9iaiA9IHtcblx0XHRcdFx0c2NhbGU6IHNjYWxlLFxuXHRcdFx0XHRheGlzOiBheCxcblx0XHRcdFx0dXBkYXRlOiB1cGRhdGUsXG5cdFx0XHRcdHJlc2l6ZTogcmVzaXplX2F4aXNcblx0XHRcdH07XG5cblx0XHRcdGF4ZXMucHVzaChvYmopO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cblx0XHQvLyBhbnl0aGluZyBvbiB0aGlzIHN1YmxheWVyIHdpbGwgc2NhbGUgZG93biB3aXRoIGEgY2hhbmdlIGluIHNjcmVlbiBzaXplXG5cdFx0Ly8gdGhlIGF4ZXMgc2hvdWxkIE5PVCBiZSBzY2FsZWQgaWYgdGhhdCBjaGFydCByZXNpemVzLiBJdCdzIG11Y2ggYmV0dGVyIHRvIHJlc2l6ZSB0aGVtIGRpcmVjdGx5IHRvIGFsbG93IGZvciB0aGUgdGlja3MgdG8gcmVjYWxjdWxhdGVcblx0XHQvLyB0aHVzLCB0aGUgYXhlcyBiZWxvbmcgdG8gXCJsYXllclwiLCBub3QgXCJyZXNpemVfbGF5ZXJcIlxuXHRcdHZhciByZXNpemVfbGF5ZXIgPSBsYXllci5hcHBlbmQoXCJnXCIpLmNsYXNzZWQoXCJyZXNpemFibGVcIiwgdHJ1ZSk7XG5cblx0XHRmdW5jdGlvbiByZXNpemVfY2hhcnQoKSB7XG5cdFx0XHR2YXIgdyA9IHBhcnNlSW50KGNvbnRhaW5lci5zdHlsZSgnd2lkdGgnKSwgMTApIC0gbWFyZ2luLnJpZ2h0IC0gbWFyZ2luLmxlZnQsXG5cdFx0XHRcdGggPSBwYXJzZUludChjb250YWluZXIuc3R5bGUoJ2hlaWdodCcpLCAxMCkgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbSxcblx0XHRcdFx0eiA9IHcgLyBvcmlnaW5hbF93aWR0aDtcblxuXHRcdFx0d2lkdGggPSB3O1xuXHRcdFx0aGVpZ2h0ID0gaDtcblxuXHRcdFx0cmVzaXplX2xheWVyLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJzY2FsZShcIiArIHogKyBcIiwxKVwiKTtcblxuXHRcdFx0YXhlcy5mb3JFYWNoKGZ1bmN0aW9uKG9iaikge1xuXHRcdFx0XHRvYmoucmVzaXplKHopO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChvcHRzLnJlc2l6ZSkge1xuXHRcdFx0XHRvcHRzLnJlc2l6ZSh3LCBoLCB6KTtcblx0XHRcdH1cblxuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4ge1xuXHRcdFx0YXhpc19sYXllcjogbGF5ZXIsXG5cdFx0XHRyZXNpemVfbGF5ZXI6IHJlc2l6ZV9sYXllcixcblx0XHRcdGhlaWdodDogaGVpZ2h0LFxuXHRcdFx0d2lkdGg6IHdpZHRoLFxuXHRcdFx0c2V0UmVzaXplOiBmdW5jdGlvbihyZikge1xuXHRcdFx0XHRvcHRzLnJlc2l6ZSA9IHJmO1xuXHRcdFx0fSxcblx0XHRcdGFkZEF4aXM6IGF4aXNcblx0XHR9XG5cdH1cblxuXHQvLyBtYWtlIHRoaXMgY29tcGF0aWJsZSB3aXRoIGJyb3dzZXJpZnkgd2l0aG91dCByZXF1aXJpbmcgaXRcblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNoYXJ0O1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5kM2NoYXJ0ID0gY2hhcnQ7XG5cdH1cblxuXHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMzMzk4MjUvd2hhdC1pcy10aGUtYmVzdC1wcmFjdGlzZS10by1ub3QtdG8tb3ZlcnJpZGUtb3RoZXItYm91bmQtZnVuY3Rpb25zLXRvLXdpbmRvdy1vbnJcblx0ZnVuY3Rpb24gYWRkUmVzaXplRXZlbnQoZnVuYykge1xuXHRcdHZhciByZXNpemVUaW1lcixcblx0ICAgIFx0b2xkUmVzaXplID0gd2luZG93Lm9ucmVzaXplO1xuXHQgICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHJlc2l6ZVRpbWVyKTtcblx0XHRcdHJlc2l6ZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0ZnVuYygpO1xuXHRcdCAgICAgICAgaWYgKHR5cGVvZiBvbGRSZXNpemUgPT09ICdmdW5jdGlvbicpIHtcblx0XHQgICAgICAgICAgICBvbGRSZXNpemUoKTtcblx0XHQgICAgICAgIH1cblx0XHRcdH0sIDEwMCk7XG5cdCAgICB9O1xuXHR9XG5cbn0oKSk7IiwidmFyIGQzID0gcmVxdWlyZShcImQzXCIpO1xuXG52YXIgZDNjaGFydCA9IHJlcXVpcmUoXCIuLi9jaGFydC5qc1wiKTtcblxudmFyIGNvbGxhdHogPSBmdW5jdGlvbihOKSB7XG5cdHZhciBwb2ludHMgPSBbWzAsIE5dXSxcblx0XHRpID0gMTtcblxuXHR3aGlsZSAoTiAhPT0gMSkge1xuXHRcdGlmIChOICUgMiA9PT0gMCkge1xuXHRcdFx0TiAvPSAyO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHROID0gMyAqIE4gKyAxO1xuXHRcdH1cblx0XHRwb2ludHMucHVzaChbaSwgTl0pO1xuXHRcdGkgKz0gMTtcblx0fVxuXHRyZXR1cm4gcG9pbnRzO1xufVxuXG52YXIgbGluZXMgPSBbXTtcblxuZm9yICh2YXIgaSA9IDE7IGkgPD0gMTA7IGkgKz0gMSkge1xuXHRsaW5lcy5wdXNoKGNvbGxhdHooaSkpO1xufVxuXG52YXIgY2ggPSBkM2NoYXJ0KFwiI2NoYXJ0XCIpO1xudmFyIHggPSBjaC5hZGRBeGlzKFwieFwiLCB7XG5cdGRvbWFpbjogWzAsIGQzLm1heChsaW5lcywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5sZW5ndGg7IH0pXVxufSk7XG5cbnZhciB5ID0gY2guYWRkQXhpcyhcInlcIiwge1xuXHRkb21haW46IFswLCBkMy5tYXgobGluZXMsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQzLm1heChkLCBmdW5jdGlvbihkZCkgeyByZXR1cm4gZGRbMV07IH0pOyB9KSBdXG59KTtcblxudmFyIGxpbmUgPSBkMy5zdmcuYXJlYSgpXG4gICAgLngoZnVuY3Rpb24oZCkgeyByZXR1cm4geC5zY2FsZShkWzBdKTsgfSlcbiAgICAueShmdW5jdGlvbihkKSB7IHJldHVybiB5LnNjYWxlKGRbMV0pOyB9KTtcblxuY2gucmVzaXplX2xheWVyLnNlbGVjdEFsbChcIi5saW5lXCIpXG5cdC5kYXRhKGxpbmVzKVxuXHQuZW50ZXIoKVxuXHQuYXBwZW5kKFwicGF0aFwiKVxuXHQuY2xhc3NlZChcImxpbmVcIiwgdHJ1ZSlcblx0LmF0dHIoXCJkXCIsIGxpbmUpOyJdfQ==
;