window.onload = function () {
    const imagenes = ["img/bastos_10.jpg", "img/espadas_12.jpg", "img/copas_11.jpg", "img/oros_1.jpg"];
    let indiceActual = 0;
    const imagenActual = document.getElementById('imagenActual');
    const botonAnterior = document.getElementById('botonAnterior');
    const botonSiguiente = document.getElementById('botonSiguiente');

    function mostrarImagen(indice) {
        if (indice >= 0 && indice < imagenes.length) {
            imagenActual.src = imagenes[indice];
            indiceActual = indice;
        }
    }

    mostrarImagen(indiceActual);

    botonAnterior.addEventListener('click', function() {
        if (indiceActual > 0) {
            mostrarImagen(indiceActual - 1);
        } else {
            mostrarImagen(imagenes.length - 1);
        }
    });

    botonSiguiente.addEventListener('click', function() {
        if (indiceActual < imagenes.length - 1) {
            mostrarImagen(indiceActual + 1);
        } else {
            mostrarImagen(0);
        }
    });
}