function Shop(){

}

Shop.create = function(obj) {
	var shop = new Shop();
	shop.name = obj.name;
	shop.city = obj.city;
	return shop;
}