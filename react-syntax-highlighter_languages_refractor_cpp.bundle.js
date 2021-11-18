"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_cpp"],{

/***/ "./node_modules/refractor/lang/c.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/c.js ***!
  \******************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = c\nc.displayName = 'c'\nc.aliases = []\nfunction c(Prism) {\n  Prism.languages.c = Prism.languages.extend('clike', {\n    'class-name': {\n      pattern: /(\\b(?:enum|struct)\\s+)\\w+/,\n      lookbehind: true\n    },\n    keyword: /\\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\\b/,\n    operator: />>=?|<<=?|->|([-+&|:])\\1|[?:~]|[-+*/%&|^!=<>]=?/,\n    number: /(?:\\b0x(?:[\\da-f]+\\.?[\\da-f]*|\\.[\\da-f]+)(?:p[+-]?\\d+)?|(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:e[+-]?\\d+)?)[ful]*/i\n  })\n  Prism.languages.insertBefore('c', 'string', {\n    macro: {\n      // allow for multiline macro definitions\n      // spaces after the # character compile fine with gcc\n      pattern: /(^\\s*)#\\s*[a-z]+(?:[^\\r\\n\\\\]|\\\\(?:\\r\\n|[\\s\\S]))*/im,\n      lookbehind: true,\n      alias: 'property',\n      inside: {\n        // highlight the path of the include statement as a string\n        string: {\n          pattern: /(#\\s*include\\s*)(?:<.+?>|(\"|')(?:\\\\?.)+?\\2)/,\n          lookbehind: true\n        },\n        // highlight macro directives as keywords\n        directive: {\n          pattern: /(#\\s*)\\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\\b/,\n          lookbehind: true,\n          alias: 'keyword'\n        }\n      }\n    },\n    // highlight predefined macros as constants\n    constant: /\\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\\b/\n  })\n  delete Prism.languages.c['boolean']\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/c.js?");

/***/ }),

/***/ "./node_modules/refractor/lang/cpp.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/cpp.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar refractorC = __webpack_require__(/*! ./c.js */ \"./node_modules/refractor/lang/c.js\")\nmodule.exports = cpp\ncpp.displayName = 'cpp'\ncpp.aliases = []\nfunction cpp(Prism) {\n  Prism.register(refractorC)\n  Prism.languages.cpp = Prism.languages.extend('c', {\n    'class-name': {\n      pattern: /(\\b(?:class|enum|struct)\\s+)\\w+/,\n      lookbehind: true\n    },\n    keyword: /\\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\\b/,\n    number: {\n      pattern: /(?:\\b0b[01']+|\\b0x(?:[\\da-f']+\\.?[\\da-f']*|\\.[\\da-f']+)(?:p[+-]?[\\d']+)?|(?:\\b[\\d']+\\.?[\\d']*|\\B\\.[\\d']+)(?:e[+-]?[\\d']+)?)[ful]*/i,\n      greedy: true\n    },\n    operator: />>=?|<<=?|->|([-+&|:])\\1|[?:~]|[-+*/%&|^!=<>]=?|\\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\\b/,\n    boolean: /\\b(?:true|false)\\b/\n  })\n  Prism.languages.insertBefore('cpp', 'string', {\n    'raw-string': {\n      pattern: /R\"([^()\\\\ ]{0,16})\\([\\s\\S]*?\\)\\1\"/,\n      alias: 'string',\n      greedy: true\n    }\n  })\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/cpp.js?");

/***/ })

}]);