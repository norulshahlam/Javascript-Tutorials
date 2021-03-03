/* 

we will be modifying lesson 37 by replacing callback with 'promise'

Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code.
Multiple callback functions would create callback hell that leads to unmanageable code.

https://www.geeksforgeeks.org/javascript-promises/

*/

/**********************method 1********************** */
const posts = [
	{ title: 'Post One', body: 'This is post one' },
	{ title: 'Post Two', body: 'This is post two' }
];

// function createPost(post) {
// 	setTimeout(function() {
// 		posts.push(post);
// 	}, 2000);
// }
// function getPosts() {
// 	setTimeout(function() {
// 		let output = '';
// 		posts.forEach(function(post) {
// 			output += `<li>${post.title}</>`;
// 		});
// 		document.body.innerHTML = output;
// 	}, 1000);
// }

// createPost({ title: 'Post three', body: 'This is post three' });

// getPosts();

/**********************method 2********************** */

function createPost(post)
{
	//this new method has a callback func having 2 param. 'resolve' means success, 'reject' means error
	return new Promise(function (resolve, reject)
	{
		setTimeout(function ()
		{
			posts.push(post);

			const error = true; //set to true

			//to test for catching error when it happens
			if (!error) {
				resolve();
			} else {
				reject('Error! something went wrong');
			}
		}, 2000);
	});
}
function getPosts()
{
	setTimeout(function ()
	{
		let output = '';
		posts.forEach(function (post)
		{
			output += `<li>${ post.title }</>`;
		});
		document.body.innerHTML = output;
	}, 1000);
}

function err(msg)
{
	console.log(msg);
}

//when this runs, 'then' refer to 'resolve', while 'catch' refers to 'reject' in the function declaration callback function param. in short, if success, run getPosts(), if fail, run err()
createPost({ title: 'Post three', body: 'This is post three' })
	.then(getPosts)
	.catch(err);
