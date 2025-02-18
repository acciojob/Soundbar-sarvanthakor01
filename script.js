//your JS code here. If required.
// Get all buttons with the class 'btn' and the stop button
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');

let currentAudio = null;

// Function to play sound
function playSound(sound) {
    // Stop the currently playing audio if there is one
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset to the start
    }

    // Create a new audio object and play it
    currentAudio = new Audio(sound);
    currentAudio.play();
}

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const sound = button.getAttribute('data-sound');
        playSound(sound);
    });
});

// Add event listener to the stop button
stopButton.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset to the start
    }
});