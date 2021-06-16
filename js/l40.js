/*
we will recreate the easy HTP library (l38) that we created using fetch and using some updated standards from ESX instead of using prototypes using classes using promises arrow functions.
*/

document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getExternal);

function getText() {
  fetch("../text/l40.txt")
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById("output").innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
    });
}
function getJson() {
  fetch("../json/l40.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let output = "";

      data.forEach(function (post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
      console.log();
    });
}
function getExternal() {
  fetch("https://api.github.com/users")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let output = "";

      data.forEach(function (user, index) {
        output += `<li>${index + 1}. ${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
      console.log();
    });
}

/*
explanation

1st 'then' returns a Promise. if success, 2nd 'then' fetch the response. 'catch' is the error handling. this is the same as the previous lesson, only the code structure is simplified
*/
