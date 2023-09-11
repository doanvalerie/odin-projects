/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/DancingScript-VariableFont_wght.ttf */ "./src/fonts/DancingScript-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Hullist.otf */ "./src/fonts/Hullist.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Raleway-VariableFont_wght.ttf */ "./src/fonts/Raleway-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Montserrat-VariableFont_wght.ttf */ "./src/fonts/Montserrat-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/home/hero-bg.png */ "./src/assets/home/hero-bg.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/about/about-bg.png */ "./src/assets/about/about-bg.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
	font-family: 'Dancing Script';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
	font-family: 'Hullist';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face {
	font-family: 'Raleway';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

@font-face {
	font-family: 'Montserrat';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

:root {
	--hot-pink: rgb(215, 72, 134);
	--light-pink: rgb(255, 217, 223);
	--grey: rgb(72, 74, 78);
}

* {
	color: var(--grey);
}

body {
	display: flex;
	flex-direction: column;
	height: 100vh;
	margin: 0;
}

#content {
	display: flex;
	flex-direction: column;
	flex: 1;
}

nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
}

#logo {
	font-family: 'Dancing Script';
	font-size: 2rem;
	cursor: pointer;
}

#tabs button {
	font-family: 'Raleway';
	font-size: 1rem;
	letter-spacing: 0.2rem;
	background-color: transparent;
	border: none;
	cursor: pointer;
}

#tabs button:hover {
	font-weight: 500;
	border-bottom: 2px solid var(--hot-pink);
}

#hero {
	display: flex;
	flex-direction: column;
	gap: 40px;
	font-family: 'Montserrat';
	text-align: center;
	background: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) no-repeat;
	background-size: cover;
	padding: 40px 30px;
}

#heading {
	font-size: 3rem;
	font-weight: 600;
	text-shadow: 1px 1px 1px rgb(88, 85, 85);
}

#location {
	color: var(--hot-pink);
}

#description {
	font-size: 1.8rem;
}

#actions {
	display: flex;
	justify-content: center;
	gap: 40px;
}

#actions button {
	display: flex;
	align-items: center;
	gap: 8px;
	font-family: 'Raleway';
	font-size: 1rem;
	letter-spacing: 0.1rem;
	background-color: white;
	border: 1px solid;
	padding: 16px 30px;
	cursor: pointer;
}

#actions button:hover {
	background-color: var(--light-pink);
	font-weight: 500;
	border: 1.5px solid;
}

#actions .icon {
	width: 40px;
	height: auto;
}

footer {
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: 'Raleway';
}

#informational {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 20px;
	padding: 20px;
}

#informational .card {
	display: flex;
	align-items: center;
	gap: 16px;
	font-size: 1.2rem;
	border-radius: 12px;
	padding: 20px;
	height: 200px;
	width: 400px;
}

#informational img {
	width: 180px;
	height: auto;
}

#informational .text {
	text-align: center;
	height: 80%;
}

#informational .title {
	font-family: 'Montserrat';
	font-weight: 600;
	color: var(--hot-pink);
}

#policies {
	text-align: center;
	background-color: rgb(255, 216, 222);
	width: 100%;
	padding: 20px;
}

span.emphasis {
	font-weight: 500;
}

/* ABOUT */

#about {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	padding: 50px 10%;
	gap: 50px;
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
}

#about .text {
	display: flex;
	flex-direction: column;
	flex: 1;
	background-color: rgb(255, 250, 250);
	padding: 40px;
	border-radius: 20px;
}

#about h1 {
	font-family: 'Montserrat';
	font-size: 1.8rem;
	letter-spacing: 0.1rem;
	display: flex;
	align-self: center;
	gap: 8px;
	color: var(--hot-pink);
	margin: 0;
	text-shadow: 1px 1px 1px rgb(214, 167, 167);
}

#about h2 {
	letter-spacing: 0.05rem;
	font-family: 'Raleway';
	font-size: 1.2rem;
	font-weight: 400;
}

#about h1 img {
	width: 2.5rem;
}

#gallery {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 20px;
	padding: 20px;
}

#gallery img {
	width: 200px;
}

/* MENU */

#menu {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;
	gap: 20px;
	font-family: 'Montserrat';
	background-color: rgb(255, 246, 247);
	box-shadow: 1px 1px 4px grey;
	padding: 20px;
	margin: 50px 10%;
}

#menu-title {
	font-family: 'Dancing Script';
	font-size: 3rem;
	font-weight: 600;
	color: var(--hot-pink);
}

#menu .option {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
}

#menu .option .name {
	font-family: 'Montserrat';
	font-size: 1.2rem;
	font-weight: 500;
}

#menu img {
	width: 250px;
	height: auto;
	margin: 20px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n\tfont-family: 'Dancing Script';\n\tsrc: url(./fonts/DancingScript-VariableFont_wght.ttf);\n}\n\n@font-face {\n\tfont-family: 'Hullist';\n\tsrc: url(./fonts/Hullist.otf);\n}\n\n@font-face {\n\tfont-family: 'Raleway';\n\tsrc: url(./fonts/Raleway-VariableFont_wght.ttf);\n}\n\n@font-face {\n\tfont-family: 'Montserrat';\n\tsrc: url(./fonts/Montserrat-VariableFont_wght.ttf);\n}\n\n:root {\n\t--hot-pink: rgb(215, 72, 134);\n\t--light-pink: rgb(255, 217, 223);\n\t--grey: rgb(72, 74, 78);\n}\n\n* {\n\tcolor: var(--grey);\n}\n\nbody {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100vh;\n\tmargin: 0;\n}\n\n#content {\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 1;\n}\n\nnav {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 20px;\n}\n\n#logo {\n\tfont-family: 'Dancing Script';\n\tfont-size: 2rem;\n\tcursor: pointer;\n}\n\n#tabs button {\n\tfont-family: 'Raleway';\n\tfont-size: 1rem;\n\tletter-spacing: 0.2rem;\n\tbackground-color: transparent;\n\tborder: none;\n\tcursor: pointer;\n}\n\n#tabs button:hover {\n\tfont-weight: 500;\n\tborder-bottom: 2px solid var(--hot-pink);\n}\n\n#hero {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 40px;\n\tfont-family: 'Montserrat';\n\ttext-align: center;\n\tbackground: url(./assets/home/hero-bg.png) no-repeat;\n\tbackground-size: cover;\n\tpadding: 40px 30px;\n}\n\n#heading {\n\tfont-size: 3rem;\n\tfont-weight: 600;\n\ttext-shadow: 1px 1px 1px rgb(88, 85, 85);\n}\n\n#location {\n\tcolor: var(--hot-pink);\n}\n\n#description {\n\tfont-size: 1.8rem;\n}\n\n#actions {\n\tdisplay: flex;\n\tjustify-content: center;\n\tgap: 40px;\n}\n\n#actions button {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\tfont-family: 'Raleway';\n\tfont-size: 1rem;\n\tletter-spacing: 0.1rem;\n\tbackground-color: white;\n\tborder: 1px solid;\n\tpadding: 16px 30px;\n\tcursor: pointer;\n}\n\n#actions button:hover {\n\tbackground-color: var(--light-pink);\n\tfont-weight: 500;\n\tborder: 1.5px solid;\n}\n\n#actions .icon {\n\twidth: 40px;\n\theight: auto;\n}\n\nfooter {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tfont-family: 'Raleway';\n}\n\n#informational {\n\tdisplay: flex;\n\tjustify-content: center;\n\tflex-wrap: wrap;\n\tgap: 20px;\n\tpadding: 20px;\n}\n\n#informational .card {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 16px;\n\tfont-size: 1.2rem;\n\tborder-radius: 12px;\n\tpadding: 20px;\n\theight: 200px;\n\twidth: 400px;\n}\n\n#informational img {\n\twidth: 180px;\n\theight: auto;\n}\n\n#informational .text {\n\ttext-align: center;\n\theight: 80%;\n}\n\n#informational .title {\n\tfont-family: 'Montserrat';\n\tfont-weight: 600;\n\tcolor: var(--hot-pink);\n}\n\n#policies {\n\ttext-align: center;\n\tbackground-color: rgb(255, 216, 222);\n\twidth: 100%;\n\tpadding: 20px;\n}\n\nspan.emphasis {\n\tfont-weight: 500;\n}\n\n/* ABOUT */\n\n#about {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-wrap: wrap;\n\tpadding: 50px 10%;\n\tgap: 50px;\n\tbackground-image: url(./assets/about/about-bg.png);\n}\n\n#about .text {\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 1;\n\tbackground-color: rgb(255, 250, 250);\n\tpadding: 40px;\n\tborder-radius: 20px;\n}\n\n#about h1 {\n\tfont-family: 'Montserrat';\n\tfont-size: 1.8rem;\n\tletter-spacing: 0.1rem;\n\tdisplay: flex;\n\talign-self: center;\n\tgap: 8px;\n\tcolor: var(--hot-pink);\n\tmargin: 0;\n\ttext-shadow: 1px 1px 1px rgb(214, 167, 167);\n}\n\n#about h2 {\n\tletter-spacing: 0.05rem;\n\tfont-family: 'Raleway';\n\tfont-size: 1.2rem;\n\tfont-weight: 400;\n}\n\n#about h1 img {\n\twidth: 2.5rem;\n}\n\n#gallery {\n\tdisplay: flex;\n\tjustify-content: center;\n\tflex-wrap: wrap;\n\tgap: 20px;\n\tpadding: 20px;\n}\n\n#gallery img {\n\twidth: 200px;\n}\n\n/* MENU */\n\n#menu {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tflex: 1;\n\tgap: 20px;\n\tfont-family: 'Montserrat';\n\tbackground-color: rgb(255, 246, 247);\n\tbox-shadow: 1px 1px 4px grey;\n\tpadding: 20px;\n\tmargin: 50px 10%;\n}\n\n#menu-title {\n\tfont-family: 'Dancing Script';\n\tfont-size: 3rem;\n\tfont-weight: 600;\n\tcolor: var(--hot-pink);\n}\n\n#menu .option {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\ttext-align: center;\n}\n\n#menu .option .name {\n\tfont-family: 'Montserrat';\n\tfont-size: 1.2rem;\n\tfont-weight: 500;\n}\n\n#menu img {\n\twidth: 250px;\n\theight: auto;\n\tmargin: 20px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadAbout)
/* harmony export */ });
/* harmony import */ var _assets_about_tea_party_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/about/tea-party.jpg */ "./src/assets/about/tea-party.jpg");
/* harmony import */ var _assets_about_cinnamoroll_cooking_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/about/cinnamoroll-cooking.jpg */ "./src/assets/about/cinnamoroll-cooking.jpg");
/* harmony import */ var _assets_about_pompompurin_eating_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/about/pompompurin-eating.jpg */ "./src/assets/about/pompompurin-eating.jpg");
/* harmony import */ var _assets_about_sanrio_baking_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/about/sanrio-baking.jpg */ "./src/assets/about/sanrio-baking.jpg");





const content = document.getElementById('content');

function loadAbout() {
	appendMainContent();
	appendGallery();
}

function appendMainContent() {
	const about = document.createElement('div');
	about.setAttribute('id', 'about');

	const teaParty = new Image();
	teaParty.src = _assets_about_tea_party_jpg__WEBPACK_IMPORTED_MODULE_0__;

	const text = document.createElement('div');
	text.classList.add('text');

	const h1Text = ['Our Story', 'Our Commitment'];
	const h2Text = [
		"Founded on a passion for spreading joy and smiles, Sanrio Cafe is a labor of love that began with a simple idea: to bring the magic of Sanrio to life through delicious food, enchanting decor, and a warm, inviting atmosphere. Our journey started with a dream of sharing the charm of Hello Kitty, My Melody, and other iconic Sanrio characters with the world.",
		"At Sanrio Cafe, we are committed to providing you with the highest quality of service and an unforgettable dining experience. Whether you're visiting us for a special occasion or simply stopping by for a cup of coffee, we aim to make every moment memorable."
	];

	for (let i = 0; i < h1Text.length; ++i) {
		const h1 = document.createElement('h1');
		h1.textContent = h1Text[i];
		
		const h2 = document.createElement('h2');
		h2.textContent = h2Text[i];

		text.append(h1, h2);
	}

	about.append(teaParty, text);
	content.append(about);
}

function appendGallery() {
	const gallery = document.createElement('div');
	gallery.setAttribute('id', 'gallery');

	const cinnamorollCookingImg = new Image();
	cinnamorollCookingImg.src = _assets_about_cinnamoroll_cooking_jpg__WEBPACK_IMPORTED_MODULE_1__;

	const pompompurinEatingImg = new Image();
	pompompurinEatingImg.src = _assets_about_pompompurin_eating_jpg__WEBPACK_IMPORTED_MODULE_2__;

	const sanrioBakingImg = new Image();
	sanrioBakingImg.src = _assets_about_sanrio_baking_jpg__WEBPACK_IMPORTED_MODULE_3__;

	gallery.append(cinnamorollCookingImg, pompompurinEatingImg, sanrioBakingImg);
	content.append(gallery);
}

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadFooter)
/* harmony export */ });
/* harmony import */ var _assets_footer_tuxedo_sam_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/footer/tuxedo-sam.jpg */ "./src/assets/footer/tuxedo-sam.jpg");
/* harmony import */ var _assets_footer_cinnamoroll_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/footer/cinnamoroll.jpg */ "./src/assets/footer/cinnamoroll.jpg");
/* harmony import */ var _assets_footer_pompompurin_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/footer/pompompurin.jpg */ "./src/assets/footer/pompompurin.jpg");




function loadFooter() {
	const footer = document.createElement('footer');

	appendInformation(footer);
	appendPolicies(footer);

	document.body.append(footer);
}

function appendInformation(footer) {
	const information = document.createElement('div');
	information.setAttribute('id', 'informational');

	const tuxedoSamIcon = new Image();
	tuxedoSamIcon.src = _assets_footer_tuxedo_sam_jpg__WEBPACK_IMPORTED_MODULE_0__;

	const cinnamorollIcon = new Image();
	cinnamorollIcon.src = _assets_footer_cinnamoroll_jpg__WEBPACK_IMPORTED_MODULE_1__;

	const pompompurinIcon = new Image();
	pompompurinIcon.src = _assets_footer_pompompurin_jpg__WEBPACK_IMPORTED_MODULE_2__;

	const icons = [tuxedoSamIcon, cinnamorollIcon, pompompurinIcon];

	const cardTitles = ['Address', 'Contact', 'Hours'];
	const cardCaptions = [
		'Hello Kitty Cafe<br>' + 
		'1234 Cuddle Lane<br>' +
		'Kawaii Town, Dreamland<br>' +
		'Sanrioville, Smile 27381<br>',

		'(555) 123-4567<br>' +
		'contact@sanriocafe.com<br>',

		'<span class="emphasis">Mon - Fri</span>: 11:00 to 18:00<br>' +
		'<span class="emphasis">Sat</span>: 10:00 to 19:00<br>' +
		'<span class="emphasis">Sun</span>: Closed<br>'
	];

	for (let i = 0; i < cardTitles.length; ++i) {
		const card = document.createElement('div');
		card.classList.add('card');

		const text = document.createElement('div');
		text.classList.add('text');

		const title = document.createElement('p');
		title.classList.add('title');
		title.textContent = cardTitles[i];

		const caption = document.createElement('p');
		caption.innerHTML = cardCaptions[i];

		text.append(title, caption);
		card.append(icons[i], text);
		information.append(card);
	}

	footer.append(information);
}

function appendPolicies(footer) {
	const policies = document.createElement('div');
	policies.setAttribute('id', 'policies');

	const linkNames = ['Refund Policy', 'Privacy Policy', 'Terms and Conditions'];

	for (let i = 0; i < linkNames.length; ++i) {
		const link = document.createElement('a');
		link.href = '';
		link.textContent = linkNames[i];
		policies.append(' | ', link);
	}
	policies.append(' |');

	footer.append(policies);
}

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _assets_home_cooking_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/home/cooking.gif */ "./src/assets/home/cooking.gif");
/* harmony import */ var _assets_home_my_melody_head_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/home/my-melody-head.jpg */ "./src/assets/home/my-melody-head.jpg");
/* harmony import */ var _assets_home_kuromi_head_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/home/kuromi-head.jpg */ "./src/assets/home/kuromi-head.jpg");




const content = document.getElementById('content');

function loadHome() {
	appendHero();
}

function appendHero() {
	const hero = document.createElement('div');
	hero.setAttribute('id', 'hero');

	appendMainContent(hero);
	appendActions(hero);

	content.append(hero);
}

function appendMainContent(hero) {
	const mainContent = document.createElement('div');

	const cookingGIF = new Image();
	cookingGIF.src = _assets_home_cooking_gif__WEBPACK_IMPORTED_MODULE_0__;

	const heading = document.createElement('div');
	heading.setAttribute('id', 'heading');
	heading.innerHTML = 'The Sanrio Experience in <span id="location">Kawaii Town, Dreamland.</span>';

	const description = document.createElement('div');
	description.setAttribute('id', 'description');
	description.textContent = 'A life-changing experience to fulfill your grandest dreams.'

	mainContent.append(cookingGIF, heading, description);
	hero.append(mainContent);
}

function appendActions(hero) {
	const actions = document.createElement('div');
	actions.setAttribute('id', 'actions');
	const actionTitles = ['RESERVE TABLE', 'ORDER ONLINE'];

	const myMelodyIcon = new Image();
	myMelodyIcon.src = _assets_home_my_melody_head_jpg__WEBPACK_IMPORTED_MODULE_1__;

	const kuromiIcon = new Image();
	kuromiIcon.src = _assets_home_kuromi_head_jpg__WEBPACK_IMPORTED_MODULE_2__;

	const icons = [kuromiIcon, myMelodyIcon];
	icons.forEach(icon => icon.classList.add('icon'));

	for (let i = 0; i < actionTitles.length; ++i) {
		const button = document.createElement('button');
		button.append(icons[i], actionTitles[i]);
		actions.append(button);
	}

	hero.append(actions);
}

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _assets_menu_pancakes_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/menu/pancakes.jpg */ "./src/assets/menu/pancakes.jpg");
/* harmony import */ var _assets_menu_toast_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/menu/toast.jpg */ "./src/assets/menu/toast.jpg");
/* harmony import */ var _assets_menu_flan_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/menu/flan.jpg */ "./src/assets/menu/flan.jpg");





const content = document.getElementById('content');

function loadMenu() {
	appendMenu();
}

function appendMenu() {
	const menu = document.createElement('div');
	menu.setAttribute('id', 'menu');

	const menuTitle = document.createElement('div');
	menuTitle.setAttribute('id', 'menu-title');
	menuTitle.textContent = 'Sanrio Grand Cafe';
	menu.append(menuTitle);

	const dishNames = [
		'Butterscotch Mochi Pancakes <span class="price">$18</span>',
		'Egg Bacon Toast with Jelly Boba <span class="price">$20</span>',
		'Carmelized Flan <span class="price">$12</span>'
	];

	const dishDescriptions = [
		'Fluffy rice pancakes with fresh fruit, butterscotch drizzle, and bubblegum cream',
		'Toasted milk bread with a runny egg, crispy bacon, and jelly boba delight.',
		'Soft caramel egg flan w/ fresh cream and condensed milk.'
	];

	const pancakeImg = new Image();
	pancakeImg.src = _assets_menu_pancakes_jpg__WEBPACK_IMPORTED_MODULE_0__;

	const toastImg = new Image();
	toastImg.src = _assets_menu_toast_jpg__WEBPACK_IMPORTED_MODULE_1__;

	const flanImg = new Image();
	flanImg.src = _assets_menu_flan_jpg__WEBPACK_IMPORTED_MODULE_2__;

	const foodImages = [pancakeImg, toastImg, flanImg];

	for (let i = 0; i < dishNames.length; ++i) {
		const option = document.createElement('div');
		option.classList.add('option');

		const name = document.createElement('div');
		name.classList.add('name');
		name.innerHTML = dishNames[i];

		const description = document.createElement('div');
		description.classList.add('description');
		description.textContent = dishDescriptions[i];

		option.append(name, description, foodImages[i]);
		menu.append(option);
	}

	content.append(menu);
}

/***/ }),

/***/ "./src/modules/navigation.js":
/*!***********************************!*\
  !*** ./src/modules/navigation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadNavigation)
/* harmony export */ });
function loadNavigation() {
	const content = document.getElementById('content');
	const nav = document.createElement('nav');

	const logo = document.createElement('div');
	logo.setAttribute('id', 'logo');
	logo.textContent = 'Sanrio Grand Cafe';

	const tabTitles = ['MAIN', 'ABOUT', 'MENU'];
	const tabs = document.createElement('div');
	tabs.setAttribute('id', 'tabs');
	for (let i = 0; i < tabTitles.length; ++i) {
		const button = document.createElement('button');
		button.textContent = tabTitles[i];
		tabs.append(button);
	}

	nav.append(logo, tabs);
	document.body.insertBefore(nav, content)
}

/***/ }),

/***/ "./src/assets/about/about-bg.png":
/*!***************************************!*\
  !*** ./src/assets/about/about-bg.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ab7ed23b835bbccf3b8e.png";

/***/ }),

/***/ "./src/assets/about/cinnamoroll-cooking.jpg":
/*!**************************************************!*\
  !*** ./src/assets/about/cinnamoroll-cooking.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/38e1e271198779dff262.jpg";

/***/ }),

/***/ "./src/assets/about/pompompurin-eating.jpg":
/*!*************************************************!*\
  !*** ./src/assets/about/pompompurin-eating.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ba6775571ab74da6dbb9.jpg";

/***/ }),

/***/ "./src/assets/about/sanrio-baking.jpg":
/*!********************************************!*\
  !*** ./src/assets/about/sanrio-baking.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/c4f28995dc5b6cf7f010.jpg";

/***/ }),

/***/ "./src/assets/about/tea-party.jpg":
/*!****************************************!*\
  !*** ./src/assets/about/tea-party.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/014e434677796ae2349a.jpg";

/***/ }),

/***/ "./src/assets/footer/cinnamoroll.jpg":
/*!*******************************************!*\
  !*** ./src/assets/footer/cinnamoroll.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/b9db4ec3800ede265ee8.jpg";

/***/ }),

/***/ "./src/assets/footer/pompompurin.jpg":
/*!*******************************************!*\
  !*** ./src/assets/footer/pompompurin.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/3d45d0a16dcf73d393ea.jpg";

/***/ }),

/***/ "./src/assets/footer/tuxedo-sam.jpg":
/*!******************************************!*\
  !*** ./src/assets/footer/tuxedo-sam.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/9163c4682d377ddce3dc.jpg";

/***/ }),

/***/ "./src/assets/home/cooking.gif":
/*!*************************************!*\
  !*** ./src/assets/home/cooking.gif ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/f4e960f2d263bb03143d.gif";

/***/ }),

/***/ "./src/assets/home/hero-bg.png":
/*!*************************************!*\
  !*** ./src/assets/home/hero-bg.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/12d947bab54331441cbf.png";

/***/ }),

/***/ "./src/assets/home/kuromi-head.jpg":
/*!*****************************************!*\
  !*** ./src/assets/home/kuromi-head.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/3153e782f45d8e226474.jpg";

/***/ }),

/***/ "./src/assets/home/my-melody-head.jpg":
/*!********************************************!*\
  !*** ./src/assets/home/my-melody-head.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/e205b9fce035b8c24d54.jpg";

/***/ }),

/***/ "./src/assets/menu/flan.jpg":
/*!**********************************!*\
  !*** ./src/assets/menu/flan.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/4f42508395b0a5e0c530.jpg";

/***/ }),

/***/ "./src/assets/menu/pancakes.jpg":
/*!**************************************!*\
  !*** ./src/assets/menu/pancakes.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/355c906783bc5987726b.jpg";

/***/ }),

/***/ "./src/assets/menu/toast.jpg":
/*!***********************************!*\
  !*** ./src/assets/menu/toast.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/fee0dc0ea782fc9daa06.jpg";

/***/ }),

/***/ "./src/fonts/DancingScript-VariableFont_wght.ttf":
/*!*******************************************************!*\
  !*** ./src/fonts/DancingScript-VariableFont_wght.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/3e7e73f4e34e4945f363.ttf";

/***/ }),

/***/ "./src/fonts/Hullist.otf":
/*!*******************************!*\
  !*** ./src/fonts/Hullist.otf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/d63c935b3c6cbead759d.otf";

/***/ }),

/***/ "./src/fonts/Montserrat-VariableFont_wght.ttf":
/*!****************************************************!*\
  !*** ./src/fonts/Montserrat-VariableFont_wght.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/3faa3eef13649db02044.ttf";

/***/ }),

/***/ "./src/fonts/Raleway-VariableFont_wght.ttf":
/*!*************************************************!*\
  !*** ./src/fonts/Raleway-VariableFont_wght.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/575ec9e676c7a85494bb.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/navigation */ "./src/modules/navigation.js");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/about */ "./src/modules/about.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/footer */ "./src/modules/footer.js");







(0,_modules_navigation__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_footer__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_modules_home__WEBPACK_IMPORTED_MODULE_2__["default"])();
addTabListener();

function addTabListener() {
	const tabsNL = document.querySelectorAll('#tabs>button');
	tabsNL.forEach(tab => {
		tab.addEventListener('click', wipeContent);
	});

	const tabLoaders = [_modules_home__WEBPACK_IMPORTED_MODULE_2__["default"], _modules_about__WEBPACK_IMPORTED_MODULE_3__["default"], _modules_menu__WEBPACK_IMPORTED_MODULE_4__["default"]];
	const tabsArr = Array.from(tabsNL);
	for (let i = 0; i < tabsArr.length; ++i) {
		tabsArr[i].addEventListener('click', tabLoaders[i]);
	}
}

function wipeContent() {
	const content = document.getElementById('content');

	let child = content.lastElementChild;
	while (child) {
		content.removeChild(child);
		child = content.lastElementChild;
	}
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1LQUE4RDtBQUMxRyw0Q0FBNEMsbUhBQXNDO0FBQ2xGLDRDQUE0Qyx1SkFBd0Q7QUFDcEcsNENBQTRDLDZKQUEyRDtBQUN2Ryw0Q0FBNEMsK0hBQTRDO0FBQ3hGLDRDQUE0QyxtSUFBOEM7QUFDMUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQzs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxtQ0FBbUM7QUFDL0M7O0FBRUE7QUFDQTtBQUNBLFlBQVksbUNBQW1DO0FBQy9DOztBQUVBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQ0FBbUM7QUFDdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbUNBQW1DO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFB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Q0U7QUFDRjtBQUNJOztBQUUxQywrREFBYztBQUNkLDJEQUFVO0FBQ1YseURBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUYscUJBQXFCLHFEQUFRLEVBQUUsc0RBQVMsRUFBRSxxREFBUTtBQUNsRDtBQUNBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvRGFuY2luZ1NjcmlwdC1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0h1bGxpc3Qub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9SYWxld2F5LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vZm9udHMvTW9udHNlcnJhdC1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9ob21lL2hlcm8tYmcucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvYWJvdXQvYWJvdXQtYmcucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0Jztcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogJ0h1bGxpc3QnO1xuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jztcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG59XG5cbjpyb290IHtcblx0LS1ob3QtcGluazogcmdiKDIxNSwgNzIsIDEzNCk7XG5cdC0tbGlnaHQtcGluazogcmdiKDI1NSwgMjE3LCAyMjMpO1xuXHQtLWdyZXk6IHJnYig3MiwgNzQsIDc4KTtcbn1cblxuKiB7XG5cdGNvbG9yOiB2YXIoLS1ncmV5KTtcbn1cblxuYm9keSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGhlaWdodDogMTAwdmg7XG5cdG1hcmdpbjogMDtcbn1cblxuI2NvbnRlbnQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4OiAxO1xufVxuXG5uYXYge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDIwcHg7XG59XG5cbiNsb2dvIHtcblx0Zm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCc7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4jdGFicyBidXR0b24ge1xuXHRmb250LWZhbWlseTogJ1JhbGV3YXknO1xuXHRmb250LXNpemU6IDFyZW07XG5cdGxldHRlci1zcGFjaW5nOiAwLjJyZW07XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRib3JkZXI6IG5vbmU7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3RhYnMgYnV0dG9uOmhvdmVyIHtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWhvdC1waW5rKTtcbn1cblxuI2hlcm8ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDQwcHg7XG5cdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0YmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pIG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0cGFkZGluZzogNDBweCAzMHB4O1xufVxuXG4jaGVhZGluZyB7XG5cdGZvbnQtc2l6ZTogM3JlbTtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0dGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYig4OCwgODUsIDg1KTtcbn1cblxuI2xvY2F0aW9uIHtcblx0Y29sb3I6IHZhcigtLWhvdC1waW5rKTtcbn1cblxuI2Rlc2NyaXB0aW9uIHtcblx0Zm9udC1zaXplOiAxLjhyZW07XG59XG5cbiNhY3Rpb25zIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGdhcDogNDBweDtcbn1cblxuI2FjdGlvbnMgYnV0dG9uIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiA4cHg7XG5cdGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XG5cdGZvbnQtc2l6ZTogMXJlbTtcblx0bGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdGJvcmRlcjogMXB4IHNvbGlkO1xuXHRwYWRkaW5nOiAxNnB4IDMwcHg7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2FjdGlvbnMgYnV0dG9uOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcGluayk7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGJvcmRlcjogMS41cHggc29saWQ7XG59XG5cbiNhY3Rpb25zIC5pY29uIHtcblx0d2lkdGg6IDQwcHg7XG5cdGhlaWdodDogYXV0bztcbn1cblxuZm9vdGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Zm9udC1mYW1pbHk6ICdSYWxld2F5Jztcbn1cblxuI2luZm9ybWF0aW9uYWwge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRnYXA6IDIwcHg7XG5cdHBhZGRpbmc6IDIwcHg7XG59XG5cbiNpbmZvcm1hdGlvbmFsIC5jYXJkIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAxNnB4O1xuXHRmb250LXNpemU6IDEuMnJlbTtcblx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0cGFkZGluZzogMjBweDtcblx0aGVpZ2h0OiAyMDBweDtcblx0d2lkdGg6IDQwMHB4O1xufVxuXG4jaW5mb3JtYXRpb25hbCBpbWcge1xuXHR3aWR0aDogMTgwcHg7XG5cdGhlaWdodDogYXV0bztcbn1cblxuI2luZm9ybWF0aW9uYWwgLnRleHQge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGhlaWdodDogODAlO1xufVxuXG4jaW5mb3JtYXRpb25hbCAudGl0bGUge1xuXHRmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRjb2xvcjogdmFyKC0taG90LXBpbmspO1xufVxuXG4jcG9saWNpZXMge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIxNiwgMjIyKTtcblx0d2lkdGg6IDEwMCU7XG5cdHBhZGRpbmc6IDIwcHg7XG59XG5cbnNwYW4uZW1waGFzaXMge1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuXG4vKiBBQk9VVCAqL1xuXG4jYWJvdXQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRwYWRkaW5nOiA1MHB4IDEwJTtcblx0Z2FwOiA1MHB4O1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG59XG5cbiNhYm91dCAudGV4dCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXg6IDE7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1MCwgMjUwKTtcblx0cGFkZGluZzogNDBweDtcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuI2Fib3V0IGgxIHtcblx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jztcblx0Zm9udC1zaXplOiAxLjhyZW07XG5cdGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcblx0Z2FwOiA4cHg7XG5cdGNvbG9yOiB2YXIoLS1ob3QtcGluayk7XG5cdG1hcmdpbjogMDtcblx0dGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYigyMTQsIDE2NywgMTY3KTtcbn1cblxuI2Fib3V0IGgyIHtcblx0bGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XG5cdGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xuXHRmb250LXdlaWdodDogNDAwO1xufVxuXG4jYWJvdXQgaDEgaW1nIHtcblx0d2lkdGg6IDIuNXJlbTtcbn1cblxuI2dhbGxlcnkge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRnYXA6IDIwcHg7XG5cdHBhZGRpbmc6IDIwcHg7XG59XG5cbiNnYWxsZXJ5IGltZyB7XG5cdHdpZHRoOiAyMDBweDtcbn1cblxuLyogTUVOVSAqL1xuXG4jbWVudSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmbGV4OiAxO1xuXHRnYXA6IDIwcHg7XG5cdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0NiwgMjQ3KTtcblx0Ym94LXNoYWRvdzogMXB4IDFweCA0cHggZ3JleTtcblx0cGFkZGluZzogMjBweDtcblx0bWFyZ2luOiA1MHB4IDEwJTtcbn1cblxuI21lbnUtdGl0bGUge1xuXHRmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0Jztcblx0Zm9udC1zaXplOiAzcmVtO1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRjb2xvcjogdmFyKC0taG90LXBpbmspO1xufVxuXG4jbWVudSAub3B0aW9uIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jbWVudSAub3B0aW9uIC5uYW1lIHtcblx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jztcblx0Zm9udC1zaXplOiAxLjJyZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbiNtZW51IGltZyB7XG5cdHdpZHRoOiAyNTBweDtcblx0aGVpZ2h0OiBhdXRvO1xuXHRtYXJnaW46IDIwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyw2QkFBNkI7Q0FDN0IsNENBQXFEO0FBQ3REOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLDRDQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0Qiw0Q0FBK0M7QUFDaEQ7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsNENBQWtEO0FBQ25EOztBQUVBO0NBQ0MsNkJBQTZCO0NBQzdCLGdDQUFnQztDQUNoQyx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGFBQWE7Q0FDYixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLE9BQU87QUFDUjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsbUJBQW1CO0NBQ25CLGFBQWE7QUFDZDs7QUFFQTtDQUNDLDZCQUE2QjtDQUM3QixlQUFlO0NBQ2YsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixlQUFlO0NBQ2Ysc0JBQXNCO0NBQ3RCLDZCQUE2QjtDQUM3QixZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQix3Q0FBd0M7QUFDekM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFNBQVM7Q0FDVCx5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLDZEQUFvRDtDQUNwRCxzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQix3Q0FBd0M7QUFDekM7O0FBRUE7Q0FDQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsUUFBUTtDQUNSLHNCQUFzQjtDQUN0QixlQUFlO0NBQ2Ysc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxtQ0FBbUM7Q0FDbkMsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLGVBQWU7Q0FDZixTQUFTO0NBQ1QsYUFBYTtBQUNkOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsaUJBQWlCO0NBQ2pCLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsYUFBYTtDQUNiLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztBQUNaOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGdCQUFnQjtDQUNoQixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsb0NBQW9DO0NBQ3BDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUEsVUFBVTs7QUFFVjtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsU0FBUztDQUNULHlEQUFrRDtBQUNuRDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsT0FBTztDQUNQLG9DQUFvQztDQUNwQyxhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtDQUNqQixzQkFBc0I7Q0FDdEIsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1Isc0JBQXNCO0NBQ3RCLFNBQVM7Q0FDVCwyQ0FBMkM7QUFDNUM7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsc0JBQXNCO0NBQ3RCLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLGVBQWU7Q0FDZixTQUFTO0NBQ1QsYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBLFNBQVM7O0FBRVQ7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsT0FBTztDQUNQLFNBQVM7Q0FDVCx5QkFBeUI7Q0FDekIsb0NBQW9DO0NBQ3BDLDRCQUE0QjtDQUM1QixhQUFhO0NBQ2IsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsNkJBQTZCO0NBQzdCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLFlBQVk7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JztcXG5cXHRzcmM6IHVybCguL2ZvbnRzL0RhbmNpbmdTY3JpcHQtVmFyaWFibGVGb250X3dnaHQudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdIdWxsaXN0JztcXG5cXHRzcmM6IHVybCguL2ZvbnRzL0h1bGxpc3Qub3RmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdSYWxld2F5JztcXG5cXHRzcmM6IHVybCguL2ZvbnRzL1JhbGV3YXktVmFyaWFibGVGb250X3dnaHQudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG5cXHRzcmM6IHVybCguL2ZvbnRzL01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmKTtcXG59XFxuXFxuOnJvb3Qge1xcblxcdC0taG90LXBpbms6IHJnYigyMTUsIDcyLCAxMzQpO1xcblxcdC0tbGlnaHQtcGluazogcmdiKDI1NSwgMjE3LCAyMjMpO1xcblxcdC0tZ3JleTogcmdiKDcyLCA3NCwgNzgpO1xcbn1cXG5cXG4qIHtcXG5cXHRjb2xvcjogdmFyKC0tZ3JleSk7XFxufVxcblxcbmJvZHkge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuI2NvbnRlbnQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRmbGV4OiAxO1xcbn1cXG5cXG5uYXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMjBweDtcXG59XFxuXFxuI2xvZ28ge1xcblxcdGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnO1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0YWJzIGJ1dHRvbiB7XFxuXFx0Zm9udC1mYW1pbHk6ICdSYWxld2F5JztcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdGFicyBidXR0b246aG92ZXIge1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWhvdC1waW5rKTtcXG59XFxuXFxuI2hlcm8ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDQwcHg7XFxuXFx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZDogdXJsKC4vYXNzZXRzL2hvbWUvaGVyby1iZy5wbmcpIG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdHBhZGRpbmc6IDQwcHggMzBweDtcXG59XFxuXFxuI2hlYWRpbmcge1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2IoODgsIDg1LCA4NSk7XFxufVxcblxcbiNsb2NhdGlvbiB7XFxuXFx0Y29sb3I6IHZhcigtLWhvdC1waW5rKTtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG5cXHRmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuI2FjdGlvbnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiA0MHB4O1xcbn1cXG5cXG4jYWN0aW9ucyBidXR0b24ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDhweDtcXG5cXHRmb250LWZhbWlseTogJ1JhbGV3YXknO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkO1xcblxcdHBhZGRpbmc6IDE2cHggMzBweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhY3Rpb25zIGJ1dHRvbjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcGluayk7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRib3JkZXI6IDEuNXB4IHNvbGlkO1xcbn1cXG5cXG4jYWN0aW9ucyAuaWNvbiB7XFxuXFx0d2lkdGg6IDQwcHg7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5mb290ZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxufVxcblxcbiNpbmZvcm1hdGlvbmFsIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRnYXA6IDIwcHg7XFxuXFx0cGFkZGluZzogMjBweDtcXG59XFxuXFxuI2luZm9ybWF0aW9uYWwgLmNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDE2cHg7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMTJweDtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdGhlaWdodDogMjAwcHg7XFxuXFx0d2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4jaW5mb3JtYXRpb25hbCBpbWcge1xcblxcdHdpZHRoOiAxODBweDtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbiNpbmZvcm1hdGlvbmFsIC50ZXh0IHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiA4MCU7XFxufVxcblxcbiNpbmZvcm1hdGlvbmFsIC50aXRsZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdGNvbG9yOiB2YXIoLS1ob3QtcGluayk7XFxufVxcblxcbiNwb2xpY2llcyB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIxNiwgMjIyKTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG5zcGFuLmVtcGhhc2lzIHtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4vKiBBQk9VVCAqL1xcblxcbiNhYm91dCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRwYWRkaW5nOiA1MHB4IDEwJTtcXG5cXHRnYXA6IDUwcHg7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2Fib3V0L2Fib3V0LWJnLnBuZyk7XFxufVxcblxcbiNhYm91dCAudGV4dCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGZsZXg6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjUwLCAyNTApO1xcblxcdHBhZGRpbmc6IDQwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuI2Fib3V0IGgxIHtcXG5cXHRmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcblxcdGZvbnQtc2l6ZTogMS44cmVtO1xcblxcdGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0Z2FwOiA4cHg7XFxuXFx0Y29sb3I6IHZhcigtLWhvdC1waW5rKTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0dGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYigyMTQsIDE2NywgMTY3KTtcXG59XFxuXFxuI2Fib3V0IGgyIHtcXG5cXHRsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcXG5cXHRmb250LWZhbWlseTogJ1JhbGV3YXknO1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbiNhYm91dCBoMSBpbWcge1xcblxcdHdpZHRoOiAyLjVyZW07XFxufVxcblxcbiNnYWxsZXJ5IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRnYXA6IDIwcHg7XFxuXFx0cGFkZGluZzogMjBweDtcXG59XFxuXFxuI2dhbGxlcnkgaW1nIHtcXG5cXHR3aWR0aDogMjAwcHg7XFxufVxcblxcbi8qIE1FTlUgKi9cXG5cXG4jbWVudSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0ZmxleDogMTtcXG5cXHRnYXA6IDIwcHg7XFxuXFx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDYsIDI0Nyk7XFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCA0cHggZ3JleTtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdG1hcmdpbjogNTBweCAxMCU7XFxufVxcblxcbiNtZW51LXRpdGxlIHtcXG5cXHRmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JztcXG5cXHRmb250LXNpemU6IDNyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRjb2xvcjogdmFyKC0taG90LXBpbmspO1xcbn1cXG5cXG4jbWVudSAub3B0aW9uIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNtZW51IC5vcHRpb24gLm5hbWUge1xcblxcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI21lbnUgaW1nIHtcXG5cXHR3aWR0aDogMjUwcHg7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdG1hcmdpbjogMjBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgVGVhUGFydHlJbWcgZnJvbSAnLi4vYXNzZXRzL2Fib3V0L3RlYS1wYXJ0eS5qcGcnO1xuaW1wb3J0IENpbm5hbW9yb2xsQ29va2luZ0ltZyBmcm9tICcuLi9hc3NldHMvYWJvdXQvY2lubmFtb3JvbGwtY29va2luZy5qcGcnO1xuaW1wb3J0IFBvbXBvbXB1cmluRWF0aW5nSW1nIGZyb20gJy4uL2Fzc2V0cy9hYm91dC9wb21wb21wdXJpbi1lYXRpbmcuanBnJztcbmltcG9ydCBTYW5yaW9CYWtpbmdJbWcgZnJvbSAnLi4vYXNzZXRzL2Fib3V0L3NhbnJpby1iYWtpbmcuanBnJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRBYm91dCgpIHtcblx0YXBwZW5kTWFpbkNvbnRlbnQoKTtcblx0YXBwZW5kR2FsbGVyeSgpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRNYWluQ29udGVudCgpIHtcblx0Y29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0YWJvdXQuc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dCcpO1xuXG5cdGNvbnN0IHRlYVBhcnR5ID0gbmV3IEltYWdlKCk7XG5cdHRlYVBhcnR5LnNyYyA9IFRlYVBhcnR5SW1nO1xuXG5cdGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dGV4dC5jbGFzc0xpc3QuYWRkKCd0ZXh0Jyk7XG5cblx0Y29uc3QgaDFUZXh0ID0gWydPdXIgU3RvcnknLCAnT3VyIENvbW1pdG1lbnQnXTtcblx0Y29uc3QgaDJUZXh0ID0gW1xuXHRcdFwiRm91bmRlZCBvbiBhIHBhc3Npb24gZm9yIHNwcmVhZGluZyBqb3kgYW5kIHNtaWxlcywgU2FucmlvIENhZmUgaXMgYSBsYWJvciBvZiBsb3ZlIHRoYXQgYmVnYW4gd2l0aCBhIHNpbXBsZSBpZGVhOiB0byBicmluZyB0aGUgbWFnaWMgb2YgU2FucmlvIHRvIGxpZmUgdGhyb3VnaCBkZWxpY2lvdXMgZm9vZCwgZW5jaGFudGluZyBkZWNvciwgYW5kIGEgd2FybSwgaW52aXRpbmcgYXRtb3NwaGVyZS4gT3VyIGpvdXJuZXkgc3RhcnRlZCB3aXRoIGEgZHJlYW0gb2Ygc2hhcmluZyB0aGUgY2hhcm0gb2YgSGVsbG8gS2l0dHksIE15IE1lbG9keSwgYW5kIG90aGVyIGljb25pYyBTYW5yaW8gY2hhcmFjdGVycyB3aXRoIHRoZSB3b3JsZC5cIixcblx0XHRcIkF0IFNhbnJpbyBDYWZlLCB3ZSBhcmUgY29tbWl0dGVkIHRvIHByb3ZpZGluZyB5b3Ugd2l0aCB0aGUgaGlnaGVzdCBxdWFsaXR5IG9mIHNlcnZpY2UgYW5kIGFuIHVuZm9yZ2V0dGFibGUgZGluaW5nIGV4cGVyaWVuY2UuIFdoZXRoZXIgeW91J3JlIHZpc2l0aW5nIHVzIGZvciBhIHNwZWNpYWwgb2NjYXNpb24gb3Igc2ltcGx5IHN0b3BwaW5nIGJ5IGZvciBhIGN1cCBvZiBjb2ZmZWUsIHdlIGFpbSB0byBtYWtlIGV2ZXJ5IG1vbWVudCBtZW1vcmFibGUuXCJcblx0XTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGgxVGV4dC5sZW5ndGg7ICsraSkge1xuXHRcdGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblx0XHRoMS50ZXh0Q29udGVudCA9IGgxVGV4dFtpXTtcblx0XHRcblx0XHRjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cdFx0aDIudGV4dENvbnRlbnQgPSBoMlRleHRbaV07XG5cblx0XHR0ZXh0LmFwcGVuZChoMSwgaDIpO1xuXHR9XG5cblx0YWJvdXQuYXBwZW5kKHRlYVBhcnR5LCB0ZXh0KTtcblx0Y29udGVudC5hcHBlbmQoYWJvdXQpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRHYWxsZXJ5KCkge1xuXHRjb25zdCBnYWxsZXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGdhbGxlcnkuc2V0QXR0cmlidXRlKCdpZCcsICdnYWxsZXJ5Jyk7XG5cblx0Y29uc3QgY2lubmFtb3JvbGxDb29raW5nSW1nID0gbmV3IEltYWdlKCk7XG5cdGNpbm5hbW9yb2xsQ29va2luZ0ltZy5zcmMgPSBDaW5uYW1vcm9sbENvb2tpbmdJbWc7XG5cblx0Y29uc3QgcG9tcG9tcHVyaW5FYXRpbmdJbWcgPSBuZXcgSW1hZ2UoKTtcblx0cG9tcG9tcHVyaW5FYXRpbmdJbWcuc3JjID0gUG9tcG9tcHVyaW5FYXRpbmdJbWc7XG5cblx0Y29uc3Qgc2FucmlvQmFraW5nSW1nID0gbmV3IEltYWdlKCk7XG5cdHNhbnJpb0Jha2luZ0ltZy5zcmMgPSBTYW5yaW9CYWtpbmdJbWc7XG5cblx0Z2FsbGVyeS5hcHBlbmQoY2lubmFtb3JvbGxDb29raW5nSW1nLCBwb21wb21wdXJpbkVhdGluZ0ltZywgc2FucmlvQmFraW5nSW1nKTtcblx0Y29udGVudC5hcHBlbmQoZ2FsbGVyeSk7XG59IiwiaW1wb3J0IFR1eGVkb1NhbUljb24gZnJvbSAnLi4vYXNzZXRzL2Zvb3Rlci90dXhlZG8tc2FtLmpwZyc7XG5pbXBvcnQgQ2lubmFtb3JvbGxJY29uIGZyb20gJy4uL2Fzc2V0cy9mb290ZXIvY2lubmFtb3JvbGwuanBnJztcbmltcG9ydCBQb21wb21wdXJpbkljb24gZnJvbSAnLi4vYXNzZXRzL2Zvb3Rlci9wb21wb21wdXJpbi5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkRm9vdGVyKCkge1xuXHRjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuXHRhcHBlbmRJbmZvcm1hdGlvbihmb290ZXIpO1xuXHRhcHBlbmRQb2xpY2llcyhmb290ZXIpO1xuXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKGZvb3Rlcik7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEluZm9ybWF0aW9uKGZvb3Rlcikge1xuXHRjb25zdCBpbmZvcm1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRpbmZvcm1hdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luZm9ybWF0aW9uYWwnKTtcblxuXHRjb25zdCB0dXhlZG9TYW1JY29uID0gbmV3IEltYWdlKCk7XG5cdHR1eGVkb1NhbUljb24uc3JjID0gVHV4ZWRvU2FtSWNvbjtcblxuXHRjb25zdCBjaW5uYW1vcm9sbEljb24gPSBuZXcgSW1hZ2UoKTtcblx0Y2lubmFtb3JvbGxJY29uLnNyYyA9IENpbm5hbW9yb2xsSWNvbjtcblxuXHRjb25zdCBwb21wb21wdXJpbkljb24gPSBuZXcgSW1hZ2UoKTtcblx0cG9tcG9tcHVyaW5JY29uLnNyYyA9IFBvbXBvbXB1cmluSWNvbjtcblxuXHRjb25zdCBpY29ucyA9IFt0dXhlZG9TYW1JY29uLCBjaW5uYW1vcm9sbEljb24sIHBvbXBvbXB1cmluSWNvbl07XG5cblx0Y29uc3QgY2FyZFRpdGxlcyA9IFsnQWRkcmVzcycsICdDb250YWN0JywgJ0hvdXJzJ107XG5cdGNvbnN0IGNhcmRDYXB0aW9ucyA9IFtcblx0XHQnSGVsbG8gS2l0dHkgQ2FmZTxicj4nICsgXG5cdFx0JzEyMzQgQ3VkZGxlIExhbmU8YnI+JyArXG5cdFx0J0thd2FpaSBUb3duLCBEcmVhbWxhbmQ8YnI+JyArXG5cdFx0J1NhbnJpb3ZpbGxlLCBTbWlsZSAyNzM4MTxicj4nLFxuXG5cdFx0Jyg1NTUpIDEyMy00NTY3PGJyPicgK1xuXHRcdCdjb250YWN0QHNhbnJpb2NhZmUuY29tPGJyPicsXG5cblx0XHQnPHNwYW4gY2xhc3M9XCJlbXBoYXNpc1wiPk1vbiAtIEZyaTwvc3Bhbj46IDExOjAwIHRvIDE4OjAwPGJyPicgK1xuXHRcdCc8c3BhbiBjbGFzcz1cImVtcGhhc2lzXCI+U2F0PC9zcGFuPjogMTA6MDAgdG8gMTk6MDA8YnI+JyArXG5cdFx0JzxzcGFuIGNsYXNzPVwiZW1waGFzaXNcIj5TdW48L3NwYW4+OiBDbG9zZWQ8YnI+J1xuXHRdO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZFRpdGxlcy5sZW5ndGg7ICsraSkge1xuXHRcdGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcblxuXHRcdGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0ZXh0LmNsYXNzTGlzdC5hZGQoJ3RleHQnKTtcblxuXHRcdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRcdHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG5cdFx0dGl0bGUudGV4dENvbnRlbnQgPSBjYXJkVGl0bGVzW2ldO1xuXG5cdFx0Y29uc3QgY2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRjYXB0aW9uLmlubmVySFRNTCA9IGNhcmRDYXB0aW9uc1tpXTtcblxuXHRcdHRleHQuYXBwZW5kKHRpdGxlLCBjYXB0aW9uKTtcblx0XHRjYXJkLmFwcGVuZChpY29uc1tpXSwgdGV4dCk7XG5cdFx0aW5mb3JtYXRpb24uYXBwZW5kKGNhcmQpO1xuXHR9XG5cblx0Zm9vdGVyLmFwcGVuZChpbmZvcm1hdGlvbik7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFBvbGljaWVzKGZvb3Rlcikge1xuXHRjb25zdCBwb2xpY2llcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRwb2xpY2llcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BvbGljaWVzJyk7XG5cblx0Y29uc3QgbGlua05hbWVzID0gWydSZWZ1bmQgUG9saWN5JywgJ1ByaXZhY3kgUG9saWN5JywgJ1Rlcm1zIGFuZCBDb25kaXRpb25zJ107XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rTmFtZXMubGVuZ3RoOyArK2kpIHtcblx0XHRjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdGxpbmsuaHJlZiA9ICcnO1xuXHRcdGxpbmsudGV4dENvbnRlbnQgPSBsaW5rTmFtZXNbaV07XG5cdFx0cG9saWNpZXMuYXBwZW5kKCcgfCAnLCBsaW5rKTtcblx0fVxuXHRwb2xpY2llcy5hcHBlbmQoJyB8Jyk7XG5cblx0Zm9vdGVyLmFwcGVuZChwb2xpY2llcyk7XG59IiwiaW1wb3J0IENvb2tpbmdHSUYgZnJvbSAnLi4vYXNzZXRzL2hvbWUvY29va2luZy5naWYnO1xuaW1wb3J0IE15TWVsb2R5SWNvbiBmcm9tICcuLi9hc3NldHMvaG9tZS9teS1tZWxvZHktaGVhZC5qcGcnO1xuaW1wb3J0IEt1cm9taUljb24gZnJvbSAnLi4vYXNzZXRzL2hvbWUva3Vyb21pLWhlYWQuanBnJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuXHRhcHBlbmRIZXJvKCk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEhlcm8oKSB7XG5cdGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0aGVyby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlcm8nKTtcblxuXHRhcHBlbmRNYWluQ29udGVudChoZXJvKTtcblx0YXBwZW5kQWN0aW9ucyhoZXJvKTtcblxuXHRjb250ZW50LmFwcGVuZChoZXJvKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kTWFpbkNvbnRlbnQoaGVybykge1xuXHRjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cdGNvbnN0IGNvb2tpbmdHSUYgPSBuZXcgSW1hZ2UoKTtcblx0Y29va2luZ0dJRi5zcmMgPSBDb29raW5nR0lGO1xuXG5cdGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0aGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRpbmcnKTtcblx0aGVhZGluZy5pbm5lckhUTUwgPSAnVGhlIFNhbnJpbyBFeHBlcmllbmNlIGluIDxzcGFuIGlkPVwibG9jYXRpb25cIj5LYXdhaWkgVG93biwgRHJlYW1sYW5kLjwvc3Bhbj4nO1xuXG5cdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKTtcblx0ZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnQSBsaWZlLWNoYW5naW5nIGV4cGVyaWVuY2UgdG8gZnVsZmlsbCB5b3VyIGdyYW5kZXN0IGRyZWFtcy4nXG5cblx0bWFpbkNvbnRlbnQuYXBwZW5kKGNvb2tpbmdHSUYsIGhlYWRpbmcsIGRlc2NyaXB0aW9uKTtcblx0aGVyby5hcHBlbmQobWFpbkNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRBY3Rpb25zKGhlcm8pIHtcblx0Y29uc3QgYWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRhY3Rpb25zLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWN0aW9ucycpO1xuXHRjb25zdCBhY3Rpb25UaXRsZXMgPSBbJ1JFU0VSVkUgVEFCTEUnLCAnT1JERVIgT05MSU5FJ107XG5cblx0Y29uc3QgbXlNZWxvZHlJY29uID0gbmV3IEltYWdlKCk7XG5cdG15TWVsb2R5SWNvbi5zcmMgPSBNeU1lbG9keUljb247XG5cblx0Y29uc3Qga3Vyb21pSWNvbiA9IG5ldyBJbWFnZSgpO1xuXHRrdXJvbWlJY29uLnNyYyA9IEt1cm9taUljb247XG5cblx0Y29uc3QgaWNvbnMgPSBba3Vyb21pSWNvbiwgbXlNZWxvZHlJY29uXTtcblx0aWNvbnMuZm9yRWFjaChpY29uID0+IGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbicpKTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvblRpdGxlcy5sZW5ndGg7ICsraSkge1xuXHRcdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdGJ1dHRvbi5hcHBlbmQoaWNvbnNbaV0sIGFjdGlvblRpdGxlc1tpXSk7XG5cdFx0YWN0aW9ucy5hcHBlbmQoYnV0dG9uKTtcblx0fVxuXG5cdGhlcm8uYXBwZW5kKGFjdGlvbnMpO1xufSIsImltcG9ydCBQYW5jYWtlSW1nIGZyb20gJy4uL2Fzc2V0cy9tZW51L3BhbmNha2VzLmpwZyc7XG5pbXBvcnQgVG9hc3RJbWcgZnJvbSAnLi4vYXNzZXRzL21lbnUvdG9hc3QuanBnJztcbmltcG9ydCBGbGFuSW1nIGZyb20gJy4uL2Fzc2V0cy9tZW51L2ZsYW4uanBnJztcblxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG5cdGFwcGVuZE1lbnUoKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kTWVudSgpIHtcblx0Y29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRtZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuXG5cdGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRtZW51VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LXRpdGxlJyk7XG5cdG1lbnVUaXRsZS50ZXh0Q29udGVudCA9ICdTYW5yaW8gR3JhbmQgQ2FmZSc7XG5cdG1lbnUuYXBwZW5kKG1lbnVUaXRsZSk7XG5cblx0Y29uc3QgZGlzaE5hbWVzID0gW1xuXHRcdCdCdXR0ZXJzY290Y2ggTW9jaGkgUGFuY2FrZXMgPHNwYW4gY2xhc3M9XCJwcmljZVwiPiQxODwvc3Bhbj4nLFxuXHRcdCdFZ2cgQmFjb24gVG9hc3Qgd2l0aCBKZWxseSBCb2JhIDxzcGFuIGNsYXNzPVwicHJpY2VcIj4kMjA8L3NwYW4+Jyxcblx0XHQnQ2FybWVsaXplZCBGbGFuIDxzcGFuIGNsYXNzPVwicHJpY2VcIj4kMTI8L3NwYW4+J1xuXHRdO1xuXG5cdGNvbnN0IGRpc2hEZXNjcmlwdGlvbnMgPSBbXG5cdFx0J0ZsdWZmeSByaWNlIHBhbmNha2VzIHdpdGggZnJlc2ggZnJ1aXQsIGJ1dHRlcnNjb3RjaCBkcml6emxlLCBhbmQgYnViYmxlZ3VtIGNyZWFtJyxcblx0XHQnVG9hc3RlZCBtaWxrIGJyZWFkIHdpdGggYSBydW5ueSBlZ2csIGNyaXNweSBiYWNvbiwgYW5kIGplbGx5IGJvYmEgZGVsaWdodC4nLFxuXHRcdCdTb2Z0IGNhcmFtZWwgZWdnIGZsYW4gdy8gZnJlc2ggY3JlYW0gYW5kIGNvbmRlbnNlZCBtaWxrLidcblx0XTtcblxuXHRjb25zdCBwYW5jYWtlSW1nID0gbmV3IEltYWdlKCk7XG5cdHBhbmNha2VJbWcuc3JjID0gUGFuY2FrZUltZztcblxuXHRjb25zdCB0b2FzdEltZyA9IG5ldyBJbWFnZSgpO1xuXHR0b2FzdEltZy5zcmMgPSBUb2FzdEltZztcblxuXHRjb25zdCBmbGFuSW1nID0gbmV3IEltYWdlKCk7XG5cdGZsYW5JbWcuc3JjID0gRmxhbkltZztcblxuXHRjb25zdCBmb29kSW1hZ2VzID0gW3BhbmNha2VJbWcsIHRvYXN0SW1nLCBmbGFuSW1nXTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGRpc2hOYW1lcy5sZW5ndGg7ICsraSkge1xuXHRcdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdG9wdGlvbi5jbGFzc0xpc3QuYWRkKCdvcHRpb24nKTtcblxuXHRcdGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRuYW1lLmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcblx0XHRuYW1lLmlubmVySFRNTCA9IGRpc2hOYW1lc1tpXTtcblxuXHRcdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0ZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcblx0XHRkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRpc2hEZXNjcmlwdGlvbnNbaV07XG5cblx0XHRvcHRpb24uYXBwZW5kKG5hbWUsIGRlc2NyaXB0aW9uLCBmb29kSW1hZ2VzW2ldKTtcblx0XHRtZW51LmFwcGVuZChvcHRpb24pO1xuXHR9XG5cblx0Y29udGVudC5hcHBlbmQobWVudSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE5hdmlnYXRpb24oKSB7XG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXHRjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuXHRjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGxvZ28uc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvJyk7XG5cdGxvZ28udGV4dENvbnRlbnQgPSAnU2FucmlvIEdyYW5kIENhZmUnO1xuXG5cdGNvbnN0IHRhYlRpdGxlcyA9IFsnTUFJTicsICdBQk9VVCcsICdNRU5VJ107XG5cdGNvbnN0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dGFicy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RhYnMnKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0YWJUaXRsZXMubGVuZ3RoOyArK2kpIHtcblx0XHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRidXR0b24udGV4dENvbnRlbnQgPSB0YWJUaXRsZXNbaV07XG5cdFx0dGFicy5hcHBlbmQoYnV0dG9uKTtcblx0fVxuXG5cdG5hdi5hcHBlbmQobG9nbywgdGFicyk7XG5cdGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKG5hdiwgY29udGVudClcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGxvYWROYXZpZ2F0aW9uIGZyb20gJy4vbW9kdWxlcy9uYXZpZ2F0aW9uJztcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL21vZHVsZXMvaG9tZSc7XG5pbXBvcnQgbG9hZEFib3V0IGZyb20gJy4vbW9kdWxlcy9hYm91dCc7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tb2R1bGVzL21lbnUnO1xuaW1wb3J0IGxvYWRGb290ZXIgZnJvbSAnLi9tb2R1bGVzL2Zvb3Rlcic7XG5cbmxvYWROYXZpZ2F0aW9uKCk7XG5sb2FkRm9vdGVyKCk7XG5sb2FkSG9tZSgpO1xuYWRkVGFiTGlzdGVuZXIoKTtcblxuZnVuY3Rpb24gYWRkVGFiTGlzdGVuZXIoKSB7XG5cdGNvbnN0IHRhYnNOTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0YWJzPmJ1dHRvbicpO1xuXHR0YWJzTkwuZm9yRWFjaCh0YWIgPT4ge1xuXHRcdHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHdpcGVDb250ZW50KTtcblx0fSk7XG5cblx0Y29uc3QgdGFiTG9hZGVycyA9IFtsb2FkSG9tZSwgbG9hZEFib3V0LCBsb2FkTWVudV07XG5cdGNvbnN0IHRhYnNBcnIgPSBBcnJheS5mcm9tKHRhYnNOTCk7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdGFic0Fyci5sZW5ndGg7ICsraSkge1xuXHRcdHRhYnNBcnJbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YWJMb2FkZXJzW2ldKTtcblx0fVxufVxuXG5mdW5jdGlvbiB3aXBlQ29udGVudCgpIHtcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cblx0bGV0IGNoaWxkID0gY29udGVudC5sYXN0RWxlbWVudENoaWxkO1xuXHR3aGlsZSAoY2hpbGQpIHtcblx0XHRjb250ZW50LnJlbW92ZUNoaWxkKGNoaWxkKTtcblx0XHRjaGlsZCA9IGNvbnRlbnQubGFzdEVsZW1lbnRDaGlsZDtcblx0fVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==