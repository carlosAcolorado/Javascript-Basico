let persona = {
    nombre: 'Juan',
    apellido:'Perez',
    email: 'jperez@gmail.com',
    edad: 28,
    idioma:'es', //por buenas practicas los idiomas se almacenan en mayuscula
    get lang(){
        return this.idioma.toUpperCase()
    },
    set lang(lengua){
        this.idioma = lengua.toUpperCase()
    },
    get nombreCompleto(){
        return this.nombre + '' + this.apellido
    }
}

//con el metodo get podemos recuperar las propiedades de la funcion sin utilizar los parentesis
//el metodo set nos permite modificar los 
console.log(persona.nombreCompleto)
console.log(persona.lang)
persona.lang ='en';
console.log(persona.idioma)