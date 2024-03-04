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


//programa del clima con un swicth

let select = document.querySelector("select");
let para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  let choice = select.value;

  switch (choice) {
    case "sunny":
      para.textContent =
        "Afuera hoy hace sol y es agradable. ¡Usa pantalones cortos! Ve a la playa o al parque y tómate un helado.";
      break;
    case "rainy":
      para.textContent =
        "Afuera llueve; llévate un impermeable y un paraguas y no te quedes fuera mucho tiempo.";
      break;
    case "snowing":
      para.textContent =
        "La nieve está cayendo, ¡está helada! Lo mejor es quedarse en casa con una taza de chocolate caliente o ir a construir un muñeco de nieve.";
      break;
    case "overcast":
      para.textContent =
        "No llueve, pero el cielo está gris y sombrío; Podría cambiar en cualquier momento, así que lleva un impermeable por si acaso.";
      break;
    default:
      para.textContent = "";
  }
}