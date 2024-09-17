import ContenedorTareas from "../componentes/contenedorTareas.js";


function agregarTarea(input) {
    const textoTarea = input.value;
    if (textoTarea === "") {
        alert("La tarea no puede estar vacía.");
        return;
    }

    const parrafoTarea = document.createElement("p");
    parrafoTarea.textContent = textoTarea;
    
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click",() =>  eliminarTarea(parrafoTarea, botonEliminar));

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