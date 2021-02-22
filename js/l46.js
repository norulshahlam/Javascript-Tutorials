/* we are create a github finder where we can search for github users and display there profile information

feature:

get first result of user on any matching letter typed
display 'user not found' if no user
	-timeout for 2 sec


*/

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
		github.getUser(userText).then((data) =>
		{
			console.log(data);
			if (data.profile.message === 'Not Found') {
				//show UI alert
				ui.showAlert('user not found', 'alert alert-danger');
			} else {
				//show profile
				ui.showProfile(data.profile);
				ui.showRepos(data.repos);
			}
		});
	} else {
		//clear ui if no user found
		ui.clearProfile();
	}
});
