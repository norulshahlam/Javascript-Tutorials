/*
Spread operator allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 values are expected. It allows us the privilege to obtain a list of parameters from an array. Syntax of Spread operator is same as Rest parameter but it works completely opposite of it.

Spread operator allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements.
*/

/*******spread operator on arrays********** */
const numbers1 = [1, 2, 3];

//we might not know how many arguments is there so by adding '...' it can take any number of arguments
const numbers2 = [...numbers1, 4];
console.log(numbers2);

//by adding new value in the old array doesnt affect the new array. it behaves like a primitive datatype
numbers1.push(5);
console.log(numbers2);

/*********spread operator on objects*****/
const Person = {
  name: "shah",
  age: 40,
};

const newPerson = {
  ...Person,
  married: true,
};

console.log(newPerson);

/*************** */
//1. Rest pattern with array. 'rest' takes the remaining values
[a, b, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(rest);

//using rest in function
function printMe(a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
printMe("x", "y", "c", "d", "e", "f", "g");

/*
 How do we tell the difference? Well it entirely depends on how we use it. Given the context in which we use the three dots, it is easy to tell whether we are using it as a rest parameter or a spread operator.
 https://scotch.io/bar-talk/javascripts-three-dots-spread-vs-rest-operators543#toc-spread-operators
*/
