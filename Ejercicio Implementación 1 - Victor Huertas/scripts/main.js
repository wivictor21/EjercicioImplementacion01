import { Actor } from "./actor.js";
import { Aplicacion } from "./aplicacion.js";
import { Categoria } from "./categoria.js";
import { Director } from "./director.js";
import { Episodio } from "./episodio.js";
import { Plan } from "./plan.js";
import { Plataforma } from "./plataforma.js";
import { Serie } from "./serie.js";
let objAplicacion = new Aplicacion();
// Objetos genericos
let objPlataforma = new Plataforma("", "");
let objPlan = new Plan(0);
let objCategoria = new Categoria("");
let objSerie = new Serie("", "");
let objEpisodio = new Episodio("", "", 0);
let objActor = new Actor("", "", "");
let objDirector = new Director("", "", "");
// Implementacion de creacion de Plataformas
objPlataforma.nombre = "Netflix";
objPlataforma.sitioWeb = "https://www.netflix.com/";
objAplicacion.crearPlataforma(objPlataforma);
objPlataforma.nombre = "Disney+";
objPlataforma.sitioWeb = "https://www.disneyplus.com/";
objAplicacion.crearPlataforma(objPlataforma);
objPlataforma.nombre = "HBO Max";
objPlataforma.sitioWeb = "https://www.hbomax.com/";
objAplicacion.crearPlataforma(objPlataforma);
// Mostrar Lista Aplicacion
objAplicacion.mostrarListadoPlataforma();
// Implementacion de creacion de Plataformas
objCategoria.nombre = "Accion";
objAplicacion.plataforma[0].crearCategoria(objCategoria);
objCategoria.nombre = "Drama";
objAplicacion.plataforma[1].crearCategoria(objCategoria);
objCategoria.nombre = "Comedia";
objAplicacion.plataforma[2].crearCategoria(objCategoria);
// Mostrar Lista Categoria
objAplicacion.plataforma[0].mostrarListaCategorias();
// Implementacion de creacion de Serie
objSerie.nombre = "Good Doctor";
objAplicacion.plataforma[0].categoria[0].crearSerie(objSerie);
objSerie.nombre = "Dr Who";
objAplicacion.plataforma[0].categoria[0].crearSerie(objSerie);
// Mostrar Lista Serie
objAplicacion.plataforma[0].categoria[0].mostrarListadoSerie;
// Implementacion de Plan
objPlan.precio = 39900;
objAplicacion.plataforma[0].plan[0] = objPlan;
// Implementacion de creacion Episodios
objEpisodio.nombre = "Episodio 1";
objAplicacion.plataforma[0].categoria[0].series[0].episodio[0] = objEpisodio;
objEpisodio.nombre = "Episodio 2";
objAplicacion.plataforma[0].categoria[0].series[0].episodio[0] = objEpisodio;
objEpisodio.nombre = "Episodio 3";
objAplicacion.plataforma[0].categoria[0].series[0].episodio[0] = objEpisodio;
objEpisodio.nombre = "Episodio 4";
objAplicacion.plataforma[0].categoria[0].series[0].episodio[0] = objEpisodio;
objEpisodio.nombre = "Episodio 5";
objAplicacion.plataforma[0].categoria[0].series[0].episodio[0] = objEpisodio;
// Implementacion de creacion Actor a una serie
objActor.nombre = "Adam Sandler";
objActor.fotografia = ":)";
objActor.descripcion = "Reconocido Actor...";
objAplicacion.plataforma[0].categoria[0].series[0].crearActor(objActor);
// Implementacion de creacion Director a una serie
objDirector.nombre = "Spielberg";
objDirector.fotografia = ":)";
objDirector.descripcion = "Reconocido Director...";
objAplicacion.plataforma[0].categoria[0].series[0].crearDirector(objDirector);
// Mostrar Objeto Aplicacion
console.log(objAplicacion);
