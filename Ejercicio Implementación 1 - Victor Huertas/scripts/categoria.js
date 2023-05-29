import { Serie } from "./serie.js";
export class Categoria {
    constructor(nombre) {
        this.nombre = nombre;
        this.series = [];
    }
    mostrarListadoSerie() {
        this.series.forEach(e => console.log(e));
    }
    crearSerie(nuevaSerie) {
        let auxNuevaSerie = new Serie(nuevaSerie.nombre, nuevaSerie.imagenRepresentativa);
        this.series.push(auxNuevaSerie);
    }
}
