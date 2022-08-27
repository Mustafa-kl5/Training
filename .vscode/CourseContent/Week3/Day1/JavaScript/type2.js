var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Dept = /** @class */ (function () {
    function Dept(n1) {
        this.employees = [];
        this.name = n1;
    }
    Dept.prototype.print = function () {
        console.log("hi sir " + this.name);
    };
    Dept.prototype.addEmployee = function (name1) {
        this.employees.push(name1);
    };
    Dept.prototype.printEmployeeInfo = function () {
        console.log("array length " + this.employees.length);
        this.employees.forEach(function (element) {
            console.log("name " + element);
        });
    };
    return Dept;
}());
var obj1 = new Dept("mustafa");
console.log(obj1);
obj1.print();
obj1.addEmployee("ahmad");
obj1.addEmployee("kamel");
obj1.addEmployee("amer");
obj1.addEmployee("lena");
obj1.printEmployeeInfo();
var Person = /** @class */ (function () {
    function Person(n1, age) {
        this.name = n1;
        this.Age = age;
    }
    Person.prototype.print = function () {
        console.log("Person name ".concat(this.name, " "));
        console.log("Person Age ".concat(this.Age, " "));
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, agr, se, cl) {
        var _this = _super.call(this, name, agr) || this;
        _this.classLucture = [];
        _this.Specialty = se;
        _this.classLucture.push(cl);
        return _this;
    }
    Student.prototype.print = function () {
        console.log("Person name ".concat(this.name, " "));
        console.log("Person Age ".concat(this.Age, " "));
        console.log("student Specialty ".concat(this.Specialty, " "));
        this.classLucture.forEach(function (item) {
            console.log("student class  ".concat(item, " "));
        });
    };
    Student.prototype.addClass = function (item) {
        this.classLucture.push(item);
        console.log("".concat(item, " has been insert"));
    };
    return Student;
}(Person));
var p1 = new Person("mustafa", 21);
p1.print();
var s1 = new Student("AHMED", 50, "MATH", "PROP");
s1.addClass("CALC");
s1.addClass("NUM");
s1.addClass("CALC3");
s1.addClass("DAF");
s1.print();
var car = /** @class */ (function () {
    function car(n, m) {
        this.name = n;
        this.company = m;
    }
    return car;
}());
var Bmw = /** @class */ (function (_super) {
    __extends(Bmw, _super);
    function Bmw() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bmw.prototype.print = function () {
        console.log(this.name);
        console.log(this.company);
    };
    return Bmw;
}(car));
var c1 = new Bmw("m5", 2015);
c1.print();
