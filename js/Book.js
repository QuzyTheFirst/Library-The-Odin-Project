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

export default Book;