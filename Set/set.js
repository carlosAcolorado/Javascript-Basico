/*Los Set en Javascript son estructuras de datos nativas muy interesantes para representar conjuntos de datos. La característica principal es que los datos insertados no se pueden repetir.
se pueden incluir cualquier tipo de dato*/

const set = new Set([5, 6, 7, 8]);
set.size;    // 4 me da el tamaño del set

set.add(9);
set.add("A");
set.add(2);
set.has(2);     //  busca un elemento si lo encuentra regresa verdadero de lo contratrio entrega false
set.has(34)     // false
set.delete(5); //borra un elemento

//set.clear(); //nos borra el elemento 


console.log(set);


//convirtiendo un set en array
const set1 = new Set([5, "A", [99, 10, 24]]);
set1.size;  // 3

const clonedArray = [...structuredClone(set1)]; //crea un nuevo array con todos los elementos 
const array = [...set1]; // crea una referencia de elemento y si mocificamos este se modifica el original


//crear un set desde un array

const array1 = [5, 4, 3, 3, 4];

const set2 = new Set(array1);

console.log(set2)


// *** Set
const set3 = new Set([1, "A", true]);                 // OK
const set4 = new Set([{ name: "Manz" }, [2, 30]]);    // OK

// *** WeakSet
const set5 = new WeakSet([1, "A", true]);
// ERROR: Uncaught TypeError: Invalid value used in weak set

const set6 = new WeakSet([{ name: "Manz" }, [2, 30]]); // OK