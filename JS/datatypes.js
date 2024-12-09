
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
console.log(typeof numVal);     //number
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
console.log(Boolean(str))       // "abc" => true, "" => false
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
console.log("Type Coercion")

let a = "10" + 1            // 101, type => string
let b = "10" - 1            //  9, type => number

console.log("10" + 1)               // 101
console.log(10 + "1")               // 101
console.log(10 + "1" + 4)           // 1014
console.log("10" + 1 + 4)           // 1014
console.log(10 + 1 + "4")           // 114
console.log("10" - 1)               // 9
console.log("10" > 1)               // true since "10" is converted to number
console.log("10" != 1)               // true
console.log("10" == 10)               // true
console.log("10" === 10)               // false since datatypes are different
