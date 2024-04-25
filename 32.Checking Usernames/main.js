// Areey user name list
var userNames = ["Hassan", "Waqas", "Shahzaid", "Faraz", "Noman"];
//new user name list
var newUserNames = ["Hassan", "Shoaib", "Shahzaib", "Faraz", "Ali"];
//loop through new user to cheak of user name availibility
newUserNames.forEach(function (new_one_users) {
    //condition user name alredy exit and save in our condiotion var
    var our_condition = userNames.some(function (current_one_user) { return current_one_user.toLocaleLowerCase() == new_one_users.toLocaleLowerCase(); });
    // show diffent message using if aor else condition
    if (our_condition) {
        console.log("Soory ".concat(new_one_users, " is already taken"));
    }
    else {
        console.log("Welcome ".concat(new_one_users, ", you are available"));
    }
});
