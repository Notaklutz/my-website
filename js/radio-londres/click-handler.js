class ClickHandler {

    #clickContext;
    canvasLeft = canvas.offsetLeft + canvas.clientLeft;
    canvasTop = canvas.offsetTop + canvas.clientTop;

    constructor (eC) {
        this.#clickContext = eC;

        if (this.#clickContext === "splashScreen") {
            canvas.focus();
            canvas.addEventListener("click", this.splashScreenEvent, true);
        }
    }

    splashScreenEvent () {
        canvas.removeEventListener("click", this.splashScreenEvent, true);
        mainMenu = new MainMenu();
    }
}