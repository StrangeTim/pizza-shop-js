describe('Customer', function() {

  it('creates a new pizza shop object with an empty order', function() {
    var pizzaTest = new Customer("Steve 4");
    expect(pizzaTest.customerName).to.equal("Steve 4");
    expect(pizzaTest.order).to.eql([]);
  });

  it('adds items to the order', function() {
    var pizzaTest = new Customer("Steve 4");
    pizzaTest.addItem("cheese");
    expect(pizzaTest.order).to.eql(["cheese"]);
  });

  it('removes an item from the order', function() {
    var pizzaTest = new Customer("Steve 4");
    pizzaTest.addItem("cheese");
    pizzaTest.addItem("anchovies");
    pizzaTest.addItem("pepperoni");
    pizzaTest.removeItem("anchovies");
    expect(pizzaTest.order).to.eql(["cheese", "pepperoni"]);
  });

  it('adds multiple items to an order at the same time', function() {
    var pizzaTest = new Customer("Steve 4");
    pizzaTest.addItem(['large', 'mozzarella', 'pepperoni', 'red onion', 'bacon']);
    expect(pizzaTest.order).to.eql(['large', 'mozzarella', 'pepperoni', 'red onion', 'bacon']);
  });

  it('removes multiple items from an order at the same time', function() {
    var pizzaTest = new Customer("Steve 4");
    pizzaTest.addItem(['large', 'mozzarella', 'pepperoni', 'red onion', 'bacon']);
    pizzaTest.removeItem(['red onion', 'bacon']);
    expect(pizzaTest.order).to.eql(['large', 'mozzarella', 'pepperoni']);
  });

});

describe('orderTotal', function() {

  it('calculates the total price of an order', function() {
    var pizzaTest = new Customer("Steve 4");
//    pizzaTest.addItem(['large', 'mozzarella', 'pepperoni', 'red onion', 'bacon']);
    pizzaTest.addItem([14, 31, 41, 62, 46]);
    expect(orderTotal(pizzaTest)).to.equal(12);
  });

});
