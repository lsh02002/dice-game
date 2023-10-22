//const newGameButton = document.querySelector(".main-new-game");
const mainNewGameButton = document.querySelector(".main-new-game");
const diceRollButton = document.querySelector(".main-roll-dice");
const dicePic = document.querySelector(".main-dice-pic");

const scorePlayer1 = document.querySelector(".main-player1-score");
const scorePlayer2 = document.querySelector(".main-player2-score");

let randomNUmber;

let player1Score = 0;
let player2Score = 0;

let currentPlayer = 0;

function diceRollButtonHandler() {
  randomNUmber = Math.floor(Math.random() * 5) + 1;
  dicePic.innerHTML = `<img src="./img/dice${randomNUmber}.jpg" alt="" />`;

  if (player1Score >= 50) {
    alert("1번 플레이어가 이기셨습니다!!!");
  } else if (player2Score >= 50) {
    alert("2번 플레이어가 이기셨습니다!!!");
  }

  if (randomNUmber <= 2) {
    if (currentPlayer === 0) {
      player1Score = 0;

      scorePlayer1.innerText = player1Score.toString();
      diceRollButton.innerText = "2번 플레이어 버튼 누르기!";
    } else if (currentPlayer === 1) {
      player2Score = 0;

      diceRollButton.innerText = "1번 플레이어 버튼 누르기!";
    }
  } else {
    if (currentPlayer === 0) {
      player1Score += randomNUmber;

      scorePlayer1.innerText = player1Score.toString();
    } else if (currentPlayer === 1) {
      player2Score += randomNUmber;

      scorePlayer2.innerText = player2Score.toString();
    }
  }

  if (randomNUmber <= 2) {
    currentPlayer = 1 - currentPlayer;
  }
}

diceRollButton.addEventListener("click", diceRollButtonHandler);

function mainNewGameButtonHandler() {
  player1Score = 0;
  player2Score = 0;
  currentPlayer = 0;
}

mainNewGameButton.addEventListener("click", mainNewGameButtonHandler);
