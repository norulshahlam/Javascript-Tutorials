/*

The Module pattern is used to mimic the concept of classes (since JavaScript doesn’t natively support classes) so that we can store both public and private methods and variables inside a single object — similar to how classes are used in other programming languages like Java or Python. That allows us to create a public facing API for the methods that we want to expose to the world, while still encapsulating private variables and methods in a closure scope.

https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/

The Module Pattern is one of the most common design patterns used in JavaScript and for good reason. The module pattern is easy to use
and creates encapsulation of our code. Modules are commonly used as singleton style objects where only
one instance exists. The Module Pattern is great for services and testing/TDD.

https://coryrylan.com/blog/javascript-module-pattern-basics

*/

/**************basic structure of standard module pattern*****************/
/*
const UICtrl = (function() //any code inside this braces is NOT accessible from outside
{
	let text = 'Hello world';

	const changeText = function() {
		const element = document.querySelector('h1');
		element.textContent = text;
	};

	//any code inside this 'RETURN' braces is accessible from outside
	return {
		callChangeText: function() {
			changeText();
			console.log(text);
		}
	};
})();

UICtrl.callChangeText();
//UICtrl.changeText(); //error - not accessible
*/
/**************REVEALING module pattern*****************/

const ItemCtrl = (function() {
	let data = [];

	function add(item) {
		data.push(item);
		console.log('item added....');
	}

	function get(id) {
		return data.find((item) => {
			return item.id === id;
		});
	}

	return {
		add: add, //commment this and it becomes private
		get: get
	};
})();
/* here the method 'add' has a return 'data' which makes it accessible from outside */
ItemCtrl.add({ id: 1, name: 'john' });
console.log(ItemCtrl.get(1));
