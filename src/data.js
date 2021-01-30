/*El corazón de este proyecto es la manipulación de datos a través de arreglos y objetos.
Este archivo contiene toda la funcionalidad que corresponda a:
Obtener.
Procesar.
Manipular datos.
Funciones Como:
- FilterData(data, condition): Filter recibira la data, y retornará aquellos datos que cumplan con la condición.
- SortData(data, sortBy, sortOrder): Sort u ordenar recibe tres parámetros. 
    data, nos entrega los datos.
    sortBy, nos dice cuál de los campos de la data se quiere ordenar. 
    sortOrder, indica si se quiere ordenar de manera ascendente o descendente.
-computeStats(data): Permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.
Las funciones son independientes del DOM y serán usadas desde src/main.js para:
 -cargar la página
 -cada vez que el usuario interactúe (click, filtrado, ordenado, ...).*/
 import data from './data/pokemon/pokemon.js';

export function printData (){
  let tarjets =""
  let pokemons=data.pokemon.forEach(p=>{
    tarjets +=`
    <div class="pokemon"></div>
    <img src ="${p.img}">
    <h2 class = "card-title">${p.name}</p>
    <p class = "card-text">${p.num}</p
    <p class = "card-text">${p.type}</p>
    </div>`
    tarjetas.innerHTML=tarjets;
  });
  return pokemons
}
/*función que muestra la card*/
 export function filterGeneration(zone){
  let tarjets =""
   let pokemonsFiltered=data.pokemon.filter((unSoloBenditoPokemon)=>{
    tarjets +=`
    <div class="pokemoncard">
    <img src =${unSoloBenditoPokemon.img} class="circle"/>
    <div class="rectangle">
    <h4 class = "card-text">${unSoloBenditoPokemon.name}</h4>
    <h5 class = "card-text">${unSoloBenditoPokemon.num}</h4>
    <h5 class = "card-text">${unSoloBenditoPokemon.type}</5></div>
    </div>
    `;
    filterkanto.innerHTML=tarjets;
     return unSoloBenditoPokemon.generation.name===zone
   })
   return pokemonsFiltered
 }

 export function filterType(type){
   let pokemonsType=data.pokemon.filter((unSoloBenditoPokemon)=>{
     return unSoloBenditoPokemon.type[0]===type
   })
   return pokemonsType
 }
