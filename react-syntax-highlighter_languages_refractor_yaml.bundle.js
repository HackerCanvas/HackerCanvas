"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_yaml"],{

/***/ "./node_modules/refractor/lang/yaml.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/yaml.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = yaml\nyaml.displayName = 'yaml'\nyaml.aliases = ['yml']\nfunction yaml(Prism) {\n  Prism.languages.yaml = {\n    scalar: {\n      pattern: /([\\-:]\\s*(?:![^\\s]+)?[ \\t]*[|>])[ \\t]*(?:((?:\\r?\\n|\\r)[ \\t]+)[^\\r\\n]+(?:\\2[^\\r\\n]+)*)/,\n      lookbehind: true,\n      alias: 'string'\n    },\n    comment: /#.*/,\n    key: {\n      pattern: /(\\s*(?:^|[:\\-,[{\\r\\n?])[ \\t]*(?:![^\\s]+)?[ \\t]*)[^\\r\\n{[\\]},#\\s]+?(?=\\s*:\\s)/,\n      lookbehind: true,\n      alias: 'atrule'\n    },\n    directive: {\n      pattern: /(^[ \\t]*)%.+/m,\n      lookbehind: true,\n      alias: 'important'\n    },\n    datetime: {\n      pattern: /([:\\-,[{]\\s*(?:![^\\s]+)?[ \\t]*)(?:\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \\t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?[ \\t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?)?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?)(?=[ \\t]*(?:$|,|]|}))/m,\n      lookbehind: true,\n      alias: 'number'\n    },\n    boolean: {\n      pattern: /([:\\-,[{]\\s*(?:![^\\s]+)?[ \\t]*)(?:true|false)[ \\t]*(?=$|,|]|})/im,\n      lookbehind: true,\n      alias: 'important'\n    },\n    null: {\n      pattern: /([:\\-,[{]\\s*(?:![^\\s]+)?[ \\t]*)(?:null|~)[ \\t]*(?=$|,|]|})/im,\n      lookbehind: true,\n      alias: 'important'\n    },\n    string: {\n      pattern: /([:\\-,[{]\\s*(?:![^\\s]+)?[ \\t]*)(\"|')(?:(?!\\2)[^\\\\\\r\\n]|\\\\.)*\\2(?=[ \\t]*(?:$|,|]|}|\\s*#))/m,\n      lookbehind: true,\n      greedy: true\n    },\n    number: {\n      pattern: /([:\\-,[{]\\s*(?:![^\\s]+)?[ \\t]*)[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+\\.?\\d*|\\.?\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)[ \\t]*(?=$|,|]|})/im,\n      lookbehind: true\n    },\n    tag: /![^\\s]+/,\n    important: /[&*][\\w]+/,\n    punctuation: /---|[:[\\]{}\\-,|>?]|\\.\\.\\./\n  }\n  Prism.languages.yml = Prism.languages.yaml\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/yaml.js?");

/***/ })

}]);