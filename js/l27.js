/* 
JavaScript Comparison and Logical Operators
we will learn diff btwn '==' & '===' 

*/

const name1 = 'jeff'; //this is a string
const name2 = new String('jeff'); //this is obj type string

// console.log(name1);
// console.log(name2);

// '===' checks for	equal value and equal type. for this case, it gives false cos the type is not equal
if (name2 === 'jeff') console.log(true);
else console.log(false);

// '==' only checks for	equal value. for this case, it gives true cos the value is equal, although the type is not.
if (name2 == 'jeff') console.log(true);
else console.log(false);
