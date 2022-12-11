// create our namespace object
const pokemonApp = {};

// make a call to the api
pokemonApp.getPokemon = () => {
  // what we need for our fetch request:
  // url endpoint (new URL)
  const url = new URL("https://pokeapi.co/api/v2/");

  // search parameters
  // url.search = new URLSearchParams({

  // });

  // fetch()
  fetch(url)
    .then((res) => {
      // console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
  // .then() x 2
  // .json()
};

pokemonApp.init = () => {
  console.log("ready to go!");
  pokemonApp.getPokemon();
};

// calling init
pokemonApp.init();