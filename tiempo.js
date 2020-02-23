export default class Tiempo{
    constructor(hora, minutos, periodo)
    {
        this.hora = hora
        this.minutos = minutos
        this.periodo = periodo
    }

    getFormato12(){
        return(`${this.hora} : ${this.minutos} ${this.periodo}`)
    }
    getFormato24(){
        if(this.periodo=="pm")
        {
            let newHora=this.hora+12
            return(`${newHora} : ${this.minutos}`)
        }
        else{
            return(`${this.hora} : ${this.minutos}`)
        }
    }
}