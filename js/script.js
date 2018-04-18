// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function() {
    $("#search").click(function() {
        var searchTerm = $("#srch-term").val();
        console.log(searchTerm);
        callGiphyAPIWithSearchTerm(searchTerm);
    });
});
//variables
var giphyUrl = "https://api.giphy.com/v1/stickers/search?q=";
var apiKey = "&api_key=dc6zaTOxFJmzC";

//functions
function giphyURLWithSearchTerm(searchTerm) {
    // write a function that will return a url for the giphy API with
    // the searchTerm provided in the parameters
    return giphyUrl + searchTerm + apiKey;
}

function appendImageToBody(srcURL) {
    // write a function that will make html an <img> on .rowgallery with the
    // URL provided in the parameters
    $(".rowgallery").html("<img src=\"" + srcURL + "\" />");
}


function callGiphyAPIWithSearchTerm(searchTerm) {
    // write a function that uses the above two functions to create the url,
    // uses ajax to send a request, and changes html of gallery
    var url = giphyURLWithSearchTerm(searchTerm);
    console.log(url);
    $.ajax({
        url: url,
        method: "GET",
        success: function(response) {
            // Log the first image of the data to the console
            if (response.data.length > 0) {
                console.log(response.data[0].images.fixed_height_still.url);
                appendImageToBody(response.data[0].images.fixed_height_still.url);
            }
            else {
                $(".rowgallery").html("<p>Nothing. sorry.</p>");
            }
        },
    });
}

// Add a click handler below to call callGiphyAPIWithSearchTerm when the
// button is clicked with the value in the text box
