/*
 *	Randomly return either "rock", "paper", or "scissors" to represent
 *	the computer choice in one game round.
 *
 *	@return {string} "rock", "paper", or "scissors" representing computer selection
 */
function getComputerChoice() {
	let choices = ["rock", "paper", "scissors"];
	let index = Math.floor(Math.random() * 3);
	return choices[index];
}

/*
 *	Prompt the user to enter "rock", "paper", or "scissors."
 *
 *	@return {string} "rock", "paper", or "scissors" representing player selection
 */
function getPlayerChoice() {
	return prompt("Choose your weapon!").toLowerCase();
}

/*
 *	Based on the computer and player selection, determine if the player
 *	is the winner, loser, or subject to a tie.
 *
 *	@param computerSelection {string} "rock", "paper", or "scissors" representing computer selection
 *	@param playerSelection {string} "rock", "paper", or "scissors" representing player selection
 *	@return {string} "winner", "loser", or "tie" representing results for the player
 */
function checkPlayerResults(computerSelection, playerSelection) {
	if (computerSelection === playerSelection) {
		return "tie";
	}

	switch (computerSelection) {
		case "rock": 
			if (playerSelection === "scissors") {
				return "loser";
			}
			else {
				return "winner";
			}
		case "paper":
			if (playerSelection === "rock") {
				return "loser";
			}
			else {
				return "winner";
			}
		case "scissors":
			if (playerSelection === "paper") {
				return "loser";
			}
			else {
				return "winner";
			}
	}
}

/*
 *	Play one round of rock paper scissors, and announce the results.
 *
 *	@param computerSelection {string} "rock", "paper", or "scissors" representing computer selection	
 *	@param playerSelection {string} "rock", "paper", or "scissors" representing player selection
 *	@return roundResults {object} container for properties of the player result and announcement
 */
function playRound(computerSelection, playerSelection) {
	console.log(playerSelection);
	let roundResult = {
		playerResult: "",
		announcement: "",
	};
	roundResult.playerResult = checkPlayerResults(computerSelection, playerSelection);

	switch (roundResult.playerResult) {
		case "tie":
			roundResult.announcement =  "Tied game!";
			break;
		case "loser":
			roundResult.announcement = `You lost! ${computerSelection} beats ${playerSelection}.`;
			break;
		case "winner":
			roundResult.announcement = `You win! ${playerSelection} beats ${computerSelection}.`;
			break;
	}

	console.log(roundResult.announcement);
	return roundResult;
}

/*
 *	Play five rounds of rock paper scissors, and announce the final winner.
 */
function game() {
	let computerWins = 0;
	let playerWins = 0;

	for (let i = 0; i < 5; ++i) {
		let roundResult = playRound(getComputerChoice(), getPlayerChoice());
		
		switch (roundResult.playerResult) {
			case "winner":
				playerWins++;
				break;
			case "loser":
				computerWins++;
				break;
			default:
				break;
		}
	}

	announceFinalWinner(computerWins, playerWins);
}


/*
 *	Announce the final winner of five rounds of rock paper scissors.
 *
 *	@param computerWins {number} the number of rounds the computer won
 *	@param playerWins {number} the number of rounds the player won
 */
function announceFinalWinner(computerWins, playerWins) {
	if (playerWins > computerWins) {
		console.log("You won!");
	}
	else if (playerWins < computerWins) {
		console.log("You lost!");
	}
	else {
		console.log("Tied game!");
	}
}