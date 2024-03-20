const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

const dialogWindow = document.querySelector("dialog");
const openDialogButton = document.querySelector("#newBook");
const closeDialogButton = document.querySelector("dialog button");
openDialogButton.addEventListener('click', ()=>{
    dialogWindow.showModal();
});
closeDialogButton.addEventListener('click', () => {
    dialogWindow.close();
});

const submitButton = document.querySelector("#submit");
submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    addBookToLibrary(getBookFromDialog());
    
    dialogWindow.close();
});

function getBookFromDialog(){
    const title = document.querySelector("dialog #title");
    const author = document.querySelector("dialog #author");
    const pages = document.querySelector("dialog #pages");
    const read = document.querySelector("dialog #read");

    return new Book(author.value, title.value, pages.value, read.checked);
}

function addBookToLibrary(book) {
    myLibrary.push(book);

    outputBooksOnPage();
}

function outputBooksOnPage(){
    const container = document.querySelector(".books-container");
    container.innerHTML = "";
    
    for(let i = 0; i < myLibrary.length; i++){
        const bookCard = document.createElement("div");
        bookCard.className = "book-card";

        const book = myLibrary[i];
        bookCard.textContent = `${book.title} written by ${book.author}, ${book.pages} pages, ${book.read ? "I've read" : "I've not read"}`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener('click', () => {
            myLibrary.splice(i, 1);

            outputBooksOnPage();
        });

        const readButton = document.createElement("button");
        readButton.textContent = "Read Status";
        readButton.addEventListener('click', () => {
            myLibrary[i].read = !Boolean(myLibrary[i].read);
            console.log(myLibrary[i].read);

            outputBooksOnPage();
        });

        container.appendChild(bookCard);
        container.appendChild(deleteButton);
        container.appendChild(readButton);
    }
}