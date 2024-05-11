var frutas = ["Manzana", "Platano","Cereza","Fresa"];
console.log(frutas) //imprime el valor del array
console.log(frutas.length)//imprime la longitd del array
console.log(frutas[0])//imprime manzana que esta en el indice 0

var masFrutas = frutas.push("Uvas") //añade elementos al final del array
var ultimo = frutas.pop("Uvas");//elimina el ultimo elemento del array
var longitud = frutas.unshift("Uvas"); //pone un nuevo al elemento al incio del array
var borrarFruta = frutas.shift("Uvas"); //elimina el primer elemento del array
var posicion = frutas.indexOf("Cereza"); // nos regreda la posicion de la palabra cereza

//quita elementos del array a partir del indice 2
let removedFruits = frutas.splice(2,2,'Coco')
console.log(frutas)

//intercambia el orden del array
let intercambiarOrden = frutas.reverse()
console.log(frutas)

//ordena el array alfabeticamente
let PalabrasOrdenadas =frutas.sort()
console.log('Array ordenado alfabeticamente: '+ PalabrasOrdenadas)

export function solution(arraySecreto) {
    return(typeof arraySecreto[0] === "string"? true: false)
  }
  // retorna tru o false si el valor en el indice cero es string u otro tipo de dato

  //Ordenando los numeros 
  const unsortedNumbers1 = [4,18,1,62,34]
  console.log(unsortedNumbers1)
  const sortedNumbers = unsortedNumbers1.sort((a,b)=>a -b)//esta funcion va comparando los numeros para poder ordenar
  console.log(sortedNumbers)

  

  let myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle"; 

  let myArray = myData.split('');//crea un array donde cada palabra se vuelve un elemento del array 
  console.log(myArray);
  
//fill llena un array con los parametros que indiquemos
  let edades = [25,53,14,41]
  console.log(edades.fill(15,2,3)) //llenara el array a partir del indice 2 con el numero quince hasta la posiocion 3