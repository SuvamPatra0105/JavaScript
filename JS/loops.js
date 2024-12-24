// for (let i = 0; i < 5; i++) {
//         console.log(i);
// }

// // entry-controlled loop
// let i = 1;
// while(i < 5) {
//     console.log(i);
//     i++;
// }

// // exit-controlled loop
// let j = 1;
// do {
//     console.log(j);
//     j++;
// } while(j < 1);


// // for-of, for-in, for-each

// // objects
// obj = {
//     age: 20,
//     id: '121'
// }

// // for(p of obj) {
// //     console.log(p);   // error.. obj not iterable
// // }

// for(p in obj) {
//     console.log(p);   //prints keys
// }
// console.log('-----------');

// for(p of Object.keys(obj)) {
//     console.log(p);   //prints keys
// }

// for(p of Object.values(obj)) {
//     console.log(p);   //prints values
// }

// for(p of Object.entries(obj)) {
//     console.log(p);   //prints keys and values as arr.... [ 'age', 20 ], [ 'id', '121' ]
// }

// for(p in Object.entries(obj)) {     // 'for-in in Object.keys()/Object.values()/Object.entries prints index
//     console.log(p);   //prints index
// }

// // obj.forEach(element => {
// //    console.log(element);   // TypeError: obj.forEach is not a function
// // });

// // Arrays
// arr = ['java', 'js', 'angular']

// for(let x of arr) {
//     console.log(x);
// }

// for(let x in arr) {
//     console.log(x);         //index pos
//     console.log(arr[x]);         //values
// }

// arr.forEach((element, index, originalArr) => {
//    console.log(element, index, originalArr);  // individual elements, index, entire arr
// });


// // Maps
const m = new Map()
m.set('a', 1)
m.set('b', 2)
m.set('c', 3)

console.log(m);     // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }

for (x of m) {
    console.log(x);     // [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ]    
}
for (x of m.keys()) {
    console.log(x);     // prints keys
}
for (x of m.values()) {
    console.log(x);     // prints values
}

m.forEach(element => {
    console.log(element);  // values
});

