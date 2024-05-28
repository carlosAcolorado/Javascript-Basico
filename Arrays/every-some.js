const ages = [21,25,30,19,2]

//every verifica si todos los elementos cumplen una condicion
//no muta el array original
const allAreAdults = ages.every( age => 20)
console.log(ages);
console.log(allAreAdults);

//some verifica si algun elemento del array cumple una condicion
//no muta el array

const atLeastOneover30 = ages.some( age => age >30)
console.log(atLeastOneover30);