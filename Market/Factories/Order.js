function Order(){

}
Order.create = function(obj) {
	var order = new Order();
	order.product = obj.product;
	order.client = obj.client;
	order.amout = obj.amount;
	return order;
}