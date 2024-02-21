let palabraOculta = "javascript"

let intentos = 3

function verificarSuposicion(suposicion,palabraOculta){
    if (suposicion.toLowerCase() === palabraOculta){ // tolowerCase en caso de que el usuario ingrese mayusculas
        return true
    }
    return false
} // buscamos obtener el true el false comparando las palabras


function jugarAdivinaLaPalabra (){
    alert("Bienvenido a jugar adivina la palabra oculta")
    alert("Tienes 3 intentos para adivinar la palabra")
    alert("-pista- la palabra oculta es un lenguage de programacion")

    while (intentos > 0){ // para verificar que solo tenga los 3 intentos
        let suposicion = prompt("Adivina la palabra ") // le pediomos al usuario que ingrese su palabra

        if(verificarSuposicion (suposicion,palabraOculta)){ //si obtenemos el true al llamar la funcion lanza el mensaje de correcto
            alert("¡Correcto! Has adivinado la palabra")
            break
        }else{
            intentos-- //restamos 1 a la variable intentos
            if(intentos > 0){ // si intentos aun es mayor a cero entonces lanza el mensaje de los intentos restantes 
                alert(`Incorrecto, aun tienes ${intentos} intentos restantes`)
            }else{
                alert(`Agostaste tus intentos, la palabra oculta era "${palabraOculta}"`) //si es igual a cero lanza este mensaje y muestra cual era la palabra oculta
            }
        }
    }
}

jugarAdivinaLaPalabra()
