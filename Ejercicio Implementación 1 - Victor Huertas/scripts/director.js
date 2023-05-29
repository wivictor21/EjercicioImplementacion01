import { Persona } from "./persona.js";
export class Director extends Persona {
    constructor(nombre, fotografia, descripcion) {
        super(nombre, fotografia, descripcion);
    }
    mostrardetalle() {
        console.log(`Nombre: ${this.nombre}, 
                     Fotografia: ${this.fotografia}, 
                     Descripcion: ${this.fotografia}`);
    }
}
