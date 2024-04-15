class Empleado{
    constructor(nombre, sueldo){
        this.nombre= nombre
        this.sueldo =  sueldo
    }

    obtenerDetalles(){
        return `Empleado: ${this.nombre}, sueldo: $${this.sueldo}`
    }
}

class Gerente extends Empleado{
    constructor (nombre, sueldo, departamento){
        super(nombre,sueldo)
        this.departamento= departamento
    }

    obtenerDetalles(){
        return `${super.obtenerDetalles()}, Departamento: ${this.departamento}`
    }
}

function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    if (tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente')
    }
    else if(tipo instanceof Empleado){
        console.log('Es un objeto de tipo Empleado')
    }else if(tipo instanceof Object){
        console.log('Es un objeto de tipo Object')
    }

}

let empleado1 = new Empleado ('Juan',3000);

let gerente1= new Gerente('Carlos', 5000, 'Sistemas');
console.log(gerente1.obtenerDetalles());

determinarTipo(empleado1)
determinarTipo(gerente1)