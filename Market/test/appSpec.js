describe ("Launcher", function() {

	var shop1 = shopRep.create({name: "Shop1", city: "Kazan"})
	var shop2 = shopRep.create({name: "Shop2", city: "Moscow"})
	var shop3 = shopRep.create({name: "Shop3", city: "Kazan"})
	var shop4 = shopRep.create({name: "Shop4", city: "Moscow"})
	shop1.addProduct({name: "T­Shirt", price: 100, amount: 50})
	shop1.addProduct({name: "Cool T­Shirt", price: 200, amount: 50})
	shop2.addProduct({name: "T­Shirt", price: 150, amount: 10})
	shop3.addProduct({name: "iPhone 6", price: 50000, amount: 50})
	var shops = shopRep.getAll()
	var shops_in_kazan = shopRep.findByCity("Kazan")
	var products = prodRep.getAll()
	var tshirts = prodRep.find("name", "t­shirt")
	shopRep.update(2, {name: "The Best Shop"})
	client = clientRep.create({name: "John Smith", city: "Kazan"})
	client.refund(1000) // пополнить денежный счет
	var product = tshirts[0]
	client.addToOrder(product, 4)
	client.purchase()

	it("should create shop and add to storage", function(){
		expect(shopRep.getById(3).name).toBe("Shop4");
	});

	it("should add product to shop", function(){
		expect(shop1.getProducts().length).toBe(2);
	});

	it("should return all shops from storage", function(){
		expect(shops.length).toBe(4);
	});

	it("should return shops from Kazan", function(){
		expect(shops_in_kazan.length).toBe(2);
	});

	it("should update shop's name", function(){
		expect(shopRep.getById(2).name).toBe("The Best Shop");
	});

	it("should return all products from storage", function(){
		expect(products.length).toBe(4);
	});

	it("should find products by query", function(){
		expect(tshirts.length).toBe(2);
	});

	it("should create client and add to storage", function(){
		expect(clientRep.getById(0).name).toBe("John Smith");
	});

	it("should add product to client", function(){
		expect(orderRep.getById(0).clientId).toBe(0);
	});

	it("should purchase client's products", function(){
		expect(orderRep.getById(0).purchased).toBe(true);
	});

	it("should decrease client's money", function(){
		expect(client.money).toBe(600);
	});

	it("should decrease product's amount", function(){
		expect(prodRep.getById(0).amount).toBe(46);
	});

	it("should get only purchased orders", function(){
		client.addToOrder(tshirts[0], 5);
		client.getOrders();
		expect(orderRep.getAll().length).toBe(1);
	});

});