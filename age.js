// 1. How many hours are in a year
var hoursYear = (24 * 365);
console.log("Hours in Year: ", hoursYear);

// 2. How many minutes are in a decade
var minDecade = (525600 * 10);
console.log("Minutes in a decade: ", minDecade);

var minutesPerHour = 60;
var hoursPerDay = 24;
var daysPerYear = 365;
var yearsPerDecade = 10;
console.log("Minutes in a decade: ", minutesPerHour * hoursPerDay * daysPerYear * yearsPerDecade);

// 3. How many seconds old they are
var age = 26;
console.log(31000000 * age );
age = (age * 31000000);
console.log(age);

// 4. If they are older than some arbitrary number, console "I'm old", else "I'm young"
if (age == 8000000000) {
    console.log(" I'm old")
} else { 
    console.log(" I'm young")
}


var phrase = "Hey, look at me!";

var element = document.getElementById("container");
console.log(document);

element.innerHTML = "<b>hello</b>";


