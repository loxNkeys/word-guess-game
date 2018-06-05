// Create an array of words
var words = [
    "cat",
    "dog",
    "starcraft",
    "fender",
    "bass",
];

// Pick a random word
var word = words[Math.floor(Math.random() * words.length)];

// Set up the answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_"
}

var remaigningLetters = word.length;

// The game loop
while (remaigningLetters > 0) {
    // Show the player their progress
    alert(answerArray.join(" "));

    // Get a guess from the player
    var guess = prompt("Guess a letter or click 'Cancel' to stop.");

    if (guess == null) {
        // Exit the game loop
        break;
    } else {
        // Update the game state with the guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remaigningLetters--;
            }
        }
    }
    // End the game loop
}
// Show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good job! The answer is " + word);