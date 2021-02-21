/*
ECMAScript 2017 introduced the JavaScript keywords async and await
*/

//1. traditional way
// function myFunc()
// {
//   return 'hello';
// }
// console.log(myFunc());

//2. with async - give saem reesults
// async function myFunc()
// {
//   return 'hello';
// }
// myFunc()
//   .then(res => console.log(res));

//3. now we add Promise
// async function myFunc()
// {


//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('hello'), 1000);
//   });

//   //cahnge this value to simulate error/success response
//   const error = false;
  
//   if (!error) {
//      const res = await promise; //wait till promise is resolved
//   return res;
//   }
//   else {
//     await Promise.reject(new Error('Something went wrong'));
//   }

 
// }
// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

async function getUsers()
{
  //await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  //only proceed once resolve
  const data = await response.json();

  //only proceed once second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));