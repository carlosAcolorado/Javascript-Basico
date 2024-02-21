const user = {
    name: "Manz",
    role: "streamer",
    life: 99
  }

  const fullUser = {
    ...user, /*sintaxis de propagacion se utiliza para expandir una expresión iterable 
             (como un array o un objeto) en lugares donde se esperan múltiples argumentos o elementos.*/
    power: 25,
    life: 50
  }

  /*
  En este ejemplo, creamos un nuevo objeto fullUser con las mismas propiedades de user, 
  sin embargo, además de poseer las anteriores, añadimos la nueva propiedad power y sobreescribimos 
  la propiedad life con el valor 50.
  */
  const { name, role,moda="elegante", life } = user; //si la varible moda no esta definida se crea esta variable
  console.log({ name, role,moda, life });
  console.log(fullUser)
  console.log(name);
  console.log(role, life);


  const usuario = {
    name: "Manz",
    role: "streamer",
    life: 99,
    features: ["learn", "code", "paint"]
  }
  
  const fullUsuario = {
    ...usuario, /*el array se ha copiado pero como si fuera un acceso directo al array de usuario 
    si se cambia en uno se cambia en el otro*/
    //...structuredClone(user) al usar structuredClone se crea un nuevo objeto no una referencia del array
    power: 25,
    life: 50
  }


  //estructuras anidadas 
  const nombre = {
    name: "Manz",
    role: "streamer",
    attributes: {
      height: 183,
      favColor: "blueviolet",
      hairColor: "black"
    }
  }

  // Extraemos propiedad attributes (objeto con 3 propiedades)
const { attributes } = nombre;
console.log(attributes);

// Extraemos propiedad height (number)
const { attributes: { height } } = nombre;
console.log(height);

// Extraemos propiedad height (number) y la cambiamos por nombre size
const { attributes: { height: size } } = nombre;
console.log(size);


const  nombrando= {
  algo: "Manz",
  role: "streamer",
  life: 99
}
 
const { algo, ...rest } = nombrando;
/*En este caso, la propiedad algo la desestructuramos como variable y en el caso de rest la 
desestructuramos como un objeto que contiene las propiedades role y life.*/

//parametros desestructurados
const prueba = {
  name: "Manz",
  role: "streamer",
  life: 99
}

/*function show(data) {
  const stars = "⭐".repeat(data.life / 20);
  return `Nombre: ${data.name} (${data.role}) ${stars}`;
}*/

const gamer = {
  name: "Manz",
  role: "streamer",
  life: 100
}

function show({ name, role, life }) { //se desestrucutra usando solo las propiedades que se necesitan y no todo el objeto 
  const stars = "⭐".repeat(life / 20);
  return `Nombre: ${name} (${role}) ${stars}`;
}

show(gamer);   // "Nombre: Manz (streamer) ⭐⭐⭐⭐"

//la desestructuracion solo funciona con estructuras de datos