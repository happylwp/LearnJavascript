// var $div = $('div');
// $div.attr('myname', '王福朋');

// function Fn() {}
// Fn.prototype.name = "loner11";
// Fn.prototype.getYear = function() {
//     return 1988;
// };

// var fn = new Fn();
// console.log(fn.name);
// console.log(fn.getYear());

// var person = {};
// Object.defineProperty(person, "name", {
//     writable: false,
//     value: "Nicholas"
// });
// console.log(person.name);
// person.name = "Greg";
// console.log(person.name);

// var person = {};
// Object.defineProperty(person, "name", {
//     configurable: false,
//     value: "Nicholas"
// });
// console.log(person.name);
// delete person.name;
// console.log(person.name);

// Object.defineProperty(person, "name", {
//     configurable: true,
//     value: "Nicholas"
// });

// var book = {
//     _year: 2004,
//     edition: 1
// };

// Object.defineProperty(book, "year", {
//     get: function() {
//         return this._year;
//     },
//     set: function(newValue) {
//         if (newValue > 2004) {
//             this._year = newValue;
//             this.edition += newValue - 2004;
//         }
//     }
// });

// book.year = 2005;
// console.log(book.edition);

// var book = {
//     _year: 2004,
//     edition: 1
// };
// book.__defineGetter__("year", function() {
//     return this._year;
// });
// book.__defineSetter__("year", function(newValue) {
//     if (newValue > 2004) {
//         this._year = newValue;
//         this.edition += newValue - 2004;
//     }
// });
// book.year = 2005;
// console.log(book.edition);

// var book = {};
// Object.defineProperties(book, {
//     _year: {
//         value: 2004
//     },
//     edition: {
//         value: 1
//     },
//     year: {
//         get: function() {
//             return this._year;
//         },
//         set: function(newValue) {
//             if (newValue > 2004) {
//                 this.year = newValue;
//                 this.edition += newValue - 2004;
//             }
//         }
//     }
// });

// var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
// console.log(descriptor.value);
// console.log(descriptor.configurable);

// console.log(typeof descriptor.get);
// var descriptor = Object.getOwnPropertyDescriptor(book, "year");
// console.log(descriptor.value);
// console.log(descriptor.enumerable);
// console.log(typeof descriptor.get());

// function createPerson(name, age, job) {
//     var o = new Object();
//     o.name = name;
//     o.age = age;
//     o.job = job;
//     o.sayName = function() {
//         console.log(this.name);
//     }
//     return o;
// }
// var loner11 = createPerson("loner11", 21, "Software Engineer");
// var maroon = createPerson("maroon", 21, "songer");

// function Person(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.sayName = function() {
//         console.log(this.name);
//     }
// }
// var person1 = new Person("loner11", 21, "Software Engineer");
// var person2 = new Person("maroon", 21, "songer");
// person1.sayName();

// function Person(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     // this.sayName = new Function("console.log(this.name)");
//     this.sayName = sayName;
// }

// function sayName() {
//     console.log(this.name);
// }
// var person1 = new Person("loner11", 21, "Software Engineer");
// var person2 = new Person("maroon", 21, "songer");
// console.log(person1.sayName == person2.sayName);

// function Person() {}
// Person.prototype.name = "loner11";
// Person.prototype.age = 29;
// Person.prototype.job = "Software";
// Person.prototype.sayName = function() {
//     console.log(this.name);
// };
// var person1 = new Person();
// person1.sayName();
// // console.log(Person.prototype.constructor.Person());
// var person2 = new Person();
// person2.sayName();
// console.log(person1.sayName === person2.sayName);
// console.log(Person.prototype)