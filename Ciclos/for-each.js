/*
array.foreach((item)=>{
    codigo a ejecutar
})

sintaxis:  array.forEach(function(elementoActual, indice, array))
*/

let list = ["eat","sleep","code","repeat"]

list.forEach((item)=>{
    console.log(item)
})//es un metodo mas sencillo para recorrer listas


const vocales = ["a", "e", "i", "o", "u"];

vocales.forEach(function (vocal, indice, arr) {
  console.log(`El valor del elemento en la posición ${indice} es ${vocal} del array que estamos recorriendo que es ${arr}`);
}); 