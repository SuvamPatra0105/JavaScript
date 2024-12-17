const arr = [1, 2, 3, 4]

//arr.shift()         // [2, 3, 4]..shifts entire array to left

//arr.unshift(8)        // [8, 1, 2, 3, 4].. shifts arr to right and enters no to the front

arr.push(19)         // [ 1, 2, 3, 4, 19 ]
arr.pop()            // [ 1, 2, 3, 4 ]
console.log(arr.includes(2));        // true
console.log(arr.indexOf(1));         // 0
console.log(arr.join())            // 1,2,3,4... joins arr elements as string
console.log(arr.join('-'))           // 1-2-3-4... default joining element is ','
console.log(typeof arr.join('-'))    // string

console.log(arr.slice(1,2));         // [2]
console.log(arr)                     // [1, 2, 3, 4].. original array unmodified
console.log(arr.splice(1,2));         // [2, 3]
console.log(arr)                     // [1, 4].. original array modified

arr1 = [ 4, 20, 1, 5]
console.log(arr1.sort());                   // [ 1, 20, 4, 5 ]...elements are considered as strings,lexicographical sorting
console.log(arr1.sort((a,b) => a - b));     // [ 1, 4, 5, 20 ]
console.log(arr1.sort((a,b) => b - a));     // [ 20, 5, 4, 1 ]

//console.log(arr1.reverse());        // [ 5, 4, 2, 1 ]


console.log(arr1.map( element => element * 2))      // [ 2, 4, 8, 10 ]
console.log(arr1);                      // unmodified

console.log(arr1.filter( element => element % 2 == 0))      // [ 2, 4 ]
console.log(arr1);                      // unmodified

console.log(arr1.concat([9,6,0,2]))     // [1, 2, 4, 5, 9, 6, 0, 2]
console.log(arr1);                      // unmodified

const strArr1 = ['JS', 'Java']
const strArr2 = ['Angular', 'React']
const finalArr = [...strArr1, ...strArr2]       // spread operator.. merges arrays into one
console.log(finalArr)    

console.log(arr1.at(-2));                      // 4
console.log(arr1.at(-20));                      // undefined

console.log(arr1.fill(20));             // [ 20, 20, 20, 20 ]
console.log(arr1);                      // modified


const arr3 = [1,2, [4,5], [9, 1, [8,4,6]]]

console.log(arr3.flat(Infinity))        // [ 1, 2, 4, 5, 9, 1, 8, 4, 6 ].. Infinity will take depths upto any level 
console.log(arr3);                      // unmodified


console.log(Array.isArray('Javascript'))      // false
console.log(Array.isArray(['Javascript']))    // true
console.log(Array.from('Java'))      // ['J','a','v','a']... creates array
console.log(Array.from({course: 'Java'}))      // []...object isn't iterable
console.log(Array.from(Object.keys({course: 'Java'})))            // ['course']
console.log(Array.from(Object.values({course: 'Java'})))          // ['Java']
console.log(Array.from(Object.entries({course: 'Java', id: 1})))  // [['course','Java'],['id',1]]

a = 10
b = 20
c = 30

console.log(Array.of(a,b,c))        // [ 10, 20, 30 ]
console.log(Array.from(new Set([a,b,c])))        // [ 10, 20, 30 ]


array = [1, 2, 3, 4, 5]
console.log(array.toSpliced(2,2))  // [1,2,5]... array without removed part
console.log(array)                 // [1, 2, 3, 4, 5].. unmodified
console.log(array.splice(2,2))     // [3, 4]... removed part
console.log(array)                 // [1,2,5].. modified

array1 = [5,2,1]
console.log(array1.toSorted())      // [1,2,5].. modified
console.log(array1)                 // [5,2,1].. unmodified
console.log(array1.sort())
console.log(array1)                 // [1,2,5].. modified


reduceArray = [1, 2, 30, 4, 5]

sum = reduceArray.reduce((accumulator, currentValue) => accumulator + currentValue, 10);
compare = reduceArray.reduce((x, y) => (x > y)? x : y)  
// or reduceArray.reduce((x, y) => (x > y)? x : y, -Infinity)
console.log(sum);       // 52.. sum = 42, initial count = 10
console.log(compare);   // 30

objArr = ['apple', 'banana', 'orange', 'apple', 'banana', 'banana'];

let count = objArr.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});

console.log(count);     // { apple: 2, banana: 3, orange: 1 }