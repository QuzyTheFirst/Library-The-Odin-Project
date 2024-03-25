class Book{
    #author;
    #title;
    #pages;
    #read;

    constructor(author, title, pages, read){
        this.#author = author;
        this.#title = title;
        this.#pages = pages;
        this.#read = read ? "I've read" : "I've not read";
    }
    
    get author(){
        return this.#author;
    }
    
    get title(){
        return this.#title;
    }

    get pages(){
        return this.#pages;
    }

    get read(){
        return this.#read ? "I've read" : "I've not read";
    }

    toggleRead(){
        this.#read = !this.#read;
    }
}

class Library{
    #books = [];

    addBook(book){
        this.#books.push(book);
    }

    deleteBook(id){
        this.#books.splice(id, 1);
    }

    clearLibrary(){
        this.#books = [];
    }

    get books(){
        return this.#books;
    }
}

class Screen{
    #dialogWindow = document.querySelector("dialog");
    #dialogOpenButton = document.querySelector("#newBook");
    #dialogCloseButton = document.querySelector("dialog button");
    #dialogSubmitButton = document.querySelector("#submit");

    #booksContainer = document.querySelector(".books-container");

    #bookTitle = document.querySelector("dialog #title");
    #bookAuthor = document.querySelector("dialog #author");
    #bookPages = document.querySelector("dialog #pages");
    #bookRead = document.querySelector("dialog #read");

    #library;

    constructor(library){
        this.#library = library;
    }

    init(){
        this.#dialogOpenButton.addEventListener('click', ()=>{
            this.#dialogWindow.showModal();
        });
    
        this.#dialogCloseButton.addEventListener('click', () => {
            this.#dialogWindow.close();
        });

        this.#dialogSubmitButton.addEventListener('click', (event) => {
            event.preventDefault();
        
            this.#library.addBook(this.getBookFromDialog());
            this.outputBooksOnPage();
            
            this.#dialogWindow.close();
        });
    }

    getBookFromDialog(){
        return new Book(this.#bookAuthor.value, this.#bookTitle.value, this.#bookPages.value, this.#bookRead.checked);
    }

    outputBooksOnPage(){
        this.#booksContainer.innerHTML = "";
        
        for(let i = 0; i < this.#library.books.length; i++){
            const bookCard = document.createElement("div");
            bookCard.className = "book-card";
    
            const book = this.#library.books[i];
            bookCard.textContent = `${book.title} written by ${book.author}, ${book.pages} pages, ${book.read}`;
    
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener('click', () => {
                this.#library.deleteBook(i);
    
                this.outputBooksOnPage();
            });
    
            const readButton = document.createElement("button");
            readButton.textContent = "Read Status";
            readButton.addEventListener('click', () => {
                this.#library.books[i].toggleRead();

                this.outputBooksOnPage();
            });
    
            this.#booksContainer.appendChild(bookCard);
            this.#booksContainer.appendChild(deleteButton);
            this.#booksContainer.appendChild(readButton);
        }
    }
}

(function(){
    let library = new Library();
    let screen = new Screen(library);
    screen.init();
})();