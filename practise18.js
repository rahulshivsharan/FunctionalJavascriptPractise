var _ = require("underscore");
var list = [{
	id : "Apple01",
	name : "Apple"
},{
	id : "Orange02",
	name : "Orange"
},{
	id : "Pineapple03",
	name : "Pineapple"
},{
	id : "Lemon04",
	name : "Lemon"
}];

console.log(_.findWhere(list,{name : "Lemon"}));