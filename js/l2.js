/* learn about var let const

 * eg of var vs let - 4 points
 * https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var

  1. Scoping rules
  2. Hoisting
  3. Creating global object property
  4. Redeclaration
*************************************************
  5. multi word naming style
  6. constants
 
 */

 /* 
 1. Scoping rules
Main difference is scoping rules. Variables declared by var keyword are scoped to the immediate function body (hence the function scope) while let variables are scoped to the immediate enclosing block denoted by { } (hence the block scope). */


{
  var var1 = 'var1';
  let let1 = 'let1';  
}
//console.log(var1 + '\n\n');
//console.log(let1);  //gives error


/* 
2. Hoisting
While variables declared with var keyword are hoisted (initialized with undefined before the code is run) which means they are accessible in their enclosing scope even before they are declared */

/*shows undefined here cos further down it is being declared as var*/
//console.log(var2);

/* gives error here cos further down it is being declared as let, and 'let' needs to be initialised before accessing */
//console.log(let2);

var var2 = 'var2';
let let2 = 'let2';

/* 
3. Creating global object property
At the top level, let, unlike var, does not create a property on the global object: */

var var3 = 'var3';  // globally scoped
let let3 = 'let3';  // globally scoped

//console.log('\n\n' +window.var3); // ok
//console.log(window.let3); // undefined




/*
4. Redeclaration
In strict mode, 'var' will let you re-declare the same variable in the same scope while 'let' raises a SyntaxError.
*/
'use strict';
var var4 = 'var4';
var var4 = 'var44'; //can be replaced
let let4 = 'let4';
//let let4 = 'let4';  //Uncaught SyntaxError: Identifier 'let4' has already been declared


/********************************************************/


/*   5. multi word naming style */
var firstName = 'john'; //camel case
var first_name = 'john'; //underscore
var FirstName = 'john'; //pascal case


/* 6. constants */
const name = 'bob;'
//name = 'jack';  //Uncaught TypeError: Assignment to constant variable - u cant reassign value to 'const'

/* u must assign value upon creation else Uncaught SyntaxError: Missing initializer in const declaration  */
//const food;

const numbers = [1, 2, 3, 4, 5];


//for const objects like arrays, list, u can manipulate values eg add/remove
numbers.push(6); //u can add
numbers.pop();  //or remove
//console.log('\n\n' + numbers);

/* but u cant re declare a whole new values: Uncaught SyntaxError: Identifier 'numbers' has already been declared */
//const numbers = [1, 2, 3, 4, 5,6,7,8,9];