// Function Currying

function a(x) {
   return function b(y) {
        return x+y;
    }
}

console.log(a(1)(2))        // 3

//Alternatively,

function a1(x) {
    return function b(y) {          // can also use anonymous/arrow funcs
        return function c() {
            return x+y;
        }
     }
 }
 
 console.log(a1(1)(2)())        // 3


 // Usecase

 const person = {
    name: 'ABC',
    age: 20
 }

 function x(obj) {
    return function y(key) {
        return obj[key];    
    }
 }

 console.log(x(person)('name'))    // ABC
 console.log(x(person)('age'))    // 20


 /* make sure to use age in quotes in x(person)('age')
     x(person)(age) will treat age as a variable now and will throw age is not defined.
     In order to resolve this, you can declare the variable */
 
 const age = 'name'  // or const age = 'age'
 console.log(x(person)(age))        // will work.. Output: ABC



 // Infinite Currying

 function a2(x) {
    return function b2(y) {
        if (y) 
            return a2(x+y)
        else
            return x 
    }
 }

 console.log(a2(1)(2)(3)(4)())     // 10
 // Make sure to use () at the last while invoking since "return a2(x+y)" is calling a2() again and at last by using (), we are not providing any value to b2(), i.e. y is undefined, which results in returning x, i.e. the total sum accumulated