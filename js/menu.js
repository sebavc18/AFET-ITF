// Seleccionar el botón y el menú
const hamburger = document.querySelector('.hamburger');
const barnav = document.querySelector('.barnav');

// Evento de clic para alternar el menú
hamburger.addEventListener('click', () => {
    barnav.classList.toggle('active');
});
