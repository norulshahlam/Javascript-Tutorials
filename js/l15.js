/* we will learning dom on single / multiple elements

-------------------

.getElementById(String id)
    Returns an object reference to the identified element.
.querySelector()
    Returns the first Element node within the document, in document order, that matches the specified selectors.
.querySelectorAll()
    Returns a list of all the Element nodes within the document that match the specified selectors.
.getElementsByName()
    Returns a list of elements with the given name
.getElementsByClassName()
    Returns a list of elements with the given class name.
.getElementsByTagName()
    Returns a list of elements with the given tag name.
.getElementsByTagNameNS()
    Returns a list of elements with the given tag name and namespace.

    https://developer.mozilla.org/en-US/docs/Web/API/Document


.querySelector & .querySelectorAll....
--------------------------------------------


above are the 2 main ways to get elements, and the diff is the return type.
one returns nodeList, other returns HTMLCollections.

a) for 'html collections' type:
so if u wanna use forEach or map, convrt to array first

b) for 'nodeList' type:
no need to convert to array first if u 1 2 do forEach

to check which return which, simply console.log the return and in console it will 
show the return type

or. simply hover over the function name to see the return type

if u use a single element query selector for multiple elements, it juust returns the first matching element.

https://www.w3schools.com/js/js_htmldom_elements.asp
https://www.w3schools.com/jsref/met_document_queryselector.asp

*********************************************************
querySelector vs querySelectorAll
*********************************************************

querySelector
Returns the first matching Element node within the node's subtree. If no matching node is found, null is returned.

querySelectorAll
Returns a NodeList containing all matching Element nodes within the node's subtree, or an empty NodeList if no matches are found.

and

Note: The NodeList returned by querySelectorAll() is not live, which means that changes in the DOM are not reflected in the collection. This is different from other DOM querying methods that return live node lists.

https://stackoverflow.com/questions/14377590/queryselector-and-queryselectorall-vs-getelementsbyclassname-and-getelementbyid
*/

const bySingleId = document.getElementById('collection-item');
// console.log(bySingleId); //returns single html element / nodelist

const bySingleQuery = document.querySelector('.collection-item');
// console.log(bySingleQuery); //returns single html element / nodelist

const byManyQueries = document.querySelectorAll('.collection-item');
// console.log(byManyQueries); //returns nodelist
// console.log(byManyQueries[0]); //or 1 of them
const byNames = document.getElementsByName('item');
// console.log(byNames); //returns nodelist

//grab the list of having the class name. this is the whole list of items
const byClasses = document.getElementsByClassName('collection-item');
// console.log(byClasses); //returns HTMLCollections

const byTags = document.getElementsByTagName('li');
// console.log(byTags); //returns HTMLCollections

// method 1 to style all items - for loop
// for (let i = 0; i < items.length; i++){
//   items[i].style.color = 'red';
// }

//method 2 to style all items - forEach. must convert to array first!
let lis = Array.from(byClasses);
lis.forEach((byClasses) => (byClasses.style.color = 'red'));

//style 1 of them
//byClasses[0].style.color = 'blue';

//select multiple by tag name. u can also select by class, id, using css selector
// console.log('\nquerySelectorAll');
const ulitems = document.querySelectorAll('li');
// console.log(ulitems);

//u can querySelectorAll to select based on css properties
const ulitem3 = document.querySelectorAll('li:nth-child(odd)');
ulitem3.forEach((li) => (li.style.background = '#f4f4f4'));
