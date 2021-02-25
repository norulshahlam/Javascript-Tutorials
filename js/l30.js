/* 
in previous leson we create obj and assign values in 1 line
now we:
1 create obj first, assgin values later
2. also we show 2 method to achieve this
3. and, we will show that we can add more properties AFTER obj creation
*/

//create obj having methods
const Person = {
	greeting: function() {
		return `hello there, ${this.firtName} ${this.lastName}`;
	},
	married: function(newLastName) {
		this.lastName = newLastName;
	}
};

//3. now we create instance of the class and add more properties to it. note that the method doesnt have the below properties.
const mary = Object.create(Person);
mary.firtName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

//show all properties
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
