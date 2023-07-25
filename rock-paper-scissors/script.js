class RockPaperScissors {
	constructor() {
		this.WINNING_SCORE = 5;

		this.wins = {
			computer: 0,
			player: 0
		};
		this.weaponChoices = {
			computer: "",
			player: "",
		};
		this.weaponElements = {
			computer: "",
			player: ""
		};

		this.handleWeaponClick = this.handleWeaponClick.bind(this);
		this.checkGameOver = this.checkGameOver.bind(this);

		this.playerCards = document.querySelectorAll(".player .card");
		this.announcement = document.querySelector(".announcement");

		this.setup();
	}

	setup() {
		this.setPlayGameListener();
		this.resetAnnouncement();
		this.removeOldScoreboard();
		this.createNewScoreboard();
		this.enableCards();
		this.setScoreboardListener();
		this.playRound();
	}

	setPlayGameListener() {
		const playGame = document.querySelector("button");
		playGame.addEventListener("click", this.setup.bind(this));
	}

	resetAnnouncement() {
		this.announcement.textContent = "ready your hand, greet your foe, let the RPS battle unfold!";
	}

	removeOldScoreboard() {
		const playerProfile = document.querySelector(".player .profile");
		const playerScoreboard = document.querySelector(".player .scoreboard");

		if (playerScoreboard != undefined) {
			playerProfile.removeChild(playerScoreboard);
		}
	
		const computerProfile = document.querySelector(".computer .profile");
		const computerScoreboard = document.querySelector(".computer .scoreboard");
		
		if (computerScoreboard != undefined) {
			computerProfile.removeChild(computerScoreboard);
		}

		this.wins.computer = 0;
		this.wins.player = 0;
	}

	createNewScoreboard() {
		const profiles = document.querySelectorAll(".profile");
		profiles.forEach(profile => {
			let scoreboard = document.createElement("div");
			scoreboard.textContent = "0 triumphs";
			scoreboard.classList.toggle("scoreboard");
			profile.appendChild(scoreboard);
		});
	}

	enableCards() {
		this.playerCards.forEach(card => 
			card.style.pointerEvents = "auto"
		);
	}

	setScoreboardListener() {
		const results = document.querySelectorAll(".scoreboard");
		results.forEach(score => 
			score.addEventListener("DOMSubtreeModified", this.checkGameOver)
		);
	}

	playRound() {
		this.playerCards.forEach(card => 
			card.addEventListener("click", this.handleWeaponClick)
		);
	}

	handleWeaponClick(e) {
		this.weaponChoices.player = e.currentTarget.attributes["data-key"].value;
		this.weaponChoices.computer = this.getRandomWeapon();

		this.weaponElements.computer = document.querySelector(`.computer div[data-key="${this.weaponChoices.computer}"]`); 
		this.weaponElements.player = e.currentTarget;

		this.processTransition();
		this.processRoundResults();
	}

	processTransition() {
		const cards = document.querySelectorAll(".card");
		cards.forEach(card => card.classList.remove("weapon-selected"));

		const handlePlayerTransition = () => {
			this.weaponElements.player.classList.remove("weapon-selected");
			this.weaponElements.player.removeEventListener("transitionend", handlePlayerTransition);
		}

		const handleComputerTransition = () => {
			this.weaponElements.computer.classList.remove("weapon-selected");
			this.weaponElements.computer.removeEventListener("transitionend", handleComputerTransition);
		}

		this.weaponElements.player.classList.add("weapon-selected");
		this.weaponElements.computer.classList.add("weapon-selected");
		
		this.weaponElements.player.addEventListener("transitionend", handlePlayerTransition);
		this.weaponElements.computer.addEventListener("transitionend", handleComputerTransition);
	}

	getRandomWeapon() {
		const choices = ["rock", "paper", "scissors"];
		const index = Math.floor(Math.random() * 3);
		return choices[index];
	}
	
	processRoundResults() {
		const playerResult = this.getPlayerResults();
		const roundAnnouncement = this.getRoundAnnouncement(playerResult);
	
		this.updateScoreboard();

		if (this.wins.computer !== this.WINNING_SCORE && this.wins.player !== this.WINNING_SCORE) {
			this.sendAnnouncement(roundAnnouncement);
		}
	}

	getPlayerResults() {
		if (this.weaponChoices.computer === this.weaponChoices.player) {
			return "tie";
		}

		switch (this.weaponChoices.computer) {
			case "rock": 
				if (this.weaponChoices.player === "scissors") {
					this.wins.computer++;
					return "loser";
				}
				else {
					this.wins.player++;
					return "winner";
				}
			case "paper":
				if (this.weaponChoices.player === "rock") {
					this.wins.computer++;
					return "loser";
				}
				else {
					this.wins.player++;
					return "winner";
				}
			case "scissors":
				if (this.weaponChoices.player === "paper") {
					this.wins.computer++;
					return "loser";
				}
				else {
					this.wins.player++;
					return "winner";
				}
		}
	}

	getRoundAnnouncement(playerResult) {
		switch (playerResult) {
			case "tie":
				return '<span class="emphasis">tie!</span> face a rematch to settle the score.';
			case "loser":
				return `<span class="emphasis">defeat!</span> computer's ${this.weaponChoices.computer} demolishes your ${this.weaponChoices.player}.`;
			case "winner":
				return `<span class="emphasis">triumph!</span> your ${this.weaponChoices.player} defeats computer's ${this.weaponChoices.computer}.`;
		}
	}

	updateScoreboard() {
		const computerScore = document.querySelector(".computer .scoreboard");
		const playerScore = document.querySelector(".player .scoreboard");
		
		computerScore.textContent = `${this.wins.computer} triumphs`;
		playerScore.textContent = `${this.wins.player} triumphs`;
	}

	sendAnnouncement(string) {
		this.announcement.innerHTML = string;
	}

	checkGameOver() {
		if (this.wins.computer == this.WINNING_SCORE || this.wins.player == this.WINNING_SCORE) {
			this.announceFinalWinner();
			this.finalizeScoreboard();
			this.terminateGame();
			this.removeEventListeners();
		}
	}

	announceFinalWinner() {
		if (this.wins.player > this.wins.computer) {
			this.sendAnnouncement('game over! <span class="emphasis">you won :)</span>');
		}
		else {
			this.sendAnnouncement('game over! <span class="emphasis">you lost :(</span>');
		}
	}

	finalizeScoreboard() {
		const winnerScoreboard = document.querySelector(`.${this.wins.player == this.WINNING_SCORE ? "player" : "computer"} .scoreboard`);
		winnerScoreboard.classList.add("emphasis");
	}

	terminateGame() {
		this.playerCards.forEach(card => 
			card.style.pointerEvents = "none"
		);
	}

	removeEventListeners() {
		const results = document.querySelectorAll(".scoreboard");

		results.forEach(score => 
			score.removeEventListener("DOMSubtreeModified", this.checkGameOverCallback)
		);

		this.playerCards.forEach(card => 
			card.removeEventListener("click", this.handleWeaponClickCallback)
		);
	}
}

function play() {
	const game = new RockPaperScissors;
}

play();