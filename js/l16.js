/* we will be learninig on how to traverse the DOM

comment all and slowly uncommment from the top and open the console

—it’s the act of selecting an element from another element.

You can traverse in three directions:

Downwards
Sideways
Upwards

https://zellwk.com/blog/dom-traversals/#:~:text=A%20good%20JavaScript%20developer%20needs,an%20element%20from%20another%20element.

1. .childNodes;

The childNodes property returns a collection of a node's child nodes, as a NodeList object.
The nodes in the collection are sorted as they appear in the source code and can be accessed by index numbers. The index starts at 0.
Child nodes include elements, text and comments.
Note: Whitespace inside elements is considered as text, and text is considered as nodes. Comments are also considered as nodes.

The main difference between children and childNodes property is that children work upon elements and childNodes on nodes including non-element nodes like text and comment nodes.


https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes
https://www.w3schools.com/jsref/prop_node_childnodes.asp
https://www.geeksforgeeks.org/what-is-the-difference-between-children-and-childnodes-in-javascript/#:~:text=The%20childNodes%20property%20is%20a,be%20accessed%20using%20index%20numbers.

2. .children;

The children property returns a collection of child elements, as an HTMLCollection object.
*/

let val;

const list = document.querySelector('ul.collection'); //get whole list thru the parent
const listItem = document.querySelector('li.collection-item:first-child'); //get 1st list

// console.log(list);
// console.log(listItem);

/**************** GET CHILD NODE (Downwards) ***********************/

// val = list.childNodes; //get full child nodes from parents - return nodes list
// val = list.childNodes[0]; //get node from 1st position
// val = list.childNodes[1].nodeName;
// val = list.childNodes[0].nodeType;
// val = list.firstChild; //same as list.childNodes[0], but this is only for 1st child. u can use the same for .lastChild

/*
The nodeType property returns the node type, as a number, of the specified node.
If the node is an element node, the nodeType property will return 1.
If the node is an attribute node, the nodeType property will return 2.
If the node is a text node, the nodeType property will return 3.
If the node is a comment node, the nodeType property will return 8.
*/

//get children (ONLY THE ELEMENT) nodes from parents - return html elements
// val = list.children;
// val = list.children[1]; //gets the 2nd child
// val = list.firstElementChild; //same as list.children[0], but this is only for 1st child. u can use same for last child too

// list.children[1].textContent = 'changed here'; //change content of 2nd child

//  3rd child's 1st child
// val = list.children[2].children[0];

//u can add an id to it too
// list.children[2].children[0].id = 'added-into-child-of-child';

//count how many child does the parent 'ul' has. since there are 5 list under this ul,it should return 5
// val = list.childElementCount;

/**************** GET PARENT NODE (Upwards) ***********************/

//same as .childNode but for child to parent
// val = listItem.parentNode;
// val = listItem.parentElement; //returns same as above

// val = listItem.parentElement.parentElement; //go 2 level up - grandparent

/**************** GET SIBLING NODE (Sideways) ***********************/

//next sibling
// val = listItem.nextSibling; //return #text as this act like .childNodes where it shows all nodes including #text which represents line breaks. to get only the element, use nextElementSibling.

//next element sibling
// val = listItem.nextElementSibling;

//next 2 sibling
// val = listItem.nextElementSibling.nextElementSibling;

// u can also get the previous siblings
// val = listItem.previousSibling; //opp of nextSibling. gives #text cos of the line break, as shown in ..childNodes

// val = listItem.previousElementSibling; //opp of nextElementSibling. give null cos current item is the 1st element.

//and lastly, u can go up down, right left! now current selector is at 1st child of the list. let go to the 'add task' & change the value of the button!
listItem.parentElement.parentElement.parentElement.children[0].children[2].value = 'got cha!';

//once done, we log it!
val = listItem.parentElement.parentElement.parentElement.children[0].children[2];

console.log(val);
