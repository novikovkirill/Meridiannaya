describe("shop", function() {
  var shop1 = Shop.create({name: "Shop1", city: "Kazan"})
  shop1.addProduct({name: "T­Shirt", price: 100, amount: 50})
  var shop2 = Shop.create({name: "Shop2", city: "Moscow"})
  var shop3 = Shop.create({name: "Shop3", city: "Kazan"})
  var shop4 = Shop.create({name: "Shop4", city: "Moscow"})
  var shops = Shop.getAll()
  var shops_in_kazan = Shop.findByCity("Kazan")
  it("Проверка фабричного метода для магазина", function() {
    expect(shop1.name).toBe('Shop1');
  });

  it("Проверка добавления товаров в магазин", function() {
    expect(shop1.products[0].name).toBe("T­Shirt");
  });

  it("Проверка метода, возвращаюего все магазины", function() {
    expect(shops.length).toBe(4);
  });
   it("Shops.findByCity('Kazan') should return two shops", function() {
    expect(shops_in_kazan.length).toBe(2);
  });
   it("Shops.findByCity('Kazan') should return only shops in Kazan", function() {
    expect(shops_in_kazan[0].city).toBe('Kazan');
    expect(shops_in_kazan[1].city).toBe('Kazan');
  });
});