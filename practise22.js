var _ = require("underscore");

var employeeList = [	{"id" : 1, "name" : "Adam", "salary" : 23000 },
					 	{"id" : 2, "name" : "Adam", "salary" : 22000 },
					 	{"id" : 3, "name" : "Annabel", "salary" : 13500 },
					 	{"id" : 4, "name" : "Abraham", "salary" : 13000 },
					 	{"id" : 5, "name" : "Alan", "salary" : 12000 },
					 	{"id" : 6, "name" : "Svatlana", "salary" : 1500 },
					 	{"id" : 7, "name" : "Svatlana", "salary" : 1400 },
					 	{"id" : 8, "name" : "Shane", "salary" : 12000 },
					];
/*
function sortEmployee(list){
	return _.sortBy(_.sortBy(list,"name"),"salary");

}*/

function sortEmployee(list){
	return list.sort(function(employee1,employee2){		
		return (employee1.name === employee2.name) 
				? (employee1.salary > employee2.salary) 
				: (employee1.name > employee2.name) ? 1 : -1; 
	});
}

console.log(sortEmployee(employeeList));					

