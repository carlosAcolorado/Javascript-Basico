//la  clase object es la clase padre de todas las clases y por tanto las clases hijas heredan todos sus metodos 
//clase padre 
class Persona {

    //atributos estaticos
    //no se accaden con this se acceden con la clase
    static contadorObjetos = 0; //atributo de la clase
    email = 'Valor default email' //atributo de nuestros objetos

    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido ;
        Persona.contadorObjetos++;
        console.log('Se incrementa contador: '+ Persona.contadorObjetos)
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

let persona1 = new Empleado ('Juan','Perez','Contabilidad')
console.log(persona1);
console.log(persona1.nombreCompleto())

let empleado1 = new Empleado('Maria','Jimenez','Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());

Persona.saludar2(empleado1);
Empleado.saludar2(empleado1);
//se puede usar desde la clase que extiende o clase hija

//al igual que con los metodos los atributos se llaman usando la clase y no con el objeto
console.log(Persona.contadorObjetos);
console.log(Empleado.contadorObjetos);
//las clases hijas heredan atributos static

console.log(persona1.email); //accediendo 
console.log(empleado1.email)