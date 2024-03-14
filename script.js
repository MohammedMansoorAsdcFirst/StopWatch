let display = document.querySelector('.timerDisplay');
let start = document.querySelector('#startBtn');
let stop = document.querySelector('#stopBtn');
let reset = document.querySelector('#resetBtn');

let mSec = 0;
let Sec = 0;
let min = 0;
let hr = 0;

let timerId = null;

start.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stop.addEventListener('click', function () {
    clearInterval(timerId);
});

reset.addEventListener('click', function () {
    clearInterval(timerId);
    mSec = Sec = min = hr = 0;
    display.innerHTML = `00 : 00 : 00 : 00`;
});

function startTimer() {
    mSec++;
    if (mSec === 100) {
        mSec = 0;
        Sec++;
        if (Sec === 60) {
            Sec = 0;
            min++;
            if (min === 60) {
                min = 0;
                hr++;
            }
        }
    }

    let mSecString = mSec < 10 ? '0' + mSec : mSec;
    let secString = Sec < 10 ? '0' + Sec : Sec;
    let minString = min < 10 ? '0' + min : min;
    let hrString = hr < 10 ? '0' + hr : hr;

    display.innerHTML = `${hrString} : ${minString} : ${secString} : ${mSecString}`;
}
