"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_actionscript"],{

/***/ "./node_modules/refractor/lang/actionscript.js":
/*!*****************************************************!*\
  !*** ./node_modules/refractor/lang/actionscript.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = actionscript\nactionscript.displayName = 'actionscript'\nactionscript.aliases = []\nfunction actionscript(Prism) {\n  Prism.languages.actionscript = Prism.languages.extend('javascript', {\n    keyword: /\\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\\b/,\n    operator: /\\+\\+|--|(?:[+\\-*\\/%^]|&&?|\\|\\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/\n  })\n  Prism.languages.actionscript['class-name'].alias = 'function'\n  if (Prism.languages.markup) {\n    Prism.languages.insertBefore('actionscript', 'string', {\n      xml: {\n        pattern: /(^|[^.])<\\/?\\w+(?:\\s+[^\\s>\\/=]+=(\"|')(?:\\\\[\\s\\S]|(?!\\2)[^\\\\])*\\2)*\\s*\\/?>/,\n        lookbehind: true,\n        inside: {\n          rest: Prism.languages.markup\n        }\n      }\n    })\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/actionscript.js?");

/***/ })

}]);