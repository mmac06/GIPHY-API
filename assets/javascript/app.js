// API KEY: 0ha2JYIPcQ2JlisGgiDTdoH9mt6qXvdw

//javascript, jQuery API -- from GIPHY Website
// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=0ha2JYIPcQ2JlisGgiDTdoH9mt6qXvdw&limit=10");
// xhr.done(function (response) { console.log("success got data", response); });

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


// gifs.response.data.images.fixed_width.url