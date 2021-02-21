/* we are create a github finder where we can search for github users and display there profile information */

//creeate obj of github
const github = new Github();

//creeate obj of UI
const ui = new UI();

//search input

const searchUser = document.getElementById('searchUser');

//create eveny
searchUser.addEventListener('keyup', (e) => {
	//get input text
	const userText = e.target.value;

	if (userText !== '') {
		//make http call
		github.getUser(userText).then((data) => {
			if (data.profile.message === 'Not Found') {
				//show UI alert
			} else {
				//show profile
				ui.showProfile(data.profile);
			}
		});
	} else {
		//clear ui if no user found
		//clear profile
	}
});
