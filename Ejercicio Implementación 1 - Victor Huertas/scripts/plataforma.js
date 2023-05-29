import { Categoria } from "./categoria.js";
export class Plataforma {
    constructor(nombre, sitioWeb) {
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.categoria = [];
        this.plan = [];
    }
    mostrarListaCategorias() {
        this.categoria.forEach(e => console.log(e));
    }
    mostrarDetallePlataforma() {
        console.log(`Nombre: ${this.nombre}, 
                     Sitio Web: ${this.sitioWeb}`);
    }
    crearCategoria(nuevaCategoria) {
        let auxnuevaCategoria = new Categoria(nuevaCategoria.nombre);
        this.categoria.push(auxnuevaCategoria);
    }
}
