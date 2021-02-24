/* all about classes! 
last lesson we learnt abt prototype and function costructor - ES5. 
now in ES6, the same concept is caled classes and objects 

https://medium.com/developers-arena/javascript-classes-inheritance-and-prototype-chaining-es5-and-es6-way-4b8e9416702b

we will also learn abt static method - where it is stand alone n doesnt require obj to call

a function inside a class is called methods
*/

//class with constructor
class Person {
	constructor(firstName, lastName, birthday) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthday = new Date(birthday);
	}

	greeting() {
		return `hello there, sir ${this.firstName} ${this.lastName}`;
	}

	calculateAge() {
		const diff = Date.now() - this.birthday.getTime();
		const ageDate = new Date(diff).getUTCFullYear() - 1970;
		return ageDate;
	}

	static add = (x, y) => x + y; //static methods
}

//object of Person typee
const mary = new Person('Mary', 'Williams', '11-13-1980');
console.log(mary.calculateAge());

//how to call static method. dont need to use name of obj, but use the class name
console.log(Person.add(1, 2));
//console.log(mary.add(1, 2)); //error
