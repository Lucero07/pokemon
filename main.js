function Pokemon(nombre,color, poderDeAtaque) {
  this.nombre = nombre;
  this.color = color;

  this.nivelDeAmisad = 0;

  this.vida = 100;
  this.poderAtacar= poderDeAtaque;

  this.saludarPokemon=function(){
    return ('Hola, soy:' + this.nombre +'y soy de color: '+ this.color)
  }
  this.aumentarAmistad= function (valor) {
    this.nivelDeAmisad = this.nivelDeAmisad + valor;
      }
  this.atacar = function (pokemon) {
    pokemon.vida = pokemon.vida - this.poderAtacar;
  }
}
var pikachu = new Pokemon("pikachu","amarillo",100);
var charmander = new Pokemon("charmander","rojo",20);

console.log(pikachu.saludarPokemon());
pikachu.atacar(charmander);
console.log(charmander.vida);



var pokemons= [];

function crearPokemon() {
  var nombrePokemon = document.getElementById("nombrePokemon");
  var colorPokemon = document.getElementById("colorPokemon");
  var puntosAtaque = document.getElementById("puntosAtaque");
  var pokemon = new Pokemon(nombrePokemon.value,
                            colorPokemon.value,
                            parseInt(puntosAtaque.value))

    pokemons.push(pokemon);
    mostrarPokemons();

}
var lista = document.createElement("select");
function mostrarPokemons() {
  var listaPokemons = document.getElementById('listaPokemons')
//  var lista = document.createElement("select");
  console.log(lista);
  pokemons.forEach(function (pokemon){
    var elemento = document.createElement('option');
    elemento.innerText = pokemon.nombre + pokemon.color + pokemon.poderAtacar;
lista.appendChild(elemento);
  })
  listaPokemons.appendChild(lista);
};
