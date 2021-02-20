/*
this lesson, we will learn how to accecss data of the document. this is useful for debugging, monitoring and security. comment all and slowly uncomment them to see thw values
*/

let val;

val = document; //gives entire document data like url,
val = document.all; //access document dta with entire markup
val = document.head; // returns head tags
val = document.body; // returns body tags
val = document.forms; // returns any forms
val = document.scripts; // returns any scripts used

//display swhat scripts used
let scripts = document.scripts;
let scriptArr = Array.from(scripts);
scriptArr.forEach(function(dd) {
	console.log(dd);
});

console.log(val);
