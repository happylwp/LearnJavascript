// 获取数组中的最大值

// 1.基本解决办法
// function largestofArray(arr) {
//     var results=[];//
//     for(var n=0;n<arr.length;n++){ //遍历数组
//         var largetNumber=0;//存放较大值；
//         for(var sonArray=0;sonArray<arr[n].length;sonArray++){
//             if (arr[n][sonArray]>largetNumber){
//                 largetNumber=arr[n][sonArray];
//             }
//         }
//         results[n]=largetNumber;
//     }
//     return results;
// }
//
// console.log(largestofArray([[1,34],[456,2,3,44,234],[4567,1,4,5,6],[34,78,23,1]]));

// 中级解决办法
// function largestofNumber(arr) {
//     // 使用map()方法，通过回调函数，将子数组中的最大值组合在一起，得到一新数组
//     return arr.map(function (group) {
//         //通过reduce()方法，把每个子函数中的最大值返回到group数组中
//         return group.reduce(function (prev,current) {
//             //如果current大于prev,返回current，否则返回prev；
//             return (current>prev)?current:prev;
//         })
//     });
// }
// console.log(largestofNumber([[1,34],[456,2,3,44,234],[4567,1,4,5,6],[34,78,23,1]]));

// 最佳解决办法
// function largestofNumber(arr) {
//     return arr.map(Function.apply.bind(Math.max,null));//map作用：arr中的每一个参数将会调用map里面的函数；
// }
// console.log(largestofNumber([[1,24],[456,2,3,44,234],[4567,1,4,5,6],[34,78,23,1]]));
//这个方案使用Function.bind方法创建一个特殊的回调函数，就类似Math.max方法，
// 但其有一个Function.prototype.apply功能，将数组作为他的参数；
//Function.prototype.apply方法工作可以接受数组作为参数，到那时函数通过调用上下文，
//求最大值时给Function.prototype.apply方法传递一个null参数，告诉Math.max不需要任何上下文；


// var str="12345";
// Array.prototype.map.call(str,function (x) {
//     return x;
// }).reverse().join('');

// console.log(str);

// var str = '12345';
// Array.prototype.map.call(str, function(x) {
//     return x;
// }).reverse().join('');
// console.log(str);
// console.log(parseInt.length);

