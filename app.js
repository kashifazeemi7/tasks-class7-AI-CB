function main() {

// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let date = new Date()
let currentday = date.getDay();
let currenthours = date.getHours();
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


// 2. Write a JavaScript program to get the current date. 
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let currentdate =  date.getDate();
console.log(currentdate + ' -- ' + (date.getMonth() + 1) + ' -- ' + date.getFullYear())


//3. Write a JavaScript program to find the area of a triangle where lengths of the 
//three of its sides are 5, 6, 7  

let sides = [7,8,9];
var perimeter = sides[0] + sides[1] + sides[2];
//console.log(perimeter)
let semipm = perimeter/2;
//console.log(semipm)
let area = Math.sqrt((semipm * (semipm- sides[0]) * (semipm- sides[1]) * (semipm- sides[2])))
console.log('The area of triangle is: ' + Math.round(area))


// 4. Write a JavaScript program to rotate the string 'Saylani' in 
// right direction by periodically removing one letter from the end of the string and attaching it to the front.

let str = "Saylani".split("");
let reversed  = '';
for(let i = (str.length - 1); i > -1; i--) {
    reversed += str[i]
}
console.log('Saylani')
console.log(reversed)

//5. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 

function knowyouryr() {
    let currentyr = Number(document.getElementById('in-year').value);
    if (currentyr % 4 === 0) {
        document.getElementById('out-msg').innerText = "YEP!" ;    
    } else if (currentyr % 4 !== 0) {
        document.getElementById('out-msg').innerText = "NOPE!" ; 
    }
}
document.getElementById ("doleap").addEventListener ("click", knowyouryr, false);


// //6. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. //not understood

// 7. Write a JavaScript program where the program takes a random Number between 1 to 10, 
// the user is then prompted to input a guess number. If the user input matches with guess number, 
// the program will display a message "Good Work" otherwise display a message "Not matched".

function dorand() {
    let num = Number(document.getElementById('in-num').value);
    return num;
}
function hiderand() {
    document.getElementById("randquiz").style.visibility = "hidden";
}
function playrand() {
    var innum = dorand();
    
    let guessnum = Number(document.getElementById('in-guessnum').value);
    if(innum === guessnum) {
        document.getElementById('rand-msg').innerText = 'Bingo!'
    } else if (innum !== guessnum) {
        document.getElementById('rand-msg').innerText = 'Not matched!'
    }


}
document.getElementById("doguess").addEventListener ("click", playrand, false);
document.getElementById("dorand").addEventListener ("click", dorand, false);
document.getElementById("dorand").addEventListener ("click", hiderand, false);


//8. Write a JavaScript program to calculate days left until next 14 August.

let datetoday = date.getDate()












}