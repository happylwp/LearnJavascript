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

function Foo() {
    getName = function() {
        console.log(1);
    }; //私有方法
    return this;
}
Foo.getName = function() {
    console.log(2); //静态方法
}
Foo.prototype.getName = function() {
        console.log(3); //共有方法
    }
    // getName();
var getName = function() { console.log(4); } //按值传递,定义函数

function getName() {
    console.log(5);
}

// Foo.getName();
// getName();
// Foo().getName();
// getName();
// new Foo.getName();
// new Foo().getName();
// new new Foo().getName();


// function User(name) {
//     var name = name; //私有属性
//     this.name = name; //共有属性
//     function getName() { //私有方法
//         return name;
//     }
// }
// User.prototype.getName = function() {
//     return this.name;
// };
// User.prototype.getName = function() {
//     return this.name;
// };
// User.name = 'Wscats';
// User.getName = function() {
//     return this.name;
// };
// var Wscat = new User("Wscats");

// var name = "Wscats";
// window.name = "Wscats";

// function getName() {
//     console.log(name);
//     name = "Oaoafly";
//     var privateName = "Stacsw";
//     return function() {
//         console.log(this);
//         return privateName;
//     }
// }
// var getPrivate = getName("Hello");
// console.log(name);
// console.log(getPrivate());

// function add() {
//     var args = Array.prototype.slice.call(arguments);
//     return function() {
//         var arg2 = Array.prototype.slice.call(arguments);
//         return args.concat(arg2).reduce(function(a, b) {
//             return a + b;
//         });
//     };


// }

function add() {
    var args = Array.prototype.slice.call(arguments);

    var fn = function() {
        var arg_fn = Array.prototype.slice.call(arguments);
        return add.apply(null, args.concat(arg_fn));
    }

    fn.valueOf = function() {
        return args.reduce(function(a, b) {
            return a + b;
        })
    }

    return fn;
}
console.log(add(1)); // 1
console.log(add(1, 2)(3)); //6
console.log(add(1)(2)(3)(4)(5)); // 15

// function perAlone(str) {
//     var regex = /(.)\1+/;
//     var arr = str.split('');
//     var permutations = [];
//     var tmp;
//     if (str.match(regex) !== null && str.match(regex)[0] === str)
//         return 0;

//     function swap(index1, index2) {
//         tmp = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = tmp;
//     }

//     function generate(int) {
//         if (int === 1) {
//             permutations.push(arr.join(''));
//         } else {
//             for (var i = 0; i != int; ++i) {
//                 generate(int - 1);
//                 swap(int % 2 ? 0 : i, int - 1);
//             }
//         }
//     }
//     generate(arr.length);
//     var filters = permutations.filter(function(string) {
//         return !string.match(regex);
//     });
//     return filters.length;
// }

// console.log(perAlone('aab'));