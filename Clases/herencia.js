//la  clase object es la clase padre de todas las clases y por tanto las clases hijas heredan todos sus metodos 
//clase padre 
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
        this._apellido = apellido
    }

    nombreCompleto(){
        //dentro de la clase no se usa la palabra function
        return this._nombre +' '+this._apellido
    }

    //sobresbribiendo elmetodo de la clase padre (object)
    //polimofismo: multiples formas en tiempo de ejecucion
    //el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
    toString() {
        return this.nombreCompleto();
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


let empleado1 = new Empleado('Maria','Jimenez','Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto())
console.log(empleado1.toString())