function quickSort(arr) {
    var leftArr = [];
    var rightArr = [];
    if (arr.length === 0) {
        return [];
    } else {
        var newArr = arr.filter(function (element, index, self) {
            return self.indexOf(element) === index;
        });

        var basicNum = newArr[0];

        // var runArr=newArr.splice(0,1);
        // runArr.map(function (x) {
        //    if(basicNum<x){
        //        return rightArr.push(x);
        //    } else {
        //        return leftArr.push(x);
        //    }
        // });
        return quickSort(leftArr).concat(basicNum, rightArr);
    }
}

var arrs = [4, 3, 1, 5, 7, 8, 1, 3, 4];
console.log("原有的数值: " + arrs);
console.log("快速排序后的数组：" + quickSort(arrs));