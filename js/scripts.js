// Business Logic
function Roll(){
  return Math.floor((Math.random() * 6) + 1);
}

function Player(name, rollValue, currentScore, totalScore) {
  this.name = name;
  this.rollValue = rollValue;
  this.currentScore = currentScore;
  this.totalScore = totalScore;
}

Player.prototype.updateRollValue = function(newRollValue) {
  if (newRollValue === 1) {
    var total = 0;
    return total;
  } else if (newRollValue > 1) {
    var total = newRollValue += this.currentScore;
    return total;
  }
}

Player.prototype.hold = function() {
  var totalScore = this.totalScore += this.currentScore;
  if (totalScore > 20) {
    return true;
  } else {
    return totalScore;
  }
}

// User Interface Logic
$(document).ready(function() {

  var playerOne = new Player(1, 0, 0, 0);
  var playerTwo = new Player(2, 0, 0, 0);

    //Start Game
    $("#playButton").click(function() {
      $("#startScreen").hide();
      $("#player1Screen").show();
      $("#scoreboard").show();
    }); //end Start Game button

  $("#rollButton1").click(function() {
    var newRollValue = Roll();
    var currentScore = playerOne.updateRollValue(newRollValue);
    playerOne = new Player(1, newRollValue, currentScore, playerOne.totalScore);
      $("#rollScore1").text(newRollValue);
    $("#player1CurrentScore").text(playerOne.currentScore);

    if (newRollValue === 1) {
      $("#switchPlayer1").show();
      $("#rollButton1").hide();
      $("#holdButton1").hide();
      $(".player1TotalScore").text(playerOne.totalScore);
    };
  }); // roll Button close

  $("#holdButton1").click(function() {
    var totalScore = playerOne.hold();

    if (totalScore === true) {
      $("#winnerScreen").show();
      $("#player1Screen").hide();
      }

    $(".player1TotalScore").text(playerOne.totalScore);
    playerOne = new Player(1, 0, 0, totalScore);
    $("#player1CurrentScore").text(playerOne.currentScore);
    $("#switchPlayer1").show();
    $("#rollButton1").hide();
    $("#holdButton1").hide();

  });

  $("#switchPlayer1").click(function() {
    $("#player1Screen").hide();
    $("#player2Screen").show();
    $("#rollButton2").show();
    $("#holdButton2").show();
    $("#switchPlayer2").hide();
  });

  $("#rollButton2").click(function() {
    var newRollValue2 = Roll();
    var currentScore = playerTwo.updateRollValue(newRollValue2);
    playerTwo = new Player(2, newRollValue2, currentScore, playerTwo.totalScore);
      $("#rollScore2").text(newRollValue2);
    $("#player2CurrentScore").text(playerTwo.currentScore);

    if (newRollValue2 === 1) {
      $("#switchPlayer2").show();
      $("#rollButton2").hide();
      $("#holdButton2").hide();
      $(".player2TotalScore").text(playerTwo.totalScore);
    };
  }); // roll Button close

  $("#holdButton2").click(function() {
    var totalScore = playerTwo.hold();

    if (totalScore === true) {
      $("#winnerScreen").show();
      $("#player2Screen").hide();
      }

    $(".player2TotalScore").text(playerTwo.totalScore);
    playerTwo = new Player(2, 0, 0, totalScore);
    $("#player2CurrentScore").text(playerTwo.currentScore);
    $("#switchPlayer2").show();
    $("#rollButton2").hide();
    $("#holdButton2").hide();
  });

  $("#switchPlayer2").click(function() {
    $("#player2Screen").hide();
    $("#player1Screen").show();
    $("#rollButton1").show();
    $("#holdButton1").show();
    $("#switchPlayer1").hide();
  });

  $("#playAgainButton").click(function() {
    $("#player1Screen").show();
    $("#winnerScreen").hide();
    playerOne = new Player(1, 0, 0, 0);
    playerTwo = new Player(2, 0, 0, 0);
    $("#player1CurrentScore").text(playerOne.currentScore);
    $(".player1TotalScore").text(playerOne.totalScore);
    $("#player2CurrentScore").text(playerTwo.currentScore);
    $(".player2TotalScore").text(playerTwo.totalScore);
  });

}); // (document).ready close
