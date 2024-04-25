// arrey creating
var guestlist = ["Arif", "Aftab", "Tahir", "Zeeshan"];
//making variable for those guest who come
var notCome = guestlist[0];
//printing the guest who not come
console.log(notCome, "Not Comming to Party");
// add or remove values arreys
guestlist.splice(0, 1, "Ali");
// message for the new guest
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
//sending a message guest
guestlist.forEach(function (guest) { return console.log("Assalam-o-Alekum ".concat(guest, " it is our to pleasure would you like to Dinner With me?")); });
