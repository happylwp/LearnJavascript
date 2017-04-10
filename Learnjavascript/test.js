// 'use strict';
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
// var contacts = [{
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["Javascript", "Gaming", "Foxes"]
//     }
// ];


// function lookUpProfile(firstName, prop) {

//     for (var x = 0; x < contacts.length; x++) {
//         if (contacts[x].firstName === firstName) {
//             if (contacts[x].hasOwnProperty(prop)) {
//                 return contacts[x][prop];
//             } else {
//                 return "No such property";
//             }
//         }
//     }
//     return "No such contact";
// }

// // Change these values to test your function
// console.log(lookUpProfile("Kristian", "lastName"));

// 回文字符串
// function palindrome(str) {
//     var reg = /^\w_/g;
//     console.log(str.replace(reg, ' '));


//     // Good luck!
//     return str.replace(reg, '').toLowerCase() === str.replace(reg, '').toLowerCase().split('').reverse().join('');
// }

// // return str.replace(/[\W_]/g, '').toLowerCase() === str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
// console.log(palindrome("eye"));

// 字符串首字母大写
// function titleCase(str) {
//     return str.toLowerCase().replace(/( |^)[a-z]/g, function(firstStr) {
//         return firstStr.toUpperCase();
//     });
// }

// console.log(titleCase("I'm a little tea pot"));

//判断一个数组中的第一个元素的字符串包含第二个元素的所有的字母则返回true
// function mutation(arr) {
//     var firstStr = arr[0].toLowerCase();
//     var secondStr = arr[1].toLowerCase();
//     for (var i = 0; i < secondStr.length; i++) {
//         if (firstStr.indexOf(secondStr[i]) < 0) {//在第一个字符串没有匹配到一个字符就返回false;
//             return false;
//         }
//     }
//     return true;
// }

// console.log(mutation(["hello", "hey"]));


// 清除一个数组中与提供参数相同的元素
// function destroyer(arr) {
//     var args = Array.prototype.slice.call(arguments);
//     args.slice(0, 1); //将第一个参数拷贝出来
//     // console.log(args.slice(0, 1));
//     return arr.filter(function(ele, index) {
//         return args.indexOf(ele) === -1;
//     });

//     // var args = Array.prototype.slice.call(arguments);
//     // args.splice(0, 1);
//     // return arr.filter(function(element) {
//     //     return args.indexOf(element) === -1;
//     // });

// }

// console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));

// function rot13(str) {
//     return str.split('')
//         .map.call(str, function(char) { //将分开的字符串使用call赋予str数组的方法和属性；
//             var x = char.charCodeAt(0); //使用map高阶函数将str的每一个元素转码
//             if (x < 65 || x > 90) {
//                 return String.fromCharCode(x);
//             } else if (x < 78) {
//                 return String.fromCharCode(x + 13);
//             }
//             return String.fromCharCode(x - 13);
//         }).join('');
// }



// console.log(rot13("SERR PBQR PNZC"));

// function diffArray(arr1, arr2) {
//     var newArr = [];
//     for (var i = 0; i < arr1.length; i++) {
//         if (arr2.indexOf(arr1[i]) === -1) {
//             newArr.push(arr1[i]);
//         }
//     }
//     for (var j = 0; j < arr2.length; j++) {
//         if (arr1.indexOf(arr2[j]) === -1) {
//             newArr.push(arr2[j]);
//         }
//     }

//     return newArr;
//     // for (var i = 0; i < arr1.length; i++) {
//     //     if (arr2.indexOf(arr1[i]) >= 0) {
//     //         arr2.slice(arr2.indexOf(arr1[i]), 1);
//     //         arr1.slice(i, 1);
//     //     }
//     // }
//     // console.log(arr1, arr2);
//     // return arr1.concat(arr2);
//     // var commonArr = arr1.filter(function(ele) {
//     //     for (var i = 0; i < arr2.length; i++) {
//     //         return ele === arr2[i];
//     //     }
//     // }); //先找出公共元素
//     //将arr1,arr2中的共有元素删除；然后连接
//     // return newArr;
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

//查找一个由对象组成的数组中是否有一个对象中的含有与提供的对象相同的属性与对应值
// function whatIsInAName(collection, source) {
//     var srcKeys = Object.keys(source);
//     console.log(srcKeys);
//     return collection.filter(function(ele) {
//         for (var i = 0; i < srcKeys.length; i++) {
//             if (!ele.hasOwnProperty(srcKeys[i]) || ele[srcKeys[i]] !== source[srcKeys[i]]) {
//                 return false;
//             }
//         }
//         return true;
//     });
// }
// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

//替换一个长字符串的一个单词，但是格式必须与替换前一致
// function myReplace(str, before, after) {
//     var regBig = /( |^)[a-z]/g;
//     var regSmall = /( |^)[A-Z]/g;
//     var newStr = "";
//     if (before.match(/( |^)[a-z]/g) === null) {
//         newStr = after.replace(regBig, function(ele) {
//             return ele.toUpperCase();
//         });
//     } else {
//         newStr = after.replace(regSmall, function(elements) {
//             return elements.toLowerCase();
//         });
//     }
//     return str.replace(before, newStr);
// }

// console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));

// function translatePigLatin(str) {
//     var regexp = /[aeiou]/;
//     var firstCons = str.search(regexp);
//     if (firstCons === 0) {
//         return str + "way";
//     } else {
//         var deleStr = str.substr(0, firstCons);
//         var newArr = str.split("");
//         for (var i = 0; i < firstCons; i++) {
//             newArr.shift();
//         }
//         return newArr.join("") + deleStr + "ay";
//     }
// }


// console.log(translatePigLatin("paragraphs"));


//DNA配对：A-T C-G
// function pairElement(str) {
//     var firstArr = str.split("");
//     var sumArr = [];
//     var tempArr = [];
//     var sum = firstArr.map(function(ele, index) { //找出原基因链的匹配碱基对存到临时数组
//         if (ele === "A") {
//             tempArr[index] = "T";
//         } else if (ele === "T") {
//             tempArr[index] = "A";
//         } else if (ele === "C") {
//             tempArr[index] = "G";
//         } else {
//             tempArr[index] = "C";
//         }
//         return tempArr;
//     });
//     return firstArr.map((item, idx) => [item, tempArr[idx]]); //合并匹配对应数组


// }

// console.log(pairElement("GCG"));


// function fearNotLetter(str) {
//     var map = Array.prototype.map;
//     var sum = map.call(str, function(x) {
//         return x.charCodeAt(0);
//     });
//     for (var i = 1; i < sum.length; i++) {
//         if (sum[i] - sum[i - 1] !== 1) {
//             return String.fromCharCode(sum[i - 1] + 1);
//         }
//     }
//     return undefined;
//     var map = Array.prototype.map;
//     var sum = map.call(str, function(x) {
//         return x.charCodeAt(0);
//     });
//     for (var i = 1; i < sum.length; i++) {
//         if (sum[i] - sum[i - 1] !== 1) {
//             return String.fromCharCode(sum[i - 1] + 1);
//         }
//     }
//     return undefined;
// }

// console.log(fearNotLetter("abce"));


//剔除多个数组作为参数的的共同值，并进行合并
// function uniteUnique(arr) {
//     var finalArray = [];

//     for (var i = 0; i < arguments.length; i++) {
//         var arrayArguments = arguments[i];

//         for (var j = 0; j < arrayArguments.length; j++) {
//             var indexValue = arrayArguments[j];

//             if (finalArray.indexOf(indexValue) < 0) {
//                 finalArray.push(indexValue);
//             }
//             }
//         }

//         return finalArray;

//         // var args = [].slice.call(arguments);
//         // var newArr = [];
//         // var count = 1;
//         // for (var i = 0; i < args.length; i++) {
//         //     arr.filter(function() {

//         //     });
//         // }

//         return arr;
//     }

//     console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// function convertHTML(str) {
//     var temp = str.split('');
//     for (var i = 0; i < temp.length; i++) {
//         switch (temp[i]) {
//             case '<':
//                 temp[i] = '&lt;';
//                 break;
//             case '&':
//                 temp[i] = '&amp;';
//                 break;
//             case '>':
//                 temp[i] = '&gt;';
//                 break;
//             case '"':
//                 temp[i] = '&quot;';
//                 break;
//             case "'":
//                 temp[i] = "&apos;";
//                 break;
//         }
//     }
//     temp = temp.join('');
//     return temp;
// }

// console.log(convertHTML("Dolce & Gabbana"));


// 将一个由多个单词组成的字符串间的空格换成-连接；
// function spinalCase(str) {
//     var regex = /\s+|_+/g;
//     str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

//       return str.replace(regex, '-').toLowerCase();
//     // var regs = /[a-z]+/gi;
//     // var newArr = str.toLowerCase().split(regs);
//     // return newArr;
// }

// console.log(spinalCase('This Is Spinal Tap'));

// 将由斐波那契数列的奇数累加
// function sumFibs(num) {
//     var prevNumber = 0;
//     var currNumber = 1;
//     var result = 0;
//     while (currNumber <= num) {
//         if (currNumber % 2 !== 0) {
//             result += currNumber;
//         }
//         currNumber += prevNumber;
//         prevNumber = currNumber - prevNumber;
//     }
//     return result;
//     // var newArr = [1];
//     // var firstNum = 1;
//     // var secondNum = 1;
//     // if (num < 2) {
//     //     return firstNum;
//     // } else if (num < 3) {
//     //     return firstNum + secondNum;
//     // } else {
//     //     for (var i = 0; i < num; i++) {
//     //         return newArr[i] = sumFibs[num] + sumFibs[num - 1];
//     //     }
//     // }
//     // return newArr;
// }

// console.log(sumFibs(4));


//将一个数的所有约数为质数的数求和
// function sumPrimes(num) {
//     function isPrime(number) { //判断一个数是否为素数
//         for (i = 2; i <= number; i++) {
//             if (number % i === 0 && number != i) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     if (num === 1) {
//         return 0;
//     }
//     if (isPrime(num) === false) {
//         return sumPrimes(num - 1);
//     }
//     if (isPrime(num) === true) {
//         return num + sumPrimes(num - 1);
//     }
// }

// console.log(sumPrimes(10));

//求一个范围内的所有数的最小公倍数
// function smallestCommons(arr) {
//     function commonNum(first, second) { //两个数的最小公倍数；
//         var minNum = Math.min(first, second);
//         var maxNum = Math.max(first, second);
//         if (minNum === 1) {
//             return maxNum;
//         }
//         for (var i = 2; i <= maxNum; i++) {
//             if ((minNum * i) % maxNum === 0) {
//                 return minNum * i;
//             }
//         }
//     }
//     var preNumber;
//     var nextNumber;
//     if (arr[0] > arr[1]) {
//         preNumber = arr[1];
//         for (var k = 1; k < (Math.abs(arr[0] - arr[1]) + 1); k++) {
//             nextNumber = arr[1] + k;
//             preNumber = commonNum(preNumber, nextNumber);
//         }
//         return preNumber;
//     } else {
//         preNumber = arr[0];
//         for (var j = 1; j < (Math.abs(arr[0] - arr[1]) + 1); j++) {
//             nextNumber = arr[0] + j;
//             preNumber = commonNum(preNumber, nextNumber);
//         }
//         return preNumber;
//     }
// }


// console.log(smallestCommons([1, 5]));

// function commonNum(first, second) { //两个数的最小公倍数；
//     var minNum = Math.min(first, second);
//     var maxNum = Math.max(first, second);
//     if (minNum === 1) {
//         return maxNum;
//     }
//     for (var i = 2; i <= maxNum; i++) {
//         if ((minNum * i) % maxNum === 0) {
//             return minNum * i;
//         }
//     }
// }

// console.log(commonNum(2, 4));


// function steamrollArray(arr) {
//     return arr.reduce(function(ele1, ele2) {
//             return ele1.concat(Array.isArray(ele2) ? steamrollArray(ele2) : ele2);
//         }, []);
//         // var newArr = [];
//         // var Arr1 = arr.map(function(ele) {
//         //     if (Array.isArray(ele)) {
//         //         return newArr.push(ele);
//         //     }
//         // });
//         // return Arr1;
//         // var flattenedArray = [];
//         // var flatten = function(arg) {
//         //     if (!Array.isArray(arg)) {
//         //         flattenedArray.push(arg);
//         //     } else {
//         //         for (var a in arg) {
//         //             flatten(arg[a]);
//         //         }
//         //     }
//         // };
//         // arr.forEach(flatten);
//         // return flattenedArray;
// }

// console.log(steamrollArray([1, [2],
//     [3, [
//         [4]
//     ]]
// ]));

// function sym(args) {
//     var args = Array.prototype.slice.call(arguments);

//     function getDiff(arr1, arr2) {
//         function filterFunction(arr1, arr2) {
//             return arr1.filter(function(item) {
//                 return arr2.indexOf(item) === -1;
//             });
//         }
//         return filterFunction(arr1, arr2).concat(filterFunction(arr2, arr1));
//     };

//     var symarray = args.reduce(getDiff, []);
//     var unique = symarray.filter(function(elem, index, self) {
//         return index === self.indexOf(elem);
//     });
//     return unique;
// }

// console.log(sym([1, 2, 3], [5, 2, 1, 4]));

// var Person = function(firstAndLast) {
//   var fullName = firstAndLast;

//   this.getFirstName = function() {
//     return fullName.split(" ")[0];
//   };

//   this.getLastName = function() {
//     return fullName.split(" ")[1];
//   };

//   this.getFullName = function() {
//     return fullName;
//   };

//   this.setFirstName = function(name) {
//     fullName = name + " " + fullName.split(" ")[1];
//   };

//   this.setLastName = function(name) {
//     fullName = fullName.split(" ")[0] + " " + name;
//   };

//   this.setFullName = function(name) {
//     fullName = name;
//   };
// };

// var bob = new Person('Bob Ross');
// bob.getFullName();

// function orbitalPeriod(arr) {
//     var GM = 398600.4418;
//     var earthRadius = 6367.4447;
//     arr.map(function(ele, index) {
//         ele.orbitalPeriod = Math.round(2 * Math.PI * Math.pow(Math.pow(earthRadius + ele.avgAlt, 3) / (GM), 0.5));
//         delete ele.avgAlt;
//         // console.log(ele);
//         // return ele.orbitalPeriod;
//     });
//     return arr;
// }

// console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));

// function pairwise(arr, arg) {
//     var newArr = [];
//     for (var i = 0; i < arr.length - 1; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] == arg) {
//                 if (newArr.indexOf(j) === -1 && newArr.indexOf(i) === -1) {
//                     newArr.push(i);
//                     newArr.push(j);
//                 }
//             }
//         }
//     }
//     console.log(newArr);
//     var newArr1 = newArr.filter(function(ele, index, self) {
//         return self.indexOf(ele) === index;
//     });
//     return newArr1.reduce(function(pre, next) {
//         return pre + next;
//     });
// }

// console.log(pairwise([0, 0, 0, 0, 1, 1], 1));

//找出一个数组两个元素的绝对值为一定值k,输出有多少对
// function pair(arr, k) {
//     if (arr.length <= 1) {
//         return 0;
//     } else if (k === 0) { //相同的值大于等于两个
//         var arr1 = [];
//         for (var k = 0; k < arr.length; k++) {
//             if (arr.indexOf(arr[k]) !== -1 && arr.lastIndexOf(arr[k]) !== -1) {
//                 if (arr.indexOf(arr[k]) !== arr.lastIndexOf(arr[k])) {
//                     arr1.push(arr[k]);
//                 }
//             }
//         }
//         return arr1.length;
//         // var newArr1 = arr.filter(function(element, index1, self1) {

//         // });
//         // console.log(newArr1);
//         // return newArr1.length;
//     }
//     var newArr2 = arr.filter(function(ele, index2, self) {
//         return self.indexOf(ele) === index2;
//     }); //删除数组重复元素；
//     // console.log(newArr);
//     var count = 0;
//     for (var i = 0; i < newArr2.length - 1; i++) {
//         for (var j = i + 1; j < newArr2.length; j++) {
//             if (Math.abs(newArr2[i] - newArr2[j]) === k) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// console.log(pair([1, 1, 1, 1, 1], 0));
// function diff(arr) {
//     return arr.filter(function(ele, index1, self) {
//         return self.indexOf(ele) === self.lastIndexOf(ele);
//     });
// }
// console.log(diff([1]))

// const person = Object.freeze({
//     name: "loner11",
//     age: 30
// });
// // person.name = "loner11";
// // person.age = 30;
// // person.age = 40;
// console.log(person.name);
// console.log(person.age);
// console.log(person);

// var constantize = (obj) => {
//     Object.freeze(obj);
//         Object.keys(obj).forEach((key, value) => {
//             if (typeof obj[key] === 'object') {
//                 constantize(obj[key]);
//             }
//         });
// }

// import * as variant from './operationDom';
// console.log(variant.intvariantName);
// console.log(variant.FloatvariantName);
// console.log(variant.CharvariantName);

// function foo(a) {
//     var b = a * 2;

//     function bar(c) {
//         console.log(a, b, c);
//     }
//     bar(b * 3);
// }
// foo(2);

// var obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// // obj.a = 2;
// // obj.b = 3;
// // obj.c = 4;

// with(obj) {
//     a = 2;
//     b = 3;
//     c = 4;
// }

// function foo(obj) {
//     with(obj) {
//         a = 2;
//     }
// }
// var o1 = {
//     a: 3
// };
// var o2 = {
//     b: 3
// };
// foo(o1);
// console.log(o1.a + " " + "1");

// foo(o2);
// console.log(o2.a + " " + "2");
// console.log(a + " " + "3");

// function foo(a){
//     var b=2;

//     function bar(){

//     }

//     var c=3;
// }

// function doSomething(a) {
//     b = a + doSomethingElse(a * 2);
//     console.log(b * 3);
// }

// function doSomethingElse(a) {
//     return a - 1;
// }
// var b;
// doSomething(2);

// function doSomething(a) {
//     function doSomethingElse(a) {
//         return a - 1;
//     }
//     var b;
//     b = a + doSomethingElse(a * 2);
//     console.log(b * 3);
// }
// doSomething(2);

// var a = 2;
// (function foo() {
//     var a = 3;
//     console.log(a);
// })();
// console.log(a);

// setTimeout(function() {
//     console.log("I waited 1 second");
// }, 1000);

// function makeCount() {
//     var i = 0;
//     return function() {
//         console.log(++i);
//     }
// }
// var counter = makeCount();
// counter();
// counter();

// var counter2 = makeCount();
// counter2();
// counter2();

// var i = function() { return 10; }();
// true && function() {}();
// 0,
// function() {}();

// var elems = 10;
// for (var i = 0; i < elems.length; i++) {
//     elems[i].addEventListener('click', function(e) {
//         e.preventDefault();
//         console.log("I am link #" + i);
//     }, 'false');
// }

// var elems = document.getElementsByTagName('a');
// for (var i = 0; i < elems.length; i++) {
//     (function(locakedIndex) {
//         elems[i].addEventListener('click', function(e) {
//             e.preventDefault();
//             console.log("I am link #" + i);
//         }, 'false')
//     })(i);
// }

// var elems = document.getElementsByTagName('a');
// for (var i = 0; i < elems.length; i++) {
//     elems[i].addEventListener('click', (function(lockedInIndex) {
//         return function(e) {
//             e.preventDefault();
//             console.log("I am link #" + i);
//         };
//     })(i), 'false');
// }

// 一般函数递归调用
// function factorial(n) {
//     if (n <= 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// console.log(factorial(5));

// 匿名函数递归调用
// const factorial = function(n) {
//     if (n <= 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// console.log(factorial(5));

// (function(f) {
//     console.log(f(10));
// })(function(n) {
//     if (n <= 1) {
//         return 1;
//     } else {
//         return n * arguments.callee(n - 1);
//     }
// })

// function factorial(n) {
//     return !(n > 1) ? 1 : factorial(n - 1) * n;
// }
// console.log([1, 2, 3, 4, 5].map(factorial));

// var newArr = [1, 2, 3, 4, 5].map(function(n) {
//     return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
// });
// console.log(newArr)
// function create() {
//     return function(n) {
//         if (n <= 1)
//             return 1;
//         return n * arguments.callee(n - 1);
//     }
// }
// var result = create();
// console.log(result(5));

// function createPerson(sIdentity) {
//     var oPerson = new Function("alert(arguments.callee.identity);");
//     oPerson.identity = sIdentity;
//     return oPerson;
// }
// var john = createPerson("John Smith");
// console.log(john());

// const fact = (n) => n < 1 ? 1 : n * fact(n - 1);
// console.log(fact(5));

// //
// const fact_gen = (self) => (n) => n <= 1 ? 1 : n * self(n - 1);
// console.log(fact_gen(fact)(5));


// //讲递归方法与参数都传入递归方法
// const fact1 = (self, n) => n < 1 ? 1 : n * self(self, n - 1);
// console.log(fact1(fact1, 5));

// //讲fact1柯理化得到fact2;
// const fact2 = (self) => (n) => n <= 1 ? 1 : n * self(self)(n - 1)
// console.log(fact2(fact2)(5));


// var a = [
//     "Hydrogen",
//     "Helium",
//     "Lithium",
//     "Beryl­lium"
// ];
// var a2 = a.map(function(s) {
//     return s.length;
// })
// var a3 = a.map(s => s.length)
// console.log(a2);
// console.log(a3)

// function Person() {
//     this.age = 0;
//     setInterval(function growUp() {
//         this.age++;
//     }, 1000);
// }
// var p = new Person();

// function Person() {
//     var self = this;
//     self.age = 0;
//     setInterval(function growUp() {
//         self.age++;
//     }, 1000);
// }
// var p = new Person();
// console.log(p);

//将self(self)看作一个整体
//作为参数传入一个新的函数，（g)=>n<1?1:n*g(n-1)
// const fact3 = (self) => (n) => ((g) => n <= 1 ? 1 : n * g(n - 1))(self(self));
// console.log(fact3(fact3)(5));


// var counter = (function() {
//     var i = 0;
//     return {
//         get: function() {
//             return i;
//         },
//         set: function(val) {
//             i = val;
//         },
//         increment: function() {
//             return ++i;
//         }
//     };
// }());

// console.log(counter.get());
// counter.set(10);
// console.log(counter.increment());
// console.log(counter.increment());

// var Calculator = function(eq) {
//     var eqCt1 = document.getElementById(eq);
//     return {
//         add: function(x, y) {
//             var val = x + y;
//             eqCt1.innerText = val;
//         }
//     };
// };

// var calculator = new Calculator('eq');
// calculator.add(2, 2);

// var blogModule = (function() {
//     var my = {},
//         privateName = "博客园";

//     function privateAddTopic(data) {

//     }
//     my.Name = privateName;
//     my.AddTopic = function(data) {
//         privateAddTopic(data);
//     }
//     return my;
// }());
// var blogModule = (function(my) {
//     var oldAddPhotoMethod = my.Addphoto;
//     my.Addphoto = function() {

//     };
//     return my;
// }(blogModule));

// const fact4 = (self) => (n) => ((g) => (m) => m <= 1 ? 1 : m * g(m - 1))(self(self))(n);
// console.log(fact4(fact4)(5))

// const weirdFunc = (func_gen) => (self) => (n) => func_gen(self(self))(n);
// console.log(weirdFunc(fact_gen)(weirdFunc(fact_gen))(5))\


// Array.matrix = function(numrows, numcols, initial) {
//     var arr = [];
//     for (var i = 0; i < numrows; ++i) {
//         var colums = [];
//         for (var j = 0; j < numcols; ++j) {
//             colums[j] = initial;
//         }
//         arr[i] = colums;
//     }
//     return arr;
// }

// function changeStuff(a,b,c){
//     a=a*10;
//     b.item="change";
//     c={item:"changed"};
//     return newa;
// }
// var num=10;
// var obj1={item:"unchanged"};
// var obj2={item:"unchanged"};
// changeStuff(num,obj1,obj2);
// console.log(num);
// console.log(obj1.item);
// console.log(obj2.item);

// var str="abc";
// str[0]="d";
// console.log(str);

var obj={x:1};
obj.x=100;
console.log(obj);

var o=obj;
console.log(o);
o.x=1;
console.log(obj);
console.log(o);