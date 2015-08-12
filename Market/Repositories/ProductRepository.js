var ProductRepository = (function(){

	var instance;

	function ProductRepository() {
		if ( !instance )
			instance = this;
		else return instance;
		Repository.apply(this,arguments)
	}

	ProductRepository.prototype = Object.create(Repository.prototype);
	ProductRepository.prototype.constructor = ProductRepository;

	ProductRepository.prototype.createProduct = function(data){
		var product = Product.create(data);
		product.id = this.storage.addData(product);
		return product;
	}

	ProductRepository.prototype.searchByShopId = function(id){
		return this.storage.findByKeyValue("shopId", id);
	}

	return ProductRepository;

})()

var prodRep = new ProductRepository();