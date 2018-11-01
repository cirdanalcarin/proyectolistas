"use-strict";

var SIZE = 5;

function create() {
    var list = [];
    return list;
}

function isEmpty(list) {
    var empty = false;
    if (list.length === 0) {
        return empty = true;
    } else {
        return empty;
    }
}

function isFull(list) {
    var full = false;
    if (list.length === SIZE) {
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
        } else {
            throw "The index is out of range or the elemnt is not a number";
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
        if (list[i] !== undefined) {
            str += list[i] + " - ";
        } else if (list[i] === undefined) {
            str += " " + " - ";
        }
    }
    return str;
}

function indexOf(list, elem) {
    var index;
    try {
        if (isNaN(elem)) {
            throw "The element is not a Number";
        } else if (!isEmpty(list)) {
            for (let i = 0; i < list.length; i++) {
                if (list[i] === elem) {
                    return index = i;
                }
            }
        } else {
            return index = -1;
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
            for (let i = 0; i < list.length - 1; i++) {
                if (list[i] === elem) {
                    return index = i;
                }
            }
        } else {
            return index = -1;
        }
    } catch (error) {
        return "Error: " + error;
    }
}

function capacity(list) {
    return SIZE;
}

function clear(list) {
    return list.length = 0;
}

function firstElement(list) {
    var elem;
    try {
        if (isEmpty(list)) {
            throw "Empty list";
        } else {
            return elem = list[0];
        }
    } catch (error) {
        return "Error: " + error;
    }
}

function lastElement(list) {
    var elem;
    try {
        if (!isEmpty(list)) {
            return elem = list[list.length - 1];
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
            rm = list[index];
            list[index] = undefined;
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
            list[index] = undefined;
            return rm = true;
        } else {
            return rm = false;
        }
    } catch (error) {
        return "Error: " + error;
    }
}

function set(list, elem, index) {
    var previousElem;
    previousElem = list[index];
    list[index] = elem;
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