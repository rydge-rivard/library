const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.autor = author;
    this.pages = pages;
    this.read = read;
    this.info(this);
    this.addBookToLibrary(this);
    console.log(this.info());2
    console.log(myLibrary);
}

Book.prototype = {
    addBookToLibrary() {
        return myLibrary.push(this);
    },
    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    },
};

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');
const theHobbitTwo = new Book('The Hobbit Two', 'J.R.R. Tolkien', '305', 'not read yet');