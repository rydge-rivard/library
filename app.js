const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
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

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'read');
const theHobbitTwo = new Book('The Hobbit Two', 'J.R.R. Tolkien', '305', 'not read');
const theHobbitThree = new Book('The Hobbit Three', 'J.R.R. Tolkien', '340', 'not read');

function newBook() {
    myLibrary.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('card');
        document.body.appendChild(div);
        let i = 0;
        for(let key in book){
            if(key === 'title' || key === 'author' || key === 'pages' || key === 'read') {
                console.log(book[key]);
                let category = Object.keys(book)[i];
                let upperCategory = category.charAt(0).toUpperCase() + category.slice(1);
                const p = document.createElement('p');
                p.textContent = `${upperCategory}: ${book[key]}`;
                div.appendChild(p);
                i = i + 1;

            }
      }
    });   
}

const dialog = document.querySelector('dialog')
const openBtn = document.querySelector('dialog ~ button');
const inputs = dialog.querySelectorAll('input');
const closeBtn = document.querySelector('button');
const confirmBtn = dialog.querySelector("#confirmBtn");
const span = document.querySelector('span');

openBtn.addEventListener('click', () => dialog.showModal());

function mapInputValues (array) {
    const bookArray = [];
    array.forEach(element => {
        bookArray.push(element.value);
    });
    console.log(bookArray);
    return bookArray;
}

confirmBtn.addEventListener('click', (event) => {
    event.preventDefault();
    mapInputValues(inputs);
    dialog.close();
    }
);