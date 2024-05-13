//filter()
const numbers = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = numbers.filter(number => number %2===0);

console.log(numbers)
console.log(evenNumbers);


//el acumulador: alamacena el valor de la suma de cada uno de los datos y current el valor de cada indice, ademas el ultmo parametro es un valor inicial
const numberReduce = [1,2,3,4,5]
const suma = numberReduce.reduce((acummulator, currentValue)=>acummulator+currentValue,0)

console.log(numberReduce);
console.log(suma)

//reduce() case 2
const words = ['apple','banna','hello','bye','bye'];
const wordFrecuency = words.reduce((acummulator,currentValue)=>{
    if (acummulator[currentValue]){
        acummulator[currentValue]++
    }else{
        acummulator[currentValue]=1
    }
    return acummulator
},{})

console.log(wordFrecuency)

// exercise: calificacion promedio aprobatoria

const grades = [85,92,60,78,66,88,50,94];
const passinGrades = grades.filter(grade => grade>= 70)
const averagePassingGrades = passinGrades.reduce((sum,grade)=>sum + grade,0) / passinGrades.length

console.log('Original Grades: ', grades)
console.log('Passing Grades: ', passinGrades)
console.log('Average Passing Grade :', averagePassingGrades)