class Pedido {
    constructor(fecha,hora,cliente){
        this.fecha = fecha
        this.hora = hora 
        this.cliente = cliente
        this.elementoP = new Array()
    }
    getResumen(){
        return(`${this.fecha.getFecha()} ${this.getNumeroElementos()} elementos con ${th}`)
    }
    getNumeroElementos(){
        return this.elementoP.length}
    }
    getNumeroProductos(){
        let cant = 0
        this.elementoP.forEach(elemento => {
            cant = (elemento.cantidad)
        })
    }
}