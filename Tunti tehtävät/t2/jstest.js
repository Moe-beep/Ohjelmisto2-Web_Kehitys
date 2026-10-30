"use strict";
console.log("This is text is printed to the console.");

let teksti = document.querySelector("#result")
teksti.textContent = "Hei World"

document.getElementById("calc").addEventListener("click", () => {
    let nameInput = document.querySelector("#name")
    let name = nameInput.value
    let hintaInput = document.querySelector("#price")
    let hinta = parseInt(hintaInput.value)
    let maaraInput = document.querySelector("#qty")
    let maara = parseInt(maaraInput.value)
    let promoInput = document.querySelector("#promo")
    let promo = promoInput.value

    let kokonaishinta = maara * hinta
    if(promo == "p"){
        kokonaishinta = kokonaishinta * 0.8
    }
    let teksti = document.getElementById("result")
    teksti.textContent = `${name} Hinta: ${kokonaishinta}`;
})

