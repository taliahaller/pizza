// Business Logic






// User Interface Logic
$(document).ready(function() {


  // Open Cost Order Form
  $("#getCostFormButton").click(function() {
    $("#getCostFormButton").hide();
    $("#orderInput").show();
  });

  // Return Cost Section
  $("#findCostButton").click(function() {
    $("#pizzaOrderCost").show();
  });



}); // (document).ready close
