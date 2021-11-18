"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_nim"],{

/***/ "./node_modules/refractor/lang/nim.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/nim.js ***!
  \********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = nim\nnim.displayName = 'nim'\nnim.aliases = []\nfunction nim(Prism) {\n  Prism.languages.nim = {\n    comment: /#.*/,\n    // Double-quoted strings can be prefixed by an identifier (Generalized raw string literals)\n    // Character literals are handled specifically to prevent issues with numeric type suffixes\n    string: {\n      pattern: /(?:(?:\\b(?!\\d)(?:\\w|\\\\x[8-9a-fA-F][0-9a-fA-F])+)?(?:\"\"\"[\\s\\S]*?\"\"\"(?!\")|\"(?:\\\\[\\s\\S]|\"\"|[^\"\\\\])*\")|'(?:\\\\(?:\\d+|x[\\da-fA-F]{2}|.)|[^'])')/,\n      greedy: true\n    },\n    // The negative look ahead prevents wrong highlighting of the .. operator\n    number: /\\b(?:0[xXoObB][\\da-fA-F_]+|\\d[\\d_]*(?:(?!\\.\\.)\\.[\\d_]*)?(?:[eE][+-]?\\d[\\d_]*)?)(?:'?[iuf]\\d*)?/,\n    keyword: /\\b(?:addr|as|asm|atomic|bind|block|break|case|cast|concept|const|continue|converter|defer|discard|distinct|do|elif|else|end|enum|except|export|finally|for|from|func|generic|if|import|include|interface|iterator|let|macro|method|mixin|nil|object|out|proc|ptr|raise|ref|return|static|template|try|tuple|type|using|var|when|while|with|without|yield)\\b/,\n    function: {\n      pattern: /(?:(?!\\d)(?:\\w|\\\\x[8-9a-fA-F][0-9a-fA-F])+|`[^`\\r\\n]+`)\\*?(?:\\[[^\\]]+\\])?(?=\\s*\\()/,\n      inside: {\n        operator: /\\*$/\n      }\n    },\n    // We don't want to highlight operators inside backticks\n    ignore: {\n      pattern: /`[^`\\r\\n]+`/,\n      inside: {\n        punctuation: /`/\n      }\n    },\n    operator: {\n      // Look behind and look ahead prevent wrong highlighting of punctuations [. .] {. .} (. .)\n      // but allow the slice operator .. to take precedence over them\n      // One can define his own operators in Nim so all combination of operators might be an operator.\n      pattern: /(^|[({\\[](?=\\.\\.)|(?![({\\[]\\.).)(?:(?:[=+\\-*\\/<>@$~&%|!?^:\\\\]|\\.\\.|\\.(?![)}\\]]))+|\\b(?:and|div|of|or|in|is|isnot|mod|not|notin|shl|shr|xor)\\b)/m,\n      lookbehind: true\n    },\n    punctuation: /[({\\[]\\.|\\.[)}\\]]|[`(){}\\[\\],:]/\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/nim.js?");

/***/ })

}]);