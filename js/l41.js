/* we will learn more on arrow function */

const sayHello1 = function ()
{
	console.log('Hello1');
};

/********************** */

//1 line funct dont need braces
const sayHello2 = () => console.log('Hello2');

//with return value
const sayHello3 = () => 'Hello3';

//with return value for obj
const sayHello4 = () => ({ msg: 'Hello4' });

//with return value with 1 param
const sayHello5 = name => `hello ${ name }`;

//with return value with many param
const sayHello6 = (name1, name2) => `hello ${ name1 } ${ name2 }`;

const foods = ['apple', 'banana', 'carrot'];

//get the length of each food
const food = foods.map((food) => food.length);

/*********************************************************** */
sayHello1();
sayHello2();
console.log(sayHello3());
console.log(sayHello4());
console.log(sayHello5('shah'));
console.log(sayHello6('shah', 'lam'));
console.log(food);
