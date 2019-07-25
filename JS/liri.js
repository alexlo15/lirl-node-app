require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var moment = require("moment");
// required keys etc^

// spotify keys and object
// var Spotify = require("node-spotify-api");
// var spotify = new Spotify(keys.spotify);

// make new concert object and require js
var Concert = require("./Concert");
var concert = new Concert();

// same for movies
var Movie = require("./Movie");
var movie = new Movie();

// defining user input
var command = process.argv[2];
var title = process.argv.slice(3);


// handle's the random input
var doLo = function () {
    fs.readFile('random.txt', "utf8", function (error, data) {
        var txt = data.split(",");

        console.log("\nHere's my random movie for you")
        movie.findMovie(txt[1]);
    });
};



var divider = "\n-------------------------";

// var findSong = function(song){
//     spotify.search({ type: 'track', query: song, limit:1 }, function(err, data) {
//         if (err) {
//           return console.log('Error occurred: ' + err);
//         }
//        console.log(divider);
//       console.log(data); 
//       })
// };



//  switchboard for determining command
switch (command) {
    case "concert-this": concert.findEvent(title);
        break;
    case "spot-this": spotify.findSong(title);
        break;
    case "movie-this": movie.findMovie(title);
        break;
    case "do-lo": doLo();
        break;
}