describe("Repository", function() {

  var shopRep = new ShopRepository();
  var prodRep = new ProductRepository();
  var clientRep = new ClientRepository;
  var orderRep = new OrderRepository;

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
    prodRep.createProduct({name: "T-Shirt", price: 100, amount: 50, shop: shopRep.getById(2)})
    prodRep.createProduct({name: "Cool T­Shirt", price: 200, amount: 50, shop: shopRep.getById(4)})
    prodRep.createProduct({name: "T-Shirt", price: 150, amount: 10, shop: shopRep.getById(4)})
    prodRep.createProduct({name: "iPhone 6", price: 50000, amount: 50, shop: shopRep.getById(3)})
    var tshirts = prodRep.find("name", "t-shirt");
    expect(tshirts.length).toBe(2);
  });

  it("should create client", function(){
    var client = clientRep.createClient({name: "Джон Смит", city: "Казань"});
    expect(clientRep.getById(0).money).toBe(0);
  });

  it("should increase client's money by 1000", function(){
    clientRep.refund(0,1000);
    expect(clientRep.getById(0).money).toBe(1000);
  });

  it("should not create order with unproper amount", function(){
    orderRep.createOrder({client: clientRep.getById(0), product: prodRep.getById(1), amount: 106});
    expect(orderRep.getAll().length).toBe(0);
  });

  it("should create order with proper amount and decrease it's product's amount with specified value", function(){
    orderRep.createOrder({client: clientRep.getById(0), product: prodRep.getById(1), amount: 6});
    expect(orderRep.getById(0).product.amount).toBe(44);
  });

  it("shoud purchase client's orders", function(){
    orderRep.purchase(clientRep.getById(0));
    expect(orderRep.getById(0).purchased).toBe(true);
  });

  it("shoud decrease client's money when purchasing", function(){
    expect(clientRep.getById(0).money).toBe(400);
  });

  it("should deliever orders to client and delete them from orders Storage", function(){
    console.log(orderRep.getAll())
    orderRep.createOrder({client: clientRep.getById(0), product: prodRep.getById(0), amount: 1});
    orderRep.getOrders(clientRep.getById(0));
    console.log(orderRep.getAll())
    expect(orderRep.getAll().length).toBe(1);
  })
});