import { Serie } from "./serie.js";

export class Categoria{
    nombre:string
    series: Serie[]
    constructor(nombre:string){
        this.nombre=nombre
        this.series=[]
    }
    mostrarListadoSerie():void{
        this.series.forEach(e=>console.log(e))
    }
    crearSerie(nuevaSerie:Serie):void{
        let auxNuevaSerie = new Serie(nuevaSerie.nombre,nuevaSerie.imagenRepresentativa)
        this.series.push(auxNuevaSerie)
    }
}