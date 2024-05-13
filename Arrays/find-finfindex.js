//find

const multipleof5 = [5,10,15,20]
const firtNumberGreaterThan10= multipleof5.find(number =>number >10)
 console.log(multipleof5)
 console.log(firtNumberGreaterThan10)

 //findIndex()

 const randomNumber = [6,14,27,56,40]
 const indexNUmber = randomNumber.findIndex(number => number >50)

 console.log(randomNumber)
 console.log(indexNUmber)



 //------------------------------------------------------------------------------------
 //excercise: persona ganadora de una lista 

 const winnerParticipants = 
 [  {id:1,name:'Jennifer',ticketNumber:55},
    {id:2,name:'Carlos',ticketNumber:25},
    {id:3,name:'Emily',ticketNumber:11}
 ]

 function findWinnner(name){
    const winner = winnerParticipants.find(participants=> participants.name === name)
    return winner || 'No winner found with this name'
 }

 function findWinnerById (ticketNumber){
    const index = winnerParticipants.findIndex(participants=> participants.ticketNumber ===ticketNumber)
    return index !==-1? index : 'No winner found with that ticket'
 }

 function displayWinnerInformation(winner){
    if (winner !== undefined && winner != null && winner !== 'No winner found with tihs name'){
        console.log('Winner information: ',winner)
    }else {
        console.log('No winner found')
    }
       
 }

 const winnerByName = findWinnner('Emily');
 const indexWinner = findWinnerById(23);

 displayWinnerInformation(winnerByName)