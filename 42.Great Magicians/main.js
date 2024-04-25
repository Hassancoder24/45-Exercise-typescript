//define function show magition name
function show_magicians(magicians) {
    magicians.forEach(function (magicianName) { return console.log(magicianName); });
}
function make_great(magicians) {
    return magicians.map(function (magicianName) { return "The Great ".concat(magicianName); });
}
//magician name arrey
var magicianName = ["David Copperfield", "Doug Henning", "Penn Jillette"];
//show magician name
var greatMagicianName = make_great(magicianName);
show_magicians(magicianName);
// console.log(greatMagicianName);
