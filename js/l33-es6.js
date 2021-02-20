/* we are doing the same thing for tjis project only that we sre using es6 insted of es5 */

class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

class UI {
	addBooktoList(book) {
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
	}
	showAlert(message, className) {
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
	}
	deleteBook(target) {
		if (target.className === 'delete') {
			target.parentElement.parentElement.remove();
		}
	}
	clearFields() {
		document.getElementById('title').value = '';
		document.getElementById('author').value = '';
		document.getElementById('isbn').value = '';
	}
}

//logal storage class
class Store {
	static getBooks() {
		let books;
		if (localStorage.getItem('books') === null) {
			books = [];
		} else {
			books = JSON.parse(localStorage.getItem('books'));
		}
		return books;
	}
	static displayBooks() {
		const books = Store.getBooks();
		console.log(books);
		books.forEach(function(book) {
			const ui = new UI();

			ui.addBooktoList(book);
		});
	}
	static addBook(book) {
		const books = Store.getBooks();
		books.push(book);
		localStorage.setItem('books', JSON.stringify(books));
	}
	static removeBook(isbn) {
		const books = Store.getBooks();

		books.forEach(function(book, index) {
			if (book.isbn === isbn) {
				books.splice(index, 1);
			}
		});
		localStorage.setItem('books', JSON.stringify(books));
	}
}

//load event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

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
		ui.addBooktoList(book);

		//add to local store
		Store.addBook(book);

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

	//remove from LS
	Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

	ui.showAlert('book removed!', 'success');
	e.preventDefault();
});
