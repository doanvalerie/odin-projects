setup();

function setup() {
	const gridConfig = {
		dimension: 16,
		color: "rgb(0, 0, 0)"
	};

	createGrid(gridConfig);
	setupEventListeners(gridConfig);
}

function createGrid(gridConfig) {
	const grid = document.querySelector(".grid");
	const gridStyle = getComputedStyle(grid);
	const width = +gridStyle.width.replace(/\D/g, '');
	const pixels = width / gridConfig.dimension;

	for (let i = 0; i < gridConfig.dimension; ++i) {
		const row = createGridRow();
		for (let j = 0; j < gridConfig.dimension; ++j) {
			const cell = createGridCell(pixels);
			row.appendChild(cell);
		}
		grid.appendChild(row);
	}
}

function createGridRow() {
	const row = document.createElement("div");
	row.classList.toggle("grid-row");
	return row;
}

function createGridCell(pixels) {
	const cell = document.createElement("div");
	cell.style.width = `${pixels}px`;
	cell.style.height = `${pixels}px`;
	cell.style.background = "rgb(255, 255, 255)";
	cell.classList.toggle("grid-cell");
	return cell;
}

function setupEventListeners(gridConfig) {
	const colorDisplay = document.querySelector("#color-display");
	const colorSelector = document.querySelector(".color-selector");
	const rainbowSelector = document.querySelector(".rainbow-selector");
	const eraserSelector = document.querySelector(".eraser-selector");
	const cells = document.querySelectorAll(".grid-cell");

	function setCellPaint(e) {
		e.target.style.backgroundColor = gridConfig.color;
	}

	function setRandomCellPaint() {
		gridConfig.color = "#" + Math.floor(Math.random()*16777215).toString(16);
		handleCellPaint();
	}

	function handleColorSelector() {
		colorDisplay.click();
		colorDisplay.addEventListener("change", () => {
			gridConfig.color = colorDisplay.value;
			cells.forEach(cell => {
				cell.removeEventListener("mouseover", setRandomCellPaint);
				cell.addEventListener("mouseover", setCellPaint);
			});
		})
	}

	function handleRainbowSelector() {
		cells.forEach(cell => 
			cell.addEventListener("mouseover", setRandomCellPaint)	
		);
	}

	function handleEraserSelector() {
		cells.forEach(cell => {
			cell.removeEventListener("mouseover", setCellPaint);
			cell.removeEventListener("mouseover", setRandomCellPaint);
			cell.addEventListener("click", () => { 
				cell.style.backgroundColor = "rgb(255, 255, 255)";
			});
		});
	}

	colorSelector.addEventListener("click", handleColorSelector);
	rainbowSelector.addEventListener("click", handleRainbowSelector);
	eraserSelector.addEventListener("click", handleEraserSelector);
}

function setGridScale(gridConfig) {
	const scale = document.querySelector(".scale");
	scale.addEventListener("change", () => {
		gridConfig.dimension = scale.value;
		resetGrid();
		createGrid(gridConfig);
		colorGrid(gridConfig);
	});
}

function resetGrid() {
	const grid = document.querySelector(".grid");
	while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}