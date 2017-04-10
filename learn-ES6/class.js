// function Point(x,y){
//     this.x=x;
//     this.y=y;
// }
// Point.prototype.toString=function(){
//     return '('+this.x+','+this.y+')';
// }
// var p=new Point(1,2);
// console.log(p);

// class Point{
//     constructor(x,y){
//         this.x=x;
//         this.y=y;
//     }
//     toString(){
//        return '('+this.x+','+this.y+')';
//     }
// }
// var p=new Point(1,2);
// console.log(p.toString());

//一次像类中添加多个方法：
// class Point{
//     constructor(){

//     }
// }
// Object.assign(Point.prototype,{
//     toString(){console.log("1")},
//     toValue(){console.log(2)}
// });
// var p=new Point();
// console.log(p.toString()+p.toValue());

// var Point=function(x,y){

// };
// Point.prototype.toString=function(){

// };
// console.log(Object.keys(Point.prototype));
// console.log(Object.getOwnPropertyNames(Point.prototype));

// class Foo{
//     constructor(){
//         return Object.create(null);
//     }
// }
// console.log(new Foo() instanceof Foo);//false


//class 不存在变量提升
// var p=new Foo();
// class Foo{

// }

// {
//     // let Foo=class{};
//     class Bar extends Foo{

//     }
//     let Foo=class{};
// }

//类也能使用表达式的形式定义
// const Myclass=class Me{
//     getClassName(){
//         return Me.name;
//     }
// };
//当前类的名字是Myclass,Me只是class内部代码可用，指代当前类

// let inst=new Myclass();
// console.log(inst.getClassName());
// console.log(Me.name);
//验证Me只是指定当前类测试


//class里面的私有方法
// class Widget{
//     foo(baz){
//         this._bar(baz);
//     }
//     _bar(baz){
//         return this.snaf=baz;
//     }
// }
//该命名方法实现私有方法对外部是可见

// class Widget{
//     foo(baz){
//         bar.call(this,baz);
//     }
// }
// function bar(baz){
//     return this.snaf=baz;
// }

//this指向
// class Logger{
//     constructor(){
//         // this.printName=this.printName.bind(this);
//         this.printName=(name='this')=>{
//             this.print('Hello '+name);
//         }
//     }
//     printName(name='there'){
//         this.print('Hello '+name);
//     }
//     print(text){
//         console.log(text);
//     }
// }
// const logger=new Logger();
// const {printName}=logger;
// printName();

// class Point{
// }

// class ColorPoint extends Point{
//     constructor(){
//         super();
//         // super(x,y);//调用父类的构造函数constructor(x,y);
//         // this.color=color;
//     }
//     // toString(){
//     //     return this.color+' '+super.toString();//调用父类的toString（）
//     // }
// }
// // let cp=new ColorPoint(); 
// console.log(new ColorPoint())