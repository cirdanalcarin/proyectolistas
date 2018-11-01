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

function size(list) {
    var counter = 0;
    for (let i = 0; i < list.length; i++) {
        if (!isNaN(list[i])) {
            counter++;
        }
    }
    return counter;
}

function add(list, elem) {
    try {
        if (isFull(list)) {
            throw "Full list";
        } else if (!isNaN(elem)) {
            list[size(list)] = elem;
        }
        return size(list);
    } catch (error) {
        console.log("Error: " + error);
    }
}

function addAt(list, elem, index) {
    try {
        if (isFull(list)) {
            throw "Full list";
        } else if (!isNaN(elem) && (index >= 0 && index < SIZE)) {
            list[index] = elem;
        }
    } catch (error) {
        console.log("Error: " + error);
    }
}

function get(list, index) {
    var elem = 0;
    try {
        if (isEmpty(list) && (index >= 0 && index < SIZE)) {
            throw "Empty list, you can not get the item";
        } else {
            elem = list[index];
        }
        return elem;
    } catch (error) {
        console.log("Error: " + error);
    }
}
var list = create();
console.log(list);
console.log(isEmpty(list));
console.log(isFull(list));
console.log(size(list));
