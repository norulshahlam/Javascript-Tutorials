/* DOM selectors for SINGLE ELEMENTS

1. using getElementById - only looks for id
2. using query selector - u can look for id, class and tags

Note that this gets a single object, so if there are many objects matching, it will return the firt one.

commment all and slowly uncomment from the top to see the changes
*/

//good practice - store the id in const and then use that to manipulate
const tasktitle = document.getElementById('task-title');

//print the element Id name 'task-title'
console.log(tasktitle);

//from the elements, u can get more info like innerHTML, innerText, textContent. what r the differences? https://medium.com/better-programming/whats-best-innertext-vs-innerhtml-vs-textcontent-903ebc43a3fc

//shows element with html tags available
//console.log(tasktitle.innerHTML);
//returns the “rendered” text content that is shown on browser
//console.log(tasktitle.innerText);
//returns all the text value but tgt with spacing and line breaks u see on the markups
//console.log(tasktitle.textContent);

//add styling of this id. how styling done in css is the same here
tasktitle.style.background = 'green';
tasktitle.style.color = 'white';

//with the innerText,texContent, apaart from viewing the specific values, we can  use it to change content. Task -> Task lists
tasktitle.innerText = 'task lists';
tasktitle.textContent = 'tasks listsss'; //same as above

//change the html markup and replace the content. if u dont add content, the content will be empty on the browser
tasktitle.innerHTML = '<span style="color:red">dd</span>';

//  //query selector

console.log(document.querySelector('#task-title')); //by id
console.log(document.querySelector('.card-title')); //by class
console.log(document.querySelector('h5')); //by tags

//styling using query selector
document.querySelector('ul li').style.background = 'blue';
document.querySelector('ul li:last-child').style.background = 'pink';
