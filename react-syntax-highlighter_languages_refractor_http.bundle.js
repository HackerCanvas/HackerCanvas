"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_http"],{

/***/ "./node_modules/refractor/lang/http.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/http.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = http\nhttp.displayName = 'http'\nhttp.aliases = []\nfunction http(Prism) {\n  ;(function(Prism) {\n    Prism.languages.http = {\n      'request-line': {\n        pattern: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\\s(?:https?:\\/\\/|\\/)\\S+\\sHTTP\\/[0-9.]+/m,\n        inside: {\n          // HTTP Verb\n          property: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\\b/,\n          // Path or query argument\n          'attr-name': /:\\w+/\n        }\n      },\n      'response-status': {\n        pattern: /^HTTP\\/1.[01] \\d+.*/m,\n        inside: {\n          // Status, e.g. 200 OK\n          property: {\n            pattern: /(^HTTP\\/1.[01] )\\d+.*/i,\n            lookbehind: true\n          }\n        }\n      },\n      // HTTP header name\n      'header-name': {\n        pattern: /^[\\w-]+:(?=.)/m,\n        alias: 'keyword'\n      }\n    } // Create a mapping of Content-Type headers to language definitions\n    var langs = Prism.languages\n    var httpLanguages = {\n      'application/javascript': langs.javascript,\n      'application/json': langs.json || langs.javascript,\n      'application/xml': langs.xml,\n      'text/xml': langs.xml,\n      'text/html': langs.html,\n      'text/css': langs.css\n    } // Declare which types can also be suffixes\n    var suffixTypes = {\n      'application/json': true,\n      'application/xml': true\n    }\n    /**\n     * Returns a pattern for the given content type which matches it and any type which has it as a suffix.\n     *\n     * @param {string} contentType\n     * @returns {string}\n     */\n    function getSuffixPattern(contentType) {\n      var suffix = contentType.replace(/^[a-z]+\\//, '')\n      var suffixPattern = '\\\\w+/(?:[\\\\w.-]+\\\\+)+' + suffix + '(?![+\\\\w.-])'\n      return '(?:' + contentType + '|' + suffixPattern + ')'\n    } // Insert each content type parser that has its associated language\n    // currently loaded.\n    var options\n    for (var contentType in httpLanguages) {\n      if (httpLanguages[contentType]) {\n        options = options || {}\n        var pattern = suffixTypes[contentType]\n          ? getSuffixPattern(contentType)\n          : contentType\n        options[contentType] = {\n          pattern: RegExp(\n            '(content-type:\\\\s*' +\n              pattern +\n              '[\\\\s\\\\S]*?)(?:\\\\r?\\\\n|\\\\r){2}[\\\\s\\\\S]*',\n            'i'\n          ),\n          lookbehind: true,\n          inside: {\n            rest: httpLanguages[contentType]\n          }\n        }\n      }\n    }\n    if (options) {\n      Prism.languages.insertBefore('http', 'header-name', options)\n    }\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/http.js?");

/***/ })

}]);