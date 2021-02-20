/* we will learning on event bubbling and delegation

Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event. The event propagation mode determines in which order the elements receive the event.

With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.

With capturing, the event is first captured by the outermost element and propagated to the inner elements.

Capturing is also called "trickling", which helps remember the propagation order:

trickle down, bubble up

https://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing
*/

/**************** event bubbling *****************/
/*
//1. console log 'task list' on click
document.querySelector('.card-title').addEventListener('click', function(e) {
	console.log('card title');
});

//2. console log its parent
document.querySelector('.card-content').addEventListener('click', function() {
	console.log('card content');
});

//2. console log its parent's parents
document.querySelector('.card').addEventListener('click', function() {
	console.log('card');
});

//2. console log its parent's parents's parents
document.querySelector('.col').addEventListener('click', function() {
	console.log('col');
});*/

/* here we see that the parents will get called too event we only click on 'task-list. this is called event bubbling.
With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements. */

/**************** event delegation *****************/

//1. here we are trying to trigger click event on any 'x' but only the first one happens
//document.querySelector('.delete-item').addEventListener('click', deleteItem);

//2. to overcome this, we seelct the whole body / parent of the list. now everywhere we click it will trigger an event. click on the 'x' and see what is the element printed
document.body.addEventListener('click', deleteItem);

// function deleteItem(e) {

// 	console.log(e.target);
// }

//3. then we create condition to print out if the 'x' element is clicked. now only the list 'x' is printed, which is the <i>
// function deleteItem(e) {
// 	if (e.target.className == 'fa fa-remove') {
// 		console.log(e.target);
// 	}
// }

/*
now supposed we 1 2 delete the 1 of the list when we click 'x'. since 'x' is part of the list, we need to delete the whole list -so we select the grand parent <li> to delete and the current selection is the <a> we will:
a) use traversing upwards to get the grandparent <li> and use it as a condition
b) delete the grandparent <li>
*/

function deleteItem(e) {
	if (e.target.parentElement.classList.contains('delete-item')) {
		console.log(e.target.parentElement.parentElement.innerText + ' deleted!');
		e.target.parentElement.parentElement.remove();
	}
}

/*
use class list cos the <a> might contains more than 1 class. if we use className as condition rather than classList, we need to specify exactly all class in <a>. this is risky as sometimes dynamically new classes might be added in <a> n if this happens, the condition is not met, and no deletion occurs. by using classList, as long one of the class is present, the conditions is met, and deletion will happen.
*/
