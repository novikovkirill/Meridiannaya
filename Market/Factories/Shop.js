function Shop(obj){

}

Shop.create = function(obj) {
	var shop = new Shop(obj);
	shop.name = obj.name;
	shop.city = obj.city;
	return shop;
}

Shop.prototype.addProduct = function(data){
	var prodRep = new ProductRepository;
	data.shopId = this.id;
	prodRep.create(data);
}

Shop.prototype.getProducts = function(){
	var prodRep = new ProductRepository;
	return prodRep.findByShopId(this.id);
}