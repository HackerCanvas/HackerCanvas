"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_ini"],{

/***/ "./node_modules/refractor/lang/ini.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/ini.js ***!
  \********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = ini\nini.displayName = 'ini'\nini.aliases = []\nfunction ini(Prism) {\n  Prism.languages.ini = {\n    comment: /^[ \\t]*[;#].*$/m,\n    selector: /^[ \\t]*\\[.*?\\]/m,\n    constant: /^[ \\t]*[^\\s=]+?(?=[ \\t]*=)/m,\n    'attr-value': {\n      pattern: /=.*/,\n      inside: {\n        punctuation: /^[=]/\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/ini.js?");

/***/ })

}]);