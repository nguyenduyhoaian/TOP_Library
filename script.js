const library = []
function Book(author, title, numOfPage) {
    this.author = author;
    this.title = title;
    this.numOfPage = numOfPage;
    this.id = crypto.randomUUID()
    this.isRead = false
}

Book.prototype.mark = function () {
    this.isRead ? this.isRead = false : this.isRead = true
}

function addBookToLibrary(book, library) {
    library.push(book)
}

const bookSample1 = new Book("Nam Cao", "Chi Dau", 12)
const bookSample2 = new Book("To Hoai", "De men phieu luu ky", 30)

addBookToLibrary(bookSample1, library)
addBookToLibrary(bookSample2, library)

console.log(library)

const container = document.querySelector(".library")
for (let item of library) {
    const book = document.createElement("div")
    container.appendChild(book)
    book.classList.add("book")
    book.textContent = `author: ${item.author}, title: ${item.title} - number of page: ${item.numOfPage}`
}
const addBtn = document.createElement("button")
container.appendChild(addBtn)
addBtn.textContent = 'Add book'
addBtn.addEventListener("click", (e) => addBookDialog.showModal())

const addBookDialog = document.querySelector("#my-dialog")