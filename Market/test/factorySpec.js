describe("Market Factories", function() {
  var shop1 = Shop.create({name: "Shop1", city: "Kazan"})
  var client1 = Client.create({name: "Jonh Smith", city: "Kazan"})
  var cake = Product.create({name: "Round Cake", price: "300", amount: "600", shop: shop1})
  var order = Order.create({client: client1, product: cake, amount: 1})

  it("Shop Factory should create an object", function() {
    expect(typeof shop1).toBe('object');
  });

  it("Shop Factory should create object with specified parameters", function(){
    expect(shop1.name).toBe("Shop1");
  })

  it("Client Factory should create an object", function() {
    expect(typeof client1).toBe('object');
  });

  it("Client Factory should create object with specified parameters", function(){
    expect(client1.name).toBe("Jonh Smith");
  });

  it("Product Factory should create an object", function() {
    expect(typeof cake).toBe('object');
  });

  it("Product Factory should create object with link to shop", function(){
    expect(cake.shop.name).toBe("Shop1");
  });

  it("Order Factory should create an object", function() {
    expect(typeof order).toBe('object');
  });

  it("Order Factory should create object with link to shop", function(){
    expect(order.product.name).toBe("Round Cake");
  });

});