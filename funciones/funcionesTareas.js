import ContenedorTareas from "../componentes/contenedorTareas.js";
import opciones from "../componentes/opciones.js";
import EliminarAll from "../componentes/botonEliminarTodo.js"

function agregarTarea(input) {
    const TarjetaTarea = document.createElement("div");
    TarjetaTarea.id = "tarjetaTarea"
    const hora = input.value;
    
    if (hora === "") {
        ContenedorTareas.innerHTML = `<p> No puede quedar vacio </p>`;
        return;
    }

    const opcionElegida = opciones.options[opciones.selectedIndex].text;

    const parrafoTarea = document.createElement("p");
    parrafoTarea.innerHTML = `<p><strong>${hora}</strong> ${opcionElegida}</p>`;
    
    const botonActualizar = document.createElement("button");
    botonActualizar.textContent = "Actualizar";
    botonActualizar.id = "botonActualizar"

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.id = "botonEliminar"
    botonEliminar.addEventListener("click", () => eliminarTarea(TarjetaTarea));

    EliminarAll.addEventListener("click", () => eliminarTodo(TarjetaTarea))
    
    TarjetaTarea.append(parrafoTarea, botonActualizar,botonEliminar)
    ContenedorTareas.append( TarjetaTarea);
}

function eliminarTarea(tarjeta) {
    tarjeta.remove();
}


function eliminarTodo (boton){
    boton.remove();
}

export {agregarTarea, eliminarTarea, eliminarTodo };