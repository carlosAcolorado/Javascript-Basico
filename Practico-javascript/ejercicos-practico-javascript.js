// Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
let nombre = "Carlos Andres"
let apellido =  "Colorado Qintero"
let nombreUsuarioPlatzi = "CarlosColorado"
let edad = 32
let correoElectronico = "caancoqu@gmail.com"
let mayorEdad = true
let dineroAhorrado = 1000000
let deudas = 500000


//Nombre completo (nombre y apellido)
//Dinero real (dinero ahorrado menos deudas)
console.log(nombre + " " + apellido )
console.log (dineroAhorrado - deudas)
//opcion 2
console.log (`Mi nombre completo es ${nombre} ${apellido}`) 
/*template literals La interpolación de cadenas 
es una característica de JavaScript que permite incrustar expresiones 
dentro de literales de cadena. Al usar las llaves ${variable}*/


//strings
const name = "Juan David"
const lastname = "Castro Gallego"
const completeName = name + ' ' + lastname
const nickname = "juandc"

function nomCompleto(name, lastname){
    return name + ' '+ lastname
}

function nombreCompleto (completeName,nickname){
    console.log(`Mi nombre es ${completeName}, pero prefiero que me digas "${nickname}".`)
}

nombreCompleto(completeName,nickname) 


//opcion 2 funciones

/*function nombreCompleto(name, lastName,username) {
    return name + ' ' + lastName
}

function saludo(name, lastname, username) {
    const completeName = nombreCompleto(name, lastname);

    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + username + ".");  
}
*/

//condicionales
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion==="Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if (tipoDeSuscripcion==="Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
else if (tipoDeSuscripcion==="Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else{
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}   
  

//ciclos

//1
let contador = 0
while (contador <5){
    console.log("El valor i es: " + contador)
    contador++
}

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

//2
let i = 10
while (i >=2){
    console.log("El valor i es: " + i)
    i--
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

//recibiendo un array e imprimiendo su primer elemento
function impriendo (array){
   console.log(array[0]) 
}

let lista = [25,56,84]

impriendo(lista)

// recibiendo un array e imprimiendo cada elemento 
let list = ["eat","sleep","code","repeat"]

function elementos(array){
    array.forEach((item)=>{
        console.log('*'+item)
    })
}

elementos(list)

//imprimiendo cada objeto

 let frutas = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1
 }

function imprimirObjetos(objeto){
    for (i in objeto){
        console.log(i)
    }
}

imprimirObjetos(frutas)

