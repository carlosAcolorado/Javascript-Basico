const titulo = document.querySelector('h1'); //selecciona etiqueta
const input1 = document.querySelector('#calculo1'); //selecciona id
const input2 = document.querySelector('#calculo2');
const boton = document.querySelector('#calcular');
const parrafoResultado = document.querySelector('#resultado')
const form = document.querySelector('#form')

form.addEventListener('submit',sumarInputValues) //aqui no se llaman los perentesis de las funciones

function sumarInputValues(event){
   event.preventDefault()
   const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
   parrafoResultado.innerHTML = `<h3>Resultado:  ${sumaInputs}</h3>` 
}