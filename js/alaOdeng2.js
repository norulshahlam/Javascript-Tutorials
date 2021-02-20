let pChoice = null;
let cChoice = null;
let result;

const choice = [ 'Scissors', 'Paper', 'Stone' ];

//display result on browser
const text = document.createElement('h4');

//click event
document.body.addEventListener('click', userChoice);

function userChoice(e) {
	if (e.target.className == 'button') {
		console.clear();

		document.getElementsByTagName('h3').value = '';

		pChoice = e.target.id;
		compareChoices();
		displayText(result);
	}
}

function computerChooses() {
	cChoice = choice[Math.floor(Math.random() * 3)];
}

function compareChoices() {
	computerChooses();
	console.log('in compare funct for cChoice : ' + cChoice);
	console.log('in compare funct for pChoice : ' + pChoice);

	if (pChoice === cChoice) {
		result = 'Tie!';
	} else if (pChoice == 'Scissors') {
		result = cChoice === 'Paper' ? 'You Win!' : 'You Lose!';
	} else if (pChoice == 'Paper') {
		result = cChoice === 'Stone' ? 'You Win!' : 'You Lose!';
	} else if (pChoice == 'Stone') {
		result = cChoice === 'Paper' ? 'You Lose!' : 'You Win!';
	}
}

function displayText(result) {
	text.innerText = `${result} You choose ${pChoice}, Computer choose ${cChoice}`;
	document.body.appendChild(text);
}
