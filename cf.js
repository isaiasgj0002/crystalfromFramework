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
// Obtener referencia a los elementos con la clase .parallax-element
var parallaxElements = document.querySelectorAll('.parallax-element');

// Función para aplicar el efecto parallax
function aplicarParallax() {
  // Obtener el desplazamiento vertical del usuario
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Aplicar el desplazamiento a los elementos .parallax-element
  for (var i = 0; i < parallaxElements.length; i++) {
    var element = parallaxElements[i];
    var parallaxOffset = scrollTop * 0.5; // Ajusta la velocidad del parallax aquí
    element.style.transform = 'translateY(' + parallaxOffset + 'px)';
  }
}

// Agregar manejador de eventos al evento scroll
window.addEventListener('scroll', aplicarParallax);
