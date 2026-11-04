"use strict"
console.log("I'm printing to concole!");

const name = prompt("Howdy!!What's your name?");
document.querySelector("#greet").innerHTML = "Hello, " + name + ".";

const first = parseInt(prompt("Give me first integer!"));
const second = parseInt(prompt("Give me second integer!"));
const third = parseInt(prompt("Give me third integer!"));

//numbers
const sum = first + second + third;
const average = sum / 3;
const sumStr = sum.toString();
const averageStr = average.toString();

document.querySelector("#number").innerHTML = "Sum = "+sumStr+", Average= "+ averageStr;

//Harry potter
const sortname = prompt("Tell me your name child!");
const house = Math.floor(Math.random() * 5) + 1;
let line;
switch(house){
    case 1:
        line = `${sortname}, you are Gryffindor`
        break
    case 2:
        line = `${sortname}, you are Ravenclaw`
        break
    case 3:
        line = `${sortname}, you are Slytherin`
        break
    case 4:
        line = `${sortname}, you are Hufflepuff`
        break
    default:
        line = "You don't belong here!!"
}

document.querySelector("#hogward").innerHTML = line;

const year = parseInt(prompt("Give me a year.."));
let leap;
if(year % 4 === 0 && year % 100 != 0|| (year % 100 === 0 && year % 400 === 0) ){
    leap = `Yes, ${year} is a leap year`;
}
else{
    leap = `No, ${year} is not a leap year`;
}
document.querySelector("#leap").innerHTML = leap;


