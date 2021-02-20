function easyHTTP() {
	this.http = new XMLHttpRequest();
}

//create http GET request
easyHTTP.prototype.get = function(url, callback) {
	this.http.open('GET', url, true);
	let self = this; //(a)
	this.http.onload = function() {
		if (self.http.status === 200) {
			callback(null, self.http.responseText);
		} else {
			callback('Error: ' + self.http.status);
		}
	};
	this.http.send();
};

//create http POST request
easyHTTP.prototype.post = function(url, data, callback) {
	this.http.open('POST', url, true);

	this.http.setRequestHeader('Content-type', 'application/json');
	let self = this; //(a)
	this.http.onload = function() {
		{
			callback(null, self.http.responseText);
		}
	};

	this.http.send(JSON.stringify(data));
};

//create http PUT request
easyHTTP.prototype.put = function(url, data, callback) {
	this.http.open('PUT', url, true);

	this.http.setRequestHeader('Content-type', 'application/json');
	let self = this; //(a)
	this.http.onload = function() {
		{
			callback(null, self.http.responseText);
		}
	};

	this.http.send(JSON.stringify(data));
};

//create http DELETE request
easyHTTP.prototype.delete = function(url, callback) {
	this.http.open('DELETE', url, true);
	let self = this; //(a)
	this.http.onload = function() {
		if (self.http.status === 200) {
			callback(null, 'Post deleted');
		} else {
			callback('Error: ' + self.http.status);
		}
	};
	this.http.send();
};

/* self === this
inside onload(), we are using self which is value of 'this' outside onload(). this is because if we use 'this' in onload(), it gives error. these two 'this' refers to its own value scope so by using 'this' to get status results in error = status undefined. 
another way is to use arrow function:

replace
 this.http.onload = function()
with
 this.http.onload = () =>
*/
