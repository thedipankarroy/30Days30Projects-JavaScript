const api = "b60229844c4d4a37b9a35a9a37717ea1"
const iconImg = document.getElementById("weather-icon")
const loc = document.querySelector("#location")
const tempC = document.querySelector(".c")
const windSpeed = document.querySelector(".windSpeed")
// const desc = document.querySelector(".desc")
let long, lat

window.addEventListener("load", () => {
	// Accesing Geolocation of User
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			// Storing Longitude and Latitude in variables
			long = position.coords.longitude
			lat = position.coords.latitude
			liveUpdate()
		})
	}
})

function liveUpdate() {
	// Using fetch to get data
	const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`
	fetch(base)
		.then((response) => {
			return response.json()
		})
		.then((data) => {
			const {temp} = data.main
			const place = data.name.replace(/ā/g, "a")
			const {description, icon} = data.weather[0]
			const {wind: {speed: windSpeed}} = data

			const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
			iconImg.src = iconUrl
			loc.textContent = `${place}`
			// loc.windSpeed = `${}`
			// desc.textContent = `${description}`
			tempC.textContent = `${Math.floor(temp)}°C`
		})
}
