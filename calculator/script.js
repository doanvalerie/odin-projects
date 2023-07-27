setup();

function setup() {
	const calcInfo = {
		operand1: null,
		operand2: null,
		result: null,
		operator: null,
		equalsLastClicked: false,
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
}

function checkDisplayReset(calcInfo) {
	if (calcInfo.equalsLastClicked) {
		clearDisplay(calcInfo);
		calcInfo.equalsLastClicked = false;
	}
}

function checkInputReset(calcInfo) {
	if (calcInfo.operatorLastClicked) {
		clearInput();
		calcInfo.operatorLastClicked = false;
	}
}

function clearDisplay(calcInfo) {
	const input = document.querySelector("div.input");
	const history = document.querySelector(".history");

	input.textContent = "";
	history.textContent = "";

	resetCalcInfo(calcInfo);
}

function clearInput() {
	const input = document.querySelector("div.input");
	input.textContent = "";
}

function displayNumber(e, calcInfo) {
	const input = document.querySelector("div.input");
	input.textContent += e.target.textContent;
	calcInfo.isInputOld = false;
}

function resetCalcInfo(calcInfo) {
	calcInfo.operand1 = null;
	calcInfo.operand2 = null;
	calcInfo.result = null;
	calcInfo.operator = null;
	calcInfo.equalsLastClicked = false;
	calcInfo.operatorLastClicked = false;
	calcInfo.isInputOld = true;
}

function deleteEntry(calcInfo) {
	const input = document.querySelector("div.input");
	const inputValue = input.textContent;
	input.textContent = inputValue.substring(0, inputValue.length - 1);

	if (calcInfo.isInputOld) {
		calcInfo.operand2 = +input.textContent;
	}
}

function inputDecimal() {
	const input = document.querySelector("div.input");
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

		const operationDefined = calcInfo.operand1 && calcInfo.operand2;
		if (operationDefined) {
			performOperation(calcInfo);
			displayResult(calcInfo);
			calcInfo.operand2 = calcInfo.result;
		}
	}

	calcInfo.equalsLastClicked = false;
	calcInfo.operatorLastClicked = true;
	calcInfo.isInputOld = true;
	calcInfo.operator = e.target.textContent;
	updateHistory(calcInfo);
}

function evalute(calcInfo) {
	if (calcInfo.equalsLastClicked || calcInfo.isInputOld) {
		return;
	}

	if (calcInfo.operand2) {
		const display = document.querySelector("div.input");

		calcInfo.equalsLastClicked = true;
		calcInfo.operand1 = calcInfo.operand2;
		calcInfo.operand2 = +display.textContent;

		performOperation(calcInfo);
		displayResult(calcInfo);
		updateHistory(calcInfo);

		calcInfo.operand2 = calcInfo.result;
		calcInfo.isInputOld = true;
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

	// processDecimalValue(calcInfo);
}

// function processDecimalValue(calcInfo) {
// 	const resultString = calcInfo.result.toString();
// 	const decimalIndex = resultString.indexOf(".");
// 	const decimalString = resultString.substring(decimalIndex + 1);
// 	if (resultString.length > 9) {
// 		calcInfo.result = +calcInfo.result.toFixed(5);
// 	}
// }

function displayResult(calcInfo) {
	const display = document.querySelector("div.input");
	display.textContent = calcInfo.result;
}

function updateHistory(calcInfo) {
	const history = document.querySelector(".history");
	if (calcInfo.equalsLastClicked) {
		history.textContent = `${calcInfo.operand1} ${calcInfo.operator} ${calcInfo.operand2} = ${calcInfo.result}`;
	}
	else {
		history.textContent = `${calcInfo.operand2} ${calcInfo.operator} `;
	}
}