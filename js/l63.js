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

/**************item controller********************/
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
      // { id: 0, name: "Steak dinner", calories: 1200 },
      // { id: 1, name: "Cookie", calories: 400 },
      // { id: 2, name: "Eggs", calories: 300 },
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
      //creete id for every item added
      let ID;
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // calories to number
      calories = parseInt(calories);

      //create new item
      newItem = new Item(ID, name, calories);

      //add new item to data structure
      data.items.push(newItem);

      return newItem;
    },

    getItemById: function (id) {
      let found = null;

      //loop thru item to find matched id
      data.items.forEach((item) => {
        if (item.id === id) {
          found = item;
        }
      });
      return found;
    },

    setCurrentItem: function (item) {
      data.currentItem = item;
    },
    getCurrentItem: function () {
      return data.currentItem;
    },
    getTotalCalories: function () {
      let total = 0;

      //loop thru all items for calories
      data.items.forEach((item) => (total += item.calories));

      //get total calories
      data.totalCalories = total;

      return data.totalCalories;
    },
    getItems: function () {
      return data.items;
    },
  };
})();

/***************ui controller*****************/
const UICtrl = (function () {
  const UISelectors = {
    itemList: "#item-list",
    addBtn: ".add-btn",
    updateBtn: ".update-btn",
    deleteBtn: ".delete-btn",
    backBtn: ".back-btn",
    itemNameInput: "#item-name",
    itemCaloriesInput: "#item-calories",
    totalCalories: ".total-calories",
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

    addListItem: function (item) {
      //show the list element
      document.querySelector(UISelectors.itemList).style.display = "block";

      //create <li> element
      const li = document.createElement("li");
      //add class
      li.className = "collection-item";
      //add id
      li.id = `item-${item.id}`;
      //add to html
      li.innerHTML = `
        <strong>${item.name} </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
        `;

      document
        .querySelector(UISelectors.itemList)
        .insertAdjacentElement("beforeend", li);
    },

    clearInput: function () {
      document.querySelector(UISelectors.itemNameInput).value = "";
      document.querySelector(UISelectors.itemCaloriesInput).value = "";
    },

    addItemToForm: function () {
      document.querySelector(
        UISelectors.itemNameInput
      ).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(
        UISelectors.itemCaloriesInput
      ).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },

    //hide the list if theres no item
    hideList: function () {
      document.querySelector(UISelectors.itemList).style.display = "none";
    },
    showTotalCalories: function (totalCalories) {
      document.querySelector(
        UISelectors.totalCalories
      ).textContent = totalCalories;
    },
    clearEditState: function () {
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = "none";
      document.querySelector(UISelectors.deleteBtn).style.display = "none";
      document.querySelector(UISelectors.backBtn).style.display = "none";
      document.querySelector(UISelectors.addBtn).style.display = "inline";
    },
    showEditState: function () {
      document.querySelector(UISelectors.updateBtn).style.display = "inline";
      document.querySelector(UISelectors.deleteBtn).style.display = "inline";
      document.querySelector(UISelectors.backBtn).style.display = "inline";
      document.querySelector(UISelectors.addBtn).style.display = "none";
    },

    getSelectors: function () {
      return UISelectors;
    },
  };
})();

/*************app controller - main controller that initialize other controllers***************/
const AppCtrl = (function (ItemCtrl, UICtrl) {
  //load event listeners
  const loadEventListeners = function () {
    //get ui selectors
    const UISelectors = UICtrl.getSelectors();

    //get item event
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener("click", itemAddSubmit);

    //edit icon click
    document
      .querySelector(UISelectors.itemList)
      .addEventListener("click", itemUpdateSubmit);
  };
  //add item submit
  const itemAddSubmit = (e) => {
    //get form input from UI controller
    const input = UICtrl.getItemInput();

    //check for name and calories input
    if (input.name !== "" && input.calories !== "") {
      //add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);

      //add item to ui list
      UICtrl.addListItem(newItem);

      //clear fields after submit
      UICtrl.clearInput();
    }

    e.preventDefault();
  };

  //update item submit
  const itemUpdateSubmit = function (e) {
    if (e.target.classList.contains("edit-item")) {
      const listId = e.target.parentNode.parentNode.id;

      //break into array to get item number eg ["item", "0"]
      const listIdArr = listId.split("-");

      //get the actual id
      const id = parseInt(listIdArr[1]);

      //get item
      const itemToEdit = ItemCtrl.getItemById(id);

      //set current item
      ItemCtrl.setCurrentItem(itemToEdit);

      //add item to form
      UICtrl.addItemToForm();
    }
    e.preventDefault();
  };

  //public methods
  return {
    init: function () {
      //clear edit state / set initial state
      UICtrl.clearEditState();

      //fetch items frrom data structure
      const items = ItemCtrl.getItems();

      //check if theres any items
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        //populate list with items
        UICtrl.populateItemList(items);
      }

      // get total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      //add total calories to ui
      UICtrl.showTotalCalories(totalCalories);

      loadEventListeners();
    },
  };
})(ItemCtrl, UICtrl);

//initialize app
AppCtrl.init();
