document.addEventListener('DOMContentLoaded', () => {
    const imagenes = document.querySelectorAll('.imagenes img');
    const indicadores = document.querySelectorAll('.indicadores span');
    const btnAnterior = document.querySelector('.btn-anterior');
    const btnSiguiente = document.querySelector('.btn-siguiente');
    const totalImagenes = imagenes.length;
    let indexActual = 0;

    function mostrarImagen(indice) {
        indexActual = (indice + totalImagenes) % totalImagenes; // Índice cíclico
        imagenes.forEach((img, i) => {
            img.classList.remove('visible');
            indicadores[i].classList.remove('activo');
        });
        imagenes[indexActual].classList.add('visible');
        indicadores[indexActual].classList.add('activo');
    }

    function siguienteImagen() {
        mostrarImagen(indexActual + 1);
    }

    function anteriorImagen() {
        mostrarImagen(indexActual - 1);
    }

    indicadores.forEach((indicador, i) => {
        indicador.addEventListener('click', () => {
            mostrarImagen(i);
        });
    });

    if (btnAnterior) {
        btnAnterior.addEventListener('click', anteriorImagen);
    }

    if (btnSiguiente) {
        btnSiguiente.addEventListener('click', siguienteImagen);
    }

    setInterval(siguienteImagen, 10000); 
    mostrarImagen(indexActual); 
});
