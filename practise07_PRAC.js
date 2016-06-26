var _ = require("underscore");

// imperative programe

function singSong(n){
	var lyrics = [];
	
	for(var bottles = n; bottles >= 1; bottles--){
		if(bottles == 1){
			lyrics.push(bottles+" bottle of beer on the wall");
			lyrics.push(bottles+" bottle of beer");
			lyrics.push("Take one down, pass it around");
			
			lyrics.push("No more bottles of beer on the wall !!");
		}else{
			lyrics.push(bottles+" bottles of beer on the wall");
			lyrics.push(bottles+" bottles of beer");
			lyrics.push("Take one down, pass it around");

		}
		
				
		
	}
	console.log(lyrics);
}

//singSong(3);


// Functional programming

function lyrics(bottles){
	return _.chain([])
			.push(bottles+" bottle of beer on the wall")
			.push(bottles+" bottle of beer")
			.push("Take one down, pass it around").tap(function(lyrics){
		if(bottles === 1){			
			lyrics.push("No more bottles of beer on the wall !!");
		}		
	}).value();
}

//console.log(lyrics(3));

function sing(start,end,fn){
	return _.reduce(_.range(start,end,-1),function(init,num){
		return init.concat(fn(num));
	},[]);
}

console.log(sing(3,0,lyrics));