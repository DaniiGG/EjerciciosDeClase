
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
            let listadelibrosHTML = '';
            for (const book of this.books) {
                const leido = book.read ? "Leído" : "No leído";
                let readDate = '';
                if (book.read) {
                    readDate = `el ${book.readDate.toDateString()}`;
                }
                listadelibrosHTML += `<li>${book.title}, ${book.genre}, ${book.author}, ${leido} ${readDate}</li>`;
            }
            document.getElementById("listadelibros").innerHTML = listadelibrosHTML;
        }
    }

        const bookList = new BookList();
    const addBookForm = document.getElementById("formulario");
    const addButton = document.getElementById("add-button");
    const Leerlibro = document.getElementById("listadelibros");

    
    addButton.addEventListener("click", () => {
        const title = document.getElementById("title").value;
        const genre = document.getElementById("genre").value;
        const author = document.getElementById("author").value;
        const newBook = new Book(title, genre, author);
        bookList.añadir(newBook);
        bookList.listarLibros();
        
    });
    Leerlibro.forEach((ul) => {
    ul.addEventListener("click", () => {
        ul.style.backgroundColor = "red";
    })});