/*
construct html element from js and it to the main page
*/

//create li tag
const li = document.createElement('li');

//then add class to it
li.className = 'collection-item';

//u can also add id
li.id = 'new-item';

//add attribute
li.setAttribute('title', 'new-item');

//create text node and append into the element
li.appendChild(document.createTextNode('hello-world'));

//now it doesnt have link 'a' tag for the 'x'. lets create one and append! the steps are the same as above
const link = document.createElement('a');

//add icon tag as a child in 'a' tag
link.innerHTML = '<i class="fa fa-remove"></i>';

//add class
link.className = 'delete-item secondary-content';

//now insert 'link' into 'li' as child
 li.append(link);

//append li as child to ul. check browser if it is added
document.querySelector('ul.collection').appendChild(li);

console.log(li);
console.log(link);