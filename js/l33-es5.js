//book constructor
function Book(title, author, isbn) {
	this.title = title;
	this.author = author;
	this.isbn = isbn;
}

//ui constructor
function UI() {}
UI.prototype.addBookToList = function(book) {
	const list = document.getElementById('book-list');

	//create tr element
	const row = document.createElement('tr');

	//insert col
	row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>  
  `;

	list.appendChild(row);

	console.log(row);
};
//show alert
UI.prototype.showAlert = function(message, className) {
	//create element
	const div = document.createElement('div');
	//add 2 class
	div.className = `alert ${className}`;
	//add text
	div.appendChild(document.createTextNode(message));
	//get parent
	const container = document.querySelector('.container');
	const form = document.querySelector('#book-form');

	//add 'div' into 'container', before 'form'
	container.insertBefore(div, form);

	//remove alert after 3 sec
	setTimeout(function() {
		document.querySelector('.alert').remove();
	}, 2000);
};

//delete book
UI.prototype.deleteBook = function(target) {
	if (target.className === 'delete') {
		target.parentElement.parentElement.remove();
	}
};

//clear fields after submit
UI.prototype.clearFields = function() {
	document.getElementById('title').value = '';
	document.getElementById('author').value = '';
	document.getElementById('isbn').value = '';
};

//event listener for adding book
document.getElementById('book-form').addEventListener('submit', function(e) {
	//get form values
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const isbn = document.getElementById('isbn').value;

	//instantiate book
	const book = new Book(title, author, isbn);

	//instantiate ui
	const ui = new UI();

	//validate
	if (title === '' || author === '' || isbn === '') {
		//error alert
		ui.showAlert('Please fill in all fields', 'error');
	} else {
		//add book to list
		ui.addBookToList(book);

		//show success
		ui.showAlert('Book added!', 'success');

		//clear fields
		ui.clearFields();
	}

	//console.log(book);
	e.preventDefault();
});

//for delete on click event
document.getElementById('book-list').addEventListener('click', function(e) {
	const ui = new UI();
	ui.deleteBook(e.target);
	ui.showAlert('book removed!', 'success');
	e.preventDefault();
});
