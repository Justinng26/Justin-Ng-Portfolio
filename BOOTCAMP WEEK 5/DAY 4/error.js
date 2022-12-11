


const pokemonURL = 'https://pokeapi.co/api/v2/pokemon/3000/';

fetch(pokemonURL)
  .then( (res) => {
    if (res.ok){
        return res.json();

    } else {
        throw new Error("uh oh");
    }
    // return res.json();
  })
    .then( (jsonData) => {
        console.log(jsonData);
    })
    .catch((Error) => {
        console.log(Error)
    });

