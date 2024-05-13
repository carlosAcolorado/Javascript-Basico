const deck = ['♤','♡','♧','♢','♤','♡','♧','♢','♤','♡','♧','♢'];
const players =[];

//algoritmo de fisher-Yates algoritmo para repartir cartas
function shuffleDeck(){
    for (let i = deck.length-1; i>0;i--){
       const j = Math.floor(Math.random()*(i+1));
        [deck[i],deck[j]] = [deck[j],deck[i]]; //intercambia la posicion de los elementos del array
    }
}

//funcion para repartir las cartas 
function dealCards(numCard){
    const dealCards = deck.splice(0,numCard)
    return dealCards
}

//funcion para repartir en numero de cartas con respecto a la cantidad de jugadores
function player(num){
   let jugadores = num
    for (let i=0; i<num;i++){ 
        let cartas = deck.length/jugadores--
        players[i] = dealCards(cartas) 
        console.log(`Cartas jugador ${i+1} => ${players[i]}`)
    }
    
}

shuffleDeck();
player(3);
