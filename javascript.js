
const createDiv = document.createElement('div');
const cloneDiv = createDiv.cloneNode();
const canvasSelector = document.querySelector('.canvas-container');
let slider = document.getElementById('resolution');

// PSEUDOCODE

// Create variable that creates more div elements and put it in a for loop.
// Make that for loops default value to 16, but times it by the integer depending on the slider value.
// You need to represent the slider value as a variable so that you can use it inside the for loop.

slider.addEventListener('input', canvas)

canvas()
function canvas() {
    for (let i = 1 ;i <= 16 * slider.value; i++) {
        let newDiv = document.createElement('div')
        canvasSelector.appendChild(newDiv);
    }
}

// Things you don't know yet
// How to get the value of the slider.
// How to create multiples of the same element.