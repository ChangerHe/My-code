"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hello = (function () {
    function Hello() {
    }
    return Hello;
}());
exports.Hello = Hello;
var myname = 'aa';
myname = 11;
var Person = (function () {
    function Person() {
    }
    return Person;
}());
var Changer = new Person();
Changer.name = "Changer";
Changer.age = 11;
function test(a, b, c) {
    if (c === void 0) { c = "xx"; }
    console.log(a);
    console.log(b);
    console.log(c);
}
test('aa');
function getScode() {
    return {
        code: 'IBM',
        price: {
            price1: 300,
            price2: 200
        }
    };
}
var _a = getScode(), code = _a.code, price = _a.price;
console.log(code);
console.log(price);
function getName(name) {
    var _this = this;
    this.name = name;
    setInterval(function () {
        console.log(_this.name);
    }, 1000);
}
new getName('aaa');
function timer() {
    for (var a = 0; a < 5; a++) {
        setInterval(function () {
            console.log(a);
        }, 1000);
    }
}
timer();
var Person1 = (function () {
    function Person1(name) {
        console.log(this.name);
    }
    Person1.prototype.eat = function () {
        console.log(this.name);
    };
    return Person1;
}());
var p1 = new Person1();
p1.name = 'Batman';
p1.eat();
