"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_autoit"],{

/***/ "./node_modules/refractor/lang/autoit.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/autoit.js ***!
  \***********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = autoit\nautoit.displayName = 'autoit'\nautoit.aliases = []\nfunction autoit(Prism) {\n  Prism.languages.autoit = {\n    comment: [\n      /;.*/,\n      {\n        // The multi-line comments delimiters can actually be commented out with \";\"\n        pattern: /(^\\s*)#(?:comments-start|cs)[\\s\\S]*?^\\s*#(?:comments-end|ce)/m,\n        lookbehind: true\n      }\n    ],\n    url: {\n      pattern: /(^\\s*#include\\s+)(?:<[^\\r\\n>]+>|\"[^\\r\\n\"]+\")/m,\n      lookbehind: true\n    },\n    string: {\n      pattern: /([\"'])(?:\\1\\1|(?!\\1)[^\\r\\n])*\\1/,\n      greedy: true,\n      inside: {\n        variable: /([%$@])\\w+\\1/\n      }\n    },\n    directive: {\n      pattern: /(^\\s*)#\\w+/m,\n      lookbehind: true,\n      alias: 'keyword'\n    },\n    function: /\\b\\w+(?=\\()/,\n    // Variables and macros\n    variable: /[$@]\\w+/,\n    keyword: /\\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\\b/i,\n    number: /\\b(?:0x[\\da-f]+|\\d+(?:\\.\\d+)?(?:e[+-]?\\d+)?)\\b/i,\n    boolean: /\\b(?:True|False)\\b/i,\n    operator: /<[=>]?|[-+*\\/=&>]=?|[?^]|\\b(?:And|Or|Not)\\b/i,\n    punctuation: /[\\[\\]().,:]/\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/autoit.js?");

/***/ })

}]);