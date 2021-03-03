/* 
Symbol is a primitive data type of JavaScript, along with string, number, boolean, null and undefined.

It was introduced in ECMAScript 2015.

It’s a very peculiar data type. Once you create a symbol, its value is kept private and for internal use.

All that remains after the creation is the symbol reference.

symbols are ignored in json.stringify

https://flaviocopes.com/javascript-symbols/
https://stackoverflow.com/questions/21724326/what-is-the-motivation-for-bringing-symbols-to-es6

https://www.w3docs.com/learn-javascript/symbol-types.html
*/

const KEY1 = Symbol();
const KEY2 = Symbol();

const myObj = {};

myObj[KEY1] = 'prop1';
myObj[KEY2] = 'prop2';
myObj.key3 = 'prop3';
myObj.key4 = 'prop4';

// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

//symbols are not enumarable in 'for in' loop
for (let i in myObj) {
  console.log(`${ i }: ${ myObj[i] }`);
}

console.log(myObj)

/****************using symbol as unique key identifier*************** */

let site = { // belongs to another code
  name: "W3Docs"
};
let id = Symbol("id");
site[id] = 1;
console.log(site[id]); // we can access the data using the symbol as the key

/*************symbols are unique********** */

let mySymbol1 = Symbol("mySymbol"); //'mySymbol' is a description
let mySymbol2 = Symbol("mySymbol");
console.log(mySymbol1 == mySymbol2); // false