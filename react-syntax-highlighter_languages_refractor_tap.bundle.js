"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_tap"],{

/***/ "./node_modules/refractor/lang/tap.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/tap.js ***!
  \********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = tap\ntap.displayName = 'tap'\ntap.aliases = []\nfunction tap(Prism) {\n  Prism.languages.tap = {\n    fail: /not ok[^#{\\n\\r]*/,\n    pass: /ok[^#{\\n\\r]*/,\n    pragma: /pragma [+-][a-z]+/,\n    bailout: /bail out!.*/i,\n    version: /TAP version \\d+/i,\n    plan: /\\d+\\.\\.\\d+(?: +#.*)?/,\n    subtest: {\n      pattern: /# Subtest(?:: .*)?/,\n      greedy: true\n    },\n    punctuation: /[{}]/,\n    directive: /#.*/,\n    yamlish: {\n      pattern: /(^[^\\S\\r\\n]*)---(?:\\r\\n?|\\n)(?:.*(?:\\r\\n?|\\n))*?[^\\S\\r\\n]*\\.\\.\\.$/m,\n      lookbehind: true,\n      inside: Prism.languages.yaml,\n      alias: 'language-yaml'\n    }\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/tap.js?");

/***/ })

}]);