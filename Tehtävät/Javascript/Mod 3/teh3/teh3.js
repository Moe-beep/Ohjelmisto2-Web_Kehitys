"use strict"

const dogs = []
for(let i = 1; i < 7 ; i++){
    const dog = prompt("Give a dog name!");
    dogs.push(dog);
}
dogs.sort();
dogs.reverse();
for(const dog of dogs){
    const ul = document.querySelector(".dogs");
    const li = document.createElement("li");
    li.innerText = dog;
    ul.appendChild(li);
}