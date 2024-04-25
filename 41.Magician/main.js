//Arrey func print magician name
function printMagician(magician) {
    magician.forEach(function (name) {
        console.log(name);
    });
}
//magician names in arrey
var magician = ["David Copperfield", "Doug Henning", "Penn Jillette"];
//call a func show each magician name
printMagician(magician);
