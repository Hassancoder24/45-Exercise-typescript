
//define function show magition name
function show_magicians(magicians: string[]) {
    magicians.forEach(magicianName => console.log(magicianName));
    }

    function make_great(magicians: string[]) {
    return magicians.map(magicianName => `The Great ${magicianName}`);
    }

    //magician name arrey
    let magicianName = ["David Copperfield", "Doug Henning", "Penn Jillette"];

    //use slice() funs throgh the orignal arrey\

    let copy_magicians_names = magicianName.slice()

    //modify the array to add "THEGREAT" in name
    let copy_great_magicians = make_great(copy_magicians_names);

    //both arrey orignal to copied
    console.log("\nOrignal Arrey\n");
    show_magicians(magicianName);

    console.log("\nCopy Arrey\n");
    show_magicians(copy_great_magicians);