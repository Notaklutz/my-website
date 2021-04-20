var eiffelTower = new Image();
var gameLogo = new Image();
var opacity = 0.0;
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
var startButton = document.getElementById("start-button");
var currentScreen = "splashScreen";
var audio = new Audio();
var audioOn = true;
var clickHandler;
var mainMenu;
var splashButton = document.getElementById("splash-button");
var menuFootage = document.getElementById("menu-footage");
var playButton = document.getElementById("play-button");
var historyButton = document.getElementById("history-button");
var audioButton = document.getElementById("audio-button");
var creditsButton = document.getElementById("credits-button");
var menuButtons = document.getElementsByClassName("menu-buttons");

startButton.addEventListener("click", function() {
    startButton.style.visibility = "hidden";
    init();
});

function init () {
    eiffelTower.src = "../projects/radio-londres/images/eiffel-tower.jpg";
    gameLogo.src = "../projects/radio-londres/images/game-logo.png";
    playLoopedAudio ("../projects/radio-londres/audio/Beethoven's-5th-symphony.mp3");
    eiffelTower.onload = window.requestAnimationFrame(splashScreenPart1);
}

// General function for playing looped audio
function playLoopedAudio (src) {
    audio.setAttribute("src", src);
    audio.load();
    audio.loop = true;
    audio.play();
}

// First part of the splash screen
async function splashScreenPart1 () {
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

// Second part of the splash screen
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
        setTimeout(clickToContinue().then(menuTransition, errorMessage), 1000);
    }
}

async function clickToContinue () {
    ctx.fillText("Click anywhere to continue.", 330, 380);
}

function menuTransition () {
    splashButton.style.visibility = "visible";
    splashButton.addEventListener("click", function () {
        splashButton.style.visibility = "hidden";
        audio.pause();
        menuFootage.style.visibility = "visible";
        setTimeout(function () { playLoopedAudio("../projects/radio-londres/audio/La-Marseillaise.mp3"); menuFootage.play(); }, 0);
        mainMenu = new MainMenu();
    });
}

function errorMessage () {
    alert("An error has occurred. Please refresh the page.");
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
