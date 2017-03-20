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

var first = require('./first');
var s = 'loner11';
first.greet(s)
first.dosomething();

var fs = require('fs');
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
fs.stat('test.png', function(err, stat) {
    if (err) {
        console.log(err);
    } else {
        console.log("是否是文件：" + stat.isFile());
        console.log("是否是目录：" + stat.isDirectory());
        if (stat.isFile()) {
            console.log(stat.size);
            console.log(stat.birthtime);
            console.log(stat.mtime);
        }
    }
});