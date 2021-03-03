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

  return {
    logData: function () {
      return data;
    },
  };
})();

//ui controller
const UICtrl = (function () {
  //public methods
  return {};
})();

//app controller - main controller that initialize other controllers
const AppCtrl = (function (ItemCtrl, UICtrl) {
  //public methods
  return {
    init: function () {
      console.log("initializing app...");
    },
  };
})(ItemCtrl, UICtrl);

//initialize app
AppCtrl.init();
