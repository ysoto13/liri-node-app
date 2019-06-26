// At the top of the liri.js file, add code to read and set any environment variables with the dotenv package:

require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
var Spotify = require("node-spotify-api");

var spotify = new spotify(keys.spotify);
var omdbkey = keys.omdb.api_key;


var whatToDo = process.argv[2];
var userInput = process.argv[3];

function spotifyThis() {
    // go to npm spotify and copy paste the function and var info. Add limit if you want 1-10.

    spotify
        .search(
            {
                type: "track",
                query: userInput,
                limit: 5
            }
        )
        .then(function ()
}

switch (whatToDo) {
    case
}

