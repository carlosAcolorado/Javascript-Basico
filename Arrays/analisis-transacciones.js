const transacciones = [
    {
        id:1,descripcion:'Pago arriendo',Total:-50
    },
    {
        id:2,descripcion:'Salario',Total:2000
    },
    {
        id:3,descripcion:'Servicios',Total:-100
    },
    {
        id:4,descripcion:'Compra',Total:-30
    }
]


//saldo total
const saldoTotal = transacciones.reduce((acc,transacciones)=>acc +transacciones.Total,0)
console.log('Saldo total: ',saldoTotal)

//transaccion mas alta
const TransaccionMasAlta = transacciones.reduce((maximaTransaccion,transacciones)=>{
    return Math.abs(transacciones.Total)>Math.abs(maximaTransaccion.Total)? transacciones:maximaTransaccion
},transacciones[0])
console.log('La transaccion mas larga es: ',TransaccionMasAlta);

//filtrando trasacciones salientes
const transaccionesSalientes = transacciones.filter( salidas => salidas.Total < 0)
console.log('Salidas: ',transaccionesSalientes);

//Transaccion por descripcion
function transaccionDescripcion(transaccion){
    const transaccionEspecifica = transacciones.find(transacciones => transacciones.descripcion===transaccion)
return transaccionEspecifica || 'Transaccion no encontrada'
}
console.log(transaccionDescripcion('Salario'))

//encontrar indice de transaccion por monto
function indiceTransaccion(monto){
    const indiceTransaccion = transacciones.findIndex(transaccion =>transaccion.Total === monto)
    return indiceTransaccion !==-1 ? `Indice transaccion: ${indiceTransaccion}`: 'No se ha realizado una transaccion por ese monto'
}
console.log(indiceTransaccion(-50));

//actualizar descripcion de transaccion
transacciones.forEach(transaccion=>{
    if (transaccion.Total<0){
        transaccion.descripcion = `Salidas: ${transaccion.descripcion}`
    }else{
    transaccion.descripcion = `Entradas: ${transaccion.descripcion}`
    }
})

console.log('Trnsacciones actulizadas: ',transacciones)