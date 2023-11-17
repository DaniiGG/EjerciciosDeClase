class NotaView {
    constructor(modelo, controlador) {
        this.modelo = modelo;
        this.controlador= controlador;
        this.crearElemento();
    }

    
    crearInputTitulo() {
        const inputTitulo = document.createElement('input');
        inputTitulo.type = 'text';
        inputTitulo.placeholder = 'Título';
        inputTitulo.addEventListener('input', () => {
            this.modelo.actualizarTitulo(this, inputTitulo.value);
        });
        return inputTitulo;
    }

    crearElemento() {
        this.notaElemento = document.createElement('div');
        this.notaElemento .style.position = 'absolute';
        this.notaElemento.classList.add('nota');

        this.cabeceraNota = document.createElement('div');
        this.cabeceraNota.classList.add('cabeceraNota');

        const inputTitulo = this.crearInputTitulo();
        this.botonEliminar = document.createElement('button');
        this.botonEliminar.classList.add('botonEliminar');
        this.botonEliminar.innerHTML = 'x';

        const textarea = document.createElement('textarea');
        textarea.placeholder = 'Escribe algo...';

        this.cabeceraNota.appendChild(inputTitulo);
        this.cabeceraNota.appendChild(this.botonEliminar);
        this.notaElemento.appendChild(this.cabeceraNota);
        this.notaElemento.appendChild(textarea);

        
    }

    render() {
        contenedorNotas.appendChild(this.notaElemento);
        this.arrastrar();
    }

    arrastrar() {
        let offsetX, offsetY;
        let arrastrando = false;

        this.notaElemento.addEventListener('mousedown', (e) => {
            arrastrando = true;
            offsetX = e.clientX - this.notaElemento.getBoundingClientRect().left;
            offsetY = e.clientY - this.notaElemento.getBoundingClientRect().top;
        });

        document.addEventListener('mousemove', (e) => {
            if (arrastrando) {
                this.notaElemento.style.left = e.clientX - offsetX + 'px';
                this.notaElemento.style.top = e.clientY - offsetY + 'px';
            }
        });

        document.addEventListener('mouseup', () => {
            arrastrando = false;
        });
    }


    

    
    
}