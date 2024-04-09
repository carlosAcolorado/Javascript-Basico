let persona1 = {
    nombre : 'Juan',
    apellido: 'Perez',
    nombreCompleto : function(titulo,tel){
        return titulo +': '+this.nombre + ' '+ this.apellido+', '+tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

//metodo call
console.log(persona1.nombreCompleto('Doctor','3479078')); 
console.log(persona1.nombreCompleto.call(persona2,'Ingeniero','2214582'))


//Metodo apply
console.log(persona1.nombreCompleto('Doctor','3479078'));
//se usa un array para pasarlo como argumento del metodo
let arreglo = ['Ingeniero','2214582']
console.log(persona1.nombreCompleto.apply(persona2,arreglo)); 