const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const player = { x: 100, y: 100, size: 30, speed: 5 };
const goal = { x: 400, y: 300, size: 30 };

function drawPlayer() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x, player.y, player.size, player.size);
}

function drawGoal() {
    ctx.fillStyle = 'green';
    ctx.fillRect(goal.x, goal.y, goal.size, goal.size);
}

function checkWin() {
    if (
        player.x < goal.x + goal.size &&
        player.x + player.size > goal.x &&
        player.y < goal.y + goal.size &&
        player.y + player.size > goal.y
    ) {
        alert('You Win! 🎉');
        resetGame();
    }
}

function resetGame() {
    player.x = 100;
    player.y = 100;
}

function movePlayer(direction) {
    if (direction === 'up') player.y -= player.speed;
    if (direction === 'down') player.y += player.speed;
    if (direction === 'left') player.x -= player.speed;
    if (direction === 'right') player.x += player.speed;
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawGoal();
    checkWin();
    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') movePlayer('up');
    if (event.key === 'ArrowDown') movePlayer('down');
    if (event.key === 'ArrowLeft') movePlayer('left');
    if (event.key === 'ArrowRight') movePlayer('right');
});

gameLoop();