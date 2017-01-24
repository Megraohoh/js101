
// Take the contents of the sonnet div and place it in a variable
// var sonnet = document.getElementById("sonnet");
// //above line grabs from the div
// console.log("sonnet", sonnet);
// var sonnet = element.innerHTML;

var element = document.getElementById("sonnet");
console.log(element);
var sonnet = element.innerHTML;

// Find and output the starting position of the word "orphans"
//("sonnet").find('orphans');

var indexOfOrphans = sonnet.indexOf("orphans");
console.log(indexOfOrphans);

alert("There are " + sonnet.length +" charcters in this sonnet");

var textreplace = sonnet.replace("winter", "yuletide");
console.log(textreplace);

var globalreplace = sonnet.replace(/the/g, "a large");
console.log(globalreplace);

document.getElementById("sonnet").innerHTML = "The quick brown fox jumped over the lazy dog!"
console.log(sonnet);


// Output the number of characters in the sonnet

// Replace the first occurance of the string "winter" with "yuletide"

// Replace all occurances of the string "the" with "a large"

// Set the content of the sonnet div with the new string

 