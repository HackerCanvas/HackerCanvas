"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_scheme"],{

/***/ "./node_modules/refractor/lang/scheme.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/scheme.js ***!
  \***********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = scheme\nscheme.displayName = 'scheme'\nscheme.aliases = []\nfunction scheme(Prism) {\n  Prism.languages.scheme = {\n    comment: /;.*/,\n    string: {\n      pattern: /\"(?:[^\"\\\\]|\\\\.)*\"|'[^()#'\\s]+/,\n      greedy: true\n    },\n    character: {\n      pattern: /#\\\\(?:[ux][a-fA-F\\d]+|[a-zA-Z]+|\\S)/,\n      alias: 'string'\n    },\n    keyword: {\n      pattern: /(\\()(?:define(?:-syntax|-library|-values)?|(?:case-)?lambda|let(?:\\*|rec)?(?:-values)?|else|if|cond|begin|delay(?:-force)?|parameterize|guard|set!|(?:quasi-)?quote|syntax-rules)(?=[()\\s])/,\n      lookbehind: true\n    },\n    builtin: {\n      pattern: /(\\()(?:(?:cons|car|cdr|list|call-with-current-continuation|call\\/cc|append|abs|apply|eval)\\b|null\\?|pair\\?|boolean\\?|eof-object\\?|char\\?|procedure\\?|number\\?|port\\?|string\\?|vector\\?|symbol\\?|bytevector\\?)(?=[()\\s])/,\n      lookbehind: true\n    },\n    number: {\n      pattern: /([\\s()])[-+]?(?:\\d+\\/\\d+|\\d*\\.?\\d+(?:\\s*[-+]\\s*\\d*\\.?\\d+i)?)\\b/,\n      lookbehind: true\n    },\n    boolean: /#[tf]/,\n    operator: {\n      pattern: /(\\()(?:[-+*%\\/]|[<>]=?|=>?)(?=\\s|$)/,\n      lookbehind: true\n    },\n    function: {\n      pattern: /(\\()[^()'\\s]+(?=[()\\s)]|$)/,\n      lookbehind: true\n    },\n    punctuation: /[()']/\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/scheme.js?");

/***/ })

}]);