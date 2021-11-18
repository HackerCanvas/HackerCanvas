"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_project"] = self["webpackChunktest_project"] || []).push([["react-syntax-highlighter_languages_refractor_asm6502"],{

/***/ "./node_modules/refractor/lang/asm6502.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/asm6502.js ***!
  \************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = asm6502\nasm6502.displayName = 'asm6502'\nasm6502.aliases = []\nfunction asm6502(Prism) {\n  Prism.languages.asm6502 = {\n    comment: /;.*/,\n    directive: {\n      pattern: /\\.\\w+(?= )/,\n      alias: 'keyword'\n    },\n    string: /([\"'`])(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*\\1/,\n    opcode: {\n      pattern: /\\b(?:adc|and|asl|bcc|bcs|beq|bit|bmi|bne|bpl|brk|bvc|bvs|clc|cld|cli|clv|cmp|cpx|cpy|dec|dex|dey|eor|inc|inx|iny|jmp|jsr|lda|ldx|ldy|lsr|nop|ora|pha|php|pla|plp|rol|ror|rti|rts|sbc|sec|sed|sei|sta|stx|sty|tax|tay|tsx|txa|txs|tya|ADC|AND|ASL|BCC|BCS|BEQ|BIT|BMI|BNE|BPL|BRK|BVC|BVS|CLC|CLD|CLI|CLV|CMP|CPX|CPY|DEC|DEX|DEY|EOR|INC|INX|INY|JMP|JSR|LDA|LDX|LDY|LSR|NOP|ORA|PHA|PHP|PLA|PLP|ROL|ROR|RTI|RTS|SBC|SEC|SED|SEI|STA|STX|STY|TAX|TAY|TSX|TXA|TXS|TYA)\\b/,\n      alias: 'property'\n    },\n    hexnumber: {\n      pattern: /#?\\$[\\da-f]{2,4}/i,\n      alias: 'string'\n    },\n    binarynumber: {\n      pattern: /#?%[01]+/,\n      alias: 'string'\n    },\n    decimalnumber: {\n      pattern: /#?\\d+/,\n      alias: 'string'\n    },\n    register: {\n      pattern: /\\b[xya]\\b/i,\n      alias: 'variable'\n    }\n  }\n}\n\n\n//# sourceURL=webpack://test-project/./node_modules/refractor/lang/asm6502.js?");

/***/ })

}]);