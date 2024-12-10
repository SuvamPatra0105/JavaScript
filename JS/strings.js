word = "hello JS"
console.log(word)               // hello JS
console.log(typeof word)        // string

word = new String("Welcome to JS")
console.log(word)               // [String: 'Welcome to JS']
console.log(typeof word)        // object with positions as keys, characters as values

/* Access characters in string */
console.log(word[0])                // same as word.charAt(0)).... returns 1st char 'W'
console.log(word[-5])               // undefined
console.log(word.at(-5))            // 't' ... counts index from back, introduced in ECMAScript 2022(ES13)
console.log(word.charAt(-5))        // blank string

/* Access character positions in string */
console.log(word.indexOf('e'))             // returns pos of 1st matching char...
console.log(word.lastIndexOf('e'))         // returns pos of last matching char...
console.log(word.indexOf('#'))             // -1.. returns -1 if matching char not found...
console.log(word.search(/To/i));           /* same as indexOf() but it also accepts reg expressions.. 
                                              case sensitivity modified with the regular expression flag /i */

/* String Concatenation */
console.log("hi " + word + " " + 123)   // hi Welcome to JS 123
console.log(`hi ${word} 123`)           // string interpolation method...same output
console.log('hi '.concat(word))         // hi Welcome to JS

/* string length */
console.log(word.length)                // 13

/* replacing matching chars in string */
console.log(word.replace('e', '@'))       // W@lcome to JS.. replaces only first matching occurence
console.log(word.replaceAll('e', '@'))    // W@lcom@ to JS.. replaces all matching occurences

/* conversion of cases */
console.log(word.toUpperCase())        // WELCOME TO JS
console.log(word.toLowerCase())        // welcome to js

/* removing starting and trailing whitespaces(not spaces in-between) */
console.log('   JS is   easy!     '.trim())               //JS is   easy!

/* checks if string starts or ends with a particular substring */
console.log(word.startsWith('We'))      // true
console.log(word.endsWith('W'))         // false

/* breaking strings */
console.log(word.substring(0, 5))   
// Welco.. 0 to 4th index...1st index inclusive, 2nd index exclusive
console.log(word.slice(0, 5))        // same output.. Welco
console.log(word.slice(-7, -4))      // e t... count 1st index from back, 2nd too but exclusive 
console.log(word.slice(-7, 4))       // blank string ''
console.log(word.substring(-7, 4))   // Welc.. considers 1st neg index as 0
console.log(word.substring(7, 4))    // ome... if end index > start index, JS swaps them
console.log(word.substring(7, -4))   // Welcome.. swaps & treats neg index as 0
console.log(word.split(' '))         // [ 'Welcome', 'to', 'JS' ]
console.log(word.split('@'))         
// [ 'Welcome to JS' ] returns entire string as array if matching char not found
console.log(word.split(' ').join('-'))         // Welcome-to-JS

// let str = "Istanbul";
// console.log(str.toLocaleLowerCase('tr-TR'));    
// ıstanbul (Turkish locale)


