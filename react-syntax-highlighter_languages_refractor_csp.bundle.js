"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_csp"],{

/***/ "./node_modules/refractor/lang/csp.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/csp.js ***!
  \********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = csp\ncsp.displayName = 'csp'\ncsp.aliases = []\nfunction csp(Prism) {\n  /**\n   * Original by Scott Helme.\n   *\n   * Reference: https://scotthelme.co.uk/csp-cheat-sheet/\n   *\n   * Supports the following:\n   *  - CSP Level 1\n   *  - CSP Level 2\n   *  - CSP Level 3\n   */\n  Prism.languages.csp = {\n    directive: {\n      pattern: /\\b(?:(?:base-uri|form-action|frame-ancestors|plugin-types|referrer|reflected-xss|report-to|report-uri|require-sri-for|sandbox) |(?:block-all-mixed-content|disown-opener|upgrade-insecure-requests)(?: |;)|(?:child|connect|default|font|frame|img|manifest|media|object|script|style|worker)-src )/i,\n      alias: 'keyword'\n    },\n    safe: {\n      pattern: /'(?:self|none|strict-dynamic|(?:nonce-|sha(?:256|384|512)-)[a-zA-Z\\d+=/]+)'/,\n      alias: 'selector'\n    },\n    unsafe: {\n      pattern: /(?:'unsafe-inline'|'unsafe-eval'|'unsafe-hashed-attributes'|\\*)/,\n      alias: 'function'\n    }\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/csp.js?");

/***/ })

}]);