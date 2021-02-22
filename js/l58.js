/* A singleton is a function or class which can have only one instance. It’s a design pattern popularised by the “Gang of Four” in their influential Design Patterns.

At its core, a design pattern that restricts the instantiation of a class to one object. Usually, the goal is to manage global application state. A singleton should be immutable by the consuming code, and there should be no danger of instantiating more than one of them.

https://medium.com/@bretcameron/singletons-in-javascript-59655927b7d7
*/

const Singleton = (function() {
	let instance;

	function createInstance() {
		const object = new Object({ name: 'shah' });
		return object;
	}

	return {
		getInstance: function() {
			if (!instance) {
				instance = createInstance();
			}
			return instance;
		}
	};
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();
console.log(instanceA);
console.log(instanceA === instanceB);

/* create >1 of this instance gives the same instance, as indicated by 'true' in the above log  */
