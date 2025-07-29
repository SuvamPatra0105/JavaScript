console.log({ name: "GFG" } == { name: "GFG" });  // false
console.log({ name: "GFG" } === { name: "GFG" });  // false...compared by reference, not by value.. diff memory address

console.log('-----------------------------------------------------------------')

const a = 'brand'
const b = 'Volvo'

const objs = {
    a : b           
}

console.log(objs)  // { a: 'Volvo' }
// To resolve this:
const objs1 = {
    [a] : b           
}
console.log(objs1);      // { brand: 'Volvo' }

console.log('-----------------------------------------------------------------')

// Destructuring Object
const obj = {
name: 'abc',
id: 2,
age: 20
}

const {name, id, age} = obj;
//or
const { name: userName, id: userId, age: userAge } = obj;        // custom property names
//or
const {name, ...rest} = obj        // rest operator

console.log('-----------------------------------------------------------------')

const objj = {
    a: 1,
    b: 2,
    a: 3,
}
console.log(objj);  // Ouput: { a: 3, b: 2 }

console.log('-----------------------------------------------------------------')

const car = {
    brand: 'Volvo',
    price: 600000
}

for (let a in car) {
    console.log(a)      // prints keys
    console.log(car[a])      // prints values
}

console.log(Object.keys(car));      // [ 'brand', 'price' ]
console.log(Object.values(car));      // [ 'Volvo', 600000 ]
console.log(Object.entries(car));      // [ [ 'brand', 'Volvo' ], [ 'price', 600000 ] ]

for (let a in Object.keys(car)) {       // or Object.values(obj)/Object.entries(obj)
    console.log(a)      // prints indices
}

for (let a of Object.keys(car)) {       // or Object.values(obj)/Object.entries(obj)
    console.log(a)      // prints keys
}

console.log('-----------------------------------------------------------------')

obj = {
    course: 'JS',
    id: 1
}

console.log(obj.id);        // 1
console.log(obj['id']);     // 1.. preferred way
obj.id = 2
console.log(obj);           // { course: 'JS', id: 2 }..modified

Object.freeze(obj)
obj.id = 3                  // unmodified
delete obj.id               // unmodified
obj.price = 300             // unmodified
console.log(obj);           // { course: 'JS', id: 2 }.. obj frozen.. no modification

Object.seal(obj)
obj.id = 5                  // modified
delete obj.id               // unmodified
obj.price = 300             // unmodified
console.log(obj);           // { course: 'JS', id: 5 }.. Modified


const person = {
    name: 'abc',
    address: {
        city: 'Kolkata'
    }
}
Object.freeze(person)

person.name = 'xyz'                 // unmodified
person.address.city = 'Pune'        // Modified since inner object isn't frozen
Object.freeze(person.address)
person.address.city = 'Delhi'        // unmodified
console.log(person)

console.log('-----------------------------------------------------------------')

let sym = Symbol('address')
obj1 = {
    sym: 'Kolkata'
}
console.log(obj1);          // { sym: 'Kolkata' }.. key is treated as string, not Symbol
console.log(obj1.sym);          // Kolkata
obj2 = {
    [sym]: 'Kolkata'
}

console.log(obj2);          // { [Symbol(address)]: 'Kolkata' }
console.log(obj2.sym);          // undefined
console.log(obj2[sym]);          // Kolkata

console.log('-----------------------------------------------------------------')

obj1.greet = function () {       
    console.log('hello')
}
obj1.greet()            // hello

obj1.greet = function (name) {
    console.log(`hello ${name}`)
}
obj1.greet('JS')        // hello JS

console.log('-----------------------------------------------------------------')

newObj = {
    name: 'XYZ',
    msg: function() {
        console.log(`Hi ${this.name}`)      // this refers to newObj
    },
    msg2: () => {
        console.log(`Hi ${this.name}`)      // this refers to global object 'window' for arrow funcs
    }
}

newObj.msg()        // Hi XYZ
newObj.msg2()        // Hi undefined

console.log('-----------------------------------------------------------------')

user = {
    name: {
        firstname: 'abc',
        lastName: 'xyz'
    },
    age: 20,
}

console.log(user.name.firstname);       // abc
console.log(user.name?.firstname);       // abc.. ? denotes optional chaining

console.log('-----------------------------------------------------------------')

obj_3 = {id: 1, course: 'JS'}
obj_4 = {id: 2, course: 'Java'}

console.log({obj_3, obj_4})       // { obj3: { id: 1, course: 'JS' }, obj4: { id: 2, course: 'Java' } }

// merging
console.log({...obj_3, ...obj_4});      // { id: 2, course: 'Java' }
console.log(Object.assign({}, obj_3, obj_4));   // { id: 2, course: 'Java' }

console.log('-----------------------------------------------------------------')

const obj11 = { name: "GFG", age: 14 };
const obj12 = { alpha: "rule", ...obj11 };

console.log(obj12);  // { alpha: "rule", name: "GFG", age: 14 }
