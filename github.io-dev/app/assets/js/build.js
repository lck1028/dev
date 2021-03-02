"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _test = _interopRequireDefault(require("./test1.js"));

(0, _test["default"])(4444);
var testArr2 = [1, 2, 3, 4];
var b1 = testArr2[0],
    b2 = testArr2[1],
    b3 = testArr2[2],
    b4 = testArr2[3];
console.log("".concat(b1, ",").concat(b2, ",").concat(b3, ",").concat(b4));

var test2 = function test2(test22) {
  console.log(test22);
  console.log(test22);
};

test2("되는거니?");
console.log(222);