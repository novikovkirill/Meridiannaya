function Product(){

}
Product.productList = [];
Product.create = function(obj) {
	var product = new Product();
	product.name = obj.name;
	product.price = obj.price
	product.amount = obj.amount;
	product.shopId = obj.shopId;
	product.id = Product.productList.length;
	Product.productList.push(product);
	return product;
}
Product.getAll = function(){
	return this.productList;
}
Product.find = function(spec, value){
	var res = [];
	for (var i = 0; i < this.productList.length; i++)
		if (this.productList[i][spec].toString().toLowerCase() == value.toString().toLowerCase()) 
			res.push(this.productList[i]);
	return res;
}