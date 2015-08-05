function Shop(obj){

}
Shop.shopList = [];
Shop.id = 0;
Shop.prototype.addProduct = function(obj){
	obj.shopId = this.id;
	Product.create(obj);
}
Shop.create = function(obj) {
	var shop = new Shop();
	shop.name = obj.name;
	shop.city = obj.city;
	shop.id = Shop.id;
	Shop.shopList.push(shop);
	Shop.id++;
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