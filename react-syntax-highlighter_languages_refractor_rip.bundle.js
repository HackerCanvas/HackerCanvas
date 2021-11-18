"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_rip"],{

/***/ "./node_modules/refractor/lang/rip.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/rip.js ***!
  \********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = rip\nrip.displayName = 'rip'\nrip.aliases = []\nfunction rip(Prism) {\n  Prism.languages.rip = {\n    comment: /#.*/,\n    keyword: /(?:=>|->)|\\b(?:class|if|else|switch|case|return|exit|try|catch|finally|raise)\\b/,\n    builtin: /@|\\bSystem\\b/,\n    boolean: /\\b(?:true|false)\\b/,\n    date: /\\b\\d{4}-\\d{2}-\\d{2}\\b/,\n    time: /\\b\\d{2}:\\d{2}:\\d{2}\\b/,\n    datetime: /\\b\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\b/,\n    character: /\\B`[^\\s`'\",.:;#\\/\\\\()<>\\[\\]{}]\\b/,\n    regex: {\n      pattern: /(^|[^/])\\/(?!\\/)(\\[.+?]|\\\\.|[^/\\\\\\r\\n])+\\/(?=\\s*($|[\\r\\n,.;})]))/,\n      lookbehind: true,\n      greedy: true\n    },\n    symbol: /:[^\\d\\s`'\",.:;#\\/\\\\()<>\\[\\]{}][^\\s`'\",.:;#\\/\\\\()<>\\[\\]{}]*/,\n    string: {\n      pattern: /(\"|')(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*\\1/,\n      greedy: true\n    },\n    number: /[+-]?(?:(?:\\d+\\.\\d+)|(?:\\d+))/,\n    punctuation: /(?:\\.{2,3})|[`,.:;=\\/\\\\()<>\\[\\]{}]/,\n    reference: /[^\\d\\s`'\",.:;#\\/\\\\()<>\\[\\]{}][^\\s`'\",.:;#\\/\\\\()<>\\[\\]{}]*/\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/rip.js?");

/***/ })

}]);