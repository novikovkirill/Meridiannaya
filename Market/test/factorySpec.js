describe("Market Factories", function() {
  var shop = Entity.create('Shop', {name: "Shop1", city: "Kazan"})

  it("Factory should create an object", function() {
    console.log(shop);
    expect(typeof shop).toBe('object');
  });

  it("Factory should create object with proper characteristics", function() {
    console.log(shop);
    expect(shop.city).toBeDefined;
  });

});