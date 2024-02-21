# Test de JavaScript

¡Es hora de poner a prueba cuánto sabes sobre JavaScript!

Esta lectura es una prueba de JavaScript. A diferencia de un examen, nadie te obligará a nada. **Puedes hacer trampa y saltar a la siguiente clase**, ese es el camino fácil. Pero tengo mucha fe en ti, confío en que seguirás mis consejos y no avanzarás a la siguiente clase hasta superar esta prueba.

## Instrucciones para tomar esta prueba

- Evalúa muy críticamente tu conocimiento.
- Si logras resolver la prueba, no importa cuánto te cueste, puedo asegurarte que tienes todo para continuar a las siguientes clases y tomar el resto del curso.
- Si no lo logras, no te preocupes, absolutamente nadie puede juzgarte, solo tú. Vuelve al [Curso Básico de JavaScript](https://platzi.com/cursos/basico-javascript/), anota los temas clave donde puedes mejorar, ubica las clases donde puedes aprenderlos y estudia vigorosamente.
- Es completamente válido hacer búsquedas en Google, cursos y tutoriales de Platzi, incluso usar tu cuaderno de notas sin importar si es físico o virtual.

Recuerda que **el éxito no se mide por cuánto tiempo te toma aprender**, esa métrica es relativamente inútil. Mejor concéntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnología.

¡Mucha suerte!


## Variables y operaciones

### 1. Responde las siguientes preguntas en la sección de comentarios:

- **¿Qué es una variable y para qué sirve?**
	- Una variable es una palabra que representa algo que cambia o experimenta algún tipo de modificación y carece de estabilidad, constancia y mutabilidad. Las variables son la manera como los programadores le dan nombre a un valor, para poder reusarlo, actualizarlo o simplemente registrarlo.
- **¿Cuál es la diferencia entre declarar e inicializar una variable?**
	- Declarar una variable significa informar al sistema de la existencia de ella y la intención de hacer uso de ella.
Inicializar una variable significa asignarle un valor inicial.
- **¿Cuál es la diferencia entre sumar números y concatenar strings?**
	- Al sumar 2 números se realiza una operación matemática que arroja como resultado otro número. Al concatenar dos Strings, lo que se hace es juntarlos para formar una nueva cadena de texto
- **¿Cuál operador me permite sumar o concatenar?**
	- El operador usado para concatenar o sumar es el operador “+”.

### 2. Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre:  string
- Apellido:  string
- Nombre de usuario en Platzi:  string
- Edad:  numero
- Correo electrónico:  string
- Mayor de edad:  booleano
- Dinero ahorrado:  numero
- Deudas:  numero 


### 3. Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```javascript
let nombre = "Carlos Andres"
let apellido =  "Colorado Qintero"
let nombreUsuarioPlatzi = "CarlosColorado"
let edad = 32
let correoElectronico = "caancoqu@gmail.com"
let mayorEdad = true
let dineroAhorrado = 1000000
let deudas = 500000
```

### 4. Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```javascript
let nombre = "Carlos Andres"
let apellido =  "Colorado Qintero"
let dineroAhorrado = 1000000
let deudas = 500000
console.log(nombre + " " + apellido )
console.log (dineroAhorrado - deudas)

```

## Funciones

### 1. Responde las siguientes preguntas en la sección de comentarios:

- **¿Qué es una función?**
	- En JavaScript, una función es un bloque de código que se define una vez y se puede reutilizar en diferentes partes de un programa. Las funciones son un elemento fundamental en la programación ya que permiten encapsular una tarea específica, de manera que se pueda ejecutar múltiples veces sin necesidad de repetir el código. Una función puede ser invocada desde cualquier parte del código, lo que ayuda a modularizar y organizar el programa.
- **¿Cuándo me sirve usar una función en mi código?**
	- Si tienes una tarea que se repite en varios lugares de tu programa, encapsular esa tarea en una función te permite escribir el código una vez y reutilizarlo en múltiples partes de tu programa. Utilizar funciones en tu código puede mejorar la claridad, la eficiencia y la facilidad de mantenimiento, al tiempo que permite una mayor reutilización del código.
- **¿Cuál es la diferencia entre parámetros y argumentos de una función?**
	- Argumentos: Son los valores reales que se pasan a una función cuando esta es invocada. Parámetros: Son los nombres utilizados dentro de la definición de una función para representar los valores que se espera recibir cuando se llama a esa función.

### 2. Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

<pre><code>const name = "Juan David"; const lastname = "Castro Gallego"; const completeName = name + lastname; const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");</code></pre>

```javascript

//funcion
function nombreCompleto (completeName,nickname){
    console.log(`Mi nombre es ${completeName}, pero prefiero que me digas "${nickname}".`)
}
nombreCompleto(completeName,nickname) 

```
## Condicionales

### 1. Responde las siguientes preguntas en la sección de comentarios:

- **¿Qué es un condicional?**
	- Es una estructura de control que permite tomar decisiones en función de una condición. Estos condicionales se utilizan para ejecutar diferentes bloques de código según si una expresión lógica es verdadera o falsa.
- **¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?**
	- else if: Permite verificar condiciones adicionales si la condición del if no se cumple.
	- operador ternario: Es una forma abreviada de escribir un condicional if en una sola línea.
- **¿Puedo combinar funciones y condicionales?**
	- La combinación de condicionales y funciones es fundamental en la programación, ya que permite escribir código más modular y reutilizable. Se pueden diseñar funciones que realicen tareas específicas y luego utilizar condicionales para tomar decisiones basadas en los resultados de esas funciones. 

### 2. Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

<pre><code>const tipoDeSuscripcion = "Basic";
switch (tipoDeSuscripcion) { 
case "Free": 
console.log("Solo puedes tomar los cursos gratis"); 
break; 
case "Basic": 
console.log("Puedes tomar casi todos los cursos de Platzi durante un mes"); 
break; 
case "Expert": 
console.log("Puedes tomar casi todos los cursos de Platzi durante un año"); 
break;
case "ExpertPlus": 
console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"); 
break; 
}</code></pre>

```javascript
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion==="Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if (tipoDeSuscripcion==="Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
else if (tipoDeSuscripcion==="Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else{
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}   
```

### 3. Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

```javascript
    function conseguirSuscripcion(suscripcion){
        if (Suscripcion==="Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    return;
    }
        if (Suscripcion==="Free"){
    console.log("Solo puedes tomar los cursos gratis");
    return;
    }
        if (Suscripcion==="Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    return;
    }
    if(Suscripcion==="ExpertDuo"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    return;
    }
    console.warn("Ese tipo de suscripcion no existe")
    }
```


> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

```javascript

    const tiposDeSuscripciones ={
        free: "Solo puedes tomar los cursos gratis",
        basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
        expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
        experDuo:"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    }

    function suscripciones(suscripcion){
        if(tiposDeSuscripciones[suscripcion]){
            console.log(tiposDeSuscripciones[suscripcion])
            return
        }
        console.war("Ese tipo de suscripcion no existe")
    }
```



## Ciclos

### 4. Responde las siguientes preguntas en la sección de comentarios:

- **¿Qué es un ciclo?**
	- es una estructura de control que permite ejecutar repetidamente un bloque de código mientras se cumpla una condición específica. Los ciclos son útiles para realizar tareas repetitivas de manera eficiente sin tener que escribir el mismo código una y otra vez.
- **¿Qué tipos de ciclos existen en JavaScript?**
	- For, while, do while
- **¿Qué es un ciclo infinito y por qué es un problema?**
	- Un ciclo infinito sucede cuando la condición nunca se vuelve falsa, es un problema porque puede provocar problemas de rendimiento en el programa o en el sistema, bloqueo del programa
- **¿Puedo mezclar ciclos y condicionales?**
	- Se puede utilizar y combinar ciclos y condicionales para controlar el flujo de ejecución en un determinado caso. Para realizar acciones específicas según una condición dentro de cada iteración del ciclo

### 2. Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
<pre><code>for (let i = 0; i < 5; i++) { console.log("El valor de i es: " + i); }

for (let i = 10; i >= 2; i--) { console.log("El valor de i es: " + i); }</code></pre>

```javascript
let contador = 0
while (contador <5){
    console.log("El valor i es: " + contador)
    contador++
}

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let i = 10
while (i >=5){
    console.log("El valor i es: " + i)
    i--
}
```


### 1. Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.

```javascript
function verificarSuma(){
    while (true){
        let respuesta = prompt("Cuanto suman 2 + 2 ") 
        respuesta = parseInt(respuesta);
        if (respuesta === 4){
            alert('Felicidades has respondido correctamente')
            break
        }else{
            alert('Vamos de nuevo')
        }
    }
}
verificarSuma()
```

## Listas

### 1. Responde las siguientes preguntas en la sección de comentarios:

- **¿Qué es un array?**
	- Un array es una estructura de datos que se utiliza para almacenar una colección ordenada de elementos. Estos elementos pueden ser de cualquier tipo de dato, como números, cadenas, booleanos, objetos, funciones, u otros arrays, permitiendo así crear estructuras de datos más complejas y flexibles.
- **¿Qué es un objeto?**
	- Un objeto es una estructura de datos que permite almacenar y organizar información de manera más compleja que un simple array. Un objeto puede contener propiedades y métodos, donde las propiedades son pares clave-valor que representan características o atributos del objeto, y los métodos son funciones asociadas al objeto.
- **¿Cuándo es mejor usar objetos o arrays?**
	- Los objetos son ideales cuando quieres organizar datos utilizando   claves descriptivas (o propiedades) en lugar de índices numéricos. 
	- Los objetos son útiles para modelar entidades del mundo real que tienen propiedades y comportamientos asociados. Puedes incluir funciones (métodos) dentro del objeto.
	- Los arrays son ideales cuando trabajas con una secuencia de elementos ordenados y necesitas acceder a ellos por índices numéricos.
	- Los arrays son eficientes para realizar operaciones en bloques de datos, como filtrar, mapear o reducir elementos.
	- Cuando todos los elementos en la colección son del mismo tipo o representan valores similares, los arrays proporcionan una estructura de datos simple y eficiente.


- **¿Puedo mezclar arrays con objetos o incluso objetos con arrays?**
	- En JavaScript puedes mezclar objetos con arrays y arrays con objetos. Esto significa que puedes tener arrays que contienen objetos, objetos que contienen arrays o incluso arrays que contienen objetos que a su vez contienen arrays.

### 2.  Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
```javascript
function impriendo (array){
   console.log(array[0]) 
}
let lista = [25,56,84]

impriendo(lista)
```

### 3. Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```javascript
function elementos(array){
    array.forEach((item)=>{
        console.log('*'+item) } )
}

elementos(list)
```

### 4. Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
```javascript
 let frutas = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1
 }

function imprimirObjetos(objeto){
    for (i in objeto){
        console.log(i)
    }
}

//Object.value(frutas) convierte el objeto en un array

imprimirObjetos(frutas)
```

## ¿Cómo te fue? 🏆

**¡Felicidades por completar la prueba de JavaScript!** Confío en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.

Ahora sí, continúa a la siguiente clase, pero recuerda que **ya no puedes abandonar el curso**, debes completarlo hasta el final. No importa cuánto tiempo te tome. **Yo sé que tú puedes. Y tú deberías de saberlo también.**