/* basic strinf functions */

//concat - form 1 string from addition of 2 strings

const first = 'shah';
const last = 'lam';
const full = first + ' ' + last; //add spaces in btwn
console.log('concat - fullname: ' + full);

//append - change exisitng string by adding another string
var first1 = 'handsome';
first1 += 'boy'; //add to end
console.log('\nappend - fullname: ' + first1);

//split - converts string into array

var sentence = 'hello there how are you';
split1 = sentence.split(' '); //split by spacing
console.log('\nafter split:');
console.log(split1);

var sentence2 = 'web, code camp, array list, html & css, angular';
split2 = sentence2.split(','); //split by comma
console.log('\nafter split:');
console.log(split2);

//slice - breaks the words by the length
slice1 = sentence.slice(0, 8); //take only from position 0-7
console.log('\nb4 slice: ' + sentence);
console.log('slice1: ' + slice1);
slice2 = sentence.slice(-7); //slice from the end - take last 7 letters
console.log('slice2: ' + slice2);

//Returns the position of the first occurrence of a substring.
let name1 = 'hello world, welcome to the universe';
let name2 = 'll';
let result1 = name1.indexOf(name2); //find which index of the string contains 'll'.
console.log('\n\n string compare result: ' + result1);
