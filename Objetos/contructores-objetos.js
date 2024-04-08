
//creando objetos con funcion constructora

function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
  }

  let padre = new Persona('Juan','Perez','jperez@mail.com');
  console.log(padre.nombreCompleto());

  let madre = new Persona('Laura','Quintero','lquintero@mail.com')
  console.log(madre.nombreCompleto()); 

  padre.nombre= 'Pedro';
  console.log(padre); 

