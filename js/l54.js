/*
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables

https://www.freecodecamp.org/news/how-to-use-destructuring-in-javascript-to-write-cleaner-more-powerful-code-9d1b38794050/
*/

/*******Destructing assignment**************/

//1. Rest pattern with array. 'rest' takes the remaining values
[ a, b, ...rest ] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

//2. Rest pattern with object.
[ ({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40, e: 50, f: 60, g: 70 }) ];

console.log(rest);

//3. alternative method = array destructuring
const people = [ 'amy', 'bob', 'cat' ];
let [ person1, person2, person3 ] = people;
console.log(person1, person2, person3);

//4. parse array returned from function
function getPeople() {
	return [ 'apple', 'banana', 'carrot' ];
}
[ person1, person2, person3 ] = getPeople();

console.log(person1, person2, person3);

//5. object destructuring
const person = {
	name: 'shah',
	age: 33,
	city: 'Singapore',
	hello: function() {
		console.log('hello');
	}
};

//using es6
const { name, age, city, hello } = person;
console.log(name, age, city);
hello();
