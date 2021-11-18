"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_jolie"],{

/***/ "./node_modules/refractor/lang/jolie.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/jolie.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = jolie\njolie.displayName = 'jolie'\njolie.aliases = []\nfunction jolie(Prism) {\n  Prism.languages.jolie = Prism.languages.extend('clike', {\n    keyword: /\\b(?:include|define|is_defined|undef|main|init|outputPort|inputPort|Location|Protocol|Interfaces|RequestResponse|OneWay|type|interface|extender|throws|cset|csets|forward|Aggregates|Redirects|embedded|courier|execution|sequential|concurrent|single|scope|install|throw|comp|cH|default|global|linkIn|linkOut|synchronized|this|new|for|if|else|while|in|Jolie|Java|Javascript|nullProcess|spawn|constants|with|provide|until|exit|foreach|instanceof|over|service)\\b/,\n    builtin: /\\b(?:undefined|string|int|void|long|Byte|bool|double|float|char|any)\\b/,\n    number: /(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:e[+-]?\\d+)?l?/i,\n    operator: /-[-=>]?|\\+[+=]?|<[<=]?|[>=*!]=?|&&|\\|\\||[:?\\/%^]/,\n    symbol: /[|;@]/,\n    punctuation: /[,.]/,\n    string: {\n      pattern: /([\"'])(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n      greedy: true\n    }\n  })\n  delete Prism.languages.jolie['class-name']\n  Prism.languages.insertBefore('jolie', 'keyword', {\n    function: {\n      pattern: /((?:\\b(?:outputPort|inputPort|in|service|courier)\\b|@)\\s*)\\w+/,\n      lookbehind: true\n    },\n    aggregates: {\n      pattern: /(\\bAggregates\\s*:\\s*)(?:\\w+(?:\\s+with\\s+\\w+)?\\s*,\\s*)*\\w+(?:\\s+with\\s+\\w+)?/,\n      lookbehind: true,\n      inside: {\n        withExtension: {\n          pattern: /\\bwith\\s+\\w+/,\n          inside: {\n            keyword: /\\bwith\\b/\n          }\n        },\n        function: {\n          pattern: /\\w+/\n        },\n        punctuation: {\n          pattern: /,/\n        }\n      }\n    },\n    redirects: {\n      pattern: /(\\bRedirects\\s*:\\s*)(?:\\w+\\s*=>\\s*\\w+\\s*,\\s*)*(?:\\w+\\s*=>\\s*\\w+)/,\n      lookbehind: true,\n      inside: {\n        punctuation: {\n          pattern: /,/\n        },\n        function: {\n          pattern: /\\w+/\n        },\n        symbol: {\n          pattern: /=>/\n        }\n      }\n    }\n  })\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/jolie.js?");

/***/ })

}]);