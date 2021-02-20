// /* A ternary operator can be used to replace an if..else statement in certain situations.
// The ternary operator is the only operator in JavaScript that works with 3 operands, and it’s a short way to express conditionals. */

const eaten = true;

var happy = (eaten === true ? 'yes' : 'no');

//the longer way. this gives same result
if (eaten == true) {
  happy = 'yes';
}
else {
  happy = 'no';
}

console.log(happy);



