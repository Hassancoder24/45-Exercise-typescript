var guestlist = ["Arif", "Aftab", "Tahir", "Zeeshan"];
var notCome = guestlist[0];
console.log(notCome, "Not Comming to Party");
guestlist.splice(0, 1, "Ali");
guestlist.forEach(function (guest) { return console.log("Assalam-o-Alekum ".concat(guest, " it is our to pleasure would you like to Dinner With me?")); });
