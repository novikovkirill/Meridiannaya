var ShopRepository = (function(){

	var instance;

	function ShopRepository() {
		if ( !instance )
			instance = this;
		else return instance;
		Repository.apply(this,arguments);
	}

	ShopRepository.prototype = Object.create(Repository.prototype);
	ShopRepository.prototype.constructor = ShopRepository;

	ShopRepository.prototype.createShop = function(data){
		var shop = Shop.create(data);
		shop.id = this.storage.addData(shop);
		return shop;
	}

	ShopRepository.prototype.findByCity = function(cityname){
		return this.storage.findByKeyValue("city", cityname)
	}

	return ShopRepository;

})()

var shopRep = new ShopRepository();