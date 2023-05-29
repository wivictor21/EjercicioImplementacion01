import { Plataforma } from "./plataforma.js";
export class Aplicacion {
    constructor() {
        this.plataforma = [];
    }
    mostrarListadoPlataforma() {
        this.plataforma.forEach(e => console.log(e));
    }
    crearPlataforma(nuevaPlataforma) {
        let auxPlataforma = new Plataforma(nuevaPlataforma.nombre, nuevaPlataforma.sitioWeb);
        this.plataforma.push(auxPlataforma);
    }
}
