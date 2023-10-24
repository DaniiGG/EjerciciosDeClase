window.onload = function () {
    const imagenesArrastre = document.querySelectorAll('#image');
    let pegada = false;
    let imagenSeleccionada = null;
    let offsetX, offsetY;

    imagenesArrastre.forEach((imagen) => {
        imagen.addEventListener('click', (e) => {
            if (pegada) {
                pegada = false;
                document.onmousemove = null;
                document.onmouseup = null;
            } else {
                pegada = true;
                imagenSeleccionada = imagen;
                offsetX = e.clientX - imagenSeleccionada.getBoundingClientRect().left;
                offsetY = e.clientY - imagenSeleccionada.getBoundingClientRect().top;

                document.onmousemove = (e) => {
                    const nuevoX = e.clientX - offsetX;
                    const nuevoY = e.clientY - offsetY;
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