const navList = document.getElementById("nav-list")
const menuIcon = document.getElementById("menuicon")
const profile = document.getElementById("profile")
const header = document.getElementById("header")


document.addEventListener("click", (event) => {
	event.target.matches("#menuicon") ? toggleNavbar() : null
})

function toggleNavbar() {
	navList.classList.toggle("responsive");
    header.classList.toggle("responsive");
    profile.classList.toggle("responsive")
    menuIcon.classList.toggle("responsive")
}
