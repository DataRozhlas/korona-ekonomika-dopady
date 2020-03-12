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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"posilujiData\", function() { return posilujiData; });\nvar posilujiData = [{\n  \"name\": [\"Netflix, streamování filmů a seriálů\"],\n  \"data\": [[1582070400000, 386.19], [1582156800000, 386], [1582243200000, 380.07], [1582502400000, 368.7], [1582588800000, 360.09], [1582675200000, 379.24], [1582761600000, 371.71], [1582848000000, 369.03], [1583107200000, 381.05], [1583193600000, 368.77], [1583280000000, 383.79], [1583366400000, 372.78], [1583452800000, 368.97], [1583712000000, 346.49], [1583798400000, 364.13], [1583884800000, 349.92]]\n}, {\n  \"name\": [\"Campbell, konzervované jídlo\"],\n  \"data\": [[1582070400000, 47.79], [1582156800000, 47.74], [1582243200000, 47.96], [1582502400000, 48.02], [1582588800000, 47.88], [1582675200000, 46.64], [1582761600000, 45.7], [1582848000000, 45.12], [1583107200000, 47.98], [1583193600000, 47.88], [1583280000000, 52.72], [1583366400000, 53.1], [1583452800000, 51.76], [1583712000000, 50.2], [1583798400000, 51.26], [1583884800000, 50.47]]\n}, {\n  \"name\": [\"Clorox, dezinfekce\"],\n  \"data\": [[1582070400000, 164.84], [1582156800000, 164.17], [1582243200000, 164.64], [1582502400000, 167.19], [1582588800000, 167.85], [1582675200000, 168.03], [1582761600000, 168.7], [1582848000000, 159.42], [1583107200000, 172.01], [1583193600000, 167.87], [1583280000000, 172.52], [1583366400000, 175.85], [1583452800000, 173.26], [1583712000000, 174.9], [1583798400000, 175], [1583884800000, 169.4]]\n}, {\n  \"name\": [\"Peloton, fitness online\"],\n  \"data\": [[1582070400000, 27.1], [1582156800000, 26.98], [1582243200000, 25.49], [1582502400000, 26.5], [1582588800000, 27.11], [1582675200000, 29.19], [1582761600000, 28.72], [1582848000000, 26.69], [1583107200000, 27.92], [1583193600000, 26.685], [1583280000000, 27.25], [1583366400000, 27.1], [1583452800000, 24.98], [1583712000000, 23.21], [1583798400000, 22.97], [1583884800000, 22]]\n}, {\n  \"name\": [\"EA Games, videohry\"],\n  \"data\": [[1582070400000, 109.78], [1582156800000, 109.2], [1582243200000, 108.01], [1582502400000, 107.03], [1582588800000, 105.38], [1582675200000, 106.54], [1582761600000, 102.74], [1582848000000, 101.37], [1583107200000, 106.89], [1583193600000, 106.7], [1583280000000, 111.83], [1583366400000, 110.21], [1583452800000, 107.67], [1583712000000, 100.93], [1583798400000, 103.38], [1583884800000, 101.18]]\n}];\n\n//# sourceURL=webpack:///./js/posiluji.js?");

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