describe("Repository", function() {

  var shopRep = new ShopRepository();
  var prodRep = new ProductRepository();

  it("should create storage", function(){
    expect(typeof shopRep.getAll).toBeDefined();
  })

  it("should add shop to storage", function(){
    shopRep.createShop({name: "Книжный", city: "Казань"});
    expect(shopRep.getAll().length).toBe(1);
  });
  
 it("should find shops by city", function(){
    var shop0 = shopRep.getById(0);
    var shop1 = shopRep.createShop({name: "Новый Книжный", city: "Москва"});
    var shop2 = shopRep.createShop({name: "Стройка", city: "Петербург"});
    var shop3 = shopRep.createShop({name: "Юлмарт", city: "Астана"});
    var shop4 = shopRep.createShop({name: "Мелочёвка от Ильдуса", city: "Казань"});
    var shops_in_Kazan = shopRep.findByCity("Казань");
    expect(shops_in_Kazan).toEqual([shop0,shop4]);
  });

  it("should update specified shop", function(){
    var updShopData = {name: "Мёлочёвка от Ильгиза"}
    shopRep.update(4, updShopData);
    expect(shopRep.getById(4).name).toEqual("Мёлочёвка от Ильгиза");
  });

  it("should create product", function(){
    var book = prodRep.createProduct({name: "Император Мэйдзи и его Япония", price: 500, amount: 50, shop: shopRep.getById(0)});
    expect(book.name).toBe("Император Мэйдзи и его Япония");
  });

  it("should add product to storage", function(){
    expect(prodRep.getById(0).name).toBe("Император Мэйдзи и его Япония");
  });

  it("should return products by query", function(){
    prodRep.createProduct({name: "T­Shirt", price: 100, amount: 50, shop: shopRep.getById(2)})
    prodRep.createProduct({name: "Cool T­Shirt", price: 200, amount: 50, shop: shopRep.getById(4)})
    prodRep.createProduct({name: "T­Shirt", price: 150, amount: 10, shop: shopRep.getById(4)})
    prodRep.createProduct({name: "iPhone 6", price: 50000, amount: 50, shop: shopRep.getById(3)})
    var tshirts = prodRep.getAll();
  });
});