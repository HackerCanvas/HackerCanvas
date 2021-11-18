"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_kotlin"],{

/***/ "./node_modules/refractor/lang/kotlin.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/kotlin.js ***!
  \***********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = kotlin\nkotlin.displayName = 'kotlin'\nkotlin.aliases = []\nfunction kotlin(Prism) {\n  ;(function(Prism) {\n    Prism.languages.kotlin = Prism.languages.extend('clike', {\n      keyword: {\n        // The lookbehind prevents wrong highlighting of e.g. kotlin.properties.get\n        pattern: /(^|[^.])\\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\\b/,\n        lookbehind: true\n      },\n      function: [\n        /\\w+(?=\\s*\\()/,\n        {\n          pattern: /(\\.)\\w+(?=\\s*\\{)/,\n          lookbehind: true\n        }\n      ],\n      number: /\\b(?:0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\\d+(?:_\\d+)*(?:\\.\\d+(?:_\\d+)*)?(?:[eE][+-]?\\d+(?:_\\d+)*)?[fFL]?)\\b/,\n      operator: /\\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\\/*%<>]=?|[?:]:?|\\.\\.|&&|\\|\\||\\b(?:and|inv|or|shl|shr|ushr|xor)\\b/\n    })\n    delete Prism.languages.kotlin['class-name']\n    Prism.languages.insertBefore('kotlin', 'string', {\n      'raw-string': {\n        pattern: /(\"\"\"|''')[\\s\\S]*?\\1/,\n        alias: 'string' // See interpolation below\n      }\n    })\n    Prism.languages.insertBefore('kotlin', 'keyword', {\n      annotation: {\n        pattern: /\\B@(?:\\w+:)?(?:[A-Z]\\w*|\\[[^\\]]+\\])/,\n        alias: 'builtin'\n      }\n    })\n    Prism.languages.insertBefore('kotlin', 'function', {\n      label: {\n        pattern: /\\w+@|@\\w+/,\n        alias: 'symbol'\n      }\n    })\n    var interpolation = [\n      {\n        pattern: /\\$\\{[^}]+\\}/,\n        inside: {\n          delimiter: {\n            pattern: /^\\$\\{|\\}$/,\n            alias: 'variable'\n          },\n          rest: Prism.languages.kotlin\n        }\n      },\n      {\n        pattern: /\\$\\w+/,\n        alias: 'variable'\n      }\n    ]\n    Prism.languages.kotlin['string'].inside = Prism.languages.kotlin[\n      'raw-string'\n    ].inside = {\n      interpolation: interpolation\n    }\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/kotlin.js?");

/***/ })

}]);