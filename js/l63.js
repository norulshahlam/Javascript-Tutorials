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
const StorageCtrl = (function () {
  //public methods
  return {
    storeItem: function (item) {
      let items;

      // check for items in local storage
      if (localStorage.getItem("items") === null) {
        items = [];
        items.push(item);

        //set LS
        localStorage.setItem("items", JSON.stringify(items));
      } else {
        items = JSON.parse(localStorage.getItem("items"));

        //push new item into items
        items.push(item);

        //add items into LS while converting to json
        localStorage.setItem("items", JSON.stringify(items));
      }
    },

    getItemsFromStorage: function () {
      if (localStorage.getItem("items") === null) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem("items"));
      }
      return items;
    },

    updateItemStorage: function (updatedItem) {
      let items = JSON.parse(localStorage.getItem("items"));
      items.forEach((item, index) => {
        if (updatedItem.id === item.id) {
          items.splice(index, 1, updatedItem);
        }
      });
      //add items into LS while converting to json
      localStorage.setItem("items", JSON.stringify(items));
    },

    deleteItemFromStorage: function (id) {
      let items = JSON.parse(localStorage.getItem("items"));
      items.forEach((item, index) => {
        if (id === item.id) {
          items.splice(index, 1);
        }
      });
      //add items into LS while converting to json
      localStorage.setItem("items", JSON.stringify(items));
    },

    clearItemsFromStorage: function () {
      localStorage.removeItem("items");
    },
  };
})();

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
    // items: [
    // { id: 0, name: "Steak dinner", calories: 1200 },
    // { id: 1, name: "Cookie", calories: 400 },
    // { id: 2, name: "Eggs", calories: 300 },
    // ],

    items: StorageCtrl.getItemsFromStorage(),
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

    updatedItem: function (name, calories) {
      // calories to number
      calories = parseInt(calories);

      let found = null;

      data.items.forEach((item) => {
        if (item.id === data.currentItem.id) {
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });

      return found;
    },

    deleteItem: function (id) {
      //get ids
      const ids = data.items.map(function (item) {
        return item.id;
      });

      //get index
      const index = ids.indexOf(id);

      // remove items
      data.items.splice(index, 1);
    },

    clearAllItems: function () {
      data.items = [];
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
    listItems: "#item-list li",
    clearBtn: ".clear-btn",
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

    updateListItem: function (item) {
      let listItems = document.querySelectorAll(UISelectors.listItems);

      //turn node list into aray
      listItems = Array.from(listItems);

      listItems.forEach(function (listItem) {
        const itemID = listItem.getAttribute("id");

        if (itemID === `item-${item.id}`) {
          document.querySelector(`#${itemID}`).innerHTML = `
            <strong>${item.name} </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
            </a>
          `;
        }
      });
    },

    deleteListItem: function (id) {
      const itemID = `#item-${id}`;
      const item = document.querySelector(itemID);
      item.remove();
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

    removeItems: function () {
      let listItems = document.querySelectorAll(UISelectors.listItems);

      //turn nodellist into array
      listItems = Array.from(listItems);
      listItems.forEach((item) => {
        item.remove();
      });
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
const AppCtrl = (function (ItemCtrl, StorageCtrl, UICtrl) {
  //load event listeners
  const loadEventListeners = function () {
    //get ui selectors
    const UISelectors = UICtrl.getSelectors();

    //get item event
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener("click", itemAddSubmit);

    //disable submit on 'enter'
    document.addEventListener("keypress", function (e) {
      if (e.keycode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    });

    //edit icon click event
    document
      .querySelector(UISelectors.itemList)
      .addEventListener("click", itemEditClick);

    //update item event
    document
      .querySelector(UISelectors.updateBtn)
      .addEventListener("click", itemUpdateSubmit);

    //back btn event
    document
      .querySelector(UISelectors.backBtn)
      .addEventListener("click", UICtrl.clearEditState);

    //DELETE event
    document
      .querySelector(UISelectors.deleteBtn)
      .addEventListener("click", itemDeleteSubmit);
    //clear all items event
    document
      .querySelector(UISelectors.clearBtn)
      .addEventListener("click", clearAllItemsClick);
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

      // get total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      //add total calories to ui
      UICtrl.showTotalCalories(totalCalories);

      //store in local storage
      StorageCtrl.storeItem(newItem);

      //clear fields after submit
      UICtrl.clearInput();
    }

    e.preventDefault();
  };

  //click eedit item
  const itemEditClick = function (e) {
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

  //update item submit
  const itemUpdateSubmit = function (e) {
    //get item input
    const input = UICtrl.getItemInput();

    //upadte item
    const updatedItem = ItemCtrl.updatedItem(input.name, input.calories);

    //update ui
    UICtrl.updateListItem(updatedItem);

    // get total calories
    const totalCalories = ItemCtrl.getTotalCalories();

    //add total calories to ui
    UICtrl.showTotalCalories(totalCalories);

    //update local storage
    StorageCtrl.updateItemStorage(updatedItem);

    UICtrl.clearEditState();

    e.preventDefault();
  };

  //delete btn event
  const itemDeleteSubmit = function (e) {
    //get current item
    const currentItem = ItemCtrl.getCurrentItem();

    ItemCtrl.deleteItem(currentItem.id);

    //delete from ui

    UICtrl.deleteListItem(currentItem.id);

    // get total calories
    const totalCalories = ItemCtrl.getTotalCalories();

    //delete from LS
    StorageCtrl.deleteItemFromStorage(currentItem.id);

    //add total calories to ui
    UICtrl.showTotalCalories(totalCalories);

    UICtrl.clearEditState();

    e.preventDefault();
  };

  //clear all items event
  const clearAllItemsClick = function () {
    //del all items from data structure
    ItemCtrl.clearAllItems();

    // get total calories
    const totalCalories = ItemCtrl.getTotalCalories();

    //add total calories to ui
    UICtrl.showTotalCalories(totalCalories);

    //remove from ui
    UICtrl.removeItems();

    //clwear from LS
    StorageCtrl.clearItemsFromStorage();

    //hide ul element
    UICtrl.hideList();
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

      loadEventListeners();
    },
  };
})(ItemCtrl, StorageCtrl, UICtrl);

//initialize app
AppCtrl.init();
