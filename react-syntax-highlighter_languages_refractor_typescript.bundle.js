"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_typescript"],{

/***/ "./node_modules/refractor/lang/typescript.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/typescript.js ***!
  \***************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = typescript\ntypescript.displayName = 'typescript'\ntypescript.aliases = ['ts']\nfunction typescript(Prism) {\n  Prism.languages.typescript = Prism.languages.extend('javascript', {\n    // From JavaScript Prism keyword list and TypeScript language spec: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#221-reserved-words\n    keyword: /\\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\\b/,\n    builtin: /\\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\\b/\n  })\n  Prism.languages.ts = Prism.languages.typescript\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/typescript.js?");

/***/ })

}]);