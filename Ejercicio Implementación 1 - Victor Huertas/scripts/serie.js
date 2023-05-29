import { Actor } from "./actor.js";
import { Director } from "./director.js";
export class Serie {
    constructor(nombre, imagenRepresentativa) {
        this.nombre = nombre;
        this.imagenRepresentativa = imagenRepresentativa;
        this.actor = [];
        this.director = [];
        this.episodio = [];
    }
    mostrarDirectores() {
        this.director.forEach(e => console.log(e));
    }
    mostrarActories() {
        this.actor.forEach(e => console.log(e));
    }
    mostrarDetalleSerie() {
        console.log(`Nombre: ${this.nombre}, 
                     Imagen: ${this.imagenRepresentativa}`);
    }
    crearActor(nuevoActor) {
        let auxNuevoActor = new Actor(nuevoActor.nombre, nuevoActor.fotografia, nuevoActor.descripcion);
        this.actor.push(auxNuevoActor);
    }
    crearDirector(nuevoDirector) {
        let auxNuevoDirector = new Director(nuevoDirector.nombre, nuevoDirector.fotografia, nuevoDirector.descripcion);
        this.director.push(auxNuevoDirector);
    }
}
