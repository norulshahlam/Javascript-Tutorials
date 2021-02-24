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
			ui.showOneUser(data);
		})
		.catch((error) => console.log(error));
}
function getAll() {
	empApi
		.getAllUser(`http://localhost:8080/users/`)
		.then((data) => console.log(data))
		.catch((error) => console.log(error));
}
