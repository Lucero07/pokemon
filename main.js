var pokemons= []; //arreglo contenedor de objetos
//Constructor Clase Pokemon
function Pokemon(nombre,color, poderDeAtaque) {
  this.nombre = nombre;
  this.color = color;
  this.nivelDeAmisad = 0;
  this.vida = 100;
  this.poderAtacar= poderDeAtaque;
  this.saludarPokemon=function(){
    return ('Hola, soy:' + this.nombre +'y soy de color: '+ this.color)
  };
  this.aumentarAmistad= function (valor) {
    this.nivelDeAmisad = this.nivelDeAmisad + valor;
  };
  this.atacar = function (pokemon) {
    pokemon.vida = pokemon.vida - this.poderAtacar;
  };
};

// creando el objeto
function crearPokemon() {
  var nombrePokemon = document.getElementById("nombrePokemon");
  var colorPokemon = document.getElementById("colorPokemon");
  var puntosAtaque = document.getElementById("puntosAtaque");
  var pokemon = new Pokemon(nombrePokemon.value,
                            colorPokemon.value,
                            parseInt(puntosAtaque.value));

    pokemons.push(pokemon); //agrega el objeto a el arreglo contenedor
    mostrarPokemons();
    mostrarPokemons1();
    //limpiar las cajas de entrada
    document.getElementById("nombrePokemon").value ="";
    document.getElementById("colorPokemon").value ="";
    document.getElementById("puntosAtaque").value ="";
};

var lista = document.createElement("select");
var lista1 = document.createElement("select");

//generando el selector y sus opciones
function mostrarPokemons() {
  var listaPokemons = document.getElementById('listaPokemons');
  var elemento = document.createElement('option');
  pokemons.forEach(function (pokemon){
    elemento.innerText = pokemon.nombre;
    lista.appendChild(elemento);

  });
  listaPokemons.appendChild(lista);
};

// segundo select

function mostrarPokemons1() {
  var listaPokemons1 = document.getElementById('listaPokemons1');
  var elemento1 = document.createElement('option');
  pokemons.forEach(function (pokemon){
    elemento1.innerText = pokemon.nombre;
    lista1.appendChild(elemento1);
  });
  listaPokemons1.appendChild(lista1);
  console.log(elemento1);
};

// creando el ataque
function ataque() {
console.log(pokemons);

  // var listaPokemons1 = document.getElementById('listaPokemons1');
  // listaPokemons.atacar(listaPokemons1)
  // console.log(listaPokemons1.vida);



  var pikachu = pokemons[0];
  var charmander = pokemons[1];
  function pikachu(){
    var pikachu = new Pokemon("pikachu","amarillo",100);

  }
  function pokemon1(){
    var charmander = new Pokemon("charmander","rojo",20);
  }

  console.log(pikachu.saludarPokemon());
  pikachu.atacar(charmander);
  console.log(charmander.vida);

}
