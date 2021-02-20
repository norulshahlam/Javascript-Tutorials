/* 
1. function expression
2. function declarations. 
function without return (void) & fucntion with return
3. Self-Invoking Functions
4. Arrow functions
5. property methods

diff btwn expression vs declarations?

They're actually really similar. How you call them is exactly the same.The difference lies in how the browser loads them into the execution context.

a. Function declarations load before any code is executed.

b. Function expressions load only when the interpreter reaches that line of code.

So if you try to call a function expression before it's loaded, you'll get an error! If you call a function declaration instead, it'll always work, because no code can be called until all declarations are loaded.

https://stackoverflow.com/questions/1013385/what-is-the-difference-between-a-function-expression-vs-declaration-in-javascrip
*/

//1. here we call a function expression b4 declaring. It gives ERROR cos add() wasn't loaded yet - Uncaught ReferenceError: Cannot access 'add' before initialization

//func w/o return
//add(3, 2);
const add = function(x, y) {
	console.log('add func - ' + (x + y));
};

//func w return
const add2 = function(x, y) {
	return x + y;
};
let z = add2(3, 2);

//2. function declarations.

//here we also call first b4 declaring but no error, the func still runs bcos declarations are loaded before any code can run
greet('shah');
function greet(name = 'default-name') {
	//console.log('hello ' + name);
}

/* 3. Self-Invoking Functions - A self-invoking expression is invoked (started) automatically, without being called. also called Immediately Invoked Function Expressions (IIFE) */

(function() {
	//var x = console.log('\ninvoking myself!');
})();

/* 4. Arrow functions allows a short syntax for writing function expressions.
NOTE: this is function expression, so must declare b4 calling */
const minus = (a, b) => a - b;
//console.log('\n arrow function - ' + minus(5, 1) + '\n\n');

/*
same as above

const minus2 = function (a, b)
{
  return a - b;
}
*/

/* 5. function inside object is called methods */
const todo = {
	add: function() {
		console.log('add todo list..');
	},
	edit: function() {
		console.log('edit todo list..');
	},
	remove: function(x) {
		console.log(`remove todo list ${x}..`);
	}
};

// todo.add();
// todo.remove(3);
