let library = []
const container = document.getElementById("library")

function Book(author, title, numOfPage) {
    this.author = author;
    this.title = title;
    this.numOfPage = numOfPage;
    this.id = crypto.randomUUID()
    this.isRead = false
}

Book.prototype.mark = function () {
    this.isRead = this.isRead ? this.isRead = false : this.isRead = true
}

function addBookToLibrary(author, title, numOfPage) {
    const newBook = new Book(author, title, numOfPage)
    library.push(newBook)
    showBook(newBook)
}

function showBook(item) {
    const book = document.createElement("div")
    book.setAttribute("id", item.id)
    container.appendChild(book)
    book.classList.add("book")

    const author = document.createElement("div")
    book.appendChild(author)
    author.textContent = `Author: ${item.author}`

    const title = document.createElement("div")
    book.appendChild(title)
    title.textContent = `Title: ${item.title} `

    const numOfPage = document.createElement("div")
    book.appendChild(numOfPage)
    numOfPage.textContent = `Number of page: ${item.numOfPage}`

    const readBtn = document.createElement("button")
    book.appendChild(readBtn)
    readBtn.textContent = item.isRead ? "Read" : "Unread"
    readBtn.addEventListener("click", () => {
        item.mark()
        readBtn.textContent = item.isRead ? "Read" : "Unread"
    })

    const deleteBtn = document.createElement("button")
    book.appendChild(deleteBtn)
    deleteBtn.textContent = "Delete this book"
    deleteBtn.addEventListener("click", () => {
        removeBookFromLibrary(item.id)
        removeDisplay(item.id)
    })
}

function removeBookFromLibrary(id) {
    library = library.filter(book => book.id !== id)
}

function removeDisplay(id) {
    const book = document.getElementById(id)
    container.removeChild(book)
}


//Dialog for adding new book
const mydialog = document.getElementById("my-dialog")

const addBookBtn = document.getElementById("addBook")
addBookBtn.addEventListener("click", () => {
    mydialog.showModal()
})

const submitBtn = document.getElementById("submit")
submitBtn.addEventListener("click", (e) => {
    mydialog.close();

    //Add book to library
    const authorInput = document.getElementById("author").value
    const titleInput = document.getElementById("title").value
    const numofpageInput = document.getElementById("numofpage").value
    addBookToLibrary(authorInput, titleInput, numofpageInput)

    //Reset form
    const form = document.getElementById("addnewbook")
    form.reset()

    e.preventDefault()
})


//Sample data
addBookToLibrary("Nam Cao", "Chi Dau", 12)
addBookToLibrary("To Hoai", "De men phieu luu ky", 30)
addBookToLibrary("Vu Trong Phung", "So do", 20)
