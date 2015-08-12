function Entity(){}

Entity.prototype.checkF = function(){

}
Entity.create = function(type, data) {
	var constr = type,
		newEntity;
	if (typeof Entity !== 'function'){
		throw {
			name: 'Error',
			message: constr + "doesn't exist"
		}
	}
	if (typeof Entity[constr].prototype.checkF !== "function"){
		Entity[constr].prototype = new Entity();
	}
	newEntity = new Entity[constr](data);
	return newEntity;
}

Entity.Shop = function(obj){
	this.name = obj.name;
	this.city = obj.city;
}

Entity.Client = function(obj){
	this.name = obj.name;
	this.city = obj.city;
	this.money = 0;
}

Entity.Order = function(obj){
	this.productId = obj.productId;
	this.clientId = obj.clientId;
	this.amout = obj.amount;
	this.purchased = false;
}

Entity.Product = function(obj){
	this.name = obj.name;
	this.price = obj.price
	this.amount = obj.amount;
	this.shopId = obj.shopId;
}