let library = [];
const booksContainer = document.querySelector('#booksContainer');


function book(title, author, page, read){
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}

function addBookToLibrary(book){
    library.push(book)
}

function bookCard(){
    for (const obj of library){
        const title = document.createElement('h2');
        title.classList.add('title');
        title.textContent = obj.title;
        booksContainer.appendChild(title);

        const author = document.createElement('div');
        author.classList.add('author');
        author.textContent = obj.author;
        booksContainer.appendChild(author);

        const page = document.createElement('div');
        page.classList.add('page');
        page.textContent = obj.page;
        booksContainer.appendChild(page);

        const read = document.createElement('div');
        read.classList.add('read');
        read.textContent = obj.read;
        booksContainer.appendChild(read);
    }
}

book1 = new book("Never get lost", "Wilhelm Thaller", 260, "Not read")
book2 = new book("The Hobbit", "J.R.R. Tolkien", 310, "Read")
addBookToLibrary(book1)
addBookToLibrary(book2)
// console.log(library)
bookCard()