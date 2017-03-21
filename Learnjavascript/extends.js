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
// function GF() {}
// GF.prototype={
//     name:"",
//     bar:"",
//     saywhat:function () {
//         alert(this.name+"said : love you forever");
//     }
// }
// var gf1=new GF();
// console.log(gf1.constructor==GF);//结果为false；
//第一个GF()函数在声明时自动生成一个constructor属性，紧接着GF.prototype创建一个新的原型对象，
//本质上复写原有的prototype对象，因此新的对象也有constructor属性

// 解决上面重新创建一个原型函数覆盖原有的constructor属性问题：
// function GF(){}
// GF.prototype={
//     constructor:GF,
//     name:"maroon",
//     bar:"javascript",
//     sayWhat:function (){
//         alert(this.name+"said :love you forever");
//     }
// };
//
// var a=new GF();
// console.log(a.constructor==GF);


// 构造函数和原型组合
//     使用构造函数来定义对象的属性，原型函数来定义共享的属性和方法，
// function GF(name,bar){
//     this.name=name;
//     this.bar=bar;
// }
// GF.prototype={
//     constructor:GF,
//     sayWhat:function () {
//         alert(this.name+"said : love you forever");
//     }
// };


// 对象间继承方法：
// 1.构造函数绑定（使用call或者apply将父对象上的属性和方法绑定到子对象上）
// function Animal() {
//     this.species="动物";
// }
//
// function Cats(name,color) {
//     this.name=name;
//     this.color=color;
//     Animal.bind(this,arguments)();
// }
//
// var cat1=new Cats("大毛","黄色");
// console.log(cat1.species);

// 2.prototype模式（首先创建Cats，Animal构造函数，
// 然后重写Cats的原型函数将父对象属性和方法继承过来，但是还需要将Cats的constructor属性重新赋值，不然，Cats将会丢失该属性）；
// function Animal(){
//     this.species="动物";
// }
// function Cats(name,color) {
//     this.name=name;
//     this.color=color;
// }
// Cats.prototype=new Animal();
// Cats.prototype.constructor=Cats;
// var cat1=new Cats("大毛","黄色");
// console.log(cat1.species);
// console.log(cat1.constructor==Cats);

// 3.直接继承prototype（）
// function Animal() {}
// Animal.prototype.species="动物";
// function Cats(name,color) {
//     this.name=name;
//     this.color=color;
// }
// Cats.prototype=Animal.prototype;
//使Cats的原型指向Animal原型，
// 当修改Cats原型也将修改Animal原型；
// Cats.prototype.constructor=Cats;
// var cat1=new Cats("大毛","黄色");
// console.log(cat1.species);

// 4.使用空对象作为中介
// function Animal() {}
// Animal.prototype.species="动物";
// function Cats(name,color) {
//     this.name=name;
//     this.color=color;
// }
//
// var F=function () {};
// F.prototype=Animal.prototype;
// Cats.prototype=new F();
// Cats.prototype.constructor=Cats;
// console.log(Animal.prototype.constructor);//Animal
// 将上述创建空对象过度的方法进行封装
// function extend(Child,Parents){
//     var F=function () {};
//     F.prototype=Parents.prototype;
//     Child.prototype=new F();
//     Child.prototype.constructor=Child;
//     // Child.uber=Parents.prototype;
// }
// extend(Cats,Animal);
// var cat1=new Cats("大毛","蓝色");
// console.log(cat1.species);


// 5.拷贝继承（采用"拷贝方法"）
// function Animal(){}
// Animal.prototype.species="动物";
// function Cats(name,color) {
//     this.name=name;
//     this.color=color;
// }
// function extend(child,parent) {
//     var p=parent.prototype;
//     var c=child.prototype;
//     for(var i in p){
//         c[i]=p[i];
//     }
//     c.prototype=p;
// }
// extend(Cats,Animal);
// var cat1=new Cats("大毛","蓝色");
// console.log(cat1.species);


// function commonString(first,second){
//     var S="";
//     var sstr= "";
//     var L1=s1.length;
//     var L2=s2.length;
//     if (L1>L2){ 
//         var s3=s1;
//         s1=s2,s2=s3,L1=s2.length;
//     }
//     for ( var j=L1;j> 0 ;j--)
//         for ( var i= 0 ;i<=L1-j;i++){
//             sstr = s1.substr(i,j);
//             if (s2.indexOf(sstr)>= 0 ) return sstr;
//     }
//   return "" ;
// }

// function findSubStr(s1, s2) {
//     var S = sstr = "",
//         L1 = s1.length,
//         L2 = s2.length;
//     if (L1 > L2) {
//         var s3 = s1;
//         s1 = s2, s2 = s3, L1 = s2.length;
//     }
//     for (var j = L1; j > 0; j--)
//         for (var i = 0; i <= L1 - j; i++) {
//             sstr = s1.substr(i, j);
//             if (s2.indexOf(sstr) >= 0) return sstr;
//         }
//     return "";
// }
// console.log(findSubStr("aaa3333", "baa333cc")); //aa333
// console.log(findSubStr("aaaX3333--", "baa333ccX3333333x")); //X3333

function LCS(str1, str2) {
    var maxLen = 0;
    var index = 0;

    var arr = new Array();
    for (var i = 0; i <= str1.length + 1; i++) {
        arr[i] = new Array();
        for (var j = 0; j <= str2.length + 1; j++) {
            arr[i][j] = 0;
        }
    }

    for (var i = 0; i <= str1.length; i++) {
        for (var j = 0; j <= str2.length; j++) {
            if (i == 0 || j == 0) {
                arr[i][j] = 0
            } else {
                if (str1[i] == str2[j] && str1[i - 1] == str2[j - 1]) {
                    arr[i][j] = arr[i - 1][j - 1] + 1;
                } else {
                    arr[i][j] = 0;
                }
            }
            if (arr[i][j] > maxLen) {
                maxLen = arr[i][j];
                index = i;
            }
        }
    }

    var str = "";
    if (maxLen == 0) {
        return "";
    } else {
        for (var k = index - maxLen; k < maxLen; k++) {
            str += str1[k];
        }
        return str;
    }
}
var str1 = "abcdefg";
var str2 = "xyzabcd";
console.log(LCS(str1, str2)); // abcd