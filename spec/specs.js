describe('PizzaShoppe', function() {

  it('creates a new pizza shop object with an empty order', function() {
    var pizzaTest = new PizzaShoppe("Steve's Roadkill Express");
    expect(pizzaTest.shopName).to.equal("Steve's Roadkill Express");
    expect(pizzaTest.order).to.eql([]);
  });

});
