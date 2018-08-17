$(document).ready(function() {
  $("#formOne").submit(function() {
  event.preventDefault();

  var userNumber = parseInt($("input#inputNumber").val());

  // var numbers = [".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  var numbers = ["0",...Array(1000).keys()];
  var beepBoop = [];




loop3:
  for(var i = 1; i < userNumber + 2; i++){
    var examineNumber = numbers[i];

    if (examineNumber % 3 == 0) {
          beepBoop.push("Dave");
      } else if (/1+/.test(examineNumber)) {
          beepBoop.push("Boop");
      } else if (/0+/.test(examineNumber)) {
          beepBoop.push("Beep");
      } else {
          beepBoop.push(examineNumber);
      }
    } //for loop 3

    beepBoop = beepBoop.join(", ");
    $(".answer").text(beepBoop);

  }); // (#formOne).submit close
}); // (document).ready close
