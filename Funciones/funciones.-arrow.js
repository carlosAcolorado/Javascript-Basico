//no se puede hacer uso de la funcion flecha sin antes haberla

const greeting = function (name){
    return `Hi, ${name}`
}

const newGreeting =(name) => {
    return `Hi, ${name}`
}

//funcion flecha implicit return 
const newGreetingImplicit = name =>`Hi, ${name}` // cuando es un parametro se pueden quitar los parentesis
const greetingImplicit = (name,apellido) =>`Hi, ${name} ${apellido}`

//lexical binding
const functionalCharacter = { 
    name : 'Uncle Ben',
    messageWithTraditionalFunction: function (message){
        console.log(`${this.name} says: ${message}`)
    }, 
    messageWithArrowFunction: (message) =>{
        console.log(`${this.name} says: ${message}`) //el this en la arrow function no se toma en cuenta
    }
}

functionalCharacter.messageWithTraditionalFunction('Tu poderes llevan responsabilidades')
functionalCharacter.messageWithArrowFunction('un mensaje que te motive es un buenos dias')


const saludar = () =>{
    return 'saludo desde funcion flecha'
}

const saludo = ()=> 'saludos dese esta funcion flecha'
console.log(saludar());

const regresarObjetos = ()=> ({nombre:'carlos',apellido:'colorado'})
console.log(regresarObjetos())