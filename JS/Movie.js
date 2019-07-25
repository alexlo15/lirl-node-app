var axios = require("axios");
var fs = require("fs");


var Movie = function () {

    var divider = "\n------------------------------------------------------------\n";

    this.findMovie = function (movie) {

        if (movie === undefined) {
            movie === "White Men Can't Jump";
        }

        var URL = "http://www.omdbapi.com/?t=" + movie + "&apikey=6dad86c1";

        axios.get(URL).then(function (response) {

            console.log(divider);
            console.log(response.data.Title);
            console.log(response.data.Year);
            console.log(response.data.Rated);
            console.log(response.data.Ratings);
            console.log(response.data.Country);
            console.log(response.data.Language);
            console.log(response.data.Actors);
            console.log(response.data.Plot);
            console.log(divider);

        });

        // fs.appendFile('log.txt',
        //     '"Release year: "(response.data.Year)
        // "Rated: "(response.data.Rated)
        // "Ratings: "(response.data.Ratings)
        // "Country: "(response.data.Country)
        // "Language: "(response.data.Language)
        // "Actors: "(response.data.Actors)
        // "Plot: "(response.data.Plot), function (err) {
        //         if (err) throw err;
        //         console.log('Saved to log.txt!');
        //     });

    }
};



module.exports = Movie;