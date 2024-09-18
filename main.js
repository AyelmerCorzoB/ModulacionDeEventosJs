import { subtitulo, titulo } from "./componentes/titulo.js";

import ContenedorTareas from "./componentes/contenedorTareas.js";
import crearTareaContenedor from "./componentes/crearTareaContenedor.js";
import root from "./componentes/llamadaHtml.js";

root.append(titulo);
root.append(crearTareaContenedor);
root.append(subtitulo)
root.append(ContenedorTareas);