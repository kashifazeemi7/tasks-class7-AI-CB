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
console.log('string: Saylani')
console.log('string reversed:',reversed)

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

let daystillday = date.getDate() + (date.getMonth() * 31) + (date.getFullYear() * 365);
let setdate = new Date("8/14/2022"); // 14th August, 2022
let dayssetdate = setdate.getDate() + (setdate.getMonth() * 31) + (setdate.getFullYear() * 365);
let daysleft = dayssetdate - daystillday;
console.log('days left till next 14th August: ', daysleft)


//9. Write a JavaScript program to calculate multiplication and division of two numbers.


function mulnums() {
    var num1 = Number(document.getElementById('in-num1').value);
    var num2 = Number(document.getElementById('in-num2').value);
    let result = num1 * num2;
    document.getElementById('res-calc').innerText = result;
}

function divnums() {
    var num1 = Number(document.getElementById('in-num1').value);
    var num2 = Number(document.getElementById('in-num2').value);
    let result = num1 / num2;
    document.getElementById('res-calc').innerText = result;
}

document.getElementById("mul-nums").addEventListener ("click", mulnums, false);
document.getElementById("div-nums").addEventListener ("click", divnums, false);


//10. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit. 
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]

function convertthetemp() {
    let deg = Number(document.getElementById('in-deg').value);
    let fah = Number(document.getElementById('in-fah').value); 

    if (deg === 0 && fah > 0) {
        document.getElementById('in-deg').value = (fah - 32) * (5/9);
    } else if (deg > 0 && fah === 0) {
        document.getElementById('in-fah').value = (deg * 9/5) + 32;
    } else {
        alert('enter a single value at a time');
        document.getElementById('in-deg').value = null;
        document.getElementById('in-fah').value = null;
    }
}
document.getElementById("conv-temp").addEventListener("click", convertthetemp, false);


// 11. Write a JavaScript program to compute the sum of the two given Numbers. 
// If the two values are same, then returns triple their sum.
 
function calcsum() {
    var num1 = Number(document.getElementById('number1').value);
    var num2 = Number(document.getElementById('number2').value);
    let result = num1 + num2;
    if (num1 !== num2) {
        document.getElementById('sum-calc').innerText = result;
    } else if ( num1 === num2) {
        document.getElementById('sum-calc').innerText = result * 3;
    }
} document.getElementById("calc-btn").addEventListener("click", calcsum, false);


//12. Write a JavaScript program to check whether a given Number is within 20 of 100 or 400. //not understood

// 13. Write a JavaScript program to find the largest of three given Numbers.
let nums = [22,28,25,78,89,87,58,98,78,87];
let highest = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > highest) {
        highest = nums[i];
    }
} console.log('the highest of these is: ',highest);









}