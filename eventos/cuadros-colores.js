function random(number) {
    return Math.floor(Math.random() * number);
  }
  
  function bgChange() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return rndCol;
  }
  
  const container = document.querySelector("#container");
  
  container.addEventListener(
    "click",
    (event) => {event.target.style.backgroundColor = bgChange()});

    /*
    En el evento click que has añadido al contenedor (#container), event.target se refiere al elemento específico que ha sido el objetivo del evento, es decir, al elemento que ha sido clickeado dentro del contenedor.
    
    event es el objeto que representa el evento de clic. Cuando se produce un clic dentro del contenedor, este evento es activado. event.target se refiere al elemento que ha sido clickeado dentro del contenedor. Entonces, event.target.style.backgroundColor establece el color de fondo del elemento clickeado en el color generado por la función bgChange().

    Este enfoque es útil porque permite que la función bgChange() sea aplicada solo al elemento específico que ha sido clickeado, en lugar de cambiar el color de fondo del contenedor en su totalidad. Esto hace que la interacción sea más precisa y específica para el usuario.*/