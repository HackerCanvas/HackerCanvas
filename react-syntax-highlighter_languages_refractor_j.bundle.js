"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_j"],{

/***/ "./node_modules/refractor/lang/j.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/j.js ***!
  \******************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = j\nj.displayName = 'j'\nj.aliases = []\nfunction j(Prism) {\n  Prism.languages.j = {\n    comment: /\\bNB\\..*/,\n    string: {\n      pattern: /'(?:''|[^'\\r\\n])*'/,\n      greedy: true\n    },\n    keyword: /\\b(?:(?:adverb|conjunction|CR|def|define|dyad|LF|monad|noun|verb)\\b|(?:assert|break|case|catch[dt]?|continue|do|else|elseif|end|fcase|for|for_\\w+|goto_\\w+|if|label_\\w+|return|select|throw|try|while|whilst)\\.)/,\n    verb: {\n      // Negative look-ahead prevents bad highlighting\n      // of ^: ;. =. =: !. !:\n      pattern: /(?!\\^:|;\\.|[=!][.:])(?:\\{(?:\\.|::?)?|p(?:\\.\\.?|:)|[=!\\]]|[<>+*\\-%$|,#][.:]?|[?^]\\.?|[;\\[]:?|[~}\"i][.:]|[ACeEIjLor]\\.|(?:[_\\/\\\\qsux]|_?\\d):)/,\n      alias: 'keyword'\n    },\n    number: /\\b_?(?:(?!\\d:)\\d+(?:\\.\\d+)?(?:(?:[ejpx]|ad|ar)_?\\d+(?:\\.\\d+)?)*(?:b_?[\\da-z]+(?:\\.[\\da-z]+)?)?|_(?!\\.))/,\n    adverb: {\n      pattern: /[~}]|[\\/\\\\]\\.?|[bfM]\\.|t[.:]/,\n      alias: 'builtin'\n    },\n    operator: /[=a][.:]|_\\./,\n    conjunction: {\n      pattern: /&(?:\\.:?|:)?|[.:@][.:]?|[!D][.:]|[;dHT]\\.|`:?|[\\^LS]:|\"/,\n      alias: 'variable'\n    },\n    punctuation: /[()]/\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/j.js?");

/***/ })

}]);