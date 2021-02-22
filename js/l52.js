/* this is a mini project using iterator

we are displaying user profiles using next(). as long as there are data, it will go to next data. profile data will be hardcoded internal json data. 
*/

const data = [
	{
		name: 'john doe',
		age: '32',
		gender: 'male',
		lookingFor: 'female',
		location: 'Singapore',
		image: 'https://randomuser.me/api/portraits/men/82.jpg'
	},
	{
		name: 'jill doe',
		age: '77',
		gender: 'female',
		lookingFor: 'male',
		location: 'jb',
		image: 'https://randomuser.me/api/portraits/women/2.jpg'
	},
	{
		name: 'jack doe',
		age: '12',
		gender: 'male',
		lookingFor: 'female',
		location: 'uk',
		image: 'https://randomuser.me/api/portraits/men/14.jpg'
	}
];


//iterator this data
const profiles = profileIterator(data);

//call 1st profile on page load
nextProfile();

//'next' event listener
document.getElementById('next').addEventListener('click', nextProfile);

//next profile display
function nextProfile() {
	const currentProfile = profiles.next().value;
	if (currentProfile != undefined) {
		document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item">Looking for: ${currentProfile.lookingFor}</li>
      </ul>
      `;
		document.getElementById('imageDisplay').innerHTML = `
      <img src="${currentProfile.image}">`;
  }
  //if there is no more next(), reload page
  else {
    window.location.reload();
  }
}

function profileIterator(profiles) {
	let nextIndex = 0;

	return {
		next: function() {
			return nextIndex < profiles.length
				? {
						value: profiles[nextIndex++],
						done: false
					}
				: {
						done: true
					};
		}
	};
}
