import { Actor } from "./actor.js";
import { Director } from "./director.js";
import { Episodio } from "./episodio.js";

export class Serie{
    nombre: string
	imagenRepresentativa: string
	actor: Actor[]
    director: Director[]
	episodio: Episodio[]
    constructor(nombre: string,imagenRepresentativa: string){
        this.nombre=nombre
        this.imagenRepresentativa=imagenRepresentativa
        this.actor=[]
        this.director=[]
        this.episodio=[]
    }
    mostrarDirectores(){
        this.director.forEach(e=>console.log(e))
    }
    mostrarActories(){
        this.actor.forEach(e=>console.log(e))
    }
    mostrarDetalleSerie(){
        console.log(`Nombre: ${this.nombre}, 
                     Imagen: ${this.imagenRepresentativa}`)
    }
    crearActor(nuevoActor:Actor){
        let auxNuevoActor = new Actor(nuevoActor.nombre,nuevoActor.fotografia,nuevoActor.descripcion)
        this.actor.push(auxNuevoActor)
    }
    crearDirector(nuevoDirector:Director){
        let auxNuevoDirector = new Director(nuevoDirector.nombre,nuevoDirector.fotografia,nuevoDirector.descripcion)
        this.director.push(auxNuevoDirector)
    }
}