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


/// Just for examplanation
console.log([].concat.apply([1,2,3],[[13,45],[15,67,89],67]));
console.log([].concat.apply([1,2,3],[13,45,15,67,89,67]));



//console.log(cat([1,2,3],[4,5,6],[7,8]));

function construct(head,tail){
	return cat([head],_.toArray(tail));
}

//console.log(construct(12,[24,36,48]));