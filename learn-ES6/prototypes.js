var one={x:1}
var two=new Object()
console.log(one.__proto__ === Object.prototype )
console.log(two.__proto__===Object.prototype)

console.log(one.toString===one.__proto__.toString)