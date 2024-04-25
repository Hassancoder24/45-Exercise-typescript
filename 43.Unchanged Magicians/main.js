//define function show magition name
function show_magicians(magicians) {
    magicians.forEach(function (magicianName) { return console.log(magicianName); });
}
function make_great(magicians) {
    return magicians.map(function (magicianName) { return "The Great ".concat(magicianName); });
}
//magician name arrey
var magicianName = ["David Copperfield", "Doug Henning", "Penn Jillette"];
//use slice() funs throgh the orignal arrey\
var copy_magicians_names = magicianName.slice();
//modify the array to add "THEGREAT" in name
var copy_great_magicians = make_great(copy_magicians_names);
//both arrey orignal to copied
console.log("\nOrignal Arrey\n");
show_magicians(magicianName);
console.log("\nCopy Arrey\n");
show_magicians(copy_great_magicians);
