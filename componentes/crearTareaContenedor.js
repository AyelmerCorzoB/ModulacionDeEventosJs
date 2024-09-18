import tareaInput from "./creacionDeInputs.js";
import botonEnviar from "./botonEnviar.js";
import opciones from "./opciones.js";
import { agregarTarea } from "../funciones/funcionesTareas.js";

const crearTareaContenedor = document.createElement("div");
crearTareaContenedor.id = "ContenedorInputs"
botonEnviar.addEventListener("click", () => agregarTarea(tareaInput));

crearTareaContenedor.append(tareaInput);
crearTareaContenedor.append(opciones);
crearTareaContenedor.append(botonEnviar);


export default crearTareaContenedor;