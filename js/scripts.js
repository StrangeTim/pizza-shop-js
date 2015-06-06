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

}

function orderTotal(customer) {
  // CRUSTS = pan-1, deep dish-2, thin crust-3
  //
  // SIZES = personal-11, small-12, medium-13, large-14, x-large-15
  //
  // SAUCES = tomato-21, olive oil-22, white-23
  //
  // CHEESES = mozzarella-31,  provolone-32,  parmesan-33,
  //           ricotta-34, colby-35,  gruyere-36, gouda-37
  //
  // MEATS = pepperoni-41, italian sausage-42, salami-43, ham-44,
  //         meatballs-45,  bacon-46, chicken-47,  beef-48,
  //         pork-49,  anchovies-50,  turkey-51
  //
  // VEGGIES = mushrooms-61,  red onion-62,  spinach-63,  tomato-64,
  //           green pepper-65,  black olives-66,  green olives-67,
  //           jalapenos-68,  cherry peppers-69,  pineapple-70
  //

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

//------------- PROGRAM SPECIFIC FUNCTIONALILTY ABOVE. DISPLAY SPECIFIC FUNCTIONALITY BELOW -----------------
