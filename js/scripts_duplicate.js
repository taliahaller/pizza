// Business Logic

function Customer(name, numberOfToppings, pizzaSize) {
  this.name = name;
  this.numberOfToppings = numberOfToppings;
  this.pizzaSize = pizzaSize;
}

function SizeCost (pizzaSizeCost) {
  if (pizzaSizeCost === "small") {return 7}
  if (pizzaSizeCost === "medium") {return 10}
  if (pizzaSizeCost === "large") {return 13}
  if (pizzaSizeCost === "extra large") {return 15}
}
function ToppingCost (toppingCost) {
  if (toppingCost === 1) {return 1}
  if (toppingCost === 2) {return 2}
  if (toppingCost === 3) {return 3}
}

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

  // Return Info in Return Section
  var customerNameInput = $("input#customer").val();
  var numberOfToppingsInput = $("input:checked").length;
  var pizzaSizeInput = $("option:selected").val();

  var costOfSize = SizeCost(pizzaSizeInput);
  var costOfToppings = ToppingCost(numberOfToppingsInput);
  var costOfPizza = costOfSize += costOfToppings;

  $("#customerOutput").text(customerNameInput + ", your " + pizzaSizeInput + " pizza with " + numberOfToppingsInput + " topping(s) will cost $" + costOfPizza + ".")

  }); // Form Close
}); // (document).ready close
