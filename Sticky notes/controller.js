class NotaController {
    constructor() {
        this.contenedorNotas = document.getElementById('contenedorNotas');
        this.modelo = new NotaModel();
    }

    crearNota() {
        const nota = new NotaView(this.modelo);
        this.modelo.agregarNota(nota);
        nota.render();
    }

   

    inicializar() {
        this.contenedorNotas.innerHTML = ''; 
        this.modelo.notas.forEach(nota => {
            const notaView = new NotaView(this.modelo);
            notaView.render();
        });
    }

    iniciarEventos() {
        document.getElementById('botonAgregarNota').addEventListener('click', this.crearNota.bind(this));
    }
}

window.onload = function() {
    const controller = new NotaController();
    controller.inicializar();
    controller.iniciarEventos();

 
};