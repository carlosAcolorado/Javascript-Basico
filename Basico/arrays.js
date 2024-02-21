var frutas = ["Manzana", "Platano","Cereza","Fresa"];
console.log(frutas) //imprime el valor del array
console.log(frutas.length)//imprime la longitd del array
console.log(frutas[0])//imprime manzana que esta en el indice 0

var masFrutas = frutas.pus("Uvas") //añade elementos al final del array
var ultimo = frutas.pop("Uvas");//elimina el ultimo elemento del array
var longitud = frutas.unshift("Uvas"); //pone un nuevo al elemento al incio del array
var borrarFruta = frutas.shift("Uvas"); //elmina el primer elemento del array
var posicion = frutas.indexOf("Cereza"); // nos regreda la posicion de la palabra cereza


export function solution(arraySecreto) {
    return(typeof arraySecreto[0] === "string"? true: false)
  }

  // retorna tru o false si el valor en el indice cero es string u otro tipo de dato