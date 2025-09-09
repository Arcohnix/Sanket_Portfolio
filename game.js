const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");
const resetBtn = document.getElementById("resetBtn");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Guess Check
guessBtn.addEventListener("click", () => {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "⚠️ Enter a valid number between 1 and 100!";
    message.style.color = "orange";
    return;
  }

  attempts++;

  if (userGuess === randomNumber) {
    message.textContent = `🎉 Correct! The number was ${randomNumber}.`;
    message.style.color = "#0f0";
    guessBtn.style.display = "none";
    resetBtn.style.display = "inline-block";
  } else if (userGuess < randomNumber) {
    message.textContent = "📉 Too low! Try again.";
    message.style.color = "#ffb400";
  } else {
    message.textContent = "📈 Too high! Try again.";
    message.style.color = "#ff4c4c";
  }

  attemptsText.textContent = `Attempts: ${attempts}`;
  guessInput.value = "";
});

// Reset Game
resetBtn.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  guessInput.value = "";
  message.textContent = "";
  attemptsText.textContent = "";
  resetBtn.style.display = "none";
  guessBtn.style.display = "inline-block";
});
