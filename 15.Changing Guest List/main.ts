let guestlist = ["Arif","Aftab","Tahir","Zeeshan"];
let notCome = guestlist[0];
console.log(notCome, "Not Comming to Party");
guestlist.splice(0, 1, "Ali");
guestlist.forEach(guest => console.log(`Assalam-o-Alekum ${guest} it is our to pleasure would you like to Dinner With me?`))