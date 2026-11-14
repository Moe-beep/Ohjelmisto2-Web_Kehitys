async function fetchData(){
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        if(response.ok){
            const response_data = await response.json();
            return response_data;
        } else {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function createPokemonView(){
    let lupaus = await fetchData();
    const pokemonDiv = document.querySelector('#pokemon');
    for(let pokemon of lupaus.results){
        let pokemonText = document.createElement('p');
        pokemonText.textContent = pokemon.name;
        pokemonText.id = pokemon.name;
        pokemonText.addEventListener('click', async () => {
            createPokemonDetailView(pokemon.name);
        });
        pokemonDiv.appendChild(pokemonText);
    }
}

async function fetchpokemonData(pokemonName){
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(response.ok){
            const pokemonData = await response.json();
            return pokemonData;
        } else {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
    }
}


async function createPokemonDetailView(pokemonname){
    let lupaus = await fetchpokemonData(pokemonname);
    let pokemonDetailDiv = document.createElement('div');
    pokemonDetailDiv.innerHTML = `
        <h2>${lupaus.name}</h2>
        <img src="${lupaus.sprites.front_default}" alt="${lupaus.name}">
        <p>Type: ${lupaus.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
    `;
    document.querySelector(`#${pokemonname}`).appendChild(pokemonDetailDiv);
}

createPokemonView();