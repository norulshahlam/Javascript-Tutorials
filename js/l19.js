/* 
we are learninig on event leistnerners and event objects

HTML DOM events allow JavaScript to register different event handlers on elements in an HTML document.

Events are normally used in combination with functions, and the function will not be executed before the event occurs (such as when a user clicks a button).

commonly used events:

mousemove	The event occurs when the pointer is moving while it is over an element	
mouseover	The event occurs when the pointer is moved onto an element, or onto one of it
scroll  	The event occurs when an element's scrollbar is being scrolled
submit  	The event occurs when a form is submit
wheel	    The event occurs when the mouse wheel rolls up or down over an element
click   	The event occurs when the user clicks on an element	
copy    	The event occurs when the user copies the content of an element
cut	      The event occurs when the user cuts the content of an element
focus	    The event occurs when an element gets focus

https://www.w3schools.com/jsref/dom_obj_event.asp

for this lesson we will only focus on 1 event - click.
*/

//creating an event listener
document.querySelector('.clear-tasks').addEventListener('click', function (/*e*/) //clear task button
{
  console.log('clicked');
  //e.target.innerText = 'hello'; //change the name of the button
  //e.preventDefault();
})

/*if u noticed, the console log prints and clears very fast. this is bcos of default behaviour which is also running on click. for this case, in the markup, it is supposed to redirecting to other page - so log gets removed. to overcome this, u can:

1. cahnge attribute of href to '#' so it wont load to other page, keeping the log in place

2. use preventDefault() - cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. u can uncomment in the above code

*/

/* this is more preferred way of adding event listener - use function call instead of directly executing it like the above. also we will be looking at what the 'e' is - event object  */
document.querySelector('.btn').addEventListener('click', onClick); //add task button

function onClick(e)
{
  e.preventDefault();


  console.log(e.target); //check  the target event 
  console.log(e.target.className); //check  the target event 
  console.log(e.type); //check the event type

  e.target.value = 'hello'; //change the name of the button. replace value with innerText if u r using it on other elements

  console.log('mouse location relative to window');
  console.log('y-axis: '+e.clientY+ ', x-axis: '+e.clientX);

  console.log('mouse location relative to element');
  console.log('y-axis: ' + e.offsetY + ', x-axis: ' + e.offsetX);
  
}
