function OrderRepository() {
    Repository.apply(this, arguments);
}

OrderRepository.prototype = Object.create(Repository.prototype);
OrderRepository.prototype.constructor = OrderRepository;

OrderRepository.prototype.createOrder = function(data){
	if (data.product.amount >= data.amount){
		data.product.amount-=data.amount;
		var order = Order.create(data);
		this.storage.addData(order);
		return order;
	}
	else 
		alert("Такого количества товара нет на складе");
}

OrderRepository.prototype.purchase = function(client){
	var sumPrice = 0;
	for (var i = 0; i< this.storage.dataList.length; i++)
		if (this.storage.dataList[i].client == client && this.storage.dataList[i].purchased == false)
			sumPrice+=this.storage.dataList[i].amout * this.storage.dataList[i].product.price;
	if (sumPrice > client.money)
		alert("Ваших средств недостаточно для оформления заказа");
	else {
		for (var i = 0; i< this.storage.dataList.length; i++)
			if (this.storage.dataList[i].client == client && this.storage.dataList[i].purchased == false)
				this.storage.dataList[i].purchased = true;
		client.money-=sumPrice;
	}
}

OrderRepository.prototype.getOrders = function(client){
	for (var i = 0; i< this.storage.dataList.length; i++)
		if (this.storage.dataList[i].client == client && this.storage.dataList[i].purchased == true)
			this.storage.delete(i);
}