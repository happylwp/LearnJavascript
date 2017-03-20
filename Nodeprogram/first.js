'use strict';
var s = 'hello';

function greet(name) {
    console.log(s + ',' + name + '!');
}

function dosomething() {
    console.log("play game;");
}

module.exports = {
    greet: greet,
    dosomething: dosomething
}