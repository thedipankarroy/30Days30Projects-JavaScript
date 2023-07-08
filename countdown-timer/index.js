// ===============
// Dom Elements
// ===============
const deadline = document.querySelector(".deadline")
const valuesOnSite = document.querySelectorAll(".deadline-format h4")
const userInput = document.querySelector("#userInput")
const ms = document.querySelector(".milliseconds")
const zen = document.querySelector(".zenmode")
const normal = document.querySelector(".normalmode")
const zenMode = document.querySelectorAll(".zen")

// ==================
// Global Variables
// ==================
let futureDate, futureTime, today, remainingtime, countdown

// ==================
// Event Listeners
// ==================
window.addEventListener("load", () => {
	if (localStorage.getItem("futureDate")) {
		futureDate = new Date(localStorage.getItem("futureDate"))
	} else {
		valuesOnSite.forEach(function (value) {
			value.innerHTML = "00"
		})
	}
	start()
})
zen.addEventListener("click", () => {
	zenMode.forEach((element) => {
		element.style.display = "none"
	})
	normal.style.display = "block"
})
normal.addEventListener("click", () => {
	zenMode.forEach((element) => {
		element.style.display = "block"
	})
	zen.style.display = "block"
	normal.style.display = "none"
})


// ==========
// Functions
// ==========
function getRemainingTime() {
	today = new Date().getTime()
	remainingtime = futureTime - today
	const oneday = 24 * 60 * 60 * 1000
	const onehour = oneday / 24
	const oneminute = onehour / 60

	let days = Math.floor(remainingtime / oneday)
	let hours = Math.floor((remainingtime % oneday) / onehour)
	let minutes = Math.floor((remainingtime % onehour) / oneminute)
	let seconds = Math.floor((remainingtime % oneminute) / 1000)
	let miliseconds = Math.floor((remainingtime % 1000) / 10)
	const valuesOfRemaningTime = [days, hours, minutes, seconds, miliseconds]
	function format(unit) {
		if (unit < 10) {
			return (unit = `0${unit}`)
		}
		return unit
	}

	valuesOnSite.forEach(function (value, index) {
		value.innerHTML = format(valuesOfRemaningTime[index])
	})

	if (remainingtime <= 0) {
		reset()
	}
}
function start() {
	getfuturetime()
	reset()
	futureTime = futureDate.getTime()
	console.log(futureTime)
	countdown = setInterval(getRemainingTime, 50)
}
function reset() {
	clearInterval(countdown)
	valuesOnSite.forEach(function (value) {
		value.innerHTML = "00"
	})
}
function getfuturetime() {
	userInput.value ? (futureDate = new Date(userInput.value)) : reset()
	localStorage.setItem("futureDate", userInput.value)
}
