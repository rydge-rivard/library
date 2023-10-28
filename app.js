const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info(this);
    this.addBookToLibrary(this);
}

Book.prototype = {
    addBookToLibrary() {
        return myLibrary.push(this);
    },
    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    },
};

const dialog = document.querySelector('dialog')
const openBtn = document.querySelector('dialog ~ button');
const closeBtn = document.querySelector('button');
const confirmBtn = dialog.querySelector("#confirmBtn");

openBtn.addEventListener('click', () => dialog.showModal());

confirmBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const inputs = dialog.querySelectorAll('input');
    const bookObj = mapInputValues (inputs);
    createNewBookCard (bookObj);
    inputs.forEach(input => input.value = '');
    dialog.close();
    }
);

function mapInputValues (array) {
    const bookArray = [];
    array.forEach((element) => bookArray.push(element.value));
    return new Book (bookArray[0], bookArray[1], bookArray[2], bookArray[3]);
}

function createNewBookCard (bookObj) {
    let i = 0;
    const div = document.createElement('div');
    div.classList.add('card');
    div.setAttribute('id', myLibrary.length);
    document.body.appendChild(div);
    for(let key in bookObj){
        if(typeof bookObj[key] === 'string') {
            let category = Object.keys(bookObj)[i];
            let upperCategory = category.charAt(0).toUpperCase() + category.slice(1);
            const p = document.createElement('p');
            if (key === 'read') {
                const readStatus = bookObj[key] === 'on' ? 'Yes' : 'No';
                p.classList.add('read-p');
                p.textContent = `${upperCategory}: ${readStatus}`;
            } else {
                p.textContent = `${upperCategory}: ${bookObj[key]}`;
            }
            div.appendChild(p);
            i = i + 1;
        }
    }
    createDeleteButton (div);
    createMarkReadButton (div);
    div.ch
}

function createDeleteButton (div) {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete'
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', () => deleteBtn.parentElement.remove());
    div.appendChild(deleteBtn);
}

function createMarkReadButton (div) {
    const readBtn = document.createElement('button');
    readBtn.textContent = 'Toggle Read'
    readBtn.classList.add('read');
    readBtn.addEventListener('click', () => markBookAsRead (readBtn.parentElement));
    div.appendChild(readBtn);
}

function markBookAsRead (parentElement) {
    const p = parentElement.querySelector('.read-p');
    p.textContent === 'Read: Yes' ? p.textContent = 'Read: No' : p.textContent = 'Read: Yes';
}