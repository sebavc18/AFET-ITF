const hamburger = document.querySelector('.hamburger');
const barnav = document.querySelector('.barnav');

// Evento para alternar el menú
hamburger.addEventListener('click', () => {
    barnav.classList.toggle('active');
});

let isImageVisible = false; // Flag para la imagen
let isTextVisible = false;  // Flag para el texto

window.addEventListener('scroll', function () {
    const elements = [
        { id: '#myImage', flag: 'isImageVisible' },
        { id: '#texto', flag: 'isTextVisible' }
    ];

    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const element = document.querySelector(el.id);
        const position = element.getBoundingClientRect().top;

        if (position < windowHeight && !window[el.flag]) {
            window[el.flag] = true;
            element.classList.remove('hidden');
            element.classList.add('visible');
        } else if (position >= windowHeight && window[el.flag]) {
            window[el.flag] = false;
            element.classList.remove('visible');
            element.classList.add('hidden');
        }
    });
});
