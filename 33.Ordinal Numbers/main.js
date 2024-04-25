//numbers Arrey
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//use for loop to print the number
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var i = numbers_1[_i];
    var ordinalEnding = void 0;
    if (i == 1) {
        ordinalEnding = "st";
    }
    else if (i == 2) {
        ordinalEnding = "nd";
    }
    else if (i == 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(i).concat(ordinalEnding));
}
