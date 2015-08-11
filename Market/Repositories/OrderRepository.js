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
	for (var id in this.storage.dataList)
		if (this.storage.dataList[id].client == client && this.storage.dataList[id].purchased == false)
			sumPrice+=this.storage.dataList[id].amout * this.storage.dataList[id].product.price;
	if (sumPrice > client.money)
		alert("Ваших средств недостаточно для оформления заказа");
	else {
		for (var id in this.storage.dataList)
			if (this.storage.dataList[id].client == client && this.storage.dataList[id].purchased == false)
				this.storage.dataList[id].purchased = true;
		client.money-=sumPrice;
	}
}

OrderRepository.prototype.getOrders = function(client){
	for (var id in this.storage.dataList)
		if (this.storage.dataList[id].client == client && this.storage.dataList[id].purchased == true)
			this.storage.delete(id);
}