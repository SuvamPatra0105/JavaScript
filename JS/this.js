"use strict";         // to enable strict mode
console.log(this)       // {}.. refers to global object {} for node, "window" for browser

// 'this' VALUE DEPENDS ON HOW THE FUNCTION IS CALLED

function a() {
    console.log(this)   
}

a();    // undefined for strict mode, global obj/"window" for non-strict mode

/* 'this' substitution - if the value of this keyword is undefined or null, it will be replaced with window/global object only in non-strict mode */

window.a();         // window object

const b = () => {
    console.log(this)   // always window obj for arrow func in browser, {} in node env
}

b();
                

address = {
    postalCode: '700156',
    city: 'Kolkata',
    checkLoc: function() {
        console.log(this);   // refers to the current object 'address', will print the entire obj
        console.log(this.city);     // Kolkata
    } 
}

address.checkLoc()


address1 = {
    city: 'Kolkata',
    checkLoc: () => {
        console.log(this);      // {}..refers to the global object for anonymous func.. enclosing lexical context
        console.log(this.city);     // undefined.. since global obj has no property 'city'
    } 
}

address1.checkLoc()

address2 = {
    city: 'Kolkata',
    checkLoc: function () {
    const abcd = () => {
        console.log(this)   // arrow func's 'this' will hold the value of its enclosing lexical scope(i.e. normal function).. 'this' keyword inside normal func will then print the entire obj holding it..(i.e. 'address2')
    }
    abcd()
    }
    } 

address2.checkLoc()

address3 = {
    city: 'Kolkata',
    checkLoc: () => {
    const abcd = function () {
        console.log(this)   // opposite of previous example..output: global obj {}/window obj
    }
    abcd()
    }
    } 

address3.checkLoc()




class ABC {
    constructor(brand) {
        this.brand = brand      // 'this' refers to the 'obj' that holds the instance of the class
    }
    calc() {
        console.log(this);      // Output: ABC { brand: 'Lenovo' }
        
    }
}

const obj = new ABC('Lenovo');
obj.calc(); 


// 'this' inside DOM elements => reference to HTMLElement
<button onclick="alert(this)">Click</button>  // Output: [object HTMLButtonElement]



// call, apply, bind (sharing methods) - methods that allow you to control the context (this) in which a function is executed. They are used to explicitly set the this value when calling a function.


/* call(): Executes the function immediately with the given this value and arguments.
 apply(): Executes the function immediately with the given this value and arguments passed as an array.
 bind(): Returns a new function with the specified this value and optional arguments, but doesn't execute the function immediately.
*/


// Call method
function greet(name, age) {
    console.log(`${this.message}, ${name}! Age is ${age}`);     // 'this' refers to person object
  }
  
  const person = {
    message: "Hello"
  };
  
  greet.call(person, "John", 20);

// Apply method
function greet1(name, age) {
    console.log(`${this.message}, ${name}! Age is ${age}`);     // 'this' refers to person1 object
  }
  
  const person1 = {
    message: "Hello"
  };
  
  greet1.apply(person1, ["John", 20]);    // same as call, except arguments are passed as an array


// Bind method

function greet3(name, age) {
    console.log(`${this.message}, ${name}! You are ${age} years old.`);
  }
  // 'this' refers to person3 object

  const person3 = {
    message: "Hello"
  };
  
  const greetPerson = greet3.bind(person3, "John");  // Pre-setting the "name" argument
  // bind() creates a new function (greetPerson) with 'this' set to person3 and the name argument pre-set to "John"
  greetPerson(25);  // Output: Hello, John! You are 25 years old.
