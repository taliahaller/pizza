// Business Logic

function Contact (first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}

function Address (street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
}

Address.prototype.fullAddress = function() {
  return this.street + ', ' + this.city + ', ' + this.state;
}


// User Interface Logic
$(document).ready(function() {

  $("#add-address").click(function(){
    $("#new-addresses").append(
                            '<div class="new-address">' +
                              '<div class="form-group">' +
                                '<label for="street">Street</label>' +
                                '<input type="text" class="form-control street">' +
                              '</div>' +
                              '<div class="form-group">' +
                                '<label for="city">City</label>' +
                                '<input type="text" class="form-control city">' +
                              '</div>' +
                              '<div class="form-group">' +
                                '<label for="state">State</label>' +
                                '<input type="text" class="form-control state">' +
                              '</div>' +
                            '</div>');
  });

  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
    var inputtedStreet = $(this).find("input.street").val();
    var inputtedCity = $(this).find("input.city").val();
    var inputtedState = $(this).find("input.state").val();
    var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);

    newContact.addresses.push(newAddress)
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.street").val("");
    $("input.city").val("");
    $("input.state").val("");
    


  }); // form.submit close
}); // (document).ready close
