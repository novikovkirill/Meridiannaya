var ProductRepository = (function(){

	var instance;

	function ProductRepository() {
		if ( !instance )
			instance = this;
		else return instance;
		this.storage = new Storage("products");
	}

	ProductRepository.prototype = Object.create(Repository.prototype);
	ProductRepository.prototype.constructor = ProductRepository;

	ProductRepository.prototype.create = function(data){
		var product = Product.create(data);
		this.storage.addData(product);
		return product;
	}

	ProductRepository.prototype.findByShopId = function(id){
		return this.storage.findByKeyValue("shopId", id);
	}

	return ProductRepository;

})()

var prodRep = new ProductRepository();