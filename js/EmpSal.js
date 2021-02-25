//create instance of api
const empApi = new EmpSalApi();

//create instance of ui
const ui = new UI();

//get button id
const getOneUsers = document.getElementById('getOne');
const getAllUsers = document.getElementById('getAll');

//create event on button
getOneUsers.addEventListener('click', getOne);
getAllUsers.addEventListener('click', getAll);

function getOne() {
	empId = document.getElementById('getOneId').value;

	empApi
		.getOneUser(`http://localhost:8080/users/${empId}`)
		.then((data) => {
			console.log(data);
			ui.showOneUser(data);
		})
		.catch((error) => console.log(error));
}
function getAll() {
	empApi
		.getAllUser(`http://localhost:8080/users/`)
		.then((data) => {
			console.log(data);
			data = data.slice(11);
			data = data.slice(0, -1);
			console.log(data);

			data.forEach(function(post) {
				console.log(post.id);
			});

			//check if it is json
			console.log(isJson(data));
		})
		.catch((error) => console.log(error));
}
function isJson(str) {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
}
