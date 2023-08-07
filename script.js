const checkGuess = () => {
  const animalName = 'cat';
  const guess = document.getElementById('guess').value.toLowerCase();
  const resultElement = document.getElementById('result');

  if (guess === animalName) {
    resultElement.textContent =
      "Congratulations! You guessed correctly. It's a cat!";
  } else {
    resultElement.textContent =
      "Oops! That's not the correct answer. It's a cat!";
  }
};

const button = document
  .getElementById('submit')
  .addEventListener('click', checkGuess);
