"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_liquid"],{

/***/ "./node_modules/refractor/lang/liquid.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/liquid.js ***!
  \***********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = liquid\nliquid.displayName = 'liquid'\nliquid.aliases = []\nfunction liquid(Prism) {\n  Prism.languages.liquid = {\n    keyword: /\\b(?:comment|endcomment|if|elsif|else|endif|unless|endunless|for|endfor|case|endcase|when|in|break|assign|continue|limit|offset|range|reversed|raw|endraw|capture|endcapture|tablerow|endtablerow)\\b/,\n    number: /\\b0b[01]+\\b|\\b0x[\\da-f]*\\.?[\\da-fp-]+\\b|(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:e[+-]?\\d+)?[df]?/i,\n    operator: {\n      pattern: /(^|[^.])(?:\\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\\|[|=]?|\\*=?|\\/=?|%=?|\\^=?|[?:~])/m,\n      lookbehind: true\n    },\n    function: {\n      pattern: /(^|[\\s;|&])(?:append|prepend|capitalize|cycle|cols|increment|decrement|abs|at_least|at_most|ceil|compact|concat|date|default|divided_by|downcase|escape|escape_once|first|floor|join|last|lstrip|map|minus|modulo|newline_to_br|plus|remove|remove_first|replace|replace_first|reverse|round|rstrip|size|slice|sort|sort_natural|split|strip|strip_html|strip_newlines|times|truncate|truncatewords|uniq|upcase|url_decode|url_encode|include|paginate)(?=$|[\\s;|&])/,\n      lookbehind: true\n    }\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/liquid.js?");

/***/ })

}]);