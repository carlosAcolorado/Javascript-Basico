//enteros y decimales
const entero = 10
const decimal = 3.14

//notacion cientifica
const cientifico = 5e3

//infinito y no son numeros Na

const infinito = Infinity
const noEsUnNumero = NaN

//operaciones

const suma = 3+4
const resta = 3-4
const multiplicacion = 4*3
const division = 16/2

console.log(Number.isInteger(suma))

//modulo y exponenciacion

const modulo = 15 % 8
const exponente = 2**3

//precisión 
const resultado = 0.1 + 0.2
console.log(resultado.toFixed(1)) //arroja el resultado con un solo decimal
console.log (resultado === 0.3) // nos arroja falso 

//operaciones avanzadas
const raizCuadrada = Math.sqrt(16) //cual es la raiz cuadrada de 16
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()
// Número al azar entre 0 y 5 (no incluido)
const numero = Math.floor(Math.random() * 5);
// Equivalente al anterior
const numero2 = ~~(Math.random() * 5);//

console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio.toFixed(2))



//conversion de numeros

(16).toString();        // "16"     (lo convierte a string)
(42.5).toString();      // "42.5"   (lo convierte a string)
(26).toString(2);       // "11010"  (26 en decimal, es 11010 en binario)
(80).toString(8);       // "120"    (80 en decimal, es 120 en octal)
(245123).toString(16);  // "3bd83"  (245123 en decimal, es 3bd83 en hexadecimal)

//conversion a enteros
Number.parseInt("42.5");      // 42 (descarta los decimales)
Number.parseInt("88.99€");    // 88 (descarta decimales y resto de caracteres)
Number.parseInt("Núm. 33.5"); // NaN (empieza a descartar en Núm, descarta todo)

//conversion a decimal
Number.parseFloat("42.5");      // 42.5 (Conserva decimales)
Number.parseFloat("42");        // 42 (El número es entero, convierte a entero)
Number.parseFloat("88.99€");    // 88.99 (Conserva decimales)
Number.parseFloat("42€");       // 42 (El número es entero, convierte a entero)
Number.parseFloat("Núm. 33.5"); // NaN (empieza a descartar en Núm, descarta todo)

//bases numericas
Number.parseInt("11101", 2);    // 11101 en binario, es 29 en decimal
Number.parseInt("31", 8);       // 31 en octal, es 25 en decimal
Number.parseInt("FF", 16);      // FF en hexadecimal, es 255 en decimal