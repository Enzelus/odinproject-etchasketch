
const createDiv = document.createElement('div');
const cloneDiv = createDiv.cloneNode();
const canvasSelector = document.querySelector('.canvas-container');
let slider = document.getElementById('resolution');
let canvasChildren = canvasSelector.getElementsByTagName('div');

// Create variable that creates more div elements and put it in a for loop.
// Make that for loops default value to 16, but times it by the integer depending on the slider value.
// You need to represent the slider value as a variable so that you can use it inside the for loop.
// We also need to add a function that resets the board every time the input changes.

// slider.addEventListener('input', () => {
//     if (canvasSelector.hasChildNodes()) canvasReset()
// }) // Does its job of deleting the tiles. Now we need to figure out how to add the other tiles.
slider.addEventListener('input', canvasReset)
slider.addEventListener('input', canvas)
slider.addEventListener('input', classChange)

canvas()
classChange()

function canvas() {

    for (let i = 1 ;i <= slider.value * slider.value; i++) {
        let newDiv = document.createElement('div')
        canvasSelector.appendChild(newDiv);
    }   
    canvasSelector.style.gridTemplateColumns = `repeat(${slider.value}, auto)`;
    canvasSelector.style.gridTemplateRows = `repeat(${slider.value}, auto)`;
}

function canvasReset() {
    if (canvasSelector.hasChildNodes()) {
        for (let i = canvasSelector.childElementCount;i >= canvasSelector.childElementCount; i--) {
            canvasSelector.removeChild(canvasSelector.lastChild)
        }        
    }
    
}  

function classChange() {
    for(let i = 0; i <= canvasSelector.childElementCount; i++ ) {
        canvasChildren[i].addEventListener('mouseover', ()=> {
            canvasChildren[i].style.background = 'red';
        })
    }
}



// Things you don't know yet
// How to get the value of the slider.
// How to create multiples of the same element.
// How to make height and width of a flexbox the same height without setting an explicit value. 
// How to reset the canvas every time you change input.
// How to execute reset before placing the divs.    