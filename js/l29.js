/* we will be learning about constructor inheritance.
inheriting from another constr doesnt mean u inherit its prototype - use must specify to inherit its proto 

A constructor is a function that creates an instance of a class which is typically called an “object”. In JavaScript, a constructor gets called when you declare an object using the new keyword. The purpose of a constructor is to create an object and set values if there are any object properties present.

'this' does not have a value. It is a substitute for the new object. The value of 'this' will become the new property when a new object is created.
*/

// constructor function with param
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

const person1 = new Person('john', 'doe');

// add new properties to object constructors using prototype.
Person.prototype.greeting = function() {
	return `Hello person, ${this.firstName} ${this.lastName}`;
};

//call greeting()
console.log(person1.greeting());

//this is how we create another function while inheriting Person obj
function Customer(firstName, lastName, phone, membership) {
	Person.call(this, firstName, lastName); //how to inherit

	this.phone = phone;
	this.membership = membership;
}

//(a) inherit person prototype method. note that this is a Person constructor, not customer
Customer.prototype = Object.create(Person.prototype);

//(b) make cust proto return as cust constructor
// Customer.prototype.constructor = Customer;

//create customer
const customer1 = new Customer('tom', 'smith', '555', 'standard');
console.log(customer1);

//here it gives error cos greeting is a proto which is not inherited in Customer. uncomment (a) to inherit its prototype as well. take note this returns person type (parent), not customer (child). uncomment (b) to set using cust constructor
console.log(customer1.greeting());

// //once inheriting the person proto, we can override the func, without affecting the parent func
// Customer.prototype.greeting = function() {
// 	return `Hello customer, ${this.firstName} ${this.lastName}`;
// };
// console.log(customer1.greeting());
