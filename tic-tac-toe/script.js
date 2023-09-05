const Player = (marker, number) => {
	const profile = document.querySelector(`.profile[data-player="${number}"]`);
	const score = profile.querySelector('.number');

	return { 
		marker,
		number,
		profile,
		score
	};
}

const ResetActions = (function () {
	const resetGameButton = document.querySelector('button.reset-game');
	const resetScoreButton = document.querySelector('button.reset-score');

	const addResetGameListener = function () {
		resetGameButton.addEventListener("click", GamePlay.resetGame);
	}

	const addResetScoreListener = function () {
		resetScoreButton.addEventListener("click", () => {
			GamePlay.getCurrentPlayer().score.textContent = '0';
			GamePlay.getLastPlayer().score.textContent = '0';
		});
	}

	return {
		addResetGameListener,
		addResetScoreListener
	}
})();

const ProcessAnnouncements = (function () {
	const addElement = function () {
		const gameContent = document.querySelector('.game-content');
		const main = document.querySelector('main');

		const announcement = document.createElement('div');
		announcement.classList.add('announcement');

		main.insertBefore(announcement, gameContent);
	}

	const removeElement = function () {
		const announcement = document.querySelector('.announcement');
		if (announcement != undefined) {
			announcement.remove();
		}
	}

	return {
		addElement,
		removeElement,
	}
})();

const Transitions = (function () {
	const doSwitchTransitions = function () {
		GamePlay.getCurrentPlayer().profile.classList.add("current-player");
		GamePlay.getLastPlayer().profile.classList.remove("current-player");
	}

	const removeSwitchTransitions = function () {
		GamePlay.getCurrentPlayer().profile.classList.remove("current-player");
	}

	return {
		doSwitchTransitions,
		removeSwitchTransitions
	}
})();

const GameBoard = (function () {
	const board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
	const boxes = document.querySelectorAll('.board .box');

	const displayBoard = function () {
		for (let row = 0; row < 3; ++row) {
			for (let col = 0; col < 3; ++col) {
				const box = document.querySelector(`.box[data-row="${row}"][data-column="${col}"]`);
				if (board[row][col] === 'X' || board[row][col] === 'O') {
					box.textContent = board[row][col];
				}
				else {
					box.textContent = "";
				}
			}
		}
	}

	const resetBoard = function () {
		board[0] = [0, 0, 0];
		board[1] = [0, 0, 0];
		board[2] = [0, 0, 0];
	}

	const disableBoard = function () {
		boxes.forEach((box) => {
			box.style.pointerEvents = "none";
		});
	}

	const enableBoard = function () {
		boxes.forEach((box) => {
			box.style.pointerEvents = "auto";
		});
	}

	const styleBoardMarker = function (box) {
		const root = document.querySelector(':root');
		const computedStyle = getComputedStyle(root);
		
		if (GamePlay.getCurrentPlayer() === GamePlay.player1) {
			box.style.color = computedStyle.getPropertyValue('--p1-marker-dark-color');
		}
		else if (GamePlay.getCurrentPlayer() === GamePlay.player2 ) {
			box.style.color = computedStyle.getPropertyValue('--p2-marker-dark-color');
		}
	}

	return {
		board,
		boxes,
		displayBoard,
		resetBoard,
		disableBoard,
		enableBoard,
		styleBoardMarker
	}
})();	

const GamePlay = (function () {
	const player1 = Player('X', 1);
	const player2 = Player('O', 2);

	let numberTurn = 0;
	let currentPlayer = player1;
	let lastPlayer = player2;

	const setUpPlayTurn = function () {
		GameBoard.boxes.forEach((box) => {
			box.addEventListener('click', () => {
				const boxPlayed = {
					row: box.dataset.row,
					col: box.dataset.column
				};

				GameBoard.board[boxPlayed.row][boxPlayed.col] = currentPlayer.marker;
				box.style.pointerEvents = 'none';
				numberTurn++;

				GameBoard.styleBoardMarker(box);				
				GameBoard.displayBoard();
				processRound(boxPlayed);
			});
		});
	}

	const processRound = function (boxPlayed) {
		const playerWon = didPlayerWin(boxPlayed.row, boxPlayed.col);

		const results = {
			playerWon: playerWon,
			gameTied: playerWon ? false : numberTurn === 9
		};

		const gameOver = results.playerWon || results.gameTied;

		if (gameOver) {
			endRound(results);
		}
		else {
			switchPlayers();
			Transitions.doSwitchTransitions();
		}
	}

	const didPlayerWin = function (row, col) {
		if (WinLogic.isRowWin(row) || WinLogic.isColumnWin(col) || WinLogic.isDiagonalWin()) {
			currentPlayer.score.textContent++;
			return true;
		};
		return false;
	}

	const endRound = function (results) {
		Transitions.removeSwitchTransitions();
		ProcessAnnouncements.addElement();
		announceResults(results);
		GameBoard.disableBoard();
	}

	const announceResults = function (results) {
		const announcement = document.querySelector('.announcement');
		if (results.playerWon) {
			announcement.innerHTML = `<span data-player="${currentPlayer.number}" class="emphasis">Player ${currentPlayer.number}</span> won!`;
		}
		else {
			announcement.textContent = 'Tied game!';
		}
	}

	const switchPlayers = function () {
		if (currentPlayer === player1) {
			currentPlayer = player2;
			lastPlayer = player1;
		}
		else if (currentPlayer === player2) {
			currentPlayer = player1;
			lastPlayer = player2;
		}
	}

	const resetGame = function () {
		numberTurn = 0;
		resetPlayers();
		Transitions.doSwitchTransitions();
		GameBoard.resetBoard();
		GameBoard.displayBoard();
		GameBoard.enableBoard();
		ProcessAnnouncements.removeElement();
	}

	const resetPlayers = function () {
		currentPlayer = player1;
		lastPlayer = player2;
	}

	const getCurrentPlayer = () => currentPlayer;

	const getLastPlayer = () => lastPlayer;

	return {
		setUpPlayTurn,
		resetGame,
		getCurrentPlayer,
		getLastPlayer,
		player1,
		player2,
	}
})();

const WinLogic = (function () {
	const isRowWin = function (row) {
		for (let col = 0; col < 2; ++col) {
			if (GameBoard.board[row][col] !== GameBoard.board[row][col + 1]) {
				return false;
			}
		}
		return true;
	}

	const isColumnWin = function (col) {
		for (let row = 0; row < 2; ++row) {
			if (GameBoard.board[row][col] !== GameBoard.board[row + 1][col]) {
				return false;
			}
		}
		return true;
	}

	const isDiagonalWin = function () {
		return isDownDiagonalWin() || isUpDiagonalWin();
	}

	const isDownDiagonalWin = function () {
		for (let i = 0; i < 2; ++i) {
			if (GameBoard.board[i][i] === 0) {
				return false;
			} 
			if (GameBoard.board[i][i] !== GameBoard.board[i + 1][i + 1]) {
				return false;
			}
		}
		return true;
	}

	const isUpDiagonalWin = function () {
		for (let i = 0; i < 2; ++i) {
			if (GameBoard.board[2 - i][i] === 0) {
				return false;
			} 
			if (GameBoard.board[2 - i][i] !== GameBoard.board[1 - i][i + 1]) {
				return false;
			}
		}
		return true;
	}

	return {
		isRowWin,
		isColumnWin,
		isDiagonalWin
	}
})();

ResetActions.addResetGameListener();
ResetActions.addResetScoreListener();
GameBoard.displayBoard();
GamePlay.setUpPlayTurn();
Transitions.doSwitchTransitions();