//juego de piedra papel o tijera
let jugadas= ["piedra","papel","tijera"];
let jugada_usuario=  Math.floor(Math.random() * jugadas.length);
let jugada_cpu = Math.floor(Math.random() * jugadas.length);
let usuario = jugadas[jugada_usuario];
let cpu = jugadas[jugada_cpu];

function prueba(maquina,jugador){
    if (maquina === jugador ){
        console.log(`¡HAY UN EMPATE! Maquina ha jugado ${maquina} y Jugador ha jugado ${jugador}`);
    }else if (maquina==="piedra" && jugador === "tijera" || maquina === "papel" && jugador === "piedra" || maquina === "tijera" && jugador==="papel"){
        console.log(`¡MAQUINA A GANADO! ha jugado ${maquina} y Jugador ha jugado ${jugador}`);
    }else {
        console.log(`¡JUGADOR HA GANADO! ha jugado ${jugador} y Maquina ha jugado ${maquina}`);
    }
}
prueba(cpu,usuario)