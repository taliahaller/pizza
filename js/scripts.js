// Business Logic
function currentRoll(){
  return Math.floor((Math.random() * 6) + 1);

}


function Player (name, roll, currentScore, totalScore) {
  this.name = name;
  this.roll = 0;
  this.currentScore = 0;
  this.totalScore = 0;
}

// User Interface Logic
$(document).ready(function() {
    //Start Game
  $("#playButton").click(function() {
      $("#startScreen").hide();
      $("#player1Screen").show();
    }); //end Start Game button


  $("#rollButton1").click(function() {
    this.roll = currentRoll();
    var playerOne = new Player("1", this.roll)
console.log(this.role);
console.log(currentRoll());
console.log(playerOne);

    $("#rollScore").text();
    $("#player1CurrentScore").text();


  }); // roll Button close
}); // (document).ready close
