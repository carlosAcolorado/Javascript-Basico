//tiene nombre, atributos y metodos
// la clase es la plantilla
//nombre de la clase con letra mayuscula
//primero definimos la clase para poderla utilizar, no se aplica hoisting

class Persona {
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido ;
    }

    get nombre(){
       return this._nombre 
    }

    set nombre(nombre){
        this._nombre = nombre
    }

    get apellido(){
        return this._apellido
    }

    set apellido(apellido){
        this._apellid0 = apellido
    }
}

//en los metodos get y set no se usa parentesis

let persona1 = new Persona('Juan','Perez');

persona1.nombre = 'Juan Carlos'
persona1.apellido = 'Perez Sanchez'

console.log(persona1.nombre);

let persona2  = new Persona('Pedro','Suarez')
console.log(persona2)