"use strict"
const player_num = parseInt(prompt("How many players are there?"));
const players = [];
for(let i = 0; i < player_num; i++){
    const player = prompt("Give a player name!");
    players.push(player);
}
players.sort();

const player_list = document.querySelector(".players");
for (const player of players) {
    const li = document.createElement("li");
    li.innerText = player;
    player_list.appendChild(li);
}