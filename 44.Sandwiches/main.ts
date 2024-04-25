// func rest perameters accept arugments repersenting is sandwich
function makeSandwich(...items: string[]) {
    console.log("\nMaking sandwich with the Following items:\n");
    items.forEach(oneitem => console.log(oneitem));
    console.log("\nSandwich is Ready!\n");
}

//func three items with different arguments
makeSandwich("Bread", "Cheese", "Mayo", "Egg");
makeSandwich("Bread", "Cheese");
makeSandwich("Bread", "Cheese", "Mayo", "Egg", "chicken", "Tomato");