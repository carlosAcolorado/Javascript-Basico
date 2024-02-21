const snoopy = null
console.log(snoopy)
console.log(typeof snoopy)

//undefined
let name 
console.log(name)

//symbol valores unicos
const uniqueId = Symbol('id')
const symbol1= Symbol(1)
const symbol2 = Symbol(1)
console.log(symbol1 === symbol2) // nos arroja un false ya que sea crean identificadore unicos


const ID = Symbol('id')
let user = {}
user [ID]= '1234'
console.log(user)

//bigInt -> expresiones muy grandes
const bigNumber = 516511515151518495234752n

/*proporciona una forma concisa de expresar la selección de un valor 
predeterminado cuando un valor es null o undefined.
 Este operador es representado por ??.
 El operador de fusión nula es especialmente útil cuando deseas proporcionar un valor 
 predeterminado solo cuando el valor original es null o 
 undefined, pero no cuando es falsy (como 0, false, o una cadena vacía).*/

const nombre = null;
const nombrePredeterminado = "Invitado";

// Utilizando el operador de fusión nula para asignar un valor predeterminado
const nombreUsuario = nombre ?? nombrePredeterminado;

console.log(nombreUsuario); // Imprimirá "Invitado" porque `nombre` es `null`

