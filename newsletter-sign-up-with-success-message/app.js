// ============
// DOM ELEMENTS
// ============
const container = document.querySelector(".container")
const signupSuccess = document.querySelector(".signup-success-message")
const userInput = document.querySelector("#userInput")
const uesrEmail = document.querySelector(".email")

// ==========
// FUNCTIONS
// ==========
function showSuccessMessage() {
	const email = userInput.value
	event.preventDefault()
	if (email) {
		uesrEmail.innerText = email
		signupSuccess.classList.remove("hidden")
		container.classList.add("hidden")
	}
}

function backToSubscription() {
	event.preventDefault()
	signupSuccess.classList.add("hidden")
	container.classList.remove("hidden")
}
