var nombre = "Carlos Andres Colorado";
var edad; // declarando un a varible para luego darle un valor
edad = 30 ;// dandole valor a la variable

var elementos = ["computadora", "celular","aspiradora"];

var persona = {
    nombre : "diego",
    edad: 30};

//hoisting se debe declarar primero la varible, en este caso como la varibale no se a declarado, javascript lo hace con undefine
//al inicio de la ejecucion

console.log(miNombre);

miNombre = "Carlos";

// en ese caso no ocurre el hoisting ya que las funciones pueden colocarse arriba sin ser declaradas
//pero las variables si deben ser declaradas para obtener el resultado esperado
hey();

function hey (){
    console.log("Hola "+ miNombre)
};

var miNombre = "Carlos"

//coersion implicita
var a = 4 + "7" // 47 
var b = 4 * "7" // 28 

//coersion explicita 
var a = 20;
var b = a + "" //20

var c = String(a)  // obligamos a la variable a convertirse en un string
var d = Number(c) // convertirmos la variable en un numero


let cajaDeAndy = 'Woody'

console.log(cajaDeAndy)