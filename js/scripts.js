// Business Logic
function Movie(name,date) {
  this.movieName = name;
  this.movieDate = date;
}

var movieArray = [];

var crazyRichAsians = new Movie("Crazy Rich Asians", 2018);
var theIncredibles = new Movie("The Incredibles",2001);
var spaceOdyssey = new Movie("2001: Space Odyssey", 1987);

movieArray.push(crazyRichAsians);
movieArray.push(theIncredibles);
movieArray.push(spaceOdyssey);
// User Interface Logic
$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();

      var moviePrice = [];
      var inputtedMovie = $('input[name=exampleRadios]:checked').val();
        // console.log(inputtedMovie);
        var n = new Date().getFullYear();
        if (movieArray[inputtedMovie].movieDate <  n ) {
          var priceOld = 1;
          moviePrice.push(priceOld);
        } else {
          var priceNew = 3;
          moviePrice.push(priceNew);
        };

        // console.log(moviePrice);
        var inputtedTime = $("option:selected").val();
        if (inputtedTime === "matinee") {
          var priceMatinee = 3;
          moviePrice.push(priceMatinee);
        } else {
          var priceRegular = 6;
          moviePrice.push(priceRegular);
        };
        // console.log(moviePrice);
        var inputtedAge = $("#ageRange").val();
        // console.log(inputtedAge);
        if (inputtedAge < 10 || inputtedAge > 65) {
          var priceSenior = 1;
          moviePrice.push(priceSenior);
        } else {
          var priceNormal = 4;
          moviePrice.push(priceNormal);
        };

        console.log(moviePrice);

        // var movieFullPrice = moviePrice;
        const movieFullPrice = moviePrice =+ moviePrice.reduce((a,b) => a + b, 0);
  console.log(movieFullPrice);

        $("button.display").show();
        $("span#displayMoviePrice").text("$" + movieFullPrice);

  }); //form close

  var slider = document.getElementById("ageRange");
  var output = document.getElementById("ageValue");
  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
  };

}); // (document).ready close
