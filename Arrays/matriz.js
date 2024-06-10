
let arreglo = [[50,100,200,400],[800,600,300,40]];

//ITERAR UNA MATRIZ
 //operaciones mas comunes con arrays bidimensionales
 for(let renglon = 0; renglon < arreglo.length; renglon++ ){ //primer for para iterar en las filas  y segundo for para iterar en las columnas
    for(let columnas = 0; columnas < arreglo[renglon].length;columnas++ ){
        console.log(`En en indice [${renglon}][${columnas}] el valor es: ${arreglo[renglon][columnas]}`)
    }
 }


 let matrix = [
    [1,2,3], //filas y columnas 
    [4,5,6],
    [7,8,9]
 ]


function findElement(matrix,element){
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]===element){
                return true
            }    
        }
    }
    return false
}

console.log(findElement(matrix,5))

//duplicar una matriz
function duplicateMatrix(matrix) {
    let newMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
      newMatrix[i] = [...matrix[i]]; //agrega todos los elementos del array que se encuentran en ese indice
    }
    return newMatrix;
  }
  console.log(duplicateMatrix(matrix));




  // ganador competencia
  function tournamentWinner(competicion,resultado){
    const score ={}
    let winner = ''

    for (let i =0; i < competicion.length; i++){
        const [local,visitante] = competicion[i]
        const winningTeam= resultado[i] === 0? visitante: local
        score[winningTeam] = (score[winningTeam] || 0) + 3 
        if (!winner || score[winningTeam] > score[winner]){
            winner = winningTeam
        }
    }
    return winner
  }

  const competidores=[
    ['Javascript','C#'],
    ['C#','Python'],
    ['Python','Javascript']
  ]

  const result =[0,0,1]

  console.log(tournamentWinner(competidores,result))

  /*La función tournamentWinner() toma dos argumentos:

competitions: un array de arrays donde cada subarray consta de dos equipos que compiten entre sí. El primer equipo se considera el equipo de casa y el segundo el equipo visitante.
results: un array de resultados de las competencias. Si el resultado es 0, el equipo visitante gana la competencia; si es 1, el equipo de casa gana.

La función inicialmente crea un objeto vacío scores para almacenar los equipos y sus respectivas puntuaciones, y una variable winner para llevar un registro del equipo ganador.
Luego, recorre todas las competencias. Para cada competencia, determina el equipo ganador (winningTeam).
Si el resultado es 0 (lo que significa que el equipo visitante ganó), winningTeam es el equipo visitante; de lo contrario, es el equipo de casa. Luego, suma 3 puntos a la puntuación del equipo ganador en el objeto scores. Si el equipo no está aún en el objeto scores, se le asigna una puntuación inicial de 0.
Después, verifica si la puntuación del winningTeam es mayor que la puntuación del equipo guardado en winner. Si es así, o si winner aún no se ha asignado, actualiza winner con el winningTeam.
Finalmente, después de recorrer todas las competencias, la función devuelve el winner, es decir, el equipo con la mayor puntuación.
El código al final simplemente llama a la función tournamentWinner() con un conjunto de competencias y resultados y registra el equipo ganador.*/

