const numbers = [1,2,3,4,5]

//includes()
const result1 = numbers.includes(3) //muestra si esta o no esta un valor en un array

console.log(result1)//retorna tru o false

//indexof()

const fruits=['mango','pera','manzana']
const indice = fruits.indexOf('mango')
console.log(indice) //devulve el indice de un valor 
//en caso de no estar ese vaor devuelve -1

//lastindexof()

const numeros = [1,4,5,8,2,9,7,4,6,3]
const ultimo = numeros.lastIndexOf(2)
console.log(ultimo) //si ese valor no existe devuelve -1

//encontrando indices

const stringArray = ['apple','banana','orange','grape','banana','kiwi']
const buscar = 'banana'

function findIndex(target,array){
    const verificar = array.includes(target)
    if (verificar){
        return {
            Primera:array.indexOf(target), Ultima: array.lastIndexOf(target)
        }
    }else{
        return -1
    }
        
}

console.log(findIndex(buscar,stringArray))