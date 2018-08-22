// Business Logic
function rollValue(){
  return Math.floor((Math.random() * 6) + 1);
}

// User Interface Logic
$(document).ready(function() {

    //Start Game
    $("#playButton").click(function() {
      $("#startScreen").hide();
      $("#player1Screen").show();
    }); //end Start Game button

  $("#rollButton1").click(function() {

    var output = rollValue();

    $("#player1CurrentScore").text(output);

  }); // roll Button close


}); // (document).ready close


// const movieFullPrice = moviePrice =+ moviePrice.reduce((a,b) => a + b, 0);
