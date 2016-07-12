var _ = require("underscore");

var obj = {
	name : "Rahul",
	locality : "Andheri",
	Nationality : "Indian",
	education : "Bachelore of Engineering"
}

function getArrayForObject(o){
	return _.map(o,function(key,value,col){
		return [key,value,_.keys(col)];
	});
}

console.log(getArrayForObject(obj));