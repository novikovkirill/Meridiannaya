Shop.prototype.addProduct = function(data){
	var prodRep = new ProductRepository;
	data.shopId = this.id;
	prodRep.create(data);
}

Shop.prototype.getProducts = function(){
	var prodRep = new ProductRepository;
	return prodRep.findByShopId(this.id);
}