// Areey user name list
let userNames = ["Hassan","Waqas","Shahzaid","Faraz","Noman"]

//new user name list
let newUserNames = ["Hassan","Shoaib","Shahzaib","Faraz","Ali"]

//loop through new user to cheak of user name availibility
newUserNames.forEach(new_one_users => {
    //condition user name alredy exit and save in our condiotion var
    let our_condition = userNames.some(current_one_user => current_one_user.toLocaleLowerCase() == new_one_users.toLocaleLowerCase())
    // show diffent message using if aor else condition
    if(our_condition){
        console.log(`Soory ${new_one_users} is already taken`)
    }else{
        console.log(`Welcome ${new_one_users}, you are available`)
    }
})