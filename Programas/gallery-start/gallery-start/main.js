const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const arrayImg = [{
    texto:'Imagen1',
    url: './images/pic1.jpg'
},
{
    texto:'Imagen2',
    url: './images/pic2.jpg'
},
{
    texto:'Imagen3',
    url: './images/pic3.jpg'
},
{
    texto:'Imagen4',
    url: './images/pic4.jpg'
},
{
    texto:'Imagen5',
    url: './images/pic5.jpg'
}]


for (imagen of arrayImg )
{
const newImage = document.createElement('img');
newImage.setAttribute('src', imagen.url);

newImage.setAttribute('alt', imagen.texto);
thumbBar.appendChild(newImage);

newImage.addEventListener('click', (e) => {
    displayedImage.src = e.target.src;
    /*
    La parte e.target en el evento click se refiere al elemento HTML que disparó el evento. En este caso, e.target se refiere al elemento <img> en el que se hizo clic. osea newImage
    Cuando haces clic en una imagen (<img>), el navegador dispara un evento click. Este evento contiene información sobre el elemento que disparó el evento, es decir, la imagen en la que hiciste clic. Entonces, e.target se refiere a esa imagen específica.
    en el código que proporcionaste, e.target.src se refiere a la URL (src) de la imagen en la que hiciste clic, y e.target.alt se refiere al atributo alt de esa imagen. Estas propiedades se utilizan para actualizar el src y alt del elemento displayedImage, lo que permite mostrar la imagen grande correspondiente a la miniatura en la que hiciste clic.*/ 
    displayedImage.alt = e.target.alt;
  });
 }


/* Declaring the alternative text for each image file */

/* Looping through images */


/* Wiring up the Darken/Lighten button */
