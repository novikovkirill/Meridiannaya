function Client(){
	this.orders = [];
}
Client.clientList = [];
Client.create = function(obj) {
	var client = new Client();
	client.name = obj.name;
	client.city = obj.city;
	client.money = 0;
	Client.clientList.push(client);
	return client;
}
Client.prototype.refund = function(amount){
	this.money+=amount;
}
Client.prototype.addToOrder = function(product, specAmount){
	if (product.amount < specAmount)
		alert("К сожалению, такого количества товара нет на складе");
	else {
		this.orders.push({
			prodId: product.id,
			amount : specAmount,
			purchased: false
		});
		product.amount-=specAmount;
	}
}
Client.prototype.purchase = function(){
	var sumPrice = 0;
	for (var i = 0; i < this.orders.length; i++)
		if (this.orders[i].purchased == false){
			var product = Product.find("id", this.orders[i].prodId)[0];
			sumPrice+=this.orders[i].amount * product.price;
		}
	if (sumPrice > this.money)
		alert("Средств на вашем счёте недостаточно для приобретения выбранных товаров");
	else {
		this.money -= sumPrice;
		for (var i = 0; i < this.orders.length; i++)
			if (this.orders[i].purchased == false)
				this.orders[i].purchased = true;
	}
}
Client.prototype.getOrders = function(){
	var purchasedOrders = [];
	for (var i = 0; i < this.orders.length; i++)
		if (this.orders[i].purchased == true)
			this.orders.splice(i,1);
}