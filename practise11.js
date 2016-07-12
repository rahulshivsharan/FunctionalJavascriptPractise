var _ = require("underscore");

var movieObj = {
	"Amitabh Bachann" : ["Shehansha","Kala Pathar","Lawaris"],
	"Shahrukh Khan" : ["Dilwale","One two ka four","Yes Boss","Dewanna"],
	"Amir Khan" : ["Dil","Commando","Raja Hindustani","Lagaan"],
	"Sunil Shetty" : ["Krishna", "Zakham", "Gopi Kishan", "Balwan"]
}

function onlyActors(obj){
	return _.keys(obj);
}

//console.log(onlyActors(movieObj));

var total_Movies = new Object();

function totalMovies(movieObj){
	return _.map(movieObj,function(value,key){
		var obj = new Object();
		obj[key] = value.length;
		return obj;
	});
}

//console.log(totalMovies(movieObj));

var nums = [100,2,25,2];

function div(numerator,denominator){
	return numerator / denominator;
}

console.log(nums+" => "+_.reduce(nums,div));