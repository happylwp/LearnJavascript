### 剩余参数（rest）：
1.如果一个函数的最后一个形参是以...为前缀的，则在函数被调用时，该形参会成为一个数组，数组中的元素都是传递给该函数的多出来的实参的值
    
   ```js
   function (a,b,...theArgs){
        }
   ```
    
   2.剩余参数与arguments对象的区别：

            1.剩余参数只包含哪些1没有对应形参的的实参，而arguments对象包含了传给函数的实参；
            2.arguments对象不是一个真实的数组，而剩余参数的真实参数是真实的Array实例，它能够直接使用所有的数组方法，例如：sort，map，foreach，pop.
            3.arguments对象还有一些附加的属性；

### Function.prototype.call()

   1.call()方法在使用一个指定的this值和如干戈制定的参数值的前提下调用某个函数或者方法；
   
```js
 function produce(name,price){
   this.name=name;
   this.price=price;
   }

   function Food(name,price){
   produce.call(this,name,price);
   thia.category='food';
   }
   等同于：function Food（name,price）{
        this.name=name;
        this.price=price;
        this.category='food';
   }
  
```

#### 在函数内部定义的函数，this指向前一个函数对象，在后一个函数定义时，this指向undefined;
（在非严格模式，它重新指向全局对象window）


#### 高阶函数：变量可以指向函数，函数的参数能接受变量；一个函数可以接受另一个函数作为参数，就是高阶函数；

   ```js
   function add(x,y,f){
        return f(x)+f(y);
   }
   console.log(add(-5,6,Math.abs));//11

    计算过程：
    x=-5;
    y=6;
    f(x)+f(y)=>Math.abs(-5)+Math.abs(6)==>11;
   ```
   
#### filter函数：类似map()；能够将Array的某一些元素过滤掉，剩下的返回；filter将传入的函数一次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素；
1.例如：将一个数组中的偶数删掉，

```js
var arr=[1,2,3,4,5,9,10,15];
var r=arr.filter(function (x){
    return x%2!==0;
});
r;//[1,3,5,9,15]
```
2.将一个字符串组成的数组进行处理，将字符串内的空格才删除；

```js
var arr=['A','','B',null,undefined,'c',' '];
var r=arr.filter(function(x){
    return x&&x.trim();//IE9以下没有trim()方法;
});
r;//['A','B','c']
```
###### filter()函数一共三个参数，一般只是只是使用第一个，代表数组的元素，在filter()接受的是回调函数时，使用三个参数，分别是，element:代表所有元素；index:代表元素的索引值; self:代表元素本身，

例子：讲一个数组元素的重复元素去除：

```js
    var arr=[1,2,3,4,1,2,3,5,6,4,8,10];
    var s=arr.filter(function(element,index,self){
        return self.indexOf(element)===index;
    });
    s;//[5,6,8,10]
    //原理：indexOf()返回的是self元素的第一个出现的索引值，当出现第二个时索引值不相等,filter()函数将其过滤；
```





