
//define function show magition name
function show_magicians(magicians: string[]) {
    magicians.forEach(magicianName => console.log(magicianName));
    }

    function make_great(magicians: string[]) {
    return magicians.map(magicianName => `The Great ${magicianName}`);
    }

    //magician name arrey
    let magicianName = ["David Copperfield", "Doug Henning", "Penn Jillette"];
    //show magician name
    let greatMagicianName = make_great(magicianName);
    show_magicians(magicianName);
    // console.log(greatMagicianName);
    