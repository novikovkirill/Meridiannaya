function Storage(){
	this.dataList = localStorage;
	this.idCounter = makeId(this.dataList);
}

Storage.prototype.addData = function(data){
	var id = this.idCounter();
	localStorage.setItem(id, JSON.stringify(data));
	return id;
}

Storage.prototype.getAll = function(){
	return this.dataList;
}

Storage.prototype.getById = function(id){
	return this.dataList[id];
}

Storage.prototype.findByKeyValue = function(key, value){
	var res = [];
	value = value.toString().toLowerCase();
	for (var id in this.dataList){
		var parsed = JSON.parse(this.dataList[id]);
		if (parsed[key].toString().toLowerCase() == value)
			res.push(parsed);
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

function makeId(dataList) {

  var maxId = 0;

  for (var key in dataList){
  	if (+key > maxId)
  		maxId = +key;
  }

  var currentCount = maxId+1;

  function counter() {
    return currentCount++;
  }


  function counterReduce() { //??
    currentCount--;
  }

  return counter;
}