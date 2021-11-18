"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_json"],{

/***/ "./node_modules/refractor/lang/json.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/json.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = json\njson.displayName = 'json'\njson.aliases = []\nfunction json(Prism) {\n  Prism.languages.json = {\n    property: {\n      pattern: /\"(?:\\\\.|[^\\\\\"\\r\\n])*\"(?=\\s*:)/,\n      greedy: true\n    },\n    string: {\n      pattern: /\"(?:\\\\.|[^\\\\\"\\r\\n])*\"(?!\\s*:)/,\n      greedy: true\n    },\n    comment: /\\/\\/.*|\\/\\*[\\s\\S]*?(?:\\*\\/|$)/,\n    number: /-?\\d+\\.?\\d*(e[+-]?\\d+)?/i,\n    punctuation: /[{}[\\],]/,\n    operator: /:/,\n    boolean: /\\b(?:true|false)\\b/,\n    null: {\n      pattern: /\\bnull\\b/,\n      alias: 'keyword'\n    }\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/json.js?");

/***/ })

}]);