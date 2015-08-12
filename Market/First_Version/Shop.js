function Shop(obj){

}
Shop.create = function(obj) {
	var shop = new Shop();
	shop.name = obj.name;
	shop.city = obj.city;
	shop.id = Shop.shopList.length;
	Shop.shopList.push(shop);
	return shop;
}
Shop.shopList = [];
Shop.prototype.addProduct = function(obj){
	obj.shopId = this.id;
	obj.shopName = this.name;
	obj.shopCity = this.city;
	Product.create(obj);
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