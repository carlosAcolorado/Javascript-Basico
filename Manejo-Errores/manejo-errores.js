'use strict' //obligatorio para poder manejar errores 

try{
    
   x=1
   
   throw 'Hay un error en el programa'//alt + flecha
}
catch(error){

    console.log(error)
}
finally{
    console.log('termina la revision de errores')
}

console.log('continuamos..');

