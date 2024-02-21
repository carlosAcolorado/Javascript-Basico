// funciones puras, dada una entrada pruduce la misma salida
//side Effects hace la funciones dejen de ser puras
/* 1.modificar variables globales
2. Modificar parametros
3.solicitudes HTTP
4.imprimir mensajes en pantalla o consola
5.manipulacion del DOM
6.obtener la hora actual
*/

function sum (a,b){ // siempre la salida sera la misa, no se modifica nada
    return a+b
}

//funciones impuras
function sum (a,b){
    console.log('A: ',a)
    return a + b
}

let contador = 0
function sumWithSideEffect (a){ // la variable global se va modificando

    total += a
    return total
}

//funcion pura

function square (x){
    return x*x
}

function addTen(y){
    return y + 10
}

//sigue siendo una funcion pura a pesar de combinar 2 funciones
const number= 5 
const finalResult= addTen(square(number))
console.log(finalResult)
