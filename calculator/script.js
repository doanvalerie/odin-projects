setup();

function setup() {
	const calcInfo = {
		operand1: null,
		operand2: null,
		result: null,
		operator: null,
		equalLastClicked: false,
		operatorLastClicked: false,
		isInputOld: true,
	}

	setupEventListeners(calcInfo);
}

function setupEventListeners(calcInfo) {
	const numberButtons = document.querySelectorAll("button.number");
	numberButtons.forEach(numberButton => 
		numberButton.addEventListener("click", (e) => {
			checkDisplayReset(calcInfo);
			checkInputReset(calcInfo);
			displayNumber(e, calcInfo);
		})	
	);

	const clearButton = document.querySelector("button.clear");
	clearButton.addEventListener("click", () => clearDisplay(calcInfo));

	const deleteButton = document.querySelector("button.delete");
	deleteButton.addEventListener("click", () => deleteEntry(calcInfo));

	const decimalButton = document.querySelector("button.decimal");
	decimalButton.addEventListener("click", inputDecimal);

	let operationButtons = document.querySelectorAll("button.operator");
	operationButtons.forEach(operationButton => 
		operationButton.addEventListener("click", (e) => processOperator(e, calcInfo))
	)

	const equalButton = document.querySelector("button.equal");
	equalButton.addEventListener("click", () => evalute(calcInfo));

	const signButton = document.querySelector("button.sign");
	signButton.addEventListener("click", () => processSign(calcInfo));

	window.addEventListener("keydown", processKeyboardInput);
}

function checkDisplayReset(calcInfo) {
	if (calcInfo.equalLastClicked) {
		clearDisplay(calcInfo);
		calcInfo.equalLastClicked = false;
	}
}

function checkInputReset(calcInfo) {
	if (calcInfo.operatorLastClicked) {
		clearInput();
		calcInfo.operatorLastClicked = false;
	}
}

function clearDisplay(calcInfo) {
	const input = document.querySelector(".input");
	const history = document.querySelector(".history");

	input.textContent = "";
	history.textContent = "";

	resetCalcInfo(calcInfo);
}

function clearInput() {
	const input = document.querySelector(".input");
	input.textContent = "";
}

function displayNumber(e, calcInfo) {
	const input = document.querySelector("div.input");

	if (input.textContent.length + 1 > 10) {
		return;
	}

	input.textContent += e.target.textContent;
	calcInfo.isInputOld = false;
}

function resetCalcInfo(calcInfo) {
	calcInfo.operand1 = null;
	calcInfo.operand2 = null;
	calcInfo.result = null;
	calcInfo.operator = null;
	calcInfo.equalLastClicked = false;
	calcInfo.operatorLastClicked = false;
	calcInfo.isInputOld = true;
}

function deleteEntry(calcInfo) {
	const input = document.querySelector(".input");
	const inputValue = input.textContent;
	input.textContent = inputValue.substring(0, inputValue.length - 1);

	if (calcInfo.isInputOld) {
		calcInfo.operand2 = +input.textContent;
	}
}

function inputDecimal() {
	const input = document.querySelector(".input");

	if (input.textContent.includes(".")) {
		return;
	}

	input.textContent += ".";
}

function processOperator(e, calcInfo) {
	const input = document.querySelector("div.input");
	
	if (!input.textContent) {
		return;
	}

	if (!calcInfo.isInputOld) {
		calcInfo.operand1 = calcInfo.operand2;
		calcInfo.operand2 = +input.textContent;

		const operationDefined = calcInfo.operand1 != null && calcInfo.operand2 != null;

		if (operationDefined) {
			performOperation(calcInfo);
			displayResult(calcInfo);
			calcInfo.operand2 = calcInfo.result;
		}
	}

	calcInfo.equalLastClicked = false;
	calcInfo.operatorLastClicked = true;
	calcInfo.isInputOld = true;
	calcInfo.operator = e.target.textContent;
	updateHistory(calcInfo);
}

function evalute(calcInfo) {
	if (calcInfo.equalLastClicked || calcInfo.isInputOld) {
		return;
	}

	if (calcInfo.operand2 != null) {
		const display = document.querySelector("div.input");

		calcInfo.equalLastClicked = true;
		calcInfo.operand1 = calcInfo.operand2;
		calcInfo.operand2 = +display.textContent;

		performOperation(calcInfo);
		displayResult(calcInfo);
		updateHistory(calcInfo);

		calcInfo.operand2 = calcInfo.result;
		calcInfo.isInputOld = true;
	}
}

function processSign(calcInfo) {
	const input = document.querySelector("div.input");
	if (!input.textContent) {
		return;
	}

	inputValue = +input.textContent;
	if (inputValue < 0) {
		input.textContent = input.textContent.replace("-", "");
	}
	if (inputValue > 0) {
		input.textContent = "-" + input.textContent;
	}
	if (calcInfo.isInputOld) {
		calcInfo.operand2 = +input.textContent;
	}
}

function performOperation(calcInfo) {
	switch (calcInfo.operator) {
		case "+":
			calcInfo.result = calcInfo.operand1 + calcInfo.operand2;
			break;
		case "-":
			calcInfo.result = calcInfo.operand1 - calcInfo.operand2;
			break;
		case "x":
			calcInfo.result = calcInfo.operand1 * calcInfo.operand2;
			break;
		case "/":
			calcInfo.result = calcInfo.operand1 / calcInfo.operand2;
			break;
		case "%":
			calcInfo.result = calcInfo.operand1 % calcInfo.operand2;
			break;
	}
}

function displayResult(calcInfo) {
	const display = document.querySelector("div.input");
	resultString = calcInfo.result.toString();

	if (calcInfo.result.toString().length > 10) {
		display.textContent = calcInfo.result.toExponential(6);
	} 
	else {
		display.textContent = calcInfo.result;
	}
}

function updateHistory(calcInfo) {
	const history = document.querySelector(".history");
	const operand1 = processDecimalLength(calcInfo.operand1);
	const operand2 = processDecimalLength(calcInfo.operand2);
	const result = processDecimalLength(calcInfo.result);

	if (calcInfo.equalLastClicked) {
		history.textContent = `${operand1} ${calcInfo.operator} ${operand2} = ${result}`;
	} 
	else {
		history.textContent = `${operand2} ${calcInfo.operator} `;
	}
}

function processDecimalLength(number) {
	if (number == undefined) {
		return;
	}
	if (number.toString().length > 10) {
		return number.toExponential(6);
	}
	return number.toString();
}

function processKeyboardInput(e) {
	const button = document.querySelector(`[data-key="${e.key}"`);
	if (button != undefined) {
		button.click();
	} 
	else if (e.code === "Enter") {
		const equalButton = document.querySelector(`[data-key="="]`);
		equalButton.click();
	}
	else if (e.code === "Backspace") {
		const deleteButton = document.querySelector(".delete");
		deleteButton.click();
	}
}