document.addEventListener('DOMContentLoaded', () => {
    const emojiSequence = document.getElementById('emojiSequence');
    const emojiHint = document.getElementById('emojiHint');
    const wordGuess = document.getElementById('wordGuess');
    const guessButton = document.getElementById('guessButton');
    const result = document.getElementById('result');

    // Define emoji sequences with corresponding words and hints
    const gameData = [
        { emojis: "🌞🌷", word: "sunflower", hint: "A type of flower" },
        { emojis: "🔥👊", word: "firefighter", hint: "A rescue profession" },
        // More emoji sequences can be added here
    ];

    let currentIndex = 0; // Keep track of the current emoji sequence

    function setRandomEmojiSequence() {
        // Ensure the game cycles through emoji sequences without repeating
        if (currentIndex >= gameData.length) {
            currentIndex = 0; // Reset to the beginning if we've reached the end
        }

        const sequenceData = gameData[currentIndex++];
        emojiSequence.textContent = sequenceData.emojis;
        emojiHint.textContent = `Hint: ${sequenceData.hint}`;
    }

    guessButton.addEventListener('click', () => {
        const userGuess = wordGuess.value.toLowerCase().trim();
        const correctWord = gameData[currentIndex - 1].word; // Get the word for the current emoji sequence

        if (userGuess === correctWord) {
            result.textContent = "Correct! 😀";
            result.classList.remove('text-red-500');
            result.classList.add('text-green-500');
            setTimeout(() => {
                setRandomEmojiSequence(); // Display the next emoji sequence
                result.textContent = ''; // Optionally clear the result message
            }, 1000); // Wait a bit before showing the next sequence
        } else {
            result.textContent = "Oops! Try again. 😕";
            result.classList.remove('text-green-500');
            result.classList.add('text-red-500');
        }

        wordGuess.value = ''; // Clear the input field after each guess
    });

    setRandomEmojiSequence(); // Initialize game with the first emoji sequence
});
