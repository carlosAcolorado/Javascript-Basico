//creacion de strings
const primeraOpcion = "comillas dobles"
const segundaOpcion = 'comillas simples'
const terceraOpcion = `comillas invertidas `

//concatenacion con simbolo +
const direccion = "Calle falsa 123 "
const ciudad = "Springfield"
const direccionCompleta = 'Mi direccion completa es '+direccion + ciudad
console.log(direccionCompleta)

const direccionCompletaEspacio = 'Mi direccion complea es '+direccion+''+ciudad
console.log(direccionCompletaEspacio)

//concatenacion con Template Literals
const nombre = "Carlos Andres"
const pais = "Colombia"
const presentacion = `Hola, soy ${nombre} de ${pais}`
console.log (presentacion)

function makeButton(className, text) {
    return `<button class="${className}">${text}</button>`;
  }
  //crea un boton con diferentes clase y nombre del boton
  makeButton("primary", "Aceptar");     // '<button class="primary">Aceptar</button>'
  makeButton("warning", "Eliminar");    // '<button class="warning">Eliminar</button>'

// concatenacion con join
const primeraParte = 'Me encanta'
const segundaParte = 'la gente de'
const terceraParte = 'Mexico'
const pensamiento = [primeraParte,segundaParte,terceraParte]
console.log(pensamiento.join(' '))// agrega un espacio entre palabras

//concatenacion con concat

const hobbie1 = 'Bicicleta'
const hobbie2 = 'Videojuegos'
const hobbie3 = 'Comer'
const contestar = 'Mis hobbies son: '.concat(hobbie1, ', ',hobbie2,', ',hobbie3)
console.log(contestar)

//caracteres de escape 
const whatDoIDo = "I'm Software Engineer" //escape con comilla doble y simple

const barraInvertida = 'I\'m Software Engineer' //barra invertida

const comillaInvertida = `I'm Software Engineer` //con comillas invertidas

const poema = "Las rosas son rojas,\n"  + 
              "Las violetas son azules,\n"+
              "Caracter inesperado,\n"+
              "En la linea 86" 

             /*"Las rosas son rojas,\n\
              "Las violetas son azules,\n\
              "Caracter inesperado,\n\
              "En la linea 86" */

console.log(poema)


