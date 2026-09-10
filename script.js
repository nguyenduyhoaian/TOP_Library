const library = []
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
}

addBookToLibrary("Nam Cao", "Chi Dau", 12)
addBookToLibrary("To Hoai", "De men phieu luu ky", 30)
addBookToLibrary("Vu Trong Phung", "So do", 20)

const container = document.querySelector(".library")
for (let item of library) {
    const book = document.createElement("div")
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

    const deleteBtn = document.createElement("button")
    book.appendChild(deleteBtn)
    deleteBtn.textContent = "Delete this book"

}
const addBtn = document.createElement("button")
container.appendChild(addBtn)
addBtn.textContent = 'Add book'
addBtn.addEventListener("click", (e) => addBookDialog.showModal())

const addBookDialog = document.querySelector("#my-dialog")
const dialogSubmit = document.querySelector("#addBookBtn")
dialogSubmit.addEventListener("click", even =>{
even.preventDefault();
console.log(author.value)
console.log('dialog has been submit')

})