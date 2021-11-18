"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_io"],{

/***/ "./node_modules/refractor/lang/io.js":
/*!*******************************************!*\
  !*** ./node_modules/refractor/lang/io.js ***!
  \*******************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = io\nio.displayName = 'io'\nio.aliases = []\nfunction io(Prism) {\n  Prism.languages.io = {\n    comment: [\n      {\n        pattern: /(^|[^\\\\])\\/\\*[\\s\\S]*?(?:\\*\\/|$)/,\n        lookbehind: true\n      },\n      {\n        pattern: /(^|[^\\\\])\\/\\/.*/,\n        lookbehind: true\n      },\n      {\n        pattern: /(^|[^\\\\])#.*/,\n        lookbehind: true\n      }\n    ],\n    'triple-quoted-string': {\n      pattern: /\"\"\"(?:\\\\[\\s\\S]|(?!\"\"\")[^\\\\])*\"\"\"/,\n      greedy: true,\n      alias: 'string'\n    },\n    string: {\n      pattern: /\"(?:\\\\.|[^\\\\\\r\\n\"])*\"/,\n      greedy: true\n    },\n    keyword: /\\b(?:activate|activeCoroCount|asString|block|break|catch|clone|collectGarbage|compileString|continue|do|doFile|doMessage|doString|else|elseif|exit|for|foreach|forward|getSlot|getEnvironmentVariable|hasSlot|if|ifFalse|ifNil|ifNilEval|ifTrue|isActive|isNil|isResumable|list|message|method|parent|pass|pause|perform|performWithArgList|print|println|proto|raise|raiseResumable|removeSlot|resend|resume|schedulerSleepSeconds|self|sender|setSchedulerSleepSeconds|setSlot|shallowCopy|slotNames|super|system|then|thisBlock|thisContext|call|try|type|uniqueId|updateSlot|wait|while|write|yield)\\b/,\n    builtin: /\\b(?:Array|AudioDevice|AudioMixer|Block|Box|Buffer|CFunction|CGI|Color|Curses|DBM|DNSResolver|DOConnection|DOProxy|DOServer|Date|Directory|Duration|DynLib|Error|Exception|FFT|File|Fnmatch|Font|Future|GL|GLE|GLScissor|GLU|GLUCylinder|GLUQuadric|GLUSphere|GLUT|Host|Image|Importer|LinkList|List|Lobby|Locals|MD5|MP3Decoder|MP3Encoder|Map|Message|Movie|Notification|Number|Object|OpenGL|Point|Protos|Regex|SGML|SGMLElement|SGMLParser|SQLite|Server|Sequence|ShowMessage|SleepyCat|SleepyCatCursor|Socket|SocketManager|Sound|Soup|Store|String|Tree|UDPSender|UPDReceiver|URL|User|Warning|WeakLink|Random|BigNum|Sequence)\\b/,\n    boolean: /\\b(?:true|false|nil)\\b/,\n    number: /\\b0x[\\da-f]+\\b|(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:e-?\\d+)?/i,\n    operator: /[=!*/%+-^&|]=|>>?=?|<<?=?|:?:?=|\\+\\+?|--?|\\*\\*?|\\/\\/?|%|\\|\\|?|&&?|(\\b(?:return|and|or|not)\\b)|@@?|\\?\\??|\\.\\./,\n    punctuation: /[{}[\\];(),.:]/\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/io.js?");

/***/ })

}]);