const initiateGame = document.querySelector("button");
initiateGame.addEventListener("click", playGame);

function playGame() {
	let wins = {
		computer: 0,
		player: 0,
	};

	resetAnnouncement();
	removeOldScoreBoard();
	createNewScoreBoard();
	enableCards();
	playRound(wins);

	const results = document.querySelectorAll(".scoreboard");
	results.forEach(score => 
		score.addEventListener("DOMSubtreeModified", () => checkGameOver(wins))
	);
}

function resetAnnouncement() {
	const announcement = document.querySelector(".announcement");
	announcement.textContent = "ready your hand, greet your foe, let the RPS battle unfold!";
}

function removeOldScoreBoard() {
	const playerProfile = document.querySelector(".player .profile");
	const playerScoreBoard = document.querySelector(".player .scoreboard");
	if (playerScoreBoard != undefined) {
		playerProfile.removeChild(playerScoreBoard);
	}

	const computerProfile = document.querySelector(".computer .profile");
	const computerScoreBoard = document.querySelector(".computer .scoreboard");
	if (computerScoreBoard != undefined) {
		computerProfile.removeChild(computerScoreBoard);
	}
}

function createNewScoreBoard() {
	const profiles = document.querySelectorAll(".profile");
	profiles.forEach((profile) => {
		let scoreboard = document.createElement("div");
		scoreboard.textContent = "0 triumphs";
		scoreboard.setAttribute("class", "scoreboard");
		profile.appendChild(scoreboard);
	});
}

function enableCards() {
	const playerWeapons = document.querySelectorAll(".player .card");
	playerWeapons.forEach((playerWeapon) => 
		playerWeapon.setAttribute("style", "pointer-events: auto;")
	);
}

function playRound(wins) {
	let weaponChoices = {
		computer: "",
		player: "",
	};

	const playerWeapons = document.querySelectorAll(".player .card");
	playerWeapons.forEach((playerWeapon) => 
		playerWeapon.addEventListener("click", () => {
			weaponChoices.player = playerWeapon.attributes["data-key"].value;
			weaponChoices.computer = getRandomWeapon();
			const computerWeapon = document.querySelector(`.computer div[data-key="${weaponChoices.computer}"]`); 
			processTransition(computerWeapon, playerWeapon);
			processRoundResults(weaponChoices, wins);
		})
	);
}

function getRandomWeapon() {
	const choices = ["rock", "paper", "scissors"];
	const index = Math.floor(Math.random() * 3);
	return choices[index];
}

function processRoundResults(weaponChoices, wins) {
	playerResult = getPlayerResults(weaponChoices, wins);
	roundAnnouncement = getRoundAnnouncement(weaponChoices, playerResult)

	updateScoreBoard(wins);
	if (wins.computer !== 5 && wins.player !== 5) {
		sendAnnouncement(roundAnnouncement);
	}
}

function getPlayerResults(weaponChoices, wins) {
	if (weaponChoices.computer === weaponChoices.player) {
		return "tie";
	}

	switch (weaponChoices.computer) {
		case "rock": 
			if (weaponChoices.player === "scissors") {
				wins.computer++;
				return "loser";
			}
			else {
				wins.player++;
				return "winner";
			}
		case "paper":
			if (weaponChoices.player === "rock") {
				wins.computer++;
				return "loser";
			}
			else {
				wins.player++;
				return "winner";
			}
		case "scissors":
			if (weaponChoices.player === "paper") {
				wins.computer++;
				return "loser";
			}
			else {
				wins.player++;
				return "winner";
			}
	}
}

function getRoundAnnouncement(weaponChoices, playerResult) {
	switch (playerResult) {
		case "tie":
			return "Tied game!";
		case "loser":
			return `defeat! computer's ${weaponChoices.computer} demolishes your ${weaponChoices.player}.`;
		case "winner":
			return `triumph! your ${weaponChoices.player} defeats computer's ${weaponChoices.computer}.`;
	}
}

function updateScoreBoard(wins) {
	const computerScore = document.querySelector(".computer .scoreboard");
	const playerScore = document.querySelector(".player .scoreboard");
	
	computerScore.textContent = `${wins.computer} triumphs`;
	playerScore.textContent = `${wins.player} triumphs`;
}

function sendAnnouncement(string) {
	const announcement = document.querySelector(".announcement");
	announcement.textContent = string;
}

function checkGameOver(wins) {
	if (wins.computer == 5 || wins.player == 5) {
		announceFinalWinner(wins);
		terminateGame();
	}
}

function announceFinalWinner(wins) {
	if (wins.player > wins.computer) {
		sendAnnouncement("game over. you won!");
	}
	else {
		sendAnnouncement("game over. you lost!");
	}
}

function terminateGame() {
	const playerWeapons = document.querySelectorAll(".player .card");
	playerWeapons.forEach(playerWeapon => 
		playerWeapon.setAttribute("style", "pointer-events: none;")
	);
}

function processTransition(computerWeapon, playerWeapon) {
	const cards = document.querySelectorAll(".card");
	cards.forEach(card => card.classList.remove("weapon-selected"));

	playerWeapon.classList.add("weapon-selected");
	computerWeapon.classList.add("weapon-selected");
	
	playerWeapon.addEventListener("transitionend", () => playerWeapon.classList.remove("weapon-selected"));
	computerWeapon.addEventListener("transitionend", () => computerWeapon.classList.remove("weapon-selected"));
}