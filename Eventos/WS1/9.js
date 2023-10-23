window.onload = function () {
    const imagenArrastre = document.getElementById('image');
    let pegada = false;

    imagenArrastre.addEventListener('click', (e) => {
        if (pegada) {
            pegada = false;
            document.onmousemove = null;
            
        } else {
            pegada = true;
            var posicionX = e.clientX - imagenArrastre.getBoundingClientRect().left;
            var posicionY = e.clientY - imagenArrastre.getBoundingClientRect().top;
            document.onmousemove = (e) => {
                var nuevoX = e.clientX - posicionX;
                var nuevoY = e.clientY - posicionY;
                imagenArrastre.style.left = nuevoX + 'px';
                imagenArrastre.style.top = nuevoY + 'px';
            };
            document.onmouseenter = () => {
                pegada = false;
                 
            };
        }
    });
};