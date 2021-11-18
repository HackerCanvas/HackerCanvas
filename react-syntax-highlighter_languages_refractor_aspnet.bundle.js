"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_aspnet"],{

/***/ "./node_modules/refractor/lang/aspnet.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/aspnet.js ***!
  \***********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = aspnet\naspnet.displayName = 'aspnet'\naspnet.aliases = []\nfunction aspnet(Prism) {\n  Prism.languages.aspnet = Prism.languages.extend('markup', {\n    'page-directive tag': {\n      pattern: /<%\\s*@.*%>/i,\n      inside: {\n        'page-directive tag': /<%\\s*@\\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,\n        rest: Prism.languages.markup.tag.inside\n      }\n    },\n    'directive tag': {\n      pattern: /<%.*%>/i,\n      inside: {\n        'directive tag': /<%\\s*?[$=%#:]{0,2}|%>/i,\n        rest: Prism.languages.csharp\n      }\n    }\n  }) // Regexp copied from prism-markup, with a negative look-ahead added\n  Prism.languages.aspnet.tag.pattern = /<(?!%)\\/?[^\\s>\\/]+(?:\\s+[^\\s>\\/=]+(?:=(?:(\"|')(?:\\\\[\\s\\S]|(?!\\1)[^\\\\])*\\1|[^\\s'\">=]+))?)*\\s*\\/?>/i // match directives of attribute value foo=\"<% Bar %>\"\n  Prism.languages.insertBefore(\n    'inside',\n    'punctuation',\n    {\n      'directive tag': Prism.languages.aspnet['directive tag']\n    },\n    Prism.languages.aspnet.tag.inside['attr-value']\n  )\n  Prism.languages.insertBefore('aspnet', 'comment', {\n    'asp comment': /<%--[\\s\\S]*?--%>/\n  }) // script runat=\"server\" contains csharp, not javascript\n  Prism.languages.insertBefore(\n    'aspnet',\n    Prism.languages.javascript ? 'script' : 'tag',\n    {\n      'asp script': {\n        pattern: /(<script(?=.*runat=['\"]?server['\"]?)[\\s\\S]*?>)[\\s\\S]*?(?=<\\/script>)/i,\n        lookbehind: true,\n        inside: Prism.languages.csharp || {}\n      }\n    }\n  )\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/aspnet.js?");

/***/ })

}]);