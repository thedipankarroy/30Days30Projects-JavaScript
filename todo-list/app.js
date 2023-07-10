// ============
//DOM ELEMENTS
// ============
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")
const filterOption = document.querySelector("#filter-todo")

// ===============
// EVENT LISTENERS
// ===============

todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", checkTodo)
filterOption.addEventListener("click", filterTodo)
window.addEventListener("load", preload)

// =========
// FUNCTIONS
// =========

function addTodo(event) {
	// preveting the button from submitting
	event.preventDefault()
	if (todoInput.value) {
		// creting todo DIV
		const todoDiv = document.createElement("div")
		todoDiv.classList.add("todo")
		//create li
		const newTodo = document.createElement("li")
		newTodo.innerText = todoInput.value
		newTodo.classList.add("todo-item")
		todoDiv.appendChild(newTodo)
		// CHECKMARK BUTTON
		const completedBtn = document.createElement("button")
		completedBtn.innerHTML = `<i class='fas fa-check'></i>`
		completedBtn.classList.add("complete-btn")
		todoDiv.appendChild(completedBtn)
		// TRASH
		const trashBtn = document.createElement("button")
		trashBtn.innerHTML = `<i class='fas fa-trash'></i>`
		trashBtn.classList.add("trash-btn")
		todoDiv.appendChild(trashBtn)
		// APPEND TO TODOLIST
		todoList.appendChild(todoDiv)
		todoInput.value = ""
	} else {
		alert("Please enter a task!")
	}
}
function checkTodo(event) {
	const item = event.target
	const todo = item.parentElement
	//DELETE
	if (item.classList[0] === "trash-btn") {
		todo.classList.add("fall")
		todo.addEventListener("transitionend", () => {
			todo.remove()
		})
	} else if (item.classList[0] === "complete-btn") {
		todo.classList.toggle("completed")
	}
}
function filterTodo(event) {
	const todos = todoList.childNodes
	todos.forEach((todo) => {
		if (event.target.value === "all") {
			todo.style.display = "flex"
		} else if (event.target.value === "completed") {
			if (todo.classList.contains("completed")) {
				todo.style.display = "flex"
			} else {
				todo.style.display = "none"
			}
		} else if (event.target.value === "due") {
			if (todo.classList.contains("completed")) {
				todo.style.display = "none"
			} else {
				todo.style.display = "flex"
			}
		}
	})
}
function preload() {
	setTimeout(() => {
		const preload = document.querySelector(".preload")
		const root = document.querySelector(".loading")
		preload.classList.add("preload-finish")
		root.classList.add("loading-done")
	}, 2900)
}
