// Business Logic

function Customer(name, numberToppings, pizzaSize, costOfPizza) {
  this.name = name;
  this.numberOfToppings = numberToppings;
  this.pizzaSize = pizzaSize;
  this.costOfPizza = costOfPizza;
}

Customer.prototype.sizeCost = function(pizzaSizeCost) {
  if (pizzaSizeCost === "small") {var cost = 7}
  if (pizzaSizeCost === "medium") {var cost = 10}
  if (pizzaSizeCost === "large") {var cost = 13}
  if (pizzaSizeCost === "extra large") {var cost = 15}
    return cost;
}
Customer.prototype.toppingCost = function(toppingCost) {
  if (toppingCost === 1) {var cost = 1}
  if (toppingCost === 2) {var cost = 2}
  if (toppingCost === 3) {var cost = 3}
    return cost;
}

// User Interface Logic
$(document).ready(function() {
    // Open Cost Order Form
  $("#getCostFormButton").click(function() {
    event.preventDefault();
    $("#getCostFormButton").hide();
    $("#orderInput").show();
  });

    // Open Cost Order Form from Order Button
  $("#orderNowButtonFrontPage").click(function() {
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

    $("#orderNowButton").click(function() {
      $("#calculatorContent").hide();
      $("#pizzaOrderDetails").show();
      $("#deliveryName").text(newCustomer.name);

      $("#toppingsSummary").text(newCustomer.numberOfToppings);
      $("#sizeSummary").text((newCustomer.pizzaSize).toUpperCase());
      $("#costSummary").text("$" + newCustomer.costOfPizza);
    });

      $("form#customerAddress").submit(function() {
        event.preventDefault();
        $("#pizzaOrderDetails").hide();
        $("#congratulationsWell").show();
    });
  }); // Form Close
}); // (document).ready close
