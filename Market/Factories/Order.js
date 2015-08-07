function Order(){

}
Order.create = function(obj) {
	var order = new Order();
	order.product = obj.product;
	order.shop = obj.shop;
	order.amout = obj.amount;
	return order;
}