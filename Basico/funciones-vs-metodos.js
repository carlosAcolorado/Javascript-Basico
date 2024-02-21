/*funciones pasada como argumento de otra funcion --> callback
function a(){
}
function b() {
}

b(a)

//retornar funciones 
function a (){
    function b () {

    }
    return b
}

//asignar funciones a variables -> expresion de funcion
//no se coloca nombre a esa funcion 

const a = function (){

}

//tener propiedades y metodos
function a (){}
const obj = {
}
a.call(obj)

//anidar funciones -> nested functions

function a (){
    function b () {}
        function c (){}
        c()
      b()  
}
a()
*/

// almacenar funciones en objetos
const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage(){
        console.log('💥')
    }
}

rocket.launchMessage()
