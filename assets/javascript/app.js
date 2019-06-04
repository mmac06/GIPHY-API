// API KEY: 0ha2JYIPcQ2JlisGgiDTdoH9mt6qXvdw

//javascript, jQuery API
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=0ha2JYIPcQ2JlisGgiDTdoH9mt6qXvdw&limit=10");
xhr.done(function (response) { console.log("success got data", response); });