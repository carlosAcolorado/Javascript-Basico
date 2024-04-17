//es una funcion que llama a otra funcion

function imprimir(mensaje){
    console.log(mensaje)
}
    
function sumar(op1,op2,funcioncallback){
    let res= op1 + op2
    funcioncallback(`Resultado: ${res}`)
}

sumar(5,3,imprimir)


//ejecutar varios procesos por separado, procesos asincronos
//funcion setTimeout

function mifuncionCallback(){
    console.log('saludo asincrono despues de 3 segundos')
}

//primer parametro funcion callback, segundo parametro, los milisegundos para ejecutar la funcion
setTimeout(mifuncionCallback,3000)

setTimeout(function(){console.log('saludo asincronico despues de 5 segundos')},5000)

setTimeout(()=> console.log('Saludo asincronico despues de 7 segundos'),7000)


//set interval manda llamar la funcion varias veces cada cierto tiempo

let relog = () =>{
    let fecha = new Date()
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()} `)
}

setInterval(relog,1000)//1 segundo