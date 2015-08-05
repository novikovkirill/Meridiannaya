var shop1 = Shop.create({name: "Shop1", city: "Kazan"});
var shop2 = Shop.create({name: "Shop2", city: "Moscow"});
var shop3 = Shop.create({name: "Shop3", city: "Kazan"});
var shop4 = Shop.create({name: "Shop4", city: "Moscow"});
shop1.addProduct({name: "T­Shirt", price: 100, amount: 50});
shop1.addProduct({name: "Cool T­Shirt", price: 200, amount: 50});
shop2.addProduct({name: "T­Shirt", price: 150, amount: 10});
shop3.addProduct({name: "iPhone 6", price: 50000, amount: 50});
var shops = Shop.getAll();
var shops_in_kazan = Shop.findByCity("Kazan");
var products = Product.getAll();
var tshirts = Product.find("name", "t­shirt");
shop3.name = "The Best Shop";
shop3 = Shop.update(shop3);
client = Client.create({name: "John Smith", city: "Kazan"});
client.refund(1000); // пополнить денежный счет
var product = tshirts[0];
client.addToOrder(product);
client.purchase();
client.addToOrder(tshirts[0]);
client.getOrders();