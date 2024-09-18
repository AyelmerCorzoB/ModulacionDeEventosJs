const headerContent = document.createElement("header") 

const titulo = document.createElement("h1");
titulo.textContent = "Tareas Diarias";


headerContent.append(titulo)

const subtitulo = document.createElement("h2");
subtitulo.textContent = "Tareas por hacer";


export { headerContent, subtitulo };
