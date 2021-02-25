/* we will be understanding more on callback fucntions to handle asynchronous operations.

In method 1, we mimic the actions of creating a blog post on a server or through an API or database, while outputting it on the browser.

Some cases, the server may return the post before your new post is added so your new post won't be included.

even if you create the post, you know you run the createPost() function before. we're going to mimic a slow server response and I'll show you how that can mess things up.

In method 2, we use a callback to fix that.

https://scotch.io/courses/10-need-to-know-javascript-concepts/callbacks-promises-and-async

*/

/**********************method 1********************** */
const posts = [ { title: 'Post One', body: 'This is post one' }, { title: 'Post Two', body: 'This is post two' } ];

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

function createPost(post, callback) {
	setTimeout(function() {
		posts.push(post);

		//here the 2nd param will become a func by adding '()' to it. from the above, once the post is created, then run getPost()
		callback();
	}, 2000);
}
function getPosts() {
	setTimeout(function() {
		let output = '';
		posts.forEach(function(post) {
			output += `<li>${post.title}</>`;
		});
		document.body.innerHTML = output;
	}, 1000);
}

//when this runs, it also passes a 2nd param which will be a function in createPost()
createPost({ title: 'Post three', body: 'This is post three' }, getPosts);
