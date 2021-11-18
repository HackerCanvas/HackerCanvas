"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_rest"],{

/***/ "./node_modules/refractor/lang/rest.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/rest.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = rest\nrest.displayName = 'rest'\nrest.aliases = []\nfunction rest(Prism) {\n  Prism.languages.rest = {\n    table: [\n      {\n        pattern: /(\\s*)(?:\\+[=-]+)+\\+(?:\\r?\\n|\\r)(?:\\1(?:[+|].+)+[+|](?:\\r?\\n|\\r))+\\1(?:\\+[=-]+)+\\+/,\n        lookbehind: true,\n        inside: {\n          punctuation: /\\||(?:\\+[=-]+)+\\+/\n        }\n      },\n      {\n        pattern: /(\\s*)(?:=+ +)+=+(?:(?:\\r?\\n|\\r)\\1.+)+(?:\\r?\\n|\\r)\\1(?:=+ +)+=+(?=(?:\\r?\\n|\\r){2}|\\s*$)/,\n        lookbehind: true,\n        inside: {\n          punctuation: /[=-]+/\n        }\n      }\n    ],\n    // Directive-like patterns\n    'substitution-def': {\n      pattern: /(^\\s*\\.\\. )\\|(?:[^|\\s](?:[^|]*[^|\\s])?)\\| [^:]+::/m,\n      lookbehind: true,\n      inside: {\n        substitution: {\n          pattern: /^\\|(?:[^|\\s]|[^|\\s][^|]*[^|\\s])\\|/,\n          alias: 'attr-value',\n          inside: {\n            punctuation: /^\\||\\|$/\n          }\n        },\n        directive: {\n          pattern: /( +)[^:]+::/,\n          lookbehind: true,\n          alias: 'function',\n          inside: {\n            punctuation: /::$/\n          }\n        }\n      }\n    },\n    'link-target': [\n      {\n        pattern: /(^\\s*\\.\\. )\\[[^\\]]+\\]/m,\n        lookbehind: true,\n        alias: 'string',\n        inside: {\n          punctuation: /^\\[|\\]$/\n        }\n      },\n      {\n        pattern: /(^\\s*\\.\\. )_(?:`[^`]+`|(?:[^:\\\\]|\\\\.)+):/m,\n        lookbehind: true,\n        alias: 'string',\n        inside: {\n          punctuation: /^_|:$/\n        }\n      }\n    ],\n    directive: {\n      pattern: /(^\\s*\\.\\. )[^:]+::/m,\n      lookbehind: true,\n      alias: 'function',\n      inside: {\n        punctuation: /::$/\n      }\n    },\n    comment: {\n      // The two alternatives try to prevent highlighting of blank comments\n      pattern: /(^\\s*\\.\\.)(?:(?: .+)?(?:(?:\\r?\\n|\\r).+)+| .+)(?=(?:\\r?\\n|\\r){2}|$)/m,\n      lookbehind: true\n    },\n    title: [\n      // Overlined and underlined\n      {\n        pattern: /^(([!\"#$%&'()*+,\\-.\\/:;<=>?@\\[\\\\\\]^_`{|}~])\\2+)(?:\\r?\\n|\\r).+(?:\\r?\\n|\\r)\\1$/m,\n        inside: {\n          punctuation: /^[!\"#$%&'()*+,\\-.\\/:;<=>?@\\[\\\\\\]^_`{|}~]+|[!\"#$%&'()*+,\\-.\\/:;<=>?@\\[\\\\\\]^_`{|}~]+$/,\n          important: /.+/\n        }\n      }, // Underlined only\n      {\n        pattern: /(^|(?:\\r?\\n|\\r){2}).+(?:\\r?\\n|\\r)([!\"#$%&'()*+,\\-.\\/:;<=>?@\\[\\\\\\]^_`{|}~])\\2+(?=\\r?\\n|\\r|$)/,\n        lookbehind: true,\n        inside: {\n          punctuation: /[!\"#$%&'()*+,\\-.\\/:;<=>?@\\[\\\\\\]^_`{|}~]+$/,\n          important: /.+/\n        }\n      }\n    ],\n    hr: {\n      pattern: /((?:\\r?\\n|\\r){2})([!\"#$%&'()*+,\\-.\\/:;<=>?@\\[\\\\\\]^_`{|}~])\\2{3,}(?=(?:\\r?\\n|\\r){2})/,\n      lookbehind: true,\n      alias: 'punctuation'\n    },\n    field: {\n      pattern: /(^\\s*):[^:\\r\\n]+:(?= )/m,\n      lookbehind: true,\n      alias: 'attr-name'\n    },\n    'command-line-option': {\n      pattern: /(^\\s*)(?:[+-][a-z\\d]|(?:--|\\/)[a-z\\d-]+)(?:[ =](?:[a-z][\\w-]*|<[^<>]+>))?(?:, (?:[+-][a-z\\d]|(?:--|\\/)[a-z\\d-]+)(?:[ =](?:[a-z][\\w-]*|<[^<>]+>))?)*(?=(?:\\r?\\n|\\r)? {2,}\\S)/im,\n      lookbehind: true,\n      alias: 'symbol'\n    },\n    'literal-block': {\n      pattern: /::(?:\\r?\\n|\\r){2}([ \\t]+).+(?:(?:\\r?\\n|\\r)\\1.+)*/,\n      inside: {\n        'literal-block-punctuation': {\n          pattern: /^::/,\n          alias: 'punctuation'\n        }\n      }\n    },\n    'quoted-literal-block': {\n      pattern: /::(?:\\r?\\n|\\r){2}([!\"#$%&'()*+,\\-.\\/:;<=>?@\\[\\\\\\]^_`{|}~]).*(?:(?:\\r?\\n|\\r)\\1.*)*/,\n      inside: {\n        'literal-block-punctuation': {\n          pattern: /^(?:::|([!\"#$%&'()*+,\\-.\\/:;<=>?@\\[\\\\\\]^_`{|}~])\\1*)/m,\n          alias: 'punctuation'\n        }\n      }\n    },\n    'list-bullet': {\n      pattern: /(^\\s*)(?:[*+\\-•‣⁃]|\\(?(?:\\d+|[a-z]|[ivxdclm]+)\\)|(?:\\d+|[a-z]|[ivxdclm]+)\\.)(?= )/im,\n      lookbehind: true,\n      alias: 'punctuation'\n    },\n    'doctest-block': {\n      pattern: /(^\\s*)>>> .+(?:(?:\\r?\\n|\\r).+)*/m,\n      lookbehind: true,\n      inside: {\n        punctuation: /^>>>/\n      }\n    },\n    inline: [\n      {\n        pattern: /(^|[\\s\\-:\\/'\"<(\\[{])(?::[^:]+:`.*?`|`.*?`:[^:]+:|(\\*\\*?|``?|\\|)(?!\\s).*?[^\\s]\\2(?=[\\s\\-.,:;!?\\\\\\/'\")\\]}]|$))/m,\n        lookbehind: true,\n        inside: {\n          bold: {\n            pattern: /(^\\*\\*).+(?=\\*\\*$)/,\n            lookbehind: true\n          },\n          italic: {\n            pattern: /(^\\*).+(?=\\*$)/,\n            lookbehind: true\n          },\n          'inline-literal': {\n            pattern: /(^``).+(?=``$)/,\n            lookbehind: true,\n            alias: 'symbol'\n          },\n          role: {\n            pattern: /^:[^:]+:|:[^:]+:$/,\n            alias: 'function',\n            inside: {\n              punctuation: /^:|:$/\n            }\n          },\n          'interpreted-text': {\n            pattern: /(^`).+(?=`$)/,\n            lookbehind: true,\n            alias: 'attr-value'\n          },\n          substitution: {\n            pattern: /(^\\|).+(?=\\|$)/,\n            lookbehind: true,\n            alias: 'attr-value'\n          },\n          punctuation: /\\*\\*?|``?|\\|/\n        }\n      }\n    ],\n    link: [\n      {\n        pattern: /\\[[^\\]]+\\]_(?=[\\s\\-.,:;!?\\\\\\/'\")\\]}]|$)/,\n        alias: 'string',\n        inside: {\n          punctuation: /^\\[|\\]_$/\n        }\n      },\n      {\n        pattern: /(?:\\b[a-z\\d]+(?:[_.:+][a-z\\d]+)*_?_|`[^`]+`_?_|_`[^`]+`)(?=[\\s\\-.,:;!?\\\\\\/'\")\\]}]|$)/i,\n        alias: 'string',\n        inside: {\n          punctuation: /^_?`|`$|`?_?_$/\n        }\n      }\n    ],\n    // Line block start,\n    // quote attribution,\n    // explicit markup start,\n    // and anonymous hyperlink target shortcut (__)\n    punctuation: {\n      pattern: /(^\\s*)(?:\\|(?= |$)|(?:---?|—|\\.\\.|__)(?= )|\\.\\.$)/m,\n      lookbehind: true\n    }\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/rest.js?");

/***/ })

}]);