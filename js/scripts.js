// Business Logic

function Customer(name, numberToppings, pizzaSize, costOfPizza) {
  this.name = name;
  this.numberOfToppings = numberToppings;
  this.pizzaSize = pizzaSize;
  this.costOfPizza = costOfPizza;
}

Customer.prototype.sizeCost = function(pizzaSizeCost) {
  if (pizzaSizeCost === "small") {return 7}
  if (pizzaSizeCost === "medium") {return 10}
  if (pizzaSizeCost === "large") {return 13}
  if (pizzaSizeCost === "extra large") {return 15}
}
Customer.prototype.toppingCost = function(toppingCost) {
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
    var newCustomer = new Customer()
    var customerNameInput = $("input#customer").val();
    var numberToppingsInput = $("input:checked").length;
    var pizzaSizeInput = $("option:selected").val();
    var costOfPizza = newCustomer.sizeCost(pizzaSizeInput) + newCustomer.toppingCost(numberToppingsInput);
    var newCustomer = new Customer(customerNameInput, numberToppingsInput, pizzaSizeInput, costOfPizza)
    $("#customerOutput").text(newCustomer.name + ", your " + newCustomer.pizzaSize + " pizza with " + newCustomer.numberOfToppings + " topping(s) will cost $" + newCustomer.costOfPizza + ".");

  }); // Form Close
}); // (document).ready close
