"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_matlab"],{

/***/ "./node_modules/refractor/lang/matlab.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/matlab.js ***!
  \***********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = matlab\nmatlab.displayName = 'matlab'\nmatlab.aliases = []\nfunction matlab(Prism) {\n  Prism.languages.matlab = {\n    comment: [/%\\{[\\s\\S]*?\\}%/, /%.+/],\n    string: {\n      pattern: /\\B'(?:''|[^'\\r\\n])*'/,\n      greedy: true\n    },\n    // FIXME We could handle imaginary numbers as a whole\n    number: /(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:[eE][+-]?\\d+)?(?:[ij])?|\\b[ij]\\b/,\n    keyword: /\\b(?:break|case|catch|continue|else|elseif|end|for|function|if|inf|NaN|otherwise|parfor|pause|pi|return|switch|try|while)\\b/,\n    function: /(?!\\d)\\w+(?=\\s*\\()/,\n    operator: /\\.?[*^\\/\\\\']|[+\\-:@]|[<>=~]=?|&&?|\\|\\|?/,\n    punctuation: /\\.{3}|[.,;\\[\\](){}!]/\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/matlab.js?");

/***/ })

}]);