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
    colorCount();
}
function decreaseCount() {
    count.innerText = Number(count.innerText) - 1;
    colorCount();
}
function resetCount() {
    count.innerText = 0;
    colorCount();
}

function colorCount () {
    Number(count.innerText) > 0 ? count.style.color = "#50be50" :
    Number(count.innerText) < 0 ? count.style.color = "#be6250" :
    count.style.color = "#0b1608";
}


// EVENT LISTENER
document.addEventListener("click", function(event) {
    setTimeout(function () {
        event.target.matches("#increase") ? increaseCount() : 
        event.target.matches("#decrease") ? decreaseCount() : 
        event.target.matches("#reset") ? resetCount() : null;
    }, 150)
})