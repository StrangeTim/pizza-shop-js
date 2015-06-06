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

// the function below exists only to more easily list out options
// on the web page.
function pizzaOptions(category) {

  // variableName = pizzaOptions('varName2')
  // for (item in variableName) { console.log(variableName[item]) }

  if (category === 'crusts') {
    return ['Pan', 'Deep dish', 'Thin Crust'];
  }

  if (category === 'sizes') {
    return ['Personal', 'Small', 'Medium', 'Large', 'Extra Large'];
  }

  if (category === 'sauces') {
    return ['Tomato Sauce', 'Olive Oil', 'Alfredo Sauce'];
  }

  if (category === 'cheeses') {
    return ['Mozzarella',  'Provolone', 'Parmesan',
            'Ricotta', 'Colby', 'Gruyere', 'Gouda'];
  }

  if (category === 'cheeses') {
    return ['Pepperoni', 'Italian Sausage', 'Salami', 'Ham',
            'Meatballs', 'Bacon', 'Chicken', 'Beef',
            'Pork', 'Anchovies', 'Turkey'];
  }

  if (category === 'cheeses') {
    return ['Mushrooms', 'Red Onion', 'Spinach', 'Tomato',
            'Green Pepper', 'Black Olives', 'Green Olives',
            'Jalapenos', 'Cherry Peppers', 'Pineapple'];
  }
}


$(function(){
  
});
