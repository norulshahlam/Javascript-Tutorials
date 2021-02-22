/*
how to handle error
how to display the error message

https://www.w3schools.com/js/js_errors.asp

*/

const user = { email: 'sefsefesg' };

//test a block of code for errors.
try {
  myFunc(); //this will give error as there is no func declaration

  if (!user.name) {
    throw 'user has no name';
  }
}

// handle if there is error.
catch (e) {
  console.log(e);
  console.log(e.message); //err msg
  console.log(e.name);// err type
}

//execute code, after try and catch, regardless of the result.
finally {
  console.log('finally');
}

console.log('continues\n\n')

/************************using throw *****************/

try {
  if (!user.name) {
    throw 'user has no name';
  }
}
catch (e) {
  console.log(e);
}

/**************u can create your own type of error***************/

try {
  if (!user.name) {
    throw new SyntaxError('user has no name');
  }
}
catch (e) {
  console.log(e);
}