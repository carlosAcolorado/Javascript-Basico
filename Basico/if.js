if (false){
    console.log("hola");
}else {
    console.log("soy negativo")
}

var edad = 18;

if (edad === 18){
    console.log("Puedes votar, sera tu primera votación");
}else if (edad > 18){
    console.log("Puedes votar de nuevo");
}else{
    console.log("No puedes votar es menor de 18 años");
}

// if de una linea condicion ? true : false  
//operador ternario uso princpal validaciones pequeñas, no sustiye if, en validaciones complejas se usa el if 
//el simbolo  "?"  sirve para definir una condición, el resultado cuando se cumple y cuando no se cumple, en una sola línea

var numero = 1;
var resultado = numero === 1 ? "si soy un uno": "No soy uno"

const edad = 20
const mensaje = edad >=18 ? "Es mayor de edad, Pueda pasar": "Es menor de edad no pueda pasar"
console.log(mensaje)

//juego de piedra, papel o tijera

var jugadas= ["piedra","papel","tijera"];
var jugada_usuario=  Math.floor(Math.random() * jugadas.length);
var jugada_cpu = Math.floor(Math.random() * jugadas.length);
var usuario = jugadas[jugada_usuario];
var cpu = jugadas[jugada_cpu];

function prueba(jugador,maquina){
    if (maquina === jugador ){
        console.log(`¡HAY UN EMPATE! maquina ha jugado ${maquina} y jugador ha tirado ${jugador}`);
    }else if (maquina==="piedra" && jugador=="tijera" || maquina==="papel" && jugador==="piedra" || maquina === "tijera" && jugador==="papel"){
        console.log(`¡MAQUINA A GANADO! ha tirado ${maquina} y jugador ha tirado ${jugador}`);
    }else {
        console.log(`¡JUGADOR HA GANADO! ha tirado ${jugador} y jugador ha tirado ${maquina}`);
    }
}

prueba(usuario,cpu);