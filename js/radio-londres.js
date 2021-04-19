var eiffelTower = new Image();
var gameLogo = new Image();
var opacity = 0.0;
const ctx = document.getElementById("game-canvas").getContext("2d");
var startButton = document.getElementById("start-button");
var canvasButton = document.getElementById("canvas-button");

startButton.addEventListener("click", function() {
    startButton.style.visibility = "hidden";
    init ();
});

canvasButton.addEventListener("click", function() {
    canvasButton.style.visibility = "hidden";
});

function init () {
    eiffelTower.src = "../projects/radio-londres/images/eiffel-tower.jpg";
    gameLogo.src = "../projects/radio-londres/images/game-logo.png";
    playAudio ("../projects/radio-londres/audio/Beethoven's-5th-symphony.mp3");
    eiffelTower.onload = window.requestAnimationFrame(splashScreenPart1);
}

function playAudio (src) {
    var audio = new Audio(src);
    audio.loop = true;
    audio.play();
}

function splashScreenPart1 () {
    ctx.clearRect(0, 0, 1000, 600); // Clears canvas

    ctx.globalAlpha = 1;
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, 1000, 600);

    ctx.globalAlpha = opacity;
    ctx.drawImage(eiffelTower, -1, 0, 1010, 600);
    opacity += 0.01;
    if (opacity <= 1.0) {
        window.setTimeout(splashScreenPart1, 45);
    }
    else {
        opacity = 0;
        window.requestAnimationFrame(splashScreenPart2);
    }
}

function splashScreenPart2 () {
    ctx.clearRect(0, 0, 1000, 600); // Clears canvas

    ctx.globalAlpha = 1;
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, 1000, 600);
    ctx.drawImage(eiffelTower, -1, 0, 1010, 600);

    ctx.globalAlpha = opacity;
    ctx.drawImage(gameLogo, 85, 240, 825, 125);
    opacity += 0.01;
    if (opacity <= 1.0) {
        window.setTimeout(splashScreenPart2, 35);
    }
    else {
        ctx.font = "100 20px Lucida Console";
        ctx.fillStyle = "#FFF";
        setTimeout(function () { ctx.fillText("Click anywhere to continue.", 330, 380); canvasButton.style.visibility = "visible"; }, 1000);
    }
}

function mainMenu () {

}

// Splash screen of the game
/*eiffelTower.onload = function () {
    var ctx = document.getElementById("game-canvas").getContext("2d");
    ctx.drawImage(eiffelTower, -1, 0, 1010, 600);
    ctx.font = "100 110px Lucida Console";
    ctx.fillStyle = "#C00";
    ctx.fillText("RADIO LONDRES", 70, 330);

    ctx.font = "100 20px Lucida Console";
    ctx.fillStyle = "#FFF";
    ctx.fillText("Press anywhere to continue.", 330, 380);
}*/
