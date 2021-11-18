"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_haxe"],{

/***/ "./node_modules/refractor/lang/haxe.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/haxe.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = haxe\nhaxe.displayName = 'haxe'\nhaxe.aliases = []\nfunction haxe(Prism) {\n  Prism.languages.haxe = Prism.languages.extend('clike', {\n    // Strings can be multi-line\n    string: {\n      pattern: /([\"'])(?:(?!\\1)[^\\\\]|\\\\[\\s\\S])*\\1/,\n      greedy: true,\n      inside: {\n        interpolation: {\n          pattern: /(^|[^\\\\])\\$(?:\\w+|\\{[^}]+\\})/,\n          lookbehind: true,\n          inside: {\n            interpolation: {\n              pattern: /^\\$\\w*/,\n              alias: 'variable'\n            } // See rest below\n          }\n        }\n      }\n    },\n    // The final look-ahead prevents highlighting of keywords if expressions such as \"haxe.macro.Expr\"\n    keyword: /\\bthis\\b|\\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|from|for|function|if|implements|import|in|inline|interface|macro|new|null|override|public|private|return|static|super|switch|throw|to|try|typedef|using|var|while)(?!\\.)\\b/,\n    operator: /\\.{3}|\\+\\+?|-[->]?|[=!]=?|&&?|\\|\\|?|<[<=]?|>[>=]?|[*\\/%~^]/\n  })\n  Prism.languages.insertBefore('haxe', 'class-name', {\n    regex: {\n      pattern: /~\\/(?:[^\\/\\\\\\r\\n]|\\\\.)+\\/[igmsu]*/,\n      greedy: true\n    }\n  })\n  Prism.languages.insertBefore('haxe', 'keyword', {\n    preprocessor: {\n      pattern: /#\\w+/,\n      alias: 'builtin'\n    },\n    metadata: {\n      pattern: /@:?\\w+/,\n      alias: 'symbol'\n    },\n    reification: {\n      pattern: /\\$(?:\\w+|(?=\\{))/,\n      alias: 'variable'\n    }\n  })\n  Prism.languages.haxe['string'].inside['interpolation'].inside.rest =\n    Prism.languages.haxe\n  delete Prism.languages.haxe['class-name']\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/haxe.js?");

/***/ })

}]);