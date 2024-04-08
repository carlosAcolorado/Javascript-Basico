const user = {
    name: "Manz",
    life: 99,
    power: 10,
    talk: function() {
      return "Hola!";
    }
  };
  
  Object.keys(user);        // ["name", "life", "power", "talk"]
  Object.values(user);      // ["Manz", 99, 10, ƒ]
  Object.entries(user);     // [["name", "Manz"], ["life", 99], ["power", 10], ["talk", ƒ]]


  //se puede recorrer un array con estos metodos de objeto ya que un array en un object
const animals = ["Gato", "Perro", "Burro", "Gallo", "Ratón"];


for (let i=0 ;i< animals.length ; i++){
    console.log(animals[i])
}
Object.keys(animals);     // [0, 1, 2, 3, 4]
Object.values(animals);   // ["Gato", "Perro", "Burro", "Gallo", "Ratón"]
Object.entries(animals);  // [[0, "Gato"], [1, "Perro"], [2, "Burro"], [3, "Gallo"], [4, "Ratón"]]


//convertir un array en un objeto
const keys = ["name", "life", "power", "talk"];
const values = ["Manz", 99, 10, function() { return "Hola" }];

const entries = [];
for (let i of Object.keys(keys)) {
  const key = keys[i];
  const value = values[i];
  entries.push([key, value]);
}

const users = Object.fromEntries(entries);     // {name: 'Manz', life: 99, power: 10, talk: ƒ}