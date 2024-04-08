let persona = {
    nombre: 'Juan',
    apellido:'Perez',
    email: 'jperez@gmail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + '' + this.apellido
    }
}

//agregando o modoficando propiedades
persona.tel = '4568923';
persona.direccion= 'Calle 5 #56-12'

console.log(persona);

//eliminando propiedades
delete persona.tel;
delete persona.edad;
console.log(persona); 