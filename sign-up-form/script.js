const form = document.querySelector("form");
const inputDivs = document.querySelectorAll("div.input-field");
const policyInput = document.querySelector("input#terms-conditions");
const policyInputError = policyInput.querySelector("input#terms-conditions + div.text-content > div.error");
const password = document.querySelector("input#password");
const confirmPassword = document.querySelector("input#confirm-password");

password.addEventListener("input", comparePasswords);
confirmPassword.addEventListener("input", comparePasswords);

addFormListener();
addInputFieldListeners();

// Add listener to display error messages for invalid input fields on form submission
function addFormListener() {
	form.addEventListener("submit", (e) => {
		inputDivs.forEach((inputDiv) => {
			const field = inputDiv.querySelector("input");
			if (!field.validity.valid) {
				field.classList.add("touched");
				showError(field);
				e.preventDefault();
			}
		});

		if (!policyInput.validity.valid) {
			showError(policyInput);
			e.preventDefault();
		}
	});
}

// Add listeners for input fields
function addInputFieldListeners() {
	inputDivs.forEach((inputDiv) => {
		const field = inputDiv.querySelector("input");
		const fieldError = field.nextElementSibling;
	
		// Add listeners to process transitions when input fields have gained or lost focus
		field.addEventListener("focus", () => inputDiv.classList.add("input-field-selected"));
		field.addEventListener("blur", () => inputDiv.classList.remove("input-field-selected"));

		// Add listener to indicate a field has been edited by the user
		field.addEventListener("input", () => field.classList.add("touched"));

		// Add listener to actively display input errors as the user edits a field
		field.addEventListener("input", () => processInputError(field, fieldError));
	});

	// Add listener to remove error message if the user agreed to terms and conditions
	policyInput.addEventListener("change", processPolicyError);
}

function processInputError(field, fieldError) {
	field.addEventListener("input", (e) => {
		if (field.validity.valid) {
			fieldError.textContent = "";
		}
		else {
			showError(e.target);
		}
	})
}

function processPolicyError() {
	if (policyInput.validity.valid) {
		policyInputError.textContent = "";
	}
}

function showError(field) {
	const fieldError = field.nextElementSibling;

	if (field.id === "terms-conditions") {
		policyInputError.textContent = "Please agree to the terms and conditions.";
	}
	else if (field.validity.valueMissing) {
		fieldError.textContent = "This field cannot be empty.";
	}
	else if (field.validity.tooShort) {
		fieldError.textContent = `This field must contain at least ${field.minLength} characters.`;
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

function comparePasswords() {
	if (password.value !== confirmPassword.value && confirmPassword.classList.contains("touched")) {
		confirmPassword.nextElementSibling.textContent = "Passwords do not match.";
		confirmPassword.setCustomValidity("Passwords do not match.");
	}
	else {
		confirmPassword.nextElementSibling.textContent = "";
		confirmPassword.setCustomValidity("");
	}	
}