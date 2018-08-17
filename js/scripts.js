$(document).ready(function() {
  $("#formOne").submit(function() {
  event.preventDefault();

  var userNumber = parseInt($("input#inputNumber").val());




    $(".answer").text(userNumber)

  });
});
