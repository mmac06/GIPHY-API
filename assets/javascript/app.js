// API KEY: 0ha2JYIPcQ2JlisGgiDTdoH9mt6qXvdw

//javascript, jQuery API -- from GIPHY Website
// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=0ha2JYIPcQ2JlisGgiDTdoH9mt6qXvdw&limit=10");
// xhr.done(function (response) { console.log("success got data", response); });

// array for pre-loaded terms
var startGIF = ["simpsons", "game of thrones", "family guy", "ice cube"];

//javascript, jQuery API -- Based on Class Activity
var queryURL = "https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=0ha2JYIPcQ2JlisGgiDTdoH9mt6qXvdw&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log("response: ", response);


    var gifs = response.data

    for (var i = 0; i < gifs.length; i++) {
        $("#gifDisplay").append("<img src='" + gifs[i].images.fixed_height_still.url + "'>")
    }

});


// Function for displaying gifs data
function renderButtons() {

    // Deletes the gifs prior to adding new gif
    // (this is necessary otherwise you will have repeat buttons)
    $("#terms").empty();
    // Loops through the array of gifs
    for (var i = 0; i < startGIF.length; i++) {

        // Then dynamicaly generates buttons for each gif in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adds a class of gif to our button
        a.addClass("gif");
        // Added a data-attribute
        a.attr("data-name", startGIF[i]);
        // Provided the initial button text
        a.text(startGIF[i]);
        // Added the button to the buttons-view div
        $("#terms").append(a);
    }
}

renderButtons();
