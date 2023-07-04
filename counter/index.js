// DOM ELEMENTS
const count = document.getElementById("count");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");

// VARIABLES
let calculation;


// FUNCTIONS
function increaseCount() {
    count.innerText = Number(count.innerText) + 1;
}
function decreaseCount() {
    if(count.innerText > 0) {
        count.innerText = Number(count.innerText) - 1;
    }
}
function resetCount() {
    count.innerText = 0;
}


// EVENT LISTENER
document.addEventListener("click", function(event) {
    event.target.matches("#increase") ? increaseCount() : 
    event.target.matches("#decrease") ? decreaseCount() : 
    event.target.matches("#reset") ? resetCount() : null;
})