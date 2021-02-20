/* All JavaScript objects inherit properties and methods from a prototype.

Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
The Object.prototype is on the top of the prototype inheritance chain:

The JavaScript prototype property allows you to add new properties to object constructors.

usually we only add to prototype functions that is static like age, full name
we can also use prototype to manipulate values
*/

//person constructor
function Person(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.birthday = new Date(dob);
}

//cal age. we move from the constructor into proto obj
Person.prototype.calclulateAge = function() {
	const diff = Date.now() - this.birthday.getTime();
	const ageDate = new Date(diff).getUTCFullYear() - 1970;

	return Math.abs(ageDate);
};

//get full name
Person.prototype.getFullName = function() {
	return `${this.firstName} ${this.lastName}`;
};

//is married? change last name to spouse name
Person.prototype.getMarried = function(newLastName) {
	this.lastName = newLastName;
};

const mary = new Person('Mary', 'Magdeleine', '12-20-1985');

console.log(mary);
console.log(mary.calclulateAge());
console.log(mary.getFullName());

console.log('\n\n******* after  marriage *******');

mary.getMarried('Smith');
console.log(mary.getFullName());

//check for obj properties
console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName')); //false cos it is not part of person obj
