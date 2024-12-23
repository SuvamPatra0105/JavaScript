if(true) {
    let a = 10;
    const b = 5;
    var c = 8;
}

console.log(a)      // ReferenceError: a is not defined.. block scope of a (let)
console.log(b)      // ReferenceError: b is not defined.. block scope of b (const)
console.log(c)      // 8... global scope of c (var)


// Hoisting
/* Variable Hoisting */
console.log(d);     // undefined.. accessible but not initialized
var d

console.log(p);     // ReferenceError: Cannot access 'p' before initialization.. temporal dead zone
let p

console.log(w);     // ReferenceError: Cannot access 'w' before initialization.. temporal dead zone
const w = 5


x = 5;
var x;              // declaration hoisted to top
console.log(x)      // 5.. not undefined


var z = 100;
function names() {
    console.log(z);         // undefined
    var z = 10;             // only declaration hoisted to top of func scope, not value
}

names()


/* Function Hoisting */

// Function declaration
check()                 // hi... function declaration and definition is hoisted to top
function check() {
    console.log('hi')
}
check()                 // hi


// Function expression
console.log(check2)              // undefined.. only variable declaration is hoisted, not func body/expression
var check2 = function () {
    console.log('hi')
}
check2()                        // hi

//  alternatively,

console.log(check2)                
// ReferenceError: Cannot access 'check2' before initialization.. since const variable
const check2 = function () {
    console.log('hi')
}
check2()                // hi

// Class Hoisting
console.log(new Car())       
/* ReferenceError: Cannot access 'Car' before initialization...
"temporal dead zone" like let, const */
class Car {
    constructor() {
        console.log('hello')
    }
}
console.log(new Car())



function calc() {
    let a = 10;             // block scope
    const b = 5;            // block scope
    var c = 8;              // function scope
}

calc()
console.log(a)      // ReferenceError: a is not defined.. block scope of a (let)
console.log(b)      // ReferenceError: b is not defined.. block scope of b (const)
console.log(c)        // undefined (due to hoisting with var)