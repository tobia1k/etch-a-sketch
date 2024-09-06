
let gridSize = 16;
let container = document.querySelector("#container");

for (let i = 0; i < gridSize * gridSize; i++) {
    let square = document.createElement("div");
    square.setAttribute("id", i);
    square.setAttribute("class", "square");
    square.style.height = (100 / gridSize) + "%";
    square.style.width = (100 / gridSize) + "%";
    container.appendChild(square);
}

document.addEventListener('mouseenter', event => {

})

document.addEventListener('mouseleave', event => {
    
})