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
    //console.log('Inicio promesa')
    setTimeout(()=>resolver('Saludo con promesa y timeout'),2000)
    //setTimeout(()=>console.log('Fin promesa'),4000)
})

//promesa.then(valor=> console.log(valor))


//async indica que una funcion regresa una promesa

async function mifuncionConPromesa (){
    return 'Funcion con async y promesa'
}

//mifuncionConPromesa().then(valor => console.log(valor))//aqui si se usan los parentesis

//con await simplificamos el uso de promesas

//async/await

async function funcionConPromesaYAwait(){
    let miPromesa = new Promise(resolver =>{
        resolver('Promesa con await')
    })
    console.log(await miPromesa)
}

//funcionConPromesaYAwait();


// promesas, await,async y setTimeout

async function funcionConPromesaAwaitTimeout(){
    let miPromesa = new Promise (resolver =>{
        setTimeout(()=>resolver('Promesa con await y timeout'),3000)
    })//await no se puede usr fuera de una funcion que no tenga async
    console.log(await miPromesa)
}

funcionConPromesaAwaitTimeout()


async function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let boleano= false;
        if (boleano) {
          resolve("Datos obtenidos con éxito");
        } else {
          reject("Error al obtener los datos");
        }
      }, 1000);
    });
  }
  
  async function getData() {
    try {
      const data = await fetchData();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  getData();