// =============
// VARIABLES
// =============
let myLibrary = [
	{
		title: "How Innovation Works",
		author: "Matt Ridley",
		pages: 200,
		isread: true,
	},
]
const submitBtn = document.querySelector(".submitBtn")
const newBookBtn = document.querySelector(".newBookBtn")
const modal = document.querySelector(".modal")
const exitBtn = document.querySelector(".exitBtn")

// ===============
// EVENT LISTENERS
// ===============
window.addEventListener("load", () => {
	hideForm()
	render()
})
submitBtn.addEventListener("click", () => {
	event.preventDefault()
	addBookToLibrary()
})
newBookBtn.addEventListener("click", () => {
	modal.style.display = "flex"
})
exitBtn.addEventListener("click", () => {
	event.preventDefault()
	hideForm()
})

// ==========
// FUNCTIONS
// ==========
function Book(title, author, pages, isread) {
	this.title = title
	this.author = author
	this.pages = pages
	this.isread = isread
}
function addBookToLibrary() {
	//storing the user input in a object after user submits
	const title = document.getElementById("title").value
	const author = document.getElementById("author").value
	const pages = document.getElementById("pages").value
	const isread = document.getElementById("isread").checked // if checked true else false

	// making a newBook object from Book Constructor
	const newBook = new Book(title, author, pages, isread)

	// clearing out the values in the inputs after sumbission
	document.getElementById("title").value = ""
	document.getElementById("author").value = ""
	document.getElementById("pages").value = ""
	document.getElementById("isread").checked = false

	// pushing the newBook object to the array myLibrary
	myLibrary.push(newBook)
	// hide the modal
	hideForm()
	// using the render function to add the newBook in the book list
	render()
	console.log(myLibrary)
}
function exitModal() {
	hideForm()
}
function render() {
	const bookList = document.querySelector(".book-list")
	bookList.innerHTML = ""

	myLibrary.forEach((book, index) => {
		const div = document.createElement("div")
		div.classList.add("book-item")
		div.innerHTML = `
        <div class="imageCover-div">
            <img  class="bookItem__cover" src="bookcover.jpg" alt="cover" style="height:100%; width: 100%;object-fit: cover;">
        </div>
        <div class="info">
            <h3 class="bookItem__title">${book.title}</h3> 
            <p class="bookItem__author">By ${book.author}</p>
            <p class="bookItem__pages">${book.pages} Pages</p>
			<button class="deleteBook" onclick="deleteBook(${index})">Delete</button>
			<button class="bookItem__read" onclick="changeReadStatus(${index})">${book.isread ? "Read" : "Not Read"}</button>
        <div>
        `
		bookList.appendChild(div)
	})
}
function hideForm() {
	modal.style.display = "none"
}
function deleteBook(index) {
	myLibrary.splice(index, 1)
	render()
}
function changeReadStatus (bookIndex) {
	const book = myLibrary[bookIndex]
	book.isread = !book.isread  
	render()
}

//USING API TO GET BOOK COVER
//USING SOME KIND OF DATABASE TO STORE DATA
