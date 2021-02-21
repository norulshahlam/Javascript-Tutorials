/* 
lesson is same as previous, only now we get data from external api

note that not all api are the same - some requires authentification,  some have limilted number of requests ie 100 requests per day

and also the response is not the same - some data are wrapped in value obj so we need to use value.forEach() instead of forEach()
*/

document.querySelector('.get-jokes').addEventListener('click', getJokes);

//this func gets the number of random jokes, based on the number input by user
function getJokes(e) {
	const number = document.querySelector('input[type="number"]').value;

	const xhr = new XMLHttpRequest();

	//instead of fetching from local directory, we fetch from website api, with the number of jokes by user input
	xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
	console.log(number);

	xhr.onload = function() {
		if (this.status === 200) {
			//store response data
			const response = JSON.parse(this.responseText);
			console.log(response);
			let output = '';

			if (response.type === 'success') {
				response.value.forEach(function(joke) {
					//(a)
					output += `<li>Joke ${joke.id}: ${joke.joke}</li>`;
				});
			} else {
				output += `<li>Something went wrong</li>`;
			}

			document.querySelector('.jokes').innerHTML = output;
		}
	};

	xhr.send();
	//console.log(response);
	e.preventDefault();
}

/* (a)  we use response.value.forEach intead of response.forEach. bcos of the diffefrent response from api, the data is wrapped inside the 'value' object, unlike the previous lesson, the data is given openly  */
