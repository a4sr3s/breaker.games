document.addEventListener('DOMContentLoaded', () => {
    const emojiSequence = document.getElementById('emojiSequence');
    const emojiHint = document.getElementById('emojiHint');
    const wordGuess = document.getElementById('wordGuess');
    const guessButton = document.getElementById('guessButton');
    const result = document.getElementById('result');

    // Define emoji sequences with corresponding words and hints
    const gameData = [
        { emojis: "🌞🌹", word: "sunflower", hint: "A type of flower" },
        { emojis: "🔥👊", word: "firefighter", hint: "A rescue profession" },
        { emojis: "🌧️🐱🐶 ", word: "Raining Cats and Dogs", hint: "A weather forecast" },
        { emojis: "🍕🎉 ", word: "Pizza Party", hint: "What we get at work" },
        { emojis: "🍦☀️", word: "Ice Cream", hint: "A cold treat on a hot day" },
        { emojis: "📚🐛", word: "Bookworm", hint: "Someone who loves to read" },
        { emojis: "🎂🎈", word: "Birthday Party", hint: "A celebration of the day you were born" },
        { emojis: "👻🎃", word: "Halloween", hint: "A spooky holiday" },
        { emojis: "🎅🎄", word: "Christmas", hint: "A festive holiday in December" },
        { emojis: "🦃🍽️", word: "Thanksgiving", hint: "A holiday for giving thanks and eating" },
        { emojis: "🚀🌌", word: "Space Exploration", hint: "Discovering the cosmos" }
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
        const correctWord = gameData[currentIndex - 1].word.toLowerCase().trim(); // Trim and convert to lowercase
    
        if (userGuess === correctWord) {
            result.textContent = "Correct! 😀";
            result.classList.remove('text-red-500');
            result.classList.add('text-green-500');
    
            // Trigger confetti explosion
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
    
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
