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
   
  	```
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
   
   ``` js
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
   
   ``` js
   	 
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
   
   ``` js
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
   
   ``` js
     function Foo(){}
     Foo.prototype={
        constructor:Foo,
        name:"maroon",
        bar:"javascript"
        sayWaht:function(){
            alert(this.name+"said : love yu forever");
        }
     }; 
     var a=new Foo();
     console.log(a.constructor==Foo);
   ```
# 