/*
The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

Object is similar to Map—both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. For this reason (and because there were no built-in alternatives), Object has been used as Map historically.


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
*/
const map1 = new Map();

//set keys
const key1 = 'some string',
	key2 = {},
	key3 = function() {};

//set map values by key
map1.set(key1, 'value of key1');
map1.set(key2, 'value of key2');
map1.set(key3, 'value of key3');

//get values by key
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

//count values
console.log(map1.size);

//iterating maps - output key-values
for (let [ key, value ] of map1) {
	console.log(`${key} = ${value}`);
}

//convert map to array
let keyValueArray = Array.from(map1);
console.log(keyValueArray);

//convert map values (u can do the same for key) to array
let keyValueArray2 = Array.from(map1.values());
console.log(keyValueArray2);
