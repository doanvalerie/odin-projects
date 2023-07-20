let color = "black";
let dimension = 16;
setup();

function setup() {
	createGrid();
	pickColor();
	pickScale();
	setEraser();
}

function createGrid() {
	const grid = document.querySelector(".grid");
	const gridStyle = getComputedStyle(grid);
	const width = +gridStyle.width.replace(/\D/g, '');
	const pixels = width / dimension;

	for (let i = 0; i < dimension; ++i) {
		const row = document.createElement("div");
		row.classList.add("row");
		for (let j = 0; j < dimension; ++j) {
			const square = document.createElement("div");
			square.setAttribute("style", `width: ${pixels}px; height: ${pixels}px;`);
			square.classList.add("square");
			row.appendChild(square);
		}
		grid.appendChild(row);
	}
	monitorColor();
}

function resetGrid() {
	const grid = document.querySelector(".grid");
	while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function monitorColor() {
	const squares = document.querySelectorAll(".square");
	squares.forEach(square => 
		square.addEventListener("mouseover", () => { 
			square.style.backgroundColor = color;
		})
	);
}

function pickColor() {
	const colorPicker = document.querySelector(".colorpicker");
	colorPicker.addEventListener("change", () => color = colorPicker.value);
}

function pickScale() {
	const scale = document.querySelector(".scale");
	scale.addEventListener("change", () => {
		console.log("test");
		dimension = scale.value;
		resetGrid();
		createGrid();
	});
}

function setEraser() {
	const eraser = document.querySelector(".eraser");
	eraser.addEventListener("click", () => color = "white");
}
