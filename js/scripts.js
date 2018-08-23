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
    console.log(total);

    return total;
  }
}

Player.prototype.hold = function() {
  console.log(this.totalScore);
  console.log(this);
  var totalScore = this.totalScore += this.currentScore;
  return totalScore;
}

// User Interface Logic


$(document).ready(function() {

  var playerOne = new Player(1, 0, 0, 0);
  var playerTwo = new Player(2, 0, 0, 0);

    //Start Game
    $("#playButton").click(function() {
      $("#startScreen").hide();
      $("#player1Screen").show();
    }); //end Start Game button

  $("#rollButton1").click(function() {
    var newRollValue = Roll();
    var currentScore = playerOne.updateRollValue(newRollValue);
    console.log(currentScore);
    playerOne = new Player(1, newRollValue, currentScore, playerOne.totalScore);
    console.log("playerOne.rollValue = " + playerOne.rollValue);
    // console.log(playerOne);

    $("#rollScore").text(newRollValue);
    $("#player1CurrentScore").text(playerOne.currentScore);


  }); // roll Button close

  $("#holdButton1").click(function() {
    console.log('hold clicked');
    var totalScore = playerOne.hold();
    $("#player1TotalScore").text(playerOne.totalScore);
    console.log(playerOne.totalScore);
    playerOne = new Player(1, 0, 0, totalScore);
    console.log(playerOne);
    // playerOne.currentScore = 0;
    $("#player1CurrentScore").text(playerOne.currentScore);
  })
}); // (document).ready close
