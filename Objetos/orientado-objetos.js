let persona = {
    nombre: 'Juan',
    apellido:'Perez',
    email: 'jperez@gmail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + '' + this.apellido
    }
}

//la forma anterior es la mas comun 
//this es un apuntador al objeto que se esta ejecutando en el momento, utilizando accedemos a las propiedass dentro del objeto
//se crea un objeto en memoria
//pueden tener distintas propiedades
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.nombreCompleto());

//forma 2 de crear objetos

let persona2 = new Object(); //le decimos a javascript que cree un objeto nuevo en memoria
persona2.nombre = 'Carlos';
persona2.apellido = 'Pelaez';
persona2.direccion = 'Calle 41 #35-19';
persona2.tel= '4963278'


//iterar objetos 
for (propiedad in persona){
    console.log(propiedad);
    console.log()
}
