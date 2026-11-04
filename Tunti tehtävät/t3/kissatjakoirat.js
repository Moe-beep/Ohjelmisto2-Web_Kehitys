'use strict';

//1. Korjaa linkki JavaScriptillä: 
// Koira-linkin pitää viedä oikealle Wikipedia-sivulle.
document.getElementById("koiralinkki").href = "https://fi.wikipedia.org/wiki/Koira";
document.getElementById("koiralinkki").alt = "Koira";


//2. Tässä yritetään lisätä kissalistaan uusi elementti.
// Korjaa toimivaksi.

const ol = document.querySelector('ol');
const kissalisays = document.createElement('li');
kissalisays.innerText = 'Kissat pärjäävät mainiosti yksinäänkin.';
ol.appendChild(kissalisays)


//3. Tässä yritetään lisätä koiralistaan uusi elementti. 
// Korjaa toimivaksi.

const ul = document.getElementsByTagName('ul')[0];
const koiralisays = document.createElement('li');
koiralisays.innerText = "Monet koirat palvovat omistajaansa.";
ul.appendChild(koiralisays);


//Event-esimerkki, sama kuin materiaalissa. Toimiiko?
const button = document.querySelector('button');
button.addEventListener('click', function(evt){
  alert('Elementtiä ' + evt.currentTarget.tagName + ' klikattiin');
});



//tuntitehtävä 3, esimerkki
addEventListener("keydown", function(evt){
    console.log(evt.key);
    if (evt.key === "k") {
        alert("Painoit salaista nappia!");
    }
});

const body = document.getElementsByTagName('body')[0];
const p = document.createElement('p');
p.innerText = "This is tesing line";
body.appendChild(p);

const div = document.createElement('div');
const h1 = document.createElement('h1');
h1.innerText = "This is tesing heading";
body.appendChild(div);
div.appendChild(h1);

const li = document.createElement('ol');
const ol1 = document.createElement('li');
ol1.innerText = "number one"
const ol2 = document.createElement('li');
ol2.innerText = "number two"
div.appendChild(li);
li.appendChild(ol1);
li.appendChild(ol2);

