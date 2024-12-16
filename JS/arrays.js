const arr = [1, 2, 3, 4]

//arr.shift()         // [2, 3, 4]..shifts entire array to left

//arr.unshift(8)        // [8, 1, 2, 3, 4].. shifts arr to right and enters no to the front

arr.push(19)         // [ 1, 2, 3, 4, 19 ]
arr.pop()            // [ 1, 2, 3, 4 ]
console.log(arr.includes(2));        // true
console.log(arr.indexOf(1));         // 0
console.log(arr.join(''))            // 1,2,3,4... joins arr elements as string
console.log(arr.join('-'))           // 1-2-3-4... default joining element is ','
console.log(typeof arr.join('-'))    // string

console.log(arr.slice(1,2));         // [2]
console.log(arr)                     // [1, 2, 3, 4].. original array unmodified
console.log(arr.splice(1,2));         // [2, 3]
console.log(arr)                     // [1, 4].. original array modified

arr1 = [ 4, 2, 1, 5]
console.log(arr1.sort());           // [ 1, 2, 4, 5 ]
//console.log(arr1.reverse());        // [ 5, 4, 2, 1 ]


console.log(arr1.map( element => element * 2))      // [ 2, 4, 8, 10 ]
console.log(arr1);                      // unmodified

console.log(arr1.concat([9,6,0,2]))     // [1, 2, 4, 5, 9, 6, 0, 2]
console.log(arr1);                      // unmodified

console.log(arr1.at(-2));                      // 4
console.log(arr1.at(-20));                      // undefined

console.log(arr1.fill(20));             // [ 20, 20, 20, 20 ]
console.log(arr1);                      // modified
