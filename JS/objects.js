obj = {
    course: 'JS',
    id: 1
}

console.log(obj.id);        // 1
console.log(obj['id']);     // 1.. preferred way
obj.id = 2
console.log(obj);           // { course: 'JS', id: 2 }
Object.freeze(obj)
obj.id = 3
console.log(obj);           // { course: 'JS', id: 2 }.. obj frozen.. no modification

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

obj1.greet = function () {       
    console.log('hello')
}
obj1.greet()            // hello

obj1.greet = function (name) {
    console.log(`hello ${name}`)
}
obj1.greet('JS')        // hello JS


newObj = {
    name: 'XYZ',
    msg: function() {
        console.log(`Hi ${this.name}`)      // this refers to newObj
    },
    msg2: () => {
        console.log(`Hi ${this.name}`)      // this refers to global object 'window'
    }
}

newObj.msg()        // Hi XYZ
newObj.msg2()        // Hi undefined

user = {
    name: {
        firstname: 'abc',
        lastName: 'xyz'
    },
    age: 20,
}

console.log(user.name.firstname);       // abc
console.log(user.name?.firstname);       // abc.. ? denotes optional chaining

obj3 = {id: 1, course: 'JS'}
obj4 = {id: 2, course: 'Java'}

console.log({obj3, obj4})       // { obj3: { id: 1, course: 'JS' }, obj4: { id: 2, course: 'Java' } }

//console.log({...obj3, ...obj4});
console.log(Object.assign({}, obj3, obj4));

console.log(obj3)       // { obj3: { id: 1, course: 'JS' }, obj4: { id: 2, course: 'Java' } }