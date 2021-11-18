"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_dart"],{

/***/ "./node_modules/refractor/lang/dart.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/dart.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = dart\ndart.displayName = 'dart'\ndart.aliases = []\nfunction dart(Prism) {\n  Prism.languages.dart = Prism.languages.extend('clike', {\n    string: [\n      {\n        pattern: /r?(\"\"\"|''')[\\s\\S]*?\\1/,\n        greedy: true\n      },\n      {\n        pattern: /r?(\"|')(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*\\1/,\n        greedy: true\n      }\n    ],\n    keyword: [\n      /\\b(?:async|sync|yield)\\*/,\n      /\\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|default|deferred|do|dynamic|else|enum|export|external|extends|factory|final|finally|for|get|if|implements|import|in|library|new|null|operator|part|rethrow|return|set|static|super|switch|this|throw|try|typedef|var|void|while|with|yield)\\b/\n    ],\n    operator: /\\bis!|\\b(?:as|is)\\b|\\+\\+|--|&&|\\|\\||<<=?|>>=?|~(?:\\/=?)?|[+\\-*\\/%&^|=!<>]=?|\\?/\n  })\n  Prism.languages.insertBefore('dart', 'function', {\n    metadata: {\n      pattern: /@\\w+/,\n      alias: 'symbol'\n    }\n  })\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/dart.js?");

/***/ })

}]);