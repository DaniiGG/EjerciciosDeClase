window.onload = function () {
const listaElementos = document.getElementById('elementos');
const inputNuevoElemento = document.getElementById('nuevoElemento');
const botonAgregarElemento = document.getElementById('agregarElemento');

botonAgregarElemento.addEventListener('click', agregarElemento);

    inputNuevoElemento.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            agregarElemento();
        }
    });

        function agregarElemento() {
        const nuevoElementoTexto = inputNuevoElemento.value;
        if (nuevoElementoTexto.trim() !== '') {
            const nuevoElemento = document.createElement('li');
            nuevoElemento.textContent = nuevoElementoTexto;
            listaElementos.appendChild(nuevoElemento);
            inputNuevoElemento.value = '';
        }
    }

    
}