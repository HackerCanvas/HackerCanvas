"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_keyman"],{

/***/ "./node_modules/refractor/lang/keyman.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/keyman.js ***!
  \***********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = keyman\nkeyman.displayName = 'keyman'\nkeyman.aliases = []\nfunction keyman(Prism) {\n  Prism.languages.keyman = {\n    comment: /\\bc\\s.*/i,\n    function: /\\[\\s*(?:(?:CTRL|SHIFT|ALT|LCTRL|RCTRL|LALT|RALT|CAPS|NCAPS)\\s+)*(?:[TKU]_[\\w?]+|\".+?\"|'.+?')\\s*\\]/i,\n    // virtual key\n    string: /(\"|').*?\\1/,\n    bold: [\n      // header statements, system stores and variable system stores\n      /&(?:baselayout|bitmap|capsononly|capsalwaysoff|shiftfreescaps|copyright|ethnologuecode|hotkey|includecodes|keyboardversion|kmw_embedcss|kmw_embedjs|kmw_helpfile|kmw_helptext|kmw_rtl|language|layer|layoutfile|message|mnemoniclayout|name|oldcharposmatching|platform|targets|version|visualkeyboard|windowslanguages)\\b/i,\n      /\\b(?:bitmap|bitmaps|caps on only|caps always off|shift frees caps|copyright|hotkey|language|layout|message|name|version)\\b/i\n    ],\n    keyword: /\\b(?:any|baselayout|beep|call|context|deadkey|dk|if|index|layer|notany|nul|outs|platform|return|reset|save|set|store|use)\\b/i,\n    // rule keywords\n    atrule: /\\b(?:ansi|begin|unicode|group|using keys|match|nomatch)\\b/i,\n    // structural keywords\n    number: /\\b(?:U\\+[\\dA-F]+|d\\d+|x[\\da-f]+|\\d+)\\b/i,\n    // U+####, x###, d### characters and numbers\n    operator: /[+>\\\\,()]/,\n    tag: /\\$(?:keyman|kmfl|weaver|keymanweb|keymanonly):/i // prefixes\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/keyman.js?");

/***/ })

}]);