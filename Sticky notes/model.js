class NotaModel {
    constructor() {
        this.notas = [];
    }

    agregarNota(nota) {
        this.notas.push(nota);
    }

    


    actualizarTitulo(nota, nuevoTitulo) {
        const index = this.notas.indexOf(nota);
        if (index !== -1) {
            this.notas[index].titulo = nuevoTitulo;
            
        }
    }
}