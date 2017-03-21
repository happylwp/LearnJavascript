### node小程序：
 1. 模块：将每个功能的函数放在单独的js文件然后通过module.exports将该函数作为对外的接口；例子：

```js
//在first.js文件
'use strict';
var s="hello"；
function greet(name){
    console.log(s+","+name+"!");
}
module.exports=greet;
```
```js
//在main.js文件
'use strict';
var greet=require('./first');//引入模块greet; first.js与main.js处于同级文件目录但是需要使用相对路径引入模块；不然node会依据内置模块，全局模块，当前模块来查找该模块；
var s="loner11";
greet(s);//hello,loner11;
```
2. CommonJS规范：

    a). 不同模块的相同变量名互不冲突，如果别的模块需要使用别的模块变量可以使用：
    ```js
    module.exports=variable;//输出变量类型可以是函数，对象，数组；
    ```
    b). 别的模块想要引用别的模块变量使用：
    ```js
    var ref=require('别的模块名；')；
    ```
    
3. 两种方法在一个模块中输出多个变量(类型为：对象)；
    a). 对module.expors赋值：
    
    ```js
    function hello(){
        console.log("hello loner11!");
    }
    function greet(name)"{
        console.log("hello"+name+"!");
    }
    module.exports={
        hello:hello,
        greet:greet
    }
    ```
    b).直接使用exports:
    
    ```js
    function hello(){
        console.log("hello loner11!");
    }
    function greet(name){
        console.log("hello"+name+"!");
    }
    exports.hello=hello;
    exports.greet=greet;
    ```
    不能直接对exports赋值：
    
    ```js
    exports={
        hello:hello,
        greet:greet
    }
    ```
    由于node准备的exports变量与module.exports变量实际上是同一个变量，并且都初始化为空对象{}，所以能够这样改写：
    
    ```js
    exports.hello=function(){console.log("hello loner11!");};
    exports.greet=function(name){console.log("hello"+name+"!");}
    ```
    或者：
    
    ```js
    module.exports.hello=function(){console.log("hello loner11!");}
    module.exports.greet=function(name){console.log("hello"+name+"!");}
    ```
    
    如果要输出的变量是函数或者数组只能够使用module.exports对象赋值；
    
    
#### 基本模块：
将一个事件放在另一个事件后面执行使用process.nexeTick();
例子：

```js
process.nextTick(function(){
    console.log("nextTick callback");
});
console.log("nexttick is set!");

结果：nexttick is set!
     nextTick callback
```    

### node内置模块：
1. fs:文件系统模块（FileSystem）:负责读写文件,异步读取文件；

    a ). 读取文本文件如.txt格式，例子：
    
    ```js
    var fs=require('fs');
    fs.readFile('samiple.text','utf-8',function(err,data){
        if(err){//文件读取正常返回null或者undifined
            console.log(err);
        }else{
            console.log(data);
        }
    });//readFile()的第一个参数为文件名（该文件必须在当前目录下），第二个为文本编码格式，第三个回调函数(第一个参数是文件读取失败时返回的错误信息，第二个为读取到的string)；
    ```
    b ). 读取非二进制文件(图片等)：例子：
    
    ```js
        var fs=require('fs');
        fs.readFile('test.png',function(err,data){
            if(err){
                console.log(err);
            }else{
                console.log(data);
                console.log(data.length+" bytes");
            }
        });//返回结果为一个buffer对象，是一个包含0️⃣个或者任意个字节的数组（但是和数组不同）；
    ```
    返回的buffer对象能够转成string，例子：
    
    ```js
        var newString=data.toString('utf-8');//以UTF-8的格式将buffer对象转成字符串；
        console.log(newString);
    ```
    返回的string转成buffer对象：
    
    ```js
    //string->buffer
        var newBuffer=new Buffer('sample.txt','utf-8');
    ```
c ). 同步读取文件：（没有回调函数，直接返回结果data）
    例子：
        
    ```js
    var fs=require('fs');
    var newdata=fs.readFileSync('test.png','utf-8');
    console.log(newdata);
    ```
    同步读取文件出错需要使用try...catch捕获错：
    
    ```js
    var fs=require('fs');
    try{
        var data=fs.readFileSync('test.png','utf-8');
        console.log(data);
    }catch(err){
        console.log(err);
    }
    ```
    d ). 写文件：fs.writeFile()
        例子：
        
   ```js
   var fs=require('fs');
   var data='hello loner11!';
   fs.writeFile('output.txt',data,function(err){
       if(err){
           console.log(err);
       }else{
           console.log("ok!");
       }
   });  //writeFile()第一个参数为写入文件的名，第二个参数是写入内容；结果为在同级目录生成testOut.txt文件，控制台输出"ok!" ，
   ```
   写文件通读取文件也有同步操作：
        
   ```js
   var fs=require('fs');
   var data='hello loner11!';
   fs.writeFileSync('textOut.txt',data);
   ```
   e ). 读取文件生成，修改等信息使用stat:
   
   ```js
   var fs=require('fs');
   fs.stat('testOut.txt',function(err,stat){
       if(err){
           console.log(err);
       }else{
           console.log("是否是文件："+stat.isFile());
           console.log("是否是目录："+stat.isDictionary());
           if(stat.isFile()){
               console.log(stat.size);
               console.log(stat.birthtime);
               console.log(stat.mtime);
           }
       }
   });
   
   //结果为：  是否是文件：true
              是否是目录：false
              240951
              2017-03-20T11:00:46.000Z
              2017-03-20T11:01:30.000Z
   ```
2. stream(一个仅服务区可用模块):目的是支持”流“这种数据结构，流是一种抽象数据结构，也能当做对象来使用；
        a).从文件流读取文件内容：
        例子：
        
    ```js
    var fs=require('fs');
       var rs=fs.createReadStream('textOut.txt');
       rs.on('data',function(chunk){
       console.log("DATA:"+chunk);
       });
       rs.on('end',function(){
           console.log("END!");
       });
       rs.on('error',function (error){
           console.log(error);
       });
       //  hello,loner11!
           play game;
           DATA: hello loner11
           END

    ```
    b). 将信息写入文件：使用createWriteStream();必须带文件名，否则会自动创建；
        例子：
        
       ```js
       var fs=require('fs');
       
       var ws1=fs.createWriteStream('outTxt.txt','utf-8');
       ws1.write("使用Stream写入文本数据...\n");
       ws1.end();//
       ```
       （所有的读取文件都继承自stream.Readable(),写内容都继承stream.Writeable().）
 
 3.http(模块)：两个参数request,response;
       1. request对象封装http的请求，调用http的响应属性和方法获取请求信息；
       2. response对象封装http的响应，调用response方法将http响应的信息返回给浏览器；
        
 ```js
    'use strict';

            // 导入http模块:
            var http = require('http');
            
            // 创建http server，并传入回调函数:
            var server = http.createServer(function (request, response) {
                // 回调函数接收request和response对象,
                // 获得HTTP请求的method和url:
                console.log(request.method + ': ' + request.url);
                // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
                response.writeHead(200, {'Content-Type': 'text/html'});
                // 将HTTP响应的HTML内容写入response:
                response.end('<h1>Hello world!</h1>');
            });
            
            // 让服务器监听8080端口:
            server.listen(8080);
            
            console.log('Server is running at http://127.0.0.1:8080/');
```

4.文件服务器（url模块）：使用parse()将一个字符串解析为一个url对象；
例子：

```js
'use strict';

var url = require('url');

console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));
```
本地文件解析使用path模块：

```js

```

     

