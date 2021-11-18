"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_css"],{

/***/ "./node_modules/refractor/lang/css.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/css.js ***!
  \********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = css\ncss.displayName = 'css'\ncss.aliases = []\nfunction css(Prism) {\n  ;(function(Prism) {\n    var string = /(\"|')(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/\n    Prism.languages.css = {\n      comment: /\\/\\*[\\s\\S]*?\\*\\//,\n      atrule: {\n        pattern: /@[\\w-]+[\\s\\S]*?(?:;|(?=\\s*\\{))/,\n        inside: {\n          rule: /@[\\w-]+/ // See rest below\n        }\n      },\n      url: {\n        pattern: RegExp('url\\\\((?:' + string.source + '|[^\\n\\r()]*)\\\\)', 'i'),\n        inside: {\n          function: /^url/i,\n          punctuation: /^\\(|\\)$/\n        }\n      },\n      selector: RegExp(\n        '[^{}\\\\s](?:[^{};\"\\']|' + string.source + ')*?(?=\\\\s*\\\\{)'\n      ),\n      string: {\n        pattern: string,\n        greedy: true\n      },\n      property: /[-_a-z\\xA0-\\uFFFF][-\\w\\xA0-\\uFFFF]*(?=\\s*:)/i,\n      important: /!important\\b/i,\n      function: /[-a-z0-9]+(?=\\()/i,\n      punctuation: /[(){};:,]/\n    }\n    Prism.languages.css['atrule'].inside.rest = Prism.languages.css\n    var markup = Prism.languages.markup\n    if (markup) {\n      markup.tag.addInlined('style', 'css')\n      Prism.languages.insertBefore(\n        'inside',\n        'attr-value',\n        {\n          'style-attr': {\n            pattern: /\\s*style=(\"|')(?:\\\\[\\s\\S]|(?!\\1)[^\\\\])*\\1/i,\n            inside: {\n              'attr-name': {\n                pattern: /^\\s*style/i,\n                inside: markup.tag.inside\n              },\n              punctuation: /^\\s*=\\s*['\"]|['\"]\\s*$/,\n              'attr-value': {\n                pattern: /.+/i,\n                inside: Prism.languages.css\n              }\n            },\n            alias: 'language-css'\n          }\n        },\n        markup.tag\n      )\n    }\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/css.js?");

/***/ })

}]);