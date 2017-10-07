var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person(name) {
        this.name = name;
        console.log('haha');
    }
    Person.prototype.eat = function () {
        console.log(this.name + 'is eating');
    };
    return Person;
}());
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    Employee.prototype.work = function () {
        _super.prototype.eat.call(this);
        console.log(this.name + 'is working');
    };
    return Employee;
}(Person));
var worker1 = new Employee('Changer', '111');
worker1.work();
