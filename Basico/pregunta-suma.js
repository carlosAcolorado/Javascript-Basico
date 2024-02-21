

function verificarSuma(){
    while (true){
        let respuesta = prompt("Cuanto suman 2 + 2 ") 
        respuesta = parseInt(respuesta);
        if (respuesta === 4){
            alert('Felicidades has respondido correctamente')
            break
       
        }else{
            alert('Vamos de nuevo')
        }
    }
}

verificarSuma()

/*En este caso, se usa parseInt() para convertir la respuesta ingresada
 por el usuario a un número entero. Ahora, si el usuario ingresa el número 4, 
el ciclo while se detendrá porque la condición suma === respuesta se cumplirá 
y se ejecutará la instrucción break.*/