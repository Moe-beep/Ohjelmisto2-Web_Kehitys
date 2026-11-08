"use strict"
let numbers = [];
while(true){
    const num = prompt("Anna numero (Jos se numero on array:ssa lopettaa):");
    if(numbers.includes(num)){
        break;
    }
    numbers.push(num);
}

numbers.sort((a, b) => a - b);
console.log("Järjestetty lista: " + numbers.join(", "));