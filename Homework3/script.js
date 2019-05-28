'use strict';

let x;
let y;
let _;
let z;
do {
    x = prompt('Enter first number:', x);
} while ((x === "") || (x === null) || (isNaN(x) === true) || (Boolean(x) === false));

do {
    y = prompt('Enter second number', y);
} while ((y === "") || (y === null) || (isNaN(y) === true) || (Boolean(y) === false));

do {
    _ = prompt('Enter operation:', _);
} while ((_ !== "/") && (_ !== "+") && (_ !== "-") && (_ !== "*"));

function sum() {
    z = x + y;
    console.log(z)
}

function min() {
    z = x - y;
    console.log(z)
}

function mult() {
    z = x * y;
    console.log(z)
}

function div() {
    z = x / y;
    console.log(z)
}

switch (_) {
    case "+": sum();
    break;
    case "-": min();
    break;
    case "*": mult();
    break;
    case "/": div();
    break;
}



