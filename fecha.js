export default class Fecha {
    constructor(fecha)
    {
        this.fecha = fecha
        this.fechaActual = new Date()
        this.años = (this.fechaActual.getFullYear() - this.fecha.getFullYear())
    }
 
    getAños(){return this.años}
    getMeses(){return (this.años*12)}
    getSemanas(){return (this.años*12*4)}
    getDias(){return (this.años*12*4*7)}
    getFecha(){
        return (`${this.fecha.getDate()}/${this.fecha.getMonth()}/${this.fecha.getFullYear()}`)
       }
    getDiaFecha(){
       let dia = this.fecha.getDay()
       let semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]
       return semana[dia]
    }
 }