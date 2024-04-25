// Arrays
var userNemes = ["Hassan", "Arham", "Muneeb", "Noman", "Admin"];
//for each loop arrey
userNemes.forEach(function (oneUser) {
    if (oneUser == "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, " , thank you for logging in again."));
    }
});
