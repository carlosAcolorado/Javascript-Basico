//enlace implicito por el this . Implicit biding 
//objetos con funciones por dentro
const house = {
    dogname: 'Fido',
    dogGreeting: function (){
        console.log(`Hi I'm ${this.dogname}`)
    }
}

house.dogGreeting()

//este ejemplo no funcionaria ya que la varible esta fuera del contexto
//para que pueda funcionar se debe usar un metodo call y como argumento pasar el objeto
function dogGreeting (){
    console.log(`Hi I'm ${this.dogName}`)
}

//enlace explicito

const house1 = {
    dogName: 'Fido',
    dogAge : 3
}

const newHouse = {
    dogName: 'Coconut',
}

dogGreeting.call(newHouse)

function newDogGreeting (owner,address){
    console.log(`Hi I'm ${this.dogName} and I live with ${owner} on ${address}`)
}

const owner = 'Lucy'
const address = 12345

newDogGreeting.call(house1,owner,address) //vinculando una funcion con un objeto con el call