// Business Logic






// User Interface Logic
$(document).ready(function() {

  // Open Cost Order Form
  $("#getCostFormButton").click(function() {
    event.preventDefault();
    $("#getCostFormButton").hide();
    $("#orderInput").show();
  });


  // Submit Form
  $("form#pizzaOrderForm").submit(function() {
    event.preventDefault();
    $("#pizzaOrderCost").show();

  // Put Name in Order Form
  var customerNameOutput = $("input#customer").val();
  console.log(customerNameOutput);
  $("#customerNameOutput").text(customerNameOutput);



  }); // Form Close
}); // (document).ready close
