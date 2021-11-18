"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_makefile"],{

/***/ "./node_modules/refractor/lang/makefile.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/makefile.js ***!
  \*************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = makefile\nmakefile.displayName = 'makefile'\nmakefile.aliases = []\nfunction makefile(Prism) {\n  Prism.languages.makefile = {\n    comment: {\n      pattern: /(^|[^\\\\])#(?:\\\\(?:\\r\\n|[\\s\\S])|[^\\\\\\r\\n])*/,\n      lookbehind: true\n    },\n    string: {\n      pattern: /([\"'])(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n      greedy: true\n    },\n    // Built-in target names\n    builtin: /\\.[A-Z][^:#=\\s]+(?=\\s*:(?!=))/,\n    // Targets\n    symbol: {\n      pattern: /^[^:=\\r\\n]+(?=\\s*:(?!=))/m,\n      inside: {\n        variable: /\\$+(?:[^(){}:#=\\s]+|(?=[({]))/\n      }\n    },\n    variable: /\\$+(?:[^(){}:#=\\s]+|\\([@*%<^+?][DF]\\)|(?=[({]))/,\n    keyword: [\n      // Directives\n      /-include\\b|\\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\\b/, // Functions\n      {\n        pattern: /(\\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \\t])/,\n        lookbehind: true\n      }\n    ],\n    operator: /(?:::|[?:+!])?=|[|@]/,\n    punctuation: /[:;(){}]/\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/makefile.js?");

/***/ })

}]);