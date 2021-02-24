class UI {
	constructor() {
		this.show = document.getElementById('show');
	}
	showOneUser(data) {
		this.show.innerHTML = `
    <div class="row justify-content-center">
    <div class="col-auto">
      <table class="table table-dark table-responsive">
        <thead>
          <tr class="align-middle">
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Login</th>
            <th scope="col">Salary</th>
            <th scope="col">Start Date</th>
          </tr>
        </thead>
        <tr>
          <td>${data.id}</td>
          <td>${data.name}</td>
          <td>${data.login}</td>
          <td>${data.salary}</td>
          <td>${data.startDate}</td>
         
        </tr>
      </table>
    </div>
  </div>
      `;
	}
}
