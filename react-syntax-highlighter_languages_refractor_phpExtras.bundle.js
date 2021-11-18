"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_phpExtras"],{

/***/ "./node_modules/refractor/lang/markup-templating.js":
/*!**********************************************************!*\
  !*** ./node_modules/refractor/lang/markup-templating.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = markupTemplating\nmarkupTemplating.displayName = 'markupTemplating'\nmarkupTemplating.aliases = []\nfunction markupTemplating(Prism) {\n  ;(function(Prism) {\n    /**\n     * Returns the placeholder for the given language id and index.\n     *\n     * @param {string} language\n     * @param {string|number} index\n     * @returns {string}\n     */\n    function getPlaceholder(language, index) {\n      return '___' + language.toUpperCase() + index + '___'\n    }\n    Object.defineProperties((Prism.languages['markup-templating'] = {}), {\n      buildPlaceholders: {\n        /**\n         * Tokenize all inline templating expressions matching `placeholderPattern`.\n         *\n         * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns\n         * `true` will be replaced.\n         *\n         * @param {object} env The environment of the `before-tokenize` hook.\n         * @param {string} language The language id.\n         * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.\n         * @param {(match: string) => boolean} [replaceFilter]\n         */\n        value: function(env, language, placeholderPattern, replaceFilter) {\n          if (env.language !== language) {\n            return\n          }\n          var tokenStack = (env.tokenStack = [])\n          env.code = env.code.replace(placeholderPattern, function(match) {\n            if (typeof replaceFilter === 'function' && !replaceFilter(match)) {\n              return match\n            }\n            var i = tokenStack.length\n            var placeholder // Check for existing strings\n            while (\n              env.code.indexOf((placeholder = getPlaceholder(language, i))) !==\n              -1\n            )\n              ++i // Create a sparse array\n            tokenStack[i] = match\n            return placeholder\n          }) // Switch the grammar to markup\n          env.grammar = Prism.languages.markup\n        }\n      },\n      tokenizePlaceholders: {\n        /**\n         * Replace placeholders with proper tokens after tokenizing.\n         *\n         * @param {object} env The environment of the `after-tokenize` hook.\n         * @param {string} language The language id.\n         */\n        value: function(env, language) {\n          if (env.language !== language || !env.tokenStack) {\n            return\n          } // Switch the grammar back\n          env.grammar = Prism.languages[language]\n          var j = 0\n          var keys = Object.keys(env.tokenStack)\n          function walkTokens(tokens) {\n            for (var i = 0; i < tokens.length; i++) {\n              // all placeholders are replaced already\n              if (j >= keys.length) {\n                break\n              }\n              var token = tokens[i]\n              if (\n                typeof token === 'string' ||\n                (token.content && typeof token.content === 'string')\n              ) {\n                var k = keys[j]\n                var t = env.tokenStack[k]\n                var s = typeof token === 'string' ? token : token.content\n                var placeholder = getPlaceholder(language, k)\n                var index = s.indexOf(placeholder)\n                if (index > -1) {\n                  ++j\n                  var before = s.substring(0, index)\n                  var middle = new Prism.Token(\n                    language,\n                    Prism.tokenize(t, env.grammar),\n                    'language-' + language,\n                    t\n                  )\n                  var after = s.substring(index + placeholder.length)\n                  var replacement = []\n                  if (before) {\n                    replacement.push.apply(replacement, walkTokens([before]))\n                  }\n                  replacement.push(middle)\n                  if (after) {\n                    replacement.push.apply(replacement, walkTokens([after]))\n                  }\n                  if (typeof token === 'string') {\n                    tokens.splice.apply(tokens, [i, 1].concat(replacement))\n                  } else {\n                    token.content = replacement\n                  }\n                }\n              } else if (\n                token.content\n                /* && typeof token.content !== 'string' */\n              ) {\n                walkTokens(token.content)\n              }\n            }\n            return tokens\n          }\n          walkTokens(env.tokens)\n        }\n      }\n    })\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/markup-templating.js?");

/***/ }),

/***/ "./node_modules/refractor/lang/php-extras.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/php-extras.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar refractorPhp = __webpack_require__(/*! ./php.js */ \"./node_modules/refractor/lang/php.js\")\nmodule.exports = phpExtras\nphpExtras.displayName = 'phpExtras'\nphpExtras.aliases = []\nfunction phpExtras(Prism) {\n  Prism.register(refractorPhp)\n  Prism.languages.insertBefore('php', 'variable', {\n    this: /\\$this\\b/,\n    global: /\\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\\b/,\n    scope: {\n      pattern: /\\b[\\w\\\\]+::/,\n      inside: {\n        keyword: /static|self|parent/,\n        punctuation: /::|\\\\/\n      }\n    }\n  })\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/php-extras.js?");

/***/ }),

/***/ "./node_modules/refractor/lang/php.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/php.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar refractorMarkupTemplating = __webpack_require__(/*! ./markup-templating.js */ \"./node_modules/refractor/lang/markup-templating.js\")\nmodule.exports = php\nphp.displayName = 'php'\nphp.aliases = []\nfunction php(Prism) {\n  Prism.register(refractorMarkupTemplating)\n  /**\n   * Original by Aaron Harun: http://aahacreative.com/2012/07/31/php-syntax-highlighting-prism/\n   * Modified by Miles Johnson: http://milesj.me\n   *\n   * Supports the following:\n   *      - Extends clike syntax\n   *      - Support for PHP 5.3+ (namespaces, traits, generators, etc)\n   *      - Smarter constant and function matching\n   *\n   * Adds the following new token classes:\n   *      constant, delimiter, variable, function, package\n   */\n  ;(function(Prism) {\n    Prism.languages.php = Prism.languages.extend('clike', {\n      keyword: /\\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\\b/i,\n      boolean: {\n        pattern: /\\b(?:false|true)\\b/i,\n        alias: 'constant'\n      },\n      constant: [/\\b[A-Z_][A-Z0-9_]*\\b/, /\\b(?:null)\\b/i],\n      comment: {\n        pattern: /(^|[^\\\\])(?:\\/\\*[\\s\\S]*?\\*\\/|\\/\\/.*)/,\n        lookbehind: true\n      }\n    })\n    Prism.languages.insertBefore('php', 'string', {\n      'shell-comment': {\n        pattern: /(^|[^\\\\])#.*/,\n        lookbehind: true,\n        alias: 'comment'\n      }\n    })\n    Prism.languages.insertBefore('php', 'comment', {\n      delimiter: {\n        pattern: /\\?>$|^<\\?(?:php(?=\\s)|=)?/i,\n        alias: 'important'\n      }\n    })\n    Prism.languages.insertBefore('php', 'keyword', {\n      variable: /\\$+(?:\\w+\\b|(?={))/i,\n      package: {\n        pattern: /(\\\\|namespace\\s+|use\\s+)[\\w\\\\]+/,\n        lookbehind: true,\n        inside: {\n          punctuation: /\\\\/\n        }\n      }\n    }) // Must be defined after the function pattern\n    Prism.languages.insertBefore('php', 'operator', {\n      property: {\n        pattern: /(->)[\\w]+/,\n        lookbehind: true\n      }\n    })\n    var string_interpolation = {\n      pattern: /{\\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\\\{])\\$+(?:\\w+(?:\\[.+?]|->\\w+)*)/,\n      lookbehind: true,\n      inside: {\n        rest: Prism.languages.php\n      }\n    }\n    Prism.languages.insertBefore('php', 'string', {\n      'nowdoc-string': {\n        pattern: /<<<'([^']+)'(?:\\r\\n?|\\n)(?:.*(?:\\r\\n?|\\n))*?\\1;/,\n        greedy: true,\n        alias: 'string',\n        inside: {\n          delimiter: {\n            pattern: /^<<<'[^']+'|[a-z_]\\w*;$/i,\n            alias: 'symbol',\n            inside: {\n              punctuation: /^<<<'?|[';]$/\n            }\n          }\n        }\n      },\n      'heredoc-string': {\n        pattern: /<<<(?:\"([^\"]+)\"(?:\\r\\n?|\\n)(?:.*(?:\\r\\n?|\\n))*?\\1;|([a-z_]\\w*)(?:\\r\\n?|\\n)(?:.*(?:\\r\\n?|\\n))*?\\2;)/i,\n        greedy: true,\n        alias: 'string',\n        inside: {\n          delimiter: {\n            pattern: /^<<<(?:\"[^\"]+\"|[a-z_]\\w*)|[a-z_]\\w*;$/i,\n            alias: 'symbol',\n            inside: {\n              punctuation: /^<<<\"?|[\";]$/\n            }\n          },\n          interpolation: string_interpolation // See below\n        }\n      },\n      'single-quoted-string': {\n        pattern: /'(?:\\\\[\\s\\S]|[^\\\\'])*'/,\n        greedy: true,\n        alias: 'string'\n      },\n      'double-quoted-string': {\n        pattern: /\"(?:\\\\[\\s\\S]|[^\\\\\"])*\"/,\n        greedy: true,\n        alias: 'string',\n        inside: {\n          interpolation: string_interpolation // See below\n        }\n      }\n    }) // The different types of PHP strings \"replace\" the C-like standard string\n    delete Prism.languages.php['string']\n    Prism.hooks.add('before-tokenize', function(env) {\n      if (!/<\\?/.test(env.code)) {\n        return\n      }\n      var phpPattern = /<\\?(?:[^\"'/#]|\\/(?![*/])|(\"|')(?:\\\\[\\s\\S]|(?!\\1)[^\\\\])*\\1|(?:\\/\\/|#)(?:[^?\\n\\r]|\\?(?!>))*|\\/\\*[\\s\\S]*?(?:\\*\\/|$))*?(?:\\?>|$)/gi\n      Prism.languages['markup-templating'].buildPlaceholders(\n        env,\n        'php',\n        phpPattern\n      )\n    })\n    Prism.hooks.add('after-tokenize', function(env) {\n      Prism.languages['markup-templating'].tokenizePlaceholders(env, 'php')\n    })\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/php.js?");

/***/ })

}]);