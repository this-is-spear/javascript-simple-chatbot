let timerId;
let time = 0;
const stopwatch = document.getElementById("time");
let  min, sec, mil;


function printTime() {
    time++;
    stopwatch.innerText = getTimeFormatString();
    clearTimeout(timerId);
}

function startClock() {
    printTime();
    timerId = setTimeout(startClock, 10);
}

function stopClock() {
    if (timerId != null) {
        clearTimeout(timerId);
    }
}

function resetClock() {
    stopClock()
    stopwatch.innerText = "00:00:00";
    time = 0;
}

function getTimeFormatString() {
    min = Math.floor(time / (60 * 60));
    sec = Math.floor((time - (min * 60 * 60)) / 100);
    mil = time % 100;

    return String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0') + ":" + String(mil).padStart(2, '0');
}