/* in this lesson we will be doing everything on mouse events */

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//click
//clearBtn.addEventListener('click', runEvent);
//double clikc
// clearBtn.addEventListener('dblclick', runEvent);
//mouse down - click n hold
//clearBtn.addEventListener('mousedown', runEvent);
//mouse up - click n hold, n let go
//clearBtn.addEventListener('mouseup', runEvent);
//mouse enters the card section
//card.addEventListener('mouseenter', runEvent);
//mouse leave the card section
//card.addEventListener('mouseleave', runEvent);

//mouse cross over btwn card section / its child elements
//card.addEventListener('mouseover', runEvent);
//mouse leave the card section / its child elements
//card.addEventListener('mouseout', runEvent);

/*    mouse over/out VS enter/leave

mouse over & out triggers on selected elements and its child elements. within the child element, bobth will be triggered when mouse enters another element. this is bcos as a mouse enters an elements, it also leave the parent element.

mouse enter/leave only works on the main element itself, not the child.
*/

//when mouse mouse in the selected element
card.addEventListener('mousemove', runEvent);

//event handler.check your console!
function runEvent(e) {
	e.preventDefault();
	console.log(`event type: ${e.type}`);

	//for mouse move
	heading.textContent = `mouse x: ${e.offsetX} mouse y: ${e.offsetY} `;
	document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
