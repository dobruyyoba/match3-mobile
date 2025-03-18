const tg = window.Telegram.WebApp;
tg.expand();

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

const hammer1 = new Hammer(button1);
const hammer2 = new Hammer(button2);

hammer1.on('swipeleft', swapButtons);
hammer2.on('swiperight', swapButtons);

function swapButtons() {
    const tempText = button1.textContent;
    button1.textContent = button2.textContent;
    button2.textContent = tempText;
}