//datos inmutables
let numero = 15
numero = numero + 10
console.log (numero)        

let esVerdero = true
esVerdero = false
console.log(esVerdero)

let usuario = { nombre: 'pepito', edad:  20}
usuario.edad = 50
console.log(usuario)

function cambiarNombre (objeto){
    objeto.nombre = "Nuevo nombre"
}
let persona = { nombre: 'carlos'}
cambiarNombre(persona)
console.log(persona)