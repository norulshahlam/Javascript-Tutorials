/* sub classes refers to child inherited from parent class */

class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	greeting() {
		return `helo there, ${this.firstName} ${this.lastName}`;
	}
}

//here is the sub class of Person. when a class extends a class, it inherits everything from the parent. unlike inheritance concept of es5, u dont inherit the prototype unless u specify another code to inherit its prototype. aftet u inherit its prototype, its prototype is of the parent type as shown from last lesson. here all is inherited and is of child type
class Customer extends Person {
	constructor(firstName, lastName, phone, membership) {
		//
		//assign parent var to child var
		super(firstName, lastName);
		this.phone = phone;
		this.membership = membership;
	}
}

const john = new Customer('John', 'Doe', '92212152', 'Premium');

//here we c that we can use method of parent when we inherit  it
console.log(john);
console.log(john.greeting());
