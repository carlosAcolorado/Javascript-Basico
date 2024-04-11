//clase persona
class Personas {

    static contadorPersonas = 0;

    constructor(nombre,apellido,edad){
        this._idPersona = ++Personas.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        
    }

    get idPersona(){
        return this._idPersona
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

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad= edad
    }

    //template string
    toString(){
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }

}


//clase empleado
class Empleado extends Personas{
    static contadorEmpleados = 0;

    constructor (nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad)
        this._idEmpleado = ++Empleado.contadorEmpleados
        this._sueldo = sueldo;
    }

    get idEmpleado (){
        return this._idEmpleado
    }

    get sueldo (){
        return this._sueldo
    }

    set sueldo(sueldo){
        this._sueldo = sueldo
    }

    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;

    }
}

//clase cliente
class Cliente extends Personas{

    static contadorClientes = 0 ;

    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad)
        this._idCliente = ++Cliente.contadorClientes
        this._fechaRegistro = fechaRegistro
    }

    get idCliente(){
        return this._idCliente
    }

    get fechaRegistro(){
        return this._fechaRegistro
    }

    set fechaRegistro (fechaRegistro){
        this._fechaRegistro= fechaRegistro
    }

    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`
    }
}


let persona1 = new Personas('Juan','Perez',28);
console.log(persona1.toString())

let empleado = new Empleado('Karla','Gomez',33,5000)
console.log(empleado.toString());

let cliente = new Cliente('Miguel','Hernandez',30,new Date());
console.log(cliente.toString());