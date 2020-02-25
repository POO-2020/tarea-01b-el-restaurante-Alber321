import Precio from "./precio.js"
import Producto from "./producto.js"
import ElementoP from "./elemento_pedido.js"
import Direccion from "./direccion.js"
import Cliente from "./cliente.js"
import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Pedido from "./pedido.js"
import Restaurante from "./restaurante.js"

class Main {
    constructor(){
        this.precio = new Precio(80.50)
        this.producto = new Producto("Pizza", this.precio)
        this.producto2 = new Producto ("Dogos", new Precio(15.50))
        this.EleP = new ElementoP (this.producto, 1)
        this.EleP2 = new ElementoP (this.producto2, 2)
        this.direccion = new Direccion("Calle Falsa", 777, 23, "Verdadera", 28231, "Colima", "Colima")
        this.cliente = new Cliente("Luis Alber Pro", this.direccion, 3122100818)
        this.pedido = new Pedido(new Fecha(new Date(2020,1,11)), new Tiempo(10,23,"am"), this.cliente) 
        this.pedido.agregarElementos(this.EleP)
        this.pedido.agregarElementos(this.EleP2)
        this.pedido.agregarElementos(this.EleP2)

        this.restaurante = new Restaurante("Gustoo", 3120230293,this.direccion)
    }
    pruebaPrecio(){
        console.log(this.precio.getPrecio())
    }
    pruebaElementoProducto(){
        console.log(this.EleP.getDescripcion())
    }
    pruebaDireccion(){
        console.log(this.direccion.getFormatoCorto())
        console.log(this.direccion.getFormatoExtendido())
    }
    pruebaCliente(){
        console.log(this.cliente.getPerfil())
    }
    pruebaPedido(){
        console.log(this.pedido.getResumen())
        console.log(this.pedido.getNumeroElementos())
        console.log(this.pedido.getProductos())
        console.log(this.pedido.getCostoTotal())
        this.pedido.listarElementos(    )
    }
    pruebaRestaurante(){
        this.restaurante.registrarProducto(this.producto)
        this.restaurante.registrarProducto(this.producto2)
        this.restaurante.registrarPedido(this.pedido)

        this.restaurante.listaProductos()
        this.restaurante.listaPedidos()
    }
}
let prueba = new Main()
prueba.pruebaPrecio()
prueba.pruebaElementoProducto()
prueba.pruebaDireccion()
prueba.pruebaCliente()
prueba.pruebaPedido()
prueba.pruebaRestaurante()