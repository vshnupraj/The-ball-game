

const circle = document.getElementById("circle");
const scoreElement = document.getElementById("scoreValue");
let score = 0;
let speed = 2000; // Initial speed (2 seconds)
let isPaused = false;

// Function to update the circle's position
function updateCirclePosition() {
    if (!isPaused) {
        const randomLeft = Math.random() * 100;
        const randomTop = Math.random() * 100;
        circle.style.left = `calc(${randomLeft}% - 25px)`;
        circle.style.top = `calc(${randomTop}% - 25px)`;
    }
}

// Function to handle when the circle is clicked
function handleCircleClick() {
    if (!isPaused) {
    score++;
    scoreElement.textContent = score;
    updateCirclePosition();
    }
}

// Add a click event listener to the circle
circle.addEventListener("click", handleCircleClick);

// Initial position for the circle
updateCirclePosition();

// Increase speed every minute
setInterval(() => {
    speed /= 2;
    clearInterval(intervalId);
    intervalId = setInterval(updateCirclePosition, speed);
}, 60000); // 1 minute

// Start the game loop
let intervalId = setInterval(updateCirclePosition, speed);

// Function to toggle game pause/play
function toggleGame() {
    isPaused = !isPaused;
    document.querySelector("button").textContent = isPaused ? "Play" : "Pause";
}
// Function to restart the game
function restartGame() {
    score = 0;
    speed = 2000; // Reset speed
    scoreElement.textContent = score;
    updateCirclePosition();
    clearInterval(intervalId);
    intervalId = setInterval(updateCirclePosition, speed);
}