/*
The Set object lets you store UNIQUE values of any type, whether primitive values or object references. 
Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.

NaN and undefined can also be stored in a Set. All NaN values are equated (i.e. NaN is considered the same as NaN, even though NaN !== NaN).

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

Map object vs Set object

a Set is a collection of unique values, unlike an array which can have duplicates.

https://stackoverflow.com/questions/24085708/javascript-map-object-vs-set-object
*/
//1. 1st method - create a Set, later add values
const set = new Set();

//add values to set
set.add(100);
set.add('string');
set.add(true);
set.add({ name: 'john' });
set.add(100);

//outputs only 4 elements, as the 5th one is a duplicate
console.log(set);

//2nd method - creeate Set and add values tgt
const set2 = new Set([ 1, true, 'this is String', { food: 'apple' } ]);
console.log(set2);
