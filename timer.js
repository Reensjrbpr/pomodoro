let sessTime = 25;
let breakTime = 5;

const sess = document.querySelector('#session');
const brk = document.querySelector('#break');

sess.textContent = sessTime;
brk.textContent = breakTime;

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
    sessTime--;
    sess.textContent = sessTime;

    timer.textContent = `${sessTime}:00`;
});