"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_swift"],{

/***/ "./node_modules/refractor/lang/swift.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/swift.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = swift\nswift.displayName = 'swift'\nswift.aliases = []\nfunction swift(Prism) {\n  // issues: nested multiline comments\n  Prism.languages.swift = Prism.languages.extend('clike', {\n    string: {\n      pattern: /(\"|')(\\\\(?:\\((?:[^()]|\\([^)]+\\))+\\)|\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n      greedy: true,\n      inside: {\n        interpolation: {\n          pattern: /\\\\\\((?:[^()]|\\([^)]+\\))+\\)/,\n          inside: {\n            delimiter: {\n              pattern: /^\\\\\\(|\\)$/,\n              alias: 'variable'\n            } // See rest below\n          }\n        }\n      }\n    },\n    keyword: /\\b(?:as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\\b/,\n    number: /\\b(?:[\\d_]+(?:\\.[\\de_]+)?|0x[a-f0-9_]+(?:\\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b/i,\n    constant: /\\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\\b/,\n    atrule: /@\\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\\b/,\n    builtin: /\\b(?:[A-Z]\\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\\b/\n  })\n  Prism.languages.swift['string'].inside['interpolation'].inside.rest =\n    Prism.languages.swift\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/swift.js?");

/***/ })

}]);