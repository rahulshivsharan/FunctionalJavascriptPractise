var _ = require("underscore");

_.times(4,function(){
	console.log(" Hi There ");
});


var underScore = _.noConflict();

underScore.times(4,function(){
	var date = new Date();
	console.log(" No Conflict ",date.getTime());
});


[12,34,56,78,90].forEach(function(val,index){
	console.log(index," Number ",val);
});

function spat(fn){
	return function(myArray){
		return fn.apply(null,myArray);
	}
}

var addAllNumbers = spat(function(){
	var total = 0;	
	for(var index = 0; index < arguments.length; index++){
		total += arguments[index];
	}

	return total;
});

var array_numbers = [20,30,40];
//console.log(" Total of ",array_numbers," is ",addAllNumbers(array_numbers));

array_numbers = [10,10,40,30];
//console.log(" Total of ",array_numbers," is ",addAllNumbers(array_numbers));

var greet = function(fn){
	return function (message){
		return fn.call(null,message);
	}
}

var msgByJohn = greet(function(){
	return "John says \""+arguments[0]+"\"";
});

//console.log(msgByJohn("How are you ?"));
//console.log(msgByJohn("I will be comming late today"));


function unspat(fn){
	return function(){
		return fn.call(null,_.toArray(arguments));
	}
}

var cal = unspat(function(myArray){
	return myArray.join(" ; ");
});


//console.log(cal(1,45,7));

var parseAge = function(age){
	if(!_.isString(age)){
		throw new  Error("The age is not String value");
	}

	var a = parseInt(age,10);

	if(_.isNaN(a)){
		console.log(["Could not parse Age:",age].join(" "));
		a = 0;
	}

	return a;
}

//console.log(parseAge("advs"));


function fail(msg){
	throw new Error(msg);
}

function warn(msg){
	console.log(["WARNING:",msg].join(" "));
}

function note(msg){
	console.log(["NOTE:",msg].join(" "));
}

var parseAge = function(age){
	if(!_.isString(age)){
		fail("The age is not String value");
	}

	note("Attempting to parse age");
	var a = parseInt(age,10);

	if(_.isNaN(a)){
		warn(["Could not parse Age:",age].join(" "));
		a = 0;
	}

	return a;
}

//parseAge("12");
//parseAge(12);


function fail(msg){
	throw new Error(msg);
}

function naiveNth(index,array){
	if(index >= array.length){
		fail(" Index position is not valid ");
		return null;
	}	
	return array[index];
}

//console.log(naiveNth(1,["A","B","C"]));
//console.log(naiveNth(12,["A","B","C"]));


function isIndexed(obj){
	return _.isArray(obj) || _.isString(obj);
}

//console.log(" is Indexed ",isIndexed([12,45])," is Indexd ",isIndexed("Rahul"));

function nth(obj,index){

	var fail = function(msg){
		throw new Error(msg);
	}

	var isIndexed = function(obj){
		return _.isArray(obj) || _.isString(obj);
	}

	if(!_.isNumber(index)) fail("Expected number as an index");
	if(!isIndexed(obj)) fail("Not supported for non-indexed data-type");

	if(index < 0 || (index > obj.length - 1)) 
		fail("Index out of bound exception");

	return obj[index];
}


//console.log(nth([12,34,56],2)+"  "+nth("Rahul",3));
//console.log(nth({},2)+"  "+nth(null,3));

function second(obj){
	var nth = function(obj,index){

		var fail = function(msg){
			throw new Error(msg);
		}

		var isIndexed = function(obj){
			return _.isArray(obj) || _.isString(obj);
		}

		if(!_.isNumber(index)) fail("Expected number as an index");
		if(!isIndexed(obj)) fail("Not supported for non-indexed data-type");

		if(index < 0 || (index > obj.length - 1)) 
			fail("Index out of bound exception");

		return obj[index];
	} // end of nth

	return nth(obj,1);	
}

//console.log(second([12,34,56])+"  "+second("Rahul"));

var fn01 = function(){
	var myArray = [12,45,67,1,4,2],
		copyOfMyArray = [];
	console.log(" ",myArray," ",myArray.sort());

	var compareLessThanOrEqual = function(numX,numY){
		if(numX < numY) return -1;
		if(numX > numY) return 1;
		return 0;
	};
	
	copyOfMyArray = myArray.slice();
	console.log(" ",myArray," ",copyOfMyArray.sort(compareLessThanOrEqual));

	var greaterThanEqual = function(numX,numY){
		return numX >= numY;
	}
		
	copyOfMyArray = myArray.slice();
	console.log(" ",myArray," ",copyOfMyArray.sort(greaterThanEqual));

	myArray = [12,45,-1,34,-103,56];
	copyOfMyArray = myArray.slice();
	console.log(" ",myArray," ",copyOfMyArray.sort(greaterThanEqual));	
}
//fn01();


var fn02 = function(){
	
	var lameCSV = function(str){
		return _.reduce(str.split("\n"),function(table,row){

			table.push(_.map(row.split(","),function(val){
				return val.trim();
			}));

			return table;
		},[]);
	}// end of lameCSV

	console.log(lameCSV("name,age\nRahul,23\nVipul,34\nMukesh,23"));
}
//fn02();

var fn03 = function(){
	
	var lameCSV = function(str){
		var tbl = _.reduce(str.split("\n"),function(table,row){

			table.push(_.map(row.split(","),function(val){
				return val.trim();
			}));


			return table;
		},[]);

		return _.rest(tbl);
	}// end of lameCSV

	var csvString = "name,age,salary\n" +
					"Rahul,23,'34,000'\n" +
					"Vipul,34,'23,000'\n" +
					"Mukesh,23,'56,000'";

	console.log(lameCSV(csvString));
}
//fn03();

var fn04 = function(){
	
	var lameCSV = function(str){
		var tbl = _.reduce(str.split("\n"),function(table,row){

			table.push(_.map(row.split(","),function(val){
				return val.trim();
			}));


			return table;
		},[]);

		return _.rest(tbl);
	}// end of lameCSV

	var csvString = "name,age,salary\n" +
					"Rahul,23,34000\n" +
					"Vipul,34,23000\n" +
					"Mukesh,23,56000";

	var arrayContent = lameCSV(csvString);

	var obj = {
		getNames : function(){
			return _.map(arrayContent,function(value){
				return _.first(value);
			});
		},
		getAges : function(){

			var second = function(arr){
				return arr[1];
			}

			return _.map(arrayContent,second);
		},
		getSalary : function(){
			return _.map(arrayContent,function(value){
				console.log(value);
				return _.last(value);
			});
		},
		mergeResults : _.zip
		
	}; // end of obj				

	console.log(" Get Names ",obj.getNames());
	console.log(" Get Ages ",obj.getAges());
	console.log(" Get Salary ",obj.getSalary());
	console.log(" Merge Names + Ages ",obj.mergeResults(obj.getNames(),obj.getAges()));
}
//fn04();

var fn05 = function(){
	var existy = function(x){
		return x != null;
	}
	console.log(" null ",existy(null));
	console.log(" undefined ",existy(undefined));
	console.log(" true ",existy(true));
	console.log(" false ",existy(false));
	console.log(" {} ",existy({}));
	console.log(" 0 ",existy(0));
	console.log(" 1 ",existy(1));

	var truthy = function(x){
		return (x !== false) && existy(x)
	}

	console.log(" null ",truthy(null));
	console.log(" undefined ",truthy(undefined));
	console.log(" true ",truthy(true));
	console.log(" false ",truthy(false));
	console.log(" {} ",truthy({}));
	console.log(" 0 ",truthy(0));
	console.log(" 1 ",truthy(1));
} 
//fn05();

var fn06 = function(){
	var existy = function(x){
		return (x != null);
	}

	var truthy = function(x){
		return (x != false) && existy(x);
	}

	var doWhen = function(condition,action){
		if(truthy(condition)){
			return action();
		}else{
			return undefined;
		}
	}

	function executeIfHasField(target,name){
		return doWhen(existy(target[name]),function(){
			var result = undefined;			
			if(typeof target[name] === 'function'){
				result = target[name]();
			}else{
			 	result = _.result(target,name);
			}
			return result;	
		});
	}

	console.log(executeIfHasField({ "foo" : 43 },"foo"));
	console.log(executeIfHasField([12,34,56],"reverse"));
	var obj = {
		name : "Bhadhresh Shah",
		getCall : function(){
			return "This is a method call"
		}
	}
	console.log(executeIfHasField(obj,"getCall"));
	console.log(executeIfHasField(obj,"name"));	
}
fn06();