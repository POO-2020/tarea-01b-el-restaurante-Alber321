import Precio from "./precio.js"
export default class ElementoP {
    constructor(producto, cantidad){
        this.producto = producto
        this.cantidad = cantidad
    }
    getDescripcion(){
        let total = this.cantidad * this.producto.precio.valor
        total = new Precio(total)
        return (`${this.cantidad} X ${this.producto.nombre} ${total.getPrecio()}`)
    }
}