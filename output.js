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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/byeie.js":
/*!*********************!*\
  !*** ./js/byeie.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (navigator.appName === \"Microsoft Internet Explorer\" || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/))) {\n  var warn = document.createElement(\"div\");\n  warn.innerHTML = \"Používáte zastaralý Internet Explorer, takže vám části tohoto webu nemusí fungovat. Navíc to <a target=\\\"_blank\\\" style=\\\"color:white;\\\" rel=\\\"noopener noreferrer\\\" href=\\\"https://www.zive.cz/clanky/microsoft-internet-explorer-neni-prohlizec-prestante-ho-tak-pouzivat/sc-3-a-197149/default.aspx\\\">není bezpečné</a>, zvažte přechod na <a target=\\\"_blank\\\" style=\\\"color:white;\\\" rel=\\\"noopener noreferrer\\\" href=\\\"https://www.mozilla.org/cs/firefox/new/\\\">jiný prohlížeč</a>.\";\n  warn.style.cssText = \"text-align:center;position:absolute;width:100%;height:auto;opacity:1;z-index:100;background-color:#d52834;top:37px;padding-top:4px;padding-bottom:3px;color:white;\";\n  document.body.appendChild(warn);\n}\n\n//# sourceURL=webpack:///./js/byeie.js?");

/***/ }),

/***/ "./js/posiluji.js":
/*!************************!*\
  !*** ./js/posiluji.js ***!
  \************************/
/*! exports provided: posilujiData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"posilujiData\", function() { return posilujiData; });\nvar posilujiData = [{\n  \"name\": [\"Campbell, konzervované jídlo\"],\n  \"data\": [[1577923200000, 48.49], [1578009600000, 48.43], [1578268800000, 48.51], [1578355200000, 48.19], [1578441600000, 47.35], [1578528000000, 47.62], [1578614400000, 47.73], [1578873600000, 47.72], [1578960000000, 47.54], [1579046400000, 47.78], [1579132800000, 48.09], [1579219200000, 48.02], [1579564800000, 48.56], [1579651200000, 48.57], [1579737600000, 48.96], [1579824000000, 48.79], [1580083200000, 48.77], [1580169600000, 48.88], [1580256000000, 48.34], [1580342400000, 49.03], [1580428800000, 48.39], [1580688000000, 48.87], [1580774400000, 48.66], [1580860800000, 49], [1580947200000, 48.16], [1581033600000, 48.88], [1581292800000, 48.7], [1581379200000, 48.73], [1581465600000, 48.18], [1581552000000, 48.36], [1581638400000, 48.64], [1581984000000, 48.2], [1582070400000, 47.79], [1582156800000, 47.74], [1582243200000, 47.96], [1582502400000, 48.02], [1582588800000, 47.88], [1582675200000, 46.64], [1582761600000, 45.7], [1582848000000, 45.12], [1583107200000, 47.98], [1583193600000, 47.88], [1583280000000, 52.72], [1583366400000, 53.1], [1583452800000, 51.76], [1583712000000, 50.2], [1583798400000, 51.26], [1583884800000, 50.47]]\n}, {\n  \"name\": [\"Clorox, dezinfekce\"],\n  \"data\": [[1577923200000, 152.61], [1578009600000, 152.91], [1578268800000, 153.37], [1578355200000, 151.52], [1578441600000, 151.97], [1578528000000, 152.8], [1578614400000, 153.67], [1578873600000, 156.2], [1578960000000, 156.25], [1579046400000, 156.67], [1579132800000, 157.13], [1579219200000, 157.7], [1579564800000, 159.1], [1579651200000, 159.63], [1579737600000, 159.07], [1579824000000, 158.28], [1580083200000, 159.96], [1580169600000, 156.07], [1580256000000, 155.21], [1580342400000, 155.86], [1580428800000, 157.31], [1580688000000, 155.84], [1580774400000, 163.62], [1580860800000, 165.34], [1580947200000, 165.07], [1581033600000, 166.23], [1581292800000, 167.66], [1581379200000, 164.76], [1581465600000, 164.23], [1581552000000, 164.77], [1581638400000, 164.83], [1581984000000, 164.82], [1582070400000, 164.84], [1582156800000, 164.17], [1582243200000, 164.64], [1582502400000, 167.19], [1582588800000, 167.85], [1582675200000, 168.03], [1582761600000, 168.7], [1582848000000, 159.42], [1583107200000, 172.01], [1583193600000, 167.87], [1583280000000, 172.52], [1583366400000, 175.85], [1583452800000, 173.26], [1583712000000, 174.9], [1583798400000, 175], [1583884800000, 169.4]]\n}, {\n  \"name\": [\"Kroger, supermarkety\"],\n  \"data\": [[1577923200000, 28.66], [1578009600000, 28.7], [1578268800000, 28.8], [1578355200000, 28.59], [1578441600000, 28.42], [1578528000000, 28.44], [1578614400000, 28.36], [1578873600000, 28.42], [1578960000000, 28.84], [1579046400000, 28.29], [1579132800000, 28.08], [1579219200000, 28.15], [1579564800000, 28.41], [1579651200000, 28.37], [1579737600000, 28.44], [1579824000000, 28.19], [1580083200000, 28.33], [1580169600000, 28.33], [1580256000000, 27.45], [1580342400000, 27.55], [1580428800000, 26.86], [1580688000000, 26.98], [1580774400000, 27.39], [1580860800000, 28.08], [1580947200000, 28.05], [1581033600000, 27.96], [1581292800000, 28.14], [1581379200000, 28.44], [1581465600000, 28.69], [1581552000000, 28.63], [1581638400000, 28.23], [1581984000000, 29.71], [1582070400000, 29.54], [1582156800000, 29.78], [1582243200000, 30.31], [1582502400000, 30.27], [1582588800000, 29.67], [1582675200000, 28.75], [1582761600000, 28.36], [1582848000000, 28.13], [1583107200000, 29.68], [1583193600000, 29.34], [1583280000000, 30.96], [1583366400000, 33.47], [1583452800000, 32.04], [1583712000000, 31.25], [1583798400000, 32.6], [1583884800000, 30.59]]\n}, {\n  \"name\": [\"Netflix, filmy a seriály přes internet\"],\n  \"data\": [[1577923200000, 329.81], [1578009600000, 325.9], [1578268800000, 335.83], [1578355200000, 330.75], [1578441600000, 339.26], [1578528000000, 335.66], [1578614400000, 329.05], [1578873600000, 338.92], [1578960000000, 338.69], [1579046400000, 339.07], [1579132800000, 338.62], [1579219200000, 339.67], [1579564800000, 338.11], [1579651200000, 326], [1579737600000, 349.6], [1579824000000, 353.16], [1580083200000, 342.88], [1580169600000, 348.52], [1580256000000, 343.16], [1580342400000, 347.74], [1580428800000, 345.09], [1580688000000, 358], [1580774400000, 369.01], [1580860800000, 369.67], [1580947200000, 366.95], [1581033600000, 366.77], [1581292800000, 371.07], [1581379200000, 373.69], [1581465600000, 380.01], [1581552000000, 381.4], [1581638400000, 380.4], [1581984000000, 387.78], [1582070400000, 386.19], [1582156800000, 386], [1582243200000, 380.07], [1582502400000, 368.7], [1582588800000, 360.09], [1582675200000, 379.24], [1582761600000, 371.71], [1582848000000, 369.03], [1583107200000, 381.05], [1583193600000, 368.77], [1583280000000, 383.79], [1583366400000, 372.78], [1583452800000, 368.97], [1583712000000, 346.49], [1583798400000, 364.13], [1583884800000, 349.92]]\n}];\n\n//# sourceURL=webpack:///./js/posiluji.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _byeie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./byeie */ \"./js/byeie.js\");\n/* harmony import */ var _byeie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_byeie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _posiluji_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posiluji.js */ \"./js/posiluji.js\");\n // loučíme se s IE\n\n\nHighcharts.setOptions({\n  lang: {\n    months: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],\n    shortMonths: ['led', 'úno', 'bře', 'dub', 'kvě', 'črv', 'črc', 'srp', 'zář', 'říj', 'lis', 'pro'],\n    weekdays: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota']\n  }\n});\nHighcharts.stockChart('posiluji', {\n  credits: {\n    text: 'Zdroj dat: Alpha Vantage',\n    href: 'https://www.alphavantage.co/'\n  },\n  navigator: {\n    enabled: false\n  },\n  scrollbar: {\n    enabled: false\n  },\n  rangeSelector: {\n    enabled: false,\n    selected: 0,\n    buttons: [{\n      type: 'week',\n      count: 1,\n      text: 'týden'\n    }, {\n      type: 'month',\n      count: 1,\n      text: 'měsíc'\n    }, {\n      type: 'all',\n      text: 'vše'\n    }]\n  },\n  yAxis: {\n    labels: {\n      formatter: function formatter() {\n        return (this.value > 0 ? ' + ' : '') + this.value + ' %';\n      }\n    },\n    plotLines: [{\n      value: 0,\n      width: 2,\n      color: 'silver'\n    }]\n  },\n  plotOptions: {\n    series: {\n      compare: 'percent',\n      showInNavigator: true\n    }\n  },\n  tooltip: {\n    pointFormat: '<span style=\"color:{series.color}\">{series.name}</span>: <b>{point.y}</b> ({point.change} %)<br/>',\n    valueDecimals: 2,\n    split: true,\n    dateTimeLabelFormats: {\n      day: '%A, %e. %B %Y'\n    }\n  },\n  series: _posiluji_js__WEBPACK_IMPORTED_MODULE_1__[\"posilujiData\"]\n}); // As we're loading the data asynchronously, we don't know what order it\n\n/*\n// snadné načtení souboru pro každého!\nfetch(\"https://blabla.cz/blabla.json\")\n.then(response => response.json()) // nebo .text(), když to není json\n.then(data => {\n  // tady jde provést s daty cokoliv\n});\n*/\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ });