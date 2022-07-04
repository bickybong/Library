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
    booksContainer.textContent='';
    for (const obj of library){
        
        const bookCards = document.createElement('div');
        bookCards.classList.add('bookCards');
        booksContainer.appendChild(bookCards);

        const title = document.createElement('h2');
        title.classList.add('title');
        title.textContent = obj.title;
        bookCards.appendChild(title);

        const author = document.createElement('div');
        author.classList.add('author');
        author.textContent = obj.author;
        bookCards.appendChild(author);

        const page = document.createElement('div');
        page.classList.add('page');
        page.textContent = obj.page + " pages";
        bookCards.appendChild(page);

        const read = document.createElement('div');
        read.classList.add('read');
        read.textContent = obj.read;
        bookCards.appendChild(read);

        const butContainer = document.createElement('div');
        butContainer.classList.add('butContainer');
        bookCards.appendChild(butContainer);

        const del = document.createElement('button');
        del.innerHTML = '<span class="material-icons">delete</span>';
        butContainer.appendChild(del);
        del.dataset.id = library.indexOf(obj)

        const unread = document.createElement('button');
        unread.classList.add('unread');
        unread.innerHTML = '<span class="material-icons">check_box</span>';
        butContainer.appendChild(unread);
        del.onclick = ()=>{cardDelete(del.dataset.id)};
        unread.onclick = () =>{cardRead(del.dataset.id)};
    }
}

function cardDelete(index){ //delete books button
    library.splice(index,1);
    bookCard();
}

function cardRead(index){ //toggle read status button
    if (library[index].read === "Read") {
        library[index].read = "Not Read";
    } else{
        library[index].read = "Read";
    }
    bookCard();
}

book1 = new book("Never get lost", "Wilhelm Thaller", 260, "Not Read")
book2 = new book("The Hobbit", "J.R.R. Tolkien", 310, "Read")
addBookToLibrary(book1)
addBookToLibrary(book2)
// console.log(library)
bookCard()

function openForm() { //pop up form
    document.getElementById("popupForm").style.display = "block";
}
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}

const form = document.querySelector('#formContainer');

form.addEventListener('submit', callbackFunction);

function callbackFunction(event) { //Use data in form to add object to library
    event.preventDefault();
    const myFormData = new FormData(event.target);
    const formDataObj = Object.fromEntries(myFormData.entries());
    console.log(formDataObj);
    addBookToLibrary(formDataObj);
    bookCard();
    form.reset(); //reset form after submission
    document.getElementById("popupForm").style.display = "none";
};