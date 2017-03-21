'use strict';
// 对象处理
//JavaScript对象是动态的，可以新增，也可以删除；
// var xiaoming = {
//     name: '小明'
// };
// xiaoming.age; // undefined
// xiaoming.age = 18; // 新增一个age属性
// xiaoming.age; // 18
// delete xiaoming.age; // 删除age属性
// xiaoming.age; // undefined
// delete xiaoming['name']; // 删除name属性
// xiaoming.name; // undefined
// delete xiaoming.school; // 删除一个不存在的school属性也不会报错

// 用in检测对象中是否有改属性
// 'name' in xiaoming; // true
// 'grade' in xiaoming; // false

// 要检测是否是对象的属性不是继承来的属性使用hasOwnProperty()方法;
// xiaoming.hasOwnProperty('name'); // true
// xiaoming.hasOwnProperty('toString'); // false

//javascript对象的键值必须是字符串；


// 1.块级作用域
// 1).with从对象中创建出的作用域仅在with声明中而非外部作用域中有效。
// 2).try/catch分句会创建一个块级作用域，其中声明的变量仅在catch内部有效
// 3).let:声明一个块级作用域的变量，并可选的赋予初值；
//
// var x = 'global';
// let y = 'global';
// console.log(this.x); // "global"
// console.log(this.y); // undefined


// 垃圾收集
/*
 function process(data) {
 }
 var something={};
 process(something);
 var btn=document.getElementById("my_button");
 btn.addEventListener("click",function click() {
 console.log("button clicked");
 }, /!*capturingPhase=*!/false);*/


// 使用reduce计算数组的乘积；
// function product(arr){
//     return arr.reduce((x,y) => x * y)
// }
// console.log(product([0,2,3,4]));

// 使用reduce或者map将一个全是数字的字符串转换成整数
// function produce(s) {
//      return s.split('').map(item => +item).reduce((x,y)=> x*10 + y, 0);
// }
// var s="12345";
// var s1=s.split("").map(function (x) {
//     return x;
// });
// console.log(s1);


// function foo(a,b,c) {
//     if (arguments.length===2){//实际上拿到参数是a,b.c默认为null;
//         c=b;
//         b=null;
//     }
// }
//
// console.log(foo(a,[b],c));

// 'use strict';
// var xiaoming={
//     name:'小明',
//     birth:1996,
//     age:function(){
//         var currentThis=this;
//         function getAgeFromBirth() {
//             var y=new Date().getFullYear();
//             return y-currentThis.birth;
//         }
//         return getAgeFromBirth();
//     }
// }
// console.log(xiaoming.age());

// function getAge() {
//     var y=new Date().getFullYear();
//     return y-this.birth;
// }
//
// var xiaoming={
//     name:'小明',
//     birth:1996,
//     age:getAge
// }
// console.log(xiaoming.age());
// console.log(getAge.apply(xiaoming,[]));

// console.log(Math.max.apply(null,[3,4,5]));
// console.log(Math.max.call(null,3,4,5));

// var count=0;
// var oldParseInt=parseInt;//保存原函数；
// window.parseInt=oldParseInt;
// window.parseInt=function () {
//     count+=1;
//     return oldParseInt.apply(null,arguments);
// };
// parseInt('10');
// parseInt('20');
// parseInt('30');
// console.log(count);
//
// function add(x,y,f) {
//     return f(x)+f(y);
// }
// console.log(add(-5,6,Math.abs));

// 请把用户输入的不规范的英文名字，变为首字母大写，
// 其他小写的规范名字。
// 输入：['adam', 'LISA', 'barT']，
// 输出：['Adam', 'Lisa', 'Bart']。

// 'use strict';
// function normalize(arr){
//     return arr.map(function(x){
//          return x.split("").map(function (item,index) {
//              if(index===0){
//                  item.toLowerCase();
//              }else{
//                  item.toUpperCase();
//              }
//          }).join("")
//     });
//
//     // return arr.map(item=>item.split('').map((item,index)=>index===0?item.toUpperCase():item.toLowerCase()).join(''))
// }

// filter()函数去除数组重复元素
// var arr=[2,4,1,3,5,7,6,];
// var s=arr.filter(function (element,index,self) {
//     return self.indexOf(element)===index;
// });
// console.log(s);

// filter()筛选所有素数
// 'use strict';
// function get_primes(arr) {
//     return arr.filter(function (element) {
//         if(!isDual(element)){
//             return false;
//         }else if(element===5){
//             return false;
//         }
//         for(var i=0;i<element.length;i++){
//             if (element%i==0){
//                 return false;
//             }
//         }
//         return true;
//     });
// }
// function isDual(num){
//     var num = num.toString();
//     var lastNum = num.substring(num.length-1,num.length);
//     return lastNum%2 == 0 || lastNum%5 == 0 ? false : true;
// }
//
// console.log(get_primes([2,3,4,5,6,7]));

//使用高阶函数，一个数组中的两个数的和等于一个定值，
// 将两个元素的索引值返回；
// 'use strict';
// function Sum(target){
//     var res=[];
//     var slef=this;
//     this.map(function (ele,indexI) {
//        slef.filter(function (e,indexII) {
//            if((target-e)===ele){
//                res=[indexII,indexI];
//            }
//        })
//     });
//     return res;
// }
//
// var arr=[1,2,7,9,11,15];
// console.log(Sum.call(arr, 9));

// 闭包
// function lazy_sum(arr) {
//     var sum=function () {
//         return arr.reduce(function (x,y) {
//             return x+y;
//         });
//     }
//     return sum;
// }
//
// var f=lazy_sum([1,2,3,4,5,6]);
// var f1 = lazy_sum([1, 2, 3, 4, 5]);
// var f2 = lazy_sum([1, 2, 3, 4, 5]);
// console.log(f());//21
// console.log(f);//[Function sum]
// console.log(f1===f2);

// function count() {
//     var arr = [];
//     for (var i = 0; i <= 3; i++) {
//         arr.push(function () {
//             return i * i;
//         })
//     }
//     return arr;
// }
//
// var results = count();
// var f1 = results[0];
// var f2 = results[1];
// var f3 = results[2];
//
// console.log(f1());
// console.log(f2());
// console.log(f3());

// function count() {
//     var arr = [];
//     for(var i=1;i<=3;i++){
//         arr.push((function(n){
//             return function (){
//                 return n*n;
//             }
//         })(i));
//     }
//     return arr;
// }
// var results = count();
// var f1 = results[0];
// var f2 = results[1];
// var f3 = results[2];
//
// console.log(f1());
// console.log(f2());
// console.log(f3());


// 匿名函数：
// var total = 1;
// var demo = function () {
//     total = 10;
// }
// console.log(demo());
// console.log(total);

// function create_counter(initial) {
//     var x = initial || 0;
//     return {
//         inc: function () {
//             x += 1;
//             return x;
//         }
//     }
// }
// var c1=create_counter();
// console.log(c1.inc());
// console.log(c1.inc());
// console.log(c1.inc());
//
// var c2=create_counter(10);
// console.log(c2.inc());
// console.log(c2.inc());
// console.log(c2.inc());

// function foo() {
//     var a=2;
//     function bar() {
//         console.log(a);
//     }
//     return bar;
// }
// var baz=foo();
// baz();

// function* fib(max) {
//     var
//         t,
//         a = 0,
//         b = 1,
//         n = 1;
//     while (n < max) {
//         yield a;
//         t = a + b;
//         a = b;
//         b = t;
//         n ++;
//     }
//     return a;
// }
// fib(5);
// var d = Date.parse('2015-06-24T19:49:22.875+08:00');
// console.log(d);

// var re = /^(\d{3})-(\d{3,8})$/;
// console.log(re.exec('010-12345')[1]);

//
// 给出年分m和一年中的第n天
// ，
// 算出第n天是几月几号
// 。
//
// 输入包括两个整数y(1 <= y <= 3000)
// ，
// n(1 <= n <= 366)
// 。
//
// 可能有多组测试数据
// ，
// 对于每组数据
// ，
// 按
// yyyy - mm - dd的格式将输入中对应的日期打印出来
// 。
//
//
// 输入
// ：
// 2000
// 3
// 2000
// 31
// 2000
// 40
// 2000
// 60
// 2000
// 61
// 2001
// 60
// 输出
// ：
// 2000 - 01 - 03
// 2000 - 01 - 31
// 2000 - 02 - 09
// 2000 - 02 - 29
// 2000 - 03 - 01
// 2001 - 03 - 01
// function duplicates(arr) {
//     var sum=[];
//     arr.map(function(ele){
//         if(arr.indexOf(ele)!==arr.lastIndexOf(ele)){
//             sum.push(ele);
//         }
//     });
//     return sum.filter(function(ele,index,self){
//         return self.indexOf(ele)===index;
//     });
// }

// console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]).sort());


// function square(arr) {
//     var sum=[];
//     arr.map(function(ele){
//         sum.push(Math.pow(ele,2));
//     });
//     return sum;
// }
//
// console.log(square([1, 2, 3, 4]));


// function parse2Int(num) {
//     return parseInt(num,10);
// }
//
// console.log(parse2Int('12'));
// console.log(parse2Int('12px'));
// console.log(parse2Int('0x12'));

// var str = 'hello world!';
// var result = /^hello/.test(str);
// console.log(result); // true

// class Student {
//     constructor(name) {
//         this.name = name;
//     }
//
//     hello() {
//         alert('hello,' + this.name + '!');
//     }
// }
//
// function Student(name) {
//     this.name = name;
// }
// Student.prototype.hello=function () {
//     alert('hello,'+this.name+'!');
// };
//
// function Student(name,hello) {
//     this.name=name;
//     this.hello=function () {
//         alert('hello,'+this.name+'!');
//     }
// }

// 需要解决问题？？
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }
// class Cat extends Animal {
//     constructor(name) {
//         super(name);
//         this.say=say;
//     }
//     say() {
//         console.log("Hello," + this.name);
//     }
// }

// function count(start, end) {
//     var count=start;
//     console.log(count);
//     var timerOut=setInterval(function(){
//         console.log(++count);
//         if(count>=end){
//             clearInterval(timerOut);
//         }
//     },100);
//     return {
//         cancel:function(){
//         clearInterval(timerOut);
//     }};
// }
// console.log(count(1,10));
//
// function argsAsArray(fn, arr) {
//     var func=fn.apply(this,arr);
//     return func;
// }
//
// console.log(argsAsArray(
//     function (greeting, name, punctuation) {
//         return greeting + ', ' + name + (punctuation || '!');
//     }, ['Hello', 'Ellie', '!']));

// speak(
//     function () {
//         return this.greeting + ', ' + this.name + '!!!';
//     }, {greeting: 'Hello', name: 'Rebecca'})


// function functionFunction(str) {
//    return  function (str1) {
//        return str+", "+str1;
//    }
// }

// function makeClosures(arr,fn) {
//     return arr.map(function (ele) {
//         return function () {
//             return fn(ele);
//         }
//     });
// }
//
// var arr = [1, 2, 3];
// var square = function (x) {
//     return x * x;
// };
// var funcs = makeClosures(arr, square);
// console.log(funcs[2]);

//
// var sayIt = function(greeting, name, punctuation) {
//     return greeting + ', ' + name + (punctuation || '!');
// };
// partial(sayIt, 'Hello', 'Ellie')('!!!');

// function callIt(fn) {
//     return fn.apply(this,[].slice.call(arguments,1));
// }
// var a = 1;
// var b = 2;
// var test = function (first, second) {
//     return first === a && second === b;
// };
// console.log(callIt(test, a, b));

// function partialUsingArguments(fn) {
//     var args1=[].slice.call(arguments,1);
//     return function () {
//         return fn.apply(this, args1.concat([].slice.call(arguments)));
//     };
// }
//
// var a = 1;
// var b = 2;
// var c = 3;
// var d = 4;
// var test = function (first, second, third, forth) {
//     return first + second + third + forth;
// };
// console.log(partialUsingArguments(test, a, b)(c, d));

// function curryIt(fn) {
//     var len = fn.length;
//     var args = [];
//     return function result(ele) {
//         args.push(ele);
//         return args.length === len ? fn.apply(undefined, args) : (function () {
//                 return result;
//             })();
//     };
// }
// var fn = function (a, b, c) {
//     return a + b + c
// };
// console.log(curryIt(fn)(1)(2)(3));

// function Shape() {
//     this.x = 0;
//     this.y = 0;
// }
// Shape.prototype.move = function(x, y) {
//     this.x += x;
//     this.y += y;
//     console.log("Shape moved.");
// };

// function Rectangle() {
//     Shape.call(this);
// }
// Rectangle.prototype = Object.create(Shape.prototype);
// var rect = new Rectangle();
// rect instanceof Rectangle
// rect instanceof Shape
// rect.move(1, 1);


//Setup
var contacts = [{
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop) {
    // contacts.map(function(ele) {
    //     if (ele.firstName === firstName) {
    //         var keyArrays = Object.keys(ele);
    //         var newkeys = keyArrays.filter(function(elements) {
    //             return elements === prop;
    //         });
    //         if (newkeys.length === 0) {
    //             return "No such property";
    //         } else {
    //             return ele[prop];
    //         }
    //     } 
    //     else {
    //         return "No such contact";
    //     }
    // });
    var returnName = contacts.filter(function(ele) {
        return ele.firstName === firstName;
    });
    if (returnName === 0) {
        return "No such contact";
    } else {
        var returnsProp = Object.keys(returnName[0]);
        var newProp = returnsProp.filter(function(elements) {
            return elements === prop;
        });
        if (newProp === 0) {
            return "No such property";
        } else {
            return returnName[0][prop];
        }
    }



    // for (var i = 0; i < contacts.length; i++) {
    //     console.log(contacts[i].firstName);
    //     if (contacts[i].firstName === firstName) {
    //         var keyArrays = Object.keys(contacts[i]);
    //         var newkeys = keyArrays.filter(function(ele) {
    //             return ele === prop;
    //         });
    //         if (newkeys.length === 0) {
    //             return "No such property";
    //         } else {
    //             return contacts[i][prop];
    //         }

    //     } else {
    //         return "No such contact";
    //     }
    // }
    // Only change code above this line
}

// Change these values to test your function
console.log(lookUpProfile("Kristian", "lastName"));