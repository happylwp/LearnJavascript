 ##javascript对象创建模式：
 
 #### 1：使用new关键字创建
     var gf=new Object();
     gf.name="maoon";
     gf.bar="javascript";
     gf.satwhat=function () {
         console.log(this.name+"said :love you forever");
     }
 
 #### 2:使用字面量创建
     var gf={
         name:"maroon",
         bar:"javascript",
         saywhat:function () {
             console.log(this.name+"said :love you forever");
         }
     }
 
#### 3:工厂模式创建
     function createGF(name,bar){
         var o=new Object();
         o.name=name;
         o.bar=bar;
         o.saywhat=function () {
             alert(this.name+"said :you love forever");
         }
         return 0;
     }
     var gf1=createGF("maroon","javascript");
    
    
    
   #### 4:构造函数
     function GF(name,bar){
        this.name=name;
        this.bar=bar;
        this.saywhat=function(){
            alert(this.name+"said: love you forever");
        }
     }
     var gf1=new GF("maroon","javascript");
     
   ##原型对象模式
   ####1.原型模式中，不必再构造函数中定义实例属性，可以将属性信息直接敷于原型对象；
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
   ####2.所有原型对象都含有一个constructor属性，这个属性是一个指向包含prototype属性函数的一个指针。
   
   ####3.所有的对象都有一个原型对象，当我们访问一个对象中的属性时，首先会访问实例对象中有没有该属性，如果没有则继续查找原型对象；
   
   ####4.