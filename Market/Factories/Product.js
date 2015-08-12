function Product(){

}

Product.create = function(obj) {
	var product = new Product();
	product.name = obj.name;
	product.price = obj.price
	product.amount = obj.amount;
	product.shopId = obj.shopId;
	return product;
}