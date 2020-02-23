class ElementoP {
    constructor(producto, cantidad){
        this.producto = producto
        this.cantidad = cantidad
    }
    getDescripcion(){
        let cant = this.cantidad * this.producto.precio.valor
        return (`${this.cantidad} x ${this.producto.nombre}, ${"$" +
        new Intl.NumberFormat("en-US").format(cant)}`)
    }
}