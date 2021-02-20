/* this lesson will be the same as the last one, except we use json file instead of txt file to load the data. technically we load 2 json file -

 a button to load a json containing 1 customer
 a button to load a json containing many customers
*/

document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);

//one customer
function loadCustomer(e) {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', '../json/l35.json', true);

	xhr.onload = function() {
		if (this.status === 200) {
			const customer = JSON.parse(this.responseText);
			const output = `
       <ul>
       <li>ID: ${customer.id}</li>
       <li>name: ${customer.name}</li>
       <li>company: ${customer.company}</li>
       <li>phone: ${customer.phone}</li>
       </ul>
       `;

			document.getElementById('customer').innerHTML = output;
		}
	};
	xhr.send();
}

//many customers
function loadCustomers(e) {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', '../json/l35s.json', true);

	xhr.onload = function() {
		if (this.status === 200) {
			const customers = JSON.parse(this.responseText);

			/*this is the main diff with loading 1 vs many cust.
      we will init a variable, then in the loop, keep appending the 
      data with the elements in it.
      then we output to browser
      */
			let output = '';

			customers.forEach((customer) => {
				output += `
       <ul>
       <li>ID: ${customer.id}</li>
       <li>name: ${customer.name}</li>
       <li>company: ${customer.company}</li>
       <li>phone: ${customer.phone}</li>
       </ul>
       `;
			});

			document.getElementById('customers').innerHTML = output;

			console.log(customers);
		}
	};
	xhr.send();
}
