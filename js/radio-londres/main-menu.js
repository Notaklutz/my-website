class MainMenu {

    constructor () {

        ctx.clearRect(0, 0, 1000, 600); // Clears canvas

        ctx.fillStyle = "#0d0e09";
        ctx.fillRect(375, 125, 250, 400); // Main Menu Box

        ctx.strokeStyle = "#28241f";
        ctx.lineWidth = "10";
        ctx.strokeRect(375, 125, 250, 400); // Main Menu border

        ctx.fillStyle = "#242923"
        for (let i = 0; i < 3; i++) {
            ctx.fillRect(385, 135 + 45*i, 230, 40); // play game, historical info, and audio setting button
        }

        ctx.fillRect(385, 475, 230, 40); // credits button

        ctx.fillStyle = "#b7b9b4";
        ctx.font = "400 23px Verdana";
        ctx.fillText("PLAY GAME", 430, 163, 230, 40);
        ctx.fillText("HISTORICAL INFO", 395, 208, 230, 40);

        if (audioOn === true) {
            ctx.fillText("AUDIO: ON", 430, 253, 230, 40);
        }
        else if (audioOn === false) {
            ctx.fillText("AUDIO: OFF", 430, 253, 230, 40);
        }

        ctx.fillText("CREDITS", 445, 503, 230, 40)

        ctx.drawImage(gameLogo, 85, 0, 825, 125);

        for (let i = 0; i < menuButtons.length; i++) {
            menuButtons[i].style.visibility = "visible";
        }

        playButton.addEventListener("click", function () { alert("You should be playing the game now."); });
        historyButton.addEventListener("click", function () { alert("You should see historical info now."); });

        audioButton.addEventListener("click", function () {

            if (audioOn === true) {
                audioOn = false;
                audio.pause();
                ctx.fillStyle = "#242923";
                ctx.fillText("AUDIO: ON", 430, 253, 230, 40); // Cover AUDIO: ON
                ctx.fillText("AUDIO: ON", 430, 253, 230, 40); // Cover AUDIO: ON
                ctx.fillText("AUDIO: ON", 430, 253, 230, 40); // Cover AUDIO: ON
                ctx.fillStyle = "#b7b9b4";
                ctx.fillText("AUDIO: OFF", 430, 253, 230, 40); // Change to AUDIO: OFF
            }
            else if (audioOn === false) {
                audioOn = true;
                audio.play();
                ctx.fillStyle = "#242923";
                ctx.fillText("AUDIO: OFF", 430, 253, 230, 40); // Cover AUDIO: OFF
                ctx.fillText("AUDIO: OFF", 430, 253, 230, 40); // Cover AUDIO: OFF
                ctx.fillText("AUDIO: OFF", 430, 253, 230, 40); // Cover AUDIO: OFF
                ctx.fillStyle = "#b7b9b4";
                ctx.fillText("AUDIO: ON", 430, 253, 230, 40); // Change to AUDIO: ON
            }

        });

        creditsButton.addEventListener("click", function () { alert("You should see credits now."); });

    }
}