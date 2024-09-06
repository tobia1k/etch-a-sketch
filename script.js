let container = document.querySelector("#container");

let button = document.createElement("button");
document.body.insertBefore(button, container);
button.textContent = "New Grid";
button.addEventListener('click', () => {
    let newSize = null;
    do {
        newSize = prompt("How many squares do you want on each side?");
    } while (newSize > 100 || !newSize);
    deleteGrid();
    createGrid(newSize);
})

createGrid(16);

function createGrid(size = 16) {
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement("div");
        square.setAttribute("id", i);
        square.setAttribute("class", "square");
        square.style.height = (100 / size) + "%";
        square.style.width = (100 / size) + "%";
        container.appendChild(square);
    }
    draw();
}

function deleteGrid() {
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
}

function draw() {
    const squares = document.querySelectorAll(".square");

    for (const elem of squares) {
        let opacityOfElem = 0;
        elem.addEventListener('mouseenter', () => {

            elem.classList.add("hovered");
            elem.style.backgroundColor = getRandomColor();

            if (opacityOfElem <= 1) {
                opacityOfElem += 0.1;
                elem.style.opacity = opacityOfElem;
            }
        });
    }
}

function getRandomColor() {
    let letter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}