'use strict';
// var greet = require('./first');
// var s = 'loner11';
// greet(s);

// var module = { id: 'first', exports: {} };
// var load = function(module) {
//     function greet(name) {
//         console.log('Hello,' + name + '!');
//     }
//     module.exports = greet;
//     return module.exports;
// };
// var exported = load(module);
// save(module, exported);

// var first = require('./first');
// var s = 'loner11';
// first.greet(s)
// first.dosomething();

// var fs = require('fs');
// fs.readFile('test.png', function(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         var newString = data.toString('utf-8');
//         console.log(newString); //返回一个Buffer对象
//         console.log(data.length + "bytes");
//     }
// });//异步读取二进制文件；

// fs.readFile('testOut.txt', 'utf-8', function(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// }); //异步读取非二进制文件内容

// var data = 'hello loner11';
// fs.writeFile('testOut.txt', data, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("ok!");
//     }
// });//异步写文件；

// 读取文件状态：
// fs.stat('test.png', function(err, stat) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("是否是文件：" + stat.isFile());
//         console.log("是否是目录：" + stat.isDirectory());
//         if (stat.isFile()) {
//             console.log(stat.size);
//             console.log(stat.birthtime);
//             console.log(stat.mtime);
//         }
//     }
// });

// var fs = require('fs');
// var rs = fs.createReadStream('testOut.txt', 'utf-8');
// rs.on('data', function(chunk) {
//     console.log('DATA:' + chunk);
// });

// rs.on('end', function() {
//     console.log('END');
// });
// rs.on('error', function(err) {
//     console.log("Error: " + err);
// });

// var fs = require('fs');
// var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
// ws1.write('使用Stream写入文本数据...\n');
// ws1.write('END.');
// ws1.end();

// var ws2 = fs.createWriteStream('output2.txt');
// ws2.write(new Buffer('使用stream写入二进制数据...\n', 'utf-8'));
// ws2.write(new Buffer('END.', 'utf-8'));
// ws2.end();

// var fs = require('fs');
// var rs = fs.createReadStream('output1.txt');
// var ws = fs.createWriteStream('output2.txt');
// rs.pipe(ws);

// // 导入http模块:
// var http = require('http');

// // 创建http server，并传入回调函数:
// var server = http.createServer(function(request, response) {
//     // 回调函数接收request和response对象,
//     // 获得HTTP请求的method和url:
//     console.log(request.method + ': ' + request.url);
//     // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
//     response.writeHead(200, { 'Content-Type': 'text/html' });
//     // 将HTTP响应的HTML内容写入response:
//     response.end('<h1>Hello world!</h1>');
// });

// // 让服务器监听8080端口:
// server.listen(8080);

// console.log('Server is running at http://127.0.0.1:8080/');

// var url = require('url');
// console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));

// var path = require('path');

// //解析当前目录
// var workdir = path.resolve('.'); ///Users/liuwupeng/myapp/learn-test/Nodeprogram

// //组合完整的📃路径：当前目录+'pub'+'index.html':
// var filePath = path.join(workdir, 'trangle.html');
// console.log(filePath);

//文件服务器实例：

var fs = require('fs'); //文件读取与写入
var http = require('http'); //处理http请求与响应
var path = require('path'); //查找文件
var url = require('url'); //查找本地文件
//从命令行参数获取root目录，默认是当前目录
var root = path.resolve(process.argv[2] || '.');

console.log("static root dir: " + root);
//创建服务器：
var server = http.createServer(function(request, response) {
    //获取URL的path，类似'/css/bootstrap.css:'
    var pathname = url.parse(request.url).pathname;
    var filepath = path.join(root, pathname);
    fs.stat(filepath, function(err, stat) {
        if (!err && stat.isFile) {
            //没有出错，文件存在；
            console.log('200' + request.url);
            response.writeHead(200);
            //将文件流导向response:
            fs.createReadStream(filepath).pipe(response);
        } else {
            //出错，或者文件不存在；
            console.log('404' + request.url);
            response.writeHead(404);
            response.end('404 not found page!');
        }
    });
});

server.listen(8080);
console.log("Server is running at http://127.0.0.1:8080/");