//las propiedas de los archivos json deben tener comillas dobles 
//los textos siempre con comillas dobles
//Tipos de datos como function, date, regexo expresiones regulares   
//u otros, no es posible almacenarlos en un JSON

const json = `{
    "name": "Manz",
    "life": 3,
    "totalLife": 6,
    "power": 10,
    "dead": false,
    "props": ["invisibility", "coding", "happymood"],
    "senses": {
      "vision": 50,
      "audition": 75,
      "taste": 40,
      "touch": 80
    }
  }`
//convirtiendo un json en un objeto 
  const user = JSON.parse(json);

  console.log(user.senses.vision)

  //convirtiendo a json

  const player = {
    name: "Manz",
    life: 99,
    power: 10,
  };

  //con un array se filtran los elementos que queremos para el json, en este caso solo pasan name y power
  JSON.stringify(player,["name","power"])

