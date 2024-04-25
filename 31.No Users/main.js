//Areeys
var userNames = ["Admin", "Hassan", "Arham", "Muneeb", "Shahzaib"];
// empty arrey
userNames = [];
if (userNames.length == 0) {
    console.log("Your Arrey is Empy We need to find some users!");
}
//for.Each Function
else {
    userNames.forEach(function (user) {
        if (user == "Admin") {
            console.log("Hello ".concat(user, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(user, ", thank you for logging in again."));
        }
    });
}
