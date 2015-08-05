function Client(){
	this.orders = [];
}
Client.create = function(obj) {
	var client = new Client();
	client.name = obj.name;
	client.city = obj.city;
	client.money = 0;
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
			name: product.name,
			amount : specAmount,
			price: product.price,
			purchased: false
		});
		product.amount--;
	}
}
Client.prototype.purchase = function(){
	var sumPrice = 0;
	for (var i = 0; i < this.orders.length; i++)
		if (this.orders[i].purchased == false)
			sumPrice+=this.orders[i].amount * this.orders[i].price;
	if (sumPrice > this.money)
		alert("Средств на вашем счёте недостаточно для приобретения выбранных товаров");
	else {
		this.money -= sumPrice;
		for (var i = 0; i < this.orders.length; i++)
			if (this.orders[i].purchased == false)
				this.orders[i].purchased = false;
	}
}
Client.prototype.getOrders = function(){
	for (var i = 0; i < this.orders.length; i++)
		if (this.orders[i].purchased == true)
			this.orders.splice(i,1);
}