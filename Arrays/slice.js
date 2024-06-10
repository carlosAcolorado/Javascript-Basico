const animal= ['ant','bison','camel','duck','elephant']
console.log(animal.slice(2))
console.log(animal.slice(2,4))
console.log(animal.slice(1,6))
console.log(animal.slice(2,-2))

//crear una copia con spread operator sin modificar el array original

const originalArray = [1,2,3,4,5]
const copiaArray = [...originalArray]

//combinar un array
const array2 = [6,7,8,9]
const arrayCombinado = [...originalArray,...array2]
console.log(arrayCombinado)

//pasar parametros con spread operator

function sum (a,b,c,d){
    return a+b+c+d
}
console.log(sum(...array2))