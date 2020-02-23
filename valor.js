export default class Valor {
    constructor(valor){
        this.valor = valor
    }
    getPrecio(){
        return "$" + new Intl.NumberFormat("en-US").format(this.valor);
    }
}