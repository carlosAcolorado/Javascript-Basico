 var numero = 1;

switch(numero){
    case 1:
        console.log("Soy 1")
        break;
        case 2:
            console.log("Soy 2")
            break;
        default:
            console.log("no soy nada")
}

function mensaje (articulo){
    switch (articulo) {
        case "computadora":
          return "Con mi computadora puedo programar usando JavaScript"
          break;
        case "celular":
          return "En mi celular puedo aprender usando la app de Platzi"
          break;
        case "cable":
          return "¡Hay un cable en mi bota!"
          break;
        default:
          return "Artículo no encontrado";
    
      }
}
