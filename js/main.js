window.addEventListener('load', () => {
    // Retrasos para cada elemento
    setTimeout(() => {
        document.querySelector('.text h1').classList.add('active');
    }, 500); // El texto aparece después de 0.5s

    setTimeout(() => {
        document.querySelector('.logos').classList.add('active');
    }, 1000); // Los logos aparecen después de 1s

    setTimeout(() => {
        document.querySelector('.btn').classList.add('active');
    }, 1500); // El botón aparece después de 1.5s
});
