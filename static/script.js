var randomNumber = Math.floor(Math.random() * 100) + 1;
var guessInput = document.getElementById("guess");
var checkBtn = document.getElementById("checkBtn");
var result = document.getElementById("result");

checkBtn.addEventListener("click", function() {
	var guess = parseInt(guessInput.value);
	if (isNaN(guess) || guess < 1 || guess > 100) {
		result.innerHTML = "Please enter a valid number between 1 and 100.";
	} else if (guess === randomNumber) {
		result.innerHTML = "Congratulations! You guessed the correct number!";
	} else if (guess < randomNumber) {
		result.innerHTML = "The number is higher than your guess. Try again.";
	} else {
		result.innerHTML = "The number is lower than your guess. Try again.";
	}
});
