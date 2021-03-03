/* this lesson is for keyboard input events */

const form = document.querySelector('form');
const taskInput = document.getElementById('task');

//trigger on submit click
form.addEventListener('submit', runEvent);

//when keyboard is pressed down
taskInput.addEventListener('keydown', runEvent);

//when keybaord is released
taskInput.addEventListener('keyup', runEvent);

taskInput.addEventListener('focus', runEvent);

//opp of focus
taskInput.addEventListener('blur', runEvent);
taskInput.addEventListener('cut', runEvent);
taskInput.addEventListener('paste', runEvent);

//submit event
// function runEvent(e)
// {
//   e.preventDefault();
//   console.log(`event type: ${ e.type }`);
//   console.log(taskInput.value); //iput value
//   taskInput.value = ''; //clear value after submit
// }
function runEvent(e) {
	console.log(`event type: ${e.type}`);
	//console.log(e.target.value); //iput value
	//output to page
	document.querySelector('h5').innerText = e.target.value;
}

/* taskInput is taken from id=task, which is an input element.
it aslo has a value pre-defined(or u can later edit in the browser) so on click u can check that value */
