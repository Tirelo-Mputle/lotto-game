const userInput = document.querySelector("#player_guess");
const guessBtn = document.querySelector(".guess_btn");

const userInfo = {
  userNumberGuess: null,
};
const gameData = {
  lottoNumbers: [],
  isGameOver: false,
  isWinner: null,
};
