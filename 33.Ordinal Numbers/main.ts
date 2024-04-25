//numbers Arrey
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//use for loop to print the number
for (let i of numbers) {
    let ordinalEnding: String;

    if (i == 1){
        ordinalEnding = "st"
    }
    else if (i == 2){
        ordinalEnding = "nd"
    }
    else if (i == 3){
        ordinalEnding = "rd"
    }
    else {ordinalEnding = "th"
    }
    console.log(`${i}${ordinalEnding}`);
}
