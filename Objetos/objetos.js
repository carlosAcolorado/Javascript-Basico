// Declaración de un objeto
let persona = {
    nombre: "Juan",
    edad: 25,
    esEstudiante: true,
    saludar: function() {
      console.log("¡Hola!");
    }
  };
  //agregando mas propiedades
  persona.cedula="1152439621"
  // cambiando el contenido de una propiedad
  persona.nombre = "Carlos"

  // Accediendo a propiedades del objeto
  console.log(persona.nombre);  // Imprime: Juan
  console.log(persona["nombre"]) //opcion 2  

  console.log(persona.edad);        // Imprime: 25
  console.log(persona.esEstudiante);// Imprime: true
  console.log(persona.cedula); 
  
  // Invocando un método del objeto
  persona.saludar();  // Imprime: ¡Hola!

  
  // Usando una función constructora para crear un objeto
function Persona(nombre, edad, esEstudiante) {
    this.nombre = nombre;
    this.edad = edad;
    this.esEstudiante = esEstudiante;
    this.saludar = function() {
      console.log("¡Hola!");
    };
  }
  
  // Creando una instancia de Persona
  let nuevaPersona = new Persona("María", 30, false);
  
  // Accediendo a propiedades y métodos del objeto
  console.log(nuevaPersona.nombre);      // Imprime: María
  console.log(nuevaPersona.edad);        // Imprime: 30
  console.log(nuevaPersona.esEstudiante);// Imprime: false
  nuevaPersona.saludar();  // Imprime: ¡Hola!