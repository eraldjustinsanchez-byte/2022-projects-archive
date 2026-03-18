const pokedex = document.getElementById("pokedex");              //getting the element of the ordered list

console.log(pokedex)

const fetchPokemon = () => {                                     //it's like myfunction()

    const promises = [];                                        //variable for array
    for (let i = 1; i < 150; i++) {                               //a for loop for data 1-150 pokemon
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;       //url for api  //the "$" in {i} is an object identifier, it's the same way as a variable does
        promises.push(fetch(url).then((res) => res.json()));        //promises is an object representing the eventual completion or failure of an asynchronous operation
        // .push is to push the data in the array //fetch() is to request a data from an api
        //.then() is an api call back like an execution //.json is a js object notation, it store and transport data

    }
    Promise.all(promises).then(results => {                     //Promise.all(promises) getting all the data in the array and put it in the variable results using .then   //Promise.all method takes an iterable of promises as input and returns a single Promise
        const pokemon = results.map(data => ({                  //.map holds key-value pairs where the keys can be any data type and A Map remembers the original insertion order of the keys

            name: data.name,                                    //getting the name in the api
            id: data.id,                                        //getting the id in the api
            image: data.sprites['front_default'],               //getting the sprits/image in the api
            type: data.types.map((type) => type.type.name).join(', ')      //getting the type in the api //.join(', ') to convert the array to string

        }))
        displayPokemon(pokemon);
    })


}
const displayPokemon = (pokemon) => {                           //displaying pokemon in the html
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(                                                  //mapping the pokemon in pokemonHTMLString and the function of the pokeman
            (pokeman) =>
                `
    <li class= "card">
        <img class = "card-image" src="${pokeman.image}"/>             
        <h2 class = "card-title">${pokeman.id}. ${pokeman.name} </h2>
        <p class = "card-subtitle">Type: ${pokeman.type}</p>
    </li> 
    `
        )                                                       //pokeman.image, pokeman.id, pokeman.name, pokeman.type displays the image, id, name, type of the pokemon in the HTML
        .join('');
    pokedex.innerHTML = pokemonHTMLString;                      //inserting/printing the document in the HTML
}

fetchPokemon();                                                 //runs the fetchPokemon() function