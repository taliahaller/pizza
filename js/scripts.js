// Business Logic

// Slider input

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


      var movies = document.getElementsByName("exampleRadios");
      var moviePrice = [];

      for (var i = 0, length = movies.length; i < length; i++)
        { if (movies[i].checked)
          {  var customerMovie = movies[i].value;
          break;
          }
        }
        var n = new Date().getFullYear();
        if (movieArray[customerMovie].movieDate <  n ) {
          var priceOld = 1;
          moviePrice.push(priceOld);
        } else {
          var priceNew = 3;
          moviePrice.push(priceNew);
        };

        // // console.log(moviePrice);
        //
        // var inputtedTime = $("option:selected").val();
        // console.log(inputtedTime);
        //
        // var inputtedMovie = $('input[name=exampleRadios]:checked').val();
        // console.log(inputtedMovie);







        // customerMovieDate =

        // if (customerMovieDate < this.year) {
        //
        // }




      // var inputtedTime = $("input#timeInput").val();
      // var inputtedAge = $("input#AgeInput").val();


    // if (inputtedMovie == "old")


  }); //form close


  var slider = document.getElementById("ageRange");
  var output = document.getElementById("ageValue");
  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
  };

}); // (document).ready close
