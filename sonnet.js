// Take the contents of the sonnet div and place it in a variable
var element=document.getElementById("sonnet");
var sonnet = element.innerHTML;

// Find and output the starting position of the word "orphans"
var indexOfOrphans=sonnet.indexOf("orphans");

// Output the number of characters in the sonnet

// Replace the first occurance of the string "winter" with "yuletide"
var newSonnet = sonnet.replace("winter", "yuletide");

// Replace all occurances of the string "the" with "a large"
var globalReplace=newSonnet.replace(/the/gi, "a large");

// or
// var globalReplace=sonnet.replace(/the /g , "a large ");

// Set the content of the sonnet div with the new string
element.innerHTML = globalReplace;




// // Take the contents of the sonnet div and place it in a variable
// var element = document.getElementById("sonnet");
// var sonnet = element.innerHTML;
// // Find and output the starting position of the word "orphans"
// var indexOfOrphans = sonnet.indexOf("orphans");
// // Output the number of characters in the sonnet
// alert("There are " + sonnet.length +" charcters in this sonnet");
// // Replace the first occurance of the string "winter" with "yuletide"
// var textreplace = sonnet.replace("winter", "yuletide");
// // Replace all occurances of the string "the" with "a large"
// var globalreplace = sonnet.replace(/the/g, "a large");
// // Set the content of the sonnet div with the new string
// document.getElementById("sonnet").innerHTML = "The quick brown fox jumped over the lazy dog!"
