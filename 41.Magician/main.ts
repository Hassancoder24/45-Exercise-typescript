//Arrey func print magician name
function printMagician(magician: string[]) {
    magician.forEach(name => {
        console.log(name);
    });
}
//magician names in arrey
let magician = ["David Copperfield", "Doug Henning", "Penn Jillette"]

//call a func show each magician name
printMagician(magician);