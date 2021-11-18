"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_prolog"],{

/***/ "./node_modules/refractor/lang/prolog.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/prolog.js ***!
  \***********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = prolog\nprolog.displayName = 'prolog'\nprolog.aliases = []\nfunction prolog(Prism) {\n  Prism.languages.prolog = {\n    // Syntax depends on the implementation\n    comment: [/%.+/, /\\/\\*[\\s\\S]*?\\*\\//],\n    // Depending on the implementation, strings may allow escaped newlines and quote-escape\n    string: {\n      pattern: /([\"'])(?:\\1\\1|\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n      greedy: true\n    },\n    builtin: /\\b(?:fx|fy|xf[xy]?|yfx?)\\b/,\n    variable: /\\b[A-Z_]\\w*/,\n    // FIXME: Should we list all null-ary predicates (not followed by a parenthesis) like halt, trace, etc.?\n    function: /\\b[a-z]\\w*(?:(?=\\()|\\/\\d+)/,\n    number: /\\b\\d+\\.?\\d*/,\n    // Custom operators are allowed\n    operator: /[:\\\\=><\\-?*@\\/;+^|!$.]+|\\b(?:is|mod|not|xor)\\b/,\n    punctuation: /[(){}\\[\\],]/\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/prolog.js?");

/***/ })

}]);