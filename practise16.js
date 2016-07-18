var _ = require("underscore");

var employees = [{
	name : "Rahul",
	age : 25,
	location : "Dader"
},{
	name : "Mehul",
	age : 25,
	location : "Sion"
},{
	name : "Zubin",
	age : 45,
	location : "Dader"
},{
	name : "Ninaad",
	age : 31,
	location : "Sion"
},{
	name : "Sukesh",
	age : 31,
	location : "Mahalaxmi"
}];

function sortByName(employees){
	return _.sortBy(employees,function(p){
		return p.name;
	});
}

function sortByAge(employees){
	return _.sortBy(employees,function(p){
		return p.age;
	});
}

//console.log(sortByName(employees));
//console.log(sortByAge(employees));

function groupBy(employees,by){
	return _.groupBy(employees,function(emp){
		return emp[by];
	});
}

console.log(groupBy(employees,"location"));
//console.log(groupBy(employees,"age"));

function countBy(employees,by){
	return _.countBy(employees,function(emp){
		return emp[by];
	});
}

//console.log(countBy(employees,"location"));
