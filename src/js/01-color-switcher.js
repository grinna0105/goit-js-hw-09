const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
const bodyEl = document.querySelector("body");

let timerId = null;
stopBtn.setAttribute('disabled', true);

startBtn.addEventListener("click", onClickStartButton);
stopBtn.addEventListener("click", onClickStopButton);

function onClickStartButton () {
    timerId = setInterval(changeColor, 1000);
    onBlockStartBtn();
    
     
    function changeColor() {
        const color = getRandomHexColor();
        bodyEl.style.backgroundColor = color;
        console.log(color);
    }

    function onBlockStartBtn() {
        stopBtn.removeAttribute('disabled');
        startBtn.setAttribute('disabled', true);
    }
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickStopButton() {
    clearInterval(timerId);
    onBlockStopBtn();

    function onBlockStopBtn() {
        stopBtn.setAttribute('disabled', true);
        startBtn.removeAttribute('disabled');
    }
};

