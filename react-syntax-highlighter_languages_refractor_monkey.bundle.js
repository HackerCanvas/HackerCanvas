"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_monkey"],{

/***/ "./node_modules/refractor/lang/monkey.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/monkey.js ***!
  \***********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = monkey\nmonkey.displayName = 'monkey'\nmonkey.aliases = []\nfunction monkey(Prism) {\n  Prism.languages.monkey = {\n    string: /\"[^\"\\r\\n]*\"/,\n    comment: [\n      {\n        pattern: /^#Rem\\s+[\\s\\S]*?^#End/im,\n        greedy: true\n      },\n      {\n        pattern: /'.+/,\n        greedy: true\n      }\n    ],\n    preprocessor: {\n      pattern: /(^[ \\t]*)#.+/m,\n      lookbehind: true,\n      alias: 'comment'\n    },\n    function: /\\w+(?=\\()/,\n    'type-char': {\n      pattern: /(\\w)[?%#$]/,\n      lookbehind: true,\n      alias: 'variable'\n    },\n    number: {\n      pattern: /((?:\\.\\.)?)(?:(?:\\b|\\B-\\.?|\\B\\.)\\d+(?:(?!\\.\\.)\\.\\d*)?|\\$[\\da-f]+)/i,\n      lookbehind: true\n    },\n    keyword: /\\b(?:Void|Strict|Public|Private|Property|Bool|Int|Float|String|Array|Object|Continue|Exit|Import|Extern|New|Self|Super|Try|Catch|Eachin|True|False|Extends|Abstract|Final|Select|Case|Default|Const|Local|Global|Field|Method|Function|Class|End|If|Then|Else|ElseIf|EndIf|While|Wend|Repeat|Until|Forever|For|To|Step|Next|Return|Module|Interface|Implements|Inline|Throw|Null)\\b/i,\n    operator: /\\.\\.|<[=>]?|>=?|:?=|(?:[+\\-*\\/&~|]|\\b(?:Mod|Shl|Shr)\\b)=?|\\b(?:And|Not|Or)\\b/i,\n    punctuation: /[.,:;()\\[\\]]/\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/monkey.js?");

/***/ })

}]);