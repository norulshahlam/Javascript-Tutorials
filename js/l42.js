/*
we will recreate the easy HTP library (l38) that we created using fetch and using some updated standards from ESX instead of using prototypes using classes using promises & arrow functions

UPDATE: this is from lesson 40  where we creeate a fetch api. now we only implementing the arrow function, making the code clean and easy to maange
*/

document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

function getText() {
	fetch('../text/l40.txt')
		.then((res) => res.text())
		.then((data) => {
			console.log(data);
			document.getElementById('output').innerHTML = data;
		})
		.catch((err) => console.log(err));
}
function getJson() {
	fetch('../json/l40.json')
		.then((res) => res.json())
		.then((data) => {
			let output = '';

			data.forEach(function(post) {
				output += `<li>${post.title}</li>`;
			});
			document.getElementById('output').innerHTML = output;
		})
		.catch((err) => console.log());
}
function getExternal() {
	fetch('https://api.github.com/users')
		.then((res) => res.json())
		.then((data) => {
			let output = '';

			data.forEach(function(user, index) {
				output += `<li>${index + 1}. ${user.login}</li>`;
			});
			document.getElementById('output').innerHTML = output;
		})
		.catch((err) => console.log(err));
}
