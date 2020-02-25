export default class Restaurante {
    constructor(nombre, telefono, direccion){
        this.nombre = nombre
        this.telefono = telefono 
        this.direccion = direccion
        this.productos = []
        this.pedidos = []
    }
    registrarProducto(producto){
        this.productos.push(producto)
    }
    registrarPedido(pedido){
        this.pedidos.push(pedido)
    }
    listaProductos(){
        console.log("Productos: ")
        this.productos.forEach( (produ) => {
            console.log(produ.getDescripcion())
        })
    }
    listaPedidos(){
        console.log("Pedidos: ")
        this.pedidos.forEach( (pedi, i) => {
            console.log(`(${i + 1}) --- ${pedi.getResumen()}`)
        })
    }

}