"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_qore"],{

/***/ "./node_modules/refractor/lang/qore.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/qore.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = qore\nqore.displayName = 'qore'\nqore.aliases = []\nfunction qore(Prism) {\n  Prism.languages.qore = Prism.languages.extend('clike', {\n    comment: {\n      pattern: /(^|[^\\\\])(?:\\/\\*[\\s\\S]*?\\*\\/|(?:\\/\\/|#).*)/,\n      lookbehind: true\n    },\n    // Overridden to allow unescaped multi-line strings\n    string: {\n      pattern: /(\"|')(\\\\[\\s\\S]|(?!\\1)[^\\\\])*\\1/,\n      greedy: true\n    },\n    variable: /\\$(?!\\d)\\w+\\b/,\n    keyword: /\\b(?:abstract|any|assert|binary|bool|boolean|break|byte|case|catch|char|class|code|const|continue|data|default|do|double|else|enum|extends|final|finally|float|for|goto|hash|if|implements|import|inherits|instanceof|int|interface|long|my|native|new|nothing|null|object|our|own|private|reference|rethrow|return|short|soft(?:int|float|number|bool|string|date|list)|static|strictfp|string|sub|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\\b/,\n    number: /\\b(?:0b[01]+|0x[\\da-f]*\\.?[\\da-fp\\-]+|\\d*\\.?\\d+e?\\d*[df]|\\d*\\.?\\d+)\\b/i,\n    boolean: /\\b(?:true|false)\\b/i,\n    operator: {\n      pattern: /(^|[^.])(?:\\+[+=]?|-[-=]?|[!=](?:==?|~)?|>>?=?|<(?:=>?|<=?)?|&[&=]?|\\|[|=]?|[*\\/%^]=?|[~?])/,\n      lookbehind: true\n    },\n    function: /\\$?\\b(?!\\d)\\w+(?=\\()/\n  })\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/qore.js?");

/***/ })

}]);