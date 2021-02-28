// const vendingMachine = {
// 	snacks: [ { chips: 3 }, { choc: 5 }, { pizza: 9 }, { apple: 20 }, { sandwich: 21 } ],

// 	vend: function(item) {
// 		if (item >= 0 && item <= this.snacks.length) {
// 			console.log(this.snacks[item]);
// 		} else {
// 			console.log(`enter valid integer, range from 0 to ${this.snacks.length}!`);
// 		}
// 	}
// };

// //initialize object
// const choice = Object.create(vendingMachine);
// //call
// choice.vend(53);

const vendingMachine = {
   snacks: [{name :"cheezle", price: 2}, {name :"lays", price: 2.50}, {name: "ruffles",price: 2.50}],

 vend = (num) => {
     if (1) {
          return vendingMachine[num].name
     }
     if (2) {
          return vendingMachine[num].name
     }
     if (3) {
          return vendingMachine[num].name
     }
}
};
console.log(vend(1));