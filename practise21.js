var _ = require("underscore");

function existy(val){
	return !_.isUndefined(val) && !_.isNull(val);
}

/*
var param = undefined;
console.log(" Exists ? "+existy(param));

param = null;
console.log(" Exists ? "+existy(param));

param = 23;
console.log(" Exists ? "+existy(param));
*/

function cat(){
	var head = _.first(arguments);
	
	if(existy(head)){
		return head.concat.apply(head,_.rest(arguments));
		//return head.concat(_.rest(arguments));
	}else{
		return [];
	}
}


/// Just for explanation
// console.log([].concat.apply([1,2,3],[[13,45],[15,67,89],67]));
// console.log([].concat.apply([1,2,3],[[13,45],[15],67,[89,67]]));



 //console.log(cat([1,2,3],[4,5,6],[7,8]));

function construct(head,tail){
	return cat([head],_.toArray(tail));
}

//console.log(construct(12,[24,36,48]));

function mapcat(fn,col){
	return cat.apply(null,_.map(col,fn));
}

/*
console.log(mapcat(function(num){
	return [num * 2];
},[2,3,5]));
*/


/*
console.log(mapcat(function(num){
	return construct((num * 2),["--"]);
},[2,3,5]));
*/


/*
console.log((function(){
	return _.toArray(arguments);
})(1,2,3,4,5));
*/

function butLast(){
	return _.toArray(arguments).slice(0,-1);
}

//console.log(butLast(1,2,3,4,5));



function interpose(inter,coll){	
	return butLast.apply(null,mapcat(function(e){
		return construct(e,[inter]);
	},coll));
}

console.log(interpose(",",[1,2,3]));



