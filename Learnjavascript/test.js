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