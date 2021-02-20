/* we will leearning dom on multiple elements

we have diff ways to get multiple elements, the diff is the return type.
a) for getElements() the value return is in 'html collections'
so if u wanna use forEach or map, convrt to array first
b) for querySelector/querySelectorAll, it returns node list so
no need to convert to array first if u 1 2 do forEach

to check which return which, simply console.log the return and in console it will 
show the return type

or. simply hover over the function name to see the return type

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

//grab the list items. this is the whole list items
const items = document.getElementsByClassName('collection-item');

console.log('getElementsByClassName');
console.log(items); //print all items
console.log(items[0]); //or 1 of them

// method 1 to style all items - for loop
// for (let i = 0; i < items.length; i++){
//   items[i].style.color = 'red';
// }

//method 2 to style all items - forEach. must convert to array first!
let lis = Array.from(items);
lis.forEach((items) => (items.style.color = 'red'));

//style 1 of them
//items[0].style.color = 'blue';

//only by tag name. gives same result as below
console.log('\ngetElementsByTagName');
const ulitems2 = document.getElementsByTagName('li');
console.log(ulitems2);

//select multiple by tag name. u can also select by class, id, using css selector
console.log('\nquerySelectorAll');
const ulitems = document.querySelectorAll('li');
console.log(ulitems);

//u can also select using css selectors
const ulitem3 = document.querySelectorAll('li:nth-child(odd)');
ulitem3.forEach((li) => (li.style.background = '#f4f4f4'));
