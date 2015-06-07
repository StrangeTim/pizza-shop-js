function Customer(name) {
  this.customerName = name;
  this.order = [];

  this.addItem = function(item) {
    if (typeof(item) === "object") {
      for(var ingredient in item) {
        this.addItem(item[ingredient]);
      }
    } else {
      this.order.push(item);
    }
  }

  this.removeItem = function(item) {
    if (typeof(item) === "object") {
      for(var ingredient in item) {
        this.removeItem(item[ingredient]);
      }
    } else {
    var toRemove = this.order.indexOf(item);
    this.order.splice(toRemove, 1);
    }
  }

  this.clearOrder = function() {
    this.order = [];
  }

}

function orderTotal(customer) {
  // CRUSTS = {1: 'Pan', 2: 'Deep dish', 3: 'Thin Crust'};
  //
  // SIZES = {11: 'Personal', 12: 'Small', 13: 'Medium', 14: 'Large', 15: 'Extra Large'};
  //
  // SAUCES = {21: 'Tomato Sauce', 22: 'Olive Oil', 23: 'Alfredo Sauce'};
  //
  // CHEESES = {31: 'Mozzarella',  32: 'Provolone', 33: 'Parmesan',
  //            34: 'Ricotta', 35: 'Colby', 36: 'Gruyere', 37: 'Gouda'};
  //
  // MEATS = {41: 'Pepperoni', 42: 'Italian Sausage', 43: 'Salami', 44: 'Ham',
  //          45: 'Meatballs', 46: 'Bacon', 47: 'Chicken', 48: 'Beef',
  //          49: 'Pork', 50: 'Anchovies', 51: 'Turkey'};
  //
  // VEGGIES = {61: 'Mushrooms', 62: 'Red Onion', 63: 'Spinach', 64: 'Tomato',
  //            65: 'Green Pepper', 66: 'Black Olives', 67: 'Green Olives',
  //            66: 'Jalapenos', 69: 'Cherry Peppers', 70: 'Pineapple'};

  //  Key numbers in PRICES below match to key numbers in items above
  var PRICES = {1: 1, 2: 2, 3: 1, 11: 4, 12: 5, 13: 7, 14: 9, 15: 11,
                21: 0, 22: 0, 23: 0, 31: 0.5, 32: 0.5, 33: 0.5, 34: 0.5,
                35: 0.5, 36: 1, 37: 1.5, 41: 1, 42: 1, 43: 1, 44: 0.5,
                45: 0.5, 46: 1, 47: 0.5, 48: 0.5, 49: 0.5, 50: 1.5,
                51: 0.5, 61: 0.5, 62: 0.5, 63: 0.5, 64: 0.5, 65: 0.5,
                66: 0.5, 67: 0.5, 68: 0.5, 69: 0.5, 70: 0.5};

  var order = customer.order;

  var price = 0;

  for(var item in order) {
    if (PRICES.hasOwnProperty(order[item])) {
        price += PRICES[order[item]];
    }
  }

  return price;
}


//----- PROGRAM SPECIFIC FUNCTIONALILTY ABOVE. DISPLAY SPECIFIC FUNCTIONALITY BELOW -------

// This function, when used properly, keeps only one div fully shown.
function showDiv(selector, visDivs) {
  var hideDivs = [];
  for(div in visDivs) {
    if (visDivs[div] !== selector) {
      hideDivs.push(visDivs[div]);
    }
  }
  for(div in hideDivs) {
    oneDiv = hideDivs[div];
    $(oneDiv).hide();
    $(oneDiv + "2").slideDown(300);
  }
  $(selector + "2").slideUp();
  $(selector + "2").css("height", "30px");
  setTimeout(function(){$(selector).slideDown()}, 300);
}


$(function(){
  var customer = NaN;
  var pickupDelivery = NaN;
  var visibleDivs = ['#welcome'];


  //Get welcome info, switch to crust/size display
  $('#submit-pickup').click(function(event) {
    event.preventDefault();
    var customerName = document.getElementById('customer').value;
    customer = new Customer(customerName);
    var choice = document.getElementById("pickup-delivery");
    pickupDelivery = choice.options[choice.selectedIndex].value;
    visibleDivs.push('#crust');
    showDiv('#crust', visibleDivs);
    $('#customerName').text(customer.customerName);
  });

  // Re-display welcome screen on click
  $('#welcome2').click(function() {
    showDiv('#welcome', visibleDivs);
  });

  $('#crustSizeSelectBtn').click(function() {
    visibleDivs.push('#sauce');
    showDiv('#sauce', visibleDivs);
  });

  $('#crust2').click(function() {
    showDiv('#crust', visibleDivs);
  });

  $('#sauceSelect').onclick = function(event) {
  event.preventDefault();
  };

  $('#sauceSelectBtn').click(function() {
    visibleDivs.push('#cheese');
    showDiv('#cheese', visibleDivs);
  });

  $('#sauce2').click(function() {
    showDiv('#sauce', visibleDivs);
  });

  $('#cheeseSelect').onclick = function(event) {
  event.preventDefault();
  };

  $('#cheeseSelectBtn').click(function() {
    visibleDivs.push('#meat');
    showDiv('#meat', visibleDivs);
  });

  $('#cheese2').click(function() {
    showDiv('#cheese', visibleDivs);
  });

  $('#meatSelect').onclick = function(event) {
  event.preventDefault();
  };

  $('#meatSelectBtn').click(function() {
    visibleDivs.push('#veggies');
    showDiv('#veggies', visibleDivs);
  });

  $('#meat2').click(function() {
    showDiv('#meat', visibleDivs);
  });

  $('#veggiesSelect').onclick = function(event) {
  event.preventDefault();
  };

  $('#veggiesSelectBtn').click(function() {
    visibleDivs.push('#price');
    showDiv('#price', visibleDivs);
    getIngredients();
    var price = orderTotal(customer);
    $('#priceTotal').text(price);
  });

  $('#veggies2').click(function() {
    showDiv('#veggies', visibleDivs);
  });

  function getIngredients() {
    customer.clearOrder();
    var crust = $('input[type=radio]:checked', '#crustSelect').val();
    var size = $('input[type=radio]:checked', '#sizeSelect').val();
    var sauce = $('input[type=radio]:checked', '#sauceSelect').val();
    customer.addItem([crust, size, sauce]);
    $('input[type=checkbox]:checked').each(function() {
      customer.addItem($(this).val());
    });
  }

});
