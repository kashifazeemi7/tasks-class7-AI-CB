function main() {

// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let date = new Date()
let currentday = date.getDay();
let currenttime = date.getTime();
let currentmins = date.getMinutes();
let currentsecs = date.getSeconds();

console.log('Today is : ', currentday)
console.log('Current time is : ', currenttime, ' : ', currentmins, ' : ');
















}