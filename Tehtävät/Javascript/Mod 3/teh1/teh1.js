"use strict"
const numbers = []
for(let i = 1; i < 6 ; i++){
    const number = prompt("Give a number!");
    numbers.push(number);
}

numbers.reverse();
for (const num of numbers){
    console.log(`${num}`)
}