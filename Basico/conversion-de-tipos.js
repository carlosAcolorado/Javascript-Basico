const string = '42'
const integer = parseInt(string)

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)

const binary = '1010'
const decimal = parseInt(binary,2)

//forma implicita

const sum ='5' + 3 //53 convierte  el numero 3 a string y concatena 

const sumWithBoolean = '3' +  true // convirtio el tru a string

const sumWithNumber = 2 + true //convirtio el true a un numero y lo sumo 

const stringValue = '10'
const numberValue = 10 
const booleanValue = true

console.log (stringValue +stringValue)
console.log (stringValue +numberValue)
console.log (stringValue +booleanValue)
console.log (numberValue +numberValue)
console.log (numberValue +stringValue)
console.log (numberValue +booleanValue)
console.log (booleanValue +booleanValue)
console.log (booleanValue +numberValue)
console.log (booleanValue +stringValue)




