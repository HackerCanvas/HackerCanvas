"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_protobuf"],{

/***/ "./node_modules/refractor/lang/protobuf.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/protobuf.js ***!
  \*************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = protobuf\nprotobuf.displayName = 'protobuf'\nprotobuf.aliases = []\nfunction protobuf(Prism) {\n  ;(function(Prism) {\n    var builtinTypes = /\\b(?:double|float|[su]?int(?:32|64)|s?fixed(?:32|64)|bool|string|bytes)\\b/\n    Prism.languages.protobuf = Prism.languages.extend('clike', {\n      'class-name': {\n        pattern: /(\\b(?:enum|extend|message|service)\\s+)[A-Za-z_]\\w*(?=\\s*\\{)/,\n        lookbehind: true\n      },\n      keyword: /\\b(?:enum|extend|extensions|import|message|oneof|option|optional|package|public|repeated|required|reserved|service|syntax|to)\\b/\n    })\n    Prism.languages.insertBefore('protobuf', 'operator', {\n      map: {\n        pattern: /\\bmap<\\s*[\\w.]+\\s*,\\s*[\\w.]+\\s*>(?=\\s+[A-Za-z_]\\w*\\s*[=;])/,\n        alias: 'class-name',\n        inside: {\n          punctuation: /[<>.,]/,\n          builtin: builtinTypes\n        }\n      },\n      builtin: builtinTypes,\n      'positional-class-name': {\n        pattern: /(?:\\b|\\B\\.)[A-Za-z_]\\w*(?:\\.[A-Za-z_]\\w*)*(?=\\s+[A-Za-z_]\\w*\\s*[=;])/,\n        alias: 'class-name',\n        inside: {\n          punctuation: /\\./\n        }\n      },\n      annotation: {\n        pattern: /(\\[\\s*)[A-Za-z_]\\w*(?=\\s*=)/,\n        lookbehind: true\n      }\n    })\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/protobuf.js?");

/***/ })

}]);