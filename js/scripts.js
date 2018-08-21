// Business Logic

// Slider input

function Movie(name,date) {
  this.movieName = name;
  this.movieDate = date;
}

var crazyRichAsians = new Movie("Crazy Rich Asians", "2018");
var theIndcredibles = new Movie("The Incredibles","2001");
var spaceOdyssey = new Movie("2001: Space Odyssey", "1987");


// User Interface Logic
$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();

      // var inputtedMovie = $

      var inputtedTime = $("input#timeInput").val();
      var inputtedAge = $("input#AgeInput").val();

    // if (inputtedMovie == "old")


  }); //form close


  var slider = document.getElementById("ageRange");
  var output = document.getElementById("ageValue");
  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
  };

}); // (document).ready close
