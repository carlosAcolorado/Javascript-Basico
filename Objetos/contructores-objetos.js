
//creando objetos con funcion constructora

function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email; //this hace referencia al objeto persona
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
  }

  Persona.prototype.tel = '4575815'; //con prototype asignados la propiedad tel a todos los objetos de tipo persona
  Persona.prototype.direccion = 'Calle 15';
  Persona.prototype.saludar = function (){
    console.log('Hola a todos')
  }

  
  let padre = new Persona('Juan','Perez','jperez@mail.com');
  console.log(padre); 

  let madre = new Persona('Laura','Quintero','lquintero@mail.com')
  console.log(madre); 

//padre.nombre= 'Pedro'; //modifianco el valor de nombre en el objeto llamado padre
padre.saludar();



  //no siempre se usa la palabra new, se ua la forma mas simplificada

  let miObjeto = new Object();
  let miObjeto2 = {}; // es la opcion mas recomendada 

  let miCadena = new String('Hola');
  let miCadena2 = 'Hola';

  let miNumero = new Number (1);
  let miNumero2 = 1;

  let miBoolean = new Boolean();
  let miBoolean2 = false;

  let miArreglo = new Array();
  let miArreglo2 = [];

  let miFuncion = new Function();
  let miFuncion2 = function(){};