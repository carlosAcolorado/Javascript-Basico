
//metodo map() realiza una operacion con cada uno de los elementos 
const number = [1,2,3,4,5]
const squareNumbers = number.map(num => num * num)
console.log (number);
console.log(squareNumbers);

//forEach()

const colors = ['red','pink','blue']
const iterarColors = colors.forEach(color => console.log(color));

//excercise grados farenhei a celcius
const temperaturasEnFarenheit = [32,68,95,104,212]
const temperaturasEnCelcius = temperaturasEnFarenheit.map(farenheit =>(5/9)* (farenheit-32));

console.log(temperaturasEnFarenheit);
console.log(temperaturasEnCelcius)

//exercise suma numeros de un array
const newNumbers = [1,2,3,4,5];
 let sum = 0;
 newNumbers.forEach(number => { sum += number});
 console.log(sum)