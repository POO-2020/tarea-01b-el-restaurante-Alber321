export default class Precio {
    constructor(valor){
        this.valor = valor
    }
    getPrecio(){
        return "$" + new Intl.NumberFormat("en-US").format(this.valor);
    }
}