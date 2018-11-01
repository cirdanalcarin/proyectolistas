"use-strict";

var SIZE = 5;

function create() {
    var list = [];
    return list;
}

function isEmpty(list) {
    return (list.length === 0);
}

function isFull(list) {
    return (list.length === SIZE);
}

function size(list) {
    return list.length;
}

function add(list, elem) {
    try {
        if (isFull(list)) {
            throw "Full list";
        } else {
            if (!isNaN(elem)) {
                list.push(elem);
            } else {
                throw "The element is not a number";
            }
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
        } else {
            if (!isNaN(elem) && (index >= 0 && index < SIZE)) {
                list.splice(index, 0, elem);
            } else {
                throw "The index is out of range or the elemnt is not a number";
            }
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
    return list.join("-");
}

function indexOf(list, elem) {
    var index;
    try {
        if (isNaN(elem)) {
            throw "The element is not a Number";
        } else if (!isEmpty(list)) {
            index = list.indexOf(elem);
            return index;
        }
    } catch (error) {
        return "Error: " + error;
    }
}

function lastIndexOf(list, elem) {
    var index;
    try {
        if (isNaN(elem)) {
            throw "The element is not a Number";
        } else if (!isEmpty(list)) {
            index = list.lastIndexOf(elem);
            return index;
        }
    } catch (error) {
        return "Error: " + error;
    }
}

function capacity(list) {
    return list.length;
}

function clear(list) {
    return list.length = 0;
}

function firstElement(list) {
    try {
        if (isEmpty(list)) {
            throw "Empty list";
        } else {
            return list.shift();
        }
    } catch (error) {
        return "Error: " + error;
    }
}

function lastElement(list) {
    try {
        if (!isEmpty(list)) {
            return list.slice(list.length - 1);
        } else {
            throw "Empty list";
        }
    } catch (error) {
        return "Error: " + error;
    }
}

function remove(list, index) {
    var rm = 0;
    try {
        if (!isEmpty(list) && (index >= 0 && index < SIZE)) {
            rm = list.splice(index, 1);
        } else {
            throw "The index is out of range or the elemnt is not a number";
        }
        return rm;
    } catch (error) {
        return "Error: " + error;
    }
}

function removeElement(list, elem) {
    var rm;
    var index = indexOf(list, elem);
    try {
        if (isNaN(elem)) {
            throw "The element is not a Number";
        } else if (!isNaN(list[index])) {
            list.splice(index, 1);
            return rm = true;
        } else {
            return rm = false;
        }
    } catch (error) {
        return "Error: " + error;
    }
}

function set(list, elem, index) {
    var previousElem = list[index];
    list.splice(index, 1, elem);
    return previousElem;
}

function test() {
    var list = create();
    console.log("Longitud inicial: " + size(list));
    console.log("Capacidad: " + capacity(list));
    console.log("Esta vacia: " + isEmpty(list));
    console.log("ESta llena: " + isFull(list));

    console.log("--------------------------------------");

    console.log("Añadiendo un elemento a la lista...");
    add(list, 2);
    console.log(list);

    console.log("Añadiendo otro elemento a la lista...");
    add(list, 3);
    console.log(list);

    console.log("Añadiendo otro elemento a la lista...");
    add(list, 8);
    console.log(list);

    console.log("Añadiendo otro elemento a la lista...");
    add(list, 7);
    console.log(list);

    console.log("Añadiendo un elemento a la lista en una posición indicada...");
    addAt(list, 4, 3);
    console.log(list);

    console.log("Obteniendo elemento indicando el indice: " + get(list, 1));

    console.log("--------------------------------------");

    console.log("El elemento 4 esta en la posicion " + indexOf(list, 4));
    console.log("El elemento 3 esta en la posicion " + lastIndexOf(list, 3));

    console.log("--------------------------------------");

    console.log("Convertido a String: " + toString(list));
    console.log("Primer Elemento: " + firstElement(list));
    console.log("Ultimo Elemento: " + lastElement(list));
    console.log(list);
    console.log("Reemplazar elemento " + set(list, 5, 1));
    console.log(list);
    console.log("Longitud final: " + size(list));

    console.log("--------------------------------------");

    console.log("Eliminar elemento indicando indice: " + remove(list, 1));
    console.log(list);
    console.log("Eliminar elemento indicando indice: " + remove(list, 0));
    console.log(list);
    console.log("Eliminar elemento " + removeElement(list, 4));
    console.log(list);

    console.log("--------------------------------------");

    console.log("Limpiando lista " + clear(list));
}
window.onload = test();