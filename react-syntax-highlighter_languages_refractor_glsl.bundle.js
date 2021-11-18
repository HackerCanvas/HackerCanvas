"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_glsl"],{

/***/ "./node_modules/refractor/lang/glsl.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/glsl.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = glsl\nglsl.displayName = 'glsl'\nglsl.aliases = []\nfunction glsl(Prism) {\n  Prism.languages.glsl = Prism.languages.extend('clike', {\n    comment: [/\\/\\*[\\s\\S]*?\\*\\//, /\\/\\/(?:\\\\(?:\\r\\n|[\\s\\S])|[^\\\\\\r\\n])*/],\n    number: /(?:\\b0x[\\da-f]+|(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:e[+-]?\\d+)?)[ulf]*/i,\n    keyword: /\\b(?:attribute|const|uniform|varying|buffer|shared|coherent|volatile|restrict|readonly|writeonly|atomic_uint|layout|centroid|flat|smooth|noperspective|patch|sample|break|continue|do|for|while|switch|case|default|if|else|subroutine|in|out|inout|float|double|int|void|bool|true|false|invariant|precise|discard|return|d?mat[234](?:x[234])?|[ibdu]?vec[234]|uint|lowp|mediump|highp|precision|[iu]?sampler[123]D|[iu]?samplerCube|sampler[12]DShadow|samplerCubeShadow|[iu]?sampler[12]DArray|sampler[12]DArrayShadow|[iu]?sampler2DRect|sampler2DRectShadow|[iu]?samplerBuffer|[iu]?sampler2DMS(?:Array)?|[iu]?samplerCubeArray|samplerCubeArrayShadow|[iu]?image[123]D|[iu]?image2DRect|[iu]?imageCube|[iu]?imageBuffer|[iu]?image[12]DArray|[iu]?imageCubeArray|[iu]?image2DMS(?:Array)?|struct|common|partition|active|asm|class|union|enum|typedef|template|this|resource|goto|inline|noinline|public|static|extern|external|interface|long|short|half|fixed|unsigned|superp|input|output|hvec[234]|fvec[234]|sampler3DRect|filter|sizeof|cast|namespace|using)\\b/\n  })\n  Prism.languages.insertBefore('glsl', 'comment', {\n    preprocessor: {\n      pattern: /(^[ \\t]*)#(?:(?:define|undef|if|ifdef|ifndef|else|elif|endif|error|pragma|extension|version|line)\\b)?/m,\n      lookbehind: true,\n      alias: 'builtin'\n    }\n  })\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/glsl.js?");

/***/ })

}]);