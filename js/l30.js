/* in previous leson we create obj and assign values in 1 line
now we create obj and later assgin values
also we show 2 method to achieve this */

//creeate method
const Person = {
	greeting: function() {
		return `hello there, ${this.firtName} ${this.lastName}`;
	},
	married: function(newLastName) {
		this.lastName = newLastName;
	}
};

//now we create instance of the method and add more properties to it. note that the method doesnt have the below properties.
const mary = Object.create(Person);
mary.firtName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

//give all properties
console.log(mary);

console.log(mary.greeting());

// change her last name
mary.married('Thompson');

//after married, she changed her last name
console.log(mary.greeting());

//another way of create instance and adding values - not recommended. just showing
const brad = Object.create(Person, {
	firtName: { value: 'brad' },
	lastName: { value: 'traversy' },
	age: { value: 36 }
});

console.log(brad);
console.log(brad.greeting());
