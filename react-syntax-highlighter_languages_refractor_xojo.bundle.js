"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_xojo"],{

/***/ "./node_modules/refractor/lang/xojo.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/xojo.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = xojo\nxojo.displayName = 'xojo'\nxojo.aliases = []\nfunction xojo(Prism) {\n  Prism.languages.xojo = {\n    comment: {\n      pattern: /(?:'|\\/\\/|Rem\\b).+/i,\n      inside: {\n        keyword: /^Rem/i\n      }\n    },\n    string: {\n      pattern: /\"(?:\"\"|[^\"])*\"/,\n      greedy: true\n    },\n    number: [/(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:E[+-]?\\d+)?/i, /&[bchou][a-z\\d]+/i],\n    symbol: /#(?:If|Else|ElseIf|Endif|Pragma)\\b/i,\n    keyword: /\\b(?:AddHandler|App|Array|As(?:signs)?|By(?:Ref|Val)|Break|Call|Case|Catch|Const|Continue|CurrentMethodName|Declare|Dim|Do(?:wnTo)?|Each|Else(?:If)?|End|Exit|Extends|False|Finally|For|Global|If|In|Lib|Loop|Me|Next|Nil|Optional|ParamArray|Raise(?:Event)?|ReDim|Rem|RemoveHandler|Return|Select|Self|Soft|Static|Step|Super|Then|To|True|Try|Ubound|Until|Using|Wend|While)\\b/i,\n    operator: /<[=>]?|>=?|[+\\-*\\/\\\\^=]|\\b(?:AddressOf|And|Ctype|IsA?|Mod|New|Not|Or|Xor|WeakAddressOf)\\b/i,\n    punctuation: /[.,;:()]/\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/xojo.js?");

/***/ })

}]);