const owner = 'Lucy'
const address = '123 Avenue.'

//funcion
function dogGreeting (owner, address){
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`)
}

//objeto
const newHouse = {
    dogName:'Coconut'
}

//Manipular el contexto de acuerto a lo que necesitemos
dogGreeting.call(newHouse,owner,address)

const necessaryValues = [owner,address]
dogGreeting.apply(newHouse,necessaryValues) //usando un array para evitar el uso de muchas comas

const bindWithBind= dogGreeting.bind(newHouse,owner,address)
bindWithBind() //se debe hacer esto cuando se usa bind ya que se convierte la funcion en otra funcion