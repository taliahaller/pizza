// Business Logic

function Customer(name, numberToppings, pizzaSize) {
  this.name = name;
  this.numberOfToppings = numberToppings;
  this.pizzaSize = pizzaSize;
}

Customer.prototype.sizeCost = function() {

  if (this.pizzaSize === "small") {this.costOfPizza = 7}
  if (this.pizzaSize === "medium") {this.costOfPizza = 10}
  if (this.pizzaSize === "large") {this.costOfPizza = 13}
  if (this.pizzaSize === "extra large") {this.costOfPizza = 15}
}

Customer.prototype.toppingCost = function() {
  if (this.numberOfToppings === 1) {this.costOfPizza += 1}
  if (this.numberOfToppings === 2) {this.costOfPizza += 2}
  if (this.numberOfToppings === 3) {this.costOfPizza += 3}
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
    var customerNameInput = $("input#customer").val();
    var numberToppingsInput = $("input:checked").length;
    var pizzaSizeInput = $("option:selected").val();
    var newCustomer = new Customer(customerNameInput, numberToppingsInput, pizzaSizeInput)
    newCustomer.sizeCost();
    newCustomer.toppingCost();
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
