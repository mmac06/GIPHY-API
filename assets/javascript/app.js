// API KEY: 0ha2JYIPcQ2JlisGgiDTdoH9mt6qXvdw

//javascript, jQuery API -- from GIPHY Website
// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=0ha2JYIPcQ2JlisGgiDTdoH9mt6qXvdw&limit=10");
// xhr.done(function (response) { console.log("success got data", response); });

//javascript, jQuery API -- Based on Class Activity
var queryURL = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=0ha2JYIPcQ2JlisGgiDTdoH9mt6qXvdw&limit=10";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log("response: ", response);
});