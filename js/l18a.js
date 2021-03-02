/*
 append VS appendChild?

.append()
use to add an element in form of a Node object or a DOMString (basically means text).
.append does not have a return value 
.append allows you to add multiple items 

.appendChild()
Similar to the .append method, but in this case, only accepts a Node object.
while .appendChild returns the appended Node object (b)
while appendChild allows you to add only a single item


*/

let val;

/*****************APPEND **********************/

// Inserting a Node object
const parent = document.createElement('div');
const child = document.createElement('p');
parent.append(child);
// console.log(parent);
// This appends the child element to the div element
// The div would then look like this <div><p></p></div>

// Inserting a DOMString
const parent2 = document.createElement('div');
parent2.append('Appending Text');
// The div would then look like this <div>Appending Text</div>
//console.log(parent2);

/*****************APPENDCHILD **********************/

// Inserting a Node object
const parent3 = document.createElement('div');
const child3 = document.createElement('p');
val = parent3.appendChild(child3);
console.log(val); //(b)retruns appended child element
// This appends the child element to the div element
// The div would then look like this <div><p></p></div>

// Inserting a DOMString
const parent4 = document.createElement('div');
// parent4.appendChild('Appending Text');
// Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'
