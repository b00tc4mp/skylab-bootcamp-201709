(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = helloWorld;
function helloWorld() {
    console.log('Hello, World!');
}
},{}],2:[function(require,module,exports){
'use strict';

var _helloWorld = require('./helloWorld');

var _helloWorld2 = _interopRequireDefault(_helloWorld);

var _math = require('./math');

var _math2 = _interopRequireDefault(_math);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _helloWorld2.default)();

console.log('sum(1, 2) = ' + (0, _math2.default)(1, 2));
console.log('div(1, 2) = ' + (0, _math.div)(1, 2));
console.log('mul(2, 3) = ' + (0, _math.mul)(2, 3));
},{"./helloWorld":1,"./math":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function sum(a, b) {
    return a + b;
}

function div(a, b) {
    return a / b;
}

function mul(a, b) {
    return a * b;
}

exports.default = sum;
exports.div = div;
exports.mul = mul;
},{}]},{},[1,2,3]);
