const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();/*
    el preventDefault detiene el envío del formulario y muestra un mensaje de error en el párrafo debajo de nuestro formulario para hacerle saber al usuario cuál es el problema.
    */
    para.textContent = "¡Necesitas completar ambos campos!";
  }
});