"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_roboconf"],{

/***/ "./node_modules/refractor/lang/roboconf.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/roboconf.js ***!
  \*************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = roboconf\nroboconf.displayName = 'roboconf'\nroboconf.aliases = []\nfunction roboconf(Prism) {\n  Prism.languages.roboconf = {\n    comment: /#.*/,\n    keyword: {\n      pattern: /(^|\\s)(?:(?:facet|instance of)(?=[ \\t]+[\\w-]+[ \\t]*\\{)|(?:external|import)\\b)/,\n      lookbehind: true\n    },\n    component: {\n      pattern: /[\\w-]+(?=[ \\t]*\\{)/,\n      alias: 'variable'\n    },\n    property: /[\\w.-]+(?=[ \\t]*:)/,\n    value: {\n      pattern: /(=[ \\t]*)[^,;]+/,\n      lookbehind: true,\n      alias: 'attr-value'\n    },\n    optional: {\n      pattern: /\\(optional\\)/,\n      alias: 'builtin'\n    },\n    wildcard: {\n      pattern: /(\\.)\\*/,\n      lookbehind: true,\n      alias: 'operator'\n    },\n    punctuation: /[{},.;:=]/\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/roboconf.js?");

/***/ })

}]);