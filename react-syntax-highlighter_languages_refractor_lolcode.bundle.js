"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_lolcode"],{

/***/ "./node_modules/refractor/lang/lolcode.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/lolcode.js ***!
  \************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = lolcode\nlolcode.displayName = 'lolcode'\nlolcode.aliases = []\nfunction lolcode(Prism) {\n  Prism.languages.lolcode = {\n    comment: [/\\bOBTW\\s+[\\s\\S]*?\\s+TLDR\\b/, /\\bBTW.+/],\n    string: {\n      pattern: /\"(?::.|[^\"])*\"/,\n      inside: {\n        variable: /:\\{[^}]+\\}/,\n        symbol: [/:\\([a-f\\d]+\\)/i, /:\\[[^\\]]+\\]/, /:[)>o\":]/]\n      },\n      greedy: true\n    },\n    number: /(?:\\B-)?(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)/,\n    symbol: {\n      pattern: /(^|\\s)(?:A )?(?:YARN|NUMBR|NUMBAR|TROOF|BUKKIT|NOOB)(?=\\s|,|$)/,\n      lookbehind: true,\n      inside: {\n        keyword: /A(?=\\s)/\n      }\n    },\n    label: {\n      pattern: /((?:^|\\s)(?:IM IN YR|IM OUTTA YR) )[a-zA-Z]\\w*/,\n      lookbehind: true,\n      alias: 'string'\n    },\n    function: {\n      pattern: /((?:^|\\s)(?:I IZ|HOW IZ I|IZ) )[a-zA-Z]\\w*/,\n      lookbehind: true\n    },\n    keyword: [\n      {\n        pattern: /(^|\\s)(?:O HAI IM|KTHX|HAI|KTHXBYE|I HAS A|ITZ(?: A)?|R|AN|MKAY|SMOOSH|MAEK|IS NOW(?: A)?|VISIBLE|GIMMEH|O RLY\\?|YA RLY|NO WAI|OIC|MEBBE|WTF\\?|OMG|OMGWTF|GTFO|IM IN YR|IM OUTTA YR|FOUND YR|YR|TIL|WILE|UPPIN|NERFIN|I IZ|HOW IZ I|IF U SAY SO|SRS|HAS A|LIEK(?: A)?|IZ)(?=\\s|,|$)/,\n        lookbehind: true\n      },\n      /'Z(?=\\s|,|$)/\n    ],\n    boolean: {\n      pattern: /(^|\\s)(?:WIN|FAIL)(?=\\s|,|$)/,\n      lookbehind: true\n    },\n    variable: {\n      pattern: /(^|\\s)IT(?=\\s|,|$)/,\n      lookbehind: true\n    },\n    operator: {\n      pattern: /(^|\\s)(?:NOT|BOTH SAEM|DIFFRINT|(?:SUM|DIFF|PRODUKT|QUOSHUNT|MOD|BIGGR|SMALLR|BOTH|EITHER|WON|ALL|ANY) OF)(?=\\s|,|$)/,\n      lookbehind: true\n    },\n    punctuation: /\\.{3}|…|,|!/\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/lolcode.js?");

/***/ })

}]);