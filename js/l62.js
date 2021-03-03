/*
The State pattern provides state-specific logic to a limited set of objects in which each object represents a particular state. This is best explained with an example.

Say a customer places an online order for a TV. While this order is being processed it can in one of many states: New, Approved, Packed, Pending, Hold, Shipping, Completed, or Canceled. If all goes well the sequence will be New, Approved, Packed, Shipped, and Completed. However, at any point something unpredictable may happen, such as no inventory, breakage, or customer cancelation. If that happens the order needs to be handled appropriately.

https://www.dofactory.com/javascript/design-patterns/state
*/

const PageState = function () {
  let currentState = new homeState(this);

  this.init = function () {
    this.change(new homeState());
  };

  this.change = function (state) {
    currentState = state;
  };
};

//home state
const homeState = function (page) {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
      <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
  `;
};

//about state
const aboutState = function (page) {
  document.querySelector("#heading").textContent = "About Us";
  document.querySelector("#content").innerHTML = `
    <p>This is the about our page</p>
  `;
};

//contact state
const contactState = function (page) {
  document.querySelector("#heading").textContent = "Contact Us";
  document.querySelector("#content").innerHTML = `
  <form>
  <div class="form-group">
    <label>Name</label>
    <input type="text" class="form-control">
  </div>
  <div class="form-group">
  <label>Email address</label>
  <input type="email" class="form-control">
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>
  `;
};

//instantiate pageState
const page = new PageState();
page.init();

//ui variable
const home = document.getElementById("home"),
  about = document.getElementById("about"),
  contact = document.getElementById("contact");

home.addEventListener("click", (e) => {
  page.change(new homeState());
  e.preventDefault();
});

contact.addEventListener("click", (e) => {
  page.change(new contactState());
  e.preventDefault();
});

about.addEventListener("click", (e) => {
  page.change(new aboutState());
  e.preventDefault();
});
