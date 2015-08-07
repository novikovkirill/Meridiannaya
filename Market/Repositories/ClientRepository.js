function ShopRepository() {
    Repository.call(this);
}

ShopRepository.prototype.createShop = function(data){
	var shop = Shop.create(data);
	this.storage.addData(shop);
	return shop;
}

ShopRepository.prototype.findByCity = function(value){
	return this.storage.findByKeyValue("city", value)
}

