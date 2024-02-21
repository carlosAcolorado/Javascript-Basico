let x = 1
let y = 'hola'
let z = null

let a = x
let b = y
let c = z

console.log(x,y,z,a,b,c)
a = 12 
b = 'Platzi'
c = undefined

//esto se llama paso por valo simplemente se cambia el valor de una varible sin consecunecias en memoria 


let frutas = ['manzana']
frutas.push("pera")
console.log(frutas)

let panes = ["pan"]
let copiaPanes = panes.slice()/*con este metodo se puede crear una copia independiente 
del array y se pueden usar de manera independiente */
panes.push("arroz")
console.log(panes,copiaPanes)