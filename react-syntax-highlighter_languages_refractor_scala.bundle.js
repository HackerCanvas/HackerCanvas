"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_scala"],{

/***/ "./node_modules/refractor/lang/java.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/java.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = java\njava.displayName = 'java'\njava.aliases = []\nfunction java(Prism) {\n  ;(function(Prism) {\n    var keywords = /\\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var|null|exports|module|open|opens|provides|requires|to|transitive|uses|with)\\b/ // based on the java naming conventions\n    var className = /\\b[A-Z](?:\\w*[a-z]\\w*)?\\b/\n    Prism.languages.java = Prism.languages.extend('clike', {\n      'class-name': [\n        className, // variables and parameters\n        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)\n        /\\b[A-Z]\\w*(?=\\s+\\w+\\s*[;,=())])/\n      ],\n      keyword: keywords,\n      function: [\n        Prism.languages.clike.function,\n        {\n          pattern: /(\\:\\:)[a-z_]\\w*/,\n          lookbehind: true\n        }\n      ],\n      number: /\\b0b[01][01_]*L?\\b|\\b0x[\\da-f_]*\\.?[\\da-f_p+-]+\\b|(?:\\b\\d[\\d_]*\\.?[\\d_]*|\\B\\.\\d[\\d_]*)(?:e[+-]?\\d[\\d_]*)?[dfl]?/i,\n      operator: {\n        pattern: /(^|[^.])(?:<<=?|>>>?=?|->|([-+&|])\\2|[?:~]|[-+*/%&|^!=<>]=?)/m,\n        lookbehind: true\n      }\n    })\n    Prism.languages.insertBefore('java', 'class-name', {\n      annotation: {\n        alias: 'punctuation',\n        pattern: /(^|[^.])@\\w+/,\n        lookbehind: true\n      },\n      namespace: {\n        pattern: /(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)[a-z]\\w*(\\.[a-z]\\w*)+/,\n        lookbehind: true,\n        inside: {\n          punctuation: /\\./\n        }\n      },\n      generics: {\n        pattern: /<(?:[\\w\\s,.&?]|<(?:[\\w\\s,.&?]|<(?:[\\w\\s,.&?]|<[\\w\\s,.&?]*>)*>)*>)*>/,\n        inside: {\n          'class-name': className,\n          keyword: keywords,\n          punctuation: /[<>(),.:]/,\n          operator: /[?&|]/\n        }\n      }\n    })\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/java.js?");

/***/ }),

/***/ "./node_modules/refractor/lang/scala.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/scala.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar refractorJava = __webpack_require__(/*! ./java.js */ \"./node_modules/refractor/lang/java.js\")\nmodule.exports = scala\nscala.displayName = 'scala'\nscala.aliases = []\nfunction scala(Prism) {\n  Prism.register(refractorJava)\n  Prism.languages.scala = Prism.languages.extend('java', {\n    keyword: /<-|=>|\\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\\b/,\n    string: [\n      {\n        pattern: /\"\"\"[\\s\\S]*?\"\"\"/,\n        greedy: true\n      },\n      {\n        pattern: /(\"|')(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*\\1/,\n        greedy: true\n      }\n    ],\n    builtin: /\\b(?:String|Int|Long|Short|Byte|Boolean|Double|Float|Char|Any|AnyRef|AnyVal|Unit|Nothing)\\b/,\n    number: /\\b0x[\\da-f]*\\.?[\\da-f]+|(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:e\\d+)?[dfl]?/i,\n    symbol: /'[^\\d\\s\\\\]\\w*/\n  })\n  delete Prism.languages.scala['class-name']\n  delete Prism.languages.scala['function']\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/scala.js?");

/***/ })

}]);