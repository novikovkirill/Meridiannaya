describe("shop", function() {
  var shop1 = Shop.create({name: "Shop1", city: "Kazan"})
  var shop2 = Shop.create({name: "Shop2", city: "Moscow"})
  var shop3 = Shop.create({name: "Shop3", city: "Kazan"})
  var shop4 = Shop.create({name: "Shop4", city: "Moscow"})
  shop1.addProduct({name: "T­Shirt", price: 100, amount: 50})
  shop1.addProduct({name: "Cool T­Shirt", price: 200, amount: 50})
  shop2.addProduct({name: "T­Shirt", price: 150, amount: 10})
  shop3.addProduct({name: "iPhone 6", price: 50000, amount: 50})
  var shops = Shop.getAll()
  var shops_in_kazan = Shop.findByCity("Kazan")
  var products = Product.getAll()
  var tshirts = Product.find("name", "t­shirt")
  client = Client.create({name: "John Smith", city: "Kazan"})
  it("Проверка фабричного метода для магазина", function() {
    expect(shop1.name).toBe('Shop1');
  });
  it ("Added product should be in products list", function() {
    expect(Product.productList[0].name).toBe("T­Shirt");
  })
  it("Shop 'Shop1' should have product 'T­Shirt'", function() {
    expect(Product.find("shopId", shop1.id)[0].name).toBe("T­Shirt");
  });
  it("Shop 'Shop4' should have id 3", function() {
   expect(shop4.id).toBe(3);
  });
  it ("Shop.getAll() should return all 4 shops", function(){
    expect(Shop.getAll().length).toBe(4);
  })
  it ("Shop.findByCity('Kazan') should return only shops from Kazan", function() {
    for (var i = 0; i < shops_in_kazan.length; i++) 
      expect(shops_in_kazan[i].city).toBe('Kazan');
  });
  it ("Shop.findByCity('Kazan') should return all two shops from Kazan", function() {
      expect(shops_in_kazan.length).toBe(2);
  });
  it ("Product.getAll() should return all four products", function() {
      expect(Product.getAll().length).toBe(4);
  });
  it ("Product.find('name', 't­shirt') should return only t-shirts", function() {
      for (var i = 0; i < tshirts.length; i++) 
        expect(tshirts[i].name).toBe("T­Shirt");
  });
  it ("Product.find('name', 't­shirt') should return only t-shirts", function() {
      for (var i = 0; i < tshirts.length; i++) 
        expect(tshirts[i].name).toBe("T­Shirt");
  });
  it ("Product.find('name', 't­shirt') should return all two t-shirts", function() {
        expect(tshirts.length).toBe(2);
  });
  it("Проверка фабричного метода для клиента", function() {
    expect(client.name).toBe('John Smith');
  });
  it("Refund() method should increare clien's money by 100", function() {
    var money = client.money;
    client.refund(1000)
    expect(client.money-money).toBe(1000);
  });
});