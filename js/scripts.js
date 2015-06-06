function PizzaShoppe(name) {
  this.shopName = name;
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

function orderTotal(shop) {
  var MEATS = {'pepperoni': 1, 'italian sausage': 1, 'salami': 1, 'ham': 0.5,
               'meatballs': 0.5, 'bacon': 1, 'chicken': 0.5, 'beef': 0.5,
               'pork': 0.5, 'anchovies': 1.5, 'turkey': 0.5};

  var VEGGIES = {'mushrooms': 0.5, 'red onion': 0.5, 'spinach': 0.5, 'tomato': 0.5,
                 'green pepper': 0.5, 'black olives': 0.5, 'green olives': 0.5,
                 'jalapenos': 0.5, 'cherry peppers': 0.5, 'pineapple': 0.5};

  var CHEESES = {'mozzarella': 0.5, 'provolone': 0.5, 'parmesan': 0.5,
                 'ricotta': 0.5,'colby': 0.5, 'gruyere': 1, 'gouda': 1.5};

  var SIZES = {'personal': 4, 'small': 5, 'medium': 7, 'large': 9, 'x-large': 11};

  var OPTIONS = [MEATS, VEGGIES, CHEESES, SIZES];

  var order = shop.order;

  var price = 0;

  for(var item in order) {
    for(var option in OPTIONS) {
      if (option.hasOwnProperty(item)) {
        price += option[item];
      }
    }
  }

  return price;
}
