"use-strict";

var SIZE = 5;

function create() {
    var list = new Array(SIZE);
    return list;
}

function isEmpty(list) {
    var empty = false;
    if (isNaN(list[0])) {
        return empty = true;
    } else {
        return empty;
    }
}

function isFull(list) {
    var full = false;
    if (list[SIZE - 1] === list.length) {
        return full = true;
    } else {
        return full;
    }
}



var list = create();
console.log(list);
console.log(isEmpty(list));
console.log(isFull(list));
console.log(list);