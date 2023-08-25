const form = document.querySelector("form");
const inputDivs = document.querySelectorAll("div.input-field");
const password = document.querySelector("input#password");
const confirmPassword = document.querySelector("input#confirm-password");

form.addEventListener("submit", (e) => {
	inputDivs.forEach((inputDiv) => {
		const field = inputDiv.querySelector("input");
		if (!field.validity.valid) {
			field.classList.add("touched");
			showError(field);
			e.preventDefault();
		}
	});
});

inputDivs.forEach((inputDiv) => {
	const field = inputDiv.querySelector("input");
	const fieldError = field.nextElementSibling;

	field.addEventListener("focus", () => inputDiv.classList.add("input-field-selected"));
	field.addEventListener("input", () => field.classList.add("touched"));
	field.addEventListener("blur", () => inputDiv.classList.remove("input-field-selected"));
	field.addEventListener("input", (e) => {
		if (field.validity.valid) {
			fieldError.textContent = "";
			fieldError.className = "error";
		}
		else {
			showError(e.target);
		}
	});
});

function showError(field) {
	const fieldError = field.nextElementSibling;

	if (field.validity.valueMissing) {
		fieldError.textContent = "This field cannot be empty.";
	}
	else if (field.validity.tooShort) {
		fieldError.textContent = `This field must be at least ${field.minLength} characters.`
	}
	else if (field.validity.patternMismatch) {
		if (field.pattern === "^[A-Za-z ]*[A-Za-z][A-Za-z ]*$") {
			fieldError.textContent = "Valid input contains only letters.";
		}
		else if (field.pattern === "^[0-9]{3}-[0-9]{3}-[0-9]{4}$") {
			fieldError.textContent = "Please enter a number in the format ###-###-####.";
		}
	}
	else if (field.validity.typeMismatch && field.type === "email") {
		fieldError.textContent = "Please enter a valid email address.";
	}
}


password.addEventListener("input", comparePasswords);
confirmPassword.addEventListener("input", comparePasswords);

function comparePasswords() {
	if (password.value !== confirmPassword.value && confirmPassword.classList.contains("touched")) {
		confirmPassword.nextElementSibling.textContent = "Passwords do not match";
		confirmPassword.setCustomValidity("Passwords do not match.");
	}
	else {
		confirmPassword.nextElementSibling.textContent = "";
		confirmPassword.setCustomValidity("");
	}	
}