/* The Template Literal, introduced in ES6, is a new way to create a string. With it comes new features that allow us more control over dynamic strings in our programs. 

Prior to ES6, you use single quotes (‘) or double quotes (“) to wrap a string literal. And the strings have very limited functionality.

To enable you to solve more complex problems, ES6 template literals provide the syntax that allows you to work with strings in a safer and cleaner way.

In ES6, you create a template literal by wrapping your text in backticks */

const name = 'john';
const age = 30;
const job = 'web dev';
const city = 'singapore';

//without template strings (es5) - notice the troublesome having to add quotes every time u need to add data in between
let html =  '<ul>' +
            '<li> name: ' + name + '</li>' +
            '<li> age: ' + age + '</li>' +
            '<li> job: ' + job + '</li>' +
            '<li> city: ' + city + '</li>' +
            '</ul>';

document.body.innerHTML = html;

// with template strings (es6) - code is safer and cleaner.
let html2 = `
<ul>
<li> name: ${name} </li>
<li> age: ${age} </li>
<li> job: ${job} </li>
<li> city: ${city} </li>
`;

document.body.innerHTML = html2;
