

const names = []
document.getElementById("Submit").addEventListener("click", () => {


    let nameInput = document.querySelector("#name")
    let name = nameInput.value
    names.push(name)

    let teksti = document.getElementById("text")
    teksti.textContent = `There are ${names.length} names in list`;
}
)

document.getElementById("print").addEventListener("click", () => {  
    for (let i = 0; i < names.length; i++) {
        console.log(`${names[i]},`);

    let list = document.getElementById("list")
    let listname = ""
    for(const name of names){
        listname += name + ","
    }

    list.textContent = listname
}
})