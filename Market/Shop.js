function Shop(){
	this.products = [];
	Shop.shopList.push(this);
}
Shop.shopList = [];
Shop.prototype.addProduct = function(obj){
	this.products.push(obj);
}
Shop.create = function(obj) {
	var shop = new Shop();
	shop.name = obj.name;
	shop.city = obj.city;
	return shop;
}
Shop.getAll = function() {
	return this.shopList;
}
Shop.findByCity = function(city){
	var res = [];
	for(var i = 0; i < this.shopList.length; i++)
		if (this.shopList[i].city == city)
			res.push(this.shopList[i]);
	return res;
}