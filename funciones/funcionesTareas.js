import ContenedorTareas from "../componentes/contenedorTareas.js";
import opciones from "../componentes/opciones.js";

function agregarTarea(input) {
    const hora = input.value;
    if (hora === "") {
        alert("La tarea no puede estar vacía.");
        return;
    }

    const opcionElegida = opciones.options[opciones.selectedIndex].text;

    const parrafoTarea = document.createElement("p");
    parrafoTarea.textContent = `${hora} ${opcionElegida}`;
    
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", () => eliminarTarea(parrafoTarea, botonEliminar));
    

    ContenedorTareas.append(parrafoTarea, botonEliminar);
    
    contadorTareas++;
}




function eliminarTarea(tarea, boton) {
    tarea.remove();
    boton.remove();
    this.remove();
    contadorTareas--;

}

export {agregarTarea, eliminarTarea};