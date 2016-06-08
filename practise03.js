var _ = require("underscore");

var str = "Rahul, 23, India\nMerbel, 35, USA\nBob, 64, UK\nAslam, 45, Egypt";

//console.log(str);


function lameCSV(str){
	return _.reduce(str.split("\n"),function(table,row){
		
		table.push(_.map(row.split(","),function(c){
			return c.trim();
		}));
		
		return table;
	},[]);
}

var table = lameCSV(str);

console.log(table);
console.log("\n---------------------------\n");

function selectNames(data){
	return _.map(data,_.first);
}


function selectAge(data){
	return _.map(data,1);
}

function selectCountry(data){
	return _.map(data,2);
}


console.log(selectNames(table));
console.log(selectAge(table));
console.log(selectCountry(table));
