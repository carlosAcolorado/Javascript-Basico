'use strict'


try{
    let resultado = 'hola'
    if(isNaN(resultado)) throw 'No es un numero'
   //else if(resultado==='') throw 'Es una cadena vacia'
    //else if (resultado >= 0) throw 'Valor positivo'
    //else if(resultado <=0) throw 'Es un numero negativo'
}catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}finally{
    console.log('Termina revision de errores')
}