var _ = require("underscore");

function existy(x){
	return (x !== null && x !== undefined);
}

//console.log(existy(''));


function cat(){
	var head = _.first(arguments);
	if(existy(head)){	
		return head.concat.apply(head,_.rest(arguments));
	}else{
		return [];
	}
}

//console.log(cat([2],[3],[4,5]));

//console.log([2].concat([3,4]).concat([5,6]));

console.log([].concat.apply([2],[[99],5,6,[2,3]]));

console.log([2].concat([99]).concat([5,6,[2,3]]));		