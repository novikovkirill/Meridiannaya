function Storage(){
	this.dataList = [];
}

Storage.prototype.addData = function(data){
	this.dataList.push(data);
}

Storage.prototype.getAll = function(){
	return this.dataList;
}

Storage.prototype.getById = function(id){
	return this.dataList[id];
}

Storage.prototype.findByKeyValue = function(key, value){
	var res = [];
	for (var i = 0; i < this.dataList.length; i++){
		if (this.dataList[i][key].toString().toLowerCase() == value.toString().toLowerCase()) 
			res.push(this.dataList[i]);
	}
	return res;
}

Storage.prototype.update = function(id, data){
	for (var key in data)
		this.dataList[id][key] = data[key];
}

Storage.prototype.delete = function(id){
	delete this.dataList[id];
}

