function fen(arr) {
    var lanse = [];
    var hongse = [];
    var baisse = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "蓝色") {
            lanse,
            push(arr[i]);
        }
        else if (arr[i] === '白色') {
            baisse.push(arr[i]);
        } else {
            hongse.push(arr[i]);
        }
    }
    return hongse.concat(baisse, lanse);
}