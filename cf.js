// Obtener referencia al botón disparador del modal
var modalTrigger = document.querySelector("#modal-trigger");

// Obtener referencia al modal
var modal = document.querySelector(".modal");

// Obtener referencia al botón de cerrar el modal
var modalCloseButton = document.querySelector(".modal-close");

// Función para abrir el modal
function abrirModal() {
  modal.classList.add("modal-visible");
}

// Función para cerrar el modal
function cerrarModal() {
  modal.classList.remove("modal-visible");
}

// Agregar manejador de eventos al botón disparador para abrir el modal
modalTrigger.addEventListener("click", abrirModal);

// Agregar manejador de eventos al botón de cerrar el modal
modalCloseButton.addEventListener("click", cerrarModal);
