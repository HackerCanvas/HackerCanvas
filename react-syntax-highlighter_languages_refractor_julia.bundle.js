"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_julia"],{

/***/ "./node_modules/refractor/lang/julia.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/julia.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = julia\njulia.displayName = 'julia'\njulia.aliases = []\nfunction julia(Prism) {\n  Prism.languages.julia = {\n    comment: {\n      pattern: /(^|[^\\\\])#.*/,\n      lookbehind: true\n    },\n    string: /(\"\"\"|''')[\\s\\S]+?\\1|(\"|')(?:\\\\.|(?!\\2)[^\\\\\\r\\n])*\\2/,\n    keyword: /\\b(?:abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|in|let|local|macro|module|print|println|quote|return|struct|try|type|typealias|using|while)\\b/,\n    boolean: /\\b(?:true|false)\\b/,\n    number: /(?:\\b(?=\\d)|\\B(?=\\.))(?:0[box])?(?:[\\da-f]+\\.?\\d*|\\.\\d+)(?:[efp][+-]?\\d+)?j?/i,\n    operator: /[-+*^%÷&$\\\\]=?|\\/[\\/=]?|!=?=?|\\|[=>]?|<(?:<=?|[=:])?|>(?:=|>>?=?)?|==?=?|[~≠≤≥]/,\n    punctuation: /[{}[\\];(),.:]/,\n    constant: /\\b(?:(?:NaN|Inf)(?:16|32|64)?)\\b/\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/julia.js?");

/***/ })

}]);