"use strict"
const ul = document.querySelectorAll("#target");
ul[0].className = "my-list";

let addli = document.createElement("li");
addli.textContent = "First item";
ul[0].appendChild(addli);

let addli2 = document.createElement("li");
addli2.textContent = "Second item";
addli2.className = "my-item";
ul[0].appendChild(addli2);

let addli3 = document.createElement("li");
addli3.textContent = "Third item";
ul[0].appendChild(addli3);


