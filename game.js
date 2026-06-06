// UZELVS Shadow Revenge
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let currentScene = null;

// ---------- GAME STATE ----------
const Game = {
    scene: "intro",
    player: null,
    enemies: [],
    keys: {}
};

// ---------- INPUT ----------
window.addEventListener("keydown", (e) => {
    Game.keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
    Game.keys[e.key] = false;
});

// ---------- SCENE SWITCH ----------
function changeScene(scene) {
    currentScene = scene;
    if (currentScene.init) currentScene.init();
}

// ---------- BASIC LOOP ----------
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (currentScene && currentScene.update) {
        currentScene.update(Game, ctx);
    }

    if (currentScene && currentScene.render) {
        currentScene.render(Game, ctx);
    }

    requestAnimationFrame(gameLoop);
}

// START GAME
changeScene(IntroScene); // from intro.js
gameLoop();
