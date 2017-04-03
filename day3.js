// console.log("day3");

// objects 

//ex. of key/value : key is tail, value is long

// var myCat = {
// 	tail: "long",
// 	age: 29,
// 	color: "blue",
// 	friends: ["zoe", "callan", "lauren"]
// }

// console.log("Age of cat: ", myCat.age);
// console.log("Color of cat: ", myCat["color"]);

// for(var myKey in myCat){
// 	console.log("myKey", myKey);
// 	console.log("values", myCat[myKey]);
// }

//functions 
var nuggetElement = document.getElementById("nuggetShack");
var availElement = document.getElementById("availForPurchase");
console.log("nuggetElement", nuggetElement);
console.log("availElement", availElement);

function nuggetMaker(animal) {
	var myNugget = "breading " + animal + " breading";
	return myNugget;
}
	//return is a way to get output from the var
//functions are meant to be reusable throughout a js document.

var x = 3;

function yMaker(ex){
	y = ex +2
}

yMaker(x);

//don't actually use the addBr function (var newBreak is included in this) \/

function addBr(){  //simplest functions at the top
	return "<br>";
}

function shackMaker(divLocation, typeOfNugget){
	var newBreak = addBr ();
	divLocation.innerHTML += typeOfNugget + newBreak;
	//availElement.innerHTML += chickenNuggets
}

//don't actually use the addBr function (var newBreak is included in this) /\


var chickenNuggets=nuggetMaker("chicken");
shackMaker(availElement, chickenNuggets);

var lobsterNuggets=nuggetMaker("lobster");
shackMaker(availElement, lobsterNuggets);

var tablets=nuggetMaker("myComputer");
shackMaker(availElement, tablets);

var shackName = "Callan's Shack";
nuggetElement.innerHTML += shackName;






// function myLooper(myArray) {
// 	for (var i=0; i < myArray.length; i++){
// 		console.log(myArray[i]);
// 	}
// }

// var animals = ["cats", "turtles", "fish", "bears", "tigers"];
// var colors = ["red", "blue", "gold", "pink", "orange"];

// myLooper(animals);
// myLooper(colors);


// function allTheStrings(st1,st2,st3){
// 	return st1+st2+st3;
// }

// var newString = allTheStrings("hello", "all", "people");
// console.log("newString", newString);




















