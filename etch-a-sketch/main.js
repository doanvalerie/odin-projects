class Grid {
	constructor(dimension) {
		this.dimension = dimension;
		this.cellsArray = [];
		this.createGrid();
	}

	createGrid() {
		const grid = document.querySelector(".grid");
		const gridStyle = getComputedStyle(grid);
		const width = gridStyle.width.replace(/\D/g, "");
		const pixels = width / this.dimension;

		for (let row = 0; row < this.dimension; ++row) {
			const gridRow = this.createGridRow();
			for (let col = 0; col < this.dimension; ++col) {
				const cell = new Cell(pixels, "rgb(255, 255, 255)");
				this.cellsArray.push(cell);
				gridRow.appendChild(cell.element); 
			}
			grid.appendChild(gridRow);
		}
	}

	createGridRow() {
		const gridRow = document.createElement("div");
		gridRow.classList.toggle("grid-row");
		return gridRow;
	}

	resetGrid() {
		const grid = document.querySelector(".grid");

		while (grid.firstChild) {
			grid.removeChild(grid.firstChild);
		}

		this.cellsArray.forEach(cell => {
			cell.element.removeColorModes();
		})
	}
}

class Cell {
	constructor(pixels, color) {
		this.pixels = pixels;
		this.color = color;
		this.element = this.createGridCell();
		this.setSelectCellPaint = this.setSelectCellPaint.bind(this);
		this.setRandomCellPaint = this.setRandomCellPaint.bind(this);
		this.eraseCellPaint = this.eraseCellPaint.bind(this);
		this.setLightShader = this.setLightShader.bind(this);
		this.setDarkShader = this.setDarkShader.bind(this);
	}

	removeColorModes() {
		this.element.removeEventListener("mouseover", this.setSelectCellPaint);
		this.element.removeEventListener("mouseover", this.setRandomCellPaint);
		this.element.removeEventListener("click", this.eraseCellPaint);
		this.element.removeEventListener("mouseover", this.setDarkShader);
		this.element.removeEventListener("mouseover", this.setLightShader);
	}

	createGridCell() {
		const cell = document.createElement("div");
		cell.style.width = `${this.pixels}px`;
		cell.style.height = `${this.pixels}px`;
		cell.style.background = this.color;
		cell.classList.toggle("grid-cell");
		return cell;
	}

	setSelectCellPaint() {
		const colorDisplay = document.querySelector("#color-display");
		this.color = hexToRGB(colorDisplay.value);
		this.element.style.backgroundColor = this.color;
	}

	setRandomCellPaint() {
		const red = Math.floor(Math.random() * 256).toString();
		const green = Math.floor(Math.random() * 256).toString();
		const blue = Math.floor(Math.random() * 256).toString();
		this.color = `rgb(${red}, ${green}, ${blue})`;
		this.element.style.backgroundColor = this.color;
	}

	eraseCellPaint() {
		const eraserDisplay = document.querySelector("#eraser-display");
		this.color = eraserDisplay.value;
		this.element.style.backgroundColor = this.color;
	}

	setLightShader() {
		let rgbValues = this.color.split(",");
		rgbValues = rgbValues.map(value => {
			value = +value.replace(/[^0-9.]/g, '');
			const remainder = 255 - value;
			return value + remainder * 0.1;
		});
		this.color = `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`;
		this.element.style.backgroundColor = this.color;
	}

	setDarkShader() {
		let rgbValues = this.color.split(",");
		rgbValues = rgbValues.map(value => {
			value = +value.replace(/[^0-9.]/g, '');
			return value * 0.9;
		});
		this.color = `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`;
		this.element.style.backgroundColor = this.color;
	}
}

class Editor {
	constructor(grid) {
		this.grid = grid;
		this.enableColorSelector();
		this.enableRainbowSelector();
		this.enableEraserSelector();
		this.enableLightShaderSelector();
		this.enableDarkShaderSelector();
		this.enableScaleSelector();
	}

	enableColorSelector() {
		const colorSelector = document.querySelector(".color-selector");
		const colorDisplay = document.querySelector("#color-display");

		colorSelector.addEventListener("click", () => {
			colorDisplay.click();
			this.grid.cellsArray.forEach(cell => {
				cell.removeColorModes();
				cell.element.addEventListener("mouseover", cell.setSelectCellPaint);
			});
		});
	}

	enableRainbowSelector() {
		const rainbowSelector = document.querySelector(".rainbow-selector");

		rainbowSelector.addEventListener("click", () => {
			this.grid.cellsArray.forEach(cell => {
				cell.removeColorModes();
				cell.element.addEventListener("mouseover", cell.setRandomCellPaint);
			});
		});
	}

	enableEraserSelector() {
		const eraserSelector = document.querySelector(".eraser-selector");
		const eraserDisplay = document.querySelector("#eraser-display");

		eraserSelector.addEventListener("click", () => {
			eraserDisplay.click();
			this.grid.cellsArray.forEach(cell => {
				cell.removeColorModes();
				cell.element.addEventListener("click", cell.eraseCellPaint);
			})
		});
	}

	enableLightShaderSelector() {
		const lightShaderSelector = document.querySelector(".light-shader-selector");

		lightShaderSelector.addEventListener("click", () => {
			this.grid.cellsArray.forEach(cell => {
				cell.removeColorModes();
				cell.element.addEventListener("mouseover", cell.setLightShader);
			})
		});
	}

	enableDarkShaderSelector() {
		const darkShaderSelector = document.querySelector(".dark-shader-selector");
		
		darkShaderSelector.addEventListener("click", () => {
			this.grid.cellsArray.forEach(cell => {
				cell.removeColorModes();
				cell.element.addEventListener("mouseover", cell.setDarkShader);
			})
		})
	}
	
	enableScaleSelector() {
		const scaleSelector = document.querySelector(".scale");

		scaleSelector.addEventListener("change", () => {
			this.grid.resetGrid();
			this.grid = new Grid(scaleSelector.value);
		})
	}
}

function hexToRGB(hex) {
	const captures = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	rgb = {
	  red: parseInt(captures[1], 16),
	  green: parseInt(captures[2], 16),
	  blue: parseInt(captures[3], 16)
	}
	return `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`;
}

setupGame();

function setupGame() {
	const grid = new Grid(16);
	const editor = new Editor(grid);
}