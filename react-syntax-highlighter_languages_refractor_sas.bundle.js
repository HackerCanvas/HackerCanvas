"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_sas"],{

/***/ "./node_modules/refractor/lang/sas.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/sas.js ***!
  \********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = sas\nsas.displayName = 'sas'\nsas.aliases = []\nfunction sas(Prism) {\n  Prism.languages.sas = {\n    datalines: {\n      pattern: /^\\s*(?:(?:data)?lines|cards);[\\s\\S]+?(?:\\r?\\n|\\r);/im,\n      alias: 'string',\n      inside: {\n        keyword: {\n          pattern: /^(\\s*)(?:(?:data)?lines|cards)/i,\n          lookbehind: true\n        },\n        punctuation: /;/\n      }\n    },\n    comment: [\n      {\n        pattern: /(^\\s*|;\\s*)\\*.*;/m,\n        lookbehind: true\n      },\n      /\\/\\*[\\s\\S]+?\\*\\//\n    ],\n    datetime: {\n      // '1jan2013'd, '9:25:19pm't, '18jan2003:9:27:05am'dt\n      pattern: /'[^']+'(?:dt?|t)\\b/i,\n      alias: 'number'\n    },\n    string: {\n      pattern: /([\"'])(?:\\1\\1|(?!\\1)[\\s\\S])*\\1/,\n      greedy: true\n    },\n    keyword: /\\b(?:data|else|format|if|input|proc\\s\\w+|quit|run|then|libname|set|output|options)\\b/i,\n    // Decimal (1.2e23), hexadecimal (0c1x)\n    number: /\\b(?:[\\da-f]+x|\\d+(?:\\.\\d+)?(?:e[+-]?\\d+)?)/i,\n    operator: /\\*\\*?|\\|\\|?|!!?|¦¦?|<[>=]?|>[<=]?|[-+\\/=&]|[~¬^]=?|\\b(?:eq|ne|gt|lt|ge|le|in|not)\\b/i,\n    punctuation: /[$%@.(){}\\[\\];,\\\\]/\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/sas.js?");

/***/ })

}]);