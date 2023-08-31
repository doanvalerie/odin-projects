const library = document.getElementById("library");
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");
const fields = document.querySelectorAll(".field");
const addBook = document.getElementById("add-book");
const myLibrary = [];

function Book(title, author, pages, description, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.description = description;
	this.read = read;
}

function addDialogListeners() {
	// Display dialog when button is clicked
	addBook.addEventListener("click", () => dialog.showModal());

	// Close dialog when anywhere outside the form is clicked
	dialog.addEventListener('click', () => dialog.close());
	form.addEventListener('click', (e) => e.stopPropagation());
}

// Display form validation errors as user enters invalid input
function addInputListeners() {
	fields.forEach((field) => {
		const input = field.querySelector(".user-input");
		const error = field.querySelector(".error");

		input.addEventListener("input", () => {
			if (!input.validity.valid) {
				showError(field);
			}
			else {
				error.textContent = "";
			}
		});
	});
}

function showError(field) {
	const input = field.querySelector(".user-input");
	const error = field.querySelector(".error");

	if (input.validity.patternMismatch && input.name === "pages") {
		error.textContent = "Please enter a valid number.";
	}
	else if (input.validity.valueMissing) {
	 	error.textContent = "This field cannot be empty.";
	}
}

function addFormSubmissionListener() {
	form.addEventListener("submit", (e) => {
		let hasInvalidInput = false;
		e.preventDefault();

		fields.forEach((field) => {
			const input = field.querySelector(".user-input");
			if (!input.validity.valid) {
				showError(field);
				hasInvalidInput = true;
			}
		});

		if (!hasInvalidInput) {
			const title = form.elements["title"].value;
			const author = form.elements["author"].value;
			const pages = form.elements["pages"].value;
			const description = form.elements["description"].value;
			const read = form.elements["status"].value === "read" ? true : false;

			const newBook = new Book(title, author, pages, description, read);
			addBookToLibrary(newBook);
			form.reset();
		}
	});
}

function addBookToLibrary(...books) {
	for (let book of books) {
		myLibrary.push(book);

		const card = document.createElement("div");
		const cardHeader = document.createElement("div");
		const title = document.createElement("div");
		const deleteCard = document.createElement("span");
		const author = document.createElement("div");
		const pages = document.createElement("div");
		const description = document.createElement("div");
		const status = document.createElement("button");

		addHTMLClasses(card, cardHeader, title, deleteCard, author, pages, description, status);
		addTextToCard(book, title, deleteCard, author, pages, description);		
		addStylingToStatus(book, status);

		cardHeader.append(title, deleteCard);
		card.appendChild(cardHeader);
		card.appendChild(author);
		card.appendChild(pages);
		card.appendChild(description);
		card.appendChild(status);
		library.appendChild(card);

		card.dataset.index = myLibrary.length - 1;
		addStatusChangerListener(status);
		addCardRemovalListener(deleteCard);
	}
}

function addHTMLClasses(card, cardHeader, title, deleteCard, author, pages, description, status) {
	card.classList.add("card");
	cardHeader.classList.add("card-header");
	title.classList.add("title");
	deleteCard.classList.add("material-symbols-outlined", "delete");
	author.classList.add("author");
	pages.classList.add("pages");
	description.classList.add("description");
	status.classList.add("status");
}

function addTextToCard(book, title, deleteCard, author, pages, description) {
	title.textContent = book.title;
	deleteCard.textContent = "close";
	author.innerHTML = `<span class="emphasis">Author</span>: ${book.author}`;
	pages.innerHTML = `<span class="emphasis">Pages</span>: ${book.pages}`;
	description.textContent = book.description;
}

function addStylingToStatus(book, status) {
	if (book.read) {
		status.textContent = "Read";
		status.style.backgroundColor = "rgb(152, 191, 152)";
	}
	else {
		status.textContent = "Not read";
		status.style.backgroundColor = "rgb(227, 172, 172)";
	}
}

function addStatusChangerListener(status) {
	status.addEventListener("click", () => {
		const card = status.closest(".card");
		const book = myLibrary[card.dataset.index];

		if (book.read) {
			status.textContent = "Not read";
			status.style.backgroundColor = "rgb(227, 172, 172)";
			book.read = false;
		}
		else {
			status.textContent = "Read";
			status.style.backgroundColor = "rgb(152, 191, 152)";
			book.read = true;
		}
	});
}

function addCardRemovalListener(deleteCard) {
	deleteCard.addEventListener("click", () => {
		const card = deleteCard.closest(".card");
		let nextCard = card.nextElementSibling;
		myLibrary.splice(card.dataset.index, 1);
		while (nextCard !== null) {
			nextCard.dataset.index--;
			nextCard = nextCard.nextElementSibling;
		}
		card.remove();
	});
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", false);
const animalFarm = new Book("Animal Farm", "George Orwell", 140, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut modi molestias cupiditate ratione! Laboriosam exercitationem quas reiciendis, quam, nesciunt quidem inventore quo iusto, repellendus ut voluptates perspiciatis minima esse molestiae.", true);
const handmaidsTale = new Book("The Handmaid's Tale", "Margaret Atwood", 311, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolorem alias nostrum, eius est temporibus unde magnam maxime aspernatur ex voluptate in porro consectetur, nemo odit deleniti asperiores. Expedita, veniam.", false);

addBookToLibrary(theHobbit, animalFarm, handmaidsTale); 
addDialogListeners();
addInputListeners();
addFormSubmissionListener();