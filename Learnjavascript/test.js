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
'use strict';
function get_primes(arr) {
    return arr.filter(function (element) {
        if(element===1){
            return false;
        }else if(ele)
    });
}

console.log(get_primes([2,3,4,5,6,7]));