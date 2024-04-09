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

export default Library;