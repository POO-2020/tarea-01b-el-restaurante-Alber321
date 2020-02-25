import Precio from "./precio.js"
export default class Pedido {
    constructor(fecha,hora,cliente){
        this.fecha = fecha
        this.hora = hora 
        this.cliente = cliente
        this.elep = []
    }
    agregarElementos(elemento){
        this.elep.push(elemento)
    }
    listarElementos(){
        console.log ("Elementos: ")
        this.elep.forEach((ele, i) => {
            console.log (`(${i + 1}) --- ${ele.getDescripcion()}`);
        });
    }
    getCostoTotal(){
        let total = 0
        this.elep.forEach((ele) => {
            total = (total + (ele.producto.precio.valor * ele.cantidad))
        })
        total = new Precio (total)
        return total.getPrecio()
    }
    getProductos(){
        let productos = 0
        this.elep.forEach((ele, i) => {
            productos = productos + ele.cantidad
        })
        return productos;
    }
    getNumeroElementos(){
        let numEl = 0
        this.elep.forEach((ele, i) => {
            numEl = numEl + 1
        })
        return numEl;
    }
    getResumen(){
        return`${this.fecha.getFecha()} ${this.hora.getFormato12()} - ${this.getNumeroElementos()} 
        elementos con ${this.getProductos()} productos - total: ${this.getCostoTotal()}`
    }
    
}