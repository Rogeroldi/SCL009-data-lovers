/* Manejo de data */
//declaramos variable 


  const pokedexType = (codePoke, condition) => {
    const pokeByFilter = codePoke.filter(element => {
  
      return element.type.includes(condition);
      
    });
  
    return pokeByFilter;
  
  }
  window.pokedexType = pokedexType;
  
  //Funcion ordenar
  const arrPoke= (codePoke, condition) => {
    arrPoke.sort(function (a,b ) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      
      return 0;
    });

  }

  let searchName = searchName.map(function (search, index, array) {
 
    return searchNumber; 
 
});
  
 /* function getPokemonByName(name) {
    var pokemonList = POKEMON.pokemon; //pokrmonlist es la variable que guardara el pokemon que se busque
    for (let i = 0; i < pokemonList.length; i++) {
      if (pokemonList[i].name.toLowerCase() == name.toLowerCase())
        return (pokemonList[i]);
    }
    return ("No existe ese Pokemon");
  }
  
  
  function getPokemonById(id) {
  
    let pokemonList = POKEMON.pokemon;
    for (let i = 0; i < pokemonList.length; i++) {
      if (pokemonList[i].id == id)
        return (pokemonList[i]);
    }
    return ("No existe ese Pokemon");
  }
  
  function getPokemonByType(type) {
    let pokemonList = POKEMON.pokemon;
    let foundList = [];
    for (let i = 0; i < pokemonList.length; i++) {
      for (let j = 0; j < pokemonList[i].type.length; j++) {
        if (pokemonList[i].type[j].toLowerCase() == type.toLowerCase())
          foundList.push(pokemonList[i]);
      }
    }
    if (foundList.length > 0)
      return (foundList);
    return ("No existen pokemones asociados a ese tipo");
  }
  
  function getPokemonByWeakness(weaknesses) {
    let pokemonList = POKEMON.pokemon;
    let foundList = [];
    for (let i = 0; i < pokemonList.length; i++) {
      for (let j = 0; j < pokemonList[i].weaknesses.length; j++) {
        if (pokemonList[i].weaknesses[j].toLowerCase() == weaknesses.toLowerCase())
          foundList.push(pokemonList[i]);
      }
      if (foundList.length > 0)
        return (foundList);
    return ("No existen pokemones asociados a esa debilidad");
  };
  }*/
