/*
In JavaScript, a variable may store two types of values: primitive and reference.

JavaScript provides six primitive types as 
1. undefined, 
2. null, 
3. boolean, 
4. number, 
5. string,
6. symbol ,

and a reference type object.

primitive type
The size of a primitive value is fixed, therefore, JavaScript stores the primitive value on the stack.
If the value is a primitive value, when you access the variable, you manipulate the actual value stored in that variable. In other words, the variable that stores a primitive value is accessed by value.

reference type
On the other hand, the size of a reference value is dynamic so JavaScript stores the reference value on the heap. 
Unlike a primitive value, when you manipulate an object, you work on the reference of that object, rather than the actual object. It means a variable that stores an object is accessed by reference.

When you assign a value to a variable, the JavaScript engine will determine whether the value is a primitive or reference value.

https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/
*/

/***************primitive datatype************* */
var a = 1;
var b = a;
//console.log('a is: ' + a + ', b is: ' + b);

//now we change val of a. since it is primitive, it doesnt affect b
a = 2;
//sconsole.log('changed val of a. now a is: ' + a + ', b is: ' + b);


/***************reference datatype************* */
var x = { name: 'a' };
var y = x;

console.log('\n\n x is: ' + x.name + ', y is: ' + y.name);

//now when we change the value of 'y', this changes 'x' as it is reference type. same thing will happen when we change x too. 
y.name = 'b';
console.log('\n\n x is: ' + x.name + ', y is: ' + y.name);