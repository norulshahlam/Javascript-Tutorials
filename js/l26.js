/* we learinng on constructor
and 'this' keyword


*********************constructor*********************

Sometimes we need a "blueprint" for creating many objects of the same "type".

The way to create an "object type", is to use an object constructor function.

The this Keyword

In JavaScript, the thing called 'this' is the object that "owns" the code.

The value of this, when used in an object, is the object itself.

In a constructor function 'this' does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.

https://css-tricks.com/understanding-javascript-constructors/
*/

function Person(name, dob) {
	this.name = name;
	this.birthday = new Date(dob);
	this.calclulateAge = function() {
		const diff = Date.now() - this.birthday.getTime();
		const ageDate = new Date(diff).getUTCFullYear() - 1970;

		return Math.abs(ageDate);
	};
}
/*
The Person constructor expects two parameters: name and dob. When the constructor is called with the new keyword, it assigns the received parameters to the name and dob property of the current instance, as shown below:
*/
const john = new Person('john', '12-20-1985');
console.log(john);

console.log(john.calclulateAge());
