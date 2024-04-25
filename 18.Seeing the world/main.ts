//Arrey countries name in orignal order
let countriesName = ["Brazil", "Egypt", "Cananda", "Australia", "Dubai"];
console.log("Orignal Order:", countriesName);

//Alphabetical order not modify arrey list
console.log("Alphabetical Order:", [...countriesName].sort());

//arrey in orignal order
console.log("Again Orignal Order:", countriesName);

//Arrey in reverse order not modify arrey list
console.log("Reverse Order:", [...countriesName].reverse());

//arrey in orignal order
console.log("Again Orignal Order:", countriesName);

//Changed a orignal Arrey order
console.log("Orignal Arrey Revesed:", [...countriesName].reverse());

//Show Arrey back to Orignal Order
console.log("Back to Orignal Order:", countriesName);

//Arrey order is changed to Alphabetical Order Show in Alphabetical Order
console.log("Shorted in Alphabetical Order:", countriesName.sort());

//Arrey changed again in orignal order and reverse order again
console.log("Orignal Arrey Revesed:", countriesName.reverse());