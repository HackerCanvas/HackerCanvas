"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_applescript"],{

/***/ "./node_modules/refractor/lang/applescript.js":
/*!****************************************************!*\
  !*** ./node_modules/refractor/lang/applescript.js ***!
  \****************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = applescript\napplescript.displayName = 'applescript'\napplescript.aliases = []\nfunction applescript(Prism) {\n  Prism.languages.applescript = {\n    comment: [\n      // Allow one level of nesting\n      /\\(\\*(?:\\(\\*[\\s\\S]*?\\*\\)|[\\s\\S])*?\\*\\)/,\n      /--.+/,\n      /#.+/\n    ],\n    string: /\"(?:\\\\.|[^\"\\\\\\r\\n])*\"/,\n    number: /(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:e-?\\d+)?\\b/i,\n    operator: [\n      /[&=≠≤≥*+\\-\\/÷^]|[<>]=?/,\n      /\\b(?:(?:start|begin|end)s? with|(?:(?:does not|doesn't) contain|contains?)|(?:is|isn't|is not) (?:in|contained by)|(?:(?:is|isn't|is not) )?(?:greater|less) than(?: or equal)?(?: to)?|(?:(?:does not|doesn't) come|comes) (?:before|after)|(?:is|isn't|is not) equal(?: to)?|(?:(?:does not|doesn't) equal|equals|equal to|isn't|is not)|(?:a )?(?:ref(?: to)?|reference to)|(?:and|or|div|mod|as|not))\\b/\n    ],\n    keyword: /\\b(?:about|above|after|against|apart from|around|aside from|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|continue|copy|does|eighth|else|end|equal|error|every|exit|false|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|instead of|into|is|it|its|last|local|me|middle|my|ninth|of|on|onto|out of|over|prop|property|put|repeat|return|returning|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|true|try|until|where|while|whose|with|without)\\b/,\n    class: {\n      pattern: /\\b(?:alias|application|boolean|class|constant|date|file|integer|list|number|POSIX file|real|record|reference|RGB color|script|text|centimetres|centimeters|feet|inches|kilometres|kilometers|metres|meters|miles|yards|square feet|square kilometres|square kilometers|square metres|square meters|square miles|square yards|cubic centimetres|cubic centimeters|cubic feet|cubic inches|cubic metres|cubic meters|cubic yards|gallons|litres|liters|quarts|grams|kilograms|ounces|pounds|degrees Celsius|degrees Fahrenheit|degrees Kelvin)\\b/,\n      alias: 'builtin'\n    },\n    punctuation: /[{}():,¬«»《》]/\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/applescript.js?");

/***/ })

}]);