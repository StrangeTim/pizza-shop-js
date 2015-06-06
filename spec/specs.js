describe('PizzaShoppe', function() {

  it('creates a new pizza shop object with an empty order', function() {
    var pizzaTest = new PizzaShoppe("Steve's Roadkill Express");
    expect(pizzaTest.shopName).to.equal("Steve's Roadkill Express");
    expect(pizzaTest.order).to.eql([]);
  });

  it('adds items to the order', function() {
    var pizzaTest = new PizzaShoppe("Steve's Roadkill Express");
    pizzaTest.addItem("cheese");
    expect(pizzaTest.order).to.eql(["cheese"]);
  });

  it('removes an item from the order', function() {
    var pizzaTest = new PizzaShoppe("Steve's Roadkill Express");
    pizzaTest.addItem("cheese");
    pizzaTest.addItem("anchovies");
    pizzaTest.addItem("pepperoni");
    pizzaTest.removeItem("anchovies");
    expect(pizzaTest.order).to.eql(["cheese", "pepperoni"]);
  });

  it('adds multiple items to an order at the same time', function() {
    var pizzaTest = new PizzaShoppe("Steve's Roadkill Express");
    pizzaTest.addItem(['large', 'mozzarella', 'pepperoni', 'red onion', 'bacon']);
    expect(pizzaTest.order).to.eql(['large', 'mozzarella', 'pepperoni', 'red onion', 'bacon']);
  });

  it('removes multiple items from an order at the same time', function() {
    var pizzaTest = new PizzaShoppe("Steve's Roadkill Express");
    pizzaTest.addItem(['large', 'mozzarella', 'pepperoni', 'red onion', 'bacon']);
    pizzaTest.removeItem(['red onion', 'bacon']);
    expect(pizzaTest.order).to.eql(['large', 'mozzarella', 'pepperoni']);
  });

});

describe('orderTotal', function() {

  it('calculates the total price of an order', function() {
    var pizzaTest = new PizzaShoppe("Steve's Roadkill Express");
    pizzaTest.addItem(['large', 'mozzarella', 'pepperoni', 'red onion', 'bacon']);
    expect(orderTotal(pizzaTest)).to.equal(12);
  });

});
