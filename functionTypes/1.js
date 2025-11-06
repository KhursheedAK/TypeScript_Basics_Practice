"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLeapYear = exports.twoFer = void 0;
// Part 1
var twoFer = function (name) {
    if (name === void 0) { name = 'khursheed'; }
    return "One for ".concat(name, ", one for me");
};
exports.twoFer = twoFer;
console.log((0, exports.twoFer)());
console.log((0, exports.twoFer)('Veronica'));
// Part 2
var isLeapYear = function (year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
};
exports.isLeapYear = isLeapYear;
console.log((0, exports.isLeapYear)(2013));
