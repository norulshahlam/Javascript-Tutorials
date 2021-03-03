/*
Now we're going to start to build our custom Ajax library called Easy HTTP.

Now in order to build this we're going to need something to test with. So we're going to use https://jsonplaceholder.typicode.com/ -- which is a fake online rest API for testing and prototyping.

we are also implementing callback to ensure we do it asynchonously, to ensure we get the response before passing the data 
*/

const http = new easyHTTP();

//get many posts
// const posts = http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(posts);
// 	}
// });

//get 1 post
// const posts = http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, posts) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(posts);
// 	}
// });

//create data
const data = {
	title: 'Custom Post',
	body: 'this is a custom Post'
};

//create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });

//update post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
	if (err) {
		console.log(err);
	} else {
		console.log(post);
	}
});

//delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
	if (err) {
		console.log(err);
	} else {
		console.log(response);
	}
});
