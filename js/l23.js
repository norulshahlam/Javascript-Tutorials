/*
The localStorage and sessionStorage properties allow to save key/value pairs in a web browser.

The sessionStorage object stores data for only one session (the data is deleted when the browser tab is closed).

localStorage property stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.

https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
*/

//set local storage item
localStorage.setItem('name', 'john');

//set session storage item
sessionStorage.setItem('name', 'bob');

//remove item
// localStorage.removeItem('name', 'john');
// sessionStorage.removeItem('name', 'john');

//clear all storage. make sure to remove .setItem above
// localStorage.clear();
// sessionstorage.clear();

//fetch storage
// const name1 = localStorage.getItem('name');
// const name2 = sessionStorage.getItem('name');

// console.log(name1);
// console.log(name2);

/* now lets use what we learnt above by adding tasks into the local storage */

document.querySelector('form').addEventListener('submit', function(e) {
	//store the user input task
	const task = document.getElementById('task').value;

	let tasks; //to store all task

	//check if there is any existsing tasks in local storage
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		//if have, then add to 'tasks'
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	//add user input task into array tasks
	tasks.push(task);
	//add tasks into local storage. since we storing in local storage, we must convert from js obj to JSON string
	localStorage.setItem('tasks', JSON.stringify(tasks));
	alert(task + ' saved');
	e.preventDefault();
});
//print to console. convert back json to js obj
const tasks1 = JSON.parse(localStorage.getItem('tasks'));
