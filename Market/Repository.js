	function Repository() {
		this.storage = new Storage;
	}	

	Repository.prototype.getById = function(id){
		return this.storage.getById(id);
	}

	Repository.prototype.getAll = function(){
		var dataList = this.storage.getAll();
		var res = [];
		for (var id in dataList)
			res.push(dataList[id]);
		return res;
	}

	Repository.prototype.find = function(key, value){
		return this.storage.findByKeyValue(key, value);
	}

	Repository.prototype.update = function(id, data){
		this.storage.update(id, data);
	}

	Repository.prototype.delete = function(id){
		this.storage.delete(id);
	}

