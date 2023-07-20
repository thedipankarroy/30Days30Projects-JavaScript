// =============
// VARIABLES
// =============
let myLibrary = [
	{
		title: "How Innovation Works",
		author: "Matt Ridley",
		pagesRead: 200,
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
function Book(title, author, pagesRead) {
	this.title = title
	this.author = author
	this.pagesRead = pagesRead
}
function addBookToLibrary() {
	//storing the user input in a object after user submits
	const title = document.getElementById("title").value
	const author = document.getElementById("author").value
	const pagesRead = document.getElementById("pages").value

	// making a newBook object from Book Constructor
	const newBook = new Book(title, author, pagesRead)

	//clearing out the values in the inputs after sumbission
	document.getElementById("title").value = ""
	document.getElementById("author").value = ""
	document.getElementById("pages").value = ""

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

	myLibrary.forEach((book) => {
		const div = document.createElement("div")
		div.classList.add("book-item")
		div.innerHTML = `
        <div class="imageCover-div">
            <img  class="bookItem__cover" src="bookcover.jpg" alt="cover" style="height:100%; width: 100%;object-fit: cover;">
        </div>
        <div class="info">
            <h3 class="bookItem__title">${book.title}</h3> 
            <p class="bookItem__author">By ${book.author}</p>
            <p class="bookItem__pagesRead">${book.pagesRead} pages read</p>
        <div>
        `
		bookList.appendChild(div)
	})
}
function hideForm() {
	modal.style.display = "none"
}


//USING API TO GET BOOK COVER
//USING SOME KIND OF DATABASE TO STORE DATA