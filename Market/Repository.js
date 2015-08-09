function Repository() {
	this.storage = new Storage();
}

Repository.prototype.getById = function(id){
	return this.storage.getById(id);
}

Repository.prototype.getAll = function(){
	return this.storage.getAll();
}

Repository.prototype.update = function(id, data){
	this.storage.update(id, data);
}

Repository.prototype.delete = function(id){
	this.storage.delete(id);
}

Repository.prototype.find = function(key, value){
	return this.storage.findByKeyValue(key, value);
}