window.onload = function () {
    const imagenesArrastre = document.querySelectorAll('#image');
    let pegada = false;
    let imagenSeleccionada = null;
    let PosicionX, PosicionY;

    imagenesArrastre.forEach((imagen) => {
        imagen.addEventListener('click', (e) => {
            if (pegada) {
                pegada = false;
                document.onmousemove = null;
                document.onmouseup = null;
            } else {
                pegada = true;
                imagenSeleccionada = imagen;
                PosicionX = e.clientX - imagenSeleccionada.getBoundingClientRect().left;
                PosicionY = e.clientY - imagenSeleccionada.getBoundingClientRect().top;

                document.onmousemove = (e) => {
                    const nuevoX = e.clientX - PosicionX;
                    const nuevoY = e.clientY - PosicionY;
                    imagenSeleccionada.style.left = nuevoX + 'px';
                    imagenSeleccionada.style.top = nuevoY + 'px';
                };
                document.onmouseenter = () => {
                    pegada = false;
                };
            }
        });
    });
};