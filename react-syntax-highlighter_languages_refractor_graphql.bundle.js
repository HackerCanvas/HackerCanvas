"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_graphql"],{

/***/ "./node_modules/refractor/lang/graphql.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/graphql.js ***!
  \************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = graphql\ngraphql.displayName = 'graphql'\ngraphql.aliases = []\nfunction graphql(Prism) {\n  Prism.languages.graphql = {\n    comment: /#.*/,\n    string: {\n      pattern: /\"(?:\\\\.|[^\\\\\"\\r\\n])*\"/,\n      greedy: true\n    },\n    number: /(?:\\B-|\\b)\\d+(?:\\.\\d+)?(?:e[+-]?\\d+)?\\b/i,\n    boolean: /\\b(?:true|false)\\b/,\n    variable: /\\$[a-z_]\\w*/i,\n    directive: {\n      pattern: /@[a-z_]\\w*/i,\n      alias: 'function'\n    },\n    'attr-name': {\n      pattern: /[a-z_]\\w*(?=\\s*(?:\\((?:[^()\"]|\"(?:\\\\.|[^\\\\\"\\r\\n])*\")*\\))?:)/i,\n      greedy: true\n    },\n    'class-name': {\n      pattern: /(\\b(?:enum|implements|interface|on|scalar|type|union)\\s+)[a-zA-Z_]\\w*/,\n      lookbehind: true\n    },\n    fragment: {\n      pattern: /(\\bfragment\\s+|\\.{3}\\s*(?!on\\b))[a-zA-Z_]\\w*/,\n      lookbehind: true,\n      alias: 'function'\n    },\n    keyword: /\\b(?:enum|fragment|implements|input|interface|mutation|on|query|scalar|schema|type|union)\\b/,\n    operator: /[!=|]|\\.{3}/,\n    punctuation: /[!(){}\\[\\]:=,]/,\n    constant: /\\b(?!ID\\b)[A-Z][A-Z_\\d]*\\b/\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/graphql.js?");

/***/ })

}]);