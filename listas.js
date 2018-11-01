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
        return "Error: " + error;
    }
}

function addAt(list, elem, index) {
    try {
        if (isFull(list)) {
            throw "Full list";
        } else if (!isNaN(elem) && (index >= 0 && index < SIZE)) {
            list[index] = elem;
        }
        return size(list);
    } catch (error) {
        return "Error: " + error;
    }
}

function get(list, index) {
    var elem = 0;
    try {
        if (isEmpty(list) && (index >= 0 && index < SIZE)) {
            throw "Empty list, you can not get the item";
        } else if ((list[index] == undefined)) {
            throw "The position in the list is empty";
        } else {
            elem = list[index];
        }
        return elem;
    } catch (error) {
        return "Error: " + error;
    }
}

function toString(list) {
    var str = "";
    for (let i = 0; i < list.length; i++) {
        if (list[i] != undefined) {
            str += list[i] + " - ";
        } else if (list[i] == undefined) {
            str += " " + " - ";
        }
    }
    return str;
}

 

var list = create();
console.log(list);
console.log("Empty: " + isEmpty(list));
console.log("Full" + isFull(list));
console.log("size: " + size(list));
console.log("add: " + add(list, 3));
console.log("add: " + add(list, 5));
console.log("addAt: " + addAt(list, 2, 4));
console.log("size: " + size(list));
console.log("Get: " + get(list, 3));
console.log("toString: " + toString(list));

