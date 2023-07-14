// ============
// DOM ELEMENTS
// ============
const container = document.querySelector(".container")
const signupSuccess = document.querySelector(".signup-success-message")
const userInput = document.querySelector("#userInput")
const uesrEmail = document.querySelector(".email")
const errorMsg = document.querySelector(".errorMsg")

// ===============
// EVENT LISTENERS
// ===============
// when the input field has nothing in it hide the erromsg and remove userInputonErr from the input field class
userInput.addEventListener("input", () => {
	if(userInput.value != ""){
        userInput.classList.remove("userInputonErr")
    }
})

// ==========
// FUNCTIONS
// ==========
//validate email
function validateEmail(email) {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(String(email).toLowerCase())
}
function showSuccessMessage() {
	const email = userInput.value
	event.preventDefault()
	if (validateEmail(email)) {
		uesrEmail.innerText = email
		signupSuccess.classList.remove("hidden")
		container.classList.add("hidden")
	} else {
		onerror()
	}
}
function backToSubscription() {
	event.preventDefault()
	signupSuccess.classList.add("hidden")
	container.classList.remove("hidden")
}
function onerror() {
	errorMsg.classList.remove("hidden")
	userInput.classList.add("userInputonErr")
}
