// arrey creating
var guestlist = ["Arif", "Aftab", "Tahir", "Zeeshan"];
//making variable for those guest who come
var notCome = guestlist[0];
//printing the guest who not come
console.log(notCome, "Not Comming to Party");
// add or remove values arreys
guestlist.splice(0, 1, "Ali");
// message for the new guest for big table
console.log("Good News ! We have Found a Bigger table for Dinner.");
// add new value in arrey
guestlist.unshift("Zahid");
//adding a new value at ending of arrey
guestlist.push("Fahad");
// adding a new value in middle of arrey
var middle = Math.floor(guestlist.length / 2);
//adding a new value in middle of arrey
guestlist.splice(middle, 0, "Hassan");
//print mesage of updated list of guests
console.log("Updated List of Guests");
//sending a messgae to our guests one by one with their names
guestlist.forEach(function (guest) { return console.log("Assalam-o-Alekum ".concat(guest, " it is our to pleasure would you like to Dinner With me?")); });
//inform only two guest are invited for dinner
console.log("Unfortunately, the new dinner table don't arrive on time, so I will only invite two guest for dinner");
//Usenig while-loop to remove guest for the arrey until only two name remain
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    console.log("Salam, Sir ".concat(removedGuest, " Sorry, I can't invite you to dinner."));
}
//invitation for last two guest
console.log("Invitation for Only Two guest");
guestlist.forEach(function (guest) { return console.log("Assalam-o-Alekum ".concat(guest, ", you are still invited to dinner")); });
//Removing two guest from the list
guestlist.pop();
guestlist.pop();
//printing the empty list
console.log("Empty LIst:", guestlist);
