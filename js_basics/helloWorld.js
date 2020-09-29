console.log('Hello, World!');
console.log(1 + 1);

// console.log is a function to print stuff out into the terminal. Use it if you're wondering what a value is

// single line comment starts with double slash //
// everything on the single line is ignored when the code is run

/* <-- A slash with a astrisk creates a multiline comment.
  All the text within these two slashes are ignored
  1
  2
  A multiline comment ends with a astrisk-slash
*/

// A value is a fundamental entity that a program manipulates

// An expression is code that can be evaluated into a value

// Types In Javascript

// String


'jon' // use single quotes to create a string.

"jon" // use double quotes to create  string.

// `jon` // use backticks to create a string.

// If you need to use quotes within a string you can use a combination of single quotes and dobule quotes or you can escape the characters with a backslash \

"This 'is' a valid string"
'This is also \'a valid \' string';

// concatenating strings

'Jon' + ' ' + 'Snow'; // 'Jon Snow';

// A weird thing - coersion. Javascript will change the value of an integer to a string if it is being added to a string

99 + 'bottles'; // '99 bottles'

// string interpolation - This is like concatenating strings but better.

`${1 + 1 + 1} rings...`

`${3 * 3} for ${'Mortal'} Men...`

// to get the length of a string just add .length to the end of a string

"Dark Lord".length // 9

// We can select individual characters of a string using square bracket notation
// square bracket notation allows us to select via an index. Indexes in code always start from 0

"dark throne"[0] // 'd'
"dark throne"[2] // 'r'
"dark throne"[50] // undefined

// undefined is the value javascript will return if the value doesn't exist





// *--- Number ---*

1

9999999

-999999

Infinity // Infinity
-Infinity

NaN // Not a Number - an expression turns into this value if it cannot be represented as a number

// If you need to change a string into a number use parseInt

parseInt('15'); // 15
console.log(parseInt('15'));
console.log(parseInt('hello')); // NaN

// Arithmetic Operators

1 + 1 //addition

1 - 1 // subtraction

3 * 3 // multiplication

3 / 3 // division

12 % 10 // modulo - will give you the remainder of a division

2 ** 4 // exponentiation

-3 // negation


// *--- Booleans ---*

// A boolean represents values that are true or false

// expressions that evaluate to booleans

// strict equality operator ===

1 === 1 // true

1 === '1' // false

// strict inequality operator !==

1 !== 1 // false

1 !== '1' // true

//  greater than

20 > 4 // false

// less than
20 < 20 // false

// less than or equal
20 <= 20 // true

// greater than or equal
20 >= 50 // false


// 


