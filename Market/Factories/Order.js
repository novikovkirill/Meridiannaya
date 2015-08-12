function Order(){

}

Order.create = function(obj) {
	var order = new Order();
	order.productId = obj.productId;
	order.clientId = obj.clientId;
	order.amout = obj.amount;
	order.purchased = false;
	return order;
}