
import { Plataforma } from "./plataforma.js";

export class Aplicacion{
    plataforma: Plataforma[]
    constructor(){
        this.plataforma=[]
    }
    mostrarListadoPlataforma(){
        this.plataforma.forEach(e=>console.log(e))
    }
    crearPlataforma(nuevaPlataforma:Plataforma){
        let auxPlataforma = new Plataforma(nuevaPlataforma.nombre,nuevaPlataforma.sitioWeb)
        this.plataforma.push(auxPlataforma)
    }
}