//switch statement
// var day = "Friday";
// switch(day){
// 	case "Monday":
// 		console.log("Booooo");
// 	case "Friday":
// 		console.log("PARTAY");
// 		break;
// 	default:
// 		console.log("not monday");
// }
// the above does the same as:


// if(day === "Monday"){
// 	console.log("Booooo");
// } else if(day === "Friday"){
// 	console.log("PARTAY");
// } else{
// 	console.log("not monday");
// }


//ARRAYS are basically an ordered bucket

// var bucket = ["cats", 12, function cat(){console.log("eat the cats")}, "no dogs", 312]

// bucket[1] //12
// bucket[2] //function cat(){console.log("eat the cats")}
// bucket.push("fancy new thing") //6
// bucket.pop()//fancy new thing
// bucket.unshift("moar cats")//6
// bucket.shift() //"moar cats"


// var fruit = ["cherries", "apples", "bananas"];
// var fruitString = fruit.join(" cats ");
// console.log("fruitString", fruitString); //fruitString cherries cats apples cats bananas

// var catColors = 'green, red, yellow, black';
// var catColorsArray = catColors.split(",");
// console.log("catColorsArray", catColorsArray); //catColorsArray ["green", " red", " yellow", " black"]

// var reverseFruit = fruit.reverse();
// console.log("reverseFruit", reverseFruit); //reverseFruit ["bananas", "apples", "cherries"]

// var alphaFruit = fruit.sort();
// console.log("alphaFruit", alphaFruit); //alphaFruit ["apples", "bananas", "cherries"]

// var nums = [9,6,8,2,4,11,66]; //2,4,6,8,9,11,66
// var numSort = nums.sort(function(a,b){return a-b});
// console.log("numSort", numSort); //numSort [2, 4, 6, 8, 9, 11, 66]

// var mixedCrap = ["r", "m",33,9, 3];
// console.log("????", mixedCrap.sort());

// var animals = ["cats", "turtles", "fish", "bears", "tigers"];
// console.log("fish index", animals.indexOf("fish"));

// var animals2 = animals.slice(2,4);
// console.log("animals2", animals2);

// animals.splice(1,1);  //in the paratheisis, it means remove position 1, but only remove 1 integer. 
// console.log("no turtles", animals);

// var colors = ["red", "blue", "gold", "pink", "orange"];

// //sort, reverse, make a string

// var finalAnswer = colors.sort().reverse().join(" cat ");
// console.log("finalAnswer", finalAnswer); //finalAnswer red cat pink cat orange cat gold cat blue

// //colors.sort() sorted the colors; reverse() reversed the color order; join() combined the content with array.

//for loops

// for(var i=0; i<5 ; i++){  //i++ is shorthand for i+1 ; i-- is shorthand for i-1 . 
// 	console.log("i", i);
// }

// var fruit = ["cherries", "apples", "bananas", "oranges"];

// for(var j=0; j<fruit.length; j++){
// 	console.log("fruit", fruit[j]);
// }

//write a for loop that increments by 10 each time = 10 times 10,20,30...100

for(var k=0; k<101 ; k=k+10 ){
	console.log("k", k);

}



//for loop that pushes the index to an array for 5 times | console.log(array) = [0,1,2,3,4]
var myArray=[];
for(var i=0; i<5; i++){
	myArray.push(i);
	console.log("count: ", i);
}

console.log("myArray ", myArray);


//for loop that starts at 100 and divides by 2 each time | 3 times = 100,50,25
var num=100;
for(var j=0; j<3; j++){
	console.log("Number: ", num);
	num=num/2;
}




























































