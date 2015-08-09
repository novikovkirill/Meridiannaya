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
