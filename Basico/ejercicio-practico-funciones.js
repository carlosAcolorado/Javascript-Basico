//create PowerpuffGirl objets

function PowerPuffGirl (name, color, superpower){
    this.name = name,
    this.color = color,
    this.superpower = superpower,
    this.isLeader = false
    //metodo para mostrar la informacion
    this.displayInfo = function(){
        console.log(`Powerpuff Girl Information:
        Name: ${this.name}
        Color: ${this.color}
        SuperPower: ${this.superpower}
        ${this.isLeader ? 'Leader: Yes': 'Leader: No'}
        `)
    }

    this.becomeLeader = function(){
        this.isLeader = true
        console.log(`${this.name} has become the leader of the powerpuff girls`)
    }
}

const blossom = new PowerPuffGirl('Blossom','Pink','Ice')
const buttercup = new PowerPuffGirl('Buttercup','Green','Super Strengt' )
const bubbles = new PowerPuffGirl('Bubbles','Blue','Flight')

blossom.displayInfo()
buttercup.displayInfo()
bubbles.displayInfo()

blossom.becomeLeader()

blossom.displayInfo()
buttercup.displayInfo()
bubbles.displayInfo()