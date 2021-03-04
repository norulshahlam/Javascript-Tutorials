/*
we're going to be building a meal and calorie tracker and we're going to use the javascript module pattern for this project.
we're also going to use local storage so that we can persist the data so that it stays after we reload the page or close the browser or whatever.
So we're going to basically have a few different controllers - three different module controllers

--will have a storage controller for local storage although that will be the very last thing we do will
--have an item controller to deal with the actual data. 
--The state will have a UI controller to work with the UI.

main app controller which will be the initialiser.

*/

//storage controller

//item controller
const ItemCtrl = (function () {
  //item constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  //data structure / state
  const data = {
    items: [
      { id: 0, name: "Steak dinner", calories: 1200 },
      { id: 1, name: "Cookie", calories: 400 },
      { id: 2, name: "Eggs", calories: 300 },
    ],
    currentItem: null,
    totalCalories: 0,
  };

  //public methods
  return {
    logData: function () {
      return data;
    },
    addItem: function (name, calories) {
      console.log(name, calories);
    },
    getItems: function () {
      return data.items;
    },
  };
})();

//ui controller
const UICtrl = (function () {
  const UISelectors = {
    itemList: "#item-list",
    addBtn: ".add-btn",
    itemNameInput: "#item-name",
    itemCaloriesInput: "#item-calories",
  };

  //public methods
  return {
    populateItemList: function (items) {
      let html = "";
      items.forEach((item) => {
        html += `
              <li class="collection-item" id="item-${item.id}">
                <strong>${item.name} </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                  <i class="edit-item fa fa-pencil"></i>
                </a>
              </li>
          `;
      });

      //insert list items into html
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },

    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value,
      };
    },

    getSelectors: function () {
      return UISelectors;
    },
  };
})();

//app controller - main controller that initialize other controllers
const AppCtrl = (function (ItemCtrl, UICtrl) {
  //load event listeners
  const loadEventListeners = function () {
    //get ui selectors
    const UISelectors = UICtrl.getSelectors();

    //get item event
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener("click", itemAddSubmit);
  };

  //add item submit
  const itemAddSubmit = (e) => {
    //get form input from UI controller
    const input = UICtrl.getItemInput();

    //check for name and calories input
    if (input.name !== "" && input.calories !== "") {
      //add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
    }

    e.preventDefault();
  };

  //public methods
  return {
    init: function () {
      //fetch items frrom data structure
      const items = ItemCtrl.getItems();

      //populate list with items
      UICtrl.populateItemList(items);

      loadEventListeners();
    },
  };
})(ItemCtrl, UICtrl);

//initialize app
AppCtrl.init();
