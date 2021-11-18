"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_bro"],{

/***/ "./node_modules/refractor/lang/bro.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/bro.js ***!
  \********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = bro\nbro.displayName = 'bro'\nbro.aliases = []\nfunction bro(Prism) {\n  Prism.languages.bro = {\n    comment: {\n      pattern: /(^|[^\\\\$])#.*/,\n      lookbehind: true,\n      inside: {\n        italic: /\\b(?:TODO|FIXME|XXX)\\b/\n      }\n    },\n    string: {\n      pattern: /([\"'])(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n      greedy: true\n    },\n    boolean: /\\b[TF]\\b/,\n    function: {\n      pattern: /(?:function|hook|event) \\w+(?:::\\w+)?/,\n      inside: {\n        keyword: /^(?:function|hook|event)/\n      }\n    },\n    variable: {\n      pattern: /(?:global|local) \\w+/i,\n      inside: {\n        keyword: /(?:global|local)/\n      }\n    },\n    builtin: /(?:@(?:load(?:-(?:sigs|plugin))?|unload|prefixes|ifn?def|else|(?:end)?if|DIR|FILENAME))|(?:&?(?:redef|priority|log|optional|default|add_func|delete_func|expire_func|read_expire|write_expire|create_expire|synchronized|persistent|rotate_interval|rotate_size|encrypt|raw_output|mergeable|group|error_handler|type_column))/,\n    constant: {\n      pattern: /const \\w+/i,\n      inside: {\n        keyword: /const/\n      }\n    },\n    keyword: /\\b(?:break|next|continue|alarm|using|of|add|delete|export|print|return|schedule|when|timeout|addr|any|bool|count|double|enum|file|int|interval|pattern|opaque|port|record|set|string|subnet|table|time|vector|for|if|else|in|module|function)\\b/,\n    operator: /--?|\\+\\+?|!=?=?|<=?|>=?|==?=?|&&|\\|\\|?|\\?|\\*|\\/|~|\\^|%/,\n    number: /\\b0x[\\da-f]+\\b|(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:e[+-]?\\d+)?/i,\n    punctuation: /[{}[\\];(),.:]/\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/bro.js?");

/***/ })

}]);