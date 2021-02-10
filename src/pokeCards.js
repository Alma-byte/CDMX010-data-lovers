//Main Card template
export let mainCard = (pokemon) =>{
  const structure = `
   <div class="idPokemon" id="${pokemon.num}">
    <article class="pokemon">
    <img class="circle" src ="${pokemon.img}">
    <div class="rectangle">
    <h4 class = "card-text">${pokemon.name}</h4>
    <p class = "card-text">${pokemon.num}</p>
    <p class = "card-text">${pokemon.type}</p></div>
   </div>
  `;
return structure;
} 




