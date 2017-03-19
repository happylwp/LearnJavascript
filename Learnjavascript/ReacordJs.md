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
    return x && x.trim();//IE9以下没有trim()方法;
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

#### indexOf()使用：由于indexOf()返回数组第一次搜索到的元素索引值，结合过滤函数filter将重复出现的元素根据比较关系返回布尔值，剔除对应元素；

## 闭包：
1.当外部函数返回内部函数时，相关参数和属性都保存在内部函数，

```js
//数组元素求和
function lazy_sum(arr){
    var sums=arr.reduce(function(x,y){
            return x+y;
        });
    }
    return sums;
}
var f=lazy_sum([1,2,3,4,5,6]);
console.log(f);//[Function sum]
console.log(f());//21
```
2.外部函数每次调用返回的内部函数都不相同（即使传入的参数相同）；但是调用结果一样 

```js
var f1=lazy_sum([1,2,3,4,5]);
var f2=lazy_sum([1,2,3,4,5]);
console.log(f1===f2);//false
``` 

3.返回函数调用可变变量，当外部函数返回内部函数并不立即执行，直到调用该内部函数时；
例子：

```js
function count(){
    var arr = [];
    for(var i=1;i<=3;i++){
        arr.push(function(){
            return i*i;
        });
    }
}

var results=count();
var f1=results[0];
var f2=results[1];
var f3=results[2];
console.log(f1());//16
console.log(f2());//16
console.log(f3());//16
//解析：当results调用count()方法，f1,f2,f3并不立即执行返回函数；直到f1(),f2(),f3()时，i已经循环结束,此时的i等于4；所以返回4；

//解决返回函数不立即执行问题：将返回函数改造成一个立即执行匿名函数

function count(){
    var arr=[];
    for(var i=1;i<=3;i++){
        arr.push(function (n){
            return function(){
                return n*n;
            }
        })(i);//将i的值赋值给n,根据匿名函数的表达式原则，会立即执行值为i时的匿名函数求出乘积；
    }
}

var results=count();
var f1=results[0];
var f2=results[1];
var f3=results[2];
console.log(f1());//1
console.log(f2());//4
console.log(f3());//9
```
4.闭包是能够携带状态的函数，并且他的状态对外隐藏；
例子：

```js
function create_counter(initial){
    var x=initial || 0;
    return {
    return {
        inc : function(){
            x+=1;
            return x;
        }
    }
}

var c1=create_counter();
console.log(c1.inc());//1
console.log(c1.inc());//2
console.log(c1.inc());//3

var c2=create_counter(10);
console.log(c2.inc());//11
console.log(c2.inc());//12
console.log(c2.inc());//13
```

#### 匿名函数：没有名称的函数，但是能够传递参数，也可以复制给一个变量
匿名函数理解：

```js
//一般函数定义
function demo(){
//函数主体；
}

//上面的函数实际是将函数主题赋值给demo变量；所以可以这样写：

var demo=function (){
    //函数主体
}
//调用demo方法时使用demo()就可以;（小括号的作用就是将demo变量指向的函数主体作为函数执行，不加小括号就会将demo变量的函数主体部分识别为字符串）
```

#### 数据类型注意：
1. 一般查看数据类型使用typeof操作符获取对象类型；
    例子：
    
    ```
    typeof 123;//'number'
    typeof NaN;//'number‘
    typeof 'str';//'string'
    typeof typeof math.abs;//'function'
    typeof [];//'object'
    typeof {};//'object'
    typeof null;//'object'
    typeof Array;//'object'
    ```
2. 包装对象（new）,虽然它们数值上一样，但是类型已经成为'object';
    例子：
    
    ```
    typeof new Nnmber(123);//'object'
    new Number(123)===123;//false
    ```
#### 3. 使用parseInt()或者prseFloat()来转换任意数据类型到number；
4. 使用包装的string()来讲任意类型转换成string，或者直接调用某个对象的toString()方法；
      1). number对象没有toString（）方法;
      例子：
      
      ```
      123.tostring();//syntaxError;
      解决：123..toString();//'123'
      或者：(123).toString();//'123'
      ```
      2).null和undifined没有toString()方法；尽管null类型是对象，
5. Array判断要使用Array.isArray(arr);
6. 判断某个全局变量是否存在使用：typeof window.myVar==='undifined'


 
### 正则表达式：
1. \d能够匹配一个数字，\w能够匹配一个字母或者数字
    例子：
    
    ```
    '00\d':'007'或者'00A'
    '\d\d\d':'010'
    
    ```
2. .可以匹配任意字符
    例子：
    
    ```
    'js.':'jsp'或者'js1','js!'
    ```
3. 匹配变长的字符使用：
     1). *表示任意个字符（包括0个），
     2). +表示至少一个字符
     3). ?表示0个或一个字符
     4). {n}表示那个字符，{n,m}表示n-m个字符；
     
4. \s匹配一个空格；
5. 精确匹配使用[]表示范围；
    例子：
    
    ```
    [0-9a-zA-Z\_]:匹配一个数字或者字母或者下划线
    [0-9a-zA-Z\_]+：匹配至少由一个数字，字母或者下划线组成的字符串如：'a100','0_z','js2015'
    ```


##### 正则表达式使用：
1. 正则表达式通过两种方式使用：
    a). 以字符串的形式直接赋值给一个变量(开头结尾都需要/进行转义);
    b). 通过new RexExp('正则表达式')创建一个RegExp对象（转义使用\\）;
    例子：
    
    ```
    var re1=/ABC\-001/;
    var re2=new RegExp('ABC\\-001');
    re1;//ABC\-001;
    re2;//ABC\-001;
    ```
2. RegExp的原生方法test()用于测试给定的字符串是否符合条件；返回值是布尔值；
3. RegExp的原生方法exex()匹配成功返回一个Array,第一个元素是匹配到的整个字符串，后面的表示匹配成功的字符串；陪陪失败该方法返回null;


##### 正则表达式的分组：
1. ()表示要提取的分组；
2. ^表示行开头，$表示行结束； 

### JSON
1. 将对象属性序列化成JSON格式字符串：
    例子：
    
    ```
    var xioming={        
      name:'xiaoming',
      age:14,
      gender:true,
      height:1.65,
      grade:null,
      'middle-school':'\"W3C\" Middle School',
      skills: ['JavaScript', 'Java', 'Python', 'Lisp']  
    }
    JSON.stringify(xiaoming);//{"name":"小明","age":14,"gender":true,"height":1.65,"grade":null,"middle-school":"\"W3C\" Middle School","skills":["JavaScript","Java","Python","Lisp"]}'
    ```
    
### DOMC操作：
1. 更新节点的内容
2. 节点遍历
3. 添加节点
4. 删除节点

#####  1.更新节点内容
a). 使用innerHtml(),例子：
    
```
<p id="testID">hello</p>

//将hello改为world！；
var getNode=document.getElementById('testID');//获取节点
getNode.innerHtml="world!";
<p id="testID">world!</p> 

getNode='<span style="color:red;">world!</span>';//这样做要小心xss攻击；

新的结构为：
<p id="testID"><span style="color:red">world!<span></p>
```

b). 修改innerText或者textContent属性,这样可以自动对html编码，不会设置任何标签；innnerText不返回隐藏文本，textContent返回所有文本；
例子：

```
<p id="testID">hello</p>

var getNode=document.getElementById("testID");
getNode.innerText='<script>alert("hi!");</script>'

<p id="testID">&lt;script&gt;alert("hi!")&lt;/script&gt;</p>
```

c). 给标签添加或者修改样式使用style，例子：

```
    <p id="testID">hello</p>
    
    var getNode=document.getElementById("testID");
    getNode.style.color="#ff0000";
    getNode.style.fontWeight="bold";//css中使用-连接的需要改成驼峰格式
```

##### 插入DOM
1. 直接使用innerHtml添加（但是要小心xss攻击），而且会覆盖原有的子节点；
2. appendChild()方法在父节点的子节点后添加；
3. insertBefore()方法：parentElement.insertBefore(childElement,refenceElement);
例子：

``` html
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
</div>
```
``` js
//将Haskell放到Python前面；

    var parentEle=document.getElementByID("list");
    var childEle=document.creatElement("p");
    var refenceEle=document.getElementById("Python");
    
    childEle.id="haskell";
    childEle.innnerHtml="haskell";
    parentEle.insertBefore(childEle,refenceEle);
```


#### 删除节点：首先找到该节点，还有父节点，然后使用removeChild()方法删除;虽然该方法删除节点后不在文档树上，但是内存依旧存在；
删除实例：

```html
<div id="parent">
    <p>First</p>
    <p>Second</p>
</div>
```
```js
    var parentnode=document.getElementById("parent");
    parentnode.removeChild(parentnode.children[0]);//成功删除First及该标签
    parentnode.removeChild(parentnode.children[1]);//报错：因为children属性只有可读，当删除第一个标签后children属性会实时更新；
```

#### 表单操作：
1. value方法获取用户输入文本信息；
2. checked方法获取用去选择信息；
3. 提交表单两种方法（暂不包含ajax）:
    a). form表单里面的button添加一个点击提交事件submit();
    例子：
    
    ```html
    <form id="formID">
        <input type="text" name="test">
        <button onclick="submit()"></button>
    </form>
    ```
    ```js
    function submit(){
        var form = document.getElementById('test-form');
        // 可以在此修改form的input...
        // 提交form:
        form.submit();
    }//这种方式提交会扰乱浏览器的form提交；浏览器默认两种提交方式：点击<button type="submit">出发提交事件 或者 输入完最后一项信息点击enter键提交；
    
    //第二种：响应form表单的onsubmit()
    
    <form id="test-form" onsubmit="return checkForm()">
        <input type="text" name="test">
        <button type="submit">Submit</button>
    </form>
    
    <script>
    function checkForm() {
        var form = document.getElementById('test-form');
        // 可以在此修改form的input...
        // 继续下一步:
        return true;//返回true浏览器才会继续提交，
    }
    </script>
    ```



    



