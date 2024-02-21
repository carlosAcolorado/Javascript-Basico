//string primitivo

const stringPrimitivo = "soy un string primitivo"
console.log(typeof stringPrimitivo)

const stringPrimitivotambien = String("Soy un string primitivo tambien")
console.log(typeof stringPrimitivotambien)

//string objeto 
const stringObjeto = new String("sor un string objeto")
console.log(typeof stringObjeto)

// acceder a caracteres 

const saludo = 'Hola. ¿Como estas?'

console.log(saludo[2]) //selecciona la letra l que esta en el indice 2
console.log(saludo.charAt(2))
console.log(saludo.indexOf('o'))
console.log(saludo.indexOf('como'))
console.log(saludo.lastIndexOf('o'))
console.log(saludo.slice(0,6))
console.log(saludo.length)
console.log(saludo.toLocaleLowerCase())
console.log(saludo.toLocaleUpperCase())

const string = "I dO nOT lIke gREen eGgS anD HAM";

function capitalizarPrimeraLetra(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
} //convirtiendo la primera letra de un string en mayusula y el resto en minusculas

capitalizarPrimeraLetra(string); // Retorna "FreeCodecamp"
const palabra = "los gatos dominarán el mundo.";

const toCapitalize = (text) => text[0].toUpperCase() + text.substring(1);
const toCapitalizeEveryWord = (text) => {
  return text.split(" ")                      // Separamos en un array cada palabra
    .map(word => toCapitalize(word))          // Aplicamos el capitalizar a cada elemento
    .join(" ");                               // Lo volvemos a unir en un string
}

toCapitalize(palabra);            // "Los gatos dominarán el mundo."
toCapitalizeEveryWord(palabra);   // "Los Gatos Dominarán El Mundo."

const saludoDividido = saludo.split(' ')
console.log(saludoDividido) //crea un array con las palabras cada una en indice y usando el espacio como separador

const saludoConEspacios = ' Hola Mundo '
const saludoSinEspacios = saludoConEspacios.trim() //elimina los espacios al inicio y al final del string
console.log(saludoSinEspacios)

//reemplazar texto
const saludoOriginal = 'Hola Mundo'
const nuevoSaludo = saludoOriginal.replace('Mundo', 'Colombia')
console.log (nuevoSaludo)

const texton = "Hola gato, ¿eres un perro o eres un pato?";

// Reemplazar la primera ocurrencia
texton.replace("g", "p");                     // "Hola pato, ¿eres un perro o eres un pato?"
texton.replace("g", "p").replace("o", "a");   // "Hala pato, ¿eres un perro o eres un pato?"

// Reemplazar todas las ocurrencias
texton.replaceAll("e", "i");                  // "Hola gato, ¿iris un pirro o iris un pato?"
texton.replace(/e/g, "i");                    // "Hola gato, ¿iris un pirro o iris un pato?"

//reemplazando con una funcion
const textos = "Hola gato, ¿eres un perro o eres un pato?";
const replaceAction = (value) => `=>${value}<=`;

textos.replace(/.a.o/g, replaceAction);
// "Hola =>gato<=, ¿eres un perro o eres un =>pato<=?"

textos.replaceAll("un", replaceAction);
// "Hola gato, ¿eres =>un<= perro o eres =>un<= pato?"


const text = "Submarino";
//posiciones 
text.substring(3);    // 'marino' (desde el 3 en adelante)
text.substring(3, 5); // 'ma'     (desde el 3, hasta el 5)
text.substr(3);       // 'marino' (desde el 3 en adelante)
text.substr(3, 5);    // 'marin'  (desde el 3, hasta el 3+5)
text.substr(-3);      // 'ino'    (desde la posición 3 desde el final, en adelante)
text.substr(-3, 2);   // 'in'     (desde la posición 3 desde el final, hasta 2 posiciones más)

//dividir strings
"88.12.44.123".split(".");    // ["88", "12", "44", "123"] (4 elementos)
"1.2.3.4.5".split(".");       // ["1", "2", "3", "4", "5"] (5 elementos)
"Hola a todos".split(" ");    // ["Hola", "a", "todos"] (3 elementos)
"A,B,C,D,E".split(",", 3);    // ["A", "B", "C"] (limitado a los 3 primeros elementos)
"Código".split("");           // ["C", "ó", "d", "i", "g", "o"] (6 elementos)

//comprobacion de textos
const texto = "Manz";

texto.startsWith("M");     // true  ('Manz' empieza por 'M')
texto.startsWith("a", 1);  // true  ('anz' empieza por 'a')
texto.endsWith("o");       // false ('Manz' no acaba en 'o')
texto.endsWith("n", 3);    // true  ('Man' acaba en 'n')
texto.includes("an");      // true  ('Manz' incluye 'an')
texto.includes("M", 1);    // false ('anz' no incluye 'M')


//busqueda cadenas de texto
const textico = "El gato, el perro y el pato.";
const regexp = /.a.o/g;

textico.search(regexp);   // 3, porque la primera coincidencia ocurre en la posición 3 (gato)
textico.match(regexp);    // ["gato", "pato"], las dos coincidencias encontradas

//match all 
const textote = "El gato, el perro y el pato.";
const regexpo = /.a.o/g;

const iterator = textote.matchAll(regexpo);
for (let ocurrence of iterator) {
  console.log(ocurrence);
}

// ['gato', index: 3, input: 'El gato, el perro y el pato.', groups: undefined]
// ['pato', index: 23, input: 'El gato, el perro y el pato.', groups: undefined]

//metodo length
"Hola".length;    // 4
"Adiós".length;   // 5
"".length;        // 0
"¡Yeah!".length;  // 6

//metodo repeat() repite un texto las veces que querramos
const textun = "Javascript";

textun.repeat(3);   // "JavascriptJavascriptJavascript"




//rellenar cadenas
const stringNumber = "15";

stringNumber.padStart(5, "0");    // "00015"
stringNumber.padStart(3, "0");    // "015"
stringNumber.padEnd(3, "0");    // "150"
stringNumber.padEnd(4, "0");    // "1500"


//ejemplo practico 
