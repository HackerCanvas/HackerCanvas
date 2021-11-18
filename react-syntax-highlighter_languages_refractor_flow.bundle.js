"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_flow"],{

/***/ "./node_modules/refractor/lang/flow.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/flow.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = flow\nflow.displayName = 'flow'\nflow.aliases = []\nfunction flow(Prism) {\n  ;(function(Prism) {\n    Prism.languages.flow = Prism.languages.extend('javascript', {})\n    Prism.languages.insertBefore('flow', 'keyword', {\n      type: [\n        {\n          pattern: /\\b(?:[Nn]umber|[Ss]tring|[Bb]oolean|Function|any|mixed|null|void)\\b/,\n          alias: 'tag'\n        }\n      ]\n    })\n    Prism.languages.flow[\n      'function-variable'\n    ].pattern = /[_$a-z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*(?=\\s*=\\s*(?:function\\b|(?:\\([^()]*\\)(?:\\s*:\\s*\\w+)?|[_$a-z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*)\\s*=>))/i\n    delete Prism.languages.flow['parameter']\n    Prism.languages.insertBefore('flow', 'operator', {\n      'flow-punctuation': {\n        pattern: /\\{\\||\\|\\}/,\n        alias: 'punctuation'\n      }\n    })\n    if (!Array.isArray(Prism.languages.flow.keyword)) {\n      Prism.languages.flow.keyword = [Prism.languages.flow.keyword]\n    }\n    Prism.languages.flow.keyword.unshift(\n      {\n        pattern: /(^|[^$]\\b)(?:type|opaque|declare|Class)\\b(?!\\$)/,\n        lookbehind: true\n      },\n      {\n        pattern: /(^|[^$]\\B)\\$(?:await|Diff|Exact|Keys|ObjMap|PropertyType|Shape|Record|Supertype|Subtype|Enum)\\b(?!\\$)/,\n        lookbehind: true\n      }\n    )\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/flow.js?");

/***/ })

}]);