const inputFields = document.querySelectorAll("input")
const errorMessages = document.querySelectorAll(".errorStatus")
const submitButton = document.querySelector(".submit")

let day = inputFields[0].value
let month = inputFields[1].value
let year = inputFields[2].value

// Validate input and handle errors

// Check if input fields are empty, if so show error
const emptyMessage = "This field is required"

function validateInput() {
	checkIfEmpty()
	// isValidDate(day, month) === true ? calculateAge : null
}

function checkIfEmpty() {
	inputFields.forEach((input, index) => {
		if (input.value === "") {
			errorMessages[index].classList.remove("hidden")
			errorMessages[index].innerText = emptyMessage
		} else {
			errorMessages[index].classList.add("hidden")
			errorMessages[index].innerText = ""
		}
	})
}

// function isValidDate(day, month) {
// 	// Check if day, month and year are valid numbers
//     let errors = 0;
// 	inputFields.forEach((input, index) => {
// 		if (isNaN(input.value)) {
// 			errorMessages[index].classList.remove("hidden")
// 			errorMessages[index].innerText = "Please enter a valid number" 
//             errors++
// 		} else {
// 			errorMessages[index].classList.add("hidden")
// 			errorMessages[index].innerText = ""
// 		}
// 	})
// 	const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
// 	if (day > daysPerMonth[month - 1]) {
// 		errorMessages[0].classList.remove("hidden")
// 		errorMessages[0].innerText = "Invalid Date"
// 		errors++
// 	}
// 	// Check if month is between 1 and 12
// 	if (month < 1 || month > 12) {
// 		errorMessages[1].classList.remove("hidden")
// 		errorMessages[1].innerText = "Invalid Month"
// 		errors++
// 	}
// }
// function calculateAge() {
// 	const today = new Date()
// 	const birthDate = new Date(year, month - 1, day)
// 	let age = today.getFullYear() - birthDate.getFullYear()
// 	let m = today.getMonth() - birthDate.getMonth()
// 	let d = today.getDate() - birthDate.getDate()

// 	console.log(age, m, d)
// }

submitButton.addEventListener("click", validateInput)
