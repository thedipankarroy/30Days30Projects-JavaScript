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
		"todo-list/",
		"todo-list/index.html",
		"todo-list/style.css",
		"todo-list/app.js",
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
