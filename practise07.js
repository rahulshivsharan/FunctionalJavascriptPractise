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

//singSong(10);

//Functional Programming

function lyricSegment(bottles){
	return _.chain([]).
			push(bottles+" bottle of beer on the wall").
			push(bottles+" bottle of beer").
			push("Take one down, pass it around").
			tap(function(lyrics){
			
			if(bottles > 1){
				lyrics.push((bottles - 1)+" bottles of beer on the wall");	
			}else{
				lyrics.push("No more bottles of beer on the wall !!");
			}
	}).value();
}

//console.log(lyricSegment(10));

function justDoIt(){	
	
	var val = _.chain([]).push("One").push("Two").push("Three").tap(function(numberArray){
				for(var x = 0; x < numberArray.length; x++){
					numberArray[x] = numberArray[x] + " \""+ (x+1) + "\" ";
				}
			  }).value();
	
	console.log(val);
	
	var str = _.reduce(val,function(initVal,current_val){
			initVal += "| "+current_val;
			return initVal;
	},"");
	
	console.log(str);
}

//justDoIt();

function whatIsRange(start,end){
	return _.range(start,end,-1);
}
//console.log(whatIsRange(10,0))

function song(start,end,lyricFn){
	return _.reduce(_.range(start,end,-1),function(acc,n){
		return acc.concat(lyricFn(n));
	},[]);
}

console.log(song(3,0,lyricSegment));

