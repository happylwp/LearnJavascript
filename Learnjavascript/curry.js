//柯理化：只传一部分参数来调用，返回一个函数去处理剩下的参数
// var add = function(x) {
//     return function(y) {
//         return x + y;
//     };
// };

// var increment = add(1);
// var addTen = add(10);
// console.log(increment(2)); //3
// console.log(addTen(3)); //13

var curry = require('loadsh').curry;
var match = curry(function(what, str) {
    return str.match(whiat);
});
var replace = curry(function(what, replacement, str) {
    return str.replace(what, replacement);
});

var filter = curry(function(f, ary) {
    return ary.filter(f);
})
var map = curry(function(f, ary) {
    return ary.map(f);
})

match(/\s+/g, "hello world");