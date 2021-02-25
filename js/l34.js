/*
1. we will creeate xhr obj and give response of txt file content.
2. we will also check for state at each part of the code to see the diff state (0-4). 
	--onProgress - 3: processing request - function called periodically with information when an XMLHttpRequest before progress is 100%
	--onload is called when progress is 100%
5. understand the parameters in .open(method, url, async);

*******************************************************

The XMLHttpRequest Object
All modern browsers support the XMLHttpRequest object.

The XMLHttpRequest object can be used to exchange data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

XMLHttpRequest Object Properties

readyState	Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready

status	Returns the status-number of a request
200: "OK"
403: "Forbidden"
404: "Not Found"
For a complete list go to the Http Messages Reference

open(method, url, async)	Specifies the type of request

method: the type of request: GET or POST
url: the server (file) location
async: true (asynchronous) or false (synchronous)

By sending asynchronously, the JavaScript does not have to wait for the server response, but can instead:

--execute other scripts while waiting for server response
--deal with the response after the response is ready

https://www.w3schools.com/xml/ajax_xmlhttprequest_send.asp
*/

document.getElementById('button').addEventListener('click', loadData);

function loadData() {
	//1 create xhr obj
	const xhr = new XMLHttpRequest();
	console.log('READYSTATE', xhr.readyState);

	//2. open location of data. can b internal file or external url
	xhr.open('GET', '../text/l34.txt', true);

	console.log('READYSTATE', xhr.readyState);

	//porcessing request
	xhr.onprogress = function() {
		console.log('READYSTATE', xhr.readyState);
	};

	//3. onLoad
	xhr.onload = function() {
		console.log('READYSTATE', xhr.readyState);
		if (this.status === 200) {
			document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
		}
	};

	//4. send
	xhr.send();
}
/*






*/
