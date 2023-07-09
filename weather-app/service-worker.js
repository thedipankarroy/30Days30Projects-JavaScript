if ("serviceWorker" in navigator) {
	navigator.serviceWorker
		.register("service-worker.js")
		.then((registration) => {
			cacheAppShell()
		})
		.catch((error) => {
			console.error("Service Worker registration failed:", error)
		})
}

function cacheAppShell() {
	const filesToCache = [
		"weather-app/",
		"weather-app/index.html",
		"weather-app/style.css",
		"weather-app/script.js",
	]

	const cacheName = "app-shell-cache"

	self.addEventListener("install", (event) => {
		event.waitUntil(
			caches
				.open(cacheName)
				.then((cache) => {
					return cache.addAll(filesToCache)
				})
				.then(() => {
					console.log("App shell cached")
				})
		)
	})

	self.addEventListener("fetch", (event) => {
		event.respondWith(
			caches.match(event.request, {ignoreSearch: true}).then((response) => {
				return response || fetch(event.request)
			})
		)
	})
}
