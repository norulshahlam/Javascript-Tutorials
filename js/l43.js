/* we will recreate easy http library (l38). in l38, we use ajax, xhr, callbakc, es5 prototypes. now we are using modern technologies like fetch, classes, promise, arrow  */
const http = new EasyHTTP();

//get users
// const users = http
// 	.get('https://jsonplaceholder.typicode.com/posts')
// 	.then((data) => console.log(data))
// 	.catch((err) => console.log(err));


  //user data
const data = {
  name: 'Shah lam',
  username: 'lamshah',
  email: 'shah@SpeechGrammarList.com'
}
  
//create user based aboVe user data
// const users = http
// 	.post('https://jsonplaceholder.typicode.com/users',data)
// 	.then((data) => console.log(data))
// 	.catch((err) => console.log(err));

  
//update post
// const users = http
// 	.put('https://jsonplaceholder.typicode.com/users/2',data)
// 	.then((data) => console.log(data))
// 	.catch((err) => console.log(err));

  
const users = http
	.delete('https://jsonplaceholder.typicode.com/users/2')
	.then((data) => console.log(data))
	.catch((err) => console.log(err));

  