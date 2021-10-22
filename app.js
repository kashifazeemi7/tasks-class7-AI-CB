function main() {

// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let date = new Date()
let currentday = date.getDay();
let currenthours = date.getHours()
let currentmins = date.getMinutes();
let currentsecs = date.getSeconds();

let twelvehr;
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
if (currenthours < 12 && currenthours > 0) {
    twelvehr = currenthours + ' AM'
} else if (currenthours < 24 && currenthours >= 12) {
    twelvehr = currenthours + ' PM'
}
console.log('Today is : ', days[currentday - 1])
console.log('Current time is : ', twelvehr, ' : ', currentmins, ' : ', currentsecs  );
















}