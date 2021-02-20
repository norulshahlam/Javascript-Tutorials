/*
JavaScript Function Scope
In JavaScript there are two types of scope:

Local scope
Global scope
JavaScript has function scope: Each function creates a new scope.

Scope determines the accessibility (visibility) of these variables.

Variables defined inside a function are not accessible (visible) from outside the function.

https://www.w3schools.com/js/js_scope.asp

we will show example of how diff scope affecs var & let. 
*/

//global scope
var a = 1;
let b = 2;
const c = 3;

console.log('in global scope during init: ' + a, b, c + '\n\n');

//function scope
function functionScope() {
	var a2 = 4;
	let b2 = 5;
	const c2 = 6;

	a = 7;
	b = 8;

	console.log('in function scope: ' + a, b, c + '\n\n');
}

functionScope();
console.log('in global scope, after function scope: ' + a, b, c + '\n\n');

//console.log(a2);
//console.log(b2);
//console.log(c2);

/* we see from above that local scope can access & modify global scope but, data created in function scope is not accesible in global scope */

//block scope
if (true) {
	var d = 7;
	let e = 8;
	const f = 9;

	console.log('in block scope: ' + a, b, c);
}
console.log('d: ' + d);
//console.log('e: ' + e); //error
//console.log('f: ' + f); //error

/* the result is the same as for function scope, except 'var' can be accessed thru global scope when it is created in local scope */

/********************************************** */

for (let i = 1; i <= 10; i++) {
	var d = i;
	let e = i;
	const f = 10;
	a = i;
	b = i;
	console.log('\n c: ' + c);
}
console.log('var a: ' + a);
console.log('let b: ' + b);
console.log('var d: ' + d);
//console.log('const f: ' + f); //error
//console.log('let e: ' + e); //error
//console.log('i: ' + i); //error

/* the result is the same as for block scope */
