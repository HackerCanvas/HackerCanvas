"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_hsts"],{

/***/ "./node_modules/refractor/lang/hsts.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/hsts.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = hsts\nhsts.displayName = 'hsts'\nhsts.aliases = []\nfunction hsts(Prism) {\n  /**\n   * Original by Scott Helme.\n   *\n   * Reference: https://scotthelme.co.uk/hsts-cheat-sheet/\n   */\n  Prism.languages.hsts = {\n    directive: {\n      pattern: /\\b(?:max-age=|includeSubDomains|preload)/,\n      alias: 'keyword'\n    },\n    safe: {\n      pattern: /\\d{8,}/,\n      alias: 'selector'\n    },\n    unsafe: {\n      pattern: /\\d{1,7}/,\n      alias: 'function'\n    }\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/hsts.js?");

/***/ })

}]);