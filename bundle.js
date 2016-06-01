/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _commonModule = __webpack_require__(1);

	var _commonModule2 = _interopRequireDefault(_commonModule);

	var _homeModule = __webpack_require__(18);

	var _homeModule2 = _interopRequireDefault(_homeModule);

	var _teamModule = __webpack_require__(27);

	var _teamModule2 = _interopRequireDefault(_teamModule);

	var _angularMaterialize = __webpack_require__(33);

	var _angularMaterialize2 = _interopRequireDefault(_angularMaterialize);

	var _appRouter = __webpack_require__(35);

	var _appRouter2 = _interopRequireDefault(_appRouter);

	var _lajitFilter = __webpack_require__(36);

	var _lajitFilter2 = _interopRequireDefault(_lajitFilter);

	var _facebookModel = __webpack_require__(37);

	var _facebookModel2 = _interopRequireDefault(_facebookModel);

	var _usersModel = __webpack_require__(38);

	var _usersModel2 = _interopRequireDefault(_usersModel);

	var _facebookService = __webpack_require__(39);

	var _facebookService2 = _interopRequireDefault(_facebookService);

	var _spinnerInterceptor = __webpack_require__(40);

	var _spinnerInterceptor2 = _interopRequireDefault(_spinnerInterceptor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	angular.module('porssiapp', ['ngRoute', __webpack_require__(41), _commonModule2.default, _homeModule2.default, _teamModule2.default, _angularMaterialize2.default, __webpack_require__(43)]).config(_appRouter2.default).config(_spinnerInterceptor2.default).service('facebookService', _facebookService2.default).service('facebookModel', _facebookModel2.default).service('usersModel', _usersModel2.default).filter('lajitFilter', _lajitFilter2.default);

	window.fbAsyncInit = function () {
	  FB.init({
	    appId: '1171438759556506',
	    xfbml: true,
	    version: 'v2.6'
	  });
	  angular.bootstrap(document, ['porssiapp']);
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _navigationComponent = __webpack_require__(2);

	var _navigationComponent2 = _interopRequireDefault(_navigationComponent);

	var _footerComponent = __webpack_require__(8);

	var _footerComponent2 = _interopRequireDefault(_footerComponent);

	var _preloader = __webpack_require__(10);

	var _preloader2 = _interopRequireDefault(_preloader);

	var _preloader3 = __webpack_require__(14);

	var _preloader4 = _interopRequireDefault(_preloader3);

	var _koodistoModel = __webpack_require__(15);

	var _koodistoModel2 = _interopRequireDefault(_koodistoModel);

	var _koodistoFilter = __webpack_require__(16);

	var _koodistoFilter2 = _interopRequireDefault(_koodistoFilter);

	var _persistenceService = __webpack_require__(17);

	var _persistenceService2 = _interopRequireDefault(_persistenceService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var moduleName = 'porssi.common';
	angular.module(moduleName, []).component('preloader', _preloader2.default).service('preloaderModel', _preloader4.default).component('navigation', _navigationComponent2.default).component('porssiFooter', _footerComponent2.default).service('koodisto', _koodistoModel2.default).service('persistence', _persistenceService2.default).filter('koodistofilter', _koodistoFilter2.default);

	exports.default = moduleName;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _navigation = __webpack_require__(3);

	var _navigation2 = _interopRequireDefault(_navigation);

	__webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var navigationComponent = {
	  restrict: 'E',
	  template: _navigation2.default
	};

	exports.default = navigationComponent;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"blue lighten-1\">\r\n    <div class=\"nav-wrapper\">\r\n        <a href=\"#/\" class=\"brand-logo\">Etusivu</a>\r\n        <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\r\n            <li><a href=\"#/team\">Oma joukkue</li>\r\n            <li><a href=\"#demoModal\" modal>Omat tiedot</a></li>\r\n        </ul>\r\n    </div>\r\n\r\n</nav>"

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./navigation.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./navigation.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "li{\r\n    vertical-align: middle;\r\n}", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
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


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _footer = __webpack_require__(9);

	var _footer2 = _interopRequireDefault(_footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var footer = {
	  template: _footer2.default,
	  replace: true
	};

	exports.default = footer;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<footer class=\"page-footer blue\">\r\n    <div class=\"footer-copyright\">\r\n\r\n        <div class=\"container\">Copyright 2016 @ Toni Aho</div>\r\n    </div>\r\n</footer>"

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(11);

	var _preloader = __webpack_require__(13);

	var _preloader2 = _interopRequireDefault(_preloader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var preloaderComponent = {
	  template: _preloader2.default,
	  controller: function controller(preloaderModel) {
	    this.model = preloaderModel;
	  }

	};

	exports.default = preloaderComponent;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./preloader.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./preloader.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".darkened {\r\n    opacity: 0.1;\r\n    position: fixed;\r\n    z-index: 999;\r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: black;\r\n\r\n}\r\n\r\n.preloader-wrapper {\r\n    z-index: 10000;\r\n    position: fixed;\r\n    vertical-align: middle;\r\n    opacity: 1;\r\n    top: 50%;\r\n    left: 50%;\r\n}\r\n\r\n.preloader-wrapper .active {\r\n    transform: translate(-50%, -50%);\r\n\r\n}\r\n\r\n", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<div ng-class=\"{darkened: $ctrl.model.show}\" />\r\n<div class=\"preloader-wrapper big\" ng-class=\"{active: $ctrl.model.show}\" class=\"preloader-wrapper big active\">\r\n    <div class=\"spinner-layer spinner-blue-only\">\r\n        <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PreloaderModel = function PreloaderModel() {
	  _classCallCheck(this, PreloaderModel);

	  this.show = false;
	};

	exports.default = PreloaderModel;

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Koodisto = function () {
	  function Koodisto() {
	    _classCallCheck(this, Koodisto);

	    this.populateLajit();
	    this.populatePelipaikat();
	  }

	  _createClass(Koodisto, [{
	    key: 'populateLajit',
	    value: function populateLajit() {
	      this.lajit = [];
	      this.lajit.push({ tunnus: 'baseball', label: 'Pesäpallo' });
	      this.lajit.push({ tunnus: 'basketball', label: 'Koripallo' });
	      this.lajit.push({ tunnus: 'icehockey', label: 'Jääkiekko' });
	    }
	  }, {
	    key: 'populatePelipaikat',
	    value: function populatePelipaikat() {
	      this.pelipaikat = [];
	      this.pelipaikat.push({ tunnus: 'goalie', label: 'Maalivahti' });
	      this.pelipaikat.push({ tunnus: 'defend', label: 'Puolustaja' });
	      this.pelipaikat.push({ tunnus: 'center', label: 'Keskushyökkääjä' });
	      this.pelipaikat.push({ tunnus: 'attach', label: 'Laitahyökkääjä' });
	    }
	  }, {
	    key: 'get',
	    value: function get(koodistonimi, arvo) {
	      var koodisto = this[koodistonimi];
	      var label = '';
	      angular.forEach(koodisto, function (item) {
	        if (item.tunnus === arvo) {
	          label = item.label;
	        }
	      });
	      return label;
	    }
	  }]);

	  return Koodisto;
	}();

	exports.default = Koodisto;

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = KoodistoFilter;
	function KoodistoFilter(koodisto) {
	  return function (input, koodistonimi) {
	    if ($.isEmptyObject(input)) {
	      return '';
	    }
	    var label = koodisto.get(koodistonimi, input);
	    return label;
	  };
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var API_KEY = 'eOp9LjtwzApDNb-TbPbCEZ2V74XTSwrV';
	var DB = 'porssidb';
	var BASE_URL = 'https://api.mlab.com/api/1/databases/' + DB;

	var PersistenceService = function () {
	  function PersistenceService($resource) {
	    _classCallCheck(this, PersistenceService);

	    this.db = $resource(BASE_URL + '/collections/:table', { apiKey: API_KEY });
	  }

	  _createClass(PersistenceService, [{
	    key: 'store',
	    value: function store(data, table) {
	      return this.db.save({ table: table }, data).$promise;
	    }
	  }, {
	    key: 'readAll',
	    value: function readAll(table, query) {
	      return this.db.query({ table: table, q: query }).$promise;
	    }
	  }]);

	  return PersistenceService;
	}();

	exports.default = PersistenceService;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _homeComponent = __webpack_require__(19);

	var _homeComponent2 = _interopRequireDefault(_homeComponent);

	var _cardComponent = __webpack_require__(23);

	var _cardComponent2 = _interopRequireDefault(_cardComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var moduleName = 'porssi.home';
	angular.module(moduleName, []).component('home', _homeComponent2.default).component('card', _cardComponent2.default);

	exports.default = moduleName;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _home = __webpack_require__(20);

	var _home2 = _interopRequireDefault(_home);

	__webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var homeComponent = {
	  template: _home2.default,
	  bindings: {
	    usermodel: '<'
	  },
	  replace: true
	};

	exports.default = homeComponent;

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<div class=\"home\">\r\n    <h1>Pelaajapörssi</h1>\r\n    <div class=\"row\">\r\n        <div class=\"col l4\" ng-repeat=\"kortti in $ctrl.usermodel.users track by $index\">\r\n\r\n            <card item=\"kortti\" on-asked=\"$ctrl.usermodel.addAsked(kortti)\" ></card>\r\n\r\n        </div>\r\n    </div>\r\n    <footer />\r\n</div>"

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./home.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./home.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".home {\r\n    /*\r\n    background: url('./saba.jpg');\r\n    */\r\n    background-size: cover;\r\n    min-height: 600px;\r\n    width: 100%;\r\n    z-index: -1;\r\n}", ""]);

	// exports


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(24);

	var _card = __webpack_require__(26);

	var _card2 = _interopRequireDefault(_card);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Card = {
	  template: _card2.default,
	  bindings: {
	    item: '<',
	    onAsked: '&'
	  },
	  controller: function controller($rootScope) {
	    var self = this;
	    self.adding = false;

	    this.sendMessage = function (userid) {
	      FB.ui({
	        method: 'send',
	        link: 'http://www.pesis.fi',
	        redirect_uri: 'http://www.yle.fi',
	        to: userid,
	        message: 'tuu mukaan treeneihin'
	      }, function (success) {
	        if (success) {
	          $rootScope.$apply(self.onAsked);
	        }
	      });
	    };
	  }
	};
	exports.default = Card;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./card.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./card.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".facebook-profile-pic {\r\n    width: 100%;\r\n}", ""]);

	// exports


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<div class=\"card left-align\">\r\n    <div class=\"card-image\">\r\n        <img  class=\"facebook-profile-pic\" ng-src=\"{{$ctrl.item.imgsrc}}\" />\r\n        <span class=\"card-title\", ng-bind=\"$ctrl.item.name\"></span>\r\n    </div>\r\n    <div class=\"card-content\">\r\n        <p><b>Lajit: </b><span ng-bind=\"$ctrl.item.lajit | lajitFilter\" /></p>\r\n        <p><b>Esittely:</b> I am a very simple card. I am good at containing small bits of information.\r\n            I am convenient because I require little markup to use effectively.</p>\r\n        <p><b>Tila: </b>Kysytty ({{$ctrl.item.asked}})</p>\r\n    </div>\r\n    <div class=\"card-action\">\r\n        <a href=\"javascript:void(0);\" ng-click=\"$ctrl.sendMessage($ctrl.item.userid)\">Kysy treeneihin</a>\r\n    </div>\r\n</div>"

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _teamComponent = __webpack_require__(28);

	var _teamComponent2 = _interopRequireDefault(_teamComponent);

	var _teamModel = __webpack_require__(30);

	var _teamModel2 = _interopRequireDefault(_teamModel);

	__webpack_require__(31);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var moduleName = 'porssi.team';
	angular.module(moduleName, []).component('team', _teamComponent2.default).service('teamModel', _teamModel2.default);

	exports.default = moduleName;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _team = __webpack_require__(29);

	var _team2 = _interopRequireDefault(_team);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var teamComponent = {
	  template: _team2.default,
	  replace: true,
	  bindings: {
	    model: '<'
	  },
	  controller: function controller(koodisto, persistence) {

	    this.tabSelected = null;
	    this.adding = false;
	    this.koodisto = koodisto;

	    this.addNew = function () {
	      this.adding = true;
	    };

	    this.lisaa = function (team) {
	      var _this = this;

	      team.players.push(this.uusirivi);
	      this.uusirivi = null;
	      persistence.store(team, 'team').then(function () {
	        console.log('all done');
	        _this.adding = false;
	      });
	    };

	    this.isLisaaDisabled = function () {
	      if (!this.uusirivi) {
	        return true;
	      }
	      if ($.isEmptyObject(this.uusirivi.name) || $.isEmptyObject(this.uusirivi.pelipaikka)) {
	        return true;
	      }

	      return false;
	    };

	    this.cancel = function () {
	      this.uusirivi = null;
	      this.adding = false;
	    };

	    this.edit = function (player, index) {
	      this.editing = angular.copy(player);
	      this.editing.$$index = index;
	      console.log('editing', this.editing);
	    };

	    this.isEditing = function (index) {
	      return this.editing && this.editing.$$index === index;
	    };

	    this.editDone = function (team, player) {
	      var _this2 = this;

	      this.model.serialize(this.editing, player);
	      console.log('team', team);

	      persistence.store(team, 'team').then(function () {
	        console.log('all done');
	        delete _this2.editing;
	      });
	    };

	    this.isEditDoneDisabled = function (player) {
	      if ($.isEmptyObject(player.name) || $.isEmptyObject(player.pelipaikka)) {
	        return true;
	      }
	      return false;
	    };
	    this.editCancel = function () {
	      this.editing = null;
	    };

	    this.selectTab = function (tab) {
	      this.tabSelected = tab;
	    };

	    this.$onInit = function () {
	      this.tabSelected = this.model.teams[0];
	    };
	    this.month = ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'];

	    this.monthShort = ['Tam', 'Hel', 'Maa', 'Huh', 'Tou', 'Kes', 'Hei', 'Elo', 'Syys', 'Loka', 'Mar', 'Jou'];
	    this.weekdaysLetter = ['S', 'M', 'T', 'K', 'T', 'P', 'L'];
	    this.weekdays = ['Sunnuntai', 'Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai'];
	  }
	};

	exports.default = teamComponent;

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<div class=\"team container\">\r\n    <h1>Oma joukkue</h1>\r\n    <div class=\"row\">\r\n        <div class=\"col s12\">\r\n            <ul class=\"collapsible popout\" data-collapsible=\"accordion\" watch>\r\n                <li ng-repeat=\"team in $ctrl.model.teams\">\r\n                    <div class=\"collapsible-header row\">\r\n                        <div class=\"col l4 left-align\"><b>{{team.team}}</b></div>\r\n                        <div class=\"col l8\"><span ng-bind=\"team.laji | koodistofilter:'lajit'\"/></div>\r\n                    </div>\r\n                    <div class=\"collapsible-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col l12\">\r\n                                <label for=\"treenitDate\">Seuraavat treenit</label>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col l4\">\r\n                                    <input\r\n                                            input-date\r\n                                            type=\"text\"\r\n                                            ng-model=\"team.event\"\r\n                                            format=\"d.m.yyyy\"\r\n                                            container=\"body\"\r\n                                            months-full=\"{{ $ctrl.month }}\"\r\n                                            months-short=\"{{$ctrl.monthShort }}\"\r\n                                            weekdays-full=\"{{$ctrl.weekdays}}\"\r\n                                            weekdays-letter=\"{{ $ctrl.weekdaysLetter }}\"\r\n\r\n                                    />\r\n                                </div>\r\n                                <div class=\"col l4\">\r\n                                    <input type=\"text\" placeholder=\"__:__\">\r\n\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col l12\">\r\n                                    <label>Pelaajat</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col s10\">\r\n                                    <table class=\"team-table\">\r\n                                        <thead>\r\n                                        <tr>\r\n                                            <th/>\r\n                                            <th>Nimi</th>\r\n                                            <th>Pelipaikka</th>\r\n                                            <th></th>\r\n\r\n                                        </tr>\r\n\r\n                                        </thead>\r\n                                        <tbody>\r\n                                        <tr ng-repeat=\"player in team.players\">\r\n                                            <td></td>\r\n                                            <td>\r\n                                                <span ng-if=\"!$ctrl.isEditing($index)\" ng-bind=\"player.name\"/>\r\n                                                <input ng-if=\"$ctrl.isEditing($index)\" placeholder=\"Anna pelaajan nimi\" type=\"text\"\r\n                                                       ng-model=\"$ctrl.editing.name\" length=\"150\">\r\n                                            </td>\r\n                                            <td>\r\n                                            <span ng-if=\"!$ctrl.isEditing($index)\"\r\n                                                  ng-bind=\"player.pelipaikka | koodistofilter:'pelipaikat'\"/>\r\n                                                <select ng-if=\"$ctrl.isEditing($index)\" class=\"browser-default\"\r\n                                                        ng-model=\"$ctrl.editing.pelipaikka\"\r\n                                                        ng-options=\"item.tunnus as item.label for item in  $ctrl.koodisto.pelipaikat\">\r\n                                                </select>\r\n\r\n                                            </td>\r\n                                            <td ng-if=\"!$ctrl.isEditing($index)\">\r\n                                                <button class=\"btn btn-floating\" ng-click=\"$ctrl.edit(player, $index)\"><i\r\n                                                        class=\"material-icons\">mode_edit</i>\r\n                                                </button>\r\n                                            </td>\r\n                                            <td ng-if=\"$ctrl.isEditing($index)\">\r\n                                                <button class=\"btn btn-floating\" ng-disabled=\"$ctrl.isEditDoneDisabled(player)\"\r\n                                                        ng-click=\"$ctrl.editDone(team, player)\">\r\n                                                    <i class=\"material-icons\">done</i>\r\n                                                </button>\r\n                                                <button class=\"btn btn-floating\" ng-click=\"$ctrl.editCancel()\">\r\n                                                    <i class=\"material-icons\">clear</i>\r\n                                                </button>\r\n\r\n\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr ng-if=\"$ctrl.adding\">\r\n                                            <td/>\r\n                                            <td class=\"input-field\"><input placeholder=\"Anna pelaajan nimi\" type=\"text\"\r\n                                                                           ng-model=\"$ctrl.uusirivi.name\" length=\"150\"></td>\r\n                                            <td class=\"input-field\">\r\n                                                <select class=\"browser-default\" ng-model=\"$ctrl.uusirivi.pelipaikka\"\r\n                                                        ng-options=\"item.tunnus as item.label for item in  $ctrl.koodisto.pelipaikat track by item.tunnus\">\r\n                                                    <option selected value=\"\">Valitse</option>\r\n                                                </select>\r\n                                            </td>\r\n                                            <td>\r\n                                                <button class=\"btn btn-floating\" ng-disabled=\"$ctrl.isLisaaDisabled()\"\r\n                                                        ng-click=\"$ctrl.lisaa(team)\">\r\n                                                    <i class=\"material-icons\">done</i>\r\n                                                </button>\r\n                                                <button class=\"btn btn-floating\" ng-click=\"$ctrl.cancel()\">\r\n                                                    <i class=\"material-icons\">clear</i>\r\n                                                </button>\r\n                                            </td>\r\n\r\n                                        </tr>\r\n                                        <tr ng-if=\"!$ctrl.adding\">\r\n                                            <td>\r\n                                                <button class=\"btn\" ng-click=\"$ctrl.addNew()\"><i class=\"material-icons left\">send</i> Lisää\r\n                                                </button>\r\n                                            </td>\r\n                                            <td colspan=\"3\"/>\r\n\r\n                                        </tr>\r\n\r\n                                        </tbody>\r\n\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                <li ng-if=\"$ctrl.adding\">\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col l6\" input-field>\r\n\r\n\r\n                        </div>\r\n                        <div class=\"col l6\" input-field>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col l3 left\">\r\n                            <button class=\"btn\" ng-disabled=\"$ctrl.isLisaaDisabled()\" ng-click=\"$ctrl.lisaa(team)\">\r\n                                Lisää <i class=\"material-icons\">add</i>\r\n                            </button>\r\n\r\n                        </div>\r\n                </li>\r\n\r\n            </ul>\r\n            <div class=\"row\" ng-if=\"!$ctrl.adding\">\r\n                <div class=\"col s6\">\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n</div>"

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TeamModel = function () {
	  function TeamModel(persistence) {
	    _classCallCheck(this, TeamModel);

	    this.teams = [];
	    this.persistence = persistence;
	  }

	  _createClass(TeamModel, [{
	    key: 'resolveTeams',
	    value: function resolveTeams(userid) {
	      var _this = this;

	      return this.persistence.readAll('team', {}).then(function (data) {
	        console.log('result', data);
	        _this.teams = data;
	        return _this.teams;
	      });
	    }
	  }, {
	    key: 'serialize',
	    value: function serialize(uiplayer, dbplayer) {
	      angular.copy(uiplayer, dbplayer);
	      for (var key in dbplayer) {
	        if (key.indexOf('$$') > -1) {
	          delete dbplayer[key];
	        }
	      }
	      delete dbplayer.editing;
	    }
	  }]);

	  return TeamModel;
	}();

	exports.default = TeamModel;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./team.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./team.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".team-table tr td {\r\n    width: 25%;\r\n}", ""]);

	// exports


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(34);
	module.exports = 'ui.materialize';


/***/ },
/* 34 */
/***/ function(module, exports) {

	(function (angular) {
	    var undefined;
	    angular.module("ui.materialize", ["ui.materialize.ngModel", "ui.materialize.collapsible", "ui.materialize.toast", "ui.materialize.sidenav", "ui.materialize.material_select", "ui.materialize.dropdown", "ui.materialize.inputfield", "ui.materialize.input_date", "ui.materialize.tabs", "ui.materialize.pagination", "ui.materialize.pushpin", "ui.materialize.scrollspy", "ui.materialize.parallax","ui.materialize.modal", "ui.materialize.tooltipped",  "ui.materialize.slider", "ui.materialize.materialboxed", "ui.materialize.scrollFire", "ui.materialize.nouislider", "ui.materialize.input_clock"]);

	    /*     example usage:
	     <div scroll-fire="func('Scrolled', 2000)" ></scroll-fire>
	     */
	    angular.module("ui.materialize.scrollFire", [])
	        .directive("scrollFire", ["$compile", "$timeout", function ($compile, $timeout) {
	            return {
	                restrict: "A",
	                scope: {
	                    offset: "@",
	                    scrollFire: "&"
	                },
	                link: function (scope, element, attrs) {
	                    var offset = scope.offset;
	                    if (!angular.isDefined(scope.offset)) {
	                        offset = 0;
	                    }
	                    offset = Number(offset) || 0;


	                    var fired = false;
	                    var handler = throttle(function () {
	                        console.log("Handler");
	                        if (fired) {
	                            return;
	                        }
	                        var windowScroll = window.pageYOffset + window.innerHeight;

	                        var elementOffset = element[0].getBoundingClientRect().top + window.pageYOffset;

	                        console.log(typeof offset);
	                        console.log((windowScroll - (elementOffset + offset)) + " left");

	                        if (windowScroll > (elementOffset + offset)) {
	                            fired = true;
	                            scope.scrollFire({});
	                            stop();
	                        }
	                    }, 100);

	                    function stop() {
	                        $(window).off("scroll resize blur focus", handler);
	                    }

	                    $(window).on("scroll resize blur focus", handler);
	                    handler();

	                    scope.$on('$destroy', stop);
	                }
	            };
	        }]);

	    // The throttle function from underscore: https://github.com/jashkenas/underscore/blob/master/underscore.js
	    function throttle(func, wait) {
	        var timeout, context, args, result;
	        var previous = 0;

	        var later = function() {
	            previous = + new Date();
	            timeout = null;
	            result = func.apply(context, args);
	            if (!timeout) context = args = null;
	        };

	        var throttled = function() {
	            var now = + new Date();
	            var remaining = wait - (now - previous);
	            context = this;
	            args = arguments;
	            if (remaining <= 0 || remaining > wait) {
	                if (timeout) {
	                    clearTimeout(timeout);
	                    timeout = null;
	                }
	                previous = now;
	                result = func.apply(context, args);
	                if (!timeout) context = args = null;
	            } else if (!timeout) {
	                timeout = setTimeout(later, remaining);
	            }
	            return result;
	        };

	        throttled.cancel = function() {
	            clearTimeout(timeout);
	            previous = 0;
	            timeout = context = args = null;
	        };

	        return throttled;
	    };

	    angular.module("ui.materialize.ngModel", [])
	        .directive("ngModel",["$timeout", function($timeout){
	            return {
	                restrict: 'A',
	                priority: -1, // lower priority than built-in ng-model so it runs first
	                link: function(scope, element, attr) {
	                    scope.$watch(attr.ngModel,function(value, oldValue){
	                        $timeout(function () {
	                            // To stop an infinite feedback-loop with material multiple-select.
	                            if (value instanceof Array && oldValue instanceof Array) {
	                                if (value.length == oldValue.length) {
	                                    return;
	                                }
	                            }
	                            if (value){
	                                element.trigger("change");
	                            } else if(element.attr('placeholder') === undefined) {
	                                if(!element.is(":focus"))
	                                    element.trigger("blur");
	                            }
	                        });
	                    });
	                }
	            };
	        }]);


	    /* example usage:
	    <div slider height='500' transition='400'></div>
	    */
	    angular.module("ui.materialize.slider", [])
	        .directive("slider", ["$timeout", function($timeout){
	            return {
	                restrict: 'A',
	                scope: {
	                    height: '=',
	                    transition: '=',
	                    interval: '=',
	                    indicators: '='
	                },
	                link: function(scope, element, attrs) {
	                    element.addClass("slider");
	                    $timeout(function(){
	                        element.slider({
	                            height: (angular.isDefined(scope.height)) ? scope.height : 400,
	                            transition: (angular.isDefined(scope.transition)) ? scope.transition : 500,
	                            interval: (angular.isDefined(scope.interval)) ? scope.interval : 6000,
	                            indicators: (angular.isDefined(scope.indicators)) ? scope.indicators : true
	                        });
	                    });
	                }
	            };
	        }]);


	    angular.module("ui.materialize.collapsible", [])
	        .directive("collapsible", ["$timeout", function ($timeout) {
	            return {
	                link: function (scope, element, attrs) {
	                    $timeout(function () {
	                        element.collapsible();
	                    });
	                    if ("watch" in attrs) {
	                        scope.$watch(function () {
	                            return element[0].innerHTML;
	                        }, function (oldVal, newVal) {
	                            if (oldVal !== newVal) {
	                                $timeout(function () {
	                                    element.collapsible();
	                                });
	                            }
	                        });
	                    }
	                }
	            };
	        }]);

	    angular.module("ui.materialize.parallax", [])
	        .directive("parallax", ["$timeout", function($timeout){
	            return {
	                link: function(scope, element, attrs) {
	                    $timeout(function(){
	                        element.parallax();
	                    });
	                }
	            };
	        }]);

	    angular.module("ui.materialize.toast", [])
	        .constant("toastConfig", {
	            duration: 3000
	        })
	        .directive("toast", ["toastConfig", function (toastConfig) {
	            return {
	                scope: {
	                    message: "@",
	                    duration: "@",
	                    callback: "&"
	                },
	                link: function (scope, element, attrs) {
	                    element.bind(attrs.toast, function () {
	                        var message = (angular.isDefined(scope.message)) ? scope.message : "";
	                        var toastclass = (angular.isDefined(attrs.toastclass)) ? attrs.toastclass : "";
	                        Materialize.toast(message, scope.duration ? scope.duration : toastConfig.duration, toastclass, scope.callback);
	                    });
	                }
	            };
	        }]);

	    angular.module('ui.materialize.pushpin', [])
	        .directive('pushpin', [function(){
	            return {
	                restrict: 'AE',
	                require: [
	                    '?pushpinTop',
	                    '?pushpinOffset',
	                    '?pushpinBottom'
	                ],
	                link: function (scope, element, attrs) {
	                    var top    = attrs.pushpinTop || 0;
	                    var offset = attrs.pushpinOffset || 0;
	                    var bottom = attrs.pushpinBottom || Infinity;
	                    setTimeout(function () {
	                        element.pushpin({top: top, offset: offset, bottom: bottom});
	                    }, 0);

	                }
	            };
	        }]);

	    // TODO: Add some documentation for this.
	    angular.module("ui.materialize.scrollspy", [])
	        .directive("scrollspy", ["$timeout", function($timeout){
	            return {
	                restrict: 'A',
	                link: function(scope, element, attrs) {
	                    element.addClass("scrollspy");
	                    $timeout(function(){
	                        element.scrollSpy();
	                    });
	                }
	            };
	        }]);

	    angular.module("ui.materialize.tabs", [])
	        .directive("tabs", ["$timeout", function($timeout){
	            return {
	                link: function (scope, element, attrs) {
	                    element.addClass("tabs");
	                    $timeout(function() {
	                        element.tabs();
	                    });
	                }
	            };
	        }]);

	    // Example: <a href="#" data-activates="nav-mobile" class="button-collapse top-nav" data-sidenav="left" data-menuwidth="500"  data-closeonclick="true">
	    // data-activates is handled by the jQuery plugin.
	    angular.module("ui.materialize.sidenav", [])
	        .directive("sidenav", [function () {
	            return {
	                scope: {
	                    menuwidth: "@",
	                    closeonclick: "@"
	                },
	                link: function (scope, element, attrs) {
	                    element.sideNav({
	                        menuWidth: (angular.isDefined(scope.menuwidth)) ? parseInt(scope.menuwidth, 10) : undefined,
	                        edge: attrs.sidenav ? attrs.sidenav : "left",
	                        closeOnClick: (angular.isDefined(scope.closeonclick)) ? scope.closeonclick == "true" : undefined
	                    });
	                }
	            };
	        }]);

	    // This works, unless the content inside the select changes.
	    angular.module("ui.materialize.material_select", [])
	        .directive("materialSelect", ["$compile", "$timeout", function ($compile, $timeout) {
	            return {
	                link: function (scope, element, attrs) {
	                    if (element.is("select")) {
							//BugFix 139: In case of multiple enabled. Avoid the circular looping.
	                        function initSelect(newVal, oldVal) {                            
	                            if(attrs.multiple){
	                                if(oldVal !== undefined && newVal !== undefined){
	                                  if(oldVal.length === newVal.length){
	                                      return;
	                                  }
	                                }
	                                var activeUl = element.siblings("ul.active");
	                                if (newVal !== undefined && activeUl.length) { // If select is open
	                                    var selectedOptions = activeUl.children("li.active").length; // Number of selected elements
	                                    if (selectedOptions == newVal.length) {
	                                        return;
	                                    }
	                                }
	                            } else {
	                                if (newVal == element.val()){
	                                    return;
	                                }
	                            }
	                            element.siblings(".caret").remove();
	                            scope.$evalAsync(function() {
	                              element.material_select();
	                            });
	                        }
	                        $timeout(initSelect);
	                        if (attrs.ngModel) {
	                            scope.$watch(attrs.ngModel, initSelect);
	                        }
	                        if ("watch" in attrs) {
	                            scope.$watch(function () {
	                                return element[0].innerHTML;
	                            }, function (oldVal, newVal) {
	                                if (oldVal !== newVal) {
	                                    $timeout(initSelect);
	                                }
	                            });
	                        }
	                    }
	                }
	            };
	        }]);

	    /*
	     Example usage, notice the empty dropdown tag in the dropdown trigger.
	     <!-- Dropdown Trigger -->
	     <a class='dropdown-button btn' href='javascript:void(0);' data-activates='demoDropdown'
	        dropdown constrain-width="false">
	        Select a demo
	     </a>
	     <!-- Dropdown Structure -->
	     <ul id='demoDropdown' class='dropdown-content'>
	     <li ng-repeat="demo in demoDefiniftions">
	     <a href="javascript:void(0);" ng-click="selectDemo(demo)">{{demo.name}}</a>
	     </li>
	     </ul>*/
	    angular.module("ui.materialize.dropdown", [])
	        .directive("dropdown", ["$timeout", function ($timeout) {
	            return {
	                scope: {
	                    inDuration: "@",
	                    outDuration: "@",
	                    constrainWidth: "@",
	                    hover: "@",
	                    alignment: "@",
	                    gutter: "@",
	                    belowOrigin: "@"
	                },
	                link: function (scope, element, attrs) {
	                    $timeout(function () {
	                        element.dropdown({
	                            inDuration: (angular.isDefined(scope.inDuration)) ? scope.inDuration : undefined,
	                            outDuration: (angular.isDefined(scope.outDuration)) ? scope.outDuration : undefined,
	                            constrain_width: (angular.isDefined(scope.constrainWidth)) ? scope.constrainWidth : undefined,
	                            hover: (angular.isDefined(scope.hover)) ? scope.hover : undefined,
	                            alignment: (angular.isDefined(scope.alignment)) ? scope.alignment : undefined,
	                            gutter: (angular.isDefined(scope.gutter)) ? scope.gutter : undefined,
	                            belowOrigin: (angular.isDefined(scope.belowOrigin)) ? scope.belowOrigin : undefined
	                        });
	                    });
	                }
	            };
	        }]);

	    /**
	     * Instead of adding the .input-field class to a div surrounding a label and input, add the attribute input-field.
	     * That way it will also work when angular destroys/recreates the elements.
	     *
	     * Example:
	     <inputfield style="margin-top:10px">
	     <label>{{name}}:</label>
	     <input type="text" name="{{name}}" ng-model="value">
	     </inputfield>
	     */
	    angular.module("ui.materialize.inputfield", [])
	        .directive('inputField', ["$timeout", function ($timeout) {
	            return {
	                transclude: true,
	                scope: {},
	                link: function (scope, element) {
	                    $timeout(function () {
	                        Materialize.updateTextFields();

	                        // The "> > [selector]", is to restrict to only those tags that are direct children of the directive element. Otherwise we might hit to many elements with the selectors.

	                        // Triggering autoresize of the textareas.
	                        element.find("> > .materialize-textarea").each(function () {
	                            var that = $(this);
	                            that.addClass("materialize-textarea");
	                            that.trigger("autoresize");
	                            var model = that.attr("ng-model");
	                            if (model) {
	                                scope.$parent.$watch(model, function (a, b) {
	                                    if (a !== b) {
	                                        $timeout(function () {
	                                            that.trigger("autoresize");
	                                        });
	                                    }
	                                });
	                            }
	                        });

	                        // Adding char-counters.
	                        element.find('> > .materialize-textarea, > > input').each(function (index, countable) {
	                            countable = angular.element(countable);
	                            if (!countable.siblings('span[class="character-counter"]').length) {
	                                countable.characterCounter();
	                            }
	                        });
	                    });
	                },
	                template: '<div ng-transclude class="input-field"></div>'
	            };
	        }]);

	    /**
	     * Add pickadate directive
	     * Type text is mandatory
	     * Example:
	     <input input-date
	        type="text"
	        name="created"
	        id="inputCreated"
	        ng-model="currentTime"
	        format="dd/mm/yyyy"
	        months-full="{{ monthFr }}"
	        months-short="{{ monthShortFr }}"
	        weekdays-full="{{ weekdaysFullFr }}"
	        weekdays-short="{{ weekdaysShortFr }}"
	        weekdays-letter="{{ weekdaysLetterFr }}"
	        disable="disable"
	        today="today"
	        clear="clear"
	        close="close"
	        on-start="onStart()"
	        on-render="onRender()"
	        on-open="onOpen()"
	        on-close="onClose()"
	        on-set="onSet()"
	        on-stop="onStop()" />
	     */
	    angular.module("ui.materialize.input_date", [])
	        .directive('inputDate', ["$compile", "$timeout", function ($compile, $timeout) {
	            // Fix for issue 46. This gotta be a bug in the materialize code, but this fixes it.
	            var style = $('<style>#inputCreated_root {outline: none;}</style>');
	            $('html > head').append(style);

	            // Define Prototype Date format
	            // Use like this
	            // today = new Date();
	            // var dateString = today.format("dd-m-yy");
	            var dateFormat = function () {

	                var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
	                    timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
	                    timezoneClip = /[^-+\dA-Z]/g,
	                    pad = function (val, len) {
	                        val = String(val);
	                        len = len || 2;
	                        while (val.length < len) {
	                            val = "0" + val;
	                        }
	                        return val;
	                    };

	                // Regexes and supporting functions are cached through closure
	                return function (date, mask, utc) {

	                    var dF = dateFormat;

	                    // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
	                    if (arguments.length === 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
	                        mask = date;
	                        date = undefined;
	                    }

	                    // Passing date through Date applies Date.parse, if necessary
	                    date = date ? new Date(date) : new Date();
	                    if (isNaN(date)) throw SyntaxError("invalid date");

	                    mask = String(dF.masks[mask] || mask || dF.masks["default"]);

	                    // Allow setting the utc argument via the mask
	                    if (mask.slice(0, 4) == "UTC:") {
	                        mask = mask.slice(4);
	                        utc = true;
	                    }

	                    var _ = utc ? "getUTC" : "get",
	                        d = date[ _ + "Date" ](),
	                        D = date[ _ + "Day" ](),
	                        m = date[ _ + "Month" ](),
	                        y = date[ _ + "FullYear" ](),
	                        H = date[ _ + "Hours" ](),
	                        M = date[ _ + "Minutes" ](),
	                        s = date[ _ + "Seconds" ](),
	                        L = date[ _ + "Milliseconds" ](),
	                        o = utc ? 0 : date.getTimezoneOffset(),
	                        flags = {
	                            d:    d,
	                            dd:   pad(d),
	                            ddd:  dF.i18n.dayNames[D],
	                            dddd: dF.i18n.dayNames[D + 7],
	                            m:    m + 1,
	                            mm:   pad(m + 1),
	                            mmm:  dF.i18n.monthNames[m],
	                            mmmm: dF.i18n.monthNames[m + 12],
	                            yy:   String(y).slice(2),
	                            yyyy: y,
	                            h:    H % 12 || 12,
	                            hh:   pad(H % 12 || 12),
	                            H:    H,
	                            HH:   pad(H),
	                            M:    M,
	                            MM:   pad(M),
	                            s:    s,
	                            ss:   pad(s),
	                            l:    pad(L, 3),
	                            L:    pad(L > 99 ? Math.round(L / 10) : L),
	                            t:    H < 12 ? "a"  : "p",
	                            tt:   H < 12 ? "am" : "pm",
	                            T:    H < 12 ? "A"  : "P",
	                            TT:   H < 12 ? "AM" : "PM",
	                            Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
	                            o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
	                            S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
	                        };

	                    return mask.replace(token, function ($0) {
	                        return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
	                    });
	                };
	            }();

	            // Some common format strings
	            dateFormat.masks = {
	               "default":      "ddd mmm dd yyyy HH:MM:ss",
	                shortDate:      "m/d/yy",
	                mediumDate:     "mmm d, yyyy",
	                longDate:       "mmmm d, yyyy",
	                fullDate:       "dddd, mmmm d, yyyy",
	                shortTime:      "h:MM TT",
	                mediumTime:     "h:MM:ss TT",
	                longTime:       "h:MM:ss TT Z",
	                isoDate:        "yyyy-mm-dd",
	                isoTime:        "HH:MM:ss",
	                isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
	                isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
	            };

	            // Internationalization strings
	            dateFormat.i18n = {
	                dayNames: [
	                    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
	                    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	                ],
	                monthNames: [
	                    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
	                    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	                ]
	            };

	            // For convenience...
	            Date.prototype.format = function (mask, utc) {
	                return dateFormat(this, mask, utc);
	            };

	            /**
	             * Validate date object
	             * @param  {Date}  date
	             * @return {Boolean}
	             */
	            var isValidDate = function(date) {
	                if( Object.prototype.toString.call(date) === '[object Date]' ) {
	                    return !isNaN(date.getTime());
	                }
	                return false;
	            };

	            return {
	                require: 'ngModel',
	                scope: {
	                    container: "@",
	                    format: "@",
	                    formatSubmit: "@",
	                    monthsFull: "@",
	                    monthsShort: "@",
	                    weekdaysFull: "@",
	                    weekdaysShort: "@",
	                    weekdaysLetter: "@",
	                    firstDay: "=",
	                    disable: "=",
	                    today: "=",
	                    clear: "=",
	                    close: "=",
	                    selectYears: "=",
	                    onStart: "&",
	                    onRender: "&",
	                    onOpen: "&",
	                    onClose: "&",
	                    onSet: "&",
	                    onStop: "&",
	                    ngReadonly: "=?",
	                    max: "@",
	                    min: "@"
	                },
	                link: function (scope, element, attrs, ngModelCtrl) {

	                    ngModelCtrl.$formatters.unshift(function (modelValue) {
	                        if (modelValue) {
	                            var date = new Date(modelValue);
	                            return (angular.isDefined(scope.format)) ? date.format(scope.format) : date.format('d mmmm, yyyy');
	                        }
	                        return null;
	                    });

	                    var monthsFull = (angular.isDefined(scope.monthsFull)) ? scope.$eval(scope.monthsFull) : undefined,
	                        monthsShort = (angular.isDefined(scope.monthsShort)) ? scope.$eval(scope.monthsShort) : undefined,
	                        weekdaysFull = (angular.isDefined(scope.weekdaysFull)) ? scope.$eval(scope.weekdaysFull) : undefined,
	                        weekdaysShort = (angular.isDefined(scope.weekdaysShort)) ? scope.$eval(scope.weekdaysShort) : undefined,
	                        weekdaysLetter = (angular.isDefined(scope.weekdaysLetter)) ? scope.$eval(scope.weekdaysLetter) : undefined;


	                    $compile(element.contents())(scope);
	                    if (!(scope.ngReadonly)) {
	                        $timeout(function () {
	                            var pickadateInput = element.pickadate({
	                                container : (angular.isDefined(scope.container)) ? scope.container : 'body',
	                                format: (angular.isDefined(scope.format)) ? scope.format : undefined,
	                                formatSubmit: (angular.isDefined(scope.formatSubmit)) ? scope.formatSubmit : undefined,
	                                monthsFull: (angular.isDefined(monthsFull)) ? monthsFull : undefined,
	                                monthsShort: (angular.isDefined(monthsShort)) ? monthsShort : undefined,
	                                weekdaysFull: (angular.isDefined(weekdaysFull)) ? weekdaysFull : undefined,
	                                weekdaysShort: (angular.isDefined(weekdaysShort)) ? weekdaysShort : undefined,
	                                weekdaysLetter: (angular.isDefined(weekdaysLetter)) ? weekdaysLetter : undefined,
	                                firstDay: (angular.isDefined(scope.firstDay)) ? scope.firstDay : 0,
	                                disable: (angular.isDefined(scope.disable)) ? scope.disable : undefined,
	                                today: (angular.isDefined(scope.today)) ? scope.today : undefined,
	                                clear: (angular.isDefined(scope.clear)) ? scope.clear : undefined,
	                                close: (angular.isDefined(scope.close)) ? scope.close : undefined,
	                                selectYears: (angular.isDefined(scope.selectYears)) ? scope.selectYears : undefined,
	                                onStart: (angular.isDefined(scope.onStart)) ? function(){ scope.onStart(); } : undefined,
	                                onRender: (angular.isDefined(scope.onRender)) ? function(){ scope.onRender(); } : undefined,
	                                onOpen: (angular.isDefined(scope.onOpen)) ? function(){ scope.onOpen(); } : undefined,
	                                onClose: (angular.isDefined(scope.onClose)) ? function(){ scope.onClose(); } : undefined,
	                                onSet: (angular.isDefined(scope.onSet)) ? function(){ scope.onSet(); } : undefined,
	                                onStop: (angular.isDefined(scope.onStop)) ? function(){ scope.onStop(); } : undefined
	                            });
	                            //pickadate API
	                            var picker = pickadateInput.pickadate('picker');

	                            //watcher of min and max
	                            scope.$watch('max', function(newMax) {
	                                if( picker ) {
	                                    var maxDate = new Date(newMax);
	                                    picker.set({max: isValidDate(maxDate) ? maxDate : false});
	                                }
	                            });
	                            scope.$watch('min', function(newMin) {
	                                if( picker ) {
	                                    var minDate = new Date(newMin);
	                                    picker.set({min: isValidDate(minDate) ? minDate : false});
	                                }
	                            });
	                        });
	                    }
	                }
	            };
	        }]);



	    /**
	     * time-picker directive
	     * Example:
	     <label for="input_starttime">Time</label>
	     <input id="input_starttime" input-clock data-twelvehour="false" type="text">
	     */
	    angular.module("ui.materialize.input_clock", [])
	        .directive('inputClock', [function () {
	            return {
	                restrict: 'A',
	                scope: {
	                    default: "@",
	                    fromnow: "=?",
	                    donetext: "@",
	                    autoclose: "=?",
	                    ampmclickable: "=?",
	                    darktheme: "=?",
	                    twelvehour: "=?",
	                    vibrate: "=?"
	                },
	                link: function (scope, element) {
	                    $(element).addClass("timepicker");
	                    if (!(scope.ngReadonly)) {
	                        element.clockpicker({
	                            default: (angular.isDefined(scope.default)) ? scope.default : '',
	                            fromnow: (angular.isDefined(scope.fromnow)) ? scope.fromnow : 0,
	                            donetext: (angular.isDefined(scope.donetext)) ? scope.donetext : 'Done',
	                            autoclose: (angular.isDefined(scope.autoclose)) ? scope.autoclose : false,
	                            ampmclickable: (angular.isDefined(scope.ampmclickable)) ? scope.ampmclickable : false,
	                            darktheme: (angular.isDefined(scope.darktheme)) ? scope.darktheme : false,
	                            twelvehour: (angular.isDefined(scope.twelvehour)) ? scope.twelvehour : true,
	                            vibrate: (angular.isDefined(scope.vibrate)) ? scope.vibrate : true
	                        });
	                    }
	                }
	            };
	        }]);



	    /**
	     * Example:
	     <pagination
	        page="1"
	        page-size="10"
	        total="100"
	        pagination-action="changePage(page)"
	        ul-class="customClass">
	     * ul-class could be either an object or a string
	     *
	     * Based on https://github.com/brantwills/Angular-Paging
	     */
	    angular.module("ui.materialize.pagination", [])
	        .directive('pagination', ["$sce", function ($sce) {

	            // Assign null-able scope values from settings
	            function setScopeValues(scope, attrs) {
	                scope.List = [];
	                scope.Hide = false;
	                scope.page = parseInt(scope.page) || 1;
	                scope.total = parseInt(scope.total) || 0;
	                scope.dots = scope.dots || '...';
	                scope.ulClass = scope.ulClass || attrs.ulClass || 'pagination';
	                scope.adjacent = parseInt(scope.adjacent) || 2;
	                scope.activeClass = 'active';
	                scope.disabledClass = 'disabled';

	                scope.scrollTop = scope.$eval(attrs.scrollTop);
	                scope.hideIfEmpty = scope.$eval(attrs.hideIfEmpty);
	                scope.showPrevNext = scope.$eval(attrs.showPrevNext);
	                scope.useSimplePrevNext = scope.$eval(attrs.useSimplePrevNext);
	            }

	            // Validate and clean up any scope values
	            // This happens after we have set the
	            // scope values
	            function validateScopeValues(scope, pageCount) {
	                // Block where the page is larger than the pageCount
	                if (scope.page > pageCount) {
	                    scope.page = pageCount;
	                }

	                // Block where the page is less than 0
	                if (scope.page <= 0) {
	                    scope.page = 1;
	                }

	                // Block where adjacent value is 0 or below
	                if (scope.adjacent <= 0) {
	                    scope.adjacent = 2;
	                }

	                // Hide from page if we have 1 or less pages
	                // if directed to hide empty
	                if (pageCount <= 1) {
	                    scope.Hide = scope.hideIfEmpty;
	                }
	            }

	            // Internal Pagination Click Action
	            function internalAction(scope, page) {
	                page = page.valueOf();
	                // Block clicks we try to load the active page
	                if (scope.page == page) {
	                    return;
	                }

	                // Update the page in scope and fire any paging actions
	                scope.page = page;
	                scope.paginationAction({
	                    page: page
	                });

	                // If allowed scroll up to the top of the page
	                if (scope.scrollTop) {
	                    scrollTo(0, 0);
	                }
	            }

	            // Add Range of Numbers
	            function addRange(start, finish, scope) {
	                var i = 0;
	                for (i = start; i <= finish; i++) {
	                    var item = {
	                        value: $sce.trustAsHtml(i.toString()),
	                        liClass: scope.page == i ? scope.activeClass : 'waves-effect',
	                        action: function() {
	                            internalAction(scope, this.value);
	                        }
	                    };

	                    scope.List.push(item);
	                }
	            }

	            // Add Dots ie: 1 2 [...] 10 11 12 [...] 56 57
	            function addDots(scope) {
	                scope.List.push({
	                    value: $sce.trustAsHtml(scope.dots)
	                });
	            }

	            // Add First Pages
	            function addFirst(scope, next) {
	                addRange(1, 2, scope);

	                // We ignore dots if the next value is 3
	                // ie: 1 2 [...] 3 4 5 becomes just 1 2 3 4 5
	                if (next != 3) {
	                    addDots(scope);
	                }
	            }

	            /**
	            * Add the first, previous, next, and last buttons if desired
	            * The logic is defined by the mode of interest
	            * This method will simply return if the scope.showPrevNext is false
	            * This method will simply return if there are no pages to display
	            *
	            * @param {Object} scope - The local directive scope object
	            * @param {int} pageCount - The last page number or total page count
	            * @param {string} mode - The mode of interest either prev or last
	            */
	            function addPrevNext(scope, pageCount, mode){

	                // Ignore if we are not showing
	                // or there are no pages to display
	                if (!scope.showPrevNext || pageCount < 1) { return; }

	                // Local variables to help determine logic
	                var disabled, alpha, beta;


	                // Determine logic based on the mode of interest
	                // Calculate the previous / next page and if the click actions are allowed
	                if(mode === 'prev') {

	                    disabled = scope.page - 1 <= 0;
	                    var prevPage = scope.page - 1 <= 0 ? 1 : scope.page - 1;

	                    if (scope.useSimplePrevNext) {
	                        alpha = {value: "<<", title: 'First Page', page: 1};
	                        beta = {value: "<", title: 'Previous Page', page: prevPage };
	                    } else {
	                        alpha = {value: "<i class=\"material-icons\">first_page</i>", title: 'First Page', page: 1};
	                        beta = {value: "<i class=\"material-icons\">chevron_left</i>", title: 'Previous Page', page: prevPage };
	                    }

	                } else {

	                    disabled = scope.page + 1 > pageCount;
	                    var nextPage = scope.page + 1 >= pageCount ? pageCount : scope.page + 1;

	                    if (scope.useSimplePrevNext) {
	                        alpha = { value : ">", title: 'Next Page', page: nextPage };
	                        beta = { value: ">>", title: 'Last Page', page: pageCount };
	                    } else {
	                        alpha = { value : "<i class=\"material-icons\">chevron_right</i>", title: 'Next Page', page: nextPage };
	                        beta = { value: "<i class=\"material-icons\">last_page</i>", title: 'Last Page', page: pageCount };
	                    }

	                }

	                // Create the Add Item Function
	                var addItem = function(item, disabled){
	                    scope.List.push({
	                        value: $sce.trustAsHtml(item.value),
	                        title: item.title,
	                        liClass: disabled ? scope.disabledClass : '',
	                        action: function(){
	                            if(!disabled) {
	                                internalAction(scope, item.page);
	                            }
	                        }
	                    });
	                };

	                // Add our items
	                addItem(alpha, disabled);
	                addItem(beta, disabled);
	            }

	            function addLast(pageCount, scope, prev) {
	                // We ignore dots if the previous value is one less that our start range
	                // ie: 1 2 3 4 [...] 5 6  becomes just 1 2 3 4 5 6
	                if (prev != pageCount -2) {
	                    addDots(scope);
	                }

	                addRange(pageCount -1, pageCount, scope);
	            }

	            // Main build function
	            function build(scope, attrs) {

	                // Block divide by 0 and empty page size
	                if (!scope.pageSize || scope.pageSize < 0)
	                {
	                    return;
	                }

	                // Assign scope values
	                setScopeValues(scope, attrs);

	                // local variables
	                var start,
	                    size = scope.adjacent * 2,
	                    pageCount = Math.ceil(scope.total / scope.pageSize);

	                // Validation Scope
	                validateScopeValues(scope, pageCount);

	                // Add the Next and Previous buttons to our list
	                addPrevNext(scope, pageCount, 'prev');

	                if (pageCount < (5 + size)) {

	                    start = 1;
	                    addRange(start, pageCount, scope);

	                } else {

	                    var finish;

	                    if (scope.page <= (1 + size)) {

	                        start = 1;
	                        finish = 2 + size + (scope.adjacent - 1);

	                        addRange(start, finish, scope);
	                        addLast(pageCount, scope, finish);

	                    } else if (pageCount - size > scope.page && scope.page > size) {

	                        start = scope.page - scope.adjacent;
	                        finish = scope.page + scope.adjacent;

	                        addFirst(scope, start);
	                        addRange(start, finish, scope);
	                        addLast(pageCount, scope, finish);

	                    } else {

	                        start = pageCount - (1 + size + (scope.adjacent - 1));
	                        finish = pageCount;

	                        addFirst(scope, start);
	                        addRange(start, finish, scope);

	                    }
	                }
	                addPrevNext(scope, pageCount, 'next');
	            }

	            return {
	                restrict: 'EA',
	                scope: {
	                    page: '=',
	                    pageSize: '=',
	                    total: '=',
	                    dots: '@',
	                    hideIfEmpty: '@',
	                    adjacent: '@',
	                    scrollTop: '@',
	                    showPrevNext: '@',
	                    useSimplePrevNext: '@',
	                    paginationAction: '&',
	                    ulClass: '=?'
	                },
	                template:
	                    '<ul ng-hide="Hide" ng-class="ulClass"> ' +
	                        '<li ' +
	                        'ng-class="Item.liClass" ' +
	                        'ng-click="Item.action()" ' +
	                        'ng-repeat="Item in List"> ' +
	                        '<a href> ' +
	                        '<span ng-bind-html="Item.value"></span> ' +
	                        '</a>' +
	                    '</ul>',
	                link: function (scope, element, attrs) {

	                    // Hook in our watched items
	                    scope.$watchCollection('[page, total, pageSize]', function () {
	                        build(scope, attrs);
	                    });
	                }
	            };
	        }]);

	    /*     example usage:
	     <!-- Modal Trigger -->
	     <a class='btn' href='#demoModal' modal>show Modal</a>
	     <!-- Modal Structure -->
	     <div id="demoModal" class="modal">
	     <div class="modal-content">
	     <h4>Modal Header</h4>
	     <p>A bunch of text</p>
	     </div>
	     <div class="modal-footer">
	     <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
	     </div>
	     </div>
	     */
	    angular.module("ui.materialize.modal", [])
	        .directive("modal", ["$compile", "$timeout", function ($compile, $timeout) {
	            return {
	                scope: {
	                    dismissible: "=",
	                    opacity: "@",
	                    inDuration: "@",
	                    outDuration: "@",
	                    ready: '&?',
	                    complete: '&?',
	                    open: '=?',
	                    enableTabs: '@?'
	                },
	                link: function (scope, element, attrs) {
	                    $timeout(function () {
	                        var modalEl = $(attrs.href ? attrs.href : '#' + attrs.target);
	                        $compile(element.contents())(scope);

	                        var complete = function () {
	                            angular.isFunction(scope.complete) && scope.$eval(scope.complete());

	                            scope.open = false;
	                            scope.$apply();
	                        };
	                        var ready = function() {
	                          angular.isFunction(scope.ready) && scope.$eval(scope.ready());
	                          // If tab support is enabled we need to re-init the tabs
	                          // See https://github.com/Dogfalo/materialize/issues/1634
	                          if (scope.enableTabs) {
	                             modalEl.find('ul.tabs').tabs();
	                          }
	                        };
	                        var options = {
	                            dismissible: (angular.isDefined(scope.dismissible)) ? scope.dismissible : undefined,
	                            opacity: (angular.isDefined(scope.opacity)) ? scope.opacity : undefined,
	                            in_duration: (angular.isDefined(scope.inDuration)) ? scope.inDuration : undefined,
	                            out_duration: (angular.isDefined(scope.outDuration)) ? scope.outDuration : undefined,
	                            ready: ready,
	                            complete: complete,
	                        };
	                        element.leanModal(options);

	                        // Setup watch for opening / closing modal programatically.
	                        if (angular.isDefined(attrs.open) && modalEl.length > 0) {
	                          scope.$watch('open', function(value, lastValue) {
	                            if (!angular.isDefined(value)) { return; }
	                            (value === true) ? modalEl.openModal(options) : modalEl.closeModal();
	                          });
	                        }
	                    });
	                }
	            };
	        }]);


	    /*     example usage:
	    <!-- data-position can be : bottom, top, left, or right -->
	    <!-- data-delay controls delay before tooltip shows (in milliseconds)-->
	    <a class="btn" tooltipped data-position="bottom" data-delay="50" data-tooltip="I am tooltip">Hover me!</a>
	     */
	    angular.module("ui.materialize.tooltipped", [])
	        .directive("tooltipped", ["$compile", "$timeout", function ($compile, $timeout) {
	            return {
	                restrict: "EA",
	                scope: true,
	                link: function (scope, element, attrs) {
	                    element.addClass("tooltipped");
	                    $compile(element.contents())(scope);

	                    $timeout(function () {
	                        element.tooltip();
	                    });
	                    scope.$on('$destroy', function () {
	                        element.tooltip("remove");
	                    });
	                }
	            };
	        }]);

	    /*     example usage:
	    <!-- normal materialboxed -->
	    <img materialboxed class="materialboxed responsive-img" width="650" src="images/sample-1.jpg">

	    <!-- caption materialboxed -->
	    <img materialboxed class="materialboxed" data-caption="A picture of some deer and tons of trees" width="250" src="iamges/nature_portrait_by_pw_fotografie-d63tx0n.jpg">

	     */
	    angular.module("ui.materialize.materialboxed", [])
	        .directive("materialboxed", ["$timeout", function($timeout){
	            return {
	                restrict: 'A',
	                link: function(scope, element, attrs) {

	                    $timeout(function(){
	                        element.materialbox();
	                    });

	                }
	            };
	        }]);

	    /* example usage:
	    <div nouislider ng-model='value' min="0" max="100"></div>
	    */
	    angular.module("ui.materialize.nouislider", [])
	        .directive("nouislider", ["$timeout", function($timeout){
	            return {
	                restrict: 'A',
	                scope: {
	                    ngModel: '=',
	                    min: '@',
	                    max: '@',
	                    step: '@?',
	                    connect: '@?',
	                    tooltips: '@?'
	                },
	                link: function (scope, element, attrs) {
	                    $timeout(function () {
	                        noUiSlider.create(element[0], {
	                          	start: scope.ngModel || 0,
	                          	step: parseFloat(scope.step || 1),
	                            tooltips: angular.isDefined(scope.connect) ? scope.tooltips : undefined,
	                          	connect: angular.isDefined(scope.connect) ? scope.connect : 'lower',
	                          	range: {
	                          		'min': parseFloat(scope.min || 0),
	                          		'max': parseFloat(scope.max || 100),
	                          	},
	                            format: {
	                                to: function (number) {
	                                    return Math.round(number * 100) / 100;
	                                },
	                                from: function (number) {
	                                    return Number(number);
	                                }
	                            }
	                        });

	                        element[0].noUiSlider.on('update', function(values, input) {
	                          scope.ngModel = parseInt(values[0], 10);
	                          scope.$apply();
	                        });
	                    });
	                }
	            };
	        }]);

	}(angular));

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var routeConfig = function routeConfig($routeProvider) {
	  $routeProvider.when('/', {
	    template: '<home usermodel="$resolve.usermodel"></home>',
	    resolve: {
	      usermodel: function usermodel(usersModel) {
	        return usersModel;
	      }
	    }
	  }).when('/team', {
	    template: '<team model="$resolve.model" />',
	    resolve: {
	      model: function model(teamModel) {
	        teamModel.resolveTeams('plaah');
	        return teamModel;
	      }
	    }
	  });
	};
	exports.default = routeConfig;

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = LajitFilter;
	function LajitFilter() {
	  return function (input) {
	    return input.join(', ');
	  };
	}

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FacebookModel = function () {
	  function FacebookModel(facebookService) {
	    _classCallCheck(this, FacebookModel);

	    this.data = {};
	    this.facebookService = facebookService;
	  }

	  _createClass(FacebookModel, [{
	    key: 'init',
	    value: function init(data) {
	      angular.copy(data, this.data);
	      return this.data;
	    }
	  }, {
	    key: 'resolveUserdata',
	    value: function resolveUserdata() {
	      var _this = this;

	      if (Object.keys(this.data).length > 0) {
	        console.log('data found in cache');
	        return this.data;
	      }

	      var successLogin = function successLogin(response) {
	        console.log('successLogin - ', response);
	        return _this.facebookService.readUserInfo();
	      };

	      return this.facebookService.checkLoginStatus().then(successLogin, function (error) {
	        console.log('in login status success');
	        return _this.facebookService.login().then(successLogin);
	      }).then(function (userData) {
	        console.log('got use data', userData);
	        return _this.init(userData);
	      });
	    }
	  }]);

	  return FacebookModel;
	}();

	exports.default = FacebookModel;

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = UsersModel;
	function UsersModel() {
	  var self = this;
	  self.users = [{
	    userid: 527189480,
	    imgsrc: 'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/521759_10151510974179481_904784480_n.jpg?oh=69a4879f033c0d3ce5fd8dbcd6e3b457&oe=5799FF26',
	    name: 'Toni Aho',
	    lajit: ['baseball', 'icehockey', 'soccer'],
	    asked: 2
	  }, {
	    userid: 635275414,
	    name: 'Timo Aho',
	    lajit: ['baseball', 'salibandy', 'pyöräily'],
	    imgsrc: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/293251_10151116551645415_440595073_n.jpg?oh=5222cfe628a737f47d445aaff59ca23b&oe=57C8FF57',
	    asked: 3
	  }, {
	    userid: 739635205,
	    name: 'Kaisu Piiroinen',
	    lajit: ['basketball'],
	    imgsrc: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-0/p206x206/10580205_10154696179920206_2081127511127165707_n.jpg?oh=819ed68137d96a155c4957f43bfd223b&oe=57D35B8B',
	    asked: 1
	  }];

	  self.addAsked = function (user) {
	    console.log('user', user);
	    user.asked += 1;
	  };
	}

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LOGIN_SCOPES = 'email';

	var FacebookService = function () {
	  function FacebookService($q) {
	    _classCallCheck(this, FacebookService);

	    console.log('initializing q');
	    this.$q = $q;
	  }

	  _createClass(FacebookService, [{
	    key: 'checkLoginStatus',
	    value: function checkLoginStatus() {
	      var deferred = this.$q.defer();
	      console.log('quu');
	      FB.getLoginStatus(function (response) {
	        console.log('status', response);
	        if ('connected' === response.status) {
	          deferred.resolve(response);
	        } else {
	          deferred.reject(response);
	        }
	      });
	      return deferred.promise;
	    }
	  }, {
	    key: 'readUserInfo',
	    value: function readUserInfo() {
	      var deferred = this.$q.defer();
	      FB.api('/me', { fields: 'picture.height(300), name, birthday, email' }, function (response) {
	        if (!response || response.error) {
	          deferred.reject('Error occured');
	        } else {
	          deferred.resolve(response);
	        }
	      });
	      return deferred.promise;
	    }
	  }, {
	    key: 'login',
	    value: function login() {
	      var deferred = this.$q.defer();
	      console.log('do login');
	      FB.login(function (result) {
	        console.log('result', result);
	        if (result.status === 'not_authorized') {
	          deferred.reject(result.status);
	        } else {
	          deferred.resolve(result);
	        }
	      }, { scope: LOGIN_SCOPES });
	      return deferred.promise;
	    }
	  }]);

	  return FacebookService;
	}();

	exports.default = FacebookService;

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var spinnerProvider = function spinnerProvider($httpProvider) {

	  var checkPendingRequests = function checkPendingRequests(preloaderModel, http) {
	    if (http.pendingRequests.length < 1) {
	      preloaderModel.show = false;
	    }
	  };
	  $httpProvider.interceptors.push(function ($injector, preloaderModel) {
	    return {
	      'request': function request(config) {
	        console.log('doing request');
	        preloaderModel.show = true;
	        return config;
	      },

	      'response': function response(_response) {
	        var http = $injector.get('$http');
	        checkPendingRequests(preloaderModel, http);
	        return _response;
	      },
	      'responseError': function responseError(rejection) {
	        var http = $injector.get('$http');
	        checkPendingRequests(preloaderModel, http);
	        return rejection;
	      }
	    };
	  });
	};
	exports.default = spinnerProvider;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(42);
	module.exports = 'ngResource';


/***/ },
/* 42 */
/***/ function(module, exports) {

	/**
	 * @license AngularJS v1.5.6
	 * (c) 2010-2016 Google, Inc. http://angularjs.org
	 * License: MIT
	 */
	(function(window, angular) {'use strict';

	var $resourceMinErr = angular.$$minErr('$resource');

	// Helper functions and regex to lookup a dotted path on an object
	// stopping at undefined/null.  The path must be composed of ASCII
	// identifiers (just like $parse)
	var MEMBER_NAME_REGEX = /^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;

	function isValidDottedPath(path) {
	  return (path != null && path !== '' && path !== 'hasOwnProperty' &&
	      MEMBER_NAME_REGEX.test('.' + path));
	}

	function lookupDottedPath(obj, path) {
	  if (!isValidDottedPath(path)) {
	    throw $resourceMinErr('badmember', 'Dotted member path "@{0}" is invalid.', path);
	  }
	  var keys = path.split('.');
	  for (var i = 0, ii = keys.length; i < ii && angular.isDefined(obj); i++) {
	    var key = keys[i];
	    obj = (obj !== null) ? obj[key] : undefined;
	  }
	  return obj;
	}

	/**
	 * Create a shallow copy of an object and clear other fields from the destination
	 */
	function shallowClearAndCopy(src, dst) {
	  dst = dst || {};

	  angular.forEach(dst, function(value, key) {
	    delete dst[key];
	  });

	  for (var key in src) {
	    if (src.hasOwnProperty(key) && !(key.charAt(0) === '$' && key.charAt(1) === '$')) {
	      dst[key] = src[key];
	    }
	  }

	  return dst;
	}

	/**
	 * @ngdoc module
	 * @name ngResource
	 * @description
	 *
	 * # ngResource
	 *
	 * The `ngResource` module provides interaction support with RESTful services
	 * via the $resource service.
	 *
	 *
	 * <div doc-module-components="ngResource"></div>
	 *
	 * See {@link ngResource.$resource `$resource`} for usage.
	 */

	/**
	 * @ngdoc service
	 * @name $resource
	 * @requires $http
	 * @requires ng.$log
	 * @requires $q
	 * @requires ng.$timeout
	 *
	 * @description
	 * A factory which creates a resource object that lets you interact with
	 * [RESTful](http://en.wikipedia.org/wiki/Representational_State_Transfer) server-side data sources.
	 *
	 * The returned resource object has action methods which provide high-level behaviors without
	 * the need to interact with the low level {@link ng.$http $http} service.
	 *
	 * Requires the {@link ngResource `ngResource`} module to be installed.
	 *
	 * By default, trailing slashes will be stripped from the calculated URLs,
	 * which can pose problems with server backends that do not expect that
	 * behavior.  This can be disabled by configuring the `$resourceProvider` like
	 * this:
	 *
	 * ```js
	     app.config(['$resourceProvider', function($resourceProvider) {
	       // Don't strip trailing slashes from calculated URLs
	       $resourceProvider.defaults.stripTrailingSlashes = false;
	     }]);
	 * ```
	 *
	 * @param {string} url A parameterized URL template with parameters prefixed by `:` as in
	 *   `/user/:username`. If you are using a URL with a port number (e.g.
	 *   `http://example.com:8080/api`), it will be respected.
	 *
	 *   If you are using a url with a suffix, just add the suffix, like this:
	 *   `$resource('http://example.com/resource.json')` or `$resource('http://example.com/:id.json')`
	 *   or even `$resource('http://example.com/resource/:resource_id.:format')`
	 *   If the parameter before the suffix is empty, :resource_id in this case, then the `/.` will be
	 *   collapsed down to a single `.`.  If you need this sequence to appear and not collapse then you
	 *   can escape it with `/\.`.
	 *
	 * @param {Object=} paramDefaults Default values for `url` parameters. These can be overridden in
	 *   `actions` methods. If a parameter value is a function, it will be executed every time
	 *   when a param value needs to be obtained for a request (unless the param was overridden).
	 *
	 *   Each key value in the parameter object is first bound to url template if present and then any
	 *   excess keys are appended to the url search query after the `?`.
	 *
	 *   Given a template `/path/:verb` and parameter `{verb:'greet', salutation:'Hello'}` results in
	 *   URL `/path/greet?salutation=Hello`.
	 *
	 *   If the parameter value is prefixed with `@` then the value for that parameter will be extracted
	 *   from the corresponding property on the `data` object (provided when calling an action method).
	 *   For example, if the `defaultParam` object is `{someParam: '@someProp'}` then the value of
	 *   `someParam` will be `data.someProp`.
	 *
	 * @param {Object.<Object>=} actions Hash with declaration of custom actions that should extend
	 *   the default set of resource actions. The declaration should be created in the format of {@link
	 *   ng.$http#usage $http.config}:
	 *
	 *       {action1: {method:?, params:?, isArray:?, headers:?, ...},
	 *        action2: {method:?, params:?, isArray:?, headers:?, ...},
	 *        ...}
	 *
	 *   Where:
	 *
	 *   - **`action`** – {string} – The name of action. This name becomes the name of the method on
	 *     your resource object.
	 *   - **`method`** – {string} – Case insensitive HTTP method (e.g. `GET`, `POST`, `PUT`,
	 *     `DELETE`, `JSONP`, etc).
	 *   - **`params`** – {Object=} – Optional set of pre-bound parameters for this action. If any of
	 *     the parameter value is a function, it will be executed every time when a param value needs to
	 *     be obtained for a request (unless the param was overridden).
	 *   - **`url`** – {string} – action specific `url` override. The url templating is supported just
	 *     like for the resource-level urls.
	 *   - **`isArray`** – {boolean=} – If true then the returned object for this action is an array,
	 *     see `returns` section.
	 *   - **`transformRequest`** –
	 *     `{function(data, headersGetter)|Array.<function(data, headersGetter)>}` –
	 *     transform function or an array of such functions. The transform function takes the http
	 *     request body and headers and returns its transformed (typically serialized) version.
	 *     By default, transformRequest will contain one function that checks if the request data is
	 *     an object and serializes to using `angular.toJson`. To prevent this behavior, set
	 *     `transformRequest` to an empty array: `transformRequest: []`
	 *   - **`transformResponse`** –
	 *     `{function(data, headersGetter)|Array.<function(data, headersGetter)>}` –
	 *     transform function or an array of such functions. The transform function takes the http
	 *     response body and headers and returns its transformed (typically deserialized) version.
	 *     By default, transformResponse will contain one function that checks if the response looks
	 *     like a JSON string and deserializes it using `angular.fromJson`. To prevent this behavior,
	 *     set `transformResponse` to an empty array: `transformResponse: []`
	 *   - **`cache`** – `{boolean|Cache}` – If true, a default $http cache will be used to cache the
	 *     GET request, otherwise if a cache instance built with
	 *     {@link ng.$cacheFactory $cacheFactory}, this cache will be used for
	 *     caching.
	 *   - **`timeout`** – `{number}` – timeout in milliseconds.<br />
	 *     **Note:** In contrast to {@link ng.$http#usage $http.config}, {@link ng.$q promises} are
	 *     **not** supported in $resource, because the same value would be used for multiple requests.
	 *     If you are looking for a way to cancel requests, you should use the `cancellable` option.
	 *   - **`cancellable`** – `{boolean}` – if set to true, the request made by a "non-instance" call
	 *     will be cancelled (if not already completed) by calling `$cancelRequest()` on the call's
	 *     return value. Calling `$cancelRequest()` for a non-cancellable or an already
	 *     completed/cancelled request will have no effect.<br />
	 *   - **`withCredentials`** - `{boolean}` - whether to set the `withCredentials` flag on the
	 *     XHR object. See
	 *     [requests with credentials](https://developer.mozilla.org/en/http_access_control#section_5)
	 *     for more information.
	 *   - **`responseType`** - `{string}` - see
	 *     [requestType](https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#responseType).
	 *   - **`interceptor`** - `{Object=}` - The interceptor object has two optional methods -
	 *     `response` and `responseError`. Both `response` and `responseError` interceptors get called
	 *     with `http response` object. See {@link ng.$http $http interceptors}.
	 *
	 * @param {Object} options Hash with custom settings that should extend the
	 *   default `$resourceProvider` behavior.  The supported options are:
	 *
	 *   - **`stripTrailingSlashes`** – {boolean} – If true then the trailing
	 *   slashes from any calculated URL will be stripped. (Defaults to true.)
	 *   - **`cancellable`** – {boolean} – If true, the request made by a "non-instance" call will be
	 *   cancelled (if not already completed) by calling `$cancelRequest()` on the call's return value.
	 *   This can be overwritten per action. (Defaults to false.)
	 *
	 * @returns {Object} A resource "class" object with methods for the default set of resource actions
	 *   optionally extended with custom `actions`. The default set contains these actions:
	 *   ```js
	 *   { 'get':    {method:'GET'},
	 *     'save':   {method:'POST'},
	 *     'query':  {method:'GET', isArray:true},
	 *     'remove': {method:'DELETE'},
	 *     'delete': {method:'DELETE'} };
	 *   ```
	 *
	 *   Calling these methods invoke an {@link ng.$http} with the specified http method,
	 *   destination and parameters. When the data is returned from the server then the object is an
	 *   instance of the resource class. The actions `save`, `remove` and `delete` are available on it
	 *   as  methods with the `$` prefix. This allows you to easily perform CRUD operations (create,
	 *   read, update, delete) on server-side data like this:
	 *   ```js
	 *   var User = $resource('/user/:userId', {userId:'@id'});
	 *   var user = User.get({userId:123}, function() {
	 *     user.abc = true;
	 *     user.$save();
	 *   });
	 *   ```
	 *
	 *   It is important to realize that invoking a $resource object method immediately returns an
	 *   empty reference (object or array depending on `isArray`). Once the data is returned from the
	 *   server the existing reference is populated with the actual data. This is a useful trick since
	 *   usually the resource is assigned to a model which is then rendered by the view. Having an empty
	 *   object results in no rendering, once the data arrives from the server then the object is
	 *   populated with the data and the view automatically re-renders itself showing the new data. This
	 *   means that in most cases one never has to write a callback function for the action methods.
	 *
	 *   The action methods on the class object or instance object can be invoked with the following
	 *   parameters:
	 *
	 *   - HTTP GET "class" actions: `Resource.action([parameters], [success], [error])`
	 *   - non-GET "class" actions: `Resource.action([parameters], postData, [success], [error])`
	 *   - non-GET instance actions:  `instance.$action([parameters], [success], [error])`
	 *
	 *
	 *   Success callback is called with (value, responseHeaders) arguments, where the value is
	 *   the populated resource instance or collection object. The error callback is called
	 *   with (httpResponse) argument.
	 *
	 *   Class actions return empty instance (with additional properties below).
	 *   Instance actions return promise of the action.
	 *
	 *   The Resource instances and collections have these additional properties:
	 *
	 *   - `$promise`: the {@link ng.$q promise} of the original server interaction that created this
	 *     instance or collection.
	 *
	 *     On success, the promise is resolved with the same resource instance or collection object,
	 *     updated with data from server. This makes it easy to use in
	 *     {@link ngRoute.$routeProvider resolve section of $routeProvider.when()} to defer view
	 *     rendering until the resource(s) are loaded.
	 *
	 *     On failure, the promise is rejected with the {@link ng.$http http response} object, without
	 *     the `resource` property.
	 *
	 *     If an interceptor object was provided, the promise will instead be resolved with the value
	 *     returned by the interceptor.
	 *
	 *   - `$resolved`: `true` after first server interaction is completed (either with success or
	 *      rejection), `false` before that. Knowing if the Resource has been resolved is useful in
	 *      data-binding.
	 *
	 *   The Resource instances and collections have these additional methods:
	 *
	 *   - `$cancelRequest`: If there is a cancellable, pending request related to the instance or
	 *      collection, calling this method will abort the request.
	 *
	 * @example
	 *
	 * # Credit card resource
	 *
	 * ```js
	     // Define CreditCard class
	     var CreditCard = $resource('/user/:userId/card/:cardId',
	      {userId:123, cardId:'@id'}, {
	       charge: {method:'POST', params:{charge:true}}
	      });

	     // We can retrieve a collection from the server
	     var cards = CreditCard.query(function() {
	       // GET: /user/123/card
	       // server returns: [ {id:456, number:'1234', name:'Smith'} ];

	       var card = cards[0];
	       // each item is an instance of CreditCard
	       expect(card instanceof CreditCard).toEqual(true);
	       card.name = "J. Smith";
	       // non GET methods are mapped onto the instances
	       card.$save();
	       // POST: /user/123/card/456 {id:456, number:'1234', name:'J. Smith'}
	       // server returns: {id:456, number:'1234', name: 'J. Smith'};

	       // our custom method is mapped as well.
	       card.$charge({amount:9.99});
	       // POST: /user/123/card/456?amount=9.99&charge=true {id:456, number:'1234', name:'J. Smith'}
	     });

	     // we can create an instance as well
	     var newCard = new CreditCard({number:'0123'});
	     newCard.name = "Mike Smith";
	     newCard.$save();
	     // POST: /user/123/card {number:'0123', name:'Mike Smith'}
	     // server returns: {id:789, number:'0123', name: 'Mike Smith'};
	     expect(newCard.id).toEqual(789);
	 * ```
	 *
	 * The object returned from this function execution is a resource "class" which has "static" method
	 * for each action in the definition.
	 *
	 * Calling these methods invoke `$http` on the `url` template with the given `method`, `params` and
	 * `headers`.
	 *
	 * @example
	 *
	 * # User resource
	 *
	 * When the data is returned from the server then the object is an instance of the resource type and
	 * all of the non-GET methods are available with `$` prefix. This allows you to easily support CRUD
	 * operations (create, read, update, delete) on server-side data.

	   ```js
	     var User = $resource('/user/:userId', {userId:'@id'});
	     User.get({userId:123}, function(user) {
	       user.abc = true;
	       user.$save();
	     });
	   ```
	 *
	 * It's worth noting that the success callback for `get`, `query` and other methods gets passed
	 * in the response that came from the server as well as $http header getter function, so one
	 * could rewrite the above example and get access to http headers as:
	 *
	   ```js
	     var User = $resource('/user/:userId', {userId:'@id'});
	     User.get({userId:123}, function(user, getResponseHeaders){
	       user.abc = true;
	       user.$save(function(user, putResponseHeaders) {
	         //user => saved user object
	         //putResponseHeaders => $http header getter
	       });
	     });
	   ```
	 *
	 * You can also access the raw `$http` promise via the `$promise` property on the object returned
	 *
	   ```
	     var User = $resource('/user/:userId', {userId:'@id'});
	     User.get({userId:123})
	         .$promise.then(function(user) {
	           $scope.user = user;
	         });
	   ```
	 *
	 * @example
	 *
	 * # Creating a custom 'PUT' request
	 *
	 * In this example we create a custom method on our resource to make a PUT request
	 * ```js
	 *    var app = angular.module('app', ['ngResource', 'ngRoute']);
	 *
	 *    // Some APIs expect a PUT request in the format URL/object/ID
	 *    // Here we are creating an 'update' method
	 *    app.factory('Notes', ['$resource', function($resource) {
	 *    return $resource('/notes/:id', null,
	 *        {
	 *            'update': { method:'PUT' }
	 *        });
	 *    }]);
	 *
	 *    // In our controller we get the ID from the URL using ngRoute and $routeParams
	 *    // We pass in $routeParams and our Notes factory along with $scope
	 *    app.controller('NotesCtrl', ['$scope', '$routeParams', 'Notes',
	                                      function($scope, $routeParams, Notes) {
	 *    // First get a note object from the factory
	 *    var note = Notes.get({ id:$routeParams.id });
	 *    $id = note.id;
	 *
	 *    // Now call update passing in the ID first then the object you are updating
	 *    Notes.update({ id:$id }, note);
	 *
	 *    // This will PUT /notes/ID with the note object in the request payload
	 *    }]);
	 * ```
	 *
	 * @example
	 *
	 * # Cancelling requests
	 *
	 * If an action's configuration specifies that it is cancellable, you can cancel the request related
	 * to an instance or collection (as long as it is a result of a "non-instance" call):
	 *
	   ```js
	     // ...defining the `Hotel` resource...
	     var Hotel = $resource('/api/hotel/:id', {id: '@id'}, {
	       // Let's make the `query()` method cancellable
	       query: {method: 'get', isArray: true, cancellable: true}
	     });

	     // ...somewhere in the PlanVacationController...
	     ...
	     this.onDestinationChanged = function onDestinationChanged(destination) {
	       // We don't care about any pending request for hotels
	       // in a different destination any more
	       this.availableHotels.$cancelRequest();

	       // Let's query for hotels in '<destination>'
	       // (calls: /api/hotel?location=<destination>)
	       this.availableHotels = Hotel.query({location: destination});
	     };
	   ```
	 *
	 */
	angular.module('ngResource', ['ng']).
	  provider('$resource', function() {
	    var PROTOCOL_AND_DOMAIN_REGEX = /^https?:\/\/[^\/]*/;
	    var provider = this;

	    this.defaults = {
	      // Strip slashes by default
	      stripTrailingSlashes: true,

	      // Default actions configuration
	      actions: {
	        'get': {method: 'GET'},
	        'save': {method: 'POST'},
	        'query': {method: 'GET', isArray: true},
	        'remove': {method: 'DELETE'},
	        'delete': {method: 'DELETE'}
	      }
	    };

	    this.$get = ['$http', '$log', '$q', '$timeout', function($http, $log, $q, $timeout) {

	      var noop = angular.noop,
	        forEach = angular.forEach,
	        extend = angular.extend,
	        copy = angular.copy,
	        isFunction = angular.isFunction;

	      /**
	       * We need our custom method because encodeURIComponent is too aggressive and doesn't follow
	       * http://www.ietf.org/rfc/rfc3986.txt with regards to the character set
	       * (pchar) allowed in path segments:
	       *    segment       = *pchar
	       *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
	       *    pct-encoded   = "%" HEXDIG HEXDIG
	       *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
	       *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
	       *                     / "*" / "+" / "," / ";" / "="
	       */
	      function encodeUriSegment(val) {
	        return encodeUriQuery(val, true).
	          replace(/%26/gi, '&').
	          replace(/%3D/gi, '=').
	          replace(/%2B/gi, '+');
	      }


	      /**
	       * This method is intended for encoding *key* or *value* parts of query component. We need a
	       * custom method because encodeURIComponent is too aggressive and encodes stuff that doesn't
	       * have to be encoded per http://tools.ietf.org/html/rfc3986:
	       *    query       = *( pchar / "/" / "?" )
	       *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
	       *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
	       *    pct-encoded   = "%" HEXDIG HEXDIG
	       *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
	       *                     / "*" / "+" / "," / ";" / "="
	       */
	      function encodeUriQuery(val, pctEncodeSpaces) {
	        return encodeURIComponent(val).
	          replace(/%40/gi, '@').
	          replace(/%3A/gi, ':').
	          replace(/%24/g, '$').
	          replace(/%2C/gi, ',').
	          replace(/%20/g, (pctEncodeSpaces ? '%20' : '+'));
	      }

	      function Route(template, defaults) {
	        this.template = template;
	        this.defaults = extend({}, provider.defaults, defaults);
	        this.urlParams = {};
	      }

	      Route.prototype = {
	        setUrlParams: function(config, params, actionUrl) {
	          var self = this,
	            url = actionUrl || self.template,
	            val,
	            encodedVal,
	            protocolAndDomain = '';

	          var urlParams = self.urlParams = {};
	          forEach(url.split(/\W/), function(param) {
	            if (param === 'hasOwnProperty') {
	              throw $resourceMinErr('badname', "hasOwnProperty is not a valid parameter name.");
	            }
	            if (!(new RegExp("^\\d+$").test(param)) && param &&
	              (new RegExp("(^|[^\\\\]):" + param + "(\\W|$)").test(url))) {
	              urlParams[param] = {
	                isQueryParamValue: (new RegExp("\\?.*=:" + param + "(?:\\W|$)")).test(url)
	              };
	            }
	          });
	          url = url.replace(/\\:/g, ':');
	          url = url.replace(PROTOCOL_AND_DOMAIN_REGEX, function(match) {
	            protocolAndDomain = match;
	            return '';
	          });

	          params = params || {};
	          forEach(self.urlParams, function(paramInfo, urlParam) {
	            val = params.hasOwnProperty(urlParam) ? params[urlParam] : self.defaults[urlParam];
	            if (angular.isDefined(val) && val !== null) {
	              if (paramInfo.isQueryParamValue) {
	                encodedVal = encodeUriQuery(val, true);
	              } else {
	                encodedVal = encodeUriSegment(val);
	              }
	              url = url.replace(new RegExp(":" + urlParam + "(\\W|$)", "g"), function(match, p1) {
	                return encodedVal + p1;
	              });
	            } else {
	              url = url.replace(new RegExp("(\/?):" + urlParam + "(\\W|$)", "g"), function(match,
	                  leadingSlashes, tail) {
	                if (tail.charAt(0) == '/') {
	                  return tail;
	                } else {
	                  return leadingSlashes + tail;
	                }
	              });
	            }
	          });

	          // strip trailing slashes and set the url (unless this behavior is specifically disabled)
	          if (self.defaults.stripTrailingSlashes) {
	            url = url.replace(/\/+$/, '') || '/';
	          }

	          // then replace collapse `/.` if found in the last URL path segment before the query
	          // E.g. `http://url.com/id./format?q=x` becomes `http://url.com/id.format?q=x`
	          url = url.replace(/\/\.(?=\w+($|\?))/, '.');
	          // replace escaped `/\.` with `/.`
	          config.url = protocolAndDomain + url.replace(/\/\\\./, '/.');


	          // set params - delegate param encoding to $http
	          forEach(params, function(value, key) {
	            if (!self.urlParams[key]) {
	              config.params = config.params || {};
	              config.params[key] = value;
	            }
	          });
	        }
	      };


	      function resourceFactory(url, paramDefaults, actions, options) {
	        var route = new Route(url, options);

	        actions = extend({}, provider.defaults.actions, actions);

	        function extractParams(data, actionParams) {
	          var ids = {};
	          actionParams = extend({}, paramDefaults, actionParams);
	          forEach(actionParams, function(value, key) {
	            if (isFunction(value)) { value = value(); }
	            ids[key] = value && value.charAt && value.charAt(0) == '@' ?
	              lookupDottedPath(data, value.substr(1)) : value;
	          });
	          return ids;
	        }

	        function defaultResponseInterceptor(response) {
	          return response.resource;
	        }

	        function Resource(value) {
	          shallowClearAndCopy(value || {}, this);
	        }

	        Resource.prototype.toJSON = function() {
	          var data = extend({}, this);
	          delete data.$promise;
	          delete data.$resolved;
	          return data;
	        };

	        forEach(actions, function(action, name) {
	          var hasBody = /^(POST|PUT|PATCH)$/i.test(action.method);
	          var numericTimeout = action.timeout;
	          var cancellable = angular.isDefined(action.cancellable) ? action.cancellable :
	              (options && angular.isDefined(options.cancellable)) ? options.cancellable :
	              provider.defaults.cancellable;

	          if (numericTimeout && !angular.isNumber(numericTimeout)) {
	            $log.debug('ngResource:\n' +
	                       '  Only numeric values are allowed as `timeout`.\n' +
	                       '  Promises are not supported in $resource, because the same value would ' +
	                       'be used for multiple requests. If you are looking for a way to cancel ' +
	                       'requests, you should use the `cancellable` option.');
	            delete action.timeout;
	            numericTimeout = null;
	          }

	          Resource[name] = function(a1, a2, a3, a4) {
	            var params = {}, data, success, error;

	            /* jshint -W086 */ /* (purposefully fall through case statements) */
	            switch (arguments.length) {
	              case 4:
	                error = a4;
	                success = a3;
	              //fallthrough
	              case 3:
	              case 2:
	                if (isFunction(a2)) {
	                  if (isFunction(a1)) {
	                    success = a1;
	                    error = a2;
	                    break;
	                  }

	                  success = a2;
	                  error = a3;
	                  //fallthrough
	                } else {
	                  params = a1;
	                  data = a2;
	                  success = a3;
	                  break;
	                }
	              case 1:
	                if (isFunction(a1)) success = a1;
	                else if (hasBody) data = a1;
	                else params = a1;
	                break;
	              case 0: break;
	              default:
	                throw $resourceMinErr('badargs',
	                  "Expected up to 4 arguments [params, data, success, error], got {0} arguments",
	                  arguments.length);
	            }
	            /* jshint +W086 */ /* (purposefully fall through case statements) */

	            var isInstanceCall = this instanceof Resource;
	            var value = isInstanceCall ? data : (action.isArray ? [] : new Resource(data));
	            var httpConfig = {};
	            var responseInterceptor = action.interceptor && action.interceptor.response ||
	              defaultResponseInterceptor;
	            var responseErrorInterceptor = action.interceptor && action.interceptor.responseError ||
	              undefined;
	            var timeoutDeferred;
	            var numericTimeoutPromise;

	            forEach(action, function(value, key) {
	              switch (key) {
	                default:
	                  httpConfig[key] = copy(value);
	                  break;
	                case 'params':
	                case 'isArray':
	                case 'interceptor':
	                case 'cancellable':
	                  break;
	              }
	            });

	            if (!isInstanceCall && cancellable) {
	              timeoutDeferred = $q.defer();
	              httpConfig.timeout = timeoutDeferred.promise;

	              if (numericTimeout) {
	                numericTimeoutPromise = $timeout(timeoutDeferred.resolve, numericTimeout);
	              }
	            }

	            if (hasBody) httpConfig.data = data;
	            route.setUrlParams(httpConfig,
	              extend({}, extractParams(data, action.params || {}), params),
	              action.url);

	            var promise = $http(httpConfig).then(function(response) {
	              var data = response.data;

	              if (data) {
	                // Need to convert action.isArray to boolean in case it is undefined
	                // jshint -W018
	                if (angular.isArray(data) !== (!!action.isArray)) {
	                  throw $resourceMinErr('badcfg',
	                      'Error in resource configuration for action `{0}`. Expected response to ' +
	                      'contain an {1} but got an {2} (Request: {3} {4})', name, action.isArray ? 'array' : 'object',
	                    angular.isArray(data) ? 'array' : 'object', httpConfig.method, httpConfig.url);
	                }
	                // jshint +W018
	                if (action.isArray) {
	                  value.length = 0;
	                  forEach(data, function(item) {
	                    if (typeof item === "object") {
	                      value.push(new Resource(item));
	                    } else {
	                      // Valid JSON values may be string literals, and these should not be converted
	                      // into objects. These items will not have access to the Resource prototype
	                      // methods, but unfortunately there
	                      value.push(item);
	                    }
	                  });
	                } else {
	                  var promise = value.$promise;     // Save the promise
	                  shallowClearAndCopy(data, value);
	                  value.$promise = promise;         // Restore the promise
	                }
	              }
	              response.resource = value;

	              return response;
	            }, function(response) {
	              (error || noop)(response);
	              return $q.reject(response);
	            });

	            promise['finally'](function() {
	              value.$resolved = true;
	              if (!isInstanceCall && cancellable) {
	                value.$cancelRequest = angular.noop;
	                $timeout.cancel(numericTimeoutPromise);
	                timeoutDeferred = numericTimeoutPromise = httpConfig.timeout = null;
	              }
	            });

	            promise = promise.then(
	              function(response) {
	                var value = responseInterceptor(response);
	                (success || noop)(value, response.headers);
	                return value;
	              },
	              responseErrorInterceptor);

	            if (!isInstanceCall) {
	              // we are creating instance / collection
	              // - set the initial promise
	              // - return the instance / collection
	              value.$promise = promise;
	              value.$resolved = false;
	              if (cancellable) value.$cancelRequest = timeoutDeferred.resolve;

	              return value;
	            }

	            // instance call
	            return promise;
	          };


	          Resource.prototype['$' + name] = function(params, success, error) {
	            if (isFunction(params)) {
	              error = success; success = params; params = {};
	            }
	            var result = Resource[name].call(this, params, this, success, error);
	            return result.$promise || result;
	          };
	        });

	        Resource.bind = function(additionalParamDefaults) {
	          return resourceFactory(url, extend({}, paramDefaults, additionalParamDefaults), actions);
	        };

	        return Resource;
	      }

	      return resourceFactory;
	    }];
	  });


	})(window, window.angular);


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(44);
	module.exports = 'ngRoute';


/***/ },
/* 44 */
/***/ function(module, exports) {

	/**
	 * @license AngularJS v1.5.6
	 * (c) 2010-2016 Google, Inc. http://angularjs.org
	 * License: MIT
	 */
	(function(window, angular) {'use strict';

	/**
	 * @ngdoc module
	 * @name ngRoute
	 * @description
	 *
	 * # ngRoute
	 *
	 * The `ngRoute` module provides routing and deeplinking services and directives for angular apps.
	 *
	 * ## Example
	 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
	 *
	 *
	 * <div doc-module-components="ngRoute"></div>
	 */
	 /* global -ngRouteModule */
	var ngRouteModule = angular.module('ngRoute', ['ng']).
	                        provider('$route', $RouteProvider),
	    $routeMinErr = angular.$$minErr('ngRoute');

	/**
	 * @ngdoc provider
	 * @name $routeProvider
	 *
	 * @description
	 *
	 * Used for configuring routes.
	 *
	 * ## Example
	 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
	 *
	 * ## Dependencies
	 * Requires the {@link ngRoute `ngRoute`} module to be installed.
	 */
	function $RouteProvider() {
	  function inherit(parent, extra) {
	    return angular.extend(Object.create(parent), extra);
	  }

	  var routes = {};

	  /**
	   * @ngdoc method
	   * @name $routeProvider#when
	   *
	   * @param {string} path Route path (matched against `$location.path`). If `$location.path`
	   *    contains redundant trailing slash or is missing one, the route will still match and the
	   *    `$location.path` will be updated to add or drop the trailing slash to exactly match the
	   *    route definition.
	   *
	   *    * `path` can contain named groups starting with a colon: e.g. `:name`. All characters up
	   *        to the next slash are matched and stored in `$routeParams` under the given `name`
	   *        when the route matches.
	   *    * `path` can contain named groups starting with a colon and ending with a star:
	   *        e.g.`:name*`. All characters are eagerly stored in `$routeParams` under the given `name`
	   *        when the route matches.
	   *    * `path` can contain optional named groups with a question mark: e.g.`:name?`.
	   *
	   *    For example, routes like `/color/:color/largecode/:largecode*\/edit` will match
	   *    `/color/brown/largecode/code/with/slashes/edit` and extract:
	   *
	   *    * `color: brown`
	   *    * `largecode: code/with/slashes`.
	   *
	   *
	   * @param {Object} route Mapping information to be assigned to `$route.current` on route
	   *    match.
	   *
	   *    Object properties:
	   *
	   *    - `controller` – `{(string|function()=}` – Controller fn that should be associated with
	   *      newly created scope or the name of a {@link angular.Module#controller registered
	   *      controller} if passed as a string.
	   *    - `controllerAs` – `{string=}` – An identifier name for a reference to the controller.
	   *      If present, the controller will be published to scope under the `controllerAs` name.
	   *    - `template` – `{string=|function()=}` – html template as a string or a function that
	   *      returns an html template as a string which should be used by {@link
	   *      ngRoute.directive:ngView ngView} or {@link ng.directive:ngInclude ngInclude} directives.
	   *      This property takes precedence over `templateUrl`.
	   *
	   *      If `template` is a function, it will be called with the following parameters:
	   *
	   *      - `{Array.<Object>}` - route parameters extracted from the current
	   *        `$location.path()` by applying the current route
	   *
	   *    - `templateUrl` – `{string=|function()=}` – path or function that returns a path to an html
	   *      template that should be used by {@link ngRoute.directive:ngView ngView}.
	   *
	   *      If `templateUrl` is a function, it will be called with the following parameters:
	   *
	   *      - `{Array.<Object>}` - route parameters extracted from the current
	   *        `$location.path()` by applying the current route
	   *
	   *    - `resolve` - `{Object.<string, function>=}` - An optional map of dependencies which should
	   *      be injected into the controller. If any of these dependencies are promises, the router
	   *      will wait for them all to be resolved or one to be rejected before the controller is
	   *      instantiated.
	   *      If all the promises are resolved successfully, the values of the resolved promises are
	   *      injected and {@link ngRoute.$route#$routeChangeSuccess $routeChangeSuccess} event is
	   *      fired. If any of the promises are rejected the
	   *      {@link ngRoute.$route#$routeChangeError $routeChangeError} event is fired.
	   *      For easier access to the resolved dependencies from the template, the `resolve` map will
	   *      be available on the scope of the route, under `$resolve` (by default) or a custom name
	   *      specified by the `resolveAs` property (see below). This can be particularly useful, when
	   *      working with {@link angular.Module#component components} as route templates.<br />
	   *      <div class="alert alert-warning">
	   *        **Note:** If your scope already contains a property with this name, it will be hidden
	   *        or overwritten. Make sure, you specify an appropriate name for this property, that
	   *        does not collide with other properties on the scope.
	   *      </div>
	   *      The map object is:
	   *
	   *      - `key` – `{string}`: a name of a dependency to be injected into the controller.
	   *      - `factory` - `{string|function}`: If `string` then it is an alias for a service.
	   *        Otherwise if function, then it is {@link auto.$injector#invoke injected}
	   *        and the return value is treated as the dependency. If the result is a promise, it is
	   *        resolved before its value is injected into the controller. Be aware that
	   *        `ngRoute.$routeParams` will still refer to the previous route within these resolve
	   *        functions.  Use `$route.current.params` to access the new route parameters, instead.
	   *
	   *    - `resolveAs` - `{string=}` - The name under which the `resolve` map will be available on
	   *      the scope of the route. If omitted, defaults to `$resolve`.
	   *
	   *    - `redirectTo` – `{(string|function())=}` – value to update
	   *      {@link ng.$location $location} path with and trigger route redirection.
	   *
	   *      If `redirectTo` is a function, it will be called with the following parameters:
	   *
	   *      - `{Object.<string>}` - route parameters extracted from the current
	   *        `$location.path()` by applying the current route templateUrl.
	   *      - `{string}` - current `$location.path()`
	   *      - `{Object}` - current `$location.search()`
	   *
	   *      The custom `redirectTo` function is expected to return a string which will be used
	   *      to update `$location.path()` and `$location.search()`.
	   *
	   *    - `[reloadOnSearch=true]` - `{boolean=}` - reload route when only `$location.search()`
	   *      or `$location.hash()` changes.
	   *
	   *      If the option is set to `false` and url in the browser changes, then
	   *      `$routeUpdate` event is broadcasted on the root scope.
	   *
	   *    - `[caseInsensitiveMatch=false]` - `{boolean=}` - match routes without being case sensitive
	   *
	   *      If the option is set to `true`, then the particular route can be matched without being
	   *      case sensitive
	   *
	   * @returns {Object} self
	   *
	   * @description
	   * Adds a new route definition to the `$route` service.
	   */
	  this.when = function(path, route) {
	    //copy original route object to preserve params inherited from proto chain
	    var routeCopy = angular.copy(route);
	    if (angular.isUndefined(routeCopy.reloadOnSearch)) {
	      routeCopy.reloadOnSearch = true;
	    }
	    if (angular.isUndefined(routeCopy.caseInsensitiveMatch)) {
	      routeCopy.caseInsensitiveMatch = this.caseInsensitiveMatch;
	    }
	    routes[path] = angular.extend(
	      routeCopy,
	      path && pathRegExp(path, routeCopy)
	    );

	    // create redirection for trailing slashes
	    if (path) {
	      var redirectPath = (path[path.length - 1] == '/')
	            ? path.substr(0, path.length - 1)
	            : path + '/';

	      routes[redirectPath] = angular.extend(
	        {redirectTo: path},
	        pathRegExp(redirectPath, routeCopy)
	      );
	    }

	    return this;
	  };

	  /**
	   * @ngdoc property
	   * @name $routeProvider#caseInsensitiveMatch
	   * @description
	   *
	   * A boolean property indicating if routes defined
	   * using this provider should be matched using a case insensitive
	   * algorithm. Defaults to `false`.
	   */
	  this.caseInsensitiveMatch = false;

	   /**
	    * @param path {string} path
	    * @param opts {Object} options
	    * @return {?Object}
	    *
	    * @description
	    * Normalizes the given path, returning a regular expression
	    * and the original path.
	    *
	    * Inspired by pathRexp in visionmedia/express/lib/utils.js.
	    */
	  function pathRegExp(path, opts) {
	    var insensitive = opts.caseInsensitiveMatch,
	        ret = {
	          originalPath: path,
	          regexp: path
	        },
	        keys = ret.keys = [];

	    path = path
	      .replace(/([().])/g, '\\$1')
	      .replace(/(\/)?:(\w+)(\*\?|[\?\*])?/g, function(_, slash, key, option) {
	        var optional = (option === '?' || option === '*?') ? '?' : null;
	        var star = (option === '*' || option === '*?') ? '*' : null;
	        keys.push({ name: key, optional: !!optional });
	        slash = slash || '';
	        return ''
	          + (optional ? '' : slash)
	          + '(?:'
	          + (optional ? slash : '')
	          + (star && '(.+?)' || '([^/]+)')
	          + (optional || '')
	          + ')'
	          + (optional || '');
	      })
	      .replace(/([\/$\*])/g, '\\$1');

	    ret.regexp = new RegExp('^' + path + '$', insensitive ? 'i' : '');
	    return ret;
	  }

	  /**
	   * @ngdoc method
	   * @name $routeProvider#otherwise
	   *
	   * @description
	   * Sets route definition that will be used on route change when no other route definition
	   * is matched.
	   *
	   * @param {Object|string} params Mapping information to be assigned to `$route.current`.
	   * If called with a string, the value maps to `redirectTo`.
	   * @returns {Object} self
	   */
	  this.otherwise = function(params) {
	    if (typeof params === 'string') {
	      params = {redirectTo: params};
	    }
	    this.when(null, params);
	    return this;
	  };


	  this.$get = ['$rootScope',
	               '$location',
	               '$routeParams',
	               '$q',
	               '$injector',
	               '$templateRequest',
	               '$sce',
	      function($rootScope, $location, $routeParams, $q, $injector, $templateRequest, $sce) {

	    /**
	     * @ngdoc service
	     * @name $route
	     * @requires $location
	     * @requires $routeParams
	     *
	     * @property {Object} current Reference to the current route definition.
	     * The route definition contains:
	     *
	     *   - `controller`: The controller constructor as defined in the route definition.
	     *   - `locals`: A map of locals which is used by {@link ng.$controller $controller} service for
	     *     controller instantiation. The `locals` contain
	     *     the resolved values of the `resolve` map. Additionally the `locals` also contain:
	     *
	     *     - `$scope` - The current route scope.
	     *     - `$template` - The current route template HTML.
	     *
	     *     The `locals` will be assigned to the route scope's `$resolve` property. You can override
	     *     the property name, using `resolveAs` in the route definition. See
	     *     {@link ngRoute.$routeProvider $routeProvider} for more info.
	     *
	     * @property {Object} routes Object with all route configuration Objects as its properties.
	     *
	     * @description
	     * `$route` is used for deep-linking URLs to controllers and views (HTML partials).
	     * It watches `$location.url()` and tries to map the path to an existing route definition.
	     *
	     * Requires the {@link ngRoute `ngRoute`} module to be installed.
	     *
	     * You can define routes through {@link ngRoute.$routeProvider $routeProvider}'s API.
	     *
	     * The `$route` service is typically used in conjunction with the
	     * {@link ngRoute.directive:ngView `ngView`} directive and the
	     * {@link ngRoute.$routeParams `$routeParams`} service.
	     *
	     * @example
	     * This example shows how changing the URL hash causes the `$route` to match a route against the
	     * URL, and the `ngView` pulls in the partial.
	     *
	     * <example name="$route-service" module="ngRouteExample"
	     *          deps="angular-route.js" fixBase="true">
	     *   <file name="index.html">
	     *     <div ng-controller="MainController">
	     *       Choose:
	     *       <a href="Book/Moby">Moby</a> |
	     *       <a href="Book/Moby/ch/1">Moby: Ch1</a> |
	     *       <a href="Book/Gatsby">Gatsby</a> |
	     *       <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
	     *       <a href="Book/Scarlet">Scarlet Letter</a><br/>
	     *
	     *       <div ng-view></div>
	     *
	     *       <hr />
	     *
	     *       <pre>$location.path() = {{$location.path()}}</pre>
	     *       <pre>$route.current.templateUrl = {{$route.current.templateUrl}}</pre>
	     *       <pre>$route.current.params = {{$route.current.params}}</pre>
	     *       <pre>$route.current.scope.name = {{$route.current.scope.name}}</pre>
	     *       <pre>$routeParams = {{$routeParams}}</pre>
	     *     </div>
	     *   </file>
	     *
	     *   <file name="book.html">
	     *     controller: {{name}}<br />
	     *     Book Id: {{params.bookId}}<br />
	     *   </file>
	     *
	     *   <file name="chapter.html">
	     *     controller: {{name}}<br />
	     *     Book Id: {{params.bookId}}<br />
	     *     Chapter Id: {{params.chapterId}}
	     *   </file>
	     *
	     *   <file name="script.js">
	     *     angular.module('ngRouteExample', ['ngRoute'])
	     *
	     *      .controller('MainController', function($scope, $route, $routeParams, $location) {
	     *          $scope.$route = $route;
	     *          $scope.$location = $location;
	     *          $scope.$routeParams = $routeParams;
	     *      })
	     *
	     *      .controller('BookController', function($scope, $routeParams) {
	     *          $scope.name = "BookController";
	     *          $scope.params = $routeParams;
	     *      })
	     *
	     *      .controller('ChapterController', function($scope, $routeParams) {
	     *          $scope.name = "ChapterController";
	     *          $scope.params = $routeParams;
	     *      })
	     *
	     *     .config(function($routeProvider, $locationProvider) {
	     *       $routeProvider
	     *        .when('/Book/:bookId', {
	     *         templateUrl: 'book.html',
	     *         controller: 'BookController',
	     *         resolve: {
	     *           // I will cause a 1 second delay
	     *           delay: function($q, $timeout) {
	     *             var delay = $q.defer();
	     *             $timeout(delay.resolve, 1000);
	     *             return delay.promise;
	     *           }
	     *         }
	     *       })
	     *       .when('/Book/:bookId/ch/:chapterId', {
	     *         templateUrl: 'chapter.html',
	     *         controller: 'ChapterController'
	     *       });
	     *
	     *       // configure html5 to get links working on jsfiddle
	     *       $locationProvider.html5Mode(true);
	     *     });
	     *
	     *   </file>
	     *
	     *   <file name="protractor.js" type="protractor">
	     *     it('should load and compile correct template', function() {
	     *       element(by.linkText('Moby: Ch1')).click();
	     *       var content = element(by.css('[ng-view]')).getText();
	     *       expect(content).toMatch(/controller\: ChapterController/);
	     *       expect(content).toMatch(/Book Id\: Moby/);
	     *       expect(content).toMatch(/Chapter Id\: 1/);
	     *
	     *       element(by.partialLinkText('Scarlet')).click();
	     *
	     *       content = element(by.css('[ng-view]')).getText();
	     *       expect(content).toMatch(/controller\: BookController/);
	     *       expect(content).toMatch(/Book Id\: Scarlet/);
	     *     });
	     *   </file>
	     * </example>
	     */

	    /**
	     * @ngdoc event
	     * @name $route#$routeChangeStart
	     * @eventType broadcast on root scope
	     * @description
	     * Broadcasted before a route change. At this  point the route services starts
	     * resolving all of the dependencies needed for the route change to occur.
	     * Typically this involves fetching the view template as well as any dependencies
	     * defined in `resolve` route property. Once  all of the dependencies are resolved
	     * `$routeChangeSuccess` is fired.
	     *
	     * The route change (and the `$location` change that triggered it) can be prevented
	     * by calling `preventDefault` method of the event. See {@link ng.$rootScope.Scope#$on}
	     * for more details about event object.
	     *
	     * @param {Object} angularEvent Synthetic event object.
	     * @param {Route} next Future route information.
	     * @param {Route} current Current route information.
	     */

	    /**
	     * @ngdoc event
	     * @name $route#$routeChangeSuccess
	     * @eventType broadcast on root scope
	     * @description
	     * Broadcasted after a route change has happened successfully.
	     * The `resolve` dependencies are now available in the `current.locals` property.
	     *
	     * {@link ngRoute.directive:ngView ngView} listens for the directive
	     * to instantiate the controller and render the view.
	     *
	     * @param {Object} angularEvent Synthetic event object.
	     * @param {Route} current Current route information.
	     * @param {Route|Undefined} previous Previous route information, or undefined if current is
	     * first route entered.
	     */

	    /**
	     * @ngdoc event
	     * @name $route#$routeChangeError
	     * @eventType broadcast on root scope
	     * @description
	     * Broadcasted if any of the resolve promises are rejected.
	     *
	     * @param {Object} angularEvent Synthetic event object
	     * @param {Route} current Current route information.
	     * @param {Route} previous Previous route information.
	     * @param {Route} rejection Rejection of the promise. Usually the error of the failed promise.
	     */

	    /**
	     * @ngdoc event
	     * @name $route#$routeUpdate
	     * @eventType broadcast on root scope
	     * @description
	     * The `reloadOnSearch` property has been set to false, and we are reusing the same
	     * instance of the Controller.
	     *
	     * @param {Object} angularEvent Synthetic event object
	     * @param {Route} current Current/previous route information.
	     */

	    var forceReload = false,
	        preparedRoute,
	        preparedRouteIsUpdateOnly,
	        $route = {
	          routes: routes,

	          /**
	           * @ngdoc method
	           * @name $route#reload
	           *
	           * @description
	           * Causes `$route` service to reload the current route even if
	           * {@link ng.$location $location} hasn't changed.
	           *
	           * As a result of that, {@link ngRoute.directive:ngView ngView}
	           * creates new scope and reinstantiates the controller.
	           */
	          reload: function() {
	            forceReload = true;

	            var fakeLocationEvent = {
	              defaultPrevented: false,
	              preventDefault: function fakePreventDefault() {
	                this.defaultPrevented = true;
	                forceReload = false;
	              }
	            };

	            $rootScope.$evalAsync(function() {
	              prepareRoute(fakeLocationEvent);
	              if (!fakeLocationEvent.defaultPrevented) commitRoute();
	            });
	          },

	          /**
	           * @ngdoc method
	           * @name $route#updateParams
	           *
	           * @description
	           * Causes `$route` service to update the current URL, replacing
	           * current route parameters with those specified in `newParams`.
	           * Provided property names that match the route's path segment
	           * definitions will be interpolated into the location's path, while
	           * remaining properties will be treated as query params.
	           *
	           * @param {!Object<string, string>} newParams mapping of URL parameter names to values
	           */
	          updateParams: function(newParams) {
	            if (this.current && this.current.$$route) {
	              newParams = angular.extend({}, this.current.params, newParams);
	              $location.path(interpolate(this.current.$$route.originalPath, newParams));
	              // interpolate modifies newParams, only query params are left
	              $location.search(newParams);
	            } else {
	              throw $routeMinErr('norout', 'Tried updating route when with no current route');
	            }
	          }
	        };

	    $rootScope.$on('$locationChangeStart', prepareRoute);
	    $rootScope.$on('$locationChangeSuccess', commitRoute);

	    return $route;

	    /////////////////////////////////////////////////////

	    /**
	     * @param on {string} current url
	     * @param route {Object} route regexp to match the url against
	     * @return {?Object}
	     *
	     * @description
	     * Check if the route matches the current url.
	     *
	     * Inspired by match in
	     * visionmedia/express/lib/router/router.js.
	     */
	    function switchRouteMatcher(on, route) {
	      var keys = route.keys,
	          params = {};

	      if (!route.regexp) return null;

	      var m = route.regexp.exec(on);
	      if (!m) return null;

	      for (var i = 1, len = m.length; i < len; ++i) {
	        var key = keys[i - 1];

	        var val = m[i];

	        if (key && val) {
	          params[key.name] = val;
	        }
	      }
	      return params;
	    }

	    function prepareRoute($locationEvent) {
	      var lastRoute = $route.current;

	      preparedRoute = parseRoute();
	      preparedRouteIsUpdateOnly = preparedRoute && lastRoute && preparedRoute.$$route === lastRoute.$$route
	          && angular.equals(preparedRoute.pathParams, lastRoute.pathParams)
	          && !preparedRoute.reloadOnSearch && !forceReload;

	      if (!preparedRouteIsUpdateOnly && (lastRoute || preparedRoute)) {
	        if ($rootScope.$broadcast('$routeChangeStart', preparedRoute, lastRoute).defaultPrevented) {
	          if ($locationEvent) {
	            $locationEvent.preventDefault();
	          }
	        }
	      }
	    }

	    function commitRoute() {
	      var lastRoute = $route.current;
	      var nextRoute = preparedRoute;

	      if (preparedRouteIsUpdateOnly) {
	        lastRoute.params = nextRoute.params;
	        angular.copy(lastRoute.params, $routeParams);
	        $rootScope.$broadcast('$routeUpdate', lastRoute);
	      } else if (nextRoute || lastRoute) {
	        forceReload = false;
	        $route.current = nextRoute;
	        if (nextRoute) {
	          if (nextRoute.redirectTo) {
	            if (angular.isString(nextRoute.redirectTo)) {
	              $location.path(interpolate(nextRoute.redirectTo, nextRoute.params)).search(nextRoute.params)
	                       .replace();
	            } else {
	              $location.url(nextRoute.redirectTo(nextRoute.pathParams, $location.path(), $location.search()))
	                       .replace();
	            }
	          }
	        }

	        $q.when(nextRoute).
	          then(resolveLocals).
	          then(function(locals) {
	            // after route change
	            if (nextRoute == $route.current) {
	              if (nextRoute) {
	                nextRoute.locals = locals;
	                angular.copy(nextRoute.params, $routeParams);
	              }
	              $rootScope.$broadcast('$routeChangeSuccess', nextRoute, lastRoute);
	            }
	          }, function(error) {
	            if (nextRoute == $route.current) {
	              $rootScope.$broadcast('$routeChangeError', nextRoute, lastRoute, error);
	            }
	          });
	      }
	    }

	    function resolveLocals(route) {
	      if (route) {
	        var locals = angular.extend({}, route.resolve);
	        angular.forEach(locals, function(value, key) {
	          locals[key] = angular.isString(value) ?
	              $injector.get(value) :
	              $injector.invoke(value, null, null, key);
	        });
	        var template = getTemplateFor(route);
	        if (angular.isDefined(template)) {
	          locals['$template'] = template;
	        }
	        return $q.all(locals);
	      }
	    }


	    function getTemplateFor(route) {
	      var template, templateUrl;
	      if (angular.isDefined(template = route.template)) {
	        if (angular.isFunction(template)) {
	          template = template(route.params);
	        }
	      } else if (angular.isDefined(templateUrl = route.templateUrl)) {
	        if (angular.isFunction(templateUrl)) {
	          templateUrl = templateUrl(route.params);
	        }
	        if (angular.isDefined(templateUrl)) {
	          route.loadedTemplateUrl = $sce.valueOf(templateUrl);
	          template = $templateRequest(templateUrl);
	        }
	      }
	      return template;
	    }


	    /**
	     * @returns {Object} the current active route, by matching it against the URL
	     */
	    function parseRoute() {
	      // Match a route
	      var params, match;
	      angular.forEach(routes, function(route, path) {
	        if (!match && (params = switchRouteMatcher($location.path(), route))) {
	          match = inherit(route, {
	            params: angular.extend({}, $location.search(), params),
	            pathParams: params});
	          match.$$route = route;
	        }
	      });
	      // No route matched; fallback to "otherwise" route
	      return match || routes[null] && inherit(routes[null], {params: {}, pathParams:{}});
	    }

	    /**
	     * @returns {string} interpolation of the redirect path with the parameters
	     */
	    function interpolate(string, params) {
	      var result = [];
	      angular.forEach((string || '').split(':'), function(segment, i) {
	        if (i === 0) {
	          result.push(segment);
	        } else {
	          var segmentMatch = segment.match(/(\w+)(?:[?*])?(.*)/);
	          var key = segmentMatch[1];
	          result.push(params[key]);
	          result.push(segmentMatch[2] || '');
	          delete params[key];
	        }
	      });
	      return result.join('');
	    }
	  }];
	}

	ngRouteModule.provider('$routeParams', $RouteParamsProvider);


	/**
	 * @ngdoc service
	 * @name $routeParams
	 * @requires $route
	 *
	 * @description
	 * The `$routeParams` service allows you to retrieve the current set of route parameters.
	 *
	 * Requires the {@link ngRoute `ngRoute`} module to be installed.
	 *
	 * The route parameters are a combination of {@link ng.$location `$location`}'s
	 * {@link ng.$location#search `search()`} and {@link ng.$location#path `path()`}.
	 * The `path` parameters are extracted when the {@link ngRoute.$route `$route`} path is matched.
	 *
	 * In case of parameter name collision, `path` params take precedence over `search` params.
	 *
	 * The service guarantees that the identity of the `$routeParams` object will remain unchanged
	 * (but its properties will likely change) even when a route change occurs.
	 *
	 * Note that the `$routeParams` are only updated *after* a route change completes successfully.
	 * This means that you cannot rely on `$routeParams` being correct in route resolve functions.
	 * Instead you can use `$route.current.params` to access the new route's parameters.
	 *
	 * @example
	 * ```js
	 *  // Given:
	 *  // URL: http://server.com/index.html#/Chapter/1/Section/2?search=moby
	 *  // Route: /Chapter/:chapterId/Section/:sectionId
	 *  //
	 *  // Then
	 *  $routeParams ==> {chapterId:'1', sectionId:'2', search:'moby'}
	 * ```
	 */
	function $RouteParamsProvider() {
	  this.$get = function() { return {}; };
	}

	ngRouteModule.directive('ngView', ngViewFactory);
	ngRouteModule.directive('ngView', ngViewFillContentFactory);


	/**
	 * @ngdoc directive
	 * @name ngView
	 * @restrict ECA
	 *
	 * @description
	 * # Overview
	 * `ngView` is a directive that complements the {@link ngRoute.$route $route} service by
	 * including the rendered template of the current route into the main layout (`index.html`) file.
	 * Every time the current route changes, the included view changes with it according to the
	 * configuration of the `$route` service.
	 *
	 * Requires the {@link ngRoute `ngRoute`} module to be installed.
	 *
	 * @animations
	 * | Animation                        | Occurs                              |
	 * |----------------------------------|-------------------------------------|
	 * | {@link ng.$animate#enter enter}  | when the new element is inserted to the DOM |
	 * | {@link ng.$animate#leave leave}  | when the old element is removed from to the DOM  |
	 *
	 * The enter and leave animation occur concurrently.
	 *
	 * @knownIssue If `ngView` is contained in an asynchronously loaded template (e.g. in another
	 *             directive's templateUrl or in a template loaded using `ngInclude`), then you need to
	 *             make sure that `$route` is instantiated in time to capture the initial
	 *             `$locationChangeStart` event and load the appropriate view. One way to achieve this
	 *             is to have it as a dependency in a `.run` block:
	 *             `myModule.run(['$route', function() {}]);`
	 *
	 * @scope
	 * @priority 400
	 * @param {string=} onload Expression to evaluate whenever the view updates.
	 *
	 * @param {string=} autoscroll Whether `ngView` should call {@link ng.$anchorScroll
	 *                  $anchorScroll} to scroll the viewport after the view is updated.
	 *
	 *                  - If the attribute is not set, disable scrolling.
	 *                  - If the attribute is set without value, enable scrolling.
	 *                  - Otherwise enable scrolling only if the `autoscroll` attribute value evaluated
	 *                    as an expression yields a truthy value.
	 * @example
	    <example name="ngView-directive" module="ngViewExample"
	             deps="angular-route.js;angular-animate.js"
	             animations="true" fixBase="true">
	      <file name="index.html">
	        <div ng-controller="MainCtrl as main">
	          Choose:
	          <a href="Book/Moby">Moby</a> |
	          <a href="Book/Moby/ch/1">Moby: Ch1</a> |
	          <a href="Book/Gatsby">Gatsby</a> |
	          <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
	          <a href="Book/Scarlet">Scarlet Letter</a><br/>

	          <div class="view-animate-container">
	            <div ng-view class="view-animate"></div>
	          </div>
	          <hr />

	          <pre>$location.path() = {{main.$location.path()}}</pre>
	          <pre>$route.current.templateUrl = {{main.$route.current.templateUrl}}</pre>
	          <pre>$route.current.params = {{main.$route.current.params}}</pre>
	          <pre>$routeParams = {{main.$routeParams}}</pre>
	        </div>
	      </file>

	      <file name="book.html">
	        <div>
	          controller: {{book.name}}<br />
	          Book Id: {{book.params.bookId}}<br />
	        </div>
	      </file>

	      <file name="chapter.html">
	        <div>
	          controller: {{chapter.name}}<br />
	          Book Id: {{chapter.params.bookId}}<br />
	          Chapter Id: {{chapter.params.chapterId}}
	        </div>
	      </file>

	      <file name="animations.css">
	        .view-animate-container {
	          position:relative;
	          height:100px!important;
	          background:white;
	          border:1px solid black;
	          height:40px;
	          overflow:hidden;
	        }

	        .view-animate {
	          padding:10px;
	        }

	        .view-animate.ng-enter, .view-animate.ng-leave {
	          transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;

	          display:block;
	          width:100%;
	          border-left:1px solid black;

	          position:absolute;
	          top:0;
	          left:0;
	          right:0;
	          bottom:0;
	          padding:10px;
	        }

	        .view-animate.ng-enter {
	          left:100%;
	        }
	        .view-animate.ng-enter.ng-enter-active {
	          left:0;
	        }
	        .view-animate.ng-leave.ng-leave-active {
	          left:-100%;
	        }
	      </file>

	      <file name="script.js">
	        angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])
	          .config(['$routeProvider', '$locationProvider',
	            function($routeProvider, $locationProvider) {
	              $routeProvider
	                .when('/Book/:bookId', {
	                  templateUrl: 'book.html',
	                  controller: 'BookCtrl',
	                  controllerAs: 'book'
	                })
	                .when('/Book/:bookId/ch/:chapterId', {
	                  templateUrl: 'chapter.html',
	                  controller: 'ChapterCtrl',
	                  controllerAs: 'chapter'
	                });

	              $locationProvider.html5Mode(true);
	          }])
	          .controller('MainCtrl', ['$route', '$routeParams', '$location',
	            function($route, $routeParams, $location) {
	              this.$route = $route;
	              this.$location = $location;
	              this.$routeParams = $routeParams;
	          }])
	          .controller('BookCtrl', ['$routeParams', function($routeParams) {
	            this.name = "BookCtrl";
	            this.params = $routeParams;
	          }])
	          .controller('ChapterCtrl', ['$routeParams', function($routeParams) {
	            this.name = "ChapterCtrl";
	            this.params = $routeParams;
	          }]);

	      </file>

	      <file name="protractor.js" type="protractor">
	        it('should load and compile correct template', function() {
	          element(by.linkText('Moby: Ch1')).click();
	          var content = element(by.css('[ng-view]')).getText();
	          expect(content).toMatch(/controller\: ChapterCtrl/);
	          expect(content).toMatch(/Book Id\: Moby/);
	          expect(content).toMatch(/Chapter Id\: 1/);

	          element(by.partialLinkText('Scarlet')).click();

	          content = element(by.css('[ng-view]')).getText();
	          expect(content).toMatch(/controller\: BookCtrl/);
	          expect(content).toMatch(/Book Id\: Scarlet/);
	        });
	      </file>
	    </example>
	 */


	/**
	 * @ngdoc event
	 * @name ngView#$viewContentLoaded
	 * @eventType emit on the current ngView scope
	 * @description
	 * Emitted every time the ngView content is reloaded.
	 */
	ngViewFactory.$inject = ['$route', '$anchorScroll', '$animate'];
	function ngViewFactory($route, $anchorScroll, $animate) {
	  return {
	    restrict: 'ECA',
	    terminal: true,
	    priority: 400,
	    transclude: 'element',
	    link: function(scope, $element, attr, ctrl, $transclude) {
	        var currentScope,
	            currentElement,
	            previousLeaveAnimation,
	            autoScrollExp = attr.autoscroll,
	            onloadExp = attr.onload || '';

	        scope.$on('$routeChangeSuccess', update);
	        update();

	        function cleanupLastView() {
	          if (previousLeaveAnimation) {
	            $animate.cancel(previousLeaveAnimation);
	            previousLeaveAnimation = null;
	          }

	          if (currentScope) {
	            currentScope.$destroy();
	            currentScope = null;
	          }
	          if (currentElement) {
	            previousLeaveAnimation = $animate.leave(currentElement);
	            previousLeaveAnimation.then(function() {
	              previousLeaveAnimation = null;
	            });
	            currentElement = null;
	          }
	        }

	        function update() {
	          var locals = $route.current && $route.current.locals,
	              template = locals && locals.$template;

	          if (angular.isDefined(template)) {
	            var newScope = scope.$new();
	            var current = $route.current;

	            // Note: This will also link all children of ng-view that were contained in the original
	            // html. If that content contains controllers, ... they could pollute/change the scope.
	            // However, using ng-view on an element with additional content does not make sense...
	            // Note: We can't remove them in the cloneAttchFn of $transclude as that
	            // function is called before linking the content, which would apply child
	            // directives to non existing elements.
	            var clone = $transclude(newScope, function(clone) {
	              $animate.enter(clone, null, currentElement || $element).then(function onNgViewEnter() {
	                if (angular.isDefined(autoScrollExp)
	                  && (!autoScrollExp || scope.$eval(autoScrollExp))) {
	                  $anchorScroll();
	                }
	              });
	              cleanupLastView();
	            });

	            currentElement = clone;
	            currentScope = current.scope = newScope;
	            currentScope.$emit('$viewContentLoaded');
	            currentScope.$eval(onloadExp);
	          } else {
	            cleanupLastView();
	          }
	        }
	    }
	  };
	}

	// This directive is called during the $transclude call of the first `ngView` directive.
	// It will replace and compile the content of the element with the loaded template.
	// We need this directive so that the element content is already filled when
	// the link function of another directive on the same element as ngView
	// is called.
	ngViewFillContentFactory.$inject = ['$compile', '$controller', '$route'];
	function ngViewFillContentFactory($compile, $controller, $route) {
	  return {
	    restrict: 'ECA',
	    priority: -400,
	    link: function(scope, $element) {
	      var current = $route.current,
	          locals = current.locals;

	      $element.html(locals.$template);

	      var link = $compile($element.contents());

	      if (current.controller) {
	        locals.$scope = scope;
	        var controller = $controller(current.controller, locals);
	        if (current.controllerAs) {
	          scope[current.controllerAs] = controller;
	        }
	        $element.data('$ngControllerController', controller);
	        $element.children().data('$ngControllerController', controller);
	      }
	      scope[current.resolveAs || '$resolve'] = locals;

	      link(scope);
	    }
	  };
	}


	})(window, window.angular);


/***/ }
/******/ ]);