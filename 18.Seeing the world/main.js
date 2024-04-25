var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Arrey countries name in orignal order
var countriesName = ["Brazil", "Egypt", "Cananda", "Australia", "Dubai"];
console.log("Orignal Order:", countriesName);
//Alphabetical order not modify arrey list
console.log("Alphabetical Order:", __spreadArray([], countriesName, true).sort());
//arrey in orignal order
console.log("Again Orignal Order:", countriesName);
//Arrey in reverse order not modify arrey list
console.log("Reverse Order:", __spreadArray([], countriesName, true).reverse());
//arrey in orignal order
console.log("Again Orignal Order:", countriesName);
//Changed a orignal Arrey order
console.log("Orignal Arrey Revesed:", __spreadArray([], countriesName, true).reverse());
//Show Arrey back to Orignal Order
console.log("Back to Orignal Order:", countriesName);
//Arrey order is changed to Alphabetical Order Show in Alphabetical Order
console.log("Shorted in Alphabetical Order:", countriesName.sort());
//Arrey changed again in orignal order and reverse order again
console.log("Orignal Arrey Revesed:", countriesName.reverse());
