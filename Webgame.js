'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 0; // Starting from 0 so score grows when you guess wrong
let highscore = 0;

// A function to display messages in the UI
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

// 'Check!' button event listener
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // If there is no input
    if (!guess) {
        displayMessage('⛔️ No number!');

        // If the player guesses correctly
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        // Change the background color when answered correct
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // Update the highscore when the current score is higher
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // Clear  input field
        document.querySelector('.guess').value = '';

        // If the guess is wrong
    } else {
        score++; // Increase the score by 1 for every incorrect guess
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        document.querySelector('.score').textContent = score;

        // Clear the input field after a wrong guess
        document.querySelector('.guess').value = '';
    }
});

// 'Again!' button event listener to reset the game
document.querySelector('.again').addEventListener('click', function () {
    score = 0; // Reset the score to 0 when the game restarts
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // Reset UI elements to their initial state
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    // Reset background and number styles
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

// script.js

// Get the toggle button
const toggleButton = document.getElementById('toggle-mode');

// Check if there's a saved theme in localStorage
const currentTheme = localStorage.getItem('theme');

// Apply the saved theme if it exists
if (currentTheme) {
    document.body.classList.add(currentTheme);
}

// Add an event listener to the toggle button
toggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    // Save the user's preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', '');
    }
});
