var _ = require("underscore");

function T(){
	return true;
}

function F(){
	return false;
}

function allOf(){	
	return _.reduceRight(arguments,function(truth,fn){		
		return truth && fn();
	},true);
}

function anyOf(){
	var truth = false;
	return _.reduceRight(arguments,function(truth,fn){		
		return truth || fn();
	},false);
}



console.log(" All are [F,T,T] : "+allOf(F,T,T));
console.log(" All are [T,T,T] : "+allOf(T,T,T));
console.log(" Any are [F,F,F] : "+anyOf(F,F,F));
console.log(" Any are [T,F,F] : "+anyOf(T,F,F));