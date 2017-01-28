console.log("day3");

// objects 

//ex. of key/value : key is tail, value is long

var myCat = {
	tail: "long",
	age: 29,
	color: "blue",
	friends: ["zoe", "callan", "lauren"]
}

console.log("Age of cat: ", myCat.age);
console.log("Color of cat: ", myCat["color"]);

for(var myKey in myCat){
	console.log("myKey", myKey);
	console.log("values", myCat[myKey]);
}
