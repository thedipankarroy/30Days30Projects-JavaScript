// DOM ELEMENTS
const card = document.querySelector(".card")
const container = document.querySelector(".container")
const title = document.querySelector(".title")
const sneaker = document.querySelector(".sneaker img")
const purchase = document.querySelector(".purchase button")
const description = document.querySelector(".info h3")
const sizes = document.querySelector(".sizes")
const edition = document.querySelector(".edition")

// MOVING ANIMATION
container.addEventListener("mousemove", (event) => {
	let xAxis = (window.innerWidth / 2 - event.pageX) / 30
	let yAxis = (window.innerHeight / 2 - event.pageY) / 30
	card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})
// ANIMATE OUT
container.addEventListener("mouseleave", (event) => {
	card.style.transition = "all 0.5s ease"
	card.style.transform = `rotateY(0deg) rotateX(0deg)`
	// OTHER ITEMS
	title.style.transform = "translateZ(0px)"
	sneaker.style.transform = "translateZ(0px) rotateZ(0deg)"
	purchase.style.transform = "translateZ(0px)"
	description.style.transform = "translateZ(0px)"
	sizes.style.transform = "translateZ(0px)"
	edition.style.transform = "translateZ(0px)"
})
// ANIMATE IN
container.addEventListener("mouseenter", (event) => {
	card.style.transition = "none"
	// OTHER ITEMS
    sneaker.style.transform = `perspective(950px)translateZ(160px) rotateZ(-20deg)`
	title.style.transform = `perspective(950px)translateZ(150px)`
    edition.style.transform = `perspective(950px)translateZ(130px)`
	description.style.transform = `perspective(950px)translateZ(100px)`
	sizes.style.transform = `perspective(950px)translateZ(80px)`
    purchase.style.transform = `perspective(950px)translateZ(65px)`
	
})
