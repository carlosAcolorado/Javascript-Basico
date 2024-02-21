/*duplicar codigo debe evitarse porque implica
mantenimiento dificil
aumento de la complejidad
mayor probabilidad de errores
dificultad de escalar
tiempo y recursos
violacion de principios de diseño
dificultad de identificacion de errores
principio DRY dont repeat yourself*/


//la constructora es recomendado que cominece con mayuscula
function Rocket (name,ownMessage){
    this.name = name 
    this.launchMessage = () =>{
        console.log(ownMessage)
    }
}

//instancia del objeto rocket
const falcon9Rocket = new Rocket('Falcon 9','Nos vamos')
const falconHeavyRocket = new Rocket('Falcon Heavy', 'Hasta pronto')

console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchMessage())

//objeto creado con arrow function
const RocketWithArrowFuntcion = (name, ownMessage) => ({
    name:name,
    launchMessage: ownMessage
})//se crea objetos con arrow function usando unos parentes antes de las llaves y despues de las flechas

const personalizedMessageForArrowFunction = ()=> 'Success Message'
const falcon9Rocket1 =  RocketWithArrowFuntcion('FalconTurbo',personalizedMessageForArrowFunction )
console.group(falcon9Rocket1.name)  
console.group(falcon9Rocket1.launchMessage())



//practica

const MiPrueba = (nombre,edad,ciudad) =>({
    nombre: nombre,
    edad: edad,
    ciudad : ciudad
})

const datos = MiPrueba ('Carlos Andres',25,'Pereira')
console.log(datos.nombre,datos.edad, datos.ciudad)//se puede usar un console.log para que salga en una sola linea 