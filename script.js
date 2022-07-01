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
    count = 0
    for (const obj of library){
        
        const bookCards = document.createElement('div');
        bookCards.classList.add('bookCards', count);
        bookCards.classList.add(count);
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

        const del = document.createElement('button');
        del.classList.add(count);
        del.innerHTML = '<span class="material-icons">delete</span>';
        bookCards.appendChild(del);

        const unread = document.createElement('button');
        unread.classList.add('unread');
        unread.innerHTML = '<span class="material-icons">check_box</span>';
        bookCards.appendChild(unread);
        del.onclick = ()=>{cardDelete(count)};
        unread.onclick = () =>{cardRead(count)};
        ++count;
    }
}

book1 = new book("Never get lost", "Wilhelm Thaller", 260, "Not Read")
book2 = new book("The Hobbit", "J.R.R. Tolkien", 310, "Read")
addBookToLibrary(book1)
addBookToLibrary(book2)
// console.log(library)
bookCard()

function openForm() {
    document.getElementById("popupForm").style.display = "block";
}
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}

const form = document.querySelector('#formContainer');

form.addEventListener('submit', callbackFunction);

function callbackFunction(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    const formDataObj = Object.fromEntries(myFormData.entries());
    console.log(formDataObj);
    addBookToLibrary(formDataObj);
    bookCard();
    form.reset();
    document.getElementById("popupForm").style.display = "none";
};


function cardDelete(count){
    library.pop(count);
    bookCard();
}

function cardRead(count){
    console.log(library[0]["read"])
    if (library[count]["read"] === "Read") {
        library[count]["read"] = "Not Read";
    } else{
        library[count]["read"] = "Not Read";
    }
    bookCard();
}