
            class Book {
        constructor(title, genre, author) {
            this.title = title;
            this.genre = genre;
            this.author = author;
            this.read = false;
            this.readDate = null;
        }
        }

        class BookList {
        constructor() {
            this.readBooks = 0;
            this.unreadBooks = 0;
            this.currentBook = null;
            this.nextBook = null;
            this.lastBookRead = null;
            this.books = [];
        }

        añadir(book) {
            this.books.push(book);
            this.unreadBooks++;

            if (!this.currentBook) {
            this.currentBook = book;
            }
        }

        finishCurrentBook() {
            if (this.currentBook) {
            this.currentBook.read = true;
            this.currentBook.readDate = new Date(Date.now());
            this.unreadBooks--;
            this.readBooks++;
            this.lastBookRead = this.currentBook;
            this.currentBook = this.nextBook;
           
            }
        }
        
        
        listarLibros() {
            console.log("Lista:");
            for (const book of this.books) {
            var leido = book.read ? "Leido" : "No leido";
            if (leido=="Leido"){
                console.log(`${book.title}, ${book.genre}, ${book.author}, ${leido} el ${new Date(Date.now())}`);
            }else{
            console.log(`${book.title}, ${book.genre}, ${book.author}, ${leido}`);
            }
            }
        }
        }

        var libro1 = new Book("Holaa", "Accion", "Daniel");
        var libro2 = new Book("Adioss", "Misterio", "Elias");
        var libro3 = new Book("Buenaa", "Miedo", "Pedro");

        const lista = new BookList();

        lista.añadir(libro1);
        lista.añadir(libro2);
        lista.añadir(libro3);

        lista.finishCurrentBook();
        
        lista.listarLibros();