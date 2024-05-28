const morseCode1= ['....','---']// H O
const morseCode2 = ['.-..','.-']// L A


//concat crea un nuevo array

const morseCodedMessage = morseCode1.concat(morseCode2) //para dos arrays 

const morseCodedMessage2 = [].concat(morseCode1,morseCode2) //mas de 2 arrays

console.log(morseCodedMessage)
console.log(morseCodedMessage2)

//Spread Operator crea un nuevo array
function combineMorseMessages (morseCode1,morseCode2){
    console.log([...morseCode1,...morseCode2]) 
}


const numbers =[1,2,3]
const string = 'string hola'

combineMorseMessages(morseCode1,morseCode2)
combineMorseMessages(string,numbers) 

const mensaje = morseCodedMessage.join('o/') //convierte a string

//aqui concat convierte cada letra del string incluyendo el espacio en un indice de un nuevo array 
const mensaje2 = numbers.concat(string)

console.log(mensaje2[3]


)