/* this project will be about add task, del task, filter task, clear all task, add/del task to/from local storage.   */
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listeners
loadEventListeners();

function loadEventListeners() {
	document.addEventListener('DOMContentLoaded', getTasks);
	form.addEventListener('submit', addTask);
	taskList.addEventListener('click', removeTask);
	clearBtn.addEventListener('click', clearTasks);
	filter.addEventListener('keyup', filterTasks);
}
/************ load task to browser from LS ************/
function getTasks() {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.forEach(function(task) {
		//create <li> element
		const li = document.createElement('li');
		li.className = 'collection-item';
		li.appendChild(document.createTextNode(task));

		//create <a> for for <li>
		const link = document.createElement('a');
		link.className = 'delete-item secondary-content';
		link.innerHTML = '<i class="fa fa-remove"></i>';

		//append link to li
		li.appendChild(link);

		//append li into ul
		taskList.appendChild(li);
	});
}

/********************ADD TASK***********************/
function addTask(e) {
	if (taskInput.value === '') {
		alert('pls add a task');
	}

	//create <li> element
	const li = document.createElement('li');
	li.className = 'collection-item';
	li.appendChild(document.createTextNode(taskInput.value));

	//create <a> for for <li>
	const link = document.createElement('a');
	link.className = 'delete-item secondary-content';
	link.innerHTML = '<i class="fa fa-remove"></i>';

	//append link to li
	li.appendChild(link);

	//append li into ul
	taskList.appendChild(li);

	storeTaskInLocal(taskInput.value); //persist to local storage

	taskInput.value = '';

	e.preventDefault();

	//console.log(li);
	//console.log(link);
}

/********************remove TASK***********************/
function removeTask(e) {
	//onclick on the 'x', the <i> gets called.but we 1 2 delete the whole <li> so we target <li> to perform delete operations. <li> is the grandparent of <i>

	//get the text content of the task
	const item = e.target.parentElement.parentElement.textContent;

	if (e.target.parentElement.classList.contains('delete-item')) {
		if (confirm(`are u sure u 1 2 delete ${item} ?`)) {
			e.target.parentElement.parentElement.remove();

			//remove from LS
			removeTaskFromLocal(e.target.parentElement.parentElement);

			alert('deleted: ' + item);
		}
	}
}

/********************remove ALL TASK***********************/
function clearTasks() {
	//1st method
	//taskList.innerHTML = '';

	//2nd method
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);

		//which is faster? https://stackoverflow.com/questions/62630808/why-removechild-faster-than-innerhtml
	}
	//clear from LS - above only remove from the document, not storage
	localStorage.clear();
}

/ ******************** filter TASK***********************/;

function filterTasks(e) {
	//user input filter field
	const text = e.target.value.toLowerCase();

	//grab all tasks
	document.querySelectorAll('.collection-item').forEach(function(task) {
		//in each loop, get n store the text content of the task
		const item = task.firstChild.textContent;

		//compare 'text' & 'item'. -1 if no result
		if (item.toLowerCase().indexOf(text) != -1) {
			task.style.display = 'block';
		} else {
			task.style.display = 'none';
		}
	});
}

/************* store TASK in local storage**************/
function storeTaskInLocal(task) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.push(task);
	localStorage.setItem('tasks', JSON.stringify(tasks));
}
/*****************REMOVE FROM LOCAL STORAGE ************/
function removeTaskFromLocal(taskItem) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.forEach(function(task, index) {
		if (taskItem.textContent === task) {
			//at position [index], remove 1 item
			tasks.splice(index, 1);
		}
	});

	localStorage.setItem('tasks', JSON.stringify(tasks));
}
