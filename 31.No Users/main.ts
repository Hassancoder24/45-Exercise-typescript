//Areeys
let userNames = ["Admin","Hassan","Arham","Muneeb","Shahzaib"]

// empty arrey
userNames = []

if (userNames.length == 0){
    console.log("Your Arrey is Empy We need to find some users!")
}
//for.Each Function
else{
    userNames.forEach(user =>{
        if (user == "Admin"){
            console.log(`Hello ${user}, would you like to see a status report?`)
        }
        else{
            console.log(`Hello ${user}, thank you for logging in again.`)
        }
    })
}