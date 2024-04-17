/*let miPromesa = new Promise((resolver,rechazar) =>{
    let expresion = false; //resolved,rejected
        if(expresion)
        resolver('Resolvio correcto')
         else
        rechazar('Se produjo un error')
});*/

/*miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
)*/
//mandamos a llamar la promesa y se ejecuta un caso u otro, en caso se ser correcto se pasa a la primera variable valor, en caso de no serlo se ejecuta la variable error

/*miPromesa
.then(valor=> console.log(valor))
.catch(error=>console.log(error))*/


//promesas con set timeout
let promesa = new Promise ((resolver)=>{
    console.log('Inicio promesa')
    setTimeout(()=>resolver('Saludo con promesa y timeout'),2000)
    setTimeout(()=>console.log('Fin promesa'),4000)
})

promesa.then(valor=> console.log(valor))