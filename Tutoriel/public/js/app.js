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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(5);
var isBuffer = __webpack_require__(19);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(21);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(6);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(6);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(22);
var buildURL = __webpack_require__(24);
var parseHeaders = __webpack_require__(25);
var isURLSameOrigin = __webpack_require__(26);
var createError = __webpack_require__(7);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(27);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(28);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(23);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(11);
module.exports = __webpack_require__(60);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_axios__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_App__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_AddComponent__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_AddComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_AddComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ChartComponent__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ChartComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_ChartComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_CreateItem__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_CreateItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_CreateItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_DisplayItem__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_DisplayItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_DisplayItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_EditItem__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_EditItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_EditItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_AjouterChart__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_AjouterChart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_AjouterChart__);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_axios___default.a, __WEBPACK_IMPORTED_MODULE_3_axios___default.a);









var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    mode: 'history',
    routes: [{
        path: '/coin',
        name: 'coin',
        component: __WEBPACK_IMPORTED_MODULE_5__components_AddComponent___default.a
    }, {
        path: '/chart',
        name: 'chart',
        component: __WEBPACK_IMPORTED_MODULE_6__components_ChartComponent___default.a
    }, {
        name: 'CreateItem',
        path: '/items/create',
        component: __WEBPACK_IMPORTED_MODULE_7__components_CreateItem___default.a
    }, {
        name: 'DisplayItem',
        path: '/Items',
        component: __WEBPACK_IMPORTED_MODULE_8__components_DisplayItem___default.a
    }, {
        name: 'EditItem',
        path: '/edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_9__components_EditItem___default.a
    }, {
        name: 'ajouterChart',
        path: '/chart/ajouter',
        component: __WEBPACK_IMPORTED_MODULE_10__components_AjouterChart___default.a
    }]
});
var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#app',
    components: { App: __WEBPACK_IMPORTED_MODULE_4__components_App___default.a },
    router: router
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */


/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if ("development" !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (true) {
      for (var key in vm.$slots) {
        // $flow-disable-line
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (true) {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ("development" !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.16';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value.trim()
  };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (true) {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (true) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (true) {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
}

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        "development" !== 'production' &&
        "development" !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ("development" !== 'production' &&
      "development" !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
}

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (true) {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
}

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
}

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (true) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (true) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (true) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (true) {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '');
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (true) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if ("development" !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if ("development" !== 'production' && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (true) {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$2 = {
  preTransformNode: preTransformNode
}

var modules$1 = [
  klass$1,
  style$1,
  model$2
]

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
}

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  esc: 'Escape',
  tab: 'Tab',
  enter: 'Enter',
  space: ' ',
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  'delete': ['Backspace', 'Delete']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    /* istanbul ignore if */
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    /* istanbul ignore if */
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
}

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (true) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (true) {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (true) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (true) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (true) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

module.exports = Vue;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(13).setImmediate))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(14);
// On some exotic environments, it's not clear which object `setimmeidate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(4)))

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ("development" !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "development" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (true) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ("development" !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (true) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (true) {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "development" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "development" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["a"] = (VueRouter);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};!function(){function o(e,t){if(!o.installed){if(o.installed=!0,!t)return void console.error("You have to install axios");e.axios=t,Object.defineProperties(e.prototype,{axios:{get:function(){return t}},$http:{get:function(){return t}}})}}"object"==( false?"undefined":_typeof(exports))?module.exports=o: true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return o}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):window.Vue&&window.axios&&Vue.use(o,window.axios)}();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(5);
var Axios = __webpack_require__(20);
var defaults = __webpack_require__(3);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(9);
axios.CancelToken = __webpack_require__(34);
axios.isCancel = __webpack_require__(8);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(35);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(3);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(29);
var dispatchRequest = __webpack_require__(30);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(7);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(31);
var isCancel = __webpack_require__(8);
var defaults = __webpack_require__(3);
var isAbsoluteURL = __webpack_require__(32);
var combineURLs = __webpack_require__(33);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(9);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(37)
/* template */
var __vue_template__ = __webpack_require__(38)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8142f38c", Component.options)
  } else {
    hotAPI.reload("data-v-8142f38c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h1"),
    _vm._v(" "),
    _c(
      "p",
      [
        _c("router-link", { attrs: { to: { name: "coin" } } }, [
          _vm._v("form login")
        ]),
        _vm._v(" "),
        _c("router-link", { attrs: { to: { name: "chart" } } }, [
          _vm._v("chart")
        ]),
        _vm._v(" "),
        _c("router-link", { attrs: { to: { name: "DisplayItem" } } }, [
          _vm._v("Crud")
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [_c("router-view")], 1)
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8142f38c", module.exports)
  }
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(40)
/* template */
var __vue_template__ = __webpack_require__(41)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/AddComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67e4ed13", Component.options)
  } else {
    hotAPI.reload("data-v-67e4ed13", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
   data: function data() {
      return {
         coin: {}
      };
   },

   methods: {
      addCoin: function addCoin() {
         var uri = 'http://localhost:8000/coins';
         this.axios.post(uri, this.coin).then(function (response) {
            window.location.reload();
         });
      }
   }
});

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-md-8" }, [
    _c("div", { staticClass: "card card-default" }, [
      _c("div", { staticClass: "card-header" }, [_vm._v("Add Coin")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.addCoin($event)
              }
            }
          },
          [
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                {
                  staticClass: "col-sm-4 col-form-label text-md-right",
                  attrs: { for: "name" }
                },
                [_vm._v("Name")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.coin.name,
                      expression: "coin.name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "email",
                    type: "text",
                    required: "",
                    autofocus: ""
                  },
                  domProps: { value: _vm.coin.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.coin, "name", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                {
                  staticClass: "col-md-4 col-form-label text-md-right",
                  attrs: { for: "year" }
                },
                [_vm._v("Year")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.coin.year,
                      expression: "coin.year"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", required: "" },
                  domProps: { value: _vm.coin.year },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.coin, "year", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                {
                  staticClass: "col-md-4 col-form-label text-md-right",
                  attrs: { for: "year" }
                },
                [_vm._v("Price")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.coin.price,
                      expression: "coin.price"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", required: "" },
                  domProps: { value: _vm.coin.price },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.coin, "price", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _vm._m(0)
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row mb-0" }, [
      _c("div", { staticClass: "col-md-8 offset-md-4" }, [
        _c("button", { staticClass: "btn btn-primary" }, [
          _vm._v(
            "\n                                 Add\n                             "
          )
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-67e4ed13", module.exports)
  }
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(43)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(48)
/* template */
var __vue_template__ = __webpack_require__(50)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-745aa594"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/ChartComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-745aa594", Component.options)
  } else {
    hotAPI.reload("data-v-745aa594", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(46)("5f49d952", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-745aa594\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChartComponent.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-745aa594\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChartComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(45)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*\n  The chart dimensions is bound by the outer container in this case '.chart'.\n*/\n.chart[data-v-745aa594]{\n  height: 500px;\n}\n", ""]);

// exports


/***/ }),
/* 45 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(47)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 47 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_d2b__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_d2b___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_d2b__);
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // Describe the pie-chart data for more information on this checkout
      // the d2bjs.org docs.
      chartData: [{ label: 'arc 1', value: 23 }, { label: 'arc 2', value: 31 }, { label: 'arc 3', value: 80 }, { label: 'arc 4', value: 8 }],

      // The chart config property is a callback function that is executed
      // any time the chart undergoes an update. The function receives the
      // d2b chart generator as an argument and can be configured as described
      // as described by the d2bjs.org docs.
      chartConfig: function chartConfig(chart) {
        chart.donutRatio(0.5);
      }
    };
  },


  components: {
    ChartPie: __WEBPACK_IMPORTED_MODULE_0_vue_d2b__["ChartPie"]
  }
});

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():"function"==typeof define&&define.amd?define("vued2b",[],n):"object"==typeof exports?exports.vued2b=n():t.vued2b=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/",n(n.s=217)}([function(t,n,e){"use strict";function r(t){return t>1?0:t<-1?c:Math.acos(t)}function i(t){return t>1?s:t<-1?-s:Math.asin(t)}function a(t){return(t=w(t/2))*t}e.d(n,"i",function(){return o}),e.d(n,"j",function(){return u}),e.d(n,"o",function(){return c}),e.d(n,"l",function(){return s}),e.d(n,"q",function(){return l}),e.d(n,"w",function(){return f}),e.d(n,"h",function(){return d}),e.d(n,"r",function(){return h}),e.d(n,"a",function(){return p}),e.d(n,"d",function(){return b}),e.d(n,"e",function(){return v}),e.d(n,"g",function(){return y}),e.d(n,"f",function(){return g}),e.d(n,"k",function(){return _}),e.d(n,"n",function(){return x}),e.d(n,"p",function(){return m}),e.d(n,"t",function(){return w}),e.d(n,"s",function(){return j}),e.d(n,"u",function(){return O}),e.d(n,"v",function(){return k}),n.b=r,n.c=i,n.m=a;var o=1e-6,u=1e-12,c=Math.PI,s=c/2,l=c/4,f=2*c,d=180/c,h=c/180,p=Math.abs,b=Math.atan,v=Math.atan2,y=Math.cos,g=Math.ceil,_=Math.exp,x=(Math.floor,Math.log),m=Math.pow,w=Math.sin,j=Math.sign||function(t){return t>0?1:t<0?-1:0},O=Math.sqrt,k=Math.tan},function(t,n,e){"use strict";var r=e(63);e.d(n,"b",function(){return r.a});var i=e(248);e.d(n,"e",function(){return i.a});var a=e(126);e.d(n,"f",function(){return a.a});var o=e(249);e.d(n,"g",function(){return o.a});var u=e(64);e.d(n,"h",function(){return u.a});var c=e(65);e.d(n,"i",function(){return c.a});var s=e(40);e.d(n,"a",function(){return s.a});var l=e(250);e.d(n,"j",function(){return l.a});var f=e(278);e.d(n,"k",function(){return f.a});var d=e(5);e.d(n,"l",function(){return d.b});var h=e(68);e.d(n,"m",function(){return h.a});var p=e(127);e.d(n,"n",function(){return p.a});var b=e(130);e.d(n,"o",function(){return b.b});var v=e(279);e.d(n,"p",function(){return v.a});var y=e(280);e.d(n,"q",function(){return y.a});var g=e(69);e.d(n,"r",function(){return g.a});var _=e(67);e.d(n,"d",function(){return _.c}),e.d(n,"c",function(){return _.a})},function(t,n,e){"use strict";var r=e(114);e.d(n,"b",function(){return r.c}),e.d(n,"d",function(){return r.b}),e.d(n,"c",function(){return r.a});var i=e(19);e.d(n,"a",function(){return i.a});var a=e(115);e.d(n,"e",function(){return a.a});var o=e(224);e.d(n,"f",function(){return o.a});var u=e(225);e.d(n,"g",function(){return u.a});var c=e(117);e.d(n,"h",function(){return c.a});var s=e(119);e.d(n,"i",function(){return s.a});var l=e(226);e.d(n,"j",function(){return l.a});var f=e(229);e.d(n,"w",function(){return f.a});var d=e(230);e.d(n,"x",function(){return d.a});var h=e(123);e.d(n,"y",function(){return h.a});var p=e(231);e.d(n,"k",function(){return p.a});var b=e(232);e.d(n,"l",function(){return b.a});var v=e(233);e.d(n,"m",function(){return v.a});var y=e(234);e.d(n,"n",function(){return y.a});var g=e(124);e.d(n,"o",function(){return g.a});var _=e(116);e.d(n,"p",function(){return _.a});var x=e(235);e.d(n,"q",function(){return x.a});var m=e(61);e.d(n,"r",function(){return m.a});var w=e(121);e.d(n,"s",function(){return w.a});var j=e(236);e.d(n,"t",function(){return j.a});var O=e(237);e.d(n,"u",function(){return O.a});var k=e(238);e.d(n,"v",function(){return k.a});var M=e(122);e.d(n,"B",function(){return M.a}),e.d(n,"z",function(){return M.b}),e.d(n,"A",function(){return M.c});var P=e(125);e.d(n,"C",function(){return P.a});var A=e(118);e.d(n,"D",function(){return A.a});var T=e(239);e.d(n,"E",function(){return T.a})},function(t,n,e){"use strict";function r(t,n,e,o){function u(n){return t(n=new Date(+n)),n}return u.floor=u,u.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},u.round=function(t){var n=u(t),e=u.ceil(t);return t-n<e-t?n:e},u.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},u.range=function(e,r,i){var a,o=[];if(e=u.ceil(e),i=null==i?1:Math.floor(i),!(e<r&&i>0))return o;do{o.push(a=new Date(+e)),n(e,i),t(e)}while(a<e&&e<r);return o},u.filter=function(e){return r(function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)},function(t,r){if(t>=t)if(r<0)for(;++r<=0;)for(;n(t,-1),!e(t););else for(;--r>=0;)for(;n(t,1),!e(t););})},e&&(u.count=function(n,r){return i.setTime(+n),a.setTime(+r),t(i),t(a),Math.floor(e(i,a))},u.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?u.filter(o?function(n){return o(n)%t==0}:function(n){return u.count(0,n)%t==0}):u:null}),u}n.a=r;var i=new Date,a=new Date},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(70);e.d(n,"interpolate",function(){return r.a});var i=e(137);e.d(n,"interpolateArray",function(){return i.a});var a=e(73);e.d(n,"interpolateBasis",function(){return a.b});var o=e(135);e.d(n,"interpolateBasisClosed",function(){return o.a});var u=e(138);e.d(n,"interpolateDate",function(){return u.a});var c=e(41);e.d(n,"interpolateNumber",function(){return c.a});var s=e(139);e.d(n,"interpolateObject",function(){return s.a});var l=e(285);e.d(n,"interpolateRound",function(){return l.a});var f=e(140);e.d(n,"interpolateString",function(){return f.a});var d=e(286);e.d(n,"interpolateTransformCss",function(){return d.a}),e.d(n,"interpolateTransformSvg",function(){return d.b});var h=e(289);e.d(n,"interpolateZoom",function(){return h.a});var p=e(134);e.d(n,"interpolateRgb",function(){return p.a}),e.d(n,"interpolateRgbBasis",function(){return p.b}),e.d(n,"interpolateRgbBasisClosed",function(){return p.c});var b=e(290);e.d(n,"interpolateHsl",function(){return b.a}),e.d(n,"interpolateHslLong",function(){return b.b});var v=e(291);e.d(n,"interpolateLab",function(){return v.a});var y=e(292);e.d(n,"interpolateHcl",function(){return y.a}),e.d(n,"interpolateHclLong",function(){return y.b});var g=e(293);e.d(n,"interpolateCubehelix",function(){return g.b}),e.d(n,"interpolateCubehelixLong",function(){return g.a});var _=e(294);e.d(n,"quantize",function(){return _.a})},function(t,n,e){"use strict";function r(t,n){this._groups=t,this._parents=n}function i(){return new r([[document.documentElement]],F)}e.d(n,"c",function(){return F}),n.a=r;var a=e(251),o=e(252),u=e(253),c=e(254),s=e(128),l=e(256),f=e(257),d=e(258),h=e(259),p=e(260),b=e(261),v=e(262),y=e(263),g=e(264),_=e(265),x=e(266),m=e(130),w=e(267),j=e(268),O=e(269),k=e(270),M=e(271),P=e(272),A=e(273),T=e(274),N=e(275),E=e(276),S=e(67),C=e(277),F=[null];r.prototype=i.prototype={constructor:r,select:a.a,selectAll:o.a,filter:u.a,data:c.a,enter:s.b,exit:l.a,merge:f.a,order:d.a,sort:h.a,call:p.a,nodes:b.a,node:v.a,size:y.a,empty:g.a,each:_.a,attr:x.a,style:m.a,property:w.a,classed:j.a,text:O.a,html:k.a,raise:M.a,lower:P.a,append:A.a,insert:T.a,remove:N.a,datum:E.a,on:S.b,dispatch:C.a},n.b=i},function(t,n,e){"use strict";function r(t,n){var e=a(t,n);if(e.state>f)throw new Error("too late; already scheduled");return e}function i(t,n){var e=a(t,n);if(e.state>h)throw new Error("too late; already started");return e}function a(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function o(t,n,e){function r(t){e.state=d,e.timer.restart(i,e.delay,e.time),e.delay<=t&&i(t-e.delay)}function i(r){var l,f,v,g;if(e.state!==d)return o();for(l in s)if(g=s[l],g.name===e.name){if(g.state===p)return Object(c.c)(i);g.state===b?(g.state=y,g.timer.stop(),g.on.call("interrupt",t,t.__data__,g.index,g.group),delete s[l]):+l<n&&(g.state=y,g.timer.stop(),delete s[l])}if(Object(c.c)(function(){e.state===p&&(e.state=b,e.timer.restart(a,e.delay,e.time),a(r))}),e.state=h,e.on.call("start",t,t.__data__,e.index,e.group),e.state===h){for(e.state=p,u=new Array(v=e.tween.length),l=0,f=-1;l<v;++l)(g=e.tween[l].value.call(t,t.__data__,e.index,e.group))&&(u[++f]=g);u.length=f+1}}function a(n){for(var r=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(o),e.state=v,1),i=-1,a=u.length;++i<a;)u[i].call(null,r);e.state===v&&(e.on.call("end",t,t.__data__,e.index,e.group),o())}function o(){e.state=y,e.timer.stop(),delete s[n];for(var r in s)return;delete t.__transition}var u,s=t.__transition;s[n]=e,e.timer=Object(c.d)(r,0,e.time)}e.d(n,"c",function(){return d}),e.d(n,"d",function(){return h}),e.d(n,"b",function(){return v}),e.d(n,"a",function(){return y}),n.g=r,n.h=i,n.f=a;var u=e(14),c=e(42),s=Object(u.a)("start","end","interrupt"),l=[],f=0,d=1,h=2,p=3,b=4,v=5,y=6;n.e=function(t,n,e,r,i,a){var u=t.__transition;if(u){if(e in u)return}else t.__transition={};o(t,e,{name:n,index:r,group:i,on:s,tween:l,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:f})}},function(t,n,e){"use strict";var r=e(335);e.d(n,"a",function(){return r.a})},function(t,n,e){"use strict";function r(t,n){this._groups=t,this._parents=n}function i(){return new r([[document.documentElement]],F)}e.d(n,"b",function(){return F}),n.a=r;var a=e(516),o=e(517),u=e(518),c=e(519),s=e(198),l=e(521),f=e(522),d=e(523),h=e(524),p=e(525),b=e(526),v=e(527),y=e(528),g=e(529),_=e(530),x=e(531),m=e(532),w=e(533),j=e(534),O=e(535),k=e(536),M=e(537),P=e(538),A=e(539),T=e(540),N=e(541),E=e(542),S=e(106),C=e(543),F=[null];r.prototype=i.prototype={constructor:r,select:a.a,selectAll:o.a,filter:u.a,data:c.a,enter:s.b,exit:l.a,merge:f.a,order:d.a,sort:h.a,call:p.a,nodes:b.a,node:v.a,size:y.a,empty:g.a,each:_.a,attr:x.a,style:m.a,property:w.a,classed:j.a,text:O.a,html:k.a,raise:M.a,lower:P.a,append:A.a,insert:T.a,remove:N.a,datum:E.a,on:S.b,dispatch:C.a}},function(t,n,e){"use strict";var r=e(71);e.d(n,"a",function(){return r.e}),e.d(n,"f",function(){return r.g}),e.d(n,"d",function(){return r.f});var i=e(283);e.d(n,"e",function(){return i.a}),e.d(n,"c",function(){return i.b});var a=e(284);e.d(n,"b",function(){return a.a})},function(t,n,e){"use strict";function r(t){return Object(h.b)({point:function(n,e){var r=t(n,e);return this.stream.point(r[0],r[1])}})}function i(t){return a(function(){return t})()}function a(t){function n(t){return t=m(t[0]*f.r,t[1]*f.r),[t[0]*P+g,_-t[1]*P]}function e(t){return(t=m.invert((t[0]-g)/P,(_-t[1])/P))&&[t[0]*f.h,t[1]*f.h]}function i(t,n){return t=y(t,n),[t[0]*P+g,_-t[1]*P]}function a(){m=Object(s.a)(x=Object(d.b)(S,C,F),y);var t=y(N,E);return g=A-t[0]*P,_=T+t[1]*P,h()}function h(){return k=M=null,n}var y,g,_,x,m,w,j,O,k,M,P=150,A=480,T=250,N=0,E=0,S=0,C=0,F=0,z=null,R=o.a,L=null,q=l.a,B=.5,D=Object(b.a)(i,B);return n.stream=function(t){return k&&M===t?k:k=v(r(x)(R(D(q(M=t)))))},n.preclip=function(t){return arguments.length?(R=t,z=void 0,h()):R},n.postclip=function(t){return arguments.length?(q=t,L=w=j=O=null,h()):q},n.clipAngle=function(t){return arguments.length?(R=+t?Object(u.a)(z=t*f.r):(z=null,o.a),h()):z*f.h},n.clipExtent=function(t){return arguments.length?(q=null==t?(L=w=j=O=null,l.a):Object(c.a)(L=+t[0][0],w=+t[0][1],j=+t[1][0],O=+t[1][1]),h()):null==L?null:[[L,w],[j,O]]},n.scale=function(t){return arguments.length?(P=+t,a()):P},n.translate=function(t){return arguments.length?(A=+t[0],T=+t[1],a()):[A,T]},n.center=function(t){return arguments.length?(N=t[0]%360*f.r,E=t[1]%360*f.r,a()):[N*f.h,E*f.h]},n.rotate=function(t){return arguments.length?(S=t[0]%360*f.r,C=t[1]%360*f.r,F=t.length>2?t[2]%360*f.r:0,a()):[S*f.h,C*f.h,F*f.h]},n.precision=function(t){return arguments.length?(D=Object(b.a)(i,B=t*t),h()):Object(f.u)(B)},n.fitExtent=function(t,e){return Object(p.a)(n,t,e)},n.fitSize=function(t,e){return Object(p.c)(n,t,e)},n.fitWidth=function(t,e){return Object(p.d)(n,t,e)},n.fitHeight=function(t,e){return Object(p.b)(n,t,e)},function(){return y=t.apply(this,arguments),n.invert=y.invert&&e,a()}}n.a=i,n.b=a;var o=e(153),u=e(159),c=e(46),s=e(152),l=e(84),f=e(0),d=e(45),h=e(47),p=e(87),b=e(388),v=Object(h.b)({point:function(t,n){this.stream.point(t*f.r,n*f.r)}})},function(t,n,e){"use strict";e.d(n,"d",function(){return r}),e.d(n,"c",function(){return i}),e.d(n,"b",function(){return a}),e.d(n,"a",function(){return o}),e.d(n,"e",function(){return u});var r=1e3,i=6e4,a=36e5,o=864e5,u=6048e5},function(t,n,e){"use strict";function r(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function i(t){return Object(o.l)().transition(t)}function a(){return++O}n.a=r,n.b=i,n.c=a;var o=e(1),u=e(300),c=e(301),s=e(302),l=e(303),f=e(304),d=e(305),h=e(306),p=e(307),b=e(308),v=e(309),y=e(310),g=e(311),_=e(312),x=e(313),m=e(314),w=e(315),j=e(43),O=0,k=o.l.prototype;r.prototype=i.prototype={constructor:r,select:v.a,selectAll:y.a,filter:d.a,merge:h.a,selection:g.a,transition:w.a,call:k.call,nodes:k.nodes,node:k.node,size:k.size,empty:k.empty,each:k.each,on:p.a,attr:u.a,attrTween:c.a,style:_.a,styleTween:x.a,text:m.a,remove:b.a,tween:j.a,delay:s.a,duration:l.a,ease:f.a}},function(t,n,e){"use strict";function r(){}n.a=r},function(t,n,e){"use strict";var r=e(246);e.d(n,"a",function(){return r.a})},function(t,n,e){"use strict";function r(t,n){t&&u.hasOwnProperty(t.type)&&u[t.type](t,n)}function i(t,n,e){var r,i=-1,a=t.length-e;for(n.lineStart();++i<a;)r=t[i],n.point(r[0],r[1],r[2]);n.lineEnd()}function a(t,n){var e=-1,r=t.length;for(n.polygonStart();++e<r;)i(t[e],n,1);n.polygonEnd()}var o={Feature:function(t,n){r(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,i=-1,a=e.length;++i<a;)r(e[i].geometry,n)}},u={Sphere:function(t,n){n.sphere()},Point:function(t,n){t=t.coordinates,n.point(t[0],t[1],t[2])},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)t=e[r],n.point(t[0],t[1],t[2])},LineString:function(t,n){i(t.coordinates,n,0)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,a=e.length;++r<a;)i(e[r],n,0)},Polygon:function(t,n){a(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)a(e[r],n)},GeometryCollection:function(t,n){for(var e=t.geometries,i=-1,a=e.length;++i<a;)r(e[i],n)}};n.a=function(t,n){t&&o.hasOwnProperty(t.type)?o[t.type](t,n):r(t,n)}},function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a});var r=Array.prototype,i=r.map,a=r.slice},function(t,n,e){"use strict";n.a=function(t){return function(){return t}}},function(t,n,e){"use strict";var r=e(113),i=e(36);e.n(i);n.a={template:'\n    <div :class = \'["vue-d2b-container", "vue-d2b-" + name]\'></div>\n  ',props:{data:{default:function(){}},config:{default:function(){return function(){}}},duration:{default:500}},data:function(){return{unwatch:null,id:Object(i.id)()}},computed:{properties:function(){return{generator:this.generator,data:this.data,config:this.config}}},destroyed:function(){Object(r.selectAll)(".d2b-tooltip").remove(),Object(r.select)(window).on("resize."+this.id,null)},mounted:function(){this.updateDefer(),Object(r.select)(window).on("resize."+this.id,this.updateDefer)},methods:{unwatcher:function(){this.unwatch&&this.unwatch()},watcher:function(){this.unwatcher(),this.unwatch=this.$watch("properties",this.update,{deep:!0})},update:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.unwatcher(),this.$emit("beforeRender",this.$el,this.generator);var n=this.data;this.config(this.generator);var e=Object(r.select)(this.$el),i=t.skipTransition?e:e.transition().duration(this.duration);e.datum(n),i.call(this.generator),this.$emit("rendered",this.$el,this.generator),this.watcher()},updateNow:function(){this.update({skipTransition:!0})},updateDefer:function(){setTimeout(this.updateNow,0)}}}},function(t,n,e){"use strict";n.a=function(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}},function(t,n,e){"use strict";var r=e(336);e.d(n,"d",function(){return r.a});var i=e(337);e.d(n,"e",function(){return i.a});var a=e(76);e.d(n,"c",function(){return a.a});var o=e(338);e.d(n,"b",function(){return o.a});var u=e(339);e.d(n,"f",function(){return u.a});var c=e(340);e.d(n,"a",function(){return c.a})},function(t,n,e){"use strict";n.a=function(t){return function(){return t}}},function(t,n,e){"use strict";function r(){this.reset()}function i(t,n,e){var r=t.s=n+e,i=r-n,a=r-i;t.t=n-a+(e-i)}n.a=function(){return new r},r.prototype={constructor:r,reset:function(){this.s=this.t=0},add:function(t){i(a,t,this.t),i(this,a.s,this.s),this.s?this.t+=a.t:this.s=a.t},valueOf:function(){return this.s}};var a=new r},function(t,n,e){"use strict";n.a=function(){return Math.random()}},function(t,n,e){"use strict";n.a=function(t){return function(){return t}}},function(t,n,e){"use strict";n.a=function(t){return null===t?NaN:+t}},function(t,n,e){"use strict";function r(t,n){return function(e){return t+e*n}}function i(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}function a(t,n){var e=n-t;return e?r(t,e>180||e<-180?e-360*Math.round(e/360):e):Object(c.a)(isNaN(t)?n:t)}function o(t){return 1==(t=+t)?u:function(n,e){return e-n?i(n,e,t):Object(c.a)(isNaN(n)?e:n)}}function u(t,n){var e=n-t;return e?r(t,e):Object(c.a)(isNaN(t)?n:t)}n.c=a,n.b=o,n.a=u;var c=e(136)},function(t,n,e){"use strict";function r(t){return[Object(l.e)(t[1],t[0]),Object(l.c)(t[2])]}function i(t){var n=t[0],e=t[1],r=Object(l.g)(e);return[r*Object(l.g)(n),r*Object(l.t)(n),Object(l.t)(e)]}function a(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function o(t,n){return[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]]}function u(t,n){t[0]+=n[0],t[1]+=n[1],t[2]+=n[2]}function c(t,n){return[t[0]*n,t[1]*n,t[2]*n]}function s(t){var n=Object(l.u)(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=n,t[1]/=n,t[2]/=n}n.g=r,n.a=i,n.d=a,n.c=o,n.b=u,n.f=c,n.e=s;var l=e(0)},function(t,n,e){"use strict";function r(t){return function(n,e){var r=Object(a.g)(n),i=Object(a.g)(e),o=t(r*i);return[o*i*Object(a.t)(n),o*Object(a.t)(e)]}}function i(t){return function(n,e){var r=Object(a.u)(n*n+e*e),i=t(r),o=Object(a.t)(i),u=Object(a.g)(i);return[Object(a.e)(n*o,r*u),Object(a.c)(r&&e*o/r)]}}n.b=r,n.a=i;var a=e(0)},function(t,n,e){"use strict";n.a=function(t,n,e,r,i){for(var a,o=t.children,u=-1,c=o.length,s=t.value&&(r-n)/t.value;++u<c;)a=o[u],a.y0=e,a.y1=i,a.x0=n,a.x1=n+=a.value*s}},function(t,n,e){"use strict";function r(t){var n=t.domain;return t.ticks=function(t){var e=n();return Object(a.B)(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){return Object(c.a)(n(),t,e)},t.nice=function(e){null==e&&(e=10);var r,i=n(),o=0,u=i.length-1,c=i[o],s=i[u];return s<c&&(r=c,c=s,s=r,r=o,o=u,u=r),r=Object(a.z)(c,s,e),r>0?(c=Math.floor(c/r)*r,s=Math.ceil(s/r)*r,r=Object(a.z)(c,s,e)):r<0&&(c=Math.ceil(c*r)/r,s=Math.floor(s*r)/r,r=Object(a.z)(c,s,e)),r>0?(i[o]=Math.floor(c/r)*r,i[u]=Math.ceil(s/r)*r,n(i)):r<0&&(i[o]=Math.ceil(c*r)/r,i[u]=Math.floor(s*r)/r,n(i)),t},t}function i(){var t=Object(u.b)(u.c,o.interpolateNumber);return t.copy=function(){return Object(u.a)(t,i())},r(t)}n.b=r,n.a=i;var a=e(2),o=e(4),u=e(50),c=e(448)},function(t,n,e){"use strict";n.a=function(t){return t.match(/.{6}/g).map(function(t){return"#"+t})}},function(t,n,e){"use strict";function r(t){return t>1?0:t<-1?h:Math.acos(t)}function i(t){return t>=1?p:t<=-1?-p:Math.asin(t)}e.d(n,"a",function(){return a}),e.d(n,"d",function(){return o}),e.d(n,"e",function(){return u}),e.d(n,"h",function(){return c}),e.d(n,"i",function(){return s}),e.d(n,"k",function(){return l}),e.d(n,"l",function(){return f}),e.d(n,"f",function(){return d}),e.d(n,"j",function(){return h}),e.d(n,"g",function(){return p}),e.d(n,"m",function(){return b}),n.b=r,n.c=i;var a=Math.abs,o=Math.atan2,u=Math.cos,c=Math.max,s=Math.min,l=Math.sin,f=Math.sqrt,d=1e-12,h=Math.PI,p=h/2,b=2*h},function(t,n,e){"use strict";n.a=function(t,n){if((i=t.length)>1)for(var e,r,i,a=1,o=t[n[0]],u=o.length;a<i;++a)for(r=o,o=t[n[a]],e=0;e<u;++e)o[e][1]+=o[e][0]=isNaN(r[e][1])?r[e][0]:r[e][1]}},function(t,n,e){"use strict";n.a=function(t){for(var n=t.length,e=new Array(n);--n>=0;)e[n]=n;return e}},function(t,n,e){"use strict";function r(t,n,e){return(t[0]-e[0])*(n[1]-t[1])-(t[0]-n[0])*(e[1]-t[1])}function i(t,n){return n[1]-t[1]||n[0]-t[0]}function a(t,n){var e,r,a,b=t.sort(i).pop();for(s=[],u=new Array(t.length),o=new p.b,c=new p.b;;)if(a=d.c,b&&(!a||b[1]<a.y||b[1]===a.y&&b[0]<a.x))b[0]===e&&b[1]===r||(Object(l.a)(b),e=b[0],r=b[1]),b=t.pop();else{if(!a)break;Object(l.b)(a.arc)}if(Object(f.d)(),n){var v=+n[0][0],y=+n[0][1],g=+n[1][0],_=+n[1][1];Object(h.a)(v,y,g,_),Object(f.b)(v,y,g,_)}this.edges=s,this.cells=u,o=c=s=u=null}e.d(n,"f",function(){return b}),e.d(n,"g",function(){return v}),e.d(n,"a",function(){return o}),e.d(n,"b",function(){return u}),e.d(n,"c",function(){return c}),e.d(n,"e",function(){return s}),n.d=a;var o,u,c,s,l=e(506),f=e(193),d=e(194),h=e(101),p=e(100),b=1e-6,v=1e-12;a.prototype={constructor:a,polygons:function(){var t=this.edges;return this.cells.map(function(n){var e=n.halfedges.map(function(e){return Object(f.a)(n,t[e])});return e.data=n.site.data,e})},triangles:function(){var t=[],n=this.edges;return this.cells.forEach(function(e,i){if(o=(a=e.halfedges).length)for(var a,o,u,c=e.site,s=-1,l=n[a[o-1]],f=l.left===c?l.right:l.left;++s<o;)u=f,l=n[a[s]],f=l.left===c?l.right:l.left,u&&f&&i<u.index&&i<f.index&&r(c,u,f)<0&&t.push([c.data,u.data,f.data])}),t},links:function(){return this.edges.filter(function(t){return t.right}).map(function(t){return{source:t.left.data,target:t.right.data}})},find:function(t,n,e){for(var r,i,a=this,o=a._found||0,u=a.cells.length;!(i=a.cells[o]);)if(++o>=u)return null;var c=t-i.site[0],s=n-i.site[1],l=c*c+s*s;do{i=a.cells[r=o],o=null,i.halfedges.forEach(function(e){var r=a.edges[e],u=r.left;if(u!==i.site&&u||(u=r.right)){var c=t-u[0],s=n-u[1],f=c*c+s*s;f<l&&(l=f,o=u.index)}})}while(null!==o);return a._found=r,null==e||l<=e*e?i.site:null}}},function(t,n,e){"use strict";function r(t){return"function"==typeof t?t:function(){return t}}function i(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];var r=n[0];return n.forEach(function(t){null!==r&&void 0!==r&&!1!==r||(r=t)}),r}function a(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t){return t.label},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"start";n=r(n),e=r(e),a=r(a),t.each(function(t,r){var o=X.select(this),u=(""+n.call(this,t,r)).split(/\s+/).reverse(),c=void 0,s=[],l=[u.pop()],f=e.call(this,t,r),d=a.call(this,t,r),h=+o.attr("x"),p=+o.attr("y"),b=parseFloat(o.attr("dy"))||0;for(-1===i(o.html(),"").indexOf("tspan")&&o.text(""),c=u.pop();c;)l.join(" ").length+c.length>f&&(s.push(l),l=[]),l.push(c),c=u.pop();s.push(l);var v=o.selectAll("tspan").data(s),y=1.1*(s.length-1),g="end"===d?y:"middle"===d?y/2:0;v.merge(v.enter().append("tspan")).text(function(t){return t.join(" ")}).attr("x",h).attr("y",p).attr("dy",function(t,n){return b+1.1*n-g+"em"})})}function o(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0;t.each(function(){var t=X.select(this),e=t.text().split(/\s+/).reverse(),r=void 0,i=[],a=0,o=parseFloat(t.attr("y"))||0,u=parseFloat(t.attr("dy"))||0,c=t.text(null).append("tspan").attr("x",0).attr("y",o).attr("dy",u+"em");for(r=e.pop();r;)i.push(r),c.text(i.join(" ")),c.node().getComputedTextLength()>n&&(i.pop(),c.text(i.join(" ")),i=[r],c=t.append("tspan").attr("x",0).attr("y",o).attr("dy",1.1*++a+u+"em").text(r)),r=e.pop()})}function u(t,n){function e(t){return{innerRadius:n.innerRadius()(t),outerRadius:n.outerRadius()(t),startAngle:n.startAngle()(t),endAngle:n.endAngle()(t)}}if(!t.selection)return t.attr("d",function(t){return this.current=e(t),n(t)});t.attrTween("d",function(t){var r=this;t=e(t),this.current=this.current||t;var i=X.interpolate(this.current,t);return function(t){return r.current=i(t),n(r.current)}})}function c(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return isNaN(t)||null===t?n:t}function s(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t){return t},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};if(n=r(n),!t.selection)return t.text(function(t,r){return this.current=c(n.call(this,t,r)),e(this.current)});t.tween("text",function(t,r){var i=this,a=c(n.call(this,t,r));this.current=c(this.current,a);var o=X.interpolate(this.current,a);return function(t){i.textContent=e(i.current=o(t))}})}function l(t,n){function e(t){return{innerRadius:n.innerRadius()(t),outerRadius:n.outerRadius()(t),startAngle:n.startAngle()(t),endAngle:n.endAngle()(t),rotate:i(t)||0}}var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t.rotate};if(i=r(i),!t.selection)return t.attr("transform",function(t){return this.current=e(t),"translate("+n.centroid(this.current)+")rotate("+this.current.rotate+")"});t.attrTween("transform",function(t){var r=this;t=e(t),this.current=this.current||t;var i=X.interpolate(this.current,t);return function(t){return r.current=i(t),"translate("+n.centroid(r.current)+") rotate("+(r.current.rotate||0)+")"}})}function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments[2],a=function(n,r){return function(i){if(!arguments.length)return e[n];var a=e[n];return e[n]=i,r&&r(i,a),t}},o=function(t){return function(){return e[t]}},u=function(n,i){return function(a){if(!arguments.length)return e[n];var o=e[n];return e[n]=r(a),i&&i(e[n],o),t}},c=function(n,i){return function(a){if(!arguments.length)return e[n];var o=e[n];return a&&a.domain?e[n]=function(){return a}:e[n]=r(a),i&&i(e[n],o),t}},s={base:function(){return t},values:function(){return e},removeProp:function(n){return-1!==i.indexOf(n)?s:(e[n]=null,t[n]=null,s)},addProp:function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a(n),o=arguments[3];return e[n]||t[n]?s:(i=i||a(n,o),i(r),t[n]=i,s)},addPropGet:function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o(n);return e[n]||t[n]?s:(e[n]=r,t[n]=i,s)},addMethod:function(n,e){return t[n]?s:(t[n]=e,s)},addPropFunctor:function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u(n),a=arguments[3];return e[n]||t[n]?s:(i=i||u(n,a),i(r),t[n]=i,s)},addScaleFunctor:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c(t),r=arguments[3];return s.addProp(t,n,e,r)},addDispatcher:function(r){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"on",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"dispatch";return t[i]?s:e[a]?s:(t[i]=function(n,r){return 0===arguments.length?e[a]:1===arguments.length?e[a].on(n):(e[a].on(n,r),t)},e[a]=X.dispatch.apply(n,r),s)}};return s}function d(){var t={},n=function t(n){var e=n.selection?n.selection():n;return e.on(o("mouseover"),r).on(o("mouseout"),a),W()?e.on(o("click"),a):e.on(o("mousemove"),i),t},e=function(n,e){var r=this.getBoundingClientRect(),i={},a=(t.at.call(this,n,e)||(X.event.clientX>window.innerWidth/2?"center left":"center right")).split(" ");switch(a={x:a[1],y:a[0]},a.x){case"left":i.x=r.left;break;case"center":i.x=r.left+r.width/2;break;default:i.x=r.left+r.width}switch(a.y){case"bottom":i.y=r.top+r.height;break;case"center":i.y=r.top+r.height/2;break;default:i.y=r.top}return i},r=function(n,e){var r=t.container.selectAll(".d2b-tooltip").data(function(t){return[t]}),a=r.enter().append("div").style("opacity",0).attr("class","d2b-tooltip");a.append("div").attr("class","d2b-tooltip-content"),r=r.merge(a),r.transition().duration(100).style("opacity",1),t.dispatch.call("insert",r,this,n,e),i.call(this,n,e)},i=function(n,r){var i=t.html.call(this,n,r),a=t.target.call(this,n,r),o=t.color.call(this,n,r),u=a?a.node():this,c=t.followMouse.call(this,n,r)?{x:X.event.clientX,y:X.event.clientY}:e.call(u,n,r),s=t.container.selectAll(".d2b-tooltip").data(function(t){return[t]}),l=t.my.call(this,n,r)||(X.event.clientX>window.innerWidth/2?"left":"right");s.attr("class","d2b-tooltip d2b-tooltip-"+l).style("top",c.y+"px").style("left",c.x+"px").style("border-color",o).select(".d2b-tooltip-content").html(i),t.dispatch.call("move",s,this,n,r)},a=function(n,e){var r=t.container.selectAll(".d2b-tooltip").data(function(t){return[t]});r.transition().duration(100).style("opacity",0).remove(),t.dispatch.call("remove",r,this,n,e)},o=function(t){return t+".d2b-tooltip"};return f(n,t).addProp("container",X.select("body")).addMethod("clear",function(t){return(t.selection?t.selection():t).on(o("mouseover"),null).on(o("mouseout"),null).on(o("mousemove"),null),n}).addPropFunctor("followMouse",!1).addPropFunctor("color",null).addPropFunctor("my",null).addPropFunctor("at",null).addPropFunctor("target",null).addPropFunctor("html",null).addDispatcher(["insert","move","remove"]),n}function h(){var t={},n={},e=function(n,e,r){if("y"===r){if(e.y===1/0)return n.style("opacity",0);n.style("opacity",1).attr("transform","translate(0, "+e.y+")").attr("y1",0).attr("y2",0).attr("x1",0).attr("x2",t.size.width)}else{if(e.x===1/0)return n.style("opacity",0);n.style("opacity",1).attr("transform","translate("+e.x+", 0)").attr("x1",0).attr("x2",0).attr("y1",0).attr("y2",t.size.height)}},r=function(n,e,r){if(n.node()){var i=n.node().getBoundingClientRect(),a=r.x,o=r.y;t.trackY?e.y>t.size.height/2?o+=e.y-10-i.height:o+=e.y+10:o=X.event.clientY-r.y>t.size.height/2?X.event.clientY-10-i.height:X.event.clientY+10,t.trackX?e.x>t.size.width/2?a+=e.x-10-i.width:a+=e.x+10:a=X.event.clientX-r.x>t.size.width/2?X.event.clientX-10-i.width:X.event.clientX+10,a+=window.pageXOffset,o+=window.pageYOffset,n.style("left",a+"px").style("top",o+"px")}},a=function(n,e){var r=t.title(e.points.map(function(t){return t.data}));n.select(".d2b-tooltip-title").style("display",r?"block":"none").html(r);var i=n.select(".d2b-tooltip-content"),a=i.selectAll(".d2b-tooltip-row").data(e.points),o=a.enter().append("div").attr("class","d2b-tooltip-row");a.exit().remove(),a=a.merge(o).html(function(t){return t.row}).style("border-left-color",function(t){return t.color||"transparent"})},o=function(n){var e={x:X.event.clientX-n.x,y:X.event.clientY-n.y},r=1/0,a=1/0,o=[];for(var u in v)if(v.hasOwnProperty(u)){var c=v[u];for(var s in c){(function(n){if(!c.hasOwnProperty(n))return"continue";var u=c[n],s=[];u.config.data.forEach(function(n,c){var l={data:n,x:i(u.config.x(n,c),t.x(n,c)),y:i(u.config.y(n,c),t.y(n,c)),color:i(u.config.color(n,c),t.color(n,c)),row:i(u.config.row(n,c),t.row(n,c))};if(t.trackX&&t.trackY){if(l.x===r&&l.y===a)return s.push(l);var f=Math.sqrt(Math.pow(r-e.x,2)+Math.pow(a-e.y,2)),d=Math.sqrt(Math.pow(l.x-e.x,2)+Math.pow(l.y-e.y,2));d<f&&d<t.threshold&&(r=l.x,a=l.y,o=[],s=[l])}else if(t.trackX){if(l.x===r)return s.push(l);var h=Math.abs(r-e.x),p=Math.abs(l.x-e.x);p<h&&p<t.threshold&&(r=l.x,o=[],s=[l])}else if(t.trackY){if(l.y===a)return s.push(l);var b=Math.abs(a-e.y),v=Math.abs(l.y-e.y);v<b&&v<t.threshold&&(a=l.y,o=[],s=[l])}}),o=o.concat(s)})(s)}}return o=o.sort(function(t,n){return X.ascending(t.x,n.x)||X.ascending(t.y,n.y)}),{x:r,y:a,points:o}},u=function(t){t.transition().duration(50).style("opacity",0).remove()},c=function(t){t.transition().duration(50).style("opacity",1)},s=function(e,r){var i=t.svgContainer.selectAll(".d2b-tooltip-marker-x").data(t.trackX?[n]:[]),a=i.enter().append("line").attr("class","d2b-tooltip-marker-x d2b-tooltip-marker"),o=t.svgContainer.selectAll(".d2b-tooltip-marker-y").data(t.trackY?[n]:[]),u=o.enter().append("line").attr("class","d2b-tooltip-marker-y d2b-tooltip-marker"),s=t.htmlContainer.selectAll(".d2b-tooltip").data([n]),l=s.enter().append("div").attr("class","d2b-tooltip d2b-tooltip-axis");l.merge(s).call(c),o.merge(u).call(c),i.merge(a).call(c),l.append("div").attr("class","d2b-tooltip-title"),l.append("div").attr("class","d2b-tooltip-content"),t.dispatch.call("insert",t.tooltip,e,r)},l=function(){t.svgContainer.selectAll(".d2b-tooltip-marker-x").data([]).exit().call(u),t.svgContainer.selectAll(".d2b-tooltip-marker-y").data([]).exit().call(u),t.htmlContainer.selectAll(".d2b-tooltip").data([]).exit().call(u)},d=function(n,i){var u=t.svgContainer.selectAll(".d2b-tooltip-base").data([n]);u=u.merge(u.enter().append("rect").attr("class","d2b-tooltip-base"));var c=u.node().getBoundingClientRect();c={x:c.left,y:c.top};var f=o(c);if(!f.points.length)return l();s(),t.svgContainer.select(".d2b-tooltip-marker-x").call(e,f,"x"),t.svgContainer.select(".d2b-tooltip-marker-y").call(e,f,"y"),t.htmlContainer.select(".d2b-tooltip").call(a,f).call(r,f,c),t.dispatch.call("move",t.tooltip,n,i)},h=function(n,e){l(),t.dispatch.call("remove",t.tooltip,n,e)},p=function(t){return t+".d2b-tooltip-axis"},b=function(t,n){n&&n.on(p("mouseout"),null).on(p("mousemove"),null),t&&t.on(p("mouseout"),h).on(p("mousemove"),d)};f(n,t).addProp("htmlContainer",X.select("body")).addProp("svgContainer",null).addProp("tracker",X.select("body"),null,b).addProp("size",{height:0,width:0}).addProp("trackX",!0).addProp("trackY",!1).addProp("threshold",1/0).addMethod("clear",function(t,e){return 0===arguments.length?v={}:1===arguments.length?delete v[t]:arguments.length>=2&&delete v[t][e],n}).addPropFunctor("title",null).addPropFunctor("x",function(t){return t.x}).addPropFunctor("y",function(t){return t.y}).addPropFunctor("color",null).addPropFunctor("row",null).addDispatcher(["move","insert","remove"]);var v={};return n.graph=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=v[t]=v[t]||{},r=e[n];if(!r){r=e[n]={interface:{},config:{}};f(r.interface,r.config).addProp("data",[]).addMethod("clear",function(){return r.config.data=[],r.interface}).addMethod("addPoint",function(t){return r.config.data.push(t),r.interface}).addPropFunctor("x",null).addPropFunctor("y",null).addPropFunctor("color",null).addPropFunctor("row",null)}return r.interface},n}function p(){var t={},n=function(n){var e=this,r=n;n=n.map(t.values);var i=[],a=n.map(function(n){var r={};return n.forEach(function(n,a){var o=t.x.call(e,n,a);i.push(o),r[o]=t.y.call(e,n,a)}),r});i=X.set(i).values();var o=i.reduce(function(t,n,e){return t[n]=e,t},{}),u=X.range(0,n.length),c=i.map(function(t){return a.map(function(n){return n[t]||0})});t.stack.keys(u).value(function(t,n){return t[n]||0});var s=t.stack(c);return n.forEach(function(n,r){n.forEach(function(n,i){var a=t.x.call(e,n,i),u=s[r][o[a]];t.out.call(e,n,u[0],u[1],a)})}),r};return f(n,t).addProp("stack",X.stack()).addPropFunctor("values",function(t){return t}).addPropFunctor("x",function(t){return t.x}).addPropFunctor("y",function(t){return t.y}).addProp("out",function(t,n,e){t.y0=n,t.y1=e}),n}function b(){var t={},n=function n(e){var r=e.selection?e.selection():e,i=r.selectAll(".d2b-breadcrumbs").data(function(t){return[t]}),a=i.enter().append("div").attr("class","d2b-breadcrumbs");i=i.merge(a).classed("d2b-vertical",t.vertical);var o=i.selectAll(".d2b-breadcrumb").data(t.values,t.key),u=o.exit(),c=o.enter().append("div").attr("class","d2b-breadcrumb").style("opacity",0);return c.append("div").attr("class","d2b-breadcrumb-icon"),c.append("div").attr("class","d2b-breadcrumb-content"),o=o.merge(c).order(),o.select(".d2b-breadcrumb-content").html(t.html),e!==r&&(o=o.transition(e),u=u.transition(e).style("opacity",0)),o.style("border-color",t.color).style("opacity",1).select(".d2b-breadcrumb-icon").style("background-color",t.color),u.remove(),r.dispatch("breadcrumbs-updated",{bubbles:!0}),n};return f(n,t).addPropFunctor("values",function(t){return t}).addPropFunctor("key",function(t,n){return n}).addPropFunctor("color","blue").addPropFunctor("html",function(t){return t.html}).addPropFunctor("vertical",!0),n}function v(){var t={},n=X.symbol().size(80),e=function e(r){var i=r.selection?r.selection():r,a=i.selectAll(".d2b-legend").data(function(t){return[t]}),o=a.enter().append("div").attr("class","d2b-legend");a=a.merge(o).classed("d2b-vertical",t.vertical);var u=a.selectAll(".d2b-legend-item").data(t.values,t.key),c=u.exit(),s=u.enter().append("div").attr("class","d2b-legend-item").style("opacity",0);s.append("div").attr("class","d2b-legend-icon"),s.append("div").attr("class","d2b-legend-content"),u=u.merge(s).order(),u.select(".d2b-legend-content").html(t.html),r!==i&&(u=u.transition(r),c=c.transition(r).style("opacity",0)),u.style("opacity",1).each(function(e,r){var i=X.select(this),a=t.color(e,r),o=t.empty(e,r);i.style("border-color",a);var u=t.icon(e,r),c=i.select(".d2b-legend-icon"),s=[],l=[],f=c.node().getBoundingClientRect(),d={width:f.width,height:f.height},h={x:d.width/2,y:d.height/2};"string"==typeof u?s.push(u):l.push(u);var p=c.selectAll(".d2b-legend-svg-icon").data(function(t){return[t]}),b=p.enter().append("svg");b.attr("class","d2b-legend-svg-icon").attr("width",d.width).attr("height",d.height),p=p.merge(b);var v=p.selectAll("text").data(s),y=v.enter().append("text");v.exit().remove(),y.append("tspan"),v=v.merge(y),v.style("stroke",a).style("fill",o?"white":a).attr("transform","translate("+h.x+","+1.65*h.y+")").select("tspan").text(function(t){return t});var g=p.selectAll("path").data(l);g.exit().remove(),g=g.merge(g.enter().append("path")),g.style("stroke",a).style("fill",o?"white":a).attr("d",function(t){return n.type(t)()}).attr("transform","translate("+h.x+","+h.y+")")}),a.each(function(n,r){var a=t.allowEmptied(n,r),o=X.select(this).selectAll(".d2b-legend-item"),u=function(n){o.each(function(e,r){t.setEmpty(e,r,n)})},c=function(){var n=!0;return o.each(function(e,r){t.empty(e,r)||(n=!1)}),n},s=function(n,r){t.setEmpty(n,r,!t.empty(n,r)),!a&&c()&&u(!1),i.call(e),X.select(this.parentNode).dispatch("change",{bubbles:!0})},l=function(n,r){u(!0),t.setEmpty(n,r,!1),i.call(e),X.select(this.parentNode).dispatch("change",{bubbles:!0})};o.each(function(n,e){var r=t.clickable(n,e),i=t.dblclickable(n,e);X.select(this).on("click",r?s:null).on("dblclick",i?l:null)})}),i.dispatch("legend-updated",{bubbles:!0}),c.remove()};return f(e,t).addPropFunctor("values",function(t){return t}).addPropFunctor("key",function(t,n){return n}).addPropFunctor("color",function(t){return Q(t.html)}).addPropFunctor("html",function(t){return t.html}).addPropFunctor("icon","").addPropFunctor("vertical",!1).addPropFunctor("allowEmptied",!1).addPropFunctor("clickable",!1).addPropFunctor("dblclickable",!1).addPropFunctor("empty",function(t){return t.empty}).addPropFunctor("setEmpty",function(t,n,e){return t.empty=e}),e}function y(){function t(t){var n={top:0,left:0,right:0,bottom:0};return"number"==typeof t?{top:t,left:t,right:t,bottom:t}:(["top","bottm","right","left"].forEach(function(n){t[n]&&t[n]}),n)}function n(t,n){return{width:t&&t.width>0?t.width:n.width,height:t&&t.height>0?t.height:n.height}}function e(t,n,e){e(t),e(n)}function r(t,n,r,i,a,o){var u=t.node();if(u){r.style("top","").style("left","").style("right","").style("bottom","").style("width","").style("height","");var c=void 0;"right"===i||"left"===i?(t.classed("d2b-vertical",!0),c=u.getBoundingClientRect(),e(n,r,function(t){t.style(i,a[i]+"px").style("top",a.top+"px").style("height",o.height+"px")}),a[i]+=c.width,o.width-=c.width):"top"===i||"bottom"===i?(t.classed("d2b-vertical",!1),c=u.getBoundingClientRect(),e(n,r,function(t){t.style(i,a[i]+"px").style("left",a.left+"px").style("width",o.width+"px")}),a[i]+=c.height,o.height-=c.height):t.classed("d2b-vertical",!1)}}var i={},a=function a(o){var u=o.selection?o.selection():o,c=u.selectAll(".d2b-chart-frame").data(function(t){return[t]}),s=c.enter().append("div").attr("class","d2b-chart-frame");return c=c.merge(s),u.each(function(a){var c=X.select(this).select(".d2b-chart-frame"),s=c,l=t(i.padding(a)),f=t(i.chartPadding(a)),d=n(i.size(a),this.getBoundingClientRect());e(c,s,function(t){t.style("width",d.width+"px").style("height",d.height+"px")}),d.width-=l.left+l.right,d.height-=l.top+l.bottom;var h=i.legendEnabled(a)?[a]:[],p=c.selectAll(".d2b-legend-frame").data(h),b=p.enter().append("div").attr("class","d2b-legend-frame");p.exit().remove(),b.append("div").attr("class","d2b-legend-container"),p=p.merge(b);var v=p,y=i.breadcrumbsEnabled(a)?[a]:[],g=c.selectAll(".d2b-breadcrumbs-frame").data(y),_=g.enter().append("div").attr("class","d2b-breadcrumbs-frame");g.exit().remove(),_.append("div").attr("class","d2b-breadcrumbs-container"),g=g.merge(_);var x=g,m=c.selectAll(".d2b-chart").data(function(t){return[t]}),w=m.enter().append("svg").attr("class","d2b-chart");w.append("g").attr("class","d2b-chart-container"),m=m.merge(w);var j=m;o!==u&&(s=s.transition(o),v=v.transition(o),x=x.transition(o),j=j.transition(o)),r(g,_,x,i.breadcrumbsOrient(a),l,d),r(p,b,v,i.legendOrient(a),l,d),e(w,j,function(t){t.style("left",l.left+"px").style("top",l.top+"px").style("width",d.width+"px").style("height",d.height+"px"),t.select(".d2b-chart-container").attr("transform","translate("+[f.left,f.top]+")")}),d.width-=f.left+f.right,d.height-=f.top+f.bottom,m.select(".d2b-chart-container").node().__size__=d}),u.dispatch("chart-frame-updated",{bubbles:!0}),a};return f(a,i).addPropFunctor("size",null).addPropFunctor("legendEnabled",!0).addPropFunctor("legendOrient","bottom").addPropFunctor("breadcrumbsEnabled",!1).addPropFunctor("breadcrumbsOrient","right").addPropFunctor("chartPadding",10).addPropFunctor("padding",10),a}function g(t,n){var e={};for(var r in t)"function"!=typeof t[r]&&n.indexOf(r)<0&&(e[r]=t[r]);return e}function _(t,n,e){var i=0,a=0;if(e=r(e||1),n=r(n||function(t){return t}),t.filter(function(t){return!isNaN(K(e(t)))&&!isNaN(K(n(t)))}).forEach(function(t){var r=e(t),o=n(t);i+=r,a+=o*r}),t.length&&i)return a/i}function x(t,n,e){e=r(e||1),n=r(n||function(t){return t});var i,a=[],o=t.filter(function(t){return 0!==e(t)&&!isNaN(K(e(t)))&&!isNaN(K(n(t)))}).sort(function(t,e){return X.ascending(n(t),n(e))});i=Math.round(X.sum(o,function(t){return e(t)})/2*1e12)/1e12;var u=0,c=!1;if(o.forEach(function(t){c&&(a.push(n(t)),c=!1),u+=e(t),u===i&&(a.push(n(t)),c=!0),u>i&&0===a.length&&a.push(n(t))}),t.length)return _(a)}function m(t,n,e){e=r(e||1),n=r(n||function(t){return t});var i=[],a=0,o={};return t.forEach(function(t){var r=K(n(t));isNaN(n(t))||(o[r]=o[r]||0,o[r]+=e(t),o[r]>a?(a=o[n(t)],i=[n(t)]):o[n(t)]==a&&i.push(n(t)))}),a<=1||!i.length?null:1===i.length?i[0]:i}function w(t,n){n=r(n||function(t){return t});var e=X.extent(t,n);if(t.length)return e[1]-e[0]}function j(t,n){if(n=r(n||function(t){return t}),t.length)return X.mean(X.extent(t,n))}function O(t){return t*(180/Math.PI)}function k(t){return t*(Math.PI/180)}function M(){function t(t,n){return o.empty.call(this,t,n)?0:1}function n(t,n){var e=o.size.call(this,t,n),r=o.empty.call(this,t,n);return c.size(r?e:2.5*e).call(this,t,n)}function e(t,n){var e=o.size.call(this,t,n),r=o.empty.call(this,t,n);return c.size(r?e/3:e).call(this,t,n)}function r(t,n){var e=o.size.call(this,t,n);return c.size(e).call(this,t,n)}function i(t,r){var i=o.empty.call(this,t,r);X.select(this).select("path.d2b-point-back").transition().duration(100).attr("d",n),X.select(this).select("path.d2b-point-front").transition().duration(100).style("opacity",i?.5:1).attr("d",e)}function a(t,n){var i=o.empty.call(this,t,n);X.select(this).select("path.d2b-point-back").transition().duration(100).attr("d",r),X.select(this).select("path.d2b-point-front").transition().duration(100).style("opacity",i?0:1).attr("d",e)}var o={},u=function n(u){var c=u.selection?u.selection():u,s=c.selectAll("path.d2b-point-back").data(function(t){return[t]});s.enter().append("path").attr("class","d2b-point-back").attr("d",r).style("fill-opacity",0).style("stroke",o.stroke).style("stroke-width",o.strokeWidth),u!==c&&(s=s.transition(u)),s.attr("d",r).style("stroke",o.stroke).style("stroke-width",o.strokeWidth);var l=c.selectAll("path.d2b-point-front").data(function(t){return[t]});return l.enter().append("path").attr("class","d2b-point-front").attr("d",e).style("opacity",t).style("fill",o.fill).style("stroke",o.stroke).style("stroke-width",o.strokeWidth),u!==c&&(l=l.transition(u)),l.attr("d",e).style("opacity",t).style("fill",o.fill).style("stroke",o.stroke).style("stroke-width",o.strokeWidth),c.each(function(t,n){var e=o.active.call(this,t,n);X.select(this).on("mouseover.d2b-point",e?i:null).on("mouseout.d2b-point",e?a:null)}),c.dispatch("point-updated",{bubbles:!0}),n},c=X.symbol();return f(u,o).addPropFunctor("size",150,null,function(t){return c.size(t)}).addPropFunctor("type",X.symbolCircle,null,function(t){return c.type(t)}).addPropFunctor("active",!1).addPropFunctor("empty",!1).addPropFunctor("fill","steelblue").addPropFunctor("stroke",function(t,n){return X.rgb(o.fill.call(this,t,n)).darker(.3)}).addPropFunctor("strokeWidth","1px"),u}function P(){function t(t,r,i){var a=n(t,r,i),o=e(t,r,i);return a?{startAngle:a.endAngle,endAngle:a.endAngle}:o?{startAngle:o.startAngle,endAngle:o.startAngle}:{startAngle:0,endAngle:0}}function n(t,n,e){for(var i=n.length;--t>=0;)for(var a=r.key(e[t].data,t),o=0;o<i;++o)if(r.key(n[o].data,o)===a)return n[o]}function e(t,n,e){for(var i=e.length,a=n.length;++t<i;)for(var o=r.key(e[t].data,t),u=0;u<a;++u)if(r.key(n[u].data,u)===o)return n[u]}var r={},i=function n(e){var i=e.selection?e.selection():e;r.pie.value(r.value),r.arc.startAngle(function(t){return t.startAngle}).endAngle(function(t){return t.endAngle}).padAngle(function(t){return t.padAngle});var a=i.selectAll(".d2b-pie").data(function(t){return[r.pie(r.values(t))]}),o=a.enter().append("g").attr("class","d2b-pie");return a=a.merge(o),a.each(function(n){var a=X.select(this),o=a.selectAll(".d2b-pie-arc"),c=o.data();o=o.data(n,function(t,n){return t.key=r.key(t.data,n),t.key});var s=o.enter().append("g").attr("class","d2b-pie-arc"),l=o.exit(),f=o.merge(s).order();s.append("path").attr("fill",function(t,n){return r.color.call(this,t.data,n)});var d=f.data();s.select("path").each(function(n,e){this.current=t(e,c,d)}),l.datum(function(n,e){var r=t(e,d,c);return r.data=n.data,r.innerRadius=n.innerRadius,r.outerRadius=n.outerRadius,r}),e!==i&&(l=l.transition(e),f=f.transition(e)),f.select("path").call(u,r.arc).attr("fill",function(t,n){return r.color.call(this,t.data,n)}),l.remove().select("path").call(u,r.arc)}),i.dispatch("svg-pie-updated",{bubbles:!0}),n};return f(i,r).addProp("arc",X.arc()).addProp("pie",X.pie().sort(null)).addPropFunctor("values",function(t){return t}).addPropFunctor("key",function(t){return t.label}).addPropFunctor("value",function(t){return t.value}).addPropFunctor("color",function(t){return Q(t.label)}),i}function A(t){return!(t.indexOf("NaN")>-1||t.indexOf("Inifnity")>-1)}function T(t){if(null==t||"object"!=(void 0===t?"undefined":rt(t)))return t;var n=t.constructor();for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return n}function N(){function t(t,e){var r=n.graphs(t,e).map(function(t,e){var r={data:t,index:e,align:n.align(t,e),tooltipGraph:n.tooltipGraph(t,e),shift:n.shift(t,e),stackBy:n.stackBy(t,e),key:n.key(t,e),color:n.color(t,e)};return r.values=n.values(t,e).map(function(t,e){var i={data:t,index:e,graph:r,key:n.pkey(t,e),x:n.px(t,e),y:n.py(t,e),color:n.pcolor(t,e)||r.color,annotation:n.pannotation(t,e)};return i.y1=i.y,i.y0=0,i}),r});return a.entries(r).forEach(function(t){t.values.length>1&&i(t.values)}),r}var n={},e=function e(i){var a=i.selection?i.selection():i,o=a.selectAll(".d2b-line-graphs").data(function(t){return[t]});o=o.merge(o.enter().append("g").attr("class","d2b-line-graphs"));var u=o.selectAll(".d2b-line-graph").data(function(n,e){return t(n,e)},function(t){return t.key}),c=u.enter().append("g").attr("class","d2b-line-graph d2b-graph").style("opacity",0);c.append("path").attr("class","d2b-line").style("stroke",function(t){return t.color}).attr("d",function(t){var e=this.parentNode.parentNode,i=e.__scaleX,a=e.__scaleY;return r.call(this,t,i||n.x,a||n.y)});var s=u.merge(c).order(),l=u.exit(),f=s.select(".d2b-line");if(i!==a){s=s.transition(i),l=l.transition(i),f=f.transition(i);var d=l.style("opacity",0).select(".d2b-line"),h=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=X.max(t.values,function(t){return t.x}),a=X.min(t.values,function(t){return t.x});return H.interpolatePath(this.getAttribute("d"),r.call(this,t,n.x,n.y,e),function(t){return t.x==i||t.x==a})};void 0===H.interpolatePath?(d.attr("d",function(t){return r.call(this,t,n.x,n.y)}),f.attr("d",function(t){return r.call(this,t,n.x,n.y,!0)})):(d.attrTween("d",function(t){return h.call(this,t)}),f.attrTween("d",function(t){return h.call(this,t,!0)}))}else f.attr("d",function(t){return r.call(this,t,n.x,n.y,!0)});s.style("opacity",1),s.each(function(t){var e=this.parentNode,r=X.select(this),o=t.align,u=e.__scaleX||n.x,c=e.__scaleY||n.y,s=t.values.filter(function(t){return t.annotation}),l=r.selectAll(".d2b-line-annotation-group").data(s,function(t){return t.key}),f=l.enter().append("g");f.attr("class","d2b-line-annotation-group").attr("transform",function(n){return"translate("+(u(n.x)+t.shift)+", "+c(n[o])+")"});var d=l.merge(f),h=l.exit();i!==a&&(d=d.transition(i),h=h.transition(i)),d.style("opacity",1).attr("transform",function(e){return"translate("+(n.x(e.x)+t.shift)+", "+n.y(e[o])+")"}).call(at,n.annotation,"d2b-line-annotation"),h.attr("transform",function(e){return e=t.values.filter(function(t){return e.key===t.key})[0]||e,"translate("+(n.x(e.x)+t.shift)+", "+n.y(e[o])+")"}).style("opacity",0).remove()}),l.remove().selectAll(".d2b-line-annotation-group").attr("transform",function(t){return"translate("+(n.x(t.x)+t.graph.shift)+", "+n.y(t[t.graph.align])+")"}),f.style("stroke",function(t){return t.color});var p=n.x.copy(),b=n.y.copy();return o.each(function(){this.__scaleX=p,this.__scaleY=b}),a.dispatch("svg-line-updated",{bubbles:!0}),e},r=function(t,e,r){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=t.shift;null===a&&(a=e.bandwidth?e.bandwidth()/2:0),t.tooltipGraph&&i&&t.tooltipGraph.data(t.values).x(function(t){return e(t.x)+a}).y(function(n){return r(n[t.align])}).color(function(t){return t.color}),n.line.x(function(t){return e(t.x)+a}).y(function(n){return r(n[t.align])});var o=n.line(t.values);return A(o)?o:this.getAttribute("d")},i=p().values(function(t){return t.values}).y(function(t){return t.y}).x(function(t){return t.x}),a=X.nest().key(function(t){var n=t.stackBy;return!1!==n&&null!==n?n:Z()});return f(e,n).addProp("line",X.line()).addProp("stack",i.stack(),null,function(t){return i.stack(t)}).addProp("x",X.scaleLinear()).addProp("y",X.scaleLinear()).addProp("annotation",G.annotation?G.annotation():null).addPropGet("type","line").addPropFunctor("graphs",function(t){return t}).addPropFunctor("align","y1").addPropFunctor("tooltipGraph",function(t){return t.tooltipGraph}).addPropFunctor("shift",null).addPropFunctor("stackBy",null).addPropFunctor("key",function(t){return t.label}).addPropFunctor("values",function(t){return t.values}).addPropFunctor("color",function(t){return Q(t.label)}).addPropFunctor("px",function(t){return t.x}).addPropFunctor("py",function(t){return t.y}).addPropFunctor("pcolor",null).addPropFunctor("pkey",function(t,n){return n}).addPropFunctor("pannotation",function(t){return t.annotation}).addMethod("getComputedGraphs",function(n){return(n.selection?n.selection():n).data().map(function(n,e){return t(n,e)})}).addMethod("getVisiblePoints",function(t){return e.getComputedGraphs(t).map(function(t){return[].concat.apply([],t.map(function(t){return t.values.map(function(n){return{x:n.x,y:n[t.align],graph:t}})}))})[0]}),e}function E(){function t(t,e){var r=n.graphs(t,e).map(function(t,e){var r={data:t,index:e,tooltipGraph:n.tooltipGraph(t,e),shift:n.shift(t,e),stackBy:n.stackBy(t,e),key:n.key(t,e),color:n.color(t,e)};return r.values=n.values(t,e).map(function(t,e){var a={data:t,index:e,graph:r,key:n.pkey(t,e),x:n.px(t,e),y:n.py(t,e),y0:n.py0(t,e),color:n.pcolor(t,e)||r.color,annotations:n.pannotations(t,e)};return a.y1=a.y,a.y0=i(a.y0,0),a}),r});return o.entries(r).forEach(function(t){t.values.length>1&&a(t.values)}),r}var n={},e=function e(i){var a=i.selection?i.selection():i,o=a.selectAll(".d2b-area-graphs").data(function(t){return[t]});o=o.merge(o.enter().append("g").attr("class","d2b-area-graphs"));var u=o.selectAll(".d2b-area-graph").data(function(n,e){return t(n,e)},function(t){return t.key}),c=u.enter().append("g").attr("class","d2b-area-graph d2b-graph").style("opacity",0);c.append("path").attr("class","d2b-area").style("fill",function(t){return t.color}).attr("d",function(t){var e=this.parentNode.parentNode,i=e.__scaleX,a=e.__scaleY;return r.call(this,t,i||n.x,a||n.y)});var s=u.merge(c).order(),l=u.exit(),f=s.select(".d2b-area");if(i!==a){s=s.transition(i),l=l.transition(i),f=f.transition(i);var d=l.style("opacity",0).select(".d2b-area"),h=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=X.max(t.values,function(t){return t.x}),a=X.min(t.values,function(t){return t.x});return H.interpolatePath(this.getAttribute("d"),r.call(this,t,n.x,n.y,e),function(t){return t.x==i||t.x==a})};void 0===H.interpolatePath?(d.attr("d",function(t){return r.call(this,t,n.x,n.y)}),f.attr("d",function(t){return r.call(this,t,n.x,n.y,!0)})):(d.attrTween("d",function(t){return h.call(this,t)}),f.attrTween("d",function(t){return h.call(this,t,!0)}))}else f.attr("d",function(t){return r.call(this,t,n.x,n.y,!0)});s.style("opacity",1),s.each(function(t){var e=this.parentNode,r=X.select(this),o=e.__scaleX||n.x,u=e.__scaleY||n.y;["y0","y1"].forEach(function(e){var c=t.values.filter(function(t){return(t.annotations||[]).filter(function(t){return t.location===e}).length}),s=r.selectAll(".d2b-area-annotation-group-"+e).data(c,function(t){return t.key}),l=s.enter().append("g");l.attr("class","d2b-area-annotation-group-"+e).attr("transform",function(n){return"translate("+(o(n.x)+t.shift)+", "+u(n[e])+")"});var f=s.merge(l),d=s.exit();i!==a&&(f=f.transition(i),d=d.transition(i)),f.style("opacity",1).attr("transform",function(r){return"translate("+(n.x(r.x)+t.shift)+", "+n.y(r[e])+")"}).call(at,n.annotation,"d2b-area-annotation",function(t){return t.annotations.filter(function(t){return t.location===e})}),d.attr("transform",function(r){return r=t.values.filter(function(t){return r.key===t.key})[0]||r,"translate("+(n.x(r.x)+t.shift)+", "+n.y(r[e])+")"}).style("opacity",0).remove()})}),l.remove(),l.selectAll(".d2b-area-annotation-group-y0").attr("transform",function(t){return"translate("+(n.x(t.x)+t.graph.shift)+", "+n.y(t.y0)+")"}),l.selectAll(".d2b-area-annotation-group-y1").attr("transform",function(t){return"translate("+(n.x(t.x)+t.graph.shift)+", "+n.y(t.y1)+")"}),f.style("fill",function(t){return t.color});var p=n.x.copy(),b=n.y.copy();return o.each(function(){this.__scaleX=p,this.__scaleY=b}),a.dispatch("svg-area-updated",{bubbles:!0}),e},r=function(t,e,r){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=t.shift;null===a&&(a=e.bandwidth?e.bandwidth()/2:0),t.tooltipGraph&&i&&t.tooltipGraph.data(t.values).x(function(t){return e(t.x)+a}).y(function(t){return r(t.y1)}).color(function(t){return t.color}),n.area.x(function(t){return e(t.x)+a}).y0(function(t){return r(t.y0)}).y1(function(t){return r(t.y1)});var o=n.area(t.values);return A(o)?o:this.getAttribute("d")},a=p().values(function(t){return t.values}).y(function(t){return t.y}).x(function(t){return t.x}),o=X.nest().key(function(t){var n=t.stackBy;return!1!==n&&null!==n?n:Z()});return f(e,n).addProp("area",X.area()).addProp("stack",a.stack(),null,function(t){return a.stack(t)}).addProp("x",X.scaleLinear()).addProp("y",X.scaleLinear()).addProp("annotation",G.annotation?G.annotation():null).addPropGet("type","area").addPropFunctor("graphs",function(t){return t}).addPropFunctor("tooltipGraph",function(t){return t.tooltipGraph}).addPropFunctor("shift",null).addPropFunctor("stackBy",null).addPropFunctor("key",function(t){return t.label}).addPropFunctor("values",function(t){return t.values}).addPropFunctor("color",function(t){return Q(t.label)}).addPropFunctor("px",function(t){return t.x}).addPropFunctor("py",function(t){return t.y}).addPropFunctor("py0",function(t){return t.y0}).addPropFunctor("pcolor",null).addPropFunctor("pkey",function(t,n){return n}).addPropFunctor("pannotations",function(t){return t.annotations}).addMethod("getComputedGraphs",function(n){return(n.selection?n.selection():n).data().map(function(n,e){return t(n,e)})}).addMethod("getVisiblePoints",function(t){return e.getComputedGraphs(t).map(function(t){var n=[].concat.apply([],t.map(function(t){return t.values.map(function(n){return{x:n.x,y:n.y0,graph:t}})})),e=[].concat.apply([],t.map(function(t){return t.values.map(function(n){return{x:n.x,y:n.y1,graph:t}})}));return n.concat(e)})[0]}),e}function S(){function t(t,n){var r=e.graphs(t,n).map(function(t,n){var r={data:t,index:n,align:e.align(t,n),tooltipGraph:e.tooltipGraph(t,n),shift:e.shift(t,n),stackBy:e.stackBy(t,n),key:e.key(t,n),color:e.color(t,n),symbol:e.symbol(t,n)};return r.values=e.values(t,n).map(function(t,n){var i={data:t,index:n,graph:r,x:e.px(t,n),y:e.py(t,n),color:e.pcolor(t,n)||r.color,symbol:e.psymbol(t,n)||r.symbol,key:e.pkey(t,n),size:e.psize(t,n),annotation:e.pannotation(t,n)};return i.y1=i.y,i.y0=0,i}),r});return a.entries(r).forEach(function(t){t.values.length>1&&i(t.values)}),r}function n(t,n,e,r,i){t.attr("transform",function(t){var a=e(t[i]),o=n(t.x)+r;return isFinite(o)&&isFinite(a)?"translate("+[o,a]+")":this.getAttribute("transform")})}var e={},r=function r(i){var a=i.selection?i.selection():i,o=a.selectAll(".d2b-scatter-graphs").data(function(t){return[t]});o=o.merge(o.enter().append("g").attr("class","d2b-scatter-graphs"));var u=o.selectAll(".d2b-scatter-graph").data(function(n,e){return t(n,e)},function(t){return t.key}),c=u.enter().append("g").attr("class","d2b-scatter-graph d2b-graph").style("opacity",0),s=u.merge(c).order(),l=u.exit();return i!==a&&(s=s.transition(i),l=l.transition(i),l.style("opacity",0).each(function(t){var r=X.select(this),o=e.x,u=e.y,c=r.selectAll(".d2b-scatter-point");i!==a&&(c=c.transition(i));var s=t.shift;null===s&&(s=o.bandwidth?o.bandwidth()/2:0),c.style("opacity",0).call(n,o,u,s,t.align).remove()})),s.style("opacity",1),l.remove(),s.each(function(t){var r=X.select(this),o=e.x,u=e.y,c=this.parentNode,s=c.__scaleX||o,l=c.__scaleY||u,f=t.shift;null===f&&(f=o.bandwidth?o.bandwidth()/2:0);var d=f;null===d&&(f=s.bandwidth?s.bandwidth()/2:0),t.tooltipGraph&&t.tooltipGraph.data(t.values).x(function(t){return o(t.x)+f}).y(function(t){return u(t.y)}).color(function(t){return t.color}),e.point.fill(function(t){return t.color}).type(function(t){return t.symbol}).size(function(t){return t.size});var h=r.selectAll(".d2b-scatter-point").data(t.values,function(t){return t.key}),p=h.enter().append("g").attr("class","d2b-scatter-point"),b=h.merge(p).order(),v=h.exit();i!==a&&(b=b.transition(i),v=v.transition(i)),s.bandwidth||l.bandwidth||o.bandwidth||u.bandwidth?p.call(n,o,u,f,t.align):p.call(n,s,l,d,t.align),p.style("opacity",0),b.style("opacity",1).call(e.point).call(n,o,u,f,t.align),v.style("opacity",0).call(n,o,u,f,t.align).remove(),at(b,e.annotation,"d2b-scatter-annotation")}),o.each(function(){this.__scaleX=e.x.copy(),this.__scaleY=e.y.copy()}),a.dispatch("svg-scatter-updated",{bubbles:!0}),r},i=p().values(function(t){return t.values}).y(function(t){return t.y}).x(function(t){return t.x}),a=X.nest().key(function(t){var n=t.stackBy;return!1!==n&&null!==n?n:Z()});return f(r,e).addProp("point",M().active(!0)).addProp("stack",i.stack(),null,function(t){return i.stack(t)}).addProp("x",X.scaleLinear()).addProp("y",X.scaleLinear()).addProp("annotation",G.annotation?G.annotation():null).addPropGet("type","scatter").addPropFunctor("graphs",function(t){return t}).addPropFunctor("align","y1").addPropFunctor("tooltipGraph",function(t){return t.tooltipGraph}).addPropFunctor("shift",null).addPropFunctor("stackBy",null).addPropFunctor("key",function(t){return t.label}).addPropFunctor("values",function(t){return t.values}).addPropFunctor("color",function(t){return Q(t.label)}).addPropFunctor("symbol",function(){return X.symbolCircle}).addPropFunctor("px",function(t){return t.x}).addPropFunctor("py",function(t){return t.y}).addPropFunctor("pcolor",null).addPropFunctor("psymbol",null).addPropFunctor("pkey",function(t,n){return n}).addPropFunctor("psize",25).addPropFunctor("pannotation",function(t){return t.annotation}).addMethod("getComputedGraphs",function(n){return(n.selection?n.selection():n).data().map(function(n,e){return t(n,e)})}).addMethod("getVisiblePoints",function(t){return r.getComputedGraphs(t).map(function(t){return[].concat.apply([],t.map(function(t){return t.values.map(function(n){return{x:n.x,y:n[t.align],graph:t}})}))})[0]}),r}function C(){function t(t){return"horizontal"===t?{rotate:!0,px:"py",py:"px",x:"y",y:"x",w:"height",h:"width"}:{rotate:!1,px:"px",py:"py",x:"x",y:"y",w:"width",h:"height"}}function n(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t(d.orient(n,r)),a=d.graphs(n,r).map(function(t,n){var e={data:t,index:n,tooltipGraph:d.tooltipGraph(t,n),shift:d.shift(t,n),stackBy:d.stackBy(t,n),key:d.key(t,n),color:d.color(t,n)};return e.values=d.values(t,n).map(function(t,n){return{data:t,index:n,graph:e,key:d.pkey(t,n),x:d.px(t,n),y:d.py(t,n),centered:d.pcentered(t,n),color:d.pcolor(t,n)||e.color,annotation:d.pannotation(t,n)}}),e});return b.x(function(t){return t[i.x]}).y(function(t){return t[i.y]}),v.entries(a).forEach(function(t,n){return b.out(e(n))(t.values)}),l(a,d.baseline(n,r)),a}function e(t){var n={};return function(e,r,i,a){var o=n[a]=n[a]||[0,0];e.dy=i-r,e.stackIndex=t,e.base=a,e.dy>0?e.extent=[o[0],o[0]+=e.dy]:e.extent=[o[1],o[1]+=e.dy]}}function r(t,n){t.style("opacity",n.opacity).call(a,n).select("rect").attr("fill",function(t){return t.color}).attr(n.orientMap.w,n.width).attr(n.orientMap.h,n.height),t.select(".d2b-bar-annotation-group").call(o,n).call(at,d.annotation,"d2b-bar-annotation")}function a(t,n){t.attr("transform",function(t){return"translate("+[n[n.orientMap.x](t),n[n.orientMap.y](t)]+")"})}function o(t,n){t.attr("transform",function(t){var e={x:n.width/2,y:t.extent[0]<t.extent[1]?0:n.height(t)};return"translate("+[e[n.orientMap.x],e[n.orientMap.y]]+")"})}function u(t,n,e,r){return function(i,a){var o=i.centered?a-n/4:a-n/2+i.stackIndex*e+r;return t(i.base)+o}}function c(t){var n=function(n){return[t(n.extent[0]),t(n.extent[1])]};return n.sorted=function(t){return n(t).slice().sort(X.ascending)},n}function s(t,n,e){var r=[],i=1/0;n.forEach(function(n){var a=n.values,o=t.range();i=Math.min(i,Math.abs(o[1]-o[0])),a.forEach(function(n){r.push(t(n[e.x]))})}),r.sort(X.ascending);for(var a=0;a<r.length-1;a++)r[a+1]!==r[a]&&(i=Math.min(r[a+1]-r[a],i));return i===1/0?0:i}function l(t,n){if(null===n){var e=[].concat.apply([],t.map(function(t){return t.values})),r=X.extent(e.map(function(t){return t.extent[1]}));n=r[1]<0?r[1]:r[0]>0?r[0]:0}t.forEach(function(t){t.values.forEach(function(t){Math.abs(t.extent[0])<Math.abs(n)&&(t.extent[0]=n)})})}var d={},h=function e(a){var o=a.selection?a.selection():a,l={x:d.x,y:d.y};return o.each(function(e,f){var h=d.orient(e,f),p=t(h),b=n(e,f,p),y=l[p.x].copy(),g=l[p.y].copy(),_=d.padding(e,f),x=d.groupPadding(e,f),m=d.bandwidth(e,f);m=(1-_)*i(m||s(y,b,p));var w=v.entries(b),j=m/Math.max(1,w.length);x*=j;var O=u(y,m,j,x),k=c(g);j-=2*x;var M=X.select(this).selectAll(".d2b-bar-graphs").data(function(t){return[t]});M=M.merge(M.enter().append("g").attr("class","d2b-bar-graphs"));var P=M.node(),A=P.__scaleBase||O,T=P.__scaleY||g,N=P.__scaleX||y,E=P.__barWidth||j,S=M.selectAll(".d2b-bar-graph").data(b.slice().reverse(),function(t){return t.key}),C=S.enter().append("g").attr("class","d2b-bar-graph d2b-graph"),F=S.merge(C).order(),z=S.exit();a!==o&&(F=F.transition(a),z=z.transition(a),z.each(function(t){var n=t.shift;null===n&&(n=y.bandwidth?y.bandwidth()/2:0);var e=X.select(this).selectAll(".d2b-bar-group").transition(a);N.bandwidth||T.bandwidth||y.bandwidth||g.bandwidth?e.style("opacity",0):e.call(r,{opacity:0,x:function(t){return O(t,n)},y:function(){return g(0)},width:j,height:function(){return 0},graph:t,orientMap:p})})),z.remove(),F.each(function(t){var n=X.select(this),e=t.shift;null===e&&(e=y.bandwidth?y.bandwidth()/2:0);var i=n.selectAll(".d2b-bar-group").data(t.values,function(t){return t.key}),u=i.enter().append("g").attr("class","d2b-bar-group");u.append("rect"),u.append("g").attr("class","d2b-bar-annotation-group");var c=i.merge(u).order(),s=i.exit();t.tooltipGraph&&t.tooltipGraph.data(t.values)[p.x](function(t){return y(t.base)+e})[p.y](function(t){return k(t)[1]}).color(function(t){return t.color}),a!==o&&(c=c.transition(a),s=s.transition(a)),u.attr("class","d2b-bar-group"),s.remove(),N.bandwidth||T.bandwidth||y.bandwidth||g.bandwidth?(u.call(r,{opacity:0,x:function(t){return O(t,e)},y:function(){return g(0)},width:E,height:function(){return 0},graph:t,orientMap:p}),s.style("opacity",0)):(u.call(r,{opacity:0,x:function(t){return A(t,e)},y:function(){return T(0)},width:E,height:function(){return 0},graph:t,orientMap:p}),s.call(r,{opacity:0,x:function(t){return O(t,e)},y:function(){return g(0)},width:j,height:function(){return 0},graph:t,orientMap:p})),c.call(r,{opacity:1,x:function(t){return O(t,e)},y:function(t){return k.sorted(t)[0]},width:j,height:function(t){return k.sorted(t)[1]-k.sorted(t)[0]},graph:t,orientMap:p})}),P.__scaleY=g,P.__scaleX=y,P.__scaleBase=O,P.__barWidth=j}),o.dispatch("svg-bar-updated",{bubbles:!0}),e},b=p().values(function(t){return t.values}),v=X.nest().key(function(t){return t.stackBy});return f(h,d).addProp("x",X.scaleLinear()).addProp("y",X.scaleLinear()).addProp("annotation",G.annotation?G.annotation():null).addPropGet("type","bar").addPropFunctor("graphs",function(t){return t}).addPropFunctor("padding",.5).addPropFunctor("groupPadding",0).addPropFunctor("bandwidth",null).addPropFunctor("baseline",0).addPropFunctor("tooltipGraph",function(t){return t.tooltipGraph}).addPropFunctor("orient","vertical").addPropFunctor("shift",null).addPropFunctor("stackBy",function(t,n){return n}).addPropFunctor("key",function(t){return t.label}).addPropFunctor("values",function(t){return t.values},null).addPropFunctor("color",function(t){return Q(t.label)}).addPropFunctor("px",function(t){return t.x}).addPropFunctor("py",function(t){return t.y}).addPropFunctor("pcentered",!1).addPropFunctor("pcolor",null).addPropFunctor("pkey",function(t,n){return n}).addPropFunctor("pannotation",function(t){return t.annotation}).addMethod("getComputedGraphs",function(t){return(t.selection?t.selection():t).data().map(function(t,e){return n(t,e)})}).addMethod("getVisiblePoints",function(e){return(e.selection?e.selection():e).data().map(function(e,r){var i=d.orient(e,r),a=t(i),o=n(e,r,a),u=[].concat.apply([],o.map(function(t){return t.values.map(function(n){var e={};return e[""+a.x]=n.base,e[""+a.y]=n.extent[0],e.graph=t,e})})),c=[].concat.apply([],o.map(function(t){return t.values.map(function(n){var e={};return e[""+a.x]=n.base,e[""+a.y]=n.extent[1],e.graph=t,e})}));return u.concat(c)})[0]}),h}function F(){var t={},n=function n(e){var r=e.selection?e.selection():e,i=t.scale,a=t.enterScale||i,o=t.valueFormat,u="vertical"===t.orient,c=u?{x:"x",y:"y",x1:"x1",x2:"x2",y1:"y1",y2:"y2",width:"width",height:"height",cx:"cx",cy:"cy",translate:function(t,n){return"translate("+t+", "+n+")"}}:{x:"y",y:"x",x1:"y1",x2:"y2",y1:"x1",y2:"x2",width:"height",height:"width",cx:"cy",cy:"cx",translate:function(t,n){return"translate("+n+", "+t+")"}},s=r.selectAll(".d2b-box").data(function(n,e){n=t.data(n,e);var r=t.outliers(n,e)||[],i=t.minimum(n,e),a=t.maximum(n,e);return[{data:n,index:e,median:t.median(n,e),upperQuartile:t.upperQuartile(n,e),lowerQuartile:t.lowerQuartile(n,e),minimum:i,maximum:a,outliers:r,maxOutliers:r.filter(function(t){return t>a}),minOutliers:r.filter(function(t){return t<i}),color:t.color(n,e),width:t.width(n,e),annotations:t.annotations(n,e)}]}),l=s.enter().append("g").attr("class","d2b-box"),f=s.merge(l).order(),d=f.selectAll(".d2b-box-center").data(function(t){return[t]}),h=d.enter().append("line").attr(c.x1,0).attr(c.x2,0).attr(c.y1,function(t){return a(t.minimum)}).attr(c.y2,function(t){return a(t.maximum)}).attr("class","d2b-box-center"),p=d.merge(h),b=f.selectAll(".d2b-box-rect").data(function(t){return[t]}),v=b.enter().append("rect").attr("class","d2b-box-rect").attr(c.width,function(t){return t.width}).attr(c.height,function(t){return Math.abs(a(t.upperQuartile)-a(t.lowerQuartile))}).attr(c.x,function(t){return-t.width/2}).attr(c.y,function(t){return Math.min(a(t.upperQuartile),a(t.lowerQuartile))}),y=b.merge(v);return["max","min"].forEach(function(t){var n=f.selectAll(".d2b-box-"+t+"-outlier").data(function(n){return n[t+"Outliers"].map(function(t){return{outlier:t,box:n}})}),o=n.enter().append("circle").style("opacity",0).attr("r",function(t){return t.box.width/5}).attr(c.cx,0).attr(c.cy,function(t){return a(t.outlier)}).attr("class","d2b-box-outlier d2b-box-"+t+"-outlier"),u=n.merge(o),s=n.exit();e!==r&&(u=u.transition(e),s=s.transition(e)),u.style("opacity",1).attr("stroke",function(t){return t.box.color}).attr("r",function(t){return t.box.width/5}).attr(c.cx,0).attr(c.cy,function(t){return i(t.outlier)}),s.attr(c.cx,0).attr(c.cy,function(t){return i(t.outlier)}).style("opacity",0).remove()}),["maximum","median","minimum"].forEach(function(t){var n=f.selectAll(".d2b-box-dash-"+t).data(function(t){return[t]}),o=n.enter().append("line").attr("class","d2b-box-dash d2b-box-dash-"+t).attr(c.x1,function(t){return-t.width/2}).attr(c.x2,function(t){return t.width/2}).attr(c.y1,function(n){return a(n[t])}).attr(c.y2,function(n){return a(n[t])}),u=n.merge(o);e!==r&&(u=u.transition(e)),u.attr("stroke",function(t){return t.color}).attr(c.x1,function(t){return-t.width/2}).attr(c.x2,function(t){return t.width/2}).attr(c.y1,function(n){return i(n[t])}).attr(c.y2,function(n){return i(n[t])})}),["maximum","upperQuartile","median","lowerQuartile","minimum"].forEach(function(n,s){var l=f.selectAll(".d2b-box-label-group-"+n).data(function(t){return[t]}),d=l.enter().append("g").attr("class","d2b-box-label-group d2b-box-label-group-"+n).attr("transform",function(t){return c.translate(0,a(t[n]))});d.append("text").attr("class","d2b-box-label").attr(c.x,function(t){return(3+t.width/2)*(s%2==0?1:-1)}).style("text-anchor",s%2==0?"start":"end");var h=l.merge(d);e!==r&&(h=h.transition(e)),h.attr("transform",function(t){return c.translate(0,i(t[n]))}).call(at,t.annotation,"d2b-box-annotation",function(t){return(t.annotations||[]).filter(function(t){return t.location===n})});var p=h.select(".d2b-box-label").text(function(t){return o(t[n])});u?p.select().style("text-anchor",s%2==0?"start":"end").style("dominant-baseline","middle").attr(c.x,function(t){return(3+t.width/2)*(s%2==0?1:-1)}):p.style("text-anchor","middle").style("dominant-baseline",s%2==0?"baseline":"hanging").attr(c.x,function(t){return(3+t.width/2)*(s%2==0?-1:1)})}),e!==r&&(y=y.transition(e),p=p.transition(e)),y.attr(c.x,function(t){return-t.width/2}).attr(c.y,function(t){return Math.min(i(t.upperQuartile),i(t.lowerQuartile))}).attr(c.width,function(t){return t.width}).attr(c.height,function(t){return Math.abs(i(t.upperQuartile)-i(t.lowerQuartile))}).attr("stroke",function(t){return t.color}),p.attr(c.x1,0).attr(c.x2,0).attr(c.y1,function(t){return i(t.minimum)}).attr(c.y2,function(t){return i(t.maximum)}).attr("stroke",function(t){return t.color}),r.dispatch("box-updated",{bubbles:!0}),n};return f(n,t).addProp("scale",X.scaleLinear()).addProp("enterScale",null).addProp("valueFormat",X.format(",")).addProp("orient","vertical").addProp("annotation",G.annotation?G.annotation():null).addPropFunctor("data",function(t){return t}).addPropFunctor("median",function(t){return t.median}).addPropFunctor("upperQuartile",function(t){return t.upperQuartile}).addPropFunctor("lowerQuartile",function(t){return t.lowerQuartile}).addPropFunctor("minimum",function(t){return t.minimum}).addPropFunctor("maximum",function(t){return t.maximum}).addPropFunctor("outliers",function(t){return t.outliers}).addPropFunctor("width",20).addPropFunctor("color","steelblue").addPropFunctor("annotations",function(t){return t.annotations}),n}function z(){function t(t,n){return e.graphs(t,n).map(function(t,n){var r={data:t,index:n,tooltipGraph:e.tooltipGraph(t,n),shift:e.shift(t,n),key:e.key(t,n),color:e.color(t,n),orient:e.orient(t,n)};return r.values=e.values(t,n).map(function(t,n){return{data:t,index:n,graph:r,x:e.px(t,n),y:e.py(t,n),annotations:e.pannotations(t,n),median:e.box.median()(t,n)}}),r})}function n(t,n){return"translate("+(n?[t,0]:[0,t])+")"}var e={},r=function r(i){var a=i.selection?i.selection():i,o=a.selectAll(".d2b-box-plot-graphs").data(function(t){return[t]});o=o.merge(o.enter().append("g").attr("class","d2b-box-plot-graphs"));var u=o.selectAll(".d2b-box-plot-graph").data(function(n,e){return t(n,e)},function(t){return t.key}),c=u.enter().append("g").attr("class","d2b-box-plot-graph d2b-graph").style("opacity",0),s=u.merge(c).order(),l=u.exit();return e.box.data(function(t){return t.data}).annotation(e.annotation).annotations(e.pannotations),i!==a&&(s=s.transition(i),l=l.transition(i),l.style("opacity",0).each(function(t){var r=X.select(this),o="vertical"===t.orient,u=o?{x:"x",y:"y"}:{x:"y",y:"x"},c=e[u.x],s=e[u.y];e.box.scale(s).orient(t.orient).color(function(n,r){return e.pcolor(n,r)||t.color});var l=r.selectAll(".d2b-box-plot-box");i!==a&&(l=l.transition(i));var f=t.shift;null===f&&(f=c.bandwidth?c.bandwidth()/2:0),l.style("opacity",0).attr("transform",function(t){return n(c(t[u.x])+f,o)}).call(e.box).remove()})),s.style("opacity",1),l.remove(),s.each(function(t){var r=X.select(this),o="vertical"===t.orient,u=o?{x:"x",y:"y"}:{x:"y",y:"x"},c=e[u.x],s=e[u.y],l=this.parentNode,f={x:l.__scaleX||c,y:l.__scaleY||s},d=f[u.x],h=f[u.y],p=t.shift;null===p&&(p=c.bandwidth?c.bandwidth()/2:0),null===p&&(p=d.bandwidth?d.bandwidth()/2:0),t.tooltipGraph&&t.tooltipGraph.data(t.values)[u.x](function(t){return c(t[u.x])+p})[u.y](function(t){return s(t.median)}).color(function(n,r){return e.pcolor(n.data,r)||t.color}),e.box.scale(s).enterScale(h).orient(t.orient).color(function(n,r){return e.pcolor(n,r)||t.color});var b=r.selectAll(".d2b-box-plot-box").data(t.values,e.pkey),v=b.enter().append("g").attr("class","d2b-box-plot-box"),y=b.merge(v).order(),g=b.exit();i!==a&&(y=y.transition(i),g=g.transition(i)),d.bandwidth||h.bandwidth||c.bandwidth||s.bandwidth?(e.box.enterScale(s),v.attr("transform",function(t){return n(c(t[u.x])+p,o)})):(e.box.enterScale(h),v.attr("transform",function(t){return n(d(t[u.x])+p,o)})),v.style("opacity",0),y.attr("transform",function(t){return n(c(t[u.x])+p,o)}).style("opacity",1).call(e.box),g.attr("transform",function(t){return n(c(t[u.x])+p,o)}).style("opacity",0).call(e.box).remove()}),o.each(function(){this.__scaleX=e.x.copy(),this.__scaleY=e.y.copy()}),a.dispatch("svg-box-updated",{bubbles:!0}),r};return f(r,e).addProp("x",X.scaleLinear()).addProp("y",X.scaleLinear()).addProp("box",F()).addProp("annotation",G.annotation?G.annotation():null).addPropGet("type","boxPlot").addPropFunctor("graphs",function(t){return t}).addPropFunctor("tooltipGraph",function(t){return t.tooltipGraph}).addPropFunctor("shift",null).addPropFunctor("key",function(t){return t.label}).addPropFunctor("values",function(t){return t.values}).addPropFunctor("color",function(t){return Q(t.label)}).addPropFunctor("orient","vertical").addPropFunctor("px",function(t){return t.x}).addPropFunctor("py",function(t){return t.y}).addPropFunctor("pcolor",null).addPropFunctor("pkey",function(t,n){return n}).addPropFunctor("pannotations",function(t){return t.annotations}).addMethod("getComputedGraphs",function(n){return(n.selection?n.selection():n).data().map(function(n,e){return t(n,e)})}).addMethod("getVisiblePoints",function(t){var n=r.getComputedGraphs(t),i=[];return n.forEach(function(t){t.forEach(function(t){t.values.forEach(function(n,r){["maximum","minimum","upperQuartile","lowerQuartile","median"].forEach(function(a){i.push({x:n.x,y:e.box[a]()(n.data,r),graph:t})}),(e.box.outliers()(n.data,r)||[]).forEach(function(e){i.push({x:n.x,y:e,graph:t})})})})}),i}),r}function R(){function t(n,e,r){return{data:n,index:e,graph:r,x:l.px(n,e),y:l.py(n,e),color:l.pcolor(n,e)||r.color,symbol:l.psymbol(n,e)||r.symbol,key:l.pkey(n,e),size:l.psize(n,e),indicator:l.pindicator(n,e),annotation:l.pannotation(n,e),children:(l.pchildren(n,e)||[]).map(function(n,e){return t(n,e,r)})}}function n(n,e){var r=l.graphs(n,e).map(function(n,e){var r={data:n,index:e,tendancy:l.tendancy(n,e),tooltipGraph:l.tooltipGraph(n,e),shift:l.shift(n,e),key:l.key(n,e),color:l.color(n,e),symbol:l.symbol(n,e)};return r.values=l.values(n,e).map(function(n,e){return t(n,e,r)}),r});return r.forEach(function(t){return t.values.forEach(function(n){return s(n,t.tendancy)})}),r}function e(t,n){t.data.expanded=n,t.children.forEach(function(t){return e(t,n)})}function a(t,n){var e=5,r=5;t.selectAll(".d2b-bubble-indicator.d2b-active").attr("transform",function(){var t=this.getBBox();t.width+e>n&&e>0&&(e=5,r+=t.height+5);var i="translate("+e+", "+r+")";return e+=t.width+5,i})}function o(t,n,e,r,i){t.each(function(t){var a=X.select(this);a.attr("transform")||a.attr("transform","translate("+(e(t.parent?t.parent.x:t.x)+i)+","+r(t.parent?t.parent.y:t.y)+")"),t.children.length&&!t.data.expanded?a.attr("cursor","pointer").on("click",function(){X.select(this).dispatch("change",{bubbles:!0,cancelable:!0})}).on("change",function(t){return t.data.expanded=!t.data.expanded}):a.attr("cursor","").on("click",null),n&&(a=a.transition(n)),t.data.expanded?a.style("opacity",0).selectAll("*").remove():a.style("opacity",null).call(l.point),a.attr("transform","translate("+(e(t.x)+i)+", "+r(t.y)+")"),at(a,l.annotation,"d2b-bubble-annotation")})}function u(t){t.each(function(t){var n=X.select(this).classed("d2b-active",t.data.expanded);if(!t.data.expanded)return n.selectAll("rect, text, path").remove();var r=n.select("rect"),i=n.select("text"),a=n.select("path");r.size()||(r=n.append("rect")),i.size()||(i=n.append("text")),a.size()||(a=n.append("path")),i.text(function(t){return t.indicator.substring(0,5)}).attr("x",20);var o=i.node().getBBox();i.attr("y",o.height/1.35),r.on("click",function(){X.select(this).dispatch("change",{bubbles:!0,cancelable:!0})}).on("change",function(t){t.data.expanded=!t.data.expanded,t.data.expanded||e(t,!1)}).attr("width",o.width+25).attr("height",o.height).style("fill",l.point.fill()).style("stroke",l.point.stroke()),a.attr("d",function(t){return d.type(t.symbol)()}).attr("transform","translate(10, 9.5)").style("fill",l.point.stroke())})}function c(t,n,e,r,i,a,s,l,f,d,h){var p=arguments.length>11&&void 0!==arguments[11]?arguments[11]:0,b=t.selectAll(".d2b-bubble-pack.d2b-depth-"+p).data(n,function(t){return t.key}),v=b.enter().append("g").attr("class","d2b-bubble-pack d2b-depth-"+p),y=b.merge(v),g=v.append("g").attr("class","d2b-bubble-point");h&&o(g,!1,a,s,l),g.style("opacity",0),o(y.select(".d2b-bubble-point"),e,r,i,l),v.append("g").attr("class","d2b-bubble-indicator"),u(y.select(".d2b-bubble-indicator")),y.each(function(t){var n=X.select(this),o=n.selectAll(".d2b-bubble-pack");o=e?o.transition(e):o,t.children.length&&t.data.expanded?c(n,t.children,e,r,i,a,s,l,f,d,h,p+1):(d&&d(t),o.remove().select(".d2b-bubble-point").style("opacity",0).attr("transform","translate("+[r(t.x)+l,i(t.y)]+")"))});var _=b.exit();e&&(_=_.transition(e)),_.remove()}function s(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;t.children=t.children||[],t.leaves=t.children.length?[]:[t],t.depth=e,t.children.length&&t.children.forEach(function(r){s(r,n,e+1),r.parent=t,t.leaves=t.leaves.concat(r.leaves)}),t.size=i(t.size,X.sum(t.leaves,function(t){return t.size})),t.x=i(t.x,(n.x||n)(t.leaves,function(t){return t.x},function(t){return t.size})),t.y=i(t.y,(n.y||n)(t.leaves,function(t){return t.y},function(t){return t.size}))}var l={},d=X.symbol().size(80),h=function t(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=e.selection?e:null,o=e.selection?e.selection():e,u=o.selectAll(".d2b-bubble-pack-graphs").data(function(t){return[t]});u=u.merge(u.enter().append("g").attr("class","d2b-bubble-pack-graphs"));var s=u.selectAll(".d2b-bubble-pack-graph").data(function(t,e){return n(t,e)},function(t){return t.key}),f=s.enter().append("g").attr("class","d2b-bubble-pack-graph d2b-graph"),d=s.merge(f).order(),h=s.exit();return i&&(d=d.transition(i),h=h.transition(i)),d.style("opacity",1),h.style("opacity",0).remove(),e.each(function(n,e){var o=X.select(this),u=l.duration(n,e),s=o.selectAll(".d2b-bubble-pack-graph"),f=o.selectAll(".d2b-bubble-pack-graphs").node(),d=f.__d2bPreserveScaleX__||l.x,h=f.__d2bPreserveScaleY__||l.y;o.on("change",function(){o.transition().duration(u).call(t,!1)});var p=0;s.each(function(t){var n=X.select(this),e=l.x.range();p=Math.max(p,Math.abs(e[0]-e[1]));var a=t.shift;null===a&&(a=l.x.bandwidth?l.x.bandwidth()/2:0),l.point.active(function(t){return!!t.children.length}).fill(function(t){return t.color}).type(function(t){return t.symbol});var u=t.tooltipGraph?t.tooltipGraph.clear().x(function(t){return l.x(t.x)+a}).y(function(t){return l.y(t.y)}).color(function(t){return t.color}).addPoint:null;c(n,t.values,i,l.x,l.y,d,h,a,o,u,r)}),a(o,p)}),u.each(function(){this.__d2bPreserveScaleX__=l.x.copy(),this.__d2bPreserveScaleY__=l.y.copy()}),o.dispatch("svg-bubble-pack-updated",{bubbles:!0}),t};return f(h,l).addProp("point",M().size(function(t){return 100*t.size})).addProp("x",X.scaleLinear()).addProp("y",X.scaleLinear()).addProp("annotation",G.annotation?G.annotation():null).addPropGet("type","bubblePack").addPropFunctor("duration",250).addPropFunctor("graphs",function(t){return t}).addPropFunctor("tendancy",_,function(t){return arguments.length?(t&&t.tendancy?l.tendancy=function(){return t}:l.tendancy=r(t),h):l.tendancy}).addPropFunctor("tooltipGraph",function(t){return t.tooltipGraph}).addPropFunctor("shift",null).addPropFunctor("key",function(t){return t.label}).addPropFunctor("values",function(t){return t.values}).addPropFunctor("color",function(t){return Q(t.label)}).addPropFunctor("symbol",function(){return X.symbolCircle}).addPropFunctor("px",function(t){return t.x}).addPropFunctor("py",function(t){return t.y}).addPropFunctor("psize",function(t){return t.size}).addPropFunctor("pchildren",function(t){return t.children}).addPropFunctor("pcolor",null).addPropFunctor("psymbol",null).addPropFunctor("pindicator",function(t){return t.label}).addPropFunctor("pkey",function(t,n){return n}).addPropFunctor("pannotation",function(t){return t.annotation}).addMethod("getComputedGraphs",function(t){return(t.selection?t.selection():t).data().map(function(t,e){return n(t,e)})}).addMethod("getVisiblePoints",function(t){function n(t,e,r){t.data.expanded?t.children.forEach(function(t){return n(t,e,r)}):e.push({x:t.x,y:t.y,graph:r})}return h.getComputedGraphs(t).map(function(t){return[].concat.apply([],t.map(function(t){var e=[];return t.values.forEach(function(r){return n(r,e,t)}),e}))})[0]}),h}function L(){function t(t){return n(X.hierarchy(t,v.children).sum(v.size))}function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(t.key=v.key(t.data,e),t.color=v.color(t.data,e),t.label=v.label(t.data,e),t.children)return t.children.forEach(n),t}function e(t){var n=null;return t.each(function(t){t.data.selected&&(n=t)}),n||(n=t),n.data.selected=!0,n}function r(t,n){t.ancestors().concat(t.descendants()).filter(function(t){return t.depth<=n&&t.value>0}).forEach(function(t){return t.visible=!0})}function a(t,n,e,r){var i=v.innerRadius(t,n),a=v.outerRadius(t,n),o=v.ancestorPadding(t,n),u=v.ancestorRatio(t,n),c=0;e.each(function(t){t.visible&&(c=Math.max(c,t.depth))});var s=a-i-o,l=i+s*u,f=v.ancestorBanding.copy().range([i,l]).domain([0,r.depth+1]),d=v.descendantBanding.copy().range([l+o,a]).domain([r.depth+1,c+1]);return function(t){var n=void 0;return n=t<=r.depth?f:d,{inner:n(t),outer:n(t+1)}}}function o(t){return t>Math.PI?O(t)+90:O(t)-90}function c(t,n){var e=(n.inner-n.outer)/2.2;return t>Math.PI?-e:e}function s(t){return t>Math.PI?"end":"start"}function d(t,n,e,r,i,a){var f="arc"===n?u:l;t=t.filter(function(t){return t.visible}),v.pie.startAngle(r).endAngle(i),v.pie(t).forEach(function(t){var n=a.radii(t.data.depth);t.data.startAngle=t.startAngle,t.data.endAngle=t.endAngle,t.data.padAngle=t.padAngle,t.data.innerRadius=n.inner,t.data.outerRadius=n.outer,t.data.centerAngle=(t.startAngle+t.endAngle)/2,t.data.rotate=o(t.data.centerAngle),t.data.labelOffset=c(t.data.centerAngle,n),t.data.labelAnchor=s(t.data.centerAngle)});var p=X.select(this),b="d2b-sunburst-level-"+e,g=p.selectAll(".d2b-sunburst-"+n+"-group."+b),_=g.data();g=g.data(t,function(t){return t.key});var x=g.enter().append("g").attr("class","d2b-sunburst-"+n+"-group "+b),m=x.append("arc"===n?"path":"text").attr("class","d2b-sunburst-"+n+" "+b).each(function(n,e){var r=a.oldRadii(n.depth),i=n.neighbor||h(e,_,t);this.current={startAngle:i.startAngle,endAngle:i.endAngle,innerRadius:r.inner,outerRadius:r.outer,rotate:o((i.startAngle+i.endAngle)/2)},n.children&&n.children.forEach(function(t){return t.neighbor=i})});x.append("g").attr("class","d2b-sunburst-"+n+"-children "+b),"arc"===n?m.style("fill",function(t){return t.color}):m.style("opacity",0).attr("y",4);var w=g.exit();g=g.merge(x),g.select(".d2b-sunburst-"+n+"."+b).classed("d2b-sunburst-ancestor",function(t){return t.depth<t.selected.depth}),a.transition&&(w.each(function(e,r){var i=h(r,t,_),u=X.select(this),s=u.selectAll(".d2b-sunburst-"+n).datum(function(t){var n=a.radii(t.depth);return t.innerRadius=n.inner,t.outerRadius=n.outer,t.startAngle=i.startAngle,t.endAngle=i.endAngle,t.centerAngle=i.centerAngle,t.rotate=o(t.centerAngle),t.labelOffset=c(t.centerAngle,n),t}).transition(a.transition).call(f,y);"label"===n&&s.style("opacity",0).attr("x",function(t){return t.labelOffset})}),w=w.transition(a.transition),g=g.transition(a.transition)),w.remove();var j=g.select(".d2b-sunburst-"+n+"."+b).call(f,y);"arc"===n?j.style("fill",function(t){return t.color}):j.text(function(t){return t.depth>=t.selected.depth?t.label:""}).style("opacity",1).attr("x",function(t){return t.labelOffset}).style("text-anchor",function(t){return t.labelAnchor}),g.select(".d2b-sunburst-"+n+"-children."+b).each(function(t){var r=t.children||[];d.call(this,r,n,e+1,t.startAngle,t.endAngle,a)})}function h(t,n,e){var r=p(t,n,e),i=b(t,n,e);return r?{startAngle:r.endAngle,endAngle:r.endAngle}:i?{startAngle:i.startAngle,endAngle:i.startAngle}:{startAngle:0,endAngle:0,centerAngle:0}}function p(t,n,e){for(var r=n.length;--t>=0;)for(var i=e[t].key,a=0;a<r;++a)if(n[a].key===i)return n[a]}function b(t,n,e){for(var r=e.length,i=n.length;++t<r;)for(var a=e[t].key,o=0;o<i;++o)if(n[o].key===a)return n[o]}var v={},y=X.arc(),g=function n(o){var u=o.selection?o.selection():o;return v.pie.value(function(t){return t.value}),u.each(function(c,s){var l=X.select(this),f=v.zoomable(c,s),h=v.highlight(c,s),p=v.innerRadius(c,s),b=v.showLabels(c,s),y=t(c),g=e(y);r(g,v.descendantLevels(c,s)+g.depth),y.each(function(t){return t.selected=g});var _=a(c,s,y,g);d.call(this,[y],"arc",0,v.startAngle(c,s),v.endAngle(c,s),{transition:o!==u?o:null,oldRadii:i(this.__radii,_),radii:_,zoomable:f}),d.call(this,b?[y]:[],"label",0,v.startAngle(c,s),v.endAngle(c,s),{transition:o!==u?o:null,oldRadii:i(this.__radii,_),radii:_});var x=l.selectAll(".d2b-sunburst-center");x.data([g]).enter().append("circle").attr("class","d2b-sunburst-center").merge(x).attr("cx",0).attr("cy",0).attr("r",Math.max(0,p)).on("click",function(t){t.parent&&(t.data.selected=!1,t.parent.data.selected=!0,l.transition().duration(v.duration(t,s)).call(n))}),this.__radii=_,l.selectAll("path.d2b-sunburst-arc").on("click",f?function(t){y.each(function(t){return t.data.selected=!1}),t.data.selected=!0,l.transition().duration(v.duration(c,s)).call(n)}:null).on("mouseover",h?function(t){var n=t.ancestors();l.selectAll(".d2b-sunburst-arc").classed("d2b-transparent",function(t){return-1===n.indexOf(t)}),l.selectAll(".d2b-sunburst-label").classed("d2b-transparent",function(t){return-1===n.indexOf(t)})}:null).on("mouseout",function(){l.selectAll(".d2b-sunburst-arc").classed("d2b-transparent",!1),l.selectAll(".d2b-sunburst-label").classed("d2b-transparent",!1)})}),u.dispatch("svg-sunburst-updated",{bubbles:!0}),n};return f(g,v).addProp("pie",X.pie().sort(null)).addProp("ancestorBanding",X.scaleLinear()).addProp("descendantBanding",X.scalePow().exponent(.85)).addPropFunctor("duration",250).addPropFunctor("innerRadius",30).addPropFunctor("outerRadius",200).addPropFunctor("ancestorPadding",10).addPropFunctor("ancestorRatio",.2).addPropFunctor("descendantLevels",1/0).addPropFunctor("startAngle",0).addPropFunctor("endAngle",2*Math.PI).addPropFunctor("showLabels",!1).addPropFunctor("zoomable",!0).addPropFunctor("highlight",!0).addPropFunctor("key",function(t){return v.label(t)}).addPropFunctor("label",function(t){return t.label}).addPropFunctor("color",function(t){return Q(v.label(t))}).addPropFunctor("children",function(t){return t.children}).addPropFunctor("size",function(t){return t.size}),g}function q(){var t={},n=function n(e){var r=e.selection?e.selection():e;return r.each(function(n){function i(t){return o(t)?v+5:-5}function o(t){return t.x0<d.width/2}function u(t){return 5+Math.max(0,t.y1-t.y0)/2}function c(n){if(n.draggableX&&(n.x0=Math.max(0,Math.min(d.width-v,n.x0+X.event.dx)),n.x1=n.x0+v,this.__dragX0=n.x0/d.width),n.draggableY){var e=n.y1-n.y0;n.y0=Math.max(0,Math.min(d.height-(n.y1-n.y0),n.y0+X.event.dy)),n.y1=n.y0+e,this.__dragY0=n.y0/d.height}t.sankey.update(y),s()}function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];F.select("text").classed("d2b-text-anchor-end",function(t){return!o(t)}).call(a,function(t){return t.label},function(t){return t.wrapLength},"middle");var n=t?k:A,e=t?E:F;n.style("opacity",1).select("path").attr("d",h).style("stroke",function(t){return"url(#"+t.keyTrim+")"}).style("stroke-width",function(t){return t.width+"px"}),n.each(function(n){var e=X.select(this);if(Math.abs(n.y1-n.y0)<1e-5){var r=e.selectAll("rect").data([n]),i=r.enter().append("rect"),a=n.target.x0-n.source.x1;r=r.merge(i),t&&(r=r.transition(t)),r.attr("x",n.source.x1+Math.min(0,a)).attr("y",n.y0-n.width/2).attr("height",Math.max(0,n.width)).attr("width",Math.abs(n.target.x0-n.source.x1)).style("fill","url(#"+n.keyTrim+")"),e.select("path").style("display","none")}else e.select("rect").remove(),e.select("path").style("display","")}),e.attr("transform",function(t){return"translate("+t.x0+", "+t.y0+")"}).style("opacity",1),e.select("rect").attr("width",Math.max(0,v)).attr("height",function(t){return Math.max(0,t.y1-t.y0)}).style("fill",function(t){return t.color}),e.select("text").attr("x",i).attr("y",u)}var l=e===r?null:e,f=X.select(this),d=t.size(n),h=V.sankeyLinkHorizontal(),p=t.nodes(n).map(function(n,e){var r=t.nodeKey(n,e);return{key:r,label:t.nodeLabel(n,e,r),color:t.nodeColor(n,e,r),draggableX:t.nodeDraggableX(n,e),draggableY:t.nodeDraggableY(n,e),preserveDragging:t.nodePreserveDragging(n,e),wrapLength:t.nodeLabelWrapLength(n,e),data:n,index:e}}),b=t.links(n).map(function(n,e){var r=t.linkSource(n,e),i=t.linkTarget(n,e),a="object"===(void 0===r?"undefined":rt(r))?t.nodeKey(r):r,o="object"===(void 0===i?"undefined":rt(i))?t.nodeKey(i):i,u=t.linkKey(n,e,a,o);return{sourceKey:a,targetKey:o,key:u,keyTrim:u.replace(/ /g,""),sourceColor:t.linkSourceColor(n,e,a),targetColor:t.linkTargetColor(n,e,o),value:t.linkValue(n,e),source:r,target:i,data:n,index:e}});t.sankey.size([d.width,d.height]).nodeId(function(t){return t.key}).nodes(p).links(b);var v=t.sankey.nodeWidth(),y=t.sankey.nodes(p).links(b)();y.links=y.links.filter(function(t){return!!t.value}),y.nodes=y.nodes.filter(function(t){return!!t.value}),y=t.sankey.nodes(y.nodes).links(y.links)();var g=f.selectAll(".d2b-sankey-link-defs").data([y.links]),_=g.enter().append("defs").attr("class","d2b-sankey-link-defs");g=g.merge(_);var x=g.selectAll(".d2b-def-gradient").data(function(t){return t},function(t){return t.keyTrim}),m=x.enter().append("linearGradient").attr("class","d2b-def-gradient"),w=x.exit();m.append("stop").attr("class","d2b-gradient-from").attr("offset","0%"),m.append("stop").attr("class","d2b-gradient-to").attr("offset","100%"),x=x.merge(m),l&&(w=w.transition(l),x=x.transition(l)),w.remove(),x.attr("id",function(t){return t.keyTrim}),x.select(".d2b-gradient-from").attr("stop-color",function(t){return t.sourceColor}),x.select(".d2b-gradient-to").attr("stop-color",function(t){return t.targetColor});var j=f.selectAll(".d2b-sankey-links").data([y.links]),O=j.enter().append("g").attr("class","d2b-sankey-links");j=j.merge(O);var k=j.selectAll(".d2b-sankey-link").data(function(t){return t},function(t){return t.key}),M=k.enter().append("g").attr("class","d2b-sankey-link"),P=k.exit(),A=k=k.merge(M);l&&(k=k.transition(l),P=P.transition(l));var T=f.selectAll(".d2b-sankey-nodes").data([y.nodes]),N=T.enter().append("g").attr("class","d2b-sankey-nodes");T=T.merge(N);var E=T.selectAll(".d2b-sankey-node").data(function(t){return t},function(t){return t.key}),S=E.enter().append("g").attr("class","d2b-sankey-node"),C=E.exit(),F=E=E.merge(S);l&&(E=E.transition(l),C=C.transition(l)),E.each(function(t){if(t.draggableX||t.draggableY?X.select(this).classed("d2b-draggable",!0).call(X.drag().on("drag",c)):X.select(this).classed("d2b-draggable",!1).on(".drag",null),t.preserveDragging&&(void 0!==this.__dragX0&&(t.x0=this.__dragX0*d.width,t.x1=t.x0+v),void 0!==this.__dragY0)){var n=t.y1-t.y0;t.y0=this.__dragY0*d.height,t.y1=t.y0+n}}),t.sankey.update(y),M.style("opacity",0).append("path").attr("d",h).style("stroke",function(t){return"url(#"+t.keyTrim+")"}).style("stroke-width",function(t){return t.width+"px"}),P.style("opacity",0).remove(),S.attr("transform",function(t){return"translate("+t.x0+", "+t.y0+")"}).style("opacity",0),S.append("rect").attr("width",Math.max(0,v)).attr("height",function(t){return Math.max(0,t.y1-t.y0)}),S.append("text").attr("x",i).attr("y",u),C.style("opacity",0).remove(),s(l)}),r.dispatch("svg-sankey-updated",{bubbles:!0}),n};return f(n,t).addProp("sankey",V.sankey()).addPropFunctor("size",{width:960,height:500}).addPropFunctor("nodes",function(t){return t.nodes}).addPropFunctor("nodeKey",function(t){return t.name}).addPropFunctor("nodeLabel",function(t,n,e){return e}).addPropFunctor("nodeLabelWrapLength",1/0).addPropFunctor("nodeDraggableX",!1).addPropFunctor("nodeDraggableY",!1).addPropFunctor("nodePreserveDragging",!0).addPropFunctor("nodeColor",function(t,n,e){return Q(e)}).addPropFunctor("links",function(t){return t.links}).addPropFunctor("linkSource",function(t){return t.source}).addPropFunctor("linkSourceColor",function(t,n,e){return Q(e)}).addPropFunctor("linkTarget",function(t){return t.target}).addPropFunctor("linkTargetColor",function(t,n,e){return Q(e)}).addPropFunctor("linkKey",function(t,n,e,r){return e+"-"+r}).addPropFunctor("linkValue",function(t){return t.value}),n}function B(){function t(t,n,e,r,i){var a=[],o=[],u=t.data;u&&(s(t,u,n,e,r),a=[u],t.info.showGrid&&(o=[u])),t.update=e.selectAll(".d2b-"+t.type+"-axis").data(a),t.enter=t.update.enter().append("g").attr("class","d2b-axis d2b-"+t.type+"-axis"),t.labelEnter=t.enter.append("text").attr("class","d2b-axis-label"),t.svg=t.enter.merge(t.update),t.label=t.svg.select(".d2b-axis-label"),t.update.exit().remove(),t.gridUpdate=e.selectAll(".d2b-"+t.type+"-grid").data(o),t.gridEnter=t.gridUpdate.enter().append("g").attr("class","d2b-grid d2b-"+t.type+"-grid"),t.gridUpdate.exit().remove(),t.grid=t.gridEnter.merge(t.gridUpdate),i&&(t.svg=t.svg.transition(i),t.update=t.update.transition(i),t.grid=t.grid.transition(i),t.gridUpdate=t.gridUpdate.transition(i),t.label=t.label.transition(i))}function n(t,n,e,r){t.data&&(u(t),c(t,n),t.enter.call(t.info.axis).attr("transform","translate("+e+", "+r+")"),t.update.call(t.info.axis).attr("transform","translate("+e+", "+r+")"),t.svg.call(v,t).on("end",function(){t.svg.call(v,t)}))}function e(t,n,e){t.data&&(o(t,e),c(t,n),t.gridUpdate.call(t.info.axis).selectAll(".tick text").remove(),t.gridEnter.call(t.info.axis).selectAll(".tick text").remove())}function r(t,n){t.data&&(t.labelEnter.text(t.info.label).attr("x",p(t,n)).attr("y",h(t)).attr("text-anchor",l(t)),t.label.text(t.info.label).attr("x",p(t,n)).attr("y",h(t)).attr("text-anchor",l(t)))}function o(t,n){if(t.data)switch(t.type){case"x":return t.info.axis.tickSize("inner"===t.info.orient?-n:n);case"x2":case"y":return t.info.axis.tickSize("inner"===t.info.orient?n:-n);case"y2":return t.info.axis.tickSize("inner"===t.info.orient?-n:n)}}function u(t){t.data&&t.info.axis.tickSizeOuter(0).tickSizeInner(t.info.tickSize)}function c(t,n){t.data&&(["y","y2"].indexOf(t.type)>-1?t.info.axis.scale().range([n,0]):t.info.axis.scale().range([0,n]))}function s(t,n,e,r,a){if(t.data){var o=t.info={};o.axis=_.axis(n,e),o.orient=_.orient(n,e),o.wrapLength=_.wrapLength(n,e),o.label=i(_.label(n,e),""),o.labelOrient=_.labelOrient(n,e),o.tickSize=_.tickSize(n,e),o.showGrid=_.showGrid(n,e),o.labelOrient1=o.labelOrient.split(" ")[0],o.labelOrient2=o.labelOrient.split(" ")[1],o.wrapAnchor=d(t),u(t),c(t,a);var s=r.append("g").attr("class","d2b-axis d2b-"+t.type+"-axis").call(o.axis).call(v,t);o.axisBox=s.node().getBBox();var l=s.append("text").attr("class","d2b-axis-label d2b-"+t.type+"-label").text(o.label);o.labelBox=l.node().getBBox(),s.remove()}}function l(t){if(t.data){var n=t.info,e=["y","y2"].indexOf(t.type)>-1;return"start"===n.labelOrient2&&e?"end":"end"!==n.labelOrient2||e?"middle"===n.labelOrient2?"middle":"start":"end"}}function d(t){if(t.data)switch(t.type){case"x":return"inner"===t.info.orient?"end":"start";case"x2":return"outer"===t.info.orient?"end":"start";case"y":case"y2":return"middle";default:return"start"}}function h(t){if(t.data){var n=t.info;switch(t.type+" "+n.orient+" "+n.labelOrient1){case"x inner inner":case"x2 outer outer":return-n.axisBox.height-x;case"x inner outer":case"x2 outer inner":return n.labelBox.height+x;case"x outer inner":case"x2 inner outer":case"y inner outer":case"y2 outer inner":return-x;case"x outer outer":case"x2 inner inner":return n.labelBox.height+n.axisBox.height+x;case"y inner inner":case"y2 outer outer":return n.labelBox.height+n.axisBox.width+x;case"y outer inner":case"y2 inner outer":return n.labelBox.height+x;case"y outer outer":case"y2 inner inner":return-n.axisBox.width-x}}}function p(t,n){if(t.data)return"start"===t.info.labelOrient2?0:"middle"===t.info.labelOrient2?n/2:n}function b(t){var n={top:0,left:0,right:0,bottom:0};return t.x.data&&("outer"===t.x.info.orient&&(n.bottom+=t.x.info.axisBox.height),"outer"===t.x.info.labelOrient1&&(n.bottom+=t.x.info.labelBox.height+x)),t.x2.data&&("outer"===t.x2.info.orient&&(n.top+=t.x2.info.axisBox.height),"outer"===t.x2.info.labelOrient1&&(n.top+=t.x2.info.labelBox.height)),t.y.data&&("outer"===t.y.info.orient&&(n.left+=t.y.info.axisBox.width),"outer"===t.y.info.labelOrient1&&(n.left+=t.y.info.labelBox.height)),t.y2.data&&("outer"===t.y2.info.orient&&(n.right+=t.y2.info.axisBox.width),"outer"===t.y2.info.labelOrient1&&(n.right+=t.y2.info.labelBox.height+x)),n.top=Math.max(n.top,10),n.bottom=Math.max(n.bottom,10),n.left=Math.max(n.left,10),n.right=Math.max(n.right,10),n}function v(t,n){if(n.data){var e=n.info.wrapLength,r=n.info.wrapAnchor;t.selectAll(".tick text").each(function(){var t=X.select(this);-1===i(t.html(),"").indexOf("tspan")&&(this.storeText=t.text()),t.text("")}).call(a,function(){return this.storeText},e,r)}}function y(t){return"number"==typeof t?{top:t,left:t,right:t,bottom:t}:t}function g(t){return y(t||0)}var _={},x=5,m=function i(a){var o=a.selection?a.selection():a;return o.each(function(i,u){var c=_.size.call(this,i,u)||{width:960,height:500},s=g(_.margin.call(this,i,u)),l=_.x.call(this,i,u),f=_.x2.call(this,i,u),d=_.y.call(this,i,u),h=_.y2.call(this,i,u),p=X.select(this),v={x:{type:"x",data:l},x2:{type:"x2",data:f},y:{type:"y",data:d},y2:{type:"y2",data:h}},x=y(_.padding.call(this,i,u)),m=p.selectAll(".d2b-plane").data([i]),w=m.enter().append("g").attr("class","d2b-plane"),j=m.merge(w),O=this.__clipID=this.__clipID||"d2b-clip-plane-"+Z();w.append("defs").append("clipPath").attr("id",O).attr("class","d2b-clip-plane").append("rect");var k=a!==o?a:null;t(v.x,u,j,c.width,k),t(v.x2,u,j,c.width,k),t(v.y,u,j,c.height,k),t(v.y2,u,j,c.height,k),x||(x=b(v));var M={top:x.top+s.top,bottom:x.bottom+s.bottom,left:x.left+s.left,right:x.right+s.right};M.width=c.width-M.left-M.right,M.height=c.height-M.top-M.bottom,this.__box__=M,k&&(m=m.transition(k)),w.attr("transform","translate("+M.left+", "+M.top+")"),m.attr("transform","translate("+M.left+", "+M.top+")"),n(v.x,M.width,0,M.height),n(v.x2,M.width,0,0),n(v.y,M.height,0,0),n(v.y2,M.height,M.width,0),e(v.x,M.width,M.height),e(v.x2,M.width,M.height),e(v.y,M.height,M.width),e(v.y2,M.height,M.width),r(v.x,M.width),r(v.x2,M.width),r(v.y,-M.height),r(v.y2,-M.height),j.select(".d2b-clip-plane").select("rect").attr("width",M.width+1).attr("height",M.height+1),j.selectAll(".d2b-grid").attr("clip-path","url(#"+O+")")}),o.dispatch("plane-updated",{bubbles:!0}),i};return f(m,_).addPropFunctor("size",function(t){return t.size}).addPropFunctor("padding",null).addPropFunctor("margin",0).addPropFunctor("x",function(t){return t.x}).addPropFunctor("x2",function(t){return t.x2}).addPropFunctor("y",function(t){return t.y}).addPropFunctor("y2",function(t){return t.y2}).addPropFunctor("axis",function(t){return t.axis}).addPropFunctor("orient",function(t){return t.orient||"outer"}).addPropFunctor("wrapLength",function(t){return i(t.wrapLength,1/0)}).addPropFunctor("tickSize",function(t){return i(t.tickSize,6)}).addPropFunctor("showGrid",function(t){return!1!==t.showGrid}).addPropFunctor("label",function(t){return t.label}).addPropFunctor("labelOrient",function(t){return t.labelOrient||"outer middle"}).addMethod("box",function(t){var n=t.node?t.node():t;return n?n.__box__:null}),m}function D(){function t(t,u){var c=X.select(this),f=c.select(".d2b-chart-container"),d=f.node().__size__,h=i.radius(t,d.width,d.height),p=i.donutRatio(t),b=i.legend.empty(),v=i.values(t),y=v.filter(function(t){return!b(t)});i.pie.values(y),i.legend.values(v),c.select(".d2b-legend-container").call(i.legend).on("change",function(){return c.transition(i.duration(t)).call(a)}).selectAll(".d2b-legend-item").on("mouseover",function(t){e.call(this,c,t)}).on("mouseout",function(t){r.call(this,c,t)});var g=X.sum(y,function(t){return i.value(t)}),_=f.selectAll(".d2b-pie-chart").data([y]),x=_.enter().append("g").attr("class","d2b-pie-chart");_=_.merge(x),u&&(_=_.transition(u)),i.pie.arc().innerRadius(h*p).outerRadius(h),_.call(i.pie);var m=f.selectAll(".d2b-pie-arc").each(function(t){t.__innerRadius__=h*p,t.__outerRadius__=h,t.__percent__=t.value/g}).on("mouseover",function(t){e.call(this,c,t.data)}).on("mouseout",function(t){r.call(this,c,t.data)}).call(i.tooltip);m.selectAll(".d2b-pie-arc-percent").data(function(t){return[t]}).enter().append("g").attr("class","d2b-pie-arc-percent").append("text").attr("y",6),m.each(function(){var t=X.select(this),n=t.select(".d2b-pie-arc path").node().current,e=t.select(".d2b-pie-arc-percent"),r=e.select("text").node();e.node().current=n,r.current=r.current||0}),u&&(m=m.each(function(){this.transitioning=!0}).transition(u).on("end",function(){this.transitioning=!1})),m.select(".d2b-pie-arc-percent").call(l,i.pie.arc()).select("text").call(s,function(t){return i.value(t.data)/g},o).style("opacity",function(t){return i.showPercent.call(this,t.data,g)?1:0});var w=n(t,h,d);x.attr("transform","translate("+w.x+", "+w.y+")"),_.attr("transform","translate("+w.x+", "+w.y+")")}function n(t,n,e){var r=i.at(t,e.width,e.height,n);if("object"!==(void 0===r?"undefined":rt(r))){r=r.split(" ");var a={x:r[1],y:r[0]};switch(r={},a.x){case"left":r.x=n;break;case"center":case"middle":r.x=e.width/2;break;case"right":default:r.x=e.width-n}switch(a.y){case"bottom":r.y=e.height-n;break;case"center":case"middle":r.y=e.height/2;break;case"top":default:r.y=n}}return r}function e(t,n){var e=i.pie.arc();e.outerRadius(function(t){return t.outerRadius}).innerRadius(function(t){return t.innerRadius}),t.selectAll(".d2b-pie-arc").filter(function(t){return t.data===n}).each(function(t){t.outerRadius=1.03*t.__outerRadius__,t.innerRadius=t.__innerRadius__}).select("path").transition().duration(100).call(u,e)}function r(t,n){var e=i.pie.arc();e.outerRadius(function(t){return t.outerRadius}).innerRadius(function(t){return t.innerRadius}),t.selectAll(".d2b-pie-arc").filter(function(t){return t.data===n}).each(function(t){t.outerRadius=t.__outerRadius__,t.innerRadius=t.__innerRadius__}).select("path").transition().duration(100).call(u,e)}var i={},a=function n(e){e.call(i.chartFrame),i.pie.value(i.value).color(i.color).key(i.key),i.legend.html(i.label).key(i.key).color(i.color),i.tooltip.color(function(t){return X.rgb(i.color(t.data)).darker(.3)});var r=e.selection?e.selection():e;return r.each(function(n){t.call(this,n,e!==r?e:null)}),r.dispatch("chart-pie-updated",{bubbles:!0}),n},o=X.format(".0%");return f(a,i).addProp("chartFrame",y().legendEnabled(!0).breadcrumbsEnabled(!1)).addProp("legend",v().clickable(!0).dblclickable(!0)).addProp("key",function(t){return t.label}).addProp("pie",P()).addProp("tooltip",d().followMouse(!0).html(function(t){return"<b>"+i.label(t.data)+"</b>: "+i.value(t.data)+" ("+o(t.__percent__)+")"})).addPropFunctor("values",function(t){return t}).addPropFunctor("duration",250).addPropFunctor("donutRatio",0).addPropFunctor("at","center center").addPropFunctor("showPercent",function(t,n){return i.value(t)/n>.03}).addPropFunctor("radius",function(t,n,e){return Math.min(n,e)/2}).addPropFunctor("color",function(t){return Q(t.label)}).addPropFunctor("value",function(t){return t.value}).addPropFunctor("label",function(t){return t.label}),a}function Y(){function t(t,r){var f=X.select(this),d=f.select(".d2b-chart-container"),v=d.node(),y=f.select(".d2b-legend-container"),g=d.node().__size__,_=e(t),m=a(_),w=p.duration(t),j=n(t,_),O=p.clipPlane(t),k=(p.annotations(t)||[]).slice().map(function(t,n){return{key:p.annotationKey(t,n),xType:p.annotationXType(t)||"x",yType:p.annotationYType(t)||"y",z:p.annotationZ(t)||"front",x:p.annotationX(t),y:p.annotationY(t),x2:p.annotationX2(t),y2:p.annotationY2(t),color:p.annotationColor(t)||"steelblue",data:t}});o(j);var M=v.tooltip=v.tooltip||h().trackX(!0).trackY(!1).threshold(50);M.title(function(t){return""+i(t[0].x,t[0].x1,t[0].median)}).clear(),p.legend.values(j),y.call(p.legend).on("change",function(){return f.transition().duration(w).call(b)}).selectAll(".d2b-legend-item").on("mouseover",function(t){return u(t,d)}).on("mouseout",function(t){return c(t,d)}),p.plane.size(g);var P=d.selectAll(".d2b-axis-plane").data([t]),A=P,T=P.enter().append("g").attr("class","d2b-axis-plane");A=P=P.merge(T);var N=d.selectAll(".d2b-axis-wrapper").data([t]),E=N,S=N.enter().append("g").attr("class","d2b-axis-wrapper");S.append("rect").attr("class","d2b-axis-background"),S.append("g").attr("class","d2b-axis-back-annotations"),S.append("g").attr("class","d2b-axis-sets"),S.append("g").attr("class","d2b-axis-front-annotations"),E=N=N.merge(S);var C=N.select(".d2b-axis-back-annotations"),F=N.select(".d2b-axis-front-annotations"),z=N.select(".d2b-axis-sets").selectAll(".d2b-axis-set").data(_,function(t){return t.key}),R=z.enter().append("g").attr("class","d2b-axis-set"),L=z.exit();z=z.merge(R).order(),r&&(L=L.transition(r),E=E.transition(r),A=A.transition(r),C=C.transition(r),F=F.transition(r));var q={x:[],x2:[],y:[],y2:[]};z.each(function(t){var n=X.select(this),e=t.graphs.filter(function(t){return!t.data.hidden}),r=e.map(function(t){return t.data});e.forEach(function(n){k=k.concat(n.annotations.map(function(e,r){return{key:t.key+"-"+n.key+"-"+p.annotationKey(e,r),xType:t.xType,yType:t.yType,z:p.annotationZ(e)||"front",x:p.annotationX(e),y:p.annotationY(e),x2:p.annotationX2(e),y2:p.annotationY2(e),color:p.annotationColor(e)||n.color,data:e,graph:n.data}}))}),this.genUpdate=n.selectAll(".d2b-graph-generator").data(t.generators.slice().reverse(),function(t){return t.key}),this.genEnter=this.genUpdate.enter().append("g").attr("class","d2b-graph-generator").style("opacity",0),this.genExit=this.genUpdate.exit(),this.gen=this.genUpdate.merge(this.genEnter).order();var i=this.gen.size();this.gen.each(function(n,e){var a=X.select(this),o=n.generator.tooltipGraph(function(t){if(e<i-1)return null;var n=M.graph(Z());return s(t,m).tooltipConfig(n),n}).color(function(t){return s(t,m).color}).graphs(r).getVisiblePoints(a);n.generator.duration&&n.generator.duration(w),o.forEach(function(n){q[t.xType].push(n.x),q[t.yType].push(n.y)})})});var B=p.x(t,q.x),D=p.y(t,q.y),Y=p.x2(t,q.x2),U=p.y2(t,q.y2);l(B,q.x,x.x),l(D,q.y,x.y),l(Y,q.x2,x.x2),l(U,q.y2,x.y2),p.plane.axis(function(t){return t.__axis__}).x(B.__axis__&&q.x.length?B:null).y(D.__axis__&&q.y.length?D:null).x2(Y.__axis__&&q.x2.length?Y:null).y2(U.__axis__&&q.y2.length?U:null),T.call(p.plane),A.call(p.plane);var I=p.plane.box(P),G="url(#"+P.select(".d2b-clip-plane").attr("id")+")";if(N.attr("clip-path",O?G:""),z.each(function(t){var n="x2"===t.xType?Y.__axis__:B.__axis__,e="y2"===t.yType?U.__axis__:D.__axis__;r&&(this.genUpdate=this.genUpdate.transition(r),this.genExit=this.genExit.transition(r).style("opacity",0)),this.genExit.remove(),this.gen.each(function(t){var i=X.select(this);r&&(i=i.transition(r)),t.generator.x(n.scale()).y(e.scale()),i.style("opacity",1).call(t.generator)}),X.select(this).on("change",function(){return f.transition().duration(w).call(b)})}),L.style("opacity",0).remove(),S.attr("transform","translate("+I.left+", "+I.top+")").select("rect.d2b-axis-background").attr("height",Math.max(0,I.height)).attr("width",Math.max(0,I.width)),E.attr("transform","translate("+I.left+", "+I.top+")").select("rect.d2b-axis-background").attr("height",Math.max(0,I.height)).attr("width",Math.max(0,I.width)),p.annotation){var H={x:B.__scale__,y:D.__scale__,x2:Y.__scale__,y2:U.__scale__};C.call(ot,p.annotation,k.filter(function(t){return"back"===t.z}),H),F.call(ot,p.annotation,k.filter(function(t){return"front"===t.z}),H)}M.row(function(t){return s(t.graph.data,m).label+": "+i(t.y,t.y1,t.median)}),p.tooltipConfig(M),M.svgContainer(N).tracker(N).size(I)}function n(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e(t),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a(n),i=r.filter(function(t){return!t.group});return i.forEach(function(t){t.groupType="graph",t.groupGraphs=[t]}),(p.groups(t)||[]).map(function(t){var n={groupType:"group",data:t,label:p.groupLabel(t),color:p.groupColor(t)};return n.groupGraphs=r.filter(function(t){return n.label===t.group}),n.groupGraphs.forEach(function(t){t.color=n.color}),n}).concat(i)}function e(t){return p.sets(t).map(function(t,n){var e={};return{data:t,key:p.setKey(t,n),xType:p.setXType(t)||"x",yType:p.setYType(t)||"y",generators:p.setGenerators(t).map(function(t,n){var r=t.type();return 0!==n&&(t.pannotation||t.pannotations||function(){})(null),t.annotation(p.annotation).key(p.graphKey),e[r]=e[r]||0,{data:t,key:r+"-"+(e[r]+=1),generator:t}}),graphs:r(t)}})}function r(t){return p.setGraphs(t).map(function(t,n){return{data:t,label:p.graphLabel(t)||"",key:p.graphKey(t,n),color:p.graphColor(t),group:p.graphGroup(t),annotations:p.graphAnnotations(t)||[],tooltipConfig:p.graphTooltipConfig(t)||function(){}}})}function a(t){return[].concat.apply([],t.map(function(t){return t.graphs}))}function o(t){t.forEach(function(t){t.groupGraphs.forEach(function(n){return n.data.hidden=t.data.hidden})})}function u(t,n){var e=n.selectAll(".d2b-graph"),r=n.selectAll(".d2b-axis-annotation");t.groupGraphs.some(function(t){return!t.data.hidden})&&(e.style("opacity",.2).filter(function(n){return t.data===n.data||(t.groupGraphs.map(function(t){return t.data})||[]).indexOf(n.data)>-1}).style("opacity",""),r.style("opacity",.2).filter(function(n){return t.data===n.graph||(t.groupGraphs.map(function(t){return t.data})||[]).indexOf(n.graph)>-1}).style("opacity",""))}function c(t,n){n.selectAll(".d2b-graph").style("opacity",1),n.selectAll(".d2b-axis-annotation").style("opacity",1)}function s(t,n){return n.filter(function(n){return n.data===t||n.data===t.data})[0]}function l(t,n,e){n.length||(t.hidden=!0);var r=t.axis||e.axis,i=t.scale?t.scale.copy():d(n,e),a=i.domain();if(!i.bandwidth&&t.linearPadding){var o=a[1]-a[0];a[0]=a[0]+o*t.linearPadding[0],a[1]=a[1]+o*t.linearPadding[1]}i.domain(a),t.__axis__=r.scale(i),t.__scale__=i}function d(t,n){var e=t.some(function(t){return isNaN(t)}),r=e?X.set(t).values():X.extent(t).map(function(t){return t||0});return(e?n.band:n.linear).domain(r)}var p={},b=function n(e){e.call(p.chartFrame),p.legend.empty(function(t){return t.data.hidden}).setEmpty(function(t,n,e){return t.data.hidden=e}).html(function(t){return t.label}).key(function(t){return t.label}).color(function(t){return t.color});var r=e.selection?e.selection():e;return r.each(function(n){t.call(this,n,e!==r?e:null)}),r.dispatch("chart-axis-updated",{bubbles:!0}),n};f(b,p).addProp("plane",B()).addProp("annotation",G.annotation?G.annotation():null).addProp("chartFrame",y().legendEnabled(!0).breadcrumbsEnabled(!1)).addProp("legend",v().clickable(!0).dblclickable(!0)).addPropFunctor("tooltipConfig",function(t){return t.tooltipConfig}).addPropFunctor("duration",250).addPropFunctor("x",{}).addPropFunctor("y",{}).addPropFunctor("x2",{}).addPropFunctor("y2",{}).addPropFunctor("clipPlane",!0).addPropFunctor("annotations",function(t){return t.annotations}).addPropFunctor("groups",function(t){return t.groups}).addPropFunctor("sets",function(t){return t.sets}).addPropFunctor("groupLabel",function(t){return t.label}).addPropFunctor("groupColor",function(t){return Q(p.groupLabel(t))}).addPropFunctor("setKey",function(t,n){return n}).addPropFunctor("setGenerators",function(t){return t.generators}).addPropFunctor("setXType",function(t){return t.xType}).addPropFunctor("setYType",function(t){return t.yType}).addPropFunctor("setGraphs",function(t){return t.graphs}).addPropFunctor("graphKey",function(t){return t.label}).addPropFunctor("graphLabel",function(t){return t.label}).addPropFunctor("graphGroup",function(t){return t.group}).addPropFunctor("graphColor",function(t){return Q(p.graphLabel(t))}).addPropFunctor("graphTooltipConfig",function(t){return t.tooltipConfig}).addPropFunctor("graphAnnotations",function(t){return t.annotations}).addPropFunctor("annotationKey",function(t,n){return n}).addPropFunctor("annotationXType",function(t){return t.xType}).addPropFunctor("annotationYType",function(t){return t.yType}).addPropFunctor("annotationZ",function(t){return t.z}).addPropFunctor("annotationX",function(t){return t.x}).addPropFunctor("annotationY",function(t){return t.y}).addPropFunctor("annotationX2",function(t){return t.x2}).addPropFunctor("annotationY2",function(t){return t.y2}).addPropFunctor("annotationColor",function(t){return t.color});var g=X.scaleBand(),_=X.scaleLinear(),x={x:{band:g.copy(),linear:_.copy(),axis:X.axisBottom()},y:{band:g.copy(),linear:_.copy(),axis:X.axisLeft()},x2:{band:g.copy(),linear:_.copy(),axis:X.axisTop()},y2:{band:g.copy(),linear:_.copy(),axis:X.axisRight()}};return b}function U(){function t(t,n){t.select(".d2b-breadcrumbs-container").datum(n).transition("sunburst-breadcrumbs").duration(100).call(r.breadcrumbs)}function n(e){var i=e.select(".d2b-sunburst-chart"),a=e.selectAll(".d2b-sunburst-arc.d2b-sunburst-level-0").datum(),o=a.selected;t(e,[o]),i.selectAll(".d2b-sunburst-arc").call(r.tooltip.clear).call(r.tooltip).on("mouseover.breadcrumbs",function(n){var r=n.ancestors();r=r.slice(0,r.indexOf(o)+1),t(e,r.reverse())}).on("mouseout.breadcrumbs",function(){return t(e,[o])}),i.on("mouseout",function(){return n(e)}).on("click",function(){return n(e)})}function e(t,e){var i=X.select(this),a=i.select(".d2b-chart-container"),o=a.node().__size__,u="translate("+o.width/2+", "+o.height/2+")",c=a.selectAll(".d2b-sunburst-chart").data(function(t){return[t]}),s=c.enter().append("g").attr("transform",u).attr("class","d2b-sunburst-chart");c=c.merge(s),e&&(c=c.transition(e)),r.sunburst.outerRadius(r.outerRadius(t,o.width,o.height)).innerRadius(r.innerRadius(t,o.width,o.height)),c.attr("transform",u).call(r.sunburst),n(i)}var r={},i=function t(n){n.call(r.chartFrame),r.sunburst.label(r.label).color(r.color),r.breadcrumbs.color(function(t){return r.color(t.data)}).key(function(t,n){return n}),r.tooltip.color(function(t){return r.color(t.data)});var i=n.selection?n.selection():n;return i.each(function(t){e.call(this,t,n!==i?n:null)}),i.dispatch("chart-sunburst-updated",{bubbles:!0}),t};f(i,r).addProp("chartFrame",y().legendEnabled(!1).breadcrumbsEnabled(!0)).addProp("sunburst",L()).addProp("breadcrumbs",b().html(function(t){return"<div class = 'd2b-sunburst-breadcrumb'>"+u(t)+"</div>"})).addProp("tooltip",d().followMouse(!0).html(function(t){return"<div class = 'd2b-sunburst-tooltip'>"+u(t)+"</div>"})).addPropFunctor("label",function(t){return t.label}).addPropFunctor("color",function(t){return Q(r.label(t))}).addPropFunctor("outerRadius",function(t,n,e){return Math.min(n,e)/2}).addPropFunctor("innerRadius",function(t,n,e){return Math.min(50,Math.min(n,e)/4)});var a=X.format(",.0f"),o=X.format(".1%"),u=function(t){var n=t.value/t.selected.value,e=n>1?"":"<div class = 'd2b-sunburst-percent'>\n        "+o(t.value/t.selected.value)+"\n      </div>";return"\n      <div class = 'd2b-sunburst-label'>\n        "+r.label(t.data)+"\n      </div>\n      <div class = 'd2b-sunburst-value'>\n        "+a(t.value)+"\n        "+e+"\n      </div>\n    "};return i}function I(){function t(r){r.call(e.chartFrame);var i=r.selection?r.selection():r;return i.each(function(t){n.call(this,t,r!==i?r:null)}),i.dispatch("chart-sankey-updated",{bubbles:!0}),t}function n(n,r){var i=X.select(this),a=i.select(".d2b-chart-container"),o=a.node().__size__,u=a.selectAll(".d2b-sankey-chart").data(function(t){return[t]}),c=u.enter().append("g").attr("class","d2b-sankey-chart");return u=u.merge(c),r&&(u=u.transition(r)),u.call(e.sankey.size(o)),u.selectAll(".d2b-sankey-link").call(e.linkTooltip),u.selectAll(".d2b-sankey-node").call(e.nodeTooltip),t}var e={},r=d().html(function(t){return"\n          <b>"+t.key+"</b>:\n          "+t.value+"\n        "}).color(function(t){return t.color}).followMouse(!0),i=d().html(function(t){return"\n          <b>"+t.source.key+"</b>\n          <i class='fa fa-arrow-right d2b-sankey-link-arrow' aria-hidden='true'></i>\n          <b>"+t.target.key+"</b>:\n          "+t.value+"\n        "}).color("#444").followMouse(!0);return f(t,e).addProp("chartFrame",y().legendEnabled(!1).breadcrumbsEnabled(!1)).addProp("sankey",q()).addProp("nodeTooltip",r).addProp("linkTooltip",i),t}Object.defineProperty(n,"__esModule",{value:!0});var X=e(113),G=e(512),H=e(576),V=e(577);!function(t,n){if("undefined"==typeof document)return n;t=t||"";var e=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",e.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}('.d2b-draggable{cursor:move}.d2b-vue-container{width:100%;height:100%}.d2b-pie-chart .d2b-pie-arc path{stroke-width:1px;stroke:#fff}.d2b-pie-chart .d2b-pie-arc text{fill:#fff;font-weight:700;pointer-events:none;text-anchor:middle}.d2b-axis-wrapper .d2b-axis-background{opacity:0}.d2b-chart-breadcrumbs{width:200px;padding-left:10px}.d2b-sunburst-breadcrumb .d2b-sunburst-label,.d2b-sunburst-tooltip .d2b-sunburst-label{text-align:center}.d2b-sunburst-breadcrumb .d2b-sunburst-value,.d2b-sunburst-tooltip .d2b-sunburst-value{font-size:14pt;margin-top:5px}.d2b-sunburst-breadcrumb .d2b-sunburst-percent{float:right}.d2b-breadcrumbs:not(.d2b-vertical) .d2b-sunburst-percent{margin-left:30px}.d2b-sunburst-tooltip{text-align:center}.d2b-sunburst-tooltip .d2b-sunburst-percent{display:inline}.d2b-sunburst-tooltip .d2b-sunburst-percent:before{content:"("}.d2b-sunburst-tooltip .d2b-sunburst-percent:after{content:")"}.d2b-sankey-link-arrow{font-size:10px;position:relative;top:-2px}.d2b-line-graph .d2b-line{stroke-width:1.5px;fill:none}.d2b-area-graph .d2b-area{stroke:none;fill-opacity:0.3}.d2b-box .d2b-box-center,.d2b-box .d2b-box-dash,.d2b-box .d2b-box-outlier,.d2b-box .d2b-box-rect{stroke-width:1.5px}.d2b-box .d2b-box-rect{fill:#fff}.d2b-box .d2b-box-center{stroke-dasharray:3 3}.d2b-box .d2b-box-label{fill:#555;font-size:10pt}.d2b-box .d2b-box-outlier{fill:none;stroke-opacity:0.4}\n/*.d2b-box-graph {\n  .d2b-box-dash,\n  .d2b-box-center,\n  .d2b-box-rect,\n  .d2b-box-outlier {\n    stroke-width: 1.5px;\n  }\n\n  .d2b-box-rect {\n    fill: #fff;\n  }\n\n  .d2b-box-center {\n    stroke-dasharray: 3 3;\n  }\n\n  .d2b-box-label {\n    fill: #555;\n    font-size: 10pt;\n    dominant-baseline: middle;\n  }\n\n  .d2b-box-outlier {\n    fill: none;\n    stroke: #888;\n    opacity: 0.4;\n  }\n}*/.d2b-bar-graph .d2b-bar-group rect{opacity:0.8}.d2b-bubble-pack-graph .d2b-bubble-point{opacity:0.75}.d2b-bubble-pack-graph .d2b-bubble-indicator rect{fill-opacity:0.25;stroke-opacity:0.9;cursor:pointer;stroke-width:1px}.d2b-bubble-pack-graph .d2b-bubble-indicator rect:hover{stroke-width:2px}.d2b-bubble-pack-graph .d2b-bubble-indicator path,.d2b-bubble-pack-graph .d2b-bubble-indicator text{pointer-events:none}.d2b-plane text{font-size:10pt}.d2b-plane .d2b-y2-axis .d2b-axis-label,.d2b-plane .d2b-y-axis .d2b-axis-label{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.d2b-plane .d2b-y2-axis .tick line,.d2b-plane .d2b-y-axis .tick line{stroke-width:0.6px}.d2b-plane .d2b-grid .tick line{shape-rendering:crispEdges;stroke-width:0.5px;stroke-opacity:0.15}.d2b-plane .d2b-grid .tick text{display:none}.d2b-plane .d2b-axis-label{fill:#000;font-weight:700}.d2b-plane path.domain{stroke-width:0.4px;stroke-opacity:0.4}.d2b-sunburst-arc{transition:opacity 0.2s,stroke-width 0.2s;cursor:pointer;opacity:0.9;stroke-width:0.8px;stroke:#fff}.d2b-sunburst-arc.d2b-transparent{fill-opacity:0.2}.d2b-sunburst-label{font-size:8pt;fill-opacity:0.8;pointer-events:none;font-family:arial}.d2b-sunburst-label.d2b-transparent{fill-opacity:0.2}.d2b-sunburst-center{fill-opacity:0;stroke:none;cursor:pointer}.d2b-sunburst-ancestor{opacity:0.4}.d2b-sankey-links path{fill:none}.d2b-sankey-links path,.d2b-sankey-links rect{opacity:0.4}.d2b-sankey-links path:hover,.d2b-sankey-links rect:hover{opacity:0.6}.d2b-sankey-nodes rect{stroke-width:0.3px;stroke:#000;opacity:0.6}.d2b-sankey-nodes rect:hover{opacity:0.8}.d2b-text-anchor-end{text-anchor:end}\n/*.d2b-tooltip-area {\n  pointer-events: none;*/.d2b-tooltip{pointer-events:none;background:#fff;border:1px solid #bbb;border-radius:2px;position:fixed;box-shadow:0px 0px 2px #ccc;margin:0}.d2b-tooltip:before{left:0;top:0;position:absolute;z-index:2;content:""}.d2b-tooltip-content{white-space:nowrap;padding:6px 10px}.d2b-tooltip-top{-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%);margin-left:0;margin-top:-15px}.d2b-tooltip-top:before{-webkit-transform:translateX(-50%);transform:translateX(-50%);left:50%;top:100%;width:0;height:0;border-style:solid;border-color:transparent;border-width:6px 6px 0;border-top-color:inherit}.d2b-tooltip-bottom{-webkit-transform:translate(-50%,0);transform:translate(-50%,0);margin-left:0;margin-top:15px}.d2b-tooltip-bottom:before{-webkit-transform:translateX(-50%);transform:translateX(-50%);left:50%;top:-6px;width:0;height:0;border-style:solid;border-color:transparent;border-width:0 6px 6px;border-bottom-color:inherit}.d2b-tooltip-right{-webkit-transform:translate(0,-50%);transform:translate(0,-50%);margin-left:15px;margin-top:0}.d2b-tooltip-right:before{-webkit-transform:translateY(-50%);transform:translateY(-50%);left:-6px;top:50%;width:0;height:0;border-style:solid;border-color:transparent;border-width:6px 6px 6px 0;border-right-color:inherit}.d2b-tooltip-left{-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%);margin-left:-15px;margin-top:0}.d2b-tooltip-left:before{-webkit-transform:translateY(-50%);transform:translateY(-50%);left:100%;top:50%;width:0;height:0;border-style:solid;border-color:transparent;border-width:6px 0 6px 6px;border-left-color:inherit}\n/*}*/\n/*.d2b-tooltip-axis-area {\n  pointer-events: none;\n  font-family: \'Arial\';*/.d2b-tooltip-marker{stroke-width:2px;stroke:#bbb;stroke-dasharray:5,5}.d2b-tooltip-axis{pointer-events:none;font-family:Arial;opacity:0.9;white-space:nowrap;border:1px solid #ddd;background:hsla(0,0%,100%,.8);position:absolute;box-shadow:0px 0px 2px #ccc}.d2b-tooltip-axis .d2b-tooltip-title{text-align:center;background:rgba(150,165,175,.8);padding:5px 10px;font-weight:700;color:#fff}.d2b-tooltip-axis .d2b-tooltip-content{padding:5px 10px}.d2b-tooltip-axis .d2b-tooltip-content .d2b-tooltip-row{padding-left:5px;border-left-width:3px;border-left-style:solid;margin-bottom:5px}.d2b-tooltip-axis .d2b-tooltip-content .d2b-tooltip-row:last-child{margin-bottom:0px}\n/*}*/.d2b-breadcrumbs{color:#555;font-size:9pt;box-sizing:content-box}.d2b-breadcrumbs .d2b-breadcrumb{border:0px solid transparent;border-left-width:8px;border-bottom-width:1px;padding:6px 13px;margin-bottom:10px;text-transform:uppercase;position:relative}.d2b-breadcrumbs .d2b-breadcrumb:first-child .d2b-breadcrumb-icon:after,.d2b-breadcrumbs .d2b-breadcrumb:last-child .d2b-breadcrumb-icon:after{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:-15.5px;width:13px;height:13px;text-align:center;font-family:FontAwesome;color:#fff;background-color:inherit;padding:5px;border-radius:15px}.d2b-breadcrumbs .d2b-breadcrumb:first-child .d2b-breadcrumb-icon:after{content:"\\f015"}.d2b-breadcrumbs .d2b-breadcrumb:not(:first-child):last-child .d2b-breadcrumb-icon:after{content:"\\f25a"}.d2b-breadcrumbs:not(.d2b-vertical){white-space:nowrap}.d2b-breadcrumbs:not(.d2b-vertical) .d2b-breadcrumb{border-right-width:1px;border-top-width:1px;white-space:nowrap;display:inline-block}.d2b-breadcrumbs:not(.d2b-vertical) .d2b-breadcrumb:not(:last-child){margin-right:20px}.d2b-breadcrumbs:not(.d2b-vertical) .d2b-breadcrumb:not(:last-child):after{width:0;height:0;border-style:solid;border-color:transparent;border-width:6px 0 6px 6px;border-left-color:inherit;position:absolute;z-index:2;content:"";top:50%;left:100%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.d2b-breadcrumbs.d2b-vertical .d2b-breadcrumb{/*&:after {\n      triangle: pointing-right;\n      width: 100px;\n      height: 100px;\n      background-color: inherit;\n      position: absolute;\n      z-index: 2;\n      content: \'\';\n\n      top: 100%;\n      left: 50%;\n\n      transform: translateX(-50%);\n\n    }*/}.d2b-breadcrumbs.d2b-vertical .d2b-breadcrumb:not(:last-child):after{width:0;height:0;border-style:solid;border-color:transparent;border-width:6px 6px 0;border-top-color:inherit;position:absolute;z-index:2;content:"";top:100%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.stuff{display:none}.d2b-legend{color:#555;font-size:9pt}.d2b-legend .d2b-legend-item{border:0px solid transparent;padding:2px;padding-left:18px;position:relative;cursor:pointer}.d2b-legend .d2b-legend-item .d2b-legend-icon{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:7px;width:12px;height:12px}.d2b-legend .d2b-legend-item .d2b-legend-svg-icon{margin-left:-5px;margin-top:-5px;pointer-events:none}.d2b-legend .d2b-legend-item .d2b-legend-svg-icon path,.d2b-legend .d2b-legend-item .d2b-legend-svg-icon text{font-family:FontAwesome;text-anchor:middle;stroke-width:1px;fill-opacity:0.8}.d2b-legend:not(.d2b-vertical) .d2b-legend-item{display:inline-block}.d2b-legend:not(.d2b-vertical) .d2b-legend-item:not(:last-child){margin-right:10px}.d2b-legend:not(.d2b-vertical) .d2b-legend-icon{margin-top:1.5px}.d2b-chart-frame{height:100%;width:100%;position:relative}.d2b-chart-frame .d2b-breadcrumbs-frame,.d2b-chart-frame .d2b-chart,.d2b-chart-frame .d2b-legend-frame{position:absolute;overflow:auto}.d2b-chart-frame .d2b-breadcrumbs-frame .d2b-breadcrumbs,.d2b-chart-frame .d2b-legend-frame .d2b-breadcrumbs{padding-left:10px;padding-right:2px}.d2b-chart-frame .d2b-breadcrumbs-frame:not(.d2b-vertical),.d2b-chart-frame .d2b-legend-frame:not(.d2b-vertical){overflow-y:hidden}.d2b-chart-frame .d2b-breadcrumbs-frame:not(.d2b-vertical) .d2b-breadcrumbs,.d2b-chart-frame .d2b-breadcrumbs-frame:not(.d2b-vertical) .d2b-legend,.d2b-chart-frame .d2b-breadcrumbs-frame:not(.d2b-vertical) .d2b-legend-item,.d2b-chart-frame .d2b-legend-frame:not(.d2b-vertical) .d2b-breadcrumbs,.d2b-chart-frame .d2b-legend-frame:not(.d2b-vertical) .d2b-legend,.d2b-chart-frame .d2b-legend-frame:not(.d2b-vertical) .d2b-legend-item{white-space:nowrap;overflow-y:hidden}.d2b-chart-frame .d2b-breadcrumbs-frame:not(.d2b-vertical).d2b-legend-frame,.d2b-chart-frame .d2b-legend-frame:not(.d2b-vertical).d2b-legend-frame{height:20px;text-align:center}.d2b-chart-frame .d2b-breadcrumbs-frame:not(.d2b-vertical).d2b-breadcrumbs-frame,.d2b-chart-frame .d2b-legend-frame:not(.d2b-vertical).d2b-breadcrumbs-frame{height:55px}.d2b-chart-frame .d2b-breadcrumbs-frame.d2b-vertical .d2b-breadcrumbs-container,.d2b-chart-frame .d2b-breadcrumbs-frame.d2b-vertical .d2b-legend-container,.d2b-chart-frame .d2b-legend-frame.d2b-vertical .d2b-breadcrumbs-container,.d2b-chart-frame .d2b-legend-frame.d2b-vertical .d2b-legend-container{display:table;height:100%;width:100%}.d2b-chart-frame .d2b-breadcrumbs-frame.d2b-vertical .d2b-breadcrumbs-container .d2b-legend,.d2b-chart-frame .d2b-breadcrumbs-frame.d2b-vertical .d2b-legend-container .d2b-legend,.d2b-chart-frame .d2b-legend-frame.d2b-vertical .d2b-breadcrumbs-container .d2b-legend,.d2b-chart-frame .d2b-legend-frame.d2b-vertical .d2b-legend-container .d2b-legend{display:table-cell;vertical-align:middle}.d2b-chart-frame .d2b-breadcrumbs-frame.d2b-vertical .d2b-breadcrumbs-container .d2b-breadcrumbs,.d2b-chart-frame .d2b-breadcrumbs-frame.d2b-vertical .d2b-legend-container .d2b-breadcrumbs,.d2b-chart-frame .d2b-legend-frame.d2b-vertical .d2b-breadcrumbs-container .d2b-breadcrumbs,.d2b-chart-frame .d2b-legend-frame.d2b-vertical .d2b-legend-container .d2b-breadcrumbs{display:table-cell;vertical-align:top}.d2b-chart-frame .d2b-breadcrumbs-frame.d2b-vertical.d2b-breadcrumbs-frame,.d2b-chart-frame .d2b-legend-frame.d2b-vertical.d2b-breadcrumbs-frame{width:180px}.d2b-chart-frame .d2b-breadcrumbs-frame.d2b-vertical.d2b-legend-frame,.d2b-chart-frame .d2b-legend-frame.d2b-vertical.d2b-legend-frame{width:110px}',void 0);var W=function(){return"ontouchstart"in window||window.navigator.msPointerEnabled},Q=X.scaleOrdinal(X.schemeCategory10),Z=function(){return Math.random().toString(36).substr(2,9)},K=function(t){return null===t?NaN:+t};_.tendancy="mean",x.tendancy="median",m.tendancy="mode",w.tendancy="range",j.tendancy="midpoint";var $=Math.PI,J=Math.sqrt(8),tt=Math.sqrt(2),nt={draw:function(t,n){var e=Math.sqrt(n/($+5/4)),r=.3125*e,i=2*Math.asin(.25),a=($/2-i)/2,o=e/J-e*Math.cos(a),u=e*Math.sin(a);t.arc(o,u,e,-a,2*$-i-a),t.lineTo(e*(5/4-1/tt),-e*(1/J+5/4-1/tt)),t.lineTo(e*(5/4-1/tt)-r,-e*(1/J+5/4-1/tt)),t.lineTo(e*(5/4-1/tt)-r,-e*(1/J+7/4-1/tt)),t.lineTo(e*(7/4-1/tt+1/J),-e*(1/J+7/4-1/tt)),t.lineTo(e*(7/4-1/tt+1/J),-e*(5/4-1/tt)+r),t.lineTo(e*(5/4-1/tt+1/J),-e*(5/4-1/tt)+r),t.lineTo(e*(5/4-1/tt+1/J),-e*(5/4-1/tt)),t.closePath()}},et={draw:function(t,n){var e=Math.sqrt(n/($+5/4)),r=2*Math.asin(.25),i=e/4-e*Math.cos(r/2);t.arc(0,i,e,3*-$/2+r/2,$/2-r/2),t.lineTo(e/4,3*e/4),t.lineTo(3*e/4,3*e/4),t.lineTo(3*e/4,5*e/4),t.lineTo(e/4,5*e/4),t.lineTo(e/4,7*e/4),t.lineTo(-e/4,7*e/4),t.lineTo(-e/4,5*e/4),t.lineTo(3*-e/4,5*e/4),t.lineTo(3*-e/4,3*e/4),t.lineTo(-e/4,3*e/4),t.closePath()}},rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},it=(function(){function t(t){this.value=t}function n(n){function e(t,n){return new Promise(function(e,i){var u={key:t,arg:n,resolve:e,reject:i,next:null};o?o=o.next=u:(a=o=u,r(t,n))})}function r(e,a){try{var o=n[e](a),u=o.value;u instanceof t?Promise.resolve(u.value).then(function(t){r("next",t)},function(t){r("throw",t)}):i(o.done?"return":"normal",o.value)}catch(t){i("throw",t)}}function i(t,n){switch(t){case"return":a.resolve({value:n,done:!0});break;case"throw":a.reject(n);break;default:a.resolve({value:n,done:!1})}a=a.next,a?r(a.key,a.arg):o=null}var a,o;this._invoke=e,"function"!=typeof n.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(n.prototype[Symbol.asyncIterator]=function(){return this}),n.prototype.next=function(t){return this._invoke("next",t)},n.prototype.throw=function(t){return this._invoke("throw",t)},n.prototype.return=function(t){return this._invoke("return",t)}}(),function(t){return G.annotation().disable(t.disable()).textWrap(t.textWrap()).notePadding(t.notePadding()).type(t.type()).accessors(t.accessors()).accessorsInverse(t.accessorsInverse()).ids(t.ids()).editMode(t.editMode()).collection(t.collection())}),at=function(t,n,e){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(t){return t.annotation?[t.annotation]:[]},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(t){return t.color},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"translate(0, 0)",u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"translate(0, 0)",c=t.selection?t.selection():t;t.each(function(s){var l=X.select(this),f=r(i)(s),d=l.selectAll("g."+e).data(f),h=d.enter().append("g"),p=d.merge(h),b=d.exit();h.attr("class",e).attr("transform",function(t){return r(u)(s,t)}).style("opacity",0),f.forEach(function(t){t.x=0,t.y=0,t.color=r(a)(s,t)}),f.length&&n&&(p.selectAll("*").remove(),p.call(it(n).annotations(f))),t!==c&&(p=p.transition(t),b=b.transition(t)),p.attr("transform",function(t){return r(o)(s,t)}).style("opacity",1),b.attr("transform",function(t){return r(o)(s,t)}).style("opacity",0).remove()})},ot=function(t,n,e,r){var i=t.selection?t.selection():t,a=i.node(),o=a.__scales||r,u=function(t,n){var e=n[t.xType],r=n[t.yType],i=t.x===1/0?e.range()[0]:e(t.x),a=t.y===1/0?r.range()[0]:r(t.y),o=t.x2===1/0?e.range()[1]:e(t.x2),u=t.y2===1/0?r.range()[1]:r(t.y2);return"translate("+[isNaN(o)?i:Math.min(i,o),isNaN(u)?a:Math.min(a,u)]+")"},c=function(t,n){var e=T(t.data.subject)||{},r=n[t.xType],i=n[t.yType],a=t.x===1/0?r.range()[0]:r(t.x),o=t.y===1/0?i.range()[0]:i(t.y),u=t.x2===1/0?r.range()[1]:r(t.x2),c=t.y2===1/0?i.range()[1]:i(t.y2),s=t.x2?Math.abs(a-u):0,l=t.y2?Math.abs(o-c):0;return t.x2&&t.y2?(e.width=s,e.height=l):t.x2?(e.x1=0,e.x2=s):t.y2&&(e.y1=0,e.y2=l),e.dx=e.dx*s,e.dy=e.dy*l,e};a.__scales={x:r.x.copy(),y:r.y.copy(),x2:r.x2.copy(),y2:r.y2.copy()};var s=i.selectAll(".d2b-axis-annotation").data(e,function(t){return t.key}),l=s.enter().append("g"),f=s.exit();s.selectAll("*").remove(),s=s.merge(l),l.attr("class","d2b-axis-annotation").attr("transform",function(t){return u(t,o)}).style("opacity",0),t!==i&&(s=s.transition(t),f=f.transition(t)),s.attr("transform",function(t){return u(t,r)}).style("opacity",1),f.attr("transform",function(t){return u(t,r)}).style("opacity",0).remove(),s.each(function(e){var a=T(e.data),o=X.select(this),u=it(n);a.x=0,a.y=0,a.color=e.color,a.subject=c(e,r),a.dx=(a.subject.dx||0)+(e.data.dx||0),a.dy=(a.subject.dy||0)+(e.data.dy||0),t!==i?o.transition(t).tween("annotation-tween",function(){var t=this,n=X.interpolateObject(this.__subject||c(e,r),a.subject);return function(r){t.__subject=a.subject=n(r),a.dx=(a.subject.dx||0)+(e.data.dx||0),a.dy=(a.subject.dy||0)+(e.data.dy||0),o.call(u.annotations([a]))}}):o.call(u.annotations([a]))})};n.version="0.0.41",n.textWrap=a,n.textWrapPX=o,n.tweenArc=u,n.tweenNumber=s,n.tweenCentroid=l,n.tooltip=d,n.tooltipAxis=h,n.stack=p,n.breadcrumbs=b,n.legend=v,n.chartFrame=y,n.defaultColor=Q,n.id=Z,n.color=Q,n.omit=g,n.mean=_,n.median=x,n.mode=m,n.range=w,n.midpoint=j,n.toDegrees=O,n.toRadians=k,n.modelBase=f,n.symbolMars=nt,n.symbolVenus=et,n.point=M,n.svgPie=P,n.svgLine=N,n.svgArea=E,n.svgScatter=S,n.svgBar=C,n.svgBoxPlot=z,n.svgBubblePack=R,n.svgSunburst=L,n.svgSankey=q,n.plane=B,n.box=F,n.chartPie=D,n.chartAxis=Y,n.chartSunburst=U,n.chartSankey=I},function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"c",function(){return i}),e.d(n,"b",function(){return a}),e.d(n,"d",function(){return o});var r=1e-12,i=Math.PI,a=i/2,o=2*i},function(t,n,e){"use strict";n.a=function(t,n){if((r=t.length)>1)for(var e,r,i=1,a=t[n[0]],o=a.length;i<r;++i){e=a,a=t[n[i]];for(var u=0;u<o;++u)a[u][1]+=a[u][0]=isNaN(e[u][1])?e[u][0]:e[u][1]}}},function(t,n,e){"use strict";n.a=function(t){for(var n=t.length,e=new Array(n);--n>=0;)e[n]=n;return e}},function(t,n,e){"use strict";n.a=function(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]}},function(t,n,e){"use strict";n.a=function(t,n){return t=+t,n-=t,function(e){return t+n*e}}},function(t,n,e){"use strict";var r=e(75);e.d(n,"b",function(){return r.b}),e.d(n,"d",function(){return r.c}),e.d(n,"e",function(){return r.d});var i=e(297);e.d(n,"c",function(){return i.a});var a=e(298);e.d(n,"a",function(){return a.a})},function(t,n,e){"use strict";function r(t,n){var e,r;return function(){var i=Object(o.h)(this,t),a=i.tween;if(a!==e){r=e=a;for(var u=0,c=r.length;u<c;++u)if(r[u].name===n){r=r.slice(),r.splice(u,1);break}}i.tween=r}}function i(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var a=Object(o.h)(this,t),u=a.tween;if(u!==r){i=(r=u).slice();for(var c={name:n,value:e},s=0,l=i.length;s<l;++s)if(i[s].name===n){i[s]=c;break}s===l&&i.push(c)}a.tween=i}}function a(t,n,e){var r=t._id;return t.each(function(){var t=Object(o.h)(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)}),function(t){return Object(o.f)(t,r).value[n]}}n.b=a;var o=e(6);n.a=function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var a,u=Object(o.f)(this.node(),e).tween,c=0,s=u.length;c<s;++c)if((a=u[c]).name===t)return a.value;return null}return this.each((null==n?r:i)(e,t,n))}},function(t,n,e){"use strict";var r=e(83);n.a=function(t){return t=Object(r.a)(Math.abs(t)),t?t[1]:NaN}},function(t,n,e){"use strict";function r(t,n){return[t>s.o?t-s.w:t<-s.o?t+s.w:t,n]}function i(t,n,e){return(t%=s.w)?n||e?Object(c.a)(o(t),u(n,e)):o(t):n||e?u(n,e):r}function a(t){return function(n,e){return n+=t,[n>s.o?n-s.w:n<-s.o?n+s.w:n,e]}}function o(t){var n=a(t);return n.invert=a(-t),n}function u(t,n){function e(t,n){var e=Object(s.g)(n),u=Object(s.g)(t)*e,c=Object(s.t)(t)*e,l=Object(s.t)(n),f=l*r+u*i;return[Object(s.e)(c*a-f*o,u*r-l*i),Object(s.c)(f*a+c*o)]}var r=Object(s.g)(t),i=Object(s.t)(t),a=Object(s.g)(n),o=Object(s.t)(n);return e.invert=function(t,n){var e=Object(s.g)(n),u=Object(s.g)(t)*e,c=Object(s.t)(t)*e,l=Object(s.t)(n),f=l*a-c*o;return[Object(s.e)(c*a+l*o,u*r+f*i),Object(s.c)(f*r-u*i)]},e}n.b=i;var c=e(152),s=e(0);r.invert=r,n.a=function(t){function n(n){return n=t(n[0]*s.r,n[1]*s.r),n[0]*=s.h,n[1]*=s.h,n}return t=i(t[0]*s.r,t[1]*s.r,t.length>2?t[2]*s.r:0),n.invert=function(n){return n=t.invert(n[0]*s.r,n[1]*s.r),n[0]*=s.h,n[1]*=s.h,n},n}},function(t,n,e){"use strict";function r(t,n,e,r){function f(i,a){return t<=i&&i<=e&&n<=a&&a<=r}function d(i,a,o,u){var c=0,s=0;if(null==i||(c=h(i,o))!==(s=h(a,o))||b(i,a)<0^o>0)do{u.point(0===c||3===c?t:e,c>1?r:n)}while((c=(c+o+4)%4)!==s);else u.point(a[0],a[1])}function h(r,a){return Object(i.a)(r[0]-t)<i.i?a>0?0:3:Object(i.a)(r[0]-e)<i.i?a>0?2:1:Object(i.a)(r[1]-n)<i.i?a>0?1:0:a>0?3:2}function p(t,n){return b(t.x,n.x)}function b(t,n){var e=h(t,1),r=h(n,1);return e!==r?e-r:0===e?n[1]-t[1]:1===e?t[0]-n[0]:2===e?t[1]-n[1]:n[0]-t[0]}return function(i){function h(t,n){f(t,n)&&S.point(t,n)}function b(){for(var n=0,e=0,i=w.length;e<i;++e)for(var a,o,u=w[e],c=1,s=u.length,l=u[0],f=l[0],d=l[1];c<s;++c)a=f,o=d,l=u[c],f=l[0],d=l[1],o<=r?d>r&&(f-a)*(r-o)>(d-o)*(t-a)&&++n:d<=r&&(f-a)*(r-o)<(d-o)*(t-a)&&--n;return n}function v(){S=C,m=[],w=[],E=!0}function y(){var t=b(),n=E&&t,e=(m=Object(c.n)(m)).length;(n||e)&&(i.polygonStart(),n&&(i.lineStart(),d(null,null,1,i),i.lineEnd()),e&&Object(u.a)(m,p,t,d,i),i.polygonEnd()),S=i,m=w=j=null}function g(){F.point=x,w&&w.push(j=[]),N=!0,T=!1,P=A=NaN}function _(){m&&(x(O,k),M&&T&&C.rejoin(),m.push(C.result())),F.point=h,T&&S.lineEnd()}function x(i,a){var u=f(i,a);if(w&&j.push([i,a]),N)O=i,k=a,M=u,N=!1,u&&(S.lineStart(),S.point(i,a));else if(u&&T)S.point(i,a);else{var c=[P=Math.max(l,Math.min(s,P)),A=Math.max(l,Math.min(s,A))],d=[i=Math.max(l,Math.min(s,i)),a=Math.max(l,Math.min(s,a))];Object(o.a)(c,d,t,n,e,r)?(T||(S.lineStart(),S.point(c[0],c[1])),S.point(d[0],d[1]),u||S.lineEnd(),E=!1):u&&(S.lineStart(),S.point(i,a),E=!1)}P=i,A=a,T=u}var m,w,j,O,k,M,P,A,T,N,E,S=i,C=Object(a.a)(),F={point:h,lineStart:g,lineEnd:_,polygonStart:v,polygonEnd:y};return F}}n.a=r;var i=e(0),a=e(155),o=e(378),u=e(156),c=e(2),s=1e9,l=-s},function(t,n,e){"use strict";function r(t){return function(n){var e=new i;for(var r in t)e[r]=t[r];return e.stream=n,e}}function i(){}n.b=r,n.a=function(t){return{stream:r(t)}},i.prototype={constructor:i,point:function(t,n){this.stream.point(t,n)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}}},function(t,n,e){"use strict";n.a=function(t,n,e,r,i){for(var a,o=t.children,u=-1,c=o.length,s=t.value&&(i-e)/t.value;++u<c;)a=o[u],a.x0=n,a.x1=r,a.y0=e,a.y1=e+=a.value*s}},function(t,n,e){"use strict";var r=e(92);n.a=function(t,n){return function(e,i){var a=Object(r.a)(e).mimeType(t).response(n);if(null!=i){if("function"!=typeof i)throw new Error("invalid callback: "+i);return a.get(i)}return a}}},function(t,n,e){"use strict";function r(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:Object(h.a)(n)}function i(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=n?0:t>=e?1:r(t)}}}function a(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=0?n:t>=1?e:r(t)}}}function o(t,n,e,r){var i=t[0],a=t[1],o=n[0],u=n[1];return a<i?(i=e(a,i),o=r(u,o)):(i=e(i,a),o=r(o,u)),function(t){return o(i(t))}}function u(t,n,e,r){var i=Math.min(t.length,n.length)-1,a=new Array(i),o=new Array(i),u=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++u<i;)a[u]=e(t[u],t[u+1]),o[u]=r(n[u],n[u+1]);return function(n){var e=Object(l.b)(t,n,1,i)-1;return o[e](a[e](n))}}function c(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())}function s(t,n){function e(){return s=Math.min(v.length,y.length)>2?u:o,l=h=null,c}function c(n){return(l||(l=s(v,y,_?i(t):t,g)))(+n)}var s,l,h,v=b,y=b,g=f.interpolate,_=!1;return c.invert=function(t){return(h||(h=s(y,v,r,_?a(n):n)))(+t)},c.domain=function(t){return arguments.length?(v=d.a.call(t,p.a),e()):v.slice()},c.range=function(t){return arguments.length?(y=d.b.call(t),e()):y.slice()},c.rangeRound=function(t){return y=d.b.call(t),g=f.interpolateRound,e()},c.clamp=function(t){return arguments.length?(_=!!t,e()):_},c.interpolate=function(t){return arguments.length?(g=t,e()):g},e()}n.c=r,n.a=c,n.b=s;var l=e(2),f=e(4),d=e(16),h=e(93),p=e(173),b=[0,1]},function(t,n,e){"use strict";var r=e(3);e.d(n,"g",function(){return r.a});var i=e(454);e.d(n,"h",function(){return i.a}),e.d(n,"i",function(){return i.b}),e.d(n,"L",function(){return i.a}),e.d(n,"M",function(){return i.b});var a=e(455);e.d(n,"r",function(){return a.a}),e.d(n,"s",function(){return a.b}),e.d(n,"V",function(){return a.a}),e.d(n,"W",function(){return a.b});var o=e(456);e.d(n,"j",function(){return o.a}),e.d(n,"k",function(){return o.b});var u=e(457);e.d(n,"e",function(){return u.a}),e.d(n,"f",function(){return u.b});var c=e(458);e.d(n,"a",function(){return c.b}),e.d(n,"b",function(){return c.a});var s=e(459);e.d(n,"B",function(){return s.g}),e.d(n,"C",function(){return s.h}),e.d(n,"t",function(){return s.g}),e.d(n,"u",function(){return s.h}),e.d(n,"l",function(){return s.c}),e.d(n,"m",function(){return s.d}),e.d(n,"x",function(){return s.k}),e.d(n,"y",function(){return s.l}),e.d(n,"z",function(){return s.m}),e.d(n,"A",function(){return s.n}),e.d(n,"v",function(){return s.i}),e.d(n,"w",function(){return s.j}),e.d(n,"c",function(){return s.a}),e.d(n,"d",function(){return s.b}),e.d(n,"p",function(){return s.e}),e.d(n,"q",function(){return s.f});var l=e(460);e.d(n,"n",function(){return l.a}),e.d(n,"o",function(){return l.b});var f=e(461);e.d(n,"D",function(){return f.a}),e.d(n,"E",function(){return f.b});var d=e(462);e.d(n,"N",function(){return d.a}),e.d(n,"O",function(){return d.b});var h=e(463);e.d(n,"J",function(){return h.a}),e.d(n,"K",function(){return h.b});var p=e(464);e.d(n,"F",function(){return p.a}),e.d(n,"G",function(){return p.b});var b=e(465);e.d(n,"_5",function(){return b.g}),e.d(n,"_6",function(){return b.h}),e.d(n,"X",function(){return b.g}),e.d(n,"Y",function(){return b.h}),e.d(n,"P",function(){return b.c}),e.d(n,"Q",function(){return b.d}),e.d(n,"_1",function(){return b.k}),e.d(n,"_2",function(){return b.l}),e.d(n,"_3",function(){return b.m}),e.d(n,"_4",function(){return b.n}),e.d(n,"Z",function(){return b.i}),e.d(n,"_0",function(){return b.j}),e.d(n,"H",function(){return b.a}),e.d(n,"I",function(){return b.b}),e.d(n,"T",function(){return b.e}),e.d(n,"U",function(){return b.f});var v=e(466);e.d(n,"R",function(){return v.a}),e.d(n,"S",function(){return v.b});var y=e(467);e.d(n,"_7",function(){return y.a}),e.d(n,"_8",function(){return y.b})},function(t,n,e){"use strict";function r(t){this._context=t}r.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}},n.a=function(t){return new r(t)}},function(t,n,e){"use strict";n.a=function(){}},function(t,n,e){"use strict";function r(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6)}function i(t){this._context=t}n.c=r,n.a=i,i.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:r(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:r(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},n.b=function(t){return new i(t)}},function(t,n,e){"use strict";function r(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function i(t,n){this._context=t,this._k=(1-n)/6}n.c=r,n.a=i,i.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:r(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:r(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}},n.b=function t(n){function e(t){return new i(t,n)}return e.tension=function(n){return t(+n)},e}(0)},function(t,n,e){"use strict";var r=(e(102),e(513),e(196),e(514));e.d(n,"c",function(){return r.a});var i=(e(103),e(104),e(515));e.d(n,"d",function(){return i.a});var a=(e(544),e(8),e(108),e(197),e(545));e.d(n,"e",function(){return a.a});var o=(e(546),e(109),e(106));e.d(n,"b",function(){return o.c}),e.d(n,"a",function(){return o.a})},function(t,n,e){"use strict";function r(t){this._context=t}r.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}},n.a=function(t){return new r(t)}},function(t,n,e){"use strict";n.a=function(){}},function(t,n,e){"use strict";function r(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6)}function i(t){this._context=t}n.b=r,n.a=i,i.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:r(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:r(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}}},function(t,n,e){"use strict";function r(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function i(t,n){this._context=t,this._k=(1-n)/6}n.b=r,n.a=i,i.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:r(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:r(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};!function t(n){function e(t){return new i(t,n)}return e.tension=function(n){return t(+n)},e}(0)},function(t,n,e){"use strict";var r=e(25);n.a=function(t,n,e){if(null==e&&(e=r.a),i=t.length){if((n=+n)<=0||i<2)return+e(t[0],0,t);if(n>=1)return+e(t[i-1],i-1,t);var i,a=(i-1)*n,o=Math.floor(a),u=+e(t[o],o,t);return u+(+e(t[o+1],o+1,t)-u)*(a-o)}}},function(t,n,e){"use strict";var r=e(247);e.d(n,"a",function(){return r.a});var i=e(131);e.d(n,"b",function(){return i.a}),e.d(n,"c",function(){return i.b})},function(t,n,e){"use strict";function r(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===o.b&&n.documentElement.namespaceURI===o.b?n.createElement(t):n.createElementNS(e,t)}}function i(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}var a=e(64),o=e(65);n.a=function(t){var n=Object(a.a)(t);return(n.local?i:r)(n)}},function(t,n,e){"use strict";var r=e(65);n.a=function(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),r.a.hasOwnProperty(n)?{space:r.a[n],local:t}:t}},function(t,n,e){"use strict";e.d(n,"b",function(){return r});var r="http://www.w3.org/1999/xhtml";n.a={svg:"http://www.w3.org/2000/svg",xhtml:r,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"}},function(t,n,e){"use strict";var r=e(67);n.a=function(){for(var t,n=r.c;t=n.sourceEvent;)n=t;return n}},function(t,n,e){"use strict";function r(t,n,e){return t=i(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function i(t,n,e){return function(r){var i=l;l=r;try{t.call(this,this.__data__,n,e)}finally{l=i}}}function a(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}})}function o(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,a=n.length;r<a;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function u(t,n,e){var a=s.hasOwnProperty(t.type)?r:i;return function(r,i,o){var u,c=this.__on,s=a(n,i,o);if(c)for(var l=0,f=c.length;l<f;++l)if((u=c[l]).type===t.type&&u.name===t.name)return this.removeEventListener(u.type,u.listener,u.capture),this.addEventListener(u.type,u.listener=s,u.capture=e),void(u.value=n);this.addEventListener(t.type,s,e),u={type:t.type,name:t.name,value:n,listener:s,capture:e},c?c.push(u):this.__on=[u]}}function c(t,n,e,r){var i=l;t.sourceEvent=l,l=t;try{return n.apply(e,r)}finally{l=i}}e.d(n,"c",function(){return l}),n.a=c;var s={},l=null;if("undefined"!=typeof document){"onmouseenter"in document.documentElement||(s={mouseenter:"mouseover",mouseleave:"mouseout"})}n.b=function(t,n,e){var r,i,c=a(t+""),s=c.length;{if(!(arguments.length<2)){for(l=n?u:o,null==e&&(e=!1),r=0;r<s;++r)this.each(l(c[r],n,e));return this}var l=this.node().__on;if(l)for(var f,d=0,h=l.length;d<h;++d)for(r=0,f=l[d];r<s;++r)if((i=c[r]).type===f.type&&i.name===f.name)return f.value}}},function(t,n,e){"use strict";function r(){}n.a=function(t){return null==t?r:function(){return this.querySelector(t)}}},function(t,n,e){"use strict";n.a=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}},function(t,n,e){"use strict";var r=e(9),i=e(134),a=e(137),o=e(138),u=e(41),c=e(139),s=e(140),l=e(136);n.a=function(t,n){var e,f=typeof n;return null==n||"boolean"===f?Object(l.a)(n):("number"===f?u.a:"string"===f?(e=Object(r.a)(n))?(n=e,i.a):s.a:n instanceof r.a?i.a:n instanceof Date?o.a:Array.isArray(n)?a.a:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?c.a:u.a)(t,n)}},function(t,n,e){"use strict";function r(){}function i(t){var n;return t=(t+"").trim().toLowerCase(),(n=m.exec(t))?(n=parseInt(n[1],16),new s(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1)):(n=w.exec(t))?a(parseInt(n[1],16)):(n=j.exec(t))?new s(n[1],n[2],n[3],1):(n=O.exec(t))?new s(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=k.exec(t))?o(n[1],n[2],n[3],n[4]):(n=M.exec(t))?o(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=P.exec(t))?l(n[1],n[2]/100,n[3]/100,1):(n=A.exec(t))?l(n[1],n[2]/100,n[3]/100,n[4]):T.hasOwnProperty(t)?a(T[t]):"transparent"===t?new s(NaN,NaN,NaN,0):null}function a(t){return new s(t>>16&255,t>>8&255,255&t,1)}function o(t,n,e,r){return r<=0&&(t=n=e=NaN),new s(t,n,e,r)}function u(t){return t instanceof r||(t=i(t)),t?(t=t.rgb(),new s(t.r,t.g,t.b,t.opacity)):new s}function c(t,n,e,r){return 1===arguments.length?u(t):new s(t,n,e,null==r?1:r)}function s(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function l(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new h(t,n,e,r)}function f(t){if(t instanceof h)return new h(t.h,t.s,t.l,t.opacity);if(t instanceof r||(t=i(t)),!t)return new h;if(t instanceof h)return t;t=t.rgb();var n=t.r/255,e=t.g/255,a=t.b/255,o=Math.min(n,e,a),u=Math.max(n,e,a),c=NaN,s=u-o,l=(u+o)/2;return s?(c=n===u?(e-a)/s+6*(e<a):e===u?(a-n)/s+2:(n-e)/s+4,s/=l<.5?u+o:2-u-o,c*=60):s=l>0&&l<1?0:c,new h(c,s,l,t.opacity)}function d(t,n,e,r){return 1===arguments.length?f(t):new h(t,n,e,null==r?1:r)}function h(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function p(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}n.a=r,e.d(n,"d",function(){return v}),e.d(n,"c",function(){return y}),n.e=i,n.h=u,n.g=c,n.b=s,n.f=d;var b=e(72),v=.7,y=1/v,g="\\s*([+-]?\\d+)\\s*",_="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",x="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",m=/^#([0-9a-f]{3})$/,w=/^#([0-9a-f]{6})$/,j=new RegExp("^rgb\\("+[g,g,g]+"\\)$"),O=new RegExp("^rgb\\("+[x,x,x]+"\\)$"),k=new RegExp("^rgba\\("+[g,g,g,_]+"\\)$"),M=new RegExp("^rgba\\("+[x,x,x,_]+"\\)$"),P=new RegExp("^hsl\\("+[_,x,x]+"\\)$"),A=new RegExp("^hsla\\("+[_,x,x,_]+"\\)$"),T={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Object(b.a)(r,i,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}}),Object(b.a)(s,c,Object(b.b)(r,{brighter:function(t){return t=null==t?y:Math.pow(y,t),new s(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?v:Math.pow(v,t),new s(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var t=this.opacity;return t=isNaN(t)?1:Math.max(0,Math.min(1,t)),(1===t?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}})),Object(b.a)(h,d,Object(b.b)(r,{brighter:function(t){return t=null==t?y:Math.pow(y,t),new h(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?v:Math.pow(v,t),new h(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new s(p(t>=240?t-240:t+120,i,r),p(t,i,r),p(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}))},function(t,n,e){"use strict";function r(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}n.b=r,n.a=function(t,n,e){t.prototype=n.prototype=e,e.constructor=t}},function(t,n,e){"use strict";function r(t,n,e,r,i){var a=t*t,o=a*t;return((1-3*t+3*a-o)*n+(4-6*a+3*o)*e+(1+3*t+3*a-3*o)*r+o*i)/6}n.a=r,n.b=function(t){var n=t.length-1;return function(e){var i=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),a=t[i],o=t[i+1],u=i>0?t[i-1]:2*a-o,c=i<n-1?t[i+2]:2*o-a;return r((e-i/n)*n,u,a,o,c)}}},function(t,n,e){"use strict";var r=(e(295),e(12));e.d(n,"c",function(){return r.b});var i=e(326);e.d(n,"a",function(){return i.a});var a=e(141);e.d(n,"b",function(){return a.a})},function(t,n,e){"use strict";function r(){return _||(w(i),_=m.now()+x)}function i(){_=0}function a(){this._call=this._time=this._next=null}function o(t,n,e){var r=new a;return r.restart(t,n,e),r}function u(){r(),++p;for(var t,n=d;n;)(t=_-n._time)>=0&&n._call.call(null,t),n=n._next;--p}function c(){_=(g=m.now())+x,p=b=0;try{u()}finally{p=0,l(),_=0}}function s(){var t=m.now(),n=t-g;n>y&&(x-=n,g=t)}function l(){for(var t,n,e=d,r=1/0;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:d=n);h=t,f(r)}function f(t){if(!p){b&&(b=clearTimeout(b));t-_>24?(t<1/0&&(b=setTimeout(c,t-m.now()-x)),v&&(v=clearInterval(v))):(v||(g=m.now(),v=setInterval(s,y)),p=1,w(c))}}n.b=r,n.a=a,n.c=o,n.d=u;var d,h,p=0,b=0,v=0,y=1e3,g=0,_=0,x=0,m="object"==typeof performance&&performance.now?performance:Date,w="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};a.prototype=o.prototype={constructor:a,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?r():+e)+(null==n?0:+n),this._next||h===this||(h?h._next=this:d=this,h=this),this._call=t,this._time=e,f()},stop:function(){this._call&&(this._call=null,this._time=1/0,f())}}},function(t,n,e){"use strict";function r(){}function i(t,n){var e=new r;if(t instanceof r)t.each(function(t,n){e.set(n,t)});else if(Array.isArray(t)){var i,a=-1,o=t.length;if(null==n)for(;++a<o;)e.set(a,t[a]);else for(;++a<o;)e.set(n(i=t[a],a,t),i)}else if(t)for(var u in t)e.set(u,t[u]);return e}e.d(n,"b",function(){return a});var a="$";r.prototype=i.prototype={constructor:r,has:function(t){return a+t in this},get:function(t){return this[a+t]},set:function(t,n){return this[a+t]=n,this},remove:function(t){var n=a+t;return n in this&&delete this[n]},clear:function(){for(var t in this)t[0]===a&&delete this[t]},keys:function(){var t=[];for(var n in this)n[0]===a&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)n[0]===a&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)n[0]===a&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)n[0]===a&&++t;return t},empty:function(){for(var t in this)if(t[0]===a)return!1;return!0},each:function(t){for(var n in this)n[0]===a&&t(this[n],n.slice(1),this)}},n.a=i},function(t,n,e){"use strict";var r=e(78);e.d(n,"e",function(){return r.a});var i=e(341);e.d(n,"c",function(){return i.c}),e.d(n,"d",function(){return i.d}),e.d(n,"a",function(){return i.a}),e.d(n,"b",function(){return i.b});var a=e(342);e.d(n,"h",function(){return a.c}),e.d(n,"i",function(){return a.d}),e.d(n,"f",function(){return a.a}),e.d(n,"g",function(){return a.b})},function(t,n,e){"use strict";function r(t){return new Function("d","return {"+t.map(function(t,n){return JSON.stringify(t)+": d["+n+"]"}).join(",")+"}")}function i(t,n){var e=r(t);return function(r,i){return n(e(r),i,t)}}function a(t){var n=Object.create(null),e=[];return t.forEach(function(t){for(var r in t)r in n||e.push(n[r]=r)}),e}var o={},u={},c=34,s=10,l=13;n.a=function(t){function n(t,n){var a,o,u=e(t,function(t,e){if(a)return a(t,e-1);o=t,a=n?i(t,n):r(t)});return u.columns=o||[],u}function e(t,n){function e(){if(h)return u;if(p)return p=!1,o;var n,e,r=f;if(t.charCodeAt(r)===c){for(;f++<a&&t.charCodeAt(f)!==c||t.charCodeAt(++f)===c;);return(n=f)>=a?h=!0:(e=t.charCodeAt(f++))===s?p=!0:e===l&&(p=!0,t.charCodeAt(f)===s&&++f),t.slice(r+1,n-1).replace(/""/g,'"')}for(;f<a;){if((e=t.charCodeAt(n=f++))===s)p=!0;else if(e===l)p=!0,t.charCodeAt(f)===s&&++f;else if(e!==v)continue;return t.slice(r,n)}return h=!0,t.slice(r,a)}var r,i=[],a=t.length,f=0,d=0,h=a<=0,p=!1;for(t.charCodeAt(a-1)===s&&--a,t.charCodeAt(a-1)===l&&--a;(r=e())!==u;){for(var b=[];r!==o&&r!==u;)b.push(r),r=e();n&&null==(b=n(b,d++))||i.push(b)}return i}function f(n,e){return null==e&&(e=a(n)),[e.map(p).join(t)].concat(n.map(function(n){return e.map(function(t){return p(n[t])}).join(t)})).join("\n")}function d(t){return t.map(h).join("\n")}function h(n){return n.map(p).join(t)}function p(t){return null==t?"":b.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}var b=new RegExp('["'+t+"\n\r]"),v=t.charCodeAt(0);return{parse:n,parseRows:e,format:f,formatRows:d}}},function(t,n,e){"use strict";n.a=function(){return 1e-6*(Math.random()-.5)}},function(t,n,e){"use strict";var r=e(346);e.d(n,"a",function(){return r.a})},function(t,n,e){"use strict";n.a=function(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i}},function(t,n,e){"use strict";var r=e(364);e.d(n,"b",function(){return r.a}),e.d(n,"a",function(){return r.b}),e.d(n,"d",function(){return r.c});var i=e(146);e.d(n,"c",function(){return i.a});var a=e(147);e.d(n,"e",function(){return a.a});var o=e(370);e.d(n,"f",function(){return o.a});var u=e(371);e.d(n,"g",function(){return u.a});var c=e(372);e.d(n,"h",function(){return c.a})},function(t,n,e){"use strict";n.a=function(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}},function(t,n,e){"use strict";n.a=function(t){return t}},function(t,n,e){"use strict";function r(t,n){function e(t,n){var e=Object(i.u)(u-2*a*Object(i.t)(n))/a;return[e*Object(i.t)(t*=a),c-e*Object(i.g)(t)]}var r=Object(i.t)(t),a=(r+Object(i.t)(n))/2;if(Object(i.a)(a)<i.i)return Object(o.a)(t);var u=1+r*(2*a-r),c=Object(i.u)(u)/a;return e.invert=function(t,n){var e=c-n;return[Object(i.e)(t,Object(i.a)(e))/a*Object(i.s)(e),Object(i.c)((u-(t*t+e*e)*a*a)/(2*a))]},e}n.a=r;var i=e(0),a=e(86),o=e(389);n.b=function(){return Object(a.a)(r).scale(155.424).center([0,33.6442])}},function(t,n,e){"use strict";function r(t){var n=0,e=i.o/3,r=Object(a.b)(t),o=r(n,e);return o.parallels=function(t){return arguments.length?r(n=t[0]*i.r,e=t[1]*i.r):[n*i.h,e*i.h]},o}n.a=r;var i=e(0),a=e(10)},function(t,n,e){"use strict";function r(t,n,e){var r=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),null!=r&&t.clipExtent(null),Object(c.a)(e,t.stream(s.a)),n(s.a.result()),null!=r&&t.clipExtent(r),t}function i(t,n,e){return r(t,function(e){var r=n[1][0]-n[0][0],i=n[1][1]-n[0][1],a=Math.min(r/(e[1][0]-e[0][0]),i/(e[1][1]-e[0][1])),o=+n[0][0]+(r-a*(e[1][0]+e[0][0]))/2,u=+n[0][1]+(i-a*(e[1][1]+e[0][1]))/2;t.scale(150*a).translate([o,u])},e)}function a(t,n,e){return i(t,[[0,0],n],e)}function o(t,n,e){return r(t,function(e){var r=+n,i=r/(e[1][0]-e[0][0]),a=(r-i*(e[1][0]+e[0][0]))/2,o=-i*e[0][1];t.scale(150*i).translate([a,o])},e)}function u(t,n,e){return r(t,function(e){var r=+n,i=r/(e[1][1]-e[0][1]),a=-i*e[0][0],o=(r-i*(e[1][1]+e[0][1]))/2;t.scale(150*i).translate([a,o])},e)}n.a=i,n.c=a,n.d=o,n.b=u;var c=e(15),s=e(162)},function(t,n,e){"use strict";function r(t,n){return[t,Object(a.n)(Object(a.v)((a.l+n)/2))]}function i(t){function n(){var n=a.o*f(),u=s(Object(o.a)(s.rotate()).invert([0,0]));return h(null==p?[[u[0]-n,u[1]-n],[u[0]+n,u[1]+n]]:t===r?[[Math.max(u[0]-n,p),e],[Math.min(u[0]+n,i),c]]:[[p,Math.max(u[1]-n,e)],[i,Math.min(u[1]+n,c)]])}var e,i,c,s=Object(u.a)(t),l=s.center,f=s.scale,d=s.translate,h=s.clipExtent,p=null;return s.scale=function(t){return arguments.length?(f(t),n()):f()},s.translate=function(t){return arguments.length?(d(t),n()):d()},s.center=function(t){return arguments.length?(l(t),n()):l()},s.clipExtent=function(t){return arguments.length?(null==t?p=e=i=c=null:(p=+t[0][0],e=+t[0][1],i=+t[1][0],c=+t[1][1]),n()):null==p?null:[[p,e],[i,c]]},n()}n.c=r,n.b=i;var a=e(0),o=e(45),u=e(10);r.invert=function(t,n){return[t,2*Object(a.d)(Object(a.k)(n))-a.l]},n.a=function(){return i(r).scale(961/a.w)}},function(t,n,e){"use strict";function r(t,n){var e,r,i,o,s,l=new c(t),f=+t.value&&(l.value=t.value),d=[l];for(null==n&&(n=a);e=d.pop();)if(f&&(e.value=+e.data.value),(i=n(e.data))&&(s=i.length))for(e.children=new Array(s),o=s-1;o>=0;--o)d.push(r=e.children[o]=new c(i[o])),r.parent=e,r.depth=e.depth+1;return l.eachBefore(u)}function i(){return r(this).eachBefore(o)}function a(t){return t.children}function o(t){t.data=t.data.data}function u(t){var n=0;do{t.height=n}while((t=t.parent)&&t.height<++n)}function c(t){this.data=t,this.depth=this.height=0,this.parent=null}n.c=r,n.b=u,n.a=c;var s=e(403),l=e(404),f=e(405),d=e(406),h=e(407),p=e(408),b=e(409),v=e(410),y=e(411),g=e(412),_=e(413);c.prototype=r.prototype={constructor:c,count:s.a,each:l.a,eachAfter:d.a,eachBefore:f.a,sum:h.a,sort:p.a,path:b.a,ancestors:v.a,descendants:y.a,leaves:g.a,links:_.a,copy:i}},function(t,n,e){"use strict";function r(t){return null==t?null:i(t)}function i(t){if("function"!=typeof t)throw new Error;return t}n.a=r,n.b=i},function(t,n,e){"use strict";function r(t,n,e,r,o,u){for(var c,s,l,f,d,h,p,b,v,y,g,_=[],x=n.children,m=0,w=0,j=x.length,O=n.value;m<j;){l=o-e,f=u-r;do{d=x[w++].value}while(!d&&w<j);for(h=p=d,y=Math.max(f/l,l/f)/(O*t),g=d*d*y,v=Math.max(p/g,g/h);w<j;++w){if(d+=s=x[w].value,s<h&&(h=s),s>p&&(p=s),g=d*d*y,(b=Math.max(p/g,g/h))>v){d-=s;break}v=b}_.push(c={value:d,dice:l<f,children:x.slice(m,w)}),c.dice?Object(i.a)(c,e,r,o,O?r+=f*d/O:u):Object(a.a)(c,e,r,O?e+=l*d/O:o,u),O-=d,m=w}return _}e.d(n,"b",function(){return o}),n.c=r;var i=e(29),a=e(48),o=(1+Math.sqrt(5))/2;n.a=function t(n){function e(t,e,i,a,o){r(n,t,e,i,a,o)}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(o)},function(t,n,e){"use strict";function r(t){return function(n,e){t(null==n?e:null)}}function i(t){var n=t.responseType;return n&&"text"!==n?t.response:t.responseText}var a=e(20),o=e(14);n.a=function(t,n){function e(t){var n,e=h.status;if(!e&&i(h)||e>=200&&e<300||304===e){if(s)try{n=s.call(u,h)}catch(t){return void f.call("error",u,t)}else n=h;f.call("load",u,n)}else f.call("error",u,t)}var u,c,s,l,f=Object(o.a)("beforesend","progress","load","error"),d=Object(a.c)(),h=new XMLHttpRequest,p=null,b=null,v=0;if("undefined"==typeof XDomainRequest||"withCredentials"in h||!/^(http(s)?:)?\/\//.test(t)||(h=new XDomainRequest),"onload"in h?h.onload=h.onerror=h.ontimeout=e:h.onreadystatechange=function(t){h.readyState>3&&e(t)},h.onprogress=function(t){f.call("progress",u,t)},u={header:function(t,n){return t=(t+"").toLowerCase(),arguments.length<2?d.get(t):(null==n?d.remove(t):d.set(t,n+""),u)},mimeType:function(t){return arguments.length?(c=null==t?null:t+"",u):c},responseType:function(t){return arguments.length?(l=t,u):l},timeout:function(t){return arguments.length?(v=+t,u):v},user:function(t){return arguments.length<1?p:(p=null==t?null:t+"",u)},password:function(t){return arguments.length<1?b:(b=null==t?null:t+"",u)},response:function(t){return s=t,u},get:function(t,n){return u.send("GET",t,n)},post:function(t,n){return u.send("POST",t,n)},send:function(n,e,i){return h.open(n,t,!0,p,b),null==c||d.has("accept")||d.set("accept",c+",*/*"),h.setRequestHeader&&d.each(function(t,n){h.setRequestHeader(n,t)}),null!=c&&h.overrideMimeType&&h.overrideMimeType(c),null!=l&&(h.responseType=l),v>0&&(h.timeout=v),null==i&&"function"==typeof e&&(i=e,e=null),null!=i&&1===i.length&&(i=r(i)),null!=i&&u.on("error",i).on("load",function(t){i(null,t)}),f.call("beforesend",u,h),h.send(null==e?null:e),u},abort:function(){return h.abort(),u},on:function(){var t=f.on.apply(f,arguments);return t===f?u:t}},null!=n){if("function"!=typeof n)throw new Error("invalid callback: "+n);return u.get(n)}return u}},function(t,n,e){"use strict";n.a=function(t){return function(){return t}}},function(t,n,e){"use strict";var r=e(95);e.d(n,"d",function(){return r.a}),e.d(n,"c",function(){return r.b}),e.d(n,"f",function(){return r.c}),e.d(n,"g",function(){return r.d}),e.d(n,"h",function(){return r.e});var i=e(176);e.d(n,"e",function(){return i.a});var a=e(177);e.d(n,"a",function(){return a.a});var o=e(468);e.d(n,"b",function(){return o.a})},function(t,n,e){"use strict";function r(t){return i=Object(s.a)(t),a=i.format,o=i.parse,u=i.utcFormat,c=i.utcParse,i}e.d(n,"b",function(){return a}),e.d(n,"c",function(){return o}),e.d(n,"d",function(){return u}),e.d(n,"e",function(){return c}),n.a=r;var i,a,o,u,c,s=e(176);r({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]})},function(t,n,e){"use strict";var r=e(7),i=e(17),a=e(52),o=e(97);n.a=function(){function t(t){var i,a,o,f=t.length,d=!1;for(null==c&&(l=s(o=Object(r.a)())),i=0;i<=f;++i)!(i<f&&u(a=t[i],i,t))===d&&((d=!d)?l.lineStart():l.lineEnd()),d&&l.point(+n(a,i,t),+e(a,i,t));if(o)return l=null,o+""||null}var n=o.a,e=o.b,u=Object(i.a)(!0),c=null,s=a.a,l=null;return t.x=function(e){return arguments.length?(n="function"==typeof e?e:Object(i.a)(+e),t):n},t.y=function(n){return arguments.length?(e="function"==typeof n?n:Object(i.a)(+n),t):e},t.defined=function(n){return arguments.length?(u="function"==typeof n?n:Object(i.a)(!!n),t):u},t.curve=function(n){return arguments.length?(s=n,null!=c&&(l=s(c)),t):s},t.context=function(n){return arguments.length?(null==n?c=l=null:l=s(c=n),t):c},t}},function(t,n,e){"use strict";function r(t){return t[0]}function i(t){return t[1]}n.a=r,n.b=i},function(t,n,e){"use strict";function r(t,n,e){var r=t._x1,i=t._y1,o=t._x2,u=t._y2;if(t._l01_a>a.f){var c=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,s=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*c-t._x0*t._l12_2a+t._x2*t._l01_2a)/s,i=(i*c-t._y0*t._l12_2a+t._y2*t._l01_2a)/s}if(t._l23_a>a.f){var l=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,f=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*l+t._x1*t._l23_2a-n*t._l12_2a)/f,u=(u*l+t._y1*t._l23_2a-e*t._l12_2a)/f}t._context.bezierCurveTo(r,i,o,u,t._x2,t._y2)}function i(t,n){this._context=t,this._alpha=n}n.b=r;var a=e(32),o=e(55);i.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,i=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+i*i,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:r(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}},n.a=function t(n){function e(t){return n?new i(t,n):new o.a(t,0)}return e.alpha=function(n){return t(+n)},e}(.5)},function(t,n,e){"use strict";function r(t){for(var n,e=0,r=-1,i=t.length;++r<i;)(n=+t[r][1])&&(e+=n);return e}n.b=r;var i=e(34);n.a=function(t){var n=t.map(r);return Object(i.a)(t).sort(function(t,e){return n[t]-n[e]})}},function(t,n,e){"use strict";function r(){this._=null}function i(t){t.U=t.C=t.L=t.R=t.P=t.N=null}function a(t,n){var e=n,r=n.R,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function o(t,n){var e=n,r=n.L,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function u(t){for(;t.L;)t=t.L;return t}n.a=i,r.prototype={constructor:r,insert:function(t,n){var e,r,i;if(t){if(n.P=t,n.N=t.N,t.N&&(t.N.P=n),t.N=n,t.R){for(t=t.R;t.L;)t=t.L;t.L=n}else t.R=n;e=t}else this._?(t=u(this._),n.P=null,n.N=t,t.P=t.L=n,e=t):(n.P=n.N=null,this._=n,e=null);for(n.L=n.R=null,n.U=e,n.C=!0,t=n;e&&e.C;)r=e.U,e===r.L?(i=r.R,i&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.R&&(a(this,e),t=e,e=t.U),e.C=!1,r.C=!0,o(this,r))):(i=r.L,i&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.L&&(o(this,e),t=e,e=t.U),e.C=!1,r.C=!0,a(this,r))),e=t.U;this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null;var n,e,r,i=t.U,c=t.L,s=t.R;if(e=c?s?u(s):c:s,i?i.L===t?i.L=e:i.R=e:this._=e,c&&s?(r=e.C,e.C=t.C,e.L=c,c.U=e,e!==s?(i=e.U,e.U=t.U,t=e.R,i.L=t,e.R=s,s.U=e):(e.U=i,i=e,t=e.R)):(r=t.C,t=e),t&&(t.U=i),!r){if(t&&t.C)return void(t.C=!1);do{if(t===this._)break;if(t===i.L){if(n=i.R,n.C&&(n.C=!1,i.C=!0,a(this,i),n=i.R),n.L&&n.L.C||n.R&&n.R.C){n.R&&n.R.C||(n.L.C=!1,n.C=!0,o(this,n),n=i.R),n.C=i.C,i.C=n.R.C=!1,a(this,i),t=this._;break}}else if(n=i.L,n.C&&(n.C=!1,i.C=!0,o(this,i),n=i.L),n.L&&n.L.C||n.R&&n.R.C){n.L&&n.L.C||(n.R.C=!1,n.C=!0,a(this,n),n=i.L),n.C=i.C,i.C=n.L.C=!1,o(this,i),t=this._;break}n.C=!0,t=i,i=i.U}while(!t.C);t&&(t.C=!1)}}},n.b=r},function(t,n,e){"use strict";function r(t,n,e,r){var i=[null,null],o=s.e.push(i)-1;return i.left=t,i.right=n,e&&a(i,t,n,e),r&&a(i,n,t,r),s.b[t.index].halfedges.push(o),s.b[n.index].halfedges.push(o),i}function i(t,n,e){var r=[n,e];return r.left=t,r}function a(t,n,e,r){t[0]||t[1]?t.left===e?t[1]=r:t[0]=r:(t[0]=r,t.left=n,t.right=e)}function o(t,n,e,r,i){var a,o=t[0],u=t[1],c=o[0],s=o[1],l=u[0],f=u[1],d=0,h=1,p=l-c,b=f-s;if(a=n-c,p||!(a>0)){if(a/=p,p<0){if(a<d)return;a<h&&(h=a)}else if(p>0){if(a>h)return;a>d&&(d=a)}if(a=r-c,p||!(a<0)){if(a/=p,p<0){if(a>h)return;a>d&&(d=a)}else if(p>0){if(a<d)return;a<h&&(h=a)}if(a=e-s,b||!(a>0)){if(a/=b,b<0){if(a<d)return;a<h&&(h=a)}else if(b>0){if(a>h)return;a>d&&(d=a)}if(a=i-s,b||!(a<0)){if(a/=b,b<0){if(a>h)return;a>d&&(d=a)}else if(b>0){if(a<d)return;a<h&&(h=a)}return!(d>0||h<1)||(d>0&&(t[0]=[c+d*p,s+d*b]),h<1&&(t[1]=[c+h*p,s+h*b]),!0)}}}}}function u(t,n,e,r,i){var a=t[1];if(a)return!0;var o,u,c=t[0],s=t.left,l=t.right,f=s[0],d=s[1],h=l[0],p=l[1],b=(f+h)/2,v=(d+p)/2;if(p===d){if(b<n||b>=r)return;if(f>h){if(c){if(c[1]>=i)return}else c=[b,e];a=[b,i]}else{if(c){if(c[1]<e)return}else c=[b,i];a=[b,e]}}else if(o=(f-h)/(p-d),u=v-o*b,o<-1||o>1)if(f>h){if(c){if(c[1]>=i)return}else c=[(e-u)/o,e];a=[(i-u)/o,i]}else{if(c){if(c[1]<e)return}else c=[(i-u)/o,i];a=[(e-u)/o,e]}else if(d<p){if(c){if(c[0]>=r)return}else c=[n,o*n+u];a=[r,o*r+u]}else{if(c){if(c[0]<n)return}else c=[r,o*r+u];a=[n,o*n+u]}return t[0]=c,t[1]=a,!0}function c(t,n,e,r){for(var i,a=s.e.length;a--;)u(i=s.e[a],t,n,e,r)&&o(i,t,n,e,r)&&(Math.abs(i[0][0]-i[1][0])>s.f||Math.abs(i[0][1]-i[1][1])>s.f)||delete s.e[a]}n.c=r,n.b=i,n.d=a,n.a=c;var s=e(35)},function(t,n,e){"use strict";function r(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===o.b&&n.documentElement.namespaceURI===o.b?n.createElement(t):n.createElementNS(e,t)}}function i(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}var a=e(103),o=e(104);n.a=function(t){var n=Object(a.a)(t);return(n.local?i:r)(n)}},function(t,n,e){"use strict";var r=e(104);n.a=function(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),r.a.hasOwnProperty(n)?{space:r.a[n],local:t}:t}},function(t,n,e){"use strict";e.d(n,"b",function(){return r});var r="http://www.w3.org/1999/xhtml";n.a={svg:"http://www.w3.org/2000/svg",xhtml:r,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"}},function(t,n,e){"use strict";var r=e(106);n.a=function(){for(var t,n=r.c;t=n.sourceEvent;)n=t;return n}},function(t,n,e){"use strict";function r(t,n,e){return t=i(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function i(t,n,e){return function(r){var i=l;l=r;try{t.call(this,this.__data__,n,e)}finally{l=i}}}function a(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}})}function o(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,a=n.length;r<a;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function u(t,n,e){var a=s.hasOwnProperty(t.type)?r:i;return function(r,i,o){var u,c=this.__on,s=a(n,i,o);if(c)for(var l=0,f=c.length;l<f;++l)if((u=c[l]).type===t.type&&u.name===t.name)return this.removeEventListener(u.type,u.listener,u.capture),this.addEventListener(u.type,u.listener=s,u.capture=e),void(u.value=n);this.addEventListener(t.type,s,e),u={type:t.type,name:t.name,value:n,listener:s,capture:e},c?c.push(u):this.__on=[u]}}function c(t,n,e,r){var i=l;t.sourceEvent=l,l=t;try{return n.apply(e,r)}finally{l=i}}e.d(n,"c",function(){return l}),n.a=c;var s={},l=null;if("undefined"!=typeof document){"onmouseenter"in document.documentElement||(s={mouseenter:"mouseover",mouseleave:"mouseout"})}n.b=function(t,n,e){var r,i,c=a(t+""),s=c.length;{if(!(arguments.length<2)){for(l=n?u:o,null==e&&(e=!1),r=0;r<s;++r)this.each(l(c[r],n,e));return this}var l=this.node().__on;if(l)for(var f,d=0,h=l.length;d<h;++d)for(r=0,f=l[d];r<s;++r)if((i=c[r]).type===f.type&&i.name===f.name)return f.value}}},function(t,n,e){"use strict";n.a=function(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]}},function(t,n,e){"use strict";function r(){}n.a=function(t){return null==t?r:function(){return this.querySelector(t)}}},function(t,n,e){"use strict";n.a=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}},function(t,n,e){"use strict";var r=e(7),i=e(24),a=e(57),o=e(204);n.a=function(){function t(t){var i,a,o,f=t.length,d=!1;for(null==c&&(l=s(o=Object(r.a)())),i=0;i<=f;++i)!(i<f&&u(a=t[i],i,t))===d&&((d=!d)?l.lineStart():l.lineEnd()),d&&l.point(+n(a,i,t),+e(a,i,t));if(o)return l=null,o+""||null}var n=o.a,e=o.b,u=Object(i.a)(!0),c=null,s=a.a,l=null;return t.x=function(e){return arguments.length?(n="function"==typeof e?e:Object(i.a)(+e),t):n},t.y=function(n){return arguments.length?(e="function"==typeof n?n:Object(i.a)(+n),t):e},t.defined=function(n){return arguments.length?(u="function"==typeof n?n:Object(i.a)(!!n),t):u},t.curve=function(n){return arguments.length?(s=n,null!=c&&(l=s(c)),t):s},t.context=function(n){return arguments.length?(null==n?c=l=null:l=s(c=n),t):c},t}},function(t,n,e){"use strict";function r(t,n,e){var r=t._x1,i=t._y1,o=t._x2,u=t._y2;if(t._l01_a>a.a){var c=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,s=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*c-t._x0*t._l12_2a+t._x2*t._l01_2a)/s,i=(i*c-t._y0*t._l12_2a+t._y2*t._l01_2a)/s}if(t._l23_a>a.a){var l=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,f=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*l+t._x1*t._l23_2a-n*t._l12_2a)/f,u=(u*l+t._y1*t._l23_2a-e*t._l12_2a)/f}t._context.bezierCurveTo(r,i,o,u,t._x2,t._y2)}function i(t,n){this._context=t,this._alpha=n}n.b=r;var a=e(37),o=e(60);i.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,i=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+i*i,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:r(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}},n.a=function t(n){function e(t){return n?new i(t,n):new o.a(t,0)}return e.alpha=function(n){return t(+n)},e}(.5)},function(t,n,e){"use strict";function r(t){for(var n,e=0,r=-1,i=t.length;++r<i;)(n=+t[r][1])&&(e+=n);return e}n.b=r;var i=e(39);n.a=function(t){var n=t.map(r);return Object(i.a)(t).sort(function(t,e){return n[t]-n[e]})}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(223);e.d(n,"version",function(){return r.a});var i=e(2);e.d(n,"bisect",function(){return i.b}),e.d(n,"bisectRight",function(){return i.d}),e.d(n,"bisectLeft",function(){return i.c}),e.d(n,"ascending",function(){return i.a}),e.d(n,"bisector",function(){return i.e}),e.d(n,"cross",function(){return i.f}),e.d(n,"descending",function(){return i.g}),e.d(n,"deviation",function(){return i.h}),e.d(n,"extent",function(){return i.i}),e.d(n,"histogram",function(){return i.j}),e.d(n,"thresholdFreedmanDiaconis",function(){return i.w}),e.d(n,"thresholdScott",function(){return i.x}),e.d(n,"thresholdSturges",function(){return i.y}),e.d(n,"max",function(){return i.k}),e.d(n,"mean",function(){return i.l}),e.d(n,"median",function(){return i.m}),e.d(n,"merge",function(){return i.n}),e.d(n,"min",function(){return i.o}),e.d(n,"pairs",function(){return i.p}),e.d(n,"permute",function(){return i.q}),e.d(n,"quantile",function(){return i.r}),e.d(n,"range",function(){return i.s}),e.d(n,"scan",function(){return i.t}),e.d(n,"shuffle",function(){return i.u}),e.d(n,"sum",function(){return i.v}),e.d(n,"ticks",function(){return i.B}),e.d(n,"tickIncrement",function(){return i.z}),e.d(n,"tickStep",function(){return i.A}),e.d(n,"transpose",function(){return i.C}),e.d(n,"variance",function(){return i.D}),e.d(n,"zip",function(){return i.E});var a=e(240);e.d(n,"axisTop",function(){return a.d}),e.d(n,"axisRight",function(){return a.c}),e.d(n,"axisBottom",function(){return a.a}),e.d(n,"axisLeft",function(){return a.b});var o=e(244);e.d(n,"brush",function(){return o.a}),e.d(n,"brushX",function(){return o.c}),e.d(n,"brushY",function(){return o.d}),e.d(n,"brushSelection",function(){return o.b});var u=e(330);e.d(n,"chord",function(){return u.a}),e.d(n,"ribbon",function(){return u.b});var c=e(20);e.d(n,"nest",function(){return c.d}),e.d(n,"set",function(){return c.e}),e.d(n,"map",function(){return c.c}),e.d(n,"keys",function(){return c.b}),e.d(n,"values",function(){return c.f}),e.d(n,"entries",function(){return c.a});var s=e(9);e.d(n,"color",function(){return s.a}),e.d(n,"rgb",function(){return s.f}),e.d(n,"hsl",function(){return s.d}),e.d(n,"lab",function(){return s.e}),e.d(n,"hcl",function(){return s.c}),e.d(n,"cubehelix",function(){return s.b});var l=e(14);e.d(n,"dispatch",function(){return l.a});var f=e(62);e.d(n,"drag",function(){return f.a}),e.d(n,"dragDisable",function(){return f.b}),e.d(n,"dragEnable",function(){return f.c});var d=e(77);e.d(n,"dsvFormat",function(){return d.e}),e.d(n,"csvParse",function(){return d.c}),e.d(n,"csvParseRows",function(){return d.d}),e.d(n,"csvFormat",function(){return d.a}),e.d(n,"csvFormatRows",function(){return d.b}),e.d(n,"tsvParse",function(){return d.h}),e.d(n,"tsvParseRows",function(){return d.i}),e.d(n,"tsvFormat",function(){return d.f}),e.d(n,"tsvFormatRows",function(){return d.g});var h=e(143);e.d(n,"easeLinear",function(){return h.y}),e.d(n,"easeQuad",function(){return h.D}),e.d(n,"easeQuadIn",function(){return h.E}),e.d(n,"easeQuadOut",function(){return h.G}),e.d(n,"easeQuadInOut",function(){return h.F}),e.d(n,"easeCubic",function(){return h.m}),e.d(n,"easeCubicIn",function(){return h.n}),e.d(n,"easeCubicOut",function(){return h.p}),e.d(n,"easeCubicInOut",function(){return h.o}),e.d(n,"easePoly",function(){return h.z}),e.d(n,"easePolyIn",function(){return h.A}),e.d(n,"easePolyOut",function(){return h.C}),e.d(n,"easePolyInOut",function(){return h.B}),e.d(n,"easeSin",function(){return h.H}),e.d(n,"easeSinIn",function(){return h.I}),e.d(n,"easeSinOut",function(){return h.K}),e.d(n,"easeSinInOut",function(){return h.J}),e.d(n,"easeExp",function(){return h.u}),e.d(n,"easeExpIn",function(){return h.v}),e.d(n,"easeExpOut",function(){return h.x}),e.d(n,"easeExpInOut",function(){return h.w}),e.d(n,"easeCircle",function(){return h.i}),e.d(n,"easeCircleIn",function(){return h.j}),e.d(n,"easeCircleOut",function(){return h.l}),e.d(n,"easeCircleInOut",function(){return h.k}),e.d(n,"easeBounce",function(){return h.e}),e.d(n,"easeBounceIn",function(){return h.f}),e.d(n,"easeBounceOut",function(){return h.h}),e.d(n,"easeBounceInOut",function(){return h.g}),e.d(n,"easeBack",function(){return h.a}),e.d(n,"easeBackIn",function(){return h.b}),e.d(n,"easeBackOut",function(){return h.d}),e.d(n,"easeBackInOut",function(){return h.c}),e.d(n,"easeElastic",function(){return h.q}),e.d(n,"easeElasticIn",function(){return h.r}),e.d(n,"easeElasticOut",function(){return h.t}),e.d(n,"easeElasticInOut",function(){return h.s});var p=e(343);e.d(n,"forceCenter",function(){return p.a}),e.d(n,"forceCollide",function(){return p.b}),e.d(n,"forceLink",function(){return p.c}),e.d(n,"forceManyBody",function(){return p.d}),e.d(n,"forceRadial",function(){return p.e}),e.d(n,"forceSimulation",function(){return p.f}),e.d(n,"forceX",function(){return p.g}),e.d(n,"forceY",function(){return p.h});var b=e(82);e.d(n,"formatDefaultLocale",function(){return b.b}),e.d(n,"format",function(){return b.a}),e.d(n,"formatPrefix",function(){return b.d}),e.d(n,"formatLocale",function(){return b.c}),e.d(n,"formatSpecifier",function(){return b.e}),e.d(n,"precisionFixed",function(){return b.f}),e.d(n,"precisionPrefix",function(){return b.g}),e.d(n,"precisionRound",function(){return b.h});var v=e(373);e.d(n,"geoArea",function(){return v.c}),e.d(n,"geoBounds",function(){return v.h}),e.d(n,"geoCentroid",function(){return v.i}),e.d(n,"geoCircle",function(){return v.j}),e.d(n,"geoClipAntimeridian",function(){return v.k}),e.d(n,"geoClipCircle",function(){return v.l}),e.d(n,"geoClipExtent",function(){return v.m}),e.d(n,"geoClipRectangle",function(){return v.n}),e.d(n,"geoContains",function(){return v.u}),e.d(n,"geoDistance",function(){return v.v}),e.d(n,"geoGraticule",function(){return v.A}),e.d(n,"geoGraticule10",function(){return v.B}),e.d(n,"geoInterpolate",function(){return v.D}),e.d(n,"geoLength",function(){return v.E}),e.d(n,"geoPath",function(){return v.L}),e.d(n,"geoAlbers",function(){return v.a}),e.d(n,"geoAlbersUsa",function(){return v.b}),e.d(n,"geoAzimuthalEqualArea",function(){return v.d}),e.d(n,"geoAzimuthalEqualAreaRaw",function(){return v.e}),e.d(n,"geoAzimuthalEquidistant",function(){return v.f}),e.d(n,"geoAzimuthalEquidistantRaw",function(){return v.g}),e.d(n,"geoConicConformal",function(){return v.o}),e.d(n,"geoConicConformalRaw",function(){return v.p}),e.d(n,"geoConicEqualArea",function(){return v.q}),e.d(n,"geoConicEqualAreaRaw",function(){return v.r}),e.d(n,"geoConicEquidistant",function(){return v.s}),e.d(n,"geoConicEquidistantRaw",function(){return v.t}),e.d(n,"geoEquirectangular",function(){return v.w}),e.d(n,"geoEquirectangularRaw",function(){return v.x}),e.d(n,"geoGnomonic",function(){return v.y}),e.d(n,"geoGnomonicRaw",function(){return v.z}),e.d(n,"geoIdentity",function(){return v.C}),e.d(n,"geoProjection",function(){return v.M}),e.d(n,"geoProjectionMutator",function(){return v.N}),e.d(n,"geoMercator",function(){return v.F}),e.d(n,"geoMercatorRaw",function(){return v.G}),e.d(n,"geoNaturalEarth1",function(){return v.H}),e.d(n,"geoNaturalEarth1Raw",function(){return v.I}),e.d(n,"geoOrthographic",function(){return v.J}),e.d(n,"geoOrthographicRaw",function(){return v.K}),e.d(n,"geoStereographic",function(){return v.P}),e.d(n,"geoStereographicRaw",function(){return v.Q}),e.d(n,"geoTransverseMercator",function(){return v.T}),e.d(n,"geoTransverseMercatorRaw",function(){return v.U}),e.d(n,"geoRotation",function(){return v.O}),e.d(n,"geoStream",function(){return v.R}),e.d(n,"geoTransform",function(){return v.S});var y=e(401);e.d(n,"cluster",function(){return y.a}),e.d(n,"hierarchy",function(){return y.b}),e.d(n,"pack",function(){return y.c}),e.d(n,"packSiblings",function(){return y.e}),e.d(n,"packEnclose",function(){return y.d}),e.d(n,"partition",function(){return y.f}),e.d(n,"stratify",function(){return y.g}),e.d(n,"tree",function(){return y.h}),e.d(n,"treemap",function(){return y.i}),e.d(n,"treemapBinary",function(){return y.j}),e.d(n,"treemapDice",function(){return y.k}),e.d(n,"treemapSlice",function(){return y.m}),e.d(n,"treemapSliceDice",function(){return y.n}),e.d(n,"treemapSquarify",function(){return y.o}),e.d(n,"treemapResquarify",function(){return y.l});var g=e(4);e.d(n,"interpolate",function(){return g.interpolate}),e.d(n,"interpolateArray",function(){return g.interpolateArray}),e.d(n,"interpolateBasis",function(){return g.interpolateBasis}),e.d(n,"interpolateBasisClosed",function(){return g.interpolateBasisClosed}),e.d(n,"interpolateDate",function(){return g.interpolateDate}),e.d(n,"interpolateNumber",function(){return g.interpolateNumber}),e.d(n,"interpolateObject",function(){return g.interpolateObject}),e.d(n,"interpolateRound",function(){return g.interpolateRound}),e.d(n,"interpolateString",function(){return g.interpolateString}),e.d(n,"interpolateTransformCss",function(){return g.interpolateTransformCss}),e.d(n,"interpolateTransformSvg",function(){return g.interpolateTransformSvg}),e.d(n,"interpolateZoom",function(){return g.interpolateZoom}),e.d(n,"interpolateRgb",function(){return g.interpolateRgb}),e.d(n,"interpolateRgbBasis",function(){return g.interpolateRgbBasis}),e.d(n,"interpolateRgbBasisClosed",function(){return g.interpolateRgbBasisClosed}),e.d(n,"interpolateHsl",function(){return g.interpolateHsl}),e.d(n,"interpolateHslLong",function(){return g.interpolateHslLong}),e.d(n,"interpolateLab",function(){return g.interpolateLab}),e.d(n,"interpolateHcl",function(){return g.interpolateHcl}),e.d(n,"interpolateHclLong",function(){return g.interpolateHclLong}),e.d(n,"interpolateCubehelix",function(){return g.interpolateCubehelix}),e.d(n,"interpolateCubehelixLong",function(){return g.interpolateCubehelixLong}),e.d(n,"quantize",function(){return g.quantize});var _=e(7);e.d(n,"path",function(){return _.a});var x=e(423);e.d(n,"polygonArea",function(){return x.a}),e.d(n,"polygonCentroid",function(){return x.b}),e.d(n,"polygonHull",function(){return x.d}),e.d(n,"polygonContains",function(){return x.c}),e.d(n,"polygonLength",function(){return x.e});var m=e(80);e.d(n,"quadtree",function(){return m.a});var w=e(430);e.d(n,"queue",function(){return w.a});var j=e(433);e.d(n,"randomUniform",function(){return j.f}),e.d(n,"randomNormal",function(){return j.e}),e.d(n,"randomLogNormal",function(){return j.d}),e.d(n,"randomBates",function(){return j.a}),e.d(n,"randomIrwinHall",function(){return j.c}),e.d(n,"randomExponential",function(){return j.b});var O=e(438);e.d(n,"request",function(){return O.d}),e.d(n,"html",function(){return O.b}),e.d(n,"json",function(){return O.c}),e.d(n,"text",function(){return O.e}),e.d(n,"xml",function(){return O.g}),e.d(n,"csv",function(){return O.a}),e.d(n,"tsv",function(){return O.f});var k=e(445);e.d(n,"scaleBand",function(){return k.i}),e.d(n,"scalePoint",function(){return k.o}),e.d(n,"scaleIdentity",function(){return k.j}),e.d(n,"scaleLinear",function(){return k.l}),e.d(n,"scaleLog",function(){return k.m}),e.d(n,"scaleOrdinal",function(){return k.n}),e.d(n,"scaleImplicit",function(){return k.k}),e.d(n,"scalePow",function(){return k.p}),e.d(n,"scaleSqrt",function(){return k.t}),e.d(n,"scaleQuantile",function(){return k.q}),e.d(n,"scaleQuantize",function(){return k.r}),e.d(n,"scaleThreshold",function(){return k.u}),e.d(n,"scaleTime",function(){return k.v}),e.d(n,"scaleUtc",function(){return k.w}),e.d(n,"schemeCategory10",function(){return k.x}),e.d(n,"schemeCategory20b",function(){return k.z}),e.d(n,"schemeCategory20c",function(){return k.A}),e.d(n,"schemeCategory20",function(){return k.y}),e.d(n,"interpolateCubehelixDefault",function(){return k.b}),e.d(n,"interpolateRainbow",function(){return k.f}),e.d(n,"interpolateWarm",function(){return k.h}),e.d(n,"interpolateCool",function(){return k.a}),e.d(n,"interpolateViridis",function(){return k.g}),e.d(n,"interpolateMagma",function(){return k.d}),e.d(n,"interpolateInferno",function(){return k.c}),e.d(n,"interpolatePlasma",function(){return k.e}),e.d(n,"scaleSequential",function(){return k.s});var M=e(1);e.d(n,"creator",function(){return M.b}),e.d(n,"local",function(){return M.e}),e.d(n,"matcher",function(){return M.f}),e.d(n,"mouse",function(){return M.g}),e.d(n,"namespace",function(){return M.h}),e.d(n,"namespaces",function(){return M.i}),e.d(n,"clientPoint",function(){return M.a}),e.d(n,"select",function(){return M.j}),e.d(n,"selectAll",function(){return M.k}),e.d(n,"selection",function(){return M.l}),e.d(n,"selector",function(){return M.m}),e.d(n,"selectorAll",function(){return M.n}),e.d(n,"style",function(){return M.o}),e.d(n,"touch",function(){return M.p}),e.d(n,"touches",function(){return M.q}),e.d(n,"window",function(){return M.r}),e.d(n,"event",function(){return M.d}),e.d(n,"customEvent",function(){return M.c});var P=e(178);e.d(n,"arc",function(){return P.a}),e.d(n,"area",function(){return P.b}),e.d(n,"line",function(){return P.v}),e.d(n,"pie",function(){return P.A}),e.d(n,"areaRadial",function(){return P.c}),e.d(n,"radialArea",function(){return P.C}),e.d(n,"lineRadial",function(){return P.w}),e.d(n,"radialLine",function(){return P.D}),e.d(n,"pointRadial",function(){return P.B}),e.d(n,"linkHorizontal",function(){return P.x}),e.d(n,"linkVertical",function(){return P.z}),e.d(n,"linkRadial",function(){return P.y}),e.d(n,"symbol",function(){return P.P}),e.d(n,"symbols",function(){return P.X}),e.d(n,"symbolCircle",function(){return P.Q}),e.d(n,"symbolCross",function(){return P.R}),e.d(n,"symbolDiamond",function(){return P.S}),e.d(n,"symbolSquare",function(){return P.T}),e.d(n,"symbolStar",function(){return P.U}),e.d(n,"symbolTriangle",function(){return P.V}),e.d(n,"symbolWye",function(){return P.W}),e.d(n,"curveBasisClosed",function(){return P.e}),e.d(n,"curveBasisOpen",function(){return P.f}),e.d(n,"curveBasis",function(){return P.d}),e.d(n,"curveBundle",function(){return P.g}),e.d(n,"curveCardinalClosed",function(){return P.i}),e.d(n,"curveCardinalOpen",function(){return P.j}),e.d(n,"curveCardinal",function(){return P.h}),e.d(n,"curveCatmullRomClosed",function(){return P.l}),e.d(n,"curveCatmullRomOpen",function(){return P.m}),e.d(n,"curveCatmullRom",function(){return P.k}),e.d(n,"curveLinearClosed",function(){return P.o}),e.d(n,"curveLinear",function(){return P.n}),e.d(n,"curveMonotoneX",function(){return P.p}),e.d(n,"curveMonotoneY",function(){return P.q}),e.d(n,"curveNatural",function(){return P.r}),e.d(n,"curveStep",function(){return P.s}),e.d(n,"curveStepAfter",function(){return P.t}),e.d(n,"curveStepBefore",function(){return P.u}),e.d(n,"stack",function(){return P.E}),e.d(n,"stackOffsetExpand",function(){return P.G}),e.d(n,"stackOffsetDiverging",function(){return P.F}),e.d(n,"stackOffsetNone",function(){return P.H}),e.d(n,"stackOffsetSilhouette",function(){return P.I}),e.d(n,"stackOffsetWiggle",function(){return P.J}),e.d(n,"stackOrderAscending",function(){return P.K}),e.d(n,"stackOrderDescending",function(){return P.L}),e.d(n,"stackOrderInsideOut",function(){return P.M}),e.d(n,"stackOrderNone",function(){return P.N}),e.d(n,"stackOrderReverse",function(){return P.O});var A=e(51);e.d(n,"timeInterval",function(){return A.g}),e.d(n,"timeMillisecond",function(){return A.h}),e.d(n,"timeMilliseconds",function(){return A.i}),e.d(n,"utcMillisecond",function(){return A.L}),e.d(n,"utcMilliseconds",function(){return A.M}),e.d(n,"timeSecond",function(){return A.r}),e.d(n,"timeSeconds",function(){return A.s}),e.d(n,"utcSecond",function(){return A.V}),e.d(n,"utcSeconds",function(){return A.W}),e.d(n,"timeMinute",function(){return A.j}),e.d(n,"timeMinutes",function(){return A.k}),e.d(n,"timeHour",function(){return A.e}),e.d(n,"timeHours",function(){return A.f}),e.d(n,"timeDay",function(){return A.a}),e.d(n,"timeDays",function(){return A.b}),e.d(n,"timeWeek",function(){return A.B}),e.d(n,"timeWeeks",function(){return A.C}),e.d(n,"timeSunday",function(){return A.t}),e.d(n,"timeSundays",function(){return A.u}),e.d(n,"timeMonday",function(){return A.l}),e.d(n,"timeMondays",function(){return A.m}),e.d(n,"timeTuesday",function(){return A.x}),e.d(n,"timeTuesdays",function(){return A.y}),e.d(n,"timeWednesday",function(){return A.z}),e.d(n,"timeWednesdays",function(){return A.A}),e.d(n,"timeThursday",function(){return A.v}),e.d(n,"timeThursdays",function(){return A.w}),e.d(n,"timeFriday",function(){return A.c}),e.d(n,"timeFridays",function(){return A.d}),e.d(n,"timeSaturday",function(){return A.p}),e.d(n,"timeSaturdays",function(){return A.q}),e.d(n,"timeMonth",function(){return A.n}),e.d(n,"timeMonths",function(){return A.o}),e.d(n,"timeYear",function(){return A.D}),e.d(n,"timeYears",function(){return A.E}),e.d(n,"utcMinute",function(){return A.N}),e.d(n,"utcMinutes",function(){return A.O}),e.d(n,"utcHour",function(){return A.J}),e.d(n,"utcHours",function(){return A.K}),e.d(n,"utcDay",function(){return A.F}),e.d(n,"utcDays",function(){return A.G}),e.d(n,"utcWeek",function(){return A._5}),e.d(n,"utcWeeks",function(){return A._6}),e.d(n,"utcSunday",function(){return A.X}),e.d(n,"utcSundays",function(){return A.Y}),e.d(n,"utcMonday",function(){return A.P}),e.d(n,"utcMondays",function(){return A.Q}),e.d(n,"utcTuesday",function(){return A._1}),e.d(n,"utcTuesdays",function(){return A._2}),e.d(n,"utcWednesday",function(){return A._3}),e.d(n,"utcWednesdays",function(){return A._4}),e.d(n,"utcThursday",function(){return A.Z}),e.d(n,"utcThursdays",function(){return A._0}),e.d(n,"utcFriday",function(){return A.H}),e.d(n,"utcFridays",function(){return A.I}),e.d(n,"utcSaturday",function(){return A.T}),e.d(n,"utcSaturdays",function(){return A.U}),e.d(n,"utcMonth",function(){return A.R}),e.d(n,"utcMonths",function(){return A.S}),e.d(n,"utcYear",function(){return A._7}),e.d(n,"utcYears",function(){return A._8});var T=e(94);e.d(n,"timeFormatDefaultLocale",function(){return T.d}),e.d(n,"timeFormat",function(){return T.c}),e.d(n,"timeParse",function(){return T.f}),e.d(n,"utcFormat",function(){return T.g}),e.d(n,"utcParse",function(){return T.h}),e.d(n,"timeFormatLocale",function(){return T.e}),e.d(n,"isoFormat",function(){return T.a}),e.d(n,"isoParse",function(){return T.b});var N=e(42);e.d(n,"now",function(){return N.b}),e.d(n,"timer",function(){return N.d}),e.d(n,"timerFlush",function(){return N.e}),e.d(n,"timeout",function(){return N.c}),e.d(n,"interval",function(){return N.a});var E=e(74);e.d(n,"transition",function(){return E.c}),e.d(n,"active",function(){return E.a}),e.d(n,"interrupt",function(){return E.b});var S=e(502);e.d(n,"voronoi",function(){return S.a});var C=e(507);e.d(n,"zoom",function(){return C.a}),e.d(n,"zoomTransform",function(){return C.c}),e.d(n,"zoomIdentity",function(){return C.b})},function(t,n,e){"use strict";e.d(n,"b",function(){return o}),e.d(n,"a",function(){return u});var r=e(19),i=e(115),a=Object(i.a)(r.a),o=a.right,u=a.left;n.c=o},function(t,n,e){"use strict";function r(t){return function(n,e){return Object(i.a)(t(n),e)}}var i=e(19);n.a=function(t){return 1===t.length&&(t=r(t)),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var a=r+i>>>1;t(n[a],e)<0?r=a+1:i=a}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var a=r+i>>>1;t(n[a],e)>0?i=a:r=a+1}return r}}}},function(t,n,e){"use strict";function r(t,n){return[t,n]}n.b=r,n.a=function(t,n){null==n&&(n=r);for(var e=0,i=t.length-1,a=t[0],o=new Array(i<0?0:i);e<i;)o[e]=n(a,a=t[++e]);return o}},function(t,n,e){"use strict";var r=e(118);n.a=function(t,n){var e=Object(r.a)(t,n);return e?Math.sqrt(e):e}},function(t,n,e){"use strict";var r=e(25);n.a=function(t,n){var e,i,a=t.length,o=0,u=-1,c=0,s=0;if(null==n)for(;++u<a;)isNaN(e=Object(r.a)(t[u]))||(i=e-c,c+=i/++o,s+=i*(e-c));else for(;++u<a;)isNaN(e=Object(r.a)(n(t[u],u,t)))||(i=e-c,c+=i/++o,s+=i*(e-c));if(o>1)return s/(o-1)}},function(t,n,e){"use strict";n.a=function(t,n){var e,r,i,a=t.length,o=-1;if(null==n){for(;++o<a;)if(null!=(e=t[o])&&e>=e)for(r=i=e;++o<a;)null!=(e=t[o])&&(r>e&&(r=e),i<e&&(i=e))}else for(;++o<a;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=i=e;++o<a;)null!=(e=n(t[o],o,t))&&(r>e&&(r=e),i<e&&(i=e));return[r,i]}},function(t,n,e){"use strict";e.d(n,"b",function(){return i}),e.d(n,"a",function(){return a});var r=Array.prototype,i=r.slice,a=r.map},function(t,n,e){"use strict";n.a=function(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),a=new Array(i);++r<i;)a[r]=t+r*e;return a}},function(t,n,e){"use strict";function r(t,n,e){var r=(n-t)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),c=r/Math.pow(10,i);return i>=0?(c>=a?10:c>=o?5:c>=u?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(c>=a?10:c>=o?5:c>=u?2:1)}function i(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),c=r/i;return c>=a?i*=10:c>=o?i*=5:c>=u&&(i*=2),n<t?-i:i}n.b=r,n.c=i;var a=Math.sqrt(50),o=Math.sqrt(10),u=Math.sqrt(2);n.a=function(t,n,e){var i,a,o,u,c=-1;if(n=+n,t=+t,e=+e,t===n&&e>0)return[t];if((i=n<t)&&(a=t,t=n,n=a),0===(u=r(t,n,e))||!isFinite(u))return[];if(u>0)for(t=Math.ceil(t/u),n=Math.floor(n/u),o=new Array(a=Math.ceil(n-t+1));++c<a;)o[c]=(t+c)*u;else for(t=Math.floor(t*u),n=Math.ceil(n*u),o=new Array(a=Math.ceil(t-n+1));++c<a;)o[c]=(t-c)/u;return i&&o.reverse(),o}},function(t,n,e){"use strict";n.a=function(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1}},function(t,n,e){"use strict";n.a=function(t,n){var e,r,i=t.length,a=-1;if(null==n){for(;++a<i;)if(null!=(e=t[a])&&e>=e)for(r=e;++a<i;)null!=(e=t[a])&&r>e&&(r=e)}else for(;++a<i;)if(null!=(e=n(t[a],a,t))&&e>=e)for(r=e;++a<i;)null!=(e=n(t[a],a,t))&&r>e&&(r=e);return r}},function(t,n,e){"use strict";function r(t){return t.length}var i=e(124);n.a=function(t){if(!(o=t.length))return[];for(var n=-1,e=Object(i.a)(t,r),a=new Array(e);++n<e;)for(var o,u=-1,c=a[n]=new Array(o);++u<o;)c[u]=t[u][n];return a}},function(t,n,e){"use strict";var r=function(t){return function(){return this.matches(t)}};if("undefined"!=typeof document){var i=document.documentElement;if(!i.matches){var a=i.webkitMatchesSelector||i.msMatchesSelector||i.mozMatchesSelector||i.oMatchesSelector;r=function(t){return function(){return a.call(this,t)}}}}n.a=r},function(t,n,e){"use strict";function r(){return[]}n.a=function(t){return null==t?r:function(){return this.querySelectorAll(t)}}},function(t,n,e){"use strict";function r(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}n.a=r;var i=e(129),a=e(5);n.b=function(){return new a.a(this._enter||this._groups.map(i.a),this._parents)},r.prototype={constructor:r,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}}},function(t,n,e){"use strict";n.a=function(t){return new Array(t.length)}},function(t,n,e){"use strict";function r(t){return function(){this.style.removeProperty(t)}}function i(t,n,e){return function(){this.style.setProperty(t,n,e)}}function a(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function o(t,n){return t.style.getPropertyValue(n)||Object(u.a)(t).getComputedStyle(t,null).getPropertyValue(n)}n.b=o;var u=e(69);n.a=function(t,n,e){return arguments.length>1?this.each((null==n?r:"function"==typeof n?a:i)(t,n,null==e?"":e)):o(this.node(),t)}},function(t,n,e){"use strict";function r(t,n){var e=t.document.documentElement,r=Object(i.j)(t).on("dragstart.drag",null);n&&(r.on("click.drag",a.a,!0),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in e?r.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}n.b=r;var i=e(1),a=e(132);n.a=function(t){var n=t.document.documentElement,e=Object(i.j)(t).on("dragstart.drag",a.a,!0);"onselectstart"in n?e.on("selectstart.drag",a.a,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}},function(t,n,e){"use strict";function r(){i.d.stopImmediatePropagation()}n.b=r;var i=e(1);n.a=function(){i.d.preventDefault(),i.d.stopImmediatePropagation()}},function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return i});var r=Math.PI/180,i=180/Math.PI},function(t,n,e){"use strict";function r(t){return function(n){var e,r,a=n.length,o=new Array(a),u=new Array(a),c=new Array(a);for(e=0;e<a;++e)r=Object(i.f)(n[e]),o[e]=r.r||0,u[e]=r.g||0,c[e]=r.b||0;return o=t(o),u=t(u),c=t(c),r.opacity=1,function(t){return r.r=o(t),r.g=u(t),r.b=c(t),r+""}}}e.d(n,"b",function(){return c}),e.d(n,"c",function(){return s});var i=e(9),a=e(73),o=e(135),u=e(26);n.a=function t(n){function e(t,n){var e=r((t=Object(i.f)(t)).r,(n=Object(i.f)(n)).r),a=r(t.g,n.g),o=r(t.b,n.b),c=Object(u.a)(t.opacity,n.opacity);return function(n){return t.r=e(n),t.g=a(n),t.b=o(n),t.opacity=c(n),t+""}}var r=Object(u.b)(n);return e.gamma=t,e}(1);var c=r(a.b),s=r(o.a)},function(t,n,e){"use strict";var r=e(73);n.a=function(t){var n=t.length;return function(e){var i=Math.floor(((e%=1)<0?++e:e)*n),a=t[(i+n-1)%n],o=t[i%n],u=t[(i+1)%n],c=t[(i+2)%n];return Object(r.a)((e-i/n)*n,a,o,u,c)}}},function(t,n,e){"use strict";n.a=function(t){return function(){return t}}},function(t,n,e){"use strict";var r=e(70);n.a=function(t,n){var e,i=n?n.length:0,a=t?Math.min(i,t.length):0,o=new Array(a),u=new Array(i);for(e=0;e<a;++e)o[e]=Object(r.a)(t[e],n[e]);for(;e<i;++e)u[e]=n[e];return function(t){for(e=0;e<a;++e)u[e]=o[e](t);return u}}},function(t,n,e){"use strict";n.a=function(t,n){var e=new Date;return t=+t,n-=t,function(r){return e.setTime(t+n*r),e}}},function(t,n,e){"use strict";var r=e(70);n.a=function(t,n){var e,i={},a={};null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={});for(e in n)e in t?i[e]=Object(r.a)(t[e],n[e]):a[e]=n[e];return function(t){for(e in i)a[e]=i[e](t);return a}}},function(t,n,e){"use strict";function r(t){return function(){return t}}function i(t){return function(n){return t(n)+""}}var a=e(41),o=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,u=new RegExp(o.source,"g");n.a=function(t,n){var e,c,s,l=o.lastIndex=u.lastIndex=0,f=-1,d=[],h=[];for(t+="",n+="";(e=o.exec(t))&&(c=u.exec(n));)(s=c.index)>l&&(s=n.slice(l,s),d[f]?d[f]+=s:d[++f]=s),(e=e[0])===(c=c[0])?d[f]?d[f]+=c:d[++f]=c:(d[++f]=null,h.push({i:f,x:Object(a.a)(e,c)})),l=u.lastIndex;return l<n.length&&(s=n.slice(l),d[f]?d[f]+=s:d[++f]=s),d.length<2?h[0]?i(h[0].x):r(n):(n=h.length,function(t){for(var e,r=0;r<n;++r)d[(e=h[r]).i]=e.x(t);return d.join("")})}},function(t,n,e){"use strict";var r=e(6);n.a=function(t,n){var e,i,a,o=t.__transition,u=!0;if(o){n=null==n?null:n+"";for(a in o)(e=o[a]).name===n?(i=e.state>r.d&&e.state<r.b,e.state=r.a,e.timer.stop(),i&&e.on.call("interrupt",t,t.__data__,e.index,e.group),delete o[a]):u=!1;u&&delete t.__transition}}},function(t,n,e){"use strict";var r=e(9),i=e(4);n.a=function(t,n){var e;return("number"==typeof n?i.interpolateNumber:n instanceof r.a?i.interpolateRgb:(e=Object(r.a)(n))?(n=e,i.interpolateRgb):i.interpolateString)(t,n)}},function(t,n,e){"use strict";var r=e(316);e.d(n,"y",function(){return r.a});var i=e(317);e.d(n,"D",function(){return i.b}),e.d(n,"E",function(){return i.a}),e.d(n,"G",function(){return i.c}),e.d(n,"F",function(){return i.b});var a=e(318);e.d(n,"m",function(){return a.b}),e.d(n,"n",function(){return a.a}),e.d(n,"p",function(){return a.c}),e.d(n,"o",function(){return a.b});var o=e(319);e.d(n,"z",function(){return o.b}),e.d(n,"A",function(){return o.a}),e.d(n,"C",function(){return o.c}),e.d(n,"B",function(){return o.b});var u=e(320);e.d(n,"H",function(){return u.b}),e.d(n,"I",function(){return u.a}),e.d(n,"K",function(){return u.c}),e.d(n,"J",function(){return u.b});var c=e(321);e.d(n,"u",function(){return c.b}),e.d(n,"v",function(){return c.a}),e.d(n,"x",function(){return c.c}),e.d(n,"w",function(){return c.b});var s=e(322);e.d(n,"i",function(){return s.b}),e.d(n,"j",function(){return s.a}),e.d(n,"l",function(){return s.c}),e.d(n,"k",function(){return s.b});var l=e(323);e.d(n,"e",function(){return l.c}),e.d(n,"f",function(){return l.a}),e.d(n,"h",function(){return l.c}),e.d(n,"g",function(){return l.b});var f=e(324);e.d(n,"a",function(){return f.b}),e.d(n,"b",function(){return f.a}),e.d(n,"d",function(){return f.c}),e.d(n,"c",function(){return f.b});var d=e(325);e.d(n,"q",function(){return d.c}),e.d(n,"r",function(){return d.a}),e.d(n,"t",function(){return d.c}),e.d(n,"s",function(){return d.b})},function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"d",function(){return i}),e.d(n,"b",function(){return o}),e.d(n,"e",function(){return u}),e.d(n,"c",function(){return c});var r=Math.cos,i=Math.sin,a=Math.PI,o=a/2,u=2*a,c=Math.max},function(t,n,e){"use strict";function r(t){return t.x}function i(t){return t.y}n.b=r,n.c=i;var a=e(14),o=e(20),u=e(42),c=Math.PI*(3-Math.sqrt(5));n.a=function(t){function n(){e(),y.call("tick",s),l<f&&(v.stop(),y.call("end",s))}function e(){var n,e,r=t.length;for(l+=(h-l)*d,b.each(function(t){t(l)}),n=0;n<r;++n)e=t[n],null==e.fx?e.x+=e.vx*=p:(e.x=e.fx,e.vx=0),null==e.fy?e.y+=e.vy*=p:(e.y=e.fy,e.vy=0)}function r(){for(var n,e=0,r=t.length;e<r;++e){if(n=t[e],n.index=e,isNaN(n.x)||isNaN(n.y)){var i=10*Math.sqrt(e),a=e*c;n.x=i*Math.cos(a),n.y=i*Math.sin(a)}(isNaN(n.vx)||isNaN(n.vy))&&(n.vx=n.vy=0)}}function i(n){return n.initialize&&n.initialize(t),n}var s,l=1,f=.001,d=1-Math.pow(f,1/300),h=0,p=.6,b=Object(o.c)(),v=Object(u.d)(n),y=Object(a.a)("tick","end");return null==t&&(t=[]),r(),s={tick:e,restart:function(){return v.restart(n),s},stop:function(){return v.stop(),s},nodes:function(n){return arguments.length?(t=n,r(),b.each(i),s):t},alpha:function(t){return arguments.length?(l=+t,s):l},alphaMin:function(t){return arguments.length?(f=+t,s):f},alphaDecay:function(t){return arguments.length?(d=+t,s):+d},alphaTarget:function(t){return arguments.length?(h=+t,s):h},velocityDecay:function(t){return arguments.length?(p=1-t,s):1-p},force:function(t,n){return arguments.length>1?(null==n?b.remove(t):b.set(t,i(n)),s):b.get(t)},find:function(n,e,r){var i,a,o,u,c,s=0,l=t.length;for(null==r?r=1/0:r*=r,s=0;s<l;++s)u=t[s],i=n-u.x,a=e-u.y,(o=i*i+a*a)<r&&(c=u,r=o);return c},on:function(t,n){return arguments.length>1?(y.on(t,n),s):y.on(t)}}}},function(t,n,e){"use strict";var r=e(44),i=e(365),a=e(366),o=e(147),u=e(148),c=e(149),s=e(369),l=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];n.a=function(t){function n(t){function n(t){var n,a,o,u=x,d=m;if("c"===_)d=w(t)+d,t="";else{t=+t;var b=t<0;if(t=w(Math.abs(t),g),b&&0==+t&&(b=!1),u=(b?"("===i?i:"-":"-"===i||"("===i?"":i)+u,d=d+("s"===_?l[8+c.b/3]:"")+(b&&"("===i?")":""),j)for(n=-1,a=t.length;++n<a;)if(48>(o=t.charCodeAt(n))||o>57){d=(46===o?h+t.slice(n+1):t.slice(n))+d,t=t.slice(0,n);break}}y&&!s&&(t=f(t,1/0));var O=u.length+t.length+d.length,k=O<v?new Array(v-O+1).join(e):"";switch(y&&s&&(t=f(k+t,k.length?v-d.length:1/0),k=""),r){case"<":t=u+t+d+k;break;case"=":t=u+k+t+d;break;case"^":t=k.slice(0,O=k.length>>1)+u+t+d+k.slice(O);break;default:t=k+u+t+d}return p(t)}t=Object(o.a)(t);var e=t.fill,r=t.align,i=t.sign,a=t.symbol,s=t.zero,v=t.width,y=t.comma,g=t.precision,_=t.type,x="$"===a?d[0]:"#"===a&&/[boxX]/.test(_)?"0"+_.toLowerCase():"",m="$"===a?d[1]:/[%p]/.test(_)?b:"",w=u.a[_],j=!_||/[defgprs%]/.test(_);return g=null==g?_?6:12:/[gprs]/.test(_)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g)),n.toString=function(){return t+""},n}function e(t,e){var i=n((t=Object(o.a)(t),t.type="f",t)),a=3*Math.max(-8,Math.min(8,Math.floor(Object(r.a)(e)/3))),u=Math.pow(10,-a),c=l[8+a/3];return function(t){return i(u*t)+c}}var f=t.grouping&&t.thousands?Object(i.a)(t.grouping,t.thousands):s.a,d=t.currency,h=t.decimal,p=t.numerals?Object(a.a)(t.numerals):s.a,b=t.percent||"%";return{format:n,formatPrefix:e}}},function(t,n,e){"use strict";function r(t){return new i(t)}function i(t){if(!(n=o.exec(t)))throw new Error("invalid format: "+t);var n,e=n[1]||" ",r=n[2]||">",i=n[3]||"-",u=n[4]||"",c=!!n[5],s=n[6]&&+n[6],l=!!n[7],f=n[8]&&+n[8].slice(1),d=n[9]||"";"n"===d?(l=!0,d="g"):a.a[d]||(d=""),(c||"0"===e&&"="===r)&&(c=!0,e="0",r="="),this.fill=e,this.align=r,this.sign=i,this.symbol=u,this.zero=c,this.width=s,this.comma=l,this.precision=f,this.type=d}n.a=r;var a=e(148),o=/^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;r.prototype=i.prototype,i.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(null==this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(null==this.precision?"":"."+Math.max(0,0|this.precision))+this.type}},function(t,n,e){"use strict";var r=e(367),i=e(149),a=e(368);n.a={"":r.a,"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return Object(a.a)(100*t,n)},r:a.a,s:i.a,X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}}},function(t,n,e){"use strict";e.d(n,"b",function(){return r});var r,i=e(83);n.a=function(t,n){var e=Object(i.a)(t,n);if(!e)return t+"";var a=e[0],o=e[1],u=o-(r=3*Math.max(-8,Math.min(8,Math.floor(o/3))))+1,c=a.length;return u===c?a:u>c?a+new Array(u-c+1).join("0"):u>0?a.slice(0,u)+"."+a.slice(u):"0."+new Array(1-u).join("0")+Object(i.a)(t,Math.max(0,n+u-1))[0]}},function(t,n,e){"use strict";function r(){g.point=a}function i(){o(u,c)}function a(t,n){g.point=o,u=t,c=n,t*=h.r,n*=h.r,s=t,l=Object(h.g)(n=n/2+h.q),f=Object(h.t)(n)}function o(t,n){t*=h.r,n*=h.r,n=n/2+h.q;var e=t-s,r=e>=0?1:-1,i=r*e,a=Object(h.g)(n),o=Object(h.t)(n),u=f*o,c=l*a+u*Object(h.g)(i),d=u*r*Object(h.t)(i);v.add(Object(h.e)(d,c)),s=t,l=a,f=o}e.d(n,"a",function(){return v}),e.d(n,"b",function(){return g});var u,c,s,l,f,d=e(22),h=e(0),p=e(13),b=e(15),v=Object(d.a)(),y=Object(d.a)(),g={point:p.a,lineStart:p.a,lineEnd:p.a,polygonStart:function(){v.reset(),g.lineStart=r,g.lineEnd=i},polygonEnd:function(){var t=+v;y.add(t<0?h.w+t:t),this.lineStart=this.lineEnd=this.point=p.a},sphere:function(){y.add(h.w)}};n.c=function(t){return y.reset(),Object(b.a)(t,g),2*y}},function(t,n,e){"use strict";function r(t,n,e,r,o,c){if(e){var s=Object(u.g)(n),l=Object(u.t)(n),f=r*e;null==o?(o=n+r*u.w,c=n-f/2):(o=i(s,o),c=i(s,c),(r>0?o<c:o>c)&&(o+=r*u.w));for(var d,h=o;r>0?h>c:h<c;h-=f)d=Object(a.g)([s,-l*Object(u.g)(h),-l*Object(u.t)(h)]),t.point(d[0],d[1])}}function i(t,n){n=Object(a.a)(n),n[0]-=t,Object(a.e)(n);var e=Object(u.b)(-n[1]);return((-n[2]<0?-e:e)+u.w-u.i)%u.w}n.a=r;var a=e(27),o=e(376),u=e(0),c=e(45);n.b=function(){function t(t,n){e.push(t=i(t,n)),t[0]*=u.h,t[1]*=u.h}function n(){var t=a.apply(this,arguments),n=s.apply(this,arguments)*u.r,o=l.apply(this,arguments)*u.r;return e=[],i=Object(c.b)(-t[0]*u.r,-t[1]*u.r,0).invert,r(f,n,o,1),t={type:"Polygon",coordinates:[e]},e=i=null,t}var e,i,a=Object(o.a)([0,0]),s=Object(o.a)(90),l=Object(o.a)(6),f={point:t};return n.center=function(t){return arguments.length?(a="function"==typeof t?t:Object(o.a)([+t[0],+t[1]]),n):a},n.radius=function(t){return arguments.length?(s="function"==typeof t?t:Object(o.a)(+t),n):s},n.precision=function(t){return arguments.length?(l="function"==typeof t?t:Object(o.a)(+t),n):l},n}},function(t,n,e){"use strict";n.a=function(t,n){function e(e,r){return e=t(e,r),n(e[0],e[1])}return t.invert&&n.invert&&(e.invert=function(e,r){return(e=n.invert(e,r))&&t.invert(e[0],e[1])}),e}},function(t,n,e){"use strict";function r(t){var n,e=NaN,r=NaN,a=NaN;return{lineStart:function(){t.lineStart(),n=1},point:function(o,c){var s=o>0?u.o:-u.o,l=Object(u.a)(o-e);Object(u.a)(l-u.o)<u.i?(t.point(e,r=(r+c)/2>0?u.l:-u.l),t.point(a,r),t.lineEnd(),t.lineStart(),t.point(s,r),t.point(o,r),n=0):a!==s&&l>=u.o&&(Object(u.a)(e-a)<u.i&&(e-=a*u.i),Object(u.a)(o-s)<u.i&&(o-=s*u.i),r=i(e,r,o,c),t.point(a,r),t.lineEnd(),t.lineStart(),t.point(s,r),n=0),t.point(e=o,r=c),a=s},lineEnd:function(){t.lineEnd(),e=r=NaN},clean:function(){return 2-n}}}function i(t,n,e,r){var i,a,o=Object(u.t)(t-e);return Object(u.a)(o)>u.i?Object(u.d)((Object(u.t)(n)*(a=Object(u.g)(r))*Object(u.t)(e)-Object(u.t)(r)*(i=Object(u.g)(n))*Object(u.t)(t))/(i*a*o)):(n+r)/2}function a(t,n,e,r){var i;if(null==t)i=e*u.l,r.point(-u.o,i),r.point(0,i),r.point(u.o,i),r.point(u.o,0),r.point(u.o,-i),r.point(0,-i),r.point(-u.o,-i),r.point(-u.o,0),r.point(-u.o,i);else if(Object(u.a)(t[0]-n[0])>u.i){var a=t[0]<n[0]?u.o:-u.o;i=e*a/2,r.point(-a,i),r.point(0,i),r.point(a,i)}else r.point(n[0],n[1])}var o=e(154),u=e(0);n.a=Object(o.a)(function(){return!0},r,a,[-u.o,-u.l])},function(t,n,e){"use strict";function r(t){return t.length>1}function i(t,n){return((t=t.x)[0]<0?t[1]-u.l-u.i:u.l-t[1])-((n=n.x)[0]<0?n[1]-u.l-u.i:u.l-n[1])}var a=e(155),o=e(156),u=e(0),c=e(158),s=e(2);n.a=function(t,n,e,u){return function(l){function f(n,e){t(n,e)&&l.point(n,e)}function d(t,n){m.point(t,n)}function h(){k.point=d,m.lineStart()}function p(){k.point=f,m.lineEnd()}function b(t,n){x.push([t,n]),j.point(t,n)}function v(){j.lineStart(),x=[]}function y(){b(x[0][0],x[0][1]),j.lineEnd();var t,n,e,i,a=j.clean(),o=w.result(),u=o.length;if(x.pop(),g.push(x),x=null,u)if(1&a){if(e=o[0],(n=e.length-1)>0){for(O||(l.polygonStart(),O=!0),l.lineStart(),t=0;t<n;++t)l.point((i=e[t])[0],i[1]);l.lineEnd()}}else u>1&&2&a&&o.push(o.pop().concat(o.shift())),_.push(o.filter(r))}var g,_,x,m=n(l),w=Object(a.a)(),j=n(w),O=!1,k={point:f,lineStart:h,lineEnd:p,polygonStart:function(){k.point=b,k.lineStart=v,k.lineEnd=y,_=[],g=[]},polygonEnd:function(){k.point=f,k.lineStart=h,k.lineEnd=p,_=Object(s.n)(_);var t=Object(c.a)(g,u);_.length?(O||(l.polygonStart(),O=!0),Object(o.a)(_,i,t,e,l)):t&&(O||(l.polygonStart(),O=!0),l.lineStart(),e(null,null,1,l),l.lineEnd()),O&&(l.polygonEnd(),O=!1),_=g=null},sphere:function(){l.polygonStart(),l.lineStart(),e(null,null,1,l),l.lineEnd(),l.polygonEnd()}};return k}}},function(t,n,e){"use strict";var r=e(13);n.a=function(){var t,n=[];return{point:function(n,e){t.push([n,e])},lineStart:function(){n.push(t=[])},lineEnd:r.a,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n;return n=[],t=null,e}}}},function(t,n,e){"use strict";function r(t,n,e,r){this.x=t,this.z=n,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function i(t){if(n=t.length){for(var n,e,r=0,i=t[0];++r<n;)i.n=e=t[r],e.p=i,i=e;i.n=e=t[0],e.p=i}}var a=e(157);n.a=function(t,n,e,o,u){var c,s,l=[],f=[];if(t.forEach(function(t){if(!((n=t.length-1)<=0)){var n,e,i=t[0],o=t[n];if(Object(a.a)(i,o)){for(u.lineStart(),c=0;c<n;++c)u.point((i=t[c])[0],i[1]);return void u.lineEnd()}l.push(e=new r(i,t,null,!0)),f.push(e.o=new r(i,null,e,!1)),l.push(e=new r(o,t,null,!1)),f.push(e.o=new r(o,null,e,!0))}}),l.length){for(f.sort(n),i(l),i(f),c=0,s=f.length;c<s;++c)f[c].e=e=!e;for(var d,h,p=l[0];;){for(var b=p,v=!0;b.v;)if((b=b.n)===p)return;d=b.z,u.lineStart();do{if(b.v=b.o.v=!0,b.e){if(v)for(c=0,s=d.length;c<s;++c)u.point((h=d[c])[0],h[1]);else o(b.x,b.n.x,1,u);b=b.n}else{if(v)for(d=b.p.z,c=d.length-1;c>=0;--c)u.point((h=d[c])[0],h[1]);else o(b.x,b.p.x,-1,u);b=b.p}b=b.o,d=b.z,v=!v}while(!b.v);u.lineEnd()}}}},function(t,n,e){"use strict";var r=e(0);n.a=function(t,n){return Object(r.a)(t[0]-n[0])<r.i&&Object(r.a)(t[1]-n[1])<r.i}},function(t,n,e){"use strict";var r=e(22),i=e(27),a=e(0),o=Object(r.a)();n.a=function(t,n){var e=n[0],r=n[1],u=[Object(a.t)(e),-Object(a.g)(e),0],c=0,s=0;o.reset();for(var l=0,f=t.length;l<f;++l)if(h=(d=t[l]).length)for(var d,h,p=d[h-1],b=p[0],v=p[1]/2+a.q,y=Object(a.t)(v),g=Object(a.g)(v),_=0;_<h;++_,b=m,y=j,g=O,p=x){var x=d[_],m=x[0],w=x[1]/2+a.q,j=Object(a.t)(w),O=Object(a.g)(w),k=m-b,M=k>=0?1:-1,P=M*k,A=P>a.o,T=y*j;if(o.add(Object(a.e)(T*M*Object(a.t)(P),g*O+T*Object(a.g)(P))),c+=A?k+M*a.w:k,A^b>=e^m>=e){var N=Object(i.c)(Object(i.a)(p),Object(i.a)(x));Object(i.e)(N);var E=Object(i.c)(u,N);Object(i.e)(E);var S=(A^k>=0?-1:1)*Object(a.c)(E[2]);(r>S||r===S&&(N[0]||N[1]))&&(s+=A^k>=0?1:-1)}}return(c<-a.i||c<a.i&&o<-a.i)^1&s}},function(t,n,e){"use strict";var r=e(27),i=e(151),a=e(0),o=e(157),u=e(154);n.a=function(t){function n(n,e,r,a){Object(i.a)(a,t,d,r,n,e)}function e(t,n){return Object(a.g)(t)*Object(a.g)(n)>f}function c(t){var n,r,i,u,c;return{lineStart:function(){u=i=!1,c=1},point:function(f,d){var b,v=[f,d],y=e(f,d),g=h?y?0:l(f,d):y?l(f+(f<0?a.o:-a.o),d):0;if(!n&&(u=i=y)&&t.lineStart(),y!==i&&(!(b=s(n,v))||Object(o.a)(n,b)||Object(o.a)(v,b))&&(v[0]+=a.i,v[1]+=a.i,y=e(v[0],v[1])),y!==i)c=0,y?(t.lineStart(),b=s(v,n),t.point(b[0],b[1])):(b=s(n,v),t.point(b[0],b[1]),t.lineEnd()),n=b;else if(p&&n&&h^y){var _;g&r||!(_=s(v,n,!0))||(c=0,h?(t.lineStart(),t.point(_[0][0],_[0][1]),t.point(_[1][0],_[1][1]),t.lineEnd()):(t.point(_[1][0],_[1][1]),t.lineEnd(),t.lineStart(),t.point(_[0][0],_[0][1])))}!y||n&&Object(o.a)(n,v)||t.point(v[0],v[1]),n=v,i=y,r=g},lineEnd:function(){i&&t.lineEnd(),n=null},clean:function(){return c|(u&&i)<<1}}}function s(t,n,e){var i=Object(r.a)(t),o=Object(r.a)(n),u=[1,0,0],c=Object(r.c)(i,o),s=Object(r.d)(c,c),l=c[0],d=s-l*l;if(!d)return!e&&t;var h=f*s/d,p=-f*l/d,b=Object(r.c)(u,c),v=Object(r.f)(u,h),y=Object(r.f)(c,p);Object(r.b)(v,y);var g=b,_=Object(r.d)(v,g),x=Object(r.d)(g,g),m=_*_-x*(Object(r.d)(v,v)-1);if(!(m<0)){var w=Object(a.u)(m),j=Object(r.f)(g,(-_-w)/x);if(Object(r.b)(j,v),j=Object(r.g)(j),!e)return j;var O,k=t[0],M=n[0],P=t[1],A=n[1];M<k&&(O=k,k=M,M=O);var T=M-k,N=Object(a.a)(T-a.o)<a.i,E=N||T<a.i;if(!N&&A<P&&(O=P,P=A,A=O),E?N?P+A>0^j[1]<(Object(a.a)(j[0]-k)<a.i?P:A):P<=j[1]&&j[1]<=A:T>a.o^(k<=j[0]&&j[0]<=M)){var S=Object(r.f)(g,(-_+w)/x);return Object(r.b)(S,v),[j,Object(r.g)(S)]}}}function l(n,e){var r=h?t:a.o-t,i=0;return n<-r?i|=1:n>r&&(i|=2),e<-r?i|=4:e>r&&(i|=8),i}var f=Object(a.g)(t),d=6*a.r,h=f>0,p=Object(a.a)(f)>a.i;return Object(u.a)(e,c,n,h?[0,-t]:[-a.o,t-a.o])}},function(t,n,e){"use strict";var r=e(161),i=[null,null],a={type:"LineString",coordinates:i};n.a=function(t,n){return i[0]=t,i[1]=n,Object(r.a)(a)}},function(t,n,e){"use strict";function r(){b.point=a,b.lineEnd=i}function i(){b.point=b.lineEnd=d.a}function a(t,n){t*=f.r,n*=f.r,u=t,c=Object(f.t)(n),s=Object(f.g)(n),b.point=o}function o(t,n){t*=f.r,n*=f.r;var e=Object(f.t)(n),r=Object(f.g)(n),i=Object(f.a)(t-u),a=Object(f.g)(i),o=Object(f.t)(i),l=r*o,d=s*e-c*r*a,h=c*e+s*r*a;p.add(Object(f.e)(Object(f.u)(l*l+d*d),h)),u=t,c=e,s=r}var u,c,s,l=e(22),f=e(0),d=e(13),h=e(15),p=Object(l.a)(),b={sphere:d.a,point:d.a,lineStart:r,lineEnd:d.a,polygonStart:d.a,polygonEnd:d.a};n.a=function(t){return p.reset(),Object(h.a)(t,b),+p}},function(t,n,e){"use strict";function r(t,n){t<a&&(a=t),t>u&&(u=t),n<o&&(o=n),n>c&&(c=n)}var i=e(13),a=1/0,o=a,u=-a,c=u,s={point:r,lineStart:i.a,lineEnd:i.a,polygonStart:i.a,polygonEnd:i.a,result:function(){var t=[[a,o],[u,c]];return u=c=-(o=a=1/0),t}};n.a=s},function(t,n,e){"use strict";var r=e(85);n.a=function(){return Object(r.b)().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}},function(t,n,e){"use strict";function r(t,n){return[t,n]}n.b=r;var i=e(10);r.invert=r,n.a=function(){return Object(i.a)(r).scale(152.63)}},function(t,n,e){"use strict";function r(t,n,e){var r=t.x,i=t.y,a=n.r+e.r,o=t.r+e.r,u=n.x-r,c=n.y-i,s=u*u+c*c;if(s){var l=.5+((o*=o)-(a*=a))/(2*s),f=Math.sqrt(Math.max(0,2*a*(o+s)-(o-=s)*o-a*a))/(2*s);e.x=r+l*u+f*c,e.y=i+l*c-f*u}else e.x=r+o,e.y=i}function i(t,n){var e=n.x-t.x,r=n.y-t.y,i=t.r+n.r;return i*i-1e-6>e*e+r*r}function a(t){var n=t._,e=t.next._,r=n.r+e.r,i=(n.x*e.r+e.x*n.r)/r,a=(n.y*e.r+e.y*n.r)/r;return i*i+a*a}function o(t){this._=t,this.next=null,this.previous=null}function u(t){if(!(s=t.length))return 0;var n,e,u,s,l,f,d,h,p,b,v;if(n=t[0],n.x=0,n.y=0,!(s>1))return n.r;if(e=t[1],n.x=-e.r,e.x=n.r,e.y=0,!(s>2))return n.r+e.r;r(e,n,u=t[2]),n=new o(n),e=new o(e),u=new o(u),n.next=u.previous=e,e.next=n.previous=u,u.next=e.previous=n;t:for(d=3;d<s;++d){r(n._,e._,u=t[d]),u=new o(u),h=e.next,p=n.previous,b=e._.r,v=n._.r;do{if(b<=v){if(i(h._,u._)){e=h,n.next=e,e.previous=n,--d;continue t}b+=h._.r,h=h.next}else{if(i(p._,u._)){n=p,n.next=e,e.previous=n,--d;continue t}v+=p._.r,p=p.previous}}while(h!==p.next);for(u.previous=n,u.next=e,n.next=e.previous=e=u,l=a(n);(u=u.next)!==e;)(f=a(u))<l&&(n=u,l=f);e=n.next}for(n=[e._],u=e;(u=u.next)!==e;)n.push(u._);for(u=Object(c.a)(n),d=0;d<s;++d)n=t[d],n.x-=u.x,n.y-=u.y;return u.r}n.b=u;var c=e(166);n.a=function(t){return u(t),t}},function(t,n,e){"use strict";function r(t,n){var e,r;if(o(n,t))return[n];for(e=0;e<t.length;++e)if(i(n,t[e])&&o(s(t[e],n),t))return[t[e],n];for(e=0;e<t.length-1;++e)for(r=e+1;r<t.length;++r)if(i(s(t[e],t[r]),n)&&i(s(t[e],n),t[r])&&i(s(t[r],n),t[e])&&o(l(t[e],t[r],n),t))return[t[e],t[r],n];throw new Error}function i(t,n){var e=t.r-n.r,r=n.x-t.x,i=n.y-t.y;return e<0||e*e<r*r+i*i}function a(t,n){var e=t.r-n.r+1e-6,r=n.x-t.x,i=n.y-t.y;return e>0&&e*e>r*r+i*i}function o(t,n){for(var e=0;e<n.length;++e)if(!a(t,n[e]))return!1;return!0}function u(t){switch(t.length){case 1:return c(t[0]);case 2:return s(t[0],t[1]);case 3:return l(t[0],t[1],t[2])}}function c(t){return{x:t.x,y:t.y,r:t.r}}function s(t,n){var e=t.x,r=t.y,i=t.r,a=n.x,o=n.y,u=n.r,c=a-e,s=o-r,l=u-i,f=Math.sqrt(c*c+s*s);return{x:(e+a+c/f*l)/2,y:(r+o+s/f*l)/2,r:(f+i+u)/2}}function l(t,n,e){var r=t.x,i=t.y,a=t.r,o=n.x,u=n.y,c=n.r,s=e.x,l=e.y,f=e.r,d=r-o,h=r-s,p=i-u,b=i-l,v=c-a,y=f-a,g=r*r+i*i-a*a,_=g-o*o-u*u+c*c,x=g-s*s-l*l+f*f,m=h*p-d*b,w=(p*x-b*_)/(2*m)-r,j=(b*v-p*y)/m,O=(h*_-d*x)/(2*m)-i,k=(d*y-h*v)/m,M=j*j+k*k-1,P=2*(a+w*j+O*k),A=w*w+O*O-a*a,T=-(M?(P+Math.sqrt(P*P-4*M*A))/(2*M):A/P);return{x:r+w+j*T,y:i+O+k*T,r:T}}var f=e(415);n.a=function(t){for(var n,e,i=0,o=(t=Object(f.a)(f.b.call(t))).length,c=[];i<o;)n=t[i],e&&a(e,n)?++i:(e=u(c=r(c,n)),i=0);return e}},function(t,n,e){"use strict";function r(){return 0}n.a=r,n.b=function(t){return function(){return t}}},function(t,n,e){"use strict";n.a=function(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)}},function(t,n,e){"use strict";var r=e(23);n.a=function t(n){function e(t,e){var r,i;return t=null==t?0:+t,e=null==e?1:+e,function(){var a;if(null!=r)a=r,r=null;else do{r=2*n()-1,a=2*n()-1,i=r*r+a*a}while(!i||i>1);return t+e*a*Math.sqrt(-2*Math.log(i)/i)}}return e.source=t,e}(r.a)},function(t,n,e){"use strict";var r=e(23);n.a=function t(n){function e(t){return function(){for(var e=0,r=0;r<t;++r)e+=n();return e}}return e.source=t,e}(r.a)},function(t,n,e){"use strict";function r(t,n){return function(e){return t(e.responseText,n)}}var i=e(92);n.a=function(t,n){return function(e,a,o){arguments.length<3&&(o=a,a=null);var u=Object(i.a)(e).mimeType(t);return u.row=function(t){return arguments.length?u.response(r(n,a=t)):a},u.row(a),o?u.get(o):u}}},function(t,n,e){"use strict";function r(t){function n(n){var r=n+"",i=e.get(r);if(!i){if(c!==o)return c;e.set(r,i=u.push(n))}return t[(i-1)%t.length]}var e=Object(i.c)(),u=[],c=o;return t=null==t?[]:a.b.call(t),n.domain=function(t){if(!arguments.length)return u.slice();u=[],e=Object(i.c)();for(var r,a,o=-1,c=t.length;++o<c;)e.has(a=(r=t[o])+"")||e.set(a,u.push(r));return n},n.range=function(e){return arguments.length?(t=a.b.call(e),n):t.slice()},n.unknown=function(t){return arguments.length?(c=t,n):c},n.copy=function(){return r().domain(u).range(t).unknown(c)},n}e.d(n,"b",function(){return o}),n.a=r;var i=e(20),a=e(16),o={name:"implicit"}},function(t,n,e){"use strict";n.a=function(t){return+t}},function(t,n,e){"use strict";n.a=function(t,n){t=t.slice();var e,r=0,i=t.length-1,a=t[r],o=t[i];return o<a&&(e=r,r=i,i=e,e=a,a=o,o=e),t[r]=n.floor(a),t[i]=n.ceil(o),t}},function(t,n,e){"use strict";function r(t){return new Date(t)}function i(t){return t instanceof Date?+t:+new Date(+t)}function a(t,n,e,c,s,x,m,w,j){function O(r){return(m(r)<r?T:x(r)<r?N:s(r)<r?E:c(r)<r?S:n(r)<r?e(r)<r?C:F:t(r)<r?z:R)(r)}function k(n,e,r,i){if(null==n&&(n=10),"number"==typeof n){var a=Math.abs(r-e)/n,u=Object(o.e)(function(t){return t[2]}).right(L,a);u===L.length?(i=Object(o.A)(e/_,r/_,n),n=t):u?(u=L[a/L[u-1][2]<L[u][2]/a?u-1:u],i=u[1],n=u[0]):(i=Math.max(Object(o.A)(e,r,n),1),n=w)}return null==i?n:n.every(i)}var M=Object(f.b)(f.c,u.interpolateNumber),P=M.invert,A=M.domain,T=j(".%L"),N=j(":%S"),E=j("%I:%M"),S=j("%I %p"),C=j("%a %d"),F=j("%b %d"),z=j("%B"),R=j("%Y"),L=[[m,1,h],[m,5,5*h],[m,15,15*h],[m,30,30*h],[x,1,p],[x,5,5*p],[x,15,15*p],[x,30,30*p],[s,1,b],[s,3,3*b],[s,6,6*b],[s,12,12*b],[c,1,v],[c,2,2*v],[e,1,y],[n,1,g],[n,3,3*g],[t,1,_]];return M.invert=function(t){return new Date(P(t))},M.domain=function(t){return arguments.length?A(l.a.call(t,i)):A().map(r)},M.ticks=function(t,n){var e,r=A(),i=r[0],a=r[r.length-1],o=a<i;return o&&(e=i,i=a,a=e),e=k(t,i,a,n),e=e?e.range(i,a+1):[],o?e.reverse():e},M.tickFormat=function(t,n){return null==n?O:j(n)},M.nice=function(t,n){var e=A();return(t=k(t,e[0],e[e.length-1],n))?A(Object(d.a)(e,t)):M},M.copy=function(){return Object(f.a)(M,a(t,n,e,c,s,x,m,w,j))},M}n.a=a;var o=e(2),u=e(4),c=e(51),s=e(94),l=e(16),f=e(50),d=e(174),h=1e3,p=60*h,b=60*p,v=24*b,y=7*v,g=30*v,_=365*v;n.b=function(){return a(c.D,c.n,c.B,c.a,c.e,c.j,c.r,c.h,s.c).domain([new Date(2e3,0,1),new Date(2e3,0,2)])}},function(t,n,e){"use strict";function r(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function i(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function a(t){return{y:t,m:0,d:1,H:0,M:0,S:0,L:0}}function o(t){function n(t,n){return function(e){var r,i,a,o=[],u=-1,c=0,s=t.length;for(e instanceof Date||(e=new Date(+e));++u<s;)37===t.charCodeAt(u)&&(o.push(t.slice(c,u)),null!=(i=pt[r=t.charAt(++u)])?r=t.charAt(++u):i="e"===r?" ":"0",(a=n[r])&&(r=a(e,i)),o.push(r),c=u+1);return o.push(t.slice(c,u)),o.join("")}}function e(t,n){return function(e){var r,u,c=a(1900),s=o(c,t,e+="",0);if(s!=e.length)return null;if("Q"in c)return new Date(c.Q);if("p"in c&&(c.H=c.H%12+12*c.p),"V"in c){if(c.V<1||c.V>53)return null;"w"in c||(c.w=1),"Z"in c?(r=i(a(c.y)),u=r.getUTCDay(),r=u>4||0===u?ht.P.ceil(r):Object(ht.P)(r),r=ht.F.offset(r,7*(c.V-1)),c.y=r.getUTCFullYear(),c.m=r.getUTCMonth(),c.d=r.getUTCDate()+(c.w+6)%7):(r=n(a(c.y)),u=r.getDay(),r=u>4||0===u?ht.l.ceil(r):Object(ht.l)(r),r=ht.a.offset(r,7*(c.V-1)),c.y=r.getFullYear(),c.m=r.getMonth(),c.d=r.getDate()+(c.w+6)%7)}else("W"in c||"U"in c)&&("w"in c||(c.w="u"in c?c.u%7:"W"in c?1:0),u="Z"in c?i(a(c.y)).getUTCDay():n(a(c.y)).getDay(),c.m=0,c.d="W"in c?(c.w+6)%7+7*c.W-(u+5)%7:c.w+7*c.U-(u+6)%7);return"Z"in c?(c.H+=c.Z/100|0,c.M+=c.Z%100,i(c)):n(c)}}function o(t,n,e,r){for(var i,a,o=0,u=n.length,c=e.length;o<u;){if(r>=c)return-1;if(37===(i=n.charCodeAt(o++))){if(i=n.charAt(o++),!(a=Kt[i in pt?n.charAt(o++):i])||(r=a(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}function u(t,n,e){var r=Bt.exec(n.slice(e));return r?(t.p=Dt[r[0].toLowerCase()],e+r[0].length):-1}function c(t,n,e){var r=It.exec(n.slice(e));return r?(t.w=Xt[r[0].toLowerCase()],e+r[0].length):-1}function bt(t,n,e){var r=Yt.exec(n.slice(e));return r?(t.w=Ut[r[0].toLowerCase()],e+r[0].length):-1}function vt(t,n,e){var r=Vt.exec(n.slice(e));return r?(t.m=Wt[r[0].toLowerCase()],e+r[0].length):-1}function yt(t,n,e){var r=Gt.exec(n.slice(e));return r?(t.m=Ht[r[0].toLowerCase()],e+r[0].length):-1}function gt(t,n,e){return o(t,Et,n,e)}function _t(t,n,e){return o(t,St,n,e)}function xt(t,n,e){return o(t,Ct,n,e)}function mt(t){return Rt[t.getDay()]}function wt(t){return zt[t.getDay()]}function jt(t){return qt[t.getMonth()]}function Ot(t){return Lt[t.getMonth()]}function kt(t){return Ft[+(t.getHours()>=12)]}function Mt(t){return Rt[t.getUTCDay()]}function Pt(t){return zt[t.getUTCDay()]}function At(t){return qt[t.getUTCMonth()]}function Tt(t){return Lt[t.getUTCMonth()]}function Nt(t){return Ft[+(t.getUTCHours()>=12)]}var Et=t.dateTime,St=t.date,Ct=t.time,Ft=t.periods,zt=t.days,Rt=t.shortDays,Lt=t.months,qt=t.shortMonths,Bt=s(Ft),Dt=l(Ft),Yt=s(zt),Ut=l(zt),It=s(Rt),Xt=l(Rt),Gt=s(Lt),Ht=l(Lt),Vt=s(qt),Wt=l(qt),Qt={a:mt,A:wt,b:jt,B:Ot,c:null,d:N,e:N,f:z,H:E,I:S,j:C,L:F,m:R,M:L,p:kt,Q:ft,s:dt,S:q,u:B,U:D,V:Y,w:U,W:I,x:null,X:null,y:X,Y:G,Z:H,"%":lt},Zt={a:Mt,A:Pt,b:At,B:Tt,c:null,d:V,e:V,f:$,H:W,I:Q,j:Z,L:K,m:J,M:tt,p:Nt,Q:ft,s:dt,S:nt,u:et,U:rt,V:it,w:at,W:ot,x:null,X:null,y:ut,Y:ct,Z:st,"%":lt},Kt={a:c,A:bt,b:vt,B:yt,c:gt,d:x,e:x,f:M,H:w,I:w,j:m,L:k,m:_,M:j,p:u,Q:A,s:T,S:O,u:d,U:h,V:p,w:f,W:b,x:_t,X:xt,y:y,Y:v,Z:g,"%":P};return Qt.x=n(St,Qt),Qt.X=n(Ct,Qt),Qt.c=n(Et,Qt),Zt.x=n(St,Zt),Zt.X=n(Ct,Zt),Zt.c=n(Et,Zt),{format:function(t){var e=n(t+="",Qt);return e.toString=function(){return t},e},parse:function(t){var n=e(t+="",r);return n.toString=function(){return t},n},utcFormat:function(t){var e=n(t+="",Zt);return e.toString=function(){return t},e},utcParse:function(t){var n=e(t,i);return n.toString=function(){return t},n}}}function u(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",a=i.length;return r+(a<e?new Array(e-a+1).join(n)+i:i)}function c(t){return t.replace(yt,"\\$&")}function s(t){return new RegExp("^(?:"+t.map(c).join("|")+")","i")}function l(t){for(var n={},e=-1,r=t.length;++e<r;)n[t[e].toLowerCase()]=e;return n}function f(t,n,e){var r=bt.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function d(t,n,e){var r=bt.exec(n.slice(e,e+1));return r?(t.u=+r[0],e+r[0].length):-1}function h(t,n,e){var r=bt.exec(n.slice(e,e+2));return r?(t.U=+r[0],e+r[0].length):-1}function p(t,n,e){var r=bt.exec(n.slice(e,e+2));return r?(t.V=+r[0],e+r[0].length):-1}function b(t,n,e){var r=bt.exec(n.slice(e,e+2));return r?(t.W=+r[0],e+r[0].length):-1}function v(t,n,e){var r=bt.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1}function y(t,n,e){var r=bt.exec(n.slice(e,e+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function g(t,n,e){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e,e+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function _(t,n,e){var r=bt.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1}function x(t,n,e){var r=bt.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1}function m(t,n,e){var r=bt.exec(n.slice(e,e+3));return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function w(t,n,e){var r=bt.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function j(t,n,e){var r=bt.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function O(t,n,e){var r=bt.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1}function k(t,n,e){var r=bt.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1}function M(t,n,e){var r=bt.exec(n.slice(e,e+6));return r?(t.L=Math.floor(r[0]/1e3),e+r[0].length):-1}function P(t,n,e){var r=vt.exec(n.slice(e,e+1));return r?e+r[0].length:-1}function A(t,n,e){var r=bt.exec(n.slice(e));return r?(t.Q=+r[0],e+r[0].length):-1}function T(t,n,e){var r=bt.exec(n.slice(e));return r?(t.Q=1e3*+r[0],e+r[0].length):-1}function N(t,n){return u(t.getDate(),n,2)}function E(t,n){return u(t.getHours(),n,2)}function S(t,n){return u(t.getHours()%12||12,n,2)}function C(t,n){return u(1+ht.a.count(Object(ht.D)(t),t),n,3)}function F(t,n){return u(t.getMilliseconds(),n,3)}function z(t,n){return F(t,n)+"000"}function R(t,n){return u(t.getMonth()+1,n,2)}function L(t,n){return u(t.getMinutes(),n,2)}function q(t,n){return u(t.getSeconds(),n,2)}function B(t){var n=t.getDay();return 0===n?7:n}function D(t,n){return u(ht.t.count(Object(ht.D)(t),t),n,2)}function Y(t,n){var e=t.getDay();return t=e>=4||0===e?Object(ht.v)(t):ht.v.ceil(t),u(ht.v.count(Object(ht.D)(t),t)+(4===Object(ht.D)(t).getDay()),n,2)}function U(t){return t.getDay()}function I(t,n){return u(ht.l.count(Object(ht.D)(t),t),n,2)}function X(t,n){return u(t.getFullYear()%100,n,2)}function G(t,n){return u(t.getFullYear()%1e4,n,4)}function H(t){var n=t.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+u(n/60|0,"0",2)+u(n%60,"0",2)}function V(t,n){return u(t.getUTCDate(),n,2)}function W(t,n){return u(t.getUTCHours(),n,2)}function Q(t,n){return u(t.getUTCHours()%12||12,n,2)}function Z(t,n){return u(1+ht.F.count(Object(ht._7)(t),t),n,3)}function K(t,n){return u(t.getUTCMilliseconds(),n,3)}function $(t,n){return K(t,n)+"000"}function J(t,n){return u(t.getUTCMonth()+1,n,2)}function tt(t,n){return u(t.getUTCMinutes(),n,2)}function nt(t,n){return u(t.getUTCSeconds(),n,2)}function et(t){var n=t.getUTCDay();return 0===n?7:n}function rt(t,n){return u(ht.X.count(Object(ht._7)(t),t),n,2)}function it(t,n){var e=t.getUTCDay();return t=e>=4||0===e?Object(ht.Z)(t):ht.Z.ceil(t),u(ht.Z.count(Object(ht._7)(t),t)+(4===Object(ht._7)(t).getUTCDay()),n,2)}function at(t){return t.getUTCDay()}function ot(t,n){return u(ht.P.count(Object(ht._7)(t),t),n,2)}function ut(t,n){return u(t.getUTCFullYear()%100,n,2)}function ct(t,n){return u(t.getUTCFullYear()%1e4,n,4)}function st(){return"+0000"}function lt(){return"%"}function ft(t){return+t}function dt(t){return Math.floor(+t/1e3)}n.a=o;var ht=e(51),pt={"-":"",_:" ",0:"0"},bt=/^\s*\d+/,vt=/^%/,yt=/[\\^$*+?|[\]().{}]/g},function(t,n,e){"use strict";function r(t){return t.toISOString()}e.d(n,"b",function(){return a});var i=e(95),a="%Y-%m-%dT%H:%M:%S.%LZ",o=Date.prototype.toISOString?r:Object(i.d)(a);n.a=o},function(t,n,e){"use strict";var r=e(478);e.d(n,"a",function(){return r.a});var i=e(179);e.d(n,"b",function(){return i.a});var a=e(96);e.d(n,"v",function(){return a.a});var o=e(479);e.d(n,"A",function(){return o.a});var u=e(482);e.d(n,"c",function(){return u.a}),e.d(n,"C",function(){return u.a});var c=e(181);e.d(n,"w",function(){return c.a}),e.d(n,"D",function(){return c.a});var s=e(182);e.d(n,"B",function(){return s.a});var l=e(483);e.d(n,"x",function(){return l.a}),e.d(n,"z",function(){return l.c}),e.d(n,"y",function(){return l.b});var f=e(484);e.d(n,"P",function(){return f.a}),e.d(n,"X",function(){return f.b});var d=e(184);e.d(n,"Q",function(){return d.a});var h=e(185);e.d(n,"R",function(){return h.a});var p=e(186);e.d(n,"S",function(){return p.a});var b=e(188);e.d(n,"T",function(){return b.a});var v=e(187);e.d(n,"U",function(){return v.a});var y=e(189);e.d(n,"V",function(){return y.a});var g=e(190);e.d(n,"W",function(){return g.a});var _=e(485);e.d(n,"e",function(){return _.a});var x=e(486);e.d(n,"f",function(){return x.a});var m=e(54);e.d(n,"d",function(){return m.b});var w=e(487);e.d(n,"g",function(){return w.a});var j=e(191);e.d(n,"i",function(){return j.b});var O=e(192);e.d(n,"j",function(){return O.b});var k=e(55);e.d(n,"h",function(){return k.b});var M=e(488);e.d(n,"l",function(){return M.a});var P=e(489);e.d(n,"m",function(){return P.a});var A=e(98);e.d(n,"k",function(){return A.a});var T=e(490);e.d(n,"o",function(){return T.a});var N=e(52);e.d(n,"n",function(){return N.a});var E=e(491);e.d(n,"p",function(){return E.a}),e.d(n,"q",function(){return E.b});var S=e(492);e.d(n,"r",function(){return S.a});var C=e(493);e.d(n,"s",function(){return C.a}),e.d(n,"t",function(){return C.b}),e.d(n,"u",function(){return C.c});var F=e(494);e.d(n,"E",function(){return F.a});var z=e(495);e.d(n,"G",function(){return z.a});var R=e(496);e.d(n,"F",function(){return R.a});var L=e(33);e.d(n,"H",function(){return L.a});var q=e(497);e.d(n,"I",function(){return q.a});var B=e(498);e.d(n,"J",function(){return B.a});var D=e(99);e.d(n,"K",function(){return D.a});var Y=e(499);e.d(n,"L",function(){return Y.a});var U=e(500);e.d(n,"M",function(){return U.a});var I=e(34);e.d(n,"N",function(){return I.a});var X=e(501);e.d(n,"O",function(){return X.a})},function(t,n,e){"use strict";var r=e(7),i=e(17),a=e(52),o=e(96),u=e(97);n.a=function(){function t(t){var n,i,a,o,u,b=t.length,v=!1,y=new Array(b),g=new Array(b);for(null==d&&(p=h(u=Object(r.a)())),n=0;n<=b;++n){if(!(n<b&&f(o=t[n],n,t))===v)if(v=!v)i=n,p.areaStart(),p.lineStart();else{for(p.lineEnd(),p.lineStart(),a=n-1;a>=i;--a)p.point(y[a],g[a]);p.lineEnd(),p.areaEnd()}v&&(y[n]=+e(o,n,t),g[n]=+s(o,n,t),p.point(c?+c(o,n,t):y[n],l?+l(o,n,t):g[n]))}if(u)return p=null,u+""||null}function n(){return Object(o.a)().defined(f).curve(h).context(d)}var e=u.a,c=null,s=Object(i.a)(0),l=u.b,f=Object(i.a)(!0),d=null,h=a.a,p=null;return t.x=function(n){return arguments.length?(e="function"==typeof n?n:Object(i.a)(+n),c=null,t):e},t.x0=function(n){return arguments.length?(e="function"==typeof n?n:Object(i.a)(+n),t):e},t.x1=function(n){return arguments.length?(c=null==n?null:"function"==typeof n?n:Object(i.a)(+n),t):c},t.y=function(n){return arguments.length?(s="function"==typeof n?n:Object(i.a)(+n),l=null,t):s},t.y0=function(n){return arguments.length?(s="function"==typeof n?n:Object(i.a)(+n),t):s},t.y1=function(n){return arguments.length?(l=null==n?null:"function"==typeof n?n:Object(i.a)(+n),t):l},t.lineX0=t.lineY0=function(){return n().x(e).y(s)},t.lineY1=function(){return n().x(e).y(l)},t.lineX1=function(){return n().x(c).y(s)},t.defined=function(n){return arguments.length?(f="function"==typeof n?n:Object(i.a)(!!n),t):f},t.curve=function(n){return arguments.length?(h=n,null!=d&&(p=h(d)),t):h},t.context=function(n){return arguments.length?(null==n?d=p=null:p=h(d=n),t):d},t}},function(t,n,e){"use strict";function r(t){this._curve=t}function i(t){function n(n){return new r(t(n))}return n._curve=t,n}e.d(n,"a",function(){return o}),n.b=i;var a=e(52),o=i(a.a);r.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}}},function(t,n,e){"use strict";function r(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(Object(i.b)(t)):n()._curve},t}n.b=r;var i=e(180),a=e(96);n.a=function(){return r(Object(a.a)().curve(i.a))}},function(t,n,e){"use strict";n.a=function(t,n){return[(n=+n)*Math.cos(t-=Math.PI/2),n*Math.sin(t)]}},function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=Array.prototype.slice},function(t,n,e){"use strict";var r=e(32);n.a={draw:function(t,n){var e=Math.sqrt(n/r.j);t.moveTo(e,0),t.arc(0,0,e,0,r.m)}}},function(t,n,e){"use strict";n.a={draw:function(t,n){var e=Math.sqrt(n/5)/2;t.moveTo(-3*e,-e),t.lineTo(-e,-e),t.lineTo(-e,-3*e),t.lineTo(e,-3*e),t.lineTo(e,-e),t.lineTo(3*e,-e),t.lineTo(3*e,e),t.lineTo(e,e),t.lineTo(e,3*e),t.lineTo(-e,3*e),t.lineTo(-e,e),t.lineTo(-3*e,e),t.closePath()}}},function(t,n,e){"use strict";var r=Math.sqrt(1/3),i=2*r;n.a={draw:function(t,n){var e=Math.sqrt(n/i),a=e*r;t.moveTo(0,-e),t.lineTo(a,0),t.lineTo(0,e),t.lineTo(-a,0),t.closePath()}}},function(t,n,e){"use strict";var r=e(32),i=Math.sin(r.j/10)/Math.sin(7*r.j/10),a=Math.sin(r.m/10)*i,o=-Math.cos(r.m/10)*i;n.a={draw:function(t,n){var e=Math.sqrt(.8908130915292852*n),i=a*e,u=o*e;t.moveTo(0,-e),t.lineTo(i,u);for(var c=1;c<5;++c){var s=r.m*c/5,l=Math.cos(s),f=Math.sin(s);t.lineTo(f*e,-l*e),t.lineTo(l*i-f*u,f*i+l*u)}t.closePath()}}},function(t,n,e){"use strict";n.a={draw:function(t,n){var e=Math.sqrt(n),r=-e/2;t.rect(r,r,e,e)}}},function(t,n,e){"use strict";var r=Math.sqrt(3);n.a={draw:function(t,n){var e=-Math.sqrt(n/(3*r));t.moveTo(0,2*e),t.lineTo(-r*e,-e),t.lineTo(r*e,-e),t.closePath()}}},function(t,n,e){"use strict";var r=-.5,i=Math.sqrt(3)/2,a=1/Math.sqrt(12),o=3*(a/2+1);n.a={draw:function(t,n){var e=Math.sqrt(n/o),u=e/2,c=e*a,s=u,l=e*a+e,f=-s,d=l;t.moveTo(u,c),t.lineTo(s,l),t.lineTo(f,d),t.lineTo(r*u-i*c,i*u+r*c),t.lineTo(r*s-i*l,i*s+r*l),t.lineTo(r*f-i*d,i*f+r*d),t.lineTo(r*u+i*c,r*c-i*u),t.lineTo(r*s+i*l,r*l-i*s),t.lineTo(r*f+i*d,r*d-i*f),t.closePath()}}},function(t,n,e){"use strict";function r(t,n){this._context=t,this._k=(1-n)/6}n.a=r;var i=e(53),a=e(55);r.prototype={areaStart:i.a,areaEnd:i.a,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:Object(a.c)(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}},n.b=function t(n){function e(t){return new r(t,n)}return e.tension=function(n){return t(+n)},e}(0)},function(t,n,e){"use strict";function r(t,n){this._context=t,this._k=(1-n)/6}n.a=r;var i=e(55);r.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Object(i.c)(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}},n.b=function t(n){function e(t){return new r(t,n)}return e.tension=function(n){return t(+n)},e}(0)},function(t,n,e){"use strict";function r(t){return l.b[t.index]={site:t,halfedges:[]}}function i(t,n){var e=t.site,r=n.left,i=n.right;return e===i&&(i=r,r=e),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(e===r?(r=n[1],i=n[0]):(r=n[0],i=n[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function a(t,n){return n[+(n.left!==t.site)]}function o(t,n){return n[+(n.left===t.site)]}function u(){for(var t,n,e,r,a=0,o=l.b.length;a<o;++a)if((t=l.b[a])&&(r=(n=t.halfedges).length)){var u=new Array(r),c=new Array(r);for(e=0;e<r;++e)u[e]=e,c[e]=i(t,l.e[n[e]]);for(u.sort(function(t,n){return c[n]-c[t]}),e=0;e<r;++e)c[e]=n[u[e]];for(e=0;e<r;++e)n[e]=c[e]}}function c(t,n,e,r){var i,u,c,f,d,h,p,b,v,y,g,_,x=l.b.length,m=!0;for(i=0;i<x;++i)if(u=l.b[i]){for(c=u.site,d=u.halfedges,f=d.length;f--;)l.e[d[f]]||d.splice(f,1);for(f=0,h=d.length;f<h;)y=o(u,l.e[d[f]]),g=y[0],_=y[1],p=a(u,l.e[d[++f%h]]),b=p[0],v=p[1],(Math.abs(g-b)>l.f||Math.abs(_-v)>l.f)&&(d.splice(f,0,l.e.push(Object(s.b)(c,y,Math.abs(g-t)<l.f&&r-_>l.f?[t,Math.abs(b-t)<l.f?v:r]:Math.abs(_-r)<l.f&&e-g>l.f?[Math.abs(v-r)<l.f?b:e,r]:Math.abs(g-e)<l.f&&_-n>l.f?[e,Math.abs(b-e)<l.f?v:n]:Math.abs(_-n)<l.f&&g-t>l.f?[Math.abs(v-n)<l.f?b:t,n]:null))-1),++h);h&&(m=!1)}if(m){var w,j,O,k=1/0;for(i=0,m=null;i<x;++i)(u=l.b[i])&&(c=u.site,w=c[0]-t,j=c[1]-n,(O=w*w+j*j)<k&&(k=O,m=u));if(m){var M=[t,n],P=[t,r],A=[e,r],T=[e,n];m.halfedges.push(l.e.push(Object(s.b)(c=m.site,M,P))-1,l.e.push(Object(s.b)(c,P,A))-1,l.e.push(Object(s.b)(c,A,T))-1,l.e.push(Object(s.b)(c,T,M))-1)}}for(i=0;i<x;++i)(u=l.b[i])&&(u.halfedges.length||delete l.b[i])}n.c=r,n.a=a,n.d=u,n.b=c;var s=e(101),l=e(35)},function(t,n,e){"use strict";function r(){Object(u.a)(this),this.x=this.y=this.arc=this.site=this.cy=null}function i(t){var n=t.P,e=t.N;if(n&&e){var i=n.site,a=t.site,u=e.site;if(i!==u){var l=a[0],f=a[1],d=i[0]-l,h=i[1]-f,p=u[0]-l,b=u[1]-f,v=2*(d*b-h*p);if(!(v>=-c.g)){var y=d*d+h*h,g=p*p+b*b,_=(b*y-h*g)/v,x=(d*g-p*y)/v,m=s.pop()||new r;m.arc=t,m.site=a,m.x=_+l,m.y=(m.cy=x+f)+Math.sqrt(_*_+x*x),t.circle=m;for(var w=null,j=c.c._;j;)if(m.y<j.y||m.y===j.y&&m.x<=j.x){if(!j.L){w=j.P;break}j=j.L}else{if(!j.R){w=j;break}j=j.R}c.c.insert(w,m),w||(o=m)}}}}function a(t){var n=t.circle;n&&(n.P||(o=n.N),c.c.remove(n),s.push(n),Object(u.a)(n),t.circle=null)}e.d(n,"c",function(){return o}),n.a=i,n.b=a;var o,u=e(100),c=e(35),s=[]},function(t,n,e){"use strict";function r(t,n,e){this.k=t,this.x=n,this.y=e}function i(t){return t.__zoom||a}n.a=r,e.d(n,"c",function(){return a}),n.b=i,r.prototype={constructor:r,scale:function(t){return 1===t?this:new r(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new r(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var a=new r(1,0,0);i.prototype=r.prototype},function(t,n,e){"use strict";var r=function(t){return function(){return this.matches(t)}};if("undefined"!=typeof document){var i=document.documentElement;if(!i.matches){var a=i.webkitMatchesSelector||i.msMatchesSelector||i.mozMatchesSelector||i.oMatchesSelector;r=function(t){return function(){return a.call(this,t)}}}}n.a=r},function(t,n,e){"use strict";function r(){return[]}n.a=function(t){return null==t?r:function(){return this.querySelectorAll(t)}}},function(t,n,e){"use strict";function r(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}n.a=r;var i=e(199),a=e(8);n.b=function(){return new a.a(this._enter||this._groups.map(i.a),this._parents)},r.prototype={constructor:r,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}}},function(t,n,e){"use strict";n.a=function(t){return new Array(t.length)}},function(t,n,e){"use strict";var r=e(549);e.d(n,"a",function(){return r.a})},function(t,n,e){"use strict";function r(t,n){var e=t.document.documentElement,r=Object(i.d)(t).on("dragstart.drag",null);n&&(r.on("click.drag",a.a,!0),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in e?r.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}n.b=r;var i=e(56),a=e(202);n.a=function(t){var n=t.document.documentElement,e=Object(i.d)(t).on("dragstart.drag",a.a,!0);"onselectstart"in n?e.on("selectstart.drag",a.a,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}},function(t,n,e){"use strict";function r(){i.b.stopImmediatePropagation()}n.b=r;var i=e(56);n.a=function(){i.b.preventDefault(),i.b.stopImmediatePropagation()}},function(t,n,e){"use strict";var r=e(7),i=e(24),a=e(57),o=e(110),u=e(204);n.a=function(){function t(t){var n,i,a,o,u,b=t.length,v=!1,y=new Array(b),g=new Array(b);for(null==d&&(p=h(u=Object(r.a)())),n=0;n<=b;++n){if(!(n<b&&f(o=t[n],n,t))===v)if(v=!v)i=n,p.areaStart(),p.lineStart();else{for(p.lineEnd(),p.lineStart(),a=n-1;a>=i;--a)p.point(y[a],g[a]);p.lineEnd(),p.areaEnd()}v&&(y[n]=+e(o,n,t),g[n]=+s(o,n,t),p.point(c?+c(o,n,t):y[n],l?+l(o,n,t):g[n]))}if(u)return p=null,u+""||null}function n(){return Object(o.a)().defined(f).curve(h).context(d)}var e=u.a,c=null,s=Object(i.a)(0),l=u.b,f=Object(i.a)(!0),d=null,h=a.a,p=null;return t.x=function(n){return arguments.length?(e="function"==typeof n?n:Object(i.a)(+n),c=null,t):e},t.x0=function(n){return arguments.length?(e="function"==typeof n?n:Object(i.a)(+n),t):e},t.x1=function(n){return arguments.length?(c=null==n?null:"function"==typeof n?n:Object(i.a)(+n),t):c},t.y=function(n){return arguments.length?(s="function"==typeof n?n:Object(i.a)(+n),l=null,t):s},t.y0=function(n){return arguments.length?(s="function"==typeof n?n:Object(i.a)(+n),t):s},t.y1=function(n){return arguments.length?(l=null==n?null:"function"==typeof n?n:Object(i.a)(+n),t):l},t.lineX0=t.lineY0=function(){return n().x(e).y(s)},t.lineY1=function(){return n().x(e).y(l)},t.lineX1=function(){return n().x(c).y(s)},t.defined=function(n){return arguments.length?(f="function"==typeof n?n:Object(i.a)(!!n),t):f},t.curve=function(n){return arguments.length?(h=n,null!=d&&(p=h(d)),t):h},t.context=function(n){return arguments.length?(null==n?d=p=null:p=h(d=n),t):d},t}},function(t,n,e){"use strict";function r(t){return t[0]}function i(t){return t[1]}n.a=r,n.b=i},function(t,n,e){"use strict";function r(t){this._curve=t}function i(t){function n(n){return new r(t(n))}return n._curve=t,n}e.d(n,"a",function(){return o}),n.b=i;var a=e(57),o=i(a.a);r.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}}},function(t,n,e){"use strict";function r(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(Object(i.b)(t)):n()._curve},t}n.a=r;var i=e(205);e(110)},function(t,n,e){"use strict";var r=e(37);n.a={draw:function(t,n){var e=Math.sqrt(n/r.c);t.moveTo(e,0),t.arc(0,0,e,0,r.d)}}},function(t,n,e){"use strict";n.a={draw:function(t,n){var e=Math.sqrt(n/5)/2;t.moveTo(-3*e,-e),t.lineTo(-e,-e),t.lineTo(-e,-3*e),t.lineTo(e,-3*e),t.lineTo(e,-e),t.lineTo(3*e,-e),t.lineTo(3*e,e),t.lineTo(e,e),t.lineTo(e,3*e),t.lineTo(-e,3*e),t.lineTo(-e,e),t.lineTo(-3*e,e),t.closePath()}}},function(t,n,e){"use strict";var r=Math.sqrt(1/3),i=2*r;n.a={draw:function(t,n){var e=Math.sqrt(n/i),a=e*r;t.moveTo(0,-e),t.lineTo(a,0),t.lineTo(0,e),t.lineTo(-a,0),t.closePath()}}},function(t,n,e){"use strict";var r=e(37),i=Math.sin(r.c/10)/Math.sin(7*r.c/10),a=Math.sin(r.d/10)*i,o=-Math.cos(r.d/10)*i;n.a={draw:function(t,n){var e=Math.sqrt(.8908130915292852*n),i=a*e,u=o*e;t.moveTo(0,-e),t.lineTo(i,u);for(var c=1;c<5;++c){var s=r.d*c/5,l=Math.cos(s),f=Math.sin(s);t.lineTo(f*e,-l*e),t.lineTo(l*i-f*u,f*i+l*u)}t.closePath()}}},function(t,n,e){"use strict";n.a={draw:function(t,n){var e=Math.sqrt(n),r=-e/2;t.rect(r,r,e,e)}}},function(t,n,e){"use strict";var r=Math.sqrt(3);n.a={draw:function(t,n){var e=-Math.sqrt(n/(3*r));t.moveTo(0,2*e),t.lineTo(-r*e,-e),t.lineTo(r*e,-e),t.closePath()}}},function(t,n,e){"use strict";var r=-.5,i=Math.sqrt(3)/2,a=1/Math.sqrt(12),o=3*(a/2+1);n.a={draw:function(t,n){var e=Math.sqrt(n/o),u=e/2,c=e*a,s=u,l=e*a+e,f=-s,d=l;t.moveTo(u,c),t.lineTo(s,l),t.lineTo(f,d),t.lineTo(r*u-i*c,i*u+r*c),t.lineTo(r*s-i*l,i*s+r*l),t.lineTo(r*f-i*d,i*f+r*d),t.lineTo(r*u+i*c,r*c-i*u),t.lineTo(r*s+i*l,r*l-i*s),t.lineTo(r*f+i*d,r*d-i*f),t.closePath()}}},function(t,n,e){"use strict";function r(t,n){this._context=t,this._k=(1-n)/6}n.a=r;var i=e(58),a=e(60);r.prototype={areaStart:i.a,areaEnd:i.a,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:Object(a.b)(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};!function t(n){function e(t){return new r(t,n)}return e.tension=function(n){return t(+n)},e}(0)},function(t,n,e){"use strict";function r(t,n){this._context=t,this._k=(1-n)/6}n.a=r;var i=e(60);r.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Object(i.b)(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};!function t(n){function e(t){return new r(t,n)}return e.tension=function(n){return t(+n)},e}(0)},function(t,n,e){"use strict";function r(t){return t.target.depth}function i(t){return t.depth}function a(t,n){return n-1-t.height}function o(t,n){return t.sourceLinks.length?t.depth:n-1}function u(t){return t.targetLinks.length?t.depth:t.sourceLinks.length?Object(c.o)(t.sourceLinks,r)-1:0}n.c=i,n.d=a,n.b=o,n.a=u;var c=e(2)},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(218),i=(e.n(r),e(18));e.d(n,"generatorMixin",function(){return i.a});var a=e(581);e.d(n,"ChartAxis",function(){return a.a});var o=e(582);e.d(n,"ChartPie",function(){return o.a});var u=e(583);e.d(n,"ChartSankey",function(){return u.a});var c=e(584);e.d(n,"ChartSunburst",function(){return c.a});var s=e(585);e.d(n,"Generator",function(){return s.a})},function(t,n,e){var r=e(219);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(221)("0b0c1403",r,!0)},function(t,n,e){n=t.exports=e(220)(void 0),n.push([t.i,".vue-d2b-container {\n  width: 100%;\n  height: 100%; }\n",""])},function(t,n){function e(t,n){var e=t[1]||"",i=t[3];if(!i)return e;if(n&&"function"==typeof btoa){var a=r(i);return[e].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([a]).join("\n")}return[e].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var r=e(n,t);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<t.length;i++){var o=t[i];"number"==typeof o[0]&&r[o[0]]||(e&&!o[2]?o[2]=e:e&&(o[2]="("+o[2]+") and ("+e+")"),n.push(o))}},n}},function(t,n,e){function r(t){for(var n=0;n<t.length;n++){var e=t[n],r=l[e.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](e.parts[i]);for(;i<e.parts.length;i++)r.parts.push(a(e.parts[i]));r.parts.length>e.parts.length&&(r.parts.length=e.parts.length)}else{for(var o=[],i=0;i<e.parts.length;i++)o.push(a(e.parts[i]));l[e.id]={id:e.id,refs:1,parts:o}}}}function i(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function a(t){var n,e,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(p)return b;r.parentNode.removeChild(r)}if(v){var a=h++;r=d||(d=i()),n=o.bind(null,r,a,!1),e=o.bind(null,r,a,!0)}else r=i(),n=u.bind(null,r),e=function(){r.parentNode.removeChild(r)};return n(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;n(t=r)}else e()}}function o(t,n,e,r){var i=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(n,i);else{var a=document.createTextNode(i),o=t.childNodes;o[n]&&t.removeChild(o[n]),o.length?t.insertBefore(a,o[n]):t.appendChild(a)}}function u(t,n){var e=n.css,r=n.media,i=n.sourceMap;if(r&&t.setAttribute("media",r),i&&(e+="\n/*# sourceURL="+i.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=e(222),l={},f=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,h=0,p=!1,b=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,n,e){p=e;var i=s(t,n);return r(i),function(n){for(var e=[],a=0;a<i.length;a++){var o=i[a],u=l[o.id];u.refs--,e.push(u)}n?(i=s(t,n),r(i)):i=[];for(var a=0;a<e.length;a++){var u=e[a];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete l[u.id]}}}};var y=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}()},function(t,n){t.exports=function(t,n){for(var e=[],r={},i=0;i<n.length;i++){var a=n[i],o=a[0],u=a[1],c=a[2],s=a[3],l={id:t+":"+i,css:u,media:c,sourceMap:s};r[o]?r[o].parts.push(l):e.push(r[o]={id:o,parts:[l]})}return e}},function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r="4.12.2"},function(t,n,e){"use strict";var r=e(116);n.a=function(t,n,e){var i,a,o,u,c=t.length,s=n.length,l=new Array(c*s);for(null==e&&(e=r.b),i=o=0;i<c;++i)for(u=t[i],a=0;a<s;++a,++o)l[o]=e(u,n[a]);return l}},function(t,n,e){"use strict";n.a=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}},function(t,n,e){"use strict";var r=e(120),i=e(114),a=e(227),o=e(119),u=e(228),c=e(121),s=e(122),l=e(123);n.a=function(){function t(t){var r,a,o=t.length,u=new Array(o);for(r=0;r<o;++r)u[r]=n(t[r],r,t);var l=e(u),d=l[0],h=l[1],p=f(u,d,h);Array.isArray(p)||(p=Object(s.c)(d,h,p),p=Object(c.a)(Math.ceil(d/p)*p,Math.floor(h/p)*p,p));for(var b=p.length;p[0]<=d;)p.shift(),--b;for(;p[b-1]>h;)p.pop(),--b;var v,y=new Array(b+1);for(r=0;r<=b;++r)v=y[r]=[],v.x0=r>0?p[r-1]:d,v.x1=r<b?p[r]:h;for(r=0;r<o;++r)a=u[r],d<=a&&a<=h&&y[Object(i.c)(p,a,0,b)].push(t[r]);return y}var n=u.a,e=o.a,f=l.a;return t.value=function(e){return arguments.length?(n="function"==typeof e?e:Object(a.a)(e),t):n},t.domain=function(n){return arguments.length?(e="function"==typeof n?n:Object(a.a)([n[0],n[1]]),t):e},t.thresholds=function(n){return arguments.length?(f="function"==typeof n?n:Array.isArray(n)?Object(a.a)(r.b.call(n)):Object(a.a)(n),t):f},t}},function(t,n,e){"use strict";n.a=function(t){return function(){return t}}},function(t,n,e){"use strict";n.a=function(t){return t}},function(t,n,e){"use strict";var r=e(120),i=e(19),a=e(25),o=e(61);n.a=function(t,n,e){return t=r.a.call(t,a.a).sort(i.a),Math.ceil((e-n)/(2*(Object(o.a)(t,.75)-Object(o.a)(t,.25))*Math.pow(t.length,-1/3)))}},function(t,n,e){"use strict";var r=e(117);n.a=function(t,n,e){return Math.ceil((e-n)/(3.5*Object(r.a)(t)*Math.pow(t.length,-1/3)))}},function(t,n,e){"use strict";n.a=function(t,n){var e,r,i=t.length,a=-1;if(null==n){for(;++a<i;)if(null!=(e=t[a])&&e>=e)for(r=e;++a<i;)null!=(e=t[a])&&e>r&&(r=e)}else for(;++a<i;)if(null!=(e=n(t[a],a,t))&&e>=e)for(r=e;++a<i;)null!=(e=n(t[a],a,t))&&e>r&&(r=e);return r}},function(t,n,e){"use strict";var r=e(25);n.a=function(t,n){var e,i=t.length,a=i,o=-1,u=0;if(null==n)for(;++o<i;)isNaN(e=Object(r.a)(t[o]))?--a:u+=e;else for(;++o<i;)isNaN(e=Object(r.a)(n(t[o],o,t)))?--a:u+=e;if(a)return u/a}},function(t,n,e){"use strict";var r=e(19),i=e(25),a=e(61);n.a=function(t,n){var e,o=t.length,u=-1,c=[];if(null==n)for(;++u<o;)isNaN(e=Object(i.a)(t[u]))||c.push(e);else for(;++u<o;)isNaN(e=Object(i.a)(n(t[u],u,t)))||c.push(e);return Object(a.a)(c.sort(r.a),.5)}},function(t,n,e){"use strict";n.a=function(t){for(var n,e,r,i=t.length,a=-1,o=0;++a<i;)o+=t[a].length;for(e=new Array(o);--i>=0;)for(r=t[i],n=r.length;--n>=0;)e[--o]=r[n];return e}},function(t,n,e){"use strict";n.a=function(t,n){for(var e=n.length,r=new Array(e);e--;)r[e]=t[n[e]];return r}},function(t,n,e){"use strict";var r=e(19);n.a=function(t,n){if(e=t.length){var e,i,a=0,o=0,u=t[o];for(null==n&&(n=r.a);++a<e;)(n(i=t[a],u)<0||0!==n(u,u))&&(u=i,o=a);return 0===n(u,u)?o:void 0}}},function(t,n,e){"use strict";n.a=function(t,n,e){for(var r,i,a=(null==e?t.length:e)-(n=null==n?0:+n);a;)i=Math.random()*a--|0,r=t[a+n],t[a+n]=t[i+n],t[i+n]=r;return t}},function(t,n,e){"use strict";n.a=function(t,n){var e,r=t.length,i=-1,a=0;if(null==n)for(;++i<r;)(e=+t[i])&&(a+=e);else for(;++i<r;)(e=+n(t[i],i,t))&&(a+=e);return a}},function(t,n,e){"use strict";var r=e(125);n.a=function(){return Object(r.a)(arguments)}},function(t,n,e){"use strict";var r=e(241);e.d(n,"d",function(){return r.d}),e.d(n,"c",function(){return r.c}),e.d(n,"a",function(){return r.a}),e.d(n,"b",function(){return r.b})},function(t,n,e){"use strict";function r(t){return"translate("+(t+.5)+",0)"}function i(t){return"translate(0,"+(t+.5)+")"}function a(t){return function(n){return+t(n)}}function o(t){var n=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(n=Math.round(n)),function(e){return+t(e)+n}}function u(){return!this.__axis}function c(t,n){function e(e){var r=null==s?n.ticks?n.ticks.apply(n,c):n.domain():s,i=null==l?n.tickFormat?n.tickFormat.apply(n,c):p.a:l,h=Math.max(f,0)+x,O=n.range(),k=+O[0]+.5,M=+O[O.length-1]+.5,P=(n.bandwidth?o:a)(n.copy()),A=e.selection?e.selection():e,T=A.selectAll(".domain").data([null]),N=A.selectAll(".tick").data(r,n).order(),E=N.exit(),S=N.enter().append("g").attr("class","tick"),C=N.select("line"),F=N.select("text");T=T.merge(T.enter().insert("path",".tick").attr("class","domain").attr("stroke","#000")),N=N.merge(S),C=C.merge(S.append("line").attr("stroke","#000").attr(w+"2",m*f)),F=F.merge(S.append("text").attr("fill","#000").attr(w,m*h).attr("dy",t===b?"0em":t===y?"0.71em":"0.32em")),e!==A&&(T=T.transition(e),N=N.transition(e),C=C.transition(e),F=F.transition(e),E=E.transition(e).attr("opacity",_).attr("transform",function(t){return isFinite(t=P(t))?j(t):this.getAttribute("transform")}),S.attr("opacity",_).attr("transform",function(t){var n=this.parentNode.__axis;return j(n&&isFinite(n=n(t))?n:P(t))})),E.remove(),T.attr("d",t===g||t==v?"M"+m*d+","+k+"H0.5V"+M+"H"+m*d:"M"+k+","+m*d+"V0.5H"+M+"V"+m*d),N.attr("opacity",1).attr("transform",function(t){return j(P(t))}),C.attr(w+"2",m*f),F.attr(w,m*h).text(i),A.filter(u).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===v?"start":t===g?"end":"middle"),A.each(function(){this.__axis=P})}var c=[],s=null,l=null,f=6,d=6,x=3,m=t===b||t===g?-1:1,w=t===g||t===v?"x":"y",j=t===b||t===y?r:i;return e.scale=function(t){return arguments.length?(n=t,e):n},e.ticks=function(){return c=h.a.call(arguments),e},e.tickArguments=function(t){return arguments.length?(c=null==t?[]:h.a.call(t),e):c.slice()},e.tickValues=function(t){return arguments.length?(s=null==t?null:h.a.call(t),e):s&&s.slice()},e.tickFormat=function(t){return arguments.length?(l=t,e):l},e.tickSize=function(t){return arguments.length?(f=d=+t,e):f},e.tickSizeInner=function(t){return arguments.length?(f=+t,e):f},e.tickSizeOuter=function(t){return arguments.length?(d=+t,e):d},e.tickPadding=function(t){return arguments.length?(x=+t,e):x},e}function s(t){return c(b,t)}function l(t){return c(v,t)}function f(t){return c(y,t)}function d(t){return c(g,t)}n.d=s,n.c=l,n.a=f,n.b=d;var h=e(242),p=e(243),b=1,v=2,y=3,g=4,_=1e-6},function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=Array.prototype.slice},function(t,n,e){"use strict";n.a=function(t){return t}},function(t,n,e){"use strict";var r=e(245);e.d(n,"a",function(){return r.d}),e.d(n,"c",function(){return r.b}),e.d(n,"d",function(){return r.c}),e.d(n,"b",function(){return r.a})},function(t,n,e){"use strict";function r(t){return{type:t}}function i(){return!b.d.button}function a(){var t=this.ownerSVGElement||this;return[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function o(t){for(;!t.__brush;)if(!(t=t.parentNode))return;return t.__brush}function u(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}function c(t){var n=t.__brush;return n?n.dim.output(n.selection):null}function s(){return f(O)}function l(){return f(k)}function f(t){function n(n){var i=n.property("__brush",f).selectAll(".overlay").data([r("overlay")]);i.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",P.overlay).merge(i).each(function(){var t=o(this).extent;Object(b.j)(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])}),n.selectAll(".selection").data([r("selection")]).enter().append("rect").attr("class","selection").attr("cursor",P.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges");var a=n.selectAll(".handle").data(t.handles,function(t){return t.type});a.exit().remove(),a.enter().append("rect").attr("class",function(t){return"handle handle--"+t.type}).attr("cursor",function(t){return P[t.type]}),n.each(e).attr("fill","none").attr("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush touchstart.brush",l)}function e(){var t=Object(b.j)(this),n=o(this).selection;n?(t.selectAll(".selection").style("display",null).attr("x",n[0][0]).attr("y",n[0][1]).attr("width",n[1][0]-n[0][0]).attr("height",n[1][1]-n[0][1]),t.selectAll(".handle").style("display",null).attr("x",function(t){return"e"===t.type[t.type.length-1]?n[1][0]-z/2:n[0][0]-z/2}).attr("y",function(t){return"s"===t.type[0]?n[1][1]-z/2:n[0][1]-z/2}).attr("width",function(t){return"n"===t.type||"s"===t.type?n[1][0]-n[0][0]+z:z}).attr("height",function(t){return"e"===t.type||"w"===t.type?n[1][1]-n[0][1]+z:z})):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function c(t,n){return t.__brush.emitter||new s(t,n)}function s(t,n){this.that=t,this.args=n,this.state=t.__brush,this.active=0}function l(){function n(){var t=Object(b.g)(D);!$||q||B||(Math.abs(t[0]-tt[0])>Math.abs(t[1]-tt[1])?B=!0:q=!0),tt=t,L=!0,Object(_.a)(),r()}function r(){var t;switch(z=tt[0]-J[0],R=tt[1]-J[1],U){case m:case x:I&&(z=Math.max(W-l,Math.min(Z-y,z)),f=l+z,g=y+z),X&&(R=Math.max(Q-d,Math.min(K-S,R)),p=d+R,F=S+R);break;case w:I<0?(z=Math.max(W-l,Math.min(Z-l,z)),f=l+z,g=y):I>0&&(z=Math.max(W-y,Math.min(Z-y,z)),f=l,g=y+z),X<0?(R=Math.max(Q-d,Math.min(K-d,R)),p=d+R,F=S):X>0&&(R=Math.max(Q-S,Math.min(K-S,R)),p=d,F=S+R);break;case j:I&&(f=Math.max(W,Math.min(Z,l-z*I)),g=Math.max(W,Math.min(Z,y+z*I))),X&&(p=Math.max(Q,Math.min(K,d-R*X)),F=Math.max(Q,Math.min(K,S+R*X)))}g<f&&(I*=-1,t=l,l=y,y=t,t=f,f=g,g=t,Y in A&&rt.attr("cursor",P[Y=A[Y]])),F<p&&(X*=-1,t=d,d=S,S=t,t=p,p=F,F=t,Y in T&&rt.attr("cursor",P[Y=T[Y]])),G.selection&&(V=G.selection),q&&(f=V[0][0],g=V[1][0]),B&&(p=V[0][1],F=V[1][1]),V[0][0]===f&&V[0][1]===p&&V[1][0]===g&&V[1][1]===F||(G.selection=[[f,p],[g,F]],e.call(D),nt.brush())}function i(){if(Object(_.b)(),b.d.touches){if(b.d.touches.length)return;M&&clearTimeout(M),M=setTimeout(function(){M=null},500),et.on("touchmove.brush touchend.brush touchcancel.brush",null)}else Object(h.c)(b.d.view,L),it.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null);et.attr("pointer-events","all"),rt.attr("cursor",P.overlay),G.selection&&(V=G.selection),u(V)&&(G.selection=null,e.call(D)),nt.end()}function a(){switch(b.d.keyCode){case 16:$=I&&X;break;case 18:U===w&&(I&&(y=g-z*I,l=f+z*I),X&&(S=F-R*X,d=p+R*X),U=j,r());break;case 32:U!==w&&U!==j||(I<0?y=g-z:I>0&&(l=f-z),X<0?S=F-R:X>0&&(d=p-R),U=m,rt.attr("cursor",P.selection),r());break;default:return}Object(_.a)()}function s(){switch(b.d.keyCode){case 16:$&&(q=B=$=!1,r());break;case 18:U===j&&(I<0?y=g:I>0&&(l=f),X<0?S=F:X>0&&(d=p),U=w,r());break;case 32:U===m&&(b.d.altKey?(I&&(y=g-z*I,l=f+z*I),X&&(S=F-R*X,d=p+R*X),U=j):(I<0?y=g:I>0&&(l=f),X<0?S=F:X>0&&(d=p),U=w),rt.attr("cursor",P[Y]),r());break;default:return}Object(_.a)()}if(b.d.touches){if(b.d.changedTouches.length<b.d.touches.length)return Object(_.a)()}else if(M)return;if(C.apply(this,arguments)){var l,f,d,p,y,g,S,F,z,R,L,q,B,D=this,Y=b.d.target.__data__.type,U="selection"===(b.d.metaKey?Y="overlay":Y)?x:b.d.altKey?j:w,I=t===k?null:N[Y],X=t===O?null:E[Y],G=o(D),H=G.extent,V=G.selection,W=H[0][0],Q=H[0][1],Z=H[1][0],K=H[1][1],$=I&&X&&b.d.shiftKey,J=Object(b.g)(D),tt=J,nt=c(D,arguments).beforestart();"overlay"===Y?G.selection=V=[[l=t===k?W:J[0],d=t===O?Q:J[1]],[y=t===k?Z:l,S=t===O?K:d]]:(l=V[0][0],d=V[0][1],y=V[1][0],S=V[1][1]),f=l,p=d,g=y,F=S;var et=Object(b.j)(D).attr("pointer-events","none"),rt=et.selectAll(".overlay").attr("cursor",P[Y]);if(b.d.touches)et.on("touchmove.brush",n,!0).on("touchend.brush touchcancel.brush",i,!0);else{var it=Object(b.j)(b.d.view).on("keydown.brush",a,!0).on("keyup.brush",s,!0).on("mousemove.brush",n,!0).on("mouseup.brush",i,!0);Object(h.b)(b.d.view)}Object(_.b)(),Object(v.b)(D),e.call(D),nt.start()}}function f(){var n=this.__brush||{selection:null};return n.extent=S.apply(this,arguments),n.dim=t,n}var M,S=a,C=i,F=Object(d.a)(n,"start","brush","end"),z=6;return n.move=function(n,r){n.selection?n.on("start.brush",function(){c(this,arguments).beforestart().start()}).on("interrupt.brush end.brush",function(){c(this,arguments).end()}).tween("brush",function(){function n(t){a.selection=1===t&&u(l)?null:f(t),e.call(i),o.brush()}var i=this,a=i.__brush,o=c(i,arguments),s=a.selection,l=t.input("function"==typeof r?r.apply(this,arguments):r,a.extent),f=Object(p.interpolate)(s,l);return s&&l?n:n(1)}):n.each(function(){var n=this,i=arguments,a=n.__brush,o=t.input("function"==typeof r?r.apply(n,i):r,a.extent),s=c(n,i).beforestart();Object(v.b)(n),a.selection=null==o||u(o)?null:o,e.call(n),s.start().brush().end()})},s.prototype={beforestart:function(){return 1==++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(){return this.starting&&(this.starting=!1,this.emit("start")),this},brush:function(){return this.emit("brush"),this},end:function(){return 0==--this.active&&(delete this.state.emitter,this.emit("end")),this},emit:function(e){Object(b.c)(new g.a(n,e,t.output(this.state.selection)),F.apply,F,[e,this.that,this.args])}},n.extent=function(t){return arguments.length?(S="function"==typeof t?t:Object(y.a)([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),n):S},n.filter=function(t){return arguments.length?(C="function"==typeof t?t:Object(y.a)(!!t),n):C},n.handleSize=function(t){return arguments.length?(z=+t,n):z},n.on=function(){var t=F.on.apply(F,arguments);return t===F?n:t},n}n.a=c,n.b=s,n.c=l;var d=e(14),h=e(62),p=e(4),b=e(1),v=e(74),y=e(327),g=e(328),_=e(329),x={name:"drag"},m={name:"space"},w={name:"handle"},j={name:"center"},O={name:"x",handles:["e","w"].map(r),input:function(t,n){return t&&[[t[0],n[0][1]],[t[1],n[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},k={name:"y",handles:["n","s"].map(r),input:function(t,n){return t&&[[n[0][0],t[0]],[n[1][0],t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},M={name:"xy",handles:["n","e","s","w","nw","ne","se","sw"].map(r),input:function(t){return t},output:function(t){return t}},P={overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},A={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},T={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},N={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},E={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1};n.d=function(){return f(M)}},function(t,n,e){"use strict";function r(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r)throw new Error("illegal type: "+t);r[t]=[]}return new i(r)}function i(t){this._=t}function a(t,n){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})}function o(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function u(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=c,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}var c={value:function(){}};i.prototype=r.prototype={constructor:i,on:function(t,n){var e,r=this._,i=a(t+"",r),c=-1,s=i.length;{if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++c<s;)if(e=(t=i[c]).type)r[e]=u(r[e],t.name,n);else if(null==n)for(e in r)r[e]=u(r[e],t.name,null);return this}for(;++c<s;)if((e=(t=i[c]).type)&&(e=o(r[e],t.name)))return e}},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new i(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),a=0;a<e;++a)i[a]=arguments[a+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(r=this._[t],a=0,e=r.length;a<e;++a)r[a].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,a=r.length;i<a;++i)r[i].value.apply(n,e)}},n.a=r},function(t,n,e){"use strict";function r(){return!c.d.button}function i(){return this.parentNode}function a(t){return null==t?{x:c.d.x,y:c.d.y}:t}function o(){return"ontouchstart"in this}var u=e(14),c=e(1),s=e(131),l=e(132),f=e(281),d=e(282);n.a=function(){function t(t){t.on("mousedown.drag",n).filter(k).on("touchstart.drag",p).on("touchmove.drag",b).on("touchend.drag touchcancel.drag",v).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function n(){if(!m&&w.apply(this,arguments)){var t=y("mouse",j.apply(this,arguments),c.g,this,arguments);t&&(Object(c.j)(c.d.view).on("mousemove.drag",e,!0).on("mouseup.drag",h,!0),Object(s.a)(c.d.view),Object(l.b)(),x=!1,g=c.d.clientX,_=c.d.clientY,t("start"))}}function e(){if(Object(l.a)(),!x){var t=c.d.clientX-g,n=c.d.clientY-_;x=t*t+n*n>T}M.mouse("drag")}function h(){Object(c.j)(c.d.view).on("mousemove.drag mouseup.drag",null),Object(s.b)(c.d.view,x),Object(l.a)(),M.mouse("end")}function p(){if(w.apply(this,arguments)){var t,n,e=c.d.changedTouches,r=j.apply(this,arguments),i=e.length;for(t=0;t<i;++t)(n=y(e[t].identifier,r,c.p,this,arguments))&&(Object(l.b)(),n("start"))}}function b(){var t,n,e=c.d.changedTouches,r=e.length;for(t=0;t<r;++t)(n=M[e[t].identifier])&&(Object(l.a)(),n("drag"))}function v(){var t,n,e=c.d.changedTouches,r=e.length;for(m&&clearTimeout(m),m=setTimeout(function(){m=null},500),t=0;t<r;++t)(n=M[e[t].identifier])&&(Object(l.b)(),n("end"))}function y(n,e,r,i,a){var o,u,s,l=r(e,n),f=P.copy();if(Object(c.c)(new d.a(t,"beforestart",o,n,A,l[0],l[1],0,0,f),function(){return null!=(c.d.subject=o=O.apply(i,a))&&(u=o.x-l[0]||0,s=o.y-l[1]||0,!0)}))return function h(p){var b,v=l;switch(p){case"start":M[n]=h,b=A++;break;case"end":delete M[n],--A;case"drag":l=r(e,n),b=A}Object(c.c)(new d.a(t,p,o,n,b,l[0]+u,l[1]+s,l[0]-v[0],l[1]-v[1],f),f.apply,f,[p,i,a])}}var g,_,x,m,w=r,j=i,O=a,k=o,M={},P=Object(u.a)("start","drag","end"),A=0,T=0;return t.filter=function(n){return arguments.length?(w="function"==typeof n?n:Object(f.a)(!!n),t):w},t.container=function(n){return arguments.length?(j="function"==typeof n?n:Object(f.a)(n),t):j},t.subject=function(n){return arguments.length?(O="function"==typeof n?n:Object(f.a)(n),t):O},t.touchable=function(n){return arguments.length?(k="function"==typeof n?n:Object(f.a)(!!n),t):k},t.on=function(){var n=P.on.apply(P,arguments);return n===P?t:n},t.clickDistance=function(n){return arguments.length?(T=(n=+n)*n,t):Math.sqrt(T)},t}},function(t,n,e){"use strict";function r(){return new i}function i(){this._="@"+(++a).toString(36)}n.a=r;var a=0;i.prototype=r.prototype={constructor:i,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}}},function(t,n,e){"use strict";var r=e(66),i=e(40);n.a=function(t){var n=Object(r.a)();return n.changedTouches&&(n=n.changedTouches[0]),Object(i.a)(t,n)}},function(t,n,e){"use strict";var r=e(5);n.a=function(t){return"string"==typeof t?new r.a([[document.querySelector(t)]],[document.documentElement]):new r.a([[t]],r.c)}},function(t,n,e){"use strict";var r=e(5),i=e(68);n.a=function(t){"function"!=typeof t&&(t=Object(i.a)(t));for(var n=this._groups,e=n.length,a=new Array(e),o=0;o<e;++o)for(var u,c,s=n[o],l=s.length,f=a[o]=new Array(l),d=0;d<l;++d)(u=s[d])&&(c=t.call(u,u.__data__,d,s))&&("__data__"in u&&(c.__data__=u.__data__),f[d]=c);return new r.a(a,this._parents)}},function(t,n,e){"use strict";var r=e(5),i=e(127);n.a=function(t){"function"!=typeof t&&(t=Object(i.a)(t));for(var n=this._groups,e=n.length,a=[],o=[],u=0;u<e;++u)for(var c,s=n[u],l=s.length,f=0;f<l;++f)(c=s[f])&&(a.push(t.call(c,c.__data__,f,s)),o.push(c));return new r.a(a,o)}},function(t,n,e){"use strict";var r=e(5),i=e(126);n.a=function(t){"function"!=typeof t&&(t=Object(i.a)(t));for(var n=this._groups,e=n.length,a=new Array(e),o=0;o<e;++o)for(var u,c=n[o],s=c.length,l=a[o]=[],f=0;f<s;++f)(u=c[f])&&t.call(u,u.__data__,f,c)&&l.push(u);return new r.a(a,this._parents)}},function(t,n,e){"use strict";function r(t,n,e,r,i,a){for(var u,c=0,s=n.length,l=a.length;c<l;++c)(u=n[c])?(u.__data__=a[c],r[c]=u):e[c]=new o.a(t,a[c]);for(;c<s;++c)(u=n[c])&&(i[c]=u)}function i(t,n,e,r,i,a,u){var s,l,f,d={},h=n.length,p=a.length,b=new Array(h);for(s=0;s<h;++s)(l=n[s])&&(b[s]=f=c+u.call(l,l.__data__,s,n),f in d?i[s]=l:d[f]=l);for(s=0;s<p;++s)f=c+u.call(t,a[s],s,a),(l=d[f])?(r[s]=l,l.__data__=a[s],d[f]=null):e[s]=new o.a(t,a[s]);for(s=0;s<h;++s)(l=n[s])&&d[b[s]]===l&&(i[s]=l)}var a=e(5),o=e(128),u=e(255),c="$";n.a=function(t,n){if(!t)return y=new Array(this.size()),h=-1,this.each(function(t){y[++h]=t}),y;var e=n?i:r,o=this._parents,c=this._groups;"function"!=typeof t&&(t=Object(u.a)(t));for(var s=c.length,l=new Array(s),f=new Array(s),d=new Array(s),h=0;h<s;++h){var p=o[h],b=c[h],v=b.length,y=t.call(p,p&&p.__data__,h,o),g=y.length,_=f[h]=new Array(g),x=l[h]=new Array(g);e(p,b,_,x,d[h]=new Array(v),y,n);for(var m,w,j=0,O=0;j<g;++j)if(m=_[j]){for(j>=O&&(O=j+1);!(w=x[O])&&++O<g;);m._next=w||null}}return l=new a.a(l,o),l._enter=f,l._exit=d,l}},function(t,n,e){"use strict";n.a=function(t){return function(){return t}}},function(t,n,e){"use strict";var r=e(129),i=e(5);n.a=function(){return new i.a(this._exit||this._groups.map(r.a),this._parents)}},function(t,n,e){"use strict";var r=e(5);n.a=function(t){for(var n=this._groups,e=t._groups,i=n.length,a=e.length,o=Math.min(i,a),u=new Array(i),c=0;c<o;++c)for(var s,l=n[c],f=e[c],d=l.length,h=u[c]=new Array(d),p=0;p<d;++p)(s=l[p]||f[p])&&(h[p]=s);for(;c<i;++c)u[c]=n[c];return new r.a(u,this._parents)}},function(t,n,e){"use strict";n.a=function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],a=i.length-1,o=i[a];--a>=0;)(r=i[a])&&(o&&o!==r.nextSibling&&o.parentNode.insertBefore(r,o),o=r);return this}},function(t,n,e){"use strict";function r(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}var i=e(5);n.a=function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=r);for(var e=this._groups,a=e.length,o=new Array(a),u=0;u<a;++u){for(var c,s=e[u],l=s.length,f=o[u]=new Array(l),d=0;d<l;++d)(c=s[d])&&(f[d]=c);f.sort(n)}return new i.a(o,this._parents).order()}},function(t,n,e){"use strict";n.a=function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}},function(t,n,e){"use strict";n.a=function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t}},function(t,n,e){"use strict";n.a=function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,a=r.length;i<a;++i){var o=r[i];if(o)return o}return null}},function(t,n,e){"use strict";n.a=function(){var t=0;return this.each(function(){++t}),t}},function(t,n,e){"use strict";n.a=function(){return!this.node()}},function(t,n,e){"use strict";n.a=function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,a=n[e],o=0,u=a.length;o<u;++o)(i=a[o])&&t.call(i,i.__data__,o,a);return this}},function(t,n,e){"use strict";function r(t){return function(){this.removeAttribute(t)}}function i(t){return function(){this.removeAttributeNS(t.space,t.local)}}function a(t,n){return function(){this.setAttribute(t,n)}}function o(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function u(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function c(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}var s=e(64);n.a=function(t,n){var e=Object(s.a)(t);if(arguments.length<2){var l=this.node();return e.local?l.getAttributeNS(e.space,e.local):l.getAttribute(e)}return this.each((null==n?e.local?i:r:"function"==typeof n?e.local?c:u:e.local?o:a)(e,n))}},function(t,n,e){"use strict";function r(t){return function(){delete this[t]}}function i(t,n){return function(){this[t]=n}}function a(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}n.a=function(t,n){return arguments.length>1?this.each((null==n?r:"function"==typeof n?a:i)(t,n)):this.node()[t]}},function(t,n,e){"use strict";function r(t){return t.trim().split(/^|\s+/)}function i(t){return t.classList||new a(t)}function a(t){this._node=t,this._names=r(t.getAttribute("class")||"")}function o(t,n){for(var e=i(t),r=-1,a=n.length;++r<a;)e.add(n[r])}function u(t,n){for(var e=i(t),r=-1,a=n.length;++r<a;)e.remove(n[r])}function c(t){return function(){o(this,t)}}function s(t){return function(){u(this,t)}}function l(t,n){return function(){(n.apply(this,arguments)?o:u)(this,t)}}a.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}},n.a=function(t,n){var e=r(t+"");if(arguments.length<2){for(var a=i(this.node()),o=-1,u=e.length;++o<u;)if(!a.contains(e[o]))return!1;return!0}return this.each(("function"==typeof n?l:n?c:s)(e,n))}},function(t,n,e){"use strict";function r(){this.textContent=""}function i(t){return function(){this.textContent=t}}function a(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}n.a=function(t){return arguments.length?this.each(null==t?r:("function"==typeof t?a:i)(t)):this.node().textContent}},function(t,n,e){"use strict";function r(){this.innerHTML=""}function i(t){return function(){this.innerHTML=t}}function a(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}n.a=function(t){return arguments.length?this.each(null==t?r:("function"==typeof t?a:i)(t)):this.node().innerHTML}},function(t,n,e){"use strict";function r(){this.nextSibling&&this.parentNode.appendChild(this)}n.a=function(){return this.each(r)}},function(t,n,e){"use strict";function r(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}n.a=function(){return this.each(r)}},function(t,n,e){"use strict";var r=e(63);n.a=function(t){var n="function"==typeof t?t:Object(r.a)(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})}},function(t,n,e){"use strict";function r(){return null}var i=e(63),a=e(68);n.a=function(t,n){var e="function"==typeof t?t:Object(i.a)(t),o=null==n?r:"function"==typeof n?n:Object(a.a)(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),o.apply(this,arguments)||null)})}},function(t,n,e){"use strict";function r(){var t=this.parentNode;t&&t.removeChild(this)}n.a=function(){return this.each(r)}},function(t,n,e){"use strict";n.a=function(t){return arguments.length?this.property("__data__",t):this.node().__data__}},function(t,n,e){"use strict";function r(t,n,e){var r=Object(o.a)(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function i(t,n){return function(){return r(this,t,n)}}function a(t,n){return function(){return r(this,t,n.apply(this,arguments))}}var o=e(69);n.a=function(t,n){return this.each(("function"==typeof n?a:i)(t,n))}},function(t,n,e){"use strict";var r=e(5);n.a=function(t){return"string"==typeof t?new r.a([document.querySelectorAll(t)],[document.documentElement]):new r.a([null==t?[]:t],r.c)}},function(t,n,e){"use strict";var r=e(66),i=e(40);n.a=function(t,n,e){arguments.length<3&&(e=n,n=Object(r.a)().changedTouches);for(var a,o=0,u=n?n.length:0;o<u;++o)if((a=n[o]).identifier===e)return Object(i.a)(t,a);return null}},function(t,n,e){"use strict";var r=e(66),i=e(40);n.a=function(t,n){null==n&&(n=Object(r.a)().touches);for(var e=0,a=n?n.length:0,o=new Array(a);e<a;++e)o[e]=Object(i.a)(t,n[e]);return o}},function(t,n,e){"use strict";n.a=function(t){return function(){return t}}},function(t,n,e){"use strict";function r(t,n,e,r,i,a,o,u,c,s){this.target=t,this.type=n,this.subject=e,this.identifier=r,this.active=i,this.x=a,this.y=o,this.dx=u,this.dy=c,this._=s}n.a=r,r.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t}},function(t,n,e){"use strict";function r(t){if(t instanceof a)return new a(t.l,t.a,t.b,t.opacity);if(t instanceof d){var n=t.h*b.a;return new a(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}t instanceof p.b||(t=Object(p.h)(t));var e=s(t.r),r=s(t.g),i=s(t.b),u=o((.4124564*e+.3575761*r+.1804375*i)/v),c=o((.2126729*e+.7151522*r+.072175*i)/y);return new a(116*c-16,500*(u-c),200*(c-o((.0193339*e+.119192*r+.9503041*i)/g)),t.opacity)}function i(t,n,e,i){return 1===arguments.length?r(t):new a(t,n,e,null==i?1:i)}function a(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r}function o(t){return t>w?Math.pow(t,1/3):t/m+_}function u(t){return t>x?t*t*t:m*(t-_)}function c(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function s(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function l(t){if(t instanceof d)return new d(t.h,t.c,t.l,t.opacity);t instanceof a||(t=r(t));var n=Math.atan2(t.b,t.a)*b.b;return new d(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function f(t,n,e,r){return 1===arguments.length?l(t):new d(t,n,e,null==r?1:r)}function d(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r}n.a=i,n.b=f;var h=e(72),p=e(71),b=e(133),v=.95047,y=1,g=1.08883,_=4/29,x=6/29,m=3*x*x,w=x*x*x;Object(h.a)(a,i,Object(h.b)(p.a,{brighter:function(t){return new a(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new a(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return t=y*u(t),n=v*u(n),e=g*u(e),new p.b(c(3.2404542*n-1.5371385*t-.4985314*e),c(-.969266*n+1.8760108*t+.041556*e),c(.0556434*n-.2040259*t+1.0572252*e),this.opacity)}})),Object(h.a)(d,f,Object(h.b)(p.a,{brighter:function(t){return new d(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new d(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return r(this).rgb()}}))},function(t,n,e){"use strict";function r(t){if(t instanceof a)return new a(t.h,t.s,t.l,t.opacity);t instanceof u.b||(t=Object(u.h)(t));var n=t.r/255,e=t.g/255,r=t.b/255,i=(v*r+p*n-b*e)/(v+p-b),o=r-i,s=(h*(e-i)-f*o)/d,l=Math.sqrt(s*s+o*o)/(h*i*(1-i)),y=l?Math.atan2(s,o)*c.b-120:NaN;return new a(y<0?y+360:y,l,i,t.opacity)}function i(t,n,e,i){return 1===arguments.length?r(t):new a(t,n,e,null==i?1:i)}function a(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}n.a=i;var o=e(72),u=e(71),c=e(133),s=-.14861,l=1.78277,f=-.29227,d=-.90649,h=1.97294,p=h*d,b=h*l,v=l*f-d*s;Object(o.a)(a,i,Object(o.b)(u.a,{brighter:function(t){return t=null==t?u.c:Math.pow(u.c,t),new a(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?u.d:Math.pow(u.d,t),new a(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*c.a,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t);return new u.b(255*(n+e*(s*r+l*i)),255*(n+e*(f*r+d*i)),255*(n+e*(h*r)),this.opacity)}}))},function(t,n,e){"use strict";n.a=function(t,n){return t=+t,n-=t,function(e){return Math.round(t+n*e)}}},function(t,n,e){"use strict";function r(t,n,e,r){function a(t){return t.length?t.pop()+" ":""}function o(t,r,a,o,u,c){if(t!==a||r!==o){var s=u.push("translate(",null,n,null,e);c.push({i:s-4,x:Object(i.a)(t,a)},{i:s-2,x:Object(i.a)(r,o)})}else(a||o)&&u.push("translate("+a+n+o+e)}function u(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(a(e)+"rotate(",null,r)-2,x:Object(i.a)(t,n)})):n&&e.push(a(e)+"rotate("+n+r)}function c(t,n,e,o){t!==n?o.push({i:e.push(a(e)+"skewX(",null,r)-2,x:Object(i.a)(t,n)}):n&&e.push(a(e)+"skewX("+n+r)}function s(t,n,e,r,o,u){if(t!==e||n!==r){var c=o.push(a(o)+"scale(",null,",",null,")");u.push({i:c-4,x:Object(i.a)(t,e)},{i:c-2,x:Object(i.a)(n,r)})}else 1===e&&1===r||o.push(a(o)+"scale("+e+","+r+")")}return function(n,e){var r=[],i=[];return n=t(n),e=t(e),o(n.translateX,n.translateY,e.translateX,e.translateY,r,i),u(n.rotate,e.rotate,r,i),c(n.skewX,e.skewX,r,i),s(n.scaleX,n.scaleY,e.scaleX,e.scaleY,r,i),n=e=null,function(t){for(var n,e=-1,a=i.length;++e<a;)r[(n=i[e]).i]=n.x(t);return r.join("")}}}e.d(n,"a",function(){return o}),e.d(n,"b",function(){return u});var i=e(41),a=e(287),o=r(a.a,"px, ","px)","deg)"),u=r(a.b,", ",")",")")},function(t,n,e){"use strict";function r(t){return"none"===t?s.b:(a||(a=document.createElement("DIV"),o=document.documentElement,u=document.defaultView),a.style.transform=t,t=u.getComputedStyle(o.appendChild(a),null).getPropertyValue("transform"),o.removeChild(a),t=t.slice(7,-1).split(","),Object(s.a)(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]))}function i(t){return null==t?s.b:(c||(c=document.createElementNS("http://www.w3.org/2000/svg","g")),c.setAttribute("transform",t),(t=c.transform.baseVal.consolidate())?(t=t.matrix,Object(s.a)(t.a,t.b,t.c,t.d,t.e,t.f)):s.b)}n.a=r,n.b=i;var a,o,u,c,s=e(288)},function(t,n,e){"use strict";e.d(n,"b",function(){return i});var r=180/Math.PI,i={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};n.a=function(t,n,e,i,a,o){var u,c,s;return(u=Math.sqrt(t*t+n*n))&&(t/=u,n/=u),(s=t*e+n*i)&&(e-=t*s,i-=n*s),(c=Math.sqrt(e*e+i*i))&&(e/=c,i/=c,s/=c),t*i<n*e&&(t=-t,n=-n,s=-s,u=-u),{translateX:a,translateY:o,rotate:Math.atan2(n,t)*r,skewX:Math.atan(s)*r,scaleX:u,scaleY:c}}},function(t,n,e){"use strict";function r(t){return((t=Math.exp(t))+1/t)/2}function i(t){return((t=Math.exp(t))-1/t)/2}function a(t){return((t=Math.exp(2*t))-1)/(t+1)}var o=Math.SQRT2;n.a=function(t,n){var e,u,c=t[0],s=t[1],l=t[2],f=n[0],d=n[1],h=n[2],p=f-c,b=d-s,v=p*p+b*b;if(v<1e-12)u=Math.log(h/l)/o,e=function(t){return[c+t*p,s+t*b,l*Math.exp(o*t*u)]};else{var y=Math.sqrt(v),g=(h*h-l*l+4*v)/(2*l*2*y),_=(h*h-l*l-4*v)/(2*h*2*y),x=Math.log(Math.sqrt(g*g+1)-g),m=Math.log(Math.sqrt(_*_+1)-_);u=(m-x)/o,e=function(t){var n=t*u,e=r(x),f=l/(2*y)*(e*a(o*n+x)-i(x));return[c+f*p,s+f*b,l*e/r(o*n+x)]}}return e.duration=1e3*u,e}},function(t,n,e){"use strict";function r(t){return function(n,e){var r=t((n=Object(i.d)(n)).h,(e=Object(i.d)(e)).h),o=Object(a.a)(n.s,e.s),u=Object(a.a)(n.l,e.l),c=Object(a.a)(n.opacity,e.opacity);return function(t){return n.h=r(t),n.s=o(t),n.l=u(t),n.opacity=c(t),n+""}}}e.d(n,"b",function(){return o});var i=e(9),a=e(26);n.a=r(a.c);var o=r(a.a)},function(t,n,e){"use strict";function r(t,n){var e=Object(a.a)((t=Object(i.e)(t)).l,(n=Object(i.e)(n)).l),r=Object(a.a)(t.a,n.a),o=Object(a.a)(t.b,n.b),u=Object(a.a)(t.opacity,n.opacity);return function(n){return t.l=e(n),t.a=r(n),t.b=o(n),t.opacity=u(n),t+""}}n.a=r;var i=e(9),a=e(26)},function(t,n,e){"use strict";function r(t){return function(n,e){var r=t((n=Object(i.c)(n)).h,(e=Object(i.c)(e)).h),o=Object(a.a)(n.c,e.c),u=Object(a.a)(n.l,e.l),c=Object(a.a)(n.opacity,e.opacity);return function(t){return n.h=r(t),n.c=o(t),n.l=u(t),n.opacity=c(t),n+""}}}e.d(n,"b",function(){return o});var i=e(9),a=e(26);n.a=r(a.c);var o=r(a.a)},function(t,n,e){"use strict";function r(t){return function n(e){function r(n,r){var o=t((n=Object(i.b)(n)).h,(r=Object(i.b)(r)).h),u=Object(a.a)(n.s,r.s),c=Object(a.a)(n.l,r.l),s=Object(a.a)(n.opacity,r.opacity);return function(t){return n.h=o(t),n.s=u(t),n.l=c(Math.pow(t,e)),n.opacity=s(t),n+""}}return e=+e,r.gamma=n,r}(1)}e.d(n,"a",function(){return o});var i=e(9),a=e(26);n.b=r(a.c);var o=r(a.a)},function(t,n,e){"use strict";n.a=function(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1));return e}},function(t,n,e){"use strict";var r=e(1),i=e(296),a=e(299);r.l.prototype.interrupt=i.a,r.l.prototype.transition=a.a},function(t,n,e){"use strict";var r=e(141);n.a=function(t){return this.each(function(){Object(r.a)(this,t)})}},function(t,n,e){"use strict";var r=e(75);n.a=function(t,n,e){var i=new r.a;return n=null==n?0:+n,i.restart(function(e){i.stop(),t(e+n)},n,e),i}},function(t,n,e){"use strict";var r=e(75);n.a=function(t,n,e){var i=new r.a,a=n;return null==n?(i.restart(t,n,e),i):(n=+n,e=null==e?Object(r.b)():+e,i.restart(function r(o){o+=a,i.restart(r,a+=n,e),t(o)},n,e),i)}},function(t,n,e){"use strict";function r(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))return c.time=Object(u.b)(),c;return e}var i=e(12),a=e(6),o=e(143),u=e(42),c={time:null,delay:0,duration:250,ease:o.o};n.a=function(t){var n,e;t instanceof i.a?(n=t._id,t=t._name):(n=Object(i.c)(),(e=c).time=Object(u.b)(),t=null==t?null:t+"");for(var o=this._groups,s=o.length,l=0;l<s;++l)for(var f,d=o[l],h=d.length,p=0;p<h;++p)(f=d[p])&&Object(a.e)(f,t,n,p,d,e||r(f,n));return new i.a(o,this._parents,t,n)}},function(t,n,e){"use strict";function r(t){return function(){this.removeAttribute(t)}}function i(t){return function(){this.removeAttributeNS(t.space,t.local)}}function a(t,n,e){var r,i;return function(){var a=this.getAttribute(t);return a===e?null:a===r?i:i=n(r=a,e)}}function o(t,n,e){var r,i;return function(){var a=this.getAttributeNS(t.space,t.local);return a===e?null:a===r?i:i=n(r=a,e)}}function u(t,n,e){var r,i,a;return function(){var o,u=e(this);return null==u?void this.removeAttribute(t):(o=this.getAttribute(t),o===u?null:o===r&&u===i?a:a=n(r=o,i=u))}}function c(t,n,e){var r,i,a;return function(){var o,u=e(this);return null==u?void this.removeAttributeNS(t.space,t.local):(o=this.getAttributeNS(t.space,t.local),o===u?null:o===r&&u===i?a:a=n(r=o,i=u))}}var s=e(4),l=e(1),f=e(43),d=e(142);n.a=function(t,n){var e=Object(l.h)(t),h="transform"===e?s.interpolateTransformSvg:d.a;return this.attrTween(t,"function"==typeof n?(e.local?c:u)(e,h,Object(f.b)(this,"attr."+t,n)):null==n?(e.local?i:r)(e):(e.local?o:a)(e,h,n+""))}},function(t,n,e){"use strict";function r(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttributeNS(t.space,t.local,r(n))}}return e._value=n,e}function i(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttribute(t,r(n))}}return e._value=n,e}var a=e(1);n.a=function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;var o=Object(a.h)(t);return this.tween(e,(o.local?r:i)(o,n))}},function(t,n,e){"use strict";function r(t,n){return function(){Object(a.g)(this,t).delay=+n.apply(this,arguments)}}function i(t,n){return n=+n,function(){Object(a.g)(this,t).delay=n}}var a=e(6);n.a=function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?r:i)(n,t)):Object(a.f)(this.node(),n).delay}},function(t,n,e){"use strict";function r(t,n){return function(){Object(a.h)(this,t).duration=+n.apply(this,arguments)}}function i(t,n){return n=+n,function(){Object(a.h)(this,t).duration=n}}var a=e(6);n.a=function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?r:i)(n,t)):Object(a.f)(this.node(),n).duration}},function(t,n,e){"use strict";function r(t,n){if("function"!=typeof n)throw new Error;return function(){Object(i.h)(this,t).ease=n}}var i=e(6);n.a=function(t){var n=this._id;return arguments.length?this.each(r(n,t)):Object(i.f)(this.node(),n).ease}},function(t,n,e){"use strict";var r=e(1),i=e(12);n.a=function(t){"function"!=typeof t&&(t=Object(r.f)(t));for(var n=this._groups,e=n.length,a=new Array(e),o=0;o<e;++o)for(var u,c=n[o],s=c.length,l=a[o]=[],f=0;f<s;++f)(u=c[f])&&t.call(u,u.__data__,f,c)&&l.push(u);return new i.a(a,this._parents,this._name,this._id)}},function(t,n,e){"use strict";var r=e(12);n.a=function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,i=n.length,a=e.length,o=Math.min(i,a),u=new Array(i),c=0;c<o;++c)for(var s,l=n[c],f=e[c],d=l.length,h=u[c]=new Array(d),p=0;p<d;++p)(s=l[p]||f[p])&&(h[p]=s);for(;c<i;++c)u[c]=n[c];return new r.a(u,this._parents,this._name,this._id)}},function(t,n,e){"use strict";function r(t){return(t+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t})}function i(t,n,e){var i,o,u=r(n)?a.g:a.h;return function(){var r=u(this,t),a=r.on;a!==i&&(o=(i=a).copy()).on(n,e),r.on=o}}var a=e(6);n.a=function(t,n){var e=this._id;return arguments.length<2?Object(a.f)(this.node(),e).on.on(t):this.each(i(e,t,n))}},function(t,n,e){"use strict";function r(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}n.a=function(){return this.on("end.remove",r(this._id))}},function(t,n,e){"use strict";var r=e(1),i=e(12),a=e(6);n.a=function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=Object(r.m)(t));for(var o=this._groups,u=o.length,c=new Array(u),s=0;s<u;++s)for(var l,f,d=o[s],h=d.length,p=c[s]=new Array(h),b=0;b<h;++b)(l=d[b])&&(f=t.call(l,l.__data__,b,d))&&("__data__"in l&&(f.__data__=l.__data__),p[b]=f,Object(a.e)(p[b],n,e,b,p,Object(a.f)(l,e)));return new i.a(c,this._parents,n,e)}},function(t,n,e){"use strict";var r=e(1),i=e(12),a=e(6);n.a=function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=Object(r.n)(t));for(var o=this._groups,u=o.length,c=[],s=[],l=0;l<u;++l)for(var f,d=o[l],h=d.length,p=0;p<h;++p)if(f=d[p]){for(var b,v=t.call(f,f.__data__,p,d),y=Object(a.f)(f,e),g=0,_=v.length;g<_;++g)(b=v[g])&&Object(a.e)(b,n,e,g,v,y);c.push(v),s.push(f)}return new i.a(c,s,n,e)}},function(t,n,e){"use strict";var r=e(1),i=r.l.prototype.constructor;n.a=function(){return new i(this._groups,this._parents)}},function(t,n,e){"use strict";function r(t,n){var e,r,i;return function(){var a=Object(c.o)(this,t),o=(this.style.removeProperty(t),Object(c.o)(this,t));return a===o?null:a===e&&o===r?i:i=n(e=a,r=o)}}function i(t){return function(){this.style.removeProperty(t)}}function a(t,n,e){var r,i;return function(){var a=Object(c.o)(this,t);return a===e?null:a===r?i:i=n(r=a,e)}}function o(t,n,e){var r,i,a;return function(){var o=Object(c.o)(this,t),u=e(this);return null==u&&(this.style.removeProperty(t),u=Object(c.o)(this,t)),o===u?null:o===r&&u===i?a:a=n(r=o,i=u)}}var u=e(4),c=e(1),s=e(43),l=e(142);n.a=function(t,n,e){var c="transform"==(t+="")?u.interpolateTransformCss:l.a;return null==n?this.styleTween(t,r(t,c)).on("end.style."+t,i(t)):this.styleTween(t,"function"==typeof n?o(t,c,Object(s.b)(this,"style."+t,n)):a(t,c,n+""),e)}},function(t,n,e){"use strict";function r(t,n,e){function r(){var r=this,i=n.apply(r,arguments);return i&&function(n){r.style.setProperty(t,i(n),e)}}return r._value=n,r}n.a=function(t,n,e){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(null==n)return this.tween(i,null);if("function"!=typeof n)throw new Error;return this.tween(i,r(t,n,null==e?"":e))}},function(t,n,e){"use strict";function r(t){return function(){this.textContent=t}}function i(t){return function(){var n=t(this);this.textContent=null==n?"":n}}var a=e(43);n.a=function(t){return this.tween("text","function"==typeof t?i(Object(a.b)(this,"text",t)):r(null==t?"":t+""))}},function(t,n,e){"use strict";var r=e(12),i=e(6);n.a=function(){for(var t=this._name,n=this._id,e=Object(r.c)(),a=this._groups,o=a.length,u=0;u<o;++u)for(var c,s=a[u],l=s.length,f=0;f<l;++f)if(c=s[f]){var d=Object(i.f)(c,n);Object(i.e)(c,t,e,f,s,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new r.a(a,this._parents,t,e)}},function(t,n,e){"use strict";function r(t){return+t}n.a=r},function(t,n,e){"use strict";function r(t){return t*t}function i(t){return t*(2-t)}function a(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}n.a=r,n.c=i,n.b=a},function(t,n,e){"use strict";function r(t){return t*t*t}function i(t){return--t*t*t+1}function a(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}n.a=r,n.c=i,n.b=a},function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"c",function(){return i}),e.d(n,"b",function(){return a});var r=function t(n){function e(t){return Math.pow(t,n)}return n=+n,e.exponent=t,e}(3),i=function t(n){function e(t){return 1-Math.pow(1-t,n)}return n=+n,e.exponent=t,e}(3),a=function t(n){function e(t){return((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2}return n=+n,e.exponent=t,e}(3)},function(t,n,e){"use strict";function r(t){return 1-Math.cos(t*u)}function i(t){return Math.sin(t*u)}function a(t){return(1-Math.cos(o*t))/2}n.a=r,n.c=i,n.b=a;var o=Math.PI,u=o/2},function(t,n,e){"use strict";function r(t){return Math.pow(2,10*t-10)}function i(t){return 1-Math.pow(2,-10*t)}function a(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}n.a=r,n.c=i,n.b=a},function(t,n,e){"use strict";function r(t){return 1-Math.sqrt(1-t*t)}function i(t){return Math.sqrt(1- --t*t)}function a(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}n.a=r,n.c=i,n.b=a},function(t,n,e){"use strict";function r(t){return 1-i(1-t)}function i(t){return(t=+t)<o?b*t*t:t<c?b*(t-=u)*t+s:t<f?b*(t-=l)*t+d:b*(t-=h)*t+p}function a(t){return((t*=2)<=1?1-i(1-t):i(t-1)+1)/2}n.a=r,n.c=i,n.b=a;var o=4/11,u=6/11,c=8/11,s=.75,l=9/11,f=10/11,d=.9375,h=21/22,p=63/64,b=1/o/o},function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"c",function(){return i}),e.d(n,"b",function(){return a});var r=function t(n){function e(t){return t*t*((n+1)*t-n)}return n=+n,e.overshoot=t,e}(1.70158),i=function t(n){function e(t){return--t*t*((n+1)*t+n)+1}return n=+n,e.overshoot=t,e}(1.70158),a=function t(n){function e(t){return((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}return n=+n,e.overshoot=t,e}(1.70158)},function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"c",function(){return a}),e.d(n,"b",function(){return o});var r=2*Math.PI,i=function t(n,e){function i(t){return n*Math.pow(2,10*--t)*Math.sin((a-t)/e)}var a=Math.asin(1/(n=Math.max(1,n)))*(e/=r);return i.amplitude=function(n){return t(n,e*r)},i.period=function(e){return t(n,e)},i}(1,.3),a=function t(n,e){function i(t){return 1-n*Math.pow(2,-10*(t=+t))*Math.sin((t+a)/e)}var a=Math.asin(1/(n=Math.max(1,n)))*(e/=r);return i.amplitude=function(n){return t(n,e*r)},i.period=function(e){return t(n,e)},i}(1,.3),o=function t(n,e){function i(t){return((t=2*t-1)<0?n*Math.pow(2,10*t)*Math.sin((a-t)/e):2-n*Math.pow(2,-10*t)*Math.sin((a+t)/e))/2}var a=Math.asin(1/(n=Math.max(1,n)))*(e/=r);return i.amplitude=function(n){return t(n,e*r)},i.period=function(e){return t(n,e)},i}(1,.3)},function(t,n,e){"use strict";var r=e(12),i=e(6),a=[null];n.a=function(t,n){var e,o,u=t.__transition;if(u){n=null==n?null:n+"";for(o in u)if((e=u[o]).state>i.c&&e.name===n)return new r.a([[t]],a,n,+o)}return null}},function(t,n,e){"use strict";n.a=function(t){return function(){return t}}},function(t,n,e){"use strict";n.a=function(t,n,e){this.target=t,this.type=n,this.selection=e}},function(t,n,e){"use strict";function r(){i.d.stopImmediatePropagation()}n.b=r;var i=e(1);n.a=function(){i.d.preventDefault(),i.d.stopImmediatePropagation()}},function(t,n,e){"use strict";var r=e(331);e.d(n,"a",function(){return r.a});var i=e(332);e.d(n,"b",function(){return i.a})},function(t,n,e){"use strict";function r(t){return function(n,e){return t(n.source.value+n.target.value,e.source.value+e.target.value)}}var i=e(2),a=e(144);n.a=function(){function t(t){var r,c,s,l,f,d,h=t.length,p=[],b=Object(i.s)(h),v=[],y=[],g=y.groups=new Array(h),_=new Array(h*h);for(r=0,f=-1;++f<h;){for(c=0,d=-1;++d<h;)c+=t[f][d];p.push(c),v.push(Object(i.s)(h)),r+=c}for(e&&b.sort(function(t,n){return e(p[t],p[n])}),o&&v.forEach(function(n,e){n.sort(function(n,r){return o(t[e][n],t[e][r])})}),r=Object(a.c)(0,a.e-n*h)/r,l=r?n:a.e/h,c=0,f=-1;++f<h;){for(s=c,d=-1;++d<h;){var x=b[f],m=v[x][d],w=t[x][m],j=c,O=c+=w*r;_[m*h+x]={index:x,subindex:m,startAngle:j,endAngle:O,value:w}}g[x]={index:x,startAngle:s,endAngle:c,value:p[x]},c+=l}for(f=-1;++f<h;)for(d=f-1;++d<h;){var k=_[d*h+f],M=_[f*h+d];(k.value||M.value)&&y.push(k.value<M.value?{source:M,target:k}:{source:k,target:M})}return u?y.sort(u):y}var n=0,e=null,o=null,u=null;return t.padAngle=function(e){return arguments.length?(n=Object(a.c)(0,e),t):n},t.sortGroups=function(n){return arguments.length?(e=n,t):e},t.sortSubgroups=function(n){return arguments.length?(o=n,t):o},t.sortChords=function(n){return arguments.length?(null==n?u=null:(u=r(n))._=n,t):u&&u._},t}},function(t,n,e){"use strict";function r(t){return t.source}function i(t){return t.target}function a(t){return t.radius}function o(t){return t.startAngle}function u(t){return t.endAngle}var c=e(333),s=e(334),l=e(144),f=e(7);n.a=function(){function t(){var t,r=c.a.call(arguments),i=n.apply(this,r),a=e.apply(this,r),o=+d.apply(this,(r[0]=i,r)),u=h.apply(this,r)-l.b,s=p.apply(this,r)-l.b,v=o*Object(l.a)(u),y=o*Object(l.d)(u),g=+d.apply(this,(r[0]=a,r)),_=h.apply(this,r)-l.b,x=p.apply(this,r)-l.b;if(b||(b=t=Object(f.a)()),b.moveTo(v,y),b.arc(0,0,o,u,s),u===_&&s===x||(b.quadraticCurveTo(0,0,g*Object(l.a)(_),g*Object(l.d)(_)),b.arc(0,0,g,_,x)),b.quadraticCurveTo(0,0,v,y),b.closePath(),t)return b=null,t+""||null}var n=r,e=i,d=a,h=o,p=u,b=null;return t.radius=function(n){return arguments.length?(d="function"==typeof n?n:Object(s.a)(+n),t):d},t.startAngle=function(n){return arguments.length?(h="function"==typeof n?n:Object(s.a)(+n),t):h},t.endAngle=function(n){return arguments.length?(p="function"==typeof n?n:Object(s.a)(+n),t):p},t.source=function(e){return arguments.length?(n=e,t):n},t.target=function(n){return arguments.length?(e=n,t):e},t.context=function(n){return arguments.length?(b=null==n?null:n,t):b},t}},function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=Array.prototype.slice},function(t,n,e){"use strict";n.a=function(t){return function(){return t}}},function(t,n,e){"use strict";function r(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function i(){return new r}var a=Math.PI,o=2*a,u=o-1e-6;r.prototype=i.prototype={constructor:r,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,a){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+a)},arcTo:function(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i;var o=this._x1,u=this._y1,c=e-t,s=r-n,l=o-t,f=u-n,d=l*l+f*f;if(i<0)throw new Error("negative radius: "+i);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(d>1e-6)if(Math.abs(f*c-s*l)>1e-6&&i){var h=e-o,p=r-u,b=c*c+s*s,v=h*h+p*p,y=Math.sqrt(b),g=Math.sqrt(d),_=i*Math.tan((a-Math.acos((b+d-v)/(2*y*g)))/2),x=_/g,m=_/y;Math.abs(x-1)>1e-6&&(this._+="L"+(t+x*l)+","+(n+x*f)),this._+="A"+i+","+i+",0,0,"+ +(f*h>l*p)+","+(this._x1=t+m*c)+","+(this._y1=n+m*s)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,r,i,c){t=+t,n=+n,e=+e;var s=e*Math.cos(r),l=e*Math.sin(r),f=t+s,d=n+l,h=1^c,p=c?r-i:i-r;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+f+","+d:(Math.abs(this._x1-f)>1e-6||Math.abs(this._y1-d)>1e-6)&&(this._+="L"+f+","+d),e&&(p<0&&(p=p%o+o),p>u?this._+="A"+e+","+e+",0,1,"+h+","+(t-s)+","+(n-l)+"A"+e+","+e+",0,1,"+h+","+(this._x1=f)+","+(this._y1=d):p>1e-6&&(this._+="A"+e+","+e+",0,"+ +(p>=a)+","+h+","+(this._x1=t+e*Math.cos(i))+","+(this._y1=n+e*Math.sin(i))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}},n.a=i},function(t,n,e){"use strict";function r(){return{}}function i(t,n,e){t[n]=e}function a(){return Object(u.a)()}function o(t,n,e){t.set(n,e)}var u=e(76);n.a=function(){function t(n,r,i,a){if(r>=l.length)return null!=e&&n.sort(e),null!=c?c(n):n;for(var o,s,f,d=-1,h=n.length,p=l[r++],b=Object(u.a)(),v=i();++d<h;)(f=b.get(o=p(s=n[d])+""))?f.push(s):b.set(o,[s]);return b.each(function(n,e){a(v,e,t(n,r,i,a))}),v}function n(t,e){if(++e>l.length)return t;var r,i=f[e-1];return null!=c&&e>=l.length?r=t.entries():(r=[],t.each(function(t,i){r.push({key:i,values:n(t,e)})})),null!=i?r.sort(function(t,n){return i(t.key,n.key)}):r}var e,c,s,l=[],f=[];return s={object:function(n){return t(n,0,r,i)},map:function(n){return t(n,0,a,o)},entries:function(e){return n(t(e,0,a,o),0)},key:function(t){return l.push(t),s},sortKeys:function(t){return f[l.length-1]=t,s},sortValues:function(t){return e=t,s},rollup:function(t){return c=t,s}}}},function(t,n,e){"use strict";function r(){}function i(t,n){var e=new r;if(t instanceof r)t.each(function(t){e.add(t)});else if(t){var i=-1,a=t.length;if(null==n)for(;++i<a;)e.add(t[i]);else for(;++i<a;)e.add(n(t[i],i,t))}return e}var a=e(76),o=a.a.prototype;r.prototype=i.prototype={constructor:r,has:o.has,add:function(t){return t+="",this[a.b+t]=t,this},remove:o.remove,clear:o.clear,values:o.keys,size:o.size,empty:o.empty,each:o.each},n.a=i},function(t,n,e){"use strict";n.a=function(t){var n=[];for(var e in t)n.push(e);return n}},function(t,n,e){"use strict";n.a=function(t){var n=[];for(var e in t)n.push(t[e]);return n}},function(t,n,e){"use strict";n.a=function(t){var n=[];for(var e in t)n.push({key:e,value:t[e]});return n}},function(t,n,e){"use strict";e.d(n,"c",function(){return a}),e.d(n,"d",function(){return o}),e.d(n,"a",function(){return u}),e.d(n,"b",function(){return c});var r=e(78),i=Object(r.a)(","),a=i.parse,o=i.parseRows,u=i.format,c=i.formatRows},function(t,n,e){"use strict";e.d(n,"c",function(){return a}),e.d(n,"d",function(){return o}),e.d(n,"a",function(){return u}),e.d(n,"b",function(){return c});var r=e(78),i=Object(r.a)("\t"),a=i.parse,o=i.parseRows,u=i.format,c=i.formatRows},function(t,n,e){"use strict";var r=e(344);e.d(n,"a",function(){return r.a});var i=e(345);e.d(n,"b",function(){return i.a});var a=e(359);e.d(n,"c",function(){return a.a});var o=e(360);e.d(n,"d",function(){return o.a});var u=e(361);e.d(n,"e",function(){return u.a});var c=e(145);e.d(n,"f",function(){return c.a});var s=e(362);e.d(n,"g",function(){return s.a});var l=e(363);e.d(n,"h",function(){return l.a})},function(t,n,e){"use strict";n.a=function(t,n){function e(){var e,i,a=r.length,o=0,u=0;for(e=0;e<a;++e)i=r[e],o+=i.x,u+=i.y;for(o=o/a-t,u=u/a-n,e=0;e<a;++e)i=r[e],i.x-=o,i.y-=u}var r;return null==t&&(t=0),null==n&&(n=0),e.initialize=function(t){r=t},e.x=function(n){return arguments.length?(t=+n,e):t},e.y=function(t){return arguments.length?(n=+t,e):n},e}},function(t,n,e){"use strict";function r(t){return t.x+t.vx}function i(t){return t.y+t.vy}var a=e(21),o=e(79),u=e(80);n.a=function(t){function n(){function t(t,n,e,r,i){var a=t.data,u=t.r,s=b+u;{if(!a)return n>h+s||r<h-s||e>p+s||i<p-s;if(a.index>c.index){var l=h-a.x-a.vx,d=p-a.y-a.vy,y=l*l+d*d;y<s*s&&(0===l&&(l=Object(o.a)(),y+=l*l),0===d&&(d=Object(o.a)(),y+=d*d),y=(s-(y=Math.sqrt(y)))/y*f,c.vx+=(l*=y)*(s=(u*=u)/(v+u)),c.vy+=(d*=y)*s,a.vx-=l*(s=1-s),a.vy-=d*s)}}}for(var n,a,c,h,p,b,v,y=s.length,g=0;g<d;++g)for(a=Object(u.a)(s,r,i).visitAfter(e),n=0;n<y;++n)c=s[n],b=l[c.index],v=b*b,h=c.x+c.vx,p=c.y+c.vy,a.visit(t)}function e(t){if(t.data)return t.r=l[t.data.index];for(var n=t.r=0;n<4;++n)t[n]&&t[n].r>t.r&&(t.r=t[n].r)}function c(){if(s){var n,e,r=s.length;for(l=new Array(r),n=0;n<r;++n)e=s[n],l[e.index]=+t(e,n,s)}}var s,l,f=1,d=1;return"function"!=typeof t&&(t=Object(a.a)(null==t?1:+t)),n.initialize=function(t){s=t,c()},n.iterations=function(t){return arguments.length?(d=+t,n):d},n.strength=function(t){return arguments.length?(f=+t,n):f},n.radius=function(e){return arguments.length?(t="function"==typeof e?e:Object(a.a)(+e),c(),n):t},n}},function(t,n,e){"use strict";function r(t,n,e){var r=new i(null==n?v.b:n,null==e?y.b:e,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}function i(t,n,e,r,i,a){this._x=t,this._y=n,this._x0=e,this._y0=r,this._x1=i,this._y1=a,this._root=void 0}function a(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}n.a=r;var o=e(347),u=e(348),c=e(349),s=e(350),l=e(351),f=e(352),d=e(353),h=e(354),p=e(355),b=e(356),v=e(357),y=e(358),g=r.prototype=i.prototype;g.copy=function(){var t,n,e=new i(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return e;if(!r.length)return e._root=a(r),e;for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var o=0;o<4;++o)(n=r.source[o])&&(n.length?t.push({source:n,target:r.target[o]=new Array(4)}):r.target[o]=a(n));return e},g.add=o.b,g.addAll=o.a,g.cover=u.a,g.data=c.a,g.extent=s.a,g.find=l.a,g.remove=f.a,g.removeAll=f.b,g.root=d.a,g.size=h.a,g.visit=p.a,g.visitAfter=b.a,g.x=v.a,g.y=y.a},function(t,n,e){"use strict";function r(t,n,e,r){if(isNaN(n)||isNaN(e))return t;var i,a,o,u,c,s,l,f,d,h=t._root,p={data:r},b=t._x0,v=t._y0,y=t._x1,g=t._y1;if(!h)return t._root=p,t;for(;h.length;)if((s=n>=(a=(b+y)/2))?b=a:y=a,(l=e>=(o=(v+g)/2))?v=o:g=o,i=h,!(h=h[f=l<<1|s]))return i[f]=p,t;if(u=+t._x.call(null,h.data),c=+t._y.call(null,h.data),n===u&&e===c)return p.next=h,i?i[f]=p:t._root=p,t;do{i=i?i[f]=new Array(4):t._root=new Array(4),(s=n>=(a=(b+y)/2))?b=a:y=a,(l=e>=(o=(v+g)/2))?v=o:g=o}while((f=l<<1|s)==(d=(c>=o)<<1|u>=a));return i[d]=h,i[f]=p,t}function i(t){var n,e,i,a,o=t.length,u=new Array(o),c=new Array(o),s=1/0,l=1/0,f=-1/0,d=-1/0;for(e=0;e<o;++e)isNaN(i=+this._x.call(null,n=t[e]))||isNaN(a=+this._y.call(null,n))||(u[e]=i,c[e]=a,i<s&&(s=i),i>f&&(f=i),a<l&&(l=a),a>d&&(d=a));for(f<s&&(s=this._x0,f=this._x1),d<l&&(l=this._y0,d=this._y1),this.cover(s,l).cover(f,d),e=0;e<o;++e)r(this,u[e],c[e],t[e]);return this}n.a=i,n.b=function(t){var n=+this._x.call(null,t),e=+this._y.call(null,t);return r(this.cover(n,e),n,e,t)}},function(t,n,e){"use strict";n.a=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,r=this._y0,i=this._x1,a=this._y1;if(isNaN(e))i=(e=Math.floor(t))+1,a=(r=Math.floor(n))+1;else{if(!(e>t||t>i||r>n||n>a))return this;var o,u,c=i-e,s=this._root;switch(u=(n<(r+a)/2)<<1|t<(e+i)/2){case 0:do{o=new Array(4),o[u]=s,s=o}while(c*=2,i=e+c,a=r+c,t>i||n>a);break;case 1:do{o=new Array(4),o[u]=s,s=o}while(c*=2,e=i-c,a=r+c,e>t||n>a);break;case 2:do{o=new Array(4),o[u]=s,s=o}while(c*=2,i=e+c,r=a-c,t>i||r>n);break;case 3:do{o=new Array(4),o[u]=s,s=o}while(c*=2,e=i-c,r=a-c,e>t||r>n)}this._root&&this._root.length&&(this._root=s)}return this._x0=e,this._y0=r,this._x1=i,this._y1=a,this}},function(t,n,e){"use strict";n.a=function(){var t=[];return this.visit(function(n){if(!n.length)do{t.push(n.data)}while(n=n.next)}),t}},function(t,n,e){"use strict";n.a=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}},function(t,n,e){"use strict";var r=e(81);n.a=function(t,n,e){var i,a,o,u,c,s,l,f=this._x0,d=this._y0,h=this._x1,p=this._y1,b=[],v=this._root;for(v&&b.push(new r.a(v,f,d,h,p)),null==e?e=1/0:(f=t-e,d=n-e,h=t+e,p=n+e,e*=e);s=b.pop();)if(!(!(v=s.node)||(a=s.x0)>h||(o=s.y0)>p||(u=s.x1)<f||(c=s.y1)<d))if(v.length){var y=(a+u)/2,g=(o+c)/2;b.push(new r.a(v[3],y,g,u,c),new r.a(v[2],a,g,y,c),new r.a(v[1],y,o,u,g),new r.a(v[0],a,o,y,g)),(l=(n>=g)<<1|t>=y)&&(s=b[b.length-1],b[b.length-1]=b[b.length-1-l],b[b.length-1-l]=s)}else{var _=t-+this._x.call(null,v.data),x=n-+this._y.call(null,v.data),m=_*_+x*x;if(m<e){var w=Math.sqrt(e=m);f=t-w,d=n-w,h=t+w,p=n+w,i=v.data}}return i}},function(t,n,e){"use strict";function r(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this}n.b=r,n.a=function(t){if(isNaN(a=+this._x.call(null,t))||isNaN(o=+this._y.call(null,t)))return this;var n,e,r,i,a,o,u,c,s,l,f,d,h=this._root,p=this._x0,b=this._y0,v=this._x1,y=this._y1;if(!h)return this;if(h.length)for(;;){if((s=a>=(u=(p+v)/2))?p=u:v=u,(l=o>=(c=(b+y)/2))?b=c:y=c,n=h,!(h=h[f=l<<1|s]))return this;if(!h.length)break;(n[f+1&3]||n[f+2&3]||n[f+3&3])&&(e=n,d=f)}for(;h.data!==t;)if(r=h,!(h=h.next))return this;return(i=h.next)&&delete h.next,r?(i?r.next=i:delete r.next,this):n?(i?n[f]=i:delete n[f],(h=n[0]||n[1]||n[2]||n[3])&&h===(n[3]||n[2]||n[1]||n[0])&&!h.length&&(e?e[d]=h:this._root=h),this):(this._root=i,this)}},function(t,n,e){"use strict";n.a=function(){return this._root}},function(t,n,e){"use strict";n.a=function(){var t=0;return this.visit(function(n){if(!n.length)do{++t}while(n=n.next)}),t}},function(t,n,e){"use strict";var r=e(81);n.a=function(t){var n,e,i,a,o,u,c=[],s=this._root;for(s&&c.push(new r.a(s,this._x0,this._y0,this._x1,this._y1));n=c.pop();)if(!t(s=n.node,i=n.x0,a=n.y0,o=n.x1,u=n.y1)&&s.length){var l=(i+o)/2,f=(a+u)/2;(e=s[3])&&c.push(new r.a(e,l,f,o,u)),(e=s[2])&&c.push(new r.a(e,i,f,l,u)),(e=s[1])&&c.push(new r.a(e,l,a,o,f)),(e=s[0])&&c.push(new r.a(e,i,a,l,f))}return this}},function(t,n,e){"use strict";var r=e(81);n.a=function(t){var n,e=[],i=[];for(this._root&&e.push(new r.a(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var a=n.node;if(a.length){var o,u=n.x0,c=n.y0,s=n.x1,l=n.y1,f=(u+s)/2,d=(c+l)/2;(o=a[0])&&e.push(new r.a(o,u,c,f,d)),(o=a[1])&&e.push(new r.a(o,f,c,s,d)),(o=a[2])&&e.push(new r.a(o,u,d,f,l)),(o=a[3])&&e.push(new r.a(o,f,d,s,l))}i.push(n)}for(;n=i.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1);return this}},function(t,n,e){"use strict";function r(t){return t[0]}n.b=r,n.a=function(t){return arguments.length?(this._x=t,this):this._x}},function(t,n,e){"use strict";function r(t){return t[1]}n.b=r,n.a=function(t){return arguments.length?(this._y=t,this):this._y}},function(t,n,e){"use strict";function r(t){return t.index}function i(t,n){var e=t.get(n);if(!e)throw new Error("missing: "+n);return e}var a=e(21),o=e(79),u=e(20);n.a=function(t){function n(t){return 1/Math.min(p[t.source.index],p[t.target.index])}function e(n){for(var e=0,r=t.length;e<_;++e)for(var i,a,u,c,s,l,h,p=0;p<r;++p)i=t[p],a=i.source,u=i.target,c=u.x+u.vx-a.x-a.vx||Object(o.a)(),s=u.y+u.vy-a.y-a.vy||Object(o.a)(),l=Math.sqrt(c*c+s*s),l=(l-d[p])/l*n*f[p],c*=l,s*=l,u.vx-=c*(h=b[p]),u.vy-=s*h,a.vx+=c*(h=1-h),a.vy+=s*h}function c(){if(h){var n,e,r=h.length,a=t.length,o=Object(u.c)(h,v);for(n=0,p=new Array(r);n<a;++n)e=t[n],e.index=n,"object"!=typeof e.source&&(e.source=i(o,e.source)),"object"!=typeof e.target&&(e.target=i(o,e.target)),p[e.source.index]=(p[e.source.index]||0)+1,p[e.target.index]=(p[e.target.index]||0)+1;for(n=0,b=new Array(a);n<a;++n)e=t[n],b[n]=p[e.source.index]/(p[e.source.index]+p[e.target.index]);f=new Array(a),s(),d=new Array(a),l()}}function s(){if(h)for(var n=0,e=t.length;n<e;++n)f[n]=+y(t[n],n,t)}function l(){if(h)for(var n=0,e=t.length;n<e;++n)d[n]=+g(t[n],n,t)}var f,d,h,p,b,v=r,y=n,g=Object(a.a)(30),_=1;return null==t&&(t=[]),e.initialize=function(t){h=t,c()},e.links=function(n){return arguments.length?(t=n,c(),e):t},e.id=function(t){return arguments.length?(v=t,e):v},e.iterations=function(t){return arguments.length?(_=+t,e):_},e.strength=function(t){return arguments.length?(y="function"==typeof t?t:Object(a.a)(+t),s(),e):y},e.distance=function(t){return arguments.length?(g="function"==typeof t?t:Object(a.a)(+t),l(),e):g},e}},function(t,n,e){"use strict";var r=e(21),i=e(79),a=e(80),o=e(145);n.a=function(){function t(t){var n,r=c.length,i=Object(a.a)(c,o.b,o.c).visitAfter(e);for(l=t,n=0;n<r;++n)s=c[n],i.visit(u)}function n(){if(c){var t,n,e=c.length;for(f=new Array(e),t=0;t<e;++t)n=c[t],f[n.index]=+d(n,t,c)}}function e(t){var n,e,r,i,a,o=0,u=0;if(t.length){for(r=i=a=0;a<4;++a)(n=t[a])&&(e=Math.abs(n.value))&&(o+=n.value,u+=e,r+=e*n.x,i+=e*n.y);t.x=r/u,t.y=i/u}else{n=t,n.x=n.data.x,n.y=n.data.y;do{o+=f[n.data.index]}while(n=n.next)}t.value=o}function u(t,n,e,r){if(!t.value)return!0;var a=t.x-s.x,o=t.y-s.y,u=r-n,c=a*a+o*o;if(u*u/b<c)return c<p&&(0===a&&(a=Object(i.a)(),c+=a*a),0===o&&(o=Object(i.a)(),c+=o*o),c<h&&(c=Math.sqrt(h*c)),s.vx+=a*t.value*l/c,s.vy+=o*t.value*l/c),!0;if(!(t.length||c>=p)){(t.data!==s||t.next)&&(0===a&&(a=Object(i.a)(),c+=a*a),0===o&&(o=Object(i.a)(),c+=o*o),c<h&&(c=Math.sqrt(h*c)));do{t.data!==s&&(u=f[t.data.index]*l/c,s.vx+=a*u,s.vy+=o*u)}while(t=t.next)}}var c,s,l,f,d=Object(r.a)(-30),h=1,p=1/0,b=.81;return t.initialize=function(t){c=t,n()},t.strength=function(e){return arguments.length?(d="function"==typeof e?e:Object(r.a)(+e),n(),t):d},t.distanceMin=function(n){return arguments.length?(h=n*n,t):Math.sqrt(h)},t.distanceMax=function(n){return arguments.length?(p=n*n,t):Math.sqrt(p)},t.theta=function(n){return arguments.length?(b=n*n,t):Math.sqrt(b)},t}},function(t,n,e){"use strict";var r=e(21);n.a=function(t,n,e){function i(t){for(var r=0,i=o.length;r<i;++r){var a=o[r],s=a.x-n||1e-6,l=a.y-e||1e-6,f=Math.sqrt(s*s+l*l),d=(c[r]-f)*u[r]*t/f;a.vx+=s*d,a.vy+=l*d}}function a(){if(o){var n,e=o.length;for(u=new Array(e),c=new Array(e),n=0;n<e;++n)c[n]=+t(o[n],n,o),u[n]=isNaN(c[n])?0:+s(o[n],n,o)}}var o,u,c,s=Object(r.a)(.1);return"function"!=typeof t&&(t=Object(r.a)(+t)),null==n&&(n=0),null==e&&(e=0),i.initialize=function(t){o=t,a()},i.strength=function(t){return arguments.length?(s="function"==typeof t?t:Object(r.a)(+t),a(),i):s},i.radius=function(n){return arguments.length?(t="function"==typeof n?n:Object(r.a)(+n),a(),i):t},i.x=function(t){return arguments.length?(n=+t,i):n},i.y=function(t){return arguments.length?(e=+t,i):e},i}},function(t,n,e){"use strict";var r=e(21);n.a=function(t){function n(t){for(var n,e=0,r=i.length;e<r;++e)n=i[e],n.vx+=(o[e]-n.x)*a[e]*t}function e(){if(i){var n,e=i.length;for(a=new Array(e),o=new Array(e),n=0;n<e;++n)a[n]=isNaN(o[n]=+t(i[n],n,i))?0:+u(i[n],n,i)}}var i,a,o,u=Object(r.a)(.1);return"function"!=typeof t&&(t=Object(r.a)(null==t?0:+t)),n.initialize=function(t){i=t,e()},n.strength=function(t){return arguments.length?(u="function"==typeof t?t:Object(r.a)(+t),e(),n):u},n.x=function(i){return arguments.length?(t="function"==typeof i?i:Object(r.a)(+i),e(),n):t},n}},function(t,n,e){"use strict";var r=e(21);n.a=function(t){function n(t){for(var n,e=0,r=i.length;e<r;++e)n=i[e],n.vy+=(o[e]-n.y)*a[e]*t}function e(){if(i){var n,e=i.length;for(a=new Array(e),o=new Array(e),n=0;n<e;++n)a[n]=isNaN(o[n]=+t(i[n],n,i))?0:+u(i[n],n,i)}}var i,a,o,u=Object(r.a)(.1);return"function"!=typeof t&&(t=Object(r.a)(null==t?0:+t)),n.initialize=function(t){i=t,e()},n.strength=function(t){return arguments.length?(u="function"==typeof t?t:Object(r.a)(+t),e(),n):u},n.y=function(i){return arguments.length?(t="function"==typeof i?i:Object(r.a)(+i),e(),n):t},n}},function(t,n,e){"use strict";function r(t){return i=Object(u.a)(t),a=i.format,o=i.formatPrefix,i}e.d(n,"b",function(){return a}),e.d(n,"c",function(){return o}),n.a=r;var i,a,o,u=e(146);r({decimal:".",thousands:",",grouping:[3],currency:["$",""]})},function(t,n,e){"use strict";n.a=function(t,n){return function(e,r){for(var i=e.length,a=[],o=0,u=t[0],c=0;i>0&&u>0&&(c+u+1>r&&(u=Math.max(1,r-c)),a.push(e.substring(i-=u,i+u)),!((c+=u+1)>r));)u=t[o=(o+1)%t.length];return a.reverse().join(n)}}},function(t,n,e){"use strict";n.a=function(t){return function(n){return n.replace(/[0-9]/g,function(n){return t[+n]})}}},function(t,n,e){"use strict";n.a=function(t,n){t=t.toPrecision(n);t:for(var e,r=t.length,i=1,a=-1;i<r;++i)switch(t[i]){case".":a=e=i;break;case"0":0===a&&(a=i),e=i;break;case"e":break t;default:a>0&&(a=0)}return a>0?t.slice(0,a)+t.slice(e+1):t}},function(t,n,e){"use strict";var r=e(83);n.a=function(t,n){var e=Object(r.a)(t,n);if(!e)return t+"";var i=e[0],a=e[1];return a<0?"0."+new Array(-a).join("0")+i:i.length>a+1?i.slice(0,a+1)+"."+i.slice(a+1):i+new Array(a-i.length+2).join("0")}},function(t,n,e){"use strict";n.a=function(t){return t}},function(t,n,e){"use strict";var r=e(44);n.a=function(t){return Math.max(0,-Object(r.a)(Math.abs(t)))}},function(t,n,e){"use strict";var r=e(44);n.a=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(r.a)(n)/3)))-Object(r.a)(Math.abs(t)))}},function(t,n,e){"use strict";var r=e(44);n.a=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,Object(r.a)(n)-Object(r.a)(t))+1}},function(t,n,e){"use strict";var r=e(150);e.d(n,"c",function(){return r.c});var i=e(374);e.d(n,"h",function(){return i.a});var a=e(375);e.d(n,"i",function(){return a.a});var o=e(151);e.d(n,"j",function(){return o.b});var u=e(153);e.d(n,"k",function(){return u.a});var c=e(159);e.d(n,"l",function(){return c.a});var s=e(377);e.d(n,"m",function(){return s.a});var l=e(46);e.d(n,"n",function(){return l.a});var f=e(379);e.d(n,"u",function(){return f.a});var d=e(160);e.d(n,"v",function(){return d.a});var h=e(380);e.d(n,"A",function(){return h.a}),e.d(n,"B",function(){return h.b});var p=e(381);e.d(n,"D",function(){return p.a});var b=e(161);e.d(n,"E",function(){return b.a});var v=e(382);e.d(n,"L",function(){return v.a});var y=e(163);e.d(n,"a",function(){return y.a});var g=e(390);e.d(n,"b",function(){return g.a});var _=e(391);e.d(n,"d",function(){return _.b}),e.d(n,"e",function(){return _.a});var x=e(392);e.d(n,"f",function(){return x.b}),e.d(n,"g",function(){return x.a});var m=e(393);e.d(n,"o",function(){return m.b}),e.d(n,"p",function(){return m.a});var w=e(85);e.d(n,"q",function(){return w.b}),e.d(n,"r",function(){return w.a});var j=e(394);e.d(n,"s",function(){return j.b}),e.d(n,"t",function(){return j.a});var O=e(164);e.d(n,"w",function(){return O.a}),e.d(n,"x",function(){return O.b});var k=e(395);e.d(n,"y",function(){return k.a}),e.d(n,"z",function(){return k.b});var M=e(396);e.d(n,"C",function(){return M.a});var P=e(10);e.d(n,"M",function(){return P.a}),e.d(n,"N",function(){return P.b});var A=e(88);e.d(n,"F",function(){return A.a}),e.d(n,"G",function(){return A.c});var T=e(397);e.d(n,"H",function(){return T.a}),e.d(n,"I",function(){return T.b});var N=e(398);e.d(n,"J",function(){return N.a}),e.d(n,"K",function(){return N.b});var E=e(399);e.d(n,"P",function(){return E.a}),e.d(n,"Q",function(){return E.b});var S=e(400);e.d(n,"T",function(){return S.a}),e.d(n,"U",function(){return S.b});var C=e(45);e.d(n,"O",function(){return C.a});var F=e(15);e.d(n,"R",function(){return F.a});var z=e(47);e.d(n,"S",function(){return z.a})},function(t,n,e){"use strict";function r(t,n){m.push(w=[h=t,b=t]),n<p&&(p=n),n>v&&(v=n)}function i(t,n){var e=Object(k.a)([t*M.r,n*M.r]);if(x){var r=Object(k.c)(x,e),i=[r[1],-r[0],0],a=Object(k.c)(i,r);Object(k.e)(a),a=Object(k.g)(a);var o,u=t-y,c=u>0?1:-1,s=a[0]*M.h*c,f=Object(M.a)(u)>180;f^(c*y<s&&s<c*t)?(o=a[1]*M.h)>v&&(v=o):(s=(s+360)%360-180,f^(c*y<s&&s<c*t)?(o=-a[1]*M.h)<p&&(p=o):(n<p&&(p=n),n>v&&(v=n))),f?t<y?l(h,t)>l(h,b)&&(b=t):l(t,b)>l(h,b)&&(h=t):b>=h?(t<h&&(h=t),t>b&&(b=t)):t>y?l(h,t)>l(h,b)&&(b=t):l(t,b)>l(h,b)&&(h=t)}else m.push(w=[h=t,b=t]);n<p&&(p=n),n>v&&(v=n),x=e,y=t}function a(){T.point=i}function o(){w[0]=h,w[1]=b,T.point=r,x=null}function u(t,n){if(x){var e=t-y;A.add(Object(M.a)(e)>180?e+(e>0?360:-360):e)}else g=t,_=n;O.b.point(t,n),i(t,n)}function c(){O.b.lineStart()}function s(){u(g,_),O.b.lineEnd(),Object(M.a)(A)>M.i&&(h=-(b=180)),w[0]=h,w[1]=b,x=null}function l(t,n){return(n-=t)<0?n+360:n}function f(t,n){return t[0]-n[0]}function d(t,n){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var h,p,b,v,y,g,_,x,m,w,j=e(22),O=e(150),k=e(27),M=e(0),P=e(15),A=Object(j.a)(),T={point:r,lineStart:a,lineEnd:o,polygonStart:function(){T.point=u,T.lineStart=c,T.lineEnd=s,A.reset(),O.b.polygonStart()},polygonEnd:function(){O.b.polygonEnd(),T.point=r,T.lineStart=a,T.lineEnd=o,O.a<0?(h=-(b=180),p=-(v=90)):A>M.i?v=90:A<-M.i&&(p=-90),w[0]=h,w[1]=b}};n.a=function(t){var n,e,r,i,a,o,u;if(v=b=-(h=p=1/0),m=[],Object(P.a)(t,T),e=m.length){for(m.sort(f),n=1,r=m[0],a=[r];n<e;++n)i=m[n],d(r,i[0])||d(r,i[1])?(l(r[0],i[1])>l(r[0],r[1])&&(r[1]=i[1]),l(i[0],r[1])>l(r[0],r[1])&&(r[0]=i[0])):a.push(r=i);for(o=-1/0,e=a.length-1,n=0,r=a[e];n<=e;r=i,++n)i=a[n],(u=l(r[1],i[0]))>o&&(o=u,h=i[0],b=r[1])}return m=w=null,h===1/0||p===1/0?[[NaN,NaN],[NaN,NaN]]:[[h,p],[b,v]]}},function(t,n,e){"use strict";function r(t,n){t*=T.r,n*=T.r;var e=Object(T.g)(n);i(e*Object(T.g)(t),e*Object(T.t)(t),Object(T.t)(n))}function i(t,n,e){++h,b+=(t-b)/h,v+=(n-v)/h,y+=(e-y)/h}function a(){S.point=o}function o(t,n){t*=T.r,n*=T.r;var e=Object(T.g)(n);M=e*Object(T.g)(t),P=e*Object(T.t)(t),A=Object(T.t)(n),S.point=u,i(M,P,A)}function u(t,n){t*=T.r,n*=T.r;var e=Object(T.g)(n),r=e*Object(T.g)(t),a=e*Object(T.t)(t),o=Object(T.t)(n),u=Object(T.e)(Object(T.u)((u=P*o-A*a)*u+(u=A*r-M*o)*u+(u=M*a-P*r)*u),M*r+P*a+A*o);p+=u,g+=u*(M+(M=r)),_+=u*(P+(P=a)),x+=u*(A+(A=o)),i(M,P,A)}function c(){S.point=r}function s(){S.point=f}function l(){d(O,k),S.point=r}function f(t,n){O=t,k=n,t*=T.r,n*=T.r,S.point=d;var e=Object(T.g)(n);M=e*Object(T.g)(t),P=e*Object(T.t)(t),A=Object(T.t)(n),i(M,P,A)}function d(t,n){t*=T.r,n*=T.r;var e=Object(T.g)(n),r=e*Object(T.g)(t),a=e*Object(T.t)(t),o=Object(T.t)(n),u=P*o-A*a,c=A*r-M*o,s=M*a-P*r,l=Object(T.u)(u*u+c*c+s*s),f=Object(T.c)(l),d=l&&-f/l;m+=d*u,w+=d*c,j+=d*s,p+=f,g+=f*(M+(M=r)),_+=f*(P+(P=a)),x+=f*(A+(A=o)),i(M,P,A)}var h,p,b,v,y,g,_,x,m,w,j,O,k,M,P,A,T=e(0),N=e(13),E=e(15),S={sphere:N.a,point:r,lineStart:a,lineEnd:c,polygonStart:function(){S.lineStart=s,S.lineEnd=l},polygonEnd:function(){S.lineStart=a,S.lineEnd=c}};n.a=function(t){h=p=b=v=y=g=_=x=m=w=j=0,Object(E.a)(t,S);var n=m,e=w,r=j,i=n*n+e*e+r*r;return i<T.j&&(n=g,e=_,r=x,p<T.i&&(n=b,e=v,r=y),(i=n*n+e*e+r*r)<T.j)?[NaN,NaN]:[Object(T.e)(e,n)*T.h,Object(T.c)(r/Object(T.u)(i))*T.h]}},function(t,n,e){"use strict";n.a=function(t){return function(){return t}}},function(t,n,e){"use strict";var r=e(46);n.a=function(){var t,n,e,i=0,a=0,o=960,u=500;return e={stream:function(e){return t&&n===e?t:t=Object(r.a)(i,a,o,u)(n=e)},extent:function(r){return arguments.length?(i=+r[0][0],a=+r[0][1],o=+r[1][0],u=+r[1][1],t=n=null,e):[[i,a],[o,u]]}}}},function(t,n,e){"use strict";n.a=function(t,n,e,r,i,a){var o,u=t[0],c=t[1],s=n[0],l=n[1],f=0,d=1,h=s-u,p=l-c;if(o=e-u,h||!(o>0)){if(o/=h,h<0){if(o<f)return;o<d&&(d=o)}else if(h>0){if(o>d)return;o>f&&(f=o)}if(o=i-u,h||!(o<0)){if(o/=h,h<0){if(o>d)return;o>f&&(f=o)}else if(h>0){if(o<f)return;o<d&&(d=o)}if(o=r-c,p||!(o>0)){if(o/=p,p<0){if(o<f)return;o<d&&(d=o)}else if(p>0){if(o>d)return;o>f&&(f=o)}if(o=a-c,p||!(o<0)){if(o/=p,p<0){if(o>d)return;o>f&&(f=o)}else if(p>0){if(o<f)return;o<d&&(d=o)}return f>0&&(t[0]=u+f*h,t[1]=c+f*p),d<1&&(n[0]=u+d*h,n[1]=c+d*p),!0}}}}}},function(t,n,e){"use strict";function r(t,n){return!(!t||!h.hasOwnProperty(t.type))&&h[t.type](t,n)}function i(t,n){return 0===Object(l.a)(t,n)}function a(t,n){var e=Object(l.a)(t[0],t[1]);return Object(l.a)(t[0],n)+Object(l.a)(n,t[1])<=e+f.i}function o(t,n){return!!Object(s.a)(t.map(u),c(n))}function u(t){return t=t.map(c),t.pop(),t}function c(t){return[t[0]*f.r,t[1]*f.r]}var s=e(158),l=e(160),f=e(0),d={Feature:function(t,n){return r(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,i=-1,a=e.length;++i<a;)if(r(e[i].geometry,n))return!0;return!1}},h={Sphere:function(){return!0},Point:function(t,n){return i(t.coordinates,n)},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,a=e.length;++r<a;)if(i(e[r],n))return!0;return!1},LineString:function(t,n){return a(t.coordinates,n)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(a(e[r],n))return!0;return!1},Polygon:function(t,n){return o(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(o(e[r],n))return!0;return!1},GeometryCollection:function(t,n){for(var e=t.geometries,i=-1,a=e.length;++i<a;)if(r(e[i],n))return!0;return!1}};n.a=function(t,n){return(t&&d.hasOwnProperty(t.type)?d[t.type]:r)(t,n)}},function(t,n,e){"use strict";function r(t,n,e){var r=Object(u.s)(t,n-c.i,e).concat(n);return function(t){return r.map(function(n){return[t,n]})}}function i(t,n,e){var r=Object(u.s)(t,n-c.i,e).concat(n);return function(t){return r.map(function(n){return[n,t]})}}function a(){function t(){return{type:"MultiLineString",coordinates:n()}}function n(){return Object(u.s)(Object(c.f)(s/x)*x,o,x).map(v).concat(Object(u.s)(Object(c.f)(h/m)*m,d,m).map(y)).concat(Object(u.s)(Object(c.f)(a/g)*g,e,g).filter(function(t){return Object(c.a)(t%x)>c.i}).map(p)).concat(Object(u.s)(Object(c.f)(f/_)*_,l,_).filter(function(t){return Object(c.a)(t%m)>c.i}).map(b))}var e,a,o,s,l,f,d,h,p,b,v,y,g=10,_=g,x=90,m=360,w=2.5;return t.lines=function(){return n().map(function(t){return{type:"LineString",coordinates:t}})},t.outline=function(){return{type:"Polygon",coordinates:[v(s).concat(y(d).slice(1),v(o).reverse().slice(1),y(h).reverse().slice(1))]}},t.extent=function(n){return arguments.length?t.extentMajor(n).extentMinor(n):t.extentMinor()},t.extentMajor=function(n){return arguments.length?(s=+n[0][0],o=+n[1][0],h=+n[0][1],d=+n[1][1],s>o&&(n=s,s=o,o=n),h>d&&(n=h,h=d,d=n),t.precision(w)):[[s,h],[o,d]]},t.extentMinor=function(n){return arguments.length?(a=+n[0][0],e=+n[1][0],f=+n[0][1],l=+n[1][1],a>e&&(n=a,a=e,e=n),f>l&&(n=f,f=l,l=n),t.precision(w)):[[a,f],[e,l]]},t.step=function(n){return arguments.length?t.stepMajor(n).stepMinor(n):t.stepMinor()},t.stepMajor=function(n){return arguments.length?(x=+n[0],m=+n[1],t):[x,m]},t.stepMinor=function(n){return arguments.length?(g=+n[0],_=+n[1],t):[g,_]},t.precision=function(n){return arguments.length?(w=+n,p=r(f,l,90),b=i(a,e,w),v=r(h,d,90),y=i(s,o,w),t):w},t.extentMajor([[-180,-90+c.i],[180,90-c.i]]).extentMinor([[-180,-80-c.i],[180,80+c.i]])}function o(){return a()()}n.a=a,n.b=o;var u=e(2),c=e(0)},function(t,n,e){"use strict";var r=e(0);n.a=function(t,n){var e=t[0]*r.r,i=t[1]*r.r,a=n[0]*r.r,o=n[1]*r.r,u=Object(r.g)(i),c=Object(r.t)(i),s=Object(r.g)(o),l=Object(r.t)(o),f=u*Object(r.g)(e),d=u*Object(r.t)(e),h=s*Object(r.g)(a),p=s*Object(r.t)(a),b=2*Object(r.c)(Object(r.u)(Object(r.m)(o-i)+u*s*Object(r.m)(a-e))),v=Object(r.t)(b),y=b?function(t){var n=Object(r.t)(t*=b)/v,e=Object(r.t)(b-t)/v,i=e*f+n*h,a=e*d+n*p,o=e*c+n*l;return[Object(r.e)(a,i)*r.h,Object(r.e)(o,Object(r.u)(i*i+a*a))*r.h]}:function(){return[e*r.h,i*r.h]};return y.distance=b,y}},function(t,n,e){"use strict";var r=e(84),i=e(15),a=e(383),o=e(162),u=e(384),c=e(385),s=e(386),l=e(387);n.a=function(t,n){function e(t){return t&&("function"==typeof h&&d.pointRadius(+h.apply(this,arguments)),Object(i.a)(t,f(d))),d.result()}var f,d,h=4.5;return e.area=function(t){return Object(i.a)(t,f(a.a)),a.a.result()},e.measure=function(t){return Object(i.a)(t,f(s.a)),s.a.result()},e.bounds=function(t){return Object(i.a)(t,f(o.a)),o.a.result()},e.centroid=function(t){return Object(i.a)(t,f(u.a)),u.a.result()},e.projection=function(n){return arguments.length?(f=null==n?(t=null,r.a):(t=n).stream,e):t},e.context=function(t){return arguments.length?(d=null==t?(n=null,new l.a):new c.a(n=t),"function"!=typeof h&&d.pointRadius(h),e):n},e.pointRadius=function(t){return arguments.length?(h="function"==typeof t?t:(d.pointRadius(+t),+t),e):h},e.projection(t).context(n)}},function(t,n,e){"use strict";function r(){v.point=i}function i(t,n){v.point=a,u=s=t,c=l=n}function a(t,n){b.add(l*t-s*n),s=t,l=n}function o(){a(u,c)}var u,c,s,l,f=e(22),d=e(0),h=e(13),p=Object(f.a)(),b=Object(f.a)(),v={point:h.a,lineStart:h.a,lineEnd:h.a,polygonStart:function(){v.lineStart=r,v.lineEnd=o},polygonEnd:function(){v.lineStart=v.lineEnd=v.point=h.a,p.add(Object(d.a)(b)),b.reset()},result:function(){var t=p/2;return p.reset(),t}};n.a=v},function(t,n,e){"use strict";function r(t,n){y+=t,g+=n,++_}function i(){M.point=a}function a(t,n){M.point=o,r(p=t,b=n)}function o(t,n){var e=t-p,i=n-b,a=Object(v.u)(e*e+i*i);x+=a*(p+t)/2,m+=a*(b+n)/2,w+=a,r(p=t,b=n)}function u(){M.point=r}function c(){M.point=l}function s(){f(d,h)}function l(t,n){M.point=f,r(d=p=t,h=b=n)}function f(t,n){var e=t-p,i=n-b,a=Object(v.u)(e*e+i*i);x+=a*(p+t)/2,m+=a*(b+n)/2,w+=a,a=b*t-p*n,j+=a*(p+t),O+=a*(b+n),k+=3*a,r(p=t,b=n)}var d,h,p,b,v=e(0),y=0,g=0,_=0,x=0,m=0,w=0,j=0,O=0,k=0,M={point:r,lineStart:i,lineEnd:u,polygonStart:function(){M.lineStart=c,M.lineEnd=s},polygonEnd:function(){M.point=r,M.lineStart=i,M.lineEnd=u},result:function(){var t=k?[j/k,O/k]:w?[x/w,m/w]:_?[y/_,g/_]:[NaN,NaN];return y=g=_=x=m=w=j=O=k=0,t}};n.a=M},function(t,n,e){"use strict";function r(t){this._context=t}n.a=r;var i=e(0),a=e(13);r.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._context.moveTo(t,n),this._point=1;break;case 1:this._context.lineTo(t,n);break;default:this._context.moveTo(t+this._radius,n),this._context.arc(t,n,this._radius,0,i.w)}},result:a.a}},function(t,n,e){"use strict";function r(t,n){p.point=i,o=c=t,u=s=n}function i(t,n){c-=t,s-=n,h.add(Object(f.u)(c*c+s*s)),c=t,s=n}var a,o,u,c,s,l=e(22),f=e(0),d=e(13),h=Object(l.a)(),p={point:d.a,lineStart:function(){p.point=r},lineEnd:function(){a&&i(o,u),p.point=d.a},polygonStart:function(){a=!0},polygonEnd:function(){a=null},result:function(){var t=+h;return h.reset(),t}};n.a=p},function(t,n,e){"use strict";function r(){this._string=[]}function i(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}n.a=r,r.prototype={_radius:4.5,_circle:i(4.5),pointRadius:function(t){return(t=+t)!==this._radius&&(this._radius=t,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._string.push("M",t,",",n),this._point=1;break;case 1:this._string.push("L",t,",",n);break;default:null==this._circle&&(this._circle=i(this._radius)),this._string.push("M",t,",",n,this._circle)}},result:function(){if(this._string.length){var t=this._string.join("");return this._string=[],t}return null}}},function(t,n,e){"use strict";function r(t){return Object(u.b)({point:function(n,e){n=t(n,e),this.stream.point(n[0],n[1])}})}function i(t,n){function e(r,i,a,u,c,l,f,d,h,p,b,v,y,g){var _=f-r,x=d-i,m=_*_+x*x;if(m>4*n&&y--){var w=u+p,j=c+b,O=l+v,k=Object(o.u)(w*w+j*j+O*O),M=Object(o.c)(O/=k),P=Object(o.a)(Object(o.a)(O)-1)<o.i||Object(o.a)(a-h)<o.i?(a+h)/2:Object(o.e)(j,w),A=t(P,M),T=A[0],N=A[1],E=T-r,S=N-i,C=x*E-_*S;(C*C/m>n||Object(o.a)((_*E+x*S)/m-.5)>.3||u*p+c*b+l*v<s)&&(e(r,i,a,u,c,l,T,N,P,w/=k,j/=k,O,y,g),g.point(T,N),e(T,N,P,w,j,O,f,d,h,p,b,v,y,g))}}return function(n){function r(e,r){e=t(e,r),n.point(e[0],e[1])}function i(){_=NaN,O.point=o,n.lineStart()}function o(r,i){var o=Object(a.a)([r,i]),u=t(r,i);e(_,x,g,m,w,j,_=u[0],x=u[1],g=r,m=o[0],w=o[1],j=o[2],c,n),n.point(_,x)}function u(){O.point=r,n.lineEnd()}function s(){i(),O.point=l,O.lineEnd=f}function l(t,n){o(d=t,n),h=_,p=x,b=m,v=w,y=j,O.point=o}function f(){e(_,x,g,m,w,j,h,p,d,b,v,y,c,n),O.lineEnd=u,u()}var d,h,p,b,v,y,g,_,x,m,w,j,O={point:r,lineStart:i,lineEnd:u,polygonStart:function(){n.polygonStart(),O.lineStart=s},polygonEnd:function(){n.polygonEnd(),O.lineStart=i}};return O}}var a=e(27),o=e(0),u=e(47),c=16,s=Object(o.g)(30*o.r);n.a=function(t,n){return+n?i(t,n):r(t)}},function(t,n,e){"use strict";function r(t){function n(t,n){return[t*e,Object(i.t)(n)/e]}var e=Object(i.g)(t);return n.invert=function(t,n){return[t/e,Object(i.c)(n*e)]},n}n.a=r;var i=e(0)},function(t,n,e){"use strict";function r(t){var n=t.length;return{point:function(e,r){for(var i=-1;++i<n;)t[i].point(e,r)},sphere:function(){for(var e=-1;++e<n;)t[e].sphere()},lineStart:function(){for(var e=-1;++e<n;)t[e].lineStart()},lineEnd:function(){for(var e=-1;++e<n;)t[e].lineEnd()},polygonStart:function(){for(var e=-1;++e<n;)t[e].polygonStart()},polygonEnd:function(){for(var e=-1;++e<n;)t[e].polygonEnd()}}}var i=e(0),a=e(163),o=e(85),u=e(87);n.a=function(){function t(t){var n=t[0],e=t[1];return d=null,s.point(n,e),d||(l.point(n,e),d)||(f.point(n,e),d)}function n(){return e=c=null,t}var e,c,s,l,f,d,h=Object(a.a)(),p=Object(o.b)().rotate([154,0]).center([-2,58.5]).parallels([55,65]),b=Object(o.b)().rotate([157,0]).center([-3,19.9]).parallels([8,18]),v={point:function(t,n){d=[t,n]}};return t.invert=function(t){var n=h.scale(),e=h.translate(),r=(t[0]-e[0])/n,i=(t[1]-e[1])/n;return(i>=.12&&i<.234&&r>=-.425&&r<-.214?p:i>=.166&&i<.234&&r>=-.214&&r<-.115?b:h).invert(t)},t.stream=function(t){return e&&c===t?e:e=r([h.stream(c=t),p.stream(t),b.stream(t)])},t.precision=function(t){return arguments.length?(h.precision(t),p.precision(t),b.precision(t),n()):h.precision()},t.scale=function(n){return arguments.length?(h.scale(n),p.scale(.35*n),b.scale(n),t.translate(h.translate())):h.scale()},t.translate=function(t){if(!arguments.length)return h.translate();var e=h.scale(),r=+t[0],a=+t[1];return s=h.translate(t).clipExtent([[r-.455*e,a-.238*e],[r+.455*e,a+.238*e]]).stream(v),l=p.translate([r-.307*e,a+.201*e]).clipExtent([[r-.425*e+i.i,a+.12*e+i.i],[r-.214*e-i.i,a+.234*e-i.i]]).stream(v),f=b.translate([r-.205*e,a+.212*e]).clipExtent([[r-.214*e+i.i,a+.166*e+i.i],[r-.115*e-i.i,a+.234*e-i.i]]).stream(v),n()},t.fitExtent=function(n,e){return Object(u.a)(t,n,e)},t.fitSize=function(n,e){return Object(u.c)(t,n,e)},t.fitWidth=function(n,e){return Object(u.d)(t,n,e)},t.fitHeight=function(n,e){return Object(u.b)(t,n,e)},t.scale(1070)}},function(t,n,e){"use strict";e.d(n,"a",function(){return o});var r=e(0),i=e(28),a=e(10),o=Object(i.b)(function(t){return Object(r.u)(2/(1+t))});o.invert=Object(i.a)(function(t){return 2*Object(r.c)(t/2)}),n.b=function(){return Object(a.a)(o).scale(124.75).clipAngle(179.999)}},function(t,n,e){"use strict";e.d(n,"a",function(){return o});var r=e(0),i=e(28),a=e(10),o=Object(i.b)(function(t){return(t=Object(r.b)(t))&&t/Object(r.t)(t)});o.invert=Object(i.a)(function(t){return t}),n.b=function(){return Object(a.a)(o).scale(79.4188).clipAngle(179.999)}},function(t,n,e){"use strict";function r(t){return Object(a.v)((a.l+t)/2)}function i(t,n){function e(t,n){c>0?n<-a.l+a.i&&(n=-a.l+a.i):n>a.l-a.i&&(n=a.l-a.i);var e=c/Object(a.p)(r(n),o);return[e*Object(a.t)(o*t),c-e*Object(a.g)(o*t)]}var i=Object(a.g)(t),o=t===n?Object(a.t)(t):Object(a.n)(i/Object(a.g)(n))/Object(a.n)(r(n)/r(t)),c=i*Object(a.p)(r(t),o)/o;return o?(e.invert=function(t,n){var e=c-n,r=Object(a.s)(o)*Object(a.u)(t*t+e*e);return[Object(a.e)(t,Object(a.a)(e))/o*Object(a.s)(e),2*Object(a.d)(Object(a.p)(c/r,1/o))-a.l]},e):u.c}n.a=i;var a=e(0),o=e(86),u=e(88);n.b=function(){return Object(o.a)(i).scale(109.5).parallels([30,30])}},function(t,n,e){"use strict";function r(t,n){function e(t,n){var e=u-n,r=a*t;return[e*Object(i.t)(r),u-e*Object(i.g)(r)]}var r=Object(i.g)(t),a=t===n?Object(i.t)(t):(r-Object(i.g)(n))/(n-t),u=r/a+t;return Object(i.a)(a)<i.i?o.b:(e.invert=function(t,n){var e=u-n;return[Object(i.e)(t,Object(i.a)(e))/a*Object(i.s)(e),u-Object(i.s)(a)*Object(i.u)(t*t+e*e)]},e)}n.a=r;var i=e(0),a=e(86),o=e(164);n.b=function(){return Object(a.a)(r).scale(131.154).center([0,13.9389])}},function(t,n,e){"use strict";function r(t,n){var e=Object(i.g)(n),r=Object(i.g)(t)*e;return[e*Object(i.t)(t)/r,Object(i.t)(n)/r]}n.b=r;var i=e(0),a=e(28),o=e(10);r.invert=Object(a.a)(i.d),n.a=function(){return Object(o.a)(r).scale(144.049).clipAngle(60)}},function(t,n,e){"use strict";function r(t,n,e,r){return 1===t&&1===n&&0===e&&0===r?a.a:Object(o.b)({point:function(i,a){this.stream.point(i*t+e,a*n+r)}})}var i=e(46),a=e(84),o=e(47),u=e(87);n.a=function(){function t(){return c=s=null,l}var n,e,o,c,s,l,f=1,d=0,h=0,p=1,b=1,v=a.a,y=null,g=a.a;return l={stream:function(t){return c&&s===t?c:c=v(g(s=t))},postclip:function(r){return arguments.length?(g=r,y=n=e=o=null,t()):g},clipExtent:function(r){return arguments.length?(g=null==r?(y=n=e=o=null,a.a):Object(i.a)(y=+r[0][0],n=+r[0][1],e=+r[1][0],o=+r[1][1]),t()):null==y?null:[[y,n],[e,o]]},scale:function(n){return arguments.length?(v=r((f=+n)*p,f*b,d,h),t()):f},translate:function(n){return arguments.length?(v=r(f*p,f*b,d=+n[0],h=+n[1]),t()):[d,h]},reflectX:function(n){return arguments.length?(v=r(f*(p=n?-1:1),f*b,d,h),t()):p<0},reflectY:function(n){return arguments.length?(v=r(f*p,f*(b=n?-1:1),d,h),t()):b<0},fitExtent:function(t,n){return Object(u.a)(l,t,n)},fitSize:function(t,n){return Object(u.c)(l,t,n)},fitWidth:function(t,n){return Object(u.d)(l,t,n)},fitHeight:function(t,n){return Object(u.b)(l,t,n)}}}},function(t,n,e){"use strict";function r(t,n){var e=n*n,r=e*e;return[t*(.8707-.131979*e+r*(r*(.003971*e-.001529*r)-.013791)),n*(1.007226+e*(.015085+r*(.028874*e-.044475-.005916*r)))]}n.b=r;var i=e(10),a=e(0);r.invert=function(t,n){var e,r=n,i=25;do{var o=r*r,u=o*o;r-=e=(r*(1.007226+o*(.015085+u*(.028874*o-.044475-.005916*u)))-n)/(1.007226+o*(.045255+u*(.259866*o-.311325-.005916*11*u)))}while(Object(a.a)(e)>a.i&&--i>0);return[t/(.8707+(o=r*r)*(o*(o*o*o*(.003971-.001529*o)-.013791)-.131979)),r]},n.a=function(){return Object(i.a)(r).scale(175.295)}},function(t,n,e){"use strict";function r(t,n){return[Object(i.g)(n)*Object(i.t)(t),Object(i.t)(n)]}n.b=r;var i=e(0),a=e(28),o=e(10);r.invert=Object(a.a)(i.c),n.a=function(){return Object(o.a)(r).scale(249.5).clipAngle(90+i.i)}},function(t,n,e){"use strict";function r(t,n){var e=Object(i.g)(n),r=1+Object(i.g)(t)*e;return[e*Object(i.t)(t)/r,Object(i.t)(n)/r]}n.b=r;var i=e(0),a=e(28),o=e(10);r.invert=Object(a.a)(function(t){return 2*Object(i.d)(t)}),n.a=function(){return Object(o.a)(r).scale(250).clipAngle(142)}},function(t,n,e){"use strict";function r(t,n){return[Object(i.n)(Object(i.v)((i.l+n)/2)),-t]}n.b=r;var i=e(0),a=e(88);r.invert=function(t,n){return[-n,2*Object(i.d)(Object(i.k)(t))-i.l]},n.a=function(){var t=Object(a.b)(r),n=t.center,e=t.rotate;return t.center=function(t){return arguments.length?n([-t[1],t[0]]):(t=n(),[t[1],-t[0]])},t.rotate=function(t){return arguments.length?e([t[0],t[1],t.length>2?t[2]+90:90]):(t=e(),[t[0],t[1],t[2]-90])},e([0,0,90]).scale(159.155)}},function(t,n,e){"use strict";var r=e(402);e.d(n,"a",function(){return r.a});var i=e(89);e.d(n,"b",function(){return i.c});var a=e(414);e.d(n,"c",function(){return a.a});var o=e(165);e.d(n,"e",function(){return o.a});var u=e(166);e.d(n,"d",function(){return u.a});var c=e(416);e.d(n,"f",function(){return c.a});var s=e(417);e.d(n,"g",function(){return s.a});var l=e(418);e.d(n,"h",function(){return l.a});var f=e(419);e.d(n,"i",function(){return f.a});var d=e(420);e.d(n,"j",function(){return d.a});var h=e(29);e.d(n,"k",function(){return h.a});var p=e(48);e.d(n,"m",function(){return p.a});var b=e(421);e.d(n,"n",function(){return b.a});var v=e(91);e.d(n,"o",function(){return v.a});var y=e(422);e.d(n,"l",function(){return y.a})},function(t,n,e){"use strict";function r(t,n){return t.parent===n.parent?1:2}function i(t){return t.reduce(a,0)/t.length}function a(t,n){return t+n.x}function o(t){return 1+t.reduce(u,0)}function u(t,n){return Math.max(t,n.y)}function c(t){for(var n;n=t.children;)t=n[0];return t}function s(t){for(var n;n=t.children;)t=n[n.length-1];return t}n.a=function(){function t(t){var r,l=0;t.eachAfter(function(t){var e=t.children;e?(t.x=i(e),t.y=o(e)):(t.x=r?l+=n(t,r):0,t.y=0,r=t)});var f=c(t),d=s(t),h=f.x-n(f,d)/2,p=d.x+n(d,f)/2;return t.eachAfter(u?function(n){n.x=(n.x-t.x)*e,n.y=(t.y-n.y)*a}:function(n){n.x=(n.x-h)/(p-h)*e,n.y=(1-(t.y?n.y/t.y:1))*a})}var n=r,e=1,a=1,u=!1;return t.separation=function(e){return arguments.length?(n=e,t):n},t.size=function(n){return arguments.length?(u=!1,e=+n[0],a=+n[1],t):u?null:[e,a]},t.nodeSize=function(n){return arguments.length?(u=!0,e=+n[0],a=+n[1],t):u?[e,a]:null},t}},function(t,n,e){"use strict";function r(t){var n=0,e=t.children,r=e&&e.length;if(r)for(;--r>=0;)n+=e[r].value;else n=1;t.value=n}n.a=function(){return this.eachAfter(r)}},function(t,n,e){"use strict";n.a=function(t){var n,e,r,i,a=this,o=[a];do{for(n=o.reverse(),o=[];a=n.pop();)if(t(a),e=a.children)for(r=0,i=e.length;r<i;++r)o.push(e[r])}while(o.length);return this}},function(t,n,e){"use strict";n.a=function(t){for(var n,e,r=this,i=[r];r=i.pop();)if(t(r),n=r.children)for(e=n.length-1;e>=0;--e)i.push(n[e]);return this}},function(t,n,e){"use strict";n.a=function(t){for(var n,e,r,i=this,a=[i],o=[];i=a.pop();)if(o.push(i),n=i.children)for(e=0,r=n.length;e<r;++e)a.push(n[e]);for(;i=o.pop();)t(i);return this}},function(t,n,e){"use strict";n.a=function(t){return this.eachAfter(function(n){for(var e=+t(n.data)||0,r=n.children,i=r&&r.length;--i>=0;)e+=r[i].value;n.value=e})}},function(t,n,e){"use strict";n.a=function(t){return this.eachBefore(function(n){n.children&&n.children.sort(t)})}},function(t,n,e){"use strict";function r(t,n){if(t===n)return t;var e=t.ancestors(),r=n.ancestors(),i=null;for(t=e.pop(),n=r.pop();t===n;)i=t,t=e.pop(),n=r.pop();return i}n.a=function(t){for(var n=this,e=r(n,t),i=[n];n!==e;)n=n.parent,i.push(n);for(var a=i.length;t!==e;)i.splice(a,0,t),t=t.parent;return i}},function(t,n,e){"use strict";n.a=function(){for(var t=this,n=[t];t=t.parent;)n.push(t);return n}},function(t,n,e){"use strict";n.a=function(){var t=[];return this.each(function(n){t.push(n)}),t}},function(t,n,e){"use strict";n.a=function(){var t=[];return this.eachBefore(function(n){n.children||t.push(n)}),t}},function(t,n,e){"use strict";n.a=function(){var t=this,n=[];return t.each(function(e){e!==t&&n.push({source:e.parent,target:e})}),n}},function(t,n,e){"use strict";function r(t){return Math.sqrt(t.value)}function i(t){return function(n){n.children||(n.r=Math.max(0,+t(n)||0))}}function a(t,n){return function(e){if(r=e.children){var r,i,a,o=r.length,c=t(e)*n||0;if(c)for(i=0;i<o;++i)r[i].r+=c;if(a=Object(u.b)(r),c)for(i=0;i<o;++i)r[i].r-=c;e.r=a+c}}}function o(t){return function(n){var e=n.parent;n.r*=t,e&&(n.x=e.x+t*n.x,n.y=e.y+t*n.y)}}var u=e(165),c=e(90),s=e(167);n.a=function(){function t(t){return t.x=e/2,t.y=u/2,n?t.eachBefore(i(n)).eachAfter(a(l,.5)).eachBefore(o(1)):t.eachBefore(i(r)).eachAfter(a(s.a,1)).eachAfter(a(l,t.r/Math.min(e,u))).eachBefore(o(Math.min(e,u)/(2*t.r))),t}var n=null,e=1,u=1,l=s.a;return t.radius=function(e){return arguments.length?(n=Object(c.a)(e),t):n},t.size=function(n){return arguments.length?(e=+n[0],u=+n[1],t):[e,u]},t.padding=function(n){return arguments.length?(l="function"==typeof n?n:Object(s.b)(+n),t):l},t}},function(t,n,e){"use strict";function r(t){for(var n,e,r=t.length;r;)e=Math.random()*r--|0,n=t[r],t[r]=t[e],t[e]=n;return t}e.d(n,"b",function(){return i}),n.a=r;var i=Array.prototype.slice},function(t,n,e){"use strict";var r=e(168),i=e(29);n.a=function(){function t(t){var i=t.height+1;return t.x0=t.y0=o,t.x1=e,t.y1=a/i,t.eachBefore(n(a,i)),u&&t.eachBefore(r.a),t}function n(t,n){return function(e){e.children&&Object(i.a)(e,e.x0,t*(e.depth+1)/n,e.x1,t*(e.depth+2)/n);var r=e.x0,a=e.y0,u=e.x1-o,c=e.y1-o;u<r&&(r=u=(r+u)/2),c<a&&(a=c=(a+c)/2),e.x0=r,e.y0=a,e.x1=u,e.y1=c}}var e=1,a=1,o=0,u=!1;return t.round=function(n){return arguments.length?(u=!!n,t):u},t.size=function(n){return arguments.length?(e=+n[0],a=+n[1],t):[e,a]},t.padding=function(n){return arguments.length?(o=+n,t):o},t}},function(t,n,e){"use strict";function r(t){return t.id}function i(t){return t.parentId}var a=e(90),o=e(89),u="$",c={depth:-1},s={};n.a=function(){function t(t){var r,i,a,l,f,d,h,p=t.length,b=new Array(p),v={};for(i=0;i<p;++i)r=t[i],f=b[i]=new o.a(r),null!=(d=n(r,i,t))&&(d+="")&&(h=u+(f.id=d),v[h]=h in v?s:f);for(i=0;i<p;++i)if(f=b[i],null!=(d=e(t[i],i,t))&&(d+="")){if(!(l=v[u+d]))throw new Error("missing: "+d);if(l===s)throw new Error("ambiguous: "+d);l.children?l.children.push(f):l.children=[f],f.parent=l}else{if(a)throw new Error("multiple roots");a=f}if(!a)throw new Error("no root");if(a.parent=c,a.eachBefore(function(t){t.depth=t.parent.depth+1,--p}).eachBefore(o.b),a.parent=null,p>0)throw new Error("cycle");return a}var n=r,e=i;return t.id=function(e){return arguments.length?(n=Object(a.b)(e),t):n},t.parentId=function(n){return arguments.length?(e=Object(a.b)(n),t):e},t}},function(t,n,e){"use strict";function r(t,n){return t.parent===n.parent?1:2}function i(t){var n=t.children;return n?n[0]:t.t}function a(t){var n=t.children;return n?n[n.length-1]:t.t}function o(t,n,e){var r=e/(n.i-t.i);n.c-=r,n.s+=e,t.c+=r,n.z+=e,n.m+=e}function u(t){for(var n,e=0,r=0,i=t.children,a=i.length;--a>=0;)n=i[a],n.z+=e,n.m+=e,e+=n.s+(r+=n.c)}function c(t,n,e){return t.a.parent===n.parent?t.a:e}function s(t,n){this._=t,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=n}function l(t){for(var n,e,r,i,a,o=new s(t,0),u=[o];n=u.pop();)if(r=n._.children)for(n.children=new Array(a=r.length),i=a-1;i>=0;--i)u.push(e=n.children[i]=new s(r[i],i)),e.parent=n;return(o.parent=new s(null,0)).children=[o],o}var f=e(89);s.prototype=Object.create(f.a.prototype),n.a=function(){function t(t){var r=l(t);if(r.eachAfter(n),r.parent.m=-r.z,r.eachBefore(e),b)t.eachBefore(f);else{var i=t,a=t,o=t;t.eachBefore(function(t){t.x<i.x&&(i=t),t.x>a.x&&(a=t),t.depth>o.depth&&(o=t)});var u=i===a?1:d(i,a)/2,c=u-i.x,s=h/(a.x+u+c),v=p/(o.depth||1);t.eachBefore(function(t){t.x=(t.x+c)*s,t.y=t.depth*v})}return t}function n(t){var n=t.children,e=t.parent.children,r=t.i?e[t.i-1]:null;if(n){u(t);var i=(n[0].z+n[n.length-1].z)/2;r?(t.z=r.z+d(t._,r._),t.m=t.z-i):t.z=i}else r&&(t.z=r.z+d(t._,r._));t.parent.A=s(t,r,t.parent.A||e[0])}function e(t){t._.x=t.z+t.parent.m,t.m+=t.parent.m}function s(t,n,e){if(n){for(var r,u=t,s=t,l=n,f=u.parent.children[0],h=u.m,p=s.m,b=l.m,v=f.m;l=a(l),u=i(u),l&&u;)f=i(f),s=a(s),s.a=t,r=l.z+b-u.z-h+d(l._,u._),r>0&&(o(c(l,t,e),t,r),h+=r,p+=r),b+=l.m,h+=u.m,v+=f.m,p+=s.m;l&&!a(s)&&(s.t=l,s.m+=b-p),u&&!i(f)&&(f.t=u,f.m+=h-v,e=t)}return e}function f(t){t.x*=h,t.y=t.depth*p}var d=r,h=1,p=1,b=null;return t.separation=function(n){return arguments.length?(d=n,t):d},t.size=function(n){return arguments.length?(b=!1,h=+n[0],p=+n[1],t):b?null:[h,p]},t.nodeSize=function(n){return arguments.length?(b=!0,h=+n[0],p=+n[1],t):b?[h,p]:null},t}},function(t,n,e){"use strict";var r=e(168),i=e(91),a=e(90),o=e(167);n.a=function(){function t(t){return t.x0=t.y0=0,t.x1=c,t.y1=s,t.eachBefore(n),l=[0],u&&t.eachBefore(r.a),t}function n(t){var n=l[t.depth],r=t.x0+n,i=t.y0+n,a=t.x1-n,o=t.y1-n;a<r&&(r=a=(r+a)/2),o<i&&(i=o=(i+o)/2),t.x0=r,t.y0=i,t.x1=a,t.y1=o,t.children&&(n=l[t.depth+1]=f(t)/2,r+=b(t)-n,i+=d(t)-n,a-=h(t)-n,o-=p(t)-n,a<r&&(r=a=(r+a)/2),o<i&&(i=o=(i+o)/2),e(t,r,i,a,o))}var e=i.a,u=!1,c=1,s=1,l=[0],f=o.a,d=o.a,h=o.a,p=o.a,b=o.a;return t.round=function(n){return arguments.length?(u=!!n,t):u},t.size=function(n){return arguments.length?(c=+n[0],s=+n[1],t):[c,s]},t.tile=function(n){return arguments.length?(e=Object(a.b)(n),t):e},t.padding=function(n){return arguments.length?t.paddingInner(n).paddingOuter(n):t.paddingInner()},t.paddingInner=function(n){return arguments.length?(f="function"==typeof n?n:Object(o.b)(+n),t):f},t.paddingOuter=function(n){return arguments.length?t.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n):t.paddingTop()},t.paddingTop=function(n){return arguments.length?(d="function"==typeof n?n:Object(o.b)(+n),t):d},t.paddingRight=function(n){return arguments.length?(h="function"==typeof n?n:Object(o.b)(+n),t):h},t.paddingBottom=function(n){return arguments.length?(p="function"==typeof n?n:Object(o.b)(+n),t):p},t.paddingLeft=function(n){return arguments.length?(b="function"==typeof n?n:Object(o.b)(+n),t):b},t}},function(t,n,e){"use strict";n.a=function(t,n,e,r,i){function a(t,n,e,r,i,o,u){if(t>=n-1){var s=c[t];return s.x0=r,s.y0=i,s.x1=o,s.y1=u,void 0}for(var f=l[t],d=e/2+f,h=t+1,p=n-1;h<p;){var b=h+p>>>1;l[b]<d?h=b+1:p=b}d-l[h-1]<l[h]-d&&t+1<h&&--h;var v=l[h]-f,y=e-v;if(o-r>u-i){var g=(r*y+o*v)/e;a(t,h,v,r,i,g,u),a(h,n,y,g,i,o,u)}else{var _=(i*y+u*v)/e;a(t,h,v,r,i,o,_),a(h,n,y,r,_,o,u)}}var o,u,c=t.children,s=c.length,l=new Array(s+1);for(l[0]=u=o=0;o<s;++o)l[o+1]=u+=c[o].value;a(0,s,t.value,n,e,r,i)}},function(t,n,e){"use strict";var r=e(29),i=e(48);n.a=function(t,n,e,a,o){(1&t.depth?i.a:r.a)(t,n,e,a,o)}},function(t,n,e){"use strict";var r=e(29),i=e(48),a=e(91);n.a=function t(n){function e(t,e,o,u,c){if((s=t._squarify)&&s.ratio===n)for(var s,l,f,d,h,p=-1,b=s.length,v=t.value;++p<b;){for(l=s[p],f=l.children,d=l.value=0,h=f.length;d<h;++d)l.value+=f[d].value;l.dice?Object(r.a)(l,e,o,u,o+=(c-o)*l.value/v):Object(i.a)(l,e,o,e+=(u-e)*l.value/v,c),v-=l.value}else t._squarify=s=Object(a.c)(n,t,e,o,u,c),s.ratio=n}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(a.b)},function(t,n,e){"use strict";var r=e(424);e.d(n,"a",function(){return r.a});var i=e(425);e.d(n,"b",function(){return i.a});var a=e(426);e.d(n,"d",function(){return a.a});var o=e(428);e.d(n,"c",function(){return o.a});var u=e(429);e.d(n,"e",function(){return u.a})},function(t,n,e){"use strict";n.a=function(t){for(var n,e=-1,r=t.length,i=t[r-1],a=0;++e<r;)n=i,i=t[e],a+=n[1]*i[0]-n[0]*i[1];return a/2}},function(t,n,e){"use strict";n.a=function(t){for(var n,e,r=-1,i=t.length,a=0,o=0,u=t[i-1],c=0;++r<i;)n=u,u=t[r],c+=e=n[0]*u[1]-u[0]*n[1],a+=(n[0]+u[0])*e,o+=(n[1]+u[1])*e;return c*=3,[a/c,o/c]}},function(t,n,e){"use strict";function r(t,n){return t[0]-n[0]||t[1]-n[1]}function i(t){for(var n=t.length,e=[0,1],r=2,i=2;i<n;++i){for(;r>1&&Object(a.a)(t[e[r-2]],t[e[r-1]],t[i])<=0;)--r;e[r++]=i}return e.slice(0,r)}var a=e(427);n.a=function(t){if((e=t.length)<3)return null;var n,e,a=new Array(e),o=new Array(e);for(n=0;n<e;++n)a[n]=[+t[n][0],+t[n][1],n];for(a.sort(r),n=0;n<e;++n)o[n]=[a[n][0],-a[n][1]];var u=i(a),c=i(o),s=c[0]===u[0],l=c[c.length-1]===u[u.length-1],f=[];for(n=u.length-1;n>=0;--n)f.push(t[a[u[n]][2]]);for(n=+s;n<c.length-l;++n)f.push(t[a[c[n]][2]]);return f}},function(t,n,e){"use strict";n.a=function(t,n,e){return(n[0]-t[0])*(e[1]-t[1])-(n[1]-t[1])*(e[0]-t[0])}},function(t,n,e){"use strict";n.a=function(t,n){for(var e,r,i=t.length,a=t[i-1],o=n[0],u=n[1],c=a[0],s=a[1],l=!1,f=0;f<i;++f)a=t[f],e=a[0],r=a[1],r>u!=s>u&&o<(c-e)*(u-r)/(s-r)+e&&(l=!l),c=e,s=r;return l}},function(t,n,e){"use strict";n.a=function(t){for(var n,e,r=-1,i=t.length,a=t[i-1],o=a[0],u=a[1],c=0;++r<i;)n=o,e=u,a=t[r],o=a[0],u=a[1],n-=o,e-=u,c+=Math.sqrt(n*n+e*e);return c}},function(t,n,e){"use strict";var r=e(431);e.d(n,"a",function(){return r.a})},function(t,n,e){"use strict";function r(t){this._size=t,this._call=this._error=null,this._tasks=[],this._data=[],this._waiting=this._active=this._ended=this._start=0}function i(t){if(!t._start)try{a(t)}catch(n){if(t._tasks[t._ended+t._active-1])u(t,n);else if(!t._data)throw n}}function a(t){for(;t._start=t._waiting&&t._active<t._size;){var n=t._ended+t._active,e=t._tasks[n],r=e.length-1,i=e[r];e[r]=o(t,n),--t._waiting,++t._active,e=i.apply(null,e),t._tasks[n]&&(t._tasks[n]=e||f)}}function o(t,n){return function(e,r){t._tasks[n]&&(--t._active,++t._ended,t._tasks[n]=null,null==t._error&&(null!=e?u(t,e):(t._data[n]=r,t._waiting?i(t):c(t))))}}function u(t,n){var e,r=t._tasks.length;for(t._error=n,t._data=void 0,t._waiting=NaN;--r>=0;)if((e=t._tasks[r])&&(t._tasks[r]=null,e.abort))try{e.abort()}catch(n){}t._active=NaN,c(t)}function c(t){if(!t._active&&t._call){var n=t._data;t._data=void 0,t._call(t._error,n)}}function s(t){if(null==t)t=1/0;else if(!((t=+t)>=1))throw new Error("invalid concurrency");return new r(t)}n.a=s;var l=e(432),f={};r.prototype=s.prototype={constructor:r,defer:function(t){if("function"!=typeof t)throw new Error("invalid callback");if(this._call)throw new Error("defer after await");if(null!=this._error)return this;var n=l.a.call(arguments,1);return n.push(t),++this._waiting,this._tasks.push(n),i(this),this},abort:function(){return null==this._error&&u(this,new Error("abort")),this},await:function(t){if("function"!=typeof t)throw new Error("invalid callback");if(this._call)throw new Error("multiple await");return this._call=function(n,e){t.apply(null,[n].concat(e))},c(this),this},awaitAll:function(t){if("function"!=typeof t)throw new Error("invalid callback");if(this._call)throw new Error("multiple await");return this._call=t,c(this),this}}},function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=[].slice},function(t,n,e){"use strict";var r=e(434);e.d(n,"f",function(){return r.a});var i=e(169);e.d(n,"e",function(){return i.a});var a=e(435);e.d(n,"d",function(){return a.a});var o=e(436);e.d(n,"a",function(){return o.a});var u=e(170);e.d(n,"c",function(){return u.a});var c=e(437);e.d(n,"b",function(){return c.a})},function(t,n,e){"use strict";var r=e(23);n.a=function t(n){function e(t,e){return t=null==t?0:+t,e=null==e?1:+e,1===arguments.length?(e=t,t=0):e-=t,function(){return n()*e+t}}return e.source=t,e}(r.a)},function(t,n,e){"use strict";var r=e(23),i=e(169);n.a=function t(n){function e(){var t=i.a.source(n).apply(this,arguments);return function(){return Math.exp(t())}}return e.source=t,e}(r.a)},function(t,n,e){"use strict";var r=e(23),i=e(170);n.a=function t(n){function e(t){var e=i.a.source(n)(t);return function(){return e()/t}}return e.source=t,e}(r.a)},function(t,n,e){"use strict";var r=e(23);n.a=function t(n){function e(t){return function(){return-Math.log(1-n())/t}}return e.source=t,e}(r.a)},function(t,n,e){"use strict";var r=e(92);e.d(n,"d",function(){return r.a});var i=e(439);e.d(n,"b",function(){return i.a});var a=e(440);e.d(n,"c",function(){return a.a});var o=e(441);e.d(n,"e",function(){return o.a});var u=e(442);e.d(n,"g",function(){return u.a});var c=e(443);e.d(n,"a",function(){return c.a});var s=e(444);e.d(n,"f",function(){return s.a})},function(t,n,e){"use strict";var r=e(49);n.a=Object(r.a)("text/html",function(t){return document.createRange().createContextualFragment(t.responseText)})},function(t,n,e){"use strict";var r=e(49);n.a=Object(r.a)("application/json",function(t){return JSON.parse(t.responseText)})},function(t,n,e){"use strict";var r=e(49);n.a=Object(r.a)("text/plain",function(t){return t.responseText})},function(t,n,e){"use strict";var r=e(49);n.a=Object(r.a)("application/xml",function(t){var n=t.responseXML;if(!n)throw new Error("parse error");return n})},function(t,n,e){"use strict";var r=e(77),i=e(171);n.a=Object(i.a)("text/csv",r.c)},function(t,n,e){"use strict";var r=e(77),i=e(171);n.a=Object(i.a)("text/tab-separated-values",r.h)},function(t,n,e){"use strict";var r=e(446);e.d(n,"i",function(){return r.a}),e.d(n,"o",function(){return r.b});var i=e(447);e.d(n,"j",function(){return i.a});var a=e(30);e.d(n,"l",function(){return a.a});var o=e(449);e.d(n,"m",function(){return o.a});var u=e(172);e.d(n,"n",function(){return u.a}),e.d(n,"k",function(){return u.b});var c=e(450);e.d(n,"p",function(){return c.a}),e.d(n,"t",function(){return c.b});var s=e(451);e.d(n,"q",function(){return s.a});var l=e(452);e.d(n,"r",function(){return l.a});var f=e(453);e.d(n,"u",function(){return f.a});var d=e(175);e.d(n,"v",function(){return d.b});var h=e(469);e.d(n,"w",function(){return h.a});var p=e(470);e.d(n,"x",function(){return p.a});var b=e(471);e.d(n,"z",function(){return b.a});var v=e(472);e.d(n,"A",function(){return v.a});var y=e(473);e.d(n,"y",function(){return y.a});var g=e(474);e.d(n,"b",function(){return g.a});var _=e(475);e.d(n,"f",function(){return _.b}),e.d(n,"h",function(){return _.c}),e.d(n,"a",function(){return _.a});var x=e(476);e.d(n,"g",function(){return x.a}),e.d(n,"d",function(){return x.c}),e.d(n,"c",function(){return x.b}),e.d(n,"e",function(){return x.d});var m=e(477);e.d(n,"s",function(){return m.a})},function(t,n,e){"use strict";function r(){function t(){var t=a().length,r=s[1]<s[0],i=s[r-0],u=s[1-r];n=(u-i)/Math.max(1,t-f+2*d),l&&(n=Math.floor(n)),i+=(u-i-n*(t-f))*h,e=n*(1-f),l&&(i=Math.round(i),e=Math.round(e));var p=Object(o.s)(t).map(function(t){return i+n*t});return c(r?p.reverse():p)}var n,e,i=Object(u.a)().unknown(void 0),a=i.domain,c=i.range,s=[0,1],l=!1,f=0,d=0,h=.5;return delete i.unknown,i.domain=function(n){return arguments.length?(a(n),t()):a()},i.range=function(n){return arguments.length?(s=[+n[0],+n[1]],t()):s.slice()},i.rangeRound=function(n){return s=[+n[0],+n[1]],l=!0,t()},i.bandwidth=function(){return e},i.step=function(){return n},i.round=function(n){return arguments.length?(l=!!n,t()):l},i.padding=function(n){return arguments.length?(f=d=Math.max(0,Math.min(1,n)),t()):f},i.paddingInner=function(n){return arguments.length?(f=Math.max(0,Math.min(1,n)),t()):f},i.paddingOuter=function(n){return arguments.length?(d=Math.max(0,Math.min(1,n)),t()):d},i.align=function(n){return arguments.length?(h=Math.max(0,Math.min(1,n)),t()):h},i.copy=function(){return r().domain(a()).range(s).round(l).paddingInner(f).paddingOuter(d).align(h)},t()}function i(t){var n=t.copy;return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return i(n())},t}function a(){return i(r().paddingInner(1))}n.a=r,n.b=a;var o=e(2),u=e(172)},function(t,n,e){"use strict";function r(){function t(t){return+t}var n=[0,1];return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=i.a.call(e,o.a),t):n.slice()},t.copy=function(){return r().domain(n)},Object(a.b)(t)}n.a=r;var i=e(16),a=e(30),o=e(173)},function(t,n,e){"use strict";var r=e(2),i=e(82);n.a=function(t,n,e){var a,o=t[0],u=t[t.length-1],c=Object(r.A)(o,u,null==n?10:n);switch(e=Object(i.e)(null==e?",f":e),e.type){case"s":var s=Math.max(Math.abs(o),Math.abs(u));return null!=e.precision||isNaN(a=Object(i.g)(c,s))||(e.precision=a),Object(i.d)(e,s);case"":case"e":case"g":case"p":case"r":null!=e.precision||isNaN(a=Object(i.h)(c,Math.max(Math.abs(o),Math.abs(u))))||(e.precision=a-("e"===e.type));break;case"f":case"%":null!=e.precision||isNaN(a=Object(i.f)(c))||(e.precision=a-2*("%"===e.type))}return Object(i.a)(e)}},function(t,n,e){"use strict";function r(t,n){return(n=Math.log(n/t))?function(e){return Math.log(e/t)/n}:Object(d.a)(n)}function i(t,n){return t<0?function(e){return-Math.pow(-n,e)*Math.pow(-t,1-e)}:function(e){return Math.pow(n,e)*Math.pow(t,1-e)}}function a(t){return isFinite(t)?+("1e"+t):t<0?0:t}function o(t){return 10===t?a:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}function u(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}function c(t){return function(n){return-t(-n)}}function s(){function t(){return d=u(a),b=o(a),e()[0]<0&&(d=c(d),b=c(b)),n}var n=Object(p.b)(r,i).domain([1,10]),e=n.domain,a=10,d=u(10),b=o(10);return n.base=function(n){return arguments.length?(a=+n,t()):a},n.domain=function(n){return arguments.length?(e(n),t()):e()},n.ticks=function(t){var n,r=e(),i=r[0],o=r[r.length-1];(n=o<i)&&(f=i,i=o,o=f);var u,c,s,f=d(i),h=d(o),p=null==t?10:+t,v=[];if(!(a%1)&&h-f<p){if(f=Math.round(f)-1,h=Math.round(h)+1,i>0){for(;f<h;++f)for(c=1,u=b(f);c<a;++c)if(!((s=u*c)<i)){if(s>o)break;v.push(s)}}else for(;f<h;++f)for(c=a-1,u=b(f);c>=1;--c)if(!((s=u*c)<i)){if(s>o)break;v.push(s)}}else v=Object(l.B)(f,h,Math.min(h-f,p)).map(b);return n?v.reverse():v},n.tickFormat=function(t,e){if(null==e&&(e=10===a?".0e":","),"function"!=typeof e&&(e=Object(f.a)(e)),t===1/0)return e;null==t&&(t=10);var r=Math.max(1,a*t/n.ticks().length);return function(t){var n=t/b(Math.round(d(t)));return n*a<a-.5&&(n*=a),n<=r?e(t):""}},n.nice=function(){return e(Object(h.a)(e(),{floor:function(t){return b(Math.floor(d(t)))},ceil:function(t){return b(Math.ceil(d(t)))}}))},n.copy=function(){return Object(p.a)(n,s().base(a))},n}n.a=s;var l=e(2),f=e(82),d=e(93),h=e(174),p=e(50)},function(t,n,e){"use strict";function r(t,n){return t<0?-Math.pow(-t,n):Math.pow(t,n)}function i(){function t(t,n){return(n=r(n,e)-(t=r(t,e)))?function(i){return(r(i,e)-t)/n}:Object(o.a)(n)}function n(t,n){return n=r(n,e)-(t=r(t,e)),function(i){return r(t+n*i,1/e)}}var e=1,a=Object(c.b)(t,n),s=a.domain;return a.exponent=function(t){return arguments.length?(e=+t,s(s())):e},a.copy=function(){return Object(c.a)(a,i().exponent(e))},Object(u.b)(a)}function a(){return i().exponent(.5)}n.a=i,n.b=a;var o=e(93),u=e(30),c=e(50)},function(t,n,e){"use strict";function r(){function t(){var t=0,r=Math.max(1,o.length);for(u=new Array(r-1);++t<r;)u[t-1]=Object(i.r)(e,t/r);return n}function n(t){if(!isNaN(t=+t))return o[Object(i.b)(u,t)]}var e=[],o=[],u=[];return n.invertExtent=function(t){var n=o.indexOf(t);return n<0?[NaN,NaN]:[n>0?u[n-1]:e[0],n<u.length?u[n]:e[e.length-1]]},n.domain=function(n){if(!arguments.length)return e.slice();e=[];for(var r,a=0,o=n.length;a<o;++a)null==(r=n[a])||isNaN(r=+r)||e.push(r);return e.sort(i.a),t()},n.range=function(n){return arguments.length?(o=a.b.call(n),t()):o.slice()},n.quantiles=function(){return u.slice()},n.copy=function(){return r().domain(e).range(o)},n}n.a=r;var i=e(2),a=e(16)},function(t,n,e){"use strict";function r(){function t(t){if(t<=t)return l[Object(i.b)(s,t,0,c)]}function n(){var n=-1;for(s=new Array(c);++n<c;)s[n]=((n+1)*u-(n-c)*e)/(c+1);return t}var e=0,u=1,c=1,s=[.5],l=[0,1];return t.domain=function(t){return arguments.length?(e=+t[0],u=+t[1],n()):[e,u]},t.range=function(t){return arguments.length?(c=(l=a.b.call(t)).length-1,n()):l.slice()},t.invertExtent=function(t){var n=l.indexOf(t);return n<0?[NaN,NaN]:n<1?[e,s[0]]:n>=c?[s[c-1],u]:[s[n-1],s[n]]},t.copy=function(){return r().domain([e,u]).range(l)},Object(o.b)(t)}n.a=r;var i=e(2),a=e(16),o=e(30)},function(t,n,e){"use strict";function r(){function t(t){if(t<=t)return e[Object(i.b)(n,t,0,o)]}var n=[.5],e=[0,1],o=1;return t.domain=function(r){return arguments.length?(n=a.b.call(r),o=Math.min(n.length,e.length-1),t):n.slice()},t.range=function(r){return arguments.length?(e=a.b.call(r),o=Math.min(n.length,e.length-1),t):e.slice()},t.invertExtent=function(t){var r=e.indexOf(t);return[n[r-1],n[r]]},t.copy=function(){return r().domain(n).range(e)},t}n.a=r;var i=e(2),a=e(16)},function(t,n,e){"use strict";e.d(n,"b",function(){return a});var r=e(3),i=Object(r.a)(function(){},function(t,n){t.setTime(+t+n)},function(t,n){return n-t});i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?Object(r.a)(function(n){n.setTime(Math.floor(n/t)*t)},function(n,e){n.setTime(+n+e*t)},function(n,e){return(e-n)/t}):i:null},n.a=i;var a=i.range},function(t,n,e){"use strict";e.d(n,"b",function(){return o});var r=e(3),i=e(11),a=Object(r.a)(function(t){t.setTime(Math.floor(t/i.d)*i.d)},function(t,n){t.setTime(+t+n*i.d)},function(t,n){return(n-t)/i.d},function(t){return t.getUTCSeconds()});n.a=a;var o=a.range},function(t,n,e){"use strict";e.d(n,"b",function(){return o});var r=e(3),i=e(11),a=Object(r.a)(function(t){t.setTime(Math.floor(t/i.c)*i.c)},function(t,n){t.setTime(+t+n*i.c)},function(t,n){return(n-t)/i.c},function(t){return t.getMinutes()});n.a=a;var o=a.range},function(t,n,e){"use strict";e.d(n,"b",function(){return o});var r=e(3),i=e(11),a=Object(r.a)(function(t){var n=t.getTimezoneOffset()*i.c%i.b;n<0&&(n+=i.b),t.setTime(Math.floor((+t-n)/i.b)*i.b+n)},function(t,n){t.setTime(+t+n*i.b)},function(t,n){return(n-t)/i.b},function(t){return t.getHours()});n.a=a;var o=a.range},function(t,n,e){"use strict";e.d(n,"a",function(){return o});var r=e(3),i=e(11),a=Object(r.a)(function(t){t.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*i.c)/i.a},function(t){return t.getDate()-1});n.b=a;var o=a.range},function(t,n,e){"use strict";function r(t){return Object(i.a)(function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+7*n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*a.c)/a.e})}e.d(n,"g",function(){return o}),e.d(n,"c",function(){return u}),e.d(n,"k",function(){return c}),e.d(n,"m",function(){return s}),e.d(n,"i",function(){return l}),e.d(n,"a",function(){return f}),e.d(n,"e",function(){return d}),e.d(n,"h",function(){return h}),e.d(n,"d",function(){return p}),e.d(n,"l",function(){return b}),e.d(n,"n",function(){return v}),e.d(n,"j",function(){return y}),e.d(n,"b",function(){return g}),e.d(n,"f",function(){return _});var i=e(3),a=e(11),o=r(0),u=r(1),c=r(2),s=r(3),l=r(4),f=r(5),d=r(6),h=o.range,p=u.range,b=c.range,v=s.range,y=l.range,g=f.range,_=d.range},function(t,n,e){"use strict";e.d(n,"b",function(){return a});var r=e(3),i=Object(r.a)(function(t){t.setDate(1),t.setHours(0,0,0,0)},function(t,n){t.setMonth(t.getMonth()+n)},function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())},function(t){return t.getMonth()});n.a=i;var a=i.range},function(t,n,e){"use strict";e.d(n,"b",function(){return a});var r=e(3),i=Object(r.a)(function(t){t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,n){t.setFullYear(t.getFullYear()+n)},function(t,n){return n.getFullYear()-t.getFullYear()},function(t){return t.getFullYear()});i.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Object(r.a)(function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)},function(n,e){n.setFullYear(n.getFullYear()+e*t)}):null},n.a=i;var a=i.range},function(t,n,e){"use strict";e.d(n,"b",function(){return o});var r=e(3),i=e(11),a=Object(r.a)(function(t){t.setUTCSeconds(0,0)},function(t,n){t.setTime(+t+n*i.c)},function(t,n){return(n-t)/i.c},function(t){return t.getUTCMinutes()});n.a=a;var o=a.range},function(t,n,e){"use strict";e.d(n,"b",function(){return o});var r=e(3),i=e(11),a=Object(r.a)(function(t){t.setUTCMinutes(0,0,0)},function(t,n){t.setTime(+t+n*i.b)},function(t,n){return(n-t)/i.b},function(t){return t.getUTCHours()});n.a=a;var o=a.range},function(t,n,e){"use strict";e.d(n,"b",function(){return o});var r=e(3),i=e(11),a=Object(r.a)(function(t){t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+n)},function(t,n){return(n-t)/i.a},function(t){return t.getUTCDate()-1});n.a=a;var o=a.range},function(t,n,e){"use strict";function r(t){return Object(i.a)(function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+7*n)},function(t,n){return(n-t)/a.e})}e.d(n,"g",function(){return o}),e.d(n,"c",function(){return u}),e.d(n,"k",function(){return c}),e.d(n,"m",function(){return s}),e.d(n,"i",function(){return l}),e.d(n,"a",function(){return f}),e.d(n,"e",function(){return d}),e.d(n,"h",function(){return h}),e.d(n,"d",function(){return p}),e.d(n,"l",function(){return b}),e.d(n,"n",function(){return v}),e.d(n,"j",function(){return y}),e.d(n,"b",function(){return g}),e.d(n,"f",function(){return _});var i=e(3),a=e(11),o=r(0),u=r(1),c=r(2),s=r(3),l=r(4),f=r(5),d=r(6),h=o.range,p=u.range,b=c.range,v=s.range,y=l.range,g=f.range,_=d.range},function(t,n,e){"use strict";e.d(n,"b",function(){return a});var r=e(3),i=Object(r.a)(function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCMonth(t.getUTCMonth()+n)},function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())},function(t){return t.getUTCMonth()});n.a=i;var a=i.range},function(t,n,e){"use strict";e.d(n,"b",function(){return a});var r=e(3),i=Object(r.a)(function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)},function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()},function(t){return t.getUTCFullYear()});i.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Object(r.a)(function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)}):null},n.a=i;var a=i.range},function(t,n,e){"use strict";function r(t){var n=new Date(t);return isNaN(n)?null:n}var i=e(177),a=e(95),o=+new Date("2000-01-01T00:00:00.000Z")?r:Object(a.e)(i.b);n.a=o},function(t,n,e){"use strict";var r=e(175),i=e(94),a=e(51);n.a=function(){return Object(r.a)(a._7,a.R,a._5,a.F,a.J,a.N,a.V,a.L,i.g).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)])}},function(t,n,e){"use strict";var r=e(31);n.a=Object(r.a)("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf")},function(t,n,e){"use strict";var r=e(31);n.a=Object(r.a)("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6")},function(t,n,e){"use strict";var r=e(31);n.a=Object(r.a)("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9")},function(t,n,e){"use strict";var r=e(31);n.a=Object(r.a)("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5")},function(t,n,e){"use strict";var r=e(9),i=e(4);n.a=Object(i.interpolateCubehelixLong)(Object(r.b)(300,.5,0),Object(r.b)(-240,.5,1))},function(t,n,e){"use strict";e.d(n,"c",function(){return a}),e.d(n,"a",function(){return o});var r=e(9),i=e(4),a=Object(i.interpolateCubehelixLong)(Object(r.b)(-100,.75,.35),Object(r.b)(80,1.5,.8)),o=Object(i.interpolateCubehelixLong)(Object(r.b)(260,.75,.35),Object(r.b)(80,1.5,.8)),u=Object(r.b)();n.b=function(t){(t<0||t>1)&&(t-=Math.floor(t));var n=Math.abs(t-.5);return u.h=360*t-100,u.s=1.5-1.5*n,u.l=.8-.9*n,u+""}},function(t,n,e){"use strict";function r(t){var n=t.length;return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}}e.d(n,"c",function(){return a}),e.d(n,"b",function(){return o}),e.d(n,"d",function(){return u});var i=e(31);n.a=r(Object(i.a)("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));var a=r(Object(i.a)("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),o=r(Object(i.a)("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),u=r(Object(i.a)("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"))},function(t,n,e){"use strict";function r(t){function n(n){var r=(n-e)/(a-e);return t(o?Math.max(0,Math.min(1,r)):r)}var e=0,a=1,o=!1;return n.domain=function(t){return arguments.length?(e=+t[0],a=+t[1],n):[e,a]},n.clamp=function(t){return arguments.length?(o=!!t,n):o},n.interpolator=function(e){return arguments.length?(t=e,n):t},n.copy=function(){return r(t).domain([e,a]).clamp(o)},Object(i.b)(n)}n.a=r;var i=e(30)},function(t,n,e){"use strict";function r(t){return t.innerRadius}function i(t){return t.outerRadius}function a(t){return t.startAngle}function o(t){return t.endAngle}function u(t){return t&&t.padAngle}function c(t,n,e,r,i,a,o,u){var c=e-t,s=r-n,l=o-i,f=u-a,d=(l*(n-a)-f*(t-i))/(f*c-l*s);return[t+d*c,n+d*s]}function s(t,n,e,r,i,a,o){var u=t-e,c=n-r,s=(o?a:-a)/Object(d.l)(u*u+c*c),l=s*c,f=-s*u,h=t+l,p=n+f,b=e+l,v=r+f,y=(h+b)/2,g=(p+v)/2,_=b-h,x=v-p,m=_*_+x*x,w=i-a,j=h*v-b*p,O=(x<0?-1:1)*Object(d.l)(Object(d.h)(0,w*w*m-j*j)),k=(j*x-_*O)/m,M=(-j*_-x*O)/m,P=(j*x+_*O)/m,A=(-j*_+x*O)/m,T=k-y,N=M-g,E=P-y,S=A-g;return T*T+N*N>E*E+S*S&&(k=P,M=A),{cx:k,cy:M,x01:-l,y01:-f,x11:k*(i/w-1),y11:M*(i/w-1)}}var l=e(7),f=e(17),d=e(32);n.a=function(){function t(){var t,r,i=+n.apply(this,arguments),a=+e.apply(this,arguments),o=b.apply(this,arguments)-d.g,u=v.apply(this,arguments)-d.g,f=Object(d.a)(u-o),_=u>o;if(g||(g=t=Object(l.a)()),a<i&&(r=a,a=i,i=r),a>d.f)if(f>d.m-d.f)g.moveTo(a*Object(d.e)(o),a*Object(d.k)(o)),g.arc(0,0,a,o,u,!_),i>d.f&&(g.moveTo(i*Object(d.e)(u),i*Object(d.k)(u)),g.arc(0,0,i,u,o,_));else{var x,m,w=o,j=u,O=o,k=u,M=f,P=f,A=y.apply(this,arguments)/2,T=A>d.f&&(p?+p.apply(this,arguments):Object(d.l)(i*i+a*a)),N=Object(d.i)(Object(d.a)(a-i)/2,+h.apply(this,arguments)),E=N,S=N;if(T>d.f){var C=Object(d.c)(T/i*Object(d.k)(A)),F=Object(d.c)(T/a*Object(d.k)(A));(M-=2*C)>d.f?(C*=_?1:-1,O+=C,k-=C):(M=0,O=k=(o+u)/2),(P-=2*F)>d.f?(F*=_?1:-1,w+=F,j-=F):(P=0,w=j=(o+u)/2)}var z=a*Object(d.e)(w),R=a*Object(d.k)(w),L=i*Object(d.e)(k),q=i*Object(d.k)(k);if(N>d.f){var B=a*Object(d.e)(j),D=a*Object(d.k)(j),Y=i*Object(d.e)(O),U=i*Object(d.k)(O);if(f<d.j){var I=M>d.f?c(z,R,Y,U,B,D,L,q):[L,q],X=z-I[0],G=R-I[1],H=B-I[0],V=D-I[1],W=1/Object(d.k)(Object(d.b)((X*H+G*V)/(Object(d.l)(X*X+G*G)*Object(d.l)(H*H+V*V)))/2),Q=Object(d.l)(I[0]*I[0]+I[1]*I[1]);E=Object(d.i)(N,(i-Q)/(W-1)),S=Object(d.i)(N,(a-Q)/(W+1))}}P>d.f?S>d.f?(x=s(Y,U,z,R,a,S,_),m=s(B,D,L,q,a,S,_),g.moveTo(x.cx+x.x01,x.cy+x.y01),S<N?g.arc(x.cx,x.cy,S,Object(d.d)(x.y01,x.x01),Object(d.d)(m.y01,m.x01),!_):(g.arc(x.cx,x.cy,S,Object(d.d)(x.y01,x.x01),Object(d.d)(x.y11,x.x11),!_),g.arc(0,0,a,Object(d.d)(x.cy+x.y11,x.cx+x.x11),Object(d.d)(m.cy+m.y11,m.cx+m.x11),!_),g.arc(m.cx,m.cy,S,Object(d.d)(m.y11,m.x11),Object(d.d)(m.y01,m.x01),!_))):(g.moveTo(z,R),g.arc(0,0,a,w,j,!_)):g.moveTo(z,R),i>d.f&&M>d.f?E>d.f?(x=s(L,q,B,D,i,-E,_),m=s(z,R,Y,U,i,-E,_),g.lineTo(x.cx+x.x01,x.cy+x.y01),E<N?g.arc(x.cx,x.cy,E,Object(d.d)(x.y01,x.x01),Object(d.d)(m.y01,m.x01),!_):(g.arc(x.cx,x.cy,E,Object(d.d)(x.y01,x.x01),Object(d.d)(x.y11,x.x11),!_),g.arc(0,0,i,Object(d.d)(x.cy+x.y11,x.cx+x.x11),Object(d.d)(m.cy+m.y11,m.cx+m.x11),_),g.arc(m.cx,m.cy,E,Object(d.d)(m.y11,m.x11),Object(d.d)(m.y01,m.x01),!_))):g.arc(0,0,i,k,O,_):g.lineTo(L,q)}else g.moveTo(0,0);if(g.closePath(),t)return g=null,t+""||null}var n=r,e=i,h=Object(f.a)(0),p=null,b=a,v=o,y=u,g=null;return t.centroid=function(){var t=(+n.apply(this,arguments)+ +e.apply(this,arguments))/2,r=(+b.apply(this,arguments)+ +v.apply(this,arguments))/2-d.j/2;return[Object(d.e)(r)*t,Object(d.k)(r)*t]},t.innerRadius=function(e){return arguments.length?(n="function"==typeof e?e:Object(f.a)(+e),t):n},t.outerRadius=function(n){return arguments.length?(e="function"==typeof n?n:Object(f.a)(+n),t):e},t.cornerRadius=function(n){return arguments.length?(h="function"==typeof n?n:Object(f.a)(+n),t):h},t.padRadius=function(n){return arguments.length?(p=null==n?null:"function"==typeof n?n:Object(f.a)(+n),t):p},t.startAngle=function(n){return arguments.length?(b="function"==typeof n?n:Object(f.a)(+n),t):b},t.endAngle=function(n){return arguments.length?(v="function"==typeof n?n:Object(f.a)(+n),t):v},t.padAngle=function(n){return arguments.length?(y="function"==typeof n?n:Object(f.a)(+n),t):y},t.context=function(n){return arguments.length?(g=null==n?null:n,t):g},t}},function(t,n,e){"use strict";var r=e(17),i=e(480),a=e(481),o=e(32);n.a=function(){function t(t){var r,i,a,f,d,h=t.length,p=0,b=new Array(h),v=new Array(h),y=+c.apply(this,arguments),g=Math.min(o.m,Math.max(-o.m,s.apply(this,arguments)-y)),_=Math.min(Math.abs(g)/h,l.apply(this,arguments)),x=_*(g<0?-1:1);for(r=0;r<h;++r)(d=v[b[r]=r]=+n(t[r],r,t))>0&&(p+=d);for(null!=e?b.sort(function(t,n){return e(v[t],v[n])}):null!=u&&b.sort(function(n,e){return u(t[n],t[e])}),r=0,a=p?(g-h*x)/p:0;r<h;++r,y=f)i=b[r],d=v[i],f=y+(d>0?d*a:0)+x,v[i]={data:t[i],index:r,value:d,startAngle:y,endAngle:f,padAngle:_};return v}var n=a.a,e=i.a,u=null,c=Object(r.a)(0),s=Object(r.a)(o.m),l=Object(r.a)(0);return t.value=function(e){return arguments.length?(n="function"==typeof e?e:Object(r.a)(+e),t):n},t.sortValues=function(n){return arguments.length?(e=n,u=null,t):e},t.sort=function(n){return arguments.length?(u=n,e=null,t):u},t.startAngle=function(n){return arguments.length?(c="function"==typeof n?n:Object(r.a)(+n),t):c},t.endAngle=function(n){return arguments.length?(s="function"==typeof n?n:Object(r.a)(+n),t):s},t.padAngle=function(n){return arguments.length?(l="function"==typeof n?n:Object(r.a)(+n),t):l},t}},function(t,n,e){"use strict";n.a=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}},function(t,n,e){"use strict";n.a=function(t){return t}},function(t,n,e){"use strict";var r=e(180),i=e(179),a=e(181);n.a=function(){var t=Object(i.a)().curve(r.a),n=t.curve,e=t.lineX0,o=t.lineX1,u=t.lineY0,c=t.lineY1;return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return Object(a.b)(e())},delete t.lineX0,t.lineEndAngle=function(){return Object(a.b)(o())},delete t.lineX1,t.lineInnerRadius=function(){return Object(a.b)(u())},delete t.lineY0,t.lineOuterRadius=function(){return Object(a.b)(c())},delete t.lineY1,t.curve=function(t){return arguments.length?n(Object(r.b)(t)):n()._curve},t}},function(t,n,e){"use strict";function r(t){return t.source}function i(t){return t.target}function a(t){function n(){var n,r=h.a.call(arguments),i=e.apply(this,r),s=a.apply(this,r);if(c||(c=n=Object(d.a)()),t(c,+o.apply(this,(r[0]=i,r)),+u.apply(this,r),+o.apply(this,(r[0]=s,r)),+u.apply(this,r)),n)return c=null,n+""||null}var e=r,a=i,o=b.a,u=b.b,c=null;return n.source=function(t){return arguments.length?(e=t,n):e},n.target=function(t){return arguments.length?(a=t,n):a},n.x=function(t){return arguments.length?(o="function"==typeof t?t:Object(p.a)(+t),n):o},n.y=function(t){return arguments.length?(u="function"==typeof t?t:Object(p.a)(+t),n):u},n.context=function(t){return arguments.length?(c=null==t?null:t,n):c},n}function o(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n=(n+r)/2,e,n,i,r,i)}function u(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n,e=(e+i)/2,r,e,r,i)}function c(t,n,e,r,i){var a=Object(v.a)(n,e),o=Object(v.a)(n,e=(e+i)/2),u=Object(v.a)(r,e),c=Object(v.a)(r,i);t.moveTo(a[0],a[1]),t.bezierCurveTo(o[0],o[1],u[0],u[1],c[0],c[1])}function s(){return a(o)}function l(){return a(u)}function f(){var t=a(c);return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t}n.a=s,n.c=l,n.b=f;var d=e(7),h=e(183),p=e(17),b=e(97),v=e(182)},function(t,n,e){"use strict";e.d(n,"b",function(){return d});var r=e(7),i=e(184),a=e(185),o=e(186),u=e(187),c=e(188),s=e(189),l=e(190),f=e(17),d=[i.a,a.a,o.a,c.a,u.a,s.a,l.a];n.a=function(){function t(){var t;if(a||(a=t=Object(r.a)()),n.apply(this,arguments).draw(a,+e.apply(this,arguments)),t)return a=null,t+""||null}var n=Object(f.a)(i.a),e=Object(f.a)(64),a=null;return t.type=function(e){return arguments.length?(n="function"==typeof e?e:Object(f.a)(e),t):n},t.size=function(n){return arguments.length?(e="function"==typeof n?n:Object(f.a)(+n),t):e},t.context=function(n){return arguments.length?(a=null==n?null:n,t):a},t}},function(t,n,e){"use strict";function r(t){this._context=t}var i=e(53),a=e(54);r.prototype={areaStart:i.a,areaEnd:i.a,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:Object(a.c)(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},n.a=function(t){return new r(t)}},function(t,n,e){"use strict";function r(t){this._context=t}var i=e(54);r.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var e=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 3:this._point=4;default:Object(i.c)(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},n.a=function(t){return new r(t)}},function(t,n,e){"use strict";function r(t,n){this._basis=new i.a(t),this._beta=n}var i=e(54);r.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,e=t.length-1;if(e>0)for(var r,i=t[0],a=n[0],o=t[e]-i,u=n[e]-a,c=-1;++c<=e;)r=c/e,this._basis.point(this._beta*t[c]+(1-this._beta)*(i+r*o),this._beta*n[c]+(1-this._beta)*(a+r*u));this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}},n.a=function t(n){function e(t){return 1===n?new i.a(t):new r(t,n)}return e.beta=function(n){return t(+n)},e}(.85)},function(t,n,e){"use strict";function r(t,n){this._context=t,this._alpha=n}var i=e(191),a=e(53),o=e(98);r.prototype={areaStart:a.a,areaEnd:a.a,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:Object(o.b)(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}},n.a=function t(n){function e(t){return n?new r(t,n):new i.a(t,0)}return e.alpha=function(n){return t(+n)},e}(.5)},function(t,n,e){"use strict";function r(t,n){this._context=t,this._alpha=n}var i=e(192),a=e(98);r.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Object(a.b)(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}},n.a=function t(n){function e(t){return n?new r(t,n):new i.a(t,0)}return e.alpha=function(n){return t(+n)},e}(.5)},function(t,n,e){"use strict";function r(t){this._context=t}var i=e(53);r.prototype={areaStart:i.a,areaEnd:i.a,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}},n.a=function(t){return new r(t)}},function(t,n,e){"use strict";function r(t){return t<0?-1:1}function i(t,n,e){var i=t._x1-t._x0,a=n-t._x1,o=(t._y1-t._y0)/(i||a<0&&-0),u=(e-t._y1)/(a||i<0&&-0),c=(o*a+u*i)/(i+a);return(r(o)+r(u))*Math.min(Math.abs(o),Math.abs(u),.5*Math.abs(c))||0}function a(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function o(t,n,e){var r=t._x0,i=t._y0,a=t._x1,o=t._y1,u=(a-r)/3;t._context.bezierCurveTo(r+u,i+u*n,a-u,o-u*e,a,o)}function u(t){this._context=t}function c(t){this._context=new s(t)}function s(t){this._context=t}function l(t){return new u(t)}function f(t){return new c(t)}n.a=l,n.b=f,u.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:o(this,this._t0,a(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN;if(t=+t,n=+n,t!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,o(this,a(this,e=i(this,t,n)),e);break;default:o(this,this._t0,e=i(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(c.prototype=Object.create(u.prototype)).point=function(t,n){u.prototype.point.call(this,n,t)},s.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,i,a){this._context.bezierCurveTo(n,t,r,e,a,i)}}},function(t,n,e){"use strict";function r(t){this._context=t}function i(t){var n,e,r=t.length-1,i=new Array(r),a=new Array(r),o=new Array(r);for(i[0]=0,a[0]=2,o[0]=t[0]+2*t[1],n=1;n<r-1;++n)i[n]=1,a[n]=4,o[n]=4*t[n]+2*t[n+1];for(i[r-1]=2,a[r-1]=7,o[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)e=i[n]/a[n-1],a[n]-=e,o[n]-=e*o[n-1];for(i[r-1]=o[r-1]/a[r-1],n=r-2;n>=0;--n)i[n]=(o[n]-i[n+1])/a[n];for(a[r-1]=(t[r]+i[r-1])/2,n=0;n<r-1;++n)a[n]=2*t[n+1]-i[n+1];return[i,a]}r.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,e=t.length;if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1]);else for(var r=i(t),a=i(n),o=0,u=1;u<e;++o,++u)this._context.bezierCurveTo(r[0][o],a[0][o],r[1][o],a[1][o],t[u],n[u]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}},n.a=function(t){return new r(t)}},function(t,n,e){"use strict";function r(t,n){this._context=t,this._t=n}function i(t){return new r(t,0)}function a(t){return new r(t,1)}n.c=i,n.b=a,r.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var e=this._x*(1-this._t)+t*this._t;this._context.lineTo(e,this._y),this._context.lineTo(e,n)}}this._x=t,this._y=n}},n.a=function(t){return new r(t,.5)}},function(t,n,e){"use strict";function r(t,n){return t[n]}var i=e(183),a=e(17),o=e(33),u=e(34);n.a=function(){function t(t){var r,i,a=n.apply(this,arguments),o=t.length,u=a.length,l=new Array(u);for(r=0;r<u;++r){for(var f,d=a[r],h=l[r]=new Array(o),p=0;p<o;++p)h[p]=f=[0,+s(t[p],d,p,t)],f.data=t[p];h.key=d}for(r=0,i=e(l);r<u;++r)l[i[r]].index=r;return c(l,i),l}var n=Object(a.a)([]),e=u.a,c=o.a,s=r;return t.keys=function(e){return arguments.length?(n="function"==typeof e?e:Object(a.a)(i.a.call(e)),t):n},t.value=function(n){return arguments.length?(s="function"==typeof n?n:Object(a.a)(+n),t):s},t.order=function(n){return arguments.length?(e=null==n?u.a:"function"==typeof n?n:Object(a.a)(i.a.call(n)),t):e},t.offset=function(n){return arguments.length?(c=null==n?o.a:n,t):c},t}},function(t,n,e){"use strict";var r=e(33);n.a=function(t,n){if((i=t.length)>0){for(var e,i,a,o=0,u=t[0].length;o<u;++o){for(a=e=0;e<i;++e)a+=t[e][o][1]||0;if(a)for(e=0;e<i;++e)t[e][o][1]/=a}Object(r.a)(t,n)}}},function(t,n,e){"use strict";n.a=function(t,n){if((u=t.length)>1)for(var e,r,i,a,o,u,c=0,s=t[n[0]].length;c<s;++c)for(a=o=0,e=0;e<u;++e)(i=(r=t[n[e]][c])[1]-r[0])>=0?(r[0]=a,r[1]=a+=i):i<0?(r[1]=o,r[0]=o+=i):r[0]=a}},function(t,n,e){"use strict";var r=e(33);n.a=function(t,n){if((e=t.length)>0){for(var e,i=0,a=t[n[0]],o=a.length;i<o;++i){for(var u=0,c=0;u<e;++u)c+=t[u][i][1]||0;a[i][1]+=a[i][0]=-c/2}Object(r.a)(t,n)}}},function(t,n,e){"use strict";var r=e(33);n.a=function(t,n){if((a=t.length)>0&&(i=(e=t[n[0]]).length)>0){for(var e,i,a,o=0,u=1;u<i;++u){for(var c=0,s=0,l=0;c<a;++c){for(var f=t[n[c]],d=f[u][1]||0,h=f[u-1][1]||0,p=(d-h)/2,b=0;b<c;++b){var v=t[n[b]];p+=(v[u][1]||0)-(v[u-1][1]||0)}s+=d,l+=p*d}e[u-1][1]+=e[u-1][0]=o,s&&(o-=l/s)}e[u-1][1]+=e[u-1][0]=o,Object(r.a)(t,n)}}},function(t,n,e){"use strict";var r=e(99);n.a=function(t){return Object(r.a)(t).reverse()}},function(t,n,e){"use strict";var r=e(34),i=e(99);n.a=function(t){var n,e,a=t.length,o=t.map(i.b),u=Object(r.a)(t).sort(function(t,n){return o[n]-o[t]}),c=0,s=0,l=[],f=[];for(n=0;n<a;++n)e=u[n],c<s?(c+=o[e],l.push(e)):(s+=o[e],f.push(e));return f.reverse().concat(l)}},function(t,n,e){"use strict";var r=e(34);n.a=function(t){return Object(r.a)(t).reverse()}},function(t,n,e){"use strict";var r=e(503);e.d(n,"a",function(){return r.a})},function(t,n,e){"use strict";var r=e(504),i=e(505),a=e(35);n.a=function(){function t(t){return new a.d(t.map(function(r,i){var o=[Math.round(n(r,i,t)/a.f)*a.f,Math.round(e(r,i,t)/a.f)*a.f];return o.index=i,o.data=r,o}),o)}var n=i.a,e=i.b,o=null;return t.polygons=function(n){return t(n).polygons()},t.links=function(n){return t(n).links()},t.triangles=function(n){return t(n).triangles()},t.x=function(e){return arguments.length?(n="function"==typeof e?e:Object(r.a)(+e),t):n},t.y=function(n){return arguments.length?(e="function"==typeof n?n:Object(r.a)(+n),t):e},t.extent=function(n){return arguments.length?(o=null==n?null:[[+n[0][0],+n[0][1]],[+n[1][0],+n[1][1]]],t):o&&[[o[0][0],o[0][1]],[o[1][0],o[1][1]]]},t.size=function(n){return arguments.length?(o=null==n?null:[[0,0],[+n[0],+n[1]]],t):o&&[o[1][0]-o[0][0],o[1][1]-o[0][1]]},t}},function(t,n,e){"use strict";n.a=function(t){return function(){return t}}},function(t,n,e){"use strict";function r(t){return t[0]}function i(t){return t[1]}n.a=r,n.b=i},function(t,n,e){"use strict";function r(){Object(l.a)(this),this.edge=this.site=this.circle=null}function i(t){var n=b.pop()||new r;return n.site=t,n}function a(t){Object(d.b)(t),p.a.remove(t),b.push(t),Object(l.a)(t)}function o(t){var n=t.circle,e=n.x,r=n.cy,i=[e,r],o=t.P,u=t.N,c=[t];a(t);for(var s=o;s.circle&&Math.abs(e-s.circle.x)<p.f&&Math.abs(r-s.circle.cy)<p.f;)o=s.P,c.unshift(s),a(s),s=o;c.unshift(s),Object(d.b)(s);for(var l=u;l.circle&&Math.abs(e-l.circle.x)<p.f&&Math.abs(r-l.circle.cy)<p.f;)u=l.N,c.push(l),a(l),l=u;c.push(l),Object(d.b)(l);var f,b=c.length;for(f=1;f<b;++f)l=c[f],s=c[f-1],Object(h.d)(l.edge,s.site,l.site,i);s=c[0],l=c[b-1],l.edge=Object(h.c)(s.site,l.site,null,i),Object(d.a)(s),Object(d.a)(l)}function u(t){for(var n,e,r,a,o=t[0],u=t[1],l=p.a._;l;)if((r=c(l,u)-o)>p.f)l=l.L;else{if(!((a=o-s(l,u))>p.f)){r>-p.f?(n=l.P,e=l):a>-p.f?(n=l,e=l.N):n=e=l;break}if(!l.R){n=l;break}l=l.R}Object(f.c)(t);var b=i(t);if(p.a.insert(n,b),n||e){if(n===e)return Object(d.b)(n),e=i(n.site),p.a.insert(b,e),b.edge=e.edge=Object(h.c)(n.site,b.site),Object(d.a)(n),void Object(d.a)(e);if(!e)return void(b.edge=Object(h.c)(n.site,b.site));Object(d.b)(n),Object(d.b)(e);var v=n.site,y=v[0],g=v[1],_=t[0]-y,x=t[1]-g,m=e.site,w=m[0]-y,j=m[1]-g,O=2*(_*j-x*w),k=_*_+x*x,M=w*w+j*j,P=[(j*k-x*M)/O+y,(_*M-w*k)/O+g];Object(h.d)(e.edge,v,m,P),b.edge=Object(h.c)(v,t,null,P),e.edge=Object(h.c)(t,m,null,P),Object(d.a)(n),Object(d.a)(e)}}function c(t,n){var e=t.site,r=e[0],i=e[1],a=i-n;if(!a)return r;var o=t.P;if(!o)return-1/0;e=o.site;var u=e[0],c=e[1],s=c-n;if(!s)return u;var l=u-r,f=1/a-1/s,d=l/s;return f?(-d+Math.sqrt(d*d-2*f*(l*l/(-2*s)-c+s/2+i-a/2)))/f+r:(r+u)/2}function s(t,n){var e=t.N;if(e)return c(e,n);var r=t.site;return r[1]===n?r[0]:1/0}n.b=o,n.a=u;var l=e(100),f=e(193),d=e(194),h=e(101),p=e(35),b=[]},function(t,n,e){"use strict";var r=e(508);e.d(n,"a",function(){return r.a});var i=e(195);e.d(n,"c",function(){return i.b}),e.d(n,"b",function(){return i.c})},function(t,n,e){"use strict";function r(){return!d.d.button}function i(){var t,n,e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,t=e.width.baseVal.value,n=e.height.baseVal.value):(t=e.clientWidth,n=e.clientHeight),[[0,0],[t,n]]}function a(){return this.__zoom||v.c}function o(){return-d.d.deltaY*(d.d.deltaMode?120:1)/500}function u(){return"ontouchstart"in this}function c(t,n,e){var r=t.invertX(n[0][0])-e[0][0],i=t.invertX(n[1][0])-e[1][0],a=t.invertY(n[0][1])-e[0][1],o=t.invertY(n[1][1])-e[1][1];return t.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),o>a?(a+o)/2:Math.min(0,a)||Math.max(0,o))}var s=e(14),l=e(62),f=e(4),d=e(1),h=e(74),p=e(509),b=e(510),v=e(195),y=e(511);n.a=function(){function t(t){t.property("__zoom",a).on("wheel.zoom",w).on("mousedown.zoom",j).on("dblclick.zoom",O).filter(F).on("touchstart.zoom",k).on("touchmove.zoom",M).on("touchend.zoom touchcancel.zoom",P).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function n(t,n){return n=Math.max(z[0],Math.min(z[1],n)),n===t.k?t:new v.a(n,t.x,t.y)}function e(t,n,e){var r=n[0]-e[0]*t.k,i=n[1]-e[1]*t.k;return r===t.x&&i===t.y?t:new v.a(t.k,r,i)}function g(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function _(t,n,e){t.on("start.zoom",function(){x(this,arguments).start()}).on("interrupt.zoom end.zoom",function(){x(this,arguments).end()}).tween("zoom",function(){var t=this,r=arguments,i=x(t,r),a=E.apply(t,r),o=e||g(a),u=Math.max(a[1][0]-a[0][0],a[1][1]-a[0][1]),c=t.__zoom,s="function"==typeof n?n.apply(t,r):n,l=q(c.invert(o).concat(u/c.k),s.invert(o).concat(u/s.k));return function(t){if(1===t)t=s;else{var n=l(t),e=u/n[2];t=new v.a(e,o[0]-n[0]*e,o[1]-n[1]*e)}i.zoom(null,t)}})}function x(t,n){for(var e,r=0,i=B.length;r<i;++r)if((e=B[r]).that===t)return e;return new m(t,n)}function m(t,n){this.that=t,this.args=n,this.index=-1,this.active=0,this.extent=E.apply(t,n)}function w(){function t(){r.wheel=null,r.end()}if(N.apply(this,arguments)){var r=x(this,arguments),i=this.__zoom,a=Math.max(z[0],Math.min(z[1],i.k*Math.pow(2,C.apply(this,arguments)))),o=Object(d.g)(this);if(r.wheel)r.mouse[0][0]===o[0]&&r.mouse[0][1]===o[1]||(r.mouse[1]=i.invert(r.mouse[0]=o)),clearTimeout(r.wheel);else{if(i.k===a)return;r.mouse=[o,i.invert(o)],Object(h.b)(this),r.start()}Object(y.a)(),r.wheel=setTimeout(t,U),r.zoom("mouse",S(e(n(i,a),r.mouse[0],r.mouse[1]),r.extent,R))}}function j(){function t(){if(Object(y.a)(),!r.moved){var t=d.d.clientX-o,n=d.d.clientY-u;r.moved=t*t+n*n>I}r.zoom("mouse",S(e(r.that.__zoom,r.mouse[0]=Object(d.g)(r.that),r.mouse[1]),r.extent,R))}function n(){i.on("mousemove.zoom mouseup.zoom",null),Object(l.c)(d.d.view,r.moved),Object(y.a)(),r.end()}if(!T&&N.apply(this,arguments)){var r=x(this,arguments),i=Object(d.j)(d.d.view).on("mousemove.zoom",t,!0).on("mouseup.zoom",n,!0),a=Object(d.g)(this),o=d.d.clientX,u=d.d.clientY;Object(l.b)(d.d.view),Object(y.b)(),r.mouse=[a,this.__zoom.invert(a)],Object(h.b)(this),r.start()}}function O(){if(N.apply(this,arguments)){var r=this.__zoom,i=Object(d.g)(this),a=r.invert(i),o=r.k*(d.d.shiftKey?.5:2),u=S(e(n(r,o),i,a),E.apply(this,arguments),R);Object(y.a)(),L>0?Object(d.j)(this).transition().duration(L).call(_,u,i):Object(d.j)(this).call(t.transform,u)}}function k(){if(N.apply(this,arguments)){var t,n,e,r,i=x(this,arguments),a=d.d.changedTouches,o=a.length;for(Object(y.b)(),n=0;n<o;++n)e=a[n],r=Object(d.p)(this,a,e.identifier),r=[r,this.__zoom.invert(r),e.identifier],i.touch0?i.touch1||(i.touch1=r):(i.touch0=r,t=!0);if(A&&(A=clearTimeout(A),!i.touch1))return i.end(),void((r=Object(d.j)(this).on("dblclick.zoom"))&&r.apply(this,arguments));t&&(A=setTimeout(function(){A=null},Y),Object(h.b)(this),i.start())}}function M(){var t,r,i,a,o=x(this,arguments),u=d.d.changedTouches,c=u.length;for(Object(y.a)(),A&&(A=clearTimeout(A)),t=0;t<c;++t)r=u[t],i=Object(d.p)(this,u,r.identifier),o.touch0&&o.touch0[2]===r.identifier?o.touch0[0]=i:o.touch1&&o.touch1[2]===r.identifier&&(o.touch1[0]=i);if(r=o.that.__zoom,o.touch1){var s=o.touch0[0],l=o.touch0[1],f=o.touch1[0],h=o.touch1[1],p=(p=f[0]-s[0])*p+(p=f[1]-s[1])*p,b=(b=h[0]-l[0])*b+(b=h[1]-l[1])*b;r=n(r,Math.sqrt(p/b)),i=[(s[0]+f[0])/2,(s[1]+f[1])/2],a=[(l[0]+h[0])/2,(l[1]+h[1])/2]}else{if(!o.touch0)return;i=o.touch0[0],a=o.touch0[1]}o.zoom("touch",S(e(r,i,a),o.extent,R))}function P(){var t,n,e=x(this,arguments),r=d.d.changedTouches,i=r.length;for(Object(y.b)(),T&&clearTimeout(T),T=setTimeout(function(){T=null},Y),t=0;t<i;++t)n=r[t],e.touch0&&e.touch0[2]===n.identifier?delete e.touch0:e.touch1&&e.touch1[2]===n.identifier&&delete e.touch1;e.touch1&&!e.touch0&&(e.touch0=e.touch1,delete e.touch1),e.touch0?e.touch0[1]=this.__zoom.invert(e.touch0[0]):e.end()}var A,T,N=r,E=i,S=c,C=o,F=u,z=[0,1/0],R=[[-1/0,-1/0],[1/0,1/0]],L=250,q=f.interpolateZoom,B=[],D=Object(s.a)("start","zoom","end"),Y=500,U=150,I=0;return t.transform=function(t,n){var e=t.selection?t.selection():t;e.property("__zoom",a),t!==e?_(t,n):e.interrupt().each(function(){x(this,arguments).start().zoom(null,"function"==typeof n?n.apply(this,arguments):n).end()})},t.scaleBy=function(n,e){t.scaleTo(n,function(){return this.__zoom.k*("function"==typeof e?e.apply(this,arguments):e)})},t.scaleTo=function(r,i){t.transform(r,function(){var t=E.apply(this,arguments),r=this.__zoom,a=g(t),o=r.invert(a),u="function"==typeof i?i.apply(this,arguments):i;return S(e(n(r,u),a,o),t,R)})},t.translateBy=function(n,e,r){t.transform(n,function(){return S(this.__zoom.translate("function"==typeof e?e.apply(this,arguments):e,"function"==typeof r?r.apply(this,arguments):r),E.apply(this,arguments),R)})},t.translateTo=function(n,e,r){t.transform(n,function(){var t=E.apply(this,arguments),n=this.__zoom,i=g(t);return S(v.c.translate(i[0],i[1]).scale(n.k).translate("function"==typeof e?-e.apply(this,arguments):-e,"function"==typeof r?-r.apply(this,arguments):-r),t,R)})},m.prototype={start:function(){return 1==++this.active&&(this.index=B.push(this)-1,this.emit("start")),this},zoom:function(t,n){return this.mouse&&"mouse"!==t&&(this.mouse[1]=n.invert(this.mouse[0])),this.touch0&&"touch"!==t&&(this.touch0[1]=n.invert(this.touch0[0])),this.touch1&&"touch"!==t&&(this.touch1[1]=n.invert(this.touch1[0])),this.that.__zoom=n,this.emit("zoom"),this},end:function(){return 0==--this.active&&(B.splice(this.index,1),this.index=-1,this.emit("end")),this},emit:function(n){Object(d.c)(new b.a(t,n,this.that.__zoom),D.apply,D,[n,this.that,this.args])}},t.wheelDelta=function(n){return arguments.length?(C="function"==typeof n?n:Object(p.a)(+n),t):C},t.filter=function(n){return arguments.length?(N="function"==typeof n?n:Object(p.a)(!!n),t):N},t.touchable=function(n){return arguments.length?(F="function"==typeof n?n:Object(p.a)(!!n),t):F},t.extent=function(n){return arguments.length?(E="function"==typeof n?n:Object(p.a)([[+n[0][0],+n[0][1]],[+n[1][0],+n[1][1]]]),t):E},t.scaleExtent=function(n){return arguments.length?(z[0]=+n[0],z[1]=+n[1],t):[z[0],z[1]]},t.translateExtent=function(n){return arguments.length?(R[0][0]=+n[0][0],R[1][0]=+n[1][0],R[0][1]=+n[0][1],R[1][1]=+n[1][1],t):[[R[0][0],R[0][1]],[R[1][0],R[1][1]]]},t.constrain=function(n){return arguments.length?(S=n,t):S},t.duration=function(n){return arguments.length?(L=+n,t):L},t.interpolate=function(n){return arguments.length?(q=n,t):q},t.on=function(){var n=D.on.apply(D,arguments);return n===D?t:n},t.clickDistance=function(n){return arguments.length?(I=(n=+n)*n,t):Math.sqrt(I)},t}},function(t,n,e){"use strict";n.a=function(t){return function(){return t}}},function(t,n,e){"use strict";function r(t,n,e){this.target=t,this.type=n,this.transform=e}n.a=r},function(t,n,e){"use strict";function r(){i.d.stopImmediatePropagation()}n.b=r;var i=e(1);n.a=function(){i.d.preventDefault(),i.d.stopImmediatePropagation()}},function(t,n,e){"use strict";function r(){var t=[],n=void 0,e=void 0,r=[],a={},o={},c=!1,s=void 0,l=X,f=void 0,d=void 0,h=Object(u.a)("subjectover","subjectout","subjectclick","connectorover","connectorout","connectorclick","noteover","noteout","noteclick","dragend","dragstart"),p=void 0,y=function(e){p=e,c||e.selectAll("circle.handle").remove();var u=t.map(function(t){return t.type||(t.type=l),t.disable||(t.disable=r),new b(t)});n=n||new v({annotations:u,accessors:a,accessorsInverse:o,ids:s}),e.selectAll("g").data([n]).enter().append("g").attr("class","annotations");var y=e.select("g.annotations");$(y,n.annotations,"g","annotation"),y.selectAll("g.annotation").each(function(t){var n=Object(i.d)(this);n.attr("class","annotation"),$(n,[t],"g","annotation-connector"),$(n,[t],"g","annotation-subject"),$(n,[t],"g","annotation-note"),$(n.select("g.annotation-note"),[t],"g","annotation-note-content"),t.type="[object Object]"===t.type.toString()?t.type:new t.type({a:n,annotation:t,textWrap:f,notePadding:d,editMode:c,dispatcher:h,accessors:a}),t.type.draw(),t.type.drawText&&t.type.drawText()})};return y.json=function(){return console.log("Annotations JSON was copied to your clipboard. Please note the annotation type is not JSON compatible. It appears in the objects array in the console, but not in the copied JSON.",n.json),window.copy(JSON.stringify(n.json.map(function(t){return delete t.type,t}))),y},y.update=function(){return t&&n&&(t=n.annotations.map(function(t){return t.type.draw(),t})),y},y.updateText=function(){return n&&(n.updateText(f),t=n.annotations),y},y.updatedAccessors=function(){return n.setPositionWithAccessors(),t=n.annotations,y},y.disable=function(e){return arguments.length?(r=e,n&&(n.updateDisable(r),t=n.annotations),y):r},y.textWrap=function(e){return arguments.length?(f=e,n&&(n.updateTextWrap(f),t=n.annotations),y):f},y.notePadding=function(e){return arguments.length?(d=e,n&&(n.updateNotePadding(d),t=n.annotations),y):d},y.type=function(e,r){return arguments.length?(l=e,n&&(n.annotations.map(function(t){t.type.note&&t.type.note.selectAll("*:not(.annotation-note-content)").remove(),t.type.noteContent&&t.type.noteContent.selectAll("*").remove(),t.type.subject&&t.type.subject.selectAll("*").remove(),t.type.connector&&t.type.connector.selectAll("*").remove(),t.type.typeSettings={},t.type=l,t.subject=r&&r.subject||t.subject,t.connector=r&&r.connector||t.connector,t.note=r&&r.note||t.note}),t=n.annotations),y):l},y.annotations=function(e){if(!arguments.length)return n&&n.annotations||t;if(t=e,n&&n.annotations){t.some(function(t){return!t.type||"[object Object]"!==t.type.toString()})?(n=null,y(p)):n.annotations=t}return y},y.context=function(t){return arguments.length?(e=t,y):e},y.accessors=function(t){return arguments.length?(a=t,y):a},y.accessorsInverse=function(t){return arguments.length?(o=t,y):o},y.ids=function(t){return arguments.length?(s=t,y):s},y.editMode=function(e){return arguments.length?(c=e,p&&p.selectAll("g.annotation").classed("editable",c),n&&(n.editMode(c),t=n.annotations),y):c},y.collection=function(t){return arguments.length?(n=t,y):n},y.on=function(){var t=h.on.apply(h,arguments);return t===h?y:t},y}Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"annotation",function(){return r}),e.d(n,"annotationTypeBase",function(){return D}),e.d(n,"annotationLabel",function(){return I}),e.d(n,"annotationCallout",function(){return X}),e.d(n,"annotationCalloutCurve",function(){return H}),e.d(n,"annotationCalloutElbow",function(){return G}),e.d(n,"annotationCalloutCircle",function(){return W}),e.d(n,"annotationCalloutRect",function(){return Q}),e.d(n,"annotationXYThreshold",function(){return K}),e.d(n,"annotationBadge",function(){return V}),e.d(n,"annotationCustomType",function(){return Y});var i=e(56),a=e(547),o=e(552),u=e(200),c=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")},s=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}(),l=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},f=function t(n,e,r){null===n&&(n=Function.prototype);var i=Object.getOwnPropertyDescriptor(n,e);if(void 0===i){var a=Object.getPrototypeOf(n);return null===a?void 0:t(a,e,r)}if("value"in i)return i.value;var o=i.get;if(void 0!==o)return o.call(r)},d=function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)},h=function(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n},p=function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)},b=function(){function t(n){var e=n.x,r=void 0===e?0:e,i=n.y,a=void 0===i?0:i,o=n.nx,u=n.ny,s=n.dy,l=void 0===s?0:s,f=n.dx,d=void 0===f?0:f,h=n.color,p=void 0===h?"grey":h,b=n.data,v=n.type,y=n.subject,g=n.connector,_=n.note,x=n.disable,m=n.id,w=n.className;c(this,t),this._dx=void 0!==o?o-r:d,this._dy=void 0!==u?u-a:l,this._x=r,this._y=a,this._color=p,this.id=m,this._className=w||"",this.type=v||"",this.data=b,this.note=_||{},this.connector=g||{},this.subject=y||{},this.disable=x||[]}return s(t,[{key:"updatePosition",value:function(){this.type.setPosition&&(this.type.setPosition(),0!==this.type.subject.selectAll(":not(.handle)").nodes().length&&this.type.redrawSubject())}},{key:"updateOffset",value:function(){this.type.setOffset&&(this.type.setOffset(),0!==this.type.connector.selectAll(":not(.handle)").nodes().length&&this.type.redrawConnector(),this.type.redrawNote())}},{key:"className",get:function(){return this._className},set:function(t){this._className=t,this.type.setClassName&&this.type.setClassName()}},{key:"x",get:function(){return this._x},set:function(t){this._x=t,this.updatePosition()}},{key:"y",get:function(){return this._y},set:function(t){this._y=t,this.updatePosition()}},{key:"color",get:function(){return this._color},set:function(t){this._color=t,this.updatePosition()}},{key:"dx",get:function(){return this._dx},set:function(t){this._dx=t,this.updateOffset()}},{key:"dy",get:function(){return this._dy},set:function(t){this._dy=t,this.updateOffset()}},{key:"nx",set:function(t){this._dx=t-this._x,this.updateOffset()}},{key:"ny",set:function(t){this._dy=t-this._y,this.updateOffset()}},{key:"offset",get:function(){return{x:this._dx,y:this._dy}},set:function(t){var n=t.x,e=t.y;this._dx=n,this._dy=e,this.updateOffset()}},{key:"position",get:function(){return{x:this._x,y:this._y}},set:function(t){var n=t.x,e=t.y;this._x=n,this._y=e,this.updatePosition()}},{key:"translation",get:function(){return{x:this._x+this._dx,y:this._y+this._dy}}},{key:"json",get:function(){var t={x:this._x,y:this._y,dx:this._dx,dy:this._dy};return this.data&&Object.keys(this.data).length>0&&(t.data=this.data),this.type&&(t.type=this.type),this._className&&(t.className=this._className),Object.keys(this.connector).length>0&&(t.connector=this.connector),Object.keys(this.subject).length>0&&(t.subject=this.subject),Object.keys(this.note).length>0&&(t.note=this.note),t}}]),t}(),v=function(){function t(n){var e=n.annotations,r=n.accessors,i=n.accessorsInverse;c(this,t),this.accessors=r,this.accessorsInverse=i,this.annotations=e}return s(t,[{key:"clearTypes",value:function(t){this.annotations.forEach(function(n){n.type=void 0,n.subject=t&&t.subject||n.subject,n.connector=t&&t.connector||n.connector,n.note=t&&t.note||n.note})}},{key:"setPositionWithAccessors",value:function(){var t=this;this.annotations.forEach(function(n){n.type.setPositionWithAccessors(t.accessors)})}},{key:"editMode",value:function(t){this.annotations.forEach(function(n){n.type&&(n.type.editMode=t,n.type.updateEditMode())})}},{key:"updateDisable",value:function(t){this.annotations.forEach(function(n){n.disable=t,n.type&&t.forEach(function(t){n.type[t]&&(n.type[t].remove&&n.type[t].remove(),n.type[t]=void 0)})})}},{key:"updateTextWrap",value:function(t){this.annotations.forEach(function(n){n.type&&n.type.updateTextWrap&&n.type.updateTextWrap(t)})}},{key:"updateText",value:function(){this.annotations.forEach(function(t){t.type&&t.type.drawText&&t.type.drawText()})}},{key:"updateNotePadding",value:function(t){this.annotations.forEach(function(n){n.type&&(n.type.notePadding=t)})}},{key:"json",get:function(){var t=this;return this.annotations.map(function(n){var e=n.json;return t.accessorsInverse&&n.data&&(e.data={},Object.keys(t.accessorsInverse).forEach(function(r){e.data[r]=t.accessorsInverse[r]({x:n.x,y:n.y})})),e})}},{key:"noteNodes",get:function(){return this.annotations.map(function(t){return l({},t.type.getNoteBBoxOffset(),{positionX:t.x,positionY:t.y})})}}]),t}(),y=function(t){var n=t.cx,e=void 0===n?0:n,r=t.cy;return{move:{x:e,y:void 0===r?0:r}}},g=function(t){var n=t.cx,e=void 0===n?0:n,r=t.cy,i=void 0===r?0:r,a=t.r1,o=t.r2,u=t.padding,c={move:{x:e,y:i}};return void 0!==a&&(c.r1={x:e+a/Math.sqrt(2),y:i+a/Math.sqrt(2)}),void 0!==o&&(c.r2={x:e+o/Math.sqrt(2),y:i+o/Math.sqrt(2)}),void 0!==u&&(c.padding={x:e+a+u,y:i}),c},_=function(t){var n=t.group,e=t.handles,r=t.r,o=void 0===r?10:r,u=n.selectAll("circle.handle").data(e);u.enter().append("circle").attr("class","handle").attr("fill","grey").attr("fill-opacity",.1).attr("cursor","move").attr("stroke-dasharray",5).attr("stroke","grey").call(Object(a.a)().container(Object(i.d)("g.annotations").node()).on("start",function(t){return t.start&&t.start(t)}).on("drag",function(t){return t.drag&&t.drag(t)}).on("end",function(t){return t.end&&t.end(t)})),n.selectAll("circle.handle").attr("cx",function(t){return t.x}).attr("cy",function(t){return t.y}).attr("r",function(t){return t.r||o}).attr("class",function(t){return"handle "+(t.className||"")}),u.exit().remove()},x=function(t,n){return"dynamic"!==t&&"left"!==t&&"right"!==t||(t=n<0?"top":"bottom"),t},m=function(t,n){return"dynamic"!==t&&"top"!==t&&"bottom"!==t||(t=n<0?"right":"left"),t},w=["topBottom","top","bottom"],j=["leftRight","left","right"],O=function(t){var n=t.padding,e=void 0===n?0:n,r=t.bbox,i=void 0===r?{x:0,y:0,width:0,height:0}:r,a=t.align,o=t.orientation,u=t.offset,c=void 0===u?{x:0,y:0}:u,s=-i.x,l=0;return-1!==w.indexOf(o)?(a=m(a,c.x),c.y<0&&"topBottom"===o||"top"===o?l-=i.height+e:l+=e,"middle"===a?s-=i.width/2:"right"===a&&(s-=i.width)):-1!==j.indexOf(o)&&(a=x(a,c.y),c.x<0&&"leftRight"===o||"left"===o?s-=i.width+e:s+=e,"middle"===a?l-=i.height/2:"top"===a&&(l-=i.height)),{x:s,y:l}},k=function(t){var n=t.data,e=t.curve,r=void 0===e?o.c:e,i=t.canvasContext,a=t.className,u=t.classID,c=Object(o.d)().curve(r),s={type:"path",className:a,classID:u,data:n};return i?(c.context(i),s.pathMethods=c):s.attrs={d:c(n)},s},M=function(t){var n=t.data,e=t.canvasContext,r=t.className,i=t.classID,a={type:"path",className:r,classID:i,data:n},u=Object(o.a)().innerRadius(n.innerRadius||0).outerRadius(n.outerRadius||n.radius||2).startAngle(n.startAngle||0).endAngle(n.endAngle||2*Math.PI);return e?(u.context(e),a.pathMethods=lineGen):a.attrs={d:u()},a},P=function(t){var n=t.align,e=t.x,r=void 0===e?0:e,i=t.y,a=void 0===i?0:i,o=t.bbox,u=t.offset;n=x(n,u.y),"top"===n?a-=o.height:"middle"===n&&(a-=o.height/2);var c=[[r,a],[r,a+o.height]];return{components:[k({data:c,className:"note-line"})]}},A=function(t){var n=t.align,e=t.x,r=void 0===e?0:e,i=t.y,a=void 0===i?0:i,o=t.offset,u=t.bbox;n=m(n,o.x),"right"===n?r-=u.width:"middle"===n&&(r-=u.width/2);var c=[[r,a],[r+u.width,a]];return{components:[k({data:c,className:"note-line"})]}},T=function(t){var n=t.type,e=t.subjectType,r=n.annotation,i=r.position,a=r.x-i.x,o=a+r.dx,u=r.y-i.y,c=u+r.dy,s=r.subject;if("circle"===e&&(s.outerRadius||s.radius)){var l=Math.sqrt((a-o)*(a-o)+(u-c)*(u-c)),f=Math.asin(-c/l),d=s.outerRadius||s.radius+(s.radiusPadding||0);a=Math.abs(Math.cos(f)*d)*(o<0?-1:1),u=Math.abs(Math.sin(f)*d)*(c<0?-1:1)}if("rect"===e){var h=s.width,p=s.height;(h>0&&r.dx>0||h<0&&r.dx<0)&&(a=Math.abs(h)>Math.abs(r.dx)?h/2:h),(p>0&&r.dy>0||p<0&&r.dy<0)&&(u=Math.abs(p)>Math.abs(r.dy)?p/2:p),a===h/2&&u===p/2&&(a=o,u=c)}return[[a,u],[o,c]]},N=function(t){var n=T(t);return{components:[k({data:n,className:"connector"})]}},E=function(t){var n=t.type,e=t.subjectType,r=n.annotation,i=r.position,a=r.x-i.x,o=a+r.dx,u=r.y-i.y,c=u+r.dy,s=r.subject;if("rect"===e){var l=s.width,f=s.height;(l>0&&r.dx>0||l<0&&r.dx<0)&&(a=Math.abs(l)>Math.abs(r.dx)?l/2:l),(f>0&&r.dy>0||f<0&&r.dy<0)&&(u=Math.abs(f)>Math.abs(r.dy)?f/2:f),a===l/2&&u===f/2&&(a=o,u=c)}var d=[[a,u],[o,c]],h=c-u,p=o-a,b=o,v=c,y=c<u&&o>a||o<a&&c>u?-1:1;if(Math.abs(p)<Math.abs(h)?(b=o,v=u+p*y):(v=c,b=a+h*y),"circle"===e&&(s.outerRadius||s.radius)){var g=(s.outerRadius||s.radius)+(s.radiusPadding||0),_=g/Math.sqrt(2);if(Math.abs(p)>_&&Math.abs(h)>_)a=_*(o<0?-1:1),u=_*(c<0?-1:1),d=[[a,u],[b,v],[o,c]];else if(Math.abs(p)>Math.abs(h)){var x=Math.asin(-c/g);a=Math.abs(Math.cos(x)*g)*(o<0?-1:1),d=[[a,c],[o,c]]}else{var m=Math.acos(o/g);u=Math.abs(Math.sin(m)*g)*(c<0?-1:1),d=[[o,u],[o,c]]}}else d=[[a,u],[b,v],[o,c]];return{components:[k({data:d,className:"connector"})]}},S=function(t){var n=t.type,e=t.connectorData,r=t.subjectType;e||(e={}),e.points&&"number"!=typeof e.points||(e.points=C(n.annotation.offset,e.points)),e.curve||(e.curve=o.b);var a=[];if(n.editMode){var u=e.points.map(function(t,n){return l({},y({cx:t[0],cy:t[1]}),{index:n})}),c=function(t){e.points[t][0]+=i.b.dx,e.points[t][1]+=i.b.dy,n.redrawConnector()};a=n.mapHandles(u.map(function(t){return l({},t.move,{drag:c.bind(n,t.index)})}))}var s=T({type:n,subjectType:r});return s=[s[0]].concat(p(e.points),[s[1]]),{components:[k({data:s,curve:e.curve,className:"connector"})],handles:a}},C=function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,e={x:t.x/(n+1),y:t.y/(n+1)},r=[],i=1;i<=n;i++)r.push([e.x*i+i%2*20,e.y*i-i%2*20]);return r},F=function(t){var n=t.annotation,e=t.start,r=t.end,i=t.scale,a=void 0===i?1:i,o=n.position;e=e?[-r[0]+e[0],-r[1]+e[1]]:[n.dx,n.dy],r||(r=[n.x-o.x,n.y-o.y]);var u=r[0],c=r[1],s=e[0],l=e[1],f=10*a,d=16/180*Math.PI,h=Math.atan(l/s);s<0&&(h+=Math.PI);var p=[[u,c],[Math.cos(h+d)*f+u,Math.sin(h+d)*f+c],[Math.cos(h-d)*f+u,Math.sin(h-d)*f+c],[u,c]];return{components:[k({data:p,className:"connector-end connector-arrow",classID:"connector-end"})]}},z=function(t){var n=t.line,e=t.scale,r=void 0===e?1:e,i=M({className:"connector-end connector-dot",classID:"connector-end",data:{radius:3*Math.sqrt(r)}});return i.attrs.transform="translate("+n.data[0][0]+", "+n.data[0][1]+")",{components:[i]}},R=function(t){var n=t.subjectData,e=t.type;n.radius||n.outerRadius||(n.radius=20);var r=[],a=M({data:n,className:"subject"});if(e.editMode){var o=g({r1:a.data.outerRadius||a.data.radius,r2:a.data.innerRadius,padding:n.radiusPadding}),u=function(t){var r=n[t]+i.b.dx*Math.sqrt(2);n[t]=r,e.redrawSubject(),e.redrawConnector()},c=[l({},o.r1,{drag:u.bind(e,void 0!==n.outerRadius?"outerRadius":"radius")})];n.innerRadius&&c.push(l({},o.r2,{drag:u.bind(e,"innerRadius")})),r=e.mapHandles(c)}return a.attrs["fill-opacity"]=0,{components:[a],handles:r}},L=function(t){var n=t.subjectData,e=t.type;n.width||(n.width=100),n.height||(n.height=100);var r=[],a=n.width,o=n.height,u=[[0,0],[a,0],[a,o],[0,o],[0,0]],c=k({data:u,className:"subject"});if(e.editMode){var s=function(){n.width=i.b.x,e.redrawSubject(),e.redrawConnector()},l=function(){n.height=i.b.y,e.redrawSubject(),e.redrawConnector()},f=[{x:a,y:o/2,drag:s.bind(e)},{x:a/2,y:o,drag:l.bind(e)}];r=e.mapHandles(f)}return c.attrs["fill-opacity"]=.1,{components:[c],handles:r}},q=function(t){var n=t.subjectData,e=t.type,r=e.annotation.position,i=(void 0!==n.x1?n.x1:r.x)-r.x,a=(void 0!==n.x2?n.x2:r.x)-r.x,o=(void 0!==n.y1?n.y1:r.y)-r.y,u=(void 0!==n.y2?n.y2:r.y)-r.y;return{components:[k({data:[[i,o],[a,u]],className:"subject"})]}},B=function(t){var n=t.subjectData,e=void 0===n?{}:n,r=t.type,a=void 0===r?{}:r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=a.typeSettings&&a.typeSettings.subject;e.radius||(u&&u.radius?e.radius=u.radius:e.radius=14),e.x||u&&u.x&&(e.x=u.x),e.y||u&&u.y&&(e.y=u.y);var c=[],s=[],l=e.radius,f=.7*l,d=0,h=0,p=Math.sqrt(2)*l,b={xleftcorner:-l,xrightcorner:l,ytopcorner:-l,ybottomcorner:l,xleft:-p,xright:p,ytop:-p,ybottom:p};e.x&&!e.y?d=b["x"+e.x]:e.y&&!e.x?h=b["y"+e.y]:e.x&&e.y&&(d=b["x"+e.x+"corner"],h=b["y"+e.y+"corner"]);var v="translate("+d+", "+h+")",y=M({className:"subject",data:{radius:l}});y.attrs.transform=v,y.attrs.fill=o.color,y.attrs["stroke-linecap"]="round",y.attrs["stroke-width"]="3px";var g=M({className:"subject-ring",data:{outerRadius:l,innerRadius:f}});g.attrs.transform=v,g.attrs["stroke-width"]="3px",g.attrs.fill="white";var _=void 0;if(d&&h||!d&&!h)_=k({className:"subject-pointer",data:[[0,0],[d||0,0],[0,h||0],[0,0]]});else if(d||h){var x=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return t&&t/Math.sqrt(2)/Math.sqrt(2)||n*l/Math.sqrt(2)};_=k({className:"subject-pointer",data:[[0,0],[x(d),x(h)],[x(d,-1),x(h,-1)],[0,0]]})}if(_&&(_.attrs.fill=o.color,_.attrs["stroke-linecap"]="round",_.attrs["stroke-width"]="3px",s.push(_)),a.editMode){var m=function(){e.x=i.b.x<2*-l?"left":i.b.x>2*l?"right":void 0,e.y=i.b.y<2*-l?"top":i.b.y>2*l?"bottom":void 0,a.redrawSubject()},w={x:2*d,y:2*h,drag:m.bind(a)};w.x||w.y||(w.y=-l),c=a.mapHandles([w])}var j=void 0;return e.text&&(j={type:"text",className:"badge-text",attrs:{fill:"white",stroke:"none","font-size":".7em",text:e.text,"text-anchor":"middle",dy:".25em",x:d,y:h}}),s.push(y),s.push(g),s.push(j),{components:s,handles:c}},D=function(){function t(n){var e=n.a,r=n.annotation,i=n.editMode,a=n.dispatcher,o=n.notePadding,u=n.accessors;if(c(this,t),this.a=e,this.note=-1===r.disable.indexOf("note")&&e.select("g.annotation-note"),this.noteContent=this.note&&e.select("g.annotation-note-content"),this.connector=-1===r.disable.indexOf("connector")&&e.select("g.annotation-connector"),this.subject=-1===r.disable.indexOf("subject")&&e.select("g.annotation-subject"),this.dispatcher=a,a){var s=J.bind(null,a,r);s({component:this.note,name:"note"}),s({component:this.connector,name:"connector"}),s({component:this.subject,name:"subject"})}this.annotation=r,this.editMode=r.editMode||i,this.notePadding=void 0!==o?o:3,this.offsetCornerX=0,this.offsetCornerY=0,u&&r.data&&this.init(u)}return s(t,[{key:"init",value:function(t){this.annotation.x||this.mapX(t),this.annotation.y||this.mapY(t)}},{key:"mapY",value:function(t){t.y&&(this.annotation.y=t.y(this.annotation.data))}},{key:"mapX",value:function(t){t.x&&(this.annotation.x=t.x(this.annotation.data))}},{key:"updateEditMode",value:function(){this.a.selectAll("circle.handle").remove()}},{key:"drawOnSVG",value:function(t,n){var e=this;Array.isArray(n)||(n=[n]),n.filter(function(t){return t}).forEach(function(n){var r=n.type,i=n.className,a=n.attrs,o=n.handles,u=n.classID;if("handle"===r)_({group:t,r:a&&a.r,handles:o});else{$(t,[e.annotation],r,i,u);for(var c=t.select(r+"."+(u||i)),s=Object.keys(a),l=[],f=c.node().attributes,d=f.length-1;d>=0;d--){var h=f[d].name;-1===s.indexOf(h)&&"class"!==h&&l.push(h)}s.forEach(function(t){"text"===t?c.text(a[t]):c.attr(t,a[t])}),l.forEach(function(t){return c.attr(t,null)})}})}},{key:"getNoteBBox",value:function(){return nt(this.note,".annotation-note-content text")}},{key:"getNoteBBoxOffset",value:function(){var t=nt(this.note,".annotation-note-content"),n=this.noteContent.attr("transform").split(/\(|\,|\)/g);return t.offsetCornerX=parseFloat(n[1])+this.annotation.dx,t.offsetCornerY=parseFloat(n[2])+this.annotation.dy,t.offsetX=this.annotation.dx,t.offsetY=this.annotation.dy,t}},{key:"drawSubject",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.annotation.subject,r=n.type,i={type:this,subjectData:e},a={};"circle"===r?a=R(i):"rect"===r?a=L(i):"threshold"===r?a=q(i):"badge"===r&&(a=B(i,this.annotation));var o=a,u=o.components,c=void 0===u?[]:u,s=o.handles,l=void 0===s?[]:s;return c.forEach(function(n){n&&n.attrs&&!n.attrs.stroke&&(n.attrs.stroke=t.annotation.color)}),this.editMode&&(l=l.concat(this.mapHandles([{drag:this.dragSubject.bind(this)}])),c.push({type:"handle",handles:l})),c}},{key:"drawConnector",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.annotation.connector,r=e.type||n.type,i={type:this,connectorData:e};i.subjectType=this.typeSettings&&this.typeSettings.subject&&this.typeSettings.subject.type;var a={};a="curve"===r?S(i):"elbow"===r?E(i):N(i);var o=a,u=o.components,c=void 0===u?[]:u,s=o.handles,l=void 0===s?[]:s,f=c[0];f&&(f.attrs.stroke=this.annotation.color,f.attrs.fill="none");var d=e.end||n.end,h={};if("arrow"===d){var p=f.data[1],b=f.data[0];Math.sqrt(Math.pow(p[0]-b[0],2)+Math.pow(p[1]-b[1],2))<5&&f.data[2]&&(p=f.data[2]),h=F({annotation:this.annotation,start:p,end:b,scale:e.endScale})}else"dot"===d&&(h=z({line:f,scale:e.endScale}));return h.components&&(h.components.forEach(function(n){n.attrs.fill=t.annotation.color,n.attrs.stroke=t.annotation.color}),c=c.concat(h.components)),this.editMode&&0!==l.length&&c.push({type:"handle",handles:l}),c}},{key:"drawNote",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.annotation.note,r=e.align||n.align||"dynamic",i={bbox:n.bbox,align:r,offset:this.annotation.offset},a=e.lineType||n.lineType,o={};"vertical"===a?o=P(i):"horizontal"===a&&(o=A(i));var u=o,c=u.components,s=void 0===c?[]:c,l=u.handles,f=void 0===l?[]:l;return s.forEach(function(n){n.attrs.stroke=t.annotation.color}),this.editMode&&(f=this.mapHandles([{x:0,y:0,drag:this.dragNote.bind(this)}]),s.push({type:"handle",handles:f})),s}},{key:"drawNoteContent",value:function(t){var n=this.annotation.note,e=void 0!==n.padding?n.padding:this.notePadding,r=n.orientation||t.orientation||"topBottom",i=n.lineType||t.lineType,a=n.align||t.align||"dynamic";"vertical"===i?r="leftRight":"horizontal"===i&&(r="topBottom");var o={padding:e,bbox:t.bbox,offset:this.annotation.offset,orientation:r,align:a},u=O(o),c=u.x,s=u.y;return this.offsetCornerX=c+this.annotation.dx,this.offsetCornerY=s+this.annotation.dy,this.note&&this.noteContent.attr("transform","translate("+c+", "+s+")"),[]}},{key:"drawOnScreen",value:function(t,n){return this.drawOnSVG(t,n)}},{key:"redrawSubject",value:function(){this.subject&&this.drawOnScreen(this.subject,this.drawSubject())}},{key:"redrawConnector",value:function(){this.connector&&this.drawOnScreen(this.connector,this.drawConnector())}},{key:"redrawNote",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getNoteBBox();this.noteContent&&this.drawOnScreen(this.noteContent,this.drawNoteContent({bbox:t})),this.note&&this.drawOnScreen(this.note,this.drawNote({bbox:t}))}},{key:"setPosition",value:function(){var t=this.annotation.position;this.a.attr("transform","translate("+t.x+", "+t.y+")")}},{key:"setOffset",value:function(){if(this.note){var t=this.annotation.offset;this.note.attr("transform","translate("+t.x+", "+t.y+")")}}},{key:"setPositionWithAccessors",value:function(t){t&&this.annotation.data&&(this.mapX(t),this.mapY(t)),this.setPosition()}},{key:"setClassName",value:function(){this.a.attr("class","annotation "+(this.className&&this.className())+" "+(this.editMode?"editable":"")+" "+(this.annotation.className||""))}},{key:"draw",value:function(){this.setClassName(),this.setPosition(),this.setOffset(),this.redrawSubject(),this.redrawConnector(),this.redrawNote()}},{key:"dragstarted",value:function(){i.b.sourceEvent.stopPropagation(),this.dispatcher&&this.dispatcher.call("dragstart",this.a,this.annotation),this.a.classed("dragging",!0),this.a.selectAll("circle.handle").style("pointer-events","none")}},{key:"dragended",value:function(){this.dispatcher&&this.dispatcher.call("dragend",this.a,this.annotation),this.a.classed("dragging",!1),this.a.selectAll("circle.handle").style("pointer-events","all")}},{key:"dragSubject",value:function(){var t=this.annotation.position;t.x+=i.b.dx,t.y+=i.b.dy,this.annotation.position=t}},{key:"dragNote",value:function(){var t=this.annotation.offset;t.x+=i.b.dx,t.y+=i.b.dy,this.annotation.offset=t}},{key:"mapHandles",value:function(t){var n=this;return t.map(function(t){return l({},t,{start:n.dragstarted.bind(n),end:n.dragended.bind(n)})})}}]),t}(),Y=function(t,n,e){return function(t){function r(t){c(this,r);var e=h(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,t));return e.typeSettings=n,n.disable&&n.disable.forEach(function(t){e[t]=void 0,"note"===t&&(e.noteContent=void 0)}),e}return d(r,t),s(r,[{key:"className",value:function(){return""+(n.className||f(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"className",this)&&f(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"className",this).call(this)||"")}},{key:"drawSubject",value:function(t){return this.typeSettings.subject=l({},n.subject,this.typeSettings.subject),f(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"drawSubject",this).call(this,l({},t,this.typeSettings.subject))}},{key:"drawConnector",value:function(t){return this.typeSettings.connector=l({},n.connector,this.typeSettings.connector),f(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"drawConnector",this).call(this,l({},t,n.connector,this.typeSettings.connector))}},{key:"drawNote",value:function(t){return this.typeSettings.note=l({},n.note,this.typeSettings.note),f(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"drawNote",this).call(this,l({},t,n.note,this.typeSettings.note))}},{key:"drawNoteContent",value:function(t){return f(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"drawNoteContent",this).call(this,l({},t,n.note,this.typeSettings.note))}}],[{key:"init",value:function(t,n){return f(r.__proto__||Object.getPrototypeOf(r),"init",this).call(this,t,n),e&&(t=e(t,n)),t}}]),r}(t)},U=function(t){function n(t){c(this,n);var e=h(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.textWrap=t.textWrap||120,e.drawText(),e}return d(n,t),s(n,[{key:"updateTextWrap",value:function(t){this.textWrap=t,this.drawText()}},{key:"drawText",value:function(){if(this.note){$(this.note,[this.annotation],"g","annotation-note-content");var t=this.note.select("g.annotation-note-content");$(t,[this.annotation],"rect","annotation-note-bg"),$(t,[this.annotation],"text","annotation-note-label"),$(t,[this.annotation],"text","annotation-note-title");var n={height:0},e=this.a.select("text.annotation-note-label"),r=this.annotation.note&&this.annotation.note.wrap||this.typeSettings&&this.typeSettings.note&&this.typeSettings.note.wrap||this.textWrap,i=this.annotation.note&&this.annotation.note.wrapSplitter||this.typeSettings&&this.typeSettings.note&&this.typeSettings.note.wrapSplitter;if(this.annotation.note.title){var a=this.a.select("text.annotation-note-title");a.text(this.annotation.note.title),a.attr("fill",this.annotation.color),a.attr("font-weight","bold"),a.call(tt,r,i),n=a.node().getBBox()}e.text(this.annotation.note.label).attr("dx","0"),e.call(tt,r,i),e.attr("y",1.1*n.height||0),e.attr("fill",this.annotation.color);var o=this.getNoteBBox();this.a.select("rect.annotation-note-bg").attr("width",o.width).attr("height",o.height).attr("x",o.x).attr("fill","white").attr("fill-opacity",0)}}}]),n}(D),I=Y(U,{className:"label",note:{align:"middle"}}),X=Y(U,{className:"callout",note:{lineType:"horizontal"}}),G=Y(X,{className:"callout elbow",connector:{type:"elbow"}}),H=Y(X,{className:"callout curve",connector:{type:"curve"}}),V=Y(D,{className:"badge",subject:{type:"badge"},disable:["connector","note"]}),W=Y(G,{className:"callout circle",subject:{type:"circle"}}),Q=Y(G,{className:"callout rect",subject:{type:"rect"}}),Z=function(t){function n(){return c(this,n),h(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return d(n,t),s(n,[{key:"mapY",value:function(t){f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"mapY",this).call(this,t);var e=this.annotation;(e.subject.x1||e.subject.x2)&&e.data&&t.y&&(e.y=t.y(e.data)),!e.subject.x1&&!e.subject.x2||e.x||(e.x=e.subject.x1||e.subject.x2)}},{key:"mapX",value:function(t){f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"mapX",this).call(this,t);var e=this.annotation;(e.subject.y1||e.subject.y2)&&e.data&&t.x&&(e.x=t.x(e.data)),!e.subject.y1&&!e.subject.y2||e.y||(e.y=e.subject.y1||e.subject.y2)}}]),n}(X),K=Y(Z,{className:"callout xythreshold",subject:{type:"threshold"}}),$=function(t,n,e,r,i){var a=t.selectAll(e+"."+(i||r)).data(n);return a.enter().append(e).merge(a).attr("class",r),a.exit().remove(),t},J=function(t,n,e){var r=e.component,i=e.name;r&&r.on("mouseover.annotations",function(){t.call(i+"over",r,n)}).on("mouseout.annotations",function(){return t.call(i+"out",r,n)}).on("click.annotations",function(){return t.call(i+"click",r,n)})},tt=function(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1.2;t.each(function(){for(var t=Object(i.d)(this),a=t.text().split(e||/[ \t\r\n]+/).reverse().filter(function(t){return""!==t}),o=void 0,u=[],c=t.text(null).append("tspan").attr("x",0).attr("dy","0.8em");o=a.pop();)u.push(o),c.text(u.join(" ")),c.node().getComputedTextLength()>n&&u.length>1&&(u.pop(),c.text(u.join(" ")),u=[o],c=t.append("tspan").attr("x",0).attr("dy",r+"em").text(o))})},nt=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:":not(.handle)";return t?t.selectAll(n).nodes().reduce(function(t,n){var e=n.getBBox();t.x=Math.min(t.x,e.x),t.y=Math.min(t.y,e.y),t.width=Math.max(t.width,e.width);var r=n&&n.attributes&&n.attributes.y;return t.height=Math.max(t.height,(r&&parseFloat(r.value)||0)+e.height),t},{x:0,y:0,width:0,height:0}):{x:0,y:0,width:0,height:0}},et={annotation:r,annotationTypeBase:D,annotationLabel:I,annotationCallout:X,annotationCalloutCurve:H,annotationCalloutElbow:G,annotationCalloutCircle:W,annotationCalloutRect:Q,annotationXYThreshold:K,annotationBadge:V,annotationCustomType:Y};n.default=et},function(t,n,e){"use strict";function r(){return new i}function i(){this._="@"+(++a).toString(36)}var a=0;i.prototype=r.prototype={constructor:i,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}}},function(t,n,e){"use strict";var r=e(105),i=e(107);n.a=function(t){var n=Object(r.a)();return n.changedTouches&&(n=n.changedTouches[0]),Object(i.a)(t,n)}},function(t,n,e){"use strict";var r=e(8);n.a=function(t){return"string"==typeof t?new r.a([[document.querySelector(t)]],[document.documentElement]):new r.a([[t]],r.b)}},function(t,n,e){"use strict";var r=e(8),i=e(108);n.a=function(t){"function"!=typeof t&&(t=Object(i.a)(t));for(var n=this._groups,e=n.length,a=new Array(e),o=0;o<e;++o)for(var u,c,s=n[o],l=s.length,f=a[o]=new Array(l),d=0;d<l;++d)(u=s[d])&&(c=t.call(u,u.__data__,d,s))&&("__data__"in u&&(c.__data__=u.__data__),f[d]=c);return new r.a(a,this._parents)}},function(t,n,e){"use strict";var r=e(8),i=e(197);n.a=function(t){"function"!=typeof t&&(t=Object(i.a)(t));for(var n=this._groups,e=n.length,a=[],o=[],u=0;u<e;++u)for(var c,s=n[u],l=s.length,f=0;f<l;++f)(c=s[f])&&(a.push(t.call(c,c.__data__,f,s)),o.push(c));return new r.a(a,o)}},function(t,n,e){"use strict";var r=e(8),i=e(196);n.a=function(t){"function"!=typeof t&&(t=Object(i.a)(t));for(var n=this._groups,e=n.length,a=new Array(e),o=0;o<e;++o)for(var u,c=n[o],s=c.length,l=a[o]=[],f=0;f<s;++f)(u=c[f])&&t.call(u,u.__data__,f,c)&&l.push(u);return new r.a(a,this._parents)}},function(t,n,e){"use strict";function r(t,n,e,r,i,a){for(var u,c=0,s=n.length,l=a.length;c<l;++c)(u=n[c])?(u.__data__=a[c],r[c]=u):e[c]=new o.a(t,a[c]);for(;c<s;++c)(u=n[c])&&(i[c]=u)}function i(t,n,e,r,i,a,u){var s,l,f,d={},h=n.length,p=a.length,b=new Array(h);for(s=0;s<h;++s)(l=n[s])&&(b[s]=f=c+u.call(l,l.__data__,s,n),f in d?i[s]=l:d[f]=l);for(s=0;s<p;++s)f=c+u.call(t,a[s],s,a),(l=d[f])?(r[s]=l,l.__data__=a[s],d[f]=null):e[s]=new o.a(t,a[s]);for(s=0;s<h;++s)(l=n[s])&&d[b[s]]===l&&(i[s]=l)}var a=e(8),o=e(198),u=e(520),c="$";n.a=function(t,n){if(!t)return y=new Array(this.size()),h=-1,this.each(function(t){y[++h]=t}),y;var e=n?i:r,o=this._parents,c=this._groups;"function"!=typeof t&&(t=Object(u.a)(t));for(var s=c.length,l=new Array(s),f=new Array(s),d=new Array(s),h=0;h<s;++h){var p=o[h],b=c[h],v=b.length,y=t.call(p,p&&p.__data__,h,o),g=y.length,_=f[h]=new Array(g),x=l[h]=new Array(g);e(p,b,_,x,d[h]=new Array(v),y,n);for(var m,w,j=0,O=0;j<g;++j)if(m=_[j]){for(j>=O&&(O=j+1);!(w=x[O])&&++O<g;);m._next=w||null}}return l=new a.a(l,o),l._enter=f,l._exit=d,l}},function(t,n,e){"use strict";n.a=function(t){return function(){return t}}},function(t,n,e){"use strict";var r=e(199),i=e(8);n.a=function(){return new i.a(this._exit||this._groups.map(r.a),this._parents)}},function(t,n,e){"use strict";var r=e(8);n.a=function(t){for(var n=this._groups,e=t._groups,i=n.length,a=e.length,o=Math.min(i,a),u=new Array(i),c=0;c<o;++c)for(var s,l=n[c],f=e[c],d=l.length,h=u[c]=new Array(d),p=0;p<d;++p)(s=l[p]||f[p])&&(h[p]=s);for(;c<i;++c)u[c]=n[c];return new r.a(u,this._parents)}},function(t,n,e){"use strict";n.a=function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],a=i.length-1,o=i[a];--a>=0;)(r=i[a])&&(o&&o!==r.nextSibling&&o.parentNode.insertBefore(r,o),o=r);return this}},function(t,n,e){"use strict";function r(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}var i=e(8);n.a=function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=r);for(var e=this._groups,a=e.length,o=new Array(a),u=0;u<a;++u){for(var c,s=e[u],l=s.length,f=o[u]=new Array(l),d=0;d<l;++d)(c=s[d])&&(f[d]=c);f.sort(n)}return new i.a(o,this._parents).order()}},function(t,n,e){"use strict";n.a=function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}},function(t,n,e){"use strict";n.a=function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t}},function(t,n,e){"use strict";n.a=function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,a=r.length;i<a;++i){var o=r[i];if(o)return o}return null}},function(t,n,e){"use strict";n.a=function(){var t=0;return this.each(function(){++t}),t}},function(t,n,e){"use strict";n.a=function(){return!this.node()}},function(t,n,e){"use strict";n.a=function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,a=n[e],o=0,u=a.length;o<u;++o)(i=a[o])&&t.call(i,i.__data__,o,a);return this}},function(t,n,e){"use strict";function r(t){return function(){this.removeAttribute(t)}}function i(t){return function(){this.removeAttributeNS(t.space,t.local)}}function a(t,n){return function(){this.setAttribute(t,n)}}function o(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function u(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function c(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}var s=e(103);n.a=function(t,n){var e=Object(s.a)(t);if(arguments.length<2){var l=this.node();return e.local?l.getAttributeNS(e.space,e.local):l.getAttribute(e)}return this.each((null==n?e.local?i:r:"function"==typeof n?e.local?c:u:e.local?o:a)(e,n))}},function(t,n,e){"use strict";function r(t){return function(){this.style.removeProperty(t)}}function i(t,n,e){return function(){this.style.setProperty(t,n,e)}}function a(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}var o=e(109);n.a=function(t,n,e){var u;return arguments.length>1?this.each((null==n?r:"function"==typeof n?a:i)(t,n,null==e?"":e)):Object(o.a)(u=this.node()).getComputedStyle(u,null).getPropertyValue(t)}},function(t,n,e){"use strict";function r(t){return function(){delete this[t]}}function i(t,n){return function(){this[t]=n}}function a(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}n.a=function(t,n){return arguments.length>1?this.each((null==n?r:"function"==typeof n?a:i)(t,n)):this.node()[t]}},function(t,n,e){"use strict";function r(t){return t.trim().split(/^|\s+/)}function i(t){return t.classList||new a(t)}function a(t){this._node=t,this._names=r(t.getAttribute("class")||"")}function o(t,n){for(var e=i(t),r=-1,a=n.length;++r<a;)e.add(n[r])}function u(t,n){for(var e=i(t),r=-1,a=n.length;++r<a;)e.remove(n[r])}function c(t){return function(){o(this,t)}}function s(t){return function(){u(this,t)}}function l(t,n){return function(){(n.apply(this,arguments)?o:u)(this,t)}}a.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}},n.a=function(t,n){var e=r(t+"");if(arguments.length<2){for(var a=i(this.node()),o=-1,u=e.length;++o<u;)if(!a.contains(e[o]))return!1;return!0}return this.each(("function"==typeof n?l:n?c:s)(e,n))}},function(t,n,e){"use strict";function r(){this.textContent=""}function i(t){return function(){this.textContent=t}}function a(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}n.a=function(t){return arguments.length?this.each(null==t?r:("function"==typeof t?a:i)(t)):this.node().textContent}},function(t,n,e){"use strict";function r(){this.innerHTML=""}function i(t){return function(){this.innerHTML=t}}function a(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}n.a=function(t){return arguments.length?this.each(null==t?r:("function"==typeof t?a:i)(t)):this.node().innerHTML}},function(t,n,e){"use strict";function r(){this.nextSibling&&this.parentNode.appendChild(this)}n.a=function(){return this.each(r)}},function(t,n,e){"use strict";function r(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}n.a=function(){return this.each(r)}},function(t,n,e){"use strict";var r=e(102);n.a=function(t){var n="function"==typeof t?t:Object(r.a)(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})}},function(t,n,e){"use strict";function r(){return null}var i=e(102),a=e(108);n.a=function(t,n){var e="function"==typeof t?t:Object(i.a)(t),o=null==n?r:"function"==typeof n?n:Object(a.a)(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),o.apply(this,arguments)||null)})}},function(t,n,e){"use strict";function r(){var t=this.parentNode;t&&t.removeChild(this)}n.a=function(){return this.each(r)}},function(t,n,e){"use strict";n.a=function(t){return arguments.length?this.property("__data__",t):this.node().__data__}},function(t,n,e){"use strict";function r(t,n,e){var r=Object(o.a)(t),i=r.CustomEvent;i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function i(t,n){return function(){return r(this,t,n)}}function a(t,n){return function(){return r(this,t,n.apply(this,arguments))}}var o=e(109);n.a=function(t,n){return this.each(("function"==typeof n?a:i)(t,n))}},function(t,n,e){"use strict";e(8)},function(t,n,e){"use strict";var r=e(105),i=e(107);n.a=function(t,n,e){arguments.length<3&&(e=n,n=Object(r.a)().changedTouches);for(var a,o=0,u=n?n.length:0;o<u;++o)if((a=n[o]).identifier===e)return Object(i.a)(t,a);return null}},function(t,n,e){"use strict";e(105),e(107)},function(t,n,e){"use strict";var r=e(548);e.d(n,"a",function(){return r.a});e(201)},function(t,n,e){"use strict";function r(){return!u.b.button}function i(){return this.parentNode}function a(t){return null==t?{x:u.b.x,y:u.b.y}:t}var o=e(200),u=e(56),c=e(201),s=e(202),l=e(550),f=e(551);n.a=function(){function t(t){t.on("mousedown.drag",n).on("touchstart.drag",h).on("touchmove.drag",p).on("touchend.drag touchcancel.drag",b).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function n(){if(!g&&_.apply(this,arguments)){var t=v("mouse",x.apply(this,arguments),u.c,this,arguments);t&&(Object(u.d)(u.b.view).on("mousemove.drag",e,!0).on("mouseup.drag",d,!0),Object(c.a)(u.b.view),Object(s.b)(),y=!1,t("start"))}}function e(){Object(s.a)(),y=!0,w.mouse("drag")}function d(){Object(u.d)(u.b.view).on("mousemove.drag mouseup.drag",null),Object(c.b)(u.b.view,y),Object(s.a)(),w.mouse("end")}function h(){if(_.apply(this,arguments)){var t,n,e=u.b.changedTouches,r=x.apply(this,arguments),i=e.length;for(t=0;t<i;++t)(n=v(e[t].identifier,r,u.e,this,arguments))&&(Object(s.b)(),n("start"))}}function p(){var t,n,e=u.b.changedTouches,r=e.length;for(t=0;t<r;++t)(n=w[e[t].identifier])&&(Object(s.a)(),n("drag"))}function b(){var t,n,e=u.b.changedTouches,r=e.length;for(g&&clearTimeout(g),g=setTimeout(function(){g=null},500),t=0;t<r;++t)(n=w[e[t].identifier])&&(Object(s.b)(),n("end"))}function v(n,e,r,i,a){var o,c,s,l=r(e,n),d=j.copy();if(Object(u.a)(new f.a(t,"beforestart",o,n,O,l[0],l[1],0,0,d),function(){return null!=(u.b.subject=o=m.apply(i,a))&&(c=o.x-l[0]||0,s=o.y-l[1]||0,!0)}))return function h(p){var b,v=l;switch(p){case"start":w[n]=h,b=O++;break;case"end":delete w[n],--O;case"drag":l=r(e,n),b=O}Object(u.a)(new f.a(t,p,o,n,b,l[0]+c,l[1]+s,l[0]-v[0],l[1]-v[1],d),d.apply,d,[p,i,a])}}var y,g,_=r,x=i,m=a,w={},j=Object(o.a)("start","drag","end"),O=0;return t.filter=function(n){return arguments.length?(_="function"==typeof n?n:Object(l.a)(!!n),t):_},t.container=function(n){return arguments.length?(x="function"==typeof n?n:Object(l.a)(n),t):x},t.subject=function(n){return arguments.length?(m="function"==typeof n?n:Object(l.a)(n),t):m},t.on=function(){var n=j.on.apply(j,arguments);return n===j?t:n},t}},function(t,n,e){"use strict";function r(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r)throw new Error("illegal type: "+t);r[t]=[]}return new i(r)}function i(t){this._=t}function a(t,n){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})}function o(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function u(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=c,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}var c={value:function(){}};i.prototype=r.prototype={constructor:i,on:function(t,n){var e,r=this._,i=a(t+"",r),c=-1,s=i.length;{if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++c<s;)if(e=(t=i[c]).type)r[e]=u(r[e],t.name,n);else if(null==n)for(e in r)r[e]=u(r[e],t.name,null);return this}for(;++c<s;)if((e=(t=i[c]).type)&&(e=o(r[e],t.name)))return e}},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new i(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),a=0;a<e;++a)i[a]=arguments[a+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(r=this._[t],a=0,e=r.length;a<e;++a)r[a].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,a=r.length;i<a;++i)r[i].value.apply(n,e)}},n.a=r},function(t,n,e){"use strict";n.a=function(t){return function(){return t}}},function(t,n,e){"use strict";function r(t,n,e,r,i,a,o,u,c,s){this.target=t,this.type=n,this.subject=e,this.identifier=r,this.active=i,this.x=a,this.y=o,this.dx=u,this.dy=c,this._=s}n.a=r,r.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t}},function(t,n,e){"use strict";var r=e(553);e.d(n,"a",function(){return r.a});var i=(e(203),e(110));e.d(n,"d",function(){return i.a});var a=(e(554),e(557),e(206),e(558),e(207),e(208),e(209),e(211),e(210),e(212),e(213),e(559),e(560),e(59),e(561),e(214),e(215),e(60),e(562),e(563),e(111));e.d(n,"b",function(){return a.a});var o=(e(564),e(57));e.d(n,"c",function(){return o.a});e(565),e(566),e(567),e(568),e(570),e(38),e(571),e(572),e(112),e(573),e(574),e(39),e(575)},function(t,n,e){"use strict";function r(t){return t.innerRadius}function i(t){return t.outerRadius}function a(t){return t.startAngle}function o(t){return t.endAngle}function u(t){return t&&t.padAngle}function c(t){return t>=1?h.b:t<=-1?-h.b:Math.asin(t)}function s(t,n,e,r,i,a,o,u){var c=e-t,s=r-n,l=o-i,f=u-a,d=(l*(n-a)-f*(t-i))/(f*c-l*s);return[t+d*c,n+d*s]}function l(t,n,e,r,i,a,o){var u=t-e,c=n-r,s=(o?a:-a)/Math.sqrt(u*u+c*c),l=s*c,f=-s*u,d=t+l,h=n+f,p=e+l,b=r+f,v=(d+p)/2,y=(h+b)/2,g=p-d,_=b-h,x=g*g+_*_,m=i-a,w=d*b-p*h,j=(_<0?-1:1)*Math.sqrt(Math.max(0,m*m*x-w*w)),O=(w*_-g*j)/x,k=(-w*g-_*j)/x,M=(w*_+g*j)/x,P=(-w*g+_*j)/x,A=O-v,T=k-y,N=M-v,E=P-y;return A*A+T*T>N*N+E*E&&(O=M,k=P),{cx:O,cy:k,x01:-l,y01:-f,x11:O*(i/m-1),y11:k*(i/m-1)}}var f=e(7),d=e(24),h=e(37);n.a=function(){function t(){var t,r,i=+n.apply(this,arguments),a=+e.apply(this,arguments),o=v.apply(this,arguments)-h.b,u=y.apply(this,arguments)-h.b,d=Math.abs(u-o),x=u>o;if(_||(_=t=Object(f.a)()),a<i&&(r=a,a=i,i=r),a>h.a)if(d>h.d-h.a)_.moveTo(a*Math.cos(o),a*Math.sin(o)),_.arc(0,0,a,o,u,!x),i>h.a&&(_.moveTo(i*Math.cos(u),i*Math.sin(u)),_.arc(0,0,i,u,o,x));else{var m,w,j=o,O=u,k=o,M=u,P=d,A=d,T=g.apply(this,arguments)/2,N=T>h.a&&(b?+b.apply(this,arguments):Math.sqrt(i*i+a*a)),E=Math.min(Math.abs(a-i)/2,+p.apply(this,arguments)),S=E,C=E;if(N>h.a){var F=c(N/i*Math.sin(T)),z=c(N/a*Math.sin(T));(P-=2*F)>h.a?(F*=x?1:-1,k+=F,M-=F):(P=0,k=M=(o+u)/2),(A-=2*z)>h.a?(z*=x?1:-1,j+=z,O-=z):(A=0,j=O=(o+u)/2)}var R=a*Math.cos(j),L=a*Math.sin(j),q=i*Math.cos(M),B=i*Math.sin(M);if(E>h.a){var D=a*Math.cos(O),Y=a*Math.sin(O),U=i*Math.cos(k),I=i*Math.sin(k);if(d<h.c){var X=P>h.a?s(R,L,U,I,D,Y,q,B):[q,B],G=R-X[0],H=L-X[1],V=D-X[0],W=Y-X[1],Q=1/Math.sin(Math.acos((G*V+H*W)/(Math.sqrt(G*G+H*H)*Math.sqrt(V*V+W*W)))/2),Z=Math.sqrt(X[0]*X[0]+X[1]*X[1]);S=Math.min(E,(i-Z)/(Q-1)),C=Math.min(E,(a-Z)/(Q+1))}}A>h.a?C>h.a?(m=l(U,I,R,L,a,C,x),w=l(D,Y,q,B,a,C,x),_.moveTo(m.cx+m.x01,m.cy+m.y01),C<E?_.arc(m.cx,m.cy,C,Math.atan2(m.y01,m.x01),Math.atan2(w.y01,w.x01),!x):(_.arc(m.cx,m.cy,C,Math.atan2(m.y01,m.x01),Math.atan2(m.y11,m.x11),!x),_.arc(0,0,a,Math.atan2(m.cy+m.y11,m.cx+m.x11),Math.atan2(w.cy+w.y11,w.cx+w.x11),!x),_.arc(w.cx,w.cy,C,Math.atan2(w.y11,w.x11),Math.atan2(w.y01,w.x01),!x))):(_.moveTo(R,L),_.arc(0,0,a,j,O,!x)):_.moveTo(R,L),i>h.a&&P>h.a?S>h.a?(m=l(q,B,D,Y,i,-S,x),w=l(R,L,U,I,i,-S,x),_.lineTo(m.cx+m.x01,m.cy+m.y01),S<E?_.arc(m.cx,m.cy,S,Math.atan2(m.y01,m.x01),Math.atan2(w.y01,w.x01),!x):(_.arc(m.cx,m.cy,S,Math.atan2(m.y01,m.x01),Math.atan2(m.y11,m.x11),!x),_.arc(0,0,i,Math.atan2(m.cy+m.y11,m.cx+m.x11),Math.atan2(w.cy+w.y11,w.cx+w.x11),x),_.arc(w.cx,w.cy,S,Math.atan2(w.y11,w.x11),Math.atan2(w.y01,w.x01),!x))):_.arc(0,0,i,M,k,x):_.lineTo(q,B)}else _.moveTo(0,0);if(_.closePath(),t)return _=null,t+""||null}var n=r,e=i,p=Object(d.a)(0),b=null,v=a,y=o,g=u,_=null;return t.centroid=function(){var t=(+n.apply(this,arguments)+ +e.apply(this,arguments))/2,r=(+v.apply(this,arguments)+ +y.apply(this,arguments))/2-h.c/2;return[Math.cos(r)*t,Math.sin(r)*t]},t.innerRadius=function(e){return arguments.length?(n="function"==typeof e?e:Object(d.a)(+e),t):n},t.outerRadius=function(n){return arguments.length?(e="function"==typeof n?n:Object(d.a)(+n),t):e},t.cornerRadius=function(n){return arguments.length?(p="function"==typeof n?n:Object(d.a)(+n),t):p},t.padRadius=function(n){return arguments.length?(b=null==n?null:"function"==typeof n?n:Object(d.a)(+n),t):b},t.startAngle=function(n){return arguments.length?(v="function"==typeof n?n:Object(d.a)(+n),t):v},t.endAngle=function(n){return arguments.length?(y="function"==typeof n?n:Object(d.a)(+n),t):y},t.padAngle=function(n){return arguments.length?(g="function"==typeof n?n:Object(d.a)(+n),t):g},t.context=function(n){return arguments.length?(_=null==n?null:n,t):_},t}},function(t,n,e){"use strict";e(24),e(555),e(556),e(37)},function(t,n,e){"use strict";n.a=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}},function(t,n,e){"use strict";n.a=function(t){return t}},function(t,n,e){"use strict";e(205),e(203),e(206)},function(t,n,e){"use strict";var r=(e(7),e(207)),i=e(208),a=e(209),o=e(210),u=e(211),c=e(212),s=e(213);e(24),r.a,i.a,a.a,u.a,o.a,c.a,s.a},function(t,n,e){"use strict";function r(t){this._context=t}var i=e(58),a=e(59);r.prototype={areaStart:i.a,areaEnd:i.a,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:Object(a.b)(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}}},function(t,n,e){"use strict";function r(t){this._context=t}var i=e(59);r.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var e=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 3:this._point=4;default:Object(i.b)(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}}},function(t,n,e){"use strict";function r(t,n){this._basis=new i.a(t),this._beta=n}var i=e(59);r.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,e=t.length-1;if(e>0)for(var r,i=t[0],a=n[0],o=t[e]-i,u=n[e]-a,c=-1;++c<=e;)r=c/e,this._basis.point(this._beta*t[c]+(1-this._beta)*(i+r*o),this._beta*n[c]+(1-this._beta)*(a+r*u));this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}};!function t(n){function e(t){return 1===n?new i.a(t):new r(t,n)}return e.beta=function(n){return t(+n)},e}(.85)},function(t,n,e){"use strict";function r(t,n){this._context=t,this._alpha=n}var i=e(214),a=e(58),o=e(111);r.prototype={areaStart:a.a,areaEnd:a.a,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:Object(o.b)(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};!function t(n){function e(t){return n?new r(t,n):new i.a(t,0)}return e.alpha=function(n){return t(+n)},e}(.5)},function(t,n,e){"use strict";function r(t,n){this._context=t,this._alpha=n}var i=e(215),a=e(111);r.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Object(a.b)(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};!function t(n){function e(t){return n?new r(t,n):new i.a(t,0)}return e.alpha=function(n){return t(+n)},e}(.5)},function(t,n,e){"use strict";function r(t){this._context=t}var i=e(58);r.prototype={areaStart:i.a,areaEnd:i.a,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}}},function(t,n,e){"use strict";function r(t){return t<0?-1:1}function i(t,n,e){var i=t._x1-t._x0,a=n-t._x1,o=(t._y1-t._y0)/(i||a<0&&-0),u=(e-t._y1)/(a||i<0&&-0),c=(o*a+u*i)/(i+a);return(r(o)+r(u))*Math.min(Math.abs(o),Math.abs(u),.5*Math.abs(c))||0}function a(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function o(t,n,e){var r=t._x0,i=t._y0,a=t._x1,o=t._y1,u=(a-r)/3;t._context.bezierCurveTo(r+u,i+u*n,a-u,o-u*e,a,o)}function u(t){this._context=t}function c(t){this._context=new s(t)}function s(t){this._context=t}u.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:o(this,this._t0,a(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN;if(t=+t,n=+n,t!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,o(this,a(this,e=i(this,t,n)),e);break;default:o(this,this._t0,e=i(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(c.prototype=Object.create(u.prototype)).point=function(t,n){u.prototype.point.call(this,n,t)},s.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,i,a){this._context.bezierCurveTo(n,t,r,e,a,i)}}},function(t,n,e){"use strict";function r(t){this._context=t}function i(t){var n,e,r=t.length-1,i=new Array(r),a=new Array(r),o=new Array(r);for(i[0]=0,a[0]=2,o[0]=t[0]+2*t[1],n=1;n<r-1;++n)i[n]=1,a[n]=4,o[n]=4*t[n]+2*t[n+1];for(i[r-1]=2,a[r-1]=7,o[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)e=i[n]/a[n-1],a[n]-=e,o[n]-=e*o[n-1];for(i[r-1]=o[r-1]/a[r-1],n=r-2;n>=0;--n)i[n]=(o[n]-i[n+1])/a[n];for(a[r-1]=(t[r]+i[r-1])/2,n=0;n<r-1;++n)a[n]=2*t[n+1]-i[n+1];return[i,a]}r.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,e=t.length;if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1]);else for(var r=i(t),a=i(n),o=0,u=1;u<e;++o,++u)this._context.bezierCurveTo(r[0][o],a[0][o],r[1][o],a[1][o],t[u],n[u]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}}},function(t,n,e){"use strict";function r(t,n){this._context=t,this._t=n}r.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var e=this._x*(1-this._t)+t*this._t;this._context.lineTo(e,this._y),this._context.lineTo(e,n)}}this._x=t,this._y=n}}},function(t,n,e){"use strict";e(569),e(24),e(38),e(39)},function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=Array.prototype.slice},function(t,n,e){"use strict";e(38)},function(t,n,e){"use strict";e(38)},function(t,n,e){"use strict";e(38)},function(t,n,e){"use strict";e(112)},function(t,n,e){"use strict";e(39),e(112)},function(t,n,e){"use strict";e(39)},function(t,n,e){!function(t,r){r(n,e(4))}(0,function(t,n){"use strict";function e(t,n){function e(t,n){if(1===t.length)r.push(t[0]),i.push(t[0]);else{for(var a=Array(t.length-1),o=0;o<a.length;o++)0===o&&r.push(t[0]),o===a.length-1&&i.push(t[o+1]),a[o]=[(1-n)*t[o][0]+n*t[o+1][0],(1-n)*t[o][1]+n*t[o+1][1]];e(a,n)}}var r=[],i=[];return t.length&&e(t,n),{left:r,right:i.reverse()}}function r(t){var n={};return 4===t.length&&(n.x2=t[2][0],n.y2=t[2][1]),t.length>=3&&(n.x1=t[1][0],n.y1=t[1][1]),n.x=t[t.length-1][0],n.y=t[t.length-1][1],4===t.length?n.type="C":3===t.length?n.type="Q":n.type="L",n}function i(t,n){n=n||2;for(var r=[],i=t,a=1/n,o=0;o<n-1;o++){var u=a/(1-a*o),c=e(i,u);r.push(c.left),i=c.right}return r.push(i),r}function a(t,n,e){var a=[[t.x,t.y]];return null!=n.x1&&a.push([n.x1,n.y1]),null!=n.x2&&a.push([n.x2,n.y2]),a.push([n.x,n.y]),i(a,e).map(r)}function o(t,n){for(var e=Array(t),r=0;r<t;r++)e[r]=n;return e}function u(t){t=t.trim().replace(/ /g,",");var n=t[0],e=t.substring(1).split(",");return b[n.toUpperCase()].reduce(function(t,n,r){return t[n]=+e[r],t},{type:n})}function c(t){var n=t.type;return""+n+b[n.toUpperCase()].map(function(n){return t[n]}).join(",")}function s(t,n){var e={x1:"x",y1:"y",x2:"x",y2:"y"},r=["xAxisRotation","largeArcFlag","sweepFlag"];return t.type!==n.type&&"M"!==n.type.toUpperCase()&&function(){var i={};Object.keys(n).forEach(function(a){var o=n[a],u=t[a];void 0===u&&(r.includes(a)?u=o:(void 0===u&&e[a]&&(u=t[e[a]]),void 0===u&&(u=0))),i[a]=u}),i.type=n.type,t=i}(),t}function l(t,n,e){var r=[];return"L"===n.type||"Q"===n.type||"C"===n.type?r=r.concat(a(t,n,e)):function(){var i=p({},t);"M"===i.type&&(i.type="L"),r=r.concat(o(e-1).map(function(){return i})),r.push(n)}(),r}function f(t,n,e){var r=t.length-1,i=n.length-1,a=r/i,u=o(i).reduce(function(n,r,i){var o=Math.floor(a*i);if(e&&o<t.length-1&&e(t[o],t[o+1])){var u=a*i%1<.5;n[o]&&(u?o>0?o-=1:o<t.length-1&&(o+=1):o<t.length-1?o+=1:o>0&&(o-=1))}return n[o]=(n[o]||0)+1,n},[]),c=u.reduce(function(n,e,r){if(r===t.length-1){var i=o(e,p({},t[t.length-1]));return"M"===i[0].type&&i.forEach(function(t){t.type="L"}),n.concat(i)}return n.concat(l(t[r],t[r+1],e))},[]);return c.unshift(t[0]),c}function d(t){return null==t?"":t.trim().replace(/[Z]/gi,"").replace(/\s+/," ").replace(/([MLCSTQAHV])\s*/gi,"$1")}function h(t,e,r){var i=d(t),a=d(e),o=""===i?[]:i.split(/(?=[MLCSTQAHV])/gi),l=""===a?[]:a.split(/(?=[MLCSTQAHV])/gi);if(!o.length&&!l.length)return function(){return""};o.length?l.length||l.push(o[0]):o.push(l[0]);var h=o.map(u),p=l.map(u);0!==Math.abs(l.length-o.length)&&(p.length>h.length?h=f(h,p,r):p.length<h.length&&(p=f(p,h,r))),h=h.map(function(t,n){return s(t,p[n])});var b=h.map(c).join(""),v=p.map(c).join("");null!=t&&"Z"!==t[t.length-1]||null!=e&&"Z"!==e[e.length-1]||(b+="Z",v+="Z");var y=n.interpolateString(b,v);return function(t){return 1===t?null==e?"":e:y(t)}}var p=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},b={M:["x","y"],L:["x","y"],H:["x"],V:["y"],C:["x1","y1","x2","y2","x","y"],S:["x2","y2","x","y"],Q:["x1","y1","x","y"],T:["x","y"],A:["rx","ry","xAxisRotation","largeArcFlag","sweepFlag","x","y"]};t.interpolatePath=h,Object.defineProperty(t,"__esModule",{value:!0})})},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(578);e.d(n,"sankey",function(){return r.a});var i=e(216);e.d(n,"sankeyCenter",function(){return i.a}),e.d(n,"sankeyLeft",function(){return i.c}),e.d(n,"sankeyRight",function(){return i.d}),e.d(n,"sankeyJustify",function(){return i.b});var a=e(580);e.d(n,"sankeyLinkHorizontal",function(){return a.a})},function(t,n,e){"use strict";function r(t,n){return a(t.source,n.source)||t.index-n.index}function i(t,n){return a(t.target,n.target)||t.index-n.index}function a(t,n){return t.y0-n.y0}function o(t){return t.value}function u(t){return(t.y0+t.y1)/2}function c(t){return u(t.source)*t.value}function s(t){return u(t.target)*t.value}function l(t){return t.index}function f(t){return t.nodes}function d(t){return t.links}function h(t,n){var e=t.get(n);if(!e)throw new Error("missing: "+n);return e}var p=e(2),b=e(20),v=e(216),y=e(579);n.a=function(){function t(){var t={nodes:T.apply(null,arguments),links:N.apply(null,arguments)};return n(t),e(t),g(t),_(t),x(t),t}function n(t){t.nodes.forEach(function(t,n){t.index=n,t.sourceLinks=[],t.targetLinks=[]});var n=Object(b.c)(t.nodes,P);t.links.forEach(function(t,e){t.index=e;var r=t.source,i=t.target;"object"!=typeof r&&(r=t.source=h(n,r)),"object"!=typeof i&&(i=t.target=h(n,i)),r.sourceLinks.push(t),i.targetLinks.push(t)})}function e(t){t.nodes.forEach(function(t){t.value=Math.max(Object(p.v)(t.sourceLinks,o),Object(p.v)(t.targetLinks,o))})}function g(t){var n,e,r;for(n=t.nodes,e=[],r=0;n.length;++r,n=e,e=[])n.forEach(function(t){t.depth=r,t.sourceLinks.forEach(function(t){e.indexOf(t.target)<0&&e.push(t.target)})});for(n=t.nodes,e=[],r=0;n.length;++r,n=e,e=[])n.forEach(function(t){t.height=r,t.targetLinks.forEach(function(t){e.indexOf(t.source)<0&&e.push(t.source)})});var i=(j-m-k)/(r-1);t.nodes.forEach(function(t){t.x1=(t.x0=m+Math.max(0,Math.min(r-1,Math.floor(A.call(null,t,r))))*i)+k})}function _(t){function n(){e.forEach(function(t){var n,e,r,i=w,o=t.length;for(t.sort(a),r=0;r<o;++r)n=t[r],e=i-n.y0,e>0&&(n.y0+=e,n.y1+=e),i=n.y1+M;if((e=i-M-O)>0)for(i=n.y0-=e,n.y1-=e,r=o-2;r>=0;--r)n=t[r],e=n.y1+M-i,e>0&&(n.y0-=e,n.y1-=e),i=n.y0})}var e=Object(b.d)().key(function(t){return t.x0}).sortKeys(p.a).entries(t.nodes).map(function(t){return t.values});!function(){var n=Object(p.o)(e,function(t){return(O-w-(t.length-1)*M)/Object(p.v)(t,o)});e.forEach(function(t){t.forEach(function(t,e){t.y1=(t.y0=e)+t.value*n})}),t.links.forEach(function(t){t.width=t.value*n})}(),n();for(var r=1,i=E;i>0;--i)!function(t){e.slice().reverse().forEach(function(n){n.forEach(function(n){if(n.sourceLinks.length){var e=(Object(p.v)(n.sourceLinks,s)/Object(p.v)(n.sourceLinks,o)-u(n))*t;n.y0+=e,n.y1+=e}})})}(r*=.99),n(),function(t){e.forEach(function(n){n.forEach(function(n){if(n.targetLinks.length){var e=(Object(p.v)(n.targetLinks,c)/Object(p.v)(n.targetLinks,o)-u(n))*t;n.y0+=e,n.y1+=e}})})}(r),n()}function x(t){t.nodes.forEach(function(t){t.sourceLinks.sort(i),t.targetLinks.sort(r)}),t.nodes.forEach(function(t){var n=t.y0,e=n;t.sourceLinks.forEach(function(t){t.y0=n+t.width/2,n+=t.width}),t.targetLinks.forEach(function(t){t.y1=e+t.width/2,e+=t.width})})}var m=0,w=0,j=1,O=1,k=24,M=8,P=l,A=v.b,T=f,N=d,E=32;return t.update=function(t){return x(t),t},t.nodeId=function(n){return arguments.length?(P="function"==typeof n?n:Object(y.a)(n),t):P},t.nodeAlign=function(n){return arguments.length?(A="function"==typeof n?n:Object(y.a)(n),t):A},t.nodeWidth=function(n){return arguments.length?(k=+n,t):k},t.nodePadding=function(n){return arguments.length?(M=+n,t):M},t.nodes=function(n){return arguments.length?(T="function"==typeof n?n:Object(y.a)(n),t):T},t.links=function(n){return arguments.length?(N="function"==typeof n?n:Object(y.a)(n),t):N},t.size=function(n){return arguments.length?(m=w=0,j=+n[0],O=+n[1],t):[j-m,O-w]},t.extent=function(n){return arguments.length?(m=+n[0][0],j=+n[1][0],w=+n[0][1],O=+n[1][1],t):[[m,w],[j,O]]},t.iterations=function(n){return arguments.length?(E=+n,t):E},t}},function(t,n,e){"use strict";function r(t){return function(){return t}}n.a=r},function(t,n,e){"use strict";function r(t){return[t.source.x1,t.y0]}function i(t){return[t.target.x0,t.y1]}var a=e(178);n.a=function(){return Object(a.x)().source(r).target(i)}},function(t,n,e){"use strict";var r=e(36),i=(e.n(r),e(18));n.a={mixins:[i.a],props:{generator:{default:function(){return Object(r.chartAxis)()}}},data:function(){return{name:"axis-chart"}}}},function(t,n,e){"use strict";var r=e(36),i=(e.n(r),e(18));n.a={mixins:[i.a],props:{generator:{default:function(){return Object(r.chartPie)()}}},data:function(){return{name:"pie-chart"}}}},function(t,n,e){"use strict";var r=e(36),i=(e.n(r),e(18));n.a={mixins:[i.a],props:{generator:{default:function(){return Object(r.chartSankey)()}}},data:function(){return{name:"sankey-chart"}}}},function(t,n,e){"use strict";var r=e(36),i=(e.n(r),e(18));n.a={mixins:[i.a],props:{generator:{default:function(){return Object(r.chartSunburst)()}}},data:function(){return{name:"sunburst-chart"}}}},function(t,n,e){"use strict";var r=e(18);n.a={mixins:[r.a],props:{generator:{required:!0,type:Function},name:{type:String,default:"generator"}}}}])});

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "chart" },
    [
      _c("link", {
        attrs: {
          href:
            "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
          rel: "stylesheet",
          integrity:
            "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",
          crossorigin: "anonymous"
        }
      }),
      _vm._v(" "),
      _c("chart-pie", {
        attrs: { data: _vm.chartData, config: _vm.chartConfig }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-745aa594", module.exports)
  }
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(52)
/* template */
var __vue_template__ = __webpack_require__(53)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/CreateItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-585a5026", Component.options)
  } else {
    hotAPI.reload("data-v-585a5026", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      item: {}
    };
  },

  methods: {
    addItem: function addItem() {
      var _this = this;

      var uri = 'http://localhost:8000/items';
      this.axios.post(uri, this.item).then(function (response) {
        _this.$router.push({ name: 'DisplayItem' });
      });
    }
  }
});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h1", [_vm._v("Create An Item")]),
    _vm._v(" "),
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.addItem($event)
          }
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Item Name:")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.item.name,
                    expression: "item.name"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.item.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.item, "name", $event.target.value)
                  }
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Item Price:")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.item.price,
                    expression: "item.price"
                  }
                ],
                staticClass: "form-control col-md-6",
                attrs: { type: "text" },
                domProps: { value: _vm.item.price },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.item, "price", $event.target.value)
                  }
                }
              })
            ])
          ])
        ]),
        _c("br"),
        _vm._v(" "),
        _vm._m(0)
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("button", { staticClass: "btn btn-primary" }, [_vm._v("Add Item")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-585a5026", module.exports)
  }
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(55)
/* template */
var __vue_template__ = __webpack_require__(56)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/DisplayItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e9126fe4", Component.options)
  } else {
    hotAPI.reload("data-v-e9126fe4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 55 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


module.exports = {
    data: function data() {

        return {

            items: []
        };
    },
    methods: {
        fetchItems: function fetchItems() {
            var _this = this;

            var uri = 'http://localhost:8000/test';
            this.axios.get(uri).then(function (response) {
                _this.items = response.data;
                console.log(response.data);
            });
        },
        deleteItem: function deleteItem(id) {
            var uri = 'http://localhost:8000/items/' + id;
            this.items.splice(id, 1);
            this.axios.delete(uri);
        }
    }
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h1", [_vm._v("Items")]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-10" }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-2" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-primary",
              attrs: { to: { name: "CreateItem" } }
            },
            [_vm._v("Create Item")]
          )
        ],
        1
      )
    ]),
    _c("br"),
    _vm._v(" "),
    _c("table", { staticClass: "table table-hover" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.items, function(item) {
          return _c("tr", { key: item.id }, [
            _c("td", [_vm._v(_vm._s(item.id))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(item.name))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(item.price))]),
            _vm._v(" "),
            _c(
              "td",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { to: { name: "EditItem", params: { id: item.id } } }
                  },
                  [_vm._v("Edit")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("td", [
              _c(
                "button",
                {
                  staticClass: "btn btn-danger",
                  on: {
                    click: function($event) {
                      _vm.deleteItem(item.id)
                    }
                  }
                },
                [_vm._v("Delete")]
              )
            ])
          ])
        })
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("td", [_vm._v("ID")]),
        _vm._v(" "),
        _c("td", [_vm._v("Item Name")]),
        _vm._v(" "),
        _c("td", [_vm._v("Item Price")]),
        _vm._v(" "),
        _c("td", [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e9126fe4", module.exports)
  }
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(58)
/* template */
var __vue_template__ = __webpack_require__(59)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/EditItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-71c74a18", Component.options)
  } else {
    hotAPI.reload("data-v-71c74a18", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            item: {}
        };
    },


    created: function created() {
        this.getItem();
    },

    methods: {
        getItem: function getItem() {
            var _this = this;

            var uri = 'http://localhost:8000/items/' + this.$route.params.id + '/edit';
            this.axios.get(uri).then(function (response) {
                _this.item = response.data;
            });
        },
        updateItem: function updateItem() {
            var _this2 = this;

            var uri = 'http://localhost:8000/items/' + this.$route.params.id;
            this.axios.patch(uri, this.item).then(function (response) {
                _this2.$router.push({ name: 'DisplayItem' });
            });
        }
    }
});

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h1", [_vm._v("Update Item")]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-10" }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-2" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-success",
              attrs: { to: { name: "DisplayItem" } }
            },
            [_vm._v("Return to Items")]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.updateItem($event)
          }
        }
      },
      [
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v("Item Name")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.item.name,
                expression: "item.name"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text" },
            domProps: { value: _vm.item.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.item, "name", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { name: "product_price" } }, [
            _vm._v("Item Price")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.item.price,
                expression: "item.price"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text" },
            domProps: { value: _vm.item.price },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.item, "price", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm._m(0)
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("button", { staticClass: "btn btn-primary" }, [_vm._v("Update")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-71c74a18", module.exports)
  }
}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(65)
/* template */
var __vue_template__ = __webpack_require__(66)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/AjouterChart.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d3e34c3", Component.options)
  } else {
    hotAPI.reload("data-v-7d3e34c3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 65 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


module.exports = {

    data: function data() {

        return {

            chart: {}

        };
    },
    methods: {
        ajouterChart: function ajouterChart() {
            var _this = this;

            var uri = 'http://localhost:8000/chart/ajouter';
            this.axios.post(uri, this.chart).then(function (response) {
                _this.$router.push({ name: 'chart' });
            });
        }
    }
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h1", [_vm._v("Ajouter une propriete du graph")]),
    _vm._v(" "),
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.ajouterChart($event)
          }
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "label" } }, [_vm._v("label")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.chart.label,
                    expression: "chart.label"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.chart.label },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.chart, "label", $event.target.value)
                  }
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "label" } }, [_vm._v("valeur")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.chart.valeur,
                    expression: "chart.valeur"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.chart.valeur },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.chart, "valeur", $event.target.value)
                  }
                }
              })
            ])
          ])
        ]),
        _c("br"),
        _vm._v(" "),
        _vm._m(0)
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("button", { staticClass: "btn btn-primary" }, [_vm._v("Add Item")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7d3e34c3", module.exports)
  }
}

/***/ })
/******/ ]);