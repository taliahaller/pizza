// Business Logic
function rollValue(){
  return Math.floor((Math.random() * 6) + 1);
}

function Turn(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

function Players(rollValue, currentScoreValue, totalScore) {
  this.rollValue = rollValue;
  this.currentScoreValue = currentScoreValue;
  this.totalScore = totalScore;
}


// var playerOne = new Players(output1, player1CurrentScore, player1TotalScore);
// var playerTwo = new Players(output2, player2CurrentScore, player2TotalScore);
// // console.log(playerOne);

// User Interface Logic
$(document).ready(function() {

    //Start Game
    $("#playButton").click(function() {
      $("#startScreen").hide();
      $("#player1Screen").show();
    }); //end Start Game button

  $("#rollButton1").click(function() {
    var player1CurrentScoreValue = 0;

    var output1 = rollValue();
    player1CurrentScoreValue = player1CurrentScoreValue += output1;
    console.log(player1CurrentScoreValue);

    $("#rollScore").text(player1CurrentScoreValue);
    $("#player1CurrentScore").text(player1CurrentScoreValue);

    $("#rollAgainButton1").click(function() {

      var secondScore = rollValue();
      console.log(secondScore);
      var player1TotalScore = player1CurrentScoreValue += secondScore;
      $("#rollScore").text(secondScore);
      $("#player1CurrentScore").text(player1TotalScore);
    })

  }); // roll Button close


}); // (document).ready close


// const movieFullPrice = moviePrice =+ moviePrice.reduce((a,b) => a + b, 0);
