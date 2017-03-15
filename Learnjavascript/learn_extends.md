## javascript对象创建模式：
 
   1.使用new关键字创建
   
   ``` js
    var gf=new Object();
    gf.name="maoon";
    gf.bar="javascript";
    gf.satwhat=function () {
        console.log(this.name+"said :love you forever");
    }
   ```
   2.使用字面量创建
   
   ``` js
     var gf={
         name:"maroon",
         bar:"javascript",
         saywhat:function () {
             console.log(this.name+"said :love you forever");
         }
     }
   ```
   3.工厂模式创建
   
   ```js
    function createGF(name,bar){
             var o=new Object();
             o.name=name;
             o.bar=bar;
             o.saywhat=function () {
                 alert(this.name+"said :you love forever");
             };
               return 0;
            }
            var gf1=createGF("maroon","javascript");

   ```    
    
    
   4.构造函数
   
   ```js
     function GF(name,bar){
        this.name=name;
        this.bar=bar;
        this.saywhat=function(){
            alert(this.name+"said: love you forever");
        }
     }
     var gf1=new GF("maroon","javascript");
   ```
   
     
# 原型对象模式

   1.原型模式中，不必再构造函数中定义实例属性，可以将属性信息直接敷于原型对象；
   
   ```js
   	 
	 function Gf(){
	     Gf.prototype.name = "vivian";
	     Gf.prototype.bar = "c++";
	     Gf.prototype.sayWhat = function(){
	         alert(this.name + "said:love you forever");
	     }
	 }
	 var gf1 = new Gf();
	 gf1.sayWhat();
	 var gf2 = new Gf();
   ```
   	
   2.所有原型对象都含有一个constructor属性，这个属性是一个指向包含prototype属性函数的一个指针。
   
   3.所有的对象都有一个原型对象，当我们访问一个对象中的属性时，首先会访问实例对象中有没有该属性，如果没有则继续查找原型对象；
   
   4.每定义一个函数，就会同时为其创建一个prototype对象，这个对象也会自动获取一个新的constructor属性，但是为该函数创建一个新的原型对象，新的原型函数对象会重写原有的constructor属性；
   
   ```js
   function Foo(){}
   Foo.prototype={
         name:"maroon",
         bar:"javascript",
         sayWhat:function (){
         alert(this.name+"said : love you forever");
      }
   }
   
   var a=new Foo();
   console.log(a.constructor==Foo);//false;  
   console.log(a.constructor==Object);//true;
   ```
     
   解决办法：在新创建的原型函数中添加上constructor属性
   
   ``` jsfunction Foo(){}
     Foo.prototype={
        constructor:Foo,
        name:"maroon",
        bar:"javascript",
        sayWaht:function(){
            alert(this.name+"said : love yu forever");
        }
     }; 
     var a=new Foo();
     console.log(a.constructor==Foo);
     
   ```
## 对象间继承方法：

   1.构造函数绑定（使用call或者apply，bind将父元素上的公共属性绑定到子对象上）
   
   ```js
function Animals(){
   this.specils="动物";
}
function Cats(name,color){
   this.name=name;
   this.color=color;
   Animals.apply(this,arguments);
}
var cat1=new Cats("大毛","黄色");
console.log(cat1.specils);//;动物
   ```
       
   2.prototype模式（首先创建Cats，Animal构造函数，
   然后重写Cats的原型函数将父对象属性和方法继承过来，
   但是还需要将Cats的constructor属性重新赋值，不然，Cats将会丢失该属性）；
   
  ```js
function Animal() {
  this.species="动物";
}
function Cats(name,color) {
  this.name=name;
  this.color=color;
}
Cats.prototype=new Animal();//将Animal的属性和方法继承过来，
Cats.prototype.constructor=Cats;//因为上一步重写Cats的原型属性，所以需要给constructor属性赋值，不然会丢失constructor属性
var cat1=new Cats("loner11","蓝色");
console.log(cat1.species);//动物
  ```
   3.直接继承prototype属性
   
   ```js
function Animal() {}
Animal.prototype.species="动物";
function Cats(name,color) {
  this.name=name;
  this.color=color;
}
Cats.prototype=Animal.prototype;
Cats.prototype.constructor=Cats;
var cat1=new Cats("loner11","蓝色");
console.log(cat1.species);//动物
console.log(cat1.constructor==Cats);//true;
//缺陷：因为将Cats的原型指向Animal原型，当修改Cats的原型属性的species，Animal也将被修改
   ```

   4.使用空对象做介质继承prototype属性
   
   ```js
function Animal() {}
Animal.prototype.species="动物";
function Cats(name,color) {
  this.name=name;
  this.color=color;
}

var F=function() {};
F.prototype=Animal.prototype;
Cats.prototype=new F();
Cats.prototype.constructor=Cats;

var cat1=new Cats("loner11","蓝色");
console.log(cat1.species);//动物


// **优化空对象实现prototype属性继承**
function Extends(child,parent) {
  var F=function() {};
  F.prototype=parent.prototype;
  child.prototype=new F();
  child.prototype.constructor=child;
}
Extends(Cats,Animal);
var cat1=new Cats("loner11","蓝色");
console.log(cat1.species);//动物
   ```
   5."通过拷贝"对象的方法实现继承
   
   ```js
function Animal() {};
Animal.prototype.species="动物";
function Cats(name,color) {
  this.name=name;
  this.color=color;
}
function Extend(child,parent) {
  var p=parent.prototype;
  var c=child.prototype;
  for(var i in p){
      c[i]=p[i];
  }
  c.prototype=p;
}
Extend(Cats,Animal);
var cat1=new Cats("loner11","蓝色");
console.log(cat1.species);//动物
   ```

