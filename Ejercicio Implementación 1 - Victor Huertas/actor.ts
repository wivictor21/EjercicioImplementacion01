import { Persona } from "./persona.js";

export class Actor extends Persona{
    constructor(nombre:string,fotografia:string,descripcion:string){
        super(nombre,fotografia,descripcion)
    }
    mostrardetalle():void{
        console.log(`Nombre: ${this.nombre}, 
                     Fotografia: ${this.fotografia}, 
                     Descripcion: ${this.fotografia}`)
    }
}