function PizzaShoppe(name) {
  this.shopName = name;
  this.order = [];

  this.addToOrder = function(item) {
    this.order.push(item);
  }
}
