/*
for in --> objetos
propiedas= valor
para iterar sobre las propiedades o los valores 
para iterar sobre objetos enumerables
for (variable in obejeto){
    codigo
}
*/


const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1
}

for (fruta in listaDeCompras){
    console.log(fruta)
}

for (fruta in listaDeCompras){
    console.log(`${fruta} : ${listaDeCompras[fruta]}`) 
    /*la variable fruta contiene el nombre de la propiedad que se está accediendo 
    dinámicamente. En otras palabras, la notación de corchetes permite 
    acceder a una propiedad cuyo nombre está almacenado en una variable.*/
}

