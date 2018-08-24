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
  var customerNameInput = $("input#customer").val();
  var numberOfToppingsInput = $("input:checked").length;
  var pizzaSizeInput = $("option:selected").val();
  $("#customerOutput").text(customerNameInput + ", your " + pizzaSizeInput + " pizza with " + numberOfToppingsInput + " topping(s) will cost " + "$20" + ".")



  }); // Form Close
}); // (document).ready close
