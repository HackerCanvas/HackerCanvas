"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_cssExtras"],{

/***/ "./node_modules/refractor/lang/css-extras.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/css-extras.js ***!
  \***************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = cssExtras\ncssExtras.displayName = 'cssExtras'\ncssExtras.aliases = []\nfunction cssExtras(Prism) {\n  Prism.languages.css.selector = {\n    pattern: Prism.languages.css.selector,\n    inside: {\n      'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\\w]+/,\n      'pseudo-class': /:[-\\w]+/,\n      class: /\\.[-:.\\w]+/,\n      id: /#[-:.\\w]+/,\n      attribute: {\n        pattern: /\\[(?:[^[\\]\"']|(\"|')(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1)*\\]/,\n        greedy: true,\n        inside: {\n          punctuation: /^\\[|\\]$/,\n          'case-sensitivity': {\n            pattern: /(\\s)[si]$/i,\n            lookbehind: true,\n            alias: 'keyword'\n          },\n          namespace: {\n            pattern: /^(\\s*)[-*\\w\\xA0-\\uFFFF]*\\|(?!=)/,\n            lookbehind: true,\n            inside: {\n              punctuation: /\\|$/\n            }\n          },\n          attribute: {\n            pattern: /^(\\s*)[-\\w\\xA0-\\uFFFF]+/,\n            lookbehind: true\n          },\n          value: [\n            /(\"|')(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n            {\n              pattern: /(=\\s*)[-\\w\\xA0-\\uFFFF]+(?=\\s*$)/,\n              lookbehind: true\n            }\n          ],\n          operator: /[|~*^$]?=/\n        }\n      },\n      'n-th': [\n        {\n          pattern: /(\\(\\s*)[+-]?\\d*[\\dn](?:\\s*[+-]\\s*\\d+)?(?=\\s*\\))/,\n          lookbehind: true,\n          inside: {\n            number: /[\\dn]+/,\n            operator: /[+-]/\n          }\n        },\n        {\n          pattern: /(\\(\\s*)(?:even|odd)(?=\\s*\\))/i,\n          lookbehind: true\n        }\n      ],\n      punctuation: /[()]/\n    }\n  }\n  Prism.languages.insertBefore('css', 'property', {\n    variable: {\n      pattern: /(^|[^-\\w\\xA0-\\uFFFF])--[-_a-z\\xA0-\\uFFFF][-\\w\\xA0-\\uFFFF]*/i,\n      lookbehind: true\n    }\n  })\n  Prism.languages.insertBefore('css', 'function', {\n    operator: {\n      pattern: /(\\s)[+\\-*\\/](?=\\s)/,\n      lookbehind: true\n    },\n    hexcode: /#[\\da-f]{3,8}/i,\n    entity: /\\\\[\\da-f]{1,8}/i,\n    unit: {\n      pattern: /(\\d)(?:%|[a-z]+)/,\n      lookbehind: true\n    },\n    number: /-?[\\d.]+/\n  })\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/css-extras.js?");

/***/ })

}]);