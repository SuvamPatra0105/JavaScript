
/*
Type coercion is the automatic conversion of a value from one data type to another, usually when different data types are used in an operation or comparison. It can happen implicitly or explicitly:

Implicit
JavaScript automatically converts values to make them compatible for an operation or comparison. For example, when adding a number and a string, JavaScript converts the number to a string.

Explicit
You can use JavaScript's built-in functions to intentionally convert types.
*/
let num = 10;
stringNum = String(num)
console.log(stringNum)
console.log(typeof stringNum)      //string
stringNum2 = num.toString()
console.log(typeof stringNum)      //string

console.log("1)---------------------------------------");

let val = "12"
let numVal = +val
let numericWord = Number(val)
console.log(typeof numVal);          //number
console.log(typeof numericWord);     //number

console.log("2)---------------------------------------");

let newWord = "123ab"
let numericNewWord = Number(newWord)
console.log(numericNewWord);            //NaN
console.log(typeof numericNewWord);     //number

console.log("3)---------------------------------------");

let bool = true
console.log(+bool)              // true => 1, false => 0
console.log(typeof +bool)       // number

console.log("4)---------------------------------------");

let str = ""
console.log(+str)              // "abc" => NaN, "" => 0
console.log(Boolean(str))      // "abc" => true, "" => false
console.log(typeof +str)       // number

console.log("5)---------------------------------------");

let nullObj = null
console.log(+nullObj)               //0
console.log(typeof +nullObj)        //number

console.log("6)---------------------------------------");

let undefObj = undefined
console.log(+undefObj)               //NaN
console.log(typeof +undefObj)        //number

console.log("7)---------------------------------------");

let a = "10" + 1                    // 101, type => string
let b = "10" - 1                    //  9, type => number

console.log("10" + 1)               // 101
console.log(10 + "1")               // 101
console.log(10 + "1" + 4)           // 1014
console.log("10" + 1 + 4)           // 1014
console.log(10 + 1 + "4")           // 114
console.log("10" - 1)               // 9
console.log("10" > 1)               // true since "10" is converted to number
console.log("10" != 1)              // true
console.log("10" == 10)             // true
console.log("10" === 10)            // false since datatypes are different

console.log("8)---------------------------------------");

console.log(null > 0)           // false
console.log(null < 0)           // false
console.log(null == 0)          // false though +null = 0
console.log(null === 0)         // false
console.log(null >= 0)          // true 
console.log(null <= 0)          // true
console.log(null != 0)          // true
console.log(null == undefined)  // true since null is loosely equal to undefined

console.log("9)---------------------------------------");

let symbol1 = Symbol('12')
let symbol2 = Symbol('12')
console.log(symbol1 == symbol2)             
// false because Symbols are unique and immutable values. Even if two symbols are created with the same description (like '12'), they are still considered distinct and not equal to each other
console.log(symbol1 === symbol2)            // false

console.log(typeof 1234556787464828798209n)     //bigint
