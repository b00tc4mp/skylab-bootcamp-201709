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