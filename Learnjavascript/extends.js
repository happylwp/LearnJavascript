// var gf = new Object();
// gf.name = "tangwei";
// gf.bar = "c++";
// gf.sayWhat = function() {
//     console.log(this.name + "said:love you forever");
// }

// var obj = {
//     id: "awesome",
//     cool: function coolFn() {
//         console.log( this.id );
//     } };
// var id = "not awesome";
// obj.cool(); // 酷
// setTimeout( obj.cool, 100 ); // 不酷 原因：丢失cool函数丢失this绑定；


// var obj = {
//     count: 0,
//     cool: function coolFn() {
//         var self = this;//将this属性保存到self变量；
//         if (self.count < 1) {
//             setTimeout( function timer(){
//                 self.count++;
//                 console.log( "awesome?" );
//             }, 100 );
//         } }
// };
/// / obj.cool(); // 酷吧?

// javascript对象创建模式：
// 1：使用new关键字创建
// var gf=new Object();
// gf.name="maoon";
// gf.bar="javascript";
// gf.satwhat=function () {
//     console.log(this.name+"said :love you forever");
// }

// 2:使用字面量创建
// var gf={
//     name:"maroon",
//     bar:"javascript",
//     saywhat:function () {
//         console.log(this.name+"said :love you forever");
//     }
// }

// 3:工厂模式创建
// function createGF(name,bar){
//     var o=new Object();
//     o.name=name;
//     o.bar=bar;
//     o.saywhat=function () {
//         alert(this.name+"said :you love forever");
//     }
//     return 0;
// }
// var gf1=createGF("maroon","javascript");


// 4:构造函数
// function GF(name,bar) {
//     this.name=name;
//     this.bar=bar;
//     this.satwhat=function () {
//         alert(this.name+"said :love you forever");
//     }
// }
//
// var gf1=new GF("maroon","javascipt");


// function add(j,k,i) {
//     return j+k+i;
// }
// function sub(j,k,i) {
//     return j-k-i;
// }
// console.log(add(5,3,1));
// console.log(add.bind(sub,5,3,1)());
// add(5,3);
// add.call(sub,5,3);
// console.log(add.apply(add,[5,3,2]));
// add.apply(sub,[5,3]);
// sub(5,3);
// console.log(sub(5,3,1));
// sub.call(add,5,3);
// console.log(sub.call(add,5,3,1));
// sub.apply(add,[5,3]);
// console.log(sub.apply(add,[5,3,1]));


// var foo=function(){
//     this.name="maroon";
//     this.age=22;
// }
//
// var childer={};
// console.log(childer);
// foo.call(childer);
// console.log(childer);

// 原型模式中不必在构造函数中定义实例属性，可以将属性信息直接赋予原型对象；
// function Gf(){
//     Gf.prototype.name = "vivian";
//     Gf.prototype.bar = "c++";
//     Gf.prototype.sayWhat = function(){
//         alert(this.name+"said :love you forever");
//     }
// }
// var gf1 = new Gf();
// gf1.sayWhat();
// var gf2 = new Gf();

// 使用原型对象：
function GF() {}
GF.prototype={
    name:"",
    bar:"",
    saywhat:function () {
        alert(this.name+"said : love you forever");
    }
}
// var gf1=new GF();
// console.log(gf1.constructor==GF);
// console.log(gf1.constructor==Object);

// GF.prototype={
//     constructor:GF,
//     name:"maroon",
//     bar:"javascript",
//     sayWhat:function () {
//         alert(this.name+"said : love you forever");
//     }
// }

var gf1=new GF();
console.log(gf1.constructor==GF);
