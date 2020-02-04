let sessTime = 25;
let breakTime = 5;

const sess = document.querySelector('#session');
const brk = document.querySelector('#break');

sess.textContent = sessTime;
brk.textContent = breakTime;

//Change timer display based on +/- being clicked
const sessAdd = document.querySelector('#sessAdd');

sessAdd.addEventListener('click', () => {
    const sess = document.querySelector('#session');
    const timer = document.querySelector('#timer');
    sessTime++;
    sess.textContent = sessTime;

    timer.textContent = `${sessTime}:00`;
});

const sessMinus = document.querySelector('#sessMinus');

sessMinus.addEventListener('click', () => {
    const sess = document.querySelector('#session');
    const timer = document.querySelector('#timer');
    
    if(sessTime > 0) {
        sessTime--;
        sess.textContent = sessTime;
        timer.textContent = `${sessTime}:00`;
    }
});

//Change break time display based on +/- being clicked
const breakAdd = document.querySelector('#breakAdd');

breakAdd.addEventListener('click', () => {
    const brk = document.querySelector('#break');
    breakTime++;
    brk.textContent = breakTime;
});

const breakMinus = document.querySelector('#breakMinus');

breakMinus.addEventListener('click', () => {
    const brk = document.querySelector('#break');

    if(breakTime > 0) {
        breakTime--;
        brk.textContent = breakTime;
    }
});

//Timer countdown
const play = document.querySelector('#play');

play.addEventListener('click', () => {
    let seconds = 59;

    let time = setInterval(function timer(){
        const timer = document.querySelector('#timer');
        
        if(seconds < 10) timer.textContent = `${sessTime - 1}:0${seconds--}`;
        else timer.textContent = `${sessTime - 1}:${seconds--}`;
        
        if(seconds == -1) {
            sessTime--;
            seconds = 59;
        }

        if(sessTime == -1) clearInterval(time);
    }, 1000);
});

