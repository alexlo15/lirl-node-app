var axios = require("axios");
var fs = require("fs");


var Concert = function () {

    var divider = "\n------------------------------------------------------------\n";


    this.findEvent = function (event) {

        var URL = "https://rest.bandsintown.com/artists/" + event + "/events?app_id=codingbootcamp";

        axios.get(URL).then(function (response) {
            

            console.log("Here's your result's");
            console.log(divider);
            console.log(response.data[0].lineup);
            console.log(response.data[0].venue);
            console.log(response.data[0].datetime);
            console.log(response.data[0].description);
            console.log(divider);
            console.log(response.data[1].lineup);
            console.log(response.data[1].venue);
            console.log(response.data[1].datetime);
            console.log(response.data[1].description);


        })
    }

};

module.exports = Concert;