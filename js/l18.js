/**
1. Replace an element
https://dev.to/ibn_abubakre/append-vs-appendchild-a4m

*/

/************replace elements****************/

//create element
const newHeading = document.createElement('h2');
//add id
newHeading.id = 'task-title';
//new text node
newHeading.appendChild(document.createTextNode('New Task List'));

//get old heading - the first child
const oldHeading = document.getElementById('task-title');

//parent of the old element. cos we r using replaceChild()
const cardAction = document.querySelector('.card-action');

//replace the old with new in the parent element of old
// cardAction.replaceChild(newHeading, oldHeading);

// console.log(newHeading);
// console.log(oldHeading);

/************remove elements****************/

// const lists = document.querySelectorAll('li'); //get all child
// const list = document.querySelector('ul'); //get the parent

//remove list from the list itself
// lists[0].remove();

//or, remove list from its parent. above is preferred:easier, shorter, direct
// list.removeChild(lists[3]);

// console.log(lists);
// console.log(list);

/************classes****************/

const firstLi = document.querySelector('li:first-child'); //1st list item
const link = firstLi.children[0]; //the 'x' which is the 1st child

console.log('\n more data on link x \n\n');
console.log(link.className); //gets all class names
console.log(link.classList); //same but in nodes format
console.log(link.classList[0]); //same but only 1st one
console.log('***********************************************');

link.classList.add('test'); //add classname 'test'
link.classList.remove('test'); //remove classname 'test'

console.log(link);

// /************attributes****************/

let val;

val = link.getAttribute('href'); //check the value of href
link.setAttribute('href', 'http://google.com'); //set it to google.com
// console.log(link.getAttribute('href')); //check attribute of href

// console.log(link.hasAttribute('href')); //check if there is attribute of href
// console.log(link.hasAttribute('title')); //check if there is attribute of title
console.log(val);
