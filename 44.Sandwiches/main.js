// func rest perameters accept arugments repersenting is sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking sandwich with the Following items:\n");
    items.forEach(function (oneitem) { return console.log(oneitem); });
    console.log("\nSandwich is Ready!\n");
}
//func three items with different arguments
makeSandwich("Bread", "Cheese", "Ham", "Mayo", "Egg");
makeSandwich("Bread", "Cheese");
makeSandwich("Bread", "Cheese", "Ham", "Mayo", "Egg", "chicken", "Tomato");
