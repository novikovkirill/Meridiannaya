function ShopRepository() {
	Repository.apply(this,arguments);
}

ShopRepository.prototype = Object.create(Repository.prototype);
ShopRepository.prototype.constructor = ShopRepository;

ShopRepository.prototype.createShop = function(data){
	var shop = Shop.create(data);
	this.storage.addData(shop);
	return shop;
}

ShopRepository.prototype.findByCity = function(value){
	return this.storage.findByKeyValue("city", value)
}

