const inputDivs = document.querySelectorAll('div.input-field');

inputDivs.forEach((inputDiv) => {
const field = inputDiv.querySelector('input');
	console.log(inputDiv);
	field.addEventListener("focus", () => inputDiv.classList.toggle("input-field-selected"));
	field.addEventListener("focusout", () => inputDiv.classList.toggle("input-field-selected"));
});