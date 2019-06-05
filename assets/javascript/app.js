// array for pre-loaded terms
var gifArray = ["simpsons", "game of thrones", "family guy", "ice cube"];


// function to get gifs to display
function displayGIF() {

    var gif = $(this).attr("data-name");
    //javascript, jQuery API -- Based on Class Activity
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=0ha2JYIPcQ2JlisGgiDTdoH9mt6qXvdw&limit=10";

    console.log("gif var: " + gif);


    // Ajax to pull from GIHPY API
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log("response: ", response);
        $("#gifDisplay").empty();

        var gifs = response.data

        // displays still images when gif term is searched
        for (var i = 0; i < gifs.length; i++) {
            $("#gifDisplay").append("<img src='" + gifs[i].images.fixed_height_still.url + "'" + "data-state=still" + ">")
        }

        // I'M HAVING TROUBLE HERE -- this is supposed to animate images when clicked and stop them when clicked again but it doesn't seem to be working
        $("img").on("click", function () {
            var state = $(this).attr("data-state");
            if (state === "still") {
                $(this).attr("src", $(this).attr(response.data.images.fixed_height.url));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr(response.data.images.fixed_height_still.url));
                $(this).attr("data-state", "still");
            }
        });

    });
}




// Function for displaying gifs data
function renderButtons() {

    // Deletes the gifs prior to adding new gif
    // (this is necessary otherwise you will have repeat buttons)
    $("#terms").empty();
    // Loops through the array of gifs
    for (var i = 0; i < gifArray.length; i++) {

        // Then dynamicaly generates buttons for each gif in the array
        var a = $("<button>");
        // Adds a class of gif to our button
        a.addClass("gif-button");
        // Added a data-attribute
        a.attr("data-name", gifArray[i]);
        // Provided the initial button text
        a.text(gifArray[i]);
        // Added the button to the terms div
        $("#terms").append(a);
    };
};

// This function handles events where the add add gif is clicked
$("#searchGifs").on("click", function (e) {
    e.preventDefault();
    // This line of code will grab the input from the textbox
    var gifAdd = $("#searchText").val().trim();

    // The gif from the textbox is then added to the array
    gifArray.push(gifAdd);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
});

// function enables the user to press 'enter' in addition to clicking the search button
$("#searchText").keyup(function (event) {
    if (event.which === 13) {
        $("#searchGifs").click();
    }
});




// Adding click event listeners to all elements with a class of "gif-button"
$(document).on("click", ".gif-button", displayGIF);

// calls our functions on page load
renderButtons();
displayGIF();
