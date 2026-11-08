"use strict"
const numbers = []
while(true){
    const number = prompt("Give a number, the loop will end when you enter 0");
    if(number == 0){
        break;
    }
    numbers.push(number);
}
numbers.sort((a,b)=> b-a);
console.log("The numbers in descending order are: ");
for (const num of numbers){
    console.log(`${num}`)
}