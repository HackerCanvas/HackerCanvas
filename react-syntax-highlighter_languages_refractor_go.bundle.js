"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_go"],{

/***/ "./node_modules/refractor/lang/go.js":
/*!*******************************************!*\
  !*** ./node_modules/refractor/lang/go.js ***!
  \*******************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = go\ngo.displayName = 'go'\ngo.aliases = []\nfunction go(Prism) {\n  Prism.languages.go = Prism.languages.extend('clike', {\n    keyword: /\\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\\b/,\n    builtin: /\\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\\b/,\n    boolean: /\\b(?:_|iota|nil|true|false)\\b/,\n    operator: /[*\\/%^!=]=?|\\+[=+]?|-[=-]?|\\|[=|]?|&(?:=|&|\\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\\.\\.\\./,\n    number: /(?:\\b0x[a-f\\d]+|(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:e[-+]?\\d+)?)i?/i,\n    string: {\n      pattern: /([\"'`])(\\\\[\\s\\S]|(?!\\1)[^\\\\])*\\1/,\n      greedy: true\n    }\n  })\n  delete Prism.languages.go['class-name']\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/go.js?");

/***/ })

}]);