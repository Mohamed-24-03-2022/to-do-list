/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\nbody,\\r\\nhtml {\\r\\n  font-family: \\\"Montserrat\\\", sans-serif;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\nbody {\\r\\n  display: grid;\\r\\n  grid-template-columns: 0.25fr 1fr;\\r\\n  grid-template-rows: 0.1fr 1fr;\\r\\n  gap: 5px;\\r\\n  color: #333;\\r\\n}\\r\\n/********************** header ********************/\\r\\n.header {\\r\\n  background-color: antiquewhite;\\r\\n  grid-column: 1 / span 2;\\r\\n  grid-row: 1;\\r\\n}\\r\\n.logo {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  width: max-content;\\r\\n  height: 100%;\\r\\n  padding: 15px;\\r\\n  font-weight: bold;\\r\\n  cursor: pointer;\\r\\n}\\r\\n.logo:hover {\\r\\n  transform: scale(1.1);\\r\\n}\\r\\n/********************** side-bar ********************/\\r\\n.side-bar {\\r\\n  grid-column: 1;\\r\\n  grid-row: 2 / span 2;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n}\\r\\nul {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n  min-width: 150px;\\r\\n  gap: 10px;\\r\\n  list-style: none;\\r\\n  position: relative;\\r\\n}\\r\\nli.project {\\r\\n  min-width: 70%;\\r\\n  padding: 10px;\\r\\n  cursor: pointer;\\r\\n}\\r\\nli.project:hover {\\r\\n  border-bottom: 1px solid #000000;\\r\\n}\\r\\n\\r\\nul a {\\r\\n  text-decoration: none;\\r\\n  color: inherit;\\r\\n}\\r\\n.new {\\r\\n  margin-top: 50px;\\r\\n  text-align: center;\\r\\n}\\r\\n.new-project {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 5px;\\r\\n  width: 100%;\\r\\n  position: absolute;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  transform: translateY(55px);\\r\\n}\\r\\n.custom-projects {\\r\\n  text-align: center;\\r\\n  width: 100%;\\r\\n  height: 30px;\\r\\n  margin: 10px 0;\\r\\n  color: #000000;\\r\\n  border-bottom: 2px solid #000000;\\r\\n  font-weight: bold;\\r\\n}\\r\\n/********************** main-content ********************/\\r\\n.main-content {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n.project-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 30px;\\r\\n  margin: 0 15px;\\r\\n}\\r\\n.card-item {\\r\\n  display: grid;\\r\\n  grid-template-columns: 50px 2fr 1fr 0.3fr;\\r\\n  align-items: flex-start;\\r\\n  padding: 15px;\\r\\n  border: 2px solid;\\r\\n  user-select: none;\\r\\n}\\r\\n.card-item:hover {\\r\\n  transform: scale(1.02);\\r\\n  transition: all 0.3s ease-in-out;\\r\\n}\\r\\n.card-item:active {\\r\\n  transform: translateY(5px);\\r\\n}\\r\\n.task .title {\\r\\n  font-size: 18px;\\r\\n  font-weight: 600;\\r\\n}\\r\\n.task .details {\\r\\n  font-size: 14px;\\r\\n}\\r\\n.due-date p {\\r\\n  width: max-content;\\r\\n  padding: 5px;\\r\\n  border: 1px solid #000000;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n.main-content .settings {\\r\\n  display: flex;\\r\\n}\\r\\n.main-content .settings span {\\r\\n  cursor: pointer;\\r\\n}\\r\\n.settings {\\r\\n  position: relative;\\r\\n}\\r\\n.settings #select {\\r\\n  background-color: #b7b7b7;\\r\\n  position: absolute;\\r\\n  cursor: pointer;\\r\\n  transform: translateY(-60px) translateX(-73px);\\r\\n  border-radius: 5px;\\r\\n}\\r\\n.show {\\r\\n  visibility: hidden;\\r\\n}\\r\\n#select option {\\r\\n  padding: 5px 10px;\\r\\n  transition: 200ms ease-in-out;\\r\\n}\\r\\n#select option:hover {\\r\\n  background-color: antiquewhite;\\r\\n}\\r\\n/********************** new task container ********************/\\r\\n.add-new-task {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  padding: 15px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n.add-new-task:hover {\\r\\n  background-color: rgb(245, 240, 220);\\r\\n}\\r\\n.add-new-task button {\\r\\n  background-color: inherit;\\r\\n  border: none;\\r\\n  padding: 0 5px;\\r\\n}\\r\\n\\r\\n/********************** from styling ********************/\\r\\nform {\\r\\n  width: 300px;\\r\\n  padding: 15px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-content: center;\\r\\n  position: absolute;\\r\\n  background-color: #a9a9a9;\\r\\n  /* visibility */\\r\\n  visibility: hidden;\\r\\n  left: calc(50% - 150px);\\r\\n  top: calc(20%);\\r\\n}\\r\\nform input {\\r\\n  width: 200px;\\r\\n}\\r\\nform div {\\r\\n  width: 100%;\\r\\n  padding: 15px 0;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\ndiv.priority {\\r\\n  align-items: center;\\r\\n}\\r\\ndiv.priority p {\\r\\n  align-self: flex-start;\\r\\n}\\r\\ndiv.priority div {\\r\\n  flex-direction: row;\\r\\n  width: 70%;\\r\\n}\\r\\ndiv.priority div label {\\r\\n  width: 100px;\\r\\n}\\r\\ndiv.due-date-input {\\r\\n  flex-direction: row;\\r\\n}\\r\\ndiv.due-date-input label {\\r\\n  width: 100px;\\r\\n}\\r\\ndiv.due-date-input input {\\r\\n  width: 20px;\\r\\n}\\r\\n\\r\\ndiv.buttons {\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n}\\r\\ndiv.buttons button {\\r\\n  margin: 0 50px 0 0;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/changeProjects.js":
/*!*******************************!*\
  !*** ./src/changeProjects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEventToProjects\": () => (/* binding */ addEventToProjects),\n/* harmony export */   \"changeProjects\": () => (/* binding */ changeProjects),\n/* harmony export */   \"removeProjects\": () => (/* binding */ removeProjects)\n/* harmony export */ });\n\r\nconst removeProjects = () => {\r\n    const mainContent = document.querySelector(\".main-content\");\r\n    for (let i = 1; i <= mainContent.children.length; i++) {\r\n        const element = mainContent.children[i];\r\n        // console.log(\"its the element log \", element);\r\n        element.remove();\r\n    }\r\n};\r\n\r\nconst addEventToProjects = (projectBtn, projectContainer) => {\r\n    const mainContent = document.querySelector(\".main-content\");\r\n    projectBtn.addEventListener(\"click\", (e) => {\r\n        e.preventDefault();\r\n        removeProjects();\r\n        mainContent.appendChild(projectContainer);\r\n    });\r\n};\r\n\r\n\r\nconst changeProjects = () => {\r\n    const workProjectBtn = document.querySelector(\".work\");\r\n    const studyProjectBtn = document.querySelector(\".study\");\r\n    const homeProjectBtn = document.querySelector(\".home\");\r\n    const gymProjectBtn = document.querySelector(\".gym\");\r\n\r\n    const createProjectContainer = (className) => {\r\n        const ProjectContainerName = document.createElement(\"div\");\r\n        ProjectContainerName.classList.add(className);\r\n        return ProjectContainerName;\r\n    };\r\n\r\n    const workProjectContainer = createProjectContainer(\"work-project\");\r\n    const studyProjectContainer = createProjectContainer(\"study-project\");\r\n    const homeProjectContainer = createProjectContainer(\"home-project\");\r\n    const gymProjectContainer = createProjectContainer(\"gym-project\");\r\n\r\n    const projects = [\r\n        workProjectContainer,\r\n        studyProjectContainer,\r\n        homeProjectContainer,\r\n        gymProjectContainer,\r\n    ];\r\n    for (const project of projects) {\r\n        project.classList.add(\"project-container\");\r\n    }\r\n\r\n    addEventToProjects(workProjectBtn, workProjectContainer);\r\n    workProjectBtn.click();\r\n    addEventToProjects(studyProjectBtn, studyProjectContainer);\r\n    addEventToProjects(homeProjectBtn, homeProjectContainer);\r\n    addEventToProjects(gymProjectBtn, gymProjectContainer);\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/changeProjects.js?");

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => (/* binding */ createProject)\n/* harmony export */ });\n/* harmony import */ var _changeProjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeProjects.js */ \"./src/changeProjects.js\");\n\r\n\r\n\r\n\r\n\r\nconst createProject = () => {\r\n    const mainContent = document.querySelector(\".main-content\");\r\n    const projectsList = document.querySelector(\".side-bar ul\");\r\n    const addProject = document.querySelector(\".new\");\r\n    const addProjectInputContainer = document.querySelector(\".new-project\");\r\n    const addProjectInput = document.querySelector(\"#new-project\");\r\n    const addProjectBtn = document.querySelector(\".new-project button\");\r\n\r\n    addProject.addEventListener(\"click\", (e) => {\r\n        addProjectInput.value = \"\";\r\n        addProjectInputContainer.classList.toggle(\"show\");\r\n    });\r\n\r\n\r\n    const newProjectsContainer = [];\r\n    const newProjectsBtn = [];\r\n\r\n    const createCustomProjectEvent = () => {\r\n        console.log(newProjectsBtn, newProjectsContainer);\r\n        for (let i = 0; i < newProjectsBtn.length; i++) {\r\n            (0,_changeProjects_js__WEBPACK_IMPORTED_MODULE_0__.addEventToProjects)(newProjectsBtn[i], newProjectsContainer[i]);\r\n        }\r\n    }\r\n\r\n    addProjectBtn.addEventListener(\"click\", (e) => {\r\n        // make the form validation work without submitting ti\r\n        const checkStatus = addProjectInput.checkValidity();\r\n        addProjectInput.reportValidity();\r\n        if (!checkStatus) {\r\n            return;\r\n        }\r\n\r\n        const newProjectName = addProjectInput.value;\r\n        const createProjectA = document.createElement(\"a\");\r\n        const createProjectLi = document.createElement(\"li\");\r\n        createProjectLi.classList.add(\"project\", newProjectName)\r\n        createProjectLi.textContent = newProjectName;\r\n        createProjectA.appendChild(createProjectLi);\r\n        projectsList.appendChild(createProjectA);\r\n\r\n        // create container\r\n        const projectContainerName = document.createElement(\"div\");\r\n        // variable class name\r\n        projectContainerName.classList.add(`${newProjectName}-project`);\r\n        projectContainerName.classList.add(\"project-container\");\r\n        // remove all other containers\r\n        (0,_changeProjects_js__WEBPACK_IMPORTED_MODULE_0__.removeProjects)();\r\n        // append the new container\r\n        mainContent.appendChild(projectContainerName);\r\n\r\n        // add event to the new projectBtn\r\n        newProjectsBtn.push(createProjectLi);\r\n        newProjectsContainer.push(projectContainerName);\r\n        createCustomProjectEvent();\r\n        // hide the input\r\n        addProjectInputContainer.classList.toggle(\"show\");\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/createProject.js?");

/***/ }),

/***/ "./src/createTaskHtmlElements.js":
/*!***************************************!*\
  !*** ./src/createTaskHtmlElements.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTaskHtmlElements\": () => (/* binding */ createTaskHtmlElements),\n/* harmony export */   \"restartFormValue\": () => (/* binding */ restartFormValue)\n/* harmony export */ });\n/* harmony import */ var _priority_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./priority.js */ \"./src/priority.js\");\n/* harmony import */ var _editTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editTask.js */ \"./src/editTask.js\");\n\r\n\r\n\r\n\r\nconst createTaskHtmlElements = (newTask, projectContainer) => {\r\n    // card item\r\n    const cardContainer = document.createElement(\"div\");\r\n    cardContainer.classList.add(\"card-item\");\r\n\r\n    // priority effect\r\n    (0,_priority_js__WEBPACK_IMPORTED_MODULE_0__.priorityEffect)(cardContainer, newTask.priority);\r\n\r\n    // checkbox\r\n    const checkboxContainer = document.createElement(\"div\");\r\n    const checkbox = document.createElement(\"input\");\r\n    checkbox.setAttribute(\"type\", \"checkbox\");\r\n    checkbox.setAttribute(\"name\", \"checkbox\");\r\n    checkbox.setAttribute(\"id\", \"checkbox\");\r\n    checkboxContainer.prepend(checkbox);\r\n\r\n    // task (title and details)\r\n    const taskContainer = document.createElement(\"div\");\r\n    taskContainer.classList.add(\"task\");\r\n    const title = document.createElement(\"p\");\r\n    title.classList.add(\"title\");\r\n    title.textContent = newTask.title;\r\n    const details = document.createElement(\"p\");\r\n    details.classList.add(\"details\");\r\n    details.textContent = newTask.details;\r\n    taskContainer.prepend(title, details);\r\n\r\n    // due date\r\n    const dueDateContainer = document.createElement(\"div\");\r\n    dueDateContainer.classList.add(\"due-date\");\r\n    const dueDate = document.createElement(\"p\");\r\n    dueDate.textContent = newTask.dueDate;\r\n    dueDateContainer.prepend(dueDate);\r\n\r\n    // settings\r\n    const settingsContainer = document.createElement(\"div\");\r\n    settingsContainer.classList.add(\"settings\");\r\n    const googleIcon = document.createElement(\"span\");\r\n    googleIcon.classList.add(\"material-symbols-outlined\");\r\n    googleIcon.textContent = \"settings\";\r\n\r\n    const selectOption = document.createElement(\"div\");\r\n    selectOption.setAttribute(\"id\", \"select\");\r\n    selectOption.classList.add(\"show\");\r\n\r\n    const option1 = document.createElement(\"option\");\r\n    option1.classList.add(\"edit\");\r\n    option1.textContent = \"Edit\";\r\n\r\n    const option2 = document.createElement(\"option\");\r\n    option2.classList.add(\"remove\");\r\n    option2.textContent = \"remove\";\r\n\r\n    selectOption.prepend(option1, option2);\r\n    settingsContainer.prepend(googleIcon, selectOption);\r\n\r\n\r\n    // append all containers into the task\r\n    cardContainer.prepend(\r\n        checkboxContainer,\r\n        taskContainer,\r\n        dueDateContainer,\r\n        settingsContainer\r\n    );\r\n\r\n    // append the task to the main container\r\n    projectContainer.appendChild(cardContainer);\r\n\r\n    const task = {\r\n        cardContainer,\r\n        googleIcon,\r\n        settingsContainer,\r\n        selectOption,\r\n        option1,\r\n        option2,\r\n    };\r\n    checkTask(checkbox, option2);\r\n    chooseOption(task);\r\n    removeTask(task);\r\n    (0,_editTask_js__WEBPACK_IMPORTED_MODULE_1__.editTask)(task);\r\n    selectOption.remove();\r\n};\r\n\r\nconst checkTask = (checkbox, removeOption) => {\r\n    checkbox.addEventListener(\"click\", () => {\r\n        if (checkbox.checked === true) {\r\n            removeOption.click();\r\n        }\r\n    });\r\n};\r\nconst chooseOption = (task) => {\r\n    task.googleIcon.addEventListener(\"click\", () => {\r\n        task.selectOption.classList.toggle(\"show\");\r\n        task.settingsContainer.prepend(task.selectOption);\r\n    });\r\n};\r\nconst removeTask = (task) => {\r\n    task.option2.addEventListener(\"click\", () => {\r\n        task.selectOption.remove();\r\n        task.cardContainer.remove();\r\n    });\r\n};\r\n\r\nconst restartFormValue = () => {\r\n    const titleInput = document.querySelector(\"#title\");\r\n    const detailsInput = document.querySelector(\"#details\");\r\n    const dueDateInput = document.querySelector(\"#due-date\");\r\n    const radioBtn = {\r\n        low: document.querySelector(\"#low\"),\r\n        normal: document.querySelector(\"#normal\"),\r\n        high: document.querySelector(\"#high\"),\r\n    };\r\n\r\n    titleInput.value = \"\";\r\n    detailsInput.value = \"\";\r\n    dueDateInput.value = \"\";\r\n    radioBtn.low.checked = true;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/createTaskHtmlElements.js?");

/***/ }),

/***/ "./src/editTask.js":
/*!*************************!*\
  !*** ./src/editTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"saveChange\": () => (/* binding */ saveChange)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _priority_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./priority.js */ \"./src/priority.js\");\n/* harmony import */ var _createTaskHtmlElements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTaskHtmlElements.js */ \"./src/createTaskHtmlElements.js\");\n\r\n\r\n\r\n\r\nconst mainContent = document.querySelector(\".main-content\");\r\n\r\n\r\nconst target = {};\r\nconst editTask = (task) => {\r\n    const form = document.querySelector(\"#form\");\r\n    const editOption = document.querySelector(\"option.edit\");\r\n    const addBtn = document.querySelector(\".add\");\r\n\r\n    editOption.addEventListener(\"click\", (e) => {\r\n        addBtn.disabled = true;\r\n        task.selectOption.classList.toggle(\"show\");\r\n        form.style.visibility = \"visible\";\r\n        mainContent.append(form);\r\n        (0,_createTaskHtmlElements_js__WEBPACK_IMPORTED_MODULE_2__.restartFormValue)();\r\n        if (!e.target.parentElement.parentElement.parentElement) return;\r\n\r\n        target.container = e.target.parentElement.parentElement.parentElement;\r\n        target.title = e.target.parentElement.parentElement.parentElement.children[1].children[0];\r\n        target.details = e.target.parentElement.parentElement.parentElement.children[1].children[1];\r\n        target.dueDate = e.target.parentElement.parentElement.parentElement.children[2].children[0];\r\n\r\n        task.selectOption.remove();\r\n        saveChange();\r\n    });\r\n};\r\nconst saveChange = () => {\r\n    const titleInput = document.querySelector(\"#title\");\r\n    const detailsInput = document.querySelector(\"#details\");\r\n    const dueDateInput = document.querySelector(\"#due-date\");\r\n    const changeBtn = document.querySelector(\".change\");\r\n    const form = document.querySelector(\"#form\");\r\n    changeBtn.disabled = false;\r\n\r\n    changeBtn.addEventListener(\"click\", () => {\r\n        // make the form validation work without submitting ti\r\n        const checkStatus = form.checkValidity();\r\n        form.reportValidity();\r\n        if (!checkStatus) {\r\n            return;\r\n        }\r\n        for (const taskList of _index_js__WEBPACK_IMPORTED_MODULE_0__.tasksList) {\r\n            if (!target.title) break;\r\n            if (taskList.title === target.title.textContent) {\r\n\r\n                taskList.title = titleInput.value;\r\n                taskList.details = detailsInput.value;\r\n                taskList.dueDate = dueDateInput.value;\r\n                taskList.priority = (0,_priority_js__WEBPACK_IMPORTED_MODULE_1__.priorityCheck)();\r\n\r\n                target.title.textContent = taskList.title;\r\n                target.details.textContent = taskList.details;\r\n                target.dueDate.textContent = taskList.dueDate;\r\n                (0,_priority_js__WEBPACK_IMPORTED_MODULE_1__.priorityEffect)(target.container, taskList.priority);\r\n\r\n                form.remove();\r\n            }\r\n        }\r\n    });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/editTask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tasksList\": () => (/* binding */ tasksList)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _createTaskHtmlElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTaskHtmlElements.js */ \"./src/createTaskHtmlElements.js\");\n/* harmony import */ var _priority_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priority.js */ \"./src/priority.js\");\n/* harmony import */ var _changeProjects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changeProjects.js */ \"./src/changeProjects.js\");\n/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createProject.js */ \"./src/createProject.js\");\n//! Implement OOP Single Responsibility Principle\r\n//** Each entity must have one responsibility (must change for only a single reason)\r\n//? I will separate DOM from the logic (can be ran on console or using DOM)\r\n//todo Implement Firebase on this project\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst tasksList = [];\r\n\r\n\r\n\r\nclass todoGenerator {\r\n    constructor(title, details, dueDate, priority) {\r\n        this.title = title;\r\n        this.details = details;\r\n        this.dueDate = dueDate;\r\n        this.priority = priority;\r\n        this.isChecked = false;\r\n    }\r\n}\r\nconst createTask = () => {\r\n    const mainContent = document.querySelector(\".main-content\");\r\n    const addTaskCard = document.querySelector(\".add-new-task\");\r\n    const form = document.querySelector(\"#form\");\r\n    const addBtn = document.querySelector(\".add\");\r\n    const cancelBtn = document.querySelector(\".cancel\");\r\n\r\n    addTaskCard.addEventListener(\"click\", () => {\r\n        form.style.visibility = \"visible\";\r\n        mainContent.prepend(form);\r\n        (0,_createTaskHtmlElements_js__WEBPACK_IMPORTED_MODULE_1__.restartFormValue)();\r\n        const changeBtn = document.querySelector(\".change\");\r\n        changeBtn.disabled = true;\r\n        addBtn.disabled = false;\r\n    });\r\n\r\n    addBtn.addEventListener(\"click\", (e) => {\r\n        // make the form validation work without submitting ti\r\n        const checkStatus = form.checkValidity();\r\n        form.reportValidity();\r\n        if (!checkStatus) {\r\n            console.log(\"HEEEEEEEy\");\r\n            return\r\n        }\r\n        const titleInput = document.querySelector(\"#title\");\r\n        const detailsInput = document.querySelector(\"#details\");\r\n        const dueDateInput = document.querySelector(\"#due-date\");\r\n        const newTask = new todoGenerator(\r\n            titleInput.value,\r\n            detailsInput.value,\r\n            dueDateInput.value,\r\n            (0,_priority_js__WEBPACK_IMPORTED_MODULE_2__.priorityCheck)()\r\n        );\r\n        tasksList.push(newTask);\r\n        // check for the current Project\r\n        const checkCurrentProject = () => {\r\n            const currentProject = e.target.parentElement.parentElement.parentElement.children[2];\r\n            const currentProjectClass = currentProject.classList[0];\r\n            return `.${currentProjectClass}`;\r\n        };\r\n\r\n        const currentProjectContainer = document.querySelector(checkCurrentProject());\r\n        (0,_createTaskHtmlElements_js__WEBPACK_IMPORTED_MODULE_1__.createTaskHtmlElements)(newTask, currentProjectContainer);\r\n        form.remove();\r\n    });\r\n\r\n    cancelBtn.addEventListener(\"click\", (e) => {\r\n        e.preventDefault();\r\n        form.remove();\r\n    });\r\n\r\n};\r\nconst generateSampleData = () => {\r\n    const sampleTask1 = new todoGenerator(\"Eat\", \"\", \"\", \"low\");\r\n    const sampleTask2 = new todoGenerator(\"Sleep\", \"\", \"\", \"low\");\r\n    const sampleTask3 = new todoGenerator(\"Gym\", \"\", \"\", \"normal\");\r\n    const sampleTasks = [sampleTask1, sampleTask2, sampleTask3];\r\n    const workProjectContainer = document.querySelector(\".work-project\");\r\n\r\n    for (const sampleTask of sampleTasks) {\r\n        tasksList.push(sampleTask);\r\n        (0,_createTaskHtmlElements_js__WEBPACK_IMPORTED_MODULE_1__.createTaskHtmlElements)(sampleTask, workProjectContainer);\r\n    }\r\n};\r\n\r\ncreateTask();\r\n(0,_changeProjects_js__WEBPACK_IMPORTED_MODULE_3__.changeProjects)();\r\ngenerateSampleData();\r\n(0,_createProject_js__WEBPACK_IMPORTED_MODULE_4__.createProject)();\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/priority.js":
/*!*************************!*\
  !*** ./src/priority.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"priorityCheck\": () => (/* binding */ priorityCheck),\n/* harmony export */   \"priorityEffect\": () => (/* binding */ priorityEffect)\n/* harmony export */ });\nconst priorityEffect = (cardContainer, priority) => {\r\n    if (priority === \"low\") {\r\n        cardContainer.style.backgroundColor = \"inherit\";\r\n    } else if (priority === \"normal\") {\r\n        cardContainer.style.backgroundColor = \"#00ff0069\";\r\n    } else if (priority === \"high\") {\r\n        cardContainer.style.backgroundColor = \"#ff000091\";\r\n    }\r\n};\r\nconst priorityCheck = () => {\r\n    const lowPriority = document.querySelector(\"#low\");\r\n    const normalPriority = document.querySelector(\"#normal\");\r\n    const highPriority = document.querySelector(\"#high\");\r\n    if (!lowPriority || !normalPriority || !highPriority) return;\r\n    if (lowPriority.checked === true) {\r\n        return \"low\";\r\n    } else if (normalPriority.checked === true) {\r\n        return \"normal\";\r\n    } else if (highPriority.checked === true) {\r\n        return \"high\";\r\n    }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/priority.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;