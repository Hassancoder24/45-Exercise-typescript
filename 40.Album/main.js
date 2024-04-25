//Album functions
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//call 3 func and create 3 variables in different value
var album1 = make_album("Hassan", "Album title 1");
var album2 = make_album("Arhaam", "Album title 2");
//call make album func in 3rd parameter
var album3 = make_album("Muneeb", "Album title 3", 10);
//print value of object crate in function
console.log(album1);
console.log(album2);
console.log(album3);
