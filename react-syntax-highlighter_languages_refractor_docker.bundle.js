"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_docker"],{

/***/ "./node_modules/refractor/lang/docker.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/docker.js ***!
  \***********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = docker\ndocker.displayName = 'docker'\ndocker.aliases = ['dockerfile']\nfunction docker(Prism) {\n  Prism.languages.docker = {\n    keyword: {\n      pattern: /(^\\s*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\\s)/im,\n      lookbehind: true\n    },\n    string: /(\"|')(?:(?!\\1)[^\\\\\\r\\n]|\\\\(?:\\r\\n|[\\s\\S]))*\\1/,\n    comment: /#.*/,\n    punctuation: /---|\\.\\.\\.|[:[\\]{}\\-,|>?]/\n  }\n  Prism.languages.dockerfile = Prism.languages.docker\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/docker.js?");

/***/ })

}]);