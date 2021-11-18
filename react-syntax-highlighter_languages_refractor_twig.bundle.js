"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_twig"],{

/***/ "./node_modules/refractor/lang/twig.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/twig.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = twig\ntwig.displayName = 'twig'\ntwig.aliases = []\nfunction twig(Prism) {\n  Prism.languages.twig = {\n    comment: /\\{#[\\s\\S]*?#\\}/,\n    tag: {\n      pattern: /\\{\\{[\\s\\S]*?\\}\\}|\\{%[\\s\\S]*?%\\}/,\n      inside: {\n        ld: {\n          pattern: /^(?:\\{\\{-?|\\{%-?\\s*\\w+)/,\n          inside: {\n            punctuation: /^(?:\\{\\{|\\{%)-?/,\n            keyword: /\\w+/\n          }\n        },\n        rd: {\n          pattern: /-?(?:%\\}|\\}\\})$/,\n          inside: {\n            punctuation: /.+/\n          }\n        },\n        string: {\n          pattern: /(\"|')(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*\\1/,\n          inside: {\n            punctuation: /^['\"]|['\"]$/\n          }\n        },\n        keyword: /\\b(?:even|if|odd)\\b/,\n        boolean: /\\b(?:true|false|null)\\b/,\n        number: /\\b0x[\\dA-Fa-f]+|(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:[Ee][-+]?\\d+)?/,\n        operator: [\n          {\n            pattern: /(\\s)(?:and|b-and|b-xor|b-or|ends with|in|is|matches|not|or|same as|starts with)(?=\\s)/,\n            lookbehind: true\n          },\n          /[=<>]=?|!=|\\*\\*?|\\/\\/?|\\?:?|[-+~%|]/\n        ],\n        property: /\\b[a-zA-Z_]\\w*\\b/,\n        punctuation: /[()\\[\\]{}:.,]/\n      }\n    },\n    // The rest can be parsed as HTML\n    other: {\n      // We want non-blank matches\n      pattern: /\\S(?:[\\s\\S]*\\S)?/,\n      inside: Prism.languages.markup\n    }\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/twig.js?");

/***/ })

}]);