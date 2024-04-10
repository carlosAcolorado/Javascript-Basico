class Persona {

    //atributos estaticos
    //no se accaden con this se acceden con la clase
    static contadorPersonas = 0; 

    //constante statica de solo lectura
    static get MAX_OBJ (){
        return 5;
    }

    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido ;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas
        }
        else
        console.log('Se han alcanzado el numero maximo objetos')
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
        this._apellido = apellido
    }

    nombreCompleto(){
        //dentro de la clase no se usa la palabra function
        return this.idPersona+ ' '+this._nombre +' '+this._apellido
    }


    toString() {
        return this.nombreCompleto();
    }

    //metodos estaticos
    static saludar (){
        console.log('saludos desde metodo static')
    } //este metodo static se asocia solo con la clase no con el objeto
    //no se puede llamar desde un objeto

    static saludar2(persona){
        console.log(persona.nombre +' '+persona.apellido);
    }
}

//clase hija 
class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);//llamamos al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento (){
        return this._departamento
    }

    set departamento(departamento){
        this._departamento = departamento
    }

    //sobreescritura del metodo para agregar el departamento
    //mismo nombre que en la clase padre
    //con la palabra super accedemos a los atributos y metodos de la clase padre
    nombreCompleto(){
        return super.nombreCompleto() +' ,'+ this._departamento
    }
}


let persona1 = new Empleado ('Juan','Perez','Contabilidad');
console.log(persona1.toString());

let empleado1 = new Empleado('Maria','Jimenez','Sistemas');
console.log(empleado1.toString())

let empleado2 = new Empleado('Pedro','Hernandez','Finanzas');
console.log(empleado2.toString())

let empleado3 = new Empleado('Juliana','Ramirez','Finanzas');
console.log(empleado3.toString());

let empleado4 =new Empleado ('Mariana','Lopez','Maketing');
console.log(empleado4.toString());

//no se le asigna un id ya que se ha alcanzado el numero maximo de objetos creados en este caso de 5
let empleado5 =new Empleado ('Mariana','Lopez','Maketing');
console.log(empleado5.toString())

console.log(Persona.MAX_OBJ);