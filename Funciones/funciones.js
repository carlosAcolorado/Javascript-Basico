//funciones declarativas

function miFuncion (){
    return 3;
/* si debajo del return se escribe algun codigo este 
nunca se ejecutara ya que el return 
finaliza la ejecucion de la funcion*/
}

function saludarEstudiantes(estudiante) {
    console.log(`hola ${estudiante}`);
}
//`` alt + 96 para tildes invertidas

//funciones de expresion

var miFuncion = function(a,b){
    return a + b;
};

function sumar (a,b){
    var  resultado =  a + b;
    return resultado;
} 


var miNombre = "Carlos";

function nombre (){
    var miApellido = "Colorado"
    console.log("Mi nombre es: "+ miNombre +" " + miApellido);
}

nombre()


function solution(secreto) {
    var a = secreto > 5;
      return a
  }

  //mas comprimida
  function solution(secreto) {
    return  secreto > 5;
}

  solution(1)
  
  //tablas de multiplicar 
  function tablaDeMultiplicar(numero) {
    console.log("Tabla de multiplicar del: "+ numero)
    
    for (let i = 0; i <= 10; i++) console.log(`${numero} * ${i} = ${numero * i}` );
  }
  tablaDeMultiplicar(4)



  //funciones callback
  // fB = Función B (callback)
const fB = function () {
    console.log("Función B ejecutada.");
  };
  
  // fError = Función Error (callback)
  const fError = function () {
    console.error("Error");
  };
  
  // fA = Función A
  const fA = function (callback, callbackError) {
    const n = (Math.random() * 5);
    if (n > 2) callback();
    else callbackError();
  };
  
  fA(fB, fError); // Si ejecutamos varias veces, algunas darán error y otras no