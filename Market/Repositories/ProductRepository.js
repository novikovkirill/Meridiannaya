function ProductRepository() {
	Repository.apply(this,arguments)
}

ProductRepository.prototype = Object.create(Repository.prototype);
ProductRepository.prototype.constructor = ProductRepository;

ProductRepository.prototype.createProduct = function(data){
	var product = Product.create(data);
	this.storage.addData(product);
	return product;
}

