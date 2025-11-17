function playGuessingGame() {
  const secretNumber = Math.floor(Math.random() * 50) + 1;
  const userGuess = parseInt(document.getElementById("guess").value);

  let message = "";

  if (userGuess === secretNumber) {
    message = `🎉 Correct guess! The secret number was ${secretNumber}.`;
  } else {
    const difference = Math.abs(userGuess - secretNumber);

    if (difference <= 3) {
      message = `😯 Very close! You guessed ${userGuess}, but the secret was ${secretNumber}.`;
    } else if (userGuess > secretNumber) {
      message = `📈 Too high! Your guess: ${userGuess}.`;
    } else {
      message = `📉 Too low! Your guess: ${userGuess}.`;
    }
  }

  document.getElementById("result").textContent = message;
}
