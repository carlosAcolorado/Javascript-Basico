const numeroSecreto = Math.floor(Math.random()  * 10 + 1) //construye numeros aleatoriso del 10 al 1

const numeroJugador = parseInt(prompt('Advina el numero secretro emtre 1 al 10'))

console.log(`este es el número con el que juegas ${numeroJugador}`)



if(numeroJugador === numeroSecreto){
    console.log('¡Felicidades, adivinaste el numero secreto!')
}else if (numeroJugador <numeroSecreto){
    console.log('El numero es demasiado bajo, intenta de nuevo')
}else {
    console.log('El numero es muy alto, intenta de nuevo')
}