const btn = document.querySelector("button");
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeBackground(e) {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  //document.body.style.backgroundColor = rndCol; aqui e cambia el color de todo el documento
  e.target.style.backgroundColor = rndCol;
  //La propiedad target del objeto evento siempre es una referencia al elemento sobre el cual ocurrió el evento. 
  //estamos estableciendo el color de fondo aleatorio en el botón, no la página.
  console.log(e);
}

btn.addEventListener("click", changeBackground);
//btn.addEventListener("mouseout", changeBackground);
//btn.onclick = changeBackground;

textBox.addEventListener(
  "keydown",(event) => (output.textContent = `Presionaste "${event.key}".`),
);



/*tipos de eventos
-click
-focus
-blur
-dblclick
-mouseover
-mouseout
-keypress
*/


