"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_ocaml"],{

/***/ "./node_modules/refractor/lang/ocaml.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/ocaml.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = ocaml\nocaml.displayName = 'ocaml'\nocaml.aliases = []\nfunction ocaml(Prism) {\n  Prism.languages.ocaml = {\n    comment: /\\(\\*[\\s\\S]*?\\*\\)/,\n    string: [\n      {\n        pattern: /\"(?:\\\\.|[^\\\\\\r\\n\"])*\"/,\n        greedy: true\n      },\n      {\n        pattern: /(['`])(?:\\\\(?:\\d+|x[\\da-f]+|.)|(?!\\1)[^\\\\\\r\\n])\\1/i,\n        greedy: true\n      }\n    ],\n    number: /\\b(?:0x[\\da-f][\\da-f_]+|(?:0[bo])?\\d[\\d_]*\\.?[\\d_]*(?:e[+-]?[\\d_]+)?)/i,\n    type: {\n      pattern: /\\B['`]\\w*/,\n      alias: 'variable'\n    },\n    directive: {\n      pattern: /\\B#\\w+/,\n      alias: 'function'\n    },\n    keyword: /\\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|object|of|open|prefix|private|rec|then|sig|struct|to|try|type|val|value|virtual|where|while|with)\\b/,\n    boolean: /\\b(?:false|true)\\b/,\n    // Custom operators are allowed\n    operator: /:=|[=<>@^|&+\\-*\\/$%!?~][!$%&*+\\-.\\/:<=>?@^|~]*|\\b(?:and|asr|land|lor|lxor|lsl|lsr|mod|nor|or)\\b/,\n    punctuation: /[(){}\\[\\]|_.,:;]/\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/ocaml.js?");

/***/ })

}]);