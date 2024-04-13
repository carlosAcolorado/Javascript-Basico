class DipositivoEntrada{
    constructor (tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca= marca
    }

    get tipoEntrada (){
        return this._tipoEntrada
    }

    set tipoEntrada (tipoEntrada){
        this._tipoEntrada = tipoEntrada
    }

    get marca (){
        return this._marca
    }

    set marca (marca){
        this._marca = marca
    }

}

class Raton extends DipositivoEntrada{

    static contadorRatones = 0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca)
        this._idRaton =++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton
    }

    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}]`
    }
}

class Teclado extends DipositivoEntrada {
    static contadorTeclados = 0;

    constructor (tipoEntrada,marca){
        super(tipoEntrada,marca)
        this._idTeclado = ++Teclado.contadorTeclados
    }

        get idTeclado(){
            return this._idTeclado
        }

        toString(){
            return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}]`
        }
    }

class Monitor {

    static contadorMonitores = 0;

    constructor (marca,tmañao){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tmañao;
    }

    get idMonitor (){
        this._idMonitor
    }

    get marca(){
        return this._marca
    }

    set marca(marca){
        this._marca = marca
    }

    get tamaño(){
        return this._tamaño
    }

    set tamaño(tamaño){
        this._tamaño = tamaño
    }

    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}]`
    }
}

class Computadora {
    static contadorComputadoras = 0;

    constructor (nombre,monitor,raton,teclado){
        this._idComputadora = ++Computadora.contadorComputadoras
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }

    toString(){
        return `----Computadora${this._idComputadora}---: ${this._nombre} 
Monitor: ${this._monitor}
Raton: ${this._raton}
Teclado: ${this._teclado}`
    }
}

class Orden {
    static contadorOrdenes = 0;

    constructor(){
        this._idOrdenes= ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrdenes(){
        return this._idOrdenes
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora)
    }

    mostrarOrden(){
        let computadorasOrden = ''

        for (let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`;
        }
        console.log(`Orden ${this._idOrdenes}, Computadoras: ${computadorasOrden}`)
    }
}



let raton1 = new Raton('USB','HP');
console.log(raton1.toString());

let raton2 = new Raton('USB','HP');
raton2.marca = 'DELL'
console.log(raton2.toString());

let teclado1 = new Teclado('USB','MSI');
console.log(teclado1.toString());

let teclado2 = new Teclado('Bluetooth','Trust');
console.log(teclado2.toString());


let monitor1 = new Monitor ('Dell','19"');
console.log(monitor1.toString())

let monitor2 = new Monitor('HP','29"');
console.log(monitor2.toString());

let computador1 = new Computadora('Dell',monitor1,raton1,teclado1)
console.log(computador1.toString())

let computador2 =  new Computadora('HP',monitor2,raton2,teclado2)

let orden1 = new Orden()
orden1.agregarComputadora(computador1);
orden1.agregarComputadora(computador2)
orden1.mostrarOrden()

let orden2 = new Orden()
orden2.agregarComputadora(computador1);
orden2.agregarComputadora(computador2)
orden2.mostrarOrden()