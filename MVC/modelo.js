class libro{
    constructor (titulo, autor, año){
        this.titulo=titulo;
        this.autor=autor;
        this.año=año;
    }
}
    class listaLectura{
        constructor(){
            this.listaLibros=[];

        }
        addLibro(libro){
            this.listaLibros=push(libro);
        }

    }
