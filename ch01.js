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