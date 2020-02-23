export default class Direccion {
    constructor(calle, numE, numI, colonia, cp, ciudad, municipio){
        this.calle = calle
        this.numE = numE
        this.numI = numI
        this.colonia = colonia
        this.cp = cp
        this.ciudad = ciudad 
        this.municipio = municipio
    }
    getFormatoCorto(){
        return (`${this.calle} #${this.numE}`)
    }
    getFormatoExtendido(){
        return (`${this.calle}, #${this.numE}, #${this.numI}, Colonia: ${this.colonia},
        ${this.cp}, ${this.ciudad}, ${this.municipio} `)
    }
}