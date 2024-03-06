const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));
//remueve la clase hidden al hacer click en el boton
/*Cuando el usuario hace clic en el botón de "Display video", muestra la caja que contiene el video, pero sin iniciar la reproducción del video todavía.*/
video.addEventListener("click", (event) => {
    event.stopPropagation();
    video.play();
  });
//Cuando el usuario hace clic en el video, inicia la reproducción del video.
/*Todo lo que estamos haciendo aquí es llamar al método stopPropagation() en el objeto evento dentro del manejador del evento 'click' para el elemento <video>. Esto evitará que el evento burbujee hacia la caja de más arriba.*/
box.addEventListener("click", () => box.classList.add("hidden"));
/*Cuando el usuario hace clic en cualquier lugar fuera de la caja del video, oculta la caja nuevamente.*/





